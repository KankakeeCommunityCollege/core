(self.webpackChunkkcc_core=self.webpackChunkkcc_core||[]).push([[391],{3391:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function o(t){var r,n=t.target;"true"===n.dataset.value?r=!0:"false"===n.dataset.value&&(r=!1),null===r&&new Error('Error in userSettings.js module\n"currentSettingState" is undefined:\nMake sure you have a "data-value" attribute set to "true" or "false"');var e='<span class="sr-only">Turn setting '.concat(r?"on":"off","</span>");return window.localStorage.setItem(n.dataset.setting,(!r).toString()),n.classList.toggle("setting__button--".concat(r?"on":"off")),n.classList.toggle("setting__button--".concat(r?"off":"on")),n.dataset.value=(!r).toString(),n.innerHTML=e}n.r(r),n(1539),n(9714),n(4747),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(1038),n(7042),n(8309),document.getElementById("videoButton"),r.default=function(){var t;(t=document.querySelectorAll(".setting__button"),function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){t.addEventListener("click",o),function(t){var r,n=t.dataset.setting;if(window.localStorage.getItem(n)&&t.dataset.value!==window.localStorage.getItem(n)){r="false"!=window.localStorage.getItem(n);var e='<span class="sr-only sr-only-focusable">Turn setting '.concat(r?"off":"on","</span>");t.dataset.value=r.toString(),t.classList.remove("setting__button--".concat(r?"off":"on")),t.classList.add("setting__button--".concat(r?"on":"off")),t.innerHTML=e}}(t)}))}},8533:function(t,r,n){"use strict";var e=n(2092).forEach,o=n(9341)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,r,n){"use strict";var e=n(9974),o=n(7908),i=n(3411),a=n(7659),c=n(7466),u=n(6135),f=n(1246);t.exports=function(t){var r,n,s,l,p,v,y=o(t),g="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,b=void 0!==h,m=f(y),S=0;if(b&&(h=e(h,d>2?arguments[2]:void 0,2)),null==m||g==Array&&a(m))for(n=new g(r=c(y.length));r>S;S++)v=b?h(y[S],S):y[S],u(n,S,v);else for(p=(l=m.call(y)).next,n=new g;!(s=p.call(l)).done;S++)v=b?i(l,h,[s.value,S],!0):s.value,u(n,S,v);return n.length=S,n}},2092:function(t,r,n){var e=n(9974),o=n(8361),i=n(7908),a=n(7466),c=n(5417),u=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,g,d,h){for(var b,m,S=i(y),w=o(S),A=e(g,d,3),O=a(w.length),E=0,x=h||c,j=r?x(y,O):n||p?x(y,0):void 0;O>E;E++)if((v||E in w)&&(m=A(b=w[E],E,S),t))if(r)j[E]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:u.call(j,b)}else switch(t){case 4:return!1;case 7:u.call(j,b)}return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},1194:function(t,r,n){var e=n(7293),o=n(5112),i=n(7392),a=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},9341:function(t,r,n){"use strict";var e=n(7293);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},5417:function(t,r,n){var e=n(111),o=n(3157),i=n(5112)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},3411:function(t,r,n){var e=n(9670),o=n(9212);t.exports=function(t,r,n,i){try{return i?r(e(n)[0],n[1]):r(n)}catch(r){throw o(t),r}}},6135:function(t,r,n){"use strict";var e=n(7593),o=n(3070),i=n(9114);t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},7235:function(t,r,n){var e=n(857),o=n(6656),i=n(6061),a=n(3070).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},1156:function(t,r,n){var e=n(5656),o=n(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(e(t))}},7066:function(t,r,n){"use strict";var e=n(9670);t.exports=function(){var t=e(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},6061:function(t,r,n){var e=n(5112);r.f=e},1038:function(t,r,n){var e=n(2109),o=n(8457);e({target:"Array",stat:!0,forced:!n(7072)((function(t){Array.from(t)}))},{from:o})},7042:function(t,r,n){"use strict";var e=n(2109),o=n(111),i=n(3157),a=n(1400),c=n(7466),u=n(5656),f=n(6135),s=n(5112),l=n(1194)("slice"),p=s("species"),v=[].slice,y=Math.max;e({target:"Array",proto:!0,forced:!l},{slice:function(t,r){var n,e,s,l=u(this),g=c(l.length),d=a(t,g),h=a(void 0===r?g:r,g);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[p])&&(n=void 0):n=void 0,n===Array||void 0===n))return v.call(l,d,h);for(e=new(void 0===n?Array:n)(y(h-d,0)),s=0;d<h;d++,s++)d in l&&f(e,s,l[d]);return e.length=s,e}})},8309:function(t,r,n){var e=n(9781),o=n(3070).f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";e&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},9714:function(t,r,n){"use strict";var e=n(1320),o=n(9670),i=n(7293),a=n(7066),c="toString",u=RegExp.prototype,f=u.toString,s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(s||l)&&e(RegExp.prototype,c,(function(){var t=o(this),r=String(t.source),n=t.flags;return"/"+r+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},1817:function(t,r,n){"use strict";var e=n(2109),o=n(9781),i=n(7854),a=n(6656),c=n(111),u=n(3070).f,f=n(9920),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[r]=!0),r};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,g="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=y.call(t);if(a(l,t))return"";var n=g?r.slice(7,-1):r.replace(d,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:p})}},2165:function(t,r,n){n(7235)("iterator")},2526:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(5005),a=n(1913),c=n(9781),u=n(133),f=n(3307),s=n(7293),l=n(6656),p=n(3157),v=n(111),y=n(9670),g=n(7908),d=n(5656),h=n(7593),b=n(9114),m=n(30),S=n(1956),w=n(8006),A=n(1156),O=n(5181),E=n(1236),x=n(3070),j=n(5296),_=n(8880),k=n(1320),I=n(2309),P=n(6200),L=n(3501),T=n(9711),C=n(5112),M=n(6061),N=n(7235),B=n(8003),F=n(9909),R=n(2092).forEach,$=P("hidden"),H="Symbol",J=C("toPrimitive"),q=F.set,D=F.getterFor(H),Q=Object.prototype,U=o.Symbol,W=i("JSON","stringify"),z=E.f,G=x.f,K=A.f,V=j.f,X=I("symbols"),Y=I("op-symbols"),Z=I("string-to-symbol-registry"),tt=I("symbol-to-string-registry"),rt=I("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,ot=c&&s((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=z(Q,r);e&&delete Q[r],G(t,r,n),e&&t!==Q&&G(Q,r,e)}:G,it=function(t,r){var n=X[t]=m(U.prototype);return q(n,{type:H,tag:t,description:r}),c||(n.description=r),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,r,n){t===Q&&ct(Y,r,n),y(t);var e=h(r,!0);return y(n),l(X,e)?(n.enumerable?(l(t,$)&&t[$][e]&&(t[$][e]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,$)||G(t,$,b(1,{})),t[$][e]=!0),ot(t,e,n)):G(t,e,n)},ut=function(t,r){y(t);var n=d(r),e=S(n).concat(pt(n));return R(e,(function(r){c&&!ft.call(n,r)||ct(t,r,n[r])})),t},ft=function(t){var r=h(t,!0),n=V.call(this,r);return!(this===Q&&l(X,r)&&!l(Y,r))&&(!(n||!l(this,r)||!l(X,r)||l(this,$)&&this[$][r])||n)},st=function(t,r){var n=d(t),e=h(r,!0);if(n!==Q||!l(X,e)||l(Y,e)){var o=z(n,e);return!o||!l(X,e)||l(n,$)&&n[$][e]||(o.enumerable=!0),o}},lt=function(t){var r=K(d(t)),n=[];return R(r,(function(t){l(X,t)||l(L,t)||n.push(t)})),n},pt=function(t){var r=t===Q,n=K(r?Y:d(t)),e=[];return R(n,(function(t){!l(X,t)||r&&!l(Q,t)||e.push(X[t])})),e};u||(k((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=T(t),n=function(t){this===Q&&n.call(Y,t),l(this,$)&&l(this[$],r)&&(this[$][r]=!1),ot(this,r,b(1,t))};return c&&et&&ot(Q,r,{configurable:!0,set:n}),it(r,t)}).prototype,"toString",(function(){return D(this).tag})),k(U,"withoutSetter",(function(t){return it(T(t),t)})),j.f=ft,x.f=ct,E.f=st,w.f=A.f=lt,O.f=pt,M.f=function(t){return it(C(t),t)},c&&(G(U.prototype,"description",{configurable:!0,get:function(){return D(this).description}}),a||k(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:U}),R(S(rt),(function(t){N(t)})),e({target:H,stat:!0,forced:!u},{for:function(t){var r=String(t);if(l(Z,r))return Z[r];var n=U(r);return Z[r]=n,tt[n]=r,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,r){return void 0===r?m(t):ut(m(t),r)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:st}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),W&&e({target:"JSON",stat:!0,forced:!u||s((function(){var t=U();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,r,n){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!at(t))return p(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!at(r))return r}),o[1]=r,W.apply(null,o)}}),U.prototype[J]||_(U.prototype,J,U.prototype.valueOf),B(U,H),L[$]=!0},4747:function(t,r,n){var e=n(7854),o=n(8324),i=n(8533),a=n(8880);for(var c in o){var u=e[c],f=u&&u.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(t){f.forEach=i}}}}]);