import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CircleInfo extends jspb.Message {
  getColorcode(): string;
  setColorcode(value: string): CircleInfo;

  getX(): number;
  setX(value: number): CircleInfo;

  getY(): number;
  setY(value: number): CircleInfo;

  getIsfinish(): boolean;
  setIsfinish(value: boolean): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfo): CircleInfo.AsObject;
  static serializeBinaryToWriter(message: CircleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfo;
  static deserializeBinaryFromReader(message: CircleInfo, reader: jspb.BinaryReader): CircleInfo;
}

export namespace CircleInfo {
  export type AsObject = {
    colorcode: string,
    x: number,
    y: number,
    isfinish: boolean,
  }
}

export class CircleInfoList extends jspb.Message {
  getCircleinfosList(): Array<CircleInfo>;
  setCircleinfosList(value: Array<CircleInfo>): CircleInfoList;
  clearCircleinfosList(): CircleInfoList;
  addCircleinfos(value?: CircleInfo, index?: number): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfoList): CircleInfoList.AsObject;
  static serializeBinaryToWriter(message: CircleInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfoList;
  static deserializeBinaryFromReader(message: CircleInfoList, reader: jspb.BinaryReader): CircleInfoList;
}

export namespace CircleInfoList {
  export type AsObject = {
    circleinfosList: Array<CircleInfo.AsObject>,
  }
}

