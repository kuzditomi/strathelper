var b=Object.defineProperty;var v=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(v(s,typeof e!="symbol"?e+"":e,t),t);import{j as m,r as h,L as C,B as w,R as E,a as f,b as _,c as N}from"./vendor.57a0dde9.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};k();const n=m.exports.jsx,c=m.exports.jsxs,y=({choice:s})=>!s||!s.isLeaf?null:c("main",{children:[s.description,n("ul",{children:s.checkboxes.map((e,t)=>n("li",{children:c("label",{children:[n("input",{type:"checkbox"}),e]})},t))}),s.image?n("img",{height:200,src:s.image,alt:"hello"}):null]});let S=0;const M=()=>++S;class i{constructor(e,t,o=[],a=""){l(this,"id");l(this,"label");l(this,"description");l(this,"_level",0);l(this,"_isSelected",!1);l(this,"_callbacks",[]);l(this,"_nextChoices");l(this,"parent");this._checkboxes=o,this._imagename=a,this.id=M(),this.label=e,this.description=t,this._nextChoices=[]}get isLeaf(){return this._nextChoices.length===0}get level(){return this._level}get image(){return this._imagename?`/strathelper/stratimages/${this._imagename}.png`:void 0}get nextChoices(){return[...this._nextChoices]}get checkboxes(){return[...this._checkboxes]}get isSelected(){return this._isSelected}set isSelected(e){this._isSelected=e,this._callbacks.forEach(t=>t(e))}onStateChange(e){return this._callbacks.push(e),()=>{this._callbacks=this._callbacks.filter(t=>t!=e)}}getParent(){return this.parent}setParent(e){this.parent=e}addNextChoice(e){return this.adjustLevels(e),e.setParent(this),this._nextChoices.push(e),this}select(){var e;this.isSelected=!0,(e=this.parent)==null||e.escalateChangeUpwards(this.id),this._nextChoices.forEach(t=>t.escalateChangeDownwards())}escalateChangeUpwards(e){var t;this.parent&&((t=this.parent)==null||t.escalateChangeUpwards(this.id)),this._nextChoices.forEach(o=>{o.id!==e&&o.escalateChangeDownwards()})}escalateChangeDownwards(){this.isSelected=!1,this._nextChoices.forEach(e=>e.escalateChangeDownwards())}adjustLevels(e){e._level++,e._nextChoices.forEach(t=>{this.adjustLevels(t)})}}const u=new i("Ir\xE1ny elk\xE9pzel\xE9s",""),p=new i("Szint tart\xF3",""),x=new i("Ir\xE1nymentes","");u.addNextChoice(new i("Emelked\xE9s","").addNextChoice(new i("Alacsony vola","").addNextChoice(new i("Call debit spread","",["60-90 nap","alacsony ivr, v\xE1rhat\xF3an marad is","kis m\xE9ret <= 1%","25-50% c\xE9l profit","ITM long Call","OTM short Call"],"call-debit-spread")).addNextChoice(new i("Call calendar spread","",["20-30 nap front month","alacsony ivr front month, magasabb back month","kis m\xE9ret <= 1%","25-50% c\xE9l profit","ITM long Call","OTM short Call"]))).addNextChoice(new i("Magas vola","Bull call spread",["alacsony vola","ATM long call","OTM short call"]))).addNextChoice(new i("Es\xE9s","Bear put spread",["alacsony vola","ATM long put","OTM short put"]));p.addNextChoice(new i("Emelked\xE9s","")).addNextChoice(new i("Es\xE9s",""));x.addNextChoice(new i("Ink\xE1bb emelkedik","Jade lizard",["OTM short put","OTM bear call spread"]));new i("faketop","").addNextChoice(u).addNextChoice(p).addNextChoice(x);const L=[u,p,x];class T{constructor(){l(this,"topChoices");this.topChoices=L}}const O=new T,g=({choice:s,onSelect:e})=>{const[t,o]=h.exports.useState(s.isSelected);h.exports.useEffect(()=>{const r=s.onStateChange(d=>{o(d)});return()=>{r()}},[]);const a=()=>t?n("div",{className:"level",children:s.nextChoices.map(r=>n(g,{choice:r,onSelect:e},r.id))}):null;return c("div",{children:[c("span",{className:`${t?"selected":""} choice`,onClick:()=>{s.select(),e(s)},children:[t?"[x]":"[ ]"," ",s.label]}),a()]})},j=({onChoiceSelected:s})=>n("aside",{children:n("ul",{children:O.topChoices.map(e=>n(g,{choice:e,onSelect:s},e.id))})});const I=()=>{const[s,e]=h.exports.useState();return c("div",{className:"finder",children:[n(j,{onChoiceSelected:t=>{e(t)}}),n(y,{choice:s})]})},D=()=>c("div",{className:"menu",children:[n(C,{to:"/",children:"Finder"}),n(C,{to:"/calculator",children:"Calculator"})]});function R(){return n("div",{className:"app",children:c(w,{basename:"/strathelper",children:[n(D,{}),c(E,{children:[n(f,{path:"/calculator",element:n("p",{children:"hello"})}),n(f,{path:"/",element:n(I,{})})]})]})})}_.render(n(N.StrictMode,{children:n(R,{})}),document.getElementById("root"));
