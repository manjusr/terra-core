(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1220:function(e,t,r){e.exports={background:"CallbackButtons-module__background___2fG9v",green:"CallbackButtons-module__green___1dNtS",gray:"CallbackButtons-module__gray___1Xb4P",red:"CallbackButtons-module__red___3V1gI",white:"CallbackButtons-module__white___3hRS0",blue:"CallbackButtons-module__blue___3gdco"}},2508:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(r(0)),u=i(r(5)),l=f(r(994)),a=i(r(1220));function i(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=u.default.bind(a.default),s=function(){var e=d((0,o.useState)("green"),2),t=e[0],r=e[1];return o.default.createElement("div",{className:y("background",t)},o.default.createElement(l.default,{primaryOptionLabel:"Gray",onSelect:function(){r("gray")}},o.default.createElement(l.Item,{label:"Red",onSelect:function(){r("red")},id:"red"}),o.default.createElement(l.Item,{label:"White",onSelect:function(){r("white")},id:"white"}),o.default.createElement(l.Item,{label:"Blue",onSelect:function(){r("blue")},id:"blue"})))};t.default=s}}]);
//# sourceMappingURL=490-1da7cd37eaf0a249fafa.js.map