!function(){var e,t,n={397:function(e,t,n){var o={"./all":[224],"./all.js":[224],"./createPlayButtonForVideo":[558,558],"./createPlayButtonForVideo.js":[558,558],"./createVideoControls":[761,761],"./createVideoControls.js":[761,761],"./getNewsFeed":[399,399],"./getNewsFeed.js":[399,399],"./loadVideo":[935,935],"./loadVideo.js":[935,935],"./toggleSettingVisibilityOnScrollBottom":[440,440],"./toggleSettingVisibilityOnScrollBottom.js":[440,440],"./userSettings":[391,391],"./userSettings.js":[391,391]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=397,e.exports=r},224:function(e,t,n){"use strict";function o(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];const r="string"==typeof t[0],i=r?t[0]:t[0].module,a=!r&&"arg"in t[0];let u;return u=r?t[0]:"default"in t[0]?t[0].default:i,n(397)(`./${i}`).then((e=>{let{default:n}=e;a?n(t[0].arg):n()}))}n.r(t);const r=performance.now();window.addEventListener("load",(()=>{const e="false"!=window.localStorage.getItem("playVideoOnHomePageSetting"),t=window.location.pathname,n=window.matchMedia("(max-width: 768px)");!n.matches&&e&&"/"==t&&o({module:"loadVideo",arg:r}),"/"==t&&n.matches&&o("createPlayButtonForVideo"),"/"==t&&Promise.resolve().then((()=>o("getNewsFeed"))).then((()=>n.matches?o("toggleSettingVisibilityOnScrollBottom"):null)),"/settings/"==t&&o("userSettings")}))}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return e+"."+r.h()+".bundle.js"},r.miniCssF=function(e){return"main."+r.h()+".css"},r.h=function(){return"639a9d802327ae87b5fd"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="kcc-core:",r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[o];var f=function(t,o){u.onerror=u.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/assets/js/dist/",function(){var e={179:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=i);var a=r.p+r.u(t),u=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var o,i,a=n[0],u=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);l&&l(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkkcc_core=self.webpackChunkkcc_core||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r(224)}();