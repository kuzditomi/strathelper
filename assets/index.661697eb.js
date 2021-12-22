var C=Object.defineProperty;var k=(n,e,a)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var i=(n,e,a)=>(k(n,typeof e!="symbol"?e+"":e,a),a);import{j as u,r as h,L as m,B as f,R as E,a as g,b as M,c as w}from"./vendor.57a0dde9.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}};T();const r=u.exports.jsx,c=u.exports.jsxs,v=({choice:n})=>!n||!n.isLeaf?null:c("main",{children:[n.description,r("ul",{children:n.checkboxes.map((e,a)=>r("li",{children:c("label",{children:[r("input",{type:"checkbox"}),e]})},a))}),n.image?r("img",{height:200,src:n.image,alt:"hello"}):null]});let y=0;const N=()=>++y;class t{constructor(e,a,o=[],s=""){i(this,"id");i(this,"label");i(this,"description");i(this,"_level",0);i(this,"_isSelected",!1);i(this,"_callbacks",[]);i(this,"_nextChoices");i(this,"parent");this._checkboxes=o,this._imagename=s,this.id=N(),this.label=e,this.description=a,this._nextChoices=[]}get isLeaf(){return this._nextChoices.length===0}get level(){return this._level}get image(){return this._imagename?`/strathelper/stratimages/${this._imagename}.png`:void 0}get nextChoices(){return[...this._nextChoices]}get checkboxes(){return[...this._checkboxes]}get isSelected(){return this._isSelected}set isSelected(e){this._isSelected=e,this._callbacks.forEach(a=>a(e))}onStateChange(e){return this._callbacks.push(e),()=>{this._callbacks=this._callbacks.filter(a=>a!=e)}}getParent(){return this.parent}setParent(e){this.parent=e}addNextChoice(e){return this.adjustLevels(e),e.setParent(this),this._nextChoices.push(e),this}select(){var e;this.isSelected=!0,(e=this.parent)==null||e.escalateChangeUpwards(this.id),this._nextChoices.forEach(a=>a.escalateChangeDownwards())}escalateChangeUpwards(e){var a;this.parent&&((a=this.parent)==null||a.escalateChangeUpwards(this.id)),this._nextChoices.forEach(o=>{o.id!==e&&o.escalateChangeDownwards()})}escalateChangeDownwards(){this.isSelected=!1,this._nextChoices.forEach(e=>e.escalateChangeDownwards())}adjustLevels(e){e._level++,e._nextChoices.forEach(a=>{this.adjustLevels(a)})}}const x=new t("Ir\xE1ny elk\xE9pzel\xE9s",""),p=new t("Ir\xE1nymentes","");x.addNextChoice(new t("Emelked\xE9s","").addNextChoice(new t("Alacsony IV","").addNextChoice(new t("Call debit spread","",["60-90 nap","alacsony ivr, v\xE1rhat\xF3an marad is","kis m\xE9ret <= 1%","25-50% c\xE9l profit","ITM long Call","OTM short Call"],"vertical-bull-spread")).addNextChoice(new t("Call calendar spread","debit",["20-30 nap front month","alacsony ivr front month, magasabb back month","kis m\xE9ret <= 1%","25-50% c\xE9l profit","OTM short Call front month","OTM long Call back month same strike","\xF6sszehasonl\xEDtottam a PUT v\xE1ltozattal","SPY-ra ink\xE1bb PUT-ot"],"calendar-spread")).addNextChoice(new t("Call (Ratio) backspread","nagy mozg\xE1st v\xE1rok",["60-90 nap front month","alacsony ivr front month, magasabb back month","kis m\xE9ret <= 1%","early profit 25-50%","1 ATM short Call","2 OTM long Call higher strike"],"call-ratio-backspread")).addNextChoice(new t("Put diagonal spread","debit",["20+ nap front month","alacsony ivr front month, m\xE9g alacsonyabb back month","kis m\xE9ret <= 1%","early profit 25-50%","1 OTP short Put front month","1 OTM long Put back month lower price"],"put-diagonal-spread"))).addNextChoice(new t("Magas IV","").addNextChoice(new t("Put credit spread","",["30-60 nap","k\xF6z\xE9p-magas IV","lehet magasabb 2-5% balance","50% c\xE9l","OTM short Put","OTM long Put lower price"],"vertical-bull-spread")).addNextChoice(new t("Short naked put","!!!!!!!!!!! fedezetlen !!!!!!!!!!",["nem baj, ha kapok ilyen stockot","30-60 nap","magas IV (\xE9rdemes HV-t hozz\xE1 n\xE9zni)","\xF3vatos 1-2% kezd\u0151 margin","OTM short Put","50%-n\xE1l elhozni, vagy rollolni"],"short-put")).addNextChoice(new t("Put Broken Wing Butterfly","credit with no risk to the upside",["30-60 nap","some credit at least","magas IV","lehet b\xE1trabb 3-5%","50-75% c\xE9l profit, ink\xE1bb hamarabb lez\xE1rni ha lehet","1 ITM long Put","2 OTM short Put near ATM","1 OTM long Put (skip 1 strike)"],"put-broken-butterfly")).addNextChoice(new t("Jade lizard","es\u0151 IV, emelked\u0151 stock",["30-60nap","\xF3vatos 1-2% initial margin","50% k\xF6r\xFCli c\xE9l profit","OTM short Put","OTM short call","OTM long call higher price"],"jade-lizzard")))).addNextChoice(new t("Es\xE9s","").addNextChoice(new t("Alacsony IV","").addNextChoice(new t("Put debit spread","",["60-90 nap","nem cs\xF6kken tov\xE1bb IV","1% balance","25-50% target profit","ITM long Put","OTM short Put"],"vertical-bear-spread")).addNextChoice(new t("Put calendar spread","debit",["ATM vagy kicsit magasabb strike","20+ front month","1% balance","front month magasabb IV mint back month","korai profit c\xE9l 25-50%","OTM short Put front month","OTM long Put back month same strike"],"calendar-spread")).addNextChoice(new t("Put (Ratio) backspread","1:2 vagy 2:3",["60-90 nap","alacsonyabb IV","1% balance","25% profit el\xE9g, ha nem hoz hamar t\xF6bbet","1 ATM short Put","2 OTM long Put lower strike"],"put-ratio-backspread")).addNextChoice(new t("Call diagonal spread","",["20+ nap front month","1% balance","25-50% c\xE9l","front month magasbb IV mint back month","1 OTM short Call front month","1 OTM long Call back month higher strike"],"call-diagonal-spread"))).addNextChoice(new t("Magas IV","").addNextChoice(new t("Call credit spread","",["magasabb vola","30-60nap","3-5% balance","50% c\xE9l el\xE9g az ir\xE1ny riziko miatt","OTM short call","OTM long call higher strike"],"vertical-bear-spread")).addNextChoice(new t("Short naked call","!!!!!!!!!!!!!!! fedezetlen !!!!!!!!!!!!!!!",["OTM short call (lehet\u0151leg t\xE1volabb)","30-60 nap","1-2% initial margin","50% m\xE1r el\xE9g"],"short-call")).addNextChoice(new t("Call broken wing butterfly","credit with no downside risk",["30-60nap","3-5% balance","75% c\xE9l\xE1r, had dolgozzon","1 ITM long Call","2 OTM short Call near ATM","1 long OTM Call (skip 1 strike)"],"call-broken-butterfly")).addNextChoice(new t("Reverse jade lizzard","!!!! fedezetlen. es\u0151 IV, es\u0151 stock",["IV esik ha a papir is","30-60nap","1-2% initial margin","50% c\xE9l\xE1r","OTM short Call","OTM short Put","OTM long Put lower price"],"reverse-jade-lizard"))));p.addNextChoice(new t("Alacsony IV","Ilyet ne csin\xE1lj ink\xE1bb :(")).addNextChoice(new t("Magas IV","").addNextChoice(new t("Short straddle","!!!!! fedezetlen",["nincs m\xE1s fedezetlen pozi nyitva","magas IV, ennek az es\xE9s\xE9re is sz\xE1m\xEDtok","30-60nap","1-2% initial margin","25% j\xF3 c\xE9l","ATM short Put","ATM short Call"],"short-straddle")).addNextChoice(new t("Short strangle","!!!!! fedezetlen",["nincs m\xE1s fedezetlen pozi nyitva","t\xE9nyleg magas IV","2SD ink\xE1bb","csak nagyon likvid term\xE9kre, indexek ink\xE1bb","40+ nap","1-2% initial margin","50% j\xF3 c\xE9l, de kor\xE1bban is lehet, vagy rollolni","ATM short Put","ATM short Call"],"short-strangle")).addNextChoice(new t("Iron Condor","",["magas de nem t\xFAl magas IV","70% k\xF6r\xFCl (1SD)","likvid term\xE9kre \xE9rdemes","30-60 nap","3-5% balance","50% j\xF3 c\xE9l","OTM long Put lower price","OTM short Put","OTM short Call","OTM long Call higher price"],"short-strangle")).addNextChoice(new t("Iron Butterfly","",["nincs m\xE1s fedezetlen pozi nyitva","magas de nem t\xFAl magas IV","long l\xE1bak 1SD k\xF6r\xFCl","likvid term\xE9kre \xE9rdemes, indexek ink\xE1bb","30-60 nap","3-5% balance","25% j\xF3 c\xE9l","OTM long Put","ATM short Put","ATM short Call","OTM long Call"],"iron-butterfly")));new t("faketop","").addNextChoice(x).addNextChoice(p);const O=[x,p];class P{constructor(){i(this,"topChoices");this.topChoices=O}}const z=new P,b=({choice:n,onSelect:e})=>{const[a,o]=h.exports.useState(n.isSelected);h.exports.useEffect(()=>{const l=n.onStateChange(d=>{o(d)});return()=>{l()}},[]);const s=()=>a?r("div",{className:"level",children:n.nextChoices.map(l=>r(b,{choice:l,onSelect:e},l.id))}):null;return c("div",{children:[c("span",{className:`${a?"selected":""} choice`,onClick:()=>{n.select(),e(n)},children:[a?"[x]":"[ ]"," ",n.label]}),s()]})},I=({onChoiceSelected:n})=>r("aside",{children:r("ul",{children:z.topChoices.map(e=>r(b,{choice:e,onSelect:n},e.id))})});const S=()=>{const[n,e]=h.exports.useState();return c("div",{className:"finder",children:[r(I,{onChoiceSelected:a=>{e(a)}}),r(v,{choice:n})]})},_=()=>c("div",{className:"menu",children:[r(m,{to:"/",children:"Finder"}),r(m,{to:"/calculator",children:"Calculator"})]});function F(){return r("div",{className:"app",children:c(f,{basename:"/strathelper",children:[r(_,{}),c(E,{children:[r(g,{path:"/calculator",element:r("p",{children:"hello"})}),r(g,{path:"/",element:r(S,{})})]})]})})}M.render(r(w.StrictMode,{children:r(F,{})}),document.getElementById("root"));
