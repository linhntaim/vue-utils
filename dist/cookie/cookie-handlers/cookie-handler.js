"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CookieHandler=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var CookieHandler=/*#__PURE__*/function(){function CookieHandler(crypto,settings){_classCallCheck(this,CookieHandler);this.crypto=crypto;this.settings=settings}_createClass(CookieHandler,[{key:"encrypt",value:function encrypt(data){return this.crypto.encryptJson(data,this.settings.secret)}},{key:"decrypt",value:function decrypt(encryptedData){return encryptedData?this.crypto.decryptJson(encryptedData,this.settings.secret):null}/**
     *
     * @param {String} name
     * @param {Object|String} data
     * @param {Date|Function|null} expires
     * @param {String} path
     * @param {String|null} domain
     * @param {String} sameSite
     */},{key:"set",value:function set(name,data){var expires=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"/";var domain=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sameSite=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"lax";this.setRaw(name,this.encrypt(data),this.expires(expires),this.path(path),this.domain(domain),this.sameSite(sameSite))}/**
     *
     * @param {String} name
     * @param {String} data
     * @param {Date|null} expires
     * @param {String} path
     * @param {String|null} domain
     * @param {String} sameSite
     */},{key:"setRaw",value:function setRaw(name,data){var expires=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"/";var domain=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var sameSite=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"lax"}},{key:"get",value:function get(name){return this.decrypt(this.getRaw(name))}},{key:"getRaw",value:function getRaw(name){return null}},{key:"remove",value:function remove(names){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;this.removeRaw(names,this.path(path),this.domain(domain))}},{key:"removeRaw",value:function removeRaw(names){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/";var domain=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null}/**
     *
     * @param {Date|Function|null} expires
     * @returns {Date|null}
     */},{key:"expires",value:function expires(){var _expires=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!_expires)_expires=this.settings.expires;return typeof _expires==="function"?_expires():_expires?_expires:null}},{key:"path",value:function path(){var _path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/";return _path?_path:this.settings.path}},{key:"domain",value:function domain(){var _domain=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return _domain?_domain:this.settings.domain}},{key:"sameSite",value:function sameSite(){var _sameSite=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"lax";return _sameSite?_sameSite:this.settings.sameSite}},{key:"secure",value:function secure(){return window.location.protocol==="https"}}]);return CookieHandler}();exports.CookieHandler=CookieHandler;
//# sourceMappingURL=cookie-handler.js.map