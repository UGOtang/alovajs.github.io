"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),s=n(2389),l=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:k}=(0,i.U)(),[T,C]=(0,o.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=h){const e=D[h];null!=e&&e!==T&&b.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==T&&(N(t),C(a),null!=h&&k(h,String(a)))},L=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:L,onClick:E},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},3209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),s=n(5162);const l={title:"\u624b\u52a8\u66f4\u65b0\u7f13\u5b58",sidebar_position:40},i=void 0,c={unversionedId:"response-data-management/custom-set-cache-data",id:"response-data-management/custom-set-cache-data",title:"\u624b\u52a8\u66f4\u65b0\u7f13\u5b58",description:"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/05-response-data-management/04-custom-set-cache-data.md",sourceDirName:"05-response-data-management",slug:"/response-data-management/custom-set-cache-data",permalink:"/zh-CN/response-data-management/custom-set-cache-data",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/05-response-data-management/04-custom-set-cache-data.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"\u624b\u52a8\u66f4\u65b0\u7f13\u5b58",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u6570\u636e",permalink:"/zh-CN/response-data-management/update-response-data-across-modules"},next:{title:"Next step",permalink:"/zh-CN/category/next-step"}},u={},d=[{value:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",level:2},{value:"\u52a8\u6001\u7f13\u5b58\u6570\u636e\u66f4\u65b0",id:"\u52a8\u6001\u7f13\u5b58\u6570\u636e\u66f4\u65b0",level:2},{value:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u9700\u8981\u6309\u65e5\u671f\u83b7\u53d6todo\u5217\u8868\u6570\u636e\uff0c\u5728\u521d\u59cb\u5316\u65f6\u4e00\u6b21\u8bf7\u6c42\u83b7\u53d6\u4e865\u67081\u65e5\u52305\u65e5\uff0c5\u5929\u7684\u6570\u636e\uff0c\u7136\u540e\u7528\u6237\u5728\u64cd\u4f5c\u65f6\u53c8\u83b7\u53d6\u4e86\u4e00\u6b215\u67081\u65e5\u7684\u6570\u636e\uff0c\u6b64\u65f6\u4e0d\u4f1a\u547d\u4e2d\u521d\u59cb\u5316\u65f6\u76845\u67081\u65e5\u6570\u636e\uff0c\u56e0\u4e3a\u521d\u59cb\u5316\u76845\u5929\u6570\u636e\u662f\u5b58\u653e\u5728\u4e00\u8d77\u7684\uff0c\u800c\u4e0d\u662f\u5206\u5f00\u7f13\u5b58\u7684\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4e3a\u8fd95\u5929\u7684\u6570\u636e\u76f8\u7ee7\u624b\u52a8\u521b\u5efa\u5355\u6761\u7684\u54cd\u5e94\u7f13\u5b58\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u89e3\u51b3\u5355\u6761\u6570\u636e\u8bf7\u6c42\u65f6\u7684\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"},"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n</template>\n<script setup>\nimport { setCacheData } from 'alova';\nimport { ref } from 'vue';\n\nconst getTodoListByDate = dateList => alovaInstance.Get('/todo/list/dates', {\n  params: { dateList }\n});\n// \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\nconst dates = ref([\n  '2022-05-01',\n  '2022-05-02',\n  '2022-05-03',\n  '2022-05-04',\n  '2022-05-05',\n]);\nconst {\n  // ...\n  onSuccess\n} = useWatcher(() => getTodoListByDate(dates.value.join()),\n  [dates],\n  {\n    immediate: true\n  }\n);\nonSuccess(todoListDates => {\n  if (todoListDates.length <= 1) {\n    return;\n  }\n\n  // highlight-start\n  // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n  // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCacheData\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n  todoListDates.forEach(todoDate => {\n    \n    // setCacheData\u53c2\u6570\u8bf4\u660e\uff1a\n    // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\n    setCacheData(getTodoListByDate(todoDate.date), [todoDate]);\n  });\n  // highlight-end\n});\n\n// highlight-start\nconst handleTodolistToggle = () => {\n  // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n  // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n  dates.value = ['2022-05-01'];\n};\n// highlight-end\n<\/script>\n"))),(0,o.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { setCacheData } from 'alova';\nimport { useState } from 'react';\n\nconst getTodoListByDate = dateList => alovaInstance.Get('/todo/list/dates', {\n  params: { dateList }\n});\n\nconst App = () => {\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const [dates, setDates] = useState([\n    '2022-05-01',\n    '2022-05-02',\n    '2022-05-03',\n    '2022-05-04',\n    '2022-05-05',\n  ]);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.join()),\n    [dates],\n    {\n      immediate: true\n    }\n  );\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCacheData\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    // setCacheData\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n    todoListDates.forEach(todoDate => {\n      setCacheData(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    setDates(['2022-05-01']);\n  };\n  // highlight-end\n\n  return (\n    <button onClick={handleTodolistToggle}>\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n  );\n};\n"))),(0,o.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { setCacheData } from 'alova';\nimport { writable } from 'svelte/store';\n\nconst getTodoListByDate = dateList => alovaInstance.Get('/todo/list/dates', {\n  params: { dateList }\n});\n// \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\nconst dates = writable([\n  '2022-05-01',\n  '2022-05-02',\n  '2022-05-03',\n  '2022-05-04',\n  '2022-05-05',\n]);\nconst {\n  // ...\n  onSuccess\n} = useWatcher(() => getTodoListByDate($dates.join()),\n  [dates],\n  {\n    immediate: true\n  }\n);\nonSuccess(todoListDates => {\n  if (todoListDates.length <= 1) {\n    return;\n  }\n\n  // highlight-start\n  // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n  // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCacheData\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n  // setCacheData\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n  todoListDates.forEach(todoDate => {\n    setCacheData(getTodoListByDate(todoDate.date), [todoDate]);\n  });\n  // highlight-end\n});\n\n// highlight-start\nconst handleTodolistToggle = () => {\n  // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n  // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n  $dates = ['2022-05-01'];\n};\n// highlight-end\n<\/script>\n<button on:click={handleTodolistToggle}>\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n")))),(0,o.kt)("h2",{id:"\u52a8\u6001\u7f13\u5b58\u6570\u636e\u66f4\u65b0"},"\u52a8\u6001\u7f13\u5b58\u6570\u636e\u66f4\u65b0"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"setCacheData"),"\u4e2d\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u52a8\u6001\u8ba1\u7b97\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u9700\u8981\u66f4\u65b0\u7684\u7f13\u5b58\u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"setCacheData(getTodoListByDate('2022-10-01'), oldCache => {\n\n  // \u8fd4\u56de\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\n  return {\n    ...oldCache,\n    expire: isAfter('2022-10-01', new Date()),\n  };\n});\n")),(0,o.kt)("h2",{id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"},"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"setCacheData"),"\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u6765\u4e2d\u65ad\u7f13\u5b58\u7684\u66f4\u65b0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"setCacheData(getTodoListByDate('2022-10-01'), oldCache => {\n  const isExpired = isAfter('2022-10-01', new Date());\n  if (!isExpired) {\n    return false; // \u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0\n  }\n  return undefined; // \u5c06\u7f13\u5b58\u66f4\u65b0\u4e3aundefined\n});\n")))}m.isMDXComponent=!0}}]);