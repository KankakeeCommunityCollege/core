!function(){"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+"."+o.h()+".bundle.js"},o.miniCssF=function(e){},o.h=function(){return"c8d64f3c3ea7767a26fd"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="kcc-core:",o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+i),l.src=n),e[n]=[r];var f=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/assets/js/dist/",function(){var e={792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(t),l=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,a=n[0],l=n[1],u=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);u&&u(o)}for(t&&t(n);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkkcc_core=self.webpackChunkkcc_core||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();const i=performance.now();window.addEventListener("load",(()=>{const e="false"!=window.localStorage.getItem("playVideoOnHomePageSetting"),t=window.location.pathname,n=window.matchMedia("(max-width: 768px)");!n.matches&&e&&"/"==t&&o.e(286).then(o.bind(o,286)).then((e=>{let{default:t}=e;return t(i)})),"/"==t&&n.matches&&o.e(509).then(o.bind(o,509)).then((e=>{let{default:t}=e;return t()})),"/"==t&&(o.e(494).then(o.bind(o,494)).then((e=>{let{default:t}=e;return t()})),o.e(610).then(o.bind(o,610)).then((e=>{let{default:t}=e;return t()}))),-1!==t.search(/^\/settings\/?$/)&&o.e(899).then(o.bind(o,899)).then((e=>{let{default:t}=e;return t()})),document.querySelector('a[href="#page-top"]')&&o.e(917).then(o.bind(o,917)).then((e=>{let{default:t}=e;return t()})),document.querySelector(".pathways__slider")&&$(".pathways__slider").slick({dots:!1,slidesToShow:3,slidesToScroll:3,prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:820,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}();