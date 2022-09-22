// package: AiiiGRPC
// file: proto/action.proto

import * as proto_action_pb from "../proto/action_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ToDoServiceBidiCircleInfoData = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_action_pb.CircleInfo;
  readonly responseType: typeof proto_action_pb.CircleInfoList;
};

type ToDoServiceUnaryCircleInfoData = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_action_pb.CircleInfo;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ToDoServiceServerStreamCircleInfoData = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_action_pb.CircleInfo;
  readonly responseType: typeof proto_action_pb.CircleInfoList;
};

export class ToDoService {
  static readonly serviceName: string;
  static readonly BidiCircleInfoData: ToDoServiceBidiCircleInfoData;
  static readonly UnaryCircleInfoData: ToDoServiceUnaryCircleInfoData;
  static readonly ServerStreamCircleInfoData: ToDoServiceServerStreamCircleInfoData;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ToDoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  bidiCircleInfoData(metadata?: grpc.Metadata): BidirectionalStream<proto_action_pb.CircleInfo, proto_action_pb.CircleInfoList>;
  unaryCircleInfoData(
    requestMessage: proto_action_pb.CircleInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unaryCircleInfoData(
    requestMessage: proto_action_pb.CircleInfo,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  serverStreamCircleInfoData(requestMessage: proto_action_pb.CircleInfo, metadata?: grpc.Metadata): ResponseStream<proto_action_pb.CircleInfoList>;
}

