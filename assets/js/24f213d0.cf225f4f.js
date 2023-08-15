"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Step 4 - Data Compensation",sidebar_position:70},o=void 0,s={unversionedId:"tutorial/strategy/sensorless-data-interaction/data-compensation",id:"tutorial/strategy/sensorless-data-interaction/data-compensation",title:"Step 4 - Data Compensation",description:"The user may perform some data operations in a disconnected environment. At this time, the silent queue will be full of unsubmitted requests. When the network is restored, due to the limitation of the timing mechanism, it will take a little time to complete these requests. The list loaded at this time The data does not include unsubmitted requests, which can cause some confusion for users:",source:"@site/docs/tutorial/07-strategy/01-sensorless-data-interaction/07-data-compensation.md",sourceDirName:"tutorial/07-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/data-compensation",permalink:"/tutorial/strategy/sensorless-data-interaction/data-compensation",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/01-sensorless-data-interaction/07-data-compensation.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Step 4 - Data Compensation",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Step 3 - Set Request Retry",permalink:"/tutorial/strategy/sensorless-data-interaction/request-retry"},next:{title:"Step 5 - Edit Data",permalink:"/tutorial/strategy/sensorless-data-interaction/edit-item"}},l={},u=[{value:"Explanation of related functions",id:"explanation-of-related-functions",level:2},{value:"filterSilentMethods",id:"filtersilentmethods",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The user may perform some data operations in a disconnected environment. At this time, the silent queue will be full of unsubmitted requests. When the network is restored, due to the limitation of the timing mechanism, it will take a little time to complete these requests. The list loaded at this time The data does not include unsubmitted requests, which can cause some confusion for users:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"I have clearly added multiple pieces of data, why is it not in the list?"')),(0,i.kt)("p",null,"Therefore, we need to manually compensate the unsubmitted data to the list, so that the list data is always kept up-to-date. In this step, the saved operation records will be used to compensate the list data. It is actually very simple. We It is only necessary to traverse the silentMethod instance of the relevant queue after the list request is successful, and update the operation records recorded in the previous step to the list data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSQRequest, filterSilentMethods, equals } from '@alova/scene-vue';\nimport { todoList } from './api.js';\nconst { data, loading, onSuccess } = useSQRequest(todoList, {\n  initialData: []\n});\n\nonSuccess(() => {\n  // Get all silentMethod instances under the default queue\n  const silentMethods = filterSilentMethods();\n  silentMethods.forEach(({ reviewData }) => {\n    if (!reviewData) {\n      return;\n    }\n    const { operate, data } = reviewData;\n    const index = todoListData.findIndex(({ id }) => equals(id, data.id));\n    if ((operate === 'edit' || operate === 'remove') && index >= 0) {\n      operate === 'edit' ? todoListData.splice(index, 1, data) : todoListData.splice(index, 1);\n    } else if (operate === 'add' && index < 0) {\n      // There will be added uncommitted items when re-requesting and hitting the cache, these need to be filtered\n      todoListData.unshift(data);\n    }\n  });\n});\n")),(0,i.kt)("h2",{id:"explanation-of-related-functions"},"Explanation of related functions"),(0,i.kt)("h3",{id:"filtersilentmethods"},"filterSilentMethods"),(0,i.kt)("p",null,"Filter out the specified silentMethod instance by method name or regular expression, which is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function filterSilentMethods(\n  methodNameMatcher?: string | number | RegExp,\n  queueName?: string,\n  filterActive?: boolean\n): SilentMethod[];\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"methodNameMatcher: "),"method name matcher, if it is a number or string, it will filter out the results that completely match the name, if it is a regular expression, it will filter out the matching results, if it is not passed, it will filter out all the results;"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"queueName"),": Specify the queue to search for, if not uploaded, the ",(0,i.kt)("em",{parentName:"p"},"default")," queue will be searched by default;"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"filterActive"),": whether to filter out the active state instance"))}c.isMDXComponent=!0}}]);