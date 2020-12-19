!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SplitView=t()}(this,(function(){"use strict";var e={name:"SplitView",props:{direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},AInit:{type:String,default:"50%"},AMin:{type:String,default:"none"},AMax:{type:String,default:"none"}},data(){return{isDragging:!1,offset:this.AInit}},computed:{isVertical(){return"vertical"===this.direction},offsetA(){return"string"==typeof this.offset?this.offset:`${this.offset}px`},styleA(){const e=this.isVertical?"Height":"Width";return{[e.toLowerCase()]:this.offsetA,[`min${e}`]:this.AMin,[`max${e}`]:this.AMax}}},methods:{dragStart(){this.isDragging=!0,window.addEventListener("mousemove",this.dragging,{passive:!0}),window.addEventListener("mouseup",this.dragStop,{passive:!0,once:!0})},dragStop(){window.removeEventListener("mousemove",this.dragging),this.isDragging=!1},mouseOffset(e){const{container:t}=this.$refs,i=function(e){let t=0,i=0;for(;e;)t+=e.offsetLeft-e.scrollLeft+e.clientLeft,i+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return{x:t,y:i}}(t);let n;return this.isVertical?(n=e.pageY-i.y,n=Math.min(n,t.offsetHeight)):(n=e.pageX-i.x,n=Math.min(n,t.offsetWidth)),Math.max(n,0)},dragging(e){this.offset=this.mouseOffset(e)}}};function t(e,t,i,n,s,o,r,a,d,l){"boolean"!=typeof r&&(d=a,a=r,r=!1);var c,f="function"==typeof i?i.options:i;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,s&&(f.functional=!0)),n&&(f._scopeId=n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=c):t&&(c=r?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(f.functional){var u=f.render;f.render=function(e,t){return c.call(t),u(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return i}var i,n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return function(e,t){return function(e,t){var s=n?t.media||"default":e,r=o[s]||(o[s]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var d=r.ids.size-1,l=document.createTextNode(a),c=r.element.childNodes;c[d]&&r.element.removeChild(c[d]),c.length?r.element.insertBefore(l,c[d]):r.element.appendChild(l)}}}(e,t)}}var o={};return t({render:function(){var e,t,i,n,s=this,o=s.$createElement,r=s._self._c||o;return r("div",{ref:"container",class:[s.$s.SplitView,(e={},e[s.$s.isVertical]=s.isVertical,e)]},[r("div",{class:[s.$s.SideA,(t={},t[s.$s.isLocked]=s.isDragging,t)],style:s.styleA},[s._t("A")],2),s._v(" "),r("span",{class:[s.$s.Handle,(i={},i[s.$s.isVertical]=s.isVertical,i[s.$s.isHorizontal]=!s.isVertical,i)],on:{mousedown:function(e){return e.preventDefault(),s.dragStart(e)}}}),s._v(" "),r("div",{class:[s.$s.SideB,(n={},n[s.$s.isLocked]=s.isDragging,n)]},[s._t("B")],2)])},staticRenderFns:[]},(function(e){e&&(e("data-v-01749905_0",{source:"",map:void 0,media:void 0}),Object.defineProperty(this,"$s",{value:{SplitView:"src-SplitView-Xotz",isVertical:"src-isVertical-3SaT",Handle:"src-Handle-3Ok-",isHorizontal:"src-isHorizontal-dNcq",SideA:"src-SideA-33mC",isLocked:"src-isLocked-25t7",SideB:"src-SideB-1pOO src-SideA-33mC"}}))}),e,undefined,false,undefined,!1,s,void 0,void 0)}));
