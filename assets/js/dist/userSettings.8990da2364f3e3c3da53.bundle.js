(window.webpackJsonp=window.webpackJsonp||[]).push([["userSettings"],{"./assets/js/src/userSettings.js":function(e,o,n){"use strict";n.r(o);n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.regexp.to-string.js"),n("./node_modules/core-js/modules/web.dom-collections.for-each.js"),n("./node_modules/core-js/modules/es.symbol.js"),n("./node_modules/core-js/modules/es.symbol.description.js"),n("./node_modules/core-js/modules/es.symbol.iterator.js"),n("./node_modules/core-js/modules/es.array.iterator.js"),n("./node_modules/core-js/modules/es.string.iterator.js"),n("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n("./node_modules/core-js/modules/es.array.from.js"),n("./node_modules/core-js/modules/es.array.slice.js"),n("./node_modules/core-js/modules/es.function.name.js");function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,o){if(!e)return;if("string"==typeof e)return r(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,o)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=e[n];return t}document.getElementById("videoButton");function s(e){var o,n=e.target;"true"===n.dataset.value?o=!0:"false"===n.dataset.value&&(o=!1),null===o&&new Error('Error in userSettings.js module\n"currentSettingState" is undefined:\nMake sure you have a "data-value" attribute set to "true" or "false"');var t='<span class="sr-only">Turn setting '.concat(o?"on":"off","</span>");return window.localStorage.setItem(n.dataset.setting,(!o).toString()),n.classList.toggle("setting__button--".concat(o?"on":"off")),n.classList.toggle("setting__button--".concat(o?"off":"on")),n.dataset.value=(!o).toString(),n.innerHTML=t}o.default=function(){t(document.querySelectorAll(".setting__button")).forEach((function(e){e.addEventListener("click",s),function(e){var o,n=e.dataset.setting;if(window.localStorage.getItem(n)&&e.dataset.value!==window.localStorage.getItem(n)){o="false"!=window.localStorage.getItem(n);var t='<span class="sr-only sr-only-focusable">Turn setting '.concat(o?"off":"on","</span>");e.dataset.value=o.toString(),e.classList.remove("setting__button--".concat(o?"off":"on")),e.classList.add("setting__button--".concat(o?"on":"off")),e.innerHTML=t}}(e)}))}},"./node_modules/core-js/internals/array-for-each.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/array-iteration.js").forEach,r=n("./node_modules/core-js/internals/array-method-is-strict.js")("forEach");e.exports=r?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}},"./node_modules/core-js/internals/array-from.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/function-bind-context.js"),r=n("./node_modules/core-js/internals/to-object.js"),s=n("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),i=n("./node_modules/core-js/internals/is-array-iterator-method.js"),l=n("./node_modules/core-js/internals/to-length.js"),a=n("./node_modules/core-js/internals/create-property.js"),c=n("./node_modules/core-js/internals/get-iterator-method.js");e.exports=function(e){var o,n,d,u,j,m,f=r(e),p="function"==typeof this?this:Array,y=arguments.length,_=y>1?arguments[1]:void 0,b=void 0!==_,g=c(f),h=0;if(b&&(_=t(_,y>2?arguments[2]:void 0,2)),null==g||p==Array&&i(g))for(n=new p(o=l(f.length));o>h;h++)m=b?_(f[h],h):f[h],a(n,h,m);else for(j=(u=g.call(f)).next,n=new p;!(d=j.call(u)).done;h++)m=b?s(u,_,[d.value,h],!0):d.value,a(n,h,m);return n.length=h,n}},"./node_modules/core-js/internals/array-iteration.js":function(e,o,n){var t=n("./node_modules/core-js/internals/function-bind-context.js"),r=n("./node_modules/core-js/internals/indexed-object.js"),s=n("./node_modules/core-js/internals/to-object.js"),i=n("./node_modules/core-js/internals/to-length.js"),l=n("./node_modules/core-js/internals/array-species-create.js"),a=[].push,c=function(e){var o=1==e,n=2==e,c=3==e,d=4==e,u=6==e,j=7==e,m=5==e||u;return function(f,p,y,_){for(var b,g,h=s(f),v=r(h),w=t(p,y,3),S=i(v.length),x=0,O=_||l,E=o?O(f,S):n||j?O(f,0):void 0;S>x;x++)if((m||x in v)&&(g=w(b=v[x],x,h),e))if(o)E[x]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:a.call(E,b)}else switch(e){case 4:return!1;case 7:a.call(E,b)}return u?-1:c||d?d:E}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},"./node_modules/core-js/internals/array-method-is-strict.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/fails.js");e.exports=function(e,o){var n=[][e];return!!n&&t((function(){n.call(null,o||function(){throw 1},1)}))}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(e,o,n){var t=n("./node_modules/core-js/internals/an-object.js"),r=n("./node_modules/core-js/internals/iterator-close.js");e.exports=function(e,o,n,s){try{return s?o(t(n)[0],n[1]):o(n)}catch(o){throw r(e),o}}},"./node_modules/core-js/internals/define-well-known-symbol.js":function(e,o,n){var t=n("./node_modules/core-js/internals/path.js"),r=n("./node_modules/core-js/internals/has.js"),s=n("./node_modules/core-js/internals/well-known-symbol-wrapped.js"),i=n("./node_modules/core-js/internals/object-define-property.js").f;e.exports=function(e){var o=t.Symbol||(t.Symbol={});r(o,e)||i(o,e,{value:s.f(e)})}},"./node_modules/core-js/internals/object-get-own-property-names-external.js":function(e,o,n){var t=n("./node_modules/core-js/internals/to-indexed-object.js"),r=n("./node_modules/core-js/internals/object-get-own-property-names.js").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==s.call(e)?function(e){try{return r(e)}catch(e){return i.slice()}}(e):r(t(e))}},"./node_modules/core-js/internals/well-known-symbol-wrapped.js":function(e,o,n){var t=n("./node_modules/core-js/internals/well-known-symbol.js");o.f=t},"./node_modules/core-js/modules/es.array.from.js":function(e,o,n){var t=n("./node_modules/core-js/internals/export.js"),r=n("./node_modules/core-js/internals/array-from.js");t({target:"Array",stat:!0,forced:!n("./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(e){Array.from(e)}))},{from:r})},"./node_modules/core-js/modules/es.array.slice.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/export.js"),r=n("./node_modules/core-js/internals/is-object.js"),s=n("./node_modules/core-js/internals/is-array.js"),i=n("./node_modules/core-js/internals/to-absolute-index.js"),l=n("./node_modules/core-js/internals/to-length.js"),a=n("./node_modules/core-js/internals/to-indexed-object.js"),c=n("./node_modules/core-js/internals/create-property.js"),d=n("./node_modules/core-js/internals/well-known-symbol.js"),u=n("./node_modules/core-js/internals/array-method-has-species-support.js")("slice"),j=d("species"),m=[].slice,f=Math.max;t({target:"Array",proto:!0,forced:!u},{slice:function(e,o){var n,t,d,u=a(this),p=l(u.length),y=i(e,p),_=i(void 0===o?p:o,p);if(s(u)&&("function"!=typeof(n=u.constructor)||n!==Array&&!s(n.prototype)?r(n)&&null===(n=n[j])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(u,y,_);for(t=new(void 0===n?Array:n)(f(_-y,0)),d=0;y<_;y++,d++)y in u&&c(t,d,u[y]);return t.length=d,t}})},"./node_modules/core-js/modules/es.function.name.js":function(e,o,n){var t=n("./node_modules/core-js/internals/descriptors.js"),r=n("./node_modules/core-js/internals/object-define-property.js").f,s=Function.prototype,i=s.toString,l=/^\s*function ([^ (]*)/;t&&!("name"in s)&&r(s,"name",{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},"./node_modules/core-js/modules/es.regexp.to-string.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/redefine.js"),r=n("./node_modules/core-js/internals/an-object.js"),s=n("./node_modules/core-js/internals/fails.js"),i=n("./node_modules/core-js/internals/regexp-flags.js"),l=RegExp.prototype,a=l.toString,c=s((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),d="toString"!=a.name;(c||d)&&t(RegExp.prototype,"toString",(function(){var e=r(this),o=String(e.source),n=e.flags;return"/"+o+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in l)?i.call(e):n)}),{unsafe:!0})},"./node_modules/core-js/modules/es.symbol.description.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/export.js"),r=n("./node_modules/core-js/internals/descriptors.js"),s=n("./node_modules/core-js/internals/global.js"),i=n("./node_modules/core-js/internals/has.js"),l=n("./node_modules/core-js/internals/is-object.js"),a=n("./node_modules/core-js/internals/object-define-property.js").f,c=n("./node_modules/core-js/internals/copy-constructor-properties.js"),d=s.Symbol;if(r&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},j=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),o=this instanceof j?new d(e):void 0===e?d():d(e);return""===e&&(u[o]=!0),o};c(j,d);var m=j.prototype=d.prototype;m.constructor=j;var f=m.toString,p="Symbol(test)"==String(d("test")),y=/^Symbol\((.*)\)[^)]+$/;a(m,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,o=f.call(e);if(i(u,e))return"";var n=p?o.slice(7,-1):o.replace(y,"$1");return""===n?void 0:n}}),t({global:!0,forced:!0},{Symbol:j})}},"./node_modules/core-js/modules/es.symbol.iterator.js":function(e,o,n){n("./node_modules/core-js/internals/define-well-known-symbol.js")("iterator")},"./node_modules/core-js/modules/es.symbol.js":function(e,o,n){"use strict";var t=n("./node_modules/core-js/internals/export.js"),r=n("./node_modules/core-js/internals/global.js"),s=n("./node_modules/core-js/internals/get-built-in.js"),i=n("./node_modules/core-js/internals/is-pure.js"),l=n("./node_modules/core-js/internals/descriptors.js"),a=n("./node_modules/core-js/internals/native-symbol.js"),c=n("./node_modules/core-js/internals/use-symbol-as-uid.js"),d=n("./node_modules/core-js/internals/fails.js"),u=n("./node_modules/core-js/internals/has.js"),j=n("./node_modules/core-js/internals/is-array.js"),m=n("./node_modules/core-js/internals/is-object.js"),f=n("./node_modules/core-js/internals/an-object.js"),p=n("./node_modules/core-js/internals/to-object.js"),y=n("./node_modules/core-js/internals/to-indexed-object.js"),_=n("./node_modules/core-js/internals/to-primitive.js"),b=n("./node_modules/core-js/internals/create-property-descriptor.js"),g=n("./node_modules/core-js/internals/object-create.js"),h=n("./node_modules/core-js/internals/object-keys.js"),v=n("./node_modules/core-js/internals/object-get-own-property-names.js"),w=n("./node_modules/core-js/internals/object-get-own-property-names-external.js"),S=n("./node_modules/core-js/internals/object-get-own-property-symbols.js"),x=n("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),O=n("./node_modules/core-js/internals/object-define-property.js"),E=n("./node_modules/core-js/internals/object-property-is-enumerable.js"),k=n("./node_modules/core-js/internals/create-non-enumerable-property.js"),A=n("./node_modules/core-js/internals/redefine.js"),I=n("./node_modules/core-js/internals/shared.js"),P=n("./node_modules/core-js/internals/shared-key.js"),L=n("./node_modules/core-js/internals/hidden-keys.js"),T=n("./node_modules/core-js/internals/uid.js"),M=n("./node_modules/core-js/internals/well-known-symbol.js"),N=n("./node_modules/core-js/internals/well-known-symbol-wrapped.js"),J=n("./node_modules/core-js/internals/define-well-known-symbol.js"),F=n("./node_modules/core-js/internals/set-to-string-tag.js"),R=n("./node_modules/core-js/internals/internal-state.js"),$=n("./node_modules/core-js/internals/array-iteration.js").forEach,B=P("hidden"),C=M("toPrimitive"),H=R.set,q=R.getterFor("Symbol"),D=Object.prototype,Q=r.Symbol,U=s("JSON","stringify"),W=x.f,z=O.f,G=w.f,K=E.f,V=I("symbols"),X=I("op-symbols"),Y=I("string-to-symbol-registry"),Z=I("symbol-to-string-registry"),ee=I("wks"),oe=r.QObject,ne=!oe||!oe.prototype||!oe.prototype.findChild,te=l&&d((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(e,o,n){var t=W(D,o);t&&delete D[o],z(e,o,n),t&&e!==D&&z(D,o,t)}:z,re=function(e,o){var n=V[e]=g(Q.prototype);return H(n,{type:"Symbol",tag:e,description:o}),l||(n.description=o),n},se=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Q},ie=function(e,o,n){e===D&&ie(X,o,n),f(e);var t=_(o,!0);return f(n),u(V,t)?(n.enumerable?(u(e,B)&&e[B][t]&&(e[B][t]=!1),n=g(n,{enumerable:b(0,!1)})):(u(e,B)||z(e,B,b(1,{})),e[B][t]=!0),te(e,t,n)):z(e,t,n)},le=function(e,o){f(e);var n=y(o),t=h(n).concat(ue(n));return $(t,(function(o){l&&!ae.call(n,o)||ie(e,o,n[o])})),e},ae=function(e){var o=_(e,!0),n=K.call(this,o);return!(this===D&&u(V,o)&&!u(X,o))&&(!(n||!u(this,o)||!u(V,o)||u(this,B)&&this[B][o])||n)},ce=function(e,o){var n=y(e),t=_(o,!0);if(n!==D||!u(V,t)||u(X,t)){var r=W(n,t);return!r||!u(V,t)||u(n,B)&&n[B][t]||(r.enumerable=!0),r}},de=function(e){var o=G(y(e)),n=[];return $(o,(function(e){u(V,e)||u(L,e)||n.push(e)})),n},ue=function(e){var o=e===D,n=G(o?X:y(e)),t=[];return $(n,(function(e){!u(V,e)||o&&!u(D,e)||t.push(V[e])})),t};(a||(A((Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,o=T(e),n=function(e){this===D&&n.call(X,e),u(this,B)&&u(this[B],o)&&(this[B][o]=!1),te(this,o,b(1,e))};return l&&ne&&te(D,o,{configurable:!0,set:n}),re(o,e)}).prototype,"toString",(function(){return q(this).tag})),A(Q,"withoutSetter",(function(e){return re(T(e),e)})),E.f=ae,O.f=ie,x.f=ce,v.f=w.f=de,S.f=ue,N.f=function(e){return re(M(e),e)},l&&(z(Q.prototype,"description",{configurable:!0,get:function(){return q(this).description}}),i||A(D,"propertyIsEnumerable",ae,{unsafe:!0}))),t({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),$(h(ee),(function(e){J(e)})),t({target:"Symbol",stat:!0,forced:!a},{for:function(e){var o=String(e);if(u(Y,o))return Y[o];var n=Q(o);return Y[o]=n,Z[n]=o,n},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(u(Z,e))return Z[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),t({target:"Object",stat:!0,forced:!a,sham:!l},{create:function(e,o){return void 0===o?g(e):le(g(e),o)},defineProperty:ie,defineProperties:le,getOwnPropertyDescriptor:ce}),t({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:de,getOwnPropertySymbols:ue}),t({target:"Object",stat:!0,forced:d((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(p(e))}}),U)&&t({target:"JSON",stat:!0,forced:!a||d((function(){var e=Q();return"[null]"!=U([e])||"{}"!=U({a:e})||"{}"!=U(Object(e))}))},{stringify:function(e,o,n){for(var t,r=[e],s=1;arguments.length>s;)r.push(arguments[s++]);if(t=o,(m(o)||void 0!==e)&&!se(e))return j(o)||(o=function(e,o){if("function"==typeof t&&(o=t.call(this,e,o)),!se(o))return o}),r[1]=o,U.apply(null,r)}});Q.prototype[C]||k(Q.prototype,C,Q.prototype.valueOf),F(Q,"Symbol"),L[B]=!0},"./node_modules/core-js/modules/web.dom-collections.for-each.js":function(e,o,n){var t=n("./node_modules/core-js/internals/global.js"),r=n("./node_modules/core-js/internals/dom-iterables.js"),s=n("./node_modules/core-js/internals/array-for-each.js"),i=n("./node_modules/core-js/internals/create-non-enumerable-property.js");for(var l in r){var a=t[l],c=a&&a.prototype;if(c&&c.forEach!==s)try{i(c,"forEach",s)}catch(e){c.forEach=s}}}}]);