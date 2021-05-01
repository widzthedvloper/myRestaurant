(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(645),r=n.n(o),c=n(667),i=n.n(c),a=n(954),d=n(456),s=n(394),l=n(33),u=r()((function(e){return e[1]})),p=i()(a),m=i()(d),h=i()(s),f=i()(l);u.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n#content {\n  padding-top: 25vh;\n  width: 100%;\n  height: 100vh;\n  background: url("+p+") no-repeat;\n}\n\n.nav-pills {\n  background: orange;\n}\n\n.content-div {\n  background-color: hsla(0, 0%, 0%, 0.2);\n  padding: 20px;\n}\n\n.content-div .home-title {\n  font-size: 128px;\n}\n\n.content-div .home-paragraph {\n  font-size: 48px;\n}\n\n.content-div button {\n  background-color: #ffa500;\n  border-style: unset;\n  height: 48px;\n  color: #fff;\n  font-size: 38px;\n  padding: 0 5px;\n}\n\n.image {\n  background-size: cover;\n  height: 350px;\n}\n\n.im1 {\n  background-image: url("+m+");\n}\n\n.im2 {\n  background-image: url("+h+");\n}\n\n.im3 {\n  background-image: url("+f+");\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.lc1,\n.lc2,\n.lc3 {\n  width: 25%;\n  float: left;\n  margin-right: 10%;\n}\n\n.lc1 {\n  margin-left: 2.5%;\n}\n\n.lc3 {\n  margin-right: 2.5%;\n}\n\n.lc4 {\n  clear: both;\n}\n\nnav {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n}\n",""]);const v=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],d=t.base?a[0]+t.base:a[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=i(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:l,updater:f(p,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var c=n.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function p(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function f(e,t){var n,o,r;if(t.singleton){var c=h++;n=m||(m=d(t)),o=u.bind(null,n,c,!1),r=u.bind(null,n,c,!0)}else n=d(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);c[r].references--}for(var d=a(e,t),s=0;s<n.length;s++){var l=i(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=d}}}},954:(e,t,n)=>{e.exports=n.p+"e30b4ef700633086cc46.png"},456:(e,t,n)=>{e.exports=n.p+"348656bcdc9bdcb7e7aa.jpg"},394:(e,t,n)=>{e.exports=n.p+"3ae70a6e352d634606a3.jpg"},33:(e,t,n)=>{e.exports=n.p+"3a96774d7eb30c7e8afc.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=document.getElementById("body"),t=document.getElementById("content"),o=function(){const e=document.createElement("div");e.setAttribute("class","container text-white content-div");const n=document.createElement("h1");n.setAttribute("class","home-title");const o=document.createTextNode("HUNGRY?");n.appendChild(o);const r=document.createElement("p"),c=document.createTextNode("We have a large menu of delicious pizza to demolish any appetite.");r.setAttribute("class","home-paragraph"),r.appendChild(c);const i=document.createElement("button");i.setAttribute("class","order-button");const a=document.createTextNode("ORDER NOW");i.appendChild(a),e.appendChild(n),e.appendChild(r),e.appendChild(i),t.appendChild(e)},r=document.getElementById("content");var c=n(379),i=n.n(c),a=n(426);function d(){document.getElementById("content").innerHTML=""}i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,function(){const t=document.createElement("nav");t.setAttribute("class","nav nav-pills nav-justified");const n=document.createElement("a"),o=document.createTextNode("HOME");n.setAttribute("class","nav-link text-light"),n.setAttribute("id","home"),n.appendChild(o);const r=document.createElement("a"),c=document.createTextNode("MENU");r.setAttribute("class","nav-link text-light"),r.setAttribute("id","menu"),r.appendChild(c);const i=document.createElement("a"),a=document.createTextNode("CONTACT");i.setAttribute("class","nav-link text-light"),i.setAttribute("id","contact"),i.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(i),e.appendChild(t)}(),o(),document.getElementById("home").addEventListener("click",(function(){d(),o()})),document.getElementById("menu").addEventListener("click",(function(){d(),function(){const e=document.createElement("div");e.setAttribute("class","container text-white content-div");const t=document.createElement("div");t.setAttribute("class","lc1");const n=document.createElement("div");n.setAttribute("class","im1 image");const o=document.createElement("div");o.setAttribute("class","dt1");const c=document.createElement("p"),i=document.createTextNode("READY FOR ORDER!!!");c.appendChild(i),o.appendChild(c),t.appendChild(n),t.appendChild(o);const a=document.createElement("div");a.setAttribute("class","lc2");const d=document.createElement("div");d.setAttribute("class","im2 image");const s=document.createElement("div");s.setAttribute("class","dt2");const l=document.createElement("p"),u=document.createTextNode("READY FOR ORDER!!!");l.appendChild(u),s.appendChild(l),a.appendChild(d),a.appendChild(s);const p=document.createElement("div");p.setAttribute("class","lc3");const m=document.createElement("div");m.setAttribute("class","im3 image");const h=document.createElement("div");h.setAttribute("class","dt3");const f=document.createElement("p"),v=document.createTextNode("READY FOR ORDER!!!");f.appendChild(v),h.appendChild(f),p.appendChild(m),p.appendChild(h),e.appendChild(t),e.appendChild(a),e.appendChild(p);const g=document.createElement("div");g.setAttribute("class","lc4"),e.appendChild(g),r.appendChild(e)}()}))})()})();