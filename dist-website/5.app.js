webpackJsonp([5],{131:function(t,e,n){function s(t){r||n(201)}var r=!1,a=n(1)(n(203),n(204),s,null,null);a.options.__file="/home/select/Dev/audius/src/components/web-scraper-settings.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] web-scraper-settings.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},201:function(t,e,n){var s=n(202);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("40322818",s,!1)},202:function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,"\n.ws-settings {\n  overflow: hidden;\n  width: 100%;\n  padding: 0.45rem 0;\n}\n.ws-settings input {\n    background: transparent;\n    flex: 1;\n}\n.ws-settings input::-webkit-input-placeholder {\n      color: #C8CCD5;\n}\n.ws-settings input:-moz-placeholder {\n      color: #C8CCD5;\n}\n.ws-settings input::-moz-placeholder {\n      color: #C8CCD5;\n}\n.ws-settings .ws-settings__name {\n    font-size: 1.5rem;\n    height: 4.05rem;\n    width: 100%;\n    padding: 0 0.45rem;\n}\n.ws-settings p, .ws-settings h3 {\n    padding: 0 0.45rem;\n}\n",""])},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},r=n(7),a=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(0);e.default={components:{draggable:a.default},computed:s({},(0,i.mapGetters)(["youtubeApiKeyUI"]),(0,i.mapState)(["webScrapers","currentWebScraper"]),{_urls:{get:function(){return this.currentWebScraper&&this.webScrapers[this.currentWebScraper].settings?this.webScrapers[this.currentWebScraper].settings.urls||[]:[]},set:function(t){this.updateWebScraper({id:this.currentWebScraper,values:{settings:s({},this.webScrapers[this.currentWebScraper].settings,{urls:t})}})}}}),methods:s({},(0,i.mapMutations)(["updateWebScraper","addUrlPattern","renameWebScraper"]),{_addUrlPattern:function(){var t=this.$el.querySelector(".ws-settings .input-list__input");this.addUrlPattern({id:this.currentWebScraper,urlPattern:t.value}),t.value=""},removeUrl:function(t){this.updateWebScraper({id:this.currentWebScraper,values:{settings:s({},this.webScrapers[this.currentWebScraper].settings,{urls:this._urls.filter(function(e){return e.url!==t})})}})}})}},204:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings ws-settings"},[n("input",{staticClass:"ws-settings__name",attrs:{type:"text",placeholder:"... name"},domProps:{value:this.currentWebScraper},on:{input:function(e){t.renameWebScraper({oldName:t.currentWebScraper,newName:e.target.value})}}}),t._v(" "),n("h3",[t._v("URLS")]),t._v(" "),n("draggable",{staticClass:"input-list",attrs:{element:"ul",options:{animation:150,scrollSpeed:20}},model:{value:t._urls,callback:function(e){t._urls=e},expression:"_urls"}},t._l(t._urls,function(e){return n("li",[n("div",[t._v("\n\t\t\t\t"+t._s(e.url)+"\n\t\t\t")]),t._v(" "),n("div",[t._v("\n\t\t\t\t("+t._s(e.numPages)+" Page"+t._s(e.numPages>1?"s":"")+")\n\t\t\t")]),t._v(" "),n("div",{staticClass:"input-list__menu"},[n("span",{staticClass:"wmp-icon-close",attrs:{title:"Delte URL"},on:{click:function(n){t.removeUrl(e.url)}}})])])})),t._v(" "),n("ul",{staticClass:"input-list"},[n("li",[n("input",{staticClass:"input-list__input",attrs:{type:"text",placeholder:"… http://www.example.com/page/[1-100]"}}),t._v(" "),n("span",{staticClass:"wmp-icon-add",on:{click:t._addUrlPattern}})])]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"smaller"},[t._v("\n\t\tPlease install the "),n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/ekpajajepcojhnjmlibfbjmdjcafajoh",target:"_blank"}},[t._v("Audius extension")]),t._v(" for this feature.\n\t")])}]},t.exports.render._withStripped=!0}});