"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports.CookieStoreHandler=void 0;var _storeHandler=require("./store-handler");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var CookieStoreHandler=/*#__PURE__*/function(_StoreHandler){_inherits(CookieStoreHandler,_StoreHandler);var _super=_createSuper(CookieStoreHandler);function CookieStoreHandler(settings,crypto){var _this;var encryptExceptNames=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var namePrefix=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";_classCallCheck(this,CookieStoreHandler);_this=_super.call(this,crypto,encryptExceptNames,namePrefix);_this.settings=settings;_this.temporarySettings={};return _this}/**
     *
     * @param temporarySettings
     * @returns {CookieStoreHandler}
     */_createClass(CookieStoreHandler,[{key:"setTemporarySettings",value:function setTemporarySettings(){var temporarySettings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.temporarySettings=temporarySettings;return this}},{key:"retrieveTemporarySettings",value:function retrieveTemporarySettings(){var temporarySettings=this.temporarySettings;this.setTemporarySettings();return temporarySettings}},{key:"setRaw",value:function setRaw(name,value){var settings=this.retrieveTemporarySettings();this.setCookieRaw(name,value,this.expires(settings.expires),this.path(settings.path),this.domain(settings.domain),this.sameSite(settings.sameSite))}},{key:"setCookieRaw",value:function setCookieRaw(name,value){var expires=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"/";var domain=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sameSite=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"lax"}},{key:"getRaw",value:function getRaw(name){return this.getCookieRaw(name)}},{key:"getCookieRaw",value:function getCookieRaw(name){}},{key:"removeRaw",value:function removeRaw(name){var settings=this.retrieveTemporarySettings();this.removeCookieRaw(name,this.path(settings.path),this.domain(settings.domain))}},{key:"removeCookieRaw",value:function removeCookieRaw(name){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null}},{key:"removeMany",value:function removeMany(names){var _this2=this;var settings=this.retrieveTemporarySettings();names.forEach(function(name){_this2.setTemporarySettings(settings);_this2.removeRaw(_this2.naming(name))});return this}},{key:"clearRaw",value:function clearRaw(){this.clearCookieRaw()}},{key:"clearCookieRaw",value:function clearCookieRaw(){}/**
     *
     * @param {Date|Function|null} expires
     * @returns {Date|null}
     */},{key:"expires",value:function expires(){var _expires=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!_expires)_expires=this.settings.expires;return typeof _expires==="function"?_expires():_expires?_expires:null}},{key:"path",value:function path(){var _path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/";return _path?_path:this.settings.path}},{key:"domain",value:function domain(){var _domain=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return _domain?_domain:this.settings.domain}},{key:"sameSite",value:function sameSite(){var _sameSite=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"lax";return _sameSite?_sameSite:this.settings.sameSite}},{key:"secure",value:function secure(){return window.location.protocol==="https"}}]);return CookieStoreHandler}(_storeHandler.StoreHandler);exports.CookieStoreHandler=CookieStoreHandler;
//# sourceMappingURL=cookie-store-handler.js.map