"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.FilesUploader=void 0;var _progressHandler=require("../progress-handler");var _fileSplitter=require("./file-splitter");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var FilesUploader=/*#__PURE__*/function(){function FilesUploader(ui,maxUploadFileSize){var maximumChunkSize=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1024*1024*10;var percentageTextTemplate=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"{percent}%";_classCallCheck(this,FilesUploader);this.ui=ui;this.maxUploadFileSize=maxUploadFileSize;this.maximumChunkSize=maximumChunkSize;this.percentageTextTemplate=percentageTextTemplate;this.files=[];this.progress=new _progressHandler.ProgressHandler(this.ui,this.percentageTextTemplate)}/**
     *
     * @param {FileList | array } files
     * @param {function | null} filteredCallback
     * @return {Promise}
     */_createClass(FilesUploader,[{key:"processFiles",value:function processFiles(files){var _this=this;var filteredCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this.files=[];return new Promise(function(resolve){var remaining=files.length;var left=function left(){--remaining;if(remaining===0){resolve()}};_this.progress.increaseLimit(remaining);Array.from(files).forEach(function(file){_this.progress.run(function(progressResolve,progressReject){if(!filteredCallback||filteredCallback(file)){_this.ui.waitRendering(function(){_this.files.push({original:file,progress:new _progressHandler.ProgressHandler(_this.ui,_this.percentageTextTemplate),preview:null});progressResolve();left()});return}progressReject();left()})})})}},{key:"length",value:function length(){return this.files.length}},{key:"clear",value:function clear(){this.files=[];this.progress.reset()}},{key:"processPreview",value:function processPreview(){var _this2=this;return new Promise(function(resolve){var remaining=_this2.files.length;var left=function left(){--remaining;if(remaining===0){resolve()}};_this2.progress.increaseLimit(remaining);_this2.files.forEach(function(file){_this2.progress.run(function(progressResolve,progressReject){_this2.processFilePreview(file,function(){progressResolve();left()},function(){progressReject();left()})})})})}},{key:"processFilePreview",value:function processFilePreview(file){var _this3=this;var doneCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var errorCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var reader=new FileReader;reader.onerror=function(){errorCallback&&errorCallback()};reader.onabort=function(){errorCallback&&errorCallback()};reader.onload=function(e){_this3.ui.waitRendering(function(){file.preview=e.target.result;doneCallback&&doneCallback()})};this.ui.waitRendering(function(){return reader.readAsDataURL(file.original)});return this}},{key:"processChunks",value:function processChunks(everyChunkCallback){var _this4=this;var everyDoneCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var everyErrorCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var everyPromisedBeforeCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var chunkSize=this.maxUploadFileSize/2;if(chunkSize>this.maximumChunkSize){chunkSize=this.maximumChunkSize}return new Promise(function(resolve){var remaining=_this4.files.length;var left=function left(){--remaining;if(remaining===0){resolve()}};_this4.progress.increaseLimit(remaining);_this4.files.forEach(function(file){var run=function run(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_this4.progress.run(function(progressResolve,progressReject){_this4.processFileChunks(file,chunkSize,everyChunkCallback,data).then(function(){progressResolve();everyDoneCallback&&everyDoneCallback(file);left()})["catch"](function(){progressReject();everyErrorCallback&&everyErrorCallback(file);left()})})};everyPromisedBeforeCallback&&everyPromisedBeforeCallback(file).then(run)["catch"](left)||run()})})}},{key:"processFileChunks",value:function processFileChunks(file,chunkSize,chunkCallback){var _this5=this;var data=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var fileSplitter=new _fileSplitter.FileSplitter(file.original,chunkSize);return new Promise(function(resolve,reject){var remaining=fileSplitter.length();var left=function left(){--remaining;if(remaining===0){resolve()}};file.progress.increaseLimit(remaining);fileSplitter.every(function(chunkData,chunkIndex,chunksTotal){file.progress.run(function(progressResolve,progressReject){_this5.ui.waitRendering(function(){chunkCallback(chunkData,chunkIndex,chunksTotal,function(){progressResolve();left()},function(){progressReject();reject()},file,data)})})})})}}]);return FilesUploader}();exports.FilesUploader=FilesUploader;
//# sourceMappingURL=files-uploader.js.map