"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?o.createElement(f,i(i({ref:t},d),{},{components:a})):o.createElement(f,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={title:"drop down to load more",sidebar_position:50},i=void 0,l={unversionedId:"example/load-more",id:"example/load-more",title:"drop down to load more",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/02-example/09-load-more.md",sourceDirName:"02-example",slug:"/example/load-more",permalink:"/example/load-more",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/09-load-more.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"drop down to load more",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Safer optimistic update",permalink:"/example/safer-ptimistic-update"},next:{title:"list of page numbers",permalink:"/example/paginated-list"}},p={},s=[],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,n.kt)("a",{parentName:"p",href:"../overview/index"},"Getting Started Guide"),";")),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/vite-vue-starter-wy7fr6?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2FApp.vue",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"load-more",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("admonition",{title:"example description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"usePagination")," in the ",(0,n.kt)("strong",{parentName:"p"},"@alova/hooks")," extension, you can achieve a more high-performance and easy-to-use pagination function, automatic management of paging-related status, preloading of previous and previous pages, and automatic maintenance of data addition/editing/replacement/ Removed, and request-level stabilization."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Operation guide:")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"After the initialization is completed, the next page of data will be preloaded, and there is no need to wait for scrolling down the page;"),(0,n.kt)("li",{parentName:"ol"},"Adding, deleting, and modifying list items does not need to reset the list, it will be automatically processed into the same effect as the re-request;")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"../extension/alova-hooks/usePagination"},"usePagination documentation"))))}m.isMDXComponent=!0}}]);