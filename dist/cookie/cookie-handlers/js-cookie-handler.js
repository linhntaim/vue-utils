"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.JsCookieHandler=void 0;var _jsCookie=_interopRequireDefault(require("js-cookie"));var _cookieHandler=require("./cookie-handler");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var JsCookieHandler=/*#__PURE__*/function(_CookieHandler){_inherits(JsCookieHandler,_CookieHandler);var _super=_createSuper(JsCookieHandler);function JsCookieHandler(){_classCallCheck(this,JsCookieHandler);return _super.apply(this,arguments)}_createClass(JsCookieHandler,[{key:"setRaw",value:function setRaw(name,data){var expires=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"/";var domain=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sameSite=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"lax";_jsCookie["default"].set(name,data,this.buildOptions(expires,path,domain,sameSite))}},{key:"getRaw",value:function getRaw(name){return _jsCookie["default"].get(name)}},{key:"remove",value:function remove(names){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var options=this.buildOptions(null,path,domain);for(var i in names){_jsCookie["default"].remove(names[i],options)}}},{key:"buildOptions",value:function buildOptions(){var expires=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var sameSite=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"lax";return{expires:expires?expires:this.settings.expires,path:path?path:this.settings.path,domain:domain?domain:this.settings.domain,secure:window.location.protocol==="https",sameSite:sameSite?sameSite:this.settings.sameSite}}}]);return JsCookieHandler}(_cookieHandler.CookieHandler);exports.JsCookieHandler=JsCookieHandler;
//# sourceMappingURL=js-cookie-handler.js.map