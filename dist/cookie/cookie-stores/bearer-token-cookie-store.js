"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports.BearerTokenCookieStore=void 0;var _cookieStore=require("./cookie-store");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver)}return desc.value}}return _get(target,property,receiver||target)}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break}return object}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var BearerTokenCookieStore=/*#__PURE__*/function(_CookieStore){_inherits(BearerTokenCookieStore,_CookieStore);var _super=_createSuper(BearerTokenCookieStore);function BearerTokenCookieStore(){_classCallCheck(this,BearerTokenCookieStore);return _super.apply(this,arguments)}_createClass(BearerTokenCookieStore,[{key:"retrieveTransform",value:function retrieveTransform(value){var refreshToken=this.cookieStoreHandler.getJson(this.refreshTokenNaming(this.name));if(value){return refreshToken?{accessToken:value.accessToken,tokenType:value.tokenType,expiresIn:value.expiresIn,refreshToken:refreshToken}:{accessToken:value.accessToken,tokenType:value.tokenType,expiresIn:value.expiresIn}}return refreshToken?{refreshToken:refreshToken}:null}},{key:"storeTransform",value:function storeTransform(value){return value?{accessToken:value.accessToken,tokenType:value.tokenType,refreshToken:value.refreshToken,expiresIn:value.expiresIn}:null}},{key:"refreshTokenNaming",value:function refreshTokenNaming(name){return name+"___refresh"}},{key:"setRefreshTokenExpires",value:function setRefreshTokenExpires(expires){this.refreshTokenExpires=expires;return this}},{key:"store",value:function store(value){var transformed=this.storeTransform(value);if(transformed){var expires=new Date(new Date().getTime()+transformed.expiresIn*1000);this.value={accessToken:transformed.accessToken,tokenType:transformed.tokenType,expiresIn:transformed.expiresIn};this.cookieStoreHandler.setTemporarySettings({expires:expires}).setJson(this.name,this.value);this.value.refreshToken=transformed.refreshToken;this.cookieStoreHandler.setTemporarySettings({expires:this.refreshTokenExpires?this.refreshTokenExpires:expires}).setJson(this.refreshTokenNaming(this.name),this.value.refreshToken)}else{this.value=null}return this.value}},{key:"remove",value:function remove(){this.refreshTokenExpires=null;this.cookieStoreHandler.remove(this.refreshTokenNaming(this.name));_get(_getPrototypeOf(BearerTokenCookieStore.prototype),"remove",this).call(this)}}]);return BearerTokenCookieStore}(_cookieStore.CookieStore);exports.BearerTokenCookieStore=BearerTokenCookieStore;
//# sourceMappingURL=bearer-token-cookie-store.js.map