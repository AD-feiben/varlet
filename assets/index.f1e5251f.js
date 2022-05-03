import{h as S,m as C,a as N,t as f,c as $,n as y}from"./components.21c4ed88.js";import{a as O,b as v}from"./index.a71cd7c1.js";import{t as z}from"./elements.eca917ca.js";import{d as P,r as h,f as c,E as j,_ as k,o as w,c as R,V as E,z as U,n as B}from"./elevation.4b2b848a.js";const L={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function I(){const{parentProvider:e,bindParent:n}=S(O),{index:s}=C(v);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:K}=$("col"),V=P({name:"VarCol",props:L,setup(e){const n=h({left:0,right:0}),s=c(()=>f(e.span)),u=c(()=>f(e.offset)),{row:r,bindRow:m}=I(),l={setPadding(t){n.value=t}},b=(t,a)=>{const o=[];if(a==null)return o;if(y(a)){const{offset:d,span:g}=a;Number(g)>=0&&o.push(i(`--span-${t}-${g}`)),d&&o.push(i(`--offset-${t}-${d}`))}else Number(a)>=0&&o.push(i(`--span-${t}-${a}`));return o};return j([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),N(m,l),{n:i,classes:K,padding:n,toNumber:f,toSizeUnit:z,getSize:b,span:s,offset:u}}});function W(e,n,s,u,r,m){return w(),R("div",{class:U(e.classes(e.n(),"var--box",[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:B({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[E(e.$slots,"default")],6)}var p=k(V,[["render",W]]);p.install=function(e){e.component(p.name,p)};export{p as C};
