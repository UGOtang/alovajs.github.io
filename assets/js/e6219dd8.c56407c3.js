"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),s=a(2389),l=a(7392),i=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:s,defaultValue:c,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:R}=(0,i.U)(),[N,T]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const q=e=>{const t=e.currentTarget,a=w.indexOf(t),n=y[a].value;n!==N&&(C(t),T(n),null!=h&&R(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},y.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:q},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),s=a(5162);const l={title:"Typescript",sidebar_position:50},i=void 0,p={unversionedId:"advanced/typescript",id:"advanced/typescript",title:"Typescript",description:"In terms of Typescript, we really put a lot of effort into optimization in order to provide a better user experience, and we try our best to use automatically inferred types to reduce the trouble of defining types.",source:"@site/docs/07-advanced/05-typescript.md",sourceDirName:"07-advanced",slug:"/advanced/typescript",permalink:"/advanced/typescript",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/07-advanced/05-typescript.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Typescript",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Response Status Edit Tracking",permalink:"/advanced/response-states-track"},next:{title:"Extensions",permalink:"/category/extensions"}},d={},u=[{value:"useHooks state type",id:"usehooks-state-type",level:2},{value:"types of response data",id:"types-of-response-data",level:2},{value:"Case 1",id:"case-1",level:3},{value:"Case 2",id:"case-2",level:3},{value:"Inference for the above cases",id:"inference-for-the-above-cases",level:3},{value:"Types inferred from the request adapter",id:"types-inferred-from-the-request-adapter",level:2},{value:"Global beforeRequest interceptor parameter type",id:"global-beforerequest-interceptor-parameter-type",level:2},{value:"Global responsed interceptor parameter type",id:"global-responsed-interceptor-parameter-type",level:2},{value:"Method config type",id:"method-config-type",level:2},{value:"Request adapter",id:"request-adapter",level:2},{value:"Customize the type of statesHook",id:"customize-the-type-of-stateshook",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In terms of Typescript, we really put a lot of effort into optimization in order to provide a better user experience, and we try our best to use automatically inferred types to reduce the trouble of defining types."),(0,r.kt)("h2",{id:"usehooks-state-type"},"useHooks state type"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"createAlova")," creates an alova instance, it will automatically infer the state types created by ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher")," according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"statesHook")," passed in. Unfortunately, only three MVVM libraries, Vue, React, and Svelte are currently supported. If you involve other libraries, you need to write your own types to implement them."),(0,r.kt)("p",null,"The following are the state types returned by useHooks by default."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"VueHook",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const vueAlova = createAlova({\n  statesHook: VueHook\n  // ...\n});\nconst {\n  loading, // Ref<boolean>\n  data, // Ref<unknown>\n  error // Ref<Error>\n} = useRequest(vuealovaInstance.Get('/todo/list'));\n"))),(0,r.kt)(s.Z,{value:"2",label:"ReactHook",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const reactAlova = createAlova({\n  statesHook: ReactHook\n  // ...\n});\nconst {\n  loading, // boolean\n  data, // unknown\n  error // Error\n} = useRequest(reactalovaInstance.Get('/todo/list'));\n"))),(0,r.kt)(s.Z,{value:"3",label:"SvelteHook",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const svelteAlova = createAlova({\n  statesHook: SvelteHook\n  // ...\n});\nconst {\n  loading, // Writable<boolean>\n  data, // Writable<unknown>\n  error // Writable<Error>\n} = useRequest(sveltealovaInstance.Get('/todo/list'));\n")))),(0,r.kt)("p",null,"You may find that the type of data is ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", because data needs to be individually specified according to different Method instances, we will continue to look down."),(0,r.kt)("h2",{id:"types-of-response-data"},"types of response data"),(0,r.kt)("p",null,"When you specify a type for a data interface, there are two cases."),(0,r.kt)("h3",{id:"case-1"},"Case 1"),(0,r.kt)("p",null,"When the response data does not need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"transformData")," conversion, directly specify the type through the generic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  title: string;\n  time: string;\n  done: boolean;\n}\nconst Get = alovaInstance.Get<Todo[]>('/todo/list');\n")),(0,r.kt)("h3",{id:"case-2"},"Case 2"),(0,r.kt)("p",null,"When the response data needs to be transformed by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"transformData")," again, you need to specify the type in the transformation function parameter, and then its return value type will be used as the response data type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  title: string;\n  time: string;\n  done: boolean;\n}\nconst Get = alovaInstance.Get('/todo/list', {\n  // Write the type to the data parameter, and the headers will be automatically inferred, so you don't need to specify the type\n  transformData(data: Todo[], headers) {\n    return data.map(item => ({\n      ...item,\n      status: item.done ? 'done' : 'incomplete'\n    }));\n  }\n});\n")),(0,r.kt)("h3",{id:"inference-for-the-above-cases"},"Inference for the above cases"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { data } = useRequest(() => Get);\n\n// Case 1: The data type is automatically inferred as Ref<Todo[]>\n// Case 1: The data type is automatically inferred as Ref<(Todo & {status: string})[]>\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { data } = useRequest(() => Get);\n\n// Case 1: The data type is automatically inferred as Todo[]\n// Case 1: The data type is automatically inferred as (Todo & {status: string})[]\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { data } = useRequest(() => Get);\n\n// Case 1: The data type is automatically inferred as Writable<Todo[]>\n// Case 1: The data type is automatically inferred as Writable<(Todo & {status: string})[]>\n")))),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The response data is converted by the global response interceptor, so when setting the type, it should also be set to the converted type.")),(0,r.kt)("h2",{id:"types-inferred-from-the-request-adapter"},"Types inferred from the request adapter"),(0,r.kt)("p",null,"Because alova supports custom request adapters, and the request configuration objects, response objects, and response headers of different adapters may be different, the global ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"responsed")," interceptors, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Method")," instance are created when the configuration object is created. The type will be automatically inferred based on the type provided by the request adapter. Let's look at these types first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Generic configuration type for generic Method instances */\ntype CommonMethodConfig = {\n  readonly url: string;\n  readonly method: MethodType;\n  data?: Record<string, any> | FormData | string;\n};\n\n/** The type of the configuration object when the Method instance was created */\ntype AlovaMethodConfig<R, T, RC, RH> = {\n  /** The following is the configuration object specified when creating the Method instance */\n  name?: string;\n\n  /** parameters in url, an object */\n  params?: Record<string, any>;\n\n  /** request header, an object */\n  headers?: Record<string, any>;\n\n  /** Silent request, onSuccess will be triggered immediately, if the request fails, it will be saved in the cache and continue to poll the request */\n  silent?: boolean;\n\n  /** Current interrupt time */\n  timeout?: number;\n\n  /** The response data will not be requested again within the cache time. Get requests are kept fresh for 5 minutes by default (300000 milliseconds), other requests are not cached by default */\n  localCache?:\n    | number\n    | Date\n    | {\n        expire: number | Date;\n        mode?: number;\n        tag?: string | number;\n      };\n\n  /** Whether to enable download progress information. After enabling, each request for progress will have a progress value. Otherwise, the same value is 0, and it is not enabled by default. */\n  enableDownload?: boolean;\n\n  /** Whether to enable upload progress information. After enabling, each request for progress will have a progress value, otherwise the same value is 0, and it is not enabled by default */\n  enableUpload?: boolean;\n\n  /** Response data conversion, the converted data will be converted to data state, if there is no conversion data, the response data will be directly used as data state */\n  transformData?: (data: T, headers: RH) => R;\n} & RC;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RH"),", and the missing ",(0,r.kt)("inlineCode",{parentName:"p"},"RE")," mentioned above are all inferred by the request adapter, and they represent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RC"),": Request configuration object type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RH"),": response header object type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RE"),": response type")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("strong",{parentName:"p"},"GlobalFetch"),", their types will be inferred as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RC"),": fetch api request configuration object ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestInit"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RH"),": response header object ",(0,r.kt)("inlineCode",{parentName:"li"},"Headers"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RE"),": Response object ",(0,r.kt)("inlineCode",{parentName:"li"},"Response"),";")),(0,r.kt)("h2",{id:"global-beforerequest-interceptor-parameter-type"},"Global beforeRequest interceptor parameter type"),(0,r.kt)("p",null,"The global pre-request interceptor ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeRequest")," receives an aggregated request configuration of type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** alova request adapter configuration data type */\ntype AlovaRequestAdapterConfig<R, T, RC, RH> = CommonMethodConfig &\n  AlovaMethodConfig<R, T, RC, RH> & {\n    // Will ensure that the headers, params parameters are an object\n    headers: Record<string, any>;\n    params: Record<string, any>;\n  };\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Generic request configuration */\ntype CommonMethodConfig = {\n  readonly url: string;\n  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';\n  data?: Record<string, any> | FormData | string;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** alova Method instance configuration type */\ntype AlovaMethodConfig<R, T, RC, RH> = {\n  /** The name of the method object, in the updateState, invalidateCache, setCacheData, and fetch functions, the corresponding method object can be obtained by name or wildcard */\n  name?: string;\n  params?: Arg;\n  headers?: Arg;\n\n  /** Current interrupt time */\n  timeout?: number;\n\n  /** The response data will not be requested again within the cache time. The default preservation of get and head requests is 5 minutes (300000 milliseconds), and other requests are not cached by default */\n  localCache?: LocalCacheConfig;\n\n  /** Whether to enable download progress information. After enabling, each request for progress will have a progress value. Otherwise, the same value is 0, and it is not enabled by default. */\n  enableDownload?: boolean;\n\n  /** Whether to enable upload progress information. After enabling, each request for progress will have a progress value, otherwise the same value is 0, and it is not enabled by default */\n  enableUpload?: boolean;\n\n  /** Response data conversion, the converted data will be converted to data state, if there is no conversion data, the response data will be directly used as data state */\n  transformData?: (data: T, headers: RH) => R;\n} & RC;\n")),(0,r.kt)("h2",{id:"global-responsed-interceptor-parameter-type"},"Global responsed interceptor parameter type"),(0,r.kt)("p",null,"The global response interceptor ",(0,r.kt)("inlineCode",{parentName:"p"},"responsed")," accepts two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first one is the response object, its type is the response object ",(0,r.kt)("strong",{parentName:"li"},"RE"),";"),(0,r.kt)("li",{parentName:"ul"},"The second is the request configuration object, you can get the parameters of this request, or use it as the data transfer context before and after the request;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ResponsedHandler<R, T, RC, RE, RH> = (response: RE, config: AlovaRequestAdapterConfig<R, T, RC, RH>) => any;\n")),(0,r.kt)("p",null,"When the request adapter uses ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),", ",(0,r.kt)("strong",{parentName:"p"},"RE")," will be automatically inferred to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,r.kt)("h2",{id:"method-config-type"},"Method config type"),(0,r.kt)("p",null,"The type of the Method configuration object is the above mentioned ","[AlovaMethodConfig]","(#The type inferred from the request adapter), which contains the union of common configuration parameters and ",(0,r.kt)("strong",{parentName:"p"},"RC")," inferred from the request adapter. When the request adapter uses ",(0,r.kt)("strong",{parentName:"p"},"GlobalFetch"),", ",(0,r.kt)("strong",{parentName:"p"},"RC")," will be automatically inferred to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestInit"),"."),(0,r.kt)("h2",{id:"request-adapter"},"Request adapter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Progress {\n  total: number; // total amount\n  loaded: number; // loaded amount\n}\n\ntype AlovaRequestAdapter<R, T, RC, RE, RH> = (adapterConfig: AlovaRequestAdapterConfig<R, T, RC, RH>) => {\n  response: () => Promise<RE>;\n  headers: () => Promise<RH>;\n  onDownload?: (handler: (total: number, loaded: number) => void) => void;\n  onUpload?: (handler: (total: number, loaded: number) => void) => void;\n  abort: () => void;\n};\n")),(0,r.kt)("p",null,"It should be noted that if ",(0,r.kt)("strong",{parentName:"p"},"RC"),", ",(0,r.kt)("strong",{parentName:"p"},"RE"),", ",(0,r.kt)("strong",{parentName:"p"},"RH")," types need to be automatically inferred in alova, no generics should be specified on the request adapter, otherwise it will cause type inference errors."),(0,r.kt)("p",null,"Take ",(0,r.kt)("strong",{parentName:"p"},"GlobalFetch")," for example."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts"},"Click here to view the source code of GlobalFetch"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type GlobalFetch = (defaultRequestInit?: RequestInit) => (\n  adapterConfig: AlovaRequestAdapterConfig<unknown, unknown, RequestInit, Headers>\n) => {\n  response: () => Promise<Response>;\n  headers: () => Promise<Headers>;\n  onDownload: (handler: (total: number, loaded: number) => void) => void;\n  abort: () => void;\n};\n")),(0,r.kt)("h2",{id:"customize-the-type-of-stateshook"},"Customize the type of statesHook"),(0,r.kt)("p",null,"Coming soon..."))}m.isMDXComponent=!0}}]);