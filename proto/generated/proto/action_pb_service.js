// package: AiiiGRPC
// file: proto/action.proto

var proto_action_pb = require("../proto/action_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ToDoService = (function () {
  function ToDoService() {}
  ToDoService.serviceName = "AiiiGRPC.ToDoService";
  return ToDoService;
}());

ToDoService.BidiCircleInfoData = {
  methodName: "BidiCircleInfoData",
  service: ToDoService,
  requestStream: true,
  responseStream: true,
  requestType: proto_action_pb.CircleInfo,
  responseType: proto_action_pb.CircleInfoList
};

exports.ToDoService = ToDoService;

function ToDoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ToDoServiceClient.prototype.bidiCircleInfoData = function bidiCircleInfoData(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ToDoService.BidiCircleInfoData, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ToDoServiceClient = ToDoServiceClient;

