(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{247:function(e,t,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("5d230927",content,!0,{sourceMap:!1})},248:function(e,t,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("270eb33e",content,!0,{sourceMap:!1})},250:function(e,t,n){"use strict";n(247)},251:function(e,t,n){var l=n(72)(!1);l.push([e.i,"*[data-v-39c7d0e5]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}",""]),e.exports=l},252:function(e,t,n){"use strict";n(248)},253:function(e,t,n){var l=n(72)(!1);l.push([e.i,".expand-enter-active,.expand-leave-active{transition:height .4s ease-in-out;overflow:hidden}.expand-enter,.expand-leave-to{height:0}",""]),e.exports=l},254:function(e,t,n){"use strict";n.r(t);var l={layout:"components",data:function(){return{show:!0}},methods:{enter:function(element){var e=getComputedStyle(element).width;element.style.width=e,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var t=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height=0,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=t}))},afterEnter:function(element){element.style.height="auto"},leave:function(element){var e=getComputedStyle(element).height;element.style.height=e,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},o=(n(250),n(252),n(14)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-full text-white font-bold border border-white p-1 mt-5"},[n("div",{staticClass:" my-1 rounded-md cursor-pointer",on:{click:function(t){e.show=!e.show}}},[e._t("header")],2),e._v(" "),n("div",{staticClass:"w-full"},[n("transition",{attrs:{name:"expand"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[e.show?n("div",[n("div",{staticClass:"w-full h-full p-4"},e._l(10,(function(i){return n("p",{key:i},[e._v("Hello + "+e._s(i))])})),0)]):e._e()])],1)])}),[],!1,null,"39c7d0e5",null);t.default=component.exports}}]);