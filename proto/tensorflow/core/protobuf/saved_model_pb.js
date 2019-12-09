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

var tensorflow_core_protobuf_meta_graph_pb = require('../../../tensorflow/core/protobuf/meta_graph_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_meta_graph_pb);
goog.exportSymbol('proto.tensorflow.SavedModel', null, global);

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
proto.tensorflow.SavedModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.SavedModel.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.SavedModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.SavedModel.displayName = 'proto.tensorflow.SavedModel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.SavedModel.repeatedFields_ = [2];



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
proto.tensorflow.SavedModel.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.SavedModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.SavedModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.SavedModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    savedModelSchemaVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    metaGraphsList: jspb.Message.toObjectList(msg.getMetaGraphsList(),
    tensorflow_core_protobuf_meta_graph_pb.MetaGraphDef.toObject, includeInstance)
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
 * @return {!proto.tensorflow.SavedModel}
 */
proto.tensorflow.SavedModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.SavedModel;
  return proto.tensorflow.SavedModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.SavedModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.SavedModel}
 */
proto.tensorflow.SavedModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSavedModelSchemaVersion(value);
      break;
    case 2:
      var value = new tensorflow_core_protobuf_meta_graph_pb.MetaGraphDef;
      reader.readMessage(value,tensorflow_core_protobuf_meta_graph_pb.MetaGraphDef.deserializeBinaryFromReader);
      msg.addMetaGraphs(value);
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
proto.tensorflow.SavedModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.SavedModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.SavedModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.SavedModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSavedModelSchemaVersion();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMetaGraphsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tensorflow_core_protobuf_meta_graph_pb.MetaGraphDef.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 saved_model_schema_version = 1;
 * @return {number}
 */
proto.tensorflow.SavedModel.prototype.getSavedModelSchemaVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tensorflow.SavedModel.prototype.setSavedModelSchemaVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MetaGraphDef meta_graphs = 2;
 * @return {!Array<!proto.tensorflow.MetaGraphDef>}
 */
proto.tensorflow.SavedModel.prototype.getMetaGraphsList = function() {
  return /** @type{!Array<!proto.tensorflow.MetaGraphDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_protobuf_meta_graph_pb.MetaGraphDef, 2));
};


/** @param {!Array<!proto.tensorflow.MetaGraphDef>} value */
proto.tensorflow.SavedModel.prototype.setMetaGraphsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tensorflow.MetaGraphDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.MetaGraphDef}
 */
proto.tensorflow.SavedModel.prototype.addMetaGraphs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tensorflow.MetaGraphDef, opt_index);
};


proto.tensorflow.SavedModel.prototype.clearMetaGraphsList = function() {
  this.setMetaGraphsList([]);
};


goog.object.extend(exports, proto.tensorflow);
