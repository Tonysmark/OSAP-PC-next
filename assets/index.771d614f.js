var S=Object.defineProperty,j=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(s,o,l)=>o in s?S(s,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[o]=l,R=(s,o)=>{for(var l in o||(o={}))I.call(o,l)&&w(s,l,o[l]);if(A)for(var l of A(o))M.call(o,l)&&w(s,l,o[l]);return s},V=(s,o)=>j(s,N(o));import{d as E,r as D,o as v,c as y,w as t,a as g,u as c,S as F,C as U,b as e,e as m,t as T,R as q,_ as z,f as G,g as W,h as J,i as Q,j as X,k as O,L as Y,U as Z,l as ee,M as te,A as ne,D as oe,m as ae,n as ue,p as se,q as le,s as re,v as de,x as b,y as B,H as ie,z as $,B as ce,E as _e,F as me,G as pe,I as he,J as L,K as fe,N as ve,O as ge}from"./vendor.395a4e60.js";const ye=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}};ye();const ke="modulepreload",K={},xe="/preview-pro/",k=function(o,l){return!l||l.length===0?o():Promise.all(l.map(a=>{if(a=`${xe}${a}`,a in K)return;K[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":ke,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((n,p)=>{i.addEventListener("load",n),i.addEventListener("error",p)})})).then(()=>o())};const be={class:"margin-bottom: 24px"},Ce=g("h3",null,"\u5BFC\u822A\u6A21\u5F0F",-1),Ee=m("\u5DE6\u4FA7\u83DC\u5355\u5E03\u5C40"),Ae=m("\u9876\u90E8\u83DC\u5355\u5E03\u5C40"),we=m("\u6DF7\u5408\u83DC\u5355\u5E03\u5C40"),Re=m("\u56FA\u5B9A Header"),Ve=m("\u56FA\u5B9A \u5DE6\u4FA7\u83DC\u5355"),De=m("\u81EA\u52A8\u5206\u5272\u83DC\u5355"),Fe=g("h3",null,"\u5185\u5BB9\u533A\u57DF",-1),Oe=m("\u9876\u680F"),Be=m("\u9875\u811A"),$e=m("\u83DC\u5355"),Le=m("\u83DC\u5355\u5934"),Ke=E({props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(s,{emit:o}){const l=s,a=D(!1),u=()=>{a.value=!a.value},d=(i,n)=>{const p=V(R({},T(l.modelValue)),{[`${n}`]:i});console.log("newConf",p),o("update:modelValue",p)};return(i,n)=>{const p=q,C=z,x=G,r=W,f=J,h=Q,H=X;return v(),y(H,{visible:a.value,"onUpdate:visible":n[8]||(n[8]=_=>a.value=_),width:300,placement:"right",closable:!1},{handle:t(()=>[g("div",{class:"ant-pro-setting-drawer-handle",onClick:u},[a.value?(v(),y(c(U),{key:1})):(v(),y(c(F),{key:0}))])]),default:t(()=>[g("div",be,[Ce,e(C,{value:s.modelValue.layout,onChange:n[0]||(n[0]=({target:_})=>d(_.value,"layout"))},{default:t(()=>[e(p,{value:"side"},{default:t(()=>[Ee]),_:1}),e(p,{value:"top"},{default:t(()=>[Ae]),_:1}),e(p,{value:"mix"},{default:t(()=>[we]),_:1})]),_:1},8,["value"]),e(x),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[Re]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.fixedHeader,onChange:n[1]||(n[1]=_=>d(_,"fixedHeader"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[Ve]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.fixSiderbar,onChange:n[2]||(n[2]=_=>d(_,"fixSiderbar"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[De]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.splitMenus,onChange:n[3]||(n[3]=_=>d(_,"splitMenus"))},null,8,["checked"])]),_:1})]),_:1}),e(x),Fe,e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[Oe]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.headerRender===void 0,onChange:n[4]||(n[4]=_=>d(_===!0&&void 0,"headerRender"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[Be]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.footerRender===void 0,onChange:n[5]||(n[5]=_=>d(_===!0&&void 0,"footerRender"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[$e]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{disabled:"","checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.menu===void 0,onChange:n[6]||(n[6]=_=>d(_===!0&&void 0,"menu"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(r,{span:12},{default:t(()=>[Le]),_:1}),e(r,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.menuHeaderRender===void 0,onChange:n[7]||(n[7]=_=>d(_===!0&&void 0,"menuHeaderRender"))},null,8,["checked"])]),_:1})]),_:1})])]),_:1},8,["visible"])}}}),Pe={style:{"margin-right":"12px"}},He=g("span",null,"\u4E2A\u4EBA\u8BBE\u7F6E",-1),Se=g("span",null,"\u9000\u51FA\u767B\u5F55",-1),je=E({setup(s){return(o,l)=>{const a=ee,u=te,d=ne,i=oe;return v(),O("div",Pe,[e(i,null,{overlay:t(()=>[e(u,null,{default:t(()=>[e(a,null,{icon:t(()=>[e(c(F))]),default:t(()=>[He]),_:1}),e(a,null,{icon:t(()=>[e(c(Y))]),default:t(()=>[Se]),_:1})]),_:1})]),default:t(()=>[e(d,{shape:"square",size:"small"},{icon:t(()=>[e(c(Z))]),_:1})]),_:1})])}}}),Ne=g("img",{src:"https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg"},null,-1),Ie=g("h1",null,"Preview Pro",-1),Me={key:0},Ue=E({setup(s){const o=ae(),{menuData:l}=ue(se(o.getRoutes())),a=le({collapsed:!1,openKeys:[],selectedKeys:[]}),u=D({layout:"mix",fixedHeader:!1,fixSiderbar:!1,splitMenus:!1,menuHeaderRender:void 0,footerRender:void 0,headerRender:void 0}),d=re(()=>o.currentRoute.value.matched.concat().map(i=>({path:i.path,breadcrumbName:i.meta.title||""})));return de(()=>{if(o.currentRoute){console.log("router",o.currentRoute.value);const i=o.currentRoute.value.matched.concat();a.selectedKeys=i.filter(n=>n.name!=="index").map(n=>n.path),a.openKeys=i.filter(n=>n.path!==o.currentRoute.value.path).map(n=>n.path)}}),(i,n)=>{const p=Ke,C=b("router-view"),x=b("pro-layout");return v(),y(x,me({collapsed:c(a).collapsed,"onUpdate:collapsed":n[1]||(n[1]=r=>c(a).collapsed=r),selectedKeys:c(a).selectedKeys,"onUpdate:selectedKeys":n[2]||(n[2]=r=>c(a).selectedKeys=r),openKeys:c(a).openKeys,"onUpdate:openKeys":n[3]||(n[3]=r=>c(a).openKeys=r),"menu-data":c(l),breadcrumb:{routes:c(d)},"iconfont-url":"//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"},u.value),{menuHeaderRender:t(()=>[e(c(B),{to:{path:"/"}},{default:t(()=>[Ne,Ie]),_:1})]),rightContentRender:t(()=>[e(je)]),breadcrumbRender:t(({route:r,params:f,routes:h})=>[h.indexOf(r)===h.length-1?(v(),O("span",Me,[e(c(ie)),m(" "+$(r.breadcrumbName),1)])):(v(),y(c(B),{key:1,to:{path:r.path,params:f}},{default:t(()=>[e(c(ce)),m(" "+$(r.breadcrumbName),1)]),_:2},1032,["to"]))]),footerRender:t(()=>[e(c(_e),{links:[{title:"Github",href:"https://github.com/sendya/preview-pro"},{title:"Ant Design Vue",href:"https://2x.antdv.com"}],copyright:"2021 \xA9 Sendya"},null,8,["links"])]),default:t(()=>[e(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=r=>u.value=r)},null,8,["modelValue"]),e(C)]),_:1},16,["collapsed","selectedKeys","openKeys","menu-data","breadcrumb"])}}});var P=(s,o)=>{const l=s.__vccOpts||s;for(const[a,u]of o)l[a]=u;return l};const Te={};function qe(s,o){const l=b("router-view");return v(),y(l)}var ze=P(Te,[["render",qe]]),Ge=pe({history:he(),routes:[{path:"/",name:"index",meta:{title:"Home"},component:Ue,redirect:"/welcome",children:[{path:"/welcome",name:"welcome",meta:{title:"\u6B22\u8FCE",icon:"icon-icon-test"},component:()=>k(()=>import("./page1.9bb1b2a3.js"),["assets/page1.9bb1b2a3.js","assets/page1.c6c9fbab.css","assets/index.f3516be5.css","assets/vendor.395a4e60.js","assets/vendor.b6fa3e62.css"])},{path:"/admins",name:"admins",meta:{title:"\u7BA1\u7406\u9875",icon:"icon-tuijian"},component:ze,children:[{path:"page-1",name:"page1",meta:{title:"\u4E00\u7EA7\u9875\u9762"},component:()=>k(()=>import("./page1.4e903a85.js"),["assets/page1.4e903a85.js","assets/index.f3516be5.css","assets/index.704e0d38.css","assets/vendor.395a4e60.js","assets/vendor.b6fa3e62.css"])},{path:"page-2",name:"page2",meta:{title:"\u4E8C\u7EA7\u9875\u9762"},component:()=>k(()=>import("./page1.4e903a85.js"),["assets/page1.4e903a85.js","assets/index.f3516be5.css","assets/index.704e0d38.css","assets/vendor.395a4e60.js","assets/vendor.b6fa3e62.css"])},{path:"dynamic-match/:id(\\d+)",name:"dynamic-match",meta:{title:"\u52A8\u6001\u53C2\u6570\u9875\u9762",params:{id:1}},component:()=>k(()=>import("./dynamic-match.9af287ac.js"),["assets/dynamic-match.9af287ac.js","assets/dynamic-match.f0ca8386.css","assets/index.704e0d38.css","assets/vendor.395a4e60.js","assets/vendor.b6fa3e62.css"])}]},{path:"/version",name:"version",meta:{title:"Version",icon:"icon-antdesign"},component:()=>k(()=>import("./detail.4d0fbe95.js"),["assets/detail.4d0fbe95.js","assets/detail.613b3365.css","assets/vendor.395a4e60.js","assets/vendor.b6fa3e62.css"])}]}]});const We={};function Je(s,o){const l=b("router-view"),a=L;return v(),y(a,null,{default:t(()=>[e(l)]),_:1})}var Qe=P(We,[["render",Je]]);fe(Qe).use(Ge).use(L).use(ve).use(ge).mount("#app");
