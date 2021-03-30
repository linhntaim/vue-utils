"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports.JsCookieStoreHandler=void 0;var _cookieStoreHandler=require("./cookie-store-handler");var _jsCookie=_interopRequireDefault(require("js-cookie"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var JsCookieStoreHandler=/*#__PURE__*/function(_CookieStoreHandler){_inherits(JsCookieStoreHandler,_CookieStoreHandler);var _super=_createSuper(JsCookieStoreHandler);function JsCookieStoreHandler(){_classCallCheck(this,JsCookieStoreHandler);return _super.apply(this,arguments)}_createClass(JsCookieStoreHandler,[{key:"setCookieRaw",value:function setCookieRaw(name,data){var expires=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"/";var domain=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sameSite=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"lax";_jsCookie["default"].set(name,data,{expires:expires,path:path,domain:domain,secure:this.secure(),sameSite:sameSite})}},{key:"getCookieRaw",value:function getCookieRaw(name){return _jsCookie["default"].get(name)}},{key:"removeCookieRaw",value:function removeCookieRaw(name){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_jsCookie["default"].remove(name,{path:path,domain:domain})}},{key:"clearCookieRaw",value:function clearCookieRaw(){Object.keys(_jsCookie["default"].get()).forEach(function(name){_jsCookie["default"].remove(name)})}}]);return JsCookieStoreHandler}(_cookieStoreHandler.CookieStoreHandler);exports.JsCookieStoreHandler=JsCookieStoreHandler;
//# sourceMappingURL=js-cookie-store-handler.js.map