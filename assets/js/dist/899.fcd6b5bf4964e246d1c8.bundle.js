"use strict";(self.webpackChunkkcc_core=self.webpackChunkkcc_core||[]).push([[899],{899:function(t,e,n){function a(t){let e,n=t.target;"true"===n.dataset.value?e=!0:"false"===n.dataset.value&&(e=!1),null===e&&new Error('Error in userSettings.js module\n"currentSettingState" is undefined:\nMake sure you have a "data-value" attribute set to "true" or "false"');const a=`<span class="visually-hidden">Turn setting ${e?"on":"off"}</span>`;return window.localStorage.setItem(n.dataset.setting,(!e).toString()),n.classList.toggle("setting__button--"+(e?"on":"off")),n.classList.toggle("setting__button--"+(e?"off":"on")),n.dataset.value=(!e).toString(),n.innerHTML=a}n.r(e),document.getElementById("videoButton"),e.default=function(){[...document.querySelectorAll(".setting__button")].forEach((t=>{t.addEventListener("click",a),function(t){const e=t.dataset.setting;let n;if(!window.localStorage.getItem(e))return;if(t.dataset.value===window.localStorage.getItem(e))return;n="false"!=window.localStorage.getItem(e);const a=`<span class="visually-hidden">Turn setting ${n?"off":"on"}</span>`;t.dataset.value=n.toString(),t.classList.remove("setting__button--"+(n?"off":"on")),t.classList.add("setting__button--"+(n?"on":"off")),t.innerHTML=a}(t)}))}}}]);