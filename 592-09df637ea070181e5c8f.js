(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{2719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(5)),l=u(n(186)),a=u(n(183)),i=u(n(874));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=o.default.bind(i.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,o,i,u=(t=c,function(){var e,n=v(t);if(p()){var r=v(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return y(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(d(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(d(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(d(e)),e.forceUpdateForTest=function(){e.forceUpdate()},e}return n=c,(o=[{key:"componentDidMount",value:function(){document.addEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"addOverlay",value:function(){return r.default.createElement(l.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,onRequestClose:this.handleOnRequestESC,id:this.state.id,zIndex:"6000"},r.default.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),r.default.createElement("br",null),r.default.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key."))}},{key:"render",value:function(){return r.default.createElement(a.default,{className:h("overlay-container2"),overlay:this.addOverlay(),id:"test-overlay-container"},r.default.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay"),r.default.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"))}}])&&s(n.prototype,o),i&&s(n,i),c}(r.default.Component);t.default=b},874:function(e,t,n){e.exports={"overlay-container1":"OverlayTestCommon-module__overlay-container1___2VZU8","overlay-container2":"OverlayTestCommon-module__overlay-container2___1gKt6"}}}]);
//# sourceMappingURL=592-09df637ea070181e5c8f.js.map