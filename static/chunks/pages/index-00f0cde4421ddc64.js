(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7031)}])},6825:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(7677)._(n(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},6085:(e,t,n)=>{"use strict";var r=n(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},defaultHead:function(){return p}});let a=n(7677),l=n(544),i=n(4848),o=l._(n(6540)),s=a._(n(5076)),u=n(6825),d=n(1215),c=n(8721);function p(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7679);let _=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return a=>{let l=!0,i=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){i=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?l=!1:t.add(a.type);break;case"meta":for(let e=0,t=_.length;e<t;e++){let t=_[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=a.props[t],n=r[t]||new Set;("name"!==t||!i)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let a=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:a})})}let v=function(e){let{children:t}=e,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(d.HeadManagerContext);return(0,i.jsx)(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5076:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(6540),a=r.useLayoutEffect,l=r.useEffect;function i(e){let{headManager:t,reduceComponentsToState:n}=e;function i(){if(t&&t.mountedInstances){let a=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3003:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(4848),a=n(6540);n(7988);let l=function(e){let{item:t,player:n}=e,l=e=>{v&&(e(),_>0&&m(e=>e-5))},i=()=>{!(d>=(null==s?void 0:s.reqProgress))&&d<(null==s?void 0:s.reqProgress)&&c(e=>(_-5==0&&e+(null==n?void 0:n.progressSkill)!==(null==s?void 0:s.reqProgress)&&(x("Предмет сломался!"),y(!1)),e+(null==n?void 0:n.progressSkill)>=(null==s?void 0:s.reqProgress)&&(x("Предмет готов!"),y(!1)),e+(null==n?void 0:n.progressSkill)))},o=()=>{p!==(null==s?void 0:s.maxQuality)&&f(e=>(e+(null==n?void 0:n.qualitySkill)>=(null==s?void 0:s.maxQuality)&&g(!0),e+(null==n?void 0:n.qualitySkill)))},[s,u]=(0,a.useState)(t),[d,c]=(0,a.useState)(0),[p,f]=(0,a.useState)(0),[_,m]=(0,a.useState)(null==t?void 0:t.itemDurability),[v,y]=(0,a.useState)(!0),[h,x]=(0,a.useState)("В процессе"),[b,g]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"craftContainer",children:[(0,r.jsx)("p",{children:(null==s?void 0:s.title)+" ----- "+h}),(0,r.jsxs)("p",{children:["Прочность ",_,"/",null==s?void 0:s.itemDurability]}),(0,r.jsxs)("p",{children:["Прогресс ",d,"/",null==s?void 0:s.reqProgress,"."]}),(0,r.jsxs)("p",{children:["Качество ",p," из ",null==s?void 0:s.maxQuality]}),(0,r.jsxs)("p",{children:["Шанс высокого качества ",p/((null==s?void 0:s.maxQuality)/100),"%."]}),(0,r.jsx)("button",{onClick:()=>l(i),children:"Сделать"}),(0,r.jsx)("button",{onClick:()=>l(o),disabled:b,children:"Повысить"})]})}},7031:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(4848),a=n(3368),l=n.n(a),i=n(6753),o=n.n(i),s=n(3953),u=n.n(s),d=n(8005),c=n.n(d),p=n(3003),f=n(6540);function _(){var e;let[t,n]=(0,f.useState)({}),[a,i]=(0,f.useState)({}),[s,d]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{fetch("/api/data").then(e=>e.json()).then(e=>{n(e),d(!0),i(null==e?void 0:e.player)})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{className:"".concat(c().page," ").concat(o().variable," ").concat(u().variable),children:s?(0,r.jsx)("div",{className:"App",children:(0,r.jsx)(p.default,{item:null==t?void 0:null===(e=t.craft)||void 0===e?void 0:e.testItem,player:a})}):(0,r.jsx)("h1",{children:"Загрузка"})})]})}},6753:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},3953:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},7988:e=>{e.exports={craftContainer:"CraftCard_craftContainer__H11yA"}},8005:e=>{e.exports={page:"Home_page__z25kN",main:"Home_main__2uIek",ctas:"Home_ctas__kRLxs",primary:"Home_primary__xGPLp",secondary:"Home_secondary__W3DqX",footer:"Home_footer__wJNRn",logo:"Home_logo__ZEOng"}},3368:(e,t,n)=>{e.exports=n(6085)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7276)),_N_E=e.O()}]);