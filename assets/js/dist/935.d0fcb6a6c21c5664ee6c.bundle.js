(self.webpackChunkkcc_core=self.webpackChunkkcc_core||[]).push([[935],{1935:function(e,t,n){"use strict";n.r(t),n(1249),n(7941),n(4747),n(6992),n(1539),n(8674),n(8783),n(3948),n(4916),n(3123);var r="videoContainer",i="video";function o(e){var t=document.createElement("video");return Object.keys(e).map((function(n){t.setAttribute(n,e[n])})),t}function c(e,t,n){return t.forEach((function(t,r){var i=document.createElement("source");i.src=t,i.setAttribute("type",n[r]),e.appendChild(i)})),e}function u(e,t){return window.setTimeout((function(){n.e(558).then(n.bind(n,1558)).then((function(e){return(0,e.default)()}))}),1e3),console.error(e,t)}t.default=function(){var e=arguments,t=document.getElementById(r),l=t.querySelector("#".concat(i)).dataset,a=[l.videos.split(","),l.videoTypes.split(","),l.poster],s=a[0],f=a[1],p=a[2],d={autoplay:"",muted:"",loop:"",playsinline:"",poster:p,id:"videoElement",class:"width__full"},v=o(d);Promise.resolve().then((function(){return c(v,s,f)})).then((function(){if(null!=e[0]){var n=e[0],r=performance.now();r-n>1e3?u("Slow network speeds:",r-n):(r-n>675&&console.info("Performance: ".concat(r-n,"ms")),t.innerHTML="",t.innerHTML=v.outerHTML)}else t.innerHTML="",t.appendChild(v)})).then((function(){n.e(761).then(n.bind(n,7761)).then((function(e){return(0,e.default)()}))}))}},1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},8533:function(e,t,n){"use strict";var r=n(2092).forEach,i=n(9341)("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},2092:function(e,t,n){var r=n(9974),i=n(8361),o=n(7908),c=n(7466),u=n(5417),l=[].push,a=function(e){var t=1==e,n=2==e,a=3==e,s=4==e,f=6==e,p=7==e,d=5==e||f;return function(v,h,g,x){for(var y,E,m=o(v),b=i(m),I=r(h,g,3),R=c(b.length),w=0,A=x||u,T=t?A(v,R):n||p?A(v,0):void 0;R>w;w++)if((d||w in b)&&(E=I(y=b[w],w,m),e))if(t)T[w]=E;else if(E)switch(e){case 3:return!0;case 5:return y;case 6:return w;case 2:l.call(T,y)}else switch(e){case 4:return!1;case 7:l.call(T,y)}return f?-1:a||s?s:T}};e.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterOut:a(7)}},1194:function(e,t,n){var r=n(7293),i=n(5112),o=n(7392),c=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},5417:function(e,t,n){var r=n(111),i=n(3157),o=n(5112)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),i=n(2261),o=n(7293),c=n(5112),u=n(8880),l=c("species"),a=RegExp.prototype;e.exports=function(e,t,n,s){var f=c(e),p=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),d=p&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!d||n){var v=/./[f],h=t(f,""[e],(function(e,t,n,r,o){var c=t.exec;return c===i||c===a.exec?p&&!o?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,h[0]),r(a,f,h[1])}s&&u(a[f],"sham",!0)}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},7850:function(e,t,n){var r=n(111),i=n(4326),o=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},7651:function(e,t,n){var r=n(4326),i=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},2261:function(e,t,n){"use strict";var r,i,o=n(7066),c=n(2999),u=n(2309),l=n(30),a=n(9909).get,s=n(9441),f=n(8173),p=RegExp.prototype.exec,d=u("native-string-replace",String.prototype.replace),v=p,h=(r=/a/,i=/b*/g,p.call(r,"a"),p.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),g=c.UNSUPPORTED_Y||c.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(h||x||g||s||f)&&(v=function(e){var t,n,r,i,c,u,s,f=this,y=a(f),E=y.raw;if(E)return E.lastIndex=f.lastIndex,t=v.call(E,e),f.lastIndex=E.lastIndex,t;var m=y.groups,b=g&&f.sticky,I=o.call(f),R=f.source,w=0,A=e;if(b&&(-1===(I=I.replace("y","")).indexOf("g")&&(I+="g"),A=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(R="(?: "+R+")",A=" "+A,w++),n=new RegExp("^(?:"+R+")",I)),x&&(n=new RegExp("^"+R+"$(?!\\s)",I)),h&&(r=f.lastIndex),i=p.call(b?n:f,A),b?i?(i.input=i.input.slice(w),i[0]=i[0].slice(w),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:h&&i&&(f.lastIndex=f.global?i.index+i[0].length:r),x&&i&&i.length>1&&d.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i&&m)for(i.groups=u=l(null),c=0;c<m.length;c++)u[(s=m[c])[0]]=i[s[1]];return i}),e.exports=v},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){var r=n(7293),i=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},9441:function(e,t,n){var r=n(7293);e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},8173:function(e,t,n){var r=n(7293);e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1249:function(e,t,n){"use strict";var r=n(2109),i=n(2092).map;r({target:"Array",proto:!0,forced:!n(1194)("map")},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},7941:function(e,t,n){var r=n(2109),i=n(7908),o=n(1956);r({target:"Object",stat:!0,forced:n(7293)((function(){o(1)}))},{keys:function(e){return o(i(e))}})},4916:function(e,t,n){"use strict";var r=n(2109),i=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},3123:function(e,t,n){"use strict";var r=n(7007),i=n(7850),o=n(9670),c=n(4488),u=n(6707),l=n(1530),a=n(7466),s=n(7651),f=n(2261),p=n(2999),d=n(7293),v=p.UNSUPPORTED_Y,h=[].push,g=Math.min,x=4294967295;r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),o=void 0===n?x:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);for(var u,l,a,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,v=new RegExp(e.source,p+"g");(u=f.call(v,r))&&!((l=v.lastIndex)>d&&(s.push(r.slice(d,u.index)),u.length>1&&u.index<r.length&&h.apply(s,u.slice(1)),a=u[0].length,d=l,s.length>=o));)v.lastIndex===u.index&&v.lastIndex++;return d===r.length?!a&&v.test("")||s.push(""):s.push(r.slice(d)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,this,e,i,r!==t);if(c.done)return c.value;var f=o(this),p=String(e),d=u(f,RegExp),h=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"g":"y"),E=new d(v?"^(?:"+f.source+")":f,y),m=void 0===i?x:i>>>0;if(0===m)return[];if(0===p.length)return null===s(E,p)?[p]:[];for(var b=0,I=0,R=[];I<p.length;){E.lastIndex=v?0:I;var w,A=s(E,v?p.slice(I):p);if(null===A||(w=g(a(E.lastIndex+(v?I:0)),p.length))===b)I=l(p,I,h);else{if(R.push(p.slice(b,I)),R.length===m)return R;for(var T=1;T<=A.length-1;T++)if(R.push(A[T]),R.length===m)return R;I=b=w}}return R.push(p.slice(b)),R}]}),!!d((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),v)},4747:function(e,t,n){var r=n(7854),i=n(8324),o=n(8533),c=n(8880);for(var u in i){var l=r[u],a=l&&l.prototype;if(a&&a.forEach!==o)try{c(a,"forEach",o)}catch(e){a.forEach=o}}}}]);