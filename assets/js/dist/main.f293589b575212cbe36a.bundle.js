!function(){var e,t,o={397:function(e,t,o){var n={"./all":[224],"./all.js":[224],"./createPlayButtonForVideo":[558,558],"./createPlayButtonForVideo.js":[558,558],"./createVideoControls":[761,761],"./createVideoControls.js":[761,761],"./getNewsFeed":[399,399],"./getNewsFeed.js":[399,399],"./loadVideo":[935,935],"./loadVideo.js":[935,935],"./toggleSettingVisibilityOnScrollBottom":[440,440],"./toggleSettingVisibilityOnScrollBottom.js":[440,440],"./userSettings":[391,391],"./userSettings.js":[391,391]};function r(e){if(!o.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(r)}))}r.keys=function(){return Object.keys(n)},r.id=397,e.exports=r},224:function(e,t,o){"use strict";function n(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r="string"==typeof t[0],i=r?t[0]:t[0].module,l=!r&&"arg"in t[0];let a;return a=r?t[0]:"default"in t[0]?t[0].default:i,o(397)(`./${i}`).then((e=>{let{default:o}=e;l?o(t[0].arg):o()}))}o.r(t);const r=performance.now();window.addEventListener("load",(()=>{const e="false"!=window.localStorage.getItem("playVideoOnHomePageSetting"),t=window.location.pathname,o=window.matchMedia("(max-width: 768px)");!o.matches&&e&&"/"==t&&n({module:"loadVideo",arg:r}),"/"==t&&o.matches&&n("createPlayButtonForVideo"),"/"==t&&Promise.resolve().then((()=>n("getNewsFeed"))).then((()=>o.matches?n("toggleSettingVisibilityOnScrollBottom"):null)),"/settings/"==t&&n("userSettings"),document.querySelector(".pathways__slider")&&$(".pathways__slider").slick({dots:!1,slidesToShow:3,slidesToScroll:3,prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:820,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.m=o,r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))},r.u=function(e){return e+"."+r.h()+".bundle.js"},r.miniCssF=function(e){return"main."+r.h()+".css"},r.h=function(){return"f293589b575212cbe36a"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="kcc-core:",r.l=function(o,n,i,l){if(e[o])e[o].push(n);else{var a,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[n];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/assets/js/dist/",function(){var e={179:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(o,r){n=e[t]=[o,r]}));o.push(n[2]=i);var l=r.p+r.u(t),a=new Error;r.l(l,(function(o){if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,n[1](a)}}),"chunk-"+t,t)}};var t=function(t,o){var n,i,l=o[0],a=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);s&&s(r)}for(t&&t(o);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},o=self.webpackChunkkcc_core=self.webpackChunkkcc_core||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}(),r(224)}();