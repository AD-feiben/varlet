import{_ as V,r as o,b as r,B as q,u as z,ab as F,ao as I,i as N,j as L,o as _,c as A,a as s,t as p,F as D,q as P,l as T,x as j,p as H,m as E,y as G,G as M,ac as R}from"./elevation.4b2b848a.js";const S={name:"AppHome",setup(){var i,g,f,x,C,y,k,w,B,b;const m=o((g=(i=r)==null?void 0:i.title)!=null?g:""),d=o((x=(f=r)==null?void 0:f.logo)!=null?x:""),v=o((k=(y=(C=r)==null?void 0:C.mobile)==null?void 0:y.title)!=null?k:{}),u=o((b=(B=(w=r)==null?void 0:w.pc)==null?void 0:B.menu)!=null?b:[]).value.filter(e=>e.type===2),h=q(u),a=o("zh-CN"),n=o("mobile"),l=z();return F(e=>{a.value=e}),I(e=>{n.value=e}),{components:h,lang:a,toComponent:e=>{l.push({path:`/${e.doc}`,query:{language:a.value,platform:n.value,replace:e.doc}}),!M()&&R()&&window.top.scrollToMenu(e.doc)},logo:d,title:m,description:v}}},J={class:"logo"},K={class:"varlet-home__title"},O=["src"],Q={class:"varlet-home__desc"};function U(m,d,v,t,u,h){const a=N("var-site-icon"),n=N("var-site-cell"),l=L("ripple");return _(),A(D,null,[s("div",J,[s("h1",K,[s("img",{class:"varlet-home__image",src:t.logo},null,8,O),s("span",null,p(t.title),1)]),s("h2",Q,p(t.description[t.lang]),1)]),(_(!0),A(D,null,P(t.components,c=>T((_(),j(n,{key:c.text,onClick:i=>t.toComponent(c)},{extra:H(()=>[E(a,{name:"chevron-right",size:"14"})]),default:H(()=>[G(p(c.text[t.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var X=V(S,[["render",U],["__scopeId","data-v-24a8218c"]]);export{X as default};
