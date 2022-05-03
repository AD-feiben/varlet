import{j,l as W,c as N,a as q,h as G,m as H}from"./components.21c4ed88.js";import{d as I,f as S,_ as F,o as v,c as y,V as T,z as d,n as E,r as k,E as J,i as Q,a as g,x as _,t as s,k as X,m as a,ah as t,p as i,F as Z,y as o}from"./elevation.4b2b848a.js";import{I as x}from"./index.520d7afd.js";import{B as ee}from"./index.1ac96908.js";import{A as B}from"./AppType.5c97583f.js";import{d as te}from"./index.5d153c96.js";import{u as ne,a as z,_ as ae,b as ie,c as se}from"./en-US.c00b1940.js";import{w as oe,a as re}from"./utils.782338de.js";import"./elements.eca917ca.js";import"./index.e49719fd.js";import"./index.eb1d562b.js";/* empty css               */import"./index.e117c112.js";const V=Symbol("STEPS_BIND_STEP_KEY"),U=Symbol("STEPS_COUNT_STEP_KEY");function le(){const{bindChildren:e,childProviders:n}=j(V),{length:c}=W(U);return{length:c,step:n,bindStep:e}}function ce(e){return["horizontal","vertical"].includes(e)}const ue={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:ce},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const{n:de}=N("steps"),pe=I({name:"VarSteps",props:ue,setup(e){const n=S(()=>e.active),c=S(()=>e.activeColor),u=S(()=>e.inactiveColor),f=S(()=>e.direction),{length:C,bindStep:p}=le();return p({active:n,length:C,direction:f,activeColor:c,inactiveColor:u,clickStep:A=>{q(e.onClickStep,A)}}),{n:de}}});function ve(e,n,c,u,f,C){return v(),y("div",{class:d(e.n()),style:E({flexDirection:e.direction==="horizontal"?"row":"column"})},[T(e.$slots,"default")],6)}var h=F(pe,[["render",ve]]);h.install=function(e){e.component(h.name,h)};const fe={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function me(){const{parentProvider:e,bindParent:n}=G(V),{index:c}=H(U);if(!e||!n||!c)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:c,steps:e,bindSteps:n}}const{n:Se,classes:he}=N("step"),Ce=I({name:"VarStep",components:{VarIcon:x},props:fe,setup(){const e=k(null),n=k(""),c=k(!1),{index:u,steps:f,bindSteps:C}=me(),{active:p,length:m,activeColor:b,inactiveColor:A,direction:P,clickStep:D}=f,K=S(()=>p.value===u.value),L=S(()=>u.value!==-1&&p.value>u.value),M={index:u},Y=()=>D(u.value),O=$=>{P.value==="horizontal"&&(e.value=$)};return C(M),J(m,$=>{if(c.value=$-1===u.value,e.value){const R=e.value.offsetWidth/2-14;n.value=`0 -${R}px`}}),{n:Se,classes:he,main:e,index:u,isActive:L,isCurrent:K,direction:P,lineMargin:n,activeColor:b,inactiveColor:A,isLastChild:c,click:Y,getRef:O}}}),ye={key:3};function ge(e,n,c,u,f,C){const p=Q("var-icon");return v(),y("div",{class:d(e.n())},[g("div",{class:d(e.n(e.direction))},[g("div",{class:d(e.n(`${e.direction}-main`)),ref:e.getRef},[g("div",{class:d(e.classes(e.n(`${e.direction}-tag`),[e.isActive||e.isCurrent,e.n(`${e.direction}-tag--active`)])),style:E({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:n[0]||(n[0]=(...m)=>e.click&&e.click(...m))},[e.isActive?(v(),_(p,{key:0,class:d(e.n("icon")),"var-step-cover":"",name:e.activeIcon},null,8,["class","name"])):e.isCurrent&&e.currentIcon?(v(),_(p,{key:1,class:d(e.n("icon")),"var-step-cover":"",name:e.currentIcon},null,8,["class","name"])):e.inactiveIcon?(v(),_(p,{key:2,class:d(e.n("icon")),"var-step-cover":"",name:e.inactiveIcon},null,8,["class","name"])):(v(),y("span",ye,s(e.index+1),1))],6),g("div",{class:d(e.classes(e.n(`${e.direction}-content`),[e.isActive||e.isCurrent,e.n(`${e.direction}-content--active`)])),onClick:n[1]||(n[1]=(...m)=>e.click&&e.click(...m))},[T(e.$slots,"default")],2)],2),e.isLastChild?X("v-if",!0):(v(),y("div",{key:0,class:d(e.n(`${e.direction}-line`)),style:E({margin:e.lineMargin})},null,6))],2)],2)}var l=F(Ce,[["render",ge]]);l.install=function(e){e.component(l.name,l)};var ke={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},Ae={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:w,use:$e,pack:r,packs:Ke,merge:Le}=ne(),_e=e=>{se(e),$e(e)};z("zh-CN",ae);z("en-US",ie);w("zh-CN",ke);w("en-US",Ae);const Me={setup(e){const n=k(0),c=()=>{n.value=(n.value+1)%4};return oe(_e),re(te),(u,f)=>(v(),y(Z,null,[a(t(B),null,{default:i(()=>[o(s(t(r).basicUsage),1)]),_:1}),a(t(h),{active:n.value},{default:i(()=>[a(t(l),null,{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(B),null,{default:i(()=>[o(s(t(r).customStyle),1)]),_:1}),a(t(h),{active:n.value,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(t(l),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(l),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(l),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(l),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(B),null,{default:i(()=>[o(s(t(r).vertical),1)]),_:1}),a(t(h),{direction:"vertical",active:n.value},{default:i(()=>[a(t(l),null,{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(l),null,{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(ee),{type:"primary",block:"",onClick:c,style:{"margin-top":"20px"}},{default:i(()=>[o(s(t(r).next),1)]),_:1})],64))}};export{Me as default};
