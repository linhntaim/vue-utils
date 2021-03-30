"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CookieStore=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var CookieStore=/*#__PURE__*/function(){/**
     *
     * @param {CookieStoreHandler} cookieStoreHandler
     * @param {String} name
     * @param {Object|String} def
     */function CookieStore(cookieStoreHandler,name){var def=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_classCallCheck(this,CookieStore);this.cookieStoreHandler=cookieStoreHandler;this.name=name;this.value=null;this.def=def}_createClass(CookieStore,[{key:"retrieveTransform",value:function retrieveTransform(value){return value}},{key:"storeTransform",value:function storeTransform(value){return value}},{key:"retrieve",value:function retrieve(){if(this.value==null){var value=this.cookieStoreHandler.getJson(this.name);this.value=this.retrieveTransform(value?value:this.def)}return this.value}},{key:"store",value:function store(value,expires){this.value=this.storeTransform(value);this.cookieStoreHandler.setTemporarySettings({expires:expires?expires:new Date(new Date().getTime()+365*24*3600*1000)}).setJson(this.name,this.value);return this.value}},{key:"remove",value:function remove(){this.cookieStoreHandler.remove(this.name);this.value=null}}]);return CookieStore}();exports.CookieStore=CookieStore;
//# sourceMappingURL=cookie-store.js.map