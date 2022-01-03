var J=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var V=(t,e,r)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,P=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&V(t,r,e[r]);if(z)for(var r of z(e))$.call(e,r)&&V(t,r,e[r]);return t},I=(t,e)=>X(t,Z(e));var D=t=>typeof t=="symbol"?t:t+"",B=(t,e)=>{var r={};for(var i in t)L.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&z)for(var i of z(t))e.indexOf(i)<0&&$.call(t,i)&&(r[i]=t[i]);return r};var x=(t,e,r)=>(V(t,typeof e!="symbol"?e+"":e,r),r);import{j as E,r as c,u as Q,a as G,L as _,l as ee,c as te,s as w,b as re,d as ie,e as ne,p as ae,f as F,B as se,R as oe,g as S,N as le,h as ce,i as de}from"./vendor.14b05677.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};he();const n=E.exports.jsx,d=E.exports.jsxs,ue=E.exports.Fragment;const pe=({value:t})=>d("span",{style:{background:"black",padding:10,color:`hsl(${t},100%,50%)`},children:[t.toFixed(0),"%"]},void 0),me=({value:t=0})=>d("span",{style:{background:"black",padding:10,color:t>0?"lime":t==0?"grey":"red"},children:[t.toFixed(0)," $"]},void 0),fe=({maxLoss:t,maxWin:e,profitChance:r,takeProfit:i,stopLoss:s})=>{const a=r/100*(e*(i/100))-(1-r/100)*(t*s/100);return n("div",{className:"result",children:d("div",{className:"field",children:[n("p",{children:d("b",{children:["Reward on risk: ",n(pe,{value:e/t*100},void 0)]},void 0)},void 0),n("p",{children:d("b",{children:["Long term profit: ",n(me,{value:a},void 0)]},void 0)},void 0)]},void 0)},void 0)},U="accountSize",O=({label:t,value:e,setValue:r,minValue:i=1,maxValue:s,step:a=1})=>d("div",{className:"field",children:[d("label",{children:[n("span",{className:"title",children:t},void 0),i,n("input",{type:"range",step:a,min:i,max:s,value:e,onChange:({target:{value:l}})=>r(Number(l))},void 0)," ",s||1e3]},void 0),n("div",{children:n("input",{type:"number",value:e,onChange:({target:{value:l}})=>{r(Number(l))}},void 0)},void 0)]},void 0),ge=()=>{const[t,e]=c.exports.useState(Number(localStorage.getItem(U))||1e4),[r,i]=c.exports.useState(1),[s,a]=c.exports.useState(1),[l,p]=c.exports.useState(50),[f,m]=c.exports.useState(100),[g,y]=c.exports.useState(100);return d("div",{className:"calculator",children:[d("div",{className:"inputs",children:[d("div",{className:"left",children:[n("div",{className:"field",children:d("label",{children:["Account size (will be remembered):"," ",n("input",{type:"number",value:t,onChange:({target:{value:v}})=>{localStorage.setItem(U,v),e(Number(v))}},void 0)," ","$"]},void 0)},void 0),n(O,{label:"$ Max loss",value:r,setValue:i,maxValue:t/10},void 0),n(O,{label:"$ Max win",value:s,setValue:a,maxValue:t/10},void 0),n(O,{label:"% Profit chance",value:l,setValue:p,maxValue:100},void 0)]},void 0),d("div",{className:"right",children:[n(O,{label:"Take profit %",value:f,minValue:0,setValue:m,maxValue:100,step:5},void 0),n(O,{label:"Stop loss %",value:g,minValue:0,setValue:y,maxValue:100,step:5},void 0)]},void 0)]},void 0),n(fe,{maxWin:s,maxLoss:r,profitChance:l,takeProfit:f,stopLoss:g},void 0)]},void 0)},ve=({choice:t})=>!t||!t.isLeaf?null:d("main",{children:[t.description,n("ul",{children:t.checkboxes.map((e,r)=>n("li",{children:d("label",{children:[n("input",{type:"checkbox"},void 0),e]},void 0)},r))},void 0),t.image?n("img",{height:200,src:t.image,alt:"hello"},void 0):null]},void 0);class o{constructor(e,r,i,s=[],a=""){x(this,"id");x(this,"_checkboxes");x(this,"_imagename");x(this,"label");x(this,"description");x(this,"_level",0);x(this,"_isSelected",!1);x(this,"_callbacks",[]);x(this,"_nextChoices");x(this,"parent");this.id=e,this._checkboxes=s,this._imagename=a,this.label=r,this.description=i,this._nextChoices=[]}get isLeaf(){return this._nextChoices.length===0}get level(){return this._level}get image(){return this._imagename?`/strathelper/stratimages/${this._imagename}.png`:void 0}get nextChoices(){return[...this._nextChoices]}get checkboxes(){return[...this._checkboxes]}get isSelected(){return this._isSelected}set isSelected(e){this._isSelected=e,this._callbacks.forEach(r=>r(e))}onStateChange(e){return this._callbacks.push(e),()=>{this._callbacks=this._callbacks.filter(r=>r!=e)}}getParent(){return this.parent}setParent(e){this.parent=e}addNextChoice(e){return this.adjustLevels(e),e.setParent(this),this._nextChoices.push(e),this}select(){var e;this.isSelected=!0,(e=this.parent)==null||e.escalateChangeUpwards(this.id),this._nextChoices.forEach(r=>r.escalateChangeDownwards())}escalateChangeUpwards(e){var r;this._isSelected=!0,this.parent&&((r=this.parent)==null||r.escalateChangeUpwards(this.id)),this._nextChoices.forEach(i=>{i.id!==e&&i.escalateChangeDownwards()})}escalateChangeDownwards(){this.isSelected=!1,this._nextChoices.forEach(e=>e.escalateChangeDownwards())}adjustLevels(e){e._level++,e._nextChoices.forEach(r=>{this.adjustLevels(r)})}}const A=new o("irany","Ir\xE1ny elk\xE9pzel\xE9s",""),j=new o("mentes","Ir\xE1nymentes","");A.addNextChoice(new o("bull","Emelked\xE9s","").addNextChoice(new o("bull-low-iw","Alacsony IV","").addNextChoice(new o("call-debit-spread","Call debit spread","",["60-90 nap","alacsony ivr, v\xE1rhat\xF3an marad is","kis m\xE9ret <= 1%","25-50% c\xE9l profit","ITM long Call","OTM short Call"],"vertical-bull-spread")).addNextChoice(new o("call-calendar-spread","Call calendar spread","debit",["20-30 nap front month","alacsony ivr front month, magasabb back month","kis m\xE9ret <= 1%","25-50% c\xE9l profit","OTM short Call front month","OTM long Call back month same strike","\xF6sszehasonl\xEDtottam a PUT v\xE1ltozattal","SPY-ra ink\xE1bb PUT-ot"],"calendar-spread")).addNextChoice(new o("call-ratio-spread","Call (Ratio) backspread","nagy mozg\xE1st v\xE1rok",["60-90 nap front month","alacsony ivr front month, magasabb back month","kis m\xE9ret <= 1%","early profit 25-50%","1 ATM short Call","2 OTM long Call higher strike"],"call-ratio-backspread")).addNextChoice(new o("put-diagonal-spread","Put diagonal spread","debit",["20+ nap front month","alacsony ivr front month, m\xE9g alacsonyabb back month","kis m\xE9ret <= 1%","early profit 25-50%","1 OTM short Put front month","1 OTM long Put back month lower price"],"put-diagonal-spread"))).addNextChoice(new o("bull-high-iw","Magas IV","").addNextChoice(new o("put-credit-spread","Put credit spread","",["30-60 nap","k\xF6z\xE9p-magas IV","lehet magasabb 2-5% balance","50% c\xE9l","OTM short Put","OTM long Put lower price"],"vertical-bull-spread")).addNextChoice(new o("short-naked-put","Short naked put","!!!!!!!!!!! fedezetlen !!!!!!!!!!",["nem baj, ha kapok ilyen stockot","30-60 nap","magas IV (\xE9rdemes HV-t hozz\xE1 n\xE9zni)","\xF3vatos 1-2% kezd\u0151 margin","OTM short Put","50%-n\xE1l elhozni, vagy rollolni"],"short-put")).addNextChoice(new o("put-broker-butterfly","Put Broken Wing Butterfly","credit with no risk to the upside",["30-60 nap","some credit at least","magas IV","lehet b\xE1trabb 3-5%","50-75% c\xE9l profit, ink\xE1bb hamarabb lez\xE1rni ha lehet","1 ITM long Put","2 OTM short Put near ATM","1 OTM long Put (skip 1 strike)"],"put-broken-butterfly")).addNextChoice(new o("jade-lizard","Jade lizard","es\u0151 IV, emelked\u0151 stock",["30-60nap","\xF3vatos 1-2% initial margin","50% k\xF6r\xFCli c\xE9l profit","OTM short Put","OTM short call","OTM long call higher price"],"jade-lizard")))).addNextChoice(new o("bear","Es\xE9s","").addNextChoice(new o("bear-low-iv","Alacsony IV","").addNextChoice(new o("put-debit-spread","Put debit spread","",["60-90 nap","nem cs\xF6kken tov\xE1bb IV","1% balance","25-50% target profit","ITM long Put","OTM short Put"],"vertical-bear-spread")).addNextChoice(new o("put-calendar-spread","Put calendar spread","debit",["ATM vagy kicsit magasabb strike","20+ front month","1% balance","front month magasabb IV mint back month","korai profit c\xE9l 25-50%","OTM short Put front month","OTM long Put back month same strike"],"calendar-spread")).addNextChoice(new o("put-ratio-backspread","Put (Ratio) backspread","1:2 vagy 2:3",["60-90 nap","alacsonyabb IV","1% balance","25% profit el\xE9g, ha nem hoz hamar t\xF6bbet","1 ATM short Put","2 OTM long Put lower strike"],"put-ratio-backspread")).addNextChoice(new o("call-diagonal-spread","Call diagonal spread","",["20+ nap front month","1% balance","25-50% c\xE9l","front month magasbb IV mint back month","1 OTM short Call front month","1 OTM long Call back month higher strike"],"call-diagonal-spread"))).addNextChoice(new o("bear-high-iv","Magas IV","").addNextChoice(new o("call-credit-spread","Call credit spread","",["magasabb vola","30-60nap","3-5% balance","50% c\xE9l el\xE9g az ir\xE1ny riziko miatt","OTM short call","OTM long call higher strike"],"vertical-bear-spread")).addNextChoice(new o("short-naked-call","Short naked call","!!!!!!!!!!!!!!! fedezetlen !!!!!!!!!!!!!!!",["OTM short call (lehet\u0151leg t\xE1volabb)","30-60 nap","1-2% initial margin","50% m\xE1r el\xE9g"],"short-call")).addNextChoice(new o("call-broken-butterfly","Call broken wing butterfly","credit with no downside risk",["30-60nap","3-5% balance","75% c\xE9l\xE1r, had dolgozzon","1 ITM long Call","2 OTM short Call near ATM","1 long OTM Call (skip 1 strike)"],"call-broken-butterfly")).addNextChoice(new o("reverse-jade-lizard","Reverse jade lizard","!!!! fedezetlen. es\u0151 IV, es\u0151 stock",["IV esik ha a papir is","30-60nap","1-2% initial margin","50% c\xE9l\xE1r","OTM short Call","OTM short Put","OTM long Put lower price"],"reverse-jade-lizard"))));j.addNextChoice(new o("neutral-low-iv","Alacsony IV","Ilyet ne csin\xE1lj ink\xE1bb :(")).addNextChoice(new o("neutral-high-iv","Magas IV","").addNextChoice(new o("short-straddle","Short straddle","!!!!! fedezetlen",["nincs m\xE1s fedezetlen pozi nyitva","magas IV, ennek az es\xE9s\xE9re is sz\xE1m\xEDtok","30-60nap","1-2% initial margin","25% j\xF3 c\xE9l","ATM short Put","ATM short Call"],"short-straddle")).addNextChoice(new o("short-strangle","Short strangle","!!!!! fedezetlen",["nincs m\xE1s fedezetlen pozi nyitva","t\xE9nyleg magas IV","2SD ink\xE1bb","csak nagyon likvid term\xE9kre, indexek ink\xE1bb","40+ nap","1-2% initial margin","50% j\xF3 c\xE9l, de kor\xE1bban is lehet, vagy rollolni","ATM short Put","ATM short Call"],"short-strangle")).addNextChoice(new o("iron-condor","Iron Condor","",["magas de nem t\xFAl magas IV","70% k\xF6r\xFCl (1SD)","likvid term\xE9kre \xE9rdemes","30-60 nap","3-5% balance","50% j\xF3 c\xE9l","OTM long Put lower price","OTM short Put","OTM short Call","OTM long Call higher price"],"short-strangle")).addNextChoice(new o("iron-butterfly","Iron Butterfly","",["nincs m\xE1s fedezetlen pozi nyitva","magas de nem t\xFAl magas IV","long l\xE1bak 1SD k\xF6r\xFCl","likvid term\xE9kre \xE9rdemes, indexek ink\xE1bb","30-60 nap","3-5% balance","25% j\xF3 c\xE9l","OTM long Put","ATM short Put","ATM short Call","OTM long Call"],"iron-butterfly")));const be=new o("fake","faketop","").addNextChoice(A).addNextChoice(j),xe=[A,j];class ke{constructor(){x(this,"topChoices");this.topChoices=xe}findChoiceById(e){return this.findChoice(e,be)}findChoice(e,r){return r.id===e?r:r.nextChoices.reduce((s,a)=>s||this.findChoice(e,a),void 0)}}const W=new ke,H=({choice:t,onSelect:e})=>{const[r,i]=c.exports.useState(t.isSelected);c.exports.useEffect(()=>{const a=t.onStateChange(l=>{i(l)});return()=>{a()}},[]);const s=()=>r?n("div",{className:"level",children:t.nextChoices.map(a=>n(H,{choice:a,onSelect:e},a.id))},void 0):null;return d("div",{children:[d("span",{className:`${r?"selected":""} choice`,onClick:()=>{t.select(),e(t)},children:[r?"[x]":"[ ]"," ",t.label]},void 0),s()]},void 0)},Ce=({onChoiceSelected:t})=>n("aside",{children:n("ul",{children:W.topChoices.map(e=>n(H,{choice:e,onSelect:t},e.id))},void 0)},void 0);const K=()=>{const{id:t}=Q(),e=G(),r=t?W.findChoiceById(t):void 0;return r&&!r.isSelected&&r.select(),d("div",{className:"finder",children:[n(Ce,{onChoiceSelected:i=>{e(`/strats/${i.id}`)}},void 0),n(ve,{choice:r},void 0)]},void 0)};const ye=()=>d("div",{className:"menu",children:[n(_,{to:"/strats",children:"Strategies"},void 0),n(_,{to:"/calculator",children:"Calculator"},void 0),n(_,{to:"/finder",children:"Finder"},void 0)]},void 0);function Y(t,e){const r=e.optionType==="C",i=e.strikePrice<t,s=Math.abs(e.tradePrice);return r&&!i||!r&&i?-e.position*s*100:e.position*(-1*s*100+(e.strikePrice-t)*100*(e.optionType==="C"?-1:1))}function we(t,e){return e.trades.reduce((r,i)=>r+Y(t,i),0)}const Me={getGroupPLAtExpiry:we,getTradePLAtExpiry:Y},Pe=({data:t,xScale:e,yScale:r})=>{const i=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!i.current)return;const s=ee().x(a=>e(a[0])).y(a=>r(a[1])).curve(te);w(i.current).transition().attr("d",s(t))},[t]),d(ue,{children:[n("path",{ref:i,fill:"none",stroke:"blue",strokeWidth:2},void 0),n("p",{children:"hello"},void 0)]},void 0)},Te=({data:t,xScale:e,svgHeight:r})=>{const i=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!i.current)return;const s=re(e);w(i.current).transition().call(s)},[t]),n("g",{ref:i,transform:`translate(50, ${r/2})`},void 0)},Ne=({data:t,yScale:e})=>{const r=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!r.current)return;const i=ie(e);w(r.current).transition().call(i)},[t]),n("g",{ref:r,transform:"translate(50,0)"},void 0)},Se=({svgRef:t,data:e,xScale:r,yScale:i})=>{const s=c.exports.useRef(null),a=c.exports.useRef(null),l=c.exports.useRef(null),p=c.exports.useRef(null),f=c.exports.useRef(null),[m,g]=c.exports.useState(!1);return c.exports.useEffect(()=>{if(!t.current)return;const y=w(a.current),v=w(l.current),b=w(f.current),T=w(p.current);var R=ne(h=>h[0]).left;w(t.current).on("mouseenter",()=>{g(!0)}).on("mouseleave",()=>{g(!1)}).on("mousemove",h=>{const u=r.invert(ae(h)[0]),k=R(e,u,1),[C,N]=[r(e[k][0]),i(e[k][1])];y.attr("x1",C).attr("x2",C),v.attr("cx",C).attr("cy",N),b.attr("x",C).attr("y",N).attr("fill",e[k][1]>0?"lime":"red").text(`$${Math.floor(e[k][1])}`);const M=f.current.getBBox();T.attr("x",C).attr("y",N).attr("width",M.width+10).attr("height",M.height+10).attr("transform",`translate(${-(M.width+10)/2}, ${-(M.height+10+10)})`)})},[e,m,g]),t.current?d("g",{ref:s,visibility:m?"visible":"hidden",children:[n("line",{ref:a,stroke:"grey",strokeWidth:1,y1:0,y2:t.current.clientHeight},void 0),n("circle",{ref:l,stroke:"black",strokeWidth:2,fill:"white",r:3},void 0),n("rect",{ref:p,fill:"black"},void 0),n("text",{ref:f,transform:"translate(0,-20)",textAnchor:"middle",fill:"white"},void 0)]},void 0):null},Oe=t=>{let e=0,r=0;if(t.trades.length>1){const i=t.trades.reduce((p,f)=>p+f.strikePrice,0)/t.trades.length,s=t.trades.map(p=>p.strikePrice),a=Math.min(...s),l=Math.max(...s);e=Math.max(a-(i-a)/2,0),r=l+(l-i)/2}else{const i=Math.abs(t.trades[0].tradePrice*100);e=Math.max(t.trades[0].strikePrice-2*i,0),r=t.trades[0].strikePrice+2*i}return[e,r]},ze=({chartData:t})=>{const e=600,r=400,i=c.exports.useRef(null),[s,a]=Oe(t),l=b=>Me.getGroupPLAtExpiry(b,t);let p=[];const f=Math.abs(a-s)/e||100;for(let b=s;b<=a;b+=f)p.push([b,l(b)]);const m=F().domain([s,a]).range([0,e]),g=p.reduce((b,T)=>Math.max(b,Math.abs(T[1])),0)*1.2,y=F().domain([-g,g]).range([r,0]),v={xScale:m,yScale:y,data:p};return d("svg",{width:e,height:r,ref:i,children:[n(Pe,P({},v),void 0),n(Te,I(P({},v),{svgHeight:r}),void 0),n(Ne,P({},v),void 0),n(Se,I(P({},v),{svgRef:i}),void 0)]},void 0)},Ie="https://kuzditomi-strathelper.herokuapp.com";async function Re(t){const e=`${Ie}/price?ticker=${t}`;return await(await fetch(e)).json()}const Ve=t=>Object.keys(t.callExpDateMap),Ee=(t,e)=>Object.keys(t.callExpDateMap[e]),_e=(t,e,r,i,s)=>{const l=(i=="C"?t.callExpDateMap:t.putExpDateMap)[e][r][0].mark;return{underlying:t.symbol,position:s,expiration:new Date(e.split(":")[0]),optionType:i,strikePrice:Number(r),tradePrice:l}};function Ae(t){const[e,r]=c.exports.useState(!1),[i,s]=c.exports.useState(),[a,l]=c.exports.useState();return c.exports.useEffect(()=>{if(!t){s(void 0),l(void 0);return}r(!0),(async()=>{try{const m=await Re(t);s(m),l(Ve(m))}finally{r(!1)}})()},[t]),{isLoading:e,expiries:a,getStrikes:m=>{if(!i)throw Error("Strikes were read while optionchain is not loaded");return Ee(i,m)},getOption:(m,g,y,v)=>{if(!i)throw Error("Option were read while optionchain is not loaded");return _e(i,m,g,y,v)}}}const je=()=>{const t=c.exports.useRef(null),[e,r]=c.exports.useState(""),[i,s]=c.exports.useState(""),[a,l]=c.exports.useState({}),{isLoading:p,expiries:f,getStrikes:m,getOption:g}=Ae(e),y=function(h,u,k,C=1){const N=g(i,k,u,C);if(a[h]){if(a[h].position+=C,a[h].position===0){const M=a,{[h]:$e}=M,q=B(M,[D(h)]);l(q);return}l(P({},a));return}l(I(P({},a),{[h]:N}))},v=()=>p?n("p",{children:"Loading..."},void 0):f?n("div",{className:"expiries",children:f.map(h=>n("button",{onClick:()=>{s(h),l({})},children:h.split(":")[0]},h))},void 0):null,b=({strike:h,type:u})=>{const k=`${u}${h}${i}`;return n("td",{align:"center",className:a[k]?a[k].position>0?"plus":"minus":"",children:n("button",{onClick:C=>{y(k,u,h,C.ctrlKey?-1:1)},children:u},void 0)},void 0)},T=()=>{if(!i)return null;const h=m(i);return n("div",{className:"prices",children:n("table",{children:d("tbody",{children:[n("tr",{children:h.map(u=>n(b,{expiry:i,strike:u,type:"C"},i+u+"C"))},void 0),n("tr",{children:h.map(u=>n("td",{align:"center",children:u},u))},void 0),n("tr",{children:h.map(u=>n(b,{expiry:i,strike:u,type:"P"},i+u+"P"))},void 0)]},void 0)},void 0)},void 0)},R=()=>{if(!Object.keys(a).length)return null;const h={expiration:new Date(i),underlying:e,trades:Object.values(a)};return n("div",{className:"chart",children:n(ze,{chartData:h},void 0)},void 0)};return d("div",{children:[d("div",{className:"ticker",children:[d("label",{children:["Ticker:",n("input",{type:"text",ref:t},void 0)]},void 0),n("button",{onClick:()=>{var h;((h=t==null?void 0:t.current)==null?void 0:h.value)&&r(t.current.value),s("")},children:"GO"},void 0)]},void 0),v(),T(),R()]},void 0)};function Le(){return n("div",{className:"app",children:d(se,{basename:"/strathelper",children:[n(ye,{},void 0),d(oe,{children:[n(S,{path:"/calculator",element:n(ge,{},void 0)},void 0),n(S,{path:"/finder/",element:n(je,{},void 0)},void 0),n(S,{path:"/strats/:id",element:n(K,{},void 0)},void 0),n(S,{path:"/strats/",element:n(K,{},void 0)},void 0),n(S,{path:"/",element:n(le,{to:"/strats",replace:!0},void 0)},void 0)]},void 0)]},void 0)},void 0)}ce.render(n(de.StrictMode,{children:n(Le,{})}),document.getElementById("root"));
