export class ItemSelection{constructor(){this.allSelected=false;this.all=[];this.selected=[]}/**
     *
     * @param {Array} all
     * @returns {ItemSelection}
     */setAll(all){this.all=all;return this}/**
     *
     * @returns {ItemSelection}
     */reset(){this.allSelected=false;this.selected=[];return this}onAllChanged(){if(this.allSelected){this.selected=this.all}else{this.selected=[]}}onChanged(){this.allSelected=this.selected.length===this.all.length}}
//# sourceMappingURL=item-selection.js.map