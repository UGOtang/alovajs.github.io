"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),s=n(6010),o=n(2389),i=n(7392),l=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:h,groupId:m,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:q}=(0,l.U)(),[w,T]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==w&&(R(t),T(a),null!=m&&q(m,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:C},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(5488),o=n(5162);const i={title:"send request",sidebar_position:10},l=void 0,u={unversionedId:"request-timing/use-request",id:"request-timing/use-request",title:"send request",description:"Next, let's take a look at how to actually make a request. In alova, useRequest, useWatcher, and useFetcher three use hook are provided to realize the request timing, and they control when the request should be issued. At the same time, it will create and maintain stateful request-related data for us, such as loading, data, error, etc. There is no need to maintain these states independently. Let's learn about them below.",source:"@site/docs/04-request-timing/01-use-request.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-request",permalink:"/request-timing/use-request",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/04-request-timing/01-use-request.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"send request",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Request at the right time",permalink:"/category/request-at-the-right-time"},next:{title:"state change request",permalink:"/request-timing/use-watcher"}},c={},d=[{value:"Initial data request",id:"initial-data-request",level:2},{value:"Manually send the request",id:"manually-send-the-request",level:2},{value:"Send function parameter passing rules",id:"send-function-parameter-passing-rules",level:2},{value:"useRequest callback function",id:"userequest-callback-function",level:3},{value:"onSuccess callback function",id:"onsuccess-callback-function",level:3},{value:"onError callback function",id:"onerror-callback-function",level:3},{value:"onComplete callback function",id:"oncomplete-callback-function",level:3},{value:"Set initial response data",id:"set-initial-response-data",level:2},{value:"Manual interrupt request",id:"manual-interrupt-request",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Next, let's take a look at how to actually make a request. In ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher")," three ",(0,r.kt)("inlineCode",{parentName:"p"},"use hook")," are provided to realize the request timing, and they control when the request should be issued. At the same time, it will create and maintain stateful request-related data for us, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"loading"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", etc. There is no need to maintain these states independently. Let's learn about them below."),(0,r.kt)("p",null,"This time, let's first understand the first use hook, ",(0,r.kt)("strong",{parentName:"p"},"useRequest"),", which represents the sending of a request. When executing ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),", a request will be sent by default. It is the most commonly used method for obtaining initial data on a page, and it also supports Turn off its default request sending, which is very useful in request scenarios such as submitting data that are triggered by click events. ."),(0,r.kt)("h2",{id:"initial-data-request"},"Initial data request"),(0,r.kt)("p",null,"Let's get page data for the todo list."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- You can use data directly to render the todo list --\x3e\n  <div v-if="loading">Loading...</div>\n  <div\n    v-else-if="error"\n    class="error">\n    {{ error.message }}\n  </div>\n  <template v-else>\n    <div v-for="todo in data">\n      <div class="todo-title">{{ todo.title }}</div>\n      <div class="todo-time">{{ todo.time }}</div>\n    </div>\n  </template>\n</template>\n\n<script setup>\n  const {\n    // loading is the loading state value, when it is loaded, its value is true, and it is automatically updated to false after the end\n    // It is a value of type Ref, you can access it through loading.value, or bind directly to the interface\n    loading,\n\n    // Response data, also Ref value\n    data,\n\n    // Request error object, Ref value, there is a value when the request is wrong, otherwise it is undefined\n    error,\n\n    // successful callback binding\n    onSuccess,\n\n    // Failed callback binding\n    onError,\n\n    // complete callback binding\n    onComplete\n\n    // Directly pass in the Method instance to send the request\n  } = useRequest(todoListGetter, {\n    // Initial value of data before request response\n    initialData: []\n  });\n  onSuccess(todoListRaw => {\n    console.log(\'The request is successful, the response data is:\', todoListRaw);\n  });\n  onError(error => {\n    console.log(\'The request failed, the error message is:\', error);\n  });\n  onComplete(() => {\n    console.log(\'The request is completed, it will be called regardless of success or failure\');\n  });\n<\/script>\n'))),(0,r.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const App = () => {\n  const {\n    // loading is the loading state value, when it is loaded, its value is true, and it is automatically updated to false after the end\n    // Its value is a normal boolean value. When the request state changes, the set function will be automatically called internally to update its value\n    loading,\n\n    // response data\n    data,\n\n    // Request error object, it has a value when the request is wrong, otherwise it is undefined\n    error,\n\n    // successful callback binding\n    onSuccess,\n\n    // Failed callback binding\n    onError,\n\n    // complete callback binding\n    onComplete\n\n    // Directly pass in the Method instance to send the request\n  } = useRequest(todoListGetter, {\n    // Initial value of data before request response\n    initialData: []\n  });\n  onSuccess(todoListRaw => {\n    console.log(\'The request is successful, the response data is:\', todoListRaw);\n  });\n  onError(error => {\n    console.log(\'The request failed, the error message is:\', error);\n  });\n  onComplete(() => {\n    console.log(\'The request is completed, it will be called regardless of success or failure\');\n  });\n\n  // You can use todoList directly to render the todo list\n  if (loading) {\n    return <div>Loading...</div>;\n  } else if (error) {\n    return <div class="error">{error.message}</div>;\n  } else {\n    return (\n      <>\n        <div v-for="todo in data">\n          <div class="todo-title">{todo.title}</div>\n          <div class="todo-time">{todo.time}</div>\n        </div>\n      </>\n    );\n  }\n};\n'))),(0,r.kt)(o.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const {\n    // loading is the loading state value, when it is loaded, its value is true, and it is automatically updated to false after the end\n    // it is a Writable value, it will be maintained internally\n    loading,\n\n    // response data\n    data,\n\n    // Request error object, it has a value when the request is wrong, otherwise it is undefined\n    error,\n\n    // successful callback binding\n    onSuccess,\n\n    // Failed callback binding\n    onError,\n\n    // complete callback binding\n    onComplete\n\n    // Directly pass in the Method instance to send the request\n  } = useRequest(todoListGetter, {\n    // Initial value of data before request response\n    initialData: []\n  });\n  onSuccess(todoListRaw => {\n    console.log('The request is successful, the response data is:', todoListRaw);\n  });\n  onError(error => {\n    console.log('The request failed, the error message is:', error);\n  });\n  onComplete(() => {\n    console.log('The request is completed, it will be called regardless of success or failure');\n  });\n<\/script>\n\n\x3c!-- You can use todoList directly to render the todo list --\x3e\n{#if $loading}\n<div>Loading...</div>\n{:else if $error}\n<div class=\"error\">{ $error.message }</div>\n{:else} {#each $data as todo}\n<div>\n  <div class=\"todo-title\">{ todo.title }</div>\n  <div class=\"todo-time\">{ todo.time }</div>\n</div>\n{/each} {/if}\n")))),(0,r.kt)("h2",{id:"manually-send-the-request"},"Manually send the request"),(0,r.kt)("p",null,"When you need to create a new todo item, you can turn off the default sending request first and switch to triggering the request manually. Then change the first parameter of useRequest to a function that returns an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Method"),", which is called when the request is fired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const createTodoPoster = newTodo => alovaInstance.Post('/todo', newTodo);\n\nconst {\n  loading,\n  data,\n  error,\n\n  // The function of the manual sender request, the request is sent after the call\n  send: addTodo\n} = useRequest(newTodo => createTodoPoster(newTodo), {\n  // When immediate is false, it is not emitted by default\n  immediate: false\n});\n\n// Manually send the request\nconst handleAddTodo = () => {\n  /** Manual trigger function can accept any number of parameters, these parameters will be passed to 4 functions\n   * 1. It can be received when the first parameter of useRequest is a callback function\n   * 2. The callback set by onSuccess starts to receive from the second parameter (the first parameter is the response data)\n   * 3. The callback set by onError starts to receive from the second parameter (the first parameter is the error object)\n   * 4. Received from the first parameter in the callback set by onComplete\n   * See next section for details\n   *\n   * Returns: a Promise object that can receive response data\n   */\n  const newTodo = {\n    title: 'New todo item',\n    time: new Date().toLocaleString()\n  };\n  addTodo(newTodo)\n    .then(result => {\n      console.log('Add todo item successfully, the response data is:', result);\n    })\n    .catch(error => {\n      console.log('Failed to add todo item, the error message is:', error);\n    });\n};\n")),(0,r.kt)("h2",{id:"send-function-parameter-passing-rules"},"Send function parameter passing rules"),(0,r.kt)("p",null,"In the above example, the send function is called to manually trigger the request, which can accept any number of parameters, which will be received by the following 4 functions respectively:"),(0,r.kt)("h3",{id:"userequest-callback-function"},"useRequest callback function"),(0,r.kt)("p",null,"It can be received when the first parameter of useRequest is set to the callback function, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useRequest(id => removeTodoPoster(id));\nsend(1); // the id in the above callback function will receive 1\n")),(0,r.kt)("h3",{id:"onsuccess-callback-function"},"onSuccess callback function"),(0,r.kt)("p",null,"The callback set by onSuccess starts to receive from the second parameter (the first parameter is the response data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onSuccess } = useRequest(id => removeTodoPoster(id));\nonSuccess((responseData, id) => {\n  // responseData is the response data\n  // id will receive 1\n});\nsend(1);\n")),(0,r.kt)("h3",{id:"onerror-callback-function"},"onError callback function"),(0,r.kt)("p",null,"The callback set by onError starts to receive from the second parameter (the first parameter is the error object)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onError } = useRequest(id => removeTodoPoster(id));\nonError((err, id) => {\n  // err is the Error object thrown when the request is wrong\n  // id will receive 1\n});\nsend(1);\n")),(0,r.kt)("h3",{id:"oncomplete-callback-function"},"onComplete callback function"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Receive from the first parameter in the callback set by onComplete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onComplete } = useRequest(id => removeTodoPoster(id));\nonComplete(id => {\n  // id will receive 1\n});\nsend(1);\n")),(0,r.kt)("h2",{id:"set-initial-response-data"},"Set initial response data"),(0,r.kt)("p",null,"Before a page gets the initial data, it inevitably needs to wait for the server to respond. Before responding, it is generally necessary to initialize the state to an empty array or empty object, so as to avoid page errors. A parameter realizes the setting of the initial data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Set initial data in useRequest\nconst {\n  // The initial value of data before the response is [], not undefined\n  // highlight-start\n  data\n} = useRequest(todoListGetter, {\n  initialData: []\n});\n// highlight-end\n")),(0,r.kt)("h2",{id:"manual-interrupt-request"},"Manual interrupt request"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," parameter is not set, the request will never time out. If you need to manually interrupt the request, you can receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," method when the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," function is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  // abort function is used for interrupt request\n  abort\n  // highlight-end\n} = useRequest(todoListGetter);\n\n// highlight-start\n// Call abort to interrupt the request\nconst handleCancel = () => {\n  abort();\n};\n// highlight-end\n")))}h.isMDXComponent=!0}}]);