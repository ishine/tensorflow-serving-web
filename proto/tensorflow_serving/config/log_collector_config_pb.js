/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tensorflow.serving.LogCollectorConfig', null, global);

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
proto.tensorflow.serving.LogCollectorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.LogCollectorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.LogCollectorConfig.displayName = 'proto.tensorflow.serving.LogCollectorConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.serving.LogCollectorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.LogCollectorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.LogCollectorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.LogCollectorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filenamePrefix: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tensorflow.serving.LogCollectorConfig}
 */
proto.tensorflow.serving.LogCollectorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.LogCollectorConfig;
  return proto.tensorflow.serving.LogCollectorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.LogCollectorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.LogCollectorConfig}
 */
proto.tensorflow.serving.LogCollectorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilenamePrefix(value);
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
proto.tensorflow.serving.LogCollectorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.LogCollectorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.LogCollectorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.LogCollectorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilenamePrefix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.tensorflow.serving.LogCollectorConfig.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.serving.LogCollectorConfig.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filename_prefix = 2;
 * @return {string}
 */
proto.tensorflow.serving.LogCollectorConfig.prototype.getFilenamePrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.serving.LogCollectorConfig.prototype.setFilenamePrefix = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.tensorflow.serving);
