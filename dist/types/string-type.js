"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports.StringType=void 0;var _primitiveType=require("./primitive-type");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var StringType=/*#__PURE__*/function(_PrimitiveType){_inherits(StringType,_PrimitiveType);var _super=_createSuper(StringType);function StringType(){_classCallCheck(this,StringType);return _super.apply(this,arguments)}_createClass(StringType,[{key:"is",value:function is(value){return typeof value==="string"}},{key:"empty",value:function empty(value){return value===""||value.trim()===""}/**
     *
     * @param {String} haystack
     * @param {String|String[]} needles
     * @returns {boolean}
     */},{key:"startsWith",value:function startsWith(haystack,needles){if(this.is(needles)){needles=[needles]}return needles.some(function(needle){return haystack.indexOf(needle)===0})}/**
     *
     * @param {String} string
     * @param {Number} times
     * @returns {String}
     */},{key:"repeat",value:function repeat(string,times){return string.repeat(times)}/**
     *
     * @param {String} string
     * @param {Number|String} length
     * @param {String} char
     * @param {Boolean} left
     * @returns {String}
     */},{key:"fill",value:function fill(string,length,_char){var left=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var repeated=(this.is(length)?length.length:length)-string.length;return repeated<=0?string:left?this.repeat(_char,repeated)+string:string+this.repeat(_char,repeated)}/**
     *
     * @param {String} string
     * @param {String} chars
     * @returns {String}
     */},{key:"trim",value:function trim(string){var chars=arguments.length>1&&arguments[1]!==undefined?arguments[1]:" \t\n\r\0\x0B";chars=chars.replace(" ","\\s");return string.replace(new RegExp("^["+chars+"]|["+chars+"]$","g"),"")}/**
     *
     * @param {String} string
     * @returns {String}
     */},{key:"ucfirst",value:function ucfirst(string){return string.charAt(0).toUpperCase()+string.substr(1)}/**
     *
     * @param {String} text
     * @returns {String[]}
     */},{key:"lines",value:function lines(text){var _this=this;return text.split(/\r*\n/).map(function(line){line=_this.trim(line);if(line)return line}).filter(function(i){return i})}}]);return StringType}(_primitiveType.PrimitiveType);exports.StringType=StringType;
//# sourceMappingURL=string-type.js.map