"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.DateTimer=void 0;var _settingsHelper=_interopRequireDefault(require("./settings-helper"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var DateTimer=/*#__PURE__*/function(_SettingsHelper){_inherits(DateTimer,_SettingsHelper);var _super=_createSuper(DateTimer);function DateTimer(settings){var _this;var compiler=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,DateTimer);_this=_super.call(this,settings);_this.compiler=compiler;return _this}_createClass(DateTimer,[{key:"withCompiler",value:function withCompiler(compiler){this.compiler=compiler;return this}},{key:"apply",value:function apply(settings){this.longDateFormat="def.datetime.long_date_"+settings.longDateFormat;this.shortDateFormat="def.datetime.short_date_"+settings.shortDateFormat;this.longTimeFormat="def.datetime.long_time_"+settings.longTimeFormat;this.shortTimeFormat="def.datetime.short_time_"+settings.shortTimeFormat;return this}},{key:"getBags",value:function getBags(){return{d:"D",dd:"DD",sd:"ddd",ld:"dddd",m:"M",mm:"MM",sm:"MMM",lm:"MMMM",yy:"YY",yyyy:"YYYY",h:"h",hh:"hh",h2:"H",hh2:"HH",ii:"mm",ss:"ss",lt:"a",ut:"A"}}},{key:"getFormat",value:function getFormat(format){var bags=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return this.compiler?this.compiler(format,bags?bags:this.getBags()):null}},{key:"getLongDateFormat",value:function getLongDateFormat(){var bags=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return this.getFormat(this.longDateFormat,bags)}},{key:"getShortDateFormat",value:function getShortDateFormat(){var bags=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return this.getFormat(this.shortDateFormat,bags)}},{key:"getLongTimeFormat",value:function getLongTimeFormat(){var bags=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return this.getFormat(this.longTimeFormat,bags)}},{key:"getShortTimeFormat",value:function getShortTimeFormat(){var bags=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return this.getFormat(this.shortTimeFormat,bags)}}]);return DateTimer}(_settingsHelper["default"]);exports.DateTimer=DateTimer;
//# sourceMappingURL=date-timer.js.map