"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PermissionBarrierAction=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var PermissionBarrierAction=/*#__PURE__*/function(){function PermissionBarrierAction(){var matchedPermissions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];_classCallCheck(this,PermissionBarrierAction);this.matchedPermissions=matchedPermissions}/**
     *
     * @returns {String[]}
     */_createClass(PermissionBarrierAction,[{key:"getMatchedPermissions",value:function getMatchedPermissions(){return this.matchedPermissions}}]);return PermissionBarrierAction}();exports.PermissionBarrierAction=PermissionBarrierAction;
//# sourceMappingURL=permission-barrier-action.js.map