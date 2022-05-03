import{d as k,r as u,D as h,am as S,_,i as b,o as p,x as B,a as T,V as C,z as N,n as V,ad as w,Y as E,m as c,p as y,c as g,F as z,q as $,ah as v,y as I,t as L}from"./elevation.4b2b848a.js";import{B as U}from"./index.1ac96908.js";import{I as j}from"./index.520d7afd.js";import{c as D,a as F,w as M,x as O,g as q,y as H}from"./components.21c4ed88.js";import{c as P,t as A,d as Y,e as G,f as J,b as K}from"./elements.eca917ca.js";import{C as Q}from"./index.b452aa51.js";import{d as R}from"./index.5d153c96.js";import{a as W}from"./utils.782338de.js";import"./index.e49719fd.js";import"./index.eb1d562b.js";/* empty css               */import"./index.e117c112.js";const X={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};const{n:Z,classes:x}=D("back-top"),tt=k({name:"VarBackTop",components:{VarButton:U,VarIcon:j},props:X,setup(t){const o=u(!1),a=u(null),n=u(!0);let e;const d=r=>{F(t.onClick,r);const l=Y(e);G(e,{left:l,duration:t.duration,animation:M})},s=O(()=>{o.value=J(e)>=K(t.visibilityHeight)},200),m=()=>{const{target:r}=t;if(q(r)){const l=document.querySelector(t.target);if(!l)throw Error("[Varlet] BackTop: target element cannot found");return l}if(H(r))return r;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return h(()=>{e=t.target?m():P(a.value),e.addEventListener("scroll",s),n.value=!1}),S(()=>{e.removeEventListener("scroll",s)}),{disabled:n,show:o,backTopEl:a,toSizeUnit:A,n:Z,classes:x,click:d}}});function et(t,o,a,n,e,d){const f=b("var-icon"),s=b("var-button");return p(),B(E,{to:"body",disabled:t.disabled},[T("div",{class:N(t.classes(t.n(),[t.show,t.n("--active")])),ref:"backTopEl",style:V({right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}),onClick:o[0]||(o[0]=w((...m)=>t.click&&t.click(...m),["stop"]))},[C(t.$slots,"default",{},()=>[c(s,{type:"primary",round:"","var-back-top-cover":""},{default:y(()=>[c(f,{name:"chevron-up"})]),_:1})])],6)],8,["disabled"])}var i=_(tt,[["render",et]]);i.install=function(t){t.component(i.name,i)};const ft={setup(t){const o=[...Array(100).keys()];return W(R),(a,n)=>(p(),g("div",null,[(p(),g(z,null,$(o,e=>c(v(Q),{key:e},{default:y(()=>[I("Scroll to bottom "+L(e),1)]),_:2},1024)),64)),c(v(i),{duration:300})]))}};export{ft as default};
