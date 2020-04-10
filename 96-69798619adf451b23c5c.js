(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(848),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-action-footer",version:"2.37.0",url:t})}},1053:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},1562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(280)),o=c(n(188)),l=c(n(971));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{start:r.default.createElement(a.default,{href:"#"},"Start Action")}))}},1563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(53)),o=c(n(188)),l=c(n(971));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{end:r.default.createElement(a.default,{text:"End Action"})}))}},1564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(53)),o=u(n(280)),l=u(n(281)),c=u(n(188)),d=u(n(971));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(d.default,null,r.default.createElement(c.default,{start:r.default.createElement(o.default,{href:"#"},"Start Action"),end:r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(a.default,{text:"Submit",variant:a.default.Opts.Variants.EMPHASIS})),r.default.createElement(a.default,{text:"Cancel"}))}))}},2893:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var r=n(0),a=n.n(r),o=n(275),l=n(1052),c=n(1562),d=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function m(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}m.isMDXComponent=!0;var s=n(847),f=n.n(s),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Single Start Action",description:n,example:a.a.createElement(d.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},b=n(1563),x=n.n(b);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O={};function y(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",g({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      end={<Button text=\"End Action\" />}\n    />\n  </ExampleTemplate>\n);\n\n")))}y.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Single End Action",description:n,example:a.a.createElement(x.a,null),exampleSrc:a.a.createElement(y,null),isExpanded:r})},j=n(1564),E=n.n(j);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function S(e){var t=e.components,n=N(e,["components"]);return Object(o.mdx)("wrapper",T({},P,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n      end={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Submit\" variant={Button.Opts.Variants.EMPHASIS} />\n          </Spacer>\n          <Button text=\"Cancel\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}S.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Multiple Start End Actions",description:n,example:a.a.createElement(E.a,null),exampleSrc:a.a.createElement(S,null),isExpanded:r})},k=n(850),A=n.n(k);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=function(){return Object(o.mdx)(A.a,{rows:[{name:"start",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Actions to be displayed in the start socket"))}return t.isMDXComponent=!0,t({})}},{name:"end",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Actions to be displayed in the end socket"))}return t.isMDXComponent=!0,t({})}}]})};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={};function q(e){var t=e.components,n=F(e,["components"]);return Object(o.mdx)("wrapper",D({},R,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-action-footer"},"Terra Action Footer"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-action-footer")," component is a footer bar that contains two sockets, start and end, for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),Object(o.mdx)("p",null,"Terra provides a Standard, Centered, and Block-style variations for Action Footer:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"#usage"}),"Standard Action Footer")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"/terra-core/components/terra-action-footer/action-footer/centered"}),"Centered Action Footer")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"/terra-core/components/terra-action-footer/action-footer/block/"}),"Block Action Footer"))),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",D({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-action-footer"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",D({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",D({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",D({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",D({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",D({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",D({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",D({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",D({parentName:"pre"},{className:"language-jsx"}),"import ActionFooter from 'terra-action-footer';\n")),Object(o.mdx)("p",null,Object(o.mdx)("a",D({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{title:"Single Start Action",mdxType:"SingleStartActionExample"}),Object(o.mdx)(v,{title:"Single End Action",mdxType:"SingleEndActionExample"}),Object(o.mdx)(w,{title:"Multiple Start and End Actions",mdxType:"MultipleStartEndActionsExample"}),Object(o.mdx)("h2",{id:"standard-action-footer-props"},"Standard Action Footer Props"),Object(o.mdx)(B,{mdxType:"ActionFooterPropsTable"}))}q.isMDXComponent=!0},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(851));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=u(t).call(this,e))||"object"!==d(a)&&"function"!=typeof a?i(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(i(n)),n.handleCodeToggle=n.handleCodeToggle.bind(i(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,c=this.state,d=c.isExpanded,u=c.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":u})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),d&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var x=b;t.default=x},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(849));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),u={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(a))))};i.propTypes=u;var p=i;t.default=p},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(852));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),u={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},i=function(e){var t=e.rows;return r.default.createElement("table",{className:d("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:d("tr")},r.default.createElement("th",{className:d("th")},"Prop Name"),r.default.createElement("th",{className:d("th")},"Type"),r.default.createElement("th",{className:d("th")},"Is Required"),r.default.createElement("th",{className:d("th")},"Default Value"),r.default.createElement("th",{className:d("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:d(["td","props-td"])},e.type()),r.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};i.propTypes=u;var p=i;t.default=p},851:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},852:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(5)),o=c(n(3)),l=c(n(1053));function c(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(l.default),u={children:o.default.node.isRequired},i=function(e){var t=e.children;return r.default.createElement("div",{className:d("content-wrapper")},t)};i.propTypes=u;var p=i;t.default=p}}]);
//# sourceMappingURL=96-69798619adf451b23c5c.js.map