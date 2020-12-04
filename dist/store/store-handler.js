"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StoreHandler=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var StoreHandler=/*#__PURE__*/function(){/**
     *
     * @param {Crypto} crypto
     * @param {String[]|String|null} encryptExceptNames
     * @param {String} namePrefix
     */function StoreHandler(crypto){var encryptExceptNames=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var namePrefix=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";_classCallCheck(this,StoreHandler);this.crypto=crypto;this.encryptExceptNames=encryptExceptNames?typeof encryptExceptNames==="string"?[encryptExceptNames]:encryptExceptNames:null;this.store={};this.namePrefix=namePrefix}_createClass(StoreHandler,[{key:"naming",value:function naming(name){return this.namePrefix+name}},{key:"shouldEncrypt",value:function shouldEncrypt(name){return!this.encryptExceptNames||!this.encryptExceptNames.includes("*")&&!this.encryptExceptNames.includes(name)}},{key:"setRaw",value:function setRaw(name,value){this.store[name]=value}},{key:"getRaw",value:function getRaw(name){return name in this.store?this.store[name]:null}},{key:"removeRaw",value:function removeRaw(name){if(name in this.store){delete this.store[name]}}},{key:"clearRaw",value:function clearRaw(){this.store={}}/**
     *
     * @param {String} name
     * @param {String} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */},{key:"set",value:function set(name,value){var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;this.setRaw(this.naming(name),encrypted===null&&this.shouldEncrypt(name)||encrypted===true?this.crypto.encrypt(value):value);return this}/**
     *
     * @param {String} name
     * @param {String|null} def
     * @param {boolean|null} encrypted
     * @returns {String|null}
     */},{key:"get",value:function get(name){var def=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var value=this.getRaw(this.naming(name));return value?encrypted===null&&this.shouldEncrypt(name)||encrypted===true?this.crypto.decrypt(value):value:def}/**
     *
     * @param {String} name
     * @param {Object} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */},{key:"setJson",value:function setJson(name,value){var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return this.set(name,JSON.stringify(value),encrypted)}/**
     *
     * @param {String} name
     * @param {String|null} def
     * @param {boolean|null} encrypted
     * @returns {Object|null}
     */},{key:"getJson",value:function getJson(name){var def=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var value=this.get(name,null,encrypted);try{return value?JSON.parse(value):def}catch(e){return def}}/**
     *
     * @param {String} name
     * @returns {StoreHandler}
     */},{key:"remove",value:function remove(name){this.removeRaw(this.naming(name));return this}/**
     *
     * @param {String[]} names
     * @returns {StoreHandler}
     */},{key:"removeMany",value:function removeMany(names){var _this=this;names.forEach(function(name){return _this.removeRaw(_this.naming(name))});return this}/**
     *
     * @returns {StoreHandler}
     */},{key:"clear",value:function clear(){this.clearRaw();return this}}]);return StoreHandler}();exports.StoreHandler=StoreHandler;
//# sourceMappingURL=store-handler.js.map