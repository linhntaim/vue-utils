"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StoreHandler=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var StoreHandler=/*#__PURE__*/function(){/**
     *
     * @param {Crypto|null} crypto
     * @param {String[]|String|null} encryptExceptNames
     * @param {String} namePrefix
     * @param {Object|null} store
     */function StoreHandler(){var crypto=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var encryptExceptNames=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var namePrefix=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var store=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;_classCallCheck(this,StoreHandler);this.crypto=crypto;this.encryptExceptNames=encryptExceptNames?typeof encryptExceptNames==="string"?encryptExceptNames.split(","):encryptExceptNames:null;this.store=store?store:{};this.namePrefix=namePrefix}_createClass(StoreHandler,[{key:"shouldEncrypt",value:function shouldEncrypt(name){return!this.encryptExceptNames||!this.encryptExceptNames.includes("*")&&!this.encryptExceptNames.includes(name)}},{key:"naming",value:function naming(name){return this.namePrefix+name}},{key:"beforeNaming",value:function beforeNaming(rawName){return rawName.substr(this.namePrefix.length)}},{key:"isNamed",value:function isNamed(rawName){return rawName.substr(0,this.namePrefix.length)===this.namePrefix}},{key:"forEach",value:function forEach(callback){var _this=this;Object.keys(this.store).forEach(function(rawName){callback(rawName,_this.beforeNaming(),_this)});return this}},{key:"setRaw",value:function setRaw(name,value){this.store[name]=value;return this}},{key:"getRaw",value:function getRaw(name){return name in this.store?this.store[name]:null}},{key:"removeRaw",value:function removeRaw(name){if(name in this.store){delete this.store[name]}return this}},{key:"clearRaw",value:function clearRaw(){this.store={};return this}/**
     *
     * @param {String} name
     * @param {String} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */},{key:"set",value:function set(name,value){var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return this.setRaw(this.naming(name),this.crypto&&(encrypted===null&&this.shouldEncrypt(name)||encrypted===true)?this.crypto.encrypt(value):value)}/**
     *
     * @param {String} name
     * @param {String|null} def
     * @param {boolean|null} encrypted
     * @returns {String|null}
     */},{key:"get",value:function get(name){var def=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var encrypted=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var value=this.getRaw(this.naming(name));return value?this.crypto&&(encrypted===null&&this.shouldEncrypt(name)||encrypted===true)?this.crypto.decrypt(value):value:def}/**
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
     */},{key:"remove",value:function remove(name){return this.removeRaw(this.naming(name))}/**
     *
     * @param {String[]} names
     * @returns {StoreHandler}
     */},{key:"removeMany",value:function removeMany(names){var _this2=this;names.forEach(function(name){return _this2.removeRaw(_this2.naming(name))});return this}/**
     *
     * @returns {StoreHandler}
     */},{key:"clear",value:function clear(){return this.clearRaw()}}]);return StoreHandler}();exports.StoreHandler=StoreHandler;
//# sourceMappingURL=store-handler.js.map