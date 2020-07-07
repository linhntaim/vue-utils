"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ItemSelection=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var ItemSelection=/*#__PURE__*/function(){function ItemSelection(){_classCallCheck(this,ItemSelection);this.allSelected=false;this.all=[];this.selected=[]}/**
     *
     * @param {Array} all
     * @returns {ItemSelection}
     */_createClass(ItemSelection,[{key:"setAll",value:function setAll(all){this.all=all;return this}/**
     *
     * @returns {ItemSelection}
     */},{key:"reset",value:function reset(){this.allSelected=false;this.selected=[];return this}},{key:"onAllChanged",value:function onAllChanged(){if(this.allSelected){this.selected=this.all}else{this.selected=[]}}},{key:"onChanged",value:function onChanged(){this.allSelected=this.selected.length===this.all.length}}]);return ItemSelection}();exports.ItemSelection=ItemSelection;
//# sourceMappingURL=item-selection.js.map