"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),o=a(7294),l=a(6010),r=a(2466),i=a(6550),p=a(1980),s=a(7392),u=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function c(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=f({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=p??d;return m({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var g=a(2389);const v="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(d(t),p(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},r,{className:(0,l.Z)("tabs__item",y,null==r?void 0:r.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",v)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},6440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),l=a(4866),r=a(5162);const i={title:"Uniapp Adapter",sidebar_position:20},p=void 0,s={unversionedId:"extension/alova-adapter-uniapp",id:"extension/alova-adapter-uniapp",title:"Uniapp Adapter",description:"This plugin only supports vue3 version of uniapp application.",source:"@site/docs/10-extension/02-alova-adapter-uniapp.md",sourceDirName:"10-extension",slug:"/extension/alova-adapter-uniapp",permalink:"/extension/alova-adapter-uniapp",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/10-extension/02-alova-adapter-uniapp.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Uniapp Adapter",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Mock data",permalink:"/extension/alova-mock"},next:{title:"Taro Adapter",permalink:"/extension/alova-adapter-taro"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"create alova",id:"create-alova",level:3},{value:"Request",id:"request",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Typescript",id:"typescript",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Tips",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This plugin only supports vue3 version of uniapp application.")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-uniapp --save\n"))),(0,o.kt)(r.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-uniapp\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"create-alova"},"create alova"),(0,o.kt)("p",null,"Calling ",(0,o.kt)("strong",{parentName:"p"},"AdapterUniapp")," will return ",(0,o.kt)("em",{parentName:"p"},"Request Adapter"),", ",(0,o.kt)("em",{parentName:"p"},"Storage Adapter"),", and ",(0,o.kt)("em",{parentName:"p"},"VueHook"),", so you no longer need to set these three items, and the usage is exactly the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport AdapterUniapp from '@alova/adapter-uniapp';\n\nconst alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   ...AdapterUniapp()\n);\n")),(0,o.kt)("h3",{id:"request"},"Request"),(0,o.kt)("p",null,"The usage method of the request is exactly the same as that used in the web environment. Already fully compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.request"),", you can specify ","[all configuration items]"," supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.request")," in ",(0,o.kt)("em",{parentName:"p"},"config")," of method instance creation (",(0,o.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api/request/"},"https://uniapp.dcloud.net.cn/api/request/")," request.html)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n   <view v-if=\"loading\">Loading...</view>\n   <view>The requested data is: {{ data }}</view>\n</template>\n\n<script setup>\n   const list = () =>\n     alovaInst. Get('/list', {\n       // The set parameters will be passed to uni.request\n       enableHttp2: true,\n       sslVerify: true\n     });\n   const { loading, data, uploading } = useRequest(list);\n<\/script>\n")),(0,o.kt)("h3",{id:"upload"},"Upload"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"requestType: 'upload'")," is set in the ",(0,o.kt)("em",{parentName:"p"},"config")," of the method instance, it means to upload the file, the request adapter will call ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),", and the uploaded file data is placed in the data of the method instance, you need to specify in the data ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"filePath or files"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," (if necessary), these 4 parameters will be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),", at the same time, you can also specify other parameters besides these 4 parameters in data , the request adapter will pass them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"formData")," parameter."),(0,o.kt)("p",null,"Similarly, it is fully compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),", you can specify ","[all configuration items]"," supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.uploadFile")," in ",(0,o.kt)("em",{parentName:"p"},"config")," of method instance creation (",(0,o.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api"},"https://uniapp.dcloud.net.cn/api")," /request/network-file.html#uploadfile), if there are additional parameters to be set, please specify them in ",(0,o.kt)("em",{parentName:"p"},"config")," of the method instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n   <view v-if=\"loading\">Uploading...</view>\n   <view>Upload progress: {{ uploading.loaded }}/{{ uploading.total }}</view>\n   <button @click=\"handleImageChoose\">Upload image</button>\n   \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n   const uploadFile = (name, filePath, formData) =>\n     alovaInst. Post(\n       '/uploadImg',\n       {\n         name,\n         filePath,\n\n         // Additional data will be passed into formData of uni.uploadFile\n         ...formData\n       },\n       {\n         // Set the request method to upload, and the adapter will call uni.uploadFile\n         requestType: 'upload',\n         fileType: 'image',\n\n         // Start upload progress\n         enableUpload: true\n       }\n     );\n\n   const { loading, data, uploading, send } = useRequest(uploadFile, {\n     immediate: false\n   });\n\n   const handleImageChoose = () => {\n     uni.chooseImage({\n       success: chooseImageRes => {\n         const tempFilePaths = chooseImageRes.tempFilePaths;\n         send('fileName', tempFilePaths[0], {\n           extra1: 'a',\n           extra2: 'b'\n         });\n       }\n     });\n   };\n<\/script>\n")),(0,o.kt)("h3",{id:"download"},"download"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"requestType: 'download'")," is set in the ",(0,o.kt)("em",{parentName:"p"},"config")," of the method instance, it means to download the file, and the request adapter will call ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.downloadFile"),"."),(0,o.kt)("p",null,"Similarly, it is fully compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.downloadFile"),", you can specify ","[all configuration items]"," supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"uni.downloadFile")," in ",(0,o.kt)("em",{parentName:"p"},"config")," of method instance creation (",(0,o.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api"},"https://uniapp.dcloud.net.cn/api")," /request/network-file.html#downloadfile), if there are additional parameters to be set, please specify them in ",(0,o.kt)("em",{parentName:"p"},"config")," of the method instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n   <view v-if=\"loading\">Downloading...</view>\n   <view>Download progress: {{ downloading.loaded }}/{{ downloading.total }}</view>\n   <button @click=\"handleImageDownload\">Download image</button>\n   \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n   const downloadFile = filePath =>\n     alovaInst. Get('/bigImage. jpg', {\n       // Set the request method to download, and the adapter will call uni.downloadFile\n       requestType: 'download',\n       filePath,\n\n       // Start download progress\n       enableDownload: true\n     });\n\n   const { loading, data, downloading, send } = useRequest(downloadFile, {\n     immediate: false\n   });\n\n   const handleImageDownload = () => {\n     send('file_save_path');\n   };\n<\/script>\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"uniapp provides complete type adaptation, and the type of method configuration and response data will exactly match the type of uniapp."),(0,o.kt)("h3",{id:"method-configuration"},"method configuration"),(0,o.kt)("p",null,"When creating a method instance, in addition to the general configuration items in the method, you can also use the configuration items in ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.request"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.uploadFile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.downloadFile"),", we have removed and method from the type Items that conflict with the common configuration of the instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * uni.request requests additional parameters\n */\nexport type UniappRequestConfig = Omit<\n  UniNamespace.RequestOptions,\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * uni.uploadFile additional parameters\n */\nexport type UniappUploadConfig = Omit<\n  UniNamespace.UploadFileOption,\n  'url' | 'name' | 'header' | 'formData' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * uni.downloadFile additional parameters\n */\nexport type UniappDownloadConfig = Omit<\n  UniNamespace.DownloadFileOption,\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Merged request configuration parameters\n */\nexport type UniappConfig = {\n  /**\n   * Request type, upload means upload, download means download, not filling means normal request\n   */\n  requestType?: 'upload' | 'download';\n} & UniappRequestConfig &\n  UniappUploadConfig &\n  UniappDownloadConfig;\n")),(0,o.kt)("h3",{id:"response-data"},"Response data"),(0,o.kt)("p",null,"Because the uniapp request adapter is compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.request"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.uploadFile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uniapp.downloadFile"),", but their response value types are slightly different, so the response data type is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type UniappResponse =\n  // The response type of uni.request\n  | UniNamespace.RequestSuccessCallbackResult\n\n  // The response type of uni.uploadFile\n  | UniNamespace.UploadFileSuccessCallbackResult\n\n  // The response type of uni.downloadFile\n  | UniNamespace.DownloadSuccessData;\n")),(0,o.kt)("p",null,"In actual use, we usually need to process the response data globally. It is recommended to judge the returned data separately. A simple example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   ...AdapterUniapp(),\n   responded(response) {\n     const { statusCode, data } = response as UniNamespace. RequestSuccessCallbackResult;\n     if (statusCode >= 400) {\n       throw new Error('request error');\n     }\n     return data || null;\n   }\n});\n")))}m.isMDXComponent=!0}}]);