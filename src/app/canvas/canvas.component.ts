import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import {
  CircleInfo,
  CircleInfoList,
} from '../../../proto/generated/proto/action_pb';
import {
  BidirectionalStream,
  ToDoServiceClient,
} from '../../../proto/generated/proto/action_pb_service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  public clientWeb = new ToDoServiceClient(
    'https://node-grpc-envoy-dnz3lqp74q-de.a.run.app'
  );
  callBack!: Function;

  constructor(private eventManager: EventManager) {}

  isPlaying = false;
  stream!: BidirectionalStream<CircleInfo, CircleInfoList>;
  colorCode: string = '';
  myCircle!: Circle;
  allCircle: Circle[] = [];

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
  }

  createCircleInfo(circle: Circle): CircleInfo {
    let circleInfo = new CircleInfo();
    circleInfo.setX(circle.x);
    circleInfo.setY(circle.y);
    circleInfo.setColorcode(circle.colcoCode);
    circleInfo.setIsfinish(false);
    return circleInfo;
  }

  getColorCode() {
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
      finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
  }

  play() {
    this.isPlaying = true;

    this.callBack = this.eventManager.addEventListener(
      document.body,
      'keydown',
      (event: any) => {
        if (event.keyCode == 37) {
          this.myCircle.x = this.myCircle.x - 4;
          //傳送資料
          let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
          this.clientWeb.bidiCircleInfoData().write(circleInfo);
        }
        if (event.keyCode == 38) {
          this.myCircle.y = this.myCircle.y - 4;
          //傳送資料
          let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
          this.clientWeb.bidiCircleInfoData().write(circleInfo);
        }
        if (event.keyCode == 39) {
          this.myCircle.x = this.myCircle.x + 4;
          //傳送資料
          let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
          this.clientWeb.bidiCircleInfoData().write(circleInfo);
        }
        if (event.keyCode == 40) {
          this.myCircle.y = this.myCircle.y + 4;
          //傳送資料
          let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
          this.clientWeb.bidiCircleInfoData().write(circleInfo);
        }
      }
    );

    //0.建立起grpc連線
    this.stream = this.clientWeb
      .bidiCircleInfoData()
      .on('data', (resultItem) => {
        console.log(resultItem);
        const result = resultItem.getCircleinfosList();
        this.grpcRevice(result);
      });

    //1.創建自己的Circle;
    this.colorCode = this.getColorCode();
    this.myCircle = new Circle(this.ctx, this.colorCode, 300, 150);

    //3.傳送初始資料上去
    let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
    this.stream.write(circleInfo);
  }

  grpcRevice(circleInfos: CircleInfo[]) {
    //檢查是否為自己，自己在本機更新過了
    this.allCircle = [];
    circleInfos.forEach((circleInfo) => {
      const circle = new Circle(
        this.ctx,
        circleInfo.getColorcode(),
        circleInfo.getX(),
        circleInfo.getY()
      );
      this.allCircle.push(circle);
    });
    //重新畫圖
    this.animate();
  }

  animate(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.allCircle.forEach((c) => {
      c.draw();
    });
  }

  end(): void {
    this.isPlaying = false;
    let circleInfo: CircleInfo = this.createCircleInfo(this.myCircle);
    circleInfo.setIsfinish(true);
    this.stream.write(circleInfo);
    this.stream.end();
    this.callBack();
  }
}

export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }
}

export class Circle {
  colcoCode: string;
  x: number;
  y: number;
  constructor(
    private ctx: CanvasRenderingContext2D,
    colcoCode: string,
    x: number,
    y: number
  ) {
    this.colcoCode = colcoCode;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, this.degreesToRadians(360), true);
    this.ctx.fillStyle = this.colcoCode;
    this.ctx.fill();
  }

  degreesToRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }
}
