//# sourceMappingURL=ie11CustomProperties.js.map
!function(){function z(e,g){var k=0,m=[];g&&g.matches(e.selector)&&m.push(g);for(p&&Array.prototype.push.apply(m,(g||n).querySelectorAll(e.selector));g=m[k++];)e.elements.has(g)||(e.elements.set(g,!0),e.parsed&&e.parsed.call(g,g),e.immediate&&e.immediate.call(g,g))}function q(e){for(var g=0,k,m,h;k=e[g++];)for(m=k.addedNodes,k=0;h=m[k++];)if(1===h.nodeType)for(var r=0,n;n=A[r++];)z(n,h)}function t(e,g,k){g=Object.getOwnPropertyDescriptor(g,e);Object.defineProperty(k,e,g)}Element.prototype.matches||
(Element.prototype.matches=Element.prototype.msMatchesSelector);var u=window;u.c1||(u.c1={});var A=[],n=document,v;c1.onElement=function(e,g){"function"===typeof g&&(g={parsed:g});e={selector:e,immediate:g.immediate,elements:new WeakMap};g.parsed&&(e.parsed=function(e){requestAnimationFrame(function(){g.parsed(e)})});for(var k=n.querySelectorAll(e.selector),m=0,h;h=k[m++];)e.elements.set(h,!0),e.parsed&&e.parsed.call(h,h),e.immediate&&e.immediate.call(h,h);A.push(e);v||(v=new MutationObserver(q),
v.observe(n,{childList:!0,subtree:!0}));z(e)};var p=!1;document.addEventListener("DOMContentLoaded",function(){p=!0});"classList"in Element.prototype||t("classList",HTMLElement.prototype,Element.prototype);"innerHTML"in Element.prototype||t("innerHTML",HTMLElement.prototype,Element.prototype);"sheet"in SVGStyleElement.prototype||Object.defineProperty(SVGStyleElement.prototype,"sheet",{get:function(){for(var e=document.styleSheets,g=0,k;k=e[g++];)if(k.ownerNode===this)return k}})}();
!function(){function z(a,c){return c.replace(/url\(([^)]+)\)/g,function(b,c){c=c.trim().replace(/(^['"]|['"]$)/g,"");if(c.match(/^([a-z]+:|\/)/))return b;a=a.replace(/\?.*/,"");return"url("+a+"./../"+c+")"})}function q(a){return a.replace(J,function(a,b,d,f,e){return b+"-ie-"+(e?"\u2757":"")+f}).replace(K,function(a,b,d,f){return b+"-ieVar-"+(f?"\u2757":"")+d+"; "+d})}function t(a){a["z-index"];var c=a.cssText,b=c.match(L),d,f;if(b){var e=[];for(d=0;f=b[d++];)f=f.slice(7,-1),"\u2757"===f[0]&&(f=f.substr(1)),
e.push(f),w[f]||(w[f]=[]),w[f].push(a)}if(a=c.match(M)){var g={};for(d=0;f=a[d++];)b=f.substr(4).split(":"),c=b[0],b=b[1],"\u2757"===c[0]&&(c=c.substr(1)),g[c]=b}return{getters:e,setters:g}}function u(a,c){a.innerHTML=c;a.setAttribute("ie-polyfilled",!0);a=a.sheet.rules;c=0;for(var b;b=a[c++];){var d=t(b.style);d.getters&&A(b.selectorText,d.getters);d.setters&&v(b.selectorText,d.setters);(b=b.parentRule&&b.parentRule.media&&b.parentRule.media.mediaText)&&(d.getters||d.setters)&&matchMedia(b).addListener(function(){h(document.documentElement)})}e()}
function A(a,c){g(a);c1.onElement(k(a),{immediate:function(b){n(b,c,a);r(b)}})}function n(a,c,b){var d=0,f,e,g=b.split(",");a.setAttribute("iecp-needed",!0);a.ieCPSelectors||(a.ieCPSelectors={});for(;f=c[d++];)for(e=0;b=g[e++];)b=b.trim().split("::"),a.ieCPSelectors[f]||(a.ieCPSelectors[f]=[]),a.ieCPSelectors[f].push({selector:b[0],pseudo:b[1]?"::"+b[1]:""})}function v(a,c){g(a);c1.onElement(k(a),{immediate:function(a){p(a,c)}})}function p(a,c){a.ieCP_setters||(a.ieCP_setters={});for(var b in c)a.ieCP_setters["--"+
b]=1;h(a)}function e(){for(var a in w)for(var c=w[a],b=0,d;d=c[b++];)if(!d.owningElement){var f=d["-ieVar-"+a];f&&(f=B(getComputedStyle(document.documentElement),f),""!==f&&(d[a]=f))}}function g(a){a=a.split(",")[0];var c={},b;for(b in G){var d=a.split(":"+b);if(1<d.length){var f=d[1].match(/^[^\s]*/),d=k(d[0]+f);c.listeners=G[b];c1.onElement(d,function(a){return function(b){b.addEventListener(a.listeners.on,F);b.addEventListener(a.listeners.off,F)}}(c))}c={listeners:c.listeners}}}function k(a){return a.replace(N,
"").replace(":not()","")}function m(a){a.ieCP_unique||(a.ieCP_unique=++O,a.classList.add("iecp-u"+a.ieCP_unique));var c=getComputedStyle(a);if(a.ieCP_sheet)for(;a.ieCP_sheet.rules[0];)a.ieCP_sheet.deleteRule(0);for(var b in a.ieCPSelectors){var d=c["-ieVar-\u2757"+b],f=d||c["-ieVar-"+b];if(f){var e={},f=B(c,f,e);d&&(f+=" !important");for(var g=0,h;h=a.ieCPSelectors[b][g++];)if("%styleAttr"===h.selector)a.style[b]=f;else if(d||!1===e.allByRoot){var k=h.selector,l=a;if(!l.ieCP_sheet){var m=document.createElement("style");
m.ieCP_elementSheet=1;document.head.appendChild(m);l.ieCP_sheet=m.sheet}l.ieCP_sheet.insertRule(k+".iecp-u"+a.ieCP_unique+h.pseudo+" {"+b+":"+f+"}",0)}}}}function h(a){if(a){var c=a.querySelectorAll("[iecp-needed]");a.hasAttribute&&a.hasAttribute("iecp-needed")&&r(a);a=0;for(var b;b=c[a++];)r(b)}}function r(a){C[a.uniqueNumber]=a;D||(D=!0,requestAnimationFrame(function(){D=!1;E=!0;for(var a in C)m(C[a]);requestAnimationFrame(function(){E=!1});C={}}))}function F(a){h(a.target)}function B(a,c,b){return c.replace(P,
function(c,f,e,g){f=f.trim();c=a.getPropertyValue(f);b&&a.lastPropertyServedBy!==document.documentElement&&(b.allByRoot=!1);""===c&&void 0!==g&&(c=g.trim());return c})}function Q(a,c){var b=new XMLHttpRequest;b.open("GET",a);b.overrideMimeType("text/css");b.onload=function(){200<=b.status&&400>b.status&&c(b.responseText)};b.send()}var l=document.createElement("i");l.style.setProperty("--x","y");if("y"!==l.style.getPropertyValue("--x")&&l.msMatchesSelector){var J=/([\s{;])(--([A-Za-z0-9-_]+\s*:[^;!}{]+)(!important)?)(?=\s*([;}]|$))/g,
K=/([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g,L=/-ieVar-([^:]+):/g,M=/-ie-([^};]+)/g,H=/var\(/,N=/:(hover|active|focus|target|:before|:after)/;c1.onElement('link[rel="stylesheet"]',{immediate:function(a){Q(a.href,function(c){var b=q(c);c!==b&&(b=z(a.href,b),a.disabled=!0,c=document.createElement("style"),a.parentNode.insertBefore(c,a),u(c,b))})}});c1.onElement("style",{immediate:function(a){if(!a.hasAttribute("ie-polyfilled")&&!a.ieCP_elementSheet){var c=a.innerHTML,
b=q(c);c!==b&&u(a,b)}}});c1.onElement("[ie-style]",{immediate:function(a){var c=q("{"+a.getAttribute("ie-style")).substr(1);a.style.cssText+=";"+c;c=t(a.style);c.getters&&n(a,c.getters,"%styleAttr");c.setters&&p(a,c.setters)}});var w={},G={hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focusin",off:"focusout"},active:{on:"CSSActivate",off:"CSSDeactivate"}},x=null;document.addEventListener("mousedown",function(a){setTimeout(function(){if(a.target===document.activeElement){var c=document.createEvent("Event");
c.initEvent("CSSActivate",!0,!0);x=a.target;x.dispatchEvent(c)}})});document.addEventListener("mouseup",function(){if(x){var a=document.createEvent("Event");a.initEvent("CSSDeactivate",!0,!0);x.dispatchEvent(a);x=null}});var O=0,C={},D=!1,E=!1,P=/var\(([^),]+)(\,(.+))?\)/g,R=new MutationObserver(function(a){if(!E)for(var c=0,b;b=a[c++];)"ie-polyfilled"!==b.attributeName&&"iecp-needed"!==b.attributeName&&h(b.target)});setTimeout(function(){R.observe(document,{attributes:!0,subtree:!0})});var I=location.hash;
addEventListener("hashchange",function(a){if(a=document.getElementById(location.hash.substr(1))){var c=document.getElementById(I.substr(1));h(a);h(c)}else h(document);I=location.hash});var l=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"style"),S=l.get;l.get=function(){var a=S.call(this);a.owningElement=this;return a};Object.defineProperty(HTMLElement.prototype,"style",l);var T=getComputedStyle;window.getComputedStyle=function(a){var c=T.apply(this,arguments);c.computedFor=a;return c};var l=
CSSStyleDeclaration.prototype,U=l.getPropertyValue;l.getPropertyValue=function(a){this.lastPropertyServedBy=!1;if("-"!==a[0]||"-"!==a[1])return U.apply(this,arguments);var c=a.substr(2),b="-ie-"+c,c="-ie-\u2757"+c,d=this[c]||this[b];if(this.computedFor)if(void 0!==d)H.test(d)&&(d=B(this,d)),this.lastPropertyServedBy=this.computedFor;else if(!y[a]||y[a].inherits)for(var f=this.computedFor.parentNode;1===f.nodeType;){if(f.ieCP_setters&&f.ieCP_setters[a]){var e=getComputedStyle(f),e=e[c]||e[b];if(void 0!==
e){d=e;H.test(d)&&(d=B(this,d));this.lastPropertyServedBy=f;break}}f=f.parentNode}void 0===d&&y[a]&&(d=y[a].initialValue);void 0===d&&(d="");return d};var V=l.setProperty;l.setProperty=function(a,c,b){if("-"!==a[0]||"-"!==a[1])return V.apply(this,arguments);if(this.owningElement){var d=this.owningElement;d.ieCP_setters||(d.ieCP_setters={});d.ieCP_setters[a]=1;h(d)}a="-ie-"+("important"===b?"\u2757":"")+a.substr(2);this.cssText+="; "+a+":"+c+";"};window.CSS||(window.CSS={});var y={};CSS.registerProperty=
function(a){y[a.name]=a}}}();