"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),s=n(6010),i=n(2389),o=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function h(e){var t;const{lazy:n,block:i,defaultValue:h,values:p,groupId:m,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,l.U)(),[T,q]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==T&&v.some((t=>t.value===e))&&q(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==T&&(P(t),q(a),null!=m&&w(m,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:j,onClick:x},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,i.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},5641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(5488),i=n(5162);const o={title:"state change request",sidebar_position:20},l=void 0,c={unversionedId:"request-timing/use-watcher",id:"request-timing/use-watcher",title:"state change request",description:"useWatcher is used to monitor the specified state change and send a request immediately. It is mainly used in scenarios where the data is updated with the state change, such as paging, data filtering, and fuzzy search.",source:"@site/docs/04-request-timing/02-use-watcher.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-watcher",permalink:"/request-timing/use-watcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/04-request-timing/02-use-watcher.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"state change request",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"send request",permalink:"/request-timing/use-request"},next:{title:"fetch data",permalink:"/request-timing/use-fetcher"}},u={},d=[{value:"Pagination",id:"pagination",level:2},{value:"Manually send the request",id:"manually-send-the-request",level:2},{value:"Send function parameter passing rules",id:"send-function-parameter-passing-rules",level:2},{value:"useWatcher callback function",id:"usewatcher-callback-function",level:3},{value:"onSuccess callback function",id:"onsuccess-callback-function",level:3},{value:"onError callback function",id:"onerror-callback-function",level:3},{value:"onComplete callback function",id:"oncomplete-callback-function",level:3},{value:"set initial response data",id:"set-initial-response-data",level:2},{value:"Request anti-shake",id:"request-anti-shake",level:2},{value:"Set the anti-shake time for all monitoring states",id:"set-the-anti-shake-time-for-all-monitoring-states",level:3},{value:"Set the anti-shake time for a single listening state",id:"set-the-anti-shake-time-for-a-single-listening-state",level:3},{value:"Manual interrupt request",id:"manual-interrupt-request",level:2}],h={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher")," is used to monitor the specified state change and send a request immediately. It is mainly used in scenarios where the data is updated with the state change, such as paging, data filtering, and fuzzy search."),(0,r.kt)("p",null,"##Keyword search\nNext, let's take the example of searching for todo items."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- keyword changes as input changes --\x3e\n  <input v-model="keyword" />\n\n  \x3c!-- Render filtered todo list --\x3e\n  <div v-if="loading">Loading...</div>\n  <template v-else>\n    <div v-for="todo in data">\n      <div class="todo-title">{{ todo.title }}</div>\n      <div class="todo-time">{{ todo.time }}</div>\n    </div>\n  </template>\n</template>\n\n<script setup>\n  // create method instance\n  const filterTodoList = keyword => {\n    return alovaInstance.Get(\'/tood/list/search\', {\n      params: {\n        keyword\n      }\n    });\n  };\n  const keyword = ref(\'\');\n  const {\n    loading,\n    data,\n    error\n\n    // The first parameter must be a function that returns an instance of method\n  } = useWatcher(\n    () => filterTodoList(keyword.value),\n\n    // Array of monitored states, these state changes will trigger a request\n    [keyword],\n    {\n      // Set 500ms anti-shake, if the keyword changes frequently, the request will only be sent 500ms after the change is stopped\n      debounce: 500\n    }\n  );\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// create method instance\nconst filterTodoList = keyword => {\n  return alovaInstance.Get('/tood/list/search', {\n    params: {\n      keyword\n    }\n  });\n};\n\nconst App = () => {\n  const [keyword, setKeyword] = useState('');\n  const {\n    loading,\n    data,\n    error\n    // The first parameter must be a function that returns an instance of method\n  } = useWatcher(\n    () => filterTodoList(keyword),\n\n    // Array of monitored states, these state changes will trigger a request\n    [keyword],\n    {\n      // Set 500ms anti-shake, if the keyword changes frequently, the request will only be sent 500ms after the change is stopped\n      debounce: 500\n    }\n  );\n\n  return (\n    <>\n      {/* keyword changes as input changes */}\n      <input\n        value={keyword}\n        onInput={e => setKeyword(e.target.value)}\n      />\n\n      {/* Render filtered todo list */}\n      {loading ? <div>Loading...</div> : null}\n      {!loading ? (\n        <>\n          {data.map(todo => (\n            <div>\n              <div class=\"todo-title\">{todo.title}</div>\n              <div class=\"todo-time\">{todo.time}</div>\n            </div>\n          ))}\n        </>\n      ) : null}\n    </>\n  );\n};\n"))),(0,r.kt)(i.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  import { writable } from \'svelte/store\';\n\n  // create method instance\n  const filterTodoList = text => {\n    return alovaInstance.Get(\'/tood/list/search\', {\n      params: {\n        keyword: text\n      }\n    });\n  };\n  const keyword = writable(\'\');\n\n  const {\n    loading,\n    data,\n    error\n\n    // The first parameter must be a function that returns an instance of method\n  } = useWatcher(\n    () => filterTodoList($keyword),\n\n    // Array of monitored states, these state changes will trigger a request\n    [keyword],\n    {\n      // Set 500ms anti-shake, if the keyword changes frequently, the request will only be sent 500ms after the change is stopped\n      debounce: 500\n    }\n  );\n\n  const updateKeyword = e => {\n    $keyword = e.target.value;\n  };\n<\/script>\n\x3c!-- keyword changes as input changes --\x3e\n<input\n  value="{$keyword}"\n  on:input="{updateKeyword}" />\n\n\x3c!-- Render filtered todo list --\x3e\n{#if $loading}\n<div>Loading...</div>\n{:else} {#each $data as todo}\n<div>\n  <div class="todo-title">{ todo.title }</div>\n  <div class="todo-time">{ todo.time }</div>\n</div>\n{/each} {/if}\n')))),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Taking the todo list pagination request as an example, you can do this."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n  // method instance creation function\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/tood/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const currentPage = ref(1);\n  const {\n    loading,\n    data,\n    error\n\n    // The first parameter is the function that returns the method instance, not the method instance itself\n  } = useWatcher(\n    () => getTodoList(currentPage.value),\n    // Array of monitored states, these state changes will trigger a request\n    [currentPage],\n    {\n      // \u26a0\ufe0f Calling useWatcher does not trigger by default, pay attention to the difference from useRequest\n      // Manually set immediate to true to get the first page data initially\n      immediate: true\n    }\n  );\n<\/script>\n"))),(0,r.kt)(i.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\n\n// method instance creation function\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/tood/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst App = () => {\n  const [currentPage, setCurrentPage] = useState(1);\n  const {\n    loading,\n    data,\n    error\n\n    // The first parameter is the function that returns the method instance, not the method instance itself\n  } = useWatcher(\n    () => getTodoList(currentPage),\n    // Array of monitored states, these state changes will trigger a request\n    [currentPage],\n    {\n      // \u26a0\ufe0f Calling useWatcher does not trigger by default, pay attention to the difference from useRequest\n      // Manually set immediate to true to get the first page data initially\n      immediate: true\n    }\n  );\n\n  return {\n    /* ... */\n  };\n};\n"))),(0,r.kt)(i.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { writable } from 'svelte/store';\n\n  // method instance creation function\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/tood/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const currentPage = writable(1);\n  const {\n    loading,\n    data,\n    error\n\n    // The first parameter is the function that returns the method instance, not the method instance itself\n  } = useWatcher(\n    () => getTodoList($currentPage),\n    // Array of monitored states, these state changes will trigger a request\n    [currentPage],\n    {\n      // \u26a0\ufe0f Calling useWatcher does not trigger by default, pay attention to the difference from useRequest\n      // Manually set immediate to true to get the first page data initially\n      immediate: true\n    }\n  );\n<\/script>\n\n\x3c!-- ... --\x3e\n")))),(0,r.kt)("h2",{id:"manually-send-the-request"},"Manually send the request"),(0,r.kt)("p",null,"Sometimes you want to resend the request when the listening state has not changed (such as server data has been updated), you can also manually trigger the request through the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," function, the usage is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  send\n  // highlight-end\n} = useWatcher(\n  () => getTodoList($currentPage),\n  // Array of monitored states, these state changes will trigger a request\n  [currentPage],\n  {\n    immediate: true\n  }\n);\n\n// highlight-start\nsend();\n// highlight-end\n")),(0,r.kt)("h2",{id:"send-function-parameter-passing-rules"},"Send function parameter passing rules"),(0,r.kt)("p",null,"In the above example, the send function is called to manually trigger the request, which can accept any number of parameters, which will be received by the following 4 functions respectively:"),(0,r.kt)("h3",{id:"usewatcher-callback-function"},"useWatcher callback function"),(0,r.kt)("p",null,"The callback function of useWatcher can be received, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useWatcher(currentPage => getTodoList(currentPage));\nsend(1); // currentPage in the above callback function will receive 1\n")),(0,r.kt)("h3",{id:"onsuccess-callback-function"},"onSuccess callback function"),(0,r.kt)("p",null,"The callback set by onSuccess starts to receive from the second parameter (the first parameter is the response data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onSuccess } = useWatcher(currentPage => getTodoList(currentPage));\nonSuccess((responseData, currentPage) => {\n  // responseData is the response data\n  // currentPage will receive 1\n});\nsend(1);\n")),(0,r.kt)("h3",{id:"onerror-callback-function"},"onError callback function"),(0,r.kt)("p",null,"The callback set by onError starts to receive from the second parameter (the first parameter is the error object)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onError } = useWatcher(currentPage => getTodoList(currentPage));\nonError((err, currentPage) => {\n  // err is the Error object thrown when the request is wrong\n  // currentPage will receive 1\n});\nsend(1);\n")),(0,r.kt)("h3",{id:"oncomplete-callback-function"},"onComplete callback function"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Receive from the first parameter in the callback set by onComplete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onComplete } = useWatcher(currentPage => getTodoList(currentPage));\nonComplete(id => {\n  // currentPage will receive 1\n});\nsend(1);\n")),(0,r.kt)("h2",{id:"set-initial-response-data"},"set initial response data"),(0,r.kt)("p",null,"Before a page gets the initial data, it inevitably needs to wait for the server to respond. Before responding, it is generally necessary to initialize the state to an empty array or empty object, so as to avoid page errors. A parameter realizes the setting of the initial data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// The initial value of data can also be set in useWatcher\nconst {\n  // The initial value of data before the response is [], not undefined\n  data\n} = useWatcher(\n  () => getTodoList(/* parameters */),\n  [\n    /* monitor status */\n  ],\n  {\n    initialData: []\n  }\n);\n")),(0,r.kt)("h2",{id:"request-anti-shake"},"Request anti-shake"),(0,r.kt)("p",null,"Usually, we write anti-shake code at the level of frequently triggered events. This time, we implemented the anti-shake function at the request level, which means that you no longer have to implement anti-shake in the fuzzy search function, and the usage is very simple."),(0,r.kt)("admonition",{title:"Tips: What is function anti-shake",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Function debounce means that after the event is triggered, the function can only be executed once within n seconds. If the event is triggered again within n seconds after the event is triggered, the function delay execution time will be recalculated (here and the function section). To distinguish between streams, function throttling means that the event cannot be triggered again within a period of time after the event is triggered)")),(0,r.kt)("h3",{id:"set-the-anti-shake-time-for-all-monitoring-states"},"Set the anti-shake time for all monitoring states"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\n  // highlight-start\n  // When setting debounce as a number, it represents the debounce time of all listening states, in milliseconds\n  // As shown here, when one or more of the status keyword and date change, the request will be sent after 500ms\n  debounce: 500\n  // highlight-end\n});\n")),(0,r.kt)("h3",{id:"set-the-anti-shake-time-for-a-single-listening-state"},"Set the anti-shake time for a single listening state"),(0,r.kt)("p",null,"In many scenarios, we only need to debounce certain frequently changing listening states, such as the state changes triggered by the ",(0,r.kt)("inlineCode",{parentName:"p"},"onInput")," of the text box, you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\n  // highlight-start\n  // Set the anti-shake time in the array order of the listening state, 0 or no transmission means no anti-shake\n  // The order of the monitoring status here is [keyword, date], and the anti-shake array is set to [500, 0], which means that only the anti-shake is set separately for the keyword\n  debounce: [500, 0]\n  // can also be set as follows:\n  // debounce: [500],\n  // highlight-end\n});\n")),(0,r.kt)("h2",{id:"manual-interrupt-request"},"Manual interrupt request"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," parameter is not set, the request will never time out. If you need to manually interrupt the request, you can receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," method when the ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher")," function is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  // abort function is used for interrupt request\n  abort\n  // highlight-end\n} = useWatcher(() => filterTodoList(keyword), [keyword]);\n\n// highlight-start\n// Call abort to interrupt the request\nconst handleCancel = () => {\n  abort();\n};\n// highlight-end\n")))}p.isMDXComponent=!0}}]);