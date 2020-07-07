"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Searcher=void 0;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var Searcher=/*#__PURE__*/function(){function Searcher(){_classCallCheck(this,Searcher);this.defaultParams={};this.params={};this.stateParams={};this.searching=false}/**
     *
     * @param params
     * @param setDefault
     * @returns {Searcher}
     */_createClass(Searcher,[{key:"setParams",value:function setParams(params){var setDefault=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;for(var key in params){this.params[key]=params[key];if(setDefault){this.defaultParams[key]=params[key]}}return this}},{key:"parseQuery",value:function parseQuery(queryParams){for(var key in this.params){if(key in queryParams){this.params[key]=queryParams[key];this.stateParams[key]=queryParams[key]}}this.searching=this.isSearching();return this}},{key:"clear",value:function clear(){for(var key in this.params){this.params[key]=this.defaultParams[key]}return this}},{key:"saveState",value:function saveState(){for(var key in this.params){this.stateParams[key]=this.params[key]}this.searching=this.isSearching();return this}},{key:"isSearching",value:function isSearching(){return this.isSearchingDeep(this.stateParams)}},{key:"isSearchingDeep",value:function isSearchingDeep(params){for(var key in params){if(_typeof(params[key])==="object"){if(params[key].length!==undefined){// is array
if(params[key].length!==0){var arr=params[key];for(var i in arr){if(arr[i]){return true}}}}else{if(this.isSearchingDeep(params[key])){return true}}}else if(params[key]){return true}}return false}}]);return Searcher}();exports.Searcher=Searcher;
//# sourceMappingURL=searcher.js.map