// package: AiiiGRPC
// file: proto/action.proto

import * as jspb from "google-protobuf";

export class CircleInfo extends jspb.Message {
  getColorcode(): string;
  setColorcode(value: string): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getIsfinish(): boolean;
  setIsfinish(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfo): CircleInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearCircleinfosList(): void;
  getCircleinfosList(): Array<CircleInfo>;
  setCircleinfosList(value: Array<CircleInfo>): void;
  addCircleinfos(value?: CircleInfo, index?: number): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfoList): CircleInfoList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CircleInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfoList;
  static deserializeBinaryFromReader(message: CircleInfoList, reader: jspb.BinaryReader): CircleInfoList;
}

export namespace CircleInfoList {
  export type AsObject = {
    circleinfosList: Array<CircleInfo.AsObject>,
  }
}

