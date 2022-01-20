import{e as Y,g as V,o as G,c as X,b as E,f as A,n as J}from"./app.a595ae4c.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";var F={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(g,b){(function(S,m){g.exports=m()})(Y,function(){return function(){var C={134:function(s,i,e){e.d(i,{default:function(){return U}});var a=e(279),c=e.n(a),l=e(370),y=e.n(l),h=e(817),_=e.n(h);function f(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(t){return typeof t}:f=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(r)}function p(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function d(r,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function k(r,n,t){return n&&d(r.prototype,n),t&&d(r,t),r}var j=function(){function r(n){p(this,r),this.resolveOptions(n),this.initSelection()}return k(r,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(o,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,o=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(o),this.selectedText=_()(o),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=_()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch{t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=t,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(t!==void 0)if(t&&f(t)==="object"&&t.nodeType===1){if(this.action==="copy"&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=t}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),H=j;function w(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(t){return typeof t}:w=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(r)}function N(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function R(r,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function P(r,n,t){return n&&R(r.prototype,n),t&&R(r,t),r}function M(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&O(r,n)}function O(r,n){return O=Object.setPrototypeOf||function(o,u){return o.__proto__=u,o},O(r,n)}function $(r){var n=B();return function(){var o=x(r),u;if(n){var v=x(this).constructor;u=Reflect.construct(o,arguments,v)}else u=o.apply(this,arguments);return z(this,u)}}function z(r,n){return n&&(w(n)==="object"||typeof n=="function")?n:D(r)}function D(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function B(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function x(r){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(r)}function L(r,n){var t="data-clipboard-".concat(r);if(!!n.hasAttribute(t))return n.getAttribute(t)}var I=function(r){M(t,r);var n=$(t);function t(o,u){var v;return N(this,t),v=n.call(this),v.resolveOptions(u),v.listenClick(o),v}return P(t,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=w(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var v=this;this.listener=y()(u,"click",function(T){return v.onClick(T)})}},{key:"onClick",value:function(u){var v=u.delegateTarget||u.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new H({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(u){return L("action",u)}},{key:"defaultTarget",value:function(u){var v=L("target",u);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(u){return L("text",u)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof u=="string"?[u]:u,T=!!document.queryCommandSupported;return v.forEach(function(W){T=T&&!!document.queryCommandSupported(W)}),T}}]),t}(c()),U=I},828:function(s){var i=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function a(c,l){for(;c&&c.nodeType!==i;){if(typeof c.matches=="function"&&c.matches(l))return c;c=c.parentNode}}s.exports=a},438:function(s,i,e){var a=e(828);function c(h,_,f,p,d){var k=y.apply(this,arguments);return h.addEventListener(f,k,d),{destroy:function(){h.removeEventListener(f,k,d)}}}function l(h,_,f,p,d){return typeof h.addEventListener=="function"?c.apply(null,arguments):typeof f=="function"?c.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(k){return c(k,_,f,p,d)}))}function y(h,_,f,p){return function(d){d.delegateTarget=a(d.target,_),d.delegateTarget&&p.call(h,d)}}s.exports=l},879:function(s,i){i.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},i.nodeList=function(e){var a=Object.prototype.toString.call(e);return e!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in e&&(e.length===0||i.node(e[0]))},i.string=function(e){return typeof e=="string"||e instanceof String},i.fn=function(e){var a=Object.prototype.toString.call(e);return a==="[object Function]"}},370:function(s,i,e){var a=e(879),c=e(438);function l(f,p,d){if(!f&&!p&&!d)throw new Error("Missing required arguments");if(!a.string(p))throw new TypeError("Second argument must be a String");if(!a.fn(d))throw new TypeError("Third argument must be a Function");if(a.node(f))return y(f,p,d);if(a.nodeList(f))return h(f,p,d);if(a.string(f))return _(f,p,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(f,p,d){return f.addEventListener(p,d),{destroy:function(){f.removeEventListener(p,d)}}}function h(f,p,d){return Array.prototype.forEach.call(f,function(k){k.addEventListener(p,d)}),{destroy:function(){Array.prototype.forEach.call(f,function(k){k.removeEventListener(p,d)})}}}function _(f,p,d){return c(document.body,f,p,d)}s.exports=l},817:function(s){function i(e){var a;if(e.nodeName==="SELECT")e.focus(),a=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var c=e.hasAttribute("readonly");c||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),c||e.removeAttribute("readonly"),a=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var l=window.getSelection(),y=document.createRange();y.selectNodeContents(e),l.removeAllRanges(),l.addRange(y),a=l.toString()}return a}s.exports=i},279:function(s){function i(){}i.prototype={on:function(e,a,c){var l=this.e||(this.e={});return(l[e]||(l[e]=[])).push({fn:a,ctx:c}),this},once:function(e,a,c){var l=this;function y(){l.off(e,y),a.apply(c,arguments)}return y._=a,this.on(e,y,c)},emit:function(e){var a=[].slice.call(arguments,1),c=((this.e||(this.e={}))[e]||[]).slice(),l=0,y=c.length;for(l;l<y;l++)c[l].fn.apply(c[l].ctx,a);return this},off:function(e,a){var c=this.e||(this.e={}),l=c[e],y=[];if(l&&a)for(var h=0,_=l.length;h<_;h++)l[h].fn!==a&&l[h].fn._!==a&&y.push(l[h]);return y.length?c[e]=y:delete c[e],this}},s.exports=i,s.exports.TinyEmitter=i}},S={};function m(s){if(S[s])return S[s].exports;var i=S[s]={exports:{}};return C[s](i,i.exports,m),i.exports}return function(){m.n=function(s){var i=s&&s.__esModule?function(){return s.default}:function(){return s};return m.d(i,{a:i}),i}}(),function(){m.d=function(s,i){for(var e in i)m.o(i,e)&&!m.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:i[e]})}}(),function(){m.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)}}(),m(134)}().default})})(F);var Q=V(F.exports);const Z={data(){return{sourceHeight:0,sourceSwitch:!1}},methods:{clipboardWrite(){console.log("\u590D\u5236");var g=new Q(".copy-btn",{target:function(b){return b},text:function(b){return b.nextElementSibling.dataset.code}});g.on("success",b=>{console.log("\u590D\u5236\u6210\u529F"),g.destroy()}),g.on("error",b=>{console.log("\u8BE5\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u81EA\u52A8\u590D\u5236"),g.destroy()})},codeShowTrigger(){const g=this.$refs.sourceEl.firstElementChild.offsetHeight;this.sourceSwitch=!this.sourceSwitch,this.sourceHeight=this.sourceSwitch?g+40:0}},mounted(){}},q={class:"--demo-block"},tt={class:"--description"},et={class:"--content"},nt={class:"--content__operate"},rt=E("span",{class:"iconfont icon-fuzhi"},null,-1),ot=[rt],it=E("span",{class:"iconfont icon-code"},null,-1),at=[it],st={class:"--content__demo"};function ct(g,b,C,S,m,s){return G(),X("div",q,[E("div",tt,[A(g.$slots,"description")]),E("div",et,[E("div",nt,[E("span",{class:"icon-fuzhi_wrap copy-btn","data-clipboard-target":"#copy-content",onClick:b[0]||(b[0]=(...i)=>s.clipboardWrite&&s.clipboardWrite(...i))},ot),A(g.$slots,"code"),E("span",{class:"icon-code_wrap",onClick:b[1]||(b[1]=i=>s.codeShowTrigger())},at)]),E("div",st,[A(g.$slots,"demo")])]),E("div",{class:"--source",style:J({height:`${m.sourceHeight}px`}),ref:"sourceEl"},[A(g.$slots,"source")],4)])}var ft=K(Z,[["render",ct]]);export{ft as default};
