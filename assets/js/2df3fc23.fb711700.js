"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Transform response data",sidebar_position:10},s=void 0,i={unversionedId:"response-data-management/transform-response-data",id:"response-data-management/transform-response-data",title:"Transform response data",description:"When the response data structure cannot directly meet the front-end requirements, we can set the transformData hook function for the method instance to convert the response data into the required structure, and the data will be used as the value of the data state after conversion.",source:"@site/docs/05-response-data-management/01-transform-response-data.md",sourceDirName:"05-response-data-management",slug:"/response-data-management/transform-response-data",permalink:"/response-data-management/transform-response-data",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/05-response-data-management/01-transform-response-data.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Transform response data",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Response data management",permalink:"/category/response-data-management"},next:{title:"Actively Invalidate Response Cache",permalink:"/response-data-management/invalidate-response-cache"}},c={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When the response data structure cannot directly meet the front-end requirements, we can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"transformData")," hook function for the method instance to convert the response data into the required structure, and the data will be used as the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," state after conversion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListGetter = alovaInstance.Get('/tood/list', {\n  params: {\n    page: 1\n  },\n\n  // The function accepts raw data and response header objects, and asks to return the converted data, which will be assigned to the data state.\n  // Note: rawData is generally the data filtered by the response interceptor. For the configuration of the response interceptor, please refer to the [Setting the Global Response Interceptor] chapter.\n  transformData(rawData, headers) {\n    return rawData.list.map(item => {\n      return {\n        ...item,\n        statusText: item.done ? 'completed' : 'in progress'\n      };\n    });\n  }\n});\n")))}d.isMDXComponent=!0}}]);