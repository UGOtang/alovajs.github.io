"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=v({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=a(2389);const y="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},6091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",sidebar_position:30},i=void 0,u={unversionedId:"strategy/sensorless-data-interaction/start-silent-factory",id:"strategy/sensorless-data-interaction/start-silent-factory",title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",description:"\u6211\u4eec\u5c06\u6240\u6709\u573a\u666f\u5316\u7684\u8bf7\u6c42\u7b56\u7565\u653e\u5728\u4e86\u53eb\u505a@alova/scene-*\u7684 js \u5305\u4e2d\uff0c\u4f7f\u7528\u524d\u4f60\u9700\u8981\u5148\u5b89\u88c5\u5b83\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/07-strategy/01-sensorless-data-interaction/03-start-silent-factory.md",sourceDirName:"07-strategy/01-sensorless-data-interaction",slug:"/strategy/sensorless-data-interaction/start-silent-factory",permalink:"/zh-CN/strategy/sensorless-data-interaction/start-silent-factory",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/07-strategy/01-sensorless-data-interaction/03-start-silent-factory.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u6570\u636e",permalink:"/zh-CN/strategy/sensorless-data-interaction/virtual-data"},next:{title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd",permalink:"/zh-CN/strategy/sensorless-data-interaction/conservative-request"}},c={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u6240\u6709\u573a\u666f\u5316\u7684\u8bf7\u6c42\u7b56\u7565\u653e\u5728\u4e86\u53eb\u505a",(0,r.kt)("inlineCode",{parentName:"p"},"@alova/scene-*"),"\u7684 js \u5305\u4e2d\uff0c\u4f7f\u7528\u524d\u4f60\u9700\u8981\u5148\u5b89\u88c5\u5b83\u3002"),(0,r.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"))),(0,r.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"))),(0,r.kt)(o.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n")))),(0,r.kt)("p",null,"\u9759\u9ed8\u961f\u5217\u9ed8\u8ba4\u4e0d\u542f\u52a8\uff0c\u9700\u8981\u6211\u4eec\u6307\u5b9a\u542f\u52a8\u53c2\u6570\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"bootSilentFactory"),"\u6765\u521d\u59cb\u5316\u9759\u9ed8\u5de5\u5382\uff0c\u5b83\u5c06\u901a\u8fc7\u6307\u5b9a\u7684\u914d\u7f6e\u9879\u6765\u8bfb\u53d6\u8fd8\u672a\u6267\u884c\u7684\u8bf7\u6c42\u5230\u5bf9\u5e94\u7684\u9759\u9ed8\u961f\u5217\u4e2d\u5e76\u542f\u52a8\u8fd9\u4e9b\u961f\u5217\u3002"),(0,r.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { bootSilentFactory } from '@alova/scene-vue';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n"))),(0,r.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { bootSilentFactory } from '@alova/scene-react';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n"))),(0,r.kt)(o.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { bootSilentFactory } from '@alova/scene-svelte';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"delay"),"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5b9e\u9645\u573a\u666f\u4e0b\uff0c\u8fdb\u5165\u5f53\u524d\u9875\u9762\u65f6\u4e5f\u4f1a\u53d1\u9001\u8bf7\u6c42\u52a0\u8f7d\u9875\u9762\u6570\u636e\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u53ef\u4ee5\u66f4\u5feb\u5730\u770b\u5230\u9875\u9762\u6570\u636e\uff0c\u9700\u8981\u5c06\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u524d\u7f6e\u5230\u961f\u5217\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u540e\u7f6e\u5230\u961f\u5217\u5c3e\u90e8\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u7b49\u5230\u524d\u9762\u7684\u6240\u6709\u8bf7\u6c42\u5b8c\u6210\u624d\u4f1a\u52a0\u8f7d\u9875\u9762\u6570\u636e\uff0c\u8fd9\u663e\u7136\u662f\u4e0d\u5408\u9002\u7684\uff0c\u56e0\u6b64\u901a\u8fc7\u5ef6\u8fdf\u4e00\u6bb5\u65f6\u95f4\u521d\u59cb\u5316\u6765\u8ba9\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u5148\u8fdb\u5165\u961f\u5217\uff0c\u8fbe\u5230\u201c\u63d2\u961f\u201d\u7684\u6548\u679c\uff0c\u5177\u4f53\u7684\u5ef6\u8fdf\u65f6\u95f4\u9700\u8981\u6839\u636e\u9875\u9762\u6e32\u67d3\u6240\u9700\u7684\u65f6\u95f4\u800c\u5b9a\u3002")))}d.isMDXComponent=!0}}]);