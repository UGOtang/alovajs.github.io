"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),u=n(6550),i=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(d(t),i(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},9241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={title:"\u6570\u636e\u62c9\u53d6",sidebar_position:30},i=void 0,s={unversionedId:"request-timing/use-fetcher",id:"request-timing/use-fetcher",title:"\u6570\u636e\u62c9\u53d6",description:"\u5f53\u4f60\u6709\u4ee5\u4e0b\u9700\u6c42\u65f6\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-request-timing/03-use-fetcher.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-fetcher",permalink:"/zh-CN/request-timing/use-fetcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/04-request-timing/03-use-fetcher.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u6570\u636e\u62c9\u53d6",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",permalink:"/zh-CN/request-timing/use-watcher"},next:{title:"Response data management",permalink:"/zh-CN/category/response-data-management"}},c={},d=[{value:"\u8de8\u6a21\u5757/\u7ec4\u4ef6\u66f4\u65b0\u89c6\u56fe",id:"\u8de8\u6a21\u5757\u7ec4\u4ef6\u66f4\u65b0\u89c6\u56fe",level:2},{value:"\u9884\u52a0\u8f7d\u6570\u636e",id:"\u9884\u52a0\u8f7d\u6570\u636e",level:2},{value:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42",id:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u8bbe\u7f6e\u9759\u6001\u503c",id:"\u8bbe\u7f6e\u9759\u6001\u503c",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e force \u503c",id:"\u52a8\u6001\u8bbe\u7f6e-force-\u503c",level:3},{value:"\u4e0e useRequest \u548c useWatcher \u7684\u5dee\u5f02\u5bf9\u6bd4",id:"\u4e0e-userequest-\u548c-usewatcher-\u7684\u5dee\u5f02\u5bf9\u6bd4",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u4f60\u6709\u4ee5\u4e0b\u9700\u6c42\u65f6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9884\u52a0\u8f7d\u540e\u7eed\u6d41\u7a0b\u4e2d\u5c06\u4f1a\u4f7f\u7528\u5230\u7684\u6570\u636e\u5e76\u5b58\u653e\u5728\u7f13\u5b58\u4e2d\uff0c\u8ba9\u7528\u6237\u4e0d\u518d\u7b49\u5f85\u6570\u636e\u52a0\u8f7d\u7684\u8fc7\u7a0b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4fbf\u6377\u5730\u5b9e\u73b0\u8de8\u9875\u9762\u66f4\u65b0\u6570\u636e\uff08\u7c7b\u4f3c\u5168\u5c40\u72b6\u6001\uff09\uff0c\u4f8b\u5982\u4fee\u6539 todo \u5217\u8868\u7684\u67d0\u4e00\u9879\u540e\u91cd\u65b0\u62c9\u53d6\u6700\u65b0\u6570\u636e\uff0c\u54cd\u5e94\u540e\u5c06\u5237\u65b0\u754c\u9762\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useFetcher"),"\u5c31\u662f\u7528\u4e8e\u5b9e\u73b0\u4ee5\u4e0a\u573a\u666f\u7684 hook\uff0c\u901a\u8fc7\u5b83\u83b7\u53d6\u7684\u54cd\u5e94\u6570\u636e\u4e0d\u80fd\u76f4\u63a5\u63a5\u6536\u5230\uff0c\u4f46\u901a\u8fc7\u5b83\u62c9\u53d6\u7684\u6570\u636e\u9664\u4e86\u4f1a\u66f4\u65b0\u7f13\u5b58\u5916\u8fd8\u4f1a\u66f4\u65b0\u5bf9\u5e94\u7684\u72b6\u6001\uff0c\u4ece\u800c\u91cd\u65b0\u6e32\u67d3\u89c6\u56fe\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u5b83\u9884\u62c9\u53d6\u6570\u636e\u5e76\u4fdd\u5b58\u5230\u7f13\u5b58\u4e2d\uff0c\u6216\u4f18\u96c5\u5730\u8de8\u7ec4\u4ef6\u66f4\u65b0\u72b6\u6001\uff0c\u4f8b\u5982\u4fee\u6539 todo \u5217\u8868\u7684\u67d0\u4e00\u9879\u540e\u91cd\u65b0\u62c9\u53d6\u6700\u65b0\u6570\u636e\uff0c\u54cd\u5e94\u540e\u5c06\u4f1a\u5237\u65b0\u754c\u9762"),(0,a.kt)("h2",{id:"\u8de8\u6a21\u5757\u7ec4\u4ef6\u66f4\u65b0\u89c6\u56fe"},"\u8de8\u6a21\u5757/\u7ec4\u4ef6\u66f4\u65b0\u89c6\u56fe"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u5b9e\u73b0\u4fee\u6539\u67d0\u4e2a todo \u6570\u636e\uff0c\u5e76\u91cd\u65b0\u62c9\u53d6\u6700\u65b0\u7684 todo \u5217\u8868\u6570\u636e\uff0c\u8ba9\u89c6\u56fe\u66f4\u65b0\u3002"),(0,a.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- \u6e32\u67d3\u7edf\u4e00\u7684\u62c9\u53d6\u72b6\u6001\u3002 --\x3e\n  <div v-if=\"fetching\">{{ \u6b63\u5728\u540e\u53f0\u62c9\u53d6\u6570\u636e... }}</div>\n\n  \x3c!-- ... --\x3e\n  <button @click=\"handleSubmit\">\u4fee\u6539todo\u9879</button>\n</template>\n\n<script setup>\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      // \u6ce8\u610f\uff1a\u8fd9\u8fb9\u8bbe\u7f6e\u4e86name\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u65e0\u6cd5\u76f4\u63a5\u6307\u5b9aMethod\u5b9e\u4f8b\u65f6\uff0c\u8fc7\u6ee4\u51fa\u9700\u8981\u7684Method\u5b9e\u4f8b\n      // \u8be6\u89c1\u540e\u7eed\u7684\u300aMethod\u5b9e\u4f8b\u5339\u914d\u5668\u300b\u7ae0\u8282\n      name: 'todoList',\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const {\n    // fetching\u5c5e\u6027\u4e0eloading\u76f8\u540c\uff0c\u53d1\u9001\u62c9\u53d6\u8bf7\u6c42\u65f6\u4e3atrue\uff0c\u8bf7\u6c42\u7ed3\u675f\u540e\u4e3afalse\n    fetching,\n    error,\n    onSuccess,\n    onError,\n    onComplete,\n\n    // \u8c03\u7528fetch\u540e\u624d\u4f1a\u53d1\u9001\u8bf7\u6c42\u62c9\u53d6\u6570\u636e\uff0c\u53ef\u4ee5\u91cd\u590d\u8c03\u7528fetch\u591a\u6b21\u62c9\u53d6\u4e0d\u540c\u63a5\u53e3\u7684\u6570\u636e\n    fetch\n  } = useFetcher();\n\n  // \u5728\u4e8b\u4ef6\u4e2d\u89e6\u53d1\u6570\u636e\u62c9\u53d6\n  const handleSubmit = () => {\n    // todo\u9879\u4fee\u6539...\n\n    // \u5f00\u59cb\u62c9\u53d6\u66f4\u65b0\u540e\u7684\u6570\u636e\n    // \u60c5\u51b51\uff1a\u5f53\u4f60\u660e\u786e\u77e5\u9053\u62c9\u53d6todoList\u7b2c\u4e00\u9875\u6570\u636e\u65f6\uff0c\u4f20\u5165\u4e00\u4e2aMethod\u5b9e\u4f8b\n    fetch(getTodoList(1));\n\n    // \u60c5\u51b52\uff1a\u5f53\u4f60\u53ea\u77e5\u9053\u62c9\u53d6todoList\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u6570\u636e\u65f6\uff0c\u901a\u8fc7Method\u5b9e\u4f8b\u5339\u914d\u5668\u6765\u7b5b\u9009\n    fetch({\n      name: 'todoList',\n      filter: (method, index, ary) => {\n        // \u8fd4\u56detrue\u6765\u6307\u5b9a\u9700\u8981\u62c9\u53d6\u7684Method\u5b9e\u4f8b\n        return index === ary.length - 1;\n      }\n    });\n  };\n<\/script>\n"))),(0,a.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n        // \u6ce8\u610f\uff1a\u8fd9\u8fb9\u8bbe\u7f6e\u4e86name\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u65e0\u6cd5\u76f4\u63a5\u6307\u5b9aMethod\u5b9e\u4f8b\u65f6\uff0c\u8fc7\u6ee4\u51fa\u9700\u8981\u7684Method\u5b9e\u4f8b\n        // \u8be6\u89c1\u540e\u7eed\u7684\u300aMethod\u5b9e\u4f8b\u5339\u914d\u5668\u300b\u7ae0\u8282\n        name: 'todoList',\n        params: {\n            currentPage,\n            pageSize: 10\n        }\n    });\n};\n\nconst App = () => {\n    const {\n        // fetching\u5c5e\u6027\u4e0eloading\u76f8\u540c\uff0c\u53d1\u9001\u62c9\u53d6\u8bf7\u6c42\u65f6\u4e3atrue\uff0c\u8bf7\u6c42\u7ed3\u675f\u540e\u4e3afalse\n        fetching,\n        error,\n        onSuccess,\n        onError,\n        onComplete,\n\n        // \u8c03\u7528fetch\u540e\u624d\u4f1a\u53d1\u9001\u8bf7\u6c42\u62c9\u53d6\u6570\u636e\uff0c\u53ef\u4ee5\u91cd\u590d\u8c03\u7528fetch\u591a\u6b21\u62c9\u53d6\u4e0d\u540c\u63a5\u53e3\u7684\u6570\u636e\n        fetch\n    } = useFetcher();\n\n    // \u5728\u4e8b\u4ef6\u4e2d\u89e6\u53d1\u6570\u636e\u62c9\u53d6\n    const handleSubmit = () => {\n        // \u5047\u8bbe\u5df2\u5b8c\u6210todo\u9879\u7684\u4fee\u6539...\n\n        // \u5f00\u59cb\u62c9\u53d6\u66f4\u65b0\u540e\u7684\u6570\u636e\n        // \u60c5\u51b51\uff1a\u5f53\u4f60\u660e\u786e\u77e5\u9053\u62c9\u53d6todoList\u7b2c\u4e00\u9875\u6570\u636e\u65f6\uff0c\u4f20\u5165\u4e00\u4e2aMethod\u5b9e\u4f8b\n        fetch(getTodoList(1));\n\n        // \u60c5\u51b52\uff1a\u5f53\u4f60\u53ea\u77e5\u9053\u62c9\u53d6todoList\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u6570\u636e\u65f6\uff0c\u901a\u8fc7Method\u5b9e\u4f8b\u5339\u914d\u5668\u6765\u7b5b\u9009\n        fetch({\n            name: 'todoList',\n            filter: (method, index, ary) => {\n                // \u8fd4\u56detrue\u6765\u6307\u5b9a\u9700\u8981\u62c9\u53d6\u7684Method\u5b9e\u4f8b\n                return index === ary.length - 1;\n            }\n        });\n    };\n\n    return (\n        {/* \u6e32\u67d3\u7edf\u4e00\u7684\u62c9\u53d6\u72b6\u6001 */}\n        { fetching ? <div>{{ \u6b63\u5728\u540e\u53f0\u62c9\u53d6\u6570\u636e... }}</div> : null }\n        {/* ... */}\n        <button onClick={handleSubmit}>\u4fee\u6539todo\u9879</button>\n    );\n};\n"))),(0,a.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      // \u6ce8\u610f\uff1a\u8fd9\u8fb9\u8bbe\u7f6e\u4e86name\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u65e0\u6cd5\u76f4\u63a5\u6307\u5b9aMethod\u5b9e\u4f8b\u65f6\uff0c\u8fc7\u6ee4\u51fa\u9700\u8981\u7684Method\u5b9e\u4f8b\n      // \u8be6\u89c1\u540e\u7eed\u7684\u300aMethod\u5b9e\u4f8b\u5339\u914d\u5668\u300b\u7ae0\u8282\n      name: 'todoList',\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const {\n    // fetching\u5c5e\u6027\u4e0eloading\u76f8\u540c\uff0c\u53d1\u9001\u62c9\u53d6\u8bf7\u6c42\u65f6\u4e3atrue\uff0c\u8bf7\u6c42\u7ed3\u675f\u540e\u4e3afalse\n    fetching,\n    error,\n    onSuccess,\n    onError,\n    onComplete,\n\n    // \u8c03\u7528fetch\u540e\u624d\u4f1a\u53d1\u9001\u8bf7\u6c42\u62c9\u53d6\u6570\u636e\uff0c\u53ef\u4ee5\u91cd\u590d\u8c03\u7528fetch\u591a\u6b21\u62c9\u53d6\u4e0d\u540c\u63a5\u53e3\u7684\u6570\u636e\n    fetch\n  } = useFetcher();\n\n  // \u5728\u4e8b\u4ef6\u4e2d\u89e6\u53d1\u6570\u636e\u62c9\u53d6\n  const handleSubmit = () => {\n    // \u5047\u8bbe\u5df2\u5b8c\u6210todo\u9879\u7684\u4fee\u6539...\n\n    // \u5f00\u59cb\u62c9\u53d6\u66f4\u65b0\u540e\u7684\u6570\u636e\n    // \u60c5\u51b51\uff1a\u5f53\u4f60\u660e\u786e\u77e5\u9053\u62c9\u53d6todoList\u7b2c\u4e00\u9875\u6570\u636e\u65f6\uff0c\u4f20\u5165\u4e00\u4e2aMethod\u5b9e\u4f8b\n    fetch(getTodoList(1));\n\n    // \u60c5\u51b52\uff1a\u5f53\u4f60\u53ea\u77e5\u9053\u62c9\u53d6todoList\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u6570\u636e\u65f6\uff0c\u901a\u8fc7Method\u5b9e\u4f8b\u5339\u914d\u5668\u6765\u7b5b\u9009\n    fetch({\n      name: 'todoList',\n      filter: (method, index, ary) => {\n        // \u8fd4\u56detrue\u6765\u6307\u5b9a\u9700\u8981\u62c9\u53d6\u7684Method\u5b9e\u4f8b\n        return index === ary.length - 1;\n      }\n    });\n  };\n<\/script>\n\n\x3c!-- \u6e32\u67d3\u7edf\u4e00\u7684\u62c9\u53d6\u72b6\u6001 --\x3e\n{#if $fetching}\n<div>{{ \u6b63\u5728\u540e\u53f0\u62c9\u53d6\u6570\u636e... }}</div>\n{/if}\n\x3c!-- ... --\x3e\n<button on:click=\"{handleSubmit}\">\u4fee\u6539todo\u9879</button>\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u66f4\u591a",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u5339\u914d\u5668\u7684\u4f7f\u7528\u65b9\u6cd5\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"../next-step/method-instance-matcher"},"Method \u5b9e\u4f8b\u5339\u914d\u5668"))),(0,a.kt)("h2",{id:"\u9884\u52a0\u8f7d\u6570\u636e"},"\u9884\u52a0\u8f7d\u6570\u636e"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u73b0 todo \u5217\u8868\u5206\u9875\u573a\u666f\u4e0b\uff0c\u4e0b\u4e00\u9875\u6570\u636e\u7684\u9884\u52a0\u8f7d\u529f\u80fd\u3002"),(0,a.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const { fetch } = useFetcher();\n\n  const currentPage = ref(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList(currentPage.value), [currentPage], {\n    immediate: true\n  });\n\n  // \u5f53\u524d\u9875\u8bf7\u6c42\u6210\u529f\u65f6\u9884\u62c9\u53d6\u4e0b\u4e00\u9875\u7684\u6570\u636e\n  // \u5b9e\u73b0\u5f53\u7ffb\u9875\u5230\u4e0b\u4e00\u9875\u65f6\u4e0d\u9700\u8981\u7b49\u5f85\u8bf7\u6c42\n  onSuccess(() => {\n    fetch(getTodoList(currentPage.value + 1));\n  });\n<\/script>\n"))),(0,a.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\n\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/todo/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst App = () => {\n  const { fetch } = useFetcher();\n  const [currentPage, setCurrentPage] = useState(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList(currentPage), [currentPage], {\n    immediate: true\n  });\n\n  // \u5f53\u524d\u9875\u8bf7\u6c42\u6210\u529f\u65f6\u9884\u62c9\u53d6\u4e0b\u4e00\u9875\u7684\u6570\u636e\n  // \u5b9e\u73b0\u5f53\u7ffb\u9875\u5230\u4e0b\u4e00\u9875\u65f6\u4e0d\u9700\u8981\u7b49\u5f85\u8bf7\u6c42\n  onSuccess(() => {\n    fetch(getTodoList(currentPage + 1));\n  });\n\n  return {\n    /* ... */\n  };\n};\n"))),(0,a.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { writable } from 'svelte/store';\n\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const { fetch } = useFetcher();\n  const currentPage = writable(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList($currentPage), [currentPage], {\n    immediate: true\n  });\n\n  // \u5f53\u524d\u9875\u8bf7\u6c42\u6210\u529f\u65f6\u9884\u62c9\u53d6\u4e0b\u4e00\u9875\u7684\u6570\u636e\n  // \u5b9e\u73b0\u5f53\u7ffb\u9875\u5230\u4e0b\u4e00\u9875\u65f6\u4e0d\u9700\u8981\u7b49\u5f85\u8bf7\u6c42\n  onSuccess(() => {\n    fetch(getTodoList($currentPage + 1));\n  });\n<\/script>\n\n\x3c!-- views... --\x3e\n")))),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"useFetcher \u8bf7\u6c42\u5b8c\u6210\u540e\u53ea\u66f4\u65b0\u7f13\u5b58\uff0c\u4e14\u5982\u679c\u53d1\u73b0\u8be5",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u4e0b\u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u72b6\u6001\uff0c\u4e5f\u4f1a\u540c\u6b65\u66f4\u65b0\u5b83\uff0c\u4ece\u800c\u4fdd\u8bc1\u9875\u9762\u6570\u636e\u4e00\u81f4\uff0c\u8fd9\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"useFetcher"),"\u7528\u4e8e\u8de8\u6a21\u5757/\u7ec4\u4ef6\u66f4\u65b0\u89c6\u56fe\u7684\u4fdd\u8bc1\u3002")),(0,a.kt)("h2",{id:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42"},"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42"),(0,a.kt)("p",null,"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u76f8\u540c\uff0c\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"useFetcher"),"\u4e2d\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"force"),"\u53c2\u6570\u6765\u8bbe\u7f6e\u662f\u5426\u53d1\u9001\u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u9759\u6001\u503c"},"\u8bbe\u7f6e\u9759\u6001\u503c"),(0,a.kt)("p",null,"force \u9ed8\u8ba4\u4e3a false\uff0c\u8bbe\u7f6e\u4e3a true \u65f6\u5c06\u6bcf\u6b21\u7a7f\u900f\u7f13\u5b58\uff0c\u5e76\u53d1\u9001\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"useFetcher({ force: true });\n")),(0,a.kt)("h3",{id:"\u52a8\u6001\u8bbe\u7f6e-force-\u503c"},"\u52a8\u6001\u8bbe\u7f6e force \u503c"),(0,a.kt)("p",null,"\u5b9e\u9645\u60c5\u51b5\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u6839\u636e\u4e0d\u540c\u60c5\u51b5\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\uff0c\u6b64\u65f6\u53ef\u4ee5\u5c06 force \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"useFetcher({\n  force: () => {\n    return true;\n  }\n});\n")),(0,a.kt)("h2",{id:"\u4e0e-userequest-\u548c-usewatcher-\u7684\u5dee\u5f02\u5bf9\u6bd4"},"\u4e0e useRequest \u548c useWatcher \u7684\u5dee\u5f02\u5bf9\u6bd4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"useFetcher \u4e0d\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"data"),"\u5b57\u6bb5\uff0c\u9884\u62c9\u53d6\u7684\u6570\u636e\u5c06\u4fdd\u5b58\u5728\u7f13\u5b58\u4e2d\uff0c\u4ee5\u53ca\u66f4\u65b0\u5bf9\u5e94\u4f4d\u7f6e\u7684\u72b6\u6001\u6570\u636e;"),(0,a.kt)("li",{parentName:"ol"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"loading"),"\u6539\u540d\u4e3a\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"fetching"),";"),(0,a.kt)("li",{parentName:"ol"},"\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"send"),"\u51fd\u6570\uff0c\u4f46\u591a\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),"\u51fd\u6570\uff0c\u53ef\u4ee5\u91cd\u590d\u5229\u7528 fetch \u51fd\u6570\u62c9\u53d6\u4e0d\u540c\u63a5\u53e3\u7684\u6570\u636e\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"fetching")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," \u72b6\u6001\u7edf\u4e00\u6e32\u67d3\u89c6\u56fe\uff0c\u4ece\u800c\u8fbe\u5230\u7edf\u4e00\u5904\u7406\u7684\u76ee\u7684;")))}m.isMDXComponent=!0}}]);