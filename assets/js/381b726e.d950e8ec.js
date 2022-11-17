"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",sidebar_position:30},c=void 0,l={unversionedId:"advanced/custom-storage-adapter",id:"advanced/custom-storage-adapter",title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",description:"alova\u4e2d\u6d89\u53ca\u591a\u4e2a\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\u7684\u529f\u80fd\uff0c\u5982\u6301\u4e45\u5316\u7f13\u5b58\u3001\u9759\u9ed8\u63d0\u4ea4\u548c\u79bb\u7ebf\u63d0\u4ea4\u3002\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova\u4f1a\u4f7f\u7528localStorage\u6765\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e\uff0c\u4f46\u8003\u8651\u5230\u975e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u56e0\u6b64\u4e5f\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u3002",source:"@site/docs/07-advanced/03-custom-storage-adapter.md",sourceDirName:"07-advanced",slug:"/advanced/custom-storage-adapter",permalink:"/advanced/custom-storage-adapter",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/07-advanced/03-custom-storage-adapter.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49States Hook",permalink:"/advanced/custom-stateshook"},next:{title:"\u54cd\u5e94\u72b6\u6001\u7f16\u8f91\u8ffd\u8e2a",permalink:"/advanced/response-states-track"}},i={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"alova\u4e2d\u6d89\u53ca\u591a\u4e2a\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\u7684\u529f\u80fd\uff0c\u5982\u6301\u4e45\u5316\u7f13\u5b58\u3001\u9759\u9ed8\u63d0\u4ea4\u548c\u79bb\u7ebf\u63d0\u4ea4\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova\u4f1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"strong"},"localStorage"),"\u6765\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e"),"\uff0c\u4f46\u8003\u8651\u5230\u975e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u56e0\u6b64\u4e5f\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668\u540c\u6837\u975e\u5e38\u7b80\u5355\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a\u4fdd\u5b58\u6570\u636e\u3001\u83b7\u53d6\u6570\u636e\uff0c\u4ee5\u53ca\u79fb\u9664\u6570\u636e\u7684\u51fd\u6570\u5373\u53ef\uff0c\u5927\u81f4\u662f\u8fd9\u6837\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const customStorageAdapter = {\n  setItem(key, value) {\n    // \u4fdd\u5b58\u6570\u636e\n  },\n  getItem(key) {\n    // \u83b7\u53d6\u6570\u636e\n  },\n  removeItem(key) {\n    // \u79fb\u9664\u6570\u636e\n  }\n};\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"alova"),"\u5b9e\u4f8b\u65f6\u4f20\u5165\u8fd9\u4e2a\u9002\u914d\u5668\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  storageAdapter: customStorageAdapter\n});\n")))}u.isMDXComponent=!0}}]);