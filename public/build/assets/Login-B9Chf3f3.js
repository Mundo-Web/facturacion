var ge=Object.defineProperty;var ve=(e,r,a)=>r in e?ge(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var ne=(e,r,a)=>(ve(e,typeof r!="symbol"?r+"":r,a),a);import{g as ie,r as h,m as H,C as Ee,c as be,R as t}from"./CreateReactScript-BZNFBiYC.js";import{J as ke}from"./JSEncrypt-D3I3x59l.js";var se={exports:{}},Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",we=Le,Se=we;function le(){}function de(){}de.resetWarningCache=le;var xe=function(){function e(n,o,s,L,b,p){if(p!==Se){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function r(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:de,resetWarningCache:le};return a.PropTypes=a,a};se.exports=xe();var Re=se.exports;const u=ie(Re);var _e=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U.apply(this,arguments)}function Me(e,r){if(e==null)return{};var a={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(r.indexOf(o)>=0)&&(a[o]=e[o]);return a}function M(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fe(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,q(e,r)}function q(e,r){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},q(e,r)}var F=function(e){Fe(r,e);function r(){var n;return n=e.call(this)||this,n.handleExpired=n.handleExpired.bind(M(n)),n.handleErrored=n.handleErrored.bind(M(n)),n.handleChange=n.handleChange.bind(M(n)),n.handleRecaptchaRef=n.handleRecaptchaRef.bind(M(n)),n}var a=r.prototype;return a.getCaptchaFunction=function(o){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[o]:this.props.grecaptcha[o]:null},a.getValue=function(){var o=this.getCaptchaFunction("getResponse");return o&&this._widgetId!==void 0?o(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},a.execute=function(){var o=this.getCaptchaFunction("execute");if(o&&this._widgetId!==void 0)return o(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var o=this;return new Promise(function(s,L){o.executionResolve=s,o.executionReject=L,o.execute()})},a.reset=function(){var o=this.getCaptchaFunction("reset");o&&this._widgetId!==void 0&&o(this._widgetId)},a.forceReset=function(){var o=this.getCaptchaFunction("reset");o&&o()},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(o){this.props.onChange&&this.props.onChange(o),this.executionResolve&&(this.executionResolve(o),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){var o=this.getCaptchaFunction("render");if(o&&this._widgetId===void 0){var s=document.createElement("div");this._widgetId=o(s,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(s)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.handleRecaptchaRef=function(o){this.captcha=o},a.render=function(){var o=this.props;o.sitekey,o.onChange,o.theme,o.type,o.tabindex,o.onExpired,o.onErrored,o.size,o.stoken,o.grecaptcha,o.badge,o.hl,o.isolated;var s=Me(o,_e);return h.createElement("div",U({},s,{ref:this.handleRecaptchaRef}))},r}(h.Component);F.displayName="ReCAPTCHA";F.propTypes={sitekey:u.string.isRequired,onChange:u.func,grecaptcha:u.object,theme:u.oneOf(["dark","light"]),type:u.oneOf(["image","audio"]),tabindex:u.number,onExpired:u.func,onErrored:u.func,size:u.oneOf(["compact","normal","invisible"]),stoken:u.string,hl:u.string,badge:u.oneOf(["bottomright","bottomleft","inline"]),isolated:u.bool};F.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var pe={exports:{}},i={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=typeof Symbol=="function"&&Symbol.for,J=d?Symbol.for("react.element"):60103,K=d?Symbol.for("react.portal"):60106,O=d?Symbol.for("react.fragment"):60107,N=d?Symbol.for("react.strict_mode"):60108,P=d?Symbol.for("react.profiler"):60114,j=d?Symbol.for("react.provider"):60109,T=d?Symbol.for("react.context"):60110,Y=d?Symbol.for("react.async_mode"):60111,C=d?Symbol.for("react.concurrent_mode"):60111,I=d?Symbol.for("react.forward_ref"):60112,A=d?Symbol.for("react.suspense"):60113,Oe=d?Symbol.for("react.suspense_list"):60120,$=d?Symbol.for("react.memo"):60115,z=d?Symbol.for("react.lazy"):60116,Ne=d?Symbol.for("react.block"):60121,Pe=d?Symbol.for("react.fundamental"):60117,je=d?Symbol.for("react.responder"):60118,Te=d?Symbol.for("react.scope"):60119;function y(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case J:switch(e=e.type,e){case Y:case C:case O:case P:case N:case A:return e;default:switch(e=e&&e.$$typeof,e){case T:case I:case z:case $:case j:return e;default:return r}}case K:return r}}}function fe(e){return y(e)===C}i.AsyncMode=Y;i.ConcurrentMode=C;i.ContextConsumer=T;i.ContextProvider=j;i.Element=J;i.ForwardRef=I;i.Fragment=O;i.Lazy=z;i.Memo=$;i.Portal=K;i.Profiler=P;i.StrictMode=N;i.Suspense=A;i.isAsyncMode=function(e){return fe(e)||y(e)===Y};i.isConcurrentMode=fe;i.isContextConsumer=function(e){return y(e)===T};i.isContextProvider=function(e){return y(e)===j};i.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===J};i.isForwardRef=function(e){return y(e)===I};i.isFragment=function(e){return y(e)===O};i.isLazy=function(e){return y(e)===z};i.isMemo=function(e){return y(e)===$};i.isPortal=function(e){return y(e)===K};i.isProfiler=function(e){return y(e)===P};i.isStrictMode=function(e){return y(e)===N};i.isSuspense=function(e){return y(e)===A};i.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===O||e===C||e===P||e===N||e===A||e===Oe||typeof e=="object"&&e!==null&&(e.$$typeof===z||e.$$typeof===$||e.$$typeof===j||e.$$typeof===T||e.$$typeof===I||e.$$typeof===Pe||e.$$typeof===je||e.$$typeof===Te||e.$$typeof===Ne)};i.typeOf=y;pe.exports=i;var Ce=pe.exports,X=Ce,Ie={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ae={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ue={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q={};Q[X.ForwardRef]=$e;Q[X.Memo]=ue;function oe(e){return X.isMemo(e)?ue:Q[e.$$typeof]||Ie}var ze=Object.defineProperty,We=Object.getOwnPropertyNames,ae=Object.getOwnPropertySymbols,De=Object.getOwnPropertyDescriptor,He=Object.getPrototypeOf,ce=Object.prototype;function me(e,r,a){if(typeof r!="string"){if(ce){var n=He(r);n&&n!==ce&&me(e,n,a)}var o=We(r);ae&&(o=o.concat(ae(r)));for(var s=oe(e),L=oe(r),b=0;b<o.length;++b){var p=o[b];if(!Ae[p]&&!(a&&a[p])&&!(L&&L[p])&&!(s&&s[p])){var f=De(r,p);try{ze(e,p,f)}catch{}}}}return e}var Ue=me;const qe=ie(Ue);function V(){return V=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},V.apply(this,arguments)}function Ve(e,r){if(e==null)return{};var a={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(r.indexOf(o)>=0)&&(a[o]=e[o]);return a}function Ge(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}var k={},Be=0;function Je(e,r){return r=r||{},function(n){var o=n.displayName||n.name||"Component",s=function(b){Ge(p,b);function p(g,l){var c;return c=b.call(this,g,l)||this,c.state={},c.__scriptURL="",c}var f=p.prototype;return f.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+Be++),this.__scriptLoaderID},f.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},f.asyncScriptLoaderHandleLoad=function(l){var c=this;this.setState(l,function(){return c.props.asyncScriptOnLoad&&c.props.asyncScriptOnLoad(c.state)})},f.asyncScriptLoaderTriggerOnScriptLoaded=function(){var l=k[this.__scriptURL];if(!l||!l.loaded)throw new Error("Script is not loaded.");for(var c in l.observers)l.observers[c](l);delete window[r.callbackName]},f.componentDidMount=function(){var l=this,c=this.setupScriptURL(),m=this.asyncScriptLoaderGetScriptLoaderID(),v=r,_=v.globalName,S=v.callbackName,W=v.scriptId;if(_&&typeof window[_]<"u"&&(k[c]={loaded:!0,observers:{}}),k[c]){var x=k[c];if(x&&(x.loaded||x.errored)){this.asyncScriptLoaderHandleLoad(x);return}x.observers[m]=function(E){return l.asyncScriptLoaderHandleLoad(E)};return}var Z={};Z[m]=function(E){return l.asyncScriptLoaderHandleLoad(E)},k[c]={loaded:!1,observers:Z};var w=document.createElement("script");w.src=c,w.async=!0;for(var ee in r.attributes)w.setAttribute(ee,r.attributes[ee]);W&&(w.id=W);var te=function(R){if(k[c]){var ye=k[c],D=ye.observers;for(var re in D)R(D[re])&&delete D[re]}};S&&typeof window<"u"&&(window[S]=function(){return l.asyncScriptLoaderTriggerOnScriptLoaded()}),w.onload=function(){var E=k[c];E&&(E.loaded=!0,te(function(R){return S?!1:(R(E),!0)}))},w.onerror=function(){var E=k[c];E&&(E.errored=!0,te(function(R){return R(E),!0}))},document.body.appendChild(w)},f.componentWillUnmount=function(){var l=this.__scriptURL;if(r.removeOnUnmount===!0)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m+=1)c[m].src.indexOf(l)>-1&&c[m].parentNode&&c[m].parentNode.removeChild(c[m]);var v=k[l];v&&(delete v.observers[this.asyncScriptLoaderGetScriptLoaderID()],r.removeOnUnmount===!0&&delete k[l])},f.render=function(){var l=r.globalName,c=this.props;c.asyncScriptOnLoad;var m=c.forwardedRef,v=Ve(c,["asyncScriptOnLoad","forwardedRef"]);return l&&typeof window<"u"&&(v[l]=typeof window[l]<"u"?window[l]:void 0),v.ref=m,h.createElement(n,v)},p}(h.Component),L=h.forwardRef(function(b,p){return h.createElement(s,V({},b,{forwardedRef:p}))});return L.displayName="AsyncScriptLoader("+o+")",L.propTypes={asyncScriptOnLoad:u.func},qe(L,n)}}var G="onloadcallback",Ke="grecaptcha";function B(){return typeof window<"u"&&window.recaptchaOptions||{}}function Ye(){var e=B(),r=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+r+"/recaptcha/enterprise.js?onload="+G+"&render=explicit":"https://"+r+"/recaptcha/api.js?onload="+G+"&render=explicit"}const Xe=Je(Ye,{callbackName:G,globalName:Ke,attributes:B().nonce?{nonce:B().nonce}:{}})(F);class he{}ne(he,"login",async r=>{try{const{status:a,result:n}=await H.Fetch("./api/login",{method:"POST",body:JSON.stringify(r)});if(!a)throw new Error((n==null?void 0:n.message)||"Error al iniciar sesion");return H.Notify.add({icon:"/assets/img/logo-login.svg",title:"Operacion correcta",body:"Se inicio sesion correctamente"}),!0}catch(a){return H.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:a.message,type:"danger"}),!1}});const Qe=({PUBLIC_RSA_KEY:e,NOCAPTCHA_SITEKEY:r,token:a})=>{document.title="Login | Atalaya";const n=new ke;n.setPublicKey(e);const[o,s]=h.useState(!0),[L,b]=h.useState(null),p=h.useRef(),f=h.useRef(),g=h.useRef(),l=h.useRef();window.onload=async()=>{s(!1)},h.useEffect(()=>{StartYeti()},[null]);const c=async m=>{m.preventDefault(),s(!0);const v=f.current.value,_=g.current.value,S={email:n.encrypt(v),password:n.encrypt(_),_token:a};await he.login(S)&&(location.href="./home"),s(!1)};return t.createElement(t.Fragment,null,t.createElement("div",{ref:l,id:"loader",style:{display:o?"flex":"none"}},t.createElement("span",null)),t.createElement("div",{id:"main"},t.createElement("span",{id:"square"}),t.createElement("span",{id:"triangle"}),t.createElement("form",{ref:p,method:"POST",action:"./login",className:"form",autoComplete:"off",onSubmit:c},t.createElement("div",{className:"form-header"},t.createElement("div",{className:"form-img",style:{padding:0}},t.createElement("svg",{className:"logo-img",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 200 200"},t.createElement("defs",null,t.createElement("circle",{id:"armMaskPath",cx:"100",cy:"100",r:"100"})),t.createElement("clipPath",{id:"armMask"},t.createElement("use",{xlinkHref:"#armMaskPath",overflow:"visible"})),t.createElement("g",{className:"body"},t.createElement("path",{fill:"#FFFFFF",d:"M193.3,135.9c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1 c-10.6,0-20,5.1-25.8,13l0,78h187L193.3,135.9z"}),t.createElement("path",{fill:"none",stroke:"#3A5E77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",d:"M193.3,135.9 c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1c-10.6,0-20,5.1-25.8,13"}),t.createElement("path",{fill:"#DDF1FA",d:"M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"})),t.createElement("g",{className:"earL"},t.createElement("g",{className:"outerEar",fill:"#ddf1fa",stroke:"#3a5e77",strokeWidth:"2.5"},t.createElement("circle",{cx:"47",cy:"83",r:"11.5"}),t.createElement("path",{d:"M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1",strokeLinecap:"round",strokeLinejoin:"round"})),t.createElement("g",{className:"earHair"},t.createElement("rect",{x:"51",y:"64",fill:"#FFFFFF",width:"15",height:"35"}),t.createElement("path",{d:"M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9",fill:"#fff",stroke:"#3a5e77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),t.createElement("g",{className:"earR"},t.createElement("g",{className:"outerEar",fill:"#ddf1fa",stroke:"#3a5e77",strokeWidth:"2.5"},t.createElement("circle",{cx:"155",cy:"83",r:"11.5"}),t.createElement("path",{d:"M155.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1",strokeLinecap:"round",strokeLinejoin:"round"})),t.createElement("g",{className:"earHair"},t.createElement("rect",{x:"131",y:"64",fill:"#FFFFFF",width:"20",height:"35"}),t.createElement("path",{d:"M148.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9",fill:"#fff",stroke:"#3a5e77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))),t.createElement("path",{className:"chin",d:"M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1",fill:"none",stroke:"#3a5e77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{className:"face",fill:"#DDF1FA",d:"M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"}),t.createElement("path",{className:"hair",fill:"#FFFFFF",stroke:"#3A5E77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",d:"M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474"}),t.createElement("g",{className:"eyebrow"},t.createElement("path",{fill:"#FFFFFF",d:"M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z"}),t.createElement("path",{fill:"#FFFFFF",stroke:"#3A5E77",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",d:"M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599"})),t.createElement("g",{className:"eyeL"},t.createElement("circle",{cx:"85.5",cy:"78.5",r:"3.5",fill:"#3a5e77"}),t.createElement("circle",{cx:"84",cy:"76",r:"1",fill:"#fff"})),t.createElement("g",{className:"eyeR"},t.createElement("circle",{cx:"114.5",cy:"78.5",r:"3.5",fill:"#3a5e77"}),t.createElement("circle",{cx:"113",cy:"76",r:"1",fill:"#fff"})),t.createElement("g",{className:"mouth"},t.createElement("path",{className:"mouthBG",fill:"#617E92",d:"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"}),t.createElement("path",{style:{display:"none"},className:"mouthSmallBG",fill:"#617E92",d:"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"}),t.createElement("path",{style:{display:"none"},className:"mouthMediumBG",d:"M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z"}),t.createElement("path",{style:{display:"none"},className:"mouthLargeBG",d:"M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z",fill:"#617e92",stroke:"#3a5e77",strokeLinejoin:"round",strokeWidth:"2.5"}),t.createElement("defs",null,t.createElement("path",{id:"mouthMaskPath",d:"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"})),t.createElement("clipPath",{id:"mouthMask"},t.createElement("use",{xlinkHref:"#mouthMaskPath",overflow:"visible"})),t.createElement("g",{clipPath:"url(#mouthMask)"},t.createElement("g",{className:"tongue"},t.createElement("circle",{cx:"100",cy:"107",r:"8",fill:"#cc4a6c"}),t.createElement("ellipse",{className:"tongueHighlight",cx:"100",cy:"100.5",rx:"3",ry:"1.5",opacity:".1",fill:"#fff"}))),t.createElement("path",{clipPath:"url(#mouthMask)",className:"tooth",style:{fill:"#FFFFFF"},d:"M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z"}),t.createElement("path",{className:"mouthOutline",fill:"none",stroke:"#3A5E77",strokeWidth:"2.5",strokeLinejoin:"round",d:"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"})),t.createElement("path",{className:"nose",d:"M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z",fill:"#3a5e77"}),t.createElement("g",{className:"arms",clipPath:"url(#armMask)"},t.createElement("g",{className:"armL"},t.createElement("path",{fill:"#ddf1fa",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2.5",d:"M121.3 97.4L111 58.7l38.8-10.4 20 36.1z"}),t.createElement("path",{fill:"#ddf1fa",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2.5",d:"M134.4 52.5l19.3-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1L146 59.7M160.8 76.5l19.4-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-18.3 4.9M158.3 66.8l23.1-6.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-23.1 6.2M150.9 58.4l26-7c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-21.3 5.7"}),t.createElement("path",{fill:"#a9ddf3",d:"M178.8 74.7l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM180.1 64l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM175.5 54.9l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM152.1 49.4l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z"}),t.createElement("path",{fill:"#fff",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M123.5 96.8c-41.4 14.9-84.1 30.7-108.2 35.5L1.2 80c33.5-9.9 71.9-16.5 111.9-21.8"}),t.createElement("path",{fill:"#fff",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M108.5 59.4c7.7-5.3 14.3-8.4 22.8-13.2-2.4 5.3-4.7 10.3-6.7 15.1 4.3.3 8.4.7 12.3 1.3-4.2 5-8.1 9.6-11.5 13.9 3.1 1.1 6 2.4 8.7 3.8-1.4 2.9-2.7 5.8-3.9 8.5 2.5 3.5 4.6 7.2 6.3 11-4.9-.8-9-.7-16.2-2.7M94.5 102.8c-.6 4-3.8 8.9-9.4 14.7-2.6-1.8-5-3.7-7.2-5.7-2.5 4.1-6.6 8.8-12.2 14-1.9-2.2-3.4-4.5-4.5-6.9-4.4 3.3-9.5 6.9-15.4 10.8-.2-3.4.1-7.1 1.1-10.9M97.5 62.9c-1.7-2.4-5.9-4.1-12.4-5.2-.9 2.2-1.8 4.3-2.5 6.5-3.8-1.8-9.4-3.1-17-3.8.5 2.3 1.2 4.5 1.9 6.8-5-.6-11.2-.9-18.4-1 2 2.9.9 3.5 3.9 6.2"})),t.createElement("g",{className:"armR"},t.createElement("path",{fill:"#ddf1fa",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2.5",d:"M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z"}),t.createElement("path",{fill:"#ddf1fa",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2.5",d:"M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7"}),t.createElement("path",{fill:"#a9ddf3",d:"M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM211.2 54.8l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM234.6 49.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z"}),t.createElement("path",{fill:"#fff",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1"}),t.createElement("path",{fill:"#fff",stroke:"#3a5e77",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9M284.5 100.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4"}))))),t.createElement("h2",{className:"form-title"},"Atalaya"),t.createElement("p",{className:"form-description"},"Inicie sesion para continuar")),t.createElement("div",{className:"form-body"},t.createElement("div",null,t.createElement("input",{className:"form-control",autoComplete:"off",ref:f,id:"email",required:!0}),t.createElement("label",{className:"form-label",htmlFor:"email"},"Usuario")),t.createElement("div",null,t.createElement("input",{className:"form-control",autoComplete:"off",ref:g,id:"password",name:"password",type:"password",required:!0}),t.createElement("label",{className:"form-label",htmlFor:"password"},"Constraseña")),t.createElement("button",{id:"btn_submit",type:"submit"},"Iniciar sesion"))),t.createElement(Xe,{sitekey:r,onChange:b,size:"invisible"}),t.createElement("a",{id:"copyright",href:"//mundoweb.pe",target:"_blank"},"Propiedad de Mundo Web")))};Ee((e,r)=>{be(e).render(t.createElement(Qe,{...r}))});
