"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={title:"Parallel Requests",sidebar_position:70},a=void 0,l={unversionedId:"next-step/parallel-request",id:"next-step/parallel-request",title:"Parallel Requests",description:"Simple parallel requests only need to call multiple useRequest at the same time.",source:"@site/docs/06-next-step/08-parallel-request.md",sourceDirName:"06-next-step",slug:"/next-step/parallel-request",permalink:"/next-step/parallel-request",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/08-parallel-request.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Parallel Requests",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Manage additional state",permalink:"/next-step/manage-extra-states"},next:{title:"Serial request",permalink:"/next-step/serial-request"}},i={},u=[{value:"Way 1",id:"way-1",level:2},{value:"Way 2",id:"way-2",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Simple parallel requests only need to call multiple useRequest at the same time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList } = useRequest(todoListGetter);\nconst { data: todoCounter } = useRequest(todoCountGetter);\n")),(0,o.kt)("p",null,"But this kind of request is only suitable for pure parallel requests. If you need to perform some operations after the parallel requests are completed, there are two ways to achieve it:"),(0,o.kt)("h2",{id:"way-1"},"Way 1"),(0,o.kt)("p",null,"Create promise objects manually, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," to complete the effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList, onSuccess: onListSuccess, onError: onListError } = useRequest(todoListGetter);\nconst { data: todoCounter, onSuccess: onCountSuccess, onError: onCountError } = useRequest(todoCountGetter);\n\n// Manually create the promise object\nconst listPromise = new Promise((resolve, reject) => {\n  onListSuccess(resolve);\n  onListError(reject);\n});\nconst countPromise = new Promise((resolve, reject) => {\n  onCountSuccess(resolve);\n  onCountError(reject);\n});\nconst [listEvent, countEvent] = await Promise.all([listPromise, countPromise]);\n// The parallel request is completed, continue to process the business...\n")),(0,o.kt)("h2",{id:"way-2"},"Way 2"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"send")," function returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," function, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"send")," will return an available promise object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Let them not automatically send requests first\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendCount } = useRequest(todoCountGetter, { immediate: false });\n\n// Use the promise object returned by the send function\nconst parallelRequest = async () => {\n  const [listResponse, countResponse] = await Promise.all([sendList(), sendCount()]);\n  // The parallel request is completed, continue to process the business...\n};\n")))}p.isMDXComponent=!0}}]);