(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1019:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(0),n=r.n(a),d=r(848),o=r.n(d),i=function(e){var t=e.url;return n.a.createElement(o.a,{name:"terra-form-radio",version:"4.0.0",url:t})}},2353:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));r(0);var a=r(275),n=r(1019);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i={};function l(e){var t=e.components,r=o(e,["components"]);return Object(a.mdx)("wrapper",d({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-radio-upgrade-guide"},"Terra Form Radio Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"props"},"Props"),Object(a.mdx)("h4",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"labelText")," prop's type changed from node to string."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"legend")," prop's type changed from node to string.")),Object(a.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Radio must be reviewed and updated to ensure only a string is being passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"labelText")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"legend ")," props. Solutions passing node data types need to be reworked to provide only a string."),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-outer-ring-checked-hover-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-hover-checked-outer-ring-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-outer-ring-checked-hover-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-hover-checked-outer-ring-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-left"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-field-error-icon"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-field-error-background")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-margin-right")),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-padding-right")))}l.isMDXComponent=!0},848:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(0)),n=i(r(3)),d=i(r(5)),o=i(r(849));function i(e){return e&&e.__esModule?e:{default:e}}var l=d.default.bind(o.default),m={name:n.default.string.isRequired,url:n.default.string,version:n.default.string.isRequired},c=function(e){var t=e.name,r=e.url,n=e.version;return a.default.createElement("div",{className:l("badge-container")},a.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},a.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(n))))};c.propTypes=m;var u=c;t.default=u},849:function(e,t,r){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=328-ae90fb10a7fa9aafd445.js.map