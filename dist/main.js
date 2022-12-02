(()=>{"use strict";var n,r,e,t,o,a,i,s,c,l,p,u,d,f,m={241:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),l=new URL(e(413),e.b),p=i()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Italiana&family=Roboto&display=swap);"]);var u=c()(l);p.push([n.id,":root {\r\n    --italiana: 'Italiana', serif;\r\n    --roboto: 'Roboto', sans-serif;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-image: url("+u+");\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    color: white;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    padding: 30px;\r\n    gap: calc(100% - 400px);\r\n    margin-bottom: 24px;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.logo {\r\n    font-family: var(--italiana);\r\n    font-size: x-large;\r\n}\r\n\r\n.item {\r\n    font-family: var(--roboto);\r\n    font-size: smaller;\r\n    padding-right: 4px;\r\n    padding-left: 4px;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 0;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    font-family: var(--roboto);\r\n    font-size: xx-small;\r\n    opacity: 0.5;\r\n}\r\n\r\n@media (max-width: 540px) {\r\n    header {\r\n        flex-direction: column;\r\n    }\r\n    .logo {\r\n        text-align: center;\r\n    }\r\n    nav {\r\n        justify-content: center;\r\n    }\r\n}",""]);const d=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var p=e(a[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},413:(n,r,e)=>{n.exports=e.p+"9ea67da49beb72c2bd3c.png"}},h={};function v(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return m[n](e,e.exports,v),e.exports}v.m=m,v.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return v.d(r,{a:r}),r},v.d=(n,r)=>{for(var e in r)v.o(r,e)&&!v.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var r=v.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),r=v.n(n),e=v(795),t=v.n(e),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),l=v.n(c),p=v(589),u=v.n(p),d=v(241),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),r()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,v(413),document.querySelector("body").innerHTML='\n<header>\n    <span class="logo">Gastronomy Deluxe</span>\n    <nav>\n        <ul class="nav">\n            <li><a class="item" href="#">Home</a></li>\n            <li><a class="item" href="#">Menu</a></li>\n            <li><a class="item" href="#">Contact</a></li>\n        </ul>\n    </nav>\n\n</header>\n\n<main class="content"></main>\n\n<footer>\n    <a href="https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=luxury%20restaurant&position=0&from_view=keyword">Image by evening_tao &nbsp;</a> on Freepik\n</footer>\n'})();