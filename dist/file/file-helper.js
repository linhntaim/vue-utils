"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.FileHelper=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var FileHelper=/*#__PURE__*/function(){function FileHelper(numberFormatter){_classCallCheck(this,FileHelper);this.numberFormatter=numberFormatter;this.fileSizeUnits=["byte","bytes","KB","MB","GB","TB"]}_createClass(FileHelper,[{key:"autoDisplaySize",value:function autoDisplaySize(size){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var unitSeparator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:" ";var unitIndex=0;if(size>1){unitIndex=1;while(size>1024){size/=1024;++unitIndex}}if(callback===true){size=size.toFixed()}else if(typeof callback==="number"){size=size.toFixed(callback)}else if(typeof callback==="function"){size=callback(size)}return size+unitSeparator+this.fileSizeUnits[unitIndex]}},{key:"autoLocalizedDisplaySize",value:function autoLocalizedDisplaySize(size){var _this=this;var unitSeparator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:" ";return this.autoDisplaySize(size,function(size){return size!==parseInt(size.toString())?_this.numberFormatter.formatNumber(size):_this.numberFormatter.formatInt(size)},unitSeparator)}},{key:"checkFile",value:function checkFile(file,_ref){var _ref$allowedExtension=_ref.allowedExtensions,allowedExtensions=_ref$allowedExtension===void 0?null:_ref$allowedExtension,_ref$allowedExtension2=_ref.allowedExtensionsErrorCallback,allowedExtensionsErrorCallback=_ref$allowedExtension2===void 0?null:_ref$allowedExtension2,_ref$maxSize=_ref.maxSize,maxSize=_ref$maxSize===void 0?null:_ref$maxSize,_ref$maxSizeErrorCall=_ref.maxSizeErrorCallback,maxSizeErrorCallback=_ref$maxSizeErrorCall===void 0?null:_ref$maxSizeErrorCall;if(allowedExtensions){if(!file.name.includes(".")||!allowedExtensions.includes(file.name.split(".").pop())){allowedExtensionsErrorCallback&&allowedExtensionsErrorCallback();return false}}if(maxSize){if(file.size>maxSize){maxSizeErrorCallback&&maxSizeErrorCallback();return false}}return true}/**
     *
     * @param {String[]} extensions
     * @param {String} delimiter
     * @returns {String}
     */},{key:"acceptedExtensions",value:function acceptedExtensions(extensions){var delimiter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:", ";return extensions.map(function(extension){return extension.startsWith(".")?extension:"."+extension}).join(delimiter)}}]);return FileHelper}();exports.FileHelper=FileHelper;
//# sourceMappingURL=file-helper.js.map