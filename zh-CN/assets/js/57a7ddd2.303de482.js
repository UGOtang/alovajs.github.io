"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Method\u5b9e\u4f8b\u5339\u914d\u5668",sidebar_position:30},i=void 0,l={unversionedId:"next-step/method-instance-matcher",id:"next-step/method-instance-matcher",title:"Method\u5b9e\u4f8b\u5339\u914d\u5668",description:"\u5f53\u6211\u4eec\u5728\u5904\u7406\u5b8c\u4e00\u4e9b\u4e1a\u52a1\u65f6\uff0c\u9700\u8981\u8c03\u7528invalidateCache\u3001setCacheData\u3001updateState\u548cfetch\u6765\u5931\u6548\u7f13\u5b58\u3001\u66f4\u65b0\u7f13\u5b58\u3001\u8de8\u9875\u9762\u66f4\u65b0\u72b6\u6001\u3001\u6216\u91cd\u65b0\u62c9\u53d6\u6570\u636e\uff0c\u4e00\u822c\u4f1a\u6709\u4e24\u79cd\u573a\u666f\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-next-step/03-method-instance-matcher.md",sourceDirName:"06-next-step",slug:"/next-step/method-instance-matcher",permalink:"/zh-CN/next-step/method-instance-matcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/03-method-instance-matcher.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Method\u5b9e\u4f8b\u5339\u914d\u5668",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42",permalink:"/zh-CN/next-step/send-request-directly"},next:{title:"\u5e76\u884c\u8bf7\u6c42",permalink:"/zh-CN/next-step/parallel-request"}},d={},p=[{value:"\u901a\u8fc7name\u5c5e\u6027\u5339\u914d",id:"\u901a\u8fc7name\u5c5e\u6027\u5339\u914d",level:2},{value:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",id:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",level:2},{value:"\u66f4\u590d\u6742\u7684\u5339\u914d\u65b9\u5f0f",id:"\u66f4\u590d\u6742\u7684\u5339\u914d\u65b9\u5f0f",level:2},{value:"\u5728\u4e0d\u540c\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u533a\u522b",id:"\u5728\u4e0d\u540c\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u533a\u522b",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u5904\u7406\u5b8c\u4e00\u4e9b\u4e1a\u52a1\u65f6\uff0c\u9700\u8981\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"invalidateCache"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"setCacheData"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"updateState"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"\u6765\u5931\u6548\u7f13\u5b58\u3001\u66f4\u65b0\u7f13\u5b58\u3001\u8de8\u9875\u9762\u66f4\u65b0\u72b6\u6001\u3001\u6216\u91cd\u65b0\u62c9\u53d6\u6570\u636e\uff0c\u4e00\u822c\u4f1a\u6709\u4e24\u79cd\u573a\u666f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8005\u77e5\u9053\u9700\u8981\u64cd\u4f5c\u54ea\u4e2a\u8bf7\u6c42\u7684\u6570\u636e\uff0c\u6b64\u65f6\u5728\u8c03\u7528\u4e0a\u9762\u7684\u51fd\u6570\u65f6\u76f4\u63a5\u4f20\u5165\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u5373\u53ef\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8005\u53ea\u77e5\u9053\u9700\u8981\u64cd\u4f5c\u67d0\u4e2a\u987a\u5e8f\u4f4d\u7684\u8bf7\u6c42\uff0c\u800c\u4e0d\u786e\u5b9a\u5177\u4f53\u54ea\u4e2a\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u5339\u914d\u5668\u7684\u65b9\u5f0f\u8fc7\u6ee4\u51fa\u6765\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u5339\u914d\u5668\u662f\u4f9d\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u8bbe\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u6765\u8fc7\u6ee4\u7684\uff0c\u591a\u4e2a\u5339\u914d\u5668\u5141\u8bb8\u8bbe\u7f6e\u76f8\u540c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u56e0\u6b64\u9996\u5148\u9700\u8981\u4e3a\u9700\u8981\u8fc7\u6ee4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u3002"),(0,o.kt)("p",null,"Method\u5b9e\u4f8b\u5339\u914d\u7c7b\u578b\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type MethodFilter = string | RegExp | {\n    name: string | RegExp,\n    filter: (method: Method, index: number, methods: Method[]) => boolean,\n\n    // \u53ef\u9009\u53c2\u6570\uff0c\u5982\u679c\u4f20\u5165alova\u5bf9\u8c61\u5219\u53ea\u5339\u914d\u6b64alova\u6240\u521b\u5efa\u7684Method\u5b9e\u4f8b\uff0c\u5426\u5219\u5339\u914d\u6240\u6709alova\u5b9e\u4f8b\u7684Method\u5b9e\u4f8b\n    alova?: Alova\n};\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7name\u5c5e\u6027\u5339\u914d"},"\u901a\u8fc7name\u5c5e\u6027\u5339\u914d"),(0,o.kt)("p",null,"\u901a\u8fc7\u4f20\u5165\u5b8c\u6574\u7684\u5b9e\u4f8b\u540d\u79f0\u8fdb\u884c\u5339\u914d\uff0c\u5b83\u7684\u5339\u914d\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6bcf\u6b21\u8c03\u7528getTodoList\u65f6\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684Method\u5b9e\u4f8b\uff0c\u5b83\u4eec\u7684name\u662f\u76f8\u540c\u7684\nconst getTodoList = currentPage =>\n    alova.Get('/tood/list', {\n        name: 'todoList',\n        params: {\n            currentPage,\n            pageSize: 10\n        }\n    });\n\n// \u4ee5\u4e0b\u8868\u793a\u8ba9name\u4e3a'todoList'\u7684\u6240\u6709Method\u5b9e\u4f8b\u7684\u7f13\u5b58\u5931\u6548\ninvalidateCache('todoList');\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"},"\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"),(0,o.kt)("p",null,"\u901a\u8fc7\u4f20\u5165\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u5339\u914d\uff0cMethod\u5b9e\u4f8b\u7684name\u7b26\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u90fd\u5c06\u5339\u914d\uff0c\u5b83\u7684\u7ed3\u679c\u4e5f\u662f\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4ee5\u4e0b\u8868\u793a\u8ba9name\u4e3a\u4ee5'todo'\u5f00\u5934\u7684\u6240\u6709Method\u5b9e\u4f8b\u7684\u7f13\u5b58\u5931\u6548\ninvalidateCache(/^todo/);\n")),(0,o.kt)("h2",{id:"\u66f4\u590d\u6742\u7684\u5339\u914d\u65b9\u5f0f"},"\u66f4\u590d\u6742\u7684\u5339\u914d\u65b9\u5f0f"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),"\u6765\u8fdb\u4e00\u6b65\u8fc7\u6ee4\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\uff0cfilter\u51fd\u6570\u4f7f\u7528\u4e0eArray.prototype.filter\u76f8\u540c\uff0c\u8fd4\u56de true \u8868\u793a\u5339\u914d\u6210\u529f\uff0c\u8fd4\u56de false \u8868\u793a\u5931\u8d25\uff0c\u8be6\u89c1\u4e0a\u9762\u7684\u7c7b\u578b\u58f0\u660e\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u51e0\u4e2a\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u8ba9name\u4e3atodoList\u7684\u6700\u540e\u4e00\u4e2aMethod\u5b9e\u4f8b\u7684\u7f13\u5b58\u5931\u6548 \ninvalidateCache({\n    name: 'todoList',\n    filter: (method, index, methods) => index === methods.length - 1\n});\n\n// \u8bbe\u7f6ename\u4e3atodo\u5f00\u5934\u7684\u6700\u540e\u4e00\u4e2aMethod\u5b9e\u4f8b\u7684\u7f13\u5b58\nsetCacheData({\n    name: /^todo/,\n    filter: (method, index, methods) => index === methods.length - 1,\n\n  // \u5982\u679c\u4f20\u4e86alova\u53c2\u6570\uff0c\u90a3\u4e48\u53ea\u5339\u914d\u7531\u6b64alova\u5b9e\u4f8b\u521b\u5efa\u7684Method\u5b9e\u4f8b\uff0c\u5426\u5219\u4f1a\u5728\u6240\u6709Method\u5b9e\u4f8b\u4e2d\u5339\u914d\n    alova: alovaInst\n}, newCache);\n\n// \u91cd\u65b0\u62c9\u53d6todo\u5217\u8868\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u6570\u636e\nconst { fetch } = useFetcher();\nfetch({\n    name: 'todoList',\n    filter: (method, index, methods) => index === methods.length - 1\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"alova\u53c2\u6570\u53ef\u8fdb\u4e00\u6b65\u7f29\u5c0f\u5339\u914d\u8303\u56f4\u3002")),(0,o.kt)("h2",{id:"\u5728\u4e0d\u540c\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u533a\u522b"},"\u5728\u4e0d\u540c\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u533a\u522b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"invalidateCache\uff1a\u5e94\u7528\u6240\u6709\u5339\u914d\u7684Method\u5b9e\u4f8b\u96c6\u5408\uff0c\u5373\u5931\u6548\u6240\u6709\u5339\u914d\u7684Method\u5b9e\u4f8b\u5bf9\u5e94\u7684\u7f13\u5b58\uff1b"),(0,o.kt)("li",{parentName:"ul"},"setCacheData\uff1a\u5e94\u7528\u6240\u6709\u5339\u914d\u7684Method\u5b9e\u4f8b\u96c6\u5408\uff0c\u5f53\u4f20\u5165\u9759\u6001\u6570\u636e\u65f6\u6240\u6709\u7684Method\u5b9e\u4f8b\u7f13\u5b58\u8bbe\u7f6e\u4e3a\u76f8\u540c\u503c\uff0c\u4f20\u5165\u56de\u8c03\u51fd\u6570\u65f6\u5c06\u5faa\u73af\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u4f5c\u4e3a\u7f13\u5b58\u6570\u636e\uff1b"),(0,o.kt)("li",{parentName:"ul"},"updateState\uff1a\u5e94\u7528\u7b2c\u4e00\u4e2a\u5339\u914d\u7684Method\u5b9e\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"fetch\uff1a\u5e94\u7528\u7b2c\u4e00\u4e2a\u5339\u914d\u7684Method\u5b9e\u4f8b\uff0c\u5373\u53ea\u4f1a\u62c9\u53d6\u4e00\u6b21\u6570\u636e\n",(0,o.kt)("inlineCode",{parentName:"li"},"invalidateCache"),"\u4f1a\u5931\u6548\u6240\u6709\u8fc7\u6ee4\u51fa\u6765\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u6240\u5bf9\u5e94\u7684\u7f13\u5b58\uff0c\u800c",(0,o.kt)("inlineCode",{parentName:"li"},"updateState"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"fetch"),"\u53ea\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u96c6\u5408\u4e2d\u7684\u7b2c\u4e00\u4e2a\u9879\u8fdb\u884c\u64cd\u4f5c\u3002")))}s.isMDXComponent=!0}}]);