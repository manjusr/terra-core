(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1004:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(0)),n=u(l(3)),a=u(l(5)),o=u(l(1005));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=a.default.bind(o.default),f={children:n.default.node.isRequired,dividerStyle:n.default.oneOf(["vertical","horizontal","both"]),refCallback:n.default.func},s=function(e){var t=e.children,l=e.dividerStyle,n=e.refCallback,a=i(e,["children","dividerStyle","refCallback"]),o=l?"divider-".concat(l):void 0,u=d(["cell-grid",o]);return r.default.createElement("div",c({},a,{className:a.className?"".concat(u," ").concat(a.className):u,ref:n}),t)};s.propTypes=f;var p=s;t.default=p},1005:function(e,t,l){e.exports={"cell-grid":"CellGrid-module__cell-grid___2e67L","divider-horizontal":"CellGrid-module__divider-horizontal___rrj8H","divider-both":"CellGrid-module__divider-both___1Lv6x","divider-vertical":"CellGrid-module__divider-vertical___2zr77"}},1006:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(l(0)),n=c(l(3)),a=c(l(5)),o=c(l(1007)),u=l(1008);function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var f=a.default.bind(o.default),s={children:n.default.node,refCallback:n.default.func,width:n.default.shape({static:n.default.shape({value:n.default.number.isRequired,unit:n.default.string.isRequired}),percentage:n.default.number,scalar:n.default.number})},p=function(e){var t=e.children,l=e.refCallback,n=e.width,a=d(e,["children","refCallback","width"]),o=f(["cell"]);return r.default.createElement("div",i({},a,{style:(0,u.styleFromWidth)(n),className:a.className?"".concat(o," ").concat(a.className):o,ref:l}),t)};p.propTypes=s,p.defaultProps={children:[]};var y=p;t.default=y},1007:function(e,t,l){e.exports={cell:"Cell-module__cell___2eioH"}},1008:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleFromWidth=t.default=void 0;var r=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},n=function(e){if(e)return e.static?r("".concat(e.static.value).concat(e.static.unit)):e.percentage?r("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0};t.styleFromWidth=n;var a={styleFromWidth:n};t.default=a},2486:function(e,t,l){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=l(0))&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}l.default=e,t&&t.set(e,l);return l}(l(958));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var c=function(){return a.default.createElement("div",null,a.default.createElement(o.default,{dividerStyle:"vertical"},a.default.createElement(o.Cell,{key:"cell-0"},"Vertical 1"),a.default.createElement(o.Cell,{key:"cell-1"},"Vertical 2"),a.default.createElement(o.Cell,{key:"cell-2"},"Vertical 3")),a.default.createElement(o.default,{dividerStyle:"horizontal"},a.default.createElement(o.Cell,{key:"cell-0"},"Horizontal 1"),a.default.createElement(o.Cell,{key:"cell-1"},"Horizontal 2"),a.default.createElement(o.Cell,{key:"cell-2"},"Horizontal 3")),a.default.createElement(o.default,{dividerStyle:"both"},a.default.createElement(o.Cell,{key:"cell-0"},"Both 1"),a.default.createElement(o.Cell,{key:"cell-1"},"Both 2"),a.default.createElement(o.Cell,{key:"cell-2"},"Both 3")))};t.default=c},958:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var r=a(l(1004)),n=a(l(1006));function a(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o}}]);
//# sourceMappingURL=179-b9b507d67beea83589ee.js.map