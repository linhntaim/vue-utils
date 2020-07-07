"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CacheHandler=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var CacheHandler=/*#__PURE__*/function(){function CacheHandler(){_classCallCheck(this,CacheHandler);this.cache={}}_createClass(CacheHandler,[{key:"set",value:function set(name,value){this.cache[name]=value}},{key:"get",value:function get(name){var def=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return name in this.cache?this.cache[name]:def}},{key:"setJson",value:function setJson(name,value){this.set(name,JSON.stringify(value))}},{key:"getJson",value:function getJson(name){var def=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var value=this.get(name);try{return value?JSON.parse(value):def}catch(e){return def}}},{key:"remove",value:function remove(name){if(name in this.cache){delete this.cache[name]}}}]);return CacheHandler}();exports.CacheHandler=CacheHandler;
//# sourceMappingURL=cache-handler.js.map