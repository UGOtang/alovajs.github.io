"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),o=a(6010),s=a(2389),i=a(7392),l=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:h,groupId:m,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[q,N]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=w[m];null!=e&&e!==q&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==q&&(T(t),N(n),null!=m&&y(m,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:e=>j.push(e),onKeyDown:O,onClick:x},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":q===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===q))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})))))}function h(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},2185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),s=a(5162);const i={title:"start",sidebar_position:10},l=void 0,c={unversionedId:"getting-started/start",id:"getting-started/start",title:"start",description:"In the next getting started guide, we will take todo as an example to explain alova around the needs of getting todo lists on different dates, viewing todo details, and creating, editing, and deleting items. . let's start!",source:"@site/docs/03-getting-started/01-start.md",sourceDirName:"03-getting-started",slug:"/getting-started/start",permalink:"/getting-started/start",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-getting-started/01-start.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"start",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"request method instance",permalink:"/getting-started/request-method-instance"}},u={},p=[{value:"Create Alova instance",id:"create-alova-instance",level:2},{value:"Set the global request interceptor",id:"set-the-global-request-interceptor",level:2},{value:"Set the global response interceptor",id:"set-the-global-response-interceptor",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the next getting started guide, we will take todo as an example to explain ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," around the needs of getting todo lists on different dates, viewing todo details, and creating, editing, and deleting items. . let's start!"),(0,r.kt)("h2",{id:"create-alova-instance"},"Create Alova instance"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," instance is the starting point of use, and all requests need to start from it. It is written like ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", and the following is the simplest way to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," instance."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain\n  baseURL: 'https://api.alovajs.org',\n\n  // VueHook can help us use vue's ref function to create request-related states that can be managed by Alova, including request status loading, response data data, request error object error, etc. (detailed later)\n  statesHook: VueHook,\n  // request adapter, we recommend and provide the fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain\n  baseURL: 'https://api.alovajs.org',\n\n  // ReactHook can help us call useState to create request-related states that can be managed by Alova, including request state loading, response data data, request error object error, etc. (detailed later)\n  statesHook: ReactHook,\n  // request adapter, we recommend and provide the fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain\n  baseURL: 'https://api.alovajs.org',\n\n  // SvelteHook can help us call writable to create request-related states that can be managed by Alova, including request status loading, response data data, request error object error, etc. (detailed later)\n  statesHook: SvelteHook,\n  // request adapter, we recommend and provide the fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n")))),(0,r.kt)("h2",{id:"set-the-global-request-interceptor"},"Set the global request interceptor"),(0,r.kt)("p",null,"Usually, we need to use the same configuration for all requests, such as adding token and timestamp to the request header, ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," provides us with a global request interceptor, which will be triggered before the request, we can use this interceptor Set request parameters uniformly in ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", which is also similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // The function parameter config contains all the requested configurations such as url, params, data, headers, etc.\n  // highlight-start\n  beforeRequest(config) {\n    // Suppose we need to add the token to the request header\n    config.headers.token = 'token';\n  }\n  // highlight-end\n});\n")),(0,r.kt)("h2",{id:"set-the-global-response-interceptor"},"Set the global response interceptor"),(0,r.kt)("p",null,"When we want to parse the response data and handle errors uniformly, we can specify a global response interceptor when creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," instance, which is also similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),". Response interceptors include interceptors for successful requests and interceptors for failed requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // Use two items of the array to specify the interceptor for successful request and the interceptor for failed request respectively\n  responsed: {\n    // Interceptor for successful request\n    // When using GlobalFetch to request the adapter, the first parameter receives the Response object\n    // The second parameter is the configuration of the request, which is used to synchronize the configuration information before and after the request\n    onSuccess: async (response, config) => {\n      const json = await response.json();\n      if (json.code !== 200) {\n        // This request will throw an error when throwing an error or returning a Promise instance in the reject state\n        throw new Error(json.message);\n      }\n\n      // The parsed response data will be passed to three hook functions: staleTime, persistTime, and transformData, which will be explained later\n      return json.data;\n    },\n\n    // Interceptor for failed requests\n    // This interceptor will be entered when the request is wrong.\n    // The second parameter is the configuration of the request, which is used to synchronize the configuration information before and after the request\n    onError: (err, config) => {\n      alert(error.message);\n    }\n  }\n  // highlight-end\n});\n")),(0,r.kt)("p",null,"If you do not need to set an interceptor for failed requests, you can directly pass in the interceptor function for successful requests, instead of setting callbacks through objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  async responsed(response, config) {\n    // Interceptor for successful request\n  }\n  // highlight-end\n});\n")),(0,r.kt)("admonition",{title:"special attention",type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"The onError callback is a capture function for request errors. When an error is caught but no error is thrown or a Promise instance that returns a reject state, the request will be considered successful and no response data will be obtained."),(0,r.kt)("li",{parentName:"ol"},"responsed can be set to be a normal function and an asynchronous function\n:::")),(0,r.kt)("h2",{parentName:"admonition",id:"set-the-global-request-timeout"},"Set the global request timeout"),(0,r.kt)("p",{parentName:"admonition"},"The following is to set the global request timeout time."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Globally set the request timeout\nconst alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // Request timeout, in milliseconds, the default is 0, which means never timeout\n  timeout: 50000\n  // highlight-end\n});\n"))))}h.isMDXComponent=!0}}]);