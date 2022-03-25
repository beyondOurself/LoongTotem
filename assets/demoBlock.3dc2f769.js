import{c as Y,g as G,_ as X,r as J,o as K,a as Q,b as E,d as A,e as F,n as Z}from"./app.d2586a59.js";var N={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(g,b){(function(S,m){g.exports=m()})(Y,function(){return function(){var C={134:function(c,i,t){t.d(i,{default:function(){return V}});var a=t(279),s=t.n(a),l=t(370),y=t.n(l),h=t(817),_=t.n(h);function f(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(e){return typeof e}:f=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(r)}function p(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function d(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function k(r,n,e){return n&&d(r.prototype,n),e&&d(r,e),r}var H=function(){function r(n){p(this,r),this.resolveOptions(n),this.initSelection()}return k(r,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(o,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,o=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(o),this.selectedText=_()(o),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=_()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch{e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&f(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),P=H;function w(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(r)}function j(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function R(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function M(r,n,e){return n&&R(r.prototype,n),e&&R(r,e),r}function $(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&O(r,n)}function O(r,n){return O=Object.setPrototypeOf||function(o,u){return o.__proto__=u,o},O(r,n)}function z(r){var n=I();return function(){var o=x(r),u;if(n){var v=x(this).constructor;u=Reflect.construct(o,arguments,v)}else u=o.apply(this,arguments);return D(this,u)}}function D(r,n){return n&&(w(n)==="object"||typeof n=="function")?n:B(r)}function B(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function I(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function x(r){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(r)}function L(r,n){var e="data-clipboard-".concat(r);if(!!n.hasAttribute(e))return n.getAttribute(e)}var U=function(r){$(e,r);var n=z(e);function e(o,u){var v;return j(this,e),v=n.call(this),v.resolveOptions(u),v.listenClick(o),v}return M(e,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=w(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var v=this;this.listener=y()(u,"click",function(T){return v.onClick(T)})}},{key:"onClick",value:function(u){var v=u.delegateTarget||u.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new P({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(u){return L("action",u)}},{key:"defaultTarget",value:function(u){var v=L("target",u);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(u){return L("text",u)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof u=="string"?[u]:u,T=!!document.queryCommandSupported;return v.forEach(function(W){T=T&&!!document.queryCommandSupported(W)}),T}}]),e}(s()),V=U},828:function(c){var i=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(s,l){for(;s&&s.nodeType!==i;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}c.exports=a},438:function(c,i,t){var a=t(828);function s(h,_,f,p,d){var k=y.apply(this,arguments);return h.addEventListener(f,k,d),{destroy:function(){h.removeEventListener(f,k,d)}}}function l(h,_,f,p,d){return typeof h.addEventListener=="function"?s.apply(null,arguments):typeof f=="function"?s.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(k){return s(k,_,f,p,d)}))}function y(h,_,f,p){return function(d){d.delegateTarget=a(d.target,_),d.delegateTarget&&p.call(h,d)}}c.exports=l},879:function(c,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(c,i,t){var a=t(879),s=t(438);function l(f,p,d){if(!f&&!p&&!d)throw new Error("Missing required arguments");if(!a.string(p))throw new TypeError("Second argument must be a String");if(!a.fn(d))throw new TypeError("Third argument must be a Function");if(a.node(f))return y(f,p,d);if(a.nodeList(f))return h(f,p,d);if(a.string(f))return _(f,p,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(f,p,d){return f.addEventListener(p,d),{destroy:function(){f.removeEventListener(p,d)}}}function h(f,p,d){return Array.prototype.forEach.call(f,function(k){k.addEventListener(p,d)}),{destroy:function(){Array.prototype.forEach.call(f,function(k){k.removeEventListener(p,d)})}}}function _(f,p,d){return s(document.body,f,p,d)}c.exports=l},817:function(c){function i(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),y=document.createRange();y.selectNodeContents(t),l.removeAllRanges(),l.addRange(y),a=l.toString()}return a}c.exports=i},279:function(c){function i(){}i.prototype={on:function(t,a,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:s}),this},once:function(t,a,s){var l=this;function y(){l.off(t,y),a.apply(s,arguments)}return y._=a,this.on(t,y,s)},emit:function(t){var a=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,y=s.length;for(l;l<y;l++)s[l].fn.apply(s[l].ctx,a);return this},off:function(t,a){var s=this.e||(this.e={}),l=s[t],y=[];if(l&&a)for(var h=0,_=l.length;h<_;h++)l[h].fn!==a&&l[h].fn._!==a&&y.push(l[h]);return y.length?s[t]=y:delete s[t],this}},c.exports=i,c.exports.TinyEmitter=i}},S={};function m(c){if(S[c])return S[c].exports;var i=S[c]={exports:{}};return C[c](i,i.exports,m),i.exports}return function(){m.n=function(c){var i=c&&c.__esModule?function(){return c.default}:function(){return c};return m.d(i,{a:i}),i}}(),function(){m.d=function(c,i){for(var t in i)m.o(i,t)&&!m.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:i[t]})}}(),function(){m.o=function(c,i){return Object.prototype.hasOwnProperty.call(c,i)}}(),m(134)}().default})})(N);var q=G(N.exports);const tt={data(){return{sourceHeight:0,sourceSwitch:!1}},methods:{clipboardWrite(){console.log("\u590D\u5236");var g=new q(".copy-btn",{target:function(b){return b},text:function(b){return b.nextElementSibling.dataset.code}});g.on("success",b=>{console.log("\u590D\u5236\u6210\u529F"),g.destroy()}),g.on("error",b=>{console.log("\u8BE5\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u81EA\u52A8\u590D\u5236"),g.destroy()})},codeShowTrigger(){const g=this.$refs.sourceEl.firstElementChild.offsetHeight;this.sourceSwitch=!this.sourceSwitch,this.sourceHeight=this.sourceSwitch?g+40:0}},mounted(){}},et={class:"demo-block"},nt={class:"demo-block--description"},rt={class:"demo-block__content"},ot={class:"content_operate"},it={class:"content_demo"};function at(g,b,C,S,m,c){const i=J("lg-icon");return K(),Q("div",et,[E("div",nt,[A(g.$slots,"description")]),E("div",rt,[E("div",ot,[E("span",{class:"icon-fuzhi_wrap copy-btn","data-clipboard-target":"#copy-content",onClick:b[0]||(b[0]=(...t)=>c.clipboardWrite&&c.clipboardWrite(...t))},[F(i,{name:"fuzhi1"})]),A(g.$slots,"code"),E("span",{class:"icon-code_wrap",onClick:b[1]||(b[1]=t=>c.codeShowTrigger())},[F(i,{name:"code"})])]),E("div",it,[A(g.$slots,"demo")])]),E("div",{class:"source",style:Z({height:`${m.sourceHeight}px`}),ref:"sourceEl"},[A(g.$slots,"source")],4)])}var st=X(tt,[["render",at]]);export{st as default};
