(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{2809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(933));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(o.default,{id:"href",text:"Href Tag",href:"www.google.com"})};t.default=i},933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),u=a(n(5)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=a(n(942));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=u.default.bind(c.default),g={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(f,e);var t,n,o,u,c=(t=f,function(){var e,n=v(t);if(_()){var r=v(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=c.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(h(t)),t.handleOnBlur=t.handleOnBlur.bind(h(t)),t}return n=f,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===i.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,u=e.onClick,i=(e.onBlur,e.onFocus),c=(e.onKeyUp,p(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),f=O(["tag",{"is-focused":this.state.focused},{"is-interactive":o||u},c.className]),a=O("icon"),l=t?r.default.createElement("span",{className:a},t):null,d=o||u?o?"a":"button":"span";return r.default.createElement(d,s({},c,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:i,href:o}),l,n)}}])&&d(n.prototype,o),u&&d(n,u),f}(r.default.Component);m.propTypes=g;var w=m;t.default=w},942:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=460-6dc4a56ac7df8e40fea1.js.map