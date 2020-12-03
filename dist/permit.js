"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Permit=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var Permit=/*#__PURE__*/function(){function Permit(){_classCallCheck(this,Permit)}_createClass(Permit,[{key:"match",/**
     *
     * @param {Array} matchedPermissions
     * @param {Array} matchingPermissions
     * @returns {boolean}
     */value:function match(matchedPermissions,matchingPermissions){if(!matchedPermissions||!matchedPermissions.length){return true}if(!matchingPermissions||!matchingPermissions.length){return false}return matchedPermissions.some(function(matchedPermission){return matchingPermissions.includes(matchedPermission)})}/**
     *
     * @param {Array} matchedPermissionNames
     * @param {Array} matchingPermissions
     * @returns {{}}
     */},{key:"matchWithNames",value:function matchWithNames(matchedPermissionNames,matchingPermissions){var matchedPermissions={};matchedPermissionNames.forEach(function(permissionName){matchedPermissions[permissionName]=matchingPermissions.includes(permissionName)});return matchedPermissions}}]);return Permit}();exports.Permit=Permit;
//# sourceMappingURL=permit.js.map