(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),l=c(n(3)),a=c(n(277)),o=c(n(287)),i=c(n(72)),u=c(n(58));function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={allowClear:l.default.bool,children:l.default.node,label:l.default.string.isRequired,defaultValue:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),disabled:l.default.bool,error:l.default.node,help:l.default.node,hideRequired:l.default.bool,isIncomplete:l.default.bool,isInline:l.default.bool,isInvalid:l.default.bool,isLabelHidden:l.default.bool,labelAttrs:l.default.object,maxWidth:l.default.string,onChange:l.default.func,placeholder:l.default.string,required:l.default.bool,selectAttrs:l.default.object,selectId:l.default.string.isRequired,showOptional:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number,l.default.array])},m={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var t,n=e.allowClear,l=e.children,i=e.defaultValue,u=e.disabled,c=e.error,s=e.help,m=e.hideRequired,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,_=e.isLabelHidden,y=e.label,v=e.labelAttrs,O=e.maxWidth,g=e.onChange,h=e.placeholder,j=e.required,S=e.selectAttrs,T=e.selectId,E=e.showOptional,w=e.value,M=p(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return s&&c&&x?t="".concat(T,"-error ").concat(T,"-help"):(s&&(t="".concat(T,"-help")),c&&x&&(t="".concat(T,"-error"))),r.default.createElement(a.default,d({},M,{label:y,labelAttrs:v,error:c,help:s,hideRequired:m,required:j,showOptional:E,isInvalid:x,isInline:b,isLabelHidden:_,htmlFor:T,maxWidth:O}),r.default.createElement(o.default,d({},S,{ariaLabel:y,allowClear:n,"aria-describedby":t,disabled:S.disabled||u,id:T,isIncomplete:f,isInvalid:x,defaultValue:i,onChange:g,placeholder:h,required:j,value:w}),l))};f.propTypes=s,f.defaultProps=m,f.Option=u.default,f.OptGroup=i.default;var b=f;t.default=b},1966:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1192)),a=i(n(5)),o=i(n(854));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c=function(){return r.default.createElement(l.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:u("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},1967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1192)),a=i(n(5)),o=i(n(854));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c=function(){return r.default.createElement(l.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:u("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},1968:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1192)),a=i(n(5)),o=i(n(854));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c=function(){return r.default.createElement(l.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:u("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},2890:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(0),l=n.n(r),a=n(275),o=n(886),i=n(1966),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p={};function s(e){var t=e.components,n=d(e,["components"]);return Object(a.mdx)("wrapper",c({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}s.isMDXComponent=!0;var m=n(847),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Single Select Field",description:n,example:l.a.createElement(u.a,null),exampleSrc:l.a.createElement(s,null),isExpanded:r})},x=n(1967),_=n.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var O={};function g(e){var t=e.components,n=v(e,["components"]);return Object(a.mdx)("wrapper",y({},O,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}g.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Required Single Select Field",description:n,example:l.a.createElement(_.a,null),exampleSrc:l.a.createElement(g,null),isExpanded:r})},j=n(1968),S=n.n(j);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var w={};function M(e){var t=e.components,n=E(e,["components"]);return Object(a.mdx)("wrapper",T({},w,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}M.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Incomplete Single Select Field",description:n,example:l.a.createElement(S.a,null),exampleSrc:l.a.createElement(M,null),isExpanded:r})},X=n(850),N=n.n(X);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var P=function(){return Object(a.mdx)(N.a,{rows:[{name:"allowClear",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether a clear option is available to clear the selection."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",C({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",C({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var I={};function k(e){var t=e.components,n=F(e,["components"]);return Object(a.mdx)("wrapper",q({},I,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-single-select-field"},"Terra Form Single Select Field"),Object(a.mdx)("p",null,"A convenience wrapper assembling a ",Object(a.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/src/SingleSelect.jsx"}),"terra-form-select SingleSelect")," within a ",Object(a.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"}),"terra-form-field"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",q({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("p",null,Object(a.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"}),"View component source code")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Single Select Field Example",mdxType:"SingleSelectFieldExample"}),Object(a.mdx)(h,{title:"Required Single Select Field Example",mdxType:"RequiredSingleSelectFieldExample"}),Object(a.mdx)(D,{title:"Incomplete Single Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSingleSelectFieldExample"}),Object(a.mdx)("h2",{id:"single-select-field-props"},"Single Select Field Props"),Object(a.mdx)(P,{mdxType:"SingleSelectFieldPropsTable"}))}k.isMDXComponent=!0},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(3)),a=i(n(5)),o=i(n(851));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(o.default),b={example:l.default.element,exampleSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},x=function(e){function t(e){var n,r,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(l=c(t).call(this,e))||"object"!==u(l)&&"function"!=typeof l?d(r):l).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,l=e.exampleSrc,a=e.title,o=e.description,i=this.state,u=i.isExpanded,c=i.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(a),r.default.createElement("div",{className:f("content",{"dynamic-content":c})},t.renderDescription(o),n),l&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},l)))}}]),t}(r.default.Component);x.propTypes=b,x.defaultProps={isExpanded:!1};var _=x;t.default=_},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(3)),a=i(n(5)),o=i(n(849));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c={name:l.default.string.isRequired,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.name,n=e.url,l=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(l))))};d.propTypes=c;var p=d;t.default=p},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(3)),a=i(n(5)),o=i(n(852));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c={rows:l.default.arrayOf(l.default.shape({name:l.default.string,type:l.default.func,required:l.default.bool,defaultValue:l.default.string,description:l.default.func}))},d=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};d.propTypes=c;var p=d;t.default=p},851:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},852:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},854:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),l=n.n(r),a=n(848),o=n.n(a),i=function(e){var t=e.url;return l.a.createElement(o.a,{name:"terra-form-select",version:"6.1.0",url:t})}}}]);
//# sourceMappingURL=104-6d7db19560cfbe3fb58e.js.map