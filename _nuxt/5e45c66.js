(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{250:function(e,t,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("e31eaaf2",content,!0,{sourceMap:!1})},251:function(e,t,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("85f0c592",content,!0,{sourceMap:!1})},257:function(e,t,n){"use strict";n(250)},258:function(e,t,n){var l=n(72)(!1);l.push([e.i,"*[data-v-eadeb20c]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}",""]),e.exports=l},259:function(e,t,n){"use strict";n(251)},260:function(e,t,n){var l=n(72)(!1);l.push([e.i,".expand-enter-active,.expand-leave-active{transition:height 1s ease-in-out;overflow:hidden}.expand-enter,.expand-leave-to{height:0}",""]),e.exports=l},268:function(e,t,n){"use strict";n.r(t);var l={layout:"components",data:function(){return{show:!0}},methods:{enter:function(element){var e=getComputedStyle(element).width;element.style.width=e,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var t=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height=0,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=t}))},afterEnter:function(element){element.style.height="auto"},leave:function(element){var e=getComputedStyle(element).height;element.style.height=e,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},o=(n(257),n(259),n(18)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-full text-white font-bold"},[n("div",{staticClass:"border border-white my-1 rounded-md cursor-pointer",on:{click:function(t){e.show=!e.show}}},[e._v("Show")]),e._v(" "),n("div",{staticClass:"w-full"},[n("transition",{attrs:{name:"expand"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[e.show?n("div",{staticClass:"border-1 border-gray-300 rounded-md"},[n("div",{staticClass:"w-full h-full p-4"},e._l(20,(function(i){return n("p",{key:i},[e._v("Hello + "+e._s(i))])})),0)]):e._e()])],1)])}),[],!1,null,"eadeb20c",null);t.default=component.exports}}]);