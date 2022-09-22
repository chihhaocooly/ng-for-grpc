// source: proto/action.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.AiiiGRPC.CircleInfo', null, global);
goog.exportSymbol('proto.AiiiGRPC.CircleInfoList', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.CircleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AiiiGRPC.CircleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.CircleInfo.displayName = 'proto.AiiiGRPC.CircleInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.CircleInfoList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AiiiGRPC.CircleInfoList.repeatedFields_, null);
};
goog.inherits(proto.AiiiGRPC.CircleInfoList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.CircleInfoList.displayName = 'proto.AiiiGRPC.CircleInfoList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.CircleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.CircleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.CircleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.CircleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    colorcode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isfinish: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.CircleInfo}
 */
proto.AiiiGRPC.CircleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.CircleInfo;
  return proto.AiiiGRPC.CircleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.CircleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.CircleInfo}
 */
proto.AiiiGRPC.CircleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColorcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfinish(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.CircleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.CircleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.CircleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.CircleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColorcode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsfinish();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string colorCode = 1;
 * @return {string}
 */
proto.AiiiGRPC.CircleInfo.prototype.getColorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.CircleInfo} returns this
 */
proto.AiiiGRPC.CircleInfo.prototype.setColorcode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 x = 2;
 * @return {number}
 */
proto.AiiiGRPC.CircleInfo.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.AiiiGRPC.CircleInfo} returns this
 */
proto.AiiiGRPC.CircleInfo.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 y = 3;
 * @return {number}
 */
proto.AiiiGRPC.CircleInfo.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AiiiGRPC.CircleInfo} returns this
 */
proto.AiiiGRPC.CircleInfo.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool isFinish = 4;
 * @return {boolean}
 */
proto.AiiiGRPC.CircleInfo.prototype.getIsfinish = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AiiiGRPC.CircleInfo} returns this
 */
proto.AiiiGRPC.CircleInfo.prototype.setIsfinish = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AiiiGRPC.CircleInfoList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.CircleInfoList.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.CircleInfoList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.CircleInfoList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.CircleInfoList.toObject = function(includeInstance, msg) {
  var f, obj = {
    circleinfosList: jspb.Message.toObjectList(msg.getCircleinfosList(),
    proto.AiiiGRPC.CircleInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.CircleInfoList}
 */
proto.AiiiGRPC.CircleInfoList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.CircleInfoList;
  return proto.AiiiGRPC.CircleInfoList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.CircleInfoList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.CircleInfoList}
 */
proto.AiiiGRPC.CircleInfoList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AiiiGRPC.CircleInfo;
      reader.readMessage(value,proto.AiiiGRPC.CircleInfo.deserializeBinaryFromReader);
      msg.addCircleinfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.CircleInfoList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.CircleInfoList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.CircleInfoList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.CircleInfoList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCircleinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.AiiiGRPC.CircleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CircleInfo circleInfos = 1;
 * @return {!Array<!proto.AiiiGRPC.CircleInfo>}
 */
proto.AiiiGRPC.CircleInfoList.prototype.getCircleinfosList = function() {
  return /** @type{!Array<!proto.AiiiGRPC.CircleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AiiiGRPC.CircleInfo, 1));
};


/**
 * @param {!Array<!proto.AiiiGRPC.CircleInfo>} value
 * @return {!proto.AiiiGRPC.CircleInfoList} returns this
*/
proto.AiiiGRPC.CircleInfoList.prototype.setCircleinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AiiiGRPC.CircleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AiiiGRPC.CircleInfo}
 */
proto.AiiiGRPC.CircleInfoList.prototype.addCircleinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AiiiGRPC.CircleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AiiiGRPC.CircleInfoList} returns this
 */
proto.AiiiGRPC.CircleInfoList.prototype.clearCircleinfosList = function() {
  return this.setCircleinfosList([]);
};


goog.object.extend(exports, proto.AiiiGRPC);
