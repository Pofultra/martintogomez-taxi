var lq=Object.defineProperty;var sq=(l,s,d)=>s in l?lq(l,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[s]=d;var j1=(l,s,d)=>sq(l,typeof s!="symbol"?s+"":s,d);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))v(x);new MutationObserver(x=>{for(const M of x)if(M.type==="childList")for(const w of M.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&v(w)}).observe(document,{childList:!0,subtree:!0});function d(x){const M={};return x.integrity&&(M.integrity=x.integrity),x.referrerPolicy&&(M.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?M.credentials="include":x.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function v(x){if(x.ep)return;x.ep=!0;const M=d(x);fetch(x.href,M)}})();function Sw(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var xC={exports:{}},hc={},_C={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HN;function hq(){if(HN)return K;HN=1;var l=Symbol.for("react.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.iterator;function D(k){return k===null||typeof k!="object"?null:(k=O&&k[O]||k["@@iterator"],typeof k=="function"?k:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,X={};function Z(k,I,G){this.props=k,this.context=I,this.refs=X,this.updater=G||U}Z.prototype.isReactComponent={},Z.prototype.setState=function(k,I){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,I,"setState")},Z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ie(){}ie.prototype=Z.prototype;function fe(k,I,G){this.props=k,this.context=I,this.refs=X,this.updater=G||U}var Ae=fe.prototype=new ie;Ae.constructor=fe,W(Ae,Z.prototype),Ae.isPureReactComponent=!0;var Se=Array.isArray,c1=Object.prototype.hasOwnProperty,He={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Qe(k,I,G){var Q,Y={},ee=null,ae=null;if(I!=null)for(Q in I.ref!==void 0&&(ae=I.ref),I.key!==void 0&&(ee=""+I.key),I)c1.call(I,Q)&&!Pe.hasOwnProperty(Q)&&(Y[Q]=I[Q]);var ne=arguments.length-2;if(ne===1)Y.children=G;else if(1<ne){for(var le=Array(ne),Ue=0;Ue<ne;Ue++)le[Ue]=arguments[Ue+2];Y.children=le}if(k&&k.defaultProps)for(Q in ne=k.defaultProps,ne)Y[Q]===void 0&&(Y[Q]=ne[Q]);return{$$typeof:l,type:k,key:ee,ref:ae,props:Y,_owner:He.current}}function b1(k,I){return{$$typeof:l,type:k.type,key:I,ref:k.ref,props:k.props,_owner:k._owner}}function C1(k){return typeof k=="object"&&k!==null&&k.$$typeof===l}function nt(k){var I={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(G){return I[G]})}var k1=/\/+/g;function Oe(k,I){return typeof k=="object"&&k!==null&&k.key!=null?nt(""+k.key):I.toString(36)}function i1(k,I,G,Q,Y){var ee=typeof k;(ee==="undefined"||ee==="boolean")&&(k=null);var ae=!1;if(k===null)ae=!0;else switch(ee){case"string":case"number":ae=!0;break;case"object":switch(k.$$typeof){case l:case s:ae=!0}}if(ae)return ae=k,Y=Y(ae),k=Q===""?"."+Oe(ae,0):Q,Se(Y)?(G="",k!=null&&(G=k.replace(k1,"$&/")+"/"),i1(Y,I,G,"",function(Ue){return Ue})):Y!=null&&(C1(Y)&&(Y=b1(Y,G+(!Y.key||ae&&ae.key===Y.key?"":(""+Y.key).replace(k1,"$&/")+"/")+k)),I.push(Y)),1;if(ae=0,Q=Q===""?".":Q+":",Se(k))for(var ne=0;ne<k.length;ne++){ee=k[ne];var le=Q+Oe(ee,ne);ae+=i1(ee,I,G,le,Y)}else if(le=D(k),typeof le=="function")for(k=le.call(k),ne=0;!(ee=k.next()).done;)ee=ee.value,le=Q+Oe(ee,ne++),ae+=i1(ee,I,G,le,Y);else if(ee==="object")throw I=String(k),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ae}function f1(k,I,G){if(k==null)return k;var Q=[],Y=0;return i1(k,Q,"","",function(ee){return I.call(G,ee,Y++)}),Q}function Ve(k){if(k._status===-1){var I=k._result;I=I(),I.then(function(G){(k._status===0||k._status===-1)&&(k._status=1,k._result=G)},function(G){(k._status===0||k._status===-1)&&(k._status=2,k._result=G)}),k._status===-1&&(k._status=0,k._result=I)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},q={transition:null},B={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:q,ReactCurrentOwner:He};function j(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:f1,forEach:function(k,I,G){f1(k,function(){I.apply(this,arguments)},G)},count:function(k){var I=0;return f1(k,function(){I++}),I},toArray:function(k){return f1(k,function(I){return I})||[]},only:function(k){if(!C1(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},K.Component=Z,K.Fragment=d,K.Profiler=x,K.PureComponent=fe,K.StrictMode=v,K.Suspense=_,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,K.act=j,K.cloneElement=function(k,I,G){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Q=W({},k.props),Y=k.key,ee=k.ref,ae=k._owner;if(I!=null){if(I.ref!==void 0&&(ee=I.ref,ae=He.current),I.key!==void 0&&(Y=""+I.key),k.type&&k.type.defaultProps)var ne=k.type.defaultProps;for(le in I)c1.call(I,le)&&!Pe.hasOwnProperty(le)&&(Q[le]=I[le]===void 0&&ne!==void 0?ne[le]:I[le])}var le=arguments.length-2;if(le===1)Q.children=G;else if(1<le){ne=Array(le);for(var Ue=0;Ue<le;Ue++)ne[Ue]=arguments[Ue+2];Q.children=ne}return{$$typeof:l,type:k.type,key:Y,ref:ee,props:Q,_owner:ae}},K.createContext=function(k){return k={$$typeof:w,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:M,_context:k},k.Consumer=k},K.createElement=Qe,K.createFactory=function(k){var I=Qe.bind(null,k);return I.type=k,I},K.createRef=function(){return{current:null}},K.forwardRef=function(k){return{$$typeof:C,render:k}},K.isValidElement=C1,K.lazy=function(k){return{$$typeof:T,_payload:{_status:-1,_result:k},_init:Ve}},K.memo=function(k,I){return{$$typeof:z,type:k,compare:I===void 0?null:I}},K.startTransition=function(k){var I=q.transition;q.transition={};try{k()}finally{q.transition=I}},K.unstable_act=j,K.useCallback=function(k,I){return pe.current.useCallback(k,I)},K.useContext=function(k){return pe.current.useContext(k)},K.useDebugValue=function(){},K.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},K.useEffect=function(k,I){return pe.current.useEffect(k,I)},K.useId=function(){return pe.current.useId()},K.useImperativeHandle=function(k,I,G){return pe.current.useImperativeHandle(k,I,G)},K.useInsertionEffect=function(k,I){return pe.current.useInsertionEffect(k,I)},K.useLayoutEffect=function(k,I){return pe.current.useLayoutEffect(k,I)},K.useMemo=function(k,I){return pe.current.useMemo(k,I)},K.useReducer=function(k,I,G){return pe.current.useReducer(k,I,G)},K.useRef=function(k){return pe.current.useRef(k)},K.useState=function(k){return pe.current.useState(k)},K.useSyncExternalStore=function(k,I,G){return pe.current.useSyncExternalStore(k,I,G)},K.useTransition=function(){return pe.current.useTransition()},K.version="18.3.1",K}var jN;function VC(){return jN||(jN=1,_C.exports=hq()),_C.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bN;function yq(){if(bN)return hc;bN=1;var l=VC(),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function w(C,_,z){var T,O={},D=null,U=null;z!==void 0&&(D=""+z),_.key!==void 0&&(D=""+_.key),_.ref!==void 0&&(U=_.ref);for(T in _)v.call(_,T)&&!M.hasOwnProperty(T)&&(O[T]=_[T]);if(C&&C.defaultProps)for(T in _=C.defaultProps,_)O[T]===void 0&&(O[T]=_[T]);return{$$typeof:s,type:C,key:D,ref:U,props:O,_owner:x.current}}return hc.Fragment=d,hc.jsx=w,hc.jsxs=w,hc}var PN;function uq(){return PN||(PN=1,xC.exports=yq()),xC.exports}var u=uq(),ue=VC();const tt=Sw(ue);var ji={},wC={exports:{}},Ee={},LC={exports:{}},CC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VN;function pq(){return VN||(VN=1,function(l){function s(q,B){var j=q.length;q.push(B);e:for(;0<j;){var k=j-1>>>1,I=q[k];if(0<x(I,B))q[k]=B,q[j]=I,j=k;else break e}}function d(q){return q.length===0?null:q[0]}function v(q){if(q.length===0)return null;var B=q[0],j=q.pop();if(j!==B){q[0]=j;e:for(var k=0,I=q.length,G=I>>>1;k<G;){var Q=2*(k+1)-1,Y=q[Q],ee=Q+1,ae=q[ee];if(0>x(Y,j))ee<I&&0>x(ae,Y)?(q[k]=ae,q[ee]=j,k=ee):(q[k]=Y,q[Q]=j,k=Q);else if(ee<I&&0>x(ae,j))q[k]=ae,q[ee]=j,k=ee;else break e}}return B}function x(q,B){var j=q.sortIndex-B.sortIndex;return j!==0?j:q.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;l.unstable_now=function(){return M.now()}}else{var w=Date,C=w.now();l.unstable_now=function(){return w.now()-C}}var _=[],z=[],T=1,O=null,D=3,U=!1,W=!1,X=!1,Z=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(q){for(var B=d(z);B!==null;){if(B.callback===null)v(z);else if(B.startTime<=q)v(z),B.sortIndex=B.expirationTime,s(_,B);else break;B=d(z)}}function Se(q){if(X=!1,Ae(q),!W)if(d(_)!==null)W=!0,Ve(c1);else{var B=d(z);B!==null&&pe(Se,B.startTime-q)}}function c1(q,B){W=!1,X&&(X=!1,ie(Qe),Qe=-1),U=!0;var j=D;try{for(Ae(B),O=d(_);O!==null&&(!(O.expirationTime>B)||q&&!nt());){var k=O.callback;if(typeof k=="function"){O.callback=null,D=O.priorityLevel;var I=k(O.expirationTime<=B);B=l.unstable_now(),typeof I=="function"?O.callback=I:O===d(_)&&v(_),Ae(B)}else v(_);O=d(_)}if(O!==null)var G=!0;else{var Q=d(z);Q!==null&&pe(Se,Q.startTime-B),G=!1}return G}finally{O=null,D=j,U=!1}}var He=!1,Pe=null,Qe=-1,b1=5,C1=-1;function nt(){return!(l.unstable_now()-C1<b1)}function k1(){if(Pe!==null){var q=l.unstable_now();C1=q;var B=!0;try{B=Pe(!0,q)}finally{B?Oe():(He=!1,Pe=null)}}else He=!1}var Oe;if(typeof fe=="function")Oe=function(){fe(k1)};else if(typeof MessageChannel<"u"){var i1=new MessageChannel,f1=i1.port2;i1.port1.onmessage=k1,Oe=function(){f1.postMessage(null)}}else Oe=function(){Z(k1,0)};function Ve(q){Pe=q,He||(He=!0,Oe())}function pe(q,B){Qe=Z(function(){q(l.unstable_now())},B)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_continueExecution=function(){W||U||(W=!0,Ve(c1))},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b1=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_getFirstCallbackNode=function(){return d(_)},l.unstable_next=function(q){switch(D){case 1:case 2:case 3:var B=3;break;default:B=D}var j=D;D=B;try{return q()}finally{D=j}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(q,B){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var j=D;D=q;try{return B()}finally{D=j}},l.unstable_scheduleCallback=function(q,B,j){var k=l.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?k+j:k):j=k,q){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,q={id:T++,callback:B,priorityLevel:q,startTime:j,expirationTime:I,sortIndex:-1},j>k?(q.sortIndex=j,s(z,q),d(_)===null&&q===d(z)&&(X?(ie(Qe),Qe=-1):X=!0,pe(Se,j-k))):(q.sortIndex=I,s(_,q),W||U||(W=!0,Ve(c1))),q},l.unstable_shouldYield=nt,l.unstable_wrapCallback=function(q){var B=D;return function(){var j=D;D=B;try{return q.apply(this,arguments)}finally{D=j}}}}(CC)),CC}var TN;function kq(){return TN||(TN=1,LC.exports=pq()),LC.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DN;function fq(){if(DN)return Ee;DN=1;var l=VC(),s=kq();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,x={};function M(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(x[e]=t,e=0;e<t.length;e++)v.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},O={};function D(e){return _.call(O,e)?!0:_.call(T,e)?!1:z.test(e)?O[e]=!0:(T[e]=!0,!1)}function U(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W(e,t,o,a){if(t===null||typeof t>"u"||U(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,o,a,c,i,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=r}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function fe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,fe);Z[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,fe);Z[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,fe);Z[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ae(e,t,o,a){var c=Z.hasOwnProperty(t)?Z[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W(t,o,c,a)&&(o=null),a||c===null?D(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):c.mustUseProperty?e[c.propertyName]=o===null?c.type===3?!1:"":o:(t=c.attributeName,a=c.attributeNamespace,o===null?e.removeAttribute(t):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var Se=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,c1=Symbol.for("react.element"),He=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),nt=Symbol.for("react.context"),k1=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),i1=Symbol.for("react.suspense_list"),f1=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),q=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,k;function I(e){if(k===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var G=!1;function Q(e,t){if(!e||G)return"";G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var a=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){a=g}e.call(t.prototype)}else{try{throw Error()}catch(g){a=g}e()}}catch(g){if(g&&a&&typeof g.stack=="string"){for(var c=g.stack.split(`
`),i=a.stack.split(`
`),r=c.length-1,h=i.length-1;1<=r&&0<=h&&c[r]!==i[h];)h--;for(;1<=r&&0<=h;r--,h--)if(c[r]!==i[h]){if(r!==1||h!==1)do if(r--,h--,0>h||c[r]!==i[h]){var y=`
`+c[r].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=r&&0<=h);break}}}finally{G=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?I(e):""}function Y(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case He:return"Portal";case b1:return"Profiler";case Qe:return"StrictMode";case Oe:return"Suspense";case i1:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nt:return(e.displayName||"Context")+".Consumer";case C1:return(e._context.displayName||"Context")+".Provider";case k1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case f1:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=le(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lc(e){e._valueTracker||(e._valueTracker=Ue(e))}function DC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=le(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Cc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nw(e,t){var o=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function FC(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=ne(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function RC(e,t){t=t.checked,t!=null&&Ae(e,"checked",t,!1)}function $w(e,t){RC(e,t);var o=ne(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zw(e,t.type,o):t.hasOwnProperty("defaultValue")&&zw(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function BC(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function zw(e,t,o){(t!=="number"||Cc(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var I2=Array.isArray;function Ja(e,t,o,a){if(e=e.options,t){t={};for(var c=0;c<o.length;c++)t["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=t.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&a&&(e[o].defaultSelected=!0)}else{for(o=""+ne(o),t=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function qw(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function EC(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(d(92));if(I2(o)){if(1<o.length)throw Error(d(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:ne(o)}}function OC(e,t){var o=ne(t.value),a=ne(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function UC(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ZC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aw(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ZC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ic,WC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ic=Ic||document.createElement("div"),Ic.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ic.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function S2(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var N2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u$=["Webkit","ms","Moz","O"];Object.keys(N2).forEach(function(e){u$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),N2[t]=N2[e]})});function GC(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||N2.hasOwnProperty(e)&&N2[e]?(""+t).trim():t+"px"}function XC(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=GC(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,c):e[o]=c}}var p$=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hw(e,t){if(t){if(p$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function jw(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bw=null;function Pw(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vw=null,Ya=null,e2=null;function KC(e){if(e=K2(e)){if(typeof Vw!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Xc(t),Vw(e.stateNode,e.type,t))}}function QC(e){Ya?e2?e2.push(e):e2=[e]:Ya=e}function JC(){if(Ya){var e=Ya,t=e2;if(e2=Ya=null,KC(e),t)for(e=0;e<t.length;e++)KC(t[e])}}function YC(e,t){return e(t)}function eI(){}var Tw=!1;function tI(e,t,o){if(Tw)return e(t,o);Tw=!0;try{return YC(e,t,o)}finally{Tw=!1,(Ya!==null||e2!==null)&&(eI(),JC())}}function $2(e,t){var o=e.stateNode;if(o===null)return null;var a=Xc(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(d(231,t,typeof o));return o}var Dw=!1;if(C)try{var z2={};Object.defineProperty(z2,"passive",{get:function(){Dw=!0}}),window.addEventListener("test",z2,z2),window.removeEventListener("test",z2,z2)}catch{Dw=!1}function k$(e,t,o,a,c,i,r,h,y){var g=Array.prototype.slice.call(arguments,3);try{t.apply(o,g)}catch(S){this.onError(S)}}var q2=!1,Sc=null,Nc=!1,Fw=null,f$={onError:function(e){q2=!0,Sc=e}};function M$(e,t,o,a,c,i,r,h,y){q2=!1,Sc=null,k$.apply(f$,arguments)}function m$(e,t,o,a,c,i,r,h,y){if(M$.apply(this,arguments),q2){if(q2){var g=Sc;q2=!1,Sc=null}else throw Error(d(198));Nc||(Nc=!0,Fw=g)}}function ot(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function nI(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oI(e){if(ot(e)!==e)throw Error(d(188))}function v$(e){var t=e.alternate;if(!t){if(t=ot(e),t===null)throw Error(d(188));return t!==e?null:e}for(var o=e,a=t;;){var c=o.return;if(c===null)break;var i=c.alternate;if(i===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===i.child){for(i=c.child;i;){if(i===o)return oI(c),e;if(i===a)return oI(c),t;i=i.sibling}throw Error(d(188))}if(o.return!==a.return)o=c,a=i;else{for(var r=!1,h=c.child;h;){if(h===o){r=!0,o=c,a=i;break}if(h===a){r=!0,a=c,o=i;break}h=h.sibling}if(!r){for(h=i.child;h;){if(h===o){r=!0,o=i,a=c;break}if(h===a){r=!0,a=i,o=c;break}h=h.sibling}if(!r)throw Error(d(189))}}if(o.alternate!==a)throw Error(d(190))}if(o.tag!==3)throw Error(d(188));return o.stateNode.current===o?e:t}function aI(e){return e=v$(e),e!==null?cI(e):null}function cI(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cI(e);if(t!==null)return t;e=e.sibling}return null}var iI=s.unstable_scheduleCallback,rI=s.unstable_cancelCallback,g$=s.unstable_shouldYield,x$=s.unstable_requestPaint,Me=s.unstable_now,_$=s.unstable_getCurrentPriorityLevel,Rw=s.unstable_ImmediatePriority,dI=s.unstable_UserBlockingPriority,$c=s.unstable_NormalPriority,w$=s.unstable_LowPriority,lI=s.unstable_IdlePriority,zc=null,M1=null;function L$(e){if(M1&&typeof M1.onCommitFiberRoot=="function")try{M1.onCommitFiberRoot(zc,e,void 0,(e.current.flags&128)===128)}catch{}}var r1=Math.clz32?Math.clz32:S$,C$=Math.log,I$=Math.LN2;function S$(e){return e>>>=0,e===0?32:31-(C$(e)/I$|0)|0}var qc=64,Ac=4194304;function A2(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hc(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,c=e.suspendedLanes,i=e.pingedLanes,r=o&268435455;if(r!==0){var h=r&~c;h!==0?a=A2(h):(i&=r,i!==0&&(a=A2(i)))}else r=o&~c,r!==0?a=A2(r):i!==0&&(a=A2(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&c)&&(c=a&-a,i=t&-t,c>=i||c===16&&(i&4194240)!==0))return t;if(a&4&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-r1(t),c=1<<o,a|=e[o],t&=~c;return a}function N$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $$(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-r1(i),h=1<<r,y=c[r];y===-1?(!(h&o)||h&a)&&(c[r]=N$(h,t)):y<=t&&(e.expiredLanes|=h),i&=~h}}function Bw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sI(){var e=qc;return qc<<=1,!(qc&4194240)&&(qc=64),e}function Ew(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function H2(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-r1(t),e[t]=o}function z$(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var c=31-r1(o),i=1<<c;t[c]=0,a[c]=-1,e[c]=-1,o&=~i}}function Ow(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-r1(o),c=1<<a;c&t|e[a]&t&&(e[a]|=t),o&=~c}}var oe=0;function hI(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yI,Uw,uI,pI,kI,Zw=!1,jc=[],P1=null,V1=null,T1=null,j2=new Map,b2=new Map,D1=[],q$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fI(e,t){switch(e){case"focusin":case"focusout":P1=null;break;case"dragenter":case"dragleave":V1=null;break;case"mouseover":case"mouseout":T1=null;break;case"pointerover":case"pointerout":j2.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":b2.delete(t.pointerId)}}function P2(e,t,o,a,c,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:i,targetContainers:[c]},t!==null&&(t=K2(t),t!==null&&Uw(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function A$(e,t,o,a,c){switch(t){case"focusin":return P1=P2(P1,e,t,o,a,c),!0;case"dragenter":return V1=P2(V1,e,t,o,a,c),!0;case"mouseover":return T1=P2(T1,e,t,o,a,c),!0;case"pointerover":var i=c.pointerId;return j2.set(i,P2(j2.get(i)||null,e,t,o,a,c)),!0;case"gotpointercapture":return i=c.pointerId,b2.set(i,P2(b2.get(i)||null,e,t,o,a,c)),!0}return!1}function MI(e){var t=at(e.target);if(t!==null){var o=ot(t);if(o!==null){if(t=o.tag,t===13){if(t=nI(o),t!==null){e.blockedOn=t,kI(e.priority,function(){uI(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Gw(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);bw=a,o.target.dispatchEvent(a),bw=null}else return t=K2(o),t!==null&&Uw(t),e.blockedOn=o,!1;t.shift()}return!0}function mI(e,t,o){bc(e)&&o.delete(t)}function H$(){Zw=!1,P1!==null&&bc(P1)&&(P1=null),V1!==null&&bc(V1)&&(V1=null),T1!==null&&bc(T1)&&(T1=null),j2.forEach(mI),b2.forEach(mI)}function V2(e,t){e.blockedOn===t&&(e.blockedOn=null,Zw||(Zw=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,H$)))}function T2(e){function t(c){return V2(c,e)}if(0<jc.length){V2(jc[0],e);for(var o=1;o<jc.length;o++){var a=jc[o];a.blockedOn===e&&(a.blockedOn=null)}}for(P1!==null&&V2(P1,e),V1!==null&&V2(V1,e),T1!==null&&V2(T1,e),j2.forEach(t),b2.forEach(t),o=0;o<D1.length;o++)a=D1[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<D1.length&&(o=D1[0],o.blockedOn===null);)MI(o),o.blockedOn===null&&D1.shift()}var t2=Se.ReactCurrentBatchConfig,Pc=!0;function j$(e,t,o,a){var c=oe,i=t2.transition;t2.transition=null;try{oe=1,Ww(e,t,o,a)}finally{oe=c,t2.transition=i}}function b$(e,t,o,a){var c=oe,i=t2.transition;t2.transition=null;try{oe=4,Ww(e,t,o,a)}finally{oe=c,t2.transition=i}}function Ww(e,t,o,a){if(Pc){var c=Gw(e,t,o,a);if(c===null)hL(e,t,a,Vc,o),fI(e,a);else if(A$(c,e,t,o,a))a.stopPropagation();else if(fI(e,a),t&4&&-1<q$.indexOf(e)){for(;c!==null;){var i=K2(c);if(i!==null&&yI(i),i=Gw(e,t,o,a),i===null&&hL(e,t,a,Vc,o),i===c)break;c=i}c!==null&&a.stopPropagation()}else hL(e,t,a,null,o)}}var Vc=null;function Gw(e,t,o,a){if(Vc=null,e=Pw(a),e=at(e),e!==null)if(t=ot(e),t===null)e=null;else if(o=t.tag,o===13){if(e=nI(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vc=e,null}function vI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_$()){case Rw:return 1;case dI:return 4;case $c:case w$:return 16;case lI:return 536870912;default:return 16}default:return 16}}var F1=null,Xw=null,Tc=null;function gI(){if(Tc)return Tc;var e,t=Xw,o=t.length,a,c="value"in F1?F1.value:F1.textContent,i=c.length;for(e=0;e<o&&t[e]===c[e];e++);var r=o-e;for(a=1;a<=r&&t[o-a]===c[i-a];a++);return Tc=c.slice(e,1<a?1-a:void 0)}function Dc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fc(){return!0}function xI(){return!1}function Ze(e){function t(o,a,c,i,r){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(o=e[h],this[h]=o?o(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fc:xI,this.isPropagationStopped=xI,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),t}var n2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kw=Ze(n2),D2=j({},n2,{view:0,detail:0}),P$=Ze(D2),Qw,Jw,F2,Rc=j({},D2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==F2&&(F2&&e.type==="mousemove"?(Qw=e.screenX-F2.screenX,Jw=e.screenY-F2.screenY):Jw=Qw=0,F2=e),Qw)},movementY:function(e){return"movementY"in e?e.movementY:Jw}}),_I=Ze(Rc),V$=j({},Rc,{dataTransfer:0}),T$=Ze(V$),D$=j({},D2,{relatedTarget:0}),Yw=Ze(D$),F$=j({},n2,{animationName:0,elapsedTime:0,pseudoElement:0}),R$=Ze(F$),B$=j({},n2,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),E$=Ze(B$),O$=j({},n2,{data:0}),wI=Ze(O$),U$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W$[e])?!!t[e]:!1}function eL(){return G$}var X$=j({},D2,{key:function(e){if(e.key){var t=U$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z$[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eL,charCode:function(e){return e.type==="keypress"?Dc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K$=Ze(X$),Q$=j({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),LI=Ze(Q$),J$=j({},D2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eL}),Y$=Ze(J$),ez=j({},n2,{propertyName:0,elapsedTime:0,pseudoElement:0}),tz=Ze(ez),nz=j({},Rc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oz=Ze(nz),az=[9,13,27,32],tL=C&&"CompositionEvent"in window,R2=null;C&&"documentMode"in document&&(R2=document.documentMode);var cz=C&&"TextEvent"in window&&!R2,CI=C&&(!tL||R2&&8<R2&&11>=R2),II=" ",SI=!1;function NI(e,t){switch(e){case"keyup":return az.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $I(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var o2=!1;function iz(e,t){switch(e){case"compositionend":return $I(t);case"keypress":return t.which!==32?null:(SI=!0,II);case"textInput":return e=t.data,e===II&&SI?null:e;default:return null}}function rz(e,t){if(o2)return e==="compositionend"||!tL&&NI(e,t)?(e=gI(),Tc=Xw=F1=null,o2=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return CI&&t.locale!=="ko"?null:t.data;default:return null}}var dz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zI(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dz[e.type]:t==="textarea"}function qI(e,t,o,a){QC(a),t=Zc(t,"onChange"),0<t.length&&(o=new Kw("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var B2=null,E2=null;function lz(e){XI(e,0)}function Bc(e){var t=d2(e);if(DC(t))return e}function sz(e,t){if(e==="change")return t}var AI=!1;if(C){var nL;if(C){var oL="oninput"in document;if(!oL){var HI=document.createElement("div");HI.setAttribute("oninput","return;"),oL=typeof HI.oninput=="function"}nL=oL}else nL=!1;AI=nL&&(!document.documentMode||9<document.documentMode)}function jI(){B2&&(B2.detachEvent("onpropertychange",bI),E2=B2=null)}function bI(e){if(e.propertyName==="value"&&Bc(E2)){var t=[];qI(t,E2,e,Pw(e)),tI(lz,t)}}function hz(e,t,o){e==="focusin"?(jI(),B2=t,E2=o,B2.attachEvent("onpropertychange",bI)):e==="focusout"&&jI()}function yz(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bc(E2)}function uz(e,t){if(e==="click")return Bc(t)}function pz(e,t){if(e==="input"||e==="change")return Bc(t)}function kz(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d1=typeof Object.is=="function"?Object.is:kz;function O2(e,t){if(d1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!_.call(t,c)||!d1(e[c],t[c]))return!1}return!0}function PI(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function VI(e,t){var o=PI(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=PI(o)}}function TI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?TI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function DI(){for(var e=window,t=Cc();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Cc(e.document)}return t}function aL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fz(e){var t=DI(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&TI(o.ownerDocument.documentElement,o)){if(a!==null&&aL(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=o.textContent.length,i=Math.min(a.start,c);a=a.end===void 0?i:Math.min(a.end,c),!e.extend&&i>a&&(c=a,a=i,i=c),c=VI(o,i);var r=VI(o,a);c&&r&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mz=C&&"documentMode"in document&&11>=document.documentMode,a2=null,cL=null,U2=null,iL=!1;function FI(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iL||a2==null||a2!==Cc(a)||(a=a2,"selectionStart"in a&&aL(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),U2&&O2(U2,a)||(U2=a,a=Zc(cL,"onSelect"),0<a.length&&(t=new Kw("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=a2)))}function Ec(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var c2={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},rL={},RI={};C&&(RI=document.createElement("div").style,"AnimationEvent"in window||(delete c2.animationend.animation,delete c2.animationiteration.animation,delete c2.animationstart.animation),"TransitionEvent"in window||delete c2.transitionend.transition);function Oc(e){if(rL[e])return rL[e];if(!c2[e])return e;var t=c2[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in RI)return rL[e]=t[o];return e}var BI=Oc("animationend"),EI=Oc("animationiteration"),OI=Oc("animationstart"),UI=Oc("transitionend"),ZI=new Map,WI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function R1(e,t){ZI.set(e,t),M(t,[e])}for(var dL=0;dL<WI.length;dL++){var lL=WI[dL],mz=lL.toLowerCase(),vz=lL[0].toUpperCase()+lL.slice(1);R1(mz,"on"+vz)}R1(BI,"onAnimationEnd"),R1(EI,"onAnimationIteration"),R1(OI,"onAnimationStart"),R1("dblclick","onDoubleClick"),R1("focusin","onFocus"),R1("focusout","onBlur"),R1(UI,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Z2="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Z2));function GI(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,m$(a,t,void 0,e),e.currentTarget=null}function XI(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],c=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var h=a[r],y=h.instance,g=h.currentTarget;if(h=h.listener,y!==i&&c.isPropagationStopped())break e;GI(c,h,g),i=y}else for(r=0;r<a.length;r++){if(h=a[r],y=h.instance,g=h.currentTarget,h=h.listener,y!==i&&c.isPropagationStopped())break e;GI(c,h,g),i=y}}}if(Nc)throw e=Fw,Nc=!1,Fw=null,e}function re(e,t){var o=t[ML];o===void 0&&(o=t[ML]=new Set);var a=e+"__bubble";o.has(a)||(KI(t,e,2,!1),o.add(a))}function sL(e,t,o){var a=0;t&&(a|=4),KI(o,e,a,t)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function W2(e){if(!e[Uc]){e[Uc]=!0,v.forEach(function(o){o!=="selectionchange"&&(gz.has(o)||sL(o,!1,e),sL(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uc]||(t[Uc]=!0,sL("selectionchange",!1,t))}}function KI(e,t,o,a){switch(vI(t)){case 1:var c=j$;break;case 4:c=b$;break;default:c=Ww}o=c.bind(null,t,o,e),c=void 0,!Dw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,o,{capture:!0,passive:c}):e.addEventListener(t,o,!0):c!==void 0?e.addEventListener(t,o,{passive:c}):e.addEventListener(t,o,!1)}function hL(e,t,o,a,c){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var h=a.stateNode.containerInfo;if(h===c||h.nodeType===8&&h.parentNode===c)break;if(r===4)for(r=a.return;r!==null;){var y=r.tag;if((y===3||y===4)&&(y=r.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;r=r.return}for(;h!==null;){if(r=at(h),r===null)return;if(y=r.tag,y===5||y===6){a=i=r;continue e}h=h.parentNode}}a=a.return}tI(function(){var g=i,S=Pw(o),N=[];e:{var L=ZI.get(e);if(L!==void 0){var A=Kw,b=e;switch(e){case"keypress":if(Dc(o)===0)break e;case"keydown":case"keyup":A=K$;break;case"focusin":b="focus",A=Yw;break;case"focusout":b="blur",A=Yw;break;case"beforeblur":case"afterblur":A=Yw;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_I;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=T$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Y$;break;case BI:case EI:case OI:A=R$;break;case UI:A=tz;break;case"scroll":A=P$;break;case"wheel":A=oz;break;case"copy":case"cut":case"paste":A=E$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=LI}var P=(t&4)!==0,me=!P&&e==="scroll",f=P?L!==null?L+"Capture":null:L;P=[];for(var p=g,m;p!==null;){m=p;var $=m.stateNode;if(m.tag===5&&$!==null&&(m=$,f!==null&&($=$2(p,f),$!=null&&P.push(G2(p,$,m)))),me)break;p=p.return}0<P.length&&(L=new A(L,b,null,o,S),N.push({event:L,listeners:P}))}}if(!(t&7)){e:{if(L=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",L&&o!==bw&&(b=o.relatedTarget||o.fromElement)&&(at(b)||b[I1]))break e;if((A||L)&&(L=S.window===S?S:(L=S.ownerDocument)?L.defaultView||L.parentWindow:window,A?(b=o.relatedTarget||o.toElement,A=g,b=b?at(b):null,b!==null&&(me=ot(b),b!==me||b.tag!==5&&b.tag!==6)&&(b=null)):(A=null,b=g),A!==b)){if(P=_I,$="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(P=LI,$="onPointerLeave",f="onPointerEnter",p="pointer"),me=A==null?L:d2(A),m=b==null?L:d2(b),L=new P($,p+"leave",A,o,S),L.target=me,L.relatedTarget=m,$=null,at(S)===g&&(P=new P(f,p+"enter",b,o,S),P.target=m,P.relatedTarget=me,$=P),me=$,A&&b)t:{for(P=A,f=b,p=0,m=P;m;m=i2(m))p++;for(m=0,$=f;$;$=i2($))m++;for(;0<p-m;)P=i2(P),p--;for(;0<m-p;)f=i2(f),m--;for(;p--;){if(P===f||f!==null&&P===f.alternate)break t;P=i2(P),f=i2(f)}P=null}else P=null;A!==null&&QI(N,L,A,P,!1),b!==null&&me!==null&&QI(N,me,b,P,!0)}}e:{if(L=g?d2(g):window,A=L.nodeName&&L.nodeName.toLowerCase(),A==="select"||A==="input"&&L.type==="file")var V=sz;else if(zI(L))if(AI)V=pz;else{V=yz;var F=hz}else(A=L.nodeName)&&A.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(V=uz);if(V&&(V=V(e,g))){qI(N,V,o,S);break e}F&&F(e,L,g),e==="focusout"&&(F=L._wrapperState)&&F.controlled&&L.type==="number"&&zw(L,"number",L.value)}switch(F=g?d2(g):window,e){case"focusin":(zI(F)||F.contentEditable==="true")&&(a2=F,cL=g,U2=null);break;case"focusout":U2=cL=a2=null;break;case"mousedown":iL=!0;break;case"contextmenu":case"mouseup":case"dragend":iL=!1,FI(N,o,S);break;case"selectionchange":if(Mz)break;case"keydown":case"keyup":FI(N,o,S)}var R;if(tL)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else o2?NI(e,o)&&(E="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(E="onCompositionStart");E&&(CI&&o.locale!=="ko"&&(o2||E!=="onCompositionStart"?E==="onCompositionEnd"&&o2&&(R=gI()):(F1=S,Xw="value"in F1?F1.value:F1.textContent,o2=!0)),F=Zc(g,E),0<F.length&&(E=new wI(E,e,null,o,S),N.push({event:E,listeners:F}),R?E.data=R:(R=$I(o),R!==null&&(E.data=R)))),(R=cz?iz(e,o):rz(e,o))&&(g=Zc(g,"onBeforeInput"),0<g.length&&(S=new wI("onBeforeInput","beforeinput",null,o,S),N.push({event:S,listeners:g}),S.data=R))}XI(N,t)})}function G2(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Zc(e,t){for(var o=t+"Capture",a=[];e!==null;){var c=e,i=c.stateNode;c.tag===5&&i!==null&&(c=i,i=$2(e,o),i!=null&&a.unshift(G2(e,i,c)),i=$2(e,t),i!=null&&a.push(G2(e,i,c))),e=e.return}return a}function i2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function QI(e,t,o,a,c){for(var i=t._reactName,r=[];o!==null&&o!==a;){var h=o,y=h.alternate,g=h.stateNode;if(y!==null&&y===a)break;h.tag===5&&g!==null&&(h=g,c?(y=$2(o,i),y!=null&&r.unshift(G2(o,y,h))):c||(y=$2(o,i),y!=null&&r.push(G2(o,y,h)))),o=o.return}r.length!==0&&e.push({event:t,listeners:r})}var xz=/\r\n?/g,_z=/\u0000|\uFFFD/g;function JI(e){return(typeof e=="string"?e:""+e).replace(xz,`
`).replace(_z,"")}function Wc(e,t,o){if(t=JI(t),JI(e)!==t&&o)throw Error(d(425))}function Gc(){}var yL=null,uL=null;function pL(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kL=typeof setTimeout=="function"?setTimeout:void 0,wz=typeof clearTimeout=="function"?clearTimeout:void 0,YI=typeof Promise=="function"?Promise:void 0,Lz=typeof queueMicrotask=="function"?queueMicrotask:typeof YI<"u"?function(e){return YI.resolve(null).then(e).catch(Cz)}:kL;function Cz(e){setTimeout(function(){throw e})}function fL(e,t){var o=t,a=0;do{var c=o.nextSibling;if(e.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){e.removeChild(c),T2(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);T2(t)}function B1(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function eS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var r2=Math.random().toString(36).slice(2),m1="__reactFiber$"+r2,X2="__reactProps$"+r2,I1="__reactContainer$"+r2,ML="__reactEvents$"+r2,Iz="__reactListeners$"+r2,Sz="__reactHandles$"+r2;function at(e){var t=e[m1];if(t)return t;for(var o=e.parentNode;o;){if(t=o[I1]||o[m1]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=eS(e);e!==null;){if(o=e[m1])return o;e=eS(e)}return t}e=o,o=e.parentNode}return null}function K2(e){return e=e[m1]||e[I1],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function d2(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Xc(e){return e[X2]||null}var mL=[],l2=-1;function E1(e){return{current:e}}function de(e){0>l2||(e.current=mL[l2],mL[l2]=null,l2--)}function ce(e,t){l2++,mL[l2]=e.current,e.current=t}var O1={},Ne=E1(O1),Te=E1(!1),ct=O1;function s2(e,t){var o=e.type.contextTypes;if(!o)return O1;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},i;for(i in o)c[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function De(e){return e=e.childContextTypes,e!=null}function Kc(){de(Te),de(Ne)}function tS(e,t,o){if(Ne.current!==O1)throw Error(d(168));ce(Ne,t),ce(Te,o)}function nS(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(d(108,ae(e)||"Unknown",c));return j({},o,a)}function Qc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||O1,ct=Ne.current,ce(Ne,e),ce(Te,Te.current),!0}function oS(e,t,o){var a=e.stateNode;if(!a)throw Error(d(169));o?(e=nS(e,t,ct),a.__reactInternalMemoizedMergedChildContext=e,de(Te),de(Ne),ce(Ne,e)):de(Te),ce(Te,o)}var S1=null,Jc=!1,vL=!1;function aS(e){S1===null?S1=[e]:S1.push(e)}function Nz(e){Jc=!0,aS(e)}function U1(){if(!vL&&S1!==null){vL=!0;var e=0,t=oe;try{var o=S1;for(oe=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}S1=null,Jc=!1}catch(c){throw S1!==null&&(S1=S1.slice(e+1)),iI(Rw,U1),c}finally{oe=t,vL=!1}}return null}var h2=[],y2=0,Yc=null,ei=0,Je=[],Ye=0,it=null,N1=1,$1="";function rt(e,t){h2[y2++]=ei,h2[y2++]=Yc,Yc=e,ei=t}function cS(e,t,o){Je[Ye++]=N1,Je[Ye++]=$1,Je[Ye++]=it,it=e;var a=N1;e=$1;var c=32-r1(a)-1;a&=~(1<<c),o+=1;var i=32-r1(t)+c;if(30<i){var r=c-c%5;i=(a&(1<<r)-1).toString(32),a>>=r,c-=r,N1=1<<32-r1(t)+c|o<<c|a,$1=i+e}else N1=1<<i|o<<c|a,$1=e}function gL(e){e.return!==null&&(rt(e,1),cS(e,1,0))}function xL(e){for(;e===Yc;)Yc=h2[--y2],h2[y2]=null,ei=h2[--y2],h2[y2]=null;for(;e===it;)it=Je[--Ye],Je[Ye]=null,$1=Je[--Ye],Je[Ye]=null,N1=Je[--Ye],Je[Ye]=null}var We=null,Ge=null,se=!1,l1=null;function iS(e,t){var o=o1(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function rS(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ge=B1(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=it!==null?{id:N1,overflow:$1}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=o1(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,We=e,Ge=null,!0):!1;default:return!1}}function _L(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wL(e){if(se){var t=Ge;if(t){var o=t;if(!rS(e,t)){if(_L(e))throw Error(d(418));t=B1(o.nextSibling);var a=We;t&&rS(e,t)?iS(a,o):(e.flags=e.flags&-4097|2,se=!1,We=e)}}else{if(_L(e))throw Error(d(418));e.flags=e.flags&-4097|2,se=!1,We=e}}}function dS(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ti(e){if(e!==We)return!1;if(!se)return dS(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pL(e.type,e.memoizedProps)),t&&(t=Ge)){if(_L(e))throw lS(),Error(d(418));for(;t;)iS(e,t),t=B1(t.nextSibling)}if(dS(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Ge=B1(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=We?B1(e.stateNode.nextSibling):null;return!0}function lS(){for(var e=Ge;e;)e=B1(e.nextSibling)}function u2(){Ge=We=null,se=!1}function LL(e){l1===null?l1=[e]:l1.push(e)}var $z=Se.ReactCurrentBatchConfig;function Q2(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(d(309));var a=o.stateNode}if(!a)throw Error(d(147,e));var c=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(r){var h=c.refs;r===null?delete h[i]:h[i]=r},t._stringRef=i,t)}if(typeof e!="string")throw Error(d(284));if(!o._owner)throw Error(d(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sS(e){var t=e._init;return t(e._payload)}function hS(e){function t(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function o(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function a(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function c(f,p){return f=Y1(f,p),f.index=0,f.sibling=null,f}function i(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function r(f){return e&&f.alternate===null&&(f.flags|=2),f}function h(f,p,m,$){return p===null||p.tag!==6?(p=kC(m,f.mode,$),p.return=f,p):(p=c(p,m),p.return=f,p)}function y(f,p,m,$){var V=m.type;return V===Pe?S(f,p,m.props.children,$,m.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ve&&sS(V)===p.type)?($=c(p,m.props),$.ref=Q2(f,p,m),$.return=f,$):($=Ii(m.type,m.key,m.props,null,f.mode,$),$.ref=Q2(f,p,m),$.return=f,$)}function g(f,p,m,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=fC(m,f.mode,$),p.return=f,p):(p=c(p,m.children||[]),p.return=f,p)}function S(f,p,m,$,V){return p===null||p.tag!==7?(p=kt(m,f.mode,$,V),p.return=f,p):(p=c(p,m),p.return=f,p)}function N(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=kC(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case c1:return m=Ii(p.type,p.key,p.props,null,f.mode,m),m.ref=Q2(f,null,p),m.return=f,m;case He:return p=fC(p,f.mode,m),p.return=f,p;case Ve:var $=p._init;return N(f,$(p._payload),m)}if(I2(p)||B(p))return p=kt(p,f.mode,m,null),p.return=f,p;ni(f,p)}return null}function L(f,p,m,$){var V=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return V!==null?null:h(f,p,""+m,$);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case c1:return m.key===V?y(f,p,m,$):null;case He:return m.key===V?g(f,p,m,$):null;case Ve:return V=m._init,L(f,p,V(m._payload),$)}if(I2(m)||B(m))return V!==null?null:S(f,p,m,$,null);ni(f,m)}return null}function A(f,p,m,$,V){if(typeof $=="string"&&$!==""||typeof $=="number")return f=f.get(m)||null,h(p,f,""+$,V);if(typeof $=="object"&&$!==null){switch($.$$typeof){case c1:return f=f.get($.key===null?m:$.key)||null,y(p,f,$,V);case He:return f=f.get($.key===null?m:$.key)||null,g(p,f,$,V);case Ve:var F=$._init;return A(f,p,m,F($._payload),V)}if(I2($)||B($))return f=f.get(m)||null,S(p,f,$,V,null);ni(p,$)}return null}function b(f,p,m,$){for(var V=null,F=null,R=p,E=p=0,Le=null;R!==null&&E<m.length;E++){R.index>E?(Le=R,R=null):Le=R.sibling;var te=L(f,R,m[E],$);if(te===null){R===null&&(R=Le);break}e&&R&&te.alternate===null&&t(f,R),p=i(te,p,E),F===null?V=te:F.sibling=te,F=te,R=Le}if(E===m.length)return o(f,R),se&&rt(f,E),V;if(R===null){for(;E<m.length;E++)R=N(f,m[E],$),R!==null&&(p=i(R,p,E),F===null?V=R:F.sibling=R,F=R);return se&&rt(f,E),V}for(R=a(f,R);E<m.length;E++)Le=A(R,f,E,m[E],$),Le!==null&&(e&&Le.alternate!==null&&R.delete(Le.key===null?E:Le.key),p=i(Le,p,E),F===null?V=Le:F.sibling=Le,F=Le);return e&&R.forEach(function(et){return t(f,et)}),se&&rt(f,E),V}function P(f,p,m,$){var V=B(m);if(typeof V!="function")throw Error(d(150));if(m=V.call(m),m==null)throw Error(d(151));for(var F=V=null,R=p,E=p=0,Le=null,te=m.next();R!==null&&!te.done;E++,te=m.next()){R.index>E?(Le=R,R=null):Le=R.sibling;var et=L(f,R,te.value,$);if(et===null){R===null&&(R=Le);break}e&&R&&et.alternate===null&&t(f,R),p=i(et,p,E),F===null?V=et:F.sibling=et,F=et,R=Le}if(te.done)return o(f,R),se&&rt(f,E),V;if(R===null){for(;!te.done;E++,te=m.next())te=N(f,te.value,$),te!==null&&(p=i(te,p,E),F===null?V=te:F.sibling=te,F=te);return se&&rt(f,E),V}for(R=a(f,R);!te.done;E++,te=m.next())te=A(R,f,E,te.value,$),te!==null&&(e&&te.alternate!==null&&R.delete(te.key===null?E:te.key),p=i(te,p,E),F===null?V=te:F.sibling=te,F=te);return e&&R.forEach(function(dq){return t(f,dq)}),se&&rt(f,E),V}function me(f,p,m,$){if(typeof m=="object"&&m!==null&&m.type===Pe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case c1:e:{for(var V=m.key,F=p;F!==null;){if(F.key===V){if(V=m.type,V===Pe){if(F.tag===7){o(f,F.sibling),p=c(F,m.props.children),p.return=f,f=p;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ve&&sS(V)===F.type){o(f,F.sibling),p=c(F,m.props),p.ref=Q2(f,F,m),p.return=f,f=p;break e}o(f,F);break}else t(f,F);F=F.sibling}m.type===Pe?(p=kt(m.props.children,f.mode,$,m.key),p.return=f,f=p):($=Ii(m.type,m.key,m.props,null,f.mode,$),$.ref=Q2(f,p,m),$.return=f,f=$)}return r(f);case He:e:{for(F=m.key;p!==null;){if(p.key===F)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){o(f,p.sibling),p=c(p,m.children||[]),p.return=f,f=p;break e}else{o(f,p);break}else t(f,p);p=p.sibling}p=fC(m,f.mode,$),p.return=f,f=p}return r(f);case Ve:return F=m._init,me(f,p,F(m._payload),$)}if(I2(m))return b(f,p,m,$);if(B(m))return P(f,p,m,$);ni(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(o(f,p.sibling),p=c(p,m),p.return=f,f=p):(o(f,p),p=kC(m,f.mode,$),p.return=f,f=p),r(f)):o(f,p)}return me}var p2=hS(!0),yS=hS(!1),oi=E1(null),ai=null,k2=null,CL=null;function IL(){CL=k2=ai=null}function SL(e){var t=oi.current;de(oi),e._currentValue=t}function NL(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function f2(e,t){ai=e,CL=k2=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function e1(e){var t=e._currentValue;if(CL!==e)if(e={context:e,memoizedValue:t,next:null},k2===null){if(ai===null)throw Error(d(308));k2=e,ai.dependencies={lanes:0,firstContext:e}}else k2=k2.next=e;return t}var dt=null;function $L(e){dt===null?dt=[e]:dt.push(e)}function uS(e,t,o,a){var c=t.interleaved;return c===null?(o.next=o,$L(t)):(o.next=c.next,c.next=o),t.interleaved=o,z1(e,a)}function z1(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Z1=!1;function zL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function q1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function W1(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,J&2){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,z1(e,o)}return c=a.interleaved,c===null?(t.next=t,$L(a)):(t.next=c.next,c.next=t),a.interleaved=t,z1(e,o)}function ci(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Ow(e,o)}}function kS(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,i=null;if(o=o.firstBaseUpdate,o!==null){do{var r={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};i===null?c=i=r:i=i.next=r,o=o.next}while(o!==null);i===null?c=i=t:i=i.next=t}else c=i=t;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function ii(e,t,o,a){var c=e.updateQueue;Z1=!1;var i=c.firstBaseUpdate,r=c.lastBaseUpdate,h=c.shared.pending;if(h!==null){c.shared.pending=null;var y=h,g=y.next;y.next=null,r===null?i=g:r.next=g,r=y;var S=e.alternate;S!==null&&(S=S.updateQueue,h=S.lastBaseUpdate,h!==r&&(h===null?S.firstBaseUpdate=g:h.next=g,S.lastBaseUpdate=y))}if(i!==null){var N=c.baseState;r=0,S=g=y=null,h=i;do{var L=h.lane,A=h.eventTime;if((a&L)===L){S!==null&&(S=S.next={eventTime:A,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var b=e,P=h;switch(L=t,A=o,P.tag){case 1:if(b=P.payload,typeof b=="function"){N=b.call(A,N,L);break e}N=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=P.payload,L=typeof b=="function"?b.call(A,N,L):b,L==null)break e;N=j({},N,L);break e;case 2:Z1=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,L=c.effects,L===null?c.effects=[h]:L.push(h))}else A={eventTime:A,lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},S===null?(g=S=A,y=N):S=S.next=A,r|=L;if(h=h.next,h===null){if(h=c.shared.pending,h===null)break;L=h,h=L.next,L.next=null,c.lastBaseUpdate=L,c.shared.pending=null}}while(!0);if(S===null&&(y=N),c.baseState=y,c.firstBaseUpdate=g,c.lastBaseUpdate=S,t=c.shared.interleaved,t!==null){c=t;do r|=c.lane,c=c.next;while(c!==t)}else i===null&&(c.shared.lanes=0);ht|=r,e.lanes=r,e.memoizedState=N}}function fS(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(d(191,c));c.call(a)}}}var J2={},v1=E1(J2),Y2=E1(J2),ec=E1(J2);function lt(e){if(e===J2)throw Error(d(174));return e}function qL(e,t){switch(ce(ec,t),ce(Y2,e),ce(v1,J2),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Aw(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Aw(t,e)}de(v1),ce(v1,t)}function M2(){de(v1),de(Y2),de(ec)}function MS(e){lt(ec.current);var t=lt(v1.current),o=Aw(t,e.type);t!==o&&(ce(Y2,e),ce(v1,o))}function AL(e){Y2.current===e&&(de(v1),de(Y2))}var he=E1(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var HL=[];function jL(){for(var e=0;e<HL.length;e++)HL[e]._workInProgressVersionPrimary=null;HL.length=0}var di=Se.ReactCurrentDispatcher,bL=Se.ReactCurrentBatchConfig,st=0,ye=null,ge=null,_e=null,li=!1,tc=!1,nc=0,zz=0;function $e(){throw Error(d(321))}function PL(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!d1(e[o],t[o]))return!1;return!0}function VL(e,t,o,a,c,i){if(st=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?jz:bz,e=o(a,c),tc){i=0;do{if(tc=!1,nc=0,25<=i)throw Error(d(301));i+=1,_e=ge=null,t.updateQueue=null,di.current=Pz,e=o(a,c)}while(tc)}if(di.current=yi,t=ge!==null&&ge.next!==null,st=0,_e=ge=ye=null,li=!1,t)throw Error(d(300));return e}function TL(){var e=nc!==0;return nc=0,e}function g1(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ye.memoizedState=_e=e:_e=_e.next=e,_e}function t1(){if(ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=_e===null?ye.memoizedState:_e.next;if(t!==null)_e=t,ge=e;else{if(e===null)throw Error(d(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},_e===null?ye.memoizedState=_e=e:_e=_e.next=e}return _e}function oc(e,t){return typeof t=="function"?t(e):t}function DL(e){var t=t1(),o=t.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=e;var a=ge,c=a.baseQueue,i=o.pending;if(i!==null){if(c!==null){var r=c.next;c.next=i.next,i.next=r}a.baseQueue=c=i,o.pending=null}if(c!==null){i=c.next,a=a.baseState;var h=r=null,y=null,g=i;do{var S=g.lane;if((st&S)===S)y!==null&&(y=y.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),a=g.hasEagerState?g.eagerState:e(a,g.action);else{var N={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};y===null?(h=y=N,r=a):y=y.next=N,ye.lanes|=S,ht|=S}g=g.next}while(g!==null&&g!==i);y===null?r=a:y.next=h,d1(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseState=r,t.baseQueue=y,o.lastRenderedState=a}if(e=o.interleaved,e!==null){c=e;do i=c.lane,ye.lanes|=i,ht|=i,c=c.next;while(c!==e)}else c===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function FL(e){var t=t1(),o=t.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=e;var a=o.dispatch,c=o.pending,i=t.memoizedState;if(c!==null){o.pending=null;var r=c=c.next;do i=e(i,r.action),r=r.next;while(r!==c);d1(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),o.lastRenderedState=i}return[i,a]}function mS(){}function vS(e,t){var o=ye,a=t1(),c=t(),i=!d1(a.memoizedState,c);if(i&&(a.memoizedState=c,Fe=!0),a=a.queue,RL(_S.bind(null,o,a,e),[e]),a.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(o.flags|=2048,ac(9,xS.bind(null,o,a,c,t),void 0,null),we===null)throw Error(d(349));st&30||gS(o,t,c)}return c}function gS(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function xS(e,t,o,a){t.value=o,t.getSnapshot=a,wS(t)&&LS(e)}function _S(e,t,o){return o(function(){wS(t)&&LS(e)})}function wS(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!d1(e,o)}catch{return!0}}function LS(e){var t=z1(e,1);t!==null&&u1(t,e,1,-1)}function CS(e){var t=g1();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oc,lastRenderedState:e},t.queue=e,e=e.dispatch=Hz.bind(null,ye,e),[t.memoizedState,e]}function ac(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function IS(){return t1().memoizedState}function si(e,t,o,a){var c=g1();ye.flags|=e,c.memoizedState=ac(1|t,o,void 0,a===void 0?null:a)}function hi(e,t,o,a){var c=t1();a=a===void 0?null:a;var i=void 0;if(ge!==null){var r=ge.memoizedState;if(i=r.destroy,a!==null&&PL(a,r.deps)){c.memoizedState=ac(t,o,i,a);return}}ye.flags|=e,c.memoizedState=ac(1|t,o,i,a)}function SS(e,t){return si(8390656,8,e,t)}function RL(e,t){return hi(2048,8,e,t)}function NS(e,t){return hi(4,2,e,t)}function $S(e,t){return hi(4,4,e,t)}function zS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qS(e,t,o){return o=o!=null?o.concat([e]):null,hi(4,4,zS.bind(null,t,e),o)}function BL(){}function AS(e,t){var o=t1();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&PL(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function HS(e,t){var o=t1();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&PL(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function jS(e,t,o){return st&21?(d1(o,t)||(o=sI(),ye.lanes|=o,ht|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=o)}function qz(e,t){var o=oe;oe=o!==0&&4>o?o:4,e(!0);var a=bL.transition;bL.transition={};try{e(!1),t()}finally{oe=o,bL.transition=a}}function bS(){return t1().memoizedState}function Az(e,t,o){var a=Q1(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},PS(e))VS(t,o);else if(o=uS(e,t,o,a),o!==null){var c=be();u1(o,e,a,c),TS(o,t,a)}}function Hz(e,t,o){var a=Q1(e),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(PS(e))VS(t,c);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,h=i(r,o);if(c.hasEagerState=!0,c.eagerState=h,d1(h,r)){var y=t.interleaved;y===null?(c.next=c,$L(t)):(c.next=y.next,y.next=c),t.interleaved=c;return}}catch{}finally{}o=uS(e,t,c,a),o!==null&&(c=be(),u1(o,e,a,c),TS(o,t,a))}}function PS(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function VS(e,t){tc=li=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function TS(e,t,o){if(o&4194240){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Ow(e,o)}}var yi={readContext:e1,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},jz={readContext:e1,useCallback:function(e,t){return g1().memoizedState=[e,t===void 0?null:t],e},useContext:e1,useEffect:SS,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,si(4194308,4,zS.bind(null,t,e),o)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var o=g1();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=g1();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Az.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=g1();return e={current:e},t.memoizedState=e},useState:CS,useDebugValue:BL,useDeferredValue:function(e){return g1().memoizedState=e},useTransition:function(){var e=CS(!1),t=e[0];return e=qz.bind(null,e[1]),g1().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=ye,c=g1();if(se){if(o===void 0)throw Error(d(407));o=o()}else{if(o=t(),we===null)throw Error(d(349));st&30||gS(a,t,o)}c.memoizedState=o;var i={value:o,getSnapshot:t};return c.queue=i,SS(_S.bind(null,a,i,e),[e]),a.flags|=2048,ac(9,xS.bind(null,a,i,o,t),void 0,null),o},useId:function(){var e=g1(),t=we.identifierPrefix;if(se){var o=$1,a=N1;o=(a&~(1<<32-r1(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=nc++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=zz++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bz={readContext:e1,useCallback:AS,useContext:e1,useEffect:RL,useImperativeHandle:qS,useInsertionEffect:NS,useLayoutEffect:$S,useMemo:HS,useReducer:DL,useRef:IS,useState:function(){return DL(oc)},useDebugValue:BL,useDeferredValue:function(e){var t=t1();return jS(t,ge.memoizedState,e)},useTransition:function(){var e=DL(oc)[0],t=t1().memoizedState;return[e,t]},useMutableSource:mS,useSyncExternalStore:vS,useId:bS,unstable_isNewReconciler:!1},Pz={readContext:e1,useCallback:AS,useContext:e1,useEffect:RL,useImperativeHandle:qS,useInsertionEffect:NS,useLayoutEffect:$S,useMemo:HS,useReducer:FL,useRef:IS,useState:function(){return FL(oc)},useDebugValue:BL,useDeferredValue:function(e){var t=t1();return ge===null?t.memoizedState=e:jS(t,ge.memoizedState,e)},useTransition:function(){var e=FL(oc)[0],t=t1().memoizedState;return[e,t]},useMutableSource:mS,useSyncExternalStore:vS,useId:bS,unstable_isNewReconciler:!1};function s1(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function EL(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:j({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var ui={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=be(),c=Q1(e),i=q1(a,c);i.payload=t,o!=null&&(i.callback=o),t=W1(e,i,c),t!==null&&(u1(t,e,c,a),ci(t,e,c))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=be(),c=Q1(e),i=q1(a,c);i.tag=1,i.payload=t,o!=null&&(i.callback=o),t=W1(e,i,c),t!==null&&(u1(t,e,c,a),ci(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=be(),a=Q1(e),c=q1(o,a);c.tag=2,t!=null&&(c.callback=t),t=W1(e,c,a),t!==null&&(u1(t,e,a,o),ci(t,e,a))}};function DS(e,t,o,a,c,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!O2(o,a)||!O2(c,i):!0}function FS(e,t,o){var a=!1,c=O1,i=t.contextType;return typeof i=="object"&&i!==null?i=e1(i):(c=De(t)?ct:Ne.current,a=t.contextTypes,i=(a=a!=null)?s2(e,c):O1),t=new t(o,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=i),t}function RS(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function OL(e,t,o,a){var c=e.stateNode;c.props=o,c.state=e.memoizedState,c.refs={},zL(e);var i=t.contextType;typeof i=="object"&&i!==null?c.context=e1(i):(i=De(t)?ct:Ne.current,c.context=s2(e,i)),c.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(EL(e,t,i,o),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&ui.enqueueReplaceState(c,c.state,null),ii(e,o,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function m2(e,t){try{var o="",a=t;do o+=Y(a),a=a.return;while(a);var c=o}catch(i){c=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:c,digest:null}}function UL(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function ZL(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Vz=typeof WeakMap=="function"?WeakMap:Map;function BS(e,t,o){o=q1(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){gi||(gi=!0,rC=a),ZL(e,t)},o}function ES(e,t,o){o=q1(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;o.payload=function(){return a(c)},o.callback=function(){ZL(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(o.callback=function(){ZL(e,t),typeof a!="function"&&(X1===null?X1=new Set([this]):X1.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),o}function OS(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new Vz;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(o)||(c.add(o),e=Qz.bind(null,e,t,o),t.then(e,e))}function US(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ZS(e,t,o,a,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=q1(-1,1),t.tag=2,W1(o,t,1))),o.lanes|=1),e)}var Tz=Se.ReactCurrentOwner,Fe=!1;function je(e,t,o,a){t.child=e===null?yS(t,null,o,a):p2(t,e.child,o,a)}function WS(e,t,o,a,c){o=o.render;var i=t.ref;return f2(t,c),a=VL(e,t,o,a,i,c),o=TL(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,A1(e,t,c)):(se&&o&&gL(t),t.flags|=1,je(e,t,a,c),t.child)}function GS(e,t,o,a,c){if(e===null){var i=o.type;return typeof i=="function"&&!pC(i)&&i.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=i,XS(e,t,i,a,c)):(e=Ii(o.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&c)){var r=i.memoizedProps;if(o=o.compare,o=o!==null?o:O2,o(r,a)&&e.ref===t.ref)return A1(e,t,c)}return t.flags|=1,e=Y1(i,a),e.ref=t.ref,e.return=t,t.child=e}function XS(e,t,o,a,c){if(e!==null){var i=e.memoizedProps;if(O2(i,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=i,(e.lanes&c)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,A1(e,t,c)}return WL(e,t,o,a,c)}function KS(e,t,o){var a=t.pendingProps,c=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(g2,Xe),Xe|=o;else{if(!(o&1073741824))return e=i!==null?i.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(g2,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:o,ce(g2,Xe),Xe|=a}else i!==null?(a=i.baseLanes|o,t.memoizedState=null):a=o,ce(g2,Xe),Xe|=a;return je(e,t,c,o),t.child}function QS(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function WL(e,t,o,a,c){var i=De(o)?ct:Ne.current;return i=s2(t,i),f2(t,c),o=VL(e,t,o,a,i,c),a=TL(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,A1(e,t,c)):(se&&a&&gL(t),t.flags|=1,je(e,t,o,c),t.child)}function JS(e,t,o,a,c){if(De(o)){var i=!0;Qc(t)}else i=!1;if(f2(t,c),t.stateNode===null)ki(e,t),FS(t,o,a),OL(t,o,a,c),a=!0;else if(e===null){var r=t.stateNode,h=t.memoizedProps;r.props=h;var y=r.context,g=o.contextType;typeof g=="object"&&g!==null?g=e1(g):(g=De(o)?ct:Ne.current,g=s2(t,g));var S=o.getDerivedStateFromProps,N=typeof S=="function"||typeof r.getSnapshotBeforeUpdate=="function";N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==a||y!==g)&&RS(t,r,a,g),Z1=!1;var L=t.memoizedState;r.state=L,ii(t,a,r,c),y=t.memoizedState,h!==a||L!==y||Te.current||Z1?(typeof S=="function"&&(EL(t,o,S,a),y=t.memoizedState),(h=Z1||DS(t,o,h,a,L,y,g))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),r.props=a,r.state=y,r.context=g,a=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,pS(e,t),h=t.memoizedProps,g=t.type===t.elementType?h:s1(t.type,h),r.props=g,N=t.pendingProps,L=r.context,y=o.contextType,typeof y=="object"&&y!==null?y=e1(y):(y=De(o)?ct:Ne.current,y=s2(t,y));var A=o.getDerivedStateFromProps;(S=typeof A=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==N||L!==y)&&RS(t,r,a,y),Z1=!1,L=t.memoizedState,r.state=L,ii(t,a,r,c);var b=t.memoizedState;h!==N||L!==b||Te.current||Z1?(typeof A=="function"&&(EL(t,o,A,a),b=t.memoizedState),(g=Z1||DS(t,o,g,a,L,b,y)||!1)?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,b,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,b,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),r.props=a,r.state=b,r.context=y,a=g):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),a=!1)}return GL(e,t,o,a,i,c)}function GL(e,t,o,a,c,i){QS(e,t);var r=(t.flags&128)!==0;if(!a&&!r)return c&&oS(t,o,!1),A1(e,t,i);a=t.stateNode,Tz.current=t;var h=r&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&r?(t.child=p2(t,e.child,null,i),t.child=p2(t,null,h,i)):je(e,t,h,i),t.memoizedState=a.state,c&&oS(t,o,!0),t.child}function YS(e){var t=e.stateNode;t.pendingContext?tS(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tS(e,t.context,!1),qL(e,t.containerInfo)}function eN(e,t,o,a,c){return u2(),LL(c),t.flags|=256,je(e,t,o,a),t.child}var XL={dehydrated:null,treeContext:null,retryLane:0};function KL(e){return{baseLanes:e,cachePool:null,transitions:null}}function tN(e,t,o){var a=t.pendingProps,c=he.current,i=!1,r=(t.flags&128)!==0,h;if((h=r)||(h=e!==null&&e.memoizedState===null?!1:(c&2)!==0),h?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ce(he,c&1),e===null)return wL(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=a.children,e=a.fallback,i?(a=t.mode,i=t.child,r={mode:"hidden",children:r},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=Si(r,a,0,null),e=kt(e,a,o,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=KL(o),t.memoizedState=XL,e):QL(t,r));if(c=e.memoizedState,c!==null&&(h=c.dehydrated,h!==null))return Dz(e,t,r,a,h,c,o);if(i){i=a.fallback,r=t.mode,c=e.child,h=c.sibling;var y={mode:"hidden",children:a.children};return!(r&1)&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=y,t.deletions=null):(a=Y1(c,y),a.subtreeFlags=c.subtreeFlags&14680064),h!==null?i=Y1(h,i):(i=kt(i,r,o,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,r=e.child.memoizedState,r=r===null?KL(o):{baseLanes:r.baseLanes|o,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~o,t.memoizedState=XL,a}return i=e.child,e=i.sibling,a=Y1(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function QL(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,o,a){return a!==null&&LL(a),p2(t,e.child,null,o),e=QL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dz(e,t,o,a,c,i,r){if(o)return t.flags&256?(t.flags&=-257,a=UL(Error(d(422))),pi(e,t,r,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,c=t.mode,a=Si({mode:"visible",children:a.children},c,0,null),i=kt(i,c,r,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&p2(t,e.child,null,r),t.child.memoizedState=KL(r),t.memoizedState=XL,i);if(!(t.mode&1))return pi(e,t,r,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var h=a.dgst;return a=h,i=Error(d(419)),a=UL(i,a,void 0),pi(e,t,r,a)}if(h=(r&e.childLanes)!==0,Fe||h){if(a=we,a!==null){switch(r&-r){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|r)?0:c,c!==0&&c!==i.retryLane&&(i.retryLane=c,z1(e,c),u1(a,e,c,-1))}return uC(),a=UL(Error(d(421))),pi(e,t,r,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Jz.bind(null,e),c._reactRetry=t,null):(e=i.treeContext,Ge=B1(c.nextSibling),We=t,se=!0,l1=null,e!==null&&(Je[Ye++]=N1,Je[Ye++]=$1,Je[Ye++]=it,N1=e.id,$1=e.overflow,it=t),t=QL(t,a.children),t.flags|=4096,t)}function nN(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),NL(e.return,t,o)}function JL(e,t,o,a,c){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=o,i.tailMode=c)}function oN(e,t,o){var a=t.pendingProps,c=a.revealOrder,i=a.tail;if(je(e,t,a.children,o),a=he.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nN(e,o,t);else if(e.tag===19)nN(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ce(he,a),!(t.mode&1))t.memoizedState=null;else switch(c){case"forwards":for(o=t.child,c=null;o!==null;)e=o.alternate,e!==null&&ri(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=t.child,t.child=null):(c=o.sibling,o.sibling=null),JL(t,!1,c,o,i);break;case"backwards":for(o=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ri(e)===null){t.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}JL(t,!0,o,null,i);break;case"together":JL(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function A1(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),ht|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,o=Y1(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Y1(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Fz(e,t,o){switch(t.tag){case 3:YS(t),u2();break;case 5:MS(t);break;case 1:De(t.type)&&Qc(t);break;case 4:qL(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ce(oi,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ce(he,he.current&1),t.flags|=128,null):o&t.child.childLanes?tN(e,t,o):(ce(he,he.current&1),e=A1(e,t,o),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(a=(o&t.childLanes)!==0,e.flags&128){if(a)return oN(e,t,o);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ce(he,he.current),a)break;return null;case 22:case 23:return t.lanes=0,KS(e,t,o)}return A1(e,t,o)}var aN,YL,cN,iN;aN=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},YL=function(){},cN=function(e,t,o,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,lt(v1.current);var i=null;switch(o){case"input":c=Nw(e,c),a=Nw(e,a),i=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),i=[];break;case"textarea":c=qw(e,c),a=qw(e,a),i=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Gc)}Hw(o,a);var r;o=null;for(g in c)if(!a.hasOwnProperty(g)&&c.hasOwnProperty(g)&&c[g]!=null)if(g==="style"){var h=c[g];for(r in h)h.hasOwnProperty(r)&&(o||(o={}),o[r]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(x.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in a){var y=a[g];if(h=c!=null?c[g]:void 0,a.hasOwnProperty(g)&&y!==h&&(y!=null||h!=null))if(g==="style")if(h){for(r in h)!h.hasOwnProperty(r)||y&&y.hasOwnProperty(r)||(o||(o={}),o[r]="");for(r in y)y.hasOwnProperty(r)&&h[r]!==y[r]&&(o||(o={}),o[r]=y[r])}else o||(i||(i=[]),i.push(g,o)),o=y;else g==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,h=h?h.__html:void 0,y!=null&&h!==y&&(i=i||[]).push(g,y)):g==="children"?typeof y!="string"&&typeof y!="number"||(i=i||[]).push(g,""+y):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(x.hasOwnProperty(g)?(y!=null&&g==="onScroll"&&re("scroll",e),i||h===y||(i=[])):(i=i||[]).push(g,y))}o&&(i=i||[]).push("style",o);var g=i;(t.updateQueue=g)&&(t.flags|=4)}},iN=function(e,t,o,a){o!==a&&(t.flags|=4)};function cc(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function Rz(e,t,o){var a=t.pendingProps;switch(xL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return De(t.type)&&Kc(),ze(t),null;case 3:return a=t.stateNode,M2(),de(Te),de(Ne),jL(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,l1!==null&&(sC(l1),l1=null))),YL(e,t),ze(t),null;case 5:AL(t);var c=lt(ec.current);if(o=t.type,e!==null&&t.stateNode!=null)cN(e,t,o,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(d(166));return ze(t),null}if(e=lt(v1.current),ti(t)){a=t.stateNode,o=t.type;var i=t.memoizedProps;switch(a[m1]=t,a[X2]=i,e=(t.mode&1)!==0,o){case"dialog":re("cancel",a),re("close",a);break;case"iframe":case"object":case"embed":re("load",a);break;case"video":case"audio":for(c=0;c<Z2.length;c++)re(Z2[c],a);break;case"source":re("error",a);break;case"img":case"image":case"link":re("error",a),re("load",a);break;case"details":re("toggle",a);break;case"input":FC(a,i),re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},re("invalid",a);break;case"textarea":EC(a,i),re("invalid",a)}Hw(o,i),c=null;for(var r in i)if(i.hasOwnProperty(r)){var h=i[r];r==="children"?typeof h=="string"?a.textContent!==h&&(i.suppressHydrationWarning!==!0&&Wc(a.textContent,h,e),c=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&Wc(a.textContent,h,e),c=["children",""+h]):x.hasOwnProperty(r)&&h!=null&&r==="onScroll"&&re("scroll",a)}switch(o){case"input":Lc(a),BC(a,i,!0);break;case"textarea":Lc(a),UC(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Gc)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{r=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ZC(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(o,{is:a.is}):(e=r.createElement(o),o==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,o),e[m1]=t,e[X2]=a,aN(e,t,!1,!1),t.stateNode=e;e:{switch(r=jw(o,a),o){case"dialog":re("cancel",e),re("close",e),c=a;break;case"iframe":case"object":case"embed":re("load",e),c=a;break;case"video":case"audio":for(c=0;c<Z2.length;c++)re(Z2[c],e);c=a;break;case"source":re("error",e),c=a;break;case"img":case"image":case"link":re("error",e),re("load",e),c=a;break;case"details":re("toggle",e),c=a;break;case"input":FC(e,a),c=Nw(e,a),re("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),re("invalid",e);break;case"textarea":EC(e,a),c=qw(e,a),re("invalid",e);break;default:c=a}Hw(o,c),h=c;for(i in h)if(h.hasOwnProperty(i)){var y=h[i];i==="style"?XC(e,y):i==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&WC(e,y)):i==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&S2(e,y):typeof y=="number"&&S2(e,""+y):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(x.hasOwnProperty(i)?y!=null&&i==="onScroll"&&re("scroll",e):y!=null&&Ae(e,i,y,r))}switch(o){case"input":Lc(e),BC(e,a,!1);break;case"textarea":Lc(e),UC(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ne(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Ja(e,!!a.multiple,i,!1):a.defaultValue!=null&&Ja(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Gc)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)iN(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(o=lt(ec.current),lt(v1.current),ti(t)){if(a=t.stateNode,o=t.memoizedProps,a[m1]=t,(i=a.nodeValue!==o)&&(e=We,e!==null))switch(e.tag){case 3:Wc(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wc(a.nodeValue,o,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[m1]=t,t.stateNode=a}return ze(t),null;case 13:if(de(he),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ge!==null&&t.mode&1&&!(t.flags&128))lS(),u2(),t.flags|=98560,i=!1;else if(i=ti(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[m1]=t}else u2(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else l1!==null&&(sC(l1),l1=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?xe===0&&(xe=3):uC())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return M2(),YL(e,t),e===null&&W2(t.stateNode.containerInfo),ze(t),null;case 10:return SL(t.type._context),ze(t),null;case 17:return De(t.type)&&Kc(),ze(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return ze(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)cc(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=ri(e),r!==null){for(t.flags|=128,cc(i,!1),a=r.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)i=o,e=a,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ce(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&Me()>x2&&(t.flags|=128,a=!0,cc(i,!1),t.lanes=4194304)}else{if(!a)if(e=ri(r),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),cc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!se)return ze(t),null}else 2*Me()-i.renderingStartTime>x2&&o!==1073741824&&(t.flags|=128,a=!0,cc(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(o=i.last,o!==null?o.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Me(),t.sibling=null,o=he.current,ce(he,a?o&1|2:o&1),t):(ze(t),null);case 22:case 23:return yC(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Xe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function Bz(e,t){switch(xL(t),t.tag){case 1:return De(t.type)&&Kc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return M2(),de(Te),de(Ne),jL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return AL(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));u2()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return M2(),null;case 10:return SL(t.type._context),null;case 22:case 23:return yC(),null;case 24:return null;default:return null}}var fi=!1,qe=!1,Ez=typeof WeakSet=="function"?WeakSet:Set,H=null;function v2(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){ke(e,t,a)}else o.current=null}function eC(e,t,o){try{o()}catch(a){ke(e,t,a)}}var rN=!1;function Oz(e,t){if(yL=Pc,e=DI(),aL(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{o.nodeType,i.nodeType}catch{o=null;break e}var r=0,h=-1,y=-1,g=0,S=0,N=e,L=null;t:for(;;){for(var A;N!==o||c!==0&&N.nodeType!==3||(h=r+c),N!==i||a!==0&&N.nodeType!==3||(y=r+a),N.nodeType===3&&(r+=N.nodeValue.length),(A=N.firstChild)!==null;)L=N,N=A;for(;;){if(N===e)break t;if(L===o&&++g===c&&(h=r),L===i&&++S===a&&(y=r),(A=N.nextSibling)!==null)break;N=L,L=N.parentNode}N=A}o=h===-1||y===-1?null:{start:h,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(uL={focusedElem:e,selectionRange:o},Pc=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var P=b.memoizedProps,me=b.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?P:s1(t.type,P),me);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch($){ke(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return b=rN,rN=!1,b}function ic(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var i=c.destroy;c.destroy=void 0,i!==void 0&&eC(t,o,i)}c=c.next}while(c!==a)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function tC(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function dN(e){var t=e.alternate;t!==null&&(e.alternate=null,dN(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[m1],delete t[X2],delete t[ML],delete t[Iz],delete t[Sz])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lN(e){return e.tag===5||e.tag===3||e.tag===4}function sN(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lN(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nC(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Gc));else if(a!==4&&(e=e.child,e!==null))for(nC(e,t,o),e=e.sibling;e!==null;)nC(e,t,o),e=e.sibling}function oC(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(oC(e,t,o),e=e.sibling;e!==null;)oC(e,t,o),e=e.sibling}var Ce=null,h1=!1;function G1(e,t,o){for(o=o.child;o!==null;)hN(e,t,o),o=o.sibling}function hN(e,t,o){if(M1&&typeof M1.onCommitFiberUnmount=="function")try{M1.onCommitFiberUnmount(zc,o)}catch{}switch(o.tag){case 5:qe||v2(o,t);case 6:var a=Ce,c=h1;Ce=null,G1(e,t,o),Ce=a,h1=c,Ce!==null&&(h1?(e=Ce,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ce.removeChild(o.stateNode));break;case 18:Ce!==null&&(h1?(e=Ce,o=o.stateNode,e.nodeType===8?fL(e.parentNode,o):e.nodeType===1&&fL(e,o),T2(e)):fL(Ce,o.stateNode));break;case 4:a=Ce,c=h1,Ce=o.stateNode.containerInfo,h1=!0,G1(e,t,o),Ce=a,h1=c;break;case 0:case 11:case 14:case 15:if(!qe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var i=c,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&eC(o,t,r),c=c.next}while(c!==a)}G1(e,t,o);break;case 1:if(!qe&&(v2(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(h){ke(o,t,h)}G1(e,t,o);break;case 21:G1(e,t,o);break;case 22:o.mode&1?(qe=(a=qe)||o.memoizedState!==null,G1(e,t,o),qe=a):G1(e,t,o);break;default:G1(e,t,o)}}function yN(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Ez),t.forEach(function(a){var c=Yz.bind(null,e,a);o.has(a)||(o.add(a),a.then(c,c))})}}function y1(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var i=e,r=t,h=r;e:for(;h!==null;){switch(h.tag){case 5:Ce=h.stateNode,h1=!1;break e;case 3:Ce=h.stateNode.containerInfo,h1=!0;break e;case 4:Ce=h.stateNode.containerInfo,h1=!0;break e}h=h.return}if(Ce===null)throw Error(d(160));hN(i,r,c),Ce=null,h1=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(g){ke(c,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uN(t,e),t=t.sibling}function uN(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(y1(t,e),x1(e),a&4){try{ic(3,e,e.return),Mi(3,e)}catch(P){ke(e,e.return,P)}try{ic(5,e,e.return)}catch(P){ke(e,e.return,P)}}break;case 1:y1(t,e),x1(e),a&512&&o!==null&&v2(o,o.return);break;case 5:if(y1(t,e),x1(e),a&512&&o!==null&&v2(o,o.return),e.flags&32){var c=e.stateNode;try{S2(c,"")}catch(P){ke(e,e.return,P)}}if(a&4&&(c=e.stateNode,c!=null)){var i=e.memoizedProps,r=o!==null?o.memoizedProps:i,h=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&RC(c,i),jw(h,r);var g=jw(h,i);for(r=0;r<y.length;r+=2){var S=y[r],N=y[r+1];S==="style"?XC(c,N):S==="dangerouslySetInnerHTML"?WC(c,N):S==="children"?S2(c,N):Ae(c,S,N,g)}switch(h){case"input":$w(c,i);break;case"textarea":OC(c,i);break;case"select":var L=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ja(c,!!i.multiple,A,!1):L!==!!i.multiple&&(i.defaultValue!=null?Ja(c,!!i.multiple,i.defaultValue,!0):Ja(c,!!i.multiple,i.multiple?[]:"",!1))}c[X2]=i}catch(P){ke(e,e.return,P)}}break;case 6:if(y1(t,e),x1(e),a&4){if(e.stateNode===null)throw Error(d(162));c=e.stateNode,i=e.memoizedProps;try{c.nodeValue=i}catch(P){ke(e,e.return,P)}}break;case 3:if(y1(t,e),x1(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{T2(t.containerInfo)}catch(P){ke(e,e.return,P)}break;case 4:y1(t,e),x1(e);break;case 13:y1(t,e),x1(e),c=e.child,c.flags&8192&&(i=c.memoizedState!==null,c.stateNode.isHidden=i,!i||c.alternate!==null&&c.alternate.memoizedState!==null||(iC=Me())),a&4&&yN(e);break;case 22:if(S=o!==null&&o.memoizedState!==null,e.mode&1?(qe=(g=qe)||S,y1(t,e),qe=g):y1(t,e),x1(e),a&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&e.mode&1)for(H=e,S=e.child;S!==null;){for(N=H=S;H!==null;){switch(L=H,A=L.child,L.tag){case 0:case 11:case 14:case 15:ic(4,L,L.return);break;case 1:v2(L,L.return);var b=L.stateNode;if(typeof b.componentWillUnmount=="function"){a=L,o=L.return;try{t=a,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(P){ke(a,o,P)}}break;case 5:v2(L,L.return);break;case 22:if(L.memoizedState!==null){fN(N);continue}}A!==null?(A.return=L,H=A):fN(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{c=N.stateNode,g?(i=c.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=N.stateNode,y=N.memoizedProps.style,r=y!=null&&y.hasOwnProperty("display")?y.display:null,h.style.display=GC("display",r))}catch(P){ke(e,e.return,P)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=g?"":N.memoizedProps}catch(P){ke(e,e.return,P)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:y1(t,e),x1(e),a&4&&yN(e);break;case 21:break;default:y1(t,e),x1(e)}}function x1(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(lN(o)){var a=o;break e}o=o.return}throw Error(d(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(S2(c,""),a.flags&=-33);var i=sN(e);oC(e,i,c);break;case 3:case 4:var r=a.stateNode.containerInfo,h=sN(e);nC(e,h,r);break;default:throw Error(d(161))}}catch(y){ke(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uz(e,t,o){H=e,pN(e)}function pN(e,t,o){for(var a=(e.mode&1)!==0;H!==null;){var c=H,i=c.child;if(c.tag===22&&a){var r=c.memoizedState!==null||fi;if(!r){var h=c.alternate,y=h!==null&&h.memoizedState!==null||qe;h=fi;var g=qe;if(fi=r,(qe=y)&&!g)for(H=c;H!==null;)r=H,y=r.child,r.tag===22&&r.memoizedState!==null?MN(c):y!==null?(y.return=r,H=y):MN(c);for(;i!==null;)H=i,pN(i),i=i.sibling;H=c,fi=h,qe=g}kN(e)}else c.subtreeFlags&8772&&i!==null?(i.return=c,H=i):kN(e)}}function kN(e){for(;H!==null;){var t=H;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Mi(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!qe)if(o===null)a.componentDidMount();else{var c=t.elementType===t.type?o.memoizedProps:s1(t.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fS(t,i,a);break;case 3:var r=t.updateQueue;if(r!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}fS(t,r,o)}break;case 5:var h=t.stateNode;if(o===null&&t.flags&4){o=h;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&T2(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}qe||t.flags&512&&tC(t)}catch(L){ke(t,t.return,L)}}if(t===e){H=null;break}if(o=t.sibling,o!==null){o.return=t.return,H=o;break}H=t.return}}function fN(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var o=t.sibling;if(o!==null){o.return=t.return,H=o;break}H=t.return}}function MN(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Mi(4,t)}catch(y){ke(t,o,y)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(y){ke(t,c,y)}}var i=t.return;try{tC(t)}catch(y){ke(t,i,y)}break;case 5:var r=t.return;try{tC(t)}catch(y){ke(t,r,y)}}}catch(y){ke(t,t.return,y)}if(t===e){H=null;break}var h=t.sibling;if(h!==null){h.return=t.return,H=h;break}H=t.return}}var Zz=Math.ceil,mi=Se.ReactCurrentDispatcher,aC=Se.ReactCurrentOwner,n1=Se.ReactCurrentBatchConfig,J=0,we=null,ve=null,Ie=0,Xe=0,g2=E1(0),xe=0,rc=null,ht=0,vi=0,cC=0,dc=null,Re=null,iC=0,x2=1/0,H1=null,gi=!1,rC=null,X1=null,xi=!1,K1=null,_i=0,lc=0,dC=null,wi=-1,Li=0;function be(){return J&6?Me():wi!==-1?wi:wi=Me()}function Q1(e){return e.mode&1?J&2&&Ie!==0?Ie&-Ie:$z.transition!==null?(Li===0&&(Li=sI()),Li):(e=oe,e!==0||(e=window.event,e=e===void 0?16:vI(e.type)),e):1}function u1(e,t,o,a){if(50<lc)throw lc=0,dC=null,Error(d(185));H2(e,o,a),(!(J&2)||e!==we)&&(e===we&&(!(J&2)&&(vi|=o),xe===4&&J1(e,Ie)),Be(e,a),o===1&&J===0&&!(t.mode&1)&&(x2=Me()+500,Jc&&U1()))}function Be(e,t){var o=e.callbackNode;$$(e,t);var a=Hc(e,e===we?Ie:0);if(a===0)o!==null&&rI(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&rI(o),t===1)e.tag===0?Nz(vN.bind(null,e)):aS(vN.bind(null,e)),Lz(function(){!(J&6)&&U1()}),o=null;else{switch(hI(a)){case 1:o=Rw;break;case 4:o=dI;break;case 16:o=$c;break;case 536870912:o=lI;break;default:o=$c}o=SN(o,mN.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function mN(e,t){if(wi=-1,Li=0,J&6)throw Error(d(327));var o=e.callbackNode;if(_2()&&e.callbackNode!==o)return null;var a=Hc(e,e===we?Ie:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ci(e,a);else{t=a;var c=J;J|=2;var i=xN();(we!==e||Ie!==t)&&(H1=null,x2=Me()+500,ut(e,t));do try{Xz();break}catch(h){gN(e,h)}while(!0);IL(),mi.current=i,J=c,ve!==null?t=0:(we=null,Ie=0,t=xe)}if(t!==0){if(t===2&&(c=Bw(e),c!==0&&(a=c,t=lC(e,c))),t===1)throw o=rc,ut(e,0),J1(e,a),Be(e,Me()),o;if(t===6)J1(e,a);else{if(c=e.current.alternate,!(a&30)&&!Wz(c)&&(t=Ci(e,a),t===2&&(i=Bw(e),i!==0&&(a=i,t=lC(e,i))),t===1))throw o=rc,ut(e,0),J1(e,a),Be(e,Me()),o;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(d(345));case 2:pt(e,Re,H1);break;case 3:if(J1(e,a),(a&130023424)===a&&(t=iC+500-Me(),10<t)){if(Hc(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){be(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=kL(pt.bind(null,e,Re,H1),t);break}pt(e,Re,H1);break;case 4:if(J1(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var r=31-r1(a);i=1<<r,r=t[r],r>c&&(c=r),a&=~i}if(a=c,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zz(a/1960))-a,10<a){e.timeoutHandle=kL(pt.bind(null,e,Re,H1),a);break}pt(e,Re,H1);break;case 5:pt(e,Re,H1);break;default:throw Error(d(329))}}}return Be(e,Me()),e.callbackNode===o?mN.bind(null,e):null}function lC(e,t){var o=dc;return e.current.memoizedState.isDehydrated&&(ut(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=Re,Re=o,t!==null&&sC(t)),e}function sC(e){Re===null?Re=e:Re.push.apply(Re,e)}function Wz(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],i=c.getSnapshot;c=c.value;try{if(!d1(i(),c))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function J1(e,t){for(t&=~cC,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-r1(t),a=1<<o;e[o]=-1,t&=~a}}function vN(e){if(J&6)throw Error(d(327));_2();var t=Hc(e,0);if(!(t&1))return Be(e,Me()),null;var o=Ci(e,t);if(e.tag!==0&&o===2){var a=Bw(e);a!==0&&(t=a,o=lC(e,a))}if(o===1)throw o=rc,ut(e,0),J1(e,t),Be(e,Me()),o;if(o===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pt(e,Re,H1),Be(e,Me()),null}function hC(e,t){var o=J;J|=1;try{return e(t)}finally{J=o,J===0&&(x2=Me()+500,Jc&&U1())}}function yt(e){K1!==null&&K1.tag===0&&!(J&6)&&_2();var t=J;J|=1;var o=n1.transition,a=oe;try{if(n1.transition=null,oe=1,e)return e()}finally{oe=a,n1.transition=o,J=t,!(J&6)&&U1()}}function yC(){Xe=g2.current,de(g2)}function ut(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,wz(o)),ve!==null)for(o=ve.return;o!==null;){var a=o;switch(xL(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Kc();break;case 3:M2(),de(Te),de(Ne),jL();break;case 5:AL(a);break;case 4:M2();break;case 13:de(he);break;case 19:de(he);break;case 10:SL(a.type._context);break;case 22:case 23:yC()}o=o.return}if(we=e,ve=e=Y1(e.current,null),Ie=Xe=t,xe=0,rc=null,cC=vi=ht=0,Re=dc=null,dt!==null){for(t=0;t<dt.length;t++)if(o=dt[t],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,i=o.pending;if(i!==null){var r=i.next;i.next=c,a.next=r}o.pending=a}dt=null}return e}function gN(e,t){do{var o=ve;try{if(IL(),di.current=yi,li){for(var a=ye.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}li=!1}if(st=0,_e=ge=ye=null,tc=!1,nc=0,aC.current=null,o===null||o.return===null){xe=1,rc=t,ve=null;break}e:{var i=e,r=o.return,h=o,y=t;if(t=Ie,h.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var g=y,S=h,N=S.tag;if(!(S.mode&1)&&(N===0||N===11||N===15)){var L=S.alternate;L?(S.updateQueue=L.updateQueue,S.memoizedState=L.memoizedState,S.lanes=L.lanes):(S.updateQueue=null,S.memoizedState=null)}var A=US(r);if(A!==null){A.flags&=-257,ZS(A,r,h,i,t),A.mode&1&&OS(i,g,t),t=A,y=g;var b=t.updateQueue;if(b===null){var P=new Set;P.add(y),t.updateQueue=P}else b.add(y);break e}else{if(!(t&1)){OS(i,g,t),uC();break e}y=Error(d(426))}}else if(se&&h.mode&1){var me=US(r);if(me!==null){!(me.flags&65536)&&(me.flags|=256),ZS(me,r,h,i,t),LL(m2(y,h));break e}}i=y=m2(y,h),xe!==4&&(xe=2),dc===null?dc=[i]:dc.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=BS(i,y,t);kS(i,f);break e;case 1:h=y;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(X1===null||!X1.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var $=ES(i,h,t);kS(i,$);break e}}i=i.return}while(i!==null)}wN(o)}catch(V){t=V,ve===o&&o!==null&&(ve=o=o.return);continue}break}while(!0)}function xN(){var e=mi.current;return mi.current=yi,e===null?yi:e}function uC(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||!(ht&268435455)&&!(vi&268435455)||J1(we,Ie)}function Ci(e,t){var o=J;J|=2;var a=xN();(we!==e||Ie!==t)&&(H1=null,ut(e,t));do try{Gz();break}catch(c){gN(e,c)}while(!0);if(IL(),J=o,mi.current=a,ve!==null)throw Error(d(261));return we=null,Ie=0,xe}function Gz(){for(;ve!==null;)_N(ve)}function Xz(){for(;ve!==null&&!g$();)_N(ve)}function _N(e){var t=IN(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?wN(e):ve=t,aC.current=null}function wN(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=Bz(o,t),o!==null){o.flags&=32767,ve=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}else if(o=Rz(o,t,Xe),o!==null){ve=o;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);xe===0&&(xe=5)}function pt(e,t,o){var a=oe,c=n1.transition;try{n1.transition=null,oe=1,Kz(e,t,o,a)}finally{n1.transition=c,oe=a}return null}function Kz(e,t,o,a){do _2();while(K1!==null);if(J&6)throw Error(d(327));o=e.finishedWork;var c=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var i=o.lanes|o.childLanes;if(z$(e,i),e===we&&(ve=we=null,Ie=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||xi||(xi=!0,SN($c,function(){return _2(),null})),i=(o.flags&15990)!==0,o.subtreeFlags&15990||i){i=n1.transition,n1.transition=null;var r=oe;oe=1;var h=J;J|=4,aC.current=null,Oz(e,o),uN(o,e),fz(uL),Pc=!!yL,uL=yL=null,e.current=o,Uz(o),x$(),J=h,oe=r,n1.transition=i}else e.current=o;if(xi&&(xi=!1,K1=e,_i=c),i=e.pendingLanes,i===0&&(X1=null),L$(o.stateNode),Be(e,Me()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)c=t[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(gi)throw gi=!1,e=rC,rC=null,e;return _i&1&&e.tag!==0&&_2(),i=e.pendingLanes,i&1?e===dC?lc++:(lc=0,dC=e):lc=0,U1(),null}function _2(){if(K1!==null){var e=hI(_i),t=n1.transition,o=oe;try{if(n1.transition=null,oe=16>e?16:e,K1===null)var a=!1;else{if(e=K1,K1=null,_i=0,J&6)throw Error(d(331));var c=J;for(J|=4,H=e.current;H!==null;){var i=H,r=i.child;if(H.flags&16){var h=i.deletions;if(h!==null){for(var y=0;y<h.length;y++){var g=h[y];for(H=g;H!==null;){var S=H;switch(S.tag){case 0:case 11:case 15:ic(8,S,i)}var N=S.child;if(N!==null)N.return=S,H=N;else for(;H!==null;){S=H;var L=S.sibling,A=S.return;if(dN(S),S===g){H=null;break}if(L!==null){L.return=A,H=L;break}H=A}}}var b=i.alternate;if(b!==null){var P=b.child;if(P!==null){b.child=null;do{var me=P.sibling;P.sibling=null,P=me}while(P!==null)}}H=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,H=r;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ic(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,H=f;break e}H=i.return}}var p=e.current;for(H=p;H!==null;){r=H;var m=r.child;if(r.subtreeFlags&2064&&m!==null)m.return=r,H=m;else e:for(r=p;H!==null;){if(h=H,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:Mi(9,h)}}catch(V){ke(h,h.return,V)}if(h===r){H=null;break e}var $=h.sibling;if($!==null){$.return=h.return,H=$;break e}H=h.return}}if(J=c,U1(),M1&&typeof M1.onPostCommitFiberRoot=="function")try{M1.onPostCommitFiberRoot(zc,e)}catch{}a=!0}return a}finally{oe=o,n1.transition=t}}return!1}function LN(e,t,o){t=m2(o,t),t=BS(e,t,1),e=W1(e,t,1),t=be(),e!==null&&(H2(e,1,t),Be(e,t))}function ke(e,t,o){if(e.tag===3)LN(e,e,o);else for(;t!==null;){if(t.tag===3){LN(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(X1===null||!X1.has(a))){e=m2(o,e),e=ES(t,e,1),t=W1(t,e,1),e=be(),t!==null&&(H2(t,1,e),Be(t,e));break}}t=t.return}}function Qz(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&o,we===e&&(Ie&o)===o&&(xe===4||xe===3&&(Ie&130023424)===Ie&&500>Me()-iC?ut(e,0):cC|=o),Be(e,t)}function CN(e,t){t===0&&(e.mode&1?(t=Ac,Ac<<=1,!(Ac&130023424)&&(Ac=4194304)):t=1);var o=be();e=z1(e,t),e!==null&&(H2(e,t,o),Be(e,o))}function Jz(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),CN(e,o)}function Yz(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(d(314))}a!==null&&a.delete(t),CN(e,o)}var IN;IN=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Fe=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return Fe=!1,Fz(e,t,o);Fe=!!(e.flags&131072)}else Fe=!1,se&&t.flags&1048576&&cS(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ki(e,t),e=t.pendingProps;var c=s2(t,Ne.current);f2(t,o),c=VL(null,t,a,e,c,o);var i=TL();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(a)?(i=!0,Qc(t)):i=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,zL(t),c.updater=ui,t.stateNode=c,c._reactInternals=t,OL(t,a,e,o),t=GL(null,t,a,!0,i,o)):(t.tag=0,se&&i&&gL(t),je(null,t,c,o),t=t.child),t;case 16:a=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=tq(a),e=s1(a,e),c){case 0:t=WL(null,t,a,e,o);break e;case 1:t=JS(null,t,a,e,o);break e;case 11:t=WS(null,t,a,e,o);break e;case 14:t=GS(null,t,a,s1(a.type,e),o);break e}throw Error(d(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),WL(e,t,a,c,o);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),JS(e,t,a,c,o);case 3:e:{if(YS(t),e===null)throw Error(d(387));a=t.pendingProps,i=t.memoizedState,c=i.element,pS(e,t),ii(t,a,null,o);var r=t.memoizedState;if(a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){c=m2(Error(d(423)),t),t=eN(e,t,a,o,c);break e}else if(a!==c){c=m2(Error(d(424)),t),t=eN(e,t,a,o,c);break e}else for(Ge=B1(t.stateNode.containerInfo.firstChild),We=t,se=!0,l1=null,o=yS(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(u2(),a===c){t=A1(e,t,o);break e}je(e,t,a,o)}t=t.child}return t;case 5:return MS(t),e===null&&wL(t),a=t.type,c=t.pendingProps,i=e!==null?e.memoizedProps:null,r=c.children,pL(a,c)?r=null:i!==null&&pL(a,i)&&(t.flags|=32),QS(e,t),je(e,t,r,o),t.child;case 6:return e===null&&wL(t),null;case 13:return tN(e,t,o);case 4:return qL(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=p2(t,null,a,o):je(e,t,a,o),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),WS(e,t,a,c,o);case 7:return je(e,t,t.pendingProps,o),t.child;case 8:return je(e,t,t.pendingProps.children,o),t.child;case 12:return je(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,i=t.memoizedProps,r=c.value,ce(oi,a._currentValue),a._currentValue=r,i!==null)if(d1(i.value,r)){if(i.children===c.children&&!Te.current){t=A1(e,t,o);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var h=i.dependencies;if(h!==null){r=i.child;for(var y=h.firstContext;y!==null;){if(y.context===a){if(i.tag===1){y=q1(-1,o&-o),y.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?y.next=y:(y.next=S.next,S.next=y),g.pending=y}}i.lanes|=o,y=i.alternate,y!==null&&(y.lanes|=o),NL(i.return,o,t),h.lanes|=o;break}y=y.next}}else if(i.tag===10)r=i.type===t.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(d(341));r.lanes|=o,h=r.alternate,h!==null&&(h.lanes|=o),NL(r,o,t),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}je(e,t,c.children,o),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,f2(t,o),c=e1(c),a=a(c),t.flags|=1,je(e,t,a,o),t.child;case 14:return a=t.type,c=s1(a,t.pendingProps),c=s1(a.type,c),GS(e,t,a,c,o);case 15:return XS(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),ki(e,t),t.tag=1,De(a)?(e=!0,Qc(t)):e=!1,f2(t,o),FS(t,a,c),OL(t,a,c,o),GL(null,t,a,!0,e,o);case 19:return oN(e,t,o);case 22:return KS(e,t,o)}throw Error(d(156,t.tag))};function SN(e,t){return iI(e,t)}function eq(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function o1(e,t,o,a){return new eq(e,t,o,a)}function pC(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tq(e){if(typeof e=="function")return pC(e)?1:0;if(e!=null){if(e=e.$$typeof,e===k1)return 11;if(e===f1)return 14}return 2}function Y1(e,t){var o=e.alternate;return o===null?(o=o1(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Ii(e,t,o,a,c,i){var r=2;if(a=e,typeof e=="function")pC(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Pe:return kt(o.children,c,i,t);case Qe:r=8,c|=8;break;case b1:return e=o1(12,o,t,c|2),e.elementType=b1,e.lanes=i,e;case Oe:return e=o1(13,o,t,c),e.elementType=Oe,e.lanes=i,e;case i1:return e=o1(19,o,t,c),e.elementType=i1,e.lanes=i,e;case pe:return Si(o,c,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C1:r=10;break e;case nt:r=9;break e;case k1:r=11;break e;case f1:r=14;break e;case Ve:r=16,a=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=o1(r,o,t,c),t.elementType=e,t.type=a,t.lanes=i,t}function kt(e,t,o,a){return e=o1(7,e,a,t),e.lanes=o,e}function Si(e,t,o,a){return e=o1(22,e,a,t),e.elementType=pe,e.lanes=o,e.stateNode={isHidden:!1},e}function kC(e,t,o){return e=o1(6,e,null,t),e.lanes=o,e}function fC(e,t,o){return t=o1(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nq(e,t,o,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ew(0),this.expirationTimes=Ew(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ew(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function MC(e,t,o,a,c,i,r,h,y){return e=new nq(e,t,o,h,y),t===1?(t=1,i===!0&&(t|=8)):t=0,i=o1(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zL(i),e}function oq(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:He,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function NN(e){if(!e)return O1;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var o=e.type;if(De(o))return nS(e,o,t)}return t}function $N(e,t,o,a,c,i,r,h,y){return e=MC(o,a,!0,e,c,i,r,h,y),e.context=NN(null),o=e.current,a=be(),c=Q1(o),i=q1(a,c),i.callback=t??null,W1(o,i,c),e.current.lanes=c,H2(e,c,a),Be(e,a),e}function Ni(e,t,o,a){var c=t.current,i=be(),r=Q1(c);return o=NN(o),t.context===null?t.context=o:t.pendingContext=o,t=q1(i,r),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=W1(c,t,r),e!==null&&(u1(e,c,r,i),ci(e,c,r)),r}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zN(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function mC(e,t){zN(e,t),(e=e.alternate)&&zN(e,t)}function aq(){return null}var qN=typeof reportError=="function"?reportError:function(e){console.error(e)};function vC(e){this._internalRoot=e}zi.prototype.render=vC.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));Ni(e,t,null,null)},zi.prototype.unmount=vC.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yt(function(){Ni(null,e,null,null)}),t[I1]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=pI();e={blockedOn:null,target:e,priority:t};for(var o=0;o<D1.length&&t!==0&&t<D1[o].priority;o++);D1.splice(o,0,e),o===0&&MI(e)}};function gC(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function AN(){}function cq(e,t,o,a,c){if(c){if(typeof a=="function"){var i=a;a=function(){var g=$i(r);i.call(g)}}var r=$N(t,a,e,0,null,!1,!1,"",AN);return e._reactRootContainer=r,e[I1]=r.current,W2(e.nodeType===8?e.parentNode:e),yt(),r}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var h=a;a=function(){var g=$i(y);h.call(g)}}var y=MC(e,0,!1,null,null,!1,!1,"",AN);return e._reactRootContainer=y,e[I1]=y.current,W2(e.nodeType===8?e.parentNode:e),yt(function(){Ni(t,y,o,a)}),y}function Ai(e,t,o,a,c){var i=o._reactRootContainer;if(i){var r=i;if(typeof c=="function"){var h=c;c=function(){var y=$i(r);h.call(y)}}Ni(t,r,e,c)}else r=cq(o,t,e,c,a);return $i(r)}yI=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=A2(t.pendingLanes);o!==0&&(Ow(t,o|1),Be(t,Me()),!(J&6)&&(x2=Me()+500,U1()))}break;case 13:yt(function(){var a=z1(e,1);if(a!==null){var c=be();u1(a,e,1,c)}}),mC(e,1)}},Uw=function(e){if(e.tag===13){var t=z1(e,134217728);if(t!==null){var o=be();u1(t,e,134217728,o)}mC(e,134217728)}},uI=function(e){if(e.tag===13){var t=Q1(e),o=z1(e,t);if(o!==null){var a=be();u1(o,e,t,a)}mC(e,t)}},pI=function(){return oe},kI=function(e,t){var o=oe;try{return oe=e,t()}finally{oe=o}},Vw=function(e,t,o){switch(t){case"input":if($w(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var c=Xc(a);if(!c)throw Error(d(90));DC(a),$w(a,c)}}}break;case"textarea":OC(e,o);break;case"select":t=o.value,t!=null&&Ja(e,!!o.multiple,t,!1)}},YC=hC,eI=yt;var iq={usingClientEntryPoint:!1,Events:[K2,d2,Xc,QC,JC,hC]},sc={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rq={bundleType:sc.bundleType,version:sc.version,rendererPackageName:sc.rendererPackageName,rendererConfig:sc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=aI(e),e===null?null:e.stateNode},findFiberByHostInstance:sc.findFiberByHostInstance||aq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{zc=Hi.inject(rq),M1=Hi}catch{}}return Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iq,Ee.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gC(t))throw Error(d(200));return oq(e,t,null,o)},Ee.createRoot=function(e,t){if(!gC(e))throw Error(d(299));var o=!1,a="",c=qN;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=MC(e,1,!1,null,null,o,!1,a,c),e[I1]=t.current,W2(e.nodeType===8?e.parentNode:e),new vC(t)},Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=aI(t),e=e===null?null:e.stateNode,e},Ee.flushSync=function(e){return yt(e)},Ee.hydrate=function(e,t,o){if(!qi(t))throw Error(d(200));return Ai(null,e,t,!0,o)},Ee.hydrateRoot=function(e,t,o){if(!gC(e))throw Error(d(405));var a=o!=null&&o.hydratedSources||null,c=!1,i="",r=qN;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(r=o.onRecoverableError)),t=$N(t,null,e,1,o??null,c,!1,i,r),e[I1]=t.current,W2(e),a)for(e=0;e<a.length;e++)o=a[e],c=o._getVersion,c=c(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,c]:t.mutableSourceEagerHydrationData.push(o,c);return new zi(t)},Ee.render=function(e,t,o){if(!qi(t))throw Error(d(200));return Ai(null,e,t,!1,o)},Ee.unmountComponentAtNode=function(e){if(!qi(e))throw Error(d(40));return e._reactRootContainer?(yt(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[I1]=null})}),!0):!1},Ee.unstable_batchedUpdates=hC,Ee.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!qi(o))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Ai(e,t,o,!1,a)},Ee.version="18.3.1-next-f1338f8080-20240426",Ee}var FN;function Mq(){if(FN)return wC.exports;FN=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),wC.exports=fq(),wC.exports}var RN;function mq(){if(RN)return ji;RN=1;var l=Mq();return ji.createRoot=l.createRoot,ji.hydrateRoot=l.hydrateRoot,ji}var vq=mq();const e$=ue.createContext(),gq=({children:l})=>{const[s,d]=ue.useState("en");return u.jsx(e$.Provider,{value:{language:s,setLanguage:d},children:l})},Qa=()=>ue.useContext(e$);var IC,BN;function xq(){if(BN)return IC;BN=1;var l=typeof Element<"u",s=typeof Map=="function",d=typeof Set=="function",v=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function x(M,w){if(M===w)return!0;if(M&&w&&typeof M=="object"&&typeof w=="object"){if(M.constructor!==w.constructor)return!1;var C,_,z;if(Array.isArray(M)){if(C=M.length,C!=w.length)return!1;for(_=C;_--!==0;)if(!x(M[_],w[_]))return!1;return!0}var T;if(s&&M instanceof Map&&w instanceof Map){if(M.size!==w.size)return!1;for(T=M.entries();!(_=T.next()).done;)if(!w.has(_.value[0]))return!1;for(T=M.entries();!(_=T.next()).done;)if(!x(_.value[1],w.get(_.value[0])))return!1;return!0}if(d&&M instanceof Set&&w instanceof Set){if(M.size!==w.size)return!1;for(T=M.entries();!(_=T.next()).done;)if(!w.has(_.value[0]))return!1;return!0}if(v&&ArrayBuffer.isView(M)&&ArrayBuffer.isView(w)){if(C=M.length,C!=w.length)return!1;for(_=C;_--!==0;)if(M[_]!==w[_])return!1;return!0}if(M.constructor===RegExp)return M.source===w.source&&M.flags===w.flags;if(M.valueOf!==Object.prototype.valueOf&&typeof M.valueOf=="function"&&typeof w.valueOf=="function")return M.valueOf()===w.valueOf();if(M.toString!==Object.prototype.toString&&typeof M.toString=="function"&&typeof w.toString=="function")return M.toString()===w.toString();if(z=Object.keys(M),C=z.length,C!==Object.keys(w).length)return!1;for(_=C;_--!==0;)if(!Object.prototype.hasOwnProperty.call(w,z[_]))return!1;if(l&&M instanceof Element)return!1;for(_=C;_--!==0;)if(!((z[_]==="_owner"||z[_]==="__v"||z[_]==="__o")&&M.$$typeof)&&!x(M[z[_]],w[z[_]]))return!1;return!0}return M!==M&&w!==w}return IC=function(w,C){try{return x(w,C)}catch(_){if((_.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw _}},IC}var _q=xq();const wq=Sw(_q);var SC,EN;function Lq(){if(EN)return SC;EN=1;var l=function(s,d,v,x,M,w,C,_){if(!s){var z;if(d===void 0)z=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[v,x,M,w,C,_],O=0;z=new Error(d.replace(/%s/g,function(){return T[O++]})),z.name="Invariant Violation"}throw z.framesToPop=1,z}};return SC=l,SC}var Cq=Lq();const ON=Sw(Cq);var NC,UN;function Iq(){return UN||(UN=1,NC=function(s,d,v,x){var M=v?v.call(x,s,d):void 0;if(M!==void 0)return!!M;if(s===d)return!0;if(typeof s!="object"||!s||typeof d!="object"||!d)return!1;var w=Object.keys(s),C=Object.keys(d);if(w.length!==C.length)return!1;for(var _=Object.prototype.hasOwnProperty.bind(d),z=0;z<w.length;z++){var T=w[z];if(!_(T))return!1;var O=s[T],D=d[T];if(M=v?v.call(x,O,D,T):void 0,M===!1||M===void 0&&O!==D)return!1}return!0}),NC}var Sq=Iq();const Nq=Sw(Sq);var t$=(l=>(l.BASE="base",l.BODY="body",l.HEAD="head",l.HTML="html",l.LINK="link",l.META="meta",l.NOSCRIPT="noscript",l.SCRIPT="script",l.STYLE="style",l.TITLE="title",l.FRAGMENT="Symbol(react.fragment)",l))(t$||{}),$C={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ZN=Object.values(t$),TC={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$q=Object.entries(TC).reduce((l,[s,d])=>(l[d]=s,l),{}),p1="data-rh",L2={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},C2=(l,s)=>{for(let d=l.length-1;d>=0;d-=1){const v=l[d];if(Object.prototype.hasOwnProperty.call(v,s))return v[s]}return null},zq=l=>{let s=C2(l,"title");const d=C2(l,L2.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),d&&s)return d.replace(/%s/g,()=>s);const v=C2(l,L2.DEFAULT_TITLE);return s||v||void 0},qq=l=>C2(l,L2.ON_CHANGE_CLIENT_STATE)||(()=>{}),zC=(l,s)=>s.filter(d=>typeof d[l]<"u").map(d=>d[l]).reduce((d,v)=>({...d,...v}),{}),Aq=(l,s)=>s.filter(d=>typeof d.base<"u").map(d=>d.base).reverse().reduce((d,v)=>{if(!d.length){const x=Object.keys(v);for(let M=0;M<x.length;M+=1){const C=x[M].toLowerCase();if(l.indexOf(C)!==-1&&v[C])return d.concat(v)}}return d},[]),Hq=l=>console&&typeof console.warn=="function"&&console.warn(l),yc=(l,s,d)=>{const v={};return d.filter(x=>Array.isArray(x[l])?!0:(typeof x[l]<"u"&&Hq(`Helmet: ${l} should be of type "Array". Instead found type "${typeof x[l]}"`),!1)).map(x=>x[l]).reverse().reduce((x,M)=>{const w={};M.filter(_=>{let z;const T=Object.keys(_);for(let D=0;D<T.length;D+=1){const U=T[D],W=U.toLowerCase();s.indexOf(W)!==-1&&!(z==="rel"&&_[z].toLowerCase()==="canonical")&&!(W==="rel"&&_[W].toLowerCase()==="stylesheet")&&(z=W),s.indexOf(U)!==-1&&(U==="innerHTML"||U==="cssText"||U==="itemprop")&&(z=U)}if(!z||!_[z])return!1;const O=_[z].toLowerCase();return v[z]||(v[z]={}),w[z]||(w[z]={}),v[z][O]?!1:(w[z][O]=!0,!0)}).reverse().forEach(_=>x.push(_));const C=Object.keys(w);for(let _=0;_<C.length;_+=1){const z=C[_],T={...v[z],...w[z]};v[z]=T}return x},[]).reverse()},jq=(l,s)=>{if(Array.isArray(l)&&l.length){for(let d=0;d<l.length;d+=1)if(l[d][s])return!0}return!1},bq=l=>({baseTag:Aq(["href"],l),bodyAttributes:zC("bodyAttributes",l),defer:C2(l,L2.DEFER),encode:C2(l,L2.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:zC("htmlAttributes",l),linkTags:yc("link",["rel","href"],l),metaTags:yc("meta",["name","charset","http-equiv","property","itemprop"],l),noscriptTags:yc("noscript",["innerHTML"],l),onChangeClientState:qq(l),scriptTags:yc("script",["src","innerHTML"],l),styleTags:yc("style",["cssText"],l),title:zq(l),titleAttributes:zC("titleAttributes",l),prioritizeSeoTags:jq(l,L2.PRIORITIZE_SEO_TAGS)}),n$=l=>Array.isArray(l)?l.join(""):l,Pq=(l,s)=>{const d=Object.keys(l);for(let v=0;v<d.length;v+=1)if(s[d[v]]&&s[d[v]].includes(l[d[v]]))return!0;return!1},qC=(l,s)=>Array.isArray(l)?l.reduce((d,v)=>(Pq(v,s)?d.priority.push(v):d.default.push(v),d),{priority:[],default:[]}):{default:l,priority:[]},WN=(l,s)=>({...l,[s]:void 0}),Vq=["noscript","script","style"],HC=(l,s=!0)=>s===!1?String(l):String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),o$=l=>Object.keys(l).reduce((s,d)=>{const v=typeof l[d]<"u"?`${d}="${l[d]}"`:`${d}`;return s?`${s} ${v}`:v},""),Tq=(l,s,d,v)=>{const x=o$(d),M=n$(s);return x?`<${l} ${p1}="true" ${x}>${HC(M,v)}</${l}>`:`<${l} ${p1}="true">${HC(M,v)}</${l}>`},Dq=(l,s,d=!0)=>s.reduce((v,x)=>{const M=x,w=Object.keys(M).filter(z=>!(z==="innerHTML"||z==="cssText")).reduce((z,T)=>{const O=typeof M[T]>"u"?T:`${T}="${HC(M[T],d)}"`;return z?`${z} ${O}`:O},""),C=M.innerHTML||M.cssText||"",_=Vq.indexOf(l)===-1;return`${v}<${l} ${p1}="true" ${w}${_?"/>":`>${C}</${l}>`}`},""),a$=(l,s={})=>Object.keys(l).reduce((d,v)=>{const x=TC[v];return d[x||v]=l[v],d},s),Fq=(l,s,d)=>{const v={key:s,[p1]:!0},x=a$(d,v);return[tt.createElement("title",x,s)]},Pi=(l,s)=>s.map((d,v)=>{const x={key:v,[p1]:!0};return Object.keys(d).forEach(M=>{const C=TC[M]||M;if(C==="innerHTML"||C==="cssText"){const _=d.innerHTML||d.cssText;x.dangerouslySetInnerHTML={__html:_}}else x[C]=d[M]}),tt.createElement(l,x)}),a1=(l,s,d=!0)=>{switch(l){case"title":return{toComponent:()=>Fq(l,s.title,s.titleAttributes),toString:()=>Tq(l,s.title,s.titleAttributes,d)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>a$(s),toString:()=>o$(s)};default:return{toComponent:()=>Pi(l,s),toString:()=>Dq(l,s,d)}}},Rq=({metaTags:l,linkTags:s,scriptTags:d,encode:v})=>{const x=qC(l,$C.meta),M=qC(s,$C.link),w=qC(d,$C.script);return{priorityMethods:{toComponent:()=>[...Pi("meta",x.priority),...Pi("link",M.priority),...Pi("script",w.priority)],toString:()=>`${a1("meta",x.priority,v)} ${a1("link",M.priority,v)} ${a1("script",w.priority,v)}`},metaTags:x.default,linkTags:M.default,scriptTags:w.default}},Bq=l=>{const{baseTag:s,bodyAttributes:d,encode:v=!0,htmlAttributes:x,noscriptTags:M,styleTags:w,title:C="",titleAttributes:_,prioritizeSeoTags:z}=l;let{linkTags:T,metaTags:O,scriptTags:D}=l,U={toComponent:()=>{},toString:()=>""};return z&&({priorityMethods:U,linkTags:T,metaTags:O,scriptTags:D}=Rq(l)),{priority:U,base:a1("base",s,v),bodyAttributes:a1("bodyAttributes",d,v),htmlAttributes:a1("htmlAttributes",x,v),link:a1("link",T,v),meta:a1("meta",O,v),noscript:a1("noscript",M,v),script:a1("script",D,v),style:a1("style",w,v),title:a1("title",{title:C,titleAttributes:_},v)}},jC=Bq,bi=[],c$=!!(typeof window<"u"&&window.document&&window.document.createElement),bC=class{constructor(l,s){j1(this,"instances",[]);j1(this,"canUseDOM",c$);j1(this,"context");j1(this,"value",{setHelmet:l=>{this.context.helmet=l},helmetInstances:{get:()=>this.canUseDOM?bi:this.instances,add:l=>{(this.canUseDOM?bi:this.instances).push(l)},remove:l=>{const s=(this.canUseDOM?bi:this.instances).indexOf(l);(this.canUseDOM?bi:this.instances).splice(s,1)}}});this.context=l,this.canUseDOM=s||!1,s||(l.helmet=jC({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Eq={},i$=tt.createContext(Eq),Ka,r$=(Ka=class extends ue.Component{constructor(d){super(d);j1(this,"helmetData");this.helmetData=new bC(this.props.context||{},Ka.canUseDOM)}render(){return tt.createElement(i$.Provider,{value:this.helmetData.value},this.props.children)}},j1(Ka,"canUseDOM",c$),Ka),w2=(l,s)=>{const d=document.head||document.querySelector("head"),v=d.querySelectorAll(`${l}[${p1}]`),x=[].slice.call(v),M=[];let w;return s&&s.length&&s.forEach(C=>{const _=document.createElement(l);for(const z in C)if(Object.prototype.hasOwnProperty.call(C,z))if(z==="innerHTML")_.innerHTML=C.innerHTML;else if(z==="cssText")_.styleSheet?_.styleSheet.cssText=C.cssText:_.appendChild(document.createTextNode(C.cssText));else{const T=z,O=typeof C[T]>"u"?"":C[T];_.setAttribute(z,O)}_.setAttribute(p1,"true"),x.some((z,T)=>(w=T,_.isEqualNode(z)))?x.splice(w,1):M.push(_)}),x.forEach(C=>{var _;return(_=C.parentNode)==null?void 0:_.removeChild(C)}),M.forEach(C=>d.appendChild(C)),{oldTags:x,newTags:M}},PC=(l,s)=>{const d=document.getElementsByTagName(l)[0];if(!d)return;const v=d.getAttribute(p1),x=v?v.split(","):[],M=[...x],w=Object.keys(s);for(const C of w){const _=s[C]||"";d.getAttribute(C)!==_&&d.setAttribute(C,_),x.indexOf(C)===-1&&x.push(C);const z=M.indexOf(C);z!==-1&&M.splice(z,1)}for(let C=M.length-1;C>=0;C-=1)d.removeAttribute(M[C]);x.length===M.length?d.removeAttribute(p1):d.getAttribute(p1)!==w.join(",")&&d.setAttribute(p1,w.join(","))},Oq=(l,s)=>{typeof l<"u"&&document.title!==l&&(document.title=n$(l)),PC("title",s)},GN=(l,s)=>{const{baseTag:d,bodyAttributes:v,htmlAttributes:x,linkTags:M,metaTags:w,noscriptTags:C,onChangeClientState:_,scriptTags:z,styleTags:T,title:O,titleAttributes:D}=l;PC("body",v),PC("html",x),Oq(O,D);const U={baseTag:w2("base",d),linkTags:w2("link",M),metaTags:w2("meta",w),noscriptTags:w2("noscript",C),scriptTags:w2("script",z),styleTags:w2("style",T)},W={},X={};Object.keys(U).forEach(Z=>{const{newTags:ie,oldTags:fe}=U[Z];ie.length&&(W[Z]=ie),fe.length&&(X[Z]=U[Z].oldTags)}),s&&s(),_(l,W,X)},uc=null,Uq=l=>{uc&&cancelAnimationFrame(uc),l.defer?uc=requestAnimationFrame(()=>{GN(l,()=>{uc=null})}):(GN(l),uc=null)},Zq=Uq,XN=class extends ue.Component{constructor(){super(...arguments);j1(this,"rendered",!1)}shouldComponentUpdate(s){return!Nq(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:d}=this.props.context;let v=null;const x=bq(s.get().map(M=>{const w={...M.props};return delete w.context,w}));r$.canUseDOM?Zq(x):jC&&(v=jC(x)),d(v)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},AC,d$=(AC=class extends ue.Component{shouldComponentUpdate(l){return!wq(WN(this.props,"helmetData"),WN(l,"helmetData"))}mapNestedChildrenToProps(l,s){if(!s)return null;switch(l.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${l.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(l,s,d,v){return{...s,[l.type]:[...s[l.type]||[],{...d,...this.mapNestedChildrenToProps(l,v)}]}}mapObjectTypeChildren(l,s,d,v){switch(l.type){case"title":return{...s,[l.type]:v,titleAttributes:{...d}};case"body":return{...s,bodyAttributes:{...d}};case"html":return{...s,htmlAttributes:{...d}};default:return{...s,[l.type]:{...d}}}}mapArrayTypeChildrenToProps(l,s){let d={...s};return Object.keys(l).forEach(v=>{d={...d,[v]:l[v]}}),d}warnOnInvalidChildren(l,s){return ON(ZN.some(d=>l.type===d),typeof l.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ZN.join(", ")} are allowed. Helmet does not support rendering <${l.type}> elements. Refer to our API for more information.`),ON(!s||typeof s=="string"||Array.isArray(s)&&!s.some(d=>typeof d!="string"),`Helmet expects a string as a child of <${l.type}>. Did you forget to wrap your children in braces? ( <${l.type}>{\`\`}</${l.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(l,s){let d={};return tt.Children.forEach(l,v=>{if(!v||!v.props)return;const{children:x,...M}=v.props,w=Object.keys(M).reduce((_,z)=>(_[$q[z]||z]=M[z],_),{});let{type:C}=v;switch(typeof C=="symbol"?C=C.toString():this.warnOnInvalidChildren(v,x),C){case"Symbol(react.fragment)":s=this.mapChildrenToProps(x,s);break;case"link":case"meta":case"noscript":case"script":case"style":d=this.flattenArrayTypeChildren(v,d,w,x);break;default:s=this.mapObjectTypeChildren(v,s,w,x);break}}),this.mapArrayTypeChildrenToProps(d,s)}render(){const{children:l,...s}=this.props;let d={...s},{helmetData:v}=s;if(l&&(d=this.mapChildrenToProps(l,d)),v&&!(v instanceof bC)){const x=v;v=new bC(x.context,!0),delete d.helmetData}return v?tt.createElement(XN,{...d,context:v.value}):tt.createElement(i$.Consumer,null,x=>tt.createElement(XN,{...d,context:x}))}},j1(AC,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),AC);const l$="/martintogomez-taxi/images/logoa.png";function s$({language:l,setLanguage:s}){return u.jsxs("select",{value:l,onChange:d=>s(d.target.value),className:"bg-gray-800 text-yellow-500 px-2 py-1 rounded-md border border-yellow-500 text-sm","aria-label":"Select Language",children:[u.jsx("option",{value:"es",children:"ES"}),u.jsx("option",{value:"en",children:"EN"}),u.jsx("option",{value:"fr",children:"FR"}),u.jsx("option",{value:"de",children:"DE"})]})}const KN={en:{home:"Home",about:"About Us",mission:"Mission|Vision",services:"Services",contact:"Contact",language:"Language"},es:{home:"Inicio",about:"Sobre Nosotros",mission:"Misión|Vision",services:"Servicios",contact:"Contacto",language:"Idioma"},fr:{home:"Accueil",about:"À propos de nous",mission:"Mission|Vision",services:"Services",contact:"Contact",language:"Langue"},de:{home:"Startseite",about:"Über uns",mission:"Mission|Vision",services:"Dienstleistungen",contact:"Kontakt",language:"Sprache"}};function Wq({onOpenWizard:l}){const{language:s,setLanguage:d}=Qa(),v=KN[s]||KN.en,[x,M]=ue.useState(!1),w=()=>{M(!x)};return u.jsxs(u.Fragment,{children:[u.jsx(d$,{children:u.jsx("title",{children:"MG Taxi - Your Fast and Safe Ride"})}),u.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-[#1a1a1a] text-white p-4 flex items-center justify-between z-50 border-b-4 border-yellow-500",children:[u.jsxs("button",{className:"text-yellow-500 text-2xl focus:outline-none ml-4",onClick:w,"aria-expanded":x,"aria-label":"Abrir menú",children:[u.jsx("i",{className:`ri-menu-3-line ${x?"hidden":"block"}`}),u.jsx("i",{className:`ri-close-line ${x?"block":"hidden"}`})]}),u.jsx("div",{className:"text-lg font-bold text-yellow-500 absolute left-1/2 transform -translate-x-1/2",children:u.jsx("img",{src:l$,alt:"MG TAXI Logo",className:"h-10 mx-auto"})}),u.jsx("div",{className:"mr-4",children:u.jsx(s$,{language:s,setLanguage:d})})]}),u.jsxs("div",{className:`fixed top-16 left-0 bg-black text-white w-64 h-screen p-6 z-50 transition-transform duration-300 ease-in-out transform ${x?"translate-x-0":"-translate-x-full"}`,role:"menu","aria-label":"Menú desplegable",children:[u.jsx("a",{href:"#home",className:"block py-2 text-yellow-500",children:v.home}),u.jsx("a",{href:"#about_us",className:"block py-2",children:v.about}),u.jsx("a",{href:"#mission",className:"block py-2",children:v.mission}),u.jsx("a",{href:"#services",className:"block py-2",children:v.services}),u.jsx("a",{href:"#contact",className:"block py-2",children:v.contact})]})]})}const QN={en:{rights:"© 2025 Martingomez Taxi. All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service",language:"Language",contact:{phone:"Phone",email:"Email",address:"Address"}},es:{rights:"© 2025 Martingomez Taxi. Todos los derechos reservados.",privacy:"Política de Privacidad",terms:"Términos de Servicio",language:"Idioma",contact:{phone:"Teléfono",email:"Correo Electrónico",address:"Dirección"}},fr:{rights:"© 2025 Martingomez Taxi. Tous droits réservés.",privacy:"Politique de Confidentialité",terms:"Conditions d'utilisation",language:"Langue",contact:{phone:"Téléphone",email:"Email",address:"Adresse"}},de:{rights:"© 2025 Martingomez Taxi. Alle Rechte vorbehalten.",privacy:"Datenschutzrichtlinie",terms:"Nutzungsbedingungen",language:"Sprache",contact:{phone:"Telefon",email:"E-Mail",address:"Adresse"}}};function Gq(){const{language:l,setLanguage:s}=Qa(),d=QN[l]||QN.en;return u.jsx(u.Fragment,{children:u.jsx("footer",{className:"bg-black text-gray-400 py-8 mt-8 text-center",children:u.jsxs("div",{className:"container mx-auto px-4 flex flex-col items-center space-y-6",children:[u.jsx("img",{src:l$,alt:"Martingomez Taxi Logo",className:"w-24"}),u.jsxs("div",{className:"space-y-4 text-white ",children:[u.jsxs("p",{className:"flex items-center space-x-2",children:[u.jsx("i",{className:"ri-phone-fill text-yellow-500 text-lg"}),u.jsx("span",{children:"+41 75 5777 700"})]}),u.jsxs("p",{className:"flex items-center space-x-2",children:[u.jsx("i",{className:"ri-mail-fill text-yellow-500 text-lg"}),u.jsx("span",{children:"service@martintogomez-taxi.com"})]}),u.jsxs("p",{className:"flex items-center space-x-2",children:[u.jsx("i",{className:"ri-home-fill text-yellow-500 text-lg"}),u.jsx("span",{children:"1234 Bahnhofstrasse, Zurich, 8001 Switzerland"})]})]}),u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between w-full max-w-3xl border-t border-gray-600 pt-4",children:[u.jsx("p",{className:"text-sm",children:d.rights}),u.jsx(s$,{language:l,setLanguage:s})]})]})})})}const JN="/martintogomez-taxi/images/homebg-alfa2.webp",Xq={en:{Home:{title:{your:"YOUR",fast:"FAST",and:"AND",safe:"SAFE",ride:"RIDE"},subtitle:"Experience luxury transportation with Martinto Gomez Taxi",description:"Martinto Gomez Taxi offers premium luxury transportation services. Book your ride now for a seamless and elegant experience."}},de:{Home:{title:{your:"IHRE",fast:"SCHNELLE",and:"UND",safe:"SICHERE",ride:"FAHRT"},subtitle:"Erleben Sie Luxustransport mit Martinto Gomez Taxi",description:"Martinto Gomez Taxi bietet Premium-Luxustransportdienste an. Buchen Sie jetzt für ein nahtloses und elegantes Erlebnis."}},es:{Home:{title:{your:"SU",fast:"RÁPIDO",and:"Y",safe:"SEGURO",ride:"VIAJE"},subtitle:"Experimente el transporte de lujo con Martinto Gomez Taxi",description:"Martinto Gomez Taxi ofrece servicios de transporte de lujo premium. Reserve su viaje ahora para una experiencia fluida y elegante."}},fr:{Home:{title:{your:"VOTRE",fast:"RAPIDE",and:"ET",safe:"SÛR",ride:"TRAJET"},subtitle:"Découvrez le transport de luxe avec Martinto Gomez Taxi",description:"Martinto Gomez Taxi propose des services de transport de luxe haut de gamme. Réservez dès maintenant pour une expérience fluide et élégante."}}};function Kq(){const{language:l}=Qa(),s=M=>{const w=M.split(".");let C=Xq[l||"en"];return w.forEach(_=>C=C==null?void 0:C[_]),C||""},v={whatsapp:`https://wa.me/+41755777700?text=${encodeURIComponent("Hola, estoy interesado en su servicio de taxi.")}`,instagram:"https://instagram.com/martintogomez.taxi",facebook:"https://www.facebook.com/profile.php?id=61568516343141"},x=M=>{window.open(v[M],"_blank")};return u.jsxs(u.Fragment,{children:[u.jsxs(d$,{children:[u.jsxs("title",{children:[s("Home.subtitle")," | Martinto Gomez Taxi"]}),u.jsx("meta",{name:"description",content:s("Home.description")}),u.jsx("meta",{property:"og:title",content:s("Home.subtitle")}),u.jsx("meta",{property:"og:description",content:s("Home.description")}),u.jsx("meta",{property:"og:image",content:JN}),u.jsx("meta",{property:"og:url",content:"https://martintogomez-taxi.com"}),u.jsx("meta",{property:"og:type",content:"website"})]}),u.jsxs("section",{id:"home",className:"relative h-screen text-white flex items-center justify-center border-b-4 border-yellow-500 max-w-4xl mx-auto",children:[u.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-70",style:{backgroundImage:`url(${JN})`},role:"img","aria-label":"Luxury taxi service background"}),u.jsxs("div",{className:"relative z-10 text-center px-4 pb-[80px] max-w-2xl md:max-w-4xl",children:[u.jsxs("h1",{className:"text-5xl font-bold uppercase leading-tight tracking-wide",children:[u.jsx("div",{children:s("Home.title.your")}),u.jsx("div",{children:s("Home.title.fast")}),u.jsx("div",{children:s("Home.title.and")}),u.jsx("div",{children:s("Home.title.safe")}),u.jsx("div",{children:s("Home.title.ride")})]}),u.jsx("p",{className:"mt-6 text-lg md:text-xl lg:text-2xl",children:s("Home.subtitle")}),u.jsxs("div",{className:"mt-12 flex gap-6 justify-center",children:[u.jsx("button",{onClick:()=>x("whatsapp"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full hover:bg-green-600 transition duration-300",children:u.jsx("i",{className:"ri-whatsapp-line text-xl md:text-2xl lg:text-3xl text-white"})}),u.jsx("button",{onClick:()=>x("instagram"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300",children:u.jsx("i",{className:"ri-instagram-line text-xl md:text-2xl lg:text-3xl text-white"})}),u.jsx("button",{onClick:()=>x("facebook"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300",children:u.jsx("i",{className:"ri-facebook-circle-line text-xl md:text-2xl lg:text-3xl text-white"})})]})]}),u.jsxs("div",{className:"absolute bottom-10 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10",children:[u.jsx("span",{className:"text-xs md:text-sm font-bold",children:"SCROLL"}),u.jsx("i",{className:"ri-arrow-down-s-line animate-bounce mt-1 text-yellow-500 text-4xl "})]})]})]})}/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qq=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h$=(...l)=>l.filter((s,d,v)=>!!s&&s.trim()!==""&&v.indexOf(s)===d).join(" ").trim();/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y$=ue.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:v,className:x="",children:M,iconNode:w,...C},_)=>ue.createElement("svg",{ref:_,...Jq,width:s,height:s,stroke:l,strokeWidth:v?Number(d)*24/Number(s):d,className:h$("lucide",x),...C},[...w.map(([z,T])=>ue.createElement(z,T)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(l,s)=>{const d=ue.forwardRef(({className:v,...x},M)=>ue.createElement(y$,{ref:M,iconNode:s,className:h$(`lucide-${Qq(l)}`,v),...x}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yq=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]],Vi=n("AArrowDown",Yq);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]],Ti=n("AArrowUp",eA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]],Di=n("ALargeSmall",tA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],Fi=n("Accessibility",nA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ri=n("Activity",oA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]],Bi=n("AirVent",aA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]],Ei=n("Airplay",cA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],ft=n("AlarmClockCheck",iA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],Mt=n("AlarmClockMinus",rA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]],Oi=n("AlarmClockOff",dA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],mt=n("AlarmClockPlus",lA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]],Ui=n("AlarmClock",sA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]],Zi=n("AlarmSmoke",hA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]],Wi=n("Album",yA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]],Gi=n("AlignCenterHorizontal",uA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]],Xi=n("AlignCenterVertical",pA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Ki=n("AlignCenter",kA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]],Qi=n("AlignEndHorizontal",fA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]],Ji=n("AlignEndVertical",MA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],Yi=n("AlignHorizontalDistributeCenter",mA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]],er=n("AlignHorizontalDistributeEnd",vA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]],tr=n("AlignHorizontalDistributeStart",gA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],nr=n("AlignHorizontalJustifyCenter",xA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]],or=n("AlignHorizontalJustifyEnd",_A);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],ar=n("AlignHorizontalJustifyStart",wA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]],cr=n("AlignHorizontalSpaceAround",LA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]],ir=n("AlignHorizontalSpaceBetween",CA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]],rr=n("AlignJustify",IA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],dr=n("AlignLeft",SA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],lr=n("AlignRight",NA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]],sr=n("AlignStartHorizontal",$A);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],hr=n("AlignStartVertical",zA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],yr=n("AlignVerticalDistributeCenter",qA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],ur=n("AlignVerticalDistributeEnd",AA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]],pr=n("AlignVerticalDistributeStart",HA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],kr=n("AlignVerticalJustifyCenter",jA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]],fr=n("AlignVerticalJustifyEnd",bA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]],Mr=n("AlignVerticalJustifyStart",PA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]],mr=n("AlignVerticalSpaceAround",VA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]],vr=n("AlignVerticalSpaceBetween",TA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],gr=n("Ambulance",DA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]],xr=n("Ampersand",FA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]],_r=n("Ampersands",RA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]],wr=n("Amphora",BA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],Lr=n("Anchor",EA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],Cr=n("Angry",OA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]],Ir=n("Annoyed",UA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],Sr=n("Antenna",ZA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]],Nr=n("Anvil",WA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],$r=n("Aperture",GA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]],zr=n("AppWindowMac",XA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],qr=n("AppWindow",KA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],Ar=n("Apple",QA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]],Hr=n("ArchiveRestore",JA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]],jr=n("ArchiveX",YA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],br=n("Archive",eH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],Pr=n("Armchair",tH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]],Vr=n("ArrowBigDownDash",nH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]],Tr=n("ArrowBigDown",oH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]],Dr=n("ArrowBigLeftDash",aH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]],Fr=n("ArrowBigLeft",cH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]],Rr=n("ArrowBigRightDash",iH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]],Br=n("ArrowBigRight",rH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]],Er=n("ArrowBigUpDash",dH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]],Or=n("ArrowBigUp",lH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],Ur=n("ArrowDown01",sH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],Zr=n("ArrowDown10",hH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],vt=n("ArrowDownAZ",yH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]],Wr=n("ArrowDownFromLine",uH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],Gr=n("ArrowDownLeft",pH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Xr=n("ArrowDownNarrowWide",kH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Kr=n("ArrowDownRight",fH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],Qr=n("ArrowDownToDot",MH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Jr=n("ArrowDownToLine",mH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],Yr=n("ArrowDownUp",vH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]],gt=n("ArrowDownWideNarrow",gH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],xt=n("ArrowDownZA",xH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],e0=n("ArrowDown",_H);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]],t0=n("ArrowLeftFromLine",wH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],n0=n("ArrowLeftRight",LH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],o0=n("ArrowLeftToLine",CH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],a0=n("ArrowLeft",IH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]],c0=n("ArrowRightFromLine",SH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],i0=n("ArrowRightLeft",NH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],r0=n("ArrowRightToLine",$H);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],d0=n("ArrowRight",zH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],l0=n("ArrowUp01",qH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],s0=n("ArrowUp10",AH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],_t=n("ArrowUpAZ",HH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],h0=n("ArrowUpDown",jH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],y0=n("ArrowUpFromDot",bH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]],u0=n("ArrowUpFromLine",PH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]],p0=n("ArrowUpLeft",VH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],wt=n("ArrowUpNarrowWide",TH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],k0=n("ArrowUpRight",DH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],f0=n("ArrowUpToLine",FH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]],M0=n("ArrowUpWideNarrow",RH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],Lt=n("ArrowUpZA",BH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],m0=n("ArrowUp",EH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]],v0=n("ArrowsUpFromLine",OH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]],g0=n("Asterisk",UH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],x0=n("AtSign",ZH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],_0=n("Atom",WH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],w0=n("AudioLines",GH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],L0=n("AudioWaveform",XH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],C0=n("Award",KH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]],I0=n("Axe",QH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]],Ct=n("Axis3d",JH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],S0=n("Baby",YH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],N0=n("Backpack",ej);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$0=n("BadgeAlert",tj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]],z0=n("BadgeCent",nj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],It=n("BadgeCheck",oj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],q0=n("BadgeDollarSign",aj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],A0=n("BadgeEuro",cj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]],H0=n("BadgeHelp",ij);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]],j0=n("BadgeIndianRupee",rj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]],b0=n("BadgeInfo",dj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]],P0=n("BadgeJapaneseYen",lj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],V0=n("BadgeMinus",sj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],T0=n("BadgePercent",hj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],D0=n("BadgePlus",yj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]],F0=n("BadgePoundSterling",uj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]],R0=n("BadgeRussianRuble",pj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]],B0=n("BadgeSwissFranc",kj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],E0=n("BadgeX",fj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]],O0=n("Badge",Mj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]],U0=n("BaggageClaim",mj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],Z0=n("Ban",vj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]],W0=n("Banana",gj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v11.5",key:"dkbidh"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]],G0=n("Bandage",xj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],X0=n("Banknote",_j);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]],K0=n("Barcode",wj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]],Q0=n("Baseline",Lj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],J0=n("Bath",Cj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],Y0=n("BatteryCharging",Ij);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]],ed=n("BatteryFull",Sj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]],td=n("BatteryLow",Nj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]],nd=n("BatteryMedium",$j);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["path",{d:"M10 17h.01",key:"nbq80n"}],["path",{d:"M10 7v6",key:"nne03l"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1x5o8m"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"1mdjgh"}]],od=n("BatteryWarning",zj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],ad=n("Battery",qj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],cd=n("Beaker",Aj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],id=n("BeanOff",Hj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]],rd=n("Bean",jj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],dd=n("BedDouble",bj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]],ld=n("BedSingle",Pj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],sd=n("Bed",Vj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]],hd=n("Beef",Tj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]],yd=n("BeerOff",Dj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]],ud=n("Beer",Fj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]],pd=n("BellDot",Rj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]],kd=n("BellElectric",Bj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",key:"bdwj86"}]],fd=n("BellMinus",Ej);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],Md=n("BellOff",Oj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",key:"1abcvy"}]],md=n("BellPlus",Uj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],vd=n("BellRing",Zj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],gd=n("Bell",Wj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]],St=n("BetweenHorizontalEnd",Gj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]],Nt=n("BetweenHorizontalStart",Xj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]],xd=n("BetweenVerticalEnd",Kj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]],_d=n("BetweenVerticalStart",Qj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]],wd=n("BicepsFlexed",Jj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],Ld=n("Bike",Yj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Cd=n("Binary",eb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]],Id=n("Binoculars",tb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]],Sd=n("Biohazard",nb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Nd=n("Bird",ob);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],$d=n("Bitcoin",ab);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]],zd=n("Blend",cb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]],qd=n("Blinds",ib);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]],Ad=n("Blocks",rb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]],Hd=n("BluetoothConnected",db);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]],jd=n("BluetoothOff",lb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],bd=n("BluetoothSearching",sb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],Pd=n("Bluetooth",hb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],Vd=n("Bold",yb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],Td=n("Bolt",ub);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]],Dd=n("Bomb",pb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]],Fd=n("Bone",kb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]],Rd=n("BookA",fb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]],Bd=n("BookAudio",Mb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]],Ed=n("BookCheck",mb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]],Od=n("BookCopy",vb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]],$t=n("BookDashed",gb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]],Ud=n("BookDown",xb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],Zd=n("BookHeadphones",_b);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",key:"1t75a8"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Wd=n("BookHeart",wb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]],Gd=n("BookImage",Lb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"m19 3 1 1",key:"ze14oc"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1ocbpn"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}]],Xd=n("BookKey",Cb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]],Kd=n("BookLock",Ib);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Qd=n("BookMarked",Sb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Jd=n("BookMinus",Nb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],Yd=n("BookOpenCheck",$b);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]],el=n("BookOpenText",zb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],tl=n("BookOpen",qb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],nl=n("BookPlus",Ab);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],ol=n("BookText",Hb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],al=n("BookType",jb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],cl=n("BookUp2",bb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],il=n("BookUp",Pb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]],rl=n("BookUser",Vb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]],dl=n("BookX",Tb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],ll=n("Book",Db);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],sl=n("BookmarkCheck",Fb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],hl=n("BookmarkMinus",Rb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],yl=n("BookmarkPlus",Bb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],ul=n("BookmarkX",Eb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],pl=n("Bookmark",Ob);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]],kl=n("BoomBox",Ub);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]],fl=n("BotMessageSquare",Zb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]],Ml=n("BotOff",Wb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ml=n("Bot",Gb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],vl=n("Box",Xb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],gl=n("Boxes",Kb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],zt=n("Braces",Qb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]],xl=n("Brackets",Jb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],_l=n("BrainCircuit",Yb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]],wl=n("BrainCog",eP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ll=n("Brain",tP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]],Cl=n("BrickWall",nP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],pc=n("BriefcaseBusiness",oP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M10 20v2",key:"1n8e1g"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M18 20v2",key:"10uadw"}],["path",{d:"M21 20H3",key:"kdqkdp"}],["path",{d:"M6 20v2",key:"a9bc87"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",key:"17n9tx"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2",key:"1097i5"}]],Il=n("BriefcaseConveyorBelt",aP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Sl=n("BriefcaseMedical",cP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Nl=n("Briefcase",iP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]],$l=n("BringToFront",rP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]],zl=n("Brush",dP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]],ql=n("BugOff",lP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]],Al=n("BugPlay",sP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],Hl=n("Bug",hP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],jl=n("Building2",yP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],bl=n("Building",uP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]],Pl=n("BusFront",pP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],Vl=n("Bus",kP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Tl=n("CableCar",fP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]],Dl=n("Cable",MP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]],Fl=n("CakeSlice",mP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],Rl=n("Cake",vP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Bl=n("Calculator",gP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],El=n("Calendar1",xP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 14v8",key:"irew45"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",key:"bse4f3"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Ol=n("CalendarArrowDown",_P);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 22v-8",key:"su0gjh"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",key:"1exg90"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Ul=n("CalendarArrowUp",wP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],Zl=n("CalendarCheck2",LP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Wl=n("CalendarCheck",CP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Gl=n("CalendarClock",IP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"11kmuh"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Xl=n("CalendarCog",SP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Kl=n("CalendarDays",NP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]],Ql=n("CalendarFold",$P);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]],Jl=n("CalendarHeart",zP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]],Yl=n("CalendarMinus2",qP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1scpom"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],es=n("CalendarMinus",AP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ts=n("CalendarOff",HP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]],ns=n("CalendarPlus2",jP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]],os=n("CalendarPlus",bP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],as=n("CalendarRange",PP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",key:"1jrsq6"}],["path",{d:"m22 22-1.875-1.875",key:"13zax7"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],cs=n("CalendarSearch",VP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M11 10v4h4",key:"172dkj"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"vu0qm5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"1qgeyt"}],["path",{d:"M21 22v-4h-4",key:"hrummi"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",key:"mctw84"}],["path",{d:"M3 10h4",key:"1el30a"}],["path",{d:"M8 2v4",key:"1cmpym"}]],is=n("CalendarSync",TP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]],rs=n("CalendarX2",DP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]],ds=n("CalendarX",FP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ls=n("Calendar",RP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]],ss=n("CameraOff",BP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],hs=n("Camera",EP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]],ys=n("CandyCane",OP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],us=n("CandyOff",UP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]],ps=n("Candy",ZP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]],ks=n("Cannabis",WP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]],fs=n("CaptionsOff",GP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],qt=n("Captions",XP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],Ms=n("CarFront",KP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],kc=n("CarTaxiFront",QP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],fc=n("Car",JP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]],ms=n("Caravan",YP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]],vs=n("Carrot",eV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]],gs=n("CaseLower",tV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]],xs=n("CaseSensitive",nV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]],_s=n("CaseUpper",oV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]],ws=n("CassetteTape",aV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]],Ls=n("Cast",cV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]],Cs=n("Castle",iV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],Is=n("Cat",rV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]],Ss=n("Cctv",dV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]],At=n("ChartArea",lV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],Ht=n("ChartBarBig",sV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]],Ns=n("ChartBarDecreasing",hV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]],$s=n("ChartBarIncreasing",yV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],zs=n("ChartBarStacked",uV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]],jt=n("ChartBar",pV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],bt=n("ChartCandlestick",kV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],Pt=n("ChartColumnBig",fV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]],qs=n("ChartColumnDecreasing",MV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Vt=n("ChartColumnIncreasing",mV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],As=n("ChartColumnStacked",vV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Tt=n("ChartColumn",gV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]],Hs=n("ChartGantt",xV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],Dt=n("ChartLine",_V);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]],js=n("ChartNetwork",wV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M12 20V10",key:"g8npz5"}],["path",{d:"M18 20v-4",key:"8uic4z"}],["path",{d:"M6 20V4",key:"1w1bmo"}]],bs=n("ChartNoAxesColumnDecreasing",LV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],Ft=n("ChartNoAxesColumnIncreasing",CV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],Rt=n("ChartNoAxesColumn",IV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]],Ps=n("ChartNoAxesCombined",SV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],Bt=n("ChartNoAxesGantt",NV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Et=n("ChartPie",$V);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],Ot=n("ChartScatter",zV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]],Vs=n("ChartSpline",qV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Ts=n("CheckCheck",AV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ds=n("Check",HV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Fs=n("ChefHat",jV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]],Rs=n("Cherry",bV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Bs=n("ChevronDown",PV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],Es=n("ChevronFirst",VV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],Os=n("ChevronLast",TV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Us=n("ChevronLeft",DV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Zs=n("ChevronRight",FV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ws=n("ChevronUp",RV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]],Gs=n("ChevronsDownUp",BV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],Xs=n("ChevronsDown",EV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Ks=n("ChevronsLeftRightEllipsis",OV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]],Qs=n("ChevronsLeftRight",UV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Js=n("ChevronsLeft",ZV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]],Ys=n("ChevronsRightLeft",WV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],eh=n("ChevronsRight",GV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],th=n("ChevronsUpDown",XV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],nh=n("ChevronsUp",KV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]],oh=n("Chrome",QV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],ah=n("Church",JV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],ch=n("CigaretteOff",YV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],ih=n("Cigarette",eT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ut=n("CircleAlert",tT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],Zt=n("CircleArrowDown",nT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]],Wt=n("CircleArrowLeft",oT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]],Gt=n("CircleArrowOutDownLeft",aT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]],Xt=n("CircleArrowOutDownRight",cT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]],Kt=n("CircleArrowOutUpLeft",iT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]],Qt=n("CircleArrowOutUpRight",rT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],Jt=n("CircleArrowRight",dT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],Yt=n("CircleArrowUp",lT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],en=n("CircleCheckBig",sT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tn=n("CircleCheck",hT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],nn=n("CircleChevronDown",yT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],on=n("CircleChevronLeft",uT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],an=n("CircleChevronRight",pT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],cn=n("CircleChevronUp",kT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]],rh=n("CircleDashed",fT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rn=n("CircleDivide",MT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],dh=n("CircleDollarSign",mT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],lh=n("CircleDotDashed",vT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],sh=n("CircleDot",gT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],hh=n("CircleEllipsis",xT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yh=n("CircleEqual",_T);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],uh=n("CircleFadingArrowUp",wT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],ph=n("CircleFadingPlus",LT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]],dn=n("CircleGauge",CT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ln=n("CircleHelp",IT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]],sn=n("CircleMinus",ST);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]],kh=n("CircleOff",NT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]],hn=n("CircleParkingOff",$T);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],yn=n("CircleParking",zT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],un=n("CirclePause",qT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],pn=n("CirclePercent",AT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],kn=n("CirclePlay",HT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],fn=n("CirclePlus",jT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mn=n("CirclePower",bT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]],mn=n("CircleSlash2",PT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],fh=n("CircleSlash",VT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],vn=n("CircleStop",TT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],gn=n("CircleUserRound",DT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],xn=n("CircleUser",FT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],_n=n("CircleX",RT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mh=n("Circle",BT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],mh=n("CircuitBoard",ET);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]],vh=n("Citrus",OT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],gh=n("Clapperboard",UT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],xh=n("ClipboardCheck",ZT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]],_h=n("ClipboardCopy",WT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],wh=n("ClipboardList",GT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]],Lh=n("ClipboardMinus",XT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]],Ch=n("ClipboardPaste",KT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]],wn=n("ClipboardPenLine",QT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],Ln=n("ClipboardPen",JT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]],Ih=n("ClipboardPlus",YT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]],Sh=n("ClipboardType",eD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]],Nh=n("ClipboardX",tD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],$h=n("Clipboard",nD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]],zh=n("Clock1",oD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]],qh=n("Clock10",aD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]],Ah=n("Clock11",cD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]],Hh=n("Clock12",iD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]],jh=n("Clock2",rD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],bh=n("Clock3",dD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Ph=n("Clock4",lD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]],Vh=n("Clock5",sD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]],Th=n("Clock6",hD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]],Dh=n("Clock7",yD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]],Fh=n("Clock8",uD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]],Rh=n("Clock9",pD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516",key:"cxo92l"}],["path",{d:"M20 11.5v6",key:"2ei3xq"}],["path",{d:"M20 21.5h.01",key:"1r2dzp"}]],Bh=n("ClockAlert",kD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227",key:"1i7shu"}],["path",{d:"M12 6v6l2 1",key:"19cm8n"}],["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M18 14v8",key:"irew45"}]],Eh=n("ClockArrowDown",fD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338",key:"1fzlyi"}],["path",{d:"M12 6v6l1.562.781",key:"1ujuk9"}],["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M18 22v-8",key:"su0gjh"}]],Oh=n("ClockArrowUp",MD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Mc=n("Clock",mD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["path",{d:"M12 12v4",key:"tww15h"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",key:"xsb5ju"}]],Uh=n("CloudAlert",vD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]],Zh=n("CloudCog",gD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],Cn=n("CloudDownload",xD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]],Wh=n("CloudDrizzle",_D);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]],Gh=n("CloudFog",wD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]],Xh=n("CloudHail",LD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],Kh=n("CloudLightning",CD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M7 19v2",key:"12npes"}]],Qh=n("CloudMoonRain",ID);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}]],Jh=n("CloudMoon",SD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]],Yh=n("CloudOff",ND);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]],ey=n("CloudRainWind",$D);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],ty=n("CloudRain",zD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]],ny=n("CloudSnow",qD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]],oy=n("CloudSunRain",AD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]],ay=n("CloudSun",HD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],In=n("CloudUpload",jD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],cy=n("Cloud",bD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]],iy=n("Cloudy",PD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]],ry=n("Clover",VD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]],dy=n("Club",TD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Sn=n("CodeXml",DD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],ly=n("Code",FD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]],sy=n("Codepen",RD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]],hy=n("Codesandbox",BD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],yy=n("Coffee",ED);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]],uy=n("Cog",OD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],py=n("Coins",UD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Nn=n("Columns2",ZD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$n=n("Columns3",WD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]],ky=n("Columns4",GD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]],fy=n("Combine",XD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],My=n("Command",KD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],my=n("Compass",QD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],vy=n("Component",JD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],gy=n("Computer",YD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eF=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]],xy=n("ConciergeBell",eF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]],_y=n("Cone",tF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],wy=n("Construction",nF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],zn=n("ContactRound",oF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],Ly=n("Contact",aF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],Cy=n("Container",cF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],Iy=n("Contrast",iF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Sy=n("Cookie",rF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dF=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]],Ny=n("CookingPot",dF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$y=n("CopyCheck",lF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sF=[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zy=n("CopyMinus",sF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hF=[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],qy=n("CopyPlus",hF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ay=n("CopySlash",yF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Hy=n("CopyX",uF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pF=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jy=n("Copy",pF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]],by=n("Copyleft",kF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]],Py=n("Copyright",fF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MF=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],Vy=n("CornerDownLeft",MF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mF=[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],Ty=n("CornerDownRight",mF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vF=[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]],Dy=n("CornerLeftDown",vF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gF=[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]],Fy=n("CornerLeftUp",gF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]],Ry=n("CornerRightDown",xF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]],By=n("CornerRightUp",_F);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wF=[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]],Ey=n("CornerUpLeft",wF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LF=[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]],Oy=n("CornerUpRight",LF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CF=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Uy=n("Cpu",CF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]],Zy=n("CreativeCommons",IF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SF=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Wy=n("CreditCard",SF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NF=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]],Gy=n("Croissant",NF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $F=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],Xy=n("Crop",$F);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zF=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],Ky=n("Cross",zF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Qy=n("Crosshair",qF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AF=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Jy=n("Crown",AF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HF=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]],Yy=n("Cuboid",HF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jF=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]],eu=n("CupSoda",jF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bF=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]],tu=n("Currency",bF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PF=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],nu=n("Cylinder",PF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VF=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]],ou=n("Dam",VF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TF=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]],au=n("DatabaseBackup",TF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DF=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]],cu=n("DatabaseZap",DF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FF=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],iu=n("Database",FF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RF=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]],ru=n("Delete",RF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BF=[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]],du=n("Dessert",BF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EF=[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]],lu=n("Diameter",EF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OF=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],su=n("DiamondMinus",OF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UF=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]],qn=n("DiamondPercent",UF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZF=[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],hu=n("DiamondPlus",ZF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WF=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],yu=n("Diamond",WF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],uu=n("Dice1",GF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]],pu=n("Dice2",XF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ku=n("Dice3",KF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]],fu=n("Dice4",QF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],Mu=n("Dice5",JF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],mu=n("Dice6",YF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],vu=n("Dices",eR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]],gu=n("Diff",tR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],xu=n("Disc2",nR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],_u=n("Disc3",oR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],wu=n("DiscAlbum",aR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Lu=n("Disc",cR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]],Cu=n("Divide",iR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]],Iu=n("DnaOff",rR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],Su=n("Dna",dR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]],Nu=n("Dock",lR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],$u=n("Dog",sR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],zu=n("DollarSign",hR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qu=n("Donut",yR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]],Au=n("DoorClosed",uR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]],Hu=n("DoorOpen",pR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],ju=n("Dot",kR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],bu=n("Download",fR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]],Pu=n("DraftingCompass",MR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]],Vu=n("Drama",mR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Tu=n("Dribbble",vR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]],Du=n("Drill",gR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",key:"8suz2t"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",key:"19dw9m"}]],Fu=n("DropletOff",xR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Ru=n("Droplet",_R);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Bu=n("Droplets",wR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]],Eu=n("Drum",LR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]],Ou=n("Drumstick",CR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]],Uu=n("Dumbbell",IR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Zu=n("EarOff",SR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]],Wu=n("Ear",NR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],Gu=n("EarthLock",$R);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],An=n("Earth",zR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]],Xu=n("Eclipse",qR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]],Ku=n("EggFried",AR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Qu=n("EggOff",HR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]],Ju=n("Egg",jR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Hn=n("EllipsisVertical",bR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],jn=n("Ellipsis",PR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]],Yu=n("EqualApproximately",VR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]],ep=n("EqualNot",TR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]],tp=n("Equal",DR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]],np=n("Eraser",FR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",key:"rbahqx"}],["path",{d:"M6 8v1",key:"1636ez"}],["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}]],op=n("EthernetPort",RR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]],ap=n("Euro",BR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]],cp=n("Expand",ER);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ip=n("ExternalLink",OR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],rp=n("EyeClosed",UR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],dp=n("EyeOff",ZR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lp=n("Eye",WR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],sp=n("Facebook",GR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]],hp=n("Factory",XR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]],yp=n("Fan",KR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],up=n("FastForward",QR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],pp=n("Feather",JR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]],kp=n("Fence",YR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eB=[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]],fp=n("FerrisWheel",eB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tB=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],Mp=n("Figma",tB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nB=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],mp=n("FileArchive",nB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]],vp=n("FileAudio2",oB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]],gp=n("FileAudio",aB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]],bn=n("FileAxis3d",cB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]],xp=n("FileBadge2",iB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rB=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]],_p=n("FileBadge",rB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]],wp=n("FileBox",dB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]],Pn=n("FileChartColumnIncreasing",lB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]],Vn=n("FileChartColumn",sB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]],Tn=n("FileChartLine",hB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]],Dn=n("FileChartPie",yB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Lp=n("FileCheck2",uB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Cp=n("FileCheck",pB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kB=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],Ip=n("FileClock",kB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Sp=n("FileCode2",fB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],Np=n("FileCode",MB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3.2 12.9-.9-.4",key:"1i3dj5"}],["path",{d:"m3.2 15.1-.9.4",key:"1fvgj0"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",key:"1yo3oz"}],["path",{d:"m4.9 11.2-.4-.9",key:"otmhb9"}],["path",{d:"m4.9 16.8-.4.9",key:"1b8z07"}],["path",{d:"m7.5 10.3-.4.9",key:"11k65u"}],["path",{d:"m7.5 17.7-.4-.9",key:"431x55"}],["path",{d:"m9.7 12.5-.9.4",key:"87sjan"}],["path",{d:"m9.7 15.5-.9-.4",key:"khqm91"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]],Fn=n("FileCog",mB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]],$p=n("FileDiff",vB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]],zp=n("FileDigit",gB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],qp=n("FileDown",xB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]],Ap=n("FileHeart",_B);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],Hp=n("FileImage",wB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],jp=n("FileInput",LB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]],bp=n("FileJson2",CB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],Pp=n("FileJson",IB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]],Vp=n("FileKey2",SB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]],Tp=n("FileKey",NB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]],Dp=n("FileLock2",$B);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]],Fp=n("FileLock",zB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]],Rp=n("FileMinus2",qB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]],Bp=n("FileMinus",AB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HB=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",key:"1d3kfm"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}],["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}]],Ep=n("FileMusic",HB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]],Op=n("FileOutput",jB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bB=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]],Rn=n("FilePenLine",bB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],Bn=n("FilePen",PB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Up=n("FilePlus2",VB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],Zp=n("FilePlus",TB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DB=[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],Wp=n("FileQuestion",DB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]],Gp=n("FileScan",FB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],Xp=n("FileSearch2",RB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Kp=n("FileSearch",BB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]],Qp=n("FileSliders",EB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Jp=n("FileSpreadsheet",OB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UB=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]],Yp=n("FileStack",UB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]],e4=n("FileSymlink",ZB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]],t4=n("FileTerminal",WB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],n4=n("FileText",GB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]],o4=n("FileType2",XB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]],a4=n("FileType",KB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],c4=n("FileUp",QB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],i4=n("FileUser",JB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]],r4=n("FileVideo2",YB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]],d4=n("FileVideo",eE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]],l4=n("FileVolume2",tE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",key:"ifyjnl"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",key:"mk8rxu"}]],s4=n("FileVolume",nE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],h4=n("FileWarning",oE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]],y4=n("FileX2",aE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]],u4=n("FileX",cE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],p4=n("File",iE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]],k4=n("Files",rE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],f4=n("Film",dE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],M4=n("FilterX",lE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],m4=n("Filter",sE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],v4=n("Fingerprint",hE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]],g4=n("FireExtinguisher",yE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]],x4=n("FishOff",uE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]],_4=n("FishSymbol",pE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],w4=n("Fish",kE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],L4=n("FlagOff",fE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]],C4=n("FlagTriangleLeft",ME);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]],I4=n("FlagTriangleRight",mE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],S4=n("Flag",vE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]],N4=n("FlameKindling",gE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],$4=n("Flame",xE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],z4=n("FlashlightOff",_E);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]],q4=n("Flashlight",wE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",key:"k0duyd"}],["path",{d:"M6.453 15H15",key:"1f0z33"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],A4=n("FlaskConicalOff",LE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],H4=n("FlaskConical",CE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2",key:"1s42pc"}],["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],j4=n("FlaskRound",IE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],b4=n("FlipHorizontal2",SE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],P4=n("FlipHorizontal",NE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],V4=n("FlipVertical2",$E);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],T4=n("FlipVertical",zE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],D4=n("Flower2",qE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]],F4=n("Flower",AE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],R4=n("Focus",HE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]],B4=n("FoldHorizontal",jE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]],E4=n("FoldVertical",bE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]],O4=n("FolderArchive",PE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],U4=n("FolderCheck",VE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]],Z4=n("FolderClock",TE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],W4=n("FolderClosed",DE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],G4=n("FolderCode",FE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]],En=n("FolderCog",RE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]],X4=n("FolderDot",BE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]],K4=n("FolderDown",EE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Q4=n("FolderGit2",OE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]],J4=n("FolderGit",UE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"wpff58"}]],Y4=n("FolderHeart",ZE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],ek=n("FolderInput",WE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],tk=n("FolderKanban",GE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]],nk=n("FolderKey",XE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]],ok=n("FolderLock",KE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ak=n("FolderMinus",QE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]],ck=n("FolderOpenDot",JE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ik=n("FolderOpen",YE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]],rk=n("FolderOutput",eO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]],On=n("FolderPen",tO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],dk=n("FolderPlus",nO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]],lk=n("FolderRoot",oO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]],sk=n("FolderSearch2",aO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]],hk=n("FolderSearch",cO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]],yk=n("FolderSymlink",iO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],uk=n("FolderSync",rO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],pk=n("FolderTree",dO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]],kk=n("FolderUp",lO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]],fk=n("FolderX",sO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Mk=n("Folder",hO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]],mk=n("Folders",yO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],vk=n("Footprints",uO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]],gk=n("Forklift",pO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]],xk=n("Forward",kO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],_k=n("Frame",fO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]],wk=n("Framer",MO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Lk=n("Frown",mO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]],Ck=n("Fuel",vO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]],Ik=n("Fullscreen",gO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]],Sk=n("GalleryHorizontalEnd",xO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]],Nk=n("GalleryHorizontal",_O);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]],$k=n("GalleryThumbnails",wO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]],zk=n("GalleryVerticalEnd",LO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]],qk=n("GalleryVertical",CO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Ak=n("Gamepad2",IO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Hk=n("Gamepad",SO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],jk=n("Gauge",NO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],bk=n("Gavel",$O);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Pk=n("Gem",zO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],Vk=n("Ghost",qO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Tk=n("Gift",AO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Dk=n("GitBranchPlus",HO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Fk=n("GitBranch",jO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Un=n("GitCommitHorizontal",bO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]],Rk=n("GitCommitVertical",PO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]],Bk=n("GitCompareArrows",VO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],Ek=n("GitCompare",TO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],Ok=n("GitFork",DO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]],Uk=n("GitGraph",FO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Zk=n("GitMerge",RO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]],Wk=n("GitPullRequestArrow",BO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Gk=n("GitPullRequestClosed",EO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]],Xk=n("GitPullRequestCreateArrow",OO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Kk=n("GitPullRequestCreate",UO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Qk=n("GitPullRequestDraft",ZO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Jk=n("GitPullRequest",WO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Yk=n("Github",GO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]],e5=n("Gitlab",XO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]],t5=n("GlassWater",KO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]],n5=n("Glasses",QO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],o5=n("GlobeLock",JO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],a5=n("Globe",YO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eU=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],c5=n("Goal",eU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tU=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"edstyy"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"19wdwo"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"1lugqo"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1hbeus"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"1etffm"}]],i5=n("Grab",tU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nU=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],r5=n("GraduationCap",nU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oU=[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]],d5=n("Grape",oU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],Zn=n("Grid2x2Check",aU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]],Wn=n("Grid2x2Plus",cU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]],Gn=n("Grid2x2X",iU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rU=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Xn=n("Grid2x2",rU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dU=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],w1=n("Grid3x3",dU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lU=[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]],l5=n("GripHorizontal",lU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sU=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],s5=n("GripVertical",sU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hU=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],h5=n("Grip",hU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yU=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]],y5=n("Group",yU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uU=[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z",key:"1u8q3z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}]],u5=n("Guitar",uU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pU=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]],p5=n("Ham",pU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kU=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],k5=n("Hammer",kU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fU=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]],f5=n("HandCoins",fU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MU=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]],M5=n("HandHeart",MU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mU=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]],Kn=n("HandHelping",mU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vU=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]],m5=n("HandMetal",vU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gU=[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",key:"n2g93r"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2",key:"1o2jem"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M5 10a7 7 0 0 1 14 0",key:"1ega1o"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2",key:"1hescx"}]],v5=n("HandPlatter",gU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xU=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],g5=n("Hand",xU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _U=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],x5=n("Handshake",_U);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wU=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],_5=n("HardDriveDownload",wU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LU=[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],w5=n("HardDriveUpload",LU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CU=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],L5=n("HardDrive",CU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IU=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],C5=n("HardHat",IU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SU=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],I5=n("Hash",SU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NU=[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]],S5=n("Haze",NU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $U=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]],N5=n("HdmiPort",$U);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]],$5=n("Heading1",zU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]],z5=n("Heading2",qU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]],q5=n("Heading3",AU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HU=[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]],A5=n("Heading4",HU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]],H5=n("Heading5",jU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]],j5=n("Heading6",bU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PU=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],b5=n("Heading",PU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VU=[["path",{d:"M21 14h-1.343",key:"1jdnxi"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343",key:"6kipu2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",key:"9x50f4"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",key:"1bkxnm"}]],P5=n("HeadphoneOff",VU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TU=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],V5=n("Headphones",TU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DU=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],T5=n("Headset",DU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]],D5=n("HeartCrack",FU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],F5=n("HeartHandshake",RU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BU=[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]],R5=n("HeartOff",BU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],B5=n("HeartPulse",EU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],E5=n("Heart",OU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UU=[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]],O5=n("Heater",UU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZU=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],U5=n("Hexagon",ZU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WU=[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]],Z5=n("Highlighter",WU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GU=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],W5=n("History",GU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XU=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],G5=n("HopOff",XU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]],X5=n("Hop",KU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]],K5=n("Hospital",QU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],mc=n("Hotel",JU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]],Q5=n("Hourglass",YU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eZ=[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"1gvg2z"}]],J5=n("HousePlug",eZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tZ=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354",key:"5phn05"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 3v6",key:"x1uolp"}]],Y5=n("HousePlus",tZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nZ=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]],e3=n("HouseWifi",nZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oZ=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Qn=n("House",oZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aZ=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]],Jn=n("IceCreamBowl",aZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cZ=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]],Yn=n("IceCreamCone",cZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iZ=[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]],t3=n("IdCard",iZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rZ=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],n3=n("ImageDown",rZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dZ=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],o3=n("ImageMinus",dZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lZ=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],a3=n("ImageOff",lZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sZ=[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],c3=n("ImagePlay",sZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hZ=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],i3=n("ImagePlus",hZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yZ=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],r3=n("ImageUp",yZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uZ=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2",key:"130fy9"}],["path",{d:"M21 12v3",key:"1wzk3p"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2",key:"kk3yz1"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",key:"fyekpt"}],["path",{d:"M9 3h3",key:"d52fa"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1",key:"1wpmix"}]],d3=n("ImageUpscale",uZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],l3=n("Image",pZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kZ=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]],s3=n("Images",kZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fZ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]],h3=n("Import",fZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MZ=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],y3=n("Inbox",MZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mZ=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]],eo=n("IndentDecrease",mZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vZ=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]],to=n("IndentIncrease",vZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gZ=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],u3=n("IndianRupee",gZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xZ=[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]],p3=n("Infinity",xZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],k3=n("Info",_Z);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]],f3=n("InspectionPanel",wZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LZ=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],M3=n("Instagram",LZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CZ=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],m3=n("Italic",CZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IZ=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]],v3=n("IterationCcw",IZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SZ=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]],g3=n("IterationCw",SZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NZ=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]],x3=n("JapaneseYen",NZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Z=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],_3=n("Joystick",$Z);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zZ=[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]],w3=n("Kanban",zZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qZ=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],L3=n("KeyRound",qZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AZ=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]],C3=n("KeySquare",AZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HZ=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],I3=n("Key",HZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jZ=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]],S3=n("KeyboardMusic",jZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bZ=[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]],N3=n("KeyboardOff",bZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PZ=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],$3=n("Keyboard",PZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VZ=[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]],z3=n("LampCeiling",VZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TZ=[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]],q3=n("LampDesk",TZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DZ=[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]],A3=n("LampFloor",DZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FZ=[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]],H3=n("LampWallDown",FZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RZ=[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]],j3=n("LampWallUp",RZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BZ=[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]],b3=n("Lamp",BZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EZ=[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]],P3=n("LandPlot",EZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OZ=[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]],V3=n("Landmark",OZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UZ=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],T3=n("Languages",UZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZZ=[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]],D3=n("LaptopMinimalCheck",ZZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WZ=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]],no=n("LaptopMinimal",WZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GZ=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],F3=n("Laptop",GZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XZ=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]],R3=n("LassoSelect",XZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KZ=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]],B3=n("Lasso",KZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QZ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],E3=n("Laugh",QZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JZ=[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]],O3=n("Layers2",JZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YZ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],oo=n("Layers",YZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eW=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],U3=n("LayoutDashboard",eW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tW=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Z3=n("LayoutGrid",tW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nW=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],W3=n("LayoutList",nW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oW=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],G3=n("LayoutPanelLeft",oW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aW=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],X3=n("LayoutPanelTop",aW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cW=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],K3=n("LayoutTemplate",cW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iW=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Q3=n("Leaf",iW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rW=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]],J3=n("LeafyGreen",rW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dW=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]],Y3=n("Lectern",dW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lW=[["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",key:"blevx4"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M4 11h6",key:"olkgv1"}]],e6=n("LetterText",lW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sW=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]],t6=n("LibraryBig",sW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hW=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],n6=n("Library",hW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yW=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],o6=n("LifeBuoy",yW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uW=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]],a6=n("Ligature",uW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pW=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],c6=n("LightbulbOff",pW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kW=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],i6=n("Lightbulb",kW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fW=[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],r6=n("Link2Off",fW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MW=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],d6=n("Link2",MW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mW=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],l6=n("Link",mW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vW=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],s6=n("Linkedin",vW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gW=[["path",{d:"M11 18H3",key:"n3j2dh"}],["path",{d:"m15 18 2 2 4-4",key:"1szwhi"}],["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}]],h6=n("ListCheck",gW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xW=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],y6=n("ListChecks",xW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _W=[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]],u6=n("ListCollapse",_W);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wW=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]],p6=n("ListEnd",wW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LW=[["path",{d:"M10 18h4",key:"1ulq68"}],["path",{d:"M11 6H3",key:"1u26ik"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 9V3",key:"xwwp7m"}],["path",{d:"M7 12h8",key:"7a1bxv"}]],k6=n("ListFilterPlus",LW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]],f6=n("ListFilter",CW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IW=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],M6=n("ListMinus",IW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SW=[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]],m6=n("ListMusic",SW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NW=[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]],v6=n("ListOrdered",NW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $W=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],g6=n("ListPlus",$W);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zW=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]],x6=n("ListRestart",zW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qW=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]],_6=n("ListStart",qW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AW=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],w6=n("ListTodo",AW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HW=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],L6=n("ListTree",HW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jW=[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]],C6=n("ListVideo",jW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bW=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]],I6=n("ListX",bW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PW=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],S6=n("List",PW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VW=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ao=n("LoaderCircle",VW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TW=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],N6=n("LoaderPinwheel",TW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DW=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],$6=n("Loader",DW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],z6=n("LocateFixed",FW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],q6=n("LocateOff",RW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]],A6=n("Locate",BW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EW=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]],co=n("LockKeyholeOpen",EW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OW=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],H6=n("LockKeyhole",OW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UW=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],io=n("LockOpen",UW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZW=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],j6=n("Lock",ZW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WW=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],b6=n("LogIn",WW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GW=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],P6=n("LogOut",GW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XW=[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]],V6=n("Logs",XW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KW=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]],T6=n("Lollipop",KW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QW=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]],D6=n("Luggage",QW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JW=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]],F6=n("Magnet",JW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YW=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],R6=n("MailCheck",YW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eG=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]],B6=n("MailMinus",eG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tG=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],E6=n("MailOpen",tG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nG=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]],O6=n("MailPlus",nG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oG=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],U6=n("MailQuestion",oG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aG=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"8lzu5m"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]],Z6=n("MailSearch",aG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cG=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],W6=n("MailWarning",cG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iG=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]],G6=n("MailX",iG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rG=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],X6=n("Mail",rG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dG=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",key:"15i455"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]],K6=n("Mailbox",dG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lG=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]],Q6=n("Mails",lG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],J6=n("MapPinCheckInside",sG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hG=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]],Y6=n("MapPinCheck",hG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yG=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]],e8=n("MapPinHouse",yG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],t8=n("MapPinMinusInside",uG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pG=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"11uxia"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}]],n8=n("MapPinMinus",pG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kG=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16",key:"1d4wjd"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",key:"12yil7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",key:"lhrkcz"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74",key:"13wojd"}]],o8=n("MapPinOff",kG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],a8=n("MapPinPlusInside",fG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MG=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]],c8=n("MapPinPlus",MG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],i8=n("MapPinXInside",mG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vG=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",key:"y0ewhp"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m21.5 15.5-5 5",key:"11iqnx"}],["path",{d:"m21.5 20.5-5-5",key:"1bylgx"}]],r8=n("MapPinX",vG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vc=n("MapPin",gG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xG=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],d8=n("MapPinned",xG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _G=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],gc=n("Map",_G);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wG=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]],l8=n("Martini",wG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LG=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],s8=n("Maximize2",LG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CG=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],h8=n("Maximize",CG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IG=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],y8=n("Medal",IG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SG=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],u8=n("MegaphoneOff",SG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NG=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],p8=n("Megaphone",NG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $G=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],k8=n("Meh",$G);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zG=[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]],f8=n("MemoryStick",zG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qG=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],M8=n("Menu",qG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AG=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],m8=n("Merge",AG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HG=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]],v8=n("MessageCircleCode",HG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jG=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]],g8=n("MessageCircleDashed",jG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]],x8=n("MessageCircleHeart",bG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],_8=n("MessageCircleMore",PG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VG=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]],w8=n("MessageCircleOff",VG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],L8=n("MessageCirclePlus",TG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],C8=n("MessageCircleQuestion",DG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]],I8=n("MessageCircleReply",FG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],S8=n("MessageCircleWarning",RG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],N8=n("MessageCircleX",BG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],$8=n("MessageCircle",EG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OG=[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],z8=n("MessageSquareCode",OG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UG=[["path",{d:"M10 17H7l-4 4v-7",key:"1r71xu"}],["path",{d:"M14 17h1",key:"nufu4t"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2",key:"29akq3"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}]],q8=n("MessageSquareDashed",UG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZG=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]],A8=n("MessageSquareDiff",ZG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WG=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],H8=n("MessageSquareDot",WG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]],j8=n("MessageSquareHeart",GG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XG=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2",key:"h3d1vz"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",key:"xsnnhn"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1",key:"1ccwuk"}]],b8=n("MessageSquareLock",XG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]],P8=n("MessageSquareMore",KG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QG=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]],V8=n("MessageSquareOff",QG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],T8=n("MessageSquarePlus",JG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],D8=n("MessageSquareQuote",YG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]],F8=n("MessageSquareReply",eX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tX=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]],R8=n("MessageSquareShare",tX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],B8=n("MessageSquareText",nX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]],E8=n("MessageSquareWarning",oX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],O8=n("MessageSquareX",aX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],U8=n("MessageSquare",cX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iX=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]],Z8=n("MessagesSquare",iX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rX=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],W8=n("MicOff",rX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dX=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],ro=n("MicVocal",dX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lX=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],G8=n("Mic",lX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sX=[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]],X8=n("Microchip",sX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hX=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],K8=n("Microscope",hX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yX=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]],Q8=n("Microwave",yX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uX=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]],J8=n("Milestone",uX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pX=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Y8=n("MilkOff",pX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kX=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]],e7=n("Milk",kX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fX=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],t7=n("Minimize2",fX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MX=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],n7=n("Minimize",MX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mX=[["path",{d:"M5 12h14",key:"1ays0h"}]],o7=n("Minus",mX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vX=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],a7=n("MonitorCheck",vX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gX=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m15.2 4.9-.9-.4",key:"12wd2u"}],["path",{d:"m15.2 7.1-.9.4",key:"1r2vl7"}],["path",{d:"m16.9 3.2-.4-.9",key:"3zbo91"}],["path",{d:"m16.9 8.8-.4.9",key:"1qr2dn"}],["path",{d:"m19.5 2.3-.4.9",key:"1rjrkq"}],["path",{d:"m19.5 9.7-.4-.9",key:"heryx5"}],["path",{d:"m21.7 4.5-.9.4",key:"17fqt1"}],["path",{d:"m21.7 7.5-.9-.4",key:"14zyni"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],c7=n("MonitorCog",gX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xX=[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],i7=n("MonitorDot",xX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _X=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],r7=n("MonitorDown",_X);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wX=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],d7=n("MonitorOff",wX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LX=[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],l7=n("MonitorPause",LX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CX=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],s7=n("MonitorPlay",CX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IX=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],h7=n("MonitorSmartphone",IX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SX=[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]],y7=n("MonitorSpeaker",SX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NX=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]],u7=n("MonitorStop",NX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $X=[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],p7=n("MonitorUp",$X);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zX=[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],k7=n("MonitorX",zX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qX=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],f7=n("Monitor",qX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AX=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]],M7=n("MoonStar",AX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HX=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],m7=n("Moon",HX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jX=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]],v7=n("MountainSnow",jX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bX=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],g7=n("Mountain",bX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PX=[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],x7=n("MouseOff",PX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VX=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],_7=n("MousePointer2",VX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TX=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",key:"11pp1i"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]],w7=n("MousePointerBan",TX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DX=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],L7=n("MousePointerClick",DX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FX=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],C7=n("MousePointer",FX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RX=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],I7=n("Mouse",RX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BX=[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]],lo=n("Move3d",BX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EX=[["path",{d:"M19 13v6h-6",key:"1hxl6d"}],["path",{d:"M5 11V5h6",key:"12e2xe"}],["path",{d:"m5 5 14 14",key:"11anup"}]],S7=n("MoveDiagonal2",EX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OX=[["path",{d:"M11 19H5v-6",key:"8awifj"}],["path",{d:"M13 5h6v6",key:"7voy1q"}],["path",{d:"M19 5 5 19",key:"wwaj1z"}]],N7=n("MoveDiagonal",OX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UX=[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],$7=n("MoveDownLeft",UX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZX=[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],z7=n("MoveDownRight",ZX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WX=[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]],q7=n("MoveDown",WX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GX=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],A7=n("MoveHorizontal",GX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XX=[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]],H7=n("MoveLeft",XX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KX=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],j7=n("MoveRight",KX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QX=[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],b7=n("MoveUpLeft",QX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JX=[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],P7=n("MoveUpRight",JX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YX=[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]],V7=n("MoveUp",YX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eK=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]],T7=n("MoveVertical",eK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tK=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],D7=n("Move",tK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nK=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],F7=n("Music2",nK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oK=[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]],R7=n("Music3",oK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aK=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],B7=n("Music4",aK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cK=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],E7=n("Music",cK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iK=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],O7=n("Navigation2Off",iK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rK=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],U7=n("Navigation2",rK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dK=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Z7=n("NavigationOff",dK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lK=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],W7=n("Navigation",lK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sK=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],G7=n("Network",sK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hK=[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]],X7=n("Newspaper",hK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yK=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]],K7=n("Nfc",yK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uK=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]],Q7=n("NotebookPen",uK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]],J7=n("NotebookTabs",pK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],Y7=n("NotebookText",kK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],ef=n("Notebook",fK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MK=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],tf=n("NotepadTextDashed",MK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mK=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],nf=n("NotepadText",mK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vK=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],of=n("NutOff",vK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gK=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]],af=n("Nut",gK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xK=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],so=n("OctagonAlert",xK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _K=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"M8 12h8",key:"1wcyev"}]],cf=n("OctagonMinus",_K);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wK=[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],ho=n("OctagonPause",wK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LK=[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],yo=n("OctagonX",LK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CK=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],rf=n("Octagon",CK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IK=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",key:"1x94xo"}]],df=n("Omega",IK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SK=[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]],lf=n("Option",SK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NK=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],sf=n("Orbit",NK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $K=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]],hf=n("Origami",$K);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zK=[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]],yf=n("Package2",zK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qK=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],uf=n("PackageCheck",qK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AK=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],pf=n("PackageMinus",AK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HK=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],kf=n("PackageOpen",HK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jK=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],ff=n("PackagePlus",jK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bK=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]],Mf=n("PackageSearch",bK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PK=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]],mf=n("PackageX",PK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VK=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],vf=n("Package",VK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TK=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]],gf=n("PaintBucket",TK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DK=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],xf=n("PaintRoller",DK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FK=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]],uo=n("PaintbrushVertical",FK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RK=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],_f=n("Paintbrush",RK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BK=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],wf=n("Palette",BK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]],Lf=n("PanelBottomClose",EK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]],po=n("PanelBottomDashed",OK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],Cf=n("PanelBottomOpen",UK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],If=n("PanelBottom",ZK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],ko=n("PanelLeftClose",WK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]],fo=n("PanelLeftDashed",GK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Mo=n("PanelLeftOpen",XK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],mo=n("PanelLeft",KK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],Sf=n("PanelRightClose",QK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]],vo=n("PanelRightDashed",JK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]],Nf=n("PanelRightOpen",YK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$f=n("PanelRight",eQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]],zf=n("PanelTopClose",tQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]],go=n("PanelTopDashed",nQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]],qf=n("PanelTopOpen",oQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Af=n("PanelTop",aQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]],Hf=n("PanelsLeftBottom",cQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]],jf=n("PanelsRightBottom",iQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],xo=n("PanelsTopLeft",rQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dQ=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],bf=n("Paperclip",dQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lQ=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]],Pf=n("Parentheses",lQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sQ=[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]],Vf=n("ParkingMeter",sQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hQ=[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]],Tf=n("PartyPopper",hQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yQ=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Df=n("Pause",yQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uQ=[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]],Ff=n("PawPrint",uQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pQ=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Rf=n("PcCase",pQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kQ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],_o=n("PenLine",kQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fQ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Bf=n("PenOff",fQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MQ=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Ef=n("PenTool",MQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],wo=n("Pen",mQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vQ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]],Of=n("PencilLine",vQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gQ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Uf=n("PencilOff",gQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xQ=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Zf=n("PencilRuler",xQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Q=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Wf=n("Pencil",_Q);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wQ=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",key:"2hea0t"}]],Gf=n("Pentagon",wQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LQ=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],Xf=n("Percent",LQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CQ=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Kf=n("PersonStanding",CQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IQ=[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]],Qf=n("PhilippinePeso",IQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SQ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Jf=n("PhoneCall",SQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NQ=[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Yf=n("PhoneForwarded",NQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Q=[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],e9=n("PhoneIncoming",$Q);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zQ=[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],t9=n("PhoneMissed",zQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qQ=[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]],n9=n("PhoneOff",qQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AQ=[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],o9=n("PhoneOutgoing",AQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HQ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],a9=n("Phone",HQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jQ=[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]],c9=n("Pi",jQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bQ=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]],i9=n("Piano",bQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PQ=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]],r9=n("Pickaxe",PQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VQ=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]],d9=n("PictureInPicture2",VQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TQ=[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]],l9=n("PictureInPicture",TQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DQ=[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]],s9=n("PiggyBank",DQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FQ=[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]],h9=n("PilcrowLeft",FQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RQ=[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]],y9=n("PilcrowRight",RQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BQ=[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]],u9=n("Pilcrow",BQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EQ=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]],p9=n("PillBottle",EQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OQ=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],k9=n("Pill",OQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UQ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],f9=n("PinOff",UQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZQ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],M9=n("Pin",ZQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WQ=[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]],m9=n("Pipette",WQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GQ=[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]],v9=n("Pizza",GQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XQ=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]],g9=n("PlaneLanding",XQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KQ=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]],x9=n("PlaneTakeoff",KQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QQ=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],xc=n("Plane",QQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JQ=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],_9=n("Play",JQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YQ=[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z",key:"wtfw2c"}]],w9=n("Plug2",YQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eJ=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],Lo=n("PlugZap",eJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tJ=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],L9=n("Plug",tJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nJ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],C9=n("Plus",nJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oJ=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]],I9=n("PocketKnife",oJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aJ=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]],S9=n("Pocket",aJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cJ=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]],N9=n("Podcast",cJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iJ=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],$9=n("PointerOff",iJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rJ=[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]],z9=n("Pointer",rJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dJ=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]],q9=n("Popcorn",dJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lJ=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]],A9=n("Popsicle",lJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sJ=[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]],H9=n("PoundSterling",sJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hJ=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],j9=n("PowerOff",hJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yJ=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],b9=n("Power",yJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uJ=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],P9=n("Presentation",uJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pJ=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",key:"qeb09x"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",key:"1md90i"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}]],V9=n("PrinterCheck",pJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kJ=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],T9=n("Printer",kJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fJ=[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]],D9=n("Projector",fJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MJ=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]],F9=n("Proportions",MJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mJ=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],R9=n("Puzzle",mJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vJ=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],B9=n("Pyramid",vJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gJ=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],E9=n("QrCode",gJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xJ=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],O9=n("Quote",xJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _J=[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]],U9=n("Rabbit",_J);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wJ=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],Z9=n("Radar",wJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LJ=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]],W9=n("Radiation",LJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CJ=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]],G9=n("Radical",CJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IJ=[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],X9=n("RadioReceiver",IJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SJ=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],K9=n("RadioTower",SJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NJ=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Q9=n("Radio",NJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $J=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],J9=n("Radius",$J);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zJ=[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]],Y9=n("RailSymbol",zJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qJ=[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]],eM=n("Rainbow",qJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AJ=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]],tM=n("Rat",AJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HJ=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],nM=n("Ratio",HJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],oM=n("ReceiptCent",jJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]],aM=n("ReceiptEuro",bJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]],cM=n("ReceiptIndianRupee",PJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]],iM=n("ReceiptJapaneseYen",VJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]],rM=n("ReceiptPoundSterling",TJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]],dM=n("ReceiptRussianRuble",DJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]],lM=n("ReceiptSwissFranc",FJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]],sM=n("ReceiptText",RJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],hM=n("Receipt",BJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EJ=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],Co=n("RectangleEllipsis",EJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OJ=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],yM=n("RectangleHorizontal",OJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UJ=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],uM=n("RectangleVertical",UJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZJ=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]],pM=n("Recycle",ZJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WJ=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],kM=n("Redo2",WJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GJ=[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],fM=n("RedoDot",GJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XJ=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],MM=n("Redo",XJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KJ=[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],mM=n("RefreshCcwDot",KJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QJ=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],vM=n("RefreshCcw",QJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JJ=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],gM=n("RefreshCwOff",JJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YJ=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],xM=n("RefreshCw",YJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eY=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]],_M=n("Refrigerator",eY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tY=[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]],wM=n("Regex",tY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nY=[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]],LM=n("RemoveFormatting",nY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oY=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]],CM=n("Repeat1",oY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aY=[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]],IM=n("Repeat2",aY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cY=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],SM=n("Repeat",cY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iY=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"1yyzbs"}],["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"zfj4xr"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1",key:"1ageje"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],NM=n("ReplaceAll",iY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rY=[["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1",key:"3y3t5z"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],$M=n("Replace",rY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dY=[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]],zM=n("ReplyAll",dY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lY=[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]],qM=n("Reply",lY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sY=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],AM=n("Rewind",sY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hY=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]],HM=n("Ribbon",hY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yY=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],jM=n("Rocket",yY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uY=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]],bM=n("RockingChair",uY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pY=[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]],PM=n("RollerCoaster",pY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kY=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],Io=n("Rotate3d",kY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fY=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]],VM=n("RotateCcwSquare",fY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MY=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],TM=n("RotateCcw",MY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mY=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]],DM=n("RotateCwSquare",mY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vY=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],FM=n("RotateCw",vY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gY=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],RM=n("RouteOff",gY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xY=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],BM=n("Route",xY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Y=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],EM=n("Router",_Y);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],So=n("Rows2",wY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],No=n("Rows3",LY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]],OM=n("Rows4",CY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IY=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],UM=n("Rss",IY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SY=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],ZM=n("Ruler",SY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NY=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]],WM=n("RussianRuble",NY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Y=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]],GM=n("Sailboat",$Y);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zY=[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]],XM=n("Salad",zY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qY=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]],KM=n("Sandwich",qY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AY=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],QM=n("SatelliteDish",AY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HY=[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]],JM=n("Satellite",HY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jY=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]],YM=n("SaveAll",jY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bY=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M29.5 11.5s5 5 4 5",key:"zzn4i6"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]],em=n("SaveOff",bY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PY=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tm=n("Save",PY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VY=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]],$o=n("Scale3d",VY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TY=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],nm=n("Scale",TY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DY=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]],om=n("Scaling",DY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]],am=n("ScanBarcode",FY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],cm=n("ScanEye",RY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]],im=n("ScanFace",BY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EY=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",key:"1algrk"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],rm=n("ScanHeart",EY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],dm=n("ScanLine",OY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UY=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4",key:"uk4fdo"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M17 8V7",key:"q2g9wo"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1",key:"m9kyts"}]],lm=n("ScanQrCode",UY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],sm=n("ScanSearch",ZY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]],hm=n("ScanText",WY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],ym=n("Scan",GY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XY=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],um=n("School",XY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KY=[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],pm=n("ScissorsLineDashed",KY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QY=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],km=n("Scissors",QY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JY=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],fm=n("ScreenShareOff",JY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YY=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]],Mm=n("ScreenShare",YY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eee=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],mm=n("ScrollText",eee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tee=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],vm=n("Scroll",tee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nee=[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],gm=n("SearchCheck",nee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oee=[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xm=n("SearchCode",oee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aee=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],_m=n("SearchSlash",aee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cee=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],wm=n("SearchX",cee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iee=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Lm=n("Search",iee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ree=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]],Cm=n("Section",ree);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dee=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],zo=n("SendHorizontal",dee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lee=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]],Im=n("SendToBack",lee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const see=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Sm=n("Send",see);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hee=[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]],Nm=n("SeparatorHorizontal",hee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yee=[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]],$m=n("SeparatorVertical",yee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uee=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]],zm=n("ServerCog",uee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pee=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]],qm=n("ServerCrash",pee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kee=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Am=n("ServerOff",kee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fee=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Hm=n("Server",fee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mee=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],jm=n("Settings2",Mee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mee=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bm=n("Settings",mee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vee=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],Pm=n("Shapes",vee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gee=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Vm=n("Share2",gee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xee=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]],Tm=n("Share",xee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ee=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]],Dm=n("Sheet",_ee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wee=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]],Fm=n("Shell",wee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Rm=n("ShieldAlert",Lee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]],Bm=n("ShieldBan",Cee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Em=n("ShieldCheck",Iee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const See=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Om=n("ShieldEllipsis",See);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]],Um=n("ShieldHalf",Nee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]],Zm=n("ShieldMinus",$ee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zee=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]],Wm=n("ShieldOff",zee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],_c=n("ShieldPlus",qee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Gm=n("ShieldQuestion",Aee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],qo=n("ShieldX",Hee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Xm=n("Shield",jee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bee=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]],Km=n("ShipWheel",bee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pee=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],Qm=n("Ship",Pee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vee=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],Jm=n("Shirt",Vee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tee=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],Ym=n("ShoppingBag",Tee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dee=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],ev=n("ShoppingBasket",Dee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fee=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],tv=n("ShoppingCart",Fee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ree=[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]],nv=n("Shovel",Ree);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bee=[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]],ov=n("ShowerHead",Bee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eee=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],av=n("Shrink",Eee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oee=[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",key:"ubcgy"}],["path",{d:"m14 14-2 2",key:"847xa2"}]],cv=n("Shrub",Oee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uee=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],iv=n("Shuffle",Uee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zee=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]],rv=n("Sigma",Zee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]],dv=n("SignalHigh",Wee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]],lv=n("SignalLow",Gee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]],sv=n("SignalMedium",Xee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kee=[["path",{d:"M2 20h.01",key:"4haj6o"}]],hv=n("SignalZero",Kee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]],yv=n("Signal",Qee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jee=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]],uv=n("Signature",Jee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yee=[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]],pv=n("SignpostBig",Yee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1e=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",key:"gqqp9m"}]],kv=n("Signpost",e1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1e=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]],fv=n("Siren",t1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1e=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],Mv=n("SkipBack",n1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1e=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],mv=n("SkipForward",o1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1e=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],vv=n("Skull",a1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1e=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]],gv=n("Slack",c1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1e=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],xv=n("Slash",i1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1e=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]],_v=n("Slice",r1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1e=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],wv=n("SlidersHorizontal",d1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1e=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Ao=n("SlidersVertical",l1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1e=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]],Lv=n("SmartphoneCharging",s1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1e=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]],Cv=n("SmartphoneNfc",h1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1e=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Iv=n("Smartphone",y1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1e=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],Sv=n("SmilePlus",u1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1e=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Nv=n("Smile",p1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1e=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]],$v=n("Snail",k1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1e=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],zv=n("Snowflake",f1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1e=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],qv=n("Sofa",M1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1e=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]],Av=n("Soup",m1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1e=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],Hv=n("Space",v1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1e=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]],jv=n("Spade",g1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1e=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]],bv=n("Sparkle",x1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1e=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ho=n("Sparkles",_1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1e=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]],Pv=n("Speaker",w1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1e=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]],Vv=n("Speech",L1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1e=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]],Tv=n("SpellCheck2",C1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1e=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],Dv=n("SpellCheck",I1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1e=[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]],Fv=n("Spline",S1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1e=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]],Rv=n("Split",N1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1e=[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]],Bv=n("SprayCan",$1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1e=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],Ev=n("Sprout",z1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]],jo=n("SquareActivity",q1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]],bo=n("SquareArrowDownLeft",A1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]],Po=n("SquareArrowDownRight",H1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],Vo=n("SquareArrowDown",j1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]],To=n("SquareArrowLeft",b1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1e=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Do=n("SquareArrowOutDownLeft",P1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1e=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]],Fo=n("SquareArrowOutDownRight",V1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1e=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]],Ro=n("SquareArrowOutUpLeft",T1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1e=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]],Bo=n("SquareArrowOutUpRight",D1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],Eo=n("SquareArrowRight",F1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]],Oo=n("SquareArrowUpLeft",R1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]],Uo=n("SquareArrowUpRight",B1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],Zo=n("SquareArrowUp",E1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]],Wo=n("SquareAsterisk",O1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1e=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],Go=n("SquareBottomDashedScissors",U1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]],L1=n("SquareChartGantt",Z1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1e=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xo=n("SquareCheckBig",W1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ko=n("SquareCheck",G1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],Qo=n("SquareChevronDown",X1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],Jo=n("SquareChevronLeft",K1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],Yo=n("SquareChevronRight",Q1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],ea=n("SquareChevronUp",J1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1e=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ta=n("SquareCode",Y1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ete=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]],Ov=n("SquareDashedBottomCode",ete);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tte=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]],Uv=n("SquareDashedBottom",tte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nte=[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]],na=n("SquareDashedKanban",nte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ote=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]],oa=n("SquareDashedMousePointer",ote);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ate=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aa=n("SquareDashed",ate);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]],ca=n("SquareDivide",cte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ite=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],ia=n("SquareDot",ite);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]],ra=n("SquareEqual",rte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],da=n("SquareFunction",dte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],la=n("SquareKanban",lte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ste=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]],sa=n("SquareLibrary",ste);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]],ha=n("SquareM",hte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]],ya=n("SquareMenu",yte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ute=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]],ua=n("SquareMinus",ute);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pte=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]],pa=n("SquareMousePointer",pte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kte=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]],ka=n("SquareParkingOff",kte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],fa=n("SquareParking",fte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mte=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Ke=n("SquarePen",Mte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],Ma=n("SquarePercent",mte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]],ma=n("SquarePi",vte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]],va=n("SquarePilcrow",gte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]],ga=n("SquarePlay",xte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _te=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],xa=n("SquarePlus",_te);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wte=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],_a=n("SquarePower",wte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lte=[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Zv=n("SquareRadical",Lte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cte=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],wa=n("SquareScissors",Cte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ite=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]],La=n("SquareSigma",Ite);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ste=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],Ca=n("SquareSlash",Ste);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nte=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],Ia=n("SquareSplitHorizontal",Nte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $te=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Sa=n("SquareSplitVertical",$te);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zte=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Wv=n("SquareSquare",zte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qte=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]],Gv=n("SquareStack",qte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ate=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],Na=n("SquareTerminal",Ate);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hte=[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],$a=n("SquareUserRound",Hte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]],za=n("SquareUser",jte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],qa=n("SquareX",bte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Xv=n("Square",Pte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vte=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]],Kv=n("Squircle",Vte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tte=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]],Qv=n("Squirrel",Tte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dte=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]],Jv=n("Stamp",Dte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fte=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],Yv=n("StarHalf",Fte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rte=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],eg=n("StarOff",Rte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bte=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wc=n("Star",Bte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ete=[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]],tg=n("StepBack",Ete);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ote=[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]],ng=n("StepForward",Ote);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ute=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],og=n("Stethoscope",Ute);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zte=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]],ag=n("Sticker",Zte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wte=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]],cg=n("StickyNote",Wte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gte=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],ig=n("Store",Gte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xte=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]],rg=n("StretchHorizontal",Xte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kte=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]],dg=n("StretchVertical",Kte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qte=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],lg=n("Strikethrough",Qte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jte=[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]],sg=n("Subscript",Jte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yte=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]],hg=n("SunDim",Yte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ene=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]],yg=n("SunMedium",ene);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tne=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]],ug=n("SunMoon",tne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nne=[["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 9a3 3 0 0 0 0 6",key:"gv75dk"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6 1.5-3H22",key:"o5qa3v"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}]],pg=n("SunSnow",nne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const one=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kg=n("Sun",one);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ane=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],fg=n("Sunrise",ane);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cne=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],Mg=n("Sunset",cne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ine=[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]],mg=n("Superscript",ine);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rne=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]],vg=n("SwatchBook",rne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dne=[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]],gg=n("SwissFranc",dne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lne=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]],xg=n("SwitchCamera",lne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sne=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]],_g=n("Sword",sne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hne=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],wg=n("Swords",hne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yne=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],Lg=n("Syringe",yne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const une=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],Cg=n("Table2",une);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pne=[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ig=n("TableCellsMerge",pne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kne=[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Sg=n("TableCellsSplit",kne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fne=[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]],Ng=n("TableColumnsSplit",fne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mne=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]],$g=n("TableOfContents",Mne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mne=[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],zg=n("TableProperties",mne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vne=[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]],qg=n("TableRowsSplit",vne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gne=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Ag=n("Table",gne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xne=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Hg=n("TabletSmartphone",xne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ne=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],jg=n("Tablet",_ne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wne=[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]],bg=n("Tablets",wne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lne=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Pg=n("Tag",Lne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cne=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]],Vg=n("Tags",Cne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ine=[["path",{d:"M4 4v16",key:"6qkkli"}]],Tg=n("Tally1",Ine);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]],Dg=n("Tally2",Sne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]],Fg=n("Tally3",Nne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]],Rg=n("Tally4",$ne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]],Bg=n("Tally5",zne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qne=[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]],Eg=n("Tangent",qne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ane=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Og=n("Target",Ane);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hne=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],Ug=n("Telescope",Hne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jne=[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]],Zg=n("TentTree",jne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bne=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],Wg=n("Tent",bne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pne=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Gg=n("Terminal",Pne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vne=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]],Aa=n("TestTubeDiagonal",Vne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tne=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],Xg=n("TestTube",Tne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dne=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]],Kg=n("TestTubes",Dne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fne=[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]],Qg=n("TextCursorInput",Fne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rne=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]],Jg=n("TextCursor",Rne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bne=[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]],Yg=n("TextQuote",Bne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ene=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],ex=n("TextSearch",Ene);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const One=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]],Ha=n("TextSelect",One);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Une=[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]],tx=n("Text",Une);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zne=[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]],nx=n("Theater",Zne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wne=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]],ox=n("ThermometerSnowflake",Wne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gne=[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]],ax=n("ThermometerSun",Gne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xne=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],cx=n("Thermometer",Xne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kne=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],ix=n("ThumbsDown",Kne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qne=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],rx=n("ThumbsUp",Qne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jne=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dx=n("TicketCheck",Jne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yne=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]],lx=n("TicketMinus",Yne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eoe=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],sx=n("TicketPercent",eoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],hx=n("TicketPlus",toe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const noe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]],yx=n("TicketSlash",noe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ooe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],ux=n("TicketX",ooe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aoe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],px=n("Ticket",aoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const coe=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",key:"16muxl"}],["path",{d:"m12 13.5 3.75.5",key:"1i9qhk"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],kx=n("TicketsPlane",coe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ioe=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],fx=n("Tickets",ioe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const roe=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],Mx=n("TimerOff",roe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const doe=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],mx=n("TimerReset",doe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const loe=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],vx=n("Timer",loe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const soe=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]],gx=n("ToggleLeft",soe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hoe=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]],xx=n("ToggleRight",hoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yoe=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]],_x=n("Toilet",yoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uoe=[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]],wx=n("Tornado",uoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const poe=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]],Lx=n("Torus",poe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const koe=[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]],Cx=n("TouchpadOff",koe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const foe=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]],Ix=n("Touchpad",foe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Moe=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]],Sx=n("TowerControl",Moe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const moe=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]],Nx=n("ToyBrick",moe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const voe=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]],$x=n("Tractor",voe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const goe=[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]],zx=n("TrafficCone",goe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xoe=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]],qx=n("TrainFrontTunnel",xoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _oe=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],Ax=n("TrainFront",_oe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const woe=[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]],Hx=n("TrainTrack",woe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Loe=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],ja=n("TramFront",Loe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Coe=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],jx=n("Trash2",Coe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ioe=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],bx=n("Trash",Ioe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Soe=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],Px=n("TreeDeciduous",Soe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Noe=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]],ba=n("TreePalm",Noe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $oe=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]],Vx=n("TreePine",$oe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zoe=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Tx=n("Trees",zoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qoe=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]],Dx=n("Trello",qoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aoe=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Fx=n("TrendingDown",Aoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hoe=[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]],Rx=n("TrendingUpDown",Hoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const joe=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Bx=n("TrendingUp",joe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const boe=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Pa=n("TriangleAlert",boe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Poe=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013",key:"pltmmw"}],["path",{d:"M14 21h2",key:"v4qezv"}],["path",{d:"m15.874 7.743 1 1.732",key:"10m0iw"}],["path",{d:"m18.849 12.952 1 1.732",key:"zadnam"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824",key:"fvwuk4"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839",key:"1e1kah"}],["path",{d:"m5.136 12.952-1 1.732",key:"1u4ldi"}],["path",{d:"M8 21h2",key:"i9zjee"}],["path",{d:"m8.102 7.743-1 1.732",key:"1zzo4u"}]],Ex=n("TriangleDashed",Poe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Voe=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]],Ox=n("TriangleRight",Voe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Toe=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],Ux=n("Triangle",Toe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Doe=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Zx=n("Trophy",Doe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Foe=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Wx=n("Truck",Foe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Roe=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]],Gx=n("Turtle",Roe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Boe=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],Xx=n("TvMinimalPlay",Boe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eoe=[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],Va=n("TvMinimal",Eoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ooe=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],Kx=n("Tv",Ooe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uoe=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]],Qx=n("Twitch",Uoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zoe=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Jx=n("Twitter",Zoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Woe=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",key:"1reda3"}]],Yx=n("TypeOutline",Woe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Goe=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],e_=n("Type",Goe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xoe=[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],t_=n("UmbrellaOff",Xoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Koe=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]],n_=n("Umbrella",Koe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qoe=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],o_=n("Underline",Qoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Joe=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],a_=n("Undo2",Joe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yoe=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13",key:"8mp6z9"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}]],c_=n("UndoDot",Yoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eae=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],i_=n("Undo",eae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tae=[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]],r_=n("UnfoldHorizontal",tae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nae=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]],d_=n("UnfoldVertical",nae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oae=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]],l_=n("Ungroup",oae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aae=[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"11g7fi"}]],Ta=n("University",aae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cae=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]],s_=n("Unlink2",cae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iae=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],h_=n("Unlink",iae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rae=[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]],y_=n("Unplug",rae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dae=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],u_=n("Upload",dae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lae=[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]],p_=n("Usb",lae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],k_=n("UserCheck",sae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hae=[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]],f_=n("UserCog",hae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],M_=n("UserMinus",yae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uae=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]],m_=n("UserPen",uae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],v_=n("UserPlus",pae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],Da=n("UserRoundCheck",kae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fae=[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]],Fa=n("UserRoundCog",fae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],Ra=n("UserRoundMinus",Mae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mae=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487",key:"1c8h7z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}]],g_=n("UserRoundPen",mae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],Ba=n("UserRoundPlus",vae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gae=[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]],x_=n("UserRoundSearch",gae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xae=[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]],Ea=n("UserRoundX",xae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ae=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Oa=n("UserRound",_ae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wae=[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]],__=n("UserSearch",wae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],w_=n("UserX",Lae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cae=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],L_=n("User",Cae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iae=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],Ua=n("UsersRound",Iae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],C_=n("Users",Sae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nae=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Za=n("UtensilsCrossed",Nae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ae=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Wa=n("Utensils",$ae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zae=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]],I_=n("UtilityPole",zae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qae=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],S_=n("Variable",qae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aae=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],N_=n("Vault",Aae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hae=[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]],$_=n("Vegan",Hae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jae=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]],z_=n("VenetianMask",jae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bae=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],q_=n("VibrateOff",bae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pae=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]],A_=n("Vibrate",Pae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vae=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],H_=n("VideoOff",Vae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tae=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],j_=n("Video",Tae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dae=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]],b_=n("Videotape",Dae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fae=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],P_=n("View",Fae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rae=[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]],V_=n("Voicemail",Rae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bae=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4",key:"2880wi"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5",key:"113sja"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5",key:"1qmsgl"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",key:"1bmeqp"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",key:"iekzv9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],T_=n("Volleyball",Bae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]],D_=n("Volume1",Eae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],F_=n("Volume2",Oae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uae=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]],R_=n("VolumeOff",Uae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],B_=n("VolumeX",Zae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]],E_=n("Volume",Wae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gae=[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]],O_=n("Vote",Gae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xae=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],U_=n("WalletCards",Xae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kae=[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]],Ga=n("WalletMinimal",Kae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qae=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Z_=n("Wallet",Qae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jae=[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]],W_=n("Wallpaper",Jae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yae=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Xa=n("WandSparkles",Yae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2e=[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]],G_=n("Wand",e2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2e=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]],X_=n("Warehouse",t2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2e=[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]],K_=n("WashingMachine",n2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2e=[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]],Q_=n("Watch",o2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2e=[["path",{d:"M19 5a2 2 0 0 0-2 2v11",key:"s41o68"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}],["path",{d:"M7 13h10",key:"1rwob1"}],["path",{d:"M7 9h10",key:"12czzb"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11",key:"x0q4gh"}]],J_=n("WavesLadder",a2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2e=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Y_=n("Waves",c2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2e=[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]],ew=n("Waypoints",i2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2e=[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]],tw=n("Webcam",r2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2e=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],nw=n("WebhookOff",d2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2e=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]],ow=n("Webhook",l2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2e=[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]],aw=n("Weight",s2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2e=[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],cw=n("WheatOff",h2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2e=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],iw=n("Wheat",y2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2e=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],rw=n("WholeWord",u2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],dw=n("WifiHigh",p2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],lw=n("WifiLow",k2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sw=n("WifiOff",f2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2e=[["path",{d:"M12 20h.01",key:"zekei9"}]],hw=n("WifiZero",M2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],yw=n("Wifi",m2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2e=[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]],uw=n("WindArrowDown",v2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2e=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],pw=n("Wind",g2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2e=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],kw=n("WineOff",x2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2e=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],fw=n("Wine",_2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2e=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],Mw=n("Workflow",w2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2e=[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]],mw=n("Worm",L2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2e=[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]],vw=n("WrapText",C2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2e=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],gw=n("Wrench",I2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2e=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xw=n("X",S2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2e=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],_w=n("Youtube",N2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2e=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ww=n("ZapOff",$2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2e=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lw=n("Zap",z2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2e=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Cw=n("ZoomIn",q2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2e=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Iw=n("ZoomOut",A2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2e=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Vi,AArrowUp:Ti,ALargeSmall:Di,Accessibility:Fi,Activity:Ri,AirVent:Bi,Airplay:Ei,AlarmClock:Ui,AlarmClockCheck:ft,AlarmClockMinus:Mt,AlarmClockOff:Oi,AlarmClockPlus:mt,AlarmSmoke:Zi,Album:Wi,AlignCenter:Ki,AlignCenterHorizontal:Gi,AlignCenterVertical:Xi,AlignEndHorizontal:Qi,AlignEndVertical:Ji,AlignHorizontalDistributeCenter:Yi,AlignHorizontalDistributeEnd:er,AlignHorizontalDistributeStart:tr,AlignHorizontalJustifyCenter:nr,AlignHorizontalJustifyEnd:or,AlignHorizontalJustifyStart:ar,AlignHorizontalSpaceAround:cr,AlignHorizontalSpaceBetween:ir,AlignJustify:rr,AlignLeft:dr,AlignRight:lr,AlignStartHorizontal:sr,AlignStartVertical:hr,AlignVerticalDistributeCenter:yr,AlignVerticalDistributeEnd:ur,AlignVerticalDistributeStart:pr,AlignVerticalJustifyCenter:kr,AlignVerticalJustifyEnd:fr,AlignVerticalJustifyStart:Mr,AlignVerticalSpaceAround:mr,AlignVerticalSpaceBetween:vr,Ambulance:gr,Ampersand:xr,Ampersands:_r,Amphora:wr,Anchor:Lr,Angry:Cr,Annoyed:Ir,Antenna:Sr,Anvil:Nr,Aperture:$r,AppWindow:qr,AppWindowMac:zr,Apple:Ar,Archive:br,ArchiveRestore:Hr,ArchiveX:jr,Armchair:Pr,ArrowBigDown:Tr,ArrowBigDownDash:Vr,ArrowBigLeft:Fr,ArrowBigLeftDash:Dr,ArrowBigRight:Br,ArrowBigRightDash:Rr,ArrowBigUp:Or,ArrowBigUpDash:Er,ArrowDown:e0,ArrowDown01:Ur,ArrowDown10:Zr,ArrowDownAZ:vt,ArrowDownFromLine:Wr,ArrowDownLeft:Gr,ArrowDownNarrowWide:Xr,ArrowDownRight:Kr,ArrowDownToDot:Qr,ArrowDownToLine:Jr,ArrowDownUp:Yr,ArrowDownWideNarrow:gt,ArrowDownZA:xt,ArrowLeft:a0,ArrowLeftFromLine:t0,ArrowLeftRight:n0,ArrowLeftToLine:o0,ArrowRight:d0,ArrowRightFromLine:c0,ArrowRightLeft:i0,ArrowRightToLine:r0,ArrowUp:m0,ArrowUp01:l0,ArrowUp10:s0,ArrowUpAZ:_t,ArrowUpDown:h0,ArrowUpFromDot:y0,ArrowUpFromLine:u0,ArrowUpLeft:p0,ArrowUpNarrowWide:wt,ArrowUpRight:k0,ArrowUpToLine:f0,ArrowUpWideNarrow:M0,ArrowUpZA:Lt,ArrowsUpFromLine:v0,Asterisk:g0,AtSign:x0,Atom:_0,AudioLines:w0,AudioWaveform:L0,Award:C0,Axe:I0,Axis3d:Ct,Baby:S0,Backpack:N0,Badge:O0,BadgeAlert:$0,BadgeCent:z0,BadgeCheck:It,BadgeDollarSign:q0,BadgeEuro:A0,BadgeHelp:H0,BadgeIndianRupee:j0,BadgeInfo:b0,BadgeJapaneseYen:P0,BadgeMinus:V0,BadgePercent:T0,BadgePlus:D0,BadgePoundSterling:F0,BadgeRussianRuble:R0,BadgeSwissFranc:B0,BadgeX:E0,BaggageClaim:U0,Ban:Z0,Banana:W0,Bandage:G0,Banknote:X0,Barcode:K0,Baseline:Q0,Bath:J0,Battery:ad,BatteryCharging:Y0,BatteryFull:ed,BatteryLow:td,BatteryMedium:nd,BatteryWarning:od,Beaker:cd,Bean:rd,BeanOff:id,Bed:sd,BedDouble:dd,BedSingle:ld,Beef:hd,Beer:ud,BeerOff:yd,Bell:gd,BellDot:pd,BellElectric:kd,BellMinus:fd,BellOff:Md,BellPlus:md,BellRing:vd,BetweenHorizontalEnd:St,BetweenHorizontalStart:Nt,BetweenVerticalEnd:xd,BetweenVerticalStart:_d,BicepsFlexed:wd,Bike:Ld,Binary:Cd,Binoculars:Id,Biohazard:Sd,Bird:Nd,Bitcoin:$d,Blend:zd,Blinds:qd,Blocks:Ad,Bluetooth:Pd,BluetoothConnected:Hd,BluetoothOff:jd,BluetoothSearching:bd,Bold:Vd,Bolt:Td,Bomb:Dd,Bone:Fd,Book:ll,BookA:Rd,BookAudio:Bd,BookCheck:Ed,BookCopy:Od,BookDashed:$t,BookDown:Ud,BookHeadphones:Zd,BookHeart:Wd,BookImage:Gd,BookKey:Xd,BookLock:Kd,BookMarked:Qd,BookMinus:Jd,BookOpen:tl,BookOpenCheck:Yd,BookOpenText:el,BookPlus:nl,BookText:ol,BookType:al,BookUp:il,BookUp2:cl,BookUser:rl,BookX:dl,Bookmark:pl,BookmarkCheck:sl,BookmarkMinus:hl,BookmarkPlus:yl,BookmarkX:ul,BoomBox:kl,Bot:ml,BotMessageSquare:fl,BotOff:Ml,Box:vl,Boxes:gl,Braces:zt,Brackets:xl,Brain:Ll,BrainCircuit:_l,BrainCog:wl,BrickWall:Cl,Briefcase:Nl,BriefcaseBusiness:pc,BriefcaseConveyorBelt:Il,BriefcaseMedical:Sl,BringToFront:$l,Brush:zl,Bug:Hl,BugOff:ql,BugPlay:Al,Building:bl,Building2:jl,Bus:Vl,BusFront:Pl,Cable:Dl,CableCar:Tl,Cake:Rl,CakeSlice:Fl,Calculator:Bl,Calendar:ls,Calendar1:El,CalendarArrowDown:Ol,CalendarArrowUp:Ul,CalendarCheck:Wl,CalendarCheck2:Zl,CalendarClock:Gl,CalendarCog:Xl,CalendarDays:Kl,CalendarFold:Ql,CalendarHeart:Jl,CalendarMinus:es,CalendarMinus2:Yl,CalendarOff:ts,CalendarPlus:os,CalendarPlus2:ns,CalendarRange:as,CalendarSearch:cs,CalendarSync:is,CalendarX:ds,CalendarX2:rs,Camera:hs,CameraOff:ss,Candy:ps,CandyCane:ys,CandyOff:us,Cannabis:ks,Captions:qt,CaptionsOff:fs,Car:fc,CarFront:Ms,CarTaxiFront:kc,Caravan:ms,Carrot:vs,CaseLower:gs,CaseSensitive:xs,CaseUpper:_s,CassetteTape:ws,Cast:Ls,Castle:Cs,Cat:Is,Cctv:Ss,ChartArea:At,ChartBar:jt,ChartBarBig:Ht,ChartBarDecreasing:Ns,ChartBarIncreasing:$s,ChartBarStacked:zs,ChartCandlestick:bt,ChartColumn:Tt,ChartColumnBig:Pt,ChartColumnDecreasing:qs,ChartColumnIncreasing:Vt,ChartColumnStacked:As,ChartGantt:Hs,ChartLine:Dt,ChartNetwork:js,ChartNoAxesColumn:Rt,ChartNoAxesColumnDecreasing:bs,ChartNoAxesColumnIncreasing:Ft,ChartNoAxesCombined:Ps,ChartNoAxesGantt:Bt,ChartPie:Et,ChartScatter:Ot,ChartSpline:Vs,Check:Ds,CheckCheck:Ts,ChefHat:Fs,Cherry:Rs,ChevronDown:Bs,ChevronFirst:Es,ChevronLast:Os,ChevronLeft:Us,ChevronRight:Zs,ChevronUp:Ws,ChevronsDown:Xs,ChevronsDownUp:Gs,ChevronsLeft:Js,ChevronsLeftRight:Qs,ChevronsLeftRightEllipsis:Ks,ChevronsRight:eh,ChevronsRightLeft:Ys,ChevronsUp:nh,ChevronsUpDown:th,Chrome:oh,Church:ah,Cigarette:ih,CigaretteOff:ch,Circle:Mh,CircleAlert:Ut,CircleArrowDown:Zt,CircleArrowLeft:Wt,CircleArrowOutDownLeft:Gt,CircleArrowOutDownRight:Xt,CircleArrowOutUpLeft:Kt,CircleArrowOutUpRight:Qt,CircleArrowRight:Jt,CircleArrowUp:Yt,CircleCheck:tn,CircleCheckBig:en,CircleChevronDown:nn,CircleChevronLeft:on,CircleChevronRight:an,CircleChevronUp:cn,CircleDashed:rh,CircleDivide:rn,CircleDollarSign:dh,CircleDot:sh,CircleDotDashed:lh,CircleEllipsis:hh,CircleEqual:yh,CircleFadingArrowUp:uh,CircleFadingPlus:ph,CircleGauge:dn,CircleHelp:ln,CircleMinus:sn,CircleOff:kh,CircleParking:yn,CircleParkingOff:hn,CirclePause:un,CirclePercent:pn,CirclePlay:kn,CirclePlus:fn,CirclePower:Mn,CircleSlash:fh,CircleSlash2:mn,CircleStop:vn,CircleUser:xn,CircleUserRound:gn,CircleX:_n,CircuitBoard:mh,Citrus:vh,Clapperboard:gh,Clipboard:$h,ClipboardCheck:xh,ClipboardCopy:_h,ClipboardList:wh,ClipboardMinus:Lh,ClipboardPaste:Ch,ClipboardPen:Ln,ClipboardPenLine:wn,ClipboardPlus:Ih,ClipboardType:Sh,ClipboardX:Nh,Clock:Mc,Clock1:zh,Clock10:qh,Clock11:Ah,Clock12:Hh,Clock2:jh,Clock3:bh,Clock4:Ph,Clock5:Vh,Clock6:Th,Clock7:Dh,Clock8:Fh,Clock9:Rh,ClockAlert:Bh,ClockArrowDown:Eh,ClockArrowUp:Oh,Cloud:cy,CloudAlert:Uh,CloudCog:Zh,CloudDownload:Cn,CloudDrizzle:Wh,CloudFog:Gh,CloudHail:Xh,CloudLightning:Kh,CloudMoon:Jh,CloudMoonRain:Qh,CloudOff:Yh,CloudRain:ty,CloudRainWind:ey,CloudSnow:ny,CloudSun:ay,CloudSunRain:oy,CloudUpload:In,Cloudy:iy,Clover:ry,Club:dy,Code:ly,CodeXml:Sn,Codepen:sy,Codesandbox:hy,Coffee:yy,Cog:uy,Coins:py,Columns2:Nn,Columns3:$n,Columns4:ky,Combine:fy,Command:My,Compass:my,Component:vy,Computer:gy,ConciergeBell:xy,Cone:_y,Construction:wy,Contact:Ly,ContactRound:zn,Container:Cy,Contrast:Iy,Cookie:Sy,CookingPot:Ny,Copy:jy,CopyCheck:$y,CopyMinus:zy,CopyPlus:qy,CopySlash:Ay,CopyX:Hy,Copyleft:by,Copyright:Py,CornerDownLeft:Vy,CornerDownRight:Ty,CornerLeftDown:Dy,CornerLeftUp:Fy,CornerRightDown:Ry,CornerRightUp:By,CornerUpLeft:Ey,CornerUpRight:Oy,Cpu:Uy,CreativeCommons:Zy,CreditCard:Wy,Croissant:Gy,Crop:Xy,Cross:Ky,Crosshair:Qy,Crown:Jy,Cuboid:Yy,CupSoda:eu,Currency:tu,Cylinder:nu,Dam:ou,Database:iu,DatabaseBackup:au,DatabaseZap:cu,Delete:ru,Dessert:du,Diameter:lu,Diamond:yu,DiamondMinus:su,DiamondPercent:qn,DiamondPlus:hu,Dice1:uu,Dice2:pu,Dice3:ku,Dice4:fu,Dice5:Mu,Dice6:mu,Dices:vu,Diff:gu,Disc:Lu,Disc2:xu,Disc3:_u,DiscAlbum:wu,Divide:Cu,Dna:Su,DnaOff:Iu,Dock:Nu,Dog:$u,DollarSign:zu,Donut:qu,DoorClosed:Au,DoorOpen:Hu,Dot:ju,Download:bu,DraftingCompass:Pu,Drama:Vu,Dribbble:Tu,Drill:Du,Droplet:Ru,DropletOff:Fu,Droplets:Bu,Drum:Eu,Drumstick:Ou,Dumbbell:Uu,Ear:Wu,EarOff:Zu,Earth:An,EarthLock:Gu,Eclipse:Xu,Egg:Ju,EggFried:Ku,EggOff:Qu,Ellipsis:jn,EllipsisVertical:Hn,Equal:tp,EqualApproximately:Yu,EqualNot:ep,Eraser:np,EthernetPort:op,Euro:ap,Expand:cp,ExternalLink:ip,Eye:lp,EyeClosed:rp,EyeOff:dp,Facebook:sp,Factory:hp,Fan:yp,FastForward:up,Feather:pp,Fence:kp,FerrisWheel:fp,Figma:Mp,File:p4,FileArchive:mp,FileAudio:gp,FileAudio2:vp,FileAxis3d:bn,FileBadge:_p,FileBadge2:xp,FileBox:wp,FileChartColumn:Vn,FileChartColumnIncreasing:Pn,FileChartLine:Tn,FileChartPie:Dn,FileCheck:Cp,FileCheck2:Lp,FileClock:Ip,FileCode:Np,FileCode2:Sp,FileCog:Fn,FileDiff:$p,FileDigit:zp,FileDown:qp,FileHeart:Ap,FileImage:Hp,FileInput:jp,FileJson:Pp,FileJson2:bp,FileKey:Tp,FileKey2:Vp,FileLock:Fp,FileLock2:Dp,FileMinus:Bp,FileMinus2:Rp,FileMusic:Ep,FileOutput:Op,FilePen:Bn,FilePenLine:Rn,FilePlus:Zp,FilePlus2:Up,FileQuestion:Wp,FileScan:Gp,FileSearch:Kp,FileSearch2:Xp,FileSliders:Qp,FileSpreadsheet:Jp,FileStack:Yp,FileSymlink:e4,FileTerminal:t4,FileText:n4,FileType:a4,FileType2:o4,FileUp:c4,FileUser:i4,FileVideo:d4,FileVideo2:r4,FileVolume:s4,FileVolume2:l4,FileWarning:h4,FileX:u4,FileX2:y4,Files:k4,Film:f4,Filter:m4,FilterX:M4,Fingerprint:v4,FireExtinguisher:g4,Fish:w4,FishOff:x4,FishSymbol:_4,Flag:S4,FlagOff:L4,FlagTriangleLeft:C4,FlagTriangleRight:I4,Flame:$4,FlameKindling:N4,Flashlight:q4,FlashlightOff:z4,FlaskConical:H4,FlaskConicalOff:A4,FlaskRound:j4,FlipHorizontal:P4,FlipHorizontal2:b4,FlipVertical:T4,FlipVertical2:V4,Flower:F4,Flower2:D4,Focus:R4,FoldHorizontal:B4,FoldVertical:E4,Folder:Mk,FolderArchive:O4,FolderCheck:U4,FolderClock:Z4,FolderClosed:W4,FolderCode:G4,FolderCog:En,FolderDot:X4,FolderDown:K4,FolderGit:J4,FolderGit2:Q4,FolderHeart:Y4,FolderInput:ek,FolderKanban:tk,FolderKey:nk,FolderLock:ok,FolderMinus:ak,FolderOpen:ik,FolderOpenDot:ck,FolderOutput:rk,FolderPen:On,FolderPlus:dk,FolderRoot:lk,FolderSearch:hk,FolderSearch2:sk,FolderSymlink:yk,FolderSync:uk,FolderTree:pk,FolderUp:kk,FolderX:fk,Folders:mk,Footprints:vk,Forklift:gk,Forward:xk,Frame:_k,Framer:wk,Frown:Lk,Fuel:Ck,Fullscreen:Ik,GalleryHorizontal:Nk,GalleryHorizontalEnd:Sk,GalleryThumbnails:$k,GalleryVertical:qk,GalleryVerticalEnd:zk,Gamepad:Hk,Gamepad2:Ak,Gauge:jk,Gavel:bk,Gem:Pk,Ghost:Vk,Gift:Tk,GitBranch:Fk,GitBranchPlus:Dk,GitCommitHorizontal:Un,GitCommitVertical:Rk,GitCompare:Ek,GitCompareArrows:Bk,GitFork:Ok,GitGraph:Uk,GitMerge:Zk,GitPullRequest:Jk,GitPullRequestArrow:Wk,GitPullRequestClosed:Gk,GitPullRequestCreate:Kk,GitPullRequestCreateArrow:Xk,GitPullRequestDraft:Qk,Github:Yk,Gitlab:e5,GlassWater:t5,Glasses:n5,Globe:a5,GlobeLock:o5,Goal:c5,Grab:i5,GraduationCap:r5,Grape:d5,Grid2x2:Xn,Grid2x2Check:Zn,Grid2x2Plus:Wn,Grid2x2X:Gn,Grid3x3:w1,Grip:h5,GripHorizontal:l5,GripVertical:s5,Group:y5,Guitar:u5,Ham:p5,Hammer:k5,Hand:g5,HandCoins:f5,HandHeart:M5,HandHelping:Kn,HandMetal:m5,HandPlatter:v5,Handshake:x5,HardDrive:L5,HardDriveDownload:_5,HardDriveUpload:w5,HardHat:C5,Hash:I5,Haze:S5,HdmiPort:N5,Heading:b5,Heading1:$5,Heading2:z5,Heading3:q5,Heading4:A5,Heading5:H5,Heading6:j5,HeadphoneOff:P5,Headphones:V5,Headset:T5,Heart:E5,HeartCrack:D5,HeartHandshake:F5,HeartOff:R5,HeartPulse:B5,Heater:O5,Hexagon:U5,Highlighter:Z5,History:W5,Hop:X5,HopOff:G5,Hospital:K5,Hotel:mc,Hourglass:Q5,House:Qn,HousePlug:J5,HousePlus:Y5,HouseWifi:e3,IceCreamBowl:Jn,IceCreamCone:Yn,IdCard:t3,Image:l3,ImageDown:n3,ImageMinus:o3,ImageOff:a3,ImagePlay:c3,ImagePlus:i3,ImageUp:r3,ImageUpscale:d3,Images:s3,Import:h3,Inbox:y3,IndentDecrease:eo,IndentIncrease:to,IndianRupee:u3,Infinity:p3,Info:k3,InspectionPanel:f3,Instagram:M3,Italic:m3,IterationCcw:v3,IterationCw:g3,JapaneseYen:x3,Joystick:_3,Kanban:w3,Key:I3,KeyRound:L3,KeySquare:C3,Keyboard:$3,KeyboardMusic:S3,KeyboardOff:N3,Lamp:b3,LampCeiling:z3,LampDesk:q3,LampFloor:A3,LampWallDown:H3,LampWallUp:j3,LandPlot:P3,Landmark:V3,Languages:T3,Laptop:F3,LaptopMinimal:no,LaptopMinimalCheck:D3,Lasso:B3,LassoSelect:R3,Laugh:E3,Layers:oo,Layers2:O3,LayoutDashboard:U3,LayoutGrid:Z3,LayoutList:W3,LayoutPanelLeft:G3,LayoutPanelTop:X3,LayoutTemplate:K3,Leaf:Q3,LeafyGreen:J3,Lectern:Y3,LetterText:e6,Library:n6,LibraryBig:t6,LifeBuoy:o6,Ligature:a6,Lightbulb:i6,LightbulbOff:c6,Link:l6,Link2:d6,Link2Off:r6,Linkedin:s6,List:S6,ListCheck:h6,ListChecks:y6,ListCollapse:u6,ListEnd:p6,ListFilter:f6,ListFilterPlus:k6,ListMinus:M6,ListMusic:m6,ListOrdered:v6,ListPlus:g6,ListRestart:x6,ListStart:_6,ListTodo:w6,ListTree:L6,ListVideo:C6,ListX:I6,Loader:$6,LoaderCircle:ao,LoaderPinwheel:N6,Locate:A6,LocateFixed:z6,LocateOff:q6,Lock:j6,LockKeyhole:H6,LockKeyholeOpen:co,LockOpen:io,LogIn:b6,LogOut:P6,Logs:V6,Lollipop:T6,Luggage:D6,Magnet:F6,Mail:X6,MailCheck:R6,MailMinus:B6,MailOpen:E6,MailPlus:O6,MailQuestion:U6,MailSearch:Z6,MailWarning:W6,MailX:G6,Mailbox:K6,Mails:Q6,Map:gc,MapPin:vc,MapPinCheck:Y6,MapPinCheckInside:J6,MapPinHouse:e8,MapPinMinus:n8,MapPinMinusInside:t8,MapPinOff:o8,MapPinPlus:c8,MapPinPlusInside:a8,MapPinX:r8,MapPinXInside:i8,MapPinned:d8,Martini:l8,Maximize:h8,Maximize2:s8,Medal:y8,Megaphone:p8,MegaphoneOff:u8,Meh:k8,MemoryStick:f8,Menu:M8,Merge:m8,MessageCircle:$8,MessageCircleCode:v8,MessageCircleDashed:g8,MessageCircleHeart:x8,MessageCircleMore:_8,MessageCircleOff:w8,MessageCirclePlus:L8,MessageCircleQuestion:C8,MessageCircleReply:I8,MessageCircleWarning:S8,MessageCircleX:N8,MessageSquare:U8,MessageSquareCode:z8,MessageSquareDashed:q8,MessageSquareDiff:A8,MessageSquareDot:H8,MessageSquareHeart:j8,MessageSquareLock:b8,MessageSquareMore:P8,MessageSquareOff:V8,MessageSquarePlus:T8,MessageSquareQuote:D8,MessageSquareReply:F8,MessageSquareShare:R8,MessageSquareText:B8,MessageSquareWarning:E8,MessageSquareX:O8,MessagesSquare:Z8,Mic:G8,MicOff:W8,MicVocal:ro,Microchip:X8,Microscope:K8,Microwave:Q8,Milestone:J8,Milk:e7,MilkOff:Y8,Minimize:n7,Minimize2:t7,Minus:o7,Monitor:f7,MonitorCheck:a7,MonitorCog:c7,MonitorDot:i7,MonitorDown:r7,MonitorOff:d7,MonitorPause:l7,MonitorPlay:s7,MonitorSmartphone:h7,MonitorSpeaker:y7,MonitorStop:u7,MonitorUp:p7,MonitorX:k7,Moon:m7,MoonStar:M7,Mountain:g7,MountainSnow:v7,Mouse:I7,MouseOff:x7,MousePointer:C7,MousePointer2:_7,MousePointerBan:w7,MousePointerClick:L7,Move:D7,Move3d:lo,MoveDiagonal:N7,MoveDiagonal2:S7,MoveDown:q7,MoveDownLeft:$7,MoveDownRight:z7,MoveHorizontal:A7,MoveLeft:H7,MoveRight:j7,MoveUp:V7,MoveUpLeft:b7,MoveUpRight:P7,MoveVertical:T7,Music:E7,Music2:F7,Music3:R7,Music4:B7,Navigation:W7,Navigation2:U7,Navigation2Off:O7,NavigationOff:Z7,Network:G7,Newspaper:X7,Nfc:K7,Notebook:ef,NotebookPen:Q7,NotebookTabs:J7,NotebookText:Y7,NotepadText:nf,NotepadTextDashed:tf,Nut:af,NutOff:of,Octagon:rf,OctagonAlert:so,OctagonMinus:cf,OctagonPause:ho,OctagonX:yo,Omega:df,Option:lf,Orbit:sf,Origami:hf,Package:vf,Package2:yf,PackageCheck:uf,PackageMinus:pf,PackageOpen:kf,PackagePlus:ff,PackageSearch:Mf,PackageX:mf,PaintBucket:gf,PaintRoller:xf,Paintbrush:_f,PaintbrushVertical:uo,Palette:wf,PanelBottom:If,PanelBottomClose:Lf,PanelBottomDashed:po,PanelBottomOpen:Cf,PanelLeft:mo,PanelLeftClose:ko,PanelLeftDashed:fo,PanelLeftOpen:Mo,PanelRight:$f,PanelRightClose:Sf,PanelRightDashed:vo,PanelRightOpen:Nf,PanelTop:Af,PanelTopClose:zf,PanelTopDashed:go,PanelTopOpen:qf,PanelsLeftBottom:Hf,PanelsRightBottom:jf,PanelsTopLeft:xo,Paperclip:bf,Parentheses:Pf,ParkingMeter:Vf,PartyPopper:Tf,Pause:Df,PawPrint:Ff,PcCase:Rf,Pen:wo,PenLine:_o,PenOff:Bf,PenTool:Ef,Pencil:Wf,PencilLine:Of,PencilOff:Uf,PencilRuler:Zf,Pentagon:Gf,Percent:Xf,PersonStanding:Kf,PhilippinePeso:Qf,Phone:a9,PhoneCall:Jf,PhoneForwarded:Yf,PhoneIncoming:e9,PhoneMissed:t9,PhoneOff:n9,PhoneOutgoing:o9,Pi:c9,Piano:i9,Pickaxe:r9,PictureInPicture:l9,PictureInPicture2:d9,PiggyBank:s9,Pilcrow:u9,PilcrowLeft:h9,PilcrowRight:y9,Pill:k9,PillBottle:p9,Pin:M9,PinOff:f9,Pipette:m9,Pizza:v9,Plane:xc,PlaneLanding:g9,PlaneTakeoff:x9,Play:_9,Plug:L9,Plug2:w9,PlugZap:Lo,Plus:C9,Pocket:S9,PocketKnife:I9,Podcast:N9,Pointer:z9,PointerOff:$9,Popcorn:q9,Popsicle:A9,PoundSterling:H9,Power:b9,PowerOff:j9,Presentation:P9,Printer:T9,PrinterCheck:V9,Projector:D9,Proportions:F9,Puzzle:R9,Pyramid:B9,QrCode:E9,Quote:O9,Rabbit:U9,Radar:Z9,Radiation:W9,Radical:G9,Radio:Q9,RadioReceiver:X9,RadioTower:K9,Radius:J9,RailSymbol:Y9,Rainbow:eM,Rat:tM,Ratio:nM,Receipt:hM,ReceiptCent:oM,ReceiptEuro:aM,ReceiptIndianRupee:cM,ReceiptJapaneseYen:iM,ReceiptPoundSterling:rM,ReceiptRussianRuble:dM,ReceiptSwissFranc:lM,ReceiptText:sM,RectangleEllipsis:Co,RectangleHorizontal:yM,RectangleVertical:uM,Recycle:pM,Redo:MM,Redo2:kM,RedoDot:fM,RefreshCcw:vM,RefreshCcwDot:mM,RefreshCw:xM,RefreshCwOff:gM,Refrigerator:_M,Regex:wM,RemoveFormatting:LM,Repeat:SM,Repeat1:CM,Repeat2:IM,Replace:$M,ReplaceAll:NM,Reply:qM,ReplyAll:zM,Rewind:AM,Ribbon:HM,Rocket:jM,RockingChair:bM,RollerCoaster:PM,Rotate3d:Io,RotateCcw:TM,RotateCcwSquare:VM,RotateCw:FM,RotateCwSquare:DM,Route:BM,RouteOff:RM,Router:EM,Rows2:So,Rows3:No,Rows4:OM,Rss:UM,Ruler:ZM,RussianRuble:WM,Sailboat:GM,Salad:XM,Sandwich:KM,Satellite:JM,SatelliteDish:QM,Save:tm,SaveAll:YM,SaveOff:em,Scale:nm,Scale3d:$o,Scaling:om,Scan:ym,ScanBarcode:am,ScanEye:cm,ScanFace:im,ScanHeart:rm,ScanLine:dm,ScanQrCode:lm,ScanSearch:sm,ScanText:hm,School:um,Scissors:km,ScissorsLineDashed:pm,ScreenShare:Mm,ScreenShareOff:fm,Scroll:vm,ScrollText:mm,Search:Lm,SearchCheck:gm,SearchCode:xm,SearchSlash:_m,SearchX:wm,Section:Cm,Send:Sm,SendHorizontal:zo,SendToBack:Im,SeparatorHorizontal:Nm,SeparatorVertical:$m,Server:Hm,ServerCog:zm,ServerCrash:qm,ServerOff:Am,Settings:bm,Settings2:jm,Shapes:Pm,Share:Tm,Share2:Vm,Sheet:Dm,Shell:Fm,Shield:Xm,ShieldAlert:Rm,ShieldBan:Bm,ShieldCheck:Em,ShieldEllipsis:Om,ShieldHalf:Um,ShieldMinus:Zm,ShieldOff:Wm,ShieldPlus:_c,ShieldQuestion:Gm,ShieldX:qo,Ship:Qm,ShipWheel:Km,Shirt:Jm,ShoppingBag:Ym,ShoppingBasket:ev,ShoppingCart:tv,Shovel:nv,ShowerHead:ov,Shrink:av,Shrub:cv,Shuffle:iv,Sigma:rv,Signal:yv,SignalHigh:dv,SignalLow:lv,SignalMedium:sv,SignalZero:hv,Signature:uv,Signpost:kv,SignpostBig:pv,Siren:fv,SkipBack:Mv,SkipForward:mv,Skull:vv,Slack:gv,Slash:xv,Slice:_v,SlidersHorizontal:wv,SlidersVertical:Ao,Smartphone:Iv,SmartphoneCharging:Lv,SmartphoneNfc:Cv,Smile:Nv,SmilePlus:Sv,Snail:$v,Snowflake:zv,Sofa:qv,Soup:Av,Space:Hv,Spade:jv,Sparkle:bv,Sparkles:Ho,Speaker:Pv,Speech:Vv,SpellCheck:Dv,SpellCheck2:Tv,Spline:Fv,Split:Rv,SprayCan:Bv,Sprout:Ev,Square:Xv,SquareActivity:jo,SquareArrowDown:Vo,SquareArrowDownLeft:bo,SquareArrowDownRight:Po,SquareArrowLeft:To,SquareArrowOutDownLeft:Do,SquareArrowOutDownRight:Fo,SquareArrowOutUpLeft:Ro,SquareArrowOutUpRight:Bo,SquareArrowRight:Eo,SquareArrowUp:Zo,SquareArrowUpLeft:Oo,SquareArrowUpRight:Uo,SquareAsterisk:Wo,SquareBottomDashedScissors:Go,SquareChartGantt:L1,SquareCheck:Ko,SquareCheckBig:Xo,SquareChevronDown:Qo,SquareChevronLeft:Jo,SquareChevronRight:Yo,SquareChevronUp:ea,SquareCode:ta,SquareDashed:aa,SquareDashedBottom:Uv,SquareDashedBottomCode:Ov,SquareDashedKanban:na,SquareDashedMousePointer:oa,SquareDivide:ca,SquareDot:ia,SquareEqual:ra,SquareFunction:da,SquareKanban:la,SquareLibrary:sa,SquareM:ha,SquareMenu:ya,SquareMinus:ua,SquareMousePointer:pa,SquareParking:fa,SquareParkingOff:ka,SquarePen:Ke,SquarePercent:Ma,SquarePi:ma,SquarePilcrow:va,SquarePlay:ga,SquarePlus:xa,SquarePower:_a,SquareRadical:Zv,SquareScissors:wa,SquareSigma:La,SquareSlash:Ca,SquareSplitHorizontal:Ia,SquareSplitVertical:Sa,SquareSquare:Wv,SquareStack:Gv,SquareTerminal:Na,SquareUser:za,SquareUserRound:$a,SquareX:qa,Squircle:Kv,Squirrel:Qv,Stamp:Jv,Star:wc,StarHalf:Yv,StarOff:eg,StepBack:tg,StepForward:ng,Stethoscope:og,Sticker:ag,StickyNote:cg,Store:ig,StretchHorizontal:rg,StretchVertical:dg,Strikethrough:lg,Subscript:sg,Sun:kg,SunDim:hg,SunMedium:yg,SunMoon:ug,SunSnow:pg,Sunrise:fg,Sunset:Mg,Superscript:mg,SwatchBook:vg,SwissFranc:gg,SwitchCamera:xg,Sword:_g,Swords:wg,Syringe:Lg,Table:Ag,Table2:Cg,TableCellsMerge:Ig,TableCellsSplit:Sg,TableColumnsSplit:Ng,TableOfContents:$g,TableProperties:zg,TableRowsSplit:qg,Tablet:jg,TabletSmartphone:Hg,Tablets:bg,Tag:Pg,Tags:Vg,Tally1:Tg,Tally2:Dg,Tally3:Fg,Tally4:Rg,Tally5:Bg,Tangent:Eg,Target:Og,Telescope:Ug,Tent:Wg,TentTree:Zg,Terminal:Gg,TestTube:Xg,TestTubeDiagonal:Aa,TestTubes:Kg,Text:tx,TextCursor:Jg,TextCursorInput:Qg,TextQuote:Yg,TextSearch:ex,TextSelect:Ha,Theater:nx,Thermometer:cx,ThermometerSnowflake:ox,ThermometerSun:ax,ThumbsDown:ix,ThumbsUp:rx,Ticket:px,TicketCheck:dx,TicketMinus:lx,TicketPercent:sx,TicketPlus:hx,TicketSlash:yx,TicketX:ux,Tickets:fx,TicketsPlane:kx,Timer:vx,TimerOff:Mx,TimerReset:mx,ToggleLeft:gx,ToggleRight:xx,Toilet:_x,Tornado:wx,Torus:Lx,Touchpad:Ix,TouchpadOff:Cx,TowerControl:Sx,ToyBrick:Nx,Tractor:$x,TrafficCone:zx,TrainFront:Ax,TrainFrontTunnel:qx,TrainTrack:Hx,TramFront:ja,Trash:bx,Trash2:jx,TreeDeciduous:Px,TreePalm:ba,TreePine:Vx,Trees:Tx,Trello:Dx,TrendingDown:Fx,TrendingUp:Bx,TrendingUpDown:Rx,Triangle:Ux,TriangleAlert:Pa,TriangleDashed:Ex,TriangleRight:Ox,Trophy:Zx,Truck:Wx,Turtle:Gx,Tv:Kx,TvMinimal:Va,TvMinimalPlay:Xx,Twitch:Qx,Twitter:Jx,Type:e_,TypeOutline:Yx,Umbrella:n_,UmbrellaOff:t_,Underline:o_,Undo:i_,Undo2:a_,UndoDot:c_,UnfoldHorizontal:r_,UnfoldVertical:d_,Ungroup:l_,University:Ta,Unlink:h_,Unlink2:s_,Unplug:y_,Upload:u_,Usb:p_,User:L_,UserCheck:k_,UserCog:f_,UserMinus:M_,UserPen:m_,UserPlus:v_,UserRound:Oa,UserRoundCheck:Da,UserRoundCog:Fa,UserRoundMinus:Ra,UserRoundPen:g_,UserRoundPlus:Ba,UserRoundSearch:x_,UserRoundX:Ea,UserSearch:__,UserX:w_,Users:C_,UsersRound:Ua,Utensils:Wa,UtensilsCrossed:Za,UtilityPole:I_,Variable:S_,Vault:N_,Vegan:$_,VenetianMask:z_,Vibrate:A_,VibrateOff:q_,Video:j_,VideoOff:H_,Videotape:b_,View:P_,Voicemail:V_,Volleyball:T_,Volume:E_,Volume1:D_,Volume2:F_,VolumeOff:R_,VolumeX:B_,Vote:O_,Wallet:Z_,WalletCards:U_,WalletMinimal:Ga,Wallpaper:W_,Wand:G_,WandSparkles:Xa,Warehouse:X_,WashingMachine:K_,Watch:Q_,Waves:Y_,WavesLadder:J_,Waypoints:ew,Webcam:tw,Webhook:ow,WebhookOff:nw,Weight:aw,Wheat:iw,WheatOff:cw,WholeWord:rw,Wifi:yw,WifiHigh:dw,WifiLow:lw,WifiOff:sw,WifiZero:hw,Wind:pw,WindArrowDown:uw,Wine:fw,WineOff:kw,Workflow:Mw,Worm:mw,WrapText:vw,Wrench:gw,X:xw,Youtube:_w,Zap:Lw,ZapOff:ww,ZoomIn:Cw,ZoomOut:Iw},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2e=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Vi,AArrowDownIcon:Vi,AArrowUp:Ti,AArrowUpIcon:Ti,ALargeSmall:Di,ALargeSmallIcon:Di,Accessibility:Fi,AccessibilityIcon:Fi,Activity:Ri,ActivityIcon:Ri,ActivitySquare:jo,ActivitySquareIcon:jo,AirVent:Bi,AirVentIcon:Bi,Airplay:Ei,AirplayIcon:Ei,AlarmCheck:ft,AlarmCheckIcon:ft,AlarmClock:Ui,AlarmClockCheck:ft,AlarmClockCheckIcon:ft,AlarmClockIcon:Ui,AlarmClockMinus:Mt,AlarmClockMinusIcon:Mt,AlarmClockOff:Oi,AlarmClockOffIcon:Oi,AlarmClockPlus:mt,AlarmClockPlusIcon:mt,AlarmMinus:Mt,AlarmMinusIcon:Mt,AlarmPlus:mt,AlarmPlusIcon:mt,AlarmSmoke:Zi,AlarmSmokeIcon:Zi,Album:Wi,AlbumIcon:Wi,AlertCircle:Ut,AlertCircleIcon:Ut,AlertOctagon:so,AlertOctagonIcon:so,AlertTriangle:Pa,AlertTriangleIcon:Pa,AlignCenter:Ki,AlignCenterHorizontal:Gi,AlignCenterHorizontalIcon:Gi,AlignCenterIcon:Ki,AlignCenterVertical:Xi,AlignCenterVerticalIcon:Xi,AlignEndHorizontal:Qi,AlignEndHorizontalIcon:Qi,AlignEndVertical:Ji,AlignEndVerticalIcon:Ji,AlignHorizontalDistributeCenter:Yi,AlignHorizontalDistributeCenterIcon:Yi,AlignHorizontalDistributeEnd:er,AlignHorizontalDistributeEndIcon:er,AlignHorizontalDistributeStart:tr,AlignHorizontalDistributeStartIcon:tr,AlignHorizontalJustifyCenter:nr,AlignHorizontalJustifyCenterIcon:nr,AlignHorizontalJustifyEnd:or,AlignHorizontalJustifyEndIcon:or,AlignHorizontalJustifyStart:ar,AlignHorizontalJustifyStartIcon:ar,AlignHorizontalSpaceAround:cr,AlignHorizontalSpaceAroundIcon:cr,AlignHorizontalSpaceBetween:ir,AlignHorizontalSpaceBetweenIcon:ir,AlignJustify:rr,AlignJustifyIcon:rr,AlignLeft:dr,AlignLeftIcon:dr,AlignRight:lr,AlignRightIcon:lr,AlignStartHorizontal:sr,AlignStartHorizontalIcon:sr,AlignStartVertical:hr,AlignStartVerticalIcon:hr,AlignVerticalDistributeCenter:yr,AlignVerticalDistributeCenterIcon:yr,AlignVerticalDistributeEnd:ur,AlignVerticalDistributeEndIcon:ur,AlignVerticalDistributeStart:pr,AlignVerticalDistributeStartIcon:pr,AlignVerticalJustifyCenter:kr,AlignVerticalJustifyCenterIcon:kr,AlignVerticalJustifyEnd:fr,AlignVerticalJustifyEndIcon:fr,AlignVerticalJustifyStart:Mr,AlignVerticalJustifyStartIcon:Mr,AlignVerticalSpaceAround:mr,AlignVerticalSpaceAroundIcon:mr,AlignVerticalSpaceBetween:vr,AlignVerticalSpaceBetweenIcon:vr,Ambulance:gr,AmbulanceIcon:gr,Ampersand:xr,AmpersandIcon:xr,Ampersands:_r,AmpersandsIcon:_r,Amphora:wr,AmphoraIcon:wr,Anchor:Lr,AnchorIcon:Lr,Angry:Cr,AngryIcon:Cr,Annoyed:Ir,AnnoyedIcon:Ir,Antenna:Sr,AntennaIcon:Sr,Anvil:Nr,AnvilIcon:Nr,Aperture:$r,ApertureIcon:$r,AppWindow:qr,AppWindowIcon:qr,AppWindowMac:zr,AppWindowMacIcon:zr,Apple:Ar,AppleIcon:Ar,Archive:br,ArchiveIcon:br,ArchiveRestore:Hr,ArchiveRestoreIcon:Hr,ArchiveX:jr,ArchiveXIcon:jr,AreaChart:At,AreaChartIcon:At,Armchair:Pr,ArmchairIcon:Pr,ArrowBigDown:Tr,ArrowBigDownDash:Vr,ArrowBigDownDashIcon:Vr,ArrowBigDownIcon:Tr,ArrowBigLeft:Fr,ArrowBigLeftDash:Dr,ArrowBigLeftDashIcon:Dr,ArrowBigLeftIcon:Fr,ArrowBigRight:Br,ArrowBigRightDash:Rr,ArrowBigRightDashIcon:Rr,ArrowBigRightIcon:Br,ArrowBigUp:Or,ArrowBigUpDash:Er,ArrowBigUpDashIcon:Er,ArrowBigUpIcon:Or,ArrowDown:e0,ArrowDown01:Ur,ArrowDown01Icon:Ur,ArrowDown10:Zr,ArrowDown10Icon:Zr,ArrowDownAZ:vt,ArrowDownAZIcon:vt,ArrowDownAz:vt,ArrowDownAzIcon:vt,ArrowDownCircle:Zt,ArrowDownCircleIcon:Zt,ArrowDownFromLine:Wr,ArrowDownFromLineIcon:Wr,ArrowDownIcon:e0,ArrowDownLeft:Gr,ArrowDownLeftFromCircle:Gt,ArrowDownLeftFromCircleIcon:Gt,ArrowDownLeftFromSquare:Do,ArrowDownLeftFromSquareIcon:Do,ArrowDownLeftIcon:Gr,ArrowDownLeftSquare:bo,ArrowDownLeftSquareIcon:bo,ArrowDownNarrowWide:Xr,ArrowDownNarrowWideIcon:Xr,ArrowDownRight:Kr,ArrowDownRightFromCircle:Xt,ArrowDownRightFromCircleIcon:Xt,ArrowDownRightFromSquare:Fo,ArrowDownRightFromSquareIcon:Fo,ArrowDownRightIcon:Kr,ArrowDownRightSquare:Po,ArrowDownRightSquareIcon:Po,ArrowDownSquare:Vo,ArrowDownSquareIcon:Vo,ArrowDownToDot:Qr,ArrowDownToDotIcon:Qr,ArrowDownToLine:Jr,ArrowDownToLineIcon:Jr,ArrowDownUp:Yr,ArrowDownUpIcon:Yr,ArrowDownWideNarrow:gt,ArrowDownWideNarrowIcon:gt,ArrowDownZA:xt,ArrowDownZAIcon:xt,ArrowDownZa:xt,ArrowDownZaIcon:xt,ArrowLeft:a0,ArrowLeftCircle:Wt,ArrowLeftCircleIcon:Wt,ArrowLeftFromLine:t0,ArrowLeftFromLineIcon:t0,ArrowLeftIcon:a0,ArrowLeftRight:n0,ArrowLeftRightIcon:n0,ArrowLeftSquare:To,ArrowLeftSquareIcon:To,ArrowLeftToLine:o0,ArrowLeftToLineIcon:o0,ArrowRight:d0,ArrowRightCircle:Jt,ArrowRightCircleIcon:Jt,ArrowRightFromLine:c0,ArrowRightFromLineIcon:c0,ArrowRightIcon:d0,ArrowRightLeft:i0,ArrowRightLeftIcon:i0,ArrowRightSquare:Eo,ArrowRightSquareIcon:Eo,ArrowRightToLine:r0,ArrowRightToLineIcon:r0,ArrowUp:m0,ArrowUp01:l0,ArrowUp01Icon:l0,ArrowUp10:s0,ArrowUp10Icon:s0,ArrowUpAZ:_t,ArrowUpAZIcon:_t,ArrowUpAz:_t,ArrowUpAzIcon:_t,ArrowUpCircle:Yt,ArrowUpCircleIcon:Yt,ArrowUpDown:h0,ArrowUpDownIcon:h0,ArrowUpFromDot:y0,ArrowUpFromDotIcon:y0,ArrowUpFromLine:u0,ArrowUpFromLineIcon:u0,ArrowUpIcon:m0,ArrowUpLeft:p0,ArrowUpLeftFromCircle:Kt,ArrowUpLeftFromCircleIcon:Kt,ArrowUpLeftFromSquare:Ro,ArrowUpLeftFromSquareIcon:Ro,ArrowUpLeftIcon:p0,ArrowUpLeftSquare:Oo,ArrowUpLeftSquareIcon:Oo,ArrowUpNarrowWide:wt,ArrowUpNarrowWideIcon:wt,ArrowUpRight:k0,ArrowUpRightFromCircle:Qt,ArrowUpRightFromCircleIcon:Qt,ArrowUpRightFromSquare:Bo,ArrowUpRightFromSquareIcon:Bo,ArrowUpRightIcon:k0,ArrowUpRightSquare:Uo,ArrowUpRightSquareIcon:Uo,ArrowUpSquare:Zo,ArrowUpSquareIcon:Zo,ArrowUpToLine:f0,ArrowUpToLineIcon:f0,ArrowUpWideNarrow:M0,ArrowUpWideNarrowIcon:M0,ArrowUpZA:Lt,ArrowUpZAIcon:Lt,ArrowUpZa:Lt,ArrowUpZaIcon:Lt,ArrowsUpFromLine:v0,ArrowsUpFromLineIcon:v0,Asterisk:g0,AsteriskIcon:g0,AsteriskSquare:Wo,AsteriskSquareIcon:Wo,AtSign:x0,AtSignIcon:x0,Atom:_0,AtomIcon:_0,AudioLines:w0,AudioLinesIcon:w0,AudioWaveform:L0,AudioWaveformIcon:L0,Award:C0,AwardIcon:C0,Axe:I0,AxeIcon:I0,Axis3D:Ct,Axis3DIcon:Ct,Axis3d:Ct,Axis3dIcon:Ct,Baby:S0,BabyIcon:S0,Backpack:N0,BackpackIcon:N0,Badge:O0,BadgeAlert:$0,BadgeAlertIcon:$0,BadgeCent:z0,BadgeCentIcon:z0,BadgeCheck:It,BadgeCheckIcon:It,BadgeDollarSign:q0,BadgeDollarSignIcon:q0,BadgeEuro:A0,BadgeEuroIcon:A0,BadgeHelp:H0,BadgeHelpIcon:H0,BadgeIcon:O0,BadgeIndianRupee:j0,BadgeIndianRupeeIcon:j0,BadgeInfo:b0,BadgeInfoIcon:b0,BadgeJapaneseYen:P0,BadgeJapaneseYenIcon:P0,BadgeMinus:V0,BadgeMinusIcon:V0,BadgePercent:T0,BadgePercentIcon:T0,BadgePlus:D0,BadgePlusIcon:D0,BadgePoundSterling:F0,BadgePoundSterlingIcon:F0,BadgeRussianRuble:R0,BadgeRussianRubleIcon:R0,BadgeSwissFranc:B0,BadgeSwissFrancIcon:B0,BadgeX:E0,BadgeXIcon:E0,BaggageClaim:U0,BaggageClaimIcon:U0,Ban:Z0,BanIcon:Z0,Banana:W0,BananaIcon:W0,Bandage:G0,BandageIcon:G0,Banknote:X0,BanknoteIcon:X0,BarChart:Ft,BarChart2:Rt,BarChart2Icon:Rt,BarChart3:Tt,BarChart3Icon:Tt,BarChart4:Vt,BarChart4Icon:Vt,BarChartBig:Pt,BarChartBigIcon:Pt,BarChartHorizontal:jt,BarChartHorizontalBig:Ht,BarChartHorizontalBigIcon:Ht,BarChartHorizontalIcon:jt,BarChartIcon:Ft,Barcode:K0,BarcodeIcon:K0,Baseline:Q0,BaselineIcon:Q0,Bath:J0,BathIcon:J0,Battery:ad,BatteryCharging:Y0,BatteryChargingIcon:Y0,BatteryFull:ed,BatteryFullIcon:ed,BatteryIcon:ad,BatteryLow:td,BatteryLowIcon:td,BatteryMedium:nd,BatteryMediumIcon:nd,BatteryWarning:od,BatteryWarningIcon:od,Beaker:cd,BeakerIcon:cd,Bean:rd,BeanIcon:rd,BeanOff:id,BeanOffIcon:id,Bed:sd,BedDouble:dd,BedDoubleIcon:dd,BedIcon:sd,BedSingle:ld,BedSingleIcon:ld,Beef:hd,BeefIcon:hd,Beer:ud,BeerIcon:ud,BeerOff:yd,BeerOffIcon:yd,Bell:gd,BellDot:pd,BellDotIcon:pd,BellElectric:kd,BellElectricIcon:kd,BellIcon:gd,BellMinus:fd,BellMinusIcon:fd,BellOff:Md,BellOffIcon:Md,BellPlus:md,BellPlusIcon:md,BellRing:vd,BellRingIcon:vd,BetweenHorizonalEnd:St,BetweenHorizonalEndIcon:St,BetweenHorizonalStart:Nt,BetweenHorizonalStartIcon:Nt,BetweenHorizontalEnd:St,BetweenHorizontalEndIcon:St,BetweenHorizontalStart:Nt,BetweenHorizontalStartIcon:Nt,BetweenVerticalEnd:xd,BetweenVerticalEndIcon:xd,BetweenVerticalStart:_d,BetweenVerticalStartIcon:_d,BicepsFlexed:wd,BicepsFlexedIcon:wd,Bike:Ld,BikeIcon:Ld,Binary:Cd,BinaryIcon:Cd,Binoculars:Id,BinocularsIcon:Id,Biohazard:Sd,BiohazardIcon:Sd,Bird:Nd,BirdIcon:Nd,Bitcoin:$d,BitcoinIcon:$d,Blend:zd,BlendIcon:zd,Blinds:qd,BlindsIcon:qd,Blocks:Ad,BlocksIcon:Ad,Bluetooth:Pd,BluetoothConnected:Hd,BluetoothConnectedIcon:Hd,BluetoothIcon:Pd,BluetoothOff:jd,BluetoothOffIcon:jd,BluetoothSearching:bd,BluetoothSearchingIcon:bd,Bold:Vd,BoldIcon:Vd,Bolt:Td,BoltIcon:Td,Bomb:Dd,BombIcon:Dd,Bone:Fd,BoneIcon:Fd,Book:ll,BookA:Rd,BookAIcon:Rd,BookAudio:Bd,BookAudioIcon:Bd,BookCheck:Ed,BookCheckIcon:Ed,BookCopy:Od,BookCopyIcon:Od,BookDashed:$t,BookDashedIcon:$t,BookDown:Ud,BookDownIcon:Ud,BookHeadphones:Zd,BookHeadphonesIcon:Zd,BookHeart:Wd,BookHeartIcon:Wd,BookIcon:ll,BookImage:Gd,BookImageIcon:Gd,BookKey:Xd,BookKeyIcon:Xd,BookLock:Kd,BookLockIcon:Kd,BookMarked:Qd,BookMarkedIcon:Qd,BookMinus:Jd,BookMinusIcon:Jd,BookOpen:tl,BookOpenCheck:Yd,BookOpenCheckIcon:Yd,BookOpenIcon:tl,BookOpenText:el,BookOpenTextIcon:el,BookPlus:nl,BookPlusIcon:nl,BookTemplate:$t,BookTemplateIcon:$t,BookText:ol,BookTextIcon:ol,BookType:al,BookTypeIcon:al,BookUp:il,BookUp2:cl,BookUp2Icon:cl,BookUpIcon:il,BookUser:rl,BookUserIcon:rl,BookX:dl,BookXIcon:dl,Bookmark:pl,BookmarkCheck:sl,BookmarkCheckIcon:sl,BookmarkIcon:pl,BookmarkMinus:hl,BookmarkMinusIcon:hl,BookmarkPlus:yl,BookmarkPlusIcon:yl,BookmarkX:ul,BookmarkXIcon:ul,BoomBox:kl,BoomBoxIcon:kl,Bot:ml,BotIcon:ml,BotMessageSquare:fl,BotMessageSquareIcon:fl,BotOff:Ml,BotOffIcon:Ml,Box:vl,BoxIcon:vl,BoxSelect:aa,BoxSelectIcon:aa,Boxes:gl,BoxesIcon:gl,Braces:zt,BracesIcon:zt,Brackets:xl,BracketsIcon:xl,Brain:Ll,BrainCircuit:_l,BrainCircuitIcon:_l,BrainCog:wl,BrainCogIcon:wl,BrainIcon:Ll,BrickWall:Cl,BrickWallIcon:Cl,Briefcase:Nl,BriefcaseBusiness:pc,BriefcaseBusinessIcon:pc,BriefcaseConveyorBelt:Il,BriefcaseConveyorBeltIcon:Il,BriefcaseIcon:Nl,BriefcaseMedical:Sl,BriefcaseMedicalIcon:Sl,BringToFront:$l,BringToFrontIcon:$l,Brush:zl,BrushIcon:zl,Bug:Hl,BugIcon:Hl,BugOff:ql,BugOffIcon:ql,BugPlay:Al,BugPlayIcon:Al,Building:bl,Building2:jl,Building2Icon:jl,BuildingIcon:bl,Bus:Vl,BusFront:Pl,BusFrontIcon:Pl,BusIcon:Vl,Cable:Dl,CableCar:Tl,CableCarIcon:Tl,CableIcon:Dl,Cake:Rl,CakeIcon:Rl,CakeSlice:Fl,CakeSliceIcon:Fl,Calculator:Bl,CalculatorIcon:Bl,Calendar:ls,Calendar1:El,Calendar1Icon:El,CalendarArrowDown:Ol,CalendarArrowDownIcon:Ol,CalendarArrowUp:Ul,CalendarArrowUpIcon:Ul,CalendarCheck:Wl,CalendarCheck2:Zl,CalendarCheck2Icon:Zl,CalendarCheckIcon:Wl,CalendarClock:Gl,CalendarClockIcon:Gl,CalendarCog:Xl,CalendarCogIcon:Xl,CalendarDays:Kl,CalendarDaysIcon:Kl,CalendarFold:Ql,CalendarFoldIcon:Ql,CalendarHeart:Jl,CalendarHeartIcon:Jl,CalendarIcon:ls,CalendarMinus:es,CalendarMinus2:Yl,CalendarMinus2Icon:Yl,CalendarMinusIcon:es,CalendarOff:ts,CalendarOffIcon:ts,CalendarPlus:os,CalendarPlus2:ns,CalendarPlus2Icon:ns,CalendarPlusIcon:os,CalendarRange:as,CalendarRangeIcon:as,CalendarSearch:cs,CalendarSearchIcon:cs,CalendarSync:is,CalendarSyncIcon:is,CalendarX:ds,CalendarX2:rs,CalendarX2Icon:rs,CalendarXIcon:ds,Camera:hs,CameraIcon:hs,CameraOff:ss,CameraOffIcon:ss,CandlestickChart:bt,CandlestickChartIcon:bt,Candy:ps,CandyCane:ys,CandyCaneIcon:ys,CandyIcon:ps,CandyOff:us,CandyOffIcon:us,Cannabis:ks,CannabisIcon:ks,Captions:qt,CaptionsIcon:qt,CaptionsOff:fs,CaptionsOffIcon:fs,Car:fc,CarFront:Ms,CarFrontIcon:Ms,CarIcon:fc,CarTaxiFront:kc,CarTaxiFrontIcon:kc,Caravan:ms,CaravanIcon:ms,Carrot:vs,CarrotIcon:vs,CaseLower:gs,CaseLowerIcon:gs,CaseSensitive:xs,CaseSensitiveIcon:xs,CaseUpper:_s,CaseUpperIcon:_s,CassetteTape:ws,CassetteTapeIcon:ws,Cast:Ls,CastIcon:Ls,Castle:Cs,CastleIcon:Cs,Cat:Is,CatIcon:Is,Cctv:Ss,CctvIcon:Ss,ChartArea:At,ChartAreaIcon:At,ChartBar:jt,ChartBarBig:Ht,ChartBarBigIcon:Ht,ChartBarDecreasing:Ns,ChartBarDecreasingIcon:Ns,ChartBarIcon:jt,ChartBarIncreasing:$s,ChartBarIncreasingIcon:$s,ChartBarStacked:zs,ChartBarStackedIcon:zs,ChartCandlestick:bt,ChartCandlestickIcon:bt,ChartColumn:Tt,ChartColumnBig:Pt,ChartColumnBigIcon:Pt,ChartColumnDecreasing:qs,ChartColumnDecreasingIcon:qs,ChartColumnIcon:Tt,ChartColumnIncreasing:Vt,ChartColumnIncreasingIcon:Vt,ChartColumnStacked:As,ChartColumnStackedIcon:As,ChartGantt:Hs,ChartGanttIcon:Hs,ChartLine:Dt,ChartLineIcon:Dt,ChartNetwork:js,ChartNetworkIcon:js,ChartNoAxesColumn:Rt,ChartNoAxesColumnDecreasing:bs,ChartNoAxesColumnDecreasingIcon:bs,ChartNoAxesColumnIcon:Rt,ChartNoAxesColumnIncreasing:Ft,ChartNoAxesColumnIncreasingIcon:Ft,ChartNoAxesCombined:Ps,ChartNoAxesCombinedIcon:Ps,ChartNoAxesGantt:Bt,ChartNoAxesGanttIcon:Bt,ChartPie:Et,ChartPieIcon:Et,ChartScatter:Ot,ChartScatterIcon:Ot,ChartSpline:Vs,ChartSplineIcon:Vs,Check:Ds,CheckCheck:Ts,CheckCheckIcon:Ts,CheckCircle:en,CheckCircle2:tn,CheckCircle2Icon:tn,CheckCircleIcon:en,CheckIcon:Ds,CheckSquare:Xo,CheckSquare2:Ko,CheckSquare2Icon:Ko,CheckSquareIcon:Xo,ChefHat:Fs,ChefHatIcon:Fs,Cherry:Rs,CherryIcon:Rs,ChevronDown:Bs,ChevronDownCircle:nn,ChevronDownCircleIcon:nn,ChevronDownIcon:Bs,ChevronDownSquare:Qo,ChevronDownSquareIcon:Qo,ChevronFirst:Es,ChevronFirstIcon:Es,ChevronLast:Os,ChevronLastIcon:Os,ChevronLeft:Us,ChevronLeftCircle:on,ChevronLeftCircleIcon:on,ChevronLeftIcon:Us,ChevronLeftSquare:Jo,ChevronLeftSquareIcon:Jo,ChevronRight:Zs,ChevronRightCircle:an,ChevronRightCircleIcon:an,ChevronRightIcon:Zs,ChevronRightSquare:Yo,ChevronRightSquareIcon:Yo,ChevronUp:Ws,ChevronUpCircle:cn,ChevronUpCircleIcon:cn,ChevronUpIcon:Ws,ChevronUpSquare:ea,ChevronUpSquareIcon:ea,ChevronsDown:Xs,ChevronsDownIcon:Xs,ChevronsDownUp:Gs,ChevronsDownUpIcon:Gs,ChevronsLeft:Js,ChevronsLeftIcon:Js,ChevronsLeftRight:Qs,ChevronsLeftRightEllipsis:Ks,ChevronsLeftRightEllipsisIcon:Ks,ChevronsLeftRightIcon:Qs,ChevronsRight:eh,ChevronsRightIcon:eh,ChevronsRightLeft:Ys,ChevronsRightLeftIcon:Ys,ChevronsUp:nh,ChevronsUpDown:th,ChevronsUpDownIcon:th,ChevronsUpIcon:nh,Chrome:oh,ChromeIcon:oh,Church:ah,ChurchIcon:ah,Cigarette:ih,CigaretteIcon:ih,CigaretteOff:ch,CigaretteOffIcon:ch,Circle:Mh,CircleAlert:Ut,CircleAlertIcon:Ut,CircleArrowDown:Zt,CircleArrowDownIcon:Zt,CircleArrowLeft:Wt,CircleArrowLeftIcon:Wt,CircleArrowOutDownLeft:Gt,CircleArrowOutDownLeftIcon:Gt,CircleArrowOutDownRight:Xt,CircleArrowOutDownRightIcon:Xt,CircleArrowOutUpLeft:Kt,CircleArrowOutUpLeftIcon:Kt,CircleArrowOutUpRight:Qt,CircleArrowOutUpRightIcon:Qt,CircleArrowRight:Jt,CircleArrowRightIcon:Jt,CircleArrowUp:Yt,CircleArrowUpIcon:Yt,CircleCheck:tn,CircleCheckBig:en,CircleCheckBigIcon:en,CircleCheckIcon:tn,CircleChevronDown:nn,CircleChevronDownIcon:nn,CircleChevronLeft:on,CircleChevronLeftIcon:on,CircleChevronRight:an,CircleChevronRightIcon:an,CircleChevronUp:cn,CircleChevronUpIcon:cn,CircleDashed:rh,CircleDashedIcon:rh,CircleDivide:rn,CircleDivideIcon:rn,CircleDollarSign:dh,CircleDollarSignIcon:dh,CircleDot:sh,CircleDotDashed:lh,CircleDotDashedIcon:lh,CircleDotIcon:sh,CircleEllipsis:hh,CircleEllipsisIcon:hh,CircleEqual:yh,CircleEqualIcon:yh,CircleFadingArrowUp:uh,CircleFadingArrowUpIcon:uh,CircleFadingPlus:ph,CircleFadingPlusIcon:ph,CircleGauge:dn,CircleGaugeIcon:dn,CircleHelp:ln,CircleHelpIcon:ln,CircleIcon:Mh,CircleMinus:sn,CircleMinusIcon:sn,CircleOff:kh,CircleOffIcon:kh,CircleParking:yn,CircleParkingIcon:yn,CircleParkingOff:hn,CircleParkingOffIcon:hn,CirclePause:un,CirclePauseIcon:un,CirclePercent:pn,CirclePercentIcon:pn,CirclePlay:kn,CirclePlayIcon:kn,CirclePlus:fn,CirclePlusIcon:fn,CirclePower:Mn,CirclePowerIcon:Mn,CircleSlash:fh,CircleSlash2:mn,CircleSlash2Icon:mn,CircleSlashIcon:fh,CircleSlashed:mn,CircleSlashedIcon:mn,CircleStop:vn,CircleStopIcon:vn,CircleUser:xn,CircleUserIcon:xn,CircleUserRound:gn,CircleUserRoundIcon:gn,CircleX:_n,CircleXIcon:_n,CircuitBoard:mh,CircuitBoardIcon:mh,Citrus:vh,CitrusIcon:vh,Clapperboard:gh,ClapperboardIcon:gh,Clipboard:$h,ClipboardCheck:xh,ClipboardCheckIcon:xh,ClipboardCopy:_h,ClipboardCopyIcon:_h,ClipboardEdit:Ln,ClipboardEditIcon:Ln,ClipboardIcon:$h,ClipboardList:wh,ClipboardListIcon:wh,ClipboardMinus:Lh,ClipboardMinusIcon:Lh,ClipboardPaste:Ch,ClipboardPasteIcon:Ch,ClipboardPen:Ln,ClipboardPenIcon:Ln,ClipboardPenLine:wn,ClipboardPenLineIcon:wn,ClipboardPlus:Ih,ClipboardPlusIcon:Ih,ClipboardSignature:wn,ClipboardSignatureIcon:wn,ClipboardType:Sh,ClipboardTypeIcon:Sh,ClipboardX:Nh,ClipboardXIcon:Nh,Clock:Mc,Clock1:zh,Clock10:qh,Clock10Icon:qh,Clock11:Ah,Clock11Icon:Ah,Clock12:Hh,Clock12Icon:Hh,Clock1Icon:zh,Clock2:jh,Clock2Icon:jh,Clock3:bh,Clock3Icon:bh,Clock4:Ph,Clock4Icon:Ph,Clock5:Vh,Clock5Icon:Vh,Clock6:Th,Clock6Icon:Th,Clock7:Dh,Clock7Icon:Dh,Clock8:Fh,Clock8Icon:Fh,Clock9:Rh,Clock9Icon:Rh,ClockAlert:Bh,ClockAlertIcon:Bh,ClockArrowDown:Eh,ClockArrowDownIcon:Eh,ClockArrowUp:Oh,ClockArrowUpIcon:Oh,ClockIcon:Mc,Cloud:cy,CloudAlert:Uh,CloudAlertIcon:Uh,CloudCog:Zh,CloudCogIcon:Zh,CloudDownload:Cn,CloudDownloadIcon:Cn,CloudDrizzle:Wh,CloudDrizzleIcon:Wh,CloudFog:Gh,CloudFogIcon:Gh,CloudHail:Xh,CloudHailIcon:Xh,CloudIcon:cy,CloudLightning:Kh,CloudLightningIcon:Kh,CloudMoon:Jh,CloudMoonIcon:Jh,CloudMoonRain:Qh,CloudMoonRainIcon:Qh,CloudOff:Yh,CloudOffIcon:Yh,CloudRain:ty,CloudRainIcon:ty,CloudRainWind:ey,CloudRainWindIcon:ey,CloudSnow:ny,CloudSnowIcon:ny,CloudSun:ay,CloudSunIcon:ay,CloudSunRain:oy,CloudSunRainIcon:oy,CloudUpload:In,CloudUploadIcon:In,Cloudy:iy,CloudyIcon:iy,Clover:ry,CloverIcon:ry,Club:dy,ClubIcon:dy,Code:ly,Code2:Sn,Code2Icon:Sn,CodeIcon:ly,CodeSquare:ta,CodeSquareIcon:ta,CodeXml:Sn,CodeXmlIcon:Sn,Codepen:sy,CodepenIcon:sy,Codesandbox:hy,CodesandboxIcon:hy,Coffee:yy,CoffeeIcon:yy,Cog:uy,CogIcon:uy,Coins:py,CoinsIcon:py,Columns:Nn,Columns2:Nn,Columns2Icon:Nn,Columns3:$n,Columns3Icon:$n,Columns4:ky,Columns4Icon:ky,ColumnsIcon:Nn,Combine:fy,CombineIcon:fy,Command:My,CommandIcon:My,Compass:my,CompassIcon:my,Component:vy,ComponentIcon:vy,Computer:gy,ComputerIcon:gy,ConciergeBell:xy,ConciergeBellIcon:xy,Cone:_y,ConeIcon:_y,Construction:wy,ConstructionIcon:wy,Contact:Ly,Contact2:zn,Contact2Icon:zn,ContactIcon:Ly,ContactRound:zn,ContactRoundIcon:zn,Container:Cy,ContainerIcon:Cy,Contrast:Iy,ContrastIcon:Iy,Cookie:Sy,CookieIcon:Sy,CookingPot:Ny,CookingPotIcon:Ny,Copy:jy,CopyCheck:$y,CopyCheckIcon:$y,CopyIcon:jy,CopyMinus:zy,CopyMinusIcon:zy,CopyPlus:qy,CopyPlusIcon:qy,CopySlash:Ay,CopySlashIcon:Ay,CopyX:Hy,CopyXIcon:Hy,Copyleft:by,CopyleftIcon:by,Copyright:Py,CopyrightIcon:Py,CornerDownLeft:Vy,CornerDownLeftIcon:Vy,CornerDownRight:Ty,CornerDownRightIcon:Ty,CornerLeftDown:Dy,CornerLeftDownIcon:Dy,CornerLeftUp:Fy,CornerLeftUpIcon:Fy,CornerRightDown:Ry,CornerRightDownIcon:Ry,CornerRightUp:By,CornerRightUpIcon:By,CornerUpLeft:Ey,CornerUpLeftIcon:Ey,CornerUpRight:Oy,CornerUpRightIcon:Oy,Cpu:Uy,CpuIcon:Uy,CreativeCommons:Zy,CreativeCommonsIcon:Zy,CreditCard:Wy,CreditCardIcon:Wy,Croissant:Gy,CroissantIcon:Gy,Crop:Xy,CropIcon:Xy,Cross:Ky,CrossIcon:Ky,Crosshair:Qy,CrosshairIcon:Qy,Crown:Jy,CrownIcon:Jy,Cuboid:Yy,CuboidIcon:Yy,CupSoda:eu,CupSodaIcon:eu,CurlyBraces:zt,CurlyBracesIcon:zt,Currency:tu,CurrencyIcon:tu,Cylinder:nu,CylinderIcon:nu,Dam:ou,DamIcon:ou,Database:iu,DatabaseBackup:au,DatabaseBackupIcon:au,DatabaseIcon:iu,DatabaseZap:cu,DatabaseZapIcon:cu,Delete:ru,DeleteIcon:ru,Dessert:du,DessertIcon:du,Diameter:lu,DiameterIcon:lu,Diamond:yu,DiamondIcon:yu,DiamondMinus:su,DiamondMinusIcon:su,DiamondPercent:qn,DiamondPercentIcon:qn,DiamondPlus:hu,DiamondPlusIcon:hu,Dice1:uu,Dice1Icon:uu,Dice2:pu,Dice2Icon:pu,Dice3:ku,Dice3Icon:ku,Dice4:fu,Dice4Icon:fu,Dice5:Mu,Dice5Icon:Mu,Dice6:mu,Dice6Icon:mu,Dices:vu,DicesIcon:vu,Diff:gu,DiffIcon:gu,Disc:Lu,Disc2:xu,Disc2Icon:xu,Disc3:_u,Disc3Icon:_u,DiscAlbum:wu,DiscAlbumIcon:wu,DiscIcon:Lu,Divide:Cu,DivideCircle:rn,DivideCircleIcon:rn,DivideIcon:Cu,DivideSquare:ca,DivideSquareIcon:ca,Dna:Su,DnaIcon:Su,DnaOff:Iu,DnaOffIcon:Iu,Dock:Nu,DockIcon:Nu,Dog:$u,DogIcon:$u,DollarSign:zu,DollarSignIcon:zu,Donut:qu,DonutIcon:qu,DoorClosed:Au,DoorClosedIcon:Au,DoorOpen:Hu,DoorOpenIcon:Hu,Dot:ju,DotIcon:ju,DotSquare:ia,DotSquareIcon:ia,Download:bu,DownloadCloud:Cn,DownloadCloudIcon:Cn,DownloadIcon:bu,DraftingCompass:Pu,DraftingCompassIcon:Pu,Drama:Vu,DramaIcon:Vu,Dribbble:Tu,DribbbleIcon:Tu,Drill:Du,DrillIcon:Du,Droplet:Ru,DropletIcon:Ru,DropletOff:Fu,DropletOffIcon:Fu,Droplets:Bu,DropletsIcon:Bu,Drum:Eu,DrumIcon:Eu,Drumstick:Ou,DrumstickIcon:Ou,Dumbbell:Uu,DumbbellIcon:Uu,Ear:Wu,EarIcon:Wu,EarOff:Zu,EarOffIcon:Zu,Earth:An,EarthIcon:An,EarthLock:Gu,EarthLockIcon:Gu,Eclipse:Xu,EclipseIcon:Xu,Edit:Ke,Edit2:wo,Edit2Icon:wo,Edit3:_o,Edit3Icon:_o,EditIcon:Ke,Egg:Ju,EggFried:Ku,EggFriedIcon:Ku,EggIcon:Ju,EggOff:Qu,EggOffIcon:Qu,Ellipsis:jn,EllipsisIcon:jn,EllipsisVertical:Hn,EllipsisVerticalIcon:Hn,Equal:tp,EqualApproximately:Yu,EqualApproximatelyIcon:Yu,EqualIcon:tp,EqualNot:ep,EqualNotIcon:ep,EqualSquare:ra,EqualSquareIcon:ra,Eraser:np,EraserIcon:np,EthernetPort:op,EthernetPortIcon:op,Euro:ap,EuroIcon:ap,Expand:cp,ExpandIcon:cp,ExternalLink:ip,ExternalLinkIcon:ip,Eye:lp,EyeClosed:rp,EyeClosedIcon:rp,EyeIcon:lp,EyeOff:dp,EyeOffIcon:dp,Facebook:sp,FacebookIcon:sp,Factory:hp,FactoryIcon:hp,Fan:yp,FanIcon:yp,FastForward:up,FastForwardIcon:up,Feather:pp,FeatherIcon:pp,Fence:kp,FenceIcon:kp,FerrisWheel:fp,FerrisWheelIcon:fp,Figma:Mp,FigmaIcon:Mp,File:p4,FileArchive:mp,FileArchiveIcon:mp,FileAudio:gp,FileAudio2:vp,FileAudio2Icon:vp,FileAudioIcon:gp,FileAxis3D:bn,FileAxis3DIcon:bn,FileAxis3d:bn,FileAxis3dIcon:bn,FileBadge:_p,FileBadge2:xp,FileBadge2Icon:xp,FileBadgeIcon:_p,FileBarChart:Pn,FileBarChart2:Vn,FileBarChart2Icon:Vn,FileBarChartIcon:Pn,FileBox:wp,FileBoxIcon:wp,FileChartColumn:Vn,FileChartColumnIcon:Vn,FileChartColumnIncreasing:Pn,FileChartColumnIncreasingIcon:Pn,FileChartLine:Tn,FileChartLineIcon:Tn,FileChartPie:Dn,FileChartPieIcon:Dn,FileCheck:Cp,FileCheck2:Lp,FileCheck2Icon:Lp,FileCheckIcon:Cp,FileClock:Ip,FileClockIcon:Ip,FileCode:Np,FileCode2:Sp,FileCode2Icon:Sp,FileCodeIcon:Np,FileCog:Fn,FileCog2:Fn,FileCog2Icon:Fn,FileCogIcon:Fn,FileDiff:$p,FileDiffIcon:$p,FileDigit:zp,FileDigitIcon:zp,FileDown:qp,FileDownIcon:qp,FileEdit:Bn,FileEditIcon:Bn,FileHeart:Ap,FileHeartIcon:Ap,FileIcon:p4,FileImage:Hp,FileImageIcon:Hp,FileInput:jp,FileInputIcon:jp,FileJson:Pp,FileJson2:bp,FileJson2Icon:bp,FileJsonIcon:Pp,FileKey:Tp,FileKey2:Vp,FileKey2Icon:Vp,FileKeyIcon:Tp,FileLineChart:Tn,FileLineChartIcon:Tn,FileLock:Fp,FileLock2:Dp,FileLock2Icon:Dp,FileLockIcon:Fp,FileMinus:Bp,FileMinus2:Rp,FileMinus2Icon:Rp,FileMinusIcon:Bp,FileMusic:Ep,FileMusicIcon:Ep,FileOutput:Op,FileOutputIcon:Op,FilePen:Bn,FilePenIcon:Bn,FilePenLine:Rn,FilePenLineIcon:Rn,FilePieChart:Dn,FilePieChartIcon:Dn,FilePlus:Zp,FilePlus2:Up,FilePlus2Icon:Up,FilePlusIcon:Zp,FileQuestion:Wp,FileQuestionIcon:Wp,FileScan:Gp,FileScanIcon:Gp,FileSearch:Kp,FileSearch2:Xp,FileSearch2Icon:Xp,FileSearchIcon:Kp,FileSignature:Rn,FileSignatureIcon:Rn,FileSliders:Qp,FileSlidersIcon:Qp,FileSpreadsheet:Jp,FileSpreadsheetIcon:Jp,FileStack:Yp,FileStackIcon:Yp,FileSymlink:e4,FileSymlinkIcon:e4,FileTerminal:t4,FileTerminalIcon:t4,FileText:n4,FileTextIcon:n4,FileType:a4,FileType2:o4,FileType2Icon:o4,FileTypeIcon:a4,FileUp:c4,FileUpIcon:c4,FileUser:i4,FileUserIcon:i4,FileVideo:d4,FileVideo2:r4,FileVideo2Icon:r4,FileVideoIcon:d4,FileVolume:s4,FileVolume2:l4,FileVolume2Icon:l4,FileVolumeIcon:s4,FileWarning:h4,FileWarningIcon:h4,FileX:u4,FileX2:y4,FileX2Icon:y4,FileXIcon:u4,Files:k4,FilesIcon:k4,Film:f4,FilmIcon:f4,Filter:m4,FilterIcon:m4,FilterX:M4,FilterXIcon:M4,Fingerprint:v4,FingerprintIcon:v4,FireExtinguisher:g4,FireExtinguisherIcon:g4,Fish:w4,FishIcon:w4,FishOff:x4,FishOffIcon:x4,FishSymbol:_4,FishSymbolIcon:_4,Flag:S4,FlagIcon:S4,FlagOff:L4,FlagOffIcon:L4,FlagTriangleLeft:C4,FlagTriangleLeftIcon:C4,FlagTriangleRight:I4,FlagTriangleRightIcon:I4,Flame:$4,FlameIcon:$4,FlameKindling:N4,FlameKindlingIcon:N4,Flashlight:q4,FlashlightIcon:q4,FlashlightOff:z4,FlashlightOffIcon:z4,FlaskConical:H4,FlaskConicalIcon:H4,FlaskConicalOff:A4,FlaskConicalOffIcon:A4,FlaskRound:j4,FlaskRoundIcon:j4,FlipHorizontal:P4,FlipHorizontal2:b4,FlipHorizontal2Icon:b4,FlipHorizontalIcon:P4,FlipVertical:T4,FlipVertical2:V4,FlipVertical2Icon:V4,FlipVerticalIcon:T4,Flower:F4,Flower2:D4,Flower2Icon:D4,FlowerIcon:F4,Focus:R4,FocusIcon:R4,FoldHorizontal:B4,FoldHorizontalIcon:B4,FoldVertical:E4,FoldVerticalIcon:E4,Folder:Mk,FolderArchive:O4,FolderArchiveIcon:O4,FolderCheck:U4,FolderCheckIcon:U4,FolderClock:Z4,FolderClockIcon:Z4,FolderClosed:W4,FolderClosedIcon:W4,FolderCode:G4,FolderCodeIcon:G4,FolderCog:En,FolderCog2:En,FolderCog2Icon:En,FolderCogIcon:En,FolderDot:X4,FolderDotIcon:X4,FolderDown:K4,FolderDownIcon:K4,FolderEdit:On,FolderEditIcon:On,FolderGit:J4,FolderGit2:Q4,FolderGit2Icon:Q4,FolderGitIcon:J4,FolderHeart:Y4,FolderHeartIcon:Y4,FolderIcon:Mk,FolderInput:ek,FolderInputIcon:ek,FolderKanban:tk,FolderKanbanIcon:tk,FolderKey:nk,FolderKeyIcon:nk,FolderLock:ok,FolderLockIcon:ok,FolderMinus:ak,FolderMinusIcon:ak,FolderOpen:ik,FolderOpenDot:ck,FolderOpenDotIcon:ck,FolderOpenIcon:ik,FolderOutput:rk,FolderOutputIcon:rk,FolderPen:On,FolderPenIcon:On,FolderPlus:dk,FolderPlusIcon:dk,FolderRoot:lk,FolderRootIcon:lk,FolderSearch:hk,FolderSearch2:sk,FolderSearch2Icon:sk,FolderSearchIcon:hk,FolderSymlink:yk,FolderSymlinkIcon:yk,FolderSync:uk,FolderSyncIcon:uk,FolderTree:pk,FolderTreeIcon:pk,FolderUp:kk,FolderUpIcon:kk,FolderX:fk,FolderXIcon:fk,Folders:mk,FoldersIcon:mk,Footprints:vk,FootprintsIcon:vk,ForkKnife:Wa,ForkKnifeCrossed:Za,ForkKnifeCrossedIcon:Za,ForkKnifeIcon:Wa,Forklift:gk,ForkliftIcon:gk,FormInput:Co,FormInputIcon:Co,Forward:xk,ForwardIcon:xk,Frame:_k,FrameIcon:_k,Framer:wk,FramerIcon:wk,Frown:Lk,FrownIcon:Lk,Fuel:Ck,FuelIcon:Ck,Fullscreen:Ik,FullscreenIcon:Ik,FunctionSquare:da,FunctionSquareIcon:da,GalleryHorizontal:Nk,GalleryHorizontalEnd:Sk,GalleryHorizontalEndIcon:Sk,GalleryHorizontalIcon:Nk,GalleryThumbnails:$k,GalleryThumbnailsIcon:$k,GalleryVertical:qk,GalleryVerticalEnd:zk,GalleryVerticalEndIcon:zk,GalleryVerticalIcon:qk,Gamepad:Hk,Gamepad2:Ak,Gamepad2Icon:Ak,GamepadIcon:Hk,GanttChart:Bt,GanttChartIcon:Bt,GanttChartSquare:L1,GanttChartSquareIcon:L1,Gauge:jk,GaugeCircle:dn,GaugeCircleIcon:dn,GaugeIcon:jk,Gavel:bk,GavelIcon:bk,Gem:Pk,GemIcon:Pk,Ghost:Vk,GhostIcon:Vk,Gift:Tk,GiftIcon:Tk,GitBranch:Fk,GitBranchIcon:Fk,GitBranchPlus:Dk,GitBranchPlusIcon:Dk,GitCommit:Un,GitCommitHorizontal:Un,GitCommitHorizontalIcon:Un,GitCommitIcon:Un,GitCommitVertical:Rk,GitCommitVerticalIcon:Rk,GitCompare:Ek,GitCompareArrows:Bk,GitCompareArrowsIcon:Bk,GitCompareIcon:Ek,GitFork:Ok,GitForkIcon:Ok,GitGraph:Uk,GitGraphIcon:Uk,GitMerge:Zk,GitMergeIcon:Zk,GitPullRequest:Jk,GitPullRequestArrow:Wk,GitPullRequestArrowIcon:Wk,GitPullRequestClosed:Gk,GitPullRequestClosedIcon:Gk,GitPullRequestCreate:Kk,GitPullRequestCreateArrow:Xk,GitPullRequestCreateArrowIcon:Xk,GitPullRequestCreateIcon:Kk,GitPullRequestDraft:Qk,GitPullRequestDraftIcon:Qk,GitPullRequestIcon:Jk,Github:Yk,GithubIcon:Yk,Gitlab:e5,GitlabIcon:e5,GlassWater:t5,GlassWaterIcon:t5,Glasses:n5,GlassesIcon:n5,Globe:a5,Globe2:An,Globe2Icon:An,GlobeIcon:a5,GlobeLock:o5,GlobeLockIcon:o5,Goal:c5,GoalIcon:c5,Grab:i5,GrabIcon:i5,GraduationCap:r5,GraduationCapIcon:r5,Grape:d5,GrapeIcon:d5,Grid:w1,Grid2X2:Xn,Grid2X2Check:Zn,Grid2X2CheckIcon:Zn,Grid2X2Icon:Xn,Grid2X2Plus:Wn,Grid2X2PlusIcon:Wn,Grid2X2X:Gn,Grid2X2XIcon:Gn,Grid2x2:Xn,Grid2x2Check:Zn,Grid2x2CheckIcon:Zn,Grid2x2Icon:Xn,Grid2x2Plus:Wn,Grid2x2PlusIcon:Wn,Grid2x2X:Gn,Grid2x2XIcon:Gn,Grid3X3:w1,Grid3X3Icon:w1,Grid3x3:w1,Grid3x3Icon:w1,GridIcon:w1,Grip:h5,GripHorizontal:l5,GripHorizontalIcon:l5,GripIcon:h5,GripVertical:s5,GripVerticalIcon:s5,Group:y5,GroupIcon:y5,Guitar:u5,GuitarIcon:u5,Ham:p5,HamIcon:p5,Hammer:k5,HammerIcon:k5,Hand:g5,HandCoins:f5,HandCoinsIcon:f5,HandHeart:M5,HandHeartIcon:M5,HandHelping:Kn,HandHelpingIcon:Kn,HandIcon:g5,HandMetal:m5,HandMetalIcon:m5,HandPlatter:v5,HandPlatterIcon:v5,Handshake:x5,HandshakeIcon:x5,HardDrive:L5,HardDriveDownload:_5,HardDriveDownloadIcon:_5,HardDriveIcon:L5,HardDriveUpload:w5,HardDriveUploadIcon:w5,HardHat:C5,HardHatIcon:C5,Hash:I5,HashIcon:I5,Haze:S5,HazeIcon:S5,HdmiPort:N5,HdmiPortIcon:N5,Heading:b5,Heading1:$5,Heading1Icon:$5,Heading2:z5,Heading2Icon:z5,Heading3:q5,Heading3Icon:q5,Heading4:A5,Heading4Icon:A5,Heading5:H5,Heading5Icon:H5,Heading6:j5,Heading6Icon:j5,HeadingIcon:b5,HeadphoneOff:P5,HeadphoneOffIcon:P5,Headphones:V5,HeadphonesIcon:V5,Headset:T5,HeadsetIcon:T5,Heart:E5,HeartCrack:D5,HeartCrackIcon:D5,HeartHandshake:F5,HeartHandshakeIcon:F5,HeartIcon:E5,HeartOff:R5,HeartOffIcon:R5,HeartPulse:B5,HeartPulseIcon:B5,Heater:O5,HeaterIcon:O5,HelpCircle:ln,HelpCircleIcon:ln,HelpingHand:Kn,HelpingHandIcon:Kn,Hexagon:U5,HexagonIcon:U5,Highlighter:Z5,HighlighterIcon:Z5,History:W5,HistoryIcon:W5,Home:Qn,HomeIcon:Qn,Hop:X5,HopIcon:X5,HopOff:G5,HopOffIcon:G5,Hospital:K5,HospitalIcon:K5,Hotel:mc,HotelIcon:mc,Hourglass:Q5,HourglassIcon:Q5,House:Qn,HouseIcon:Qn,HousePlug:J5,HousePlugIcon:J5,HousePlus:Y5,HousePlusIcon:Y5,HouseWifi:e3,HouseWifiIcon:e3,IceCream:Yn,IceCream2:Jn,IceCream2Icon:Jn,IceCreamBowl:Jn,IceCreamBowlIcon:Jn,IceCreamCone:Yn,IceCreamConeIcon:Yn,IceCreamIcon:Yn,Icon:y$,IdCard:t3,IdCardIcon:t3,Image:l3,ImageDown:n3,ImageDownIcon:n3,ImageIcon:l3,ImageMinus:o3,ImageMinusIcon:o3,ImageOff:a3,ImageOffIcon:a3,ImagePlay:c3,ImagePlayIcon:c3,ImagePlus:i3,ImagePlusIcon:i3,ImageUp:r3,ImageUpIcon:r3,ImageUpscale:d3,ImageUpscaleIcon:d3,Images:s3,ImagesIcon:s3,Import:h3,ImportIcon:h3,Inbox:y3,InboxIcon:y3,Indent:to,IndentDecrease:eo,IndentDecreaseIcon:eo,IndentIcon:to,IndentIncrease:to,IndentIncreaseIcon:to,IndianRupee:u3,IndianRupeeIcon:u3,Infinity:p3,InfinityIcon:p3,Info:k3,InfoIcon:k3,Inspect:pa,InspectIcon:pa,InspectionPanel:f3,InspectionPanelIcon:f3,Instagram:M3,InstagramIcon:M3,Italic:m3,ItalicIcon:m3,IterationCcw:v3,IterationCcwIcon:v3,IterationCw:g3,IterationCwIcon:g3,JapaneseYen:x3,JapaneseYenIcon:x3,Joystick:_3,JoystickIcon:_3,Kanban:w3,KanbanIcon:w3,KanbanSquare:la,KanbanSquareDashed:na,KanbanSquareDashedIcon:na,KanbanSquareIcon:la,Key:I3,KeyIcon:I3,KeyRound:L3,KeyRoundIcon:L3,KeySquare:C3,KeySquareIcon:C3,Keyboard:$3,KeyboardIcon:$3,KeyboardMusic:S3,KeyboardMusicIcon:S3,KeyboardOff:N3,KeyboardOffIcon:N3,Lamp:b3,LampCeiling:z3,LampCeilingIcon:z3,LampDesk:q3,LampDeskIcon:q3,LampFloor:A3,LampFloorIcon:A3,LampIcon:b3,LampWallDown:H3,LampWallDownIcon:H3,LampWallUp:j3,LampWallUpIcon:j3,LandPlot:P3,LandPlotIcon:P3,Landmark:V3,LandmarkIcon:V3,Languages:T3,LanguagesIcon:T3,Laptop:F3,Laptop2:no,Laptop2Icon:no,LaptopIcon:F3,LaptopMinimal:no,LaptopMinimalCheck:D3,LaptopMinimalCheckIcon:D3,LaptopMinimalIcon:no,Lasso:B3,LassoIcon:B3,LassoSelect:R3,LassoSelectIcon:R3,Laugh:E3,LaughIcon:E3,Layers:oo,Layers2:O3,Layers2Icon:O3,Layers3:oo,Layers3Icon:oo,LayersIcon:oo,Layout:xo,LayoutDashboard:U3,LayoutDashboardIcon:U3,LayoutGrid:Z3,LayoutGridIcon:Z3,LayoutIcon:xo,LayoutList:W3,LayoutListIcon:W3,LayoutPanelLeft:G3,LayoutPanelLeftIcon:G3,LayoutPanelTop:X3,LayoutPanelTopIcon:X3,LayoutTemplate:K3,LayoutTemplateIcon:K3,Leaf:Q3,LeafIcon:Q3,LeafyGreen:J3,LeafyGreenIcon:J3,Lectern:Y3,LecternIcon:Y3,LetterText:e6,LetterTextIcon:e6,Library:n6,LibraryBig:t6,LibraryBigIcon:t6,LibraryIcon:n6,LibrarySquare:sa,LibrarySquareIcon:sa,LifeBuoy:o6,LifeBuoyIcon:o6,Ligature:a6,LigatureIcon:a6,Lightbulb:i6,LightbulbIcon:i6,LightbulbOff:c6,LightbulbOffIcon:c6,LineChart:Dt,LineChartIcon:Dt,Link:l6,Link2:d6,Link2Icon:d6,Link2Off:r6,Link2OffIcon:r6,LinkIcon:l6,Linkedin:s6,LinkedinIcon:s6,List:S6,ListCheck:h6,ListCheckIcon:h6,ListChecks:y6,ListChecksIcon:y6,ListCollapse:u6,ListCollapseIcon:u6,ListEnd:p6,ListEndIcon:p6,ListFilter:f6,ListFilterIcon:f6,ListFilterPlus:k6,ListFilterPlusIcon:k6,ListIcon:S6,ListMinus:M6,ListMinusIcon:M6,ListMusic:m6,ListMusicIcon:m6,ListOrdered:v6,ListOrderedIcon:v6,ListPlus:g6,ListPlusIcon:g6,ListRestart:x6,ListRestartIcon:x6,ListStart:_6,ListStartIcon:_6,ListTodo:w6,ListTodoIcon:w6,ListTree:L6,ListTreeIcon:L6,ListVideo:C6,ListVideoIcon:C6,ListX:I6,ListXIcon:I6,Loader:$6,Loader2:ao,Loader2Icon:ao,LoaderCircle:ao,LoaderCircleIcon:ao,LoaderIcon:$6,LoaderPinwheel:N6,LoaderPinwheelIcon:N6,Locate:A6,LocateFixed:z6,LocateFixedIcon:z6,LocateIcon:A6,LocateOff:q6,LocateOffIcon:q6,Lock:j6,LockIcon:j6,LockKeyhole:H6,LockKeyholeIcon:H6,LockKeyholeOpen:co,LockKeyholeOpenIcon:co,LockOpen:io,LockOpenIcon:io,LogIn:b6,LogInIcon:b6,LogOut:P6,LogOutIcon:P6,Logs:V6,LogsIcon:V6,Lollipop:T6,LollipopIcon:T6,LucideAArrowDown:Vi,LucideAArrowUp:Ti,LucideALargeSmall:Di,LucideAccessibility:Fi,LucideActivity:Ri,LucideActivitySquare:jo,LucideAirVent:Bi,LucideAirplay:Ei,LucideAlarmCheck:ft,LucideAlarmClock:Ui,LucideAlarmClockCheck:ft,LucideAlarmClockMinus:Mt,LucideAlarmClockOff:Oi,LucideAlarmClockPlus:mt,LucideAlarmMinus:Mt,LucideAlarmPlus:mt,LucideAlarmSmoke:Zi,LucideAlbum:Wi,LucideAlertCircle:Ut,LucideAlertOctagon:so,LucideAlertTriangle:Pa,LucideAlignCenter:Ki,LucideAlignCenterHorizontal:Gi,LucideAlignCenterVertical:Xi,LucideAlignEndHorizontal:Qi,LucideAlignEndVertical:Ji,LucideAlignHorizontalDistributeCenter:Yi,LucideAlignHorizontalDistributeEnd:er,LucideAlignHorizontalDistributeStart:tr,LucideAlignHorizontalJustifyCenter:nr,LucideAlignHorizontalJustifyEnd:or,LucideAlignHorizontalJustifyStart:ar,LucideAlignHorizontalSpaceAround:cr,LucideAlignHorizontalSpaceBetween:ir,LucideAlignJustify:rr,LucideAlignLeft:dr,LucideAlignRight:lr,LucideAlignStartHorizontal:sr,LucideAlignStartVertical:hr,LucideAlignVerticalDistributeCenter:yr,LucideAlignVerticalDistributeEnd:ur,LucideAlignVerticalDistributeStart:pr,LucideAlignVerticalJustifyCenter:kr,LucideAlignVerticalJustifyEnd:fr,LucideAlignVerticalJustifyStart:Mr,LucideAlignVerticalSpaceAround:mr,LucideAlignVerticalSpaceBetween:vr,LucideAmbulance:gr,LucideAmpersand:xr,LucideAmpersands:_r,LucideAmphora:wr,LucideAnchor:Lr,LucideAngry:Cr,LucideAnnoyed:Ir,LucideAntenna:Sr,LucideAnvil:Nr,LucideAperture:$r,LucideAppWindow:qr,LucideAppWindowMac:zr,LucideApple:Ar,LucideArchive:br,LucideArchiveRestore:Hr,LucideArchiveX:jr,LucideAreaChart:At,LucideArmchair:Pr,LucideArrowBigDown:Tr,LucideArrowBigDownDash:Vr,LucideArrowBigLeft:Fr,LucideArrowBigLeftDash:Dr,LucideArrowBigRight:Br,LucideArrowBigRightDash:Rr,LucideArrowBigUp:Or,LucideArrowBigUpDash:Er,LucideArrowDown:e0,LucideArrowDown01:Ur,LucideArrowDown10:Zr,LucideArrowDownAZ:vt,LucideArrowDownAz:vt,LucideArrowDownCircle:Zt,LucideArrowDownFromLine:Wr,LucideArrowDownLeft:Gr,LucideArrowDownLeftFromCircle:Gt,LucideArrowDownLeftFromSquare:Do,LucideArrowDownLeftSquare:bo,LucideArrowDownNarrowWide:Xr,LucideArrowDownRight:Kr,LucideArrowDownRightFromCircle:Xt,LucideArrowDownRightFromSquare:Fo,LucideArrowDownRightSquare:Po,LucideArrowDownSquare:Vo,LucideArrowDownToDot:Qr,LucideArrowDownToLine:Jr,LucideArrowDownUp:Yr,LucideArrowDownWideNarrow:gt,LucideArrowDownZA:xt,LucideArrowDownZa:xt,LucideArrowLeft:a0,LucideArrowLeftCircle:Wt,LucideArrowLeftFromLine:t0,LucideArrowLeftRight:n0,LucideArrowLeftSquare:To,LucideArrowLeftToLine:o0,LucideArrowRight:d0,LucideArrowRightCircle:Jt,LucideArrowRightFromLine:c0,LucideArrowRightLeft:i0,LucideArrowRightSquare:Eo,LucideArrowRightToLine:r0,LucideArrowUp:m0,LucideArrowUp01:l0,LucideArrowUp10:s0,LucideArrowUpAZ:_t,LucideArrowUpAz:_t,LucideArrowUpCircle:Yt,LucideArrowUpDown:h0,LucideArrowUpFromDot:y0,LucideArrowUpFromLine:u0,LucideArrowUpLeft:p0,LucideArrowUpLeftFromCircle:Kt,LucideArrowUpLeftFromSquare:Ro,LucideArrowUpLeftSquare:Oo,LucideArrowUpNarrowWide:wt,LucideArrowUpRight:k0,LucideArrowUpRightFromCircle:Qt,LucideArrowUpRightFromSquare:Bo,LucideArrowUpRightSquare:Uo,LucideArrowUpSquare:Zo,LucideArrowUpToLine:f0,LucideArrowUpWideNarrow:M0,LucideArrowUpZA:Lt,LucideArrowUpZa:Lt,LucideArrowsUpFromLine:v0,LucideAsterisk:g0,LucideAsteriskSquare:Wo,LucideAtSign:x0,LucideAtom:_0,LucideAudioLines:w0,LucideAudioWaveform:L0,LucideAward:C0,LucideAxe:I0,LucideAxis3D:Ct,LucideAxis3d:Ct,LucideBaby:S0,LucideBackpack:N0,LucideBadge:O0,LucideBadgeAlert:$0,LucideBadgeCent:z0,LucideBadgeCheck:It,LucideBadgeDollarSign:q0,LucideBadgeEuro:A0,LucideBadgeHelp:H0,LucideBadgeIndianRupee:j0,LucideBadgeInfo:b0,LucideBadgeJapaneseYen:P0,LucideBadgeMinus:V0,LucideBadgePercent:T0,LucideBadgePlus:D0,LucideBadgePoundSterling:F0,LucideBadgeRussianRuble:R0,LucideBadgeSwissFranc:B0,LucideBadgeX:E0,LucideBaggageClaim:U0,LucideBan:Z0,LucideBanana:W0,LucideBandage:G0,LucideBanknote:X0,LucideBarChart:Ft,LucideBarChart2:Rt,LucideBarChart3:Tt,LucideBarChart4:Vt,LucideBarChartBig:Pt,LucideBarChartHorizontal:jt,LucideBarChartHorizontalBig:Ht,LucideBarcode:K0,LucideBaseline:Q0,LucideBath:J0,LucideBattery:ad,LucideBatteryCharging:Y0,LucideBatteryFull:ed,LucideBatteryLow:td,LucideBatteryMedium:nd,LucideBatteryWarning:od,LucideBeaker:cd,LucideBean:rd,LucideBeanOff:id,LucideBed:sd,LucideBedDouble:dd,LucideBedSingle:ld,LucideBeef:hd,LucideBeer:ud,LucideBeerOff:yd,LucideBell:gd,LucideBellDot:pd,LucideBellElectric:kd,LucideBellMinus:fd,LucideBellOff:Md,LucideBellPlus:md,LucideBellRing:vd,LucideBetweenHorizonalEnd:St,LucideBetweenHorizonalStart:Nt,LucideBetweenHorizontalEnd:St,LucideBetweenHorizontalStart:Nt,LucideBetweenVerticalEnd:xd,LucideBetweenVerticalStart:_d,LucideBicepsFlexed:wd,LucideBike:Ld,LucideBinary:Cd,LucideBinoculars:Id,LucideBiohazard:Sd,LucideBird:Nd,LucideBitcoin:$d,LucideBlend:zd,LucideBlinds:qd,LucideBlocks:Ad,LucideBluetooth:Pd,LucideBluetoothConnected:Hd,LucideBluetoothOff:jd,LucideBluetoothSearching:bd,LucideBold:Vd,LucideBolt:Td,LucideBomb:Dd,LucideBone:Fd,LucideBook:ll,LucideBookA:Rd,LucideBookAudio:Bd,LucideBookCheck:Ed,LucideBookCopy:Od,LucideBookDashed:$t,LucideBookDown:Ud,LucideBookHeadphones:Zd,LucideBookHeart:Wd,LucideBookImage:Gd,LucideBookKey:Xd,LucideBookLock:Kd,LucideBookMarked:Qd,LucideBookMinus:Jd,LucideBookOpen:tl,LucideBookOpenCheck:Yd,LucideBookOpenText:el,LucideBookPlus:nl,LucideBookTemplate:$t,LucideBookText:ol,LucideBookType:al,LucideBookUp:il,LucideBookUp2:cl,LucideBookUser:rl,LucideBookX:dl,LucideBookmark:pl,LucideBookmarkCheck:sl,LucideBookmarkMinus:hl,LucideBookmarkPlus:yl,LucideBookmarkX:ul,LucideBoomBox:kl,LucideBot:ml,LucideBotMessageSquare:fl,LucideBotOff:Ml,LucideBox:vl,LucideBoxSelect:aa,LucideBoxes:gl,LucideBraces:zt,LucideBrackets:xl,LucideBrain:Ll,LucideBrainCircuit:_l,LucideBrainCog:wl,LucideBrickWall:Cl,LucideBriefcase:Nl,LucideBriefcaseBusiness:pc,LucideBriefcaseConveyorBelt:Il,LucideBriefcaseMedical:Sl,LucideBringToFront:$l,LucideBrush:zl,LucideBug:Hl,LucideBugOff:ql,LucideBugPlay:Al,LucideBuilding:bl,LucideBuilding2:jl,LucideBus:Vl,LucideBusFront:Pl,LucideCable:Dl,LucideCableCar:Tl,LucideCake:Rl,LucideCakeSlice:Fl,LucideCalculator:Bl,LucideCalendar:ls,LucideCalendar1:El,LucideCalendarArrowDown:Ol,LucideCalendarArrowUp:Ul,LucideCalendarCheck:Wl,LucideCalendarCheck2:Zl,LucideCalendarClock:Gl,LucideCalendarCog:Xl,LucideCalendarDays:Kl,LucideCalendarFold:Ql,LucideCalendarHeart:Jl,LucideCalendarMinus:es,LucideCalendarMinus2:Yl,LucideCalendarOff:ts,LucideCalendarPlus:os,LucideCalendarPlus2:ns,LucideCalendarRange:as,LucideCalendarSearch:cs,LucideCalendarSync:is,LucideCalendarX:ds,LucideCalendarX2:rs,LucideCamera:hs,LucideCameraOff:ss,LucideCandlestickChart:bt,LucideCandy:ps,LucideCandyCane:ys,LucideCandyOff:us,LucideCannabis:ks,LucideCaptions:qt,LucideCaptionsOff:fs,LucideCar:fc,LucideCarFront:Ms,LucideCarTaxiFront:kc,LucideCaravan:ms,LucideCarrot:vs,LucideCaseLower:gs,LucideCaseSensitive:xs,LucideCaseUpper:_s,LucideCassetteTape:ws,LucideCast:Ls,LucideCastle:Cs,LucideCat:Is,LucideCctv:Ss,LucideChartArea:At,LucideChartBar:jt,LucideChartBarBig:Ht,LucideChartBarDecreasing:Ns,LucideChartBarIncreasing:$s,LucideChartBarStacked:zs,LucideChartCandlestick:bt,LucideChartColumn:Tt,LucideChartColumnBig:Pt,LucideChartColumnDecreasing:qs,LucideChartColumnIncreasing:Vt,LucideChartColumnStacked:As,LucideChartGantt:Hs,LucideChartLine:Dt,LucideChartNetwork:js,LucideChartNoAxesColumn:Rt,LucideChartNoAxesColumnDecreasing:bs,LucideChartNoAxesColumnIncreasing:Ft,LucideChartNoAxesCombined:Ps,LucideChartNoAxesGantt:Bt,LucideChartPie:Et,LucideChartScatter:Ot,LucideChartSpline:Vs,LucideCheck:Ds,LucideCheckCheck:Ts,LucideCheckCircle:en,LucideCheckCircle2:tn,LucideCheckSquare:Xo,LucideCheckSquare2:Ko,LucideChefHat:Fs,LucideCherry:Rs,LucideChevronDown:Bs,LucideChevronDownCircle:nn,LucideChevronDownSquare:Qo,LucideChevronFirst:Es,LucideChevronLast:Os,LucideChevronLeft:Us,LucideChevronLeftCircle:on,LucideChevronLeftSquare:Jo,LucideChevronRight:Zs,LucideChevronRightCircle:an,LucideChevronRightSquare:Yo,LucideChevronUp:Ws,LucideChevronUpCircle:cn,LucideChevronUpSquare:ea,LucideChevronsDown:Xs,LucideChevronsDownUp:Gs,LucideChevronsLeft:Js,LucideChevronsLeftRight:Qs,LucideChevronsLeftRightEllipsis:Ks,LucideChevronsRight:eh,LucideChevronsRightLeft:Ys,LucideChevronsUp:nh,LucideChevronsUpDown:th,LucideChrome:oh,LucideChurch:ah,LucideCigarette:ih,LucideCigaretteOff:ch,LucideCircle:Mh,LucideCircleAlert:Ut,LucideCircleArrowDown:Zt,LucideCircleArrowLeft:Wt,LucideCircleArrowOutDownLeft:Gt,LucideCircleArrowOutDownRight:Xt,LucideCircleArrowOutUpLeft:Kt,LucideCircleArrowOutUpRight:Qt,LucideCircleArrowRight:Jt,LucideCircleArrowUp:Yt,LucideCircleCheck:tn,LucideCircleCheckBig:en,LucideCircleChevronDown:nn,LucideCircleChevronLeft:on,LucideCircleChevronRight:an,LucideCircleChevronUp:cn,LucideCircleDashed:rh,LucideCircleDivide:rn,LucideCircleDollarSign:dh,LucideCircleDot:sh,LucideCircleDotDashed:lh,LucideCircleEllipsis:hh,LucideCircleEqual:yh,LucideCircleFadingArrowUp:uh,LucideCircleFadingPlus:ph,LucideCircleGauge:dn,LucideCircleHelp:ln,LucideCircleMinus:sn,LucideCircleOff:kh,LucideCircleParking:yn,LucideCircleParkingOff:hn,LucideCirclePause:un,LucideCirclePercent:pn,LucideCirclePlay:kn,LucideCirclePlus:fn,LucideCirclePower:Mn,LucideCircleSlash:fh,LucideCircleSlash2:mn,LucideCircleSlashed:mn,LucideCircleStop:vn,LucideCircleUser:xn,LucideCircleUserRound:gn,LucideCircleX:_n,LucideCircuitBoard:mh,LucideCitrus:vh,LucideClapperboard:gh,LucideClipboard:$h,LucideClipboardCheck:xh,LucideClipboardCopy:_h,LucideClipboardEdit:Ln,LucideClipboardList:wh,LucideClipboardMinus:Lh,LucideClipboardPaste:Ch,LucideClipboardPen:Ln,LucideClipboardPenLine:wn,LucideClipboardPlus:Ih,LucideClipboardSignature:wn,LucideClipboardType:Sh,LucideClipboardX:Nh,LucideClock:Mc,LucideClock1:zh,LucideClock10:qh,LucideClock11:Ah,LucideClock12:Hh,LucideClock2:jh,LucideClock3:bh,LucideClock4:Ph,LucideClock5:Vh,LucideClock6:Th,LucideClock7:Dh,LucideClock8:Fh,LucideClock9:Rh,LucideClockAlert:Bh,LucideClockArrowDown:Eh,LucideClockArrowUp:Oh,LucideCloud:cy,LucideCloudAlert:Uh,LucideCloudCog:Zh,LucideCloudDownload:Cn,LucideCloudDrizzle:Wh,LucideCloudFog:Gh,LucideCloudHail:Xh,LucideCloudLightning:Kh,LucideCloudMoon:Jh,LucideCloudMoonRain:Qh,LucideCloudOff:Yh,LucideCloudRain:ty,LucideCloudRainWind:ey,LucideCloudSnow:ny,LucideCloudSun:ay,LucideCloudSunRain:oy,LucideCloudUpload:In,LucideCloudy:iy,LucideClover:ry,LucideClub:dy,LucideCode:ly,LucideCode2:Sn,LucideCodeSquare:ta,LucideCodeXml:Sn,LucideCodepen:sy,LucideCodesandbox:hy,LucideCoffee:yy,LucideCog:uy,LucideCoins:py,LucideColumns:Nn,LucideColumns2:Nn,LucideColumns3:$n,LucideColumns4:ky,LucideCombine:fy,LucideCommand:My,LucideCompass:my,LucideComponent:vy,LucideComputer:gy,LucideConciergeBell:xy,LucideCone:_y,LucideConstruction:wy,LucideContact:Ly,LucideContact2:zn,LucideContactRound:zn,LucideContainer:Cy,LucideContrast:Iy,LucideCookie:Sy,LucideCookingPot:Ny,LucideCopy:jy,LucideCopyCheck:$y,LucideCopyMinus:zy,LucideCopyPlus:qy,LucideCopySlash:Ay,LucideCopyX:Hy,LucideCopyleft:by,LucideCopyright:Py,LucideCornerDownLeft:Vy,LucideCornerDownRight:Ty,LucideCornerLeftDown:Dy,LucideCornerLeftUp:Fy,LucideCornerRightDown:Ry,LucideCornerRightUp:By,LucideCornerUpLeft:Ey,LucideCornerUpRight:Oy,LucideCpu:Uy,LucideCreativeCommons:Zy,LucideCreditCard:Wy,LucideCroissant:Gy,LucideCrop:Xy,LucideCross:Ky,LucideCrosshair:Qy,LucideCrown:Jy,LucideCuboid:Yy,LucideCupSoda:eu,LucideCurlyBraces:zt,LucideCurrency:tu,LucideCylinder:nu,LucideDam:ou,LucideDatabase:iu,LucideDatabaseBackup:au,LucideDatabaseZap:cu,LucideDelete:ru,LucideDessert:du,LucideDiameter:lu,LucideDiamond:yu,LucideDiamondMinus:su,LucideDiamondPercent:qn,LucideDiamondPlus:hu,LucideDice1:uu,LucideDice2:pu,LucideDice3:ku,LucideDice4:fu,LucideDice5:Mu,LucideDice6:mu,LucideDices:vu,LucideDiff:gu,LucideDisc:Lu,LucideDisc2:xu,LucideDisc3:_u,LucideDiscAlbum:wu,LucideDivide:Cu,LucideDivideCircle:rn,LucideDivideSquare:ca,LucideDna:Su,LucideDnaOff:Iu,LucideDock:Nu,LucideDog:$u,LucideDollarSign:zu,LucideDonut:qu,LucideDoorClosed:Au,LucideDoorOpen:Hu,LucideDot:ju,LucideDotSquare:ia,LucideDownload:bu,LucideDownloadCloud:Cn,LucideDraftingCompass:Pu,LucideDrama:Vu,LucideDribbble:Tu,LucideDrill:Du,LucideDroplet:Ru,LucideDropletOff:Fu,LucideDroplets:Bu,LucideDrum:Eu,LucideDrumstick:Ou,LucideDumbbell:Uu,LucideEar:Wu,LucideEarOff:Zu,LucideEarth:An,LucideEarthLock:Gu,LucideEclipse:Xu,LucideEdit:Ke,LucideEdit2:wo,LucideEdit3:_o,LucideEgg:Ju,LucideEggFried:Ku,LucideEggOff:Qu,LucideEllipsis:jn,LucideEllipsisVertical:Hn,LucideEqual:tp,LucideEqualApproximately:Yu,LucideEqualNot:ep,LucideEqualSquare:ra,LucideEraser:np,LucideEthernetPort:op,LucideEuro:ap,LucideExpand:cp,LucideExternalLink:ip,LucideEye:lp,LucideEyeClosed:rp,LucideEyeOff:dp,LucideFacebook:sp,LucideFactory:hp,LucideFan:yp,LucideFastForward:up,LucideFeather:pp,LucideFence:kp,LucideFerrisWheel:fp,LucideFigma:Mp,LucideFile:p4,LucideFileArchive:mp,LucideFileAudio:gp,LucideFileAudio2:vp,LucideFileAxis3D:bn,LucideFileAxis3d:bn,LucideFileBadge:_p,LucideFileBadge2:xp,LucideFileBarChart:Pn,LucideFileBarChart2:Vn,LucideFileBox:wp,LucideFileChartColumn:Vn,LucideFileChartColumnIncreasing:Pn,LucideFileChartLine:Tn,LucideFileChartPie:Dn,LucideFileCheck:Cp,LucideFileCheck2:Lp,LucideFileClock:Ip,LucideFileCode:Np,LucideFileCode2:Sp,LucideFileCog:Fn,LucideFileCog2:Fn,LucideFileDiff:$p,LucideFileDigit:zp,LucideFileDown:qp,LucideFileEdit:Bn,LucideFileHeart:Ap,LucideFileImage:Hp,LucideFileInput:jp,LucideFileJson:Pp,LucideFileJson2:bp,LucideFileKey:Tp,LucideFileKey2:Vp,LucideFileLineChart:Tn,LucideFileLock:Fp,LucideFileLock2:Dp,LucideFileMinus:Bp,LucideFileMinus2:Rp,LucideFileMusic:Ep,LucideFileOutput:Op,LucideFilePen:Bn,LucideFilePenLine:Rn,LucideFilePieChart:Dn,LucideFilePlus:Zp,LucideFilePlus2:Up,LucideFileQuestion:Wp,LucideFileScan:Gp,LucideFileSearch:Kp,LucideFileSearch2:Xp,LucideFileSignature:Rn,LucideFileSliders:Qp,LucideFileSpreadsheet:Jp,LucideFileStack:Yp,LucideFileSymlink:e4,LucideFileTerminal:t4,LucideFileText:n4,LucideFileType:a4,LucideFileType2:o4,LucideFileUp:c4,LucideFileUser:i4,LucideFileVideo:d4,LucideFileVideo2:r4,LucideFileVolume:s4,LucideFileVolume2:l4,LucideFileWarning:h4,LucideFileX:u4,LucideFileX2:y4,LucideFiles:k4,LucideFilm:f4,LucideFilter:m4,LucideFilterX:M4,LucideFingerprint:v4,LucideFireExtinguisher:g4,LucideFish:w4,LucideFishOff:x4,LucideFishSymbol:_4,LucideFlag:S4,LucideFlagOff:L4,LucideFlagTriangleLeft:C4,LucideFlagTriangleRight:I4,LucideFlame:$4,LucideFlameKindling:N4,LucideFlashlight:q4,LucideFlashlightOff:z4,LucideFlaskConical:H4,LucideFlaskConicalOff:A4,LucideFlaskRound:j4,LucideFlipHorizontal:P4,LucideFlipHorizontal2:b4,LucideFlipVertical:T4,LucideFlipVertical2:V4,LucideFlower:F4,LucideFlower2:D4,LucideFocus:R4,LucideFoldHorizontal:B4,LucideFoldVertical:E4,LucideFolder:Mk,LucideFolderArchive:O4,LucideFolderCheck:U4,LucideFolderClock:Z4,LucideFolderClosed:W4,LucideFolderCode:G4,LucideFolderCog:En,LucideFolderCog2:En,LucideFolderDot:X4,LucideFolderDown:K4,LucideFolderEdit:On,LucideFolderGit:J4,LucideFolderGit2:Q4,LucideFolderHeart:Y4,LucideFolderInput:ek,LucideFolderKanban:tk,LucideFolderKey:nk,LucideFolderLock:ok,LucideFolderMinus:ak,LucideFolderOpen:ik,LucideFolderOpenDot:ck,LucideFolderOutput:rk,LucideFolderPen:On,LucideFolderPlus:dk,LucideFolderRoot:lk,LucideFolderSearch:hk,LucideFolderSearch2:sk,LucideFolderSymlink:yk,LucideFolderSync:uk,LucideFolderTree:pk,LucideFolderUp:kk,LucideFolderX:fk,LucideFolders:mk,LucideFootprints:vk,LucideForkKnife:Wa,LucideForkKnifeCrossed:Za,LucideForklift:gk,LucideFormInput:Co,LucideForward:xk,LucideFrame:_k,LucideFramer:wk,LucideFrown:Lk,LucideFuel:Ck,LucideFullscreen:Ik,LucideFunctionSquare:da,LucideGalleryHorizontal:Nk,LucideGalleryHorizontalEnd:Sk,LucideGalleryThumbnails:$k,LucideGalleryVertical:qk,LucideGalleryVerticalEnd:zk,LucideGamepad:Hk,LucideGamepad2:Ak,LucideGanttChart:Bt,LucideGanttChartSquare:L1,LucideGauge:jk,LucideGaugeCircle:dn,LucideGavel:bk,LucideGem:Pk,LucideGhost:Vk,LucideGift:Tk,LucideGitBranch:Fk,LucideGitBranchPlus:Dk,LucideGitCommit:Un,LucideGitCommitHorizontal:Un,LucideGitCommitVertical:Rk,LucideGitCompare:Ek,LucideGitCompareArrows:Bk,LucideGitFork:Ok,LucideGitGraph:Uk,LucideGitMerge:Zk,LucideGitPullRequest:Jk,LucideGitPullRequestArrow:Wk,LucideGitPullRequestClosed:Gk,LucideGitPullRequestCreate:Kk,LucideGitPullRequestCreateArrow:Xk,LucideGitPullRequestDraft:Qk,LucideGithub:Yk,LucideGitlab:e5,LucideGlassWater:t5,LucideGlasses:n5,LucideGlobe:a5,LucideGlobe2:An,LucideGlobeLock:o5,LucideGoal:c5,LucideGrab:i5,LucideGraduationCap:r5,LucideGrape:d5,LucideGrid:w1,LucideGrid2X2:Xn,LucideGrid2X2Check:Zn,LucideGrid2X2Plus:Wn,LucideGrid2X2X:Gn,LucideGrid2x2:Xn,LucideGrid2x2Check:Zn,LucideGrid2x2Plus:Wn,LucideGrid2x2X:Gn,LucideGrid3X3:w1,LucideGrid3x3:w1,LucideGrip:h5,LucideGripHorizontal:l5,LucideGripVertical:s5,LucideGroup:y5,LucideGuitar:u5,LucideHam:p5,LucideHammer:k5,LucideHand:g5,LucideHandCoins:f5,LucideHandHeart:M5,LucideHandHelping:Kn,LucideHandMetal:m5,LucideHandPlatter:v5,LucideHandshake:x5,LucideHardDrive:L5,LucideHardDriveDownload:_5,LucideHardDriveUpload:w5,LucideHardHat:C5,LucideHash:I5,LucideHaze:S5,LucideHdmiPort:N5,LucideHeading:b5,LucideHeading1:$5,LucideHeading2:z5,LucideHeading3:q5,LucideHeading4:A5,LucideHeading5:H5,LucideHeading6:j5,LucideHeadphoneOff:P5,LucideHeadphones:V5,LucideHeadset:T5,LucideHeart:E5,LucideHeartCrack:D5,LucideHeartHandshake:F5,LucideHeartOff:R5,LucideHeartPulse:B5,LucideHeater:O5,LucideHelpCircle:ln,LucideHelpingHand:Kn,LucideHexagon:U5,LucideHighlighter:Z5,LucideHistory:W5,LucideHome:Qn,LucideHop:X5,LucideHopOff:G5,LucideHospital:K5,LucideHotel:mc,LucideHourglass:Q5,LucideHouse:Qn,LucideHousePlug:J5,LucideHousePlus:Y5,LucideHouseWifi:e3,LucideIceCream:Yn,LucideIceCream2:Jn,LucideIceCreamBowl:Jn,LucideIceCreamCone:Yn,LucideIdCard:t3,LucideImage:l3,LucideImageDown:n3,LucideImageMinus:o3,LucideImageOff:a3,LucideImagePlay:c3,LucideImagePlus:i3,LucideImageUp:r3,LucideImageUpscale:d3,LucideImages:s3,LucideImport:h3,LucideInbox:y3,LucideIndent:to,LucideIndentDecrease:eo,LucideIndentIncrease:to,LucideIndianRupee:u3,LucideInfinity:p3,LucideInfo:k3,LucideInspect:pa,LucideInspectionPanel:f3,LucideInstagram:M3,LucideItalic:m3,LucideIterationCcw:v3,LucideIterationCw:g3,LucideJapaneseYen:x3,LucideJoystick:_3,LucideKanban:w3,LucideKanbanSquare:la,LucideKanbanSquareDashed:na,LucideKey:I3,LucideKeyRound:L3,LucideKeySquare:C3,LucideKeyboard:$3,LucideKeyboardMusic:S3,LucideKeyboardOff:N3,LucideLamp:b3,LucideLampCeiling:z3,LucideLampDesk:q3,LucideLampFloor:A3,LucideLampWallDown:H3,LucideLampWallUp:j3,LucideLandPlot:P3,LucideLandmark:V3,LucideLanguages:T3,LucideLaptop:F3,LucideLaptop2:no,LucideLaptopMinimal:no,LucideLaptopMinimalCheck:D3,LucideLasso:B3,LucideLassoSelect:R3,LucideLaugh:E3,LucideLayers:oo,LucideLayers2:O3,LucideLayers3:oo,LucideLayout:xo,LucideLayoutDashboard:U3,LucideLayoutGrid:Z3,LucideLayoutList:W3,LucideLayoutPanelLeft:G3,LucideLayoutPanelTop:X3,LucideLayoutTemplate:K3,LucideLeaf:Q3,LucideLeafyGreen:J3,LucideLectern:Y3,LucideLetterText:e6,LucideLibrary:n6,LucideLibraryBig:t6,LucideLibrarySquare:sa,LucideLifeBuoy:o6,LucideLigature:a6,LucideLightbulb:i6,LucideLightbulbOff:c6,LucideLineChart:Dt,LucideLink:l6,LucideLink2:d6,LucideLink2Off:r6,LucideLinkedin:s6,LucideList:S6,LucideListCheck:h6,LucideListChecks:y6,LucideListCollapse:u6,LucideListEnd:p6,LucideListFilter:f6,LucideListFilterPlus:k6,LucideListMinus:M6,LucideListMusic:m6,LucideListOrdered:v6,LucideListPlus:g6,LucideListRestart:x6,LucideListStart:_6,LucideListTodo:w6,LucideListTree:L6,LucideListVideo:C6,LucideListX:I6,LucideLoader:$6,LucideLoader2:ao,LucideLoaderCircle:ao,LucideLoaderPinwheel:N6,LucideLocate:A6,LucideLocateFixed:z6,LucideLocateOff:q6,LucideLock:j6,LucideLockKeyhole:H6,LucideLockKeyholeOpen:co,LucideLockOpen:io,LucideLogIn:b6,LucideLogOut:P6,LucideLogs:V6,LucideLollipop:T6,LucideLuggage:D6,LucideMSquare:ha,LucideMagnet:F6,LucideMail:X6,LucideMailCheck:R6,LucideMailMinus:B6,LucideMailOpen:E6,LucideMailPlus:O6,LucideMailQuestion:U6,LucideMailSearch:Z6,LucideMailWarning:W6,LucideMailX:G6,LucideMailbox:K6,LucideMails:Q6,LucideMap:gc,LucideMapPin:vc,LucideMapPinCheck:Y6,LucideMapPinCheckInside:J6,LucideMapPinHouse:e8,LucideMapPinMinus:n8,LucideMapPinMinusInside:t8,LucideMapPinOff:o8,LucideMapPinPlus:c8,LucideMapPinPlusInside:a8,LucideMapPinX:r8,LucideMapPinXInside:i8,LucideMapPinned:d8,LucideMartini:l8,LucideMaximize:h8,LucideMaximize2:s8,LucideMedal:y8,LucideMegaphone:p8,LucideMegaphoneOff:u8,LucideMeh:k8,LucideMemoryStick:f8,LucideMenu:M8,LucideMenuSquare:ya,LucideMerge:m8,LucideMessageCircle:$8,LucideMessageCircleCode:v8,LucideMessageCircleDashed:g8,LucideMessageCircleHeart:x8,LucideMessageCircleMore:_8,LucideMessageCircleOff:w8,LucideMessageCirclePlus:L8,LucideMessageCircleQuestion:C8,LucideMessageCircleReply:I8,LucideMessageCircleWarning:S8,LucideMessageCircleX:N8,LucideMessageSquare:U8,LucideMessageSquareCode:z8,LucideMessageSquareDashed:q8,LucideMessageSquareDiff:A8,LucideMessageSquareDot:H8,LucideMessageSquareHeart:j8,LucideMessageSquareLock:b8,LucideMessageSquareMore:P8,LucideMessageSquareOff:V8,LucideMessageSquarePlus:T8,LucideMessageSquareQuote:D8,LucideMessageSquareReply:F8,LucideMessageSquareShare:R8,LucideMessageSquareText:B8,LucideMessageSquareWarning:E8,LucideMessageSquareX:O8,LucideMessagesSquare:Z8,LucideMic:G8,LucideMic2:ro,LucideMicOff:W8,LucideMicVocal:ro,LucideMicrochip:X8,LucideMicroscope:K8,LucideMicrowave:Q8,LucideMilestone:J8,LucideMilk:e7,LucideMilkOff:Y8,LucideMinimize:n7,LucideMinimize2:t7,LucideMinus:o7,LucideMinusCircle:sn,LucideMinusSquare:ua,LucideMonitor:f7,LucideMonitorCheck:a7,LucideMonitorCog:c7,LucideMonitorDot:i7,LucideMonitorDown:r7,LucideMonitorOff:d7,LucideMonitorPause:l7,LucideMonitorPlay:s7,LucideMonitorSmartphone:h7,LucideMonitorSpeaker:y7,LucideMonitorStop:u7,LucideMonitorUp:p7,LucideMonitorX:k7,LucideMoon:m7,LucideMoonStar:M7,LucideMoreHorizontal:jn,LucideMoreVertical:Hn,LucideMountain:g7,LucideMountainSnow:v7,LucideMouse:I7,LucideMouseOff:x7,LucideMousePointer:C7,LucideMousePointer2:_7,LucideMousePointerBan:w7,LucideMousePointerClick:L7,LucideMousePointerSquareDashed:oa,LucideMove:D7,LucideMove3D:lo,LucideMove3d:lo,LucideMoveDiagonal:N7,LucideMoveDiagonal2:S7,LucideMoveDown:q7,LucideMoveDownLeft:$7,LucideMoveDownRight:z7,LucideMoveHorizontal:A7,LucideMoveLeft:H7,LucideMoveRight:j7,LucideMoveUp:V7,LucideMoveUpLeft:b7,LucideMoveUpRight:P7,LucideMoveVertical:T7,LucideMusic:E7,LucideMusic2:F7,LucideMusic3:R7,LucideMusic4:B7,LucideNavigation:W7,LucideNavigation2:U7,LucideNavigation2Off:O7,LucideNavigationOff:Z7,LucideNetwork:G7,LucideNewspaper:X7,LucideNfc:K7,LucideNotebook:ef,LucideNotebookPen:Q7,LucideNotebookTabs:J7,LucideNotebookText:Y7,LucideNotepadText:nf,LucideNotepadTextDashed:tf,LucideNut:af,LucideNutOff:of,LucideOctagon:rf,LucideOctagonAlert:so,LucideOctagonMinus:cf,LucideOctagonPause:ho,LucideOctagonX:yo,LucideOmega:df,LucideOption:lf,LucideOrbit:sf,LucideOrigami:hf,LucideOutdent:eo,LucidePackage:vf,LucidePackage2:yf,LucidePackageCheck:uf,LucidePackageMinus:pf,LucidePackageOpen:kf,LucidePackagePlus:ff,LucidePackageSearch:Mf,LucidePackageX:mf,LucidePaintBucket:gf,LucidePaintRoller:xf,LucidePaintbrush:_f,LucidePaintbrush2:uo,LucidePaintbrushVertical:uo,LucidePalette:wf,LucidePalmtree:ba,LucidePanelBottom:If,LucidePanelBottomClose:Lf,LucidePanelBottomDashed:po,LucidePanelBottomInactive:po,LucidePanelBottomOpen:Cf,LucidePanelLeft:mo,LucidePanelLeftClose:ko,LucidePanelLeftDashed:fo,LucidePanelLeftInactive:fo,LucidePanelLeftOpen:Mo,LucidePanelRight:$f,LucidePanelRightClose:Sf,LucidePanelRightDashed:vo,LucidePanelRightInactive:vo,LucidePanelRightOpen:Nf,LucidePanelTop:Af,LucidePanelTopClose:zf,LucidePanelTopDashed:go,LucidePanelTopInactive:go,LucidePanelTopOpen:qf,LucidePanelsLeftBottom:Hf,LucidePanelsLeftRight:$n,LucidePanelsRightBottom:jf,LucidePanelsTopBottom:No,LucidePanelsTopLeft:xo,LucidePaperclip:bf,LucideParentheses:Pf,LucideParkingCircle:yn,LucideParkingCircleOff:hn,LucideParkingMeter:Vf,LucideParkingSquare:fa,LucideParkingSquareOff:ka,LucidePartyPopper:Tf,LucidePause:Df,LucidePauseCircle:un,LucidePauseOctagon:ho,LucidePawPrint:Ff,LucidePcCase:Rf,LucidePen:wo,LucidePenBox:Ke,LucidePenLine:_o,LucidePenOff:Bf,LucidePenSquare:Ke,LucidePenTool:Ef,LucidePencil:Wf,LucidePencilLine:Of,LucidePencilOff:Uf,LucidePencilRuler:Zf,LucidePentagon:Gf,LucidePercent:Xf,LucidePercentCircle:pn,LucidePercentDiamond:qn,LucidePercentSquare:Ma,LucidePersonStanding:Kf,LucidePhilippinePeso:Qf,LucidePhone:a9,LucidePhoneCall:Jf,LucidePhoneForwarded:Yf,LucidePhoneIncoming:e9,LucidePhoneMissed:t9,LucidePhoneOff:n9,LucidePhoneOutgoing:o9,LucidePi:c9,LucidePiSquare:ma,LucidePiano:i9,LucidePickaxe:r9,LucidePictureInPicture:l9,LucidePictureInPicture2:d9,LucidePieChart:Et,LucidePiggyBank:s9,LucidePilcrow:u9,LucidePilcrowLeft:h9,LucidePilcrowRight:y9,LucidePilcrowSquare:va,LucidePill:k9,LucidePillBottle:p9,LucidePin:M9,LucidePinOff:f9,LucidePipette:m9,LucidePizza:v9,LucidePlane:xc,LucidePlaneLanding:g9,LucidePlaneTakeoff:x9,LucidePlay:_9,LucidePlayCircle:kn,LucidePlaySquare:ga,LucidePlug:L9,LucidePlug2:w9,LucidePlugZap:Lo,LucidePlugZap2:Lo,LucidePlus:C9,LucidePlusCircle:fn,LucidePlusSquare:xa,LucidePocket:S9,LucidePocketKnife:I9,LucidePodcast:N9,LucidePointer:z9,LucidePointerOff:$9,LucidePopcorn:q9,LucidePopsicle:A9,LucidePoundSterling:H9,LucidePower:b9,LucidePowerCircle:Mn,LucidePowerOff:j9,LucidePowerSquare:_a,LucidePresentation:P9,LucidePrinter:T9,LucidePrinterCheck:V9,LucideProjector:D9,LucideProportions:F9,LucidePuzzle:R9,LucidePyramid:B9,LucideQrCode:E9,LucideQuote:O9,LucideRabbit:U9,LucideRadar:Z9,LucideRadiation:W9,LucideRadical:G9,LucideRadio:Q9,LucideRadioReceiver:X9,LucideRadioTower:K9,LucideRadius:J9,LucideRailSymbol:Y9,LucideRainbow:eM,LucideRat:tM,LucideRatio:nM,LucideReceipt:hM,LucideReceiptCent:oM,LucideReceiptEuro:aM,LucideReceiptIndianRupee:cM,LucideReceiptJapaneseYen:iM,LucideReceiptPoundSterling:rM,LucideReceiptRussianRuble:dM,LucideReceiptSwissFranc:lM,LucideReceiptText:sM,LucideRectangleEllipsis:Co,LucideRectangleHorizontal:yM,LucideRectangleVertical:uM,LucideRecycle:pM,LucideRedo:MM,LucideRedo2:kM,LucideRedoDot:fM,LucideRefreshCcw:vM,LucideRefreshCcwDot:mM,LucideRefreshCw:xM,LucideRefreshCwOff:gM,LucideRefrigerator:_M,LucideRegex:wM,LucideRemoveFormatting:LM,LucideRepeat:SM,LucideRepeat1:CM,LucideRepeat2:IM,LucideReplace:$M,LucideReplaceAll:NM,LucideReply:qM,LucideReplyAll:zM,LucideRewind:AM,LucideRibbon:HM,LucideRocket:jM,LucideRockingChair:bM,LucideRollerCoaster:PM,LucideRotate3D:Io,LucideRotate3d:Io,LucideRotateCcw:TM,LucideRotateCcwSquare:VM,LucideRotateCw:FM,LucideRotateCwSquare:DM,LucideRoute:BM,LucideRouteOff:RM,LucideRouter:EM,LucideRows:So,LucideRows2:So,LucideRows3:No,LucideRows4:OM,LucideRss:UM,LucideRuler:ZM,LucideRussianRuble:WM,LucideSailboat:GM,LucideSalad:XM,LucideSandwich:KM,LucideSatellite:JM,LucideSatelliteDish:QM,LucideSave:tm,LucideSaveAll:YM,LucideSaveOff:em,LucideScale:nm,LucideScale3D:$o,LucideScale3d:$o,LucideScaling:om,LucideScan:ym,LucideScanBarcode:am,LucideScanEye:cm,LucideScanFace:im,LucideScanHeart:rm,LucideScanLine:dm,LucideScanQrCode:lm,LucideScanSearch:sm,LucideScanText:hm,LucideScatterChart:Ot,LucideSchool:um,LucideSchool2:Ta,LucideScissors:km,LucideScissorsLineDashed:pm,LucideScissorsSquare:wa,LucideScissorsSquareDashedBottom:Go,LucideScreenShare:Mm,LucideScreenShareOff:fm,LucideScroll:vm,LucideScrollText:mm,LucideSearch:Lm,LucideSearchCheck:gm,LucideSearchCode:xm,LucideSearchSlash:_m,LucideSearchX:wm,LucideSection:Cm,LucideSend:Sm,LucideSendHorizonal:zo,LucideSendHorizontal:zo,LucideSendToBack:Im,LucideSeparatorHorizontal:Nm,LucideSeparatorVertical:$m,LucideServer:Hm,LucideServerCog:zm,LucideServerCrash:qm,LucideServerOff:Am,LucideSettings:bm,LucideSettings2:jm,LucideShapes:Pm,LucideShare:Tm,LucideShare2:Vm,LucideSheet:Dm,LucideShell:Fm,LucideShield:Xm,LucideShieldAlert:Rm,LucideShieldBan:Bm,LucideShieldCheck:Em,LucideShieldClose:qo,LucideShieldEllipsis:Om,LucideShieldHalf:Um,LucideShieldMinus:Zm,LucideShieldOff:Wm,LucideShieldPlus:_c,LucideShieldQuestion:Gm,LucideShieldX:qo,LucideShip:Qm,LucideShipWheel:Km,LucideShirt:Jm,LucideShoppingBag:Ym,LucideShoppingBasket:ev,LucideShoppingCart:tv,LucideShovel:nv,LucideShowerHead:ov,LucideShrink:av,LucideShrub:cv,LucideShuffle:iv,LucideSidebar:mo,LucideSidebarClose:ko,LucideSidebarOpen:Mo,LucideSigma:rv,LucideSigmaSquare:La,LucideSignal:yv,LucideSignalHigh:dv,LucideSignalLow:lv,LucideSignalMedium:sv,LucideSignalZero:hv,LucideSignature:uv,LucideSignpost:kv,LucideSignpostBig:pv,LucideSiren:fv,LucideSkipBack:Mv,LucideSkipForward:mv,LucideSkull:vv,LucideSlack:gv,LucideSlash:xv,LucideSlashSquare:Ca,LucideSlice:_v,LucideSliders:Ao,LucideSlidersHorizontal:wv,LucideSlidersVertical:Ao,LucideSmartphone:Iv,LucideSmartphoneCharging:Lv,LucideSmartphoneNfc:Cv,LucideSmile:Nv,LucideSmilePlus:Sv,LucideSnail:$v,LucideSnowflake:zv,LucideSofa:qv,LucideSortAsc:wt,LucideSortDesc:gt,LucideSoup:Av,LucideSpace:Hv,LucideSpade:jv,LucideSparkle:bv,LucideSparkles:Ho,LucideSpeaker:Pv,LucideSpeech:Vv,LucideSpellCheck:Dv,LucideSpellCheck2:Tv,LucideSpline:Fv,LucideSplit:Rv,LucideSplitSquareHorizontal:Ia,LucideSplitSquareVertical:Sa,LucideSprayCan:Bv,LucideSprout:Ev,LucideSquare:Xv,LucideSquareActivity:jo,LucideSquareArrowDown:Vo,LucideSquareArrowDownLeft:bo,LucideSquareArrowDownRight:Po,LucideSquareArrowLeft:To,LucideSquareArrowOutDownLeft:Do,LucideSquareArrowOutDownRight:Fo,LucideSquareArrowOutUpLeft:Ro,LucideSquareArrowOutUpRight:Bo,LucideSquareArrowRight:Eo,LucideSquareArrowUp:Zo,LucideSquareArrowUpLeft:Oo,LucideSquareArrowUpRight:Uo,LucideSquareAsterisk:Wo,LucideSquareBottomDashedScissors:Go,LucideSquareChartGantt:L1,LucideSquareCheck:Ko,LucideSquareCheckBig:Xo,LucideSquareChevronDown:Qo,LucideSquareChevronLeft:Jo,LucideSquareChevronRight:Yo,LucideSquareChevronUp:ea,LucideSquareCode:ta,LucideSquareDashed:aa,LucideSquareDashedBottom:Uv,LucideSquareDashedBottomCode:Ov,LucideSquareDashedKanban:na,LucideSquareDashedMousePointer:oa,LucideSquareDivide:ca,LucideSquareDot:ia,LucideSquareEqual:ra,LucideSquareFunction:da,LucideSquareGanttChart:L1,LucideSquareKanban:la,LucideSquareLibrary:sa,LucideSquareM:ha,LucideSquareMenu:ya,LucideSquareMinus:ua,LucideSquareMousePointer:pa,LucideSquareParking:fa,LucideSquareParkingOff:ka,LucideSquarePen:Ke,LucideSquarePercent:Ma,LucideSquarePi:ma,LucideSquarePilcrow:va,LucideSquarePlay:ga,LucideSquarePlus:xa,LucideSquarePower:_a,LucideSquareRadical:Zv,LucideSquareScissors:wa,LucideSquareSigma:La,LucideSquareSlash:Ca,LucideSquareSplitHorizontal:Ia,LucideSquareSplitVertical:Sa,LucideSquareSquare:Wv,LucideSquareStack:Gv,LucideSquareTerminal:Na,LucideSquareUser:za,LucideSquareUserRound:$a,LucideSquareX:qa,LucideSquircle:Kv,LucideSquirrel:Qv,LucideStamp:Jv,LucideStar:wc,LucideStarHalf:Yv,LucideStarOff:eg,LucideStars:Ho,LucideStepBack:tg,LucideStepForward:ng,LucideStethoscope:og,LucideSticker:ag,LucideStickyNote:cg,LucideStopCircle:vn,LucideStore:ig,LucideStretchHorizontal:rg,LucideStretchVertical:dg,LucideStrikethrough:lg,LucideSubscript:sg,LucideSubtitles:qt,LucideSun:kg,LucideSunDim:hg,LucideSunMedium:yg,LucideSunMoon:ug,LucideSunSnow:pg,LucideSunrise:fg,LucideSunset:Mg,LucideSuperscript:mg,LucideSwatchBook:vg,LucideSwissFranc:gg,LucideSwitchCamera:xg,LucideSword:_g,LucideSwords:wg,LucideSyringe:Lg,LucideTable:Ag,LucideTable2:Cg,LucideTableCellsMerge:Ig,LucideTableCellsSplit:Sg,LucideTableColumnsSplit:Ng,LucideTableOfContents:$g,LucideTableProperties:zg,LucideTableRowsSplit:qg,LucideTablet:jg,LucideTabletSmartphone:Hg,LucideTablets:bg,LucideTag:Pg,LucideTags:Vg,LucideTally1:Tg,LucideTally2:Dg,LucideTally3:Fg,LucideTally4:Rg,LucideTally5:Bg,LucideTangent:Eg,LucideTarget:Og,LucideTelescope:Ug,LucideTent:Wg,LucideTentTree:Zg,LucideTerminal:Gg,LucideTerminalSquare:Na,LucideTestTube:Xg,LucideTestTube2:Aa,LucideTestTubeDiagonal:Aa,LucideTestTubes:Kg,LucideText:tx,LucideTextCursor:Jg,LucideTextCursorInput:Qg,LucideTextQuote:Yg,LucideTextSearch:ex,LucideTextSelect:Ha,LucideTextSelection:Ha,LucideTheater:nx,LucideThermometer:cx,LucideThermometerSnowflake:ox,LucideThermometerSun:ax,LucideThumbsDown:ix,LucideThumbsUp:rx,LucideTicket:px,LucideTicketCheck:dx,LucideTicketMinus:lx,LucideTicketPercent:sx,LucideTicketPlus:hx,LucideTicketSlash:yx,LucideTicketX:ux,LucideTickets:fx,LucideTicketsPlane:kx,LucideTimer:vx,LucideTimerOff:Mx,LucideTimerReset:mx,LucideToggleLeft:gx,LucideToggleRight:xx,LucideToilet:_x,LucideTornado:wx,LucideTorus:Lx,LucideTouchpad:Ix,LucideTouchpadOff:Cx,LucideTowerControl:Sx,LucideToyBrick:Nx,LucideTractor:$x,LucideTrafficCone:zx,LucideTrain:ja,LucideTrainFront:Ax,LucideTrainFrontTunnel:qx,LucideTrainTrack:Hx,LucideTramFront:ja,LucideTrash:bx,LucideTrash2:jx,LucideTreeDeciduous:Px,LucideTreePalm:ba,LucideTreePine:Vx,LucideTrees:Tx,LucideTrello:Dx,LucideTrendingDown:Fx,LucideTrendingUp:Bx,LucideTrendingUpDown:Rx,LucideTriangle:Ux,LucideTriangleAlert:Pa,LucideTriangleDashed:Ex,LucideTriangleRight:Ox,LucideTrophy:Zx,LucideTruck:Wx,LucideTurtle:Gx,LucideTv:Kx,LucideTv2:Va,LucideTvMinimal:Va,LucideTvMinimalPlay:Xx,LucideTwitch:Qx,LucideTwitter:Jx,LucideType:e_,LucideTypeOutline:Yx,LucideUmbrella:n_,LucideUmbrellaOff:t_,LucideUnderline:o_,LucideUndo:i_,LucideUndo2:a_,LucideUndoDot:c_,LucideUnfoldHorizontal:r_,LucideUnfoldVertical:d_,LucideUngroup:l_,LucideUniversity:Ta,LucideUnlink:h_,LucideUnlink2:s_,LucideUnlock:io,LucideUnlockKeyhole:co,LucideUnplug:y_,LucideUpload:u_,LucideUploadCloud:In,LucideUsb:p_,LucideUser:L_,LucideUser2:Oa,LucideUserCheck:k_,LucideUserCheck2:Da,LucideUserCircle:xn,LucideUserCircle2:gn,LucideUserCog:f_,LucideUserCog2:Fa,LucideUserMinus:M_,LucideUserMinus2:Ra,LucideUserPen:m_,LucideUserPlus:v_,LucideUserPlus2:Ba,LucideUserRound:Oa,LucideUserRoundCheck:Da,LucideUserRoundCog:Fa,LucideUserRoundMinus:Ra,LucideUserRoundPen:g_,LucideUserRoundPlus:Ba,LucideUserRoundSearch:x_,LucideUserRoundX:Ea,LucideUserSearch:__,LucideUserSquare:za,LucideUserSquare2:$a,LucideUserX:w_,LucideUserX2:Ea,LucideUsers:C_,LucideUsers2:Ua,LucideUsersRound:Ua,LucideUtensils:Wa,LucideUtensilsCrossed:Za,LucideUtilityPole:I_,LucideVariable:S_,LucideVault:N_,LucideVegan:$_,LucideVenetianMask:z_,LucideVerified:It,LucideVibrate:A_,LucideVibrateOff:q_,LucideVideo:j_,LucideVideoOff:H_,LucideVideotape:b_,LucideView:P_,LucideVoicemail:V_,LucideVolleyball:T_,LucideVolume:E_,LucideVolume1:D_,LucideVolume2:F_,LucideVolumeOff:R_,LucideVolumeX:B_,LucideVote:O_,LucideWallet:Z_,LucideWallet2:Ga,LucideWalletCards:U_,LucideWalletMinimal:Ga,LucideWallpaper:W_,LucideWand:G_,LucideWand2:Xa,LucideWandSparkles:Xa,LucideWarehouse:X_,LucideWashingMachine:K_,LucideWatch:Q_,LucideWaves:Y_,LucideWavesLadder:J_,LucideWaypoints:ew,LucideWebcam:tw,LucideWebhook:ow,LucideWebhookOff:nw,LucideWeight:aw,LucideWheat:iw,LucideWheatOff:cw,LucideWholeWord:rw,LucideWifi:yw,LucideWifiHigh:dw,LucideWifiLow:lw,LucideWifiOff:sw,LucideWifiZero:hw,LucideWind:pw,LucideWindArrowDown:uw,LucideWine:fw,LucideWineOff:kw,LucideWorkflow:Mw,LucideWorm:mw,LucideWrapText:vw,LucideWrench:gw,LucideX:xw,LucideXCircle:_n,LucideXOctagon:yo,LucideXSquare:qa,LucideYoutube:_w,LucideZap:Lw,LucideZapOff:ww,LucideZoomIn:Cw,LucideZoomOut:Iw,Luggage:D6,LuggageIcon:D6,MSquare:ha,MSquareIcon:ha,Magnet:F6,MagnetIcon:F6,Mail:X6,MailCheck:R6,MailCheckIcon:R6,MailIcon:X6,MailMinus:B6,MailMinusIcon:B6,MailOpen:E6,MailOpenIcon:E6,MailPlus:O6,MailPlusIcon:O6,MailQuestion:U6,MailQuestionIcon:U6,MailSearch:Z6,MailSearchIcon:Z6,MailWarning:W6,MailWarningIcon:W6,MailX:G6,MailXIcon:G6,Mailbox:K6,MailboxIcon:K6,Mails:Q6,MailsIcon:Q6,Map:gc,MapIcon:gc,MapPin:vc,MapPinCheck:Y6,MapPinCheckIcon:Y6,MapPinCheckInside:J6,MapPinCheckInsideIcon:J6,MapPinHouse:e8,MapPinHouseIcon:e8,MapPinIcon:vc,MapPinMinus:n8,MapPinMinusIcon:n8,MapPinMinusInside:t8,MapPinMinusInsideIcon:t8,MapPinOff:o8,MapPinOffIcon:o8,MapPinPlus:c8,MapPinPlusIcon:c8,MapPinPlusInside:a8,MapPinPlusInsideIcon:a8,MapPinX:r8,MapPinXIcon:r8,MapPinXInside:i8,MapPinXInsideIcon:i8,MapPinned:d8,MapPinnedIcon:d8,Martini:l8,MartiniIcon:l8,Maximize:h8,Maximize2:s8,Maximize2Icon:s8,MaximizeIcon:h8,Medal:y8,MedalIcon:y8,Megaphone:p8,MegaphoneIcon:p8,MegaphoneOff:u8,MegaphoneOffIcon:u8,Meh:k8,MehIcon:k8,MemoryStick:f8,MemoryStickIcon:f8,Menu:M8,MenuIcon:M8,MenuSquare:ya,MenuSquareIcon:ya,Merge:m8,MergeIcon:m8,MessageCircle:$8,MessageCircleCode:v8,MessageCircleCodeIcon:v8,MessageCircleDashed:g8,MessageCircleDashedIcon:g8,MessageCircleHeart:x8,MessageCircleHeartIcon:x8,MessageCircleIcon:$8,MessageCircleMore:_8,MessageCircleMoreIcon:_8,MessageCircleOff:w8,MessageCircleOffIcon:w8,MessageCirclePlus:L8,MessageCirclePlusIcon:L8,MessageCircleQuestion:C8,MessageCircleQuestionIcon:C8,MessageCircleReply:I8,MessageCircleReplyIcon:I8,MessageCircleWarning:S8,MessageCircleWarningIcon:S8,MessageCircleX:N8,MessageCircleXIcon:N8,MessageSquare:U8,MessageSquareCode:z8,MessageSquareCodeIcon:z8,MessageSquareDashed:q8,MessageSquareDashedIcon:q8,MessageSquareDiff:A8,MessageSquareDiffIcon:A8,MessageSquareDot:H8,MessageSquareDotIcon:H8,MessageSquareHeart:j8,MessageSquareHeartIcon:j8,MessageSquareIcon:U8,MessageSquareLock:b8,MessageSquareLockIcon:b8,MessageSquareMore:P8,MessageSquareMoreIcon:P8,MessageSquareOff:V8,MessageSquareOffIcon:V8,MessageSquarePlus:T8,MessageSquarePlusIcon:T8,MessageSquareQuote:D8,MessageSquareQuoteIcon:D8,MessageSquareReply:F8,MessageSquareReplyIcon:F8,MessageSquareShare:R8,MessageSquareShareIcon:R8,MessageSquareText:B8,MessageSquareTextIcon:B8,MessageSquareWarning:E8,MessageSquareWarningIcon:E8,MessageSquareX:O8,MessageSquareXIcon:O8,MessagesSquare:Z8,MessagesSquareIcon:Z8,Mic:G8,Mic2:ro,Mic2Icon:ro,MicIcon:G8,MicOff:W8,MicOffIcon:W8,MicVocal:ro,MicVocalIcon:ro,Microchip:X8,MicrochipIcon:X8,Microscope:K8,MicroscopeIcon:K8,Microwave:Q8,MicrowaveIcon:Q8,Milestone:J8,MilestoneIcon:J8,Milk:e7,MilkIcon:e7,MilkOff:Y8,MilkOffIcon:Y8,Minimize:n7,Minimize2:t7,Minimize2Icon:t7,MinimizeIcon:n7,Minus:o7,MinusCircle:sn,MinusCircleIcon:sn,MinusIcon:o7,MinusSquare:ua,MinusSquareIcon:ua,Monitor:f7,MonitorCheck:a7,MonitorCheckIcon:a7,MonitorCog:c7,MonitorCogIcon:c7,MonitorDot:i7,MonitorDotIcon:i7,MonitorDown:r7,MonitorDownIcon:r7,MonitorIcon:f7,MonitorOff:d7,MonitorOffIcon:d7,MonitorPause:l7,MonitorPauseIcon:l7,MonitorPlay:s7,MonitorPlayIcon:s7,MonitorSmartphone:h7,MonitorSmartphoneIcon:h7,MonitorSpeaker:y7,MonitorSpeakerIcon:y7,MonitorStop:u7,MonitorStopIcon:u7,MonitorUp:p7,MonitorUpIcon:p7,MonitorX:k7,MonitorXIcon:k7,Moon:m7,MoonIcon:m7,MoonStar:M7,MoonStarIcon:M7,MoreHorizontal:jn,MoreHorizontalIcon:jn,MoreVertical:Hn,MoreVerticalIcon:Hn,Mountain:g7,MountainIcon:g7,MountainSnow:v7,MountainSnowIcon:v7,Mouse:I7,MouseIcon:I7,MouseOff:x7,MouseOffIcon:x7,MousePointer:C7,MousePointer2:_7,MousePointer2Icon:_7,MousePointerBan:w7,MousePointerBanIcon:w7,MousePointerClick:L7,MousePointerClickIcon:L7,MousePointerIcon:C7,MousePointerSquareDashed:oa,MousePointerSquareDashedIcon:oa,Move:D7,Move3D:lo,Move3DIcon:lo,Move3d:lo,Move3dIcon:lo,MoveDiagonal:N7,MoveDiagonal2:S7,MoveDiagonal2Icon:S7,MoveDiagonalIcon:N7,MoveDown:q7,MoveDownIcon:q7,MoveDownLeft:$7,MoveDownLeftIcon:$7,MoveDownRight:z7,MoveDownRightIcon:z7,MoveHorizontal:A7,MoveHorizontalIcon:A7,MoveIcon:D7,MoveLeft:H7,MoveLeftIcon:H7,MoveRight:j7,MoveRightIcon:j7,MoveUp:V7,MoveUpIcon:V7,MoveUpLeft:b7,MoveUpLeftIcon:b7,MoveUpRight:P7,MoveUpRightIcon:P7,MoveVertical:T7,MoveVerticalIcon:T7,Music:E7,Music2:F7,Music2Icon:F7,Music3:R7,Music3Icon:R7,Music4:B7,Music4Icon:B7,MusicIcon:E7,Navigation:W7,Navigation2:U7,Navigation2Icon:U7,Navigation2Off:O7,Navigation2OffIcon:O7,NavigationIcon:W7,NavigationOff:Z7,NavigationOffIcon:Z7,Network:G7,NetworkIcon:G7,Newspaper:X7,NewspaperIcon:X7,Nfc:K7,NfcIcon:K7,Notebook:ef,NotebookIcon:ef,NotebookPen:Q7,NotebookPenIcon:Q7,NotebookTabs:J7,NotebookTabsIcon:J7,NotebookText:Y7,NotebookTextIcon:Y7,NotepadText:nf,NotepadTextDashed:tf,NotepadTextDashedIcon:tf,NotepadTextIcon:nf,Nut:af,NutIcon:af,NutOff:of,NutOffIcon:of,Octagon:rf,OctagonAlert:so,OctagonAlertIcon:so,OctagonIcon:rf,OctagonMinus:cf,OctagonMinusIcon:cf,OctagonPause:ho,OctagonPauseIcon:ho,OctagonX:yo,OctagonXIcon:yo,Omega:df,OmegaIcon:df,Option:lf,OptionIcon:lf,Orbit:sf,OrbitIcon:sf,Origami:hf,OrigamiIcon:hf,Outdent:eo,OutdentIcon:eo,Package:vf,Package2:yf,Package2Icon:yf,PackageCheck:uf,PackageCheckIcon:uf,PackageIcon:vf,PackageMinus:pf,PackageMinusIcon:pf,PackageOpen:kf,PackageOpenIcon:kf,PackagePlus:ff,PackagePlusIcon:ff,PackageSearch:Mf,PackageSearchIcon:Mf,PackageX:mf,PackageXIcon:mf,PaintBucket:gf,PaintBucketIcon:gf,PaintRoller:xf,PaintRollerIcon:xf,Paintbrush:_f,Paintbrush2:uo,Paintbrush2Icon:uo,PaintbrushIcon:_f,PaintbrushVertical:uo,PaintbrushVerticalIcon:uo,Palette:wf,PaletteIcon:wf,Palmtree:ba,PalmtreeIcon:ba,PanelBottom:If,PanelBottomClose:Lf,PanelBottomCloseIcon:Lf,PanelBottomDashed:po,PanelBottomDashedIcon:po,PanelBottomIcon:If,PanelBottomInactive:po,PanelBottomInactiveIcon:po,PanelBottomOpen:Cf,PanelBottomOpenIcon:Cf,PanelLeft:mo,PanelLeftClose:ko,PanelLeftCloseIcon:ko,PanelLeftDashed:fo,PanelLeftDashedIcon:fo,PanelLeftIcon:mo,PanelLeftInactive:fo,PanelLeftInactiveIcon:fo,PanelLeftOpen:Mo,PanelLeftOpenIcon:Mo,PanelRight:$f,PanelRightClose:Sf,PanelRightCloseIcon:Sf,PanelRightDashed:vo,PanelRightDashedIcon:vo,PanelRightIcon:$f,PanelRightInactive:vo,PanelRightInactiveIcon:vo,PanelRightOpen:Nf,PanelRightOpenIcon:Nf,PanelTop:Af,PanelTopClose:zf,PanelTopCloseIcon:zf,PanelTopDashed:go,PanelTopDashedIcon:go,PanelTopIcon:Af,PanelTopInactive:go,PanelTopInactiveIcon:go,PanelTopOpen:qf,PanelTopOpenIcon:qf,PanelsLeftBottom:Hf,PanelsLeftBottomIcon:Hf,PanelsLeftRight:$n,PanelsLeftRightIcon:$n,PanelsRightBottom:jf,PanelsRightBottomIcon:jf,PanelsTopBottom:No,PanelsTopBottomIcon:No,PanelsTopLeft:xo,PanelsTopLeftIcon:xo,Paperclip:bf,PaperclipIcon:bf,Parentheses:Pf,ParenthesesIcon:Pf,ParkingCircle:yn,ParkingCircleIcon:yn,ParkingCircleOff:hn,ParkingCircleOffIcon:hn,ParkingMeter:Vf,ParkingMeterIcon:Vf,ParkingSquare:fa,ParkingSquareIcon:fa,ParkingSquareOff:ka,ParkingSquareOffIcon:ka,PartyPopper:Tf,PartyPopperIcon:Tf,Pause:Df,PauseCircle:un,PauseCircleIcon:un,PauseIcon:Df,PauseOctagon:ho,PauseOctagonIcon:ho,PawPrint:Ff,PawPrintIcon:Ff,PcCase:Rf,PcCaseIcon:Rf,Pen:wo,PenBox:Ke,PenBoxIcon:Ke,PenIcon:wo,PenLine:_o,PenLineIcon:_o,PenOff:Bf,PenOffIcon:Bf,PenSquare:Ke,PenSquareIcon:Ke,PenTool:Ef,PenToolIcon:Ef,Pencil:Wf,PencilIcon:Wf,PencilLine:Of,PencilLineIcon:Of,PencilOff:Uf,PencilOffIcon:Uf,PencilRuler:Zf,PencilRulerIcon:Zf,Pentagon:Gf,PentagonIcon:Gf,Percent:Xf,PercentCircle:pn,PercentCircleIcon:pn,PercentDiamond:qn,PercentDiamondIcon:qn,PercentIcon:Xf,PercentSquare:Ma,PercentSquareIcon:Ma,PersonStanding:Kf,PersonStandingIcon:Kf,PhilippinePeso:Qf,PhilippinePesoIcon:Qf,Phone:a9,PhoneCall:Jf,PhoneCallIcon:Jf,PhoneForwarded:Yf,PhoneForwardedIcon:Yf,PhoneIcon:a9,PhoneIncoming:e9,PhoneIncomingIcon:e9,PhoneMissed:t9,PhoneMissedIcon:t9,PhoneOff:n9,PhoneOffIcon:n9,PhoneOutgoing:o9,PhoneOutgoingIcon:o9,Pi:c9,PiIcon:c9,PiSquare:ma,PiSquareIcon:ma,Piano:i9,PianoIcon:i9,Pickaxe:r9,PickaxeIcon:r9,PictureInPicture:l9,PictureInPicture2:d9,PictureInPicture2Icon:d9,PictureInPictureIcon:l9,PieChart:Et,PieChartIcon:Et,PiggyBank:s9,PiggyBankIcon:s9,Pilcrow:u9,PilcrowIcon:u9,PilcrowLeft:h9,PilcrowLeftIcon:h9,PilcrowRight:y9,PilcrowRightIcon:y9,PilcrowSquare:va,PilcrowSquareIcon:va,Pill:k9,PillBottle:p9,PillBottleIcon:p9,PillIcon:k9,Pin:M9,PinIcon:M9,PinOff:f9,PinOffIcon:f9,Pipette:m9,PipetteIcon:m9,Pizza:v9,PizzaIcon:v9,Plane:xc,PlaneIcon:xc,PlaneLanding:g9,PlaneLandingIcon:g9,PlaneTakeoff:x9,PlaneTakeoffIcon:x9,Play:_9,PlayCircle:kn,PlayCircleIcon:kn,PlayIcon:_9,PlaySquare:ga,PlaySquareIcon:ga,Plug:L9,Plug2:w9,Plug2Icon:w9,PlugIcon:L9,PlugZap:Lo,PlugZap2:Lo,PlugZap2Icon:Lo,PlugZapIcon:Lo,Plus:C9,PlusCircle:fn,PlusCircleIcon:fn,PlusIcon:C9,PlusSquare:xa,PlusSquareIcon:xa,Pocket:S9,PocketIcon:S9,PocketKnife:I9,PocketKnifeIcon:I9,Podcast:N9,PodcastIcon:N9,Pointer:z9,PointerIcon:z9,PointerOff:$9,PointerOffIcon:$9,Popcorn:q9,PopcornIcon:q9,Popsicle:A9,PopsicleIcon:A9,PoundSterling:H9,PoundSterlingIcon:H9,Power:b9,PowerCircle:Mn,PowerCircleIcon:Mn,PowerIcon:b9,PowerOff:j9,PowerOffIcon:j9,PowerSquare:_a,PowerSquareIcon:_a,Presentation:P9,PresentationIcon:P9,Printer:T9,PrinterCheck:V9,PrinterCheckIcon:V9,PrinterIcon:T9,Projector:D9,ProjectorIcon:D9,Proportions:F9,ProportionsIcon:F9,Puzzle:R9,PuzzleIcon:R9,Pyramid:B9,PyramidIcon:B9,QrCode:E9,QrCodeIcon:E9,Quote:O9,QuoteIcon:O9,Rabbit:U9,RabbitIcon:U9,Radar:Z9,RadarIcon:Z9,Radiation:W9,RadiationIcon:W9,Radical:G9,RadicalIcon:G9,Radio:Q9,RadioIcon:Q9,RadioReceiver:X9,RadioReceiverIcon:X9,RadioTower:K9,RadioTowerIcon:K9,Radius:J9,RadiusIcon:J9,RailSymbol:Y9,RailSymbolIcon:Y9,Rainbow:eM,RainbowIcon:eM,Rat:tM,RatIcon:tM,Ratio:nM,RatioIcon:nM,Receipt:hM,ReceiptCent:oM,ReceiptCentIcon:oM,ReceiptEuro:aM,ReceiptEuroIcon:aM,ReceiptIcon:hM,ReceiptIndianRupee:cM,ReceiptIndianRupeeIcon:cM,ReceiptJapaneseYen:iM,ReceiptJapaneseYenIcon:iM,ReceiptPoundSterling:rM,ReceiptPoundSterlingIcon:rM,ReceiptRussianRuble:dM,ReceiptRussianRubleIcon:dM,ReceiptSwissFranc:lM,ReceiptSwissFrancIcon:lM,ReceiptText:sM,ReceiptTextIcon:sM,RectangleEllipsis:Co,RectangleEllipsisIcon:Co,RectangleHorizontal:yM,RectangleHorizontalIcon:yM,RectangleVertical:uM,RectangleVerticalIcon:uM,Recycle:pM,RecycleIcon:pM,Redo:MM,Redo2:kM,Redo2Icon:kM,RedoDot:fM,RedoDotIcon:fM,RedoIcon:MM,RefreshCcw:vM,RefreshCcwDot:mM,RefreshCcwDotIcon:mM,RefreshCcwIcon:vM,RefreshCw:xM,RefreshCwIcon:xM,RefreshCwOff:gM,RefreshCwOffIcon:gM,Refrigerator:_M,RefrigeratorIcon:_M,Regex:wM,RegexIcon:wM,RemoveFormatting:LM,RemoveFormattingIcon:LM,Repeat:SM,Repeat1:CM,Repeat1Icon:CM,Repeat2:IM,Repeat2Icon:IM,RepeatIcon:SM,Replace:$M,ReplaceAll:NM,ReplaceAllIcon:NM,ReplaceIcon:$M,Reply:qM,ReplyAll:zM,ReplyAllIcon:zM,ReplyIcon:qM,Rewind:AM,RewindIcon:AM,Ribbon:HM,RibbonIcon:HM,Rocket:jM,RocketIcon:jM,RockingChair:bM,RockingChairIcon:bM,RollerCoaster:PM,RollerCoasterIcon:PM,Rotate3D:Io,Rotate3DIcon:Io,Rotate3d:Io,Rotate3dIcon:Io,RotateCcw:TM,RotateCcwIcon:TM,RotateCcwSquare:VM,RotateCcwSquareIcon:VM,RotateCw:FM,RotateCwIcon:FM,RotateCwSquare:DM,RotateCwSquareIcon:DM,Route:BM,RouteIcon:BM,RouteOff:RM,RouteOffIcon:RM,Router:EM,RouterIcon:EM,Rows:So,Rows2:So,Rows2Icon:So,Rows3:No,Rows3Icon:No,Rows4:OM,Rows4Icon:OM,RowsIcon:So,Rss:UM,RssIcon:UM,Ruler:ZM,RulerIcon:ZM,RussianRuble:WM,RussianRubleIcon:WM,Sailboat:GM,SailboatIcon:GM,Salad:XM,SaladIcon:XM,Sandwich:KM,SandwichIcon:KM,Satellite:JM,SatelliteDish:QM,SatelliteDishIcon:QM,SatelliteIcon:JM,Save:tm,SaveAll:YM,SaveAllIcon:YM,SaveIcon:tm,SaveOff:em,SaveOffIcon:em,Scale:nm,Scale3D:$o,Scale3DIcon:$o,Scale3d:$o,Scale3dIcon:$o,ScaleIcon:nm,Scaling:om,ScalingIcon:om,Scan:ym,ScanBarcode:am,ScanBarcodeIcon:am,ScanEye:cm,ScanEyeIcon:cm,ScanFace:im,ScanFaceIcon:im,ScanHeart:rm,ScanHeartIcon:rm,ScanIcon:ym,ScanLine:dm,ScanLineIcon:dm,ScanQrCode:lm,ScanQrCodeIcon:lm,ScanSearch:sm,ScanSearchIcon:sm,ScanText:hm,ScanTextIcon:hm,ScatterChart:Ot,ScatterChartIcon:Ot,School:um,School2:Ta,School2Icon:Ta,SchoolIcon:um,Scissors:km,ScissorsIcon:km,ScissorsLineDashed:pm,ScissorsLineDashedIcon:pm,ScissorsSquare:wa,ScissorsSquareDashedBottom:Go,ScissorsSquareDashedBottomIcon:Go,ScissorsSquareIcon:wa,ScreenShare:Mm,ScreenShareIcon:Mm,ScreenShareOff:fm,ScreenShareOffIcon:fm,Scroll:vm,ScrollIcon:vm,ScrollText:mm,ScrollTextIcon:mm,Search:Lm,SearchCheck:gm,SearchCheckIcon:gm,SearchCode:xm,SearchCodeIcon:xm,SearchIcon:Lm,SearchSlash:_m,SearchSlashIcon:_m,SearchX:wm,SearchXIcon:wm,Section:Cm,SectionIcon:Cm,Send:Sm,SendHorizonal:zo,SendHorizonalIcon:zo,SendHorizontal:zo,SendHorizontalIcon:zo,SendIcon:Sm,SendToBack:Im,SendToBackIcon:Im,SeparatorHorizontal:Nm,SeparatorHorizontalIcon:Nm,SeparatorVertical:$m,SeparatorVerticalIcon:$m,Server:Hm,ServerCog:zm,ServerCogIcon:zm,ServerCrash:qm,ServerCrashIcon:qm,ServerIcon:Hm,ServerOff:Am,ServerOffIcon:Am,Settings:bm,Settings2:jm,Settings2Icon:jm,SettingsIcon:bm,Shapes:Pm,ShapesIcon:Pm,Share:Tm,Share2:Vm,Share2Icon:Vm,ShareIcon:Tm,Sheet:Dm,SheetIcon:Dm,Shell:Fm,ShellIcon:Fm,Shield:Xm,ShieldAlert:Rm,ShieldAlertIcon:Rm,ShieldBan:Bm,ShieldBanIcon:Bm,ShieldCheck:Em,ShieldCheckIcon:Em,ShieldClose:qo,ShieldCloseIcon:qo,ShieldEllipsis:Om,ShieldEllipsisIcon:Om,ShieldHalf:Um,ShieldHalfIcon:Um,ShieldIcon:Xm,ShieldMinus:Zm,ShieldMinusIcon:Zm,ShieldOff:Wm,ShieldOffIcon:Wm,ShieldPlus:_c,ShieldPlusIcon:_c,ShieldQuestion:Gm,ShieldQuestionIcon:Gm,ShieldX:qo,ShieldXIcon:qo,Ship:Qm,ShipIcon:Qm,ShipWheel:Km,ShipWheelIcon:Km,Shirt:Jm,ShirtIcon:Jm,ShoppingBag:Ym,ShoppingBagIcon:Ym,ShoppingBasket:ev,ShoppingBasketIcon:ev,ShoppingCart:tv,ShoppingCartIcon:tv,Shovel:nv,ShovelIcon:nv,ShowerHead:ov,ShowerHeadIcon:ov,Shrink:av,ShrinkIcon:av,Shrub:cv,ShrubIcon:cv,Shuffle:iv,ShuffleIcon:iv,Sidebar:mo,SidebarClose:ko,SidebarCloseIcon:ko,SidebarIcon:mo,SidebarOpen:Mo,SidebarOpenIcon:Mo,Sigma:rv,SigmaIcon:rv,SigmaSquare:La,SigmaSquareIcon:La,Signal:yv,SignalHigh:dv,SignalHighIcon:dv,SignalIcon:yv,SignalLow:lv,SignalLowIcon:lv,SignalMedium:sv,SignalMediumIcon:sv,SignalZero:hv,SignalZeroIcon:hv,Signature:uv,SignatureIcon:uv,Signpost:kv,SignpostBig:pv,SignpostBigIcon:pv,SignpostIcon:kv,Siren:fv,SirenIcon:fv,SkipBack:Mv,SkipBackIcon:Mv,SkipForward:mv,SkipForwardIcon:mv,Skull:vv,SkullIcon:vv,Slack:gv,SlackIcon:gv,Slash:xv,SlashIcon:xv,SlashSquare:Ca,SlashSquareIcon:Ca,Slice:_v,SliceIcon:_v,Sliders:Ao,SlidersHorizontal:wv,SlidersHorizontalIcon:wv,SlidersIcon:Ao,SlidersVertical:Ao,SlidersVerticalIcon:Ao,Smartphone:Iv,SmartphoneCharging:Lv,SmartphoneChargingIcon:Lv,SmartphoneIcon:Iv,SmartphoneNfc:Cv,SmartphoneNfcIcon:Cv,Smile:Nv,SmileIcon:Nv,SmilePlus:Sv,SmilePlusIcon:Sv,Snail:$v,SnailIcon:$v,Snowflake:zv,SnowflakeIcon:zv,Sofa:qv,SofaIcon:qv,SortAsc:wt,SortAscIcon:wt,SortDesc:gt,SortDescIcon:gt,Soup:Av,SoupIcon:Av,Space:Hv,SpaceIcon:Hv,Spade:jv,SpadeIcon:jv,Sparkle:bv,SparkleIcon:bv,Sparkles:Ho,SparklesIcon:Ho,Speaker:Pv,SpeakerIcon:Pv,Speech:Vv,SpeechIcon:Vv,SpellCheck:Dv,SpellCheck2:Tv,SpellCheck2Icon:Tv,SpellCheckIcon:Dv,Spline:Fv,SplineIcon:Fv,Split:Rv,SplitIcon:Rv,SplitSquareHorizontal:Ia,SplitSquareHorizontalIcon:Ia,SplitSquareVertical:Sa,SplitSquareVerticalIcon:Sa,SprayCan:Bv,SprayCanIcon:Bv,Sprout:Ev,SproutIcon:Ev,Square:Xv,SquareActivity:jo,SquareActivityIcon:jo,SquareArrowDown:Vo,SquareArrowDownIcon:Vo,SquareArrowDownLeft:bo,SquareArrowDownLeftIcon:bo,SquareArrowDownRight:Po,SquareArrowDownRightIcon:Po,SquareArrowLeft:To,SquareArrowLeftIcon:To,SquareArrowOutDownLeft:Do,SquareArrowOutDownLeftIcon:Do,SquareArrowOutDownRight:Fo,SquareArrowOutDownRightIcon:Fo,SquareArrowOutUpLeft:Ro,SquareArrowOutUpLeftIcon:Ro,SquareArrowOutUpRight:Bo,SquareArrowOutUpRightIcon:Bo,SquareArrowRight:Eo,SquareArrowRightIcon:Eo,SquareArrowUp:Zo,SquareArrowUpIcon:Zo,SquareArrowUpLeft:Oo,SquareArrowUpLeftIcon:Oo,SquareArrowUpRight:Uo,SquareArrowUpRightIcon:Uo,SquareAsterisk:Wo,SquareAsteriskIcon:Wo,SquareBottomDashedScissors:Go,SquareBottomDashedScissorsIcon:Go,SquareChartGantt:L1,SquareChartGanttIcon:L1,SquareCheck:Ko,SquareCheckBig:Xo,SquareCheckBigIcon:Xo,SquareCheckIcon:Ko,SquareChevronDown:Qo,SquareChevronDownIcon:Qo,SquareChevronLeft:Jo,SquareChevronLeftIcon:Jo,SquareChevronRight:Yo,SquareChevronRightIcon:Yo,SquareChevronUp:ea,SquareChevronUpIcon:ea,SquareCode:ta,SquareCodeIcon:ta,SquareDashed:aa,SquareDashedBottom:Uv,SquareDashedBottomCode:Ov,SquareDashedBottomCodeIcon:Ov,SquareDashedBottomIcon:Uv,SquareDashedIcon:aa,SquareDashedKanban:na,SquareDashedKanbanIcon:na,SquareDashedMousePointer:oa,SquareDashedMousePointerIcon:oa,SquareDivide:ca,SquareDivideIcon:ca,SquareDot:ia,SquareDotIcon:ia,SquareEqual:ra,SquareEqualIcon:ra,SquareFunction:da,SquareFunctionIcon:da,SquareGanttChart:L1,SquareGanttChartIcon:L1,SquareIcon:Xv,SquareKanban:la,SquareKanbanIcon:la,SquareLibrary:sa,SquareLibraryIcon:sa,SquareM:ha,SquareMIcon:ha,SquareMenu:ya,SquareMenuIcon:ya,SquareMinus:ua,SquareMinusIcon:ua,SquareMousePointer:pa,SquareMousePointerIcon:pa,SquareParking:fa,SquareParkingIcon:fa,SquareParkingOff:ka,SquareParkingOffIcon:ka,SquarePen:Ke,SquarePenIcon:Ke,SquarePercent:Ma,SquarePercentIcon:Ma,SquarePi:ma,SquarePiIcon:ma,SquarePilcrow:va,SquarePilcrowIcon:va,SquarePlay:ga,SquarePlayIcon:ga,SquarePlus:xa,SquarePlusIcon:xa,SquarePower:_a,SquarePowerIcon:_a,SquareRadical:Zv,SquareRadicalIcon:Zv,SquareScissors:wa,SquareScissorsIcon:wa,SquareSigma:La,SquareSigmaIcon:La,SquareSlash:Ca,SquareSlashIcon:Ca,SquareSplitHorizontal:Ia,SquareSplitHorizontalIcon:Ia,SquareSplitVertical:Sa,SquareSplitVerticalIcon:Sa,SquareSquare:Wv,SquareSquareIcon:Wv,SquareStack:Gv,SquareStackIcon:Gv,SquareTerminal:Na,SquareTerminalIcon:Na,SquareUser:za,SquareUserIcon:za,SquareUserRound:$a,SquareUserRoundIcon:$a,SquareX:qa,SquareXIcon:qa,Squircle:Kv,SquircleIcon:Kv,Squirrel:Qv,SquirrelIcon:Qv,Stamp:Jv,StampIcon:Jv,Star:wc,StarHalf:Yv,StarHalfIcon:Yv,StarIcon:wc,StarOff:eg,StarOffIcon:eg,Stars:Ho,StarsIcon:Ho,StepBack:tg,StepBackIcon:tg,StepForward:ng,StepForwardIcon:ng,Stethoscope:og,StethoscopeIcon:og,Sticker:ag,StickerIcon:ag,StickyNote:cg,StickyNoteIcon:cg,StopCircle:vn,StopCircleIcon:vn,Store:ig,StoreIcon:ig,StretchHorizontal:rg,StretchHorizontalIcon:rg,StretchVertical:dg,StretchVerticalIcon:dg,Strikethrough:lg,StrikethroughIcon:lg,Subscript:sg,SubscriptIcon:sg,Subtitles:qt,SubtitlesIcon:qt,Sun:kg,SunDim:hg,SunDimIcon:hg,SunIcon:kg,SunMedium:yg,SunMediumIcon:yg,SunMoon:ug,SunMoonIcon:ug,SunSnow:pg,SunSnowIcon:pg,Sunrise:fg,SunriseIcon:fg,Sunset:Mg,SunsetIcon:Mg,Superscript:mg,SuperscriptIcon:mg,SwatchBook:vg,SwatchBookIcon:vg,SwissFranc:gg,SwissFrancIcon:gg,SwitchCamera:xg,SwitchCameraIcon:xg,Sword:_g,SwordIcon:_g,Swords:wg,SwordsIcon:wg,Syringe:Lg,SyringeIcon:Lg,Table:Ag,Table2:Cg,Table2Icon:Cg,TableCellsMerge:Ig,TableCellsMergeIcon:Ig,TableCellsSplit:Sg,TableCellsSplitIcon:Sg,TableColumnsSplit:Ng,TableColumnsSplitIcon:Ng,TableIcon:Ag,TableOfContents:$g,TableOfContentsIcon:$g,TableProperties:zg,TablePropertiesIcon:zg,TableRowsSplit:qg,TableRowsSplitIcon:qg,Tablet:jg,TabletIcon:jg,TabletSmartphone:Hg,TabletSmartphoneIcon:Hg,Tablets:bg,TabletsIcon:bg,Tag:Pg,TagIcon:Pg,Tags:Vg,TagsIcon:Vg,Tally1:Tg,Tally1Icon:Tg,Tally2:Dg,Tally2Icon:Dg,Tally3:Fg,Tally3Icon:Fg,Tally4:Rg,Tally4Icon:Rg,Tally5:Bg,Tally5Icon:Bg,Tangent:Eg,TangentIcon:Eg,Target:Og,TargetIcon:Og,Telescope:Ug,TelescopeIcon:Ug,Tent:Wg,TentIcon:Wg,TentTree:Zg,TentTreeIcon:Zg,Terminal:Gg,TerminalIcon:Gg,TerminalSquare:Na,TerminalSquareIcon:Na,TestTube:Xg,TestTube2:Aa,TestTube2Icon:Aa,TestTubeDiagonal:Aa,TestTubeDiagonalIcon:Aa,TestTubeIcon:Xg,TestTubes:Kg,TestTubesIcon:Kg,Text:tx,TextCursor:Jg,TextCursorIcon:Jg,TextCursorInput:Qg,TextCursorInputIcon:Qg,TextIcon:tx,TextQuote:Yg,TextQuoteIcon:Yg,TextSearch:ex,TextSearchIcon:ex,TextSelect:Ha,TextSelectIcon:Ha,TextSelection:Ha,TextSelectionIcon:Ha,Theater:nx,TheaterIcon:nx,Thermometer:cx,ThermometerIcon:cx,ThermometerSnowflake:ox,ThermometerSnowflakeIcon:ox,ThermometerSun:ax,ThermometerSunIcon:ax,ThumbsDown:ix,ThumbsDownIcon:ix,ThumbsUp:rx,ThumbsUpIcon:rx,Ticket:px,TicketCheck:dx,TicketCheckIcon:dx,TicketIcon:px,TicketMinus:lx,TicketMinusIcon:lx,TicketPercent:sx,TicketPercentIcon:sx,TicketPlus:hx,TicketPlusIcon:hx,TicketSlash:yx,TicketSlashIcon:yx,TicketX:ux,TicketXIcon:ux,Tickets:fx,TicketsIcon:fx,TicketsPlane:kx,TicketsPlaneIcon:kx,Timer:vx,TimerIcon:vx,TimerOff:Mx,TimerOffIcon:Mx,TimerReset:mx,TimerResetIcon:mx,ToggleLeft:gx,ToggleLeftIcon:gx,ToggleRight:xx,ToggleRightIcon:xx,Toilet:_x,ToiletIcon:_x,Tornado:wx,TornadoIcon:wx,Torus:Lx,TorusIcon:Lx,Touchpad:Ix,TouchpadIcon:Ix,TouchpadOff:Cx,TouchpadOffIcon:Cx,TowerControl:Sx,TowerControlIcon:Sx,ToyBrick:Nx,ToyBrickIcon:Nx,Tractor:$x,TractorIcon:$x,TrafficCone:zx,TrafficConeIcon:zx,Train:ja,TrainFront:Ax,TrainFrontIcon:Ax,TrainFrontTunnel:qx,TrainFrontTunnelIcon:qx,TrainIcon:ja,TrainTrack:Hx,TrainTrackIcon:Hx,TramFront:ja,TramFrontIcon:ja,Trash:bx,Trash2:jx,Trash2Icon:jx,TrashIcon:bx,TreeDeciduous:Px,TreeDeciduousIcon:Px,TreePalm:ba,TreePalmIcon:ba,TreePine:Vx,TreePineIcon:Vx,Trees:Tx,TreesIcon:Tx,Trello:Dx,TrelloIcon:Dx,TrendingDown:Fx,TrendingDownIcon:Fx,TrendingUp:Bx,TrendingUpDown:Rx,TrendingUpDownIcon:Rx,TrendingUpIcon:Bx,Triangle:Ux,TriangleAlert:Pa,TriangleAlertIcon:Pa,TriangleDashed:Ex,TriangleDashedIcon:Ex,TriangleIcon:Ux,TriangleRight:Ox,TriangleRightIcon:Ox,Trophy:Zx,TrophyIcon:Zx,Truck:Wx,TruckIcon:Wx,Turtle:Gx,TurtleIcon:Gx,Tv:Kx,Tv2:Va,Tv2Icon:Va,TvIcon:Kx,TvMinimal:Va,TvMinimalIcon:Va,TvMinimalPlay:Xx,TvMinimalPlayIcon:Xx,Twitch:Qx,TwitchIcon:Qx,Twitter:Jx,TwitterIcon:Jx,Type:e_,TypeIcon:e_,TypeOutline:Yx,TypeOutlineIcon:Yx,Umbrella:n_,UmbrellaIcon:n_,UmbrellaOff:t_,UmbrellaOffIcon:t_,Underline:o_,UnderlineIcon:o_,Undo:i_,Undo2:a_,Undo2Icon:a_,UndoDot:c_,UndoDotIcon:c_,UndoIcon:i_,UnfoldHorizontal:r_,UnfoldHorizontalIcon:r_,UnfoldVertical:d_,UnfoldVerticalIcon:d_,Ungroup:l_,UngroupIcon:l_,University:Ta,UniversityIcon:Ta,Unlink:h_,Unlink2:s_,Unlink2Icon:s_,UnlinkIcon:h_,Unlock:io,UnlockIcon:io,UnlockKeyhole:co,UnlockKeyholeIcon:co,Unplug:y_,UnplugIcon:y_,Upload:u_,UploadCloud:In,UploadCloudIcon:In,UploadIcon:u_,Usb:p_,UsbIcon:p_,User:L_,User2:Oa,User2Icon:Oa,UserCheck:k_,UserCheck2:Da,UserCheck2Icon:Da,UserCheckIcon:k_,UserCircle:xn,UserCircle2:gn,UserCircle2Icon:gn,UserCircleIcon:xn,UserCog:f_,UserCog2:Fa,UserCog2Icon:Fa,UserCogIcon:f_,UserIcon:L_,UserMinus:M_,UserMinus2:Ra,UserMinus2Icon:Ra,UserMinusIcon:M_,UserPen:m_,UserPenIcon:m_,UserPlus:v_,UserPlus2:Ba,UserPlus2Icon:Ba,UserPlusIcon:v_,UserRound:Oa,UserRoundCheck:Da,UserRoundCheckIcon:Da,UserRoundCog:Fa,UserRoundCogIcon:Fa,UserRoundIcon:Oa,UserRoundMinus:Ra,UserRoundMinusIcon:Ra,UserRoundPen:g_,UserRoundPenIcon:g_,UserRoundPlus:Ba,UserRoundPlusIcon:Ba,UserRoundSearch:x_,UserRoundSearchIcon:x_,UserRoundX:Ea,UserRoundXIcon:Ea,UserSearch:__,UserSearchIcon:__,UserSquare:za,UserSquare2:$a,UserSquare2Icon:$a,UserSquareIcon:za,UserX:w_,UserX2:Ea,UserX2Icon:Ea,UserXIcon:w_,Users:C_,Users2:Ua,Users2Icon:Ua,UsersIcon:C_,UsersRound:Ua,UsersRoundIcon:Ua,Utensils:Wa,UtensilsCrossed:Za,UtensilsCrossedIcon:Za,UtensilsIcon:Wa,UtilityPole:I_,UtilityPoleIcon:I_,Variable:S_,VariableIcon:S_,Vault:N_,VaultIcon:N_,Vegan:$_,VeganIcon:$_,VenetianMask:z_,VenetianMaskIcon:z_,Verified:It,VerifiedIcon:It,Vibrate:A_,VibrateIcon:A_,VibrateOff:q_,VibrateOffIcon:q_,Video:j_,VideoIcon:j_,VideoOff:H_,VideoOffIcon:H_,Videotape:b_,VideotapeIcon:b_,View:P_,ViewIcon:P_,Voicemail:V_,VoicemailIcon:V_,Volleyball:T_,VolleyballIcon:T_,Volume:E_,Volume1:D_,Volume1Icon:D_,Volume2:F_,Volume2Icon:F_,VolumeIcon:E_,VolumeOff:R_,VolumeOffIcon:R_,VolumeX:B_,VolumeXIcon:B_,Vote:O_,VoteIcon:O_,Wallet:Z_,Wallet2:Ga,Wallet2Icon:Ga,WalletCards:U_,WalletCardsIcon:U_,WalletIcon:Z_,WalletMinimal:Ga,WalletMinimalIcon:Ga,Wallpaper:W_,WallpaperIcon:W_,Wand:G_,Wand2:Xa,Wand2Icon:Xa,WandIcon:G_,WandSparkles:Xa,WandSparklesIcon:Xa,Warehouse:X_,WarehouseIcon:X_,WashingMachine:K_,WashingMachineIcon:K_,Watch:Q_,WatchIcon:Q_,Waves:Y_,WavesIcon:Y_,WavesLadder:J_,WavesLadderIcon:J_,Waypoints:ew,WaypointsIcon:ew,Webcam:tw,WebcamIcon:tw,Webhook:ow,WebhookIcon:ow,WebhookOff:nw,WebhookOffIcon:nw,Weight:aw,WeightIcon:aw,Wheat:iw,WheatIcon:iw,WheatOff:cw,WheatOffIcon:cw,WholeWord:rw,WholeWordIcon:rw,Wifi:yw,WifiHigh:dw,WifiHighIcon:dw,WifiIcon:yw,WifiLow:lw,WifiLowIcon:lw,WifiOff:sw,WifiOffIcon:sw,WifiZero:hw,WifiZeroIcon:hw,Wind:pw,WindArrowDown:uw,WindArrowDownIcon:uw,WindIcon:pw,Wine:fw,WineIcon:fw,WineOff:kw,WineOffIcon:kw,Workflow:Mw,WorkflowIcon:Mw,Worm:mw,WormIcon:mw,WrapText:vw,WrapTextIcon:vw,Wrench:gw,WrenchIcon:gw,X:xw,XCircle:_n,XCircleIcon:_n,XIcon:xw,XOctagon:yo,XOctagonIcon:yo,XSquare:qa,XSquareIcon:qa,Youtube:_w,YoutubeIcon:_w,Zap:Lw,ZapIcon:Lw,ZapOff:ww,ZapOffIcon:ww,ZoomIn:Cw,ZoomInIcon:Cw,ZoomOut:Iw,ZoomOutIcon:Iw,createLucideIcon:n,icons:H2e},Symbol.toStringTag,{value:"Module"})),b2e=({images:l})=>{const[s,d]=ue.useState(0);return ue.useEffect(()=>{const v=setInterval(()=>{d(x=>x===l.length-1?0:x+1)},5e3);return()=>clearInterval(v)},[l.length]),u.jsxs("div",{className:"relative w-full h-64 overflow-hidden rounded-lg",children:[l.map((v,x)=>u.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 
            ${x===s?"opacity-100":"opacity-0"}`,children:u.jsx("img",{src:v,alt:`Vehicle view ${x+1}`,className:"w-full h-full object-cover"})},x)),u.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2",children:l.map((v,x)=>u.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 
              ${x===s?"bg-white w-3":"bg-white/50"}`},x))})]})},P2e=({vehicle:l,isActive:s})=>u.jsxs("div",{className:`
        relative bg-white rounded-3xl shadow-xl overflow-hidden
        w-[350px] transition-all duration-500 transform-gpu
        ${s?"scale-105 shadow-2xl":"scale-100 shadow-lg"}
        hover:scale-105 hover:shadow-2xl
      `,children:[u.jsx(b2e,{images:l.images}),u.jsxs("div",{className:"p-6 pb-8 text-center",children:[u.jsx("h3",{className:"text-3xl font-bold mb-4 text-gray-900",children:l.name}),u.jsx("div",{className:"inline-block bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6",style:{boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:l.capacity}),u.jsx("div",{className:"grid grid-cols-2 gap-4 max-h-[150px] overflow-y-auto",children:l.features.map((d,v)=>{const x=j2e[d.icon];return u.jsxs("div",{className:"flex items-center gap-2 p-3 bg-gray-100 rounded-lg transition-transform duration-300 hover:-translate-y-1",style:{boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:[u.jsx(x,{size:20,className:"text-yellow-500"}),u.jsx("span",{className:"text-sm font-medium text-gray-800",children:d.text})]},v)})})]}),s&&u.jsx("div",{className:"absolute inset-0 border-4 border-yellow-500 rounded-3xl pointer-events-none",style:{boxShadow:"0 0 20px rgba(255, 215, 0, 0.5)"}})]}),V2e=({vehicles:l})=>{const[s,d]=ue.useState(0),v=ue.useRef(null),[x,M]=ue.useState(0),[w,C]=ue.useState(0),_=D=>{M(D.touches[0].clientX)},z=D=>{C(D.touches[0].clientX)},T=()=>{x-w>50&&d(D=>D===l.length-1?0:D+1),w-x>50&&d(D=>D===0?l.length-1:D-1)},O=D=>{let W=D-s;W<-1&&(W+=l.length),W>1&&(W-=l.length);const X=`
      absolute transition-all duration-500 ease-in-out
      ${W===0?"z-10 scale-100 opacity-100":"scale-85 opacity-60"}
      ${W===-1?"-translate-x-[60%]":""}
      ${W===1?"translate-x-[60%]":""}
    `,Z={transform:`
        perspective(1000px)
        rotateY(${W*45}deg)
        translateX(${W*50}%)
        scale(${W===0?1:.85})
      `,zIndex:W===0?10:5};return{cardClasses:X,cardStyles:Z}};return u.jsxs("div",{className:"relative h-[600px] w-full overflow-hidden",children:[u.jsx("div",{ref:v,onTouchStart:_,onTouchMove:z,onTouchEnd:T,className:"relative w-full h-full flex items-center justify-center",children:l.map((D,U)=>{const{cardClasses:W,cardStyles:X}=O(U);return u.jsx("div",{className:W,style:X,children:u.jsx(P2e,{vehicle:D,isActive:U===s})},D.id)})}),u.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20",children:l.map((D,U)=>u.jsx("button",{onClick:()=>d(U),className:`w-3 h-3 rounded-full transition-all duration-300 
              ${s===U?"bg-yellow-500 w-6":"bg-gray-400 hover:bg-gray-300"}`},U))})]})},T2e="/martintogomez-taxi/images/hyundai/auto_fondo_vidriera.webp",D2e="/martintogomez-taxi/images/hyundai/hyundai_2.webp",F2e="/martintogomez-taxi/images/hyundai/hyundai_3.webp",R2e="/martintogomez-taxi/images/mercedes/mercedes_1.webp",B2e="/martintogomez-taxi/images/mercedes/mercedes_2.webp",E2e="/martintogomez-taxi/images/mercedes/mercedes_3.webp",O2e="/martintogomez-taxi/images/alfa/alfa_1.webp",U2e="/martintogomez-taxi/images/alfa/alfa_2.webp",Z2e="/martintogomez-taxi/images/alfa/alfa_3.webp",W2e={en:{about_us:{title:"About Us",subtitle:"Our Fleet",text:"At Martinto Gomez Taxi, we offer reliable and personalized transportation with dedicated drivers. Our goal is to provide a comfortable and stress-free experience, ensuring you reach your destination safely and on time."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 people",features:{capacity:"Capacity: 4 passengers",efficient:"Efficient consumption",air:"Air conditioning",load_capacity:"Spacious trunk",wifi:"Onboard Wi-Fi",music:"Premium audio system"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 people",features:{capacity:"Capacity: 7 passengers",confort:"Maximum comfort",air:"Tri-zone climate control",entretainment:"Onboard entertainment",wifi:"Onboard Wi-Fi",battery:"USB ports in every row"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 people",features:{capacity:"Capacity: 3 passengers",efficient:"Sports performance",safety:"Maximum safety",air:"Dual-zone climate control",navigation:"Premium navigation",music:"Audio Harman Kardon"}}},es:{about_us:{title:"Sobre Nosotros",subtitle:"Nuestra Flota",text:"En Martinto Gomez Taxi, ofrecemos transporte confiable y personalizado con conductores dedicados. Nuestro objetivo es brindar una experiencia cómoda y sin estrés, asegurando que llegues a tu destino de manera segura y puntual."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 personas",features:{capacity:"Capacidad: 4 pasajeros",efficient:"Consumo eficiente",air:"Aire acondicionado",load_capacity:"Maletero espacioso",wifi:"Wi-Fi a bordo",music:"Sistema de audio premium"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 personas",features:{capacity:"Capacidad: 7 pasajeros",confort:"Máximo confort",air:"Control climático tri-zona",entretainment:"Entretenimiento a bordo",wifi:"Wi-Fi a bordo",battery:"Puertos USB en cada fila"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 personas",features:{capacity:"Capacidad: 3 pasajeros",efficient:"Rendimiento deportivo",safety:"Máxima seguridad",air:"Control climático dual-zona",navigation:"Navegación premium",music:"Audio Harman Kardon"}}},fr:{about_us:{title:"À propos de nous",subtitle:"Notre flotte",text:"Chez Martinto Gomez Taxi, nous offrons un transport fiable et personnalisé avec des chauffeurs dédiés. Notre objectif est de vous offrir une expérience confortable et sans stress, en vous assurant d'atteindre votre destination en toute sécurité et à l'heure."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 personnes",features:{capacity:"Capacité : 4 passagers",efficient:"Consommation efficace",air:"Climatisation",load_capacity:"Coffre spacieux",wifi:"Wi-Fi à bord",music:"Système audio premium"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 personnes",features:{capacity:"Capacité : 7 passagers",confort:"Confort maximal",air:"Contrôle climatique tri-zone",entretainment:"Divertissement à bord",wifi:"Wi-Fi à bord",battery:"Ports USB sur chaque rangée"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 personnes",features:{capacity:"Capacité : 3 passagers",efficient:"Performance sportive",safety:"Sécurité maximale",air:"Contrôle climatique bi-zone",navigation:"Navigation premium",music:"Audio Harman Kardon"}}},de:{about_us:{title:"Über uns",subtitle:"Unsere Flotte",text:"Bei Martinto Gomez Taxi bieten wir zuverlässigen und personalisierten Transport mit engagierten Fahrern an. Unser Ziel ist es, ein komfortables und stressfreies Erlebnis zu bieten und sicherzustellen, dass Sie sicher und pünktlich am Ziel ankommen."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 Personen",features:{capacity:"Kapazität: 4 Passagiere",efficient:"Effizienter Verbrauch",air:"Klimaanlage",load_capacity:"Geräumiger Kofferraum",wifi:"WLAN an Bord",music:"Premium-Audiosystem"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 Personen",features:{capacity:"Kapazität: 7 Passagiere",confort:"Maximaler Komfort",air:"Dreizonen-Klimaautomatik",entretainment:"Unterhaltungssystem an Bord",wifi:"WLAN an Bord",battery:"USB-Anschlüsse in jeder Reihe"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 Personen",features:{capacity:"Kapazität: 3 Passagiere",efficient:"Sportliche Leistung",safety:"Maximale Sicherheit",air:"Zweizonen-Klimaautomatik",navigation:"Premium-Navigation",music:"Harman Kardon Audio"}}}},G2e=()=>{const{language:l}=Qa(),s=x=>{const M=x.split(".");let w=W2e[l||"en"];return M.forEach(C=>w=w==null?void 0:w[C]),w||""},d={hyundai:[T2e,D2e,F2e],mercedes:[R2e,B2e,E2e],alfa:[O2e,U2e,Z2e]},v=[{id:1,name:s("Hyundai_i30.name"),capacity:s("Hyundai_i30.users"),features:[{icon:"Users",text:s("Hyundai_i30.features.capacity")},{icon:"Fuel",text:s("Hyundai_i30.features.efficient")},{icon:"Wind",text:s("Hyundai_i30.features.air")},{icon:"Luggage",text:s("Hyundai_i30.features.load_capacity")},{icon:"Wifi",text:s("Hyundai_i30.features.wifi")},{icon:"Music",text:s("Hyundai_i30.features.music")}],images:d.hyundai},{id:2,name:s("Mercedes_V_Class.name"),capacity:s("Mercedes_V_Class.users"),features:[{icon:"Users",text:s("Mercedes_V_Class.features.capacity")},{icon:"ThumbsUp",text:s("Mercedes_V_Class.features.confort")},{icon:"Wind",text:s("Mercedes_V_Class.features.air")},{icon:"Tv",text:s("Mercedes_V_Class.features.entretainment")},{icon:"Wifi",text:s("Mercedes_V_Class.features.wifi")},{icon:"BatteryFull",text:s("Mercedes_V_Class.features.battery")}],images:d.mercedes},{id:3,name:s("Alfa_Romeo_4C.name"),capacity:s("Alfa_Romeo_4C.users"),features:[{icon:"Users",text:s("Alfa_Romeo_4C.features.capacity")},{icon:"Gauge",text:s("Alfa_Romeo_4C.features.efficient")},{icon:"Shield",text:s("Alfa_Romeo_4C.features.safety")},{icon:"Wind",text:s("Alfa_Romeo_4C.features.air")},{icon:"Map",text:s("Alfa_Romeo_4C.features.navigation")},{icon:"Speaker",text:s("Alfa_Romeo_4C.features.music")}],images:d.alfa}];return u.jsx(u.Fragment,{children:u.jsx("section",{id:"about_us",className:"py-16 bg-gray-100 border-b-4 border-yellow-500",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsx("h2",{className:"text-3xl font-oswald text-yellow-500 text-center mb-8",children:s("about_us.title")}),u.jsx("p",{className:"text-gray-700 text-center mb-12 max-w-2xl mx-auto",children:s("about_us.text")}),u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsx(V2e,{vehicles:v})})]})})})},X2e={en:{services:{title:"Our Services","24_7":"24/7 Availability","24_7_desc":"Reliable transportation anytime, day or night, whenever you need it.",driver:"Experienced Driver",driver_desc:"Professional driving with years of experience for a smooth and safe journey.",airport:"Airport",airport_desc:"Seamless airport transfers with punctuality and comfort guaranteed.",events:"Events",events_desc:"Trustworthy rides for any event, whether it's a wedding, birthday, or corporate party.",hospitals:"Hospitals",hospitals_desc:"Reliable transportation to and from hospitals and clinics, ensuring timely arrivals.",nursing_homes:"Nursing Homes",nursing_homes_desc:"Comfortable rides for seniors to and from nursing homes, always with a helping hand.",travel_tours:"Travel/Tours",travel_tours_desc:"Experience the best of your city with our guided tours or comfortable rides to and from the airport.",business_vip_transfer:"Business VIP Transfer",business_vip_transfer_desc:"Professional, punctual and personalized transportation for your company's most important clients.",economic_transfer:"Economic Transfer",economic_transfer_desc:"Affordable and reliable rides for any occasion, without compromising on quality.",premium_transfer:"Premium Transfer",premium_transfer_desc:"Top-notch rides for special occasions, complete with luxurious vehicles and impeccable service."}},es:{services:{title:"Nuestros Servicios","24_7":"Disponibilidad 24/7","24_7_desc":"Transporte confiable en cualquier momento, de día o de noche, cuando lo necesites.",driver:"Conductor Experimentado",driver_desc:"Conducción profesional con años de experiencia para un viaje suave y seguro.",airport:"Aeropuerto",airport_desc:"Traslados al aeropuerto sin complicaciones con puntualidad y comodidad garantizadas.",events:"Eventos",events_desc:"Viajes confiables para cualquier evento, ya sea una boda, cumpleaños o fiesta corporativa.",hospitals:"Hospitales",hospitals_desc:"Transporte confiable hacia y desde hospitales y clínicas, asegurando llegadas puntuales.",nursing_homes:"Residencias de Ancianos",nursing_homes_desc:"Viajes cómodos para personas mayores hacia y desde residencias, siempre con una mano amiga.",travel_tours:"Viajes/Tours",travel_tours_desc:"Experimenta lo mejor de tu ciudad con nuestros tours guiados o traslados cómodos al aeropuerto.",business_vip_transfer:"Traslado VIP Empresarial",business_vip_transfer_desc:"Transporte profesional, puntual y personalizado para los clientes más importantes de tu empresa.",economic_transfer:"Traslado Económico",economic_transfer_desc:"Viajes asequibles y confiables para cualquier ocasión, sin comprometer la calidad.",premium_transfer:"Traslado Premium",premium_transfer_desc:"Viajes de primera clase para ocasiones especiales, con vehículos lujosos y un servicio impecable."}},fr:{services:{title:"Nos Services","24_7":"Disponibilité 24/7","24_7_desc":"Transport fiable à tout moment, de jour comme de nuit, quand vous en avez besoin.",driver:"Chauffeur Expérimenté",driver_desc:"Conduite professionnelle avec des années d'expérience pour un trajet fluide et sûr.",airport:"Aéroport",airport_desc:"Transferts aéroport sans tracas avec ponctualité et confort garantis.",events:"Événements",events_desc:"Trajets fiables pour tout événement, qu'il s'agisse d'un mariage, d'un anniversaire ou d'une fête d'entreprise.",hospitals:"Hôpitaux",hospitals_desc:"Transport fiable vers et depuis les hôpitaux et cliniques, assurant des arrivées ponctuelles.",nursing_homes:"Maisons de Retraite",nursing_homes_desc:"Trajets confortables pour les personnes âgées vers et depuis les maisons de retraite, toujours avec une aide bienveillante.",travel_tours:"Voyages/Excursions",travel_tours_desc:"Découvrez le meilleur de votre ville avec nos visites guidées ou des trajets confortables vers et depuis l'aéroport.",business_vip_transfer:"Transfert VIP Affaires",business_vip_transfer_desc:"Transport professionnel, ponctuel et personnalisé pour les clients les plus importants de votre entreprise.",economic_transfer:"Transfert Économique",economic_transfer_desc:"Trajets abordables et fiables pour toute occasion, sans compromettre la qualité.",premium_transfer:"Transfert Premium",premium_transfer_desc:"Trajets haut de gamme pour les occasions spéciales, avec des véhicules luxueux et un service impeccable."}},de:{services:{title:"Unsere Dienstleistungen","24_7":"24/7 Verfügbarkeit","24_7_desc":"Zuverlässiger Transport jederzeit, Tag und Nacht, wenn Sie ihn benötigen.",driver:"Erfahrener Fahrer",driver_desc:"Professionelles Fahren mit jahrelanger Erfahrung für eine reibungslose und sichere Fahrt.",airport:"Flughafen",airport_desc:"Reibungslose Flughafentransfers mit Garantie auf Pünktlichkeit und Komfort.",events:"Veranstaltungen",events_desc:"Vertrauenswürdige Fahrten für jede Veranstaltung, sei es eine Hochzeit, ein Geburtstag oder eine Firmenfeier.",hospitals:"Krankenhäuser",hospitals_desc:"Zuverlässiger Transport zu und von Krankenhäusern und Kliniken, um pünktliche Ankünfte zu gewährleisten.",nursing_homes:"Pflegeheime",nursing_homes_desc:"Komfortable Fahrten für Senioren zu und von Pflegeheimen, immer mit einer helfenden Hand.",travel_tours:"Reisen/Ausflüge",travel_tours_desc:"Erleben Sie das Beste Ihrer Stadt mit unseren geführten Touren oder komfortablen Fahrten zum und vom Flughafen.",business_vip_transfer:"Geschäftlicher VIP-Transfer",business_vip_transfer_desc:"Professioneller, pünktlicher und personalisierter Transport für die wichtigsten Kunden Ihres Unternehmens.",economic_transfer:"Wirtschaftlicher Transfer",economic_transfer_desc:"Bezahlbare und zuverlässige Fahrten für jede Gelegenheit, ohne Kompromisse bei der Qualität.",premium_transfer:"Premium-Transfer",premium_transfer_desc:"Hochwertige Fahrten für besondere Anlässe, komplett mit luxuriösen Fahrzeugen und einem makellosen Service."}}},_1=({icon:l,title:s,description:d})=>u.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105",children:[u.jsx("div",{className:"flex items-center justify-center mb-4",children:u.jsx("div",{className:"rounded-full bg-[#1B1B25] p-3",children:u.jsx(l,{size:40,className:"text-yellow-500"})})}),u.jsx("h3",{className:"text-xl font-bold text-center mb-2 text-gray-900",children:s}),u.jsx("p",{className:"text-sm text-center text-gray-600",children:d})]}),K2e=()=>{const{language:l}=Qa(),s=d=>{const v=d.split(".");let x=X2e[l||"en"];return v.forEach(M=>x=x==null?void 0:x[M]),x||""};return u.jsx("section",{id:"services",className:"py-16 bg-gray-100 border-b-4 border-yellow-500",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsx("h2",{className:"text-3xl font-bold text-center mb-12 text-gray-900",children:s("services.title")}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[u.jsx(_1,{icon:Mc,title:s("services.24_7"),description:s("services.24_7_desc")}),u.jsx(_1,{icon:wc,title:s("services.driver"),description:s("services.driver_desc")}),u.jsx(_1,{icon:xc,title:s("services.airport"),description:s("services.airport_desc")}),u.jsx(_1,{icon:vc,title:s("services.events"),description:s("services.events_desc")}),u.jsx(_1,{icon:_c,title:s("services.hospitals"),description:s("services.hospitals_desc")}),u.jsx(_1,{icon:mc,title:s("services.nursing_homes"),description:s("services.nursing_homes_desc")}),u.jsx(_1,{icon:gc,title:s("services.travel_tours"),description:s("services.travel_tours_desc")}),u.jsx(_1,{icon:pc,title:s("services.business_vip_transfer"),description:s("services.business_vip_transfer_desc")}),u.jsx(_1,{icon:kc,title:s("services.economic_transfer"),description:s("services.economic_transfer_desc")}),u.jsx(_1,{icon:fc,title:s("services.premium_transfer"),description:s("services.premium_transfer_desc")})]})]})})},Q2e={en:{mission:{title:"Mission",text:"To provide personalized, safe, and reliable transportation services with a focus on convenience and customer satisfaction, ensuring every ride feels like a premium experience."},vision:{title:"Vision",text:"To become the most trusted and preferred solo driver service in the city, known for exceptional customer care, efficiency, and a commitment to safety."}},es:{mission:{title:"Misión",text:"Ofrecer servicios de transporte personalizados, seguros y confiables, centrados en la comodidad y la satisfacción del cliente, asegurando que cada viaje sea una experiencia premium."},vision:{title:"Visión",text:"Convertirnos en el servicio de conductor individual más confiable y preferido de la ciudad, reconocidos por un cuidado excepcional al cliente, eficiencia y compromiso con la seguridad."}},fr:{mission:{title:"Mission",text:"Fournir des services de transport personnalisés, sûrs et fiables, axés sur le confort et la satisfaction des clients, en assurant que chaque trajet soit une expérience premium."},vision:{title:"Vision",text:"Devenir le service de chauffeur individuel le plus fiable et préféré de la ville, reconnu pour des soins exceptionnels aux clients, l'efficacité et un engagement envers la sécurité."}},de:{mission:{title:"Mission",text:"Personalisierte, sichere und zuverlässige Transportdienstleistungen anzubieten, die sich auf Komfort und Kundenzufriedenheit konzentrieren und sicherstellen, dass jede Fahrt ein Premium-Erlebnis ist."},vision:{title:"Vision",text:"Der vertrauenswürdigste und bevorzugte Einzelfahrer-Service der Stadt zu werden, bekannt für außergewöhnliche Kundenbetreuung, Effizienz und Engagement für Sicherheit."}}};function J2e(){const{language:l}=Qa(),s=d=>{const v=d.split(".");let x=Q2e[l||"en"];return v.forEach(M=>x=x==null?void 0:x[M]),x||""};return u.jsx("section",{id:"mission",className:"py-16 bg-black text-white border-b-4 border-yellow-500",children:u.jsx("div",{className:"container mx-auto px-4",children:u.jsxs("div",{className:"max-w-3xl mx-auto space-y-12",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-yellow-500 text-xl font-semibold mb-4",children:s("mission.title")}),u.jsx("p",{className:"text-lg",children:s("mission.text")})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-yellow-500 text-xl font-semibold mb-4",children:s("vision.title")}),u.jsx("p",{className:"text-lg",children:s("vision.text")})]})]})})})}const YN={de:{steps:["Dienstleistungstyp","Datum & Uhrzeit","Fahrtdetails","Kontakt","Bestätigung"],selectOption:"Wählen Sie eine Option",next:"WEITER",back:"ZURÜCK",send:"SENDEN",close:"Schließen",serviceType:"Dienstleistungstyp",date:"Datum",time:"Uhrzeit",pickup:"Abholort",destination:"Zielort",selectCar:"Fahrzeug auswählen",contact:"Kontaktinformationen",fullName:"Vollständiger Name",email:"E-Mail",phone:"Telefonnummer",services:["Executive","Kinder mit besonderen Bedürfnissen","Senioren","Spezielle Veranstaltungen"],cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 Passagiere)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],confirmation:"Überprüfen Sie Ihre Daten",capacity:"Kapazität",passengers:"Passagiere",rate:"Preis"},fr:{steps:["Type de service","Date et heure","Détails du trajet","Contact","Confirmation"],selectOption:"Sélectionnez une option",next:"SUIVANT",back:"RETOUR",send:"ENVOYER",close:"Fermer",serviceType:"Type de service",date:"Date",time:"Heure",pickup:"Lieu de prise en charge",destination:"Destination",selectCar:"Sélectionner un véhicule",contact:"Informations de contact",fullName:"Nom complet",email:"Email",phone:"Numéro de téléphone",services:["Exécutif","Enfants à besoins spéciaux","Personnes âgées","Événements spéciaux"],cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 passagers)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],confirmation:"Vérifiez vos informations",capacity:"Capacité",passengers:"passagers",rate:"Tarif"},en:{steps:["Service Type","Date & Time","Trip Details","Contact","Review Your Details"],selectOption:"Select an option",next:"NEXT",back:"BACK",send:"SEND",close:"Close",serviceType:"Service Type",date:"Date",time:"Time",pickup:"Pickup Location",destination:"Destination",selectCar:"Select Vehicle",contact:"Contact Information",fullName:"Full Name",email:"Email",phone:"Phone Number",services:["Executive","Special Needs Children","Elderly","Special Events"],confirmation:"Review Your Details",cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],capacity:"Capacity",passengers:"passengers",rate:"Rate"},es:{steps:["Tipo de Servicio","Fecha y Hora","Detalles del Viaje","Contacto","Confirmación"],selectOption:"Selecciona una opción",next:"SIGUIENTE",back:"ATRÁS",send:"ENVIAR",close:"Cerrar",serviceType:"Tipo de servicio",date:"Fecha",time:"Hora",pickup:"Lugar de Recogida",destination:"Destino",selectCar:"Seleccionar Vehículo",contact:"Información de Contacto",fullName:"Nombre Completo",email:"Correo Electrónico",phone:"Teléfono",services:["Ejecutivo","Niños Especiales","Adultos Mayores","Eventos Especiales"],confirmation:"Revisa tu Información",cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 pasajeros)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],capacity:"Capacidad",passengers:"pasajeros",rate:"Tarifa"}};function Y2e({onClose:l}){const{language:s}=Qa(),d=YN[s]||YN.en,[v,x]=ue.useState(1),[M,w]=ue.useState({service:"",date:"",time:"",pickup:"",destination:"",car:null,fullName:"",email:"",phone:""}),C=U=>{const{name:W,value:X}=U.target;w(Z=>({...Z,[W]:X}))},_=()=>{v<d.steps.length&&x(U=>U+1)},z=()=>{v>1&&x(U=>U-1)},T=v/d.steps.length*100,O=()=>{var Z,ie,fe;const U=`
      ${d.confirmation}:

      ${d.serviceType}: ${M.service}

      ${d.date}: ${M.date}

      ${d.time}: ${M.time}

      ${d.pickup}: ${M.pickup}

      ${d.destination}: ${M.destination}

      ${d.selectCar}: ${((Z=M.car)==null?void 0:Z.name)||"N/A"}

      ${d.capacity}: ${((ie=M.car)==null?void 0:ie.capacity)||"N/A"} ${d.passengers}

      ${d.rate}: ${((fe=M.car)==null?void 0:fe.rate)||"N/A"} CHF/km

      ${d.fullName}: ${M.fullName}

      ${d.email}: ${M.email}

      ${d.phone}: ${M.phone}
    `,X=`https://wa.me/+5353616391?text=${encodeURIComponent(U)}`;window.open(X,"_blank","noopener noreferrer"),l()},D=()=>{var U,W,X,Z;switch(v){case 1:return u.jsx("div",{className:"flex flex-col gap-4",children:u.jsxs("select",{name:"service",value:M.service,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.selectOption,children:[u.jsx("option",{value:"",children:d.selectOption}),d.services.map((ie,fe)=>u.jsx("option",{value:ie,children:ie},fe))]})});case 2:return u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("label",{className:`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${M.date?"opacity-0":"opacity-100"}`,children:d.date}),u.jsx("input",{type:"date",name:"date",value:M.date,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.date})]}),u.jsxs("div",{className:"relative",children:[u.jsx("label",{className:`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${M.time?"opacity-0":"opacity-100"}`,children:d.time}),u.jsx("input",{type:"time",name:"time",value:M.time,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.time})]})]});case 3:return u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsx("input",{type:"text",name:"pickup",placeholder:d.pickup,value:M.pickup,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.pickup}),u.jsx("input",{type:"text",name:"destination",placeholder:d.destination,value:M.destination,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.destination}),u.jsxs("select",{name:"car",value:((U=M.car)==null?void 0:U.name)||"",onChange:ie=>{const fe=d.cars.find(Ae=>Ae.name===ie.target.value);w(Ae=>({...Ae,car:fe}))},className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.selectCar,children:[u.jsx("option",{value:"",children:d.selectOption}),d.cars.map((ie,fe)=>u.jsx("option",{value:ie.name,children:`${ie.name} (${ie.capacity} ${d.passengers}, ${ie.rate} CHF/km)`},fe))]})]});case 4:return u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsx("input",{type:"text",name:"fullName",placeholder:d.fullName,value:M.fullName,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.fullName}),u.jsx("input",{type:"email",name:"email",placeholder:d.email,value:M.email,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.email}),u.jsx("input",{type:"tel",name:"phone",placeholder:d.phone,value:M.phone,onChange:C,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.phone})]});case 5:return u.jsxs("div",{className:"text-gray-300 text-left",children:[u.jsxs("p",{children:[u.jsxs("strong",{children:[d.serviceType,":"]})," ",M.service]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.date,":"]})," ",M.date]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.time,":"]})," ",M.time]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.pickup,":"]})," ",M.pickup]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.destination,":"]})," ",M.destination]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.selectCar,":"]})," ",((W=M.car)==null?void 0:W.name)||"N/A"]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.capacity,":"]})," ",((X=M.car)==null?void 0:X.capacity)||"N/A"," ",d.passengers]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.rate,":"]})," ",((Z=M.car)==null?void 0:Z.rate)||"N/A"," CHF/km"]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.fullName,":"]})," ",M.fullName]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.email,":"]})," ",M.email]}),u.jsxs("p",{children:[u.jsxs("strong",{children:[d.phone,":"]})," ",M.phone]})]});default:return null}};return u.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-60",onClick:l,role:"button","aria-label":"Close modal"}),u.jsxs("div",{className:"relative w-[404px] h-[416px] bg-[#202020] rounded-[11px] shadow-lg p-6 flex flex-col justify-between z-10",children:[u.jsx("button",{onClick:l,className:"absolute top-3 right-3 text-gray-400 hover:text-gray-200","aria-label":"Close modal",children:"✕"}),u.jsx("h3",{className:"text-gold font-bebas text-[22px] leading-[64.87px] font-bebas text-center",children:d.steps[v-1]}),u.jsx("div",{className:"w-[369px] h-[5px] bg-gray-700 rounded-[48px] mx-auto mt-2 overflow-hidden",children:u.jsx("div",{className:"h-full bg-gold transition-all duration-300",style:{width:`${T}%`},role:"progressbar","aria-valuenow":T,"aria-valuemin":"0","aria-valuemax":"100"})}),u.jsx("div",{className:"flex-grow flex items-center justify-center",children:D()}),u.jsxs("div",{className:"flex justify-between gap-[8.36px] mt-4",children:[v>1&&u.jsx("button",{onClick:z,className:"w-[370px] h-[42px] bg-gray-700 text-white font-bebas rounded-[380.14px] hover:bg-gray-600 transition","aria-label":d.back,children:d.back}),u.jsx("button",{onClick:v<d.steps.length?_:O,className:"w-[370px] h-[42px] bg-gold text-white font-bebas rounded-[380.14px] hover:bg-yellow-600 transition","aria-label":v<d.steps.length?d.next:d.send,children:v<d.steps.length?d.next:d.send})]})]})]})}function ece(){const[l,s]=ue.useState(!1),d=()=>s(!0),v=()=>s(!1);return u.jsx(r$,{children:u.jsx(gq,{children:u.jsxs("div",{className:"bg-black text-white font-sans",children:[u.jsx(Wq,{onOpenWizard:d}),u.jsx(Kq,{onOpenWizard:d}),u.jsx(G2e,{}),u.jsx(J2e,{}),u.jsx(K2e,{}),u.jsx(Gq,{}),l&&u.jsx(Y2e,{onClose:v})]})})})}vq.createRoot(document.getElementById("root")).render(u.jsx(ue.StrictMode,{children:u.jsx(ece,{})}));
