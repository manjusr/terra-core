(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1095:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),o=n(848),l=n.n(o),s=function(e){var t=e.url;return r.a.createElement(l.a,{name:"terra-i18n",version:"4.26.0",url:t})}},2359:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);var a=n(275),r=n(1095);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function i(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(r.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-i18n-upgrade-guide"},"Terra i18n Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),Object(a.mdx)("p",null,"The terra-i18n ",Object(a.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," pre-build tool has been removed from this package."),Object(a.mdx)("p",null,"Along with this, the post-install script which wrote default intl and translation loaders has been removed."),Object(a.mdx)("p",null,"To upgrade, use the ",Object(a.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-aggregate-translations#--terra-aggregate-translations"}),Object(a.mdx)("inlineCode",{parentName:"a"},"aggregate-translations")," pre-build tool")," to generate ",Object(a.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files needed for internationalizing terra components instead of relying on the ",Object(a.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files being generated by the terra-i18n postinstall step."),Object(a.mdx)("p",null,"If you require translations in your Jest tests, you can create a ",Object(a.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js")," file for your app to call the aggregate-translations pre-build tool."),Object(a.mdx)("p",null,"Add the following code to ",Object(a.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js"),":"),Object(a.mdx)("pre",null,Object(a.mdx)("code",o({parentName:"pre"},{className:"language-js"}),"const aggregateTranslations = require('terra-aggregate-translations');\n\nmodule.exports = () => {\n  aggregateTranslations();\n};\n")),Object(a.mdx)("p",null,"In your app's jest config file, add the following:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",o({parentName:"pre"},{className:"language-js"}),"globalSetup: './jestglobalsetup.js',\n// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules\nmoduleDirectories: [\n  'aggregated-translations',\n  'node_modules',\n],\n")),Object(a.mdx)("p",null,"Alternatively, you can use ",Object(a.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-enzyme-intl"}),"terra-enzyme-intl"),", which will make aggregating translations for Jest tests unnecessary. The ",Object(a.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-enzyme-intl"}),"terra-enzyme-intl")," package will use the translation keys for the translation strings instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io."),Object(a.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"terra-doc-template")))}i.isMDXComponent=!0},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(3)),o=s(n(5)),l=s(n(849));function s(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),d={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:i("badge-container")},a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(r))))};c.propTypes=d;var u=c;t.default=u},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=341-9171032887197ef973bf.js.map