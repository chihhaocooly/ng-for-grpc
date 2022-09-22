/**
 * @fileoverview gRPC-Web generated client stub for AiiiGRPC
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_action_pb from '../proto/action_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ToDoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorUnaryCircleInfoData = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/UnaryCircleInfoData',
    grpcWeb.MethodType.UNARY,
    proto_action_pb.CircleInfo,
    google_protobuf_empty_pb.Empty,
    (request: proto_action_pb.CircleInfo) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unaryCircleInfoData(
    request: proto_action_pb.CircleInfo,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unaryCircleInfoData(
    request: proto_action_pb.CircleInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unaryCircleInfoData(
    request: proto_action_pb.CircleInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AiiiGRPC.ToDoService/UnaryCircleInfoData',
        request,
        metadata || {},
        this.methodDescriptorUnaryCircleInfoData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AiiiGRPC.ToDoService/UnaryCircleInfoData',
    request,
    metadata || {},
    this.methodDescriptorUnaryCircleInfoData);
  }

  methodDescriptorServerStreamCircleInfoData = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/ServerStreamCircleInfoData',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_action_pb.CircleInfo,
    proto_action_pb.CircleInfoList,
    (request: proto_action_pb.CircleInfo) => {
      return request.serializeBinary();
    },
    proto_action_pb.CircleInfoList.deserializeBinary
  );

  serverStreamCircleInfoData(
    request: proto_action_pb.CircleInfo,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_action_pb.CircleInfoList> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AiiiGRPC.ToDoService/ServerStreamCircleInfoData',
      request,
      metadata || {},
      this.methodDescriptorServerStreamCircleInfoData);
  }

}

