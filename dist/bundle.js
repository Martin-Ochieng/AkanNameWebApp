(()=>{var e={621:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n    text-align: center;\n    padding: 20px;\n}\n\n.container {\n    background: #fff;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    display: inline-block;\n    margin-top: 50px;\n}\n\nform {\n    margin-top: 20px;\n}\n\ninput, select, button {\n    padding: 10px;\n    margin: 10px 0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\nbutton {\n    background-color: #28a745;\n    color: #fff;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #218838;\n}\n",""]);const s=i},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var v=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},574:()=>{document.getElementById("akan-form").addEventListener("submit",(function(e){e.preventDefault();const n=document.getElementById("birthday").value,t=document.getElementById("gender").value;if(!n||!t)return void alert("Please fill in all fields.");const r=new Date(n),o=r.getDate(),a=r.getMonth()+1,i=r.getFullYear()%100,s=Math.floor(r.getFullYear()/100),c=Math.floor((s/4-2*s-1+5*i/4+26*(a+1)/10+o)%7);let u;console.log(o),console.log(a),console.log(i),console.log(s),console.log("********"),console.log(r),console.log(c),"male"===t?u=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"][c]:"female"===t&&(u=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"][c]),document.getElementById("result").textContent=`Your Akan name is ${u}`}))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),u=t(540),l=t.n(u),d=t(113),f=t.n(d),p=t(621),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(p.A,v),p.A&&p.A.locals&&p.A.locals,t(574)})()})();