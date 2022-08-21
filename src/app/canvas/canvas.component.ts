import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;  

  private ctx!: CanvasRenderingContext2D;

  public clientWeb = new ToDoServiceClient('https://node-grpc-envoy-dnz3lqp74q-de.a.run.app');

  constructor(private eventManager: EventManager) { 

  }

  x=300;
  y=150;
  colorCode:string = '';
  myCircle!: Circle;
  allCircle:Circle[] = [];

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;

    this.eventManager.addEventListener(document.body, 'keydown', (event:any) => {
      if(event.keyCode == 37){
        this.x= this.x -4
        //更新自己的資料
        this.myCircle.x = this.x;
        this.animate();
        //傳送資料
        let circleInfo : CircleInfo = this.createCircleInfo(this.myCircle);
        this.clientWeb.bidiCircleData().write(circleInfo);
      }
      if(event.keyCode == 38 ){
        this.y= this.y -4
        //更新自己的資料
        this.myCircle.y = this.y;
        this.animate();
        //傳送資料
        let circleInfo : CircleInfo = this.createCircleInfo(this.myCircle);
        this.clientWeb.bidiCircleData().write(circleInfo);
      }
      if(event.keyCode == 39){
        this.x= this.x +4
        //更新自己的資料
        this.myCircle.x = this.x;
        this.animate();
        //傳送資料
        let circleInfo : CircleInfo = this.createCircleInfo(this.myCircle);
        this.clientWeb.bidiCircleData().write(circleInfo);
      }
      if(event.keyCode == 40){
        this.y= this.y +4
        //更新自己的資料
        this.myCircle.y = this.y;
        this.animate();
        //傳送資料
        let circleInfo : CircleInfo = this.createCircleInfo(this.myCircle);
        this.clientWeb.bidiCircleData().write(circleInfo);
      }
    });
  }

  createCircleInfo(circle: Circle): CircleInfo {
    return {
      colcoCode:circle.colcoCode,
      x:circle.x,
      y:circle.y
    }
  }

  getColorCode() {
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
       finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
 }

  play()
  {
    //1.創建自己的Circle;
    this.x = 300;
    this.y = 150;
    this.colorCode = this.getColorCode();
    this.myCircle = new Circle(this.ctx,this.colorCode,this.x,this.y);
    this.allCircle.push(this.myCircle);
    this.animate();
    //2.建立起grpc連線
    this.clientWeb.bidiCircleInfoData().on('data', (resultItem) => {
      const result = resultItem.toObject() as CircleInfo;
      this.grpcRevice(result)
      
    });

    //3.傳送初始資料上去
    let circleInfo : CircleInfo = this.createCircleInfo(this.myCircle);
    this.clientWeb.bidiCircleInfoData().write(circleInfo);
  }

  grpcRevice(circleInfo : CircleInfo)
  {
    //檢查是否為自己，自己在本機更新過了
    if(this.colorCode == circleInfo.colcoCode)
    {
      return;
    }
    //檢查此顏色是否存在
    //更新此顏色的座標
    let circle = this.allCircle.find(s=>s.colcoCode == circleInfo.colcoCode);
    if(circle)
    {
      circle.x = circleInfo.x;
      circle.y = circle.y;
    }else
    {
      circle = new Circle(this.ctx,circleInfo.colcoCode,circleInfo.x,circleInfo.y);
    }
    //重新畫圖
   this.animate();
  }


  animate(): void {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.allCircle.forEach(c=>{
      c.draw();
    })
  }
}


export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }
}

export class Circle {
  colcoCode:string;
  x:number;
  y:number;
  constructor(private ctx: CanvasRenderingContext2D,colcoCode:string,x:number,y:number) {
    this.colcoCode = colcoCode;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,10,0,this.degreesToRadians(360),true);
    this.ctx.fillStyle = this.colcoCode;
    this.ctx.fill();
  }

  degreesToRadians(degrees:number)
  {
    return (degrees * Math.PI)/180
  }
}

export interface CircleInfo{
  colcoCode:string;
  x:number;
  y:number;
}