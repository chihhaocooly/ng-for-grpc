// package: AiiiGRPC
// file: proto/action.proto

var proto_action_pb = require("../proto/action_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
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

ToDoService.UnaryCircleInfoData = {
  methodName: "UnaryCircleInfoData",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: proto_action_pb.CircleInfo,
  responseType: google_protobuf_empty_pb.Empty
};

ToDoService.ServerStreamCircleInfoData = {
  methodName: "ServerStreamCircleInfoData",
  service: ToDoService,
  requestStream: false,
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

ToDoServiceClient.prototype.unaryCircleInfoData = function unaryCircleInfoData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.UnaryCircleInfoData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoServiceClient.prototype.serverStreamCircleInfoData = function serverStreamCircleInfoData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ToDoService.ServerStreamCircleInfoData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ToDoServiceClient = ToDoServiceClient;

