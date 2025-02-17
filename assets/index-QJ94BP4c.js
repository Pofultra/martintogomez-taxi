var dq=Object.defineProperty;var lq=(l,s,d)=>s in l?dq(l,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[s]=d;var j1=(l,s,d)=>lq(l,typeof s!="symbol"?s+"":s,d);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))M(g);new MutationObserver(g=>{for(const f of g)if(f.type==="childList")for(const C of f.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&M(C)}).observe(document,{childList:!0,subtree:!0});function d(g){const f={};return g.integrity&&(f.integrity=g.integrity),g.referrerPolicy&&(f.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?f.credentials="include":g.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function M(g){if(g.ep)return;g.ep=!0;const f=d(g);fetch(g.href,f)}})();function Sw(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var xC={exports:{}},hc={},_C={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jN;function sq(){if(jN)return W;jN=1;var l=Symbol.for("react.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),C=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.iterator;function Z(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oe=Object.assign,K={};function O(k,I,U){this.props=k,this.context=I,this.refs=K,this.updater=U||G}O.prototype.isReactComponent={},O.prototype.setState=function(k,I){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,I,"setState")},O.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ie(){}ie.prototype=O.prototype;function fe(k,I,U){this.props=k,this.context=I,this.refs=K,this.updater=U||G}var Ae=fe.prototype=new ie;Ae.constructor=fe,oe(Ae,O.prototype),Ae.isPureReactComponent=!0;var Se=Array.isArray,c1=Object.prototype.hasOwnProperty,be={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Qe(k,I,U){var X,J={},Y=null,ae=null;if(I!=null)for(X in I.ref!==void 0&&(ae=I.ref),I.key!==void 0&&(Y=""+I.key),I)c1.call(I,X)&&!Pe.hasOwnProperty(X)&&(J[X]=I[X]);var te=arguments.length-2;if(te===1)J.children=U;else if(1<te){for(var le=Array(te),Ue=0;Ue<te;Ue++)le[Ue]=arguments[Ue+2];J.children=le}if(k&&k.defaultProps)for(X in te=k.defaultProps,te)J[X]===void 0&&(J[X]=te[X]);return{$$typeof:l,type:k,key:Y,ref:ae,props:J,_owner:be.current}}function H1(k,I){return{$$typeof:l,type:k.type,key:I,ref:k.ref,props:k.props,_owner:k._owner}}function C1(k){return typeof k=="object"&&k!==null&&k.$$typeof===l}function ot(k){var I={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(U){return I[U]})}var k1=/\/+/g;function Oe(k,I){return typeof k=="object"&&k!==null&&k.key!=null?ot(""+k.key):I.toString(36)}function i1(k,I,U,X,J){var Y=typeof k;(Y==="undefined"||Y==="boolean")&&(k=null);var ae=!1;if(k===null)ae=!0;else switch(Y){case"string":case"number":ae=!0;break;case"object":switch(k.$$typeof){case l:case s:ae=!0}}if(ae)return ae=k,J=J(ae),k=X===""?"."+Oe(ae,0):X,Se(J)?(U="",k!=null&&(U=k.replace(k1,"$&/")+"/"),i1(J,I,U,"",function(Ue){return Ue})):J!=null&&(C1(J)&&(J=H1(J,U+(!J.key||ae&&ae.key===J.key?"":(""+J.key).replace(k1,"$&/")+"/")+k)),I.push(J)),1;if(ae=0,X=X===""?".":X+":",Se(k))for(var te=0;te<k.length;te++){Y=k[te];var le=X+Oe(Y,te);ae+=i1(Y,I,U,le,J)}else if(le=Z(k),typeof le=="function")for(k=le.call(k),te=0;!(Y=k.next()).done;)Y=Y.value,le=X+Oe(Y,te++),ae+=i1(Y,I,U,le,J);else if(Y==="object")throw I=String(k),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ae}function f1(k,I,U){if(k==null)return k;var X=[],J=0;return i1(k,X,"","",function(Y){return I.call(U,Y,J++)}),X}function Ve(k){if(k._status===-1){var I=k._result;I=I(),I.then(function(U){(k._status===0||k._status===-1)&&(k._status=1,k._result=U)},function(U){(k._status===0||k._status===-1)&&(k._status=2,k._result=U)}),k._status===-1&&(k._status=0,k._result=I)}if(k._status===1)return k._result.default;throw k._result}var ue={current:null},q={transition:null},R={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:q,ReactCurrentOwner:be};function j(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:f1,forEach:function(k,I,U){f1(k,function(){I.apply(this,arguments)},U)},count:function(k){var I=0;return f1(k,function(){I++}),I},toArray:function(k){return f1(k,function(I){return I})||[]},only:function(k){if(!C1(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},W.Component=O,W.Fragment=d,W.Profiler=g,W.PureComponent=fe,W.StrictMode=M,W.Suspense=_,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,W.act=j,W.cloneElement=function(k,I,U){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var X=oe({},k.props),J=k.key,Y=k.ref,ae=k._owner;if(I!=null){if(I.ref!==void 0&&(Y=I.ref,ae=be.current),I.key!==void 0&&(J=""+I.key),k.type&&k.type.defaultProps)var te=k.type.defaultProps;for(le in I)c1.call(I,le)&&!Pe.hasOwnProperty(le)&&(X[le]=I[le]===void 0&&te!==void 0?te[le]:I[le])}var le=arguments.length-2;if(le===1)X.children=U;else if(1<le){te=Array(le);for(var Ue=0;Ue<le;Ue++)te[Ue]=arguments[Ue+2];X.children=te}return{$$typeof:l,type:k.type,key:J,ref:Y,props:X,_owner:ae}},W.createContext=function(k){return k={$$typeof:C,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:f,_context:k},k.Consumer=k},W.createElement=Qe,W.createFactory=function(k){var I=Qe.bind(null,k);return I.type=k,I},W.createRef=function(){return{current:null}},W.forwardRef=function(k){return{$$typeof:w,render:k}},W.isValidElement=C1,W.lazy=function(k){return{$$typeof:T,_payload:{_status:-1,_result:k},_init:Ve}},W.memo=function(k,I){return{$$typeof:$,type:k,compare:I===void 0?null:I}},W.startTransition=function(k){var I=q.transition;q.transition={};try{k()}finally{q.transition=I}},W.unstable_act=j,W.useCallback=function(k,I){return ue.current.useCallback(k,I)},W.useContext=function(k){return ue.current.useContext(k)},W.useDebugValue=function(){},W.useDeferredValue=function(k){return ue.current.useDeferredValue(k)},W.useEffect=function(k,I){return ue.current.useEffect(k,I)},W.useId=function(){return ue.current.useId()},W.useImperativeHandle=function(k,I,U){return ue.current.useImperativeHandle(k,I,U)},W.useInsertionEffect=function(k,I){return ue.current.useInsertionEffect(k,I)},W.useLayoutEffect=function(k,I){return ue.current.useLayoutEffect(k,I)},W.useMemo=function(k,I){return ue.current.useMemo(k,I)},W.useReducer=function(k,I,U){return ue.current.useReducer(k,I,U)},W.useRef=function(k){return ue.current.useRef(k)},W.useState=function(k){return ue.current.useState(k)},W.useSyncExternalStore=function(k,I,U){return ue.current.useSyncExternalStore(k,I,U)},W.useTransition=function(){return ue.current.useTransition()},W.version="18.3.1",W}var HN;function VC(){return HN||(HN=1,_C.exports=sq()),_C.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PN;function hq(){if(PN)return hc;PN=1;var l=VC(),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function C(w,_,$){var T,E={},Z=null,G=null;$!==void 0&&(Z=""+$),_.key!==void 0&&(Z=""+_.key),_.ref!==void 0&&(G=_.ref);for(T in _)M.call(_,T)&&!f.hasOwnProperty(T)&&(E[T]=_[T]);if(w&&w.defaultProps)for(T in _=w.defaultProps,_)E[T]===void 0&&(E[T]=_[T]);return{$$typeof:s,type:w,key:Z,ref:G,props:E,_owner:g.current}}return hc.Fragment=d,hc.jsx=C,hc.jsxs=C,hc}var VN;function yq(){return VN||(VN=1,xC.exports=hq()),xC.exports}var y=yq(),ke=VC();const tt=Sw(ke);var Pi={},wC={exports:{}},Ee={},LC={exports:{}},CC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TN;function uq(){return TN||(TN=1,function(l){function s(q,R){var j=q.length;q.push(R);e:for(;0<j;){var k=j-1>>>1,I=q[k];if(0<g(I,R))q[k]=R,q[j]=I,j=k;else break e}}function d(q){return q.length===0?null:q[0]}function M(q){if(q.length===0)return null;var R=q[0],j=q.pop();if(j!==R){q[0]=j;e:for(var k=0,I=q.length,U=I>>>1;k<U;){var X=2*(k+1)-1,J=q[X],Y=X+1,ae=q[Y];if(0>g(J,j))Y<I&&0>g(ae,J)?(q[k]=ae,q[Y]=j,k=Y):(q[k]=J,q[X]=j,k=X);else if(Y<I&&0>g(ae,j))q[k]=ae,q[Y]=j,k=Y;else break e}}return R}function g(q,R){var j=q.sortIndex-R.sortIndex;return j!==0?j:q.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var C=Date,w=C.now();l.unstable_now=function(){return C.now()-w}}var _=[],$=[],T=1,E=null,Z=3,G=!1,oe=!1,K=!1,O=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(q){for(var R=d($);R!==null;){if(R.callback===null)M($);else if(R.startTime<=q)M($),R.sortIndex=R.expirationTime,s(_,R);else break;R=d($)}}function Se(q){if(K=!1,Ae(q),!oe)if(d(_)!==null)oe=!0,Ve(c1);else{var R=d($);R!==null&&ue(Se,R.startTime-q)}}function c1(q,R){oe=!1,K&&(K=!1,ie(Qe),Qe=-1),G=!0;var j=Z;try{for(Ae(R),E=d(_);E!==null&&(!(E.expirationTime>R)||q&&!ot());){var k=E.callback;if(typeof k=="function"){E.callback=null,Z=E.priorityLevel;var I=k(E.expirationTime<=R);R=l.unstable_now(),typeof I=="function"?E.callback=I:E===d(_)&&M(_),Ae(R)}else M(_);E=d(_)}if(E!==null)var U=!0;else{var X=d($);X!==null&&ue(Se,X.startTime-R),U=!1}return U}finally{E=null,Z=j,G=!1}}var be=!1,Pe=null,Qe=-1,H1=5,C1=-1;function ot(){return!(l.unstable_now()-C1<H1)}function k1(){if(Pe!==null){var q=l.unstable_now();C1=q;var R=!0;try{R=Pe(!0,q)}finally{R?Oe():(be=!1,Pe=null)}}else be=!1}var Oe;if(typeof fe=="function")Oe=function(){fe(k1)};else if(typeof MessageChannel<"u"){var i1=new MessageChannel,f1=i1.port2;i1.port1.onmessage=k1,Oe=function(){f1.postMessage(null)}}else Oe=function(){O(k1,0)};function Ve(q){Pe=q,be||(be=!0,Oe())}function ue(q,R){Qe=O(function(){q(l.unstable_now())},R)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_continueExecution=function(){oe||G||(oe=!0,Ve(c1))},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H1=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return Z},l.unstable_getFirstCallbackNode=function(){return d(_)},l.unstable_next=function(q){switch(Z){case 1:case 2:case 3:var R=3;break;default:R=Z}var j=Z;Z=R;try{return q()}finally{Z=j}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(q,R){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var j=Z;Z=q;try{return R()}finally{Z=j}},l.unstable_scheduleCallback=function(q,R,j){var k=l.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?k+j:k):j=k,q){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,q={id:T++,callback:R,priorityLevel:q,startTime:j,expirationTime:I,sortIndex:-1},j>k?(q.sortIndex=j,s($,q),d(_)===null&&q===d($)&&(K?(ie(Qe),Qe=-1):K=!0,ue(Se,j-k))):(q.sortIndex=I,s(_,q),oe||G||(oe=!0,Ve(c1))),q},l.unstable_shouldYield=ot,l.unstable_wrapCallback=function(q){var R=Z;return function(){var j=Z;Z=R;try{return q.apply(this,arguments)}finally{Z=j}}}}(CC)),CC}var FN;function pq(){return FN||(FN=1,LC.exports=uq()),LC.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DN;function kq(){if(DN)return Ee;DN=1;var l=VC(),s=pq();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,g={};function f(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(g[e]=t,e=0;e<t.length;e++)M.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},E={};function Z(e){return _.call(E,e)?!0:_.call(T,e)?!1:$.test(e)?E[e]=!0:(T[e]=!0,!1)}function G(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oe(e,t,o,a){if(t===null||typeof t>"u"||G(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,o,a,c,i,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=r}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function fe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,fe);O[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,fe);O[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,fe);O[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ae(e,t,o,a){var c=O.hasOwnProperty(t)?O[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oe(t,o,c,a)&&(o=null),a||c===null?Z(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):c.mustUseProperty?e[c.propertyName]=o===null?c.type===3?!1:"":o:(t=c.attributeName,a=c.attributeNamespace,o===null?e.removeAttribute(t):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var Se=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,c1=Symbol.for("react.element"),be=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),ot=Symbol.for("react.context"),k1=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),i1=Symbol.for("react.suspense_list"),f1=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),q=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,k;function I(e){if(k===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var U=!1;function X(e,t){if(!e||U)return"";U=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var a=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){a=x}e.call(t.prototype)}else{try{throw Error()}catch(x){a=x}e()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),i=a.stack.split(`
`),r=c.length-1,h=i.length-1;1<=r&&0<=h&&c[r]!==i[h];)h--;for(;1<=r&&0<=h;r--,h--)if(c[r]!==i[h]){if(r!==1||h!==1)do if(r--,h--,0>h||c[r]!==i[h]){var u=`
`+c[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=r&&0<=h);break}}}finally{U=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?I(e):""}function J(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case be:return"Portal";case H1:return"Profiler";case Qe:return"StrictMode";case Oe:return"Suspense";case i1:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ot:return(e.displayName||"Context")+".Consumer";case C1:return(e._context.displayName||"Context")+".Provider";case k1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case f1:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=le(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ic(e){e._valueTracker||(e._valueTracker=Ue(e))}function DC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=le(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Sc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nw(e,t){var o=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function RC(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=te(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function BC(e,t){t=t.checked,t!=null&&Ae(e,"checked",t,!1)}function $w(e,t){BC(e,t);var o=te(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zw(e,t.type,o):t.hasOwnProperty("defaultValue")&&zw(e,t.type,te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function EC(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function zw(e,t,o){(t!=="number"||Sc(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var I2=Array.isArray;function Ja(e,t,o,a){if(e=e.options,t){t={};for(var c=0;c<o.length;c++)t["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=t.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&a&&(e[o].defaultSelected=!0)}else{for(o=""+te(o),t=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function qw(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function OC(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(d(92));if(I2(o)){if(1<o.length)throw Error(d(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:te(o)}}function UC(e,t){var o=te(t.value),a=te(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function ZC(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function WC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aw(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?WC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nc,GC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nc=Nc||document.createElement("div"),Nc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function S2(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var N2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y$=["Webkit","ms","Moz","O"];Object.keys(N2).forEach(function(e){y$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),N2[t]=N2[e]})});function XC(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||N2.hasOwnProperty(e)&&N2[e]?(""+t).trim():t+"px"}function KC(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=XC(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,c):e[o]=c}}var u$=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bw(e,t){if(t){if(u$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function jw(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hw=null;function Pw(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vw=null,Ya=null,e2=null;function QC(e){if(e=K2(e)){if(typeof Vw!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Qc(t),Vw(e.stateNode,e.type,t))}}function JC(e){Ya?e2?e2.push(e):e2=[e]:Ya=e}function YC(){if(Ya){var e=Ya,t=e2;if(e2=Ya=null,QC(e),t)for(e=0;e<t.length;e++)QC(t[e])}}function eI(e,t){return e(t)}function tI(){}var Tw=!1;function nI(e,t,o){if(Tw)return e(t,o);Tw=!0;try{return eI(e,t,o)}finally{Tw=!1,(Ya!==null||e2!==null)&&(tI(),YC())}}function $2(e,t){var o=e.stateNode;if(o===null)return null;var a=Qc(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(d(231,t,typeof o));return o}var Fw=!1;if(w)try{var z2={};Object.defineProperty(z2,"passive",{get:function(){Fw=!0}}),window.addEventListener("test",z2,z2),window.removeEventListener("test",z2,z2)}catch{Fw=!1}function p$(e,t,o,a,c,i,r,h,u){var x=Array.prototype.slice.call(arguments,3);try{t.apply(o,x)}catch(S){this.onError(S)}}var q2=!1,$c=null,zc=!1,Dw=null,k$={onError:function(e){q2=!0,$c=e}};function f$(e,t,o,a,c,i,r,h,u){q2=!1,$c=null,p$.apply(k$,arguments)}function m$(e,t,o,a,c,i,r,h,u){if(f$.apply(this,arguments),q2){if(q2){var x=$c;q2=!1,$c=null}else throw Error(d(198));zc||(zc=!0,Dw=x)}}function at(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function oI(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function aI(e){if(at(e)!==e)throw Error(d(188))}function M$(e){var t=e.alternate;if(!t){if(t=at(e),t===null)throw Error(d(188));return t!==e?null:e}for(var o=e,a=t;;){var c=o.return;if(c===null)break;var i=c.alternate;if(i===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===i.child){for(i=c.child;i;){if(i===o)return aI(c),e;if(i===a)return aI(c),t;i=i.sibling}throw Error(d(188))}if(o.return!==a.return)o=c,a=i;else{for(var r=!1,h=c.child;h;){if(h===o){r=!0,o=c,a=i;break}if(h===a){r=!0,a=c,o=i;break}h=h.sibling}if(!r){for(h=i.child;h;){if(h===o){r=!0,o=i,a=c;break}if(h===a){r=!0,a=i,o=c;break}h=h.sibling}if(!r)throw Error(d(189))}}if(o.alternate!==a)throw Error(d(190))}if(o.tag!==3)throw Error(d(188));return o.stateNode.current===o?e:t}function cI(e){return e=M$(e),e!==null?iI(e):null}function iI(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iI(e);if(t!==null)return t;e=e.sibling}return null}var rI=s.unstable_scheduleCallback,dI=s.unstable_cancelCallback,v$=s.unstable_shouldYield,g$=s.unstable_requestPaint,me=s.unstable_now,x$=s.unstable_getCurrentPriorityLevel,Rw=s.unstable_ImmediatePriority,lI=s.unstable_UserBlockingPriority,qc=s.unstable_NormalPriority,_$=s.unstable_LowPriority,sI=s.unstable_IdlePriority,Ac=null,m1=null;function w$(e){if(m1&&typeof m1.onCommitFiberRoot=="function")try{m1.onCommitFiberRoot(Ac,e,void 0,(e.current.flags&128)===128)}catch{}}var r1=Math.clz32?Math.clz32:I$,L$=Math.log,C$=Math.LN2;function I$(e){return e>>>=0,e===0?32:31-(L$(e)/C$|0)|0}var bc=64,jc=4194304;function A2(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hc(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,c=e.suspendedLanes,i=e.pingedLanes,r=o&268435455;if(r!==0){var h=r&~c;h!==0?a=A2(h):(i&=r,i!==0&&(a=A2(i)))}else r=o&~c,r!==0?a=A2(r):i!==0&&(a=A2(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&c)&&(c=a&-a,i=t&-t,c>=i||c===16&&(i&4194240)!==0))return t;if(a&4&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-r1(t),c=1<<o,a|=e[o],t&=~c;return a}function S$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N$(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-r1(i),h=1<<r,u=c[r];u===-1?(!(h&o)||h&a)&&(c[r]=S$(h,t)):u<=t&&(e.expiredLanes|=h),i&=~h}}function Bw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hI(){var e=bc;return bc<<=1,!(bc&4194240)&&(bc=64),e}function Ew(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function b2(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-r1(t),e[t]=o}function $$(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var c=31-r1(o),i=1<<c;t[c]=0,a[c]=-1,e[c]=-1,o&=~i}}function Ow(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-r1(o),c=1<<a;c&t|e[a]&t&&(e[a]|=t),o&=~c}}var ne=0;function yI(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uI,Uw,pI,kI,fI,Zw=!1,Pc=[],P1=null,V1=null,T1=null,j2=new Map,H2=new Map,F1=[],z$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mI(e,t){switch(e){case"focusin":case"focusout":P1=null;break;case"dragenter":case"dragleave":V1=null;break;case"mouseover":case"mouseout":T1=null;break;case"pointerover":case"pointerout":j2.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":H2.delete(t.pointerId)}}function P2(e,t,o,a,c,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:i,targetContainers:[c]},t!==null&&(t=K2(t),t!==null&&Uw(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function q$(e,t,o,a,c){switch(t){case"focusin":return P1=P2(P1,e,t,o,a,c),!0;case"dragenter":return V1=P2(V1,e,t,o,a,c),!0;case"mouseover":return T1=P2(T1,e,t,o,a,c),!0;case"pointerover":var i=c.pointerId;return j2.set(i,P2(j2.get(i)||null,e,t,o,a,c)),!0;case"gotpointercapture":return i=c.pointerId,H2.set(i,P2(H2.get(i)||null,e,t,o,a,c)),!0}return!1}function MI(e){var t=ct(e.target);if(t!==null){var o=at(t);if(o!==null){if(t=o.tag,t===13){if(t=oI(o),t!==null){e.blockedOn=t,fI(e.priority,function(){pI(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Gw(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);Hw=a,o.target.dispatchEvent(a),Hw=null}else return t=K2(o),t!==null&&Uw(t),e.blockedOn=o,!1;t.shift()}return!0}function vI(e,t,o){Vc(e)&&o.delete(t)}function A$(){Zw=!1,P1!==null&&Vc(P1)&&(P1=null),V1!==null&&Vc(V1)&&(V1=null),T1!==null&&Vc(T1)&&(T1=null),j2.forEach(vI),H2.forEach(vI)}function V2(e,t){e.blockedOn===t&&(e.blockedOn=null,Zw||(Zw=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,A$)))}function T2(e){function t(c){return V2(c,e)}if(0<Pc.length){V2(Pc[0],e);for(var o=1;o<Pc.length;o++){var a=Pc[o];a.blockedOn===e&&(a.blockedOn=null)}}for(P1!==null&&V2(P1,e),V1!==null&&V2(V1,e),T1!==null&&V2(T1,e),j2.forEach(t),H2.forEach(t),o=0;o<F1.length;o++)a=F1[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<F1.length&&(o=F1[0],o.blockedOn===null);)MI(o),o.blockedOn===null&&F1.shift()}var t2=Se.ReactCurrentBatchConfig,Tc=!0;function b$(e,t,o,a){var c=ne,i=t2.transition;t2.transition=null;try{ne=1,Ww(e,t,o,a)}finally{ne=c,t2.transition=i}}function j$(e,t,o,a){var c=ne,i=t2.transition;t2.transition=null;try{ne=4,Ww(e,t,o,a)}finally{ne=c,t2.transition=i}}function Ww(e,t,o,a){if(Tc){var c=Gw(e,t,o,a);if(c===null)hL(e,t,a,Fc,o),mI(e,a);else if(q$(c,e,t,o,a))a.stopPropagation();else if(mI(e,a),t&4&&-1<z$.indexOf(e)){for(;c!==null;){var i=K2(c);if(i!==null&&uI(i),i=Gw(e,t,o,a),i===null&&hL(e,t,a,Fc,o),i===c)break;c=i}c!==null&&a.stopPropagation()}else hL(e,t,a,null,o)}}var Fc=null;function Gw(e,t,o,a){if(Fc=null,e=Pw(a),e=ct(e),e!==null)if(t=at(e),t===null)e=null;else if(o=t.tag,o===13){if(e=oI(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fc=e,null}function gI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x$()){case Rw:return 1;case lI:return 4;case qc:case _$:return 16;case sI:return 536870912;default:return 16}default:return 16}}var D1=null,Xw=null,Dc=null;function xI(){if(Dc)return Dc;var e,t=Xw,o=t.length,a,c="value"in D1?D1.value:D1.textContent,i=c.length;for(e=0;e<o&&t[e]===c[e];e++);var r=o-e;for(a=1;a<=r&&t[o-a]===c[i-a];a++);return Dc=c.slice(e,1<a?1-a:void 0)}function Rc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bc(){return!0}function _I(){return!1}function Ze(e){function t(o,a,c,i,r){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(o=e[h],this[h]=o?o(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bc:_I,this.isPropagationStopped=_I,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bc)},persist:function(){},isPersistent:Bc}),t}var n2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kw=Ze(n2),F2=j({},n2,{view:0,detail:0}),H$=Ze(F2),Qw,Jw,D2,Ec=j({},F2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==D2&&(D2&&e.type==="mousemove"?(Qw=e.screenX-D2.screenX,Jw=e.screenY-D2.screenY):Jw=Qw=0,D2=e),Qw)},movementY:function(e){return"movementY"in e?e.movementY:Jw}}),wI=Ze(Ec),P$=j({},Ec,{dataTransfer:0}),V$=Ze(P$),T$=j({},F2,{relatedTarget:0}),Yw=Ze(T$),F$=j({},n2,{animationName:0,elapsedTime:0,pseudoElement:0}),D$=Ze(F$),R$=j({},n2,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B$=Ze(R$),E$=j({},n2,{data:0}),LI=Ze(E$),O$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z$[e])?!!t[e]:!1}function eL(){return W$}var G$=j({},F2,{key:function(e){if(e.key){var t=O$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U$[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eL,charCode:function(e){return e.type==="keypress"?Rc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X$=Ze(G$),K$=j({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),CI=Ze(K$),Q$=j({},F2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eL}),J$=Ze(Q$),Y$=j({},n2,{propertyName:0,elapsedTime:0,pseudoElement:0}),ez=Ze(Y$),tz=j({},Ec,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nz=Ze(tz),oz=[9,13,27,32],tL=w&&"CompositionEvent"in window,R2=null;w&&"documentMode"in document&&(R2=document.documentMode);var az=w&&"TextEvent"in window&&!R2,II=w&&(!tL||R2&&8<R2&&11>=R2),SI=" ",NI=!1;function $I(e,t){switch(e){case"keyup":return oz.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var o2=!1;function cz(e,t){switch(e){case"compositionend":return zI(t);case"keypress":return t.which!==32?null:(NI=!0,SI);case"textInput":return e=t.data,e===SI&&NI?null:e;default:return null}}function iz(e,t){if(o2)return e==="compositionend"||!tL&&$I(e,t)?(e=xI(),Dc=Xw=D1=null,o2=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return II&&t.locale!=="ko"?null:t.data;default:return null}}var rz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qI(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rz[e.type]:t==="textarea"}function AI(e,t,o,a){JC(a),t=Gc(t,"onChange"),0<t.length&&(o=new Kw("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var B2=null,E2=null;function dz(e){KI(e,0)}function Oc(e){var t=d2(e);if(DC(t))return e}function lz(e,t){if(e==="change")return t}var bI=!1;if(w){var nL;if(w){var oL="oninput"in document;if(!oL){var jI=document.createElement("div");jI.setAttribute("oninput","return;"),oL=typeof jI.oninput=="function"}nL=oL}else nL=!1;bI=nL&&(!document.documentMode||9<document.documentMode)}function HI(){B2&&(B2.detachEvent("onpropertychange",PI),E2=B2=null)}function PI(e){if(e.propertyName==="value"&&Oc(E2)){var t=[];AI(t,E2,e,Pw(e)),nI(dz,t)}}function sz(e,t,o){e==="focusin"?(HI(),B2=t,E2=o,B2.attachEvent("onpropertychange",PI)):e==="focusout"&&HI()}function hz(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(E2)}function yz(e,t){if(e==="click")return Oc(t)}function uz(e,t){if(e==="input"||e==="change")return Oc(t)}function pz(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d1=typeof Object.is=="function"?Object.is:pz;function O2(e,t){if(d1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!_.call(t,c)||!d1(e[c],t[c]))return!1}return!0}function VI(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function TI(e,t){var o=VI(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=VI(o)}}function FI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?FI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function DI(){for(var e=window,t=Sc();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Sc(e.document)}return t}function aL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kz(e){var t=DI(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&FI(o.ownerDocument.documentElement,o)){if(a!==null&&aL(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=o.textContent.length,i=Math.min(a.start,c);a=a.end===void 0?i:Math.min(a.end,c),!e.extend&&i>a&&(c=a,a=i,i=c),c=TI(o,i);var r=TI(o,a);c&&r&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fz=w&&"documentMode"in document&&11>=document.documentMode,a2=null,cL=null,U2=null,iL=!1;function RI(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iL||a2==null||a2!==Sc(a)||(a=a2,"selectionStart"in a&&aL(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),U2&&O2(U2,a)||(U2=a,a=Gc(cL,"onSelect"),0<a.length&&(t=new Kw("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=a2)))}function Uc(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var c2={animationend:Uc("Animation","AnimationEnd"),animationiteration:Uc("Animation","AnimationIteration"),animationstart:Uc("Animation","AnimationStart"),transitionend:Uc("Transition","TransitionEnd")},rL={},BI={};w&&(BI=document.createElement("div").style,"AnimationEvent"in window||(delete c2.animationend.animation,delete c2.animationiteration.animation,delete c2.animationstart.animation),"TransitionEvent"in window||delete c2.transitionend.transition);function Zc(e){if(rL[e])return rL[e];if(!c2[e])return e;var t=c2[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in BI)return rL[e]=t[o];return e}var EI=Zc("animationend"),OI=Zc("animationiteration"),UI=Zc("animationstart"),ZI=Zc("transitionend"),WI=new Map,GI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function R1(e,t){WI.set(e,t),f(t,[e])}for(var dL=0;dL<GI.length;dL++){var lL=GI[dL],mz=lL.toLowerCase(),Mz=lL[0].toUpperCase()+lL.slice(1);R1(mz,"on"+Mz)}R1(EI,"onAnimationEnd"),R1(OI,"onAnimationIteration"),R1(UI,"onAnimationStart"),R1("dblclick","onDoubleClick"),R1("focusin","onFocus"),R1("focusout","onBlur"),R1(ZI,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Z2="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Z2));function XI(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,m$(a,t,void 0,e),e.currentTarget=null}function KI(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],c=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var h=a[r],u=h.instance,x=h.currentTarget;if(h=h.listener,u!==i&&c.isPropagationStopped())break e;XI(c,h,x),i=u}else for(r=0;r<a.length;r++){if(h=a[r],u=h.instance,x=h.currentTarget,h=h.listener,u!==i&&c.isPropagationStopped())break e;XI(c,h,x),i=u}}}if(zc)throw e=Dw,zc=!1,Dw=null,e}function re(e,t){var o=t[mL];o===void 0&&(o=t[mL]=new Set);var a=e+"__bubble";o.has(a)||(QI(t,e,2,!1),o.add(a))}function sL(e,t,o){var a=0;t&&(a|=4),QI(o,e,a,t)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function W2(e){if(!e[Wc]){e[Wc]=!0,M.forEach(function(o){o!=="selectionchange"&&(vz.has(o)||sL(o,!1,e),sL(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wc]||(t[Wc]=!0,sL("selectionchange",!1,t))}}function QI(e,t,o,a){switch(gI(t)){case 1:var c=b$;break;case 4:c=j$;break;default:c=Ww}o=c.bind(null,t,o,e),c=void 0,!Fw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,o,{capture:!0,passive:c}):e.addEventListener(t,o,!0):c!==void 0?e.addEventListener(t,o,{passive:c}):e.addEventListener(t,o,!1)}function hL(e,t,o,a,c){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var h=a.stateNode.containerInfo;if(h===c||h.nodeType===8&&h.parentNode===c)break;if(r===4)for(r=a.return;r!==null;){var u=r.tag;if((u===3||u===4)&&(u=r.stateNode.containerInfo,u===c||u.nodeType===8&&u.parentNode===c))return;r=r.return}for(;h!==null;){if(r=ct(h),r===null)return;if(u=r.tag,u===5||u===6){a=i=r;continue e}h=h.parentNode}}a=a.return}nI(function(){var x=i,S=Pw(o),N=[];e:{var L=WI.get(e);if(L!==void 0){var A=Kw,H=e;switch(e){case"keypress":if(Rc(o)===0)break e;case"keydown":case"keyup":A=X$;break;case"focusin":H="focus",A=Yw;break;case"focusout":H="blur",A=Yw;break;case"beforeblur":case"afterblur":A=Yw;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=wI;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=V$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=J$;break;case EI:case OI:case UI:A=D$;break;case ZI:A=ez;break;case"scroll":A=H$;break;case"wheel":A=nz;break;case"copy":case"cut":case"paste":A=B$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=CI}var P=(t&4)!==0,Me=!P&&e==="scroll",m=P?L!==null?L+"Capture":null:L;P=[];for(var p=x,v;p!==null;){v=p;var z=v.stateNode;if(v.tag===5&&z!==null&&(v=z,m!==null&&(z=$2(p,m),z!=null&&P.push(G2(p,z,v)))),Me)break;p=p.return}0<P.length&&(L=new A(L,H,null,o,S),N.push({event:L,listeners:P}))}}if(!(t&7)){e:{if(L=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",L&&o!==Hw&&(H=o.relatedTarget||o.fromElement)&&(ct(H)||H[I1]))break e;if((A||L)&&(L=S.window===S?S:(L=S.ownerDocument)?L.defaultView||L.parentWindow:window,A?(H=o.relatedTarget||o.toElement,A=x,H=H?ct(H):null,H!==null&&(Me=at(H),H!==Me||H.tag!==5&&H.tag!==6)&&(H=null)):(A=null,H=x),A!==H)){if(P=wI,z="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(P=CI,z="onPointerLeave",m="onPointerEnter",p="pointer"),Me=A==null?L:d2(A),v=H==null?L:d2(H),L=new P(z,p+"leave",A,o,S),L.target=Me,L.relatedTarget=v,z=null,ct(S)===x&&(P=new P(m,p+"enter",H,o,S),P.target=v,P.relatedTarget=Me,z=P),Me=z,A&&H)t:{for(P=A,m=H,p=0,v=P;v;v=i2(v))p++;for(v=0,z=m;z;z=i2(z))v++;for(;0<p-v;)P=i2(P),p--;for(;0<v-p;)m=i2(m),v--;for(;p--;){if(P===m||m!==null&&P===m.alternate)break t;P=i2(P),m=i2(m)}P=null}else P=null;A!==null&&JI(N,L,A,P,!1),H!==null&&Me!==null&&JI(N,Me,H,P,!0)}}e:{if(L=x?d2(x):window,A=L.nodeName&&L.nodeName.toLowerCase(),A==="select"||A==="input"&&L.type==="file")var V=lz;else if(qI(L))if(bI)V=uz;else{V=hz;var F=sz}else(A=L.nodeName)&&A.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(V=yz);if(V&&(V=V(e,x))){AI(N,V,o,S);break e}F&&F(e,L,x),e==="focusout"&&(F=L._wrapperState)&&F.controlled&&L.type==="number"&&zw(L,"number",L.value)}switch(F=x?d2(x):window,e){case"focusin":(qI(F)||F.contentEditable==="true")&&(a2=F,cL=x,U2=null);break;case"focusout":U2=cL=a2=null;break;case"mousedown":iL=!0;break;case"contextmenu":case"mouseup":case"dragend":iL=!1,RI(N,o,S);break;case"selectionchange":if(fz)break;case"keydown":case"keyup":RI(N,o,S)}var D;if(tL)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else o2?$I(e,o)&&(B="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(B="onCompositionStart");B&&(II&&o.locale!=="ko"&&(o2||B!=="onCompositionStart"?B==="onCompositionEnd"&&o2&&(D=xI()):(D1=S,Xw="value"in D1?D1.value:D1.textContent,o2=!0)),F=Gc(x,B),0<F.length&&(B=new LI(B,e,null,o,S),N.push({event:B,listeners:F}),D?B.data=D:(D=zI(o),D!==null&&(B.data=D)))),(D=az?cz(e,o):iz(e,o))&&(x=Gc(x,"onBeforeInput"),0<x.length&&(S=new LI("onBeforeInput","beforeinput",null,o,S),N.push({event:S,listeners:x}),S.data=D))}KI(N,t)})}function G2(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Gc(e,t){for(var o=t+"Capture",a=[];e!==null;){var c=e,i=c.stateNode;c.tag===5&&i!==null&&(c=i,i=$2(e,o),i!=null&&a.unshift(G2(e,i,c)),i=$2(e,t),i!=null&&a.push(G2(e,i,c))),e=e.return}return a}function i2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function JI(e,t,o,a,c){for(var i=t._reactName,r=[];o!==null&&o!==a;){var h=o,u=h.alternate,x=h.stateNode;if(u!==null&&u===a)break;h.tag===5&&x!==null&&(h=x,c?(u=$2(o,i),u!=null&&r.unshift(G2(o,u,h))):c||(u=$2(o,i),u!=null&&r.push(G2(o,u,h)))),o=o.return}r.length!==0&&e.push({event:t,listeners:r})}var gz=/\r\n?/g,xz=/\u0000|\uFFFD/g;function YI(e){return(typeof e=="string"?e:""+e).replace(gz,`
`).replace(xz,"")}function Xc(e,t,o){if(t=YI(t),YI(e)!==t&&o)throw Error(d(425))}function Kc(){}var yL=null,uL=null;function pL(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kL=typeof setTimeout=="function"?setTimeout:void 0,_z=typeof clearTimeout=="function"?clearTimeout:void 0,eS=typeof Promise=="function"?Promise:void 0,wz=typeof queueMicrotask=="function"?queueMicrotask:typeof eS<"u"?function(e){return eS.resolve(null).then(e).catch(Lz)}:kL;function Lz(e){setTimeout(function(){throw e})}function fL(e,t){var o=t,a=0;do{var c=o.nextSibling;if(e.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){e.removeChild(c),T2(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);T2(t)}function B1(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var r2=Math.random().toString(36).slice(2),M1="__reactFiber$"+r2,X2="__reactProps$"+r2,I1="__reactContainer$"+r2,mL="__reactEvents$"+r2,Cz="__reactListeners$"+r2,Iz="__reactHandles$"+r2;function ct(e){var t=e[M1];if(t)return t;for(var o=e.parentNode;o;){if(t=o[I1]||o[M1]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=tS(e);e!==null;){if(o=e[M1])return o;e=tS(e)}return t}e=o,o=e.parentNode}return null}function K2(e){return e=e[M1]||e[I1],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function d2(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Qc(e){return e[X2]||null}var ML=[],l2=-1;function E1(e){return{current:e}}function de(e){0>l2||(e.current=ML[l2],ML[l2]=null,l2--)}function ce(e,t){l2++,ML[l2]=e.current,e.current=t}var O1={},Ne=E1(O1),Te=E1(!1),it=O1;function s2(e,t){var o=e.type.contextTypes;if(!o)return O1;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},i;for(i in o)c[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Fe(e){return e=e.childContextTypes,e!=null}function Jc(){de(Te),de(Ne)}function nS(e,t,o){if(Ne.current!==O1)throw Error(d(168));ce(Ne,t),ce(Te,o)}function oS(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(d(108,ae(e)||"Unknown",c));return j({},o,a)}function Yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||O1,it=Ne.current,ce(Ne,e),ce(Te,Te.current),!0}function aS(e,t,o){var a=e.stateNode;if(!a)throw Error(d(169));o?(e=oS(e,t,it),a.__reactInternalMemoizedMergedChildContext=e,de(Te),de(Ne),ce(Ne,e)):de(Te),ce(Te,o)}var S1=null,ei=!1,vL=!1;function cS(e){S1===null?S1=[e]:S1.push(e)}function Sz(e){ei=!0,cS(e)}function U1(){if(!vL&&S1!==null){vL=!0;var e=0,t=ne;try{var o=S1;for(ne=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}S1=null,ei=!1}catch(c){throw S1!==null&&(S1=S1.slice(e+1)),rI(Rw,U1),c}finally{ne=t,vL=!1}}return null}var h2=[],y2=0,ti=null,ni=0,Je=[],Ye=0,rt=null,N1=1,$1="";function dt(e,t){h2[y2++]=ni,h2[y2++]=ti,ti=e,ni=t}function iS(e,t,o){Je[Ye++]=N1,Je[Ye++]=$1,Je[Ye++]=rt,rt=e;var a=N1;e=$1;var c=32-r1(a)-1;a&=~(1<<c),o+=1;var i=32-r1(t)+c;if(30<i){var r=c-c%5;i=(a&(1<<r)-1).toString(32),a>>=r,c-=r,N1=1<<32-r1(t)+c|o<<c|a,$1=i+e}else N1=1<<i|o<<c|a,$1=e}function gL(e){e.return!==null&&(dt(e,1),iS(e,1,0))}function xL(e){for(;e===ti;)ti=h2[--y2],h2[y2]=null,ni=h2[--y2],h2[y2]=null;for(;e===rt;)rt=Je[--Ye],Je[Ye]=null,$1=Je[--Ye],Je[Ye]=null,N1=Je[--Ye],Je[Ye]=null}var We=null,Ge=null,se=!1,l1=null;function rS(e,t){var o=o1(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function dS(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ge=B1(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=rt!==null?{id:N1,overflow:$1}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=o1(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,We=e,Ge=null,!0):!1;default:return!1}}function _L(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wL(e){if(se){var t=Ge;if(t){var o=t;if(!dS(e,t)){if(_L(e))throw Error(d(418));t=B1(o.nextSibling);var a=We;t&&dS(e,t)?rS(a,o):(e.flags=e.flags&-4097|2,se=!1,We=e)}}else{if(_L(e))throw Error(d(418));e.flags=e.flags&-4097|2,se=!1,We=e}}}function lS(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function oi(e){if(e!==We)return!1;if(!se)return lS(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pL(e.type,e.memoizedProps)),t&&(t=Ge)){if(_L(e))throw sS(),Error(d(418));for(;t;)rS(e,t),t=B1(t.nextSibling)}if(lS(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Ge=B1(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=We?B1(e.stateNode.nextSibling):null;return!0}function sS(){for(var e=Ge;e;)e=B1(e.nextSibling)}function u2(){Ge=We=null,se=!1}function LL(e){l1===null?l1=[e]:l1.push(e)}var Nz=Se.ReactCurrentBatchConfig;function Q2(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(d(309));var a=o.stateNode}if(!a)throw Error(d(147,e));var c=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(r){var h=c.refs;r===null?delete h[i]:h[i]=r},t._stringRef=i,t)}if(typeof e!="string")throw Error(d(284));if(!o._owner)throw Error(d(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hS(e){var t=e._init;return t(e._payload)}function yS(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function o(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function a(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function c(m,p){return m=Y1(m,p),m.index=0,m.sibling=null,m}function i(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function h(m,p,v,z){return p===null||p.tag!==6?(p=kC(v,m.mode,z),p.return=m,p):(p=c(p,v),p.return=m,p)}function u(m,p,v,z){var V=v.type;return V===Pe?S(m,p,v.props.children,z,v.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ve&&hS(V)===p.type)?(z=c(p,v.props),z.ref=Q2(m,p,v),z.return=m,z):(z=Ni(v.type,v.key,v.props,null,m.mode,z),z.ref=Q2(m,p,v),z.return=m,z)}function x(m,p,v,z){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=fC(v,m.mode,z),p.return=m,p):(p=c(p,v.children||[]),p.return=m,p)}function S(m,p,v,z,V){return p===null||p.tag!==7?(p=ft(v,m.mode,z,V),p.return=m,p):(p=c(p,v),p.return=m,p)}function N(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=kC(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case c1:return v=Ni(p.type,p.key,p.props,null,m.mode,v),v.ref=Q2(m,null,p),v.return=m,v;case be:return p=fC(p,m.mode,v),p.return=m,p;case Ve:var z=p._init;return N(m,z(p._payload),v)}if(I2(p)||R(p))return p=ft(p,m.mode,v,null),p.return=m,p;ai(m,p)}return null}function L(m,p,v,z){var V=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return V!==null?null:h(m,p,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case c1:return v.key===V?u(m,p,v,z):null;case be:return v.key===V?x(m,p,v,z):null;case Ve:return V=v._init,L(m,p,V(v._payload),z)}if(I2(v)||R(v))return V!==null?null:S(m,p,v,z,null);ai(m,v)}return null}function A(m,p,v,z,V){if(typeof z=="string"&&z!==""||typeof z=="number")return m=m.get(v)||null,h(p,m,""+z,V);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case c1:return m=m.get(z.key===null?v:z.key)||null,u(p,m,z,V);case be:return m=m.get(z.key===null?v:z.key)||null,x(p,m,z,V);case Ve:var F=z._init;return A(m,p,v,F(z._payload),V)}if(I2(z)||R(z))return m=m.get(v)||null,S(p,m,z,V,null);ai(p,z)}return null}function H(m,p,v,z){for(var V=null,F=null,D=p,B=p=0,Le=null;D!==null&&B<v.length;B++){D.index>B?(Le=D,D=null):Le=D.sibling;var ee=L(m,D,v[B],z);if(ee===null){D===null&&(D=Le);break}e&&D&&ee.alternate===null&&t(m,D),p=i(ee,p,B),F===null?V=ee:F.sibling=ee,F=ee,D=Le}if(B===v.length)return o(m,D),se&&dt(m,B),V;if(D===null){for(;B<v.length;B++)D=N(m,v[B],z),D!==null&&(p=i(D,p,B),F===null?V=D:F.sibling=D,F=D);return se&&dt(m,B),V}for(D=a(m,D);B<v.length;B++)Le=A(D,m,B,v[B],z),Le!==null&&(e&&Le.alternate!==null&&D.delete(Le.key===null?B:Le.key),p=i(Le,p,B),F===null?V=Le:F.sibling=Le,F=Le);return e&&D.forEach(function(et){return t(m,et)}),se&&dt(m,B),V}function P(m,p,v,z){var V=R(v);if(typeof V!="function")throw Error(d(150));if(v=V.call(v),v==null)throw Error(d(151));for(var F=V=null,D=p,B=p=0,Le=null,ee=v.next();D!==null&&!ee.done;B++,ee=v.next()){D.index>B?(Le=D,D=null):Le=D.sibling;var et=L(m,D,ee.value,z);if(et===null){D===null&&(D=Le);break}e&&D&&et.alternate===null&&t(m,D),p=i(et,p,B),F===null?V=et:F.sibling=et,F=et,D=Le}if(ee.done)return o(m,D),se&&dt(m,B),V;if(D===null){for(;!ee.done;B++,ee=v.next())ee=N(m,ee.value,z),ee!==null&&(p=i(ee,p,B),F===null?V=ee:F.sibling=ee,F=ee);return se&&dt(m,B),V}for(D=a(m,D);!ee.done;B++,ee=v.next())ee=A(D,m,B,ee.value,z),ee!==null&&(e&&ee.alternate!==null&&D.delete(ee.key===null?B:ee.key),p=i(ee,p,B),F===null?V=ee:F.sibling=ee,F=ee);return e&&D.forEach(function(rq){return t(m,rq)}),se&&dt(m,B),V}function Me(m,p,v,z){if(typeof v=="object"&&v!==null&&v.type===Pe&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case c1:e:{for(var V=v.key,F=p;F!==null;){if(F.key===V){if(V=v.type,V===Pe){if(F.tag===7){o(m,F.sibling),p=c(F,v.props.children),p.return=m,m=p;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ve&&hS(V)===F.type){o(m,F.sibling),p=c(F,v.props),p.ref=Q2(m,F,v),p.return=m,m=p;break e}o(m,F);break}else t(m,F);F=F.sibling}v.type===Pe?(p=ft(v.props.children,m.mode,z,v.key),p.return=m,m=p):(z=Ni(v.type,v.key,v.props,null,m.mode,z),z.ref=Q2(m,p,v),z.return=m,m=z)}return r(m);case be:e:{for(F=v.key;p!==null;){if(p.key===F)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){o(m,p.sibling),p=c(p,v.children||[]),p.return=m,m=p;break e}else{o(m,p);break}else t(m,p);p=p.sibling}p=fC(v,m.mode,z),p.return=m,m=p}return r(m);case Ve:return F=v._init,Me(m,p,F(v._payload),z)}if(I2(v))return H(m,p,v,z);if(R(v))return P(m,p,v,z);ai(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(o(m,p.sibling),p=c(p,v),p.return=m,m=p):(o(m,p),p=kC(v,m.mode,z),p.return=m,m=p),r(m)):o(m,p)}return Me}var p2=yS(!0),uS=yS(!1),ci=E1(null),ii=null,k2=null,CL=null;function IL(){CL=k2=ii=null}function SL(e){var t=ci.current;de(ci),e._currentValue=t}function NL(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function f2(e,t){ii=e,CL=k2=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function e1(e){var t=e._currentValue;if(CL!==e)if(e={context:e,memoizedValue:t,next:null},k2===null){if(ii===null)throw Error(d(308));k2=e,ii.dependencies={lanes:0,firstContext:e}}else k2=k2.next=e;return t}var lt=null;function $L(e){lt===null?lt=[e]:lt.push(e)}function pS(e,t,o,a){var c=t.interleaved;return c===null?(o.next=o,$L(t)):(o.next=c.next,c.next=o),t.interleaved=o,z1(e,a)}function z1(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Z1=!1;function zL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function q1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function W1(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Q&2){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,z1(e,o)}return c=a.interleaved,c===null?(t.next=t,$L(a)):(t.next=c.next,c.next=t),a.interleaved=t,z1(e,o)}function ri(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Ow(e,o)}}function fS(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,i=null;if(o=o.firstBaseUpdate,o!==null){do{var r={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};i===null?c=i=r:i=i.next=r,o=o.next}while(o!==null);i===null?c=i=t:i=i.next=t}else c=i=t;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function di(e,t,o,a){var c=e.updateQueue;Z1=!1;var i=c.firstBaseUpdate,r=c.lastBaseUpdate,h=c.shared.pending;if(h!==null){c.shared.pending=null;var u=h,x=u.next;u.next=null,r===null?i=x:r.next=x,r=u;var S=e.alternate;S!==null&&(S=S.updateQueue,h=S.lastBaseUpdate,h!==r&&(h===null?S.firstBaseUpdate=x:h.next=x,S.lastBaseUpdate=u))}if(i!==null){var N=c.baseState;r=0,S=x=u=null,h=i;do{var L=h.lane,A=h.eventTime;if((a&L)===L){S!==null&&(S=S.next={eventTime:A,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var H=e,P=h;switch(L=t,A=o,P.tag){case 1:if(H=P.payload,typeof H=="function"){N=H.call(A,N,L);break e}N=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=P.payload,L=typeof H=="function"?H.call(A,N,L):H,L==null)break e;N=j({},N,L);break e;case 2:Z1=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,L=c.effects,L===null?c.effects=[h]:L.push(h))}else A={eventTime:A,lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},S===null?(x=S=A,u=N):S=S.next=A,r|=L;if(h=h.next,h===null){if(h=c.shared.pending,h===null)break;L=h,h=L.next,L.next=null,c.lastBaseUpdate=L,c.shared.pending=null}}while(!0);if(S===null&&(u=N),c.baseState=u,c.firstBaseUpdate=x,c.lastBaseUpdate=S,t=c.shared.interleaved,t!==null){c=t;do r|=c.lane,c=c.next;while(c!==t)}else i===null&&(c.shared.lanes=0);yt|=r,e.lanes=r,e.memoizedState=N}}function mS(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(d(191,c));c.call(a)}}}var J2={},v1=E1(J2),Y2=E1(J2),ec=E1(J2);function st(e){if(e===J2)throw Error(d(174));return e}function qL(e,t){switch(ce(ec,t),ce(Y2,e),ce(v1,J2),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Aw(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Aw(t,e)}de(v1),ce(v1,t)}function m2(){de(v1),de(Y2),de(ec)}function MS(e){st(ec.current);var t=st(v1.current),o=Aw(t,e.type);t!==o&&(ce(Y2,e),ce(v1,o))}function AL(e){Y2.current===e&&(de(v1),de(Y2))}var he=E1(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bL=[];function jL(){for(var e=0;e<bL.length;e++)bL[e]._workInProgressVersionPrimary=null;bL.length=0}var si=Se.ReactCurrentDispatcher,HL=Se.ReactCurrentBatchConfig,ht=0,ye=null,ge=null,_e=null,hi=!1,tc=!1,nc=0,$z=0;function $e(){throw Error(d(321))}function PL(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!d1(e[o],t[o]))return!1;return!0}function VL(e,t,o,a,c,i){if(ht=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?bz:jz,e=o(a,c),tc){i=0;do{if(tc=!1,nc=0,25<=i)throw Error(d(301));i+=1,_e=ge=null,t.updateQueue=null,si.current=Hz,e=o(a,c)}while(tc)}if(si.current=pi,t=ge!==null&&ge.next!==null,ht=0,_e=ge=ye=null,hi=!1,t)throw Error(d(300));return e}function TL(){var e=nc!==0;return nc=0,e}function g1(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ye.memoizedState=_e=e:_e=_e.next=e,_e}function t1(){if(ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=_e===null?ye.memoizedState:_e.next;if(t!==null)_e=t,ge=e;else{if(e===null)throw Error(d(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},_e===null?ye.memoizedState=_e=e:_e=_e.next=e}return _e}function oc(e,t){return typeof t=="function"?t(e):t}function FL(e){var t=t1(),o=t.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=e;var a=ge,c=a.baseQueue,i=o.pending;if(i!==null){if(c!==null){var r=c.next;c.next=i.next,i.next=r}a.baseQueue=c=i,o.pending=null}if(c!==null){i=c.next,a=a.baseState;var h=r=null,u=null,x=i;do{var S=x.lane;if((ht&S)===S)u!==null&&(u=u.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:e(a,x.action);else{var N={lane:S,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};u===null?(h=u=N,r=a):u=u.next=N,ye.lanes|=S,yt|=S}x=x.next}while(x!==null&&x!==i);u===null?r=a:u.next=h,d1(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseState=r,t.baseQueue=u,o.lastRenderedState=a}if(e=o.interleaved,e!==null){c=e;do i=c.lane,ye.lanes|=i,yt|=i,c=c.next;while(c!==e)}else c===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function DL(e){var t=t1(),o=t.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=e;var a=o.dispatch,c=o.pending,i=t.memoizedState;if(c!==null){o.pending=null;var r=c=c.next;do i=e(i,r.action),r=r.next;while(r!==c);d1(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),o.lastRenderedState=i}return[i,a]}function vS(){}function gS(e,t){var o=ye,a=t1(),c=t(),i=!d1(a.memoizedState,c);if(i&&(a.memoizedState=c,De=!0),a=a.queue,RL(wS.bind(null,o,a,e),[e]),a.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(o.flags|=2048,ac(9,_S.bind(null,o,a,c,t),void 0,null),we===null)throw Error(d(349));ht&30||xS(o,t,c)}return c}function xS(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function _S(e,t,o,a){t.value=o,t.getSnapshot=a,LS(t)&&CS(e)}function wS(e,t,o){return o(function(){LS(t)&&CS(e)})}function LS(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!d1(e,o)}catch{return!0}}function CS(e){var t=z1(e,1);t!==null&&u1(t,e,1,-1)}function IS(e){var t=g1();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oc,lastRenderedState:e},t.queue=e,e=e.dispatch=Az.bind(null,ye,e),[t.memoizedState,e]}function ac(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function SS(){return t1().memoizedState}function yi(e,t,o,a){var c=g1();ye.flags|=e,c.memoizedState=ac(1|t,o,void 0,a===void 0?null:a)}function ui(e,t,o,a){var c=t1();a=a===void 0?null:a;var i=void 0;if(ge!==null){var r=ge.memoizedState;if(i=r.destroy,a!==null&&PL(a,r.deps)){c.memoizedState=ac(t,o,i,a);return}}ye.flags|=e,c.memoizedState=ac(1|t,o,i,a)}function NS(e,t){return yi(8390656,8,e,t)}function RL(e,t){return ui(2048,8,e,t)}function $S(e,t){return ui(4,2,e,t)}function zS(e,t){return ui(4,4,e,t)}function qS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function AS(e,t,o){return o=o!=null?o.concat([e]):null,ui(4,4,qS.bind(null,t,e),o)}function BL(){}function bS(e,t){var o=t1();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&PL(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function jS(e,t){var o=t1();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&PL(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function HS(e,t,o){return ht&21?(d1(o,t)||(o=hI(),ye.lanes|=o,yt|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=o)}function zz(e,t){var o=ne;ne=o!==0&&4>o?o:4,e(!0);var a=HL.transition;HL.transition={};try{e(!1),t()}finally{ne=o,HL.transition=a}}function PS(){return t1().memoizedState}function qz(e,t,o){var a=Q1(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},VS(e))TS(t,o);else if(o=pS(e,t,o,a),o!==null){var c=He();u1(o,e,a,c),FS(o,t,a)}}function Az(e,t,o){var a=Q1(e),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(VS(e))TS(t,c);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,h=i(r,o);if(c.hasEagerState=!0,c.eagerState=h,d1(h,r)){var u=t.interleaved;u===null?(c.next=c,$L(t)):(c.next=u.next,u.next=c),t.interleaved=c;return}}catch{}finally{}o=pS(e,t,c,a),o!==null&&(c=He(),u1(o,e,a,c),FS(o,t,a))}}function VS(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function TS(e,t){tc=hi=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function FS(e,t,o){if(o&4194240){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Ow(e,o)}}var pi={readContext:e1,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},bz={readContext:e1,useCallback:function(e,t){return g1().memoizedState=[e,t===void 0?null:t],e},useContext:e1,useEffect:NS,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,yi(4194308,4,qS.bind(null,t,e),o)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var o=g1();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=g1();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=qz.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=g1();return e={current:e},t.memoizedState=e},useState:IS,useDebugValue:BL,useDeferredValue:function(e){return g1().memoizedState=e},useTransition:function(){var e=IS(!1),t=e[0];return e=zz.bind(null,e[1]),g1().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=ye,c=g1();if(se){if(o===void 0)throw Error(d(407));o=o()}else{if(o=t(),we===null)throw Error(d(349));ht&30||xS(a,t,o)}c.memoizedState=o;var i={value:o,getSnapshot:t};return c.queue=i,NS(wS.bind(null,a,i,e),[e]),a.flags|=2048,ac(9,_S.bind(null,a,i,o,t),void 0,null),o},useId:function(){var e=g1(),t=we.identifierPrefix;if(se){var o=$1,a=N1;o=(a&~(1<<32-r1(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=nc++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=$z++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jz={readContext:e1,useCallback:bS,useContext:e1,useEffect:RL,useImperativeHandle:AS,useInsertionEffect:$S,useLayoutEffect:zS,useMemo:jS,useReducer:FL,useRef:SS,useState:function(){return FL(oc)},useDebugValue:BL,useDeferredValue:function(e){var t=t1();return HS(t,ge.memoizedState,e)},useTransition:function(){var e=FL(oc)[0],t=t1().memoizedState;return[e,t]},useMutableSource:vS,useSyncExternalStore:gS,useId:PS,unstable_isNewReconciler:!1},Hz={readContext:e1,useCallback:bS,useContext:e1,useEffect:RL,useImperativeHandle:AS,useInsertionEffect:$S,useLayoutEffect:zS,useMemo:jS,useReducer:DL,useRef:SS,useState:function(){return DL(oc)},useDebugValue:BL,useDeferredValue:function(e){var t=t1();return ge===null?t.memoizedState=e:HS(t,ge.memoizedState,e)},useTransition:function(){var e=DL(oc)[0],t=t1().memoizedState;return[e,t]},useMutableSource:vS,useSyncExternalStore:gS,useId:PS,unstable_isNewReconciler:!1};function s1(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function EL(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:j({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var ki={isMounted:function(e){return(e=e._reactInternals)?at(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=He(),c=Q1(e),i=q1(a,c);i.payload=t,o!=null&&(i.callback=o),t=W1(e,i,c),t!==null&&(u1(t,e,c,a),ri(t,e,c))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=He(),c=Q1(e),i=q1(a,c);i.tag=1,i.payload=t,o!=null&&(i.callback=o),t=W1(e,i,c),t!==null&&(u1(t,e,c,a),ri(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=He(),a=Q1(e),c=q1(o,a);c.tag=2,t!=null&&(c.callback=t),t=W1(e,c,a),t!==null&&(u1(t,e,a,o),ri(t,e,a))}};function DS(e,t,o,a,c,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!O2(o,a)||!O2(c,i):!0}function RS(e,t,o){var a=!1,c=O1,i=t.contextType;return typeof i=="object"&&i!==null?i=e1(i):(c=Fe(t)?it:Ne.current,a=t.contextTypes,i=(a=a!=null)?s2(e,c):O1),t=new t(o,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ki,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=i),t}function BS(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function OL(e,t,o,a){var c=e.stateNode;c.props=o,c.state=e.memoizedState,c.refs={},zL(e);var i=t.contextType;typeof i=="object"&&i!==null?c.context=e1(i):(i=Fe(t)?it:Ne.current,c.context=s2(e,i)),c.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(EL(e,t,i,o),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&ki.enqueueReplaceState(c,c.state,null),di(e,o,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function M2(e,t){try{var o="",a=t;do o+=J(a),a=a.return;while(a);var c=o}catch(i){c=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:c,digest:null}}function UL(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function ZL(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Pz=typeof WeakMap=="function"?WeakMap:Map;function ES(e,t,o){o=q1(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){_i||(_i=!0,rC=a),ZL(e,t)},o}function OS(e,t,o){o=q1(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;o.payload=function(){return a(c)},o.callback=function(){ZL(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(o.callback=function(){ZL(e,t),typeof a!="function"&&(X1===null?X1=new Set([this]):X1.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),o}function US(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new Pz;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(o)||(c.add(o),e=Kz.bind(null,e,t,o),t.then(e,e))}function ZS(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function WS(e,t,o,a,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=q1(-1,1),t.tag=2,W1(o,t,1))),o.lanes|=1),e)}var Vz=Se.ReactCurrentOwner,De=!1;function je(e,t,o,a){t.child=e===null?uS(t,null,o,a):p2(t,e.child,o,a)}function GS(e,t,o,a,c){o=o.render;var i=t.ref;return f2(t,c),a=VL(e,t,o,a,i,c),o=TL(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,A1(e,t,c)):(se&&o&&gL(t),t.flags|=1,je(e,t,a,c),t.child)}function XS(e,t,o,a,c){if(e===null){var i=o.type;return typeof i=="function"&&!pC(i)&&i.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=i,KS(e,t,i,a,c)):(e=Ni(o.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&c)){var r=i.memoizedProps;if(o=o.compare,o=o!==null?o:O2,o(r,a)&&e.ref===t.ref)return A1(e,t,c)}return t.flags|=1,e=Y1(i,a),e.ref=t.ref,e.return=t,t.child=e}function KS(e,t,o,a,c){if(e!==null){var i=e.memoizedProps;if(O2(i,a)&&e.ref===t.ref)if(De=!1,t.pendingProps=a=i,(e.lanes&c)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,A1(e,t,c)}return WL(e,t,o,a,c)}function QS(e,t,o){var a=t.pendingProps,c=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(g2,Xe),Xe|=o;else{if(!(o&1073741824))return e=i!==null?i.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(g2,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:o,ce(g2,Xe),Xe|=a}else i!==null?(a=i.baseLanes|o,t.memoizedState=null):a=o,ce(g2,Xe),Xe|=a;return je(e,t,c,o),t.child}function JS(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function WL(e,t,o,a,c){var i=Fe(o)?it:Ne.current;return i=s2(t,i),f2(t,c),o=VL(e,t,o,a,i,c),a=TL(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,A1(e,t,c)):(se&&a&&gL(t),t.flags|=1,je(e,t,o,c),t.child)}function YS(e,t,o,a,c){if(Fe(o)){var i=!0;Yc(t)}else i=!1;if(f2(t,c),t.stateNode===null)mi(e,t),RS(t,o,a),OL(t,o,a,c),a=!0;else if(e===null){var r=t.stateNode,h=t.memoizedProps;r.props=h;var u=r.context,x=o.contextType;typeof x=="object"&&x!==null?x=e1(x):(x=Fe(o)?it:Ne.current,x=s2(t,x));var S=o.getDerivedStateFromProps,N=typeof S=="function"||typeof r.getSnapshotBeforeUpdate=="function";N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==a||u!==x)&&BS(t,r,a,x),Z1=!1;var L=t.memoizedState;r.state=L,di(t,a,r,c),u=t.memoizedState,h!==a||L!==u||Te.current||Z1?(typeof S=="function"&&(EL(t,o,S,a),u=t.memoizedState),(h=Z1||DS(t,o,h,a,L,u,x))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),r.props=a,r.state=u,r.context=x,a=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,kS(e,t),h=t.memoizedProps,x=t.type===t.elementType?h:s1(t.type,h),r.props=x,N=t.pendingProps,L=r.context,u=o.contextType,typeof u=="object"&&u!==null?u=e1(u):(u=Fe(o)?it:Ne.current,u=s2(t,u));var A=o.getDerivedStateFromProps;(S=typeof A=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==N||L!==u)&&BS(t,r,a,u),Z1=!1,L=t.memoizedState,r.state=L,di(t,a,r,c);var H=t.memoizedState;h!==N||L!==H||Te.current||Z1?(typeof A=="function"&&(EL(t,o,A,a),H=t.memoizedState),(x=Z1||DS(t,o,x,a,L,H,u)||!1)?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,H,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,H,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=H),r.props=a,r.state=H,r.context=u,a=x):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),a=!1)}return GL(e,t,o,a,i,c)}function GL(e,t,o,a,c,i){JS(e,t);var r=(t.flags&128)!==0;if(!a&&!r)return c&&aS(t,o,!1),A1(e,t,i);a=t.stateNode,Vz.current=t;var h=r&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&r?(t.child=p2(t,e.child,null,i),t.child=p2(t,null,h,i)):je(e,t,h,i),t.memoizedState=a.state,c&&aS(t,o,!0),t.child}function eN(e){var t=e.stateNode;t.pendingContext?nS(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nS(e,t.context,!1),qL(e,t.containerInfo)}function tN(e,t,o,a,c){return u2(),LL(c),t.flags|=256,je(e,t,o,a),t.child}var XL={dehydrated:null,treeContext:null,retryLane:0};function KL(e){return{baseLanes:e,cachePool:null,transitions:null}}function nN(e,t,o){var a=t.pendingProps,c=he.current,i=!1,r=(t.flags&128)!==0,h;if((h=r)||(h=e!==null&&e.memoizedState===null?!1:(c&2)!==0),h?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ce(he,c&1),e===null)return wL(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=a.children,e=a.fallback,i?(a=t.mode,i=t.child,r={mode:"hidden",children:r},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=$i(r,a,0,null),e=ft(e,a,o,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=KL(o),t.memoizedState=XL,e):QL(t,r));if(c=e.memoizedState,c!==null&&(h=c.dehydrated,h!==null))return Tz(e,t,r,a,h,c,o);if(i){i=a.fallback,r=t.mode,c=e.child,h=c.sibling;var u={mode:"hidden",children:a.children};return!(r&1)&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=u,t.deletions=null):(a=Y1(c,u),a.subtreeFlags=c.subtreeFlags&14680064),h!==null?i=Y1(h,i):(i=ft(i,r,o,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,r=e.child.memoizedState,r=r===null?KL(o):{baseLanes:r.baseLanes|o,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~o,t.memoizedState=XL,a}return i=e.child,e=i.sibling,a=Y1(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function QL(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,o,a){return a!==null&&LL(a),p2(t,e.child,null,o),e=QL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tz(e,t,o,a,c,i,r){if(o)return t.flags&256?(t.flags&=-257,a=UL(Error(d(422))),fi(e,t,r,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,c=t.mode,a=$i({mode:"visible",children:a.children},c,0,null),i=ft(i,c,r,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&p2(t,e.child,null,r),t.child.memoizedState=KL(r),t.memoizedState=XL,i);if(!(t.mode&1))return fi(e,t,r,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var h=a.dgst;return a=h,i=Error(d(419)),a=UL(i,a,void 0),fi(e,t,r,a)}if(h=(r&e.childLanes)!==0,De||h){if(a=we,a!==null){switch(r&-r){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|r)?0:c,c!==0&&c!==i.retryLane&&(i.retryLane=c,z1(e,c),u1(a,e,c,-1))}return uC(),a=UL(Error(d(421))),fi(e,t,r,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Qz.bind(null,e),c._reactRetry=t,null):(e=i.treeContext,Ge=B1(c.nextSibling),We=t,se=!0,l1=null,e!==null&&(Je[Ye++]=N1,Je[Ye++]=$1,Je[Ye++]=rt,N1=e.id,$1=e.overflow,rt=t),t=QL(t,a.children),t.flags|=4096,t)}function oN(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),NL(e.return,t,o)}function JL(e,t,o,a,c){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=o,i.tailMode=c)}function aN(e,t,o){var a=t.pendingProps,c=a.revealOrder,i=a.tail;if(je(e,t,a.children,o),a=he.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oN(e,o,t);else if(e.tag===19)oN(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ce(he,a),!(t.mode&1))t.memoizedState=null;else switch(c){case"forwards":for(o=t.child,c=null;o!==null;)e=o.alternate,e!==null&&li(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=t.child,t.child=null):(c=o.sibling,o.sibling=null),JL(t,!1,c,o,i);break;case"backwards":for(o=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&li(e)===null){t.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}JL(t,!0,o,null,i);break;case"together":JL(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function A1(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),yt|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,o=Y1(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Y1(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Fz(e,t,o){switch(t.tag){case 3:eN(t),u2();break;case 5:MS(t);break;case 1:Fe(t.type)&&Yc(t);break;case 4:qL(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ce(ci,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ce(he,he.current&1),t.flags|=128,null):o&t.child.childLanes?nN(e,t,o):(ce(he,he.current&1),e=A1(e,t,o),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(a=(o&t.childLanes)!==0,e.flags&128){if(a)return aN(e,t,o);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ce(he,he.current),a)break;return null;case 22:case 23:return t.lanes=0,QS(e,t,o)}return A1(e,t,o)}var cN,YL,iN,rN;cN=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},YL=function(){},iN=function(e,t,o,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,st(v1.current);var i=null;switch(o){case"input":c=Nw(e,c),a=Nw(e,a),i=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),i=[];break;case"textarea":c=qw(e,c),a=qw(e,a),i=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Kc)}bw(o,a);var r;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var h=c[x];for(r in h)h.hasOwnProperty(r)&&(o||(o={}),o[r]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(g.hasOwnProperty(x)?i||(i=[]):(i=i||[]).push(x,null));for(x in a){var u=a[x];if(h=c!=null?c[x]:void 0,a.hasOwnProperty(x)&&u!==h&&(u!=null||h!=null))if(x==="style")if(h){for(r in h)!h.hasOwnProperty(r)||u&&u.hasOwnProperty(r)||(o||(o={}),o[r]="");for(r in u)u.hasOwnProperty(r)&&h[r]!==u[r]&&(o||(o={}),o[r]=u[r])}else o||(i||(i=[]),i.push(x,o)),o=u;else x==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,h=h?h.__html:void 0,u!=null&&h!==u&&(i=i||[]).push(x,u)):x==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(x,""+u):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(g.hasOwnProperty(x)?(u!=null&&x==="onScroll"&&re("scroll",e),i||h===u||(i=[])):(i=i||[]).push(x,u))}o&&(i=i||[]).push("style",o);var x=i;(t.updateQueue=x)&&(t.flags|=4)}},rN=function(e,t,o,a){o!==a&&(t.flags|=4)};function cc(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function Dz(e,t,o){var a=t.pendingProps;switch(xL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Fe(t.type)&&Jc(),ze(t),null;case 3:return a=t.stateNode,m2(),de(Te),de(Ne),jL(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,l1!==null&&(sC(l1),l1=null))),YL(e,t),ze(t),null;case 5:AL(t);var c=st(ec.current);if(o=t.type,e!==null&&t.stateNode!=null)iN(e,t,o,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(d(166));return ze(t),null}if(e=st(v1.current),oi(t)){a=t.stateNode,o=t.type;var i=t.memoizedProps;switch(a[M1]=t,a[X2]=i,e=(t.mode&1)!==0,o){case"dialog":re("cancel",a),re("close",a);break;case"iframe":case"object":case"embed":re("load",a);break;case"video":case"audio":for(c=0;c<Z2.length;c++)re(Z2[c],a);break;case"source":re("error",a);break;case"img":case"image":case"link":re("error",a),re("load",a);break;case"details":re("toggle",a);break;case"input":RC(a,i),re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},re("invalid",a);break;case"textarea":OC(a,i),re("invalid",a)}bw(o,i),c=null;for(var r in i)if(i.hasOwnProperty(r)){var h=i[r];r==="children"?typeof h=="string"?a.textContent!==h&&(i.suppressHydrationWarning!==!0&&Xc(a.textContent,h,e),c=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&Xc(a.textContent,h,e),c=["children",""+h]):g.hasOwnProperty(r)&&h!=null&&r==="onScroll"&&re("scroll",a)}switch(o){case"input":Ic(a),EC(a,i,!0);break;case"textarea":Ic(a),ZC(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Kc)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{r=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=WC(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(o,{is:a.is}):(e=r.createElement(o),o==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,o),e[M1]=t,e[X2]=a,cN(e,t,!1,!1),t.stateNode=e;e:{switch(r=jw(o,a),o){case"dialog":re("cancel",e),re("close",e),c=a;break;case"iframe":case"object":case"embed":re("load",e),c=a;break;case"video":case"audio":for(c=0;c<Z2.length;c++)re(Z2[c],e);c=a;break;case"source":re("error",e),c=a;break;case"img":case"image":case"link":re("error",e),re("load",e),c=a;break;case"details":re("toggle",e),c=a;break;case"input":RC(e,a),c=Nw(e,a),re("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),re("invalid",e);break;case"textarea":OC(e,a),c=qw(e,a),re("invalid",e);break;default:c=a}bw(o,c),h=c;for(i in h)if(h.hasOwnProperty(i)){var u=h[i];i==="style"?KC(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&GC(e,u)):i==="children"?typeof u=="string"?(o!=="textarea"||u!=="")&&S2(e,u):typeof u=="number"&&S2(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(g.hasOwnProperty(i)?u!=null&&i==="onScroll"&&re("scroll",e):u!=null&&Ae(e,i,u,r))}switch(o){case"input":Ic(e),EC(e,a,!1);break;case"textarea":Ic(e),ZC(e);break;case"option":a.value!=null&&e.setAttribute("value",""+te(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Ja(e,!!a.multiple,i,!1):a.defaultValue!=null&&Ja(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Kc)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)rN(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(o=st(ec.current),st(v1.current),oi(t)){if(a=t.stateNode,o=t.memoizedProps,a[M1]=t,(i=a.nodeValue!==o)&&(e=We,e!==null))switch(e.tag){case 3:Xc(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xc(a.nodeValue,o,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[M1]=t,t.stateNode=a}return ze(t),null;case 13:if(de(he),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ge!==null&&t.mode&1&&!(t.flags&128))sS(),u2(),t.flags|=98560,i=!1;else if(i=oi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[M1]=t}else u2(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else l1!==null&&(sC(l1),l1=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?xe===0&&(xe=3):uC())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return m2(),YL(e,t),e===null&&W2(t.stateNode.containerInfo),ze(t),null;case 10:return SL(t.type._context),ze(t),null;case 17:return Fe(t.type)&&Jc(),ze(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return ze(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)cc(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=li(e),r!==null){for(t.flags|=128,cc(i,!1),a=r.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)i=o,e=a,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ce(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>x2&&(t.flags|=128,a=!0,cc(i,!1),t.lanes=4194304)}else{if(!a)if(e=li(r),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),cc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!se)return ze(t),null}else 2*me()-i.renderingStartTime>x2&&o!==1073741824&&(t.flags|=128,a=!0,cc(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(o=i.last,o!==null?o.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,o=he.current,ce(he,a?o&1|2:o&1),t):(ze(t),null);case 22:case 23:return yC(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Xe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function Rz(e,t){switch(xL(t),t.tag){case 1:return Fe(t.type)&&Jc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return m2(),de(Te),de(Ne),jL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return AL(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));u2()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return m2(),null;case 10:return SL(t.type._context),null;case 22:case 23:return yC(),null;case 24:return null;default:return null}}var Mi=!1,qe=!1,Bz=typeof WeakSet=="function"?WeakSet:Set,b=null;function v2(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){pe(e,t,a)}else o.current=null}function eC(e,t,o){try{o()}catch(a){pe(e,t,a)}}var dN=!1;function Ez(e,t){if(yL=Tc,e=DI(),aL(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{o.nodeType,i.nodeType}catch{o=null;break e}var r=0,h=-1,u=-1,x=0,S=0,N=e,L=null;t:for(;;){for(var A;N!==o||c!==0&&N.nodeType!==3||(h=r+c),N!==i||a!==0&&N.nodeType!==3||(u=r+a),N.nodeType===3&&(r+=N.nodeValue.length),(A=N.firstChild)!==null;)L=N,N=A;for(;;){if(N===e)break t;if(L===o&&++x===c&&(h=r),L===i&&++S===a&&(u=r),(A=N.nextSibling)!==null)break;N=L,L=N.parentNode}N=A}o=h===-1||u===-1?null:{start:h,end:u}}else o=null}o=o||{start:0,end:0}}else o=null;for(uL={focusedElem:e,selectionRange:o},Tc=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var H=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var P=H.memoizedProps,Me=H.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?P:s1(t.type,P),Me);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(z){pe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return H=dN,dN=!1,H}function ic(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var i=c.destroy;c.destroy=void 0,i!==void 0&&eC(t,o,i)}c=c.next}while(c!==a)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function tC(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function lN(e){var t=e.alternate;t!==null&&(e.alternate=null,lN(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[M1],delete t[X2],delete t[mL],delete t[Cz],delete t[Iz])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sN(e){return e.tag===5||e.tag===3||e.tag===4}function hN(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sN(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nC(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Kc));else if(a!==4&&(e=e.child,e!==null))for(nC(e,t,o),e=e.sibling;e!==null;)nC(e,t,o),e=e.sibling}function oC(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(oC(e,t,o),e=e.sibling;e!==null;)oC(e,t,o),e=e.sibling}var Ce=null,h1=!1;function G1(e,t,o){for(o=o.child;o!==null;)yN(e,t,o),o=o.sibling}function yN(e,t,o){if(m1&&typeof m1.onCommitFiberUnmount=="function")try{m1.onCommitFiberUnmount(Ac,o)}catch{}switch(o.tag){case 5:qe||v2(o,t);case 6:var a=Ce,c=h1;Ce=null,G1(e,t,o),Ce=a,h1=c,Ce!==null&&(h1?(e=Ce,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ce.removeChild(o.stateNode));break;case 18:Ce!==null&&(h1?(e=Ce,o=o.stateNode,e.nodeType===8?fL(e.parentNode,o):e.nodeType===1&&fL(e,o),T2(e)):fL(Ce,o.stateNode));break;case 4:a=Ce,c=h1,Ce=o.stateNode.containerInfo,h1=!0,G1(e,t,o),Ce=a,h1=c;break;case 0:case 11:case 14:case 15:if(!qe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var i=c,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&eC(o,t,r),c=c.next}while(c!==a)}G1(e,t,o);break;case 1:if(!qe&&(v2(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(h){pe(o,t,h)}G1(e,t,o);break;case 21:G1(e,t,o);break;case 22:o.mode&1?(qe=(a=qe)||o.memoizedState!==null,G1(e,t,o),qe=a):G1(e,t,o);break;default:G1(e,t,o)}}function uN(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Bz),t.forEach(function(a){var c=Jz.bind(null,e,a);o.has(a)||(o.add(a),a.then(c,c))})}}function y1(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var i=e,r=t,h=r;e:for(;h!==null;){switch(h.tag){case 5:Ce=h.stateNode,h1=!1;break e;case 3:Ce=h.stateNode.containerInfo,h1=!0;break e;case 4:Ce=h.stateNode.containerInfo,h1=!0;break e}h=h.return}if(Ce===null)throw Error(d(160));yN(i,r,c),Ce=null,h1=!1;var u=c.alternate;u!==null&&(u.return=null),c.return=null}catch(x){pe(c,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pN(t,e),t=t.sibling}function pN(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(y1(t,e),x1(e),a&4){try{ic(3,e,e.return),vi(3,e)}catch(P){pe(e,e.return,P)}try{ic(5,e,e.return)}catch(P){pe(e,e.return,P)}}break;case 1:y1(t,e),x1(e),a&512&&o!==null&&v2(o,o.return);break;case 5:if(y1(t,e),x1(e),a&512&&o!==null&&v2(o,o.return),e.flags&32){var c=e.stateNode;try{S2(c,"")}catch(P){pe(e,e.return,P)}}if(a&4&&(c=e.stateNode,c!=null)){var i=e.memoizedProps,r=o!==null?o.memoizedProps:i,h=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&BC(c,i),jw(h,r);var x=jw(h,i);for(r=0;r<u.length;r+=2){var S=u[r],N=u[r+1];S==="style"?KC(c,N):S==="dangerouslySetInnerHTML"?GC(c,N):S==="children"?S2(c,N):Ae(c,S,N,x)}switch(h){case"input":$w(c,i);break;case"textarea":UC(c,i);break;case"select":var L=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ja(c,!!i.multiple,A,!1):L!==!!i.multiple&&(i.defaultValue!=null?Ja(c,!!i.multiple,i.defaultValue,!0):Ja(c,!!i.multiple,i.multiple?[]:"",!1))}c[X2]=i}catch(P){pe(e,e.return,P)}}break;case 6:if(y1(t,e),x1(e),a&4){if(e.stateNode===null)throw Error(d(162));c=e.stateNode,i=e.memoizedProps;try{c.nodeValue=i}catch(P){pe(e,e.return,P)}}break;case 3:if(y1(t,e),x1(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{T2(t.containerInfo)}catch(P){pe(e,e.return,P)}break;case 4:y1(t,e),x1(e);break;case 13:y1(t,e),x1(e),c=e.child,c.flags&8192&&(i=c.memoizedState!==null,c.stateNode.isHidden=i,!i||c.alternate!==null&&c.alternate.memoizedState!==null||(iC=me())),a&4&&uN(e);break;case 22:if(S=o!==null&&o.memoizedState!==null,e.mode&1?(qe=(x=qe)||S,y1(t,e),qe=x):y1(t,e),x1(e),a&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!S&&e.mode&1)for(b=e,S=e.child;S!==null;){for(N=b=S;b!==null;){switch(L=b,A=L.child,L.tag){case 0:case 11:case 14:case 15:ic(4,L,L.return);break;case 1:v2(L,L.return);var H=L.stateNode;if(typeof H.componentWillUnmount=="function"){a=L,o=L.return;try{t=a,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(P){pe(a,o,P)}}break;case 5:v2(L,L.return);break;case 22:if(L.memoizedState!==null){mN(N);continue}}A!==null?(A.return=L,b=A):mN(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{c=N.stateNode,x?(i=c.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=N.stateNode,u=N.memoizedProps.style,r=u!=null&&u.hasOwnProperty("display")?u.display:null,h.style.display=XC("display",r))}catch(P){pe(e,e.return,P)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=x?"":N.memoizedProps}catch(P){pe(e,e.return,P)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:y1(t,e),x1(e),a&4&&uN(e);break;case 21:break;default:y1(t,e),x1(e)}}function x1(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(sN(o)){var a=o;break e}o=o.return}throw Error(d(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(S2(c,""),a.flags&=-33);var i=hN(e);oC(e,i,c);break;case 3:case 4:var r=a.stateNode.containerInfo,h=hN(e);nC(e,h,r);break;default:throw Error(d(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oz(e,t,o){b=e,kN(e)}function kN(e,t,o){for(var a=(e.mode&1)!==0;b!==null;){var c=b,i=c.child;if(c.tag===22&&a){var r=c.memoizedState!==null||Mi;if(!r){var h=c.alternate,u=h!==null&&h.memoizedState!==null||qe;h=Mi;var x=qe;if(Mi=r,(qe=u)&&!x)for(b=c;b!==null;)r=b,u=r.child,r.tag===22&&r.memoizedState!==null?MN(c):u!==null?(u.return=r,b=u):MN(c);for(;i!==null;)b=i,kN(i),i=i.sibling;b=c,Mi=h,qe=x}fN(e)}else c.subtreeFlags&8772&&i!==null?(i.return=c,b=i):fN(e)}}function fN(e){for(;b!==null;){var t=b;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||vi(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!qe)if(o===null)a.componentDidMount();else{var c=t.elementType===t.type?o.memoizedProps:s1(t.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mS(t,i,a);break;case 3:var r=t.updateQueue;if(r!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}mS(t,r,o)}break;case 5:var h=t.stateNode;if(o===null&&t.flags&4){o=h;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&o.focus();break;case"img":u.src&&(o.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var S=x.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&T2(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}qe||t.flags&512&&tC(t)}catch(L){pe(t,t.return,L)}}if(t===e){b=null;break}if(o=t.sibling,o!==null){o.return=t.return,b=o;break}b=t.return}}function mN(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var o=t.sibling;if(o!==null){o.return=t.return,b=o;break}b=t.return}}function MN(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{vi(4,t)}catch(u){pe(t,o,u)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(u){pe(t,c,u)}}var i=t.return;try{tC(t)}catch(u){pe(t,i,u)}break;case 5:var r=t.return;try{tC(t)}catch(u){pe(t,r,u)}}}catch(u){pe(t,t.return,u)}if(t===e){b=null;break}var h=t.sibling;if(h!==null){h.return=t.return,b=h;break}b=t.return}}var Uz=Math.ceil,gi=Se.ReactCurrentDispatcher,aC=Se.ReactCurrentOwner,n1=Se.ReactCurrentBatchConfig,Q=0,we=null,ve=null,Ie=0,Xe=0,g2=E1(0),xe=0,rc=null,yt=0,xi=0,cC=0,dc=null,Re=null,iC=0,x2=1/0,b1=null,_i=!1,rC=null,X1=null,wi=!1,K1=null,Li=0,lc=0,dC=null,Ci=-1,Ii=0;function He(){return Q&6?me():Ci!==-1?Ci:Ci=me()}function Q1(e){return e.mode&1?Q&2&&Ie!==0?Ie&-Ie:Nz.transition!==null?(Ii===0&&(Ii=hI()),Ii):(e=ne,e!==0||(e=window.event,e=e===void 0?16:gI(e.type)),e):1}function u1(e,t,o,a){if(50<lc)throw lc=0,dC=null,Error(d(185));b2(e,o,a),(!(Q&2)||e!==we)&&(e===we&&(!(Q&2)&&(xi|=o),xe===4&&J1(e,Ie)),Be(e,a),o===1&&Q===0&&!(t.mode&1)&&(x2=me()+500,ei&&U1()))}function Be(e,t){var o=e.callbackNode;N$(e,t);var a=Hc(e,e===we?Ie:0);if(a===0)o!==null&&dI(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&dI(o),t===1)e.tag===0?Sz(gN.bind(null,e)):cS(gN.bind(null,e)),wz(function(){!(Q&6)&&U1()}),o=null;else{switch(yI(a)){case 1:o=Rw;break;case 4:o=lI;break;case 16:o=qc;break;case 536870912:o=sI;break;default:o=qc}o=NN(o,vN.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function vN(e,t){if(Ci=-1,Ii=0,Q&6)throw Error(d(327));var o=e.callbackNode;if(_2()&&e.callbackNode!==o)return null;var a=Hc(e,e===we?Ie:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Si(e,a);else{t=a;var c=Q;Q|=2;var i=_N();(we!==e||Ie!==t)&&(b1=null,x2=me()+500,pt(e,t));do try{Gz();break}catch(h){xN(e,h)}while(!0);IL(),gi.current=i,Q=c,ve!==null?t=0:(we=null,Ie=0,t=xe)}if(t!==0){if(t===2&&(c=Bw(e),c!==0&&(a=c,t=lC(e,c))),t===1)throw o=rc,pt(e,0),J1(e,a),Be(e,me()),o;if(t===6)J1(e,a);else{if(c=e.current.alternate,!(a&30)&&!Zz(c)&&(t=Si(e,a),t===2&&(i=Bw(e),i!==0&&(a=i,t=lC(e,i))),t===1))throw o=rc,pt(e,0),J1(e,a),Be(e,me()),o;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(d(345));case 2:kt(e,Re,b1);break;case 3:if(J1(e,a),(a&130023424)===a&&(t=iC+500-me(),10<t)){if(Hc(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){He(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=kL(kt.bind(null,e,Re,b1),t);break}kt(e,Re,b1);break;case 4:if(J1(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var r=31-r1(a);i=1<<r,r=t[r],r>c&&(c=r),a&=~i}if(a=c,a=me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Uz(a/1960))-a,10<a){e.timeoutHandle=kL(kt.bind(null,e,Re,b1),a);break}kt(e,Re,b1);break;case 5:kt(e,Re,b1);break;default:throw Error(d(329))}}}return Be(e,me()),e.callbackNode===o?vN.bind(null,e):null}function lC(e,t){var o=dc;return e.current.memoizedState.isDehydrated&&(pt(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Re,Re=o,t!==null&&sC(t)),e}function sC(e){Re===null?Re=e:Re.push.apply(Re,e)}function Zz(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],i=c.getSnapshot;c=c.value;try{if(!d1(i(),c))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function J1(e,t){for(t&=~cC,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-r1(t),a=1<<o;e[o]=-1,t&=~a}}function gN(e){if(Q&6)throw Error(d(327));_2();var t=Hc(e,0);if(!(t&1))return Be(e,me()),null;var o=Si(e,t);if(e.tag!==0&&o===2){var a=Bw(e);a!==0&&(t=a,o=lC(e,a))}if(o===1)throw o=rc,pt(e,0),J1(e,t),Be(e,me()),o;if(o===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,Re,b1),Be(e,me()),null}function hC(e,t){var o=Q;Q|=1;try{return e(t)}finally{Q=o,Q===0&&(x2=me()+500,ei&&U1())}}function ut(e){K1!==null&&K1.tag===0&&!(Q&6)&&_2();var t=Q;Q|=1;var o=n1.transition,a=ne;try{if(n1.transition=null,ne=1,e)return e()}finally{ne=a,n1.transition=o,Q=t,!(Q&6)&&U1()}}function yC(){Xe=g2.current,de(g2)}function pt(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,_z(o)),ve!==null)for(o=ve.return;o!==null;){var a=o;switch(xL(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Jc();break;case 3:m2(),de(Te),de(Ne),jL();break;case 5:AL(a);break;case 4:m2();break;case 13:de(he);break;case 19:de(he);break;case 10:SL(a.type._context);break;case 22:case 23:yC()}o=o.return}if(we=e,ve=e=Y1(e.current,null),Ie=Xe=t,xe=0,rc=null,cC=xi=yt=0,Re=dc=null,lt!==null){for(t=0;t<lt.length;t++)if(o=lt[t],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,i=o.pending;if(i!==null){var r=i.next;i.next=c,a.next=r}o.pending=a}lt=null}return e}function xN(e,t){do{var o=ve;try{if(IL(),si.current=pi,hi){for(var a=ye.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}hi=!1}if(ht=0,_e=ge=ye=null,tc=!1,nc=0,aC.current=null,o===null||o.return===null){xe=1,rc=t,ve=null;break}e:{var i=e,r=o.return,h=o,u=t;if(t=Ie,h.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var x=u,S=h,N=S.tag;if(!(S.mode&1)&&(N===0||N===11||N===15)){var L=S.alternate;L?(S.updateQueue=L.updateQueue,S.memoizedState=L.memoizedState,S.lanes=L.lanes):(S.updateQueue=null,S.memoizedState=null)}var A=ZS(r);if(A!==null){A.flags&=-257,WS(A,r,h,i,t),A.mode&1&&US(i,x,t),t=A,u=x;var H=t.updateQueue;if(H===null){var P=new Set;P.add(u),t.updateQueue=P}else H.add(u);break e}else{if(!(t&1)){US(i,x,t),uC();break e}u=Error(d(426))}}else if(se&&h.mode&1){var Me=ZS(r);if(Me!==null){!(Me.flags&65536)&&(Me.flags|=256),WS(Me,r,h,i,t),LL(M2(u,h));break e}}i=u=M2(u,h),xe!==4&&(xe=2),dc===null?dc=[i]:dc.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=ES(i,u,t);fS(i,m);break e;case 1:h=u;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(X1===null||!X1.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var z=OS(i,h,t);fS(i,z);break e}}i=i.return}while(i!==null)}LN(o)}catch(V){t=V,ve===o&&o!==null&&(ve=o=o.return);continue}break}while(!0)}function _N(){var e=gi.current;return gi.current=pi,e===null?pi:e}function uC(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||!(yt&268435455)&&!(xi&268435455)||J1(we,Ie)}function Si(e,t){var o=Q;Q|=2;var a=_N();(we!==e||Ie!==t)&&(b1=null,pt(e,t));do try{Wz();break}catch(c){xN(e,c)}while(!0);if(IL(),Q=o,gi.current=a,ve!==null)throw Error(d(261));return we=null,Ie=0,xe}function Wz(){for(;ve!==null;)wN(ve)}function Gz(){for(;ve!==null&&!v$();)wN(ve)}function wN(e){var t=SN(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?LN(e):ve=t,aC.current=null}function LN(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=Rz(o,t),o!==null){o.flags&=32767,ve=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}else if(o=Dz(o,t,Xe),o!==null){ve=o;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);xe===0&&(xe=5)}function kt(e,t,o){var a=ne,c=n1.transition;try{n1.transition=null,ne=1,Xz(e,t,o,a)}finally{n1.transition=c,ne=a}return null}function Xz(e,t,o,a){do _2();while(K1!==null);if(Q&6)throw Error(d(327));o=e.finishedWork;var c=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var i=o.lanes|o.childLanes;if($$(e,i),e===we&&(ve=we=null,Ie=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||wi||(wi=!0,NN(qc,function(){return _2(),null})),i=(o.flags&15990)!==0,o.subtreeFlags&15990||i){i=n1.transition,n1.transition=null;var r=ne;ne=1;var h=Q;Q|=4,aC.current=null,Ez(e,o),pN(o,e),kz(uL),Tc=!!yL,uL=yL=null,e.current=o,Oz(o),g$(),Q=h,ne=r,n1.transition=i}else e.current=o;if(wi&&(wi=!1,K1=e,Li=c),i=e.pendingLanes,i===0&&(X1=null),w$(o.stateNode),Be(e,me()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)c=t[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(_i)throw _i=!1,e=rC,rC=null,e;return Li&1&&e.tag!==0&&_2(),i=e.pendingLanes,i&1?e===dC?lc++:(lc=0,dC=e):lc=0,U1(),null}function _2(){if(K1!==null){var e=yI(Li),t=n1.transition,o=ne;try{if(n1.transition=null,ne=16>e?16:e,K1===null)var a=!1;else{if(e=K1,K1=null,Li=0,Q&6)throw Error(d(331));var c=Q;for(Q|=4,b=e.current;b!==null;){var i=b,r=i.child;if(b.flags&16){var h=i.deletions;if(h!==null){for(var u=0;u<h.length;u++){var x=h[u];for(b=x;b!==null;){var S=b;switch(S.tag){case 0:case 11:case 15:ic(8,S,i)}var N=S.child;if(N!==null)N.return=S,b=N;else for(;b!==null;){S=b;var L=S.sibling,A=S.return;if(lN(S),S===x){b=null;break}if(L!==null){L.return=A,b=L;break}b=A}}}var H=i.alternate;if(H!==null){var P=H.child;if(P!==null){H.child=null;do{var Me=P.sibling;P.sibling=null,P=Me}while(P!==null)}}b=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,b=r;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ic(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,b=m;break e}b=i.return}}var p=e.current;for(b=p;b!==null;){r=b;var v=r.child;if(r.subtreeFlags&2064&&v!==null)v.return=r,b=v;else e:for(r=p;b!==null;){if(h=b,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:vi(9,h)}}catch(V){pe(h,h.return,V)}if(h===r){b=null;break e}var z=h.sibling;if(z!==null){z.return=h.return,b=z;break e}b=h.return}}if(Q=c,U1(),m1&&typeof m1.onPostCommitFiberRoot=="function")try{m1.onPostCommitFiberRoot(Ac,e)}catch{}a=!0}return a}finally{ne=o,n1.transition=t}}return!1}function CN(e,t,o){t=M2(o,t),t=ES(e,t,1),e=W1(e,t,1),t=He(),e!==null&&(b2(e,1,t),Be(e,t))}function pe(e,t,o){if(e.tag===3)CN(e,e,o);else for(;t!==null;){if(t.tag===3){CN(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(X1===null||!X1.has(a))){e=M2(o,e),e=OS(t,e,1),t=W1(t,e,1),e=He(),t!==null&&(b2(t,1,e),Be(t,e));break}}t=t.return}}function Kz(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&o,we===e&&(Ie&o)===o&&(xe===4||xe===3&&(Ie&130023424)===Ie&&500>me()-iC?pt(e,0):cC|=o),Be(e,t)}function IN(e,t){t===0&&(e.mode&1?(t=jc,jc<<=1,!(jc&130023424)&&(jc=4194304)):t=1);var o=He();e=z1(e,t),e!==null&&(b2(e,t,o),Be(e,o))}function Qz(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),IN(e,o)}function Jz(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(d(314))}a!==null&&a.delete(t),IN(e,o)}var SN;SN=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)De=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return De=!1,Fz(e,t,o);De=!!(e.flags&131072)}else De=!1,se&&t.flags&1048576&&iS(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;mi(e,t),e=t.pendingProps;var c=s2(t,Ne.current);f2(t,o),c=VL(null,t,a,e,c,o);var i=TL();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(a)?(i=!0,Yc(t)):i=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,zL(t),c.updater=ki,t.stateNode=c,c._reactInternals=t,OL(t,a,e,o),t=GL(null,t,a,!0,i,o)):(t.tag=0,se&&i&&gL(t),je(null,t,c,o),t=t.child),t;case 16:a=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=eq(a),e=s1(a,e),c){case 0:t=WL(null,t,a,e,o);break e;case 1:t=YS(null,t,a,e,o);break e;case 11:t=GS(null,t,a,e,o);break e;case 14:t=XS(null,t,a,s1(a.type,e),o);break e}throw Error(d(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),WL(e,t,a,c,o);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),YS(e,t,a,c,o);case 3:e:{if(eN(t),e===null)throw Error(d(387));a=t.pendingProps,i=t.memoizedState,c=i.element,kS(e,t),di(t,a,null,o);var r=t.memoizedState;if(a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){c=M2(Error(d(423)),t),t=tN(e,t,a,o,c);break e}else if(a!==c){c=M2(Error(d(424)),t),t=tN(e,t,a,o,c);break e}else for(Ge=B1(t.stateNode.containerInfo.firstChild),We=t,se=!0,l1=null,o=uS(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(u2(),a===c){t=A1(e,t,o);break e}je(e,t,a,o)}t=t.child}return t;case 5:return MS(t),e===null&&wL(t),a=t.type,c=t.pendingProps,i=e!==null?e.memoizedProps:null,r=c.children,pL(a,c)?r=null:i!==null&&pL(a,i)&&(t.flags|=32),JS(e,t),je(e,t,r,o),t.child;case 6:return e===null&&wL(t),null;case 13:return nN(e,t,o);case 4:return qL(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=p2(t,null,a,o):je(e,t,a,o),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),GS(e,t,a,c,o);case 7:return je(e,t,t.pendingProps,o),t.child;case 8:return je(e,t,t.pendingProps.children,o),t.child;case 12:return je(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,i=t.memoizedProps,r=c.value,ce(ci,a._currentValue),a._currentValue=r,i!==null)if(d1(i.value,r)){if(i.children===c.children&&!Te.current){t=A1(e,t,o);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var h=i.dependencies;if(h!==null){r=i.child;for(var u=h.firstContext;u!==null;){if(u.context===a){if(i.tag===1){u=q1(-1,o&-o),u.tag=2;var x=i.updateQueue;if(x!==null){x=x.shared;var S=x.pending;S===null?u.next=u:(u.next=S.next,S.next=u),x.pending=u}}i.lanes|=o,u=i.alternate,u!==null&&(u.lanes|=o),NL(i.return,o,t),h.lanes|=o;break}u=u.next}}else if(i.tag===10)r=i.type===t.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(d(341));r.lanes|=o,h=r.alternate,h!==null&&(h.lanes|=o),NL(r,o,t),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}je(e,t,c.children,o),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,f2(t,o),c=e1(c),a=a(c),t.flags|=1,je(e,t,a,o),t.child;case 14:return a=t.type,c=s1(a,t.pendingProps),c=s1(a.type,c),XS(e,t,a,c,o);case 15:return KS(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:s1(a,c),mi(e,t),t.tag=1,Fe(a)?(e=!0,Yc(t)):e=!1,f2(t,o),RS(t,a,c),OL(t,a,c,o),GL(null,t,a,!0,e,o);case 19:return aN(e,t,o);case 22:return QS(e,t,o)}throw Error(d(156,t.tag))};function NN(e,t){return rI(e,t)}function Yz(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function o1(e,t,o,a){return new Yz(e,t,o,a)}function pC(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eq(e){if(typeof e=="function")return pC(e)?1:0;if(e!=null){if(e=e.$$typeof,e===k1)return 11;if(e===f1)return 14}return 2}function Y1(e,t){var o=e.alternate;return o===null?(o=o1(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Ni(e,t,o,a,c,i){var r=2;if(a=e,typeof e=="function")pC(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Pe:return ft(o.children,c,i,t);case Qe:r=8,c|=8;break;case H1:return e=o1(12,o,t,c|2),e.elementType=H1,e.lanes=i,e;case Oe:return e=o1(13,o,t,c),e.elementType=Oe,e.lanes=i,e;case i1:return e=o1(19,o,t,c),e.elementType=i1,e.lanes=i,e;case ue:return $i(o,c,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C1:r=10;break e;case ot:r=9;break e;case k1:r=11;break e;case f1:r=14;break e;case Ve:r=16,a=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=o1(r,o,t,c),t.elementType=e,t.type=a,t.lanes=i,t}function ft(e,t,o,a){return e=o1(7,e,a,t),e.lanes=o,e}function $i(e,t,o,a){return e=o1(22,e,a,t),e.elementType=ue,e.lanes=o,e.stateNode={isHidden:!1},e}function kC(e,t,o){return e=o1(6,e,null,t),e.lanes=o,e}function fC(e,t,o){return t=o1(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tq(e,t,o,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ew(0),this.expirationTimes=Ew(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ew(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function mC(e,t,o,a,c,i,r,h,u){return e=new tq(e,t,o,h,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=o1(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zL(i),e}function nq(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:be,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function $N(e){if(!e)return O1;e=e._reactInternals;e:{if(at(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var o=e.type;if(Fe(o))return oS(e,o,t)}return t}function zN(e,t,o,a,c,i,r,h,u){return e=mC(o,a,!0,e,c,i,r,h,u),e.context=$N(null),o=e.current,a=He(),c=Q1(o),i=q1(a,c),i.callback=t??null,W1(o,i,c),e.current.lanes=c,b2(e,c,a),Be(e,a),e}function zi(e,t,o,a){var c=t.current,i=He(),r=Q1(c);return o=$N(o),t.context===null?t.context=o:t.pendingContext=o,t=q1(i,r),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=W1(c,t,r),e!==null&&(u1(e,c,r,i),ri(e,c,r)),r}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qN(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function MC(e,t){qN(e,t),(e=e.alternate)&&qN(e,t)}function oq(){return null}var AN=typeof reportError=="function"?reportError:function(e){console.error(e)};function vC(e){this._internalRoot=e}Ai.prototype.render=vC.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));zi(e,t,null,null)},Ai.prototype.unmount=vC.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ut(function(){zi(null,e,null,null)}),t[I1]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=kI();e={blockedOn:null,target:e,priority:t};for(var o=0;o<F1.length&&t!==0&&t<F1[o].priority;o++);F1.splice(o,0,e),o===0&&MI(e)}};function gC(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bN(){}function aq(e,t,o,a,c){if(c){if(typeof a=="function"){var i=a;a=function(){var x=qi(r);i.call(x)}}var r=zN(t,a,e,0,null,!1,!1,"",bN);return e._reactRootContainer=r,e[I1]=r.current,W2(e.nodeType===8?e.parentNode:e),ut(),r}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var h=a;a=function(){var x=qi(u);h.call(x)}}var u=mC(e,0,!1,null,null,!1,!1,"",bN);return e._reactRootContainer=u,e[I1]=u.current,W2(e.nodeType===8?e.parentNode:e),ut(function(){zi(t,u,o,a)}),u}function ji(e,t,o,a,c){var i=o._reactRootContainer;if(i){var r=i;if(typeof c=="function"){var h=c;c=function(){var u=qi(r);h.call(u)}}zi(t,r,e,c)}else r=aq(o,t,e,c,a);return qi(r)}uI=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=A2(t.pendingLanes);o!==0&&(Ow(t,o|1),Be(t,me()),!(Q&6)&&(x2=me()+500,U1()))}break;case 13:ut(function(){var a=z1(e,1);if(a!==null){var c=He();u1(a,e,1,c)}}),MC(e,1)}},Uw=function(e){if(e.tag===13){var t=z1(e,134217728);if(t!==null){var o=He();u1(t,e,134217728,o)}MC(e,134217728)}},pI=function(e){if(e.tag===13){var t=Q1(e),o=z1(e,t);if(o!==null){var a=He();u1(o,e,t,a)}MC(e,t)}},kI=function(){return ne},fI=function(e,t){var o=ne;try{return ne=e,t()}finally{ne=o}},Vw=function(e,t,o){switch(t){case"input":if($w(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var c=Qc(a);if(!c)throw Error(d(90));DC(a),$w(a,c)}}}break;case"textarea":UC(e,o);break;case"select":t=o.value,t!=null&&Ja(e,!!o.multiple,t,!1)}},eI=hC,tI=ut;var cq={usingClientEntryPoint:!1,Events:[K2,d2,Qc,JC,YC,hC]},sc={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iq={bundleType:sc.bundleType,version:sc.version,rendererPackageName:sc.rendererPackageName,rendererConfig:sc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cI(e),e===null?null:e.stateNode},findFiberByHostInstance:sc.findFiberByHostInstance||oq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{Ac=Hi.inject(iq),m1=Hi}catch{}}return Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cq,Ee.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gC(t))throw Error(d(200));return nq(e,t,null,o)},Ee.createRoot=function(e,t){if(!gC(e))throw Error(d(299));var o=!1,a="",c=AN;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=mC(e,1,!1,null,null,o,!1,a,c),e[I1]=t.current,W2(e.nodeType===8?e.parentNode:e),new vC(t)},Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=cI(t),e=e===null?null:e.stateNode,e},Ee.flushSync=function(e){return ut(e)},Ee.hydrate=function(e,t,o){if(!bi(t))throw Error(d(200));return ji(null,e,t,!0,o)},Ee.hydrateRoot=function(e,t,o){if(!gC(e))throw Error(d(405));var a=o!=null&&o.hydratedSources||null,c=!1,i="",r=AN;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(r=o.onRecoverableError)),t=zN(t,null,e,1,o??null,c,!1,i,r),e[I1]=t.current,W2(e),a)for(e=0;e<a.length;e++)o=a[e],c=o._getVersion,c=c(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,c]:t.mutableSourceEagerHydrationData.push(o,c);return new Ai(t)},Ee.render=function(e,t,o){if(!bi(t))throw Error(d(200));return ji(null,e,t,!1,o)},Ee.unmountComponentAtNode=function(e){if(!bi(e))throw Error(d(40));return e._reactRootContainer?(ut(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[I1]=null})}),!0):!1},Ee.unstable_batchedUpdates=hC,Ee.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!bi(o))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return ji(e,t,o,!1,a)},Ee.version="18.3.1-next-f1338f8080-20240426",Ee}var RN;function fq(){if(RN)return wC.exports;RN=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),wC.exports=kq(),wC.exports}var BN;function mq(){if(BN)return Pi;BN=1;var l=fq();return Pi.createRoot=l.createRoot,Pi.hydrateRoot=l.hydrateRoot,Pi}var Mq=mq();const t$=ke.createContext(),vq=({children:l})=>{const[s,d]=ke.useState("en");return y.jsx(t$.Provider,{value:{language:s,setLanguage:d},children:l})},nt=()=>ke.useContext(t$);var IC,EN;function gq(){if(EN)return IC;EN=1;var l=typeof Element<"u",s=typeof Map=="function",d=typeof Set=="function",M=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function g(f,C){if(f===C)return!0;if(f&&C&&typeof f=="object"&&typeof C=="object"){if(f.constructor!==C.constructor)return!1;var w,_,$;if(Array.isArray(f)){if(w=f.length,w!=C.length)return!1;for(_=w;_--!==0;)if(!g(f[_],C[_]))return!1;return!0}var T;if(s&&f instanceof Map&&C instanceof Map){if(f.size!==C.size)return!1;for(T=f.entries();!(_=T.next()).done;)if(!C.has(_.value[0]))return!1;for(T=f.entries();!(_=T.next()).done;)if(!g(_.value[1],C.get(_.value[0])))return!1;return!0}if(d&&f instanceof Set&&C instanceof Set){if(f.size!==C.size)return!1;for(T=f.entries();!(_=T.next()).done;)if(!C.has(_.value[0]))return!1;return!0}if(M&&ArrayBuffer.isView(f)&&ArrayBuffer.isView(C)){if(w=f.length,w!=C.length)return!1;for(_=w;_--!==0;)if(f[_]!==C[_])return!1;return!0}if(f.constructor===RegExp)return f.source===C.source&&f.flags===C.flags;if(f.valueOf!==Object.prototype.valueOf&&typeof f.valueOf=="function"&&typeof C.valueOf=="function")return f.valueOf()===C.valueOf();if(f.toString!==Object.prototype.toString&&typeof f.toString=="function"&&typeof C.toString=="function")return f.toString()===C.toString();if($=Object.keys(f),w=$.length,w!==Object.keys(C).length)return!1;for(_=w;_--!==0;)if(!Object.prototype.hasOwnProperty.call(C,$[_]))return!1;if(l&&f instanceof Element)return!1;for(_=w;_--!==0;)if(!(($[_]==="_owner"||$[_]==="__v"||$[_]==="__o")&&f.$$typeof)&&!g(f[$[_]],C[$[_]]))return!1;return!0}return f!==f&&C!==C}return IC=function(C,w){try{return g(C,w)}catch(_){if((_.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw _}},IC}var xq=gq();const _q=Sw(xq);var SC,ON;function wq(){if(ON)return SC;ON=1;var l=function(s,d,M,g,f,C,w,_){if(!s){var $;if(d===void 0)$=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[M,g,f,C,w,_],E=0;$=new Error(d.replace(/%s/g,function(){return T[E++]})),$.name="Invariant Violation"}throw $.framesToPop=1,$}};return SC=l,SC}var Lq=wq();const UN=Sw(Lq);var NC,ZN;function Cq(){return ZN||(ZN=1,NC=function(s,d,M,g){var f=M?M.call(g,s,d):void 0;if(f!==void 0)return!!f;if(s===d)return!0;if(typeof s!="object"||!s||typeof d!="object"||!d)return!1;var C=Object.keys(s),w=Object.keys(d);if(C.length!==w.length)return!1;for(var _=Object.prototype.hasOwnProperty.bind(d),$=0;$<C.length;$++){var T=C[$];if(!_(T))return!1;var E=s[T],Z=d[T];if(f=M?M.call(g,E,Z,T):void 0,f===!1||f===void 0&&E!==Z)return!1}return!0}),NC}var Iq=Cq();const Sq=Sw(Iq);var n$=(l=>(l.BASE="base",l.BODY="body",l.HEAD="head",l.HTML="html",l.LINK="link",l.META="meta",l.NOSCRIPT="noscript",l.SCRIPT="script",l.STYLE="style",l.TITLE="title",l.FRAGMENT="Symbol(react.fragment)",l))(n$||{}),$C={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},WN=Object.values(n$),TC={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Nq=Object.entries(TC).reduce((l,[s,d])=>(l[d]=s,l),{}),p1="data-rh",L2={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},C2=(l,s)=>{for(let d=l.length-1;d>=0;d-=1){const M=l[d];if(Object.prototype.hasOwnProperty.call(M,s))return M[s]}return null},$q=l=>{let s=C2(l,"title");const d=C2(l,L2.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),d&&s)return d.replace(/%s/g,()=>s);const M=C2(l,L2.DEFAULT_TITLE);return s||M||void 0},zq=l=>C2(l,L2.ON_CHANGE_CLIENT_STATE)||(()=>{}),zC=(l,s)=>s.filter(d=>typeof d[l]<"u").map(d=>d[l]).reduce((d,M)=>({...d,...M}),{}),qq=(l,s)=>s.filter(d=>typeof d.base<"u").map(d=>d.base).reverse().reduce((d,M)=>{if(!d.length){const g=Object.keys(M);for(let f=0;f<g.length;f+=1){const w=g[f].toLowerCase();if(l.indexOf(w)!==-1&&M[w])return d.concat(M)}}return d},[]),Aq=l=>console&&typeof console.warn=="function"&&console.warn(l),yc=(l,s,d)=>{const M={};return d.filter(g=>Array.isArray(g[l])?!0:(typeof g[l]<"u"&&Aq(`Helmet: ${l} should be of type "Array". Instead found type "${typeof g[l]}"`),!1)).map(g=>g[l]).reverse().reduce((g,f)=>{const C={};f.filter(_=>{let $;const T=Object.keys(_);for(let Z=0;Z<T.length;Z+=1){const G=T[Z],oe=G.toLowerCase();s.indexOf(oe)!==-1&&!($==="rel"&&_[$].toLowerCase()==="canonical")&&!(oe==="rel"&&_[oe].toLowerCase()==="stylesheet")&&($=oe),s.indexOf(G)!==-1&&(G==="innerHTML"||G==="cssText"||G==="itemprop")&&($=G)}if(!$||!_[$])return!1;const E=_[$].toLowerCase();return M[$]||(M[$]={}),C[$]||(C[$]={}),M[$][E]?!1:(C[$][E]=!0,!0)}).reverse().forEach(_=>g.push(_));const w=Object.keys(C);for(let _=0;_<w.length;_+=1){const $=w[_],T={...M[$],...C[$]};M[$]=T}return g},[]).reverse()},bq=(l,s)=>{if(Array.isArray(l)&&l.length){for(let d=0;d<l.length;d+=1)if(l[d][s])return!0}return!1},jq=l=>({baseTag:qq(["href"],l),bodyAttributes:zC("bodyAttributes",l),defer:C2(l,L2.DEFER),encode:C2(l,L2.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:zC("htmlAttributes",l),linkTags:yc("link",["rel","href"],l),metaTags:yc("meta",["name","charset","http-equiv","property","itemprop"],l),noscriptTags:yc("noscript",["innerHTML"],l),onChangeClientState:zq(l),scriptTags:yc("script",["src","innerHTML"],l),styleTags:yc("style",["cssText"],l),title:$q(l),titleAttributes:zC("titleAttributes",l),prioritizeSeoTags:bq(l,L2.PRIORITIZE_SEO_TAGS)}),o$=l=>Array.isArray(l)?l.join(""):l,Hq=(l,s)=>{const d=Object.keys(l);for(let M=0;M<d.length;M+=1)if(s[d[M]]&&s[d[M]].includes(l[d[M]]))return!0;return!1},qC=(l,s)=>Array.isArray(l)?l.reduce((d,M)=>(Hq(M,s)?d.priority.push(M):d.default.push(M),d),{priority:[],default:[]}):{default:l,priority:[]},GN=(l,s)=>({...l,[s]:void 0}),Pq=["noscript","script","style"],bC=(l,s=!0)=>s===!1?String(l):String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),a$=l=>Object.keys(l).reduce((s,d)=>{const M=typeof l[d]<"u"?`${d}="${l[d]}"`:`${d}`;return s?`${s} ${M}`:M},""),Vq=(l,s,d,M)=>{const g=a$(d),f=o$(s);return g?`<${l} ${p1}="true" ${g}>${bC(f,M)}</${l}>`:`<${l} ${p1}="true">${bC(f,M)}</${l}>`},Tq=(l,s,d=!0)=>s.reduce((M,g)=>{const f=g,C=Object.keys(f).filter($=>!($==="innerHTML"||$==="cssText")).reduce(($,T)=>{const E=typeof f[T]>"u"?T:`${T}="${bC(f[T],d)}"`;return $?`${$} ${E}`:E},""),w=f.innerHTML||f.cssText||"",_=Pq.indexOf(l)===-1;return`${M}<${l} ${p1}="true" ${C}${_?"/>":`>${w}</${l}>`}`},""),c$=(l,s={})=>Object.keys(l).reduce((d,M)=>{const g=TC[M];return d[g||M]=l[M],d},s),Fq=(l,s,d)=>{const M={key:s,[p1]:!0},g=c$(d,M);return[tt.createElement("title",g,s)]},Ti=(l,s)=>s.map((d,M)=>{const g={key:M,[p1]:!0};return Object.keys(d).forEach(f=>{const w=TC[f]||f;if(w==="innerHTML"||w==="cssText"){const _=d.innerHTML||d.cssText;g.dangerouslySetInnerHTML={__html:_}}else g[w]=d[f]}),tt.createElement(l,g)}),a1=(l,s,d=!0)=>{switch(l){case"title":return{toComponent:()=>Fq(l,s.title,s.titleAttributes),toString:()=>Vq(l,s.title,s.titleAttributes,d)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>c$(s),toString:()=>a$(s)};default:return{toComponent:()=>Ti(l,s),toString:()=>Tq(l,s,d)}}},Dq=({metaTags:l,linkTags:s,scriptTags:d,encode:M})=>{const g=qC(l,$C.meta),f=qC(s,$C.link),C=qC(d,$C.script);return{priorityMethods:{toComponent:()=>[...Ti("meta",g.priority),...Ti("link",f.priority),...Ti("script",C.priority)],toString:()=>`${a1("meta",g.priority,M)} ${a1("link",f.priority,M)} ${a1("script",C.priority,M)}`},metaTags:g.default,linkTags:f.default,scriptTags:C.default}},Rq=l=>{const{baseTag:s,bodyAttributes:d,encode:M=!0,htmlAttributes:g,noscriptTags:f,styleTags:C,title:w="",titleAttributes:_,prioritizeSeoTags:$}=l;let{linkTags:T,metaTags:E,scriptTags:Z}=l,G={toComponent:()=>{},toString:()=>""};return $&&({priorityMethods:G,linkTags:T,metaTags:E,scriptTags:Z}=Dq(l)),{priority:G,base:a1("base",s,M),bodyAttributes:a1("bodyAttributes",d,M),htmlAttributes:a1("htmlAttributes",g,M),link:a1("link",T,M),meta:a1("meta",E,M),noscript:a1("noscript",f,M),script:a1("script",Z,M),style:a1("style",C,M),title:a1("title",{title:w,titleAttributes:_},M)}},jC=Rq,Vi=[],i$=!!(typeof window<"u"&&window.document&&window.document.createElement),HC=class{constructor(l,s){j1(this,"instances",[]);j1(this,"canUseDOM",i$);j1(this,"context");j1(this,"value",{setHelmet:l=>{this.context.helmet=l},helmetInstances:{get:()=>this.canUseDOM?Vi:this.instances,add:l=>{(this.canUseDOM?Vi:this.instances).push(l)},remove:l=>{const s=(this.canUseDOM?Vi:this.instances).indexOf(l);(this.canUseDOM?Vi:this.instances).splice(s,1)}}});this.context=l,this.canUseDOM=s||!1,s||(l.helmet=jC({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Bq={},r$=tt.createContext(Bq),Qa,d$=(Qa=class extends ke.Component{constructor(d){super(d);j1(this,"helmetData");this.helmetData=new HC(this.props.context||{},Qa.canUseDOM)}render(){return tt.createElement(r$.Provider,{value:this.helmetData.value},this.props.children)}},j1(Qa,"canUseDOM",i$),Qa),w2=(l,s)=>{const d=document.head||document.querySelector("head"),M=d.querySelectorAll(`${l}[${p1}]`),g=[].slice.call(M),f=[];let C;return s&&s.length&&s.forEach(w=>{const _=document.createElement(l);for(const $ in w)if(Object.prototype.hasOwnProperty.call(w,$))if($==="innerHTML")_.innerHTML=w.innerHTML;else if($==="cssText")_.styleSheet?_.styleSheet.cssText=w.cssText:_.appendChild(document.createTextNode(w.cssText));else{const T=$,E=typeof w[T]>"u"?"":w[T];_.setAttribute($,E)}_.setAttribute(p1,"true"),g.some(($,T)=>(C=T,_.isEqualNode($)))?g.splice(C,1):f.push(_)}),g.forEach(w=>{var _;return(_=w.parentNode)==null?void 0:_.removeChild(w)}),f.forEach(w=>d.appendChild(w)),{oldTags:g,newTags:f}},PC=(l,s)=>{const d=document.getElementsByTagName(l)[0];if(!d)return;const M=d.getAttribute(p1),g=M?M.split(","):[],f=[...g],C=Object.keys(s);for(const w of C){const _=s[w]||"";d.getAttribute(w)!==_&&d.setAttribute(w,_),g.indexOf(w)===-1&&g.push(w);const $=f.indexOf(w);$!==-1&&f.splice($,1)}for(let w=f.length-1;w>=0;w-=1)d.removeAttribute(f[w]);g.length===f.length?d.removeAttribute(p1):d.getAttribute(p1)!==C.join(",")&&d.setAttribute(p1,C.join(","))},Eq=(l,s)=>{typeof l<"u"&&document.title!==l&&(document.title=o$(l)),PC("title",s)},XN=(l,s)=>{const{baseTag:d,bodyAttributes:M,htmlAttributes:g,linkTags:f,metaTags:C,noscriptTags:w,onChangeClientState:_,scriptTags:$,styleTags:T,title:E,titleAttributes:Z}=l;PC("body",M),PC("html",g),Eq(E,Z);const G={baseTag:w2("base",d),linkTags:w2("link",f),metaTags:w2("meta",C),noscriptTags:w2("noscript",w),scriptTags:w2("script",$),styleTags:w2("style",T)},oe={},K={};Object.keys(G).forEach(O=>{const{newTags:ie,oldTags:fe}=G[O];ie.length&&(oe[O]=ie),fe.length&&(K[O]=G[O].oldTags)}),s&&s(),_(l,oe,K)},uc=null,Oq=l=>{uc&&cancelAnimationFrame(uc),l.defer?uc=requestAnimationFrame(()=>{XN(l,()=>{uc=null})}):(XN(l),uc=null)},Uq=Oq,KN=class extends ke.Component{constructor(){super(...arguments);j1(this,"rendered",!1)}shouldComponentUpdate(s){return!Sq(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:d}=this.props.context;let M=null;const g=jq(s.get().map(f=>{const C={...f.props};return delete C.context,C}));d$.canUseDOM?Uq(g):jC&&(M=jC(g)),d(M)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},AC,FC=(AC=class extends ke.Component{shouldComponentUpdate(l){return!_q(GN(this.props,"helmetData"),GN(l,"helmetData"))}mapNestedChildrenToProps(l,s){if(!s)return null;switch(l.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${l.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(l,s,d,M){return{...s,[l.type]:[...s[l.type]||[],{...d,...this.mapNestedChildrenToProps(l,M)}]}}mapObjectTypeChildren(l,s,d,M){switch(l.type){case"title":return{...s,[l.type]:M,titleAttributes:{...d}};case"body":return{...s,bodyAttributes:{...d}};case"html":return{...s,htmlAttributes:{...d}};default:return{...s,[l.type]:{...d}}}}mapArrayTypeChildrenToProps(l,s){let d={...s};return Object.keys(l).forEach(M=>{d={...d,[M]:l[M]}}),d}warnOnInvalidChildren(l,s){return UN(WN.some(d=>l.type===d),typeof l.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${WN.join(", ")} are allowed. Helmet does not support rendering <${l.type}> elements. Refer to our API for more information.`),UN(!s||typeof s=="string"||Array.isArray(s)&&!s.some(d=>typeof d!="string"),`Helmet expects a string as a child of <${l.type}>. Did you forget to wrap your children in braces? ( <${l.type}>{\`\`}</${l.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(l,s){let d={};return tt.Children.forEach(l,M=>{if(!M||!M.props)return;const{children:g,...f}=M.props,C=Object.keys(f).reduce((_,$)=>(_[Nq[$]||$]=f[$],_),{});let{type:w}=M;switch(typeof w=="symbol"?w=w.toString():this.warnOnInvalidChildren(M,g),w){case"Symbol(react.fragment)":s=this.mapChildrenToProps(g,s);break;case"link":case"meta":case"noscript":case"script":case"style":d=this.flattenArrayTypeChildren(M,d,C,g);break;default:s=this.mapObjectTypeChildren(M,s,C,g);break}}),this.mapArrayTypeChildrenToProps(d,s)}render(){const{children:l,...s}=this.props;let d={...s},{helmetData:M}=s;if(l&&(d=this.mapChildrenToProps(l,d)),M&&!(M instanceof HC)){const g=M;M=new HC(g.context,!0),delete d.helmetData}return M?tt.createElement(KN,{...d,context:M.value}):tt.createElement(r$.Consumer,null,g=>tt.createElement(KN,{...d,context:g}))}},j1(AC,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),AC);function l$({language:l,setLanguage:s}){return y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("i",{className:"ri-earth-line text-gold text-xl","aria-hidden":"true"}),y.jsx("label",{htmlFor:"language-select",className:"sr-only",children:"Select Language"}),y.jsxs("select",{id:"language-select",value:l,onChange:d=>s(d.target.value),className:"bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600","aria-label":"Select Language","aria-describedby":"language-description",children:[y.jsx("option",{value:"es",children:"es"}),y.jsx("option",{value:"en",children:"en"}),y.jsx("option",{value:"fr",children:"fr"}),y.jsx("option",{value:"de",children:"de"})]}),y.jsx("span",{id:"language-description",className:"sr-only",children:"Choose your preferred language for the website."})]})}const QN={en:{home:"Home",about:"About Us",mission:"Mission|Vision",services:"Services",contact:"Contact",language:"Language"},es:{home:"Inicio",about:"Sobre Nosotros",mission:"Misión|Vision",services:"Servicios",contact:"Contacto",language:"Idioma"},fr:{home:"Accueil",about:"À propos de nous",mission:"Mission|Vision",services:"Services",contact:"Contact",language:"Langue"},de:{home:"Startseite",about:"Über uns",mission:"Mission|Vision",services:"Dienstleistungen",contact:"Kontakt",language:"Sprache"}};function Zq({onOpenWizard:l}){const{language:s,setLanguage:d}=nt(),M=QN[s]||QN.en,[g,f]=ke.useState(!1),C=()=>{f(!g)};return y.jsxs(y.Fragment,{children:[y.jsx(FC,{children:y.jsx("title",{children:"MG Taxi - Your Fast and Safe Ride"})}),y.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-[#1a1a1a] text-white p-4 flex items-center justify-between z-50 border-b-4 border-yellow-500",children:[y.jsxs("button",{className:"text-yellow-500 text-2xl focus:outline-none ml-4",onClick:C,"aria-expanded":g,"aria-label":"Abrir menú",children:[y.jsx("i",{className:`ri-menu-3-line ${g?"hidden":"block"}`}),y.jsx("i",{className:`ri-close-line ${g?"block":"hidden"}`})]}),y.jsx("div",{className:"text-lg font-bold text-yellow-500 absolute left-1/2 transform -translate-x-1/2",children:"MG TAXI"}),y.jsx("div",{className:"mr-4",children:y.jsx(l$,{language:s,setLanguage:d})})]}),y.jsxs("div",{className:`fixed top-16 left-0 bg-black text-white w-64 h-screen p-6 z-50 transition-transform duration-300 ease-in-out transform ${g?"translate-x-0":"-translate-x-full"}`,role:"menu","aria-label":"Menú desplegable",children:[y.jsx("a",{href:"#home",className:"block py-2 text-yellow-500",children:M.home}),y.jsx("a",{href:"#about_us",className:"block py-2",children:M.about}),y.jsx("a",{href:"#mission",className:"block py-2",children:M.mission}),y.jsx("a",{href:"#services",className:"block py-2",children:M.services}),y.jsx("a",{href:"#contact",className:"block py-2",children:M.contact})]})]})}const JN={en:{rights:"© 2025 Martingomez Taxi. All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service",language:"Language"},es:{rights:"© 2025 Martingomez Taxi. Todos los derechos reservados.",privacy:"Política de Privacidad",terms:"Términos de Servicio",language:"Idioma"},fr:{rights:"© 2025 Martingomez Taxi. Tous droits réservés.",privacy:"Politique de Confidentialité",terms:"Conditions d'utilisation",language:"Langue"},de:{rights:"© 2025 Martingomez Taxi. Alle Rechte vorbehalten.",privacy:"Datenschutzrichtlinie",terms:"Nutzungsbedingungen",language:"Sprache"}};function Wq(){const{language:l,setLanguage:s}=nt(),d=JN[l]||JN.en;return y.jsxs(y.Fragment,{children:[y.jsxs(FC,{children:[y.jsx("title",{children:"Martingomez Taxi - Luxury Transportation Services"}),y.jsx("meta",{name:"description",content:"Experience luxury transportation services with Martingomez Taxi. Book now for your next trip to Switzerland."}),y.jsx("meta",{name:"keywords",content:"luxury transport, switzerland, vip transport, private tours"}),y.jsx("meta",{name:"author",content:"Martingomez Taxi"})]}),y.jsx("footer",{className:"bg-black text-gray-400 py-4 mt-16",children:y.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between",children:[y.jsx("div",{className:"text-center md:text-left mb-4 md:mb-0",children:y.jsx("p",{children:d.rights})}),y.jsx(l$,{language:l,setLanguage:s})]})})]})}const YN="/martintogomez-taxi/images/homebg-alfa2.webp",Gq={en:{Home:{title:{your:"YOUR",fast:"FAST",and:"AND",safe:"SAFE",ride:"RIDE"},subtitle:"Experience luxury transportation with Martinto Gomez Taxi",description:"Martinto Gomez Taxi offers premium luxury transportation services. Book your ride now for a seamless and elegant experience."}},de:{Home:{title:{your:"IHRE",fast:"SCHNELLE",and:"UND",safe:"SICHERE",ride:"FAHRT"},subtitle:"Erleben Sie Luxustransport mit Martinto Gomez Taxi",description:"Martinto Gomez Taxi bietet Premium-Luxustransportdienste an. Buchen Sie jetzt für ein nahtloses und elegantes Erlebnis."}},es:{Home:{title:{your:"SU",fast:"RÁPIDO",and:"Y",safe:"SEGURO",ride:"VIAJE"},subtitle:"Experimente el transporte de lujo con Martinto Gomez Taxi",description:"Martinto Gomez Taxi ofrece servicios de transporte de lujo premium. Reserve su viaje ahora para una experiencia fluida y elegante."}},fr:{Home:{title:{your:"VOTRE",fast:"RAPIDE",and:"ET",safe:"SÛR",ride:"TRAJET"},subtitle:"Découvrez le transport de luxe avec Martinto Gomez Taxi",description:"Martinto Gomez Taxi propose des services de transport de luxe haut de gamme. Réservez dès maintenant pour une expérience fluide et élégante."}}};function Xq(){const{language:l}=nt(),s=f=>{const C=f.split(".");let w=Gq[l||"en"];return C.forEach(_=>w=w==null?void 0:w[_]),w||""},M={whatsapp:`https://wa.me/+41755777700?text=${encodeURIComponent("Hola, estoy interesado en su servicio de taxi.")}`,instagram:"https://instagram.com/martintogomez.taxi",facebook:"https://www.facebook.com/profile.php?id=61568516343141"},g=f=>{window.open(M[f],"_blank")};return y.jsxs(y.Fragment,{children:[y.jsxs(FC,{children:[y.jsxs("title",{children:[s("Home.title.your")," | Martinto Gomez Taxi"]}),y.jsx("meta",{name:"description",content:s("Home.description")}),y.jsx("meta",{property:"og:title",content:s("Home.title.your")}),y.jsx("meta",{property:"og:description",content:s("Home.description")}),y.jsx("meta",{property:"og:image",content:YN}),y.jsx("meta",{property:"og:url",content:"https://martintogomez-taxi.com"}),y.jsx("meta",{property:"og:type",content:"website"})]}),y.jsxs("section",{id:"home",className:"relative h-screen text-white flex items-center justify-center border-b-4 border-yellow-500 max-w-4xl mx-auto",children:[y.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-70",style:{backgroundImage:`url(${YN})`},role:"img","aria-label":"Luxury taxi service background"}),y.jsxs("div",{className:"relative z-10 text-center px-4 pb-[80px] max-w-2xl md:max-w-4xl",children:[y.jsxs("h1",{className:"text-5xl font-bold uppercase leading-tight tracking-wide",children:[y.jsx("div",{children:s("Home.title.your")}),y.jsx("div",{children:s("Home.title.fast")}),y.jsx("div",{children:s("Home.title.and")}),y.jsx("div",{children:s("Home.title.safe")}),y.jsx("div",{children:s("Home.title.ride")})]}),y.jsx("p",{className:"mt-6 text-lg md:text-xl lg:text-2xl",children:s("Home.subtitle")}),y.jsxs("div",{className:"mt-12 flex gap-6 justify-center",children:[y.jsx("button",{onClick:()=>g("whatsapp"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full hover:bg-green-600 transition duration-300",children:y.jsx("i",{className:"ri-whatsapp-line text-xl md:text-2xl lg:text-3xl text-white"})}),y.jsx("button",{onClick:()=>g("instagram"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300",children:y.jsx("i",{className:"ri-instagram-line text-xl md:text-2xl lg:text-3xl text-white"})}),y.jsx("button",{onClick:()=>g("facebook"),className:"flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300",children:y.jsx("i",{className:"ri-facebook-circle-line text-xl md:text-2xl lg:text-3xl text-white"})})]})]}),y.jsxs("div",{className:"absolute bottom-10 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10",children:[y.jsx("span",{className:"text-xs md:text-sm font-bold",children:"SCROLL"}),y.jsx("i",{className:"ri-arrow-down-s-line animate-bounce mt-1 text-yellow-500 text-4xl "})]})]})]})}/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kq=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s$=(...l)=>l.filter((s,d,M)=>!!s&&s.trim()!==""&&M.indexOf(s)===d).join(" ").trim();/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h$=ke.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:M,className:g="",children:f,iconNode:C,...w},_)=>ke.createElement("svg",{ref:_,...Qq,width:s,height:s,stroke:l,strokeWidth:M?Number(d)*24/Number(s):d,className:s$("lucide",g),...w},[...C.map(([$,T])=>ke.createElement($,T)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(l,s)=>{const d=ke.forwardRef(({className:M,...g},f)=>ke.createElement(h$,{ref:f,iconNode:s,className:s$(`lucide-${Kq(l)}`,M),...g}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jq=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]],Fi=n("AArrowDown",Jq);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yq=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]],Di=n("AArrowUp",Yq);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]],Ri=n("ALargeSmall",eA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],Bi=n("Accessibility",tA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ei=n("Activity",nA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]],Oi=n("AirVent",oA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]],Ui=n("Airplay",aA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],mt=n("AlarmClockCheck",cA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],Mt=n("AlarmClockMinus",iA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]],Zi=n("AlarmClockOff",rA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],vt=n("AlarmClockPlus",dA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]],Wi=n("AlarmClock",lA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]],Gi=n("AlarmSmoke",sA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]],Xi=n("Album",hA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]],Ki=n("AlignCenterHorizontal",yA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]],Qi=n("AlignCenterVertical",uA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Ji=n("AlignCenter",pA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]],Yi=n("AlignEndHorizontal",kA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]],er=n("AlignEndVertical",fA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],tr=n("AlignHorizontalDistributeCenter",mA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]],nr=n("AlignHorizontalDistributeEnd",MA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]],or=n("AlignHorizontalDistributeStart",vA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],ar=n("AlignHorizontalJustifyCenter",gA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]],cr=n("AlignHorizontalJustifyEnd",xA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],ir=n("AlignHorizontalJustifyStart",_A);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]],rr=n("AlignHorizontalSpaceAround",wA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]],dr=n("AlignHorizontalSpaceBetween",LA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]],lr=n("AlignJustify",CA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],sr=n("AlignLeft",IA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],hr=n("AlignRight",SA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]],yr=n("AlignStartHorizontal",NA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],ur=n("AlignStartVertical",$A);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],pr=n("AlignVerticalDistributeCenter",zA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],kr=n("AlignVerticalDistributeEnd",qA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]],fr=n("AlignVerticalDistributeStart",AA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],mr=n("AlignVerticalJustifyCenter",bA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]],Mr=n("AlignVerticalJustifyEnd",jA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]],vr=n("AlignVerticalJustifyStart",HA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]],gr=n("AlignVerticalSpaceAround",PA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]],xr=n("AlignVerticalSpaceBetween",VA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],_r=n("Ambulance",TA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]],wr=n("Ampersand",FA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]],Lr=n("Ampersands",DA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]],Cr=n("Amphora",RA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],Ir=n("Anchor",BA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],Sr=n("Angry",EA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]],Nr=n("Annoyed",OA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],$r=n("Antenna",UA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]],zr=n("Anvil",ZA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],qr=n("Aperture",WA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]],Ar=n("AppWindowMac",GA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],br=n("AppWindow",XA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],jr=n("Apple",KA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]],Hr=n("ArchiveRestore",QA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]],Pr=n("ArchiveX",JA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Vr=n("Archive",YA);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],Tr=n("Armchair",eb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]],Fr=n("ArrowBigDownDash",tb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]],Dr=n("ArrowBigDown",nb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]],Rr=n("ArrowBigLeftDash",ob);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]],Br=n("ArrowBigLeft",ab);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]],Er=n("ArrowBigRightDash",cb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]],Or=n("ArrowBigRight",ib);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]],Ur=n("ArrowBigUpDash",rb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]],Zr=n("ArrowBigUp",db);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],Wr=n("ArrowDown01",lb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],Gr=n("ArrowDown10",sb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],gt=n("ArrowDownAZ",hb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]],Xr=n("ArrowDownFromLine",yb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],Kr=n("ArrowDownLeft",ub);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Qr=n("ArrowDownNarrowWide",pb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Jr=n("ArrowDownRight",kb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],Yr=n("ArrowDownToDot",fb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],e0=n("ArrowDownToLine",mb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],t0=n("ArrowDownUp",Mb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]],xt=n("ArrowDownWideNarrow",vb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],_t=n("ArrowDownZA",gb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],n0=n("ArrowDown",xb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]],o0=n("ArrowLeftFromLine",_b);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],a0=n("ArrowLeftRight",wb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],c0=n("ArrowLeftToLine",Lb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],i0=n("ArrowLeft",Cb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]],r0=n("ArrowRightFromLine",Ib);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],d0=n("ArrowRightLeft",Sb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],l0=n("ArrowRightToLine",Nb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],s0=n("ArrowRight",$b);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],h0=n("ArrowUp01",zb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],y0=n("ArrowUp10",qb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],wt=n("ArrowUpAZ",Ab);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],u0=n("ArrowUpDown",bb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],p0=n("ArrowUpFromDot",jb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]],k0=n("ArrowUpFromLine",Hb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]],f0=n("ArrowUpLeft",Pb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],Lt=n("ArrowUpNarrowWide",Vb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],m0=n("ArrowUpRight",Tb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],M0=n("ArrowUpToLine",Fb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]],v0=n("ArrowUpWideNarrow",Db);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],Ct=n("ArrowUpZA",Rb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],g0=n("ArrowUp",Bb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]],x0=n("ArrowsUpFromLine",Eb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]],_0=n("Asterisk",Ob);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],w0=n("AtSign",Ub);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],L0=n("Atom",Zb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],C0=n("AudioLines",Wb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],I0=n("AudioWaveform",Gb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],S0=n("Award",Xb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]],N0=n("Axe",Kb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]],It=n("Axis3d",Qb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],$0=n("Baby",Jb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],z0=n("Backpack",Yb);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],q0=n("BadgeAlert",ej);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]],A0=n("BadgeCent",tj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],St=n("BadgeCheck",nj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],b0=n("BadgeDollarSign",oj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],j0=n("BadgeEuro",aj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]],H0=n("BadgeHelp",cj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]],P0=n("BadgeIndianRupee",ij);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]],V0=n("BadgeInfo",rj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]],T0=n("BadgeJapaneseYen",dj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],F0=n("BadgeMinus",lj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],D0=n("BadgePercent",sj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],R0=n("BadgePlus",hj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]],B0=n("BadgePoundSterling",yj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]],E0=n("BadgeRussianRuble",uj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]],O0=n("BadgeSwissFranc",pj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],U0=n("BadgeX",kj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]],Z0=n("Badge",fj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]],W0=n("BaggageClaim",mj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],G0=n("Ban",Mj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]],X0=n("Banana",vj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v11.5",key:"dkbidh"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]],K0=n("Bandage",gj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],Q0=n("Banknote",xj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]],J0=n("Barcode",_j);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]],Y0=n("Baseline",wj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],ed=n("Bath",Lj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],td=n("BatteryCharging",Cj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]],nd=n("BatteryFull",Ij);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]],od=n("BatteryLow",Sj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]],ad=n("BatteryMedium",Nj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["path",{d:"M10 17h.01",key:"nbq80n"}],["path",{d:"M10 7v6",key:"nne03l"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1x5o8m"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"1mdjgh"}]],cd=n("BatteryWarning",$j);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],id=n("Battery",zj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],rd=n("Beaker",qj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],dd=n("BeanOff",Aj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]],ld=n("Bean",bj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],sd=n("BedDouble",jj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]],hd=n("BedSingle",Hj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],yd=n("Bed",Pj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]],ud=n("Beef",Vj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]],pd=n("BeerOff",Tj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]],kd=n("Beer",Fj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]],fd=n("BellDot",Dj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]],md=n("BellElectric",Rj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",key:"bdwj86"}]],Md=n("BellMinus",Bj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],vd=n("BellOff",Ej);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",key:"1abcvy"}]],gd=n("BellPlus",Oj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],xd=n("BellRing",Uj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],_d=n("Bell",Zj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]],Nt=n("BetweenHorizontalEnd",Wj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]],$t=n("BetweenHorizontalStart",Gj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]],wd=n("BetweenVerticalEnd",Xj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]],Ld=n("BetweenVerticalStart",Kj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]],Cd=n("BicepsFlexed",Qj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],Id=n("Bike",Jj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Sd=n("Binary",Yj);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]],Nd=n("Binoculars",eH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]],$d=n("Biohazard",tH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],zd=n("Bird",nH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],qd=n("Bitcoin",oH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]],Ad=n("Blend",aH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]],bd=n("Blinds",cH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]],jd=n("Blocks",iH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]],Hd=n("BluetoothConnected",rH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]],Pd=n("BluetoothOff",dH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],Vd=n("BluetoothSearching",lH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],Td=n("Bluetooth",sH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],Fd=n("Bold",hH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],Dd=n("Bolt",yH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]],Rd=n("Bomb",uH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]],Bd=n("Bone",pH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]],Ed=n("BookA",kH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]],Od=n("BookAudio",fH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]],Ud=n("BookCheck",mH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]],Zd=n("BookCopy",MH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]],zt=n("BookDashed",vH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]],Wd=n("BookDown",gH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],Gd=n("BookHeadphones",xH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",key:"1t75a8"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Xd=n("BookHeart",_H);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]],Kd=n("BookImage",wH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"m19 3 1 1",key:"ze14oc"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1ocbpn"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}]],Qd=n("BookKey",LH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]],Jd=n("BookLock",CH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Yd=n("BookMarked",IH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],el=n("BookMinus",SH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],tl=n("BookOpenCheck",NH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]],nl=n("BookOpenText",$H);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ol=n("BookOpen",zH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],al=n("BookPlus",qH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],cl=n("BookText",AH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],il=n("BookType",bH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],rl=n("BookUp2",jH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],dl=n("BookUp",HH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]],ll=n("BookUser",PH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]],sl=n("BookX",VH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],hl=n("Book",TH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],yl=n("BookmarkCheck",FH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],ul=n("BookmarkMinus",DH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],pl=n("BookmarkPlus",RH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],kl=n("BookmarkX",BH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],fl=n("Bookmark",EH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]],ml=n("BoomBox",OH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]],Ml=n("BotMessageSquare",UH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]],vl=n("BotOff",ZH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],gl=n("Bot",WH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],xl=n("Box",GH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],_l=n("Boxes",XH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],qt=n("Braces",KH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]],wl=n("Brackets",QH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Ll=n("BrainCircuit",JH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]],Cl=n("BrainCog",YH);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Il=n("Brain",eP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]],Sl=n("BrickWall",tP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],pc=n("BriefcaseBusiness",nP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"M10 20v2",key:"1n8e1g"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M18 20v2",key:"10uadw"}],["path",{d:"M21 20H3",key:"kdqkdp"}],["path",{d:"M6 20v2",key:"a9bc87"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",key:"17n9tx"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2",key:"1097i5"}]],Nl=n("BriefcaseConveyorBelt",oP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],$l=n("BriefcaseMedical",aP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],zl=n("Briefcase",cP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]],ql=n("BringToFront",iP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]],Al=n("Brush",rP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]],bl=n("BugOff",dP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]],jl=n("BugPlay",lP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],Hl=n("Bug",sP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Pl=n("Building2",hP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Vl=n("Building",yP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]],Tl=n("BusFront",uP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],Fl=n("Bus",pP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Dl=n("CableCar",kP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]],Rl=n("Cable",fP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]],Bl=n("CakeSlice",mP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],El=n("Cake",MP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ol=n("Calculator",vP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],Ul=n("Calendar1",gP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 14v8",key:"irew45"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",key:"bse4f3"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Zl=n("CalendarArrowDown",xP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 22v-8",key:"su0gjh"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",key:"1exg90"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Wl=n("CalendarArrowUp",_P);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],Gl=n("CalendarCheck2",wP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Xl=n("CalendarCheck",LP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Kl=n("CalendarClock",CP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"11kmuh"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Ql=n("CalendarCog",IP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Jl=n("CalendarDays",SP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]],Yl=n("CalendarFold",NP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]],es=n("CalendarHeart",$P);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]],ts=n("CalendarMinus2",zP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1scpom"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],ns=n("CalendarMinus",qP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],os=n("CalendarOff",AP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]],as=n("CalendarPlus2",bP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]],cs=n("CalendarPlus",jP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],is=n("CalendarRange",HP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",key:"1jrsq6"}],["path",{d:"m22 22-1.875-1.875",key:"13zax7"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],rs=n("CalendarSearch",PP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M11 10v4h4",key:"172dkj"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"vu0qm5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"1qgeyt"}],["path",{d:"M21 22v-4h-4",key:"hrummi"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",key:"mctw84"}],["path",{d:"M3 10h4",key:"1el30a"}],["path",{d:"M8 2v4",key:"1cmpym"}]],ds=n("CalendarSync",VP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]],ls=n("CalendarX2",TP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]],ss=n("CalendarX",FP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hs=n("Calendar",DP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]],ys=n("CameraOff",RP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],us=n("Camera",BP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]],ps=n("CandyCane",EP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],ks=n("CandyOff",OP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]],fs=n("Candy",UP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]],ms=n("Cannabis",ZP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]],Ms=n("CaptionsOff",WP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],At=n("Captions",GP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],vs=n("CarFront",XP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],kc=n("CarTaxiFront",KP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],fc=n("Car",QP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]],gs=n("Caravan",JP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]],xs=n("Carrot",YP);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]],_s=n("CaseLower",eV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]],ws=n("CaseSensitive",tV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]],Ls=n("CaseUpper",nV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]],Cs=n("CassetteTape",oV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]],Is=n("Cast",aV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]],Ss=n("Castle",cV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],Ns=n("Cat",iV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]],$s=n("Cctv",rV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]],bt=n("ChartArea",dV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],jt=n("ChartBarBig",lV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]],zs=n("ChartBarDecreasing",sV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]],qs=n("ChartBarIncreasing",hV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],As=n("ChartBarStacked",yV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]],Ht=n("ChartBar",uV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],Pt=n("ChartCandlestick",pV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],Vt=n("ChartColumnBig",kV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]],bs=n("ChartColumnDecreasing",fV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Tt=n("ChartColumnIncreasing",mV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],js=n("ChartColumnStacked",MV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ft=n("ChartColumn",vV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]],Hs=n("ChartGantt",gV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],Dt=n("ChartLine",xV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]],Ps=n("ChartNetwork",_V);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M12 20V10",key:"g8npz5"}],["path",{d:"M18 20v-4",key:"8uic4z"}],["path",{d:"M6 20V4",key:"1w1bmo"}]],Vs=n("ChartNoAxesColumnDecreasing",wV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],Rt=n("ChartNoAxesColumnIncreasing",LV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],Bt=n("ChartNoAxesColumn",CV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]],Ts=n("ChartNoAxesCombined",IV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],Et=n("ChartNoAxesGantt",SV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Ot=n("ChartPie",NV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],Ut=n("ChartScatter",$V);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]],Fs=n("ChartSpline",zV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Ds=n("CheckCheck",qV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Rs=n("Check",AV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Bs=n("ChefHat",bV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]],Es=n("Cherry",jV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Os=n("ChevronDown",HV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],Us=n("ChevronFirst",PV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],Zs=n("ChevronLast",VV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mc=n("ChevronLeft",TV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Mc=n("ChevronRight",FV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ws=n("ChevronUp",DV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]],Gs=n("ChevronsDownUp",RV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],Xs=n("ChevronsDown",BV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Ks=n("ChevronsLeftRightEllipsis",EV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]],Qs=n("ChevronsLeftRight",OV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Js=n("ChevronsLeft",UV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]],Ys=n("ChevronsRightLeft",ZV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],eh=n("ChevronsRight",WV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],th=n("ChevronsUpDown",GV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],nh=n("ChevronsUp",XV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]],oh=n("Chrome",KV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],ah=n("Church",QV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],ch=n("CigaretteOff",JV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],ih=n("Cigarette",YV);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zt=n("CircleAlert",eT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],Wt=n("CircleArrowDown",tT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]],Gt=n("CircleArrowLeft",nT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]],Xt=n("CircleArrowOutDownLeft",oT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]],Kt=n("CircleArrowOutDownRight",aT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]],Qt=n("CircleArrowOutUpLeft",cT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]],Jt=n("CircleArrowOutUpRight",iT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],Yt=n("CircleArrowRight",rT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],en=n("CircleArrowUp",dT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],tn=n("CircleCheckBig",lT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nn=n("CircleCheck",sT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],on=n("CircleChevronDown",hT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],an=n("CircleChevronLeft",yT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],cn=n("CircleChevronRight",uT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],rn=n("CircleChevronUp",pT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]],rh=n("CircleDashed",kT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dn=n("CircleDivide",fT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],dh=n("CircleDollarSign",mT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],lh=n("CircleDotDashed",MT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],sh=n("CircleDot",vT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],hh=n("CircleEllipsis",gT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yh=n("CircleEqual",xT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],uh=n("CircleFadingArrowUp",_T);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],ph=n("CircleFadingPlus",wT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]],ln=n("CircleGauge",LT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],sn=n("CircleHelp",CT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]],hn=n("CircleMinus",IT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]],kh=n("CircleOff",ST);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]],yn=n("CircleParkingOff",NT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],un=n("CircleParking",$T);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],pn=n("CirclePause",zT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],kn=n("CirclePercent",qT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],fn=n("CirclePlay",AT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],mn=n("CirclePlus",bT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mn=n("CirclePower",jT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]],vn=n("CircleSlash2",HT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],fh=n("CircleSlash",PT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],gn=n("CircleStop",VT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xn=n("CircleUserRound",TT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],_n=n("CircleUser",FT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],wn=n("CircleX",DT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mh=n("Circle",RT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],Mh=n("CircuitBoard",BT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]],vh=n("Citrus",ET);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],gh=n("Clapperboard",OT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],xh=n("ClipboardCheck",UT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]],_h=n("ClipboardCopy",ZT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],wh=n("ClipboardList",WT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]],Lh=n("ClipboardMinus",GT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]],Ch=n("ClipboardPaste",XT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]],Ln=n("ClipboardPenLine",KT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],Cn=n("ClipboardPen",QT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]],Ih=n("ClipboardPlus",JT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]],Sh=n("ClipboardType",YT);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eF=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]],Nh=n("ClipboardX",eF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],$h=n("Clipboard",tF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]],zh=n("Clock1",nF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]],qh=n("Clock10",oF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]],Ah=n("Clock11",aF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]],bh=n("Clock12",cF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]],jh=n("Clock2",iF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],Hh=n("Clock3",rF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Ph=n("Clock4",dF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]],Vh=n("Clock5",lF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]],Th=n("Clock6",sF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]],Fh=n("Clock7",hF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]],Dh=n("Clock8",yF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]],Rh=n("Clock9",uF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pF=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516",key:"cxo92l"}],["path",{d:"M20 11.5v6",key:"2ei3xq"}],["path",{d:"M20 21.5h.01",key:"1r2dzp"}]],Bh=n("ClockAlert",pF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kF=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227",key:"1i7shu"}],["path",{d:"M12 6v6l2 1",key:"19cm8n"}],["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M18 14v8",key:"irew45"}]],Eh=n("ClockArrowDown",kF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338",key:"1fzlyi"}],["path",{d:"M12 6v6l1.562.781",key:"1ujuk9"}],["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M18 22v-8",key:"su0gjh"}]],Oh=n("ClockArrowUp",fF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],vc=n("Clock",mF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MF=[["path",{d:"M12 12v4",key:"tww15h"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",key:"xsb5ju"}]],Uh=n("CloudAlert",MF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vF=[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]],Zh=n("CloudCog",vF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gF=[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],In=n("CloudDownload",gF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]],Wh=n("CloudDrizzle",xF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]],Gh=n("CloudFog",_F);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wF=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]],Xh=n("CloudHail",wF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LF=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],Kh=n("CloudLightning",LF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CF=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M7 19v2",key:"12npes"}]],Qh=n("CloudMoonRain",CF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IF=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}]],Jh=n("CloudMoon",IF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SF=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]],Yh=n("CloudOff",SF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NF=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]],ey=n("CloudRainWind",NF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $F=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],ty=n("CloudRain",$F);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zF=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]],ny=n("CloudSnow",zF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qF=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]],oy=n("CloudSunRain",qF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AF=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]],ay=n("CloudSun",AF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bF=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Sn=n("CloudUpload",bF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jF=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],cy=n("Cloud",jF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HF=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]],iy=n("Cloudy",HF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PF=[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]],ry=n("Clover",PF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VF=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]],dy=n("Club",VF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TF=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Nn=n("CodeXml",TF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FF=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],ly=n("Code",FF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DF=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]],sy=n("Codepen",DF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RF=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]],hy=n("Codesandbox",RF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BF=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],yy=n("Coffee",BF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EF=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]],uy=n("Cog",EF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OF=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],py=n("Coins",OF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],$n=n("Columns2",UF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],zn=n("Columns3",ZF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]],ky=n("Columns4",WF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GF=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]],fy=n("Combine",GF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XF=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],my=n("Command",XF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KF=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],My=n("Compass",KF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QF=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],vy=n("Component",QF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JF=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],gy=n("Computer",JF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YF=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]],xy=n("ConciergeBell",YF);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]],_y=n("Cone",eD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],wy=n("Construction",tD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],qn=n("ContactRound",nD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],Ly=n("Contact",oD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],Cy=n("Container",aD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],Iy=n("Contrast",cD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Sy=n("Cookie",iD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]],Ny=n("CookingPot",rD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$y=n("CopyCheck",dD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zy=n("CopyMinus",lD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],qy=n("CopyPlus",sD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ay=n("CopySlash",hD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],by=n("CopyX",yD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jy=n("Copy",uD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]],Hy=n("Copyleft",pD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]],Py=n("Copyright",kD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],Vy=n("CornerDownLeft",fD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],Ty=n("CornerDownRight",mD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]],Fy=n("CornerLeftDown",MD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]],Dy=n("CornerLeftUp",vD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]],Ry=n("CornerRightDown",gD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]],By=n("CornerRightUp",xD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]],Ey=n("CornerUpLeft",_D);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]],Oy=n("CornerUpRight",wD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Uy=n("Cpu",LD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]],Zy=n("CreativeCommons",CD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Wy=n("CreditCard",ID);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]],Gy=n("Croissant",SD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],Xy=n("Crop",ND);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],Ky=n("Cross",$D);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Qy=n("Crosshair",zD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Jy=n("Crown",qD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]],Yy=n("Cuboid",AD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]],eu=n("CupSoda",bD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]],tu=n("Currency",jD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],nu=n("Cylinder",HD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]],ou=n("Dam",PD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]],au=n("DatabaseBackup",VD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]],cu=n("DatabaseZap",TD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],iu=n("Database",FD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]],ru=n("Delete",DD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]],du=n("Dessert",RD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]],lu=n("Diameter",BD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],su=n("DiamondMinus",ED);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]],An=n("DiamondPercent",OD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],hu=n("DiamondPlus",UD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],yu=n("Diamond",ZD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],uu=n("Dice1",WD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]],pu=n("Dice2",GD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ku=n("Dice3",XD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]],fu=n("Dice4",KD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],mu=n("Dice5",QD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Mu=n("Dice6",JD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],vu=n("Dices",YD);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]],gu=n("Diff",eR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],xu=n("Disc2",tR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],_u=n("Disc3",nR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],wu=n("DiscAlbum",oR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Lu=n("Disc",aR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]],Cu=n("Divide",cR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]],Iu=n("DnaOff",iR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],Su=n("Dna",rR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]],Nu=n("Dock",dR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],$u=n("Dog",lR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],zu=n("DollarSign",sR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qu=n("Donut",hR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]],Au=n("DoorClosed",yR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]],bu=n("DoorOpen",uR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],ju=n("Dot",pR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Hu=n("Download",kR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]],Pu=n("DraftingCompass",fR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]],Vu=n("Drama",mR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Tu=n("Dribbble",MR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]],Fu=n("Drill",vR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",key:"8suz2t"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",key:"19dw9m"}]],Du=n("DropletOff",gR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Ru=n("Droplet",xR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Bu=n("Droplets",_R);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]],Eu=n("Drum",wR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]],Ou=n("Drumstick",LR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]],Uu=n("Dumbbell",CR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Zu=n("EarOff",IR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]],Wu=n("Ear",SR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],Gu=n("EarthLock",NR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bn=n("Earth",$R);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]],Xu=n("Eclipse",zR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]],Ku=n("EggFried",qR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Qu=n("EggOff",AR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]],Ju=n("Egg",bR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],jn=n("EllipsisVertical",jR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Hn=n("Ellipsis",HR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]],Yu=n("EqualApproximately",PR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]],ep=n("EqualNot",VR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]],tp=n("Equal",TR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]],np=n("Eraser",FR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",key:"rbahqx"}],["path",{d:"M6 8v1",key:"1636ez"}],["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}]],op=n("EthernetPort",DR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]],ap=n("Euro",RR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]],cp=n("Expand",BR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ip=n("ExternalLink",ER);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],rp=n("EyeClosed",OR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],dp=n("EyeOff",UR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lp=n("Eye",ZR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],sp=n("Facebook",WR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]],hp=n("Factory",GR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]],yp=n("Fan",XR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],up=n("FastForward",KR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],pp=n("Feather",QR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]],kp=n("Fence",JR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]],fp=n("FerrisWheel",YR);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eB=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],mp=n("Figma",eB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tB=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],Mp=n("FileArchive",tB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]],vp=n("FileAudio2",nB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oB=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]],gp=n("FileAudio",oB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]],Pn=n("FileAxis3d",aB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]],xp=n("FileBadge2",cB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]],_p=n("FileBadge",iB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rB=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]],wp=n("FileBox",rB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]],Vn=n("FileChartColumnIncreasing",dB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]],Tn=n("FileChartColumn",lB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]],Fn=n("FileChartLine",sB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]],Dn=n("FileChartPie",hB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Lp=n("FileCheck2",yB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Cp=n("FileCheck",uB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],Ip=n("FileClock",pB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Sp=n("FileCode2",kB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],Np=n("FileCode",fB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3.2 12.9-.9-.4",key:"1i3dj5"}],["path",{d:"m3.2 15.1-.9.4",key:"1fvgj0"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",key:"1yo3oz"}],["path",{d:"m4.9 11.2-.4-.9",key:"otmhb9"}],["path",{d:"m4.9 16.8-.4.9",key:"1b8z07"}],["path",{d:"m7.5 10.3-.4.9",key:"11k65u"}],["path",{d:"m7.5 17.7-.4-.9",key:"431x55"}],["path",{d:"m9.7 12.5-.9.4",key:"87sjan"}],["path",{d:"m9.7 15.5-.9-.4",key:"khqm91"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]],Rn=n("FileCog",mB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]],$p=n("FileDiff",MB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]],zp=n("FileDigit",vB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],qp=n("FileDown",gB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]],Ap=n("FileHeart",xB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],bp=n("FileImage",_B);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],jp=n("FileInput",wB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]],Hp=n("FileJson2",LB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],Pp=n("FileJson",CB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]],Vp=n("FileKey2",IB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]],Tp=n("FileKey",SB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]],Fp=n("FileLock2",NB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]],Dp=n("FileLock",$B);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]],Rp=n("FileMinus2",zB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]],Bp=n("FileMinus",qB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",key:"1d3kfm"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}],["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}]],Ep=n("FileMusic",AB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]],Op=n("FileOutput",bB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jB=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]],Bn=n("FilePenLine",jB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HB=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],En=n("FilePen",HB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Up=n("FilePlus2",PB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],Zp=n("FilePlus",VB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TB=[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],Wp=n("FileQuestion",TB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]],Gp=n("FileScan",FB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],Xp=n("FileSearch2",DB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Kp=n("FileSearch",RB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]],Qp=n("FileSliders",BB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Jp=n("FileSpreadsheet",EB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]],Yp=n("FileStack",OB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UB=[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]],e4=n("FileSymlink",UB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]],t4=n("FileTerminal",ZB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],n4=n("FileText",WB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]],o4=n("FileType2",GB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]],a4=n("FileType",XB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],c4=n("FileUp",KB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QB=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],i4=n("FileUser",QB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]],r4=n("FileVideo2",JB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]],d4=n("FileVideo",YB);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]],l4=n("FileVolume2",eE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",key:"ifyjnl"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",key:"mk8rxu"}]],s4=n("FileVolume",tE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],h4=n("FileWarning",nE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]],y4=n("FileX2",oE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]],u4=n("FileX",aE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],p4=n("File",cE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]],k4=n("Files",iE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],f4=n("Film",rE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],m4=n("FilterX",dE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],M4=n("Filter",lE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],v4=n("Fingerprint",sE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]],g4=n("FireExtinguisher",hE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]],x4=n("FishOff",yE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]],_4=n("FishSymbol",uE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],w4=n("Fish",pE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],L4=n("FlagOff",kE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]],C4=n("FlagTriangleLeft",fE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]],I4=n("FlagTriangleRight",mE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],S4=n("Flag",ME);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]],N4=n("FlameKindling",vE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],$4=n("Flame",gE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],z4=n("FlashlightOff",xE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]],q4=n("Flashlight",_E);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",key:"k0duyd"}],["path",{d:"M6.453 15H15",key:"1f0z33"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],A4=n("FlaskConicalOff",wE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],b4=n("FlaskConical",LE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2",key:"1s42pc"}],["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],j4=n("FlaskRound",CE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],H4=n("FlipHorizontal2",IE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],P4=n("FlipHorizontal",SE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],V4=n("FlipVertical2",NE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],T4=n("FlipVertical",$E);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],F4=n("Flower2",zE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]],D4=n("Flower",qE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],R4=n("Focus",AE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]],B4=n("FoldHorizontal",bE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]],E4=n("FoldVertical",jE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]],O4=n("FolderArchive",HE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],U4=n("FolderCheck",PE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]],Z4=n("FolderClock",VE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],W4=n("FolderClosed",TE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],G4=n("FolderCode",FE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]],On=n("FolderCog",DE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]],X4=n("FolderDot",RE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]],K4=n("FolderDown",BE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Q4=n("FolderGit2",EE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]],J4=n("FolderGit",OE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"wpff58"}]],Y4=n("FolderHeart",UE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],ek=n("FolderInput",ZE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],tk=n("FolderKanban",WE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]],nk=n("FolderKey",GE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]],ok=n("FolderLock",XE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ak=n("FolderMinus",KE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]],ck=n("FolderOpenDot",QE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ik=n("FolderOpen",JE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]],rk=n("FolderOutput",YE);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]],Un=n("FolderPen",eO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],dk=n("FolderPlus",tO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]],lk=n("FolderRoot",nO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]],sk=n("FolderSearch2",oO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]],hk=n("FolderSearch",aO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]],yk=n("FolderSymlink",cO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],uk=n("FolderSync",iO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],pk=n("FolderTree",rO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]],kk=n("FolderUp",dO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]],fk=n("FolderX",lO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],mk=n("Folder",sO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]],Mk=n("Folders",hO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],vk=n("Footprints",yO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]],gk=n("Forklift",uO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]],xk=n("Forward",pO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],_k=n("Frame",kO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]],wk=n("Framer",fO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Lk=n("Frown",mO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]],Ck=n("Fuel",MO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]],Ik=n("Fullscreen",vO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]],Sk=n("GalleryHorizontalEnd",gO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]],Nk=n("GalleryHorizontal",xO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]],$k=n("GalleryThumbnails",_O);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]],zk=n("GalleryVerticalEnd",wO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]],qk=n("GalleryVertical",LO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Ak=n("Gamepad2",CO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],bk=n("Gamepad",IO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],jk=n("Gauge",SO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],Hk=n("Gavel",NO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Pk=n("Gem",$O);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],Vk=n("Ghost",zO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Tk=n("Gift",qO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Fk=n("GitBranchPlus",AO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Dk=n("GitBranch",bO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Zn=n("GitCommitHorizontal",jO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]],Rk=n("GitCommitVertical",HO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]],Bk=n("GitCompareArrows",PO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],Ek=n("GitCompare",VO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],Ok=n("GitFork",TO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]],Uk=n("GitGraph",FO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Zk=n("GitMerge",DO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]],Wk=n("GitPullRequestArrow",RO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Gk=n("GitPullRequestClosed",BO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]],Xk=n("GitPullRequestCreateArrow",EO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Kk=n("GitPullRequestCreate",OO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Qk=n("GitPullRequestDraft",UO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Jk=n("GitPullRequest",ZO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Yk=n("Github",WO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]],e5=n("Gitlab",GO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]],t5=n("GlassWater",XO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]],n5=n("Glasses",KO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],o5=n("GlobeLock",QO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],a5=n("Globe",JO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],c5=n("Goal",YO);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eU=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"edstyy"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"19wdwo"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"1lugqo"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1hbeus"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"1etffm"}]],i5=n("Grab",eU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tU=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],r5=n("GraduationCap",tU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nU=[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]],d5=n("Grape",nU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],Wn=n("Grid2x2Check",oU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]],Gn=n("Grid2x2Plus",aU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cU=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]],Xn=n("Grid2x2X",cU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iU=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Kn=n("Grid2x2",iU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rU=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],w1=n("Grid3x3",rU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dU=[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]],l5=n("GripHorizontal",dU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lU=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],s5=n("GripVertical",lU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sU=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],h5=n("Grip",sU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hU=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]],y5=n("Group",hU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yU=[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z",key:"1u8q3z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}]],u5=n("Guitar",yU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uU=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]],p5=n("Ham",uU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pU=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],k5=n("Hammer",pU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kU=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]],f5=n("HandCoins",kU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fU=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]],m5=n("HandHeart",fU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mU=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]],Qn=n("HandHelping",mU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MU=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]],M5=n("HandMetal",MU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vU=[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",key:"n2g93r"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2",key:"1o2jem"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M5 10a7 7 0 0 1 14 0",key:"1ega1o"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2",key:"1hescx"}]],v5=n("HandPlatter",vU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gU=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],g5=n("Hand",gU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xU=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],x5=n("Handshake",xU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _U=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],_5=n("HardDriveDownload",_U);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wU=[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],w5=n("HardDriveUpload",wU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LU=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],L5=n("HardDrive",LU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CU=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],C5=n("HardHat",CU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IU=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],I5=n("Hash",IU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SU=[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]],S5=n("Haze",SU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NU=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]],N5=n("HdmiPort",NU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $U=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]],$5=n("Heading1",$U);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]],z5=n("Heading2",zU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]],q5=n("Heading3",qU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AU=[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]],A5=n("Heading4",AU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]],b5=n("Heading5",bU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jU=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]],j5=n("Heading6",jU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HU=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],H5=n("Heading",HU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PU=[["path",{d:"M21 14h-1.343",key:"1jdnxi"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343",key:"6kipu2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",key:"9x50f4"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",key:"1bkxnm"}]],P5=n("HeadphoneOff",PU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VU=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],V5=n("Headphones",VU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TU=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],T5=n("Headset",TU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]],F5=n("HeartCrack",FU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],D5=n("HeartHandshake",DU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RU=[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]],R5=n("HeartOff",RU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],B5=n("HeartPulse",BU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EU=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],E5=n("Heart",EU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OU=[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]],O5=n("Heater",OU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UU=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],U5=n("Hexagon",UU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZU=[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]],Z5=n("Highlighter",ZU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WU=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],W5=n("History",WU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GU=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],G5=n("HopOff",GU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XU=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]],X5=n("Hop",XU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]],K5=n("Hospital",KU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],gc=n("Hotel",QU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]],Q5=n("Hourglass",JU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"1gvg2z"}]],J5=n("HousePlug",YU);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eZ=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354",key:"5phn05"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 3v6",key:"x1uolp"}]],Y5=n("HousePlus",eZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tZ=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]],e3=n("HouseWifi",tZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nZ=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Jn=n("House",nZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oZ=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]],Yn=n("IceCreamBowl",oZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aZ=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]],eo=n("IceCreamCone",aZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cZ=[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]],t3=n("IdCard",cZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iZ=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],n3=n("ImageDown",iZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rZ=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],o3=n("ImageMinus",rZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dZ=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],a3=n("ImageOff",dZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lZ=[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],c3=n("ImagePlay",lZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sZ=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],i3=n("ImagePlus",sZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hZ=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],r3=n("ImageUp",hZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yZ=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2",key:"130fy9"}],["path",{d:"M21 12v3",key:"1wzk3p"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2",key:"kk3yz1"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",key:"fyekpt"}],["path",{d:"M9 3h3",key:"d52fa"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1",key:"1wpmix"}]],d3=n("ImageUpscale",yZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],l3=n("Image",uZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pZ=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]],s3=n("Images",pZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kZ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]],h3=n("Import",kZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fZ=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],y3=n("Inbox",fZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mZ=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]],to=n("IndentDecrease",mZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MZ=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]],no=n("IndentIncrease",MZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vZ=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],u3=n("IndianRupee",vZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gZ=[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]],p3=n("Infinity",gZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xZ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],k3=n("Info",xZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Z=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]],f3=n("InspectionPanel",_Z);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wZ=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],m3=n("Instagram",wZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LZ=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],M3=n("Italic",LZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CZ=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]],v3=n("IterationCcw",CZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IZ=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]],g3=n("IterationCw",IZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SZ=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]],x3=n("JapaneseYen",SZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NZ=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],_3=n("Joystick",NZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Z=[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]],w3=n("Kanban",$Z);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zZ=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],L3=n("KeyRound",zZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qZ=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]],C3=n("KeySquare",qZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AZ=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],I3=n("Key",AZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bZ=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]],S3=n("KeyboardMusic",bZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jZ=[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]],N3=n("KeyboardOff",jZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HZ=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],$3=n("Keyboard",HZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PZ=[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]],z3=n("LampCeiling",PZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VZ=[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]],q3=n("LampDesk",VZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TZ=[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]],A3=n("LampFloor",TZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FZ=[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]],b3=n("LampWallDown",FZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DZ=[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]],j3=n("LampWallUp",DZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RZ=[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]],H3=n("Lamp",RZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BZ=[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]],P3=n("LandPlot",BZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EZ=[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]],V3=n("Landmark",EZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OZ=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],T3=n("Languages",OZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UZ=[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]],F3=n("LaptopMinimalCheck",UZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZZ=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]],oo=n("LaptopMinimal",ZZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WZ=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],D3=n("Laptop",WZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GZ=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]],R3=n("LassoSelect",GZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XZ=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]],B3=n("Lasso",XZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KZ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],E3=n("Laugh",KZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QZ=[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]],O3=n("Layers2",QZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JZ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ao=n("Layers",JZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YZ=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],U3=n("LayoutDashboard",YZ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eW=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Z3=n("LayoutGrid",eW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tW=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],W3=n("LayoutList",tW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nW=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],G3=n("LayoutPanelLeft",nW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oW=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],X3=n("LayoutPanelTop",oW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aW=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],K3=n("LayoutTemplate",aW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cW=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Q3=n("Leaf",cW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iW=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]],J3=n("LeafyGreen",iW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rW=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]],Y3=n("Lectern",rW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dW=[["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",key:"blevx4"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M4 11h6",key:"olkgv1"}]],e6=n("LetterText",dW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lW=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]],t6=n("LibraryBig",lW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sW=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],n6=n("Library",sW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hW=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],o6=n("LifeBuoy",hW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yW=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]],a6=n("Ligature",yW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uW=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],c6=n("LightbulbOff",uW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pW=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],i6=n("Lightbulb",pW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kW=[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],r6=n("Link2Off",kW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fW=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],d6=n("Link2",fW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mW=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],l6=n("Link",mW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MW=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],s6=n("Linkedin",MW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vW=[["path",{d:"M11 18H3",key:"n3j2dh"}],["path",{d:"m15 18 2 2 4-4",key:"1szwhi"}],["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}]],h6=n("ListCheck",vW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gW=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],y6=n("ListChecks",gW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xW=[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]],u6=n("ListCollapse",xW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _W=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]],p6=n("ListEnd",_W);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wW=[["path",{d:"M10 18h4",key:"1ulq68"}],["path",{d:"M11 6H3",key:"1u26ik"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 9V3",key:"xwwp7m"}],["path",{d:"M7 12h8",key:"7a1bxv"}]],k6=n("ListFilterPlus",wW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]],f6=n("ListFilter",LW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CW=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],m6=n("ListMinus",CW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IW=[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]],M6=n("ListMusic",IW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SW=[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]],v6=n("ListOrdered",SW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NW=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],g6=n("ListPlus",NW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $W=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]],x6=n("ListRestart",$W);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zW=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]],_6=n("ListStart",zW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qW=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],w6=n("ListTodo",qW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AW=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],L6=n("ListTree",AW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bW=[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]],C6=n("ListVideo",bW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jW=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]],I6=n("ListX",jW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HW=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],S6=n("List",HW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PW=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],co=n("LoaderCircle",PW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VW=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],N6=n("LoaderPinwheel",VW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TW=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],$6=n("Loader",TW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],z6=n("LocateFixed",FW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],q6=n("LocateOff",DW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RW=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]],A6=n("Locate",RW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BW=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]],io=n("LockKeyholeOpen",BW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EW=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],b6=n("LockKeyhole",EW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OW=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],ro=n("LockOpen",OW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UW=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],j6=n("Lock",UW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZW=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],H6=n("LogIn",ZW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WW=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],P6=n("LogOut",WW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GW=[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]],V6=n("Logs",GW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XW=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]],T6=n("Lollipop",XW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KW=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]],F6=n("Luggage",KW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QW=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]],D6=n("Magnet",QW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JW=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],R6=n("MailCheck",JW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YW=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]],B6=n("MailMinus",YW);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eG=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],E6=n("MailOpen",eG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tG=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]],O6=n("MailPlus",tG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nG=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],U6=n("MailQuestion",nG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oG=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"8lzu5m"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]],Z6=n("MailSearch",oG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aG=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],W6=n("MailWarning",aG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cG=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]],G6=n("MailX",cG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iG=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],X6=n("Mail",iG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rG=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",key:"15i455"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]],K6=n("Mailbox",rG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dG=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]],Q6=n("Mails",dG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],J6=n("MapPinCheckInside",lG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sG=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]],Y6=n("MapPinCheck",sG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hG=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]],e8=n("MapPinHouse",hG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],t8=n("MapPinMinusInside",yG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uG=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"11uxia"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}]],n8=n("MapPinMinus",uG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pG=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16",key:"1d4wjd"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",key:"12yil7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",key:"lhrkcz"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74",key:"13wojd"}]],o8=n("MapPinOff",pG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],a8=n("MapPinPlusInside",kG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fG=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]],c8=n("MapPinPlus",fG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],i8=n("MapPinXInside",mG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MG=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",key:"y0ewhp"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m21.5 15.5-5 5",key:"11iqnx"}],["path",{d:"m21.5 20.5-5-5",key:"1bylgx"}]],r8=n("MapPinX",MG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vG=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],xc=n("MapPin",vG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gG=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],d8=n("MapPinned",gG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xG=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],_c=n("Map",xG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _G=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]],l8=n("Martini",_G);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wG=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],s8=n("Maximize2",wG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LG=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],h8=n("Maximize",LG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CG=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],y8=n("Medal",CG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IG=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],u8=n("MegaphoneOff",IG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SG=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],p8=n("Megaphone",SG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NG=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],k8=n("Meh",NG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $G=[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]],f8=n("MemoryStick",$G);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zG=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],m8=n("Menu",zG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qG=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],M8=n("Merge",qG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AG=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]],v8=n("MessageCircleCode",AG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bG=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]],g8=n("MessageCircleDashed",bG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]],x8=n("MessageCircleHeart",jG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],_8=n("MessageCircleMore",HG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PG=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]],w8=n("MessageCircleOff",PG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],L8=n("MessageCirclePlus",VG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],C8=n("MessageCircleQuestion",TG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]],I8=n("MessageCircleReply",FG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],S8=n("MessageCircleWarning",DG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],N8=n("MessageCircleX",RG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BG=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],$8=n("MessageCircle",BG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EG=[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],z8=n("MessageSquareCode",EG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OG=[["path",{d:"M10 17H7l-4 4v-7",key:"1r71xu"}],["path",{d:"M14 17h1",key:"nufu4t"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2",key:"29akq3"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}]],q8=n("MessageSquareDashed",OG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UG=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]],A8=n("MessageSquareDiff",UG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZG=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],b8=n("MessageSquareDot",ZG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]],j8=n("MessageSquareHeart",WG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GG=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2",key:"h3d1vz"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",key:"xsnnhn"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1",key:"1ccwuk"}]],H8=n("MessageSquareLock",GG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]],P8=n("MessageSquareMore",XG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KG=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]],V8=n("MessageSquareOff",KG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],T8=n("MessageSquarePlus",QG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],F8=n("MessageSquareQuote",JG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YG=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]],D8=n("MessageSquareReply",YG);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eX=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]],R8=n("MessageSquareShare",eX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],B8=n("MessageSquareText",tX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]],E8=n("MessageSquareWarning",nX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],O8=n("MessageSquareX",oX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aX=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],U8=n("MessageSquare",aX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cX=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]],Z8=n("MessagesSquare",cX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iX=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],W8=n("MicOff",iX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rX=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],lo=n("MicVocal",rX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dX=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],G8=n("Mic",dX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lX=[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]],X8=n("Microchip",lX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sX=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],K8=n("Microscope",sX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hX=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]],Q8=n("Microwave",hX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yX=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]],J8=n("Milestone",yX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uX=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Y8=n("MilkOff",uX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pX=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]],e7=n("Milk",pX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kX=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],t7=n("Minimize2",kX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fX=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],n7=n("Minimize",fX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mX=[["path",{d:"M5 12h14",key:"1ays0h"}]],o7=n("Minus",mX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MX=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],a7=n("MonitorCheck",MX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vX=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m15.2 4.9-.9-.4",key:"12wd2u"}],["path",{d:"m15.2 7.1-.9.4",key:"1r2vl7"}],["path",{d:"m16.9 3.2-.4-.9",key:"3zbo91"}],["path",{d:"m16.9 8.8-.4.9",key:"1qr2dn"}],["path",{d:"m19.5 2.3-.4.9",key:"1rjrkq"}],["path",{d:"m19.5 9.7-.4-.9",key:"heryx5"}],["path",{d:"m21.7 4.5-.9.4",key:"17fqt1"}],["path",{d:"m21.7 7.5-.9-.4",key:"14zyni"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],c7=n("MonitorCog",vX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gX=[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],i7=n("MonitorDot",gX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xX=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],r7=n("MonitorDown",xX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _X=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],d7=n("MonitorOff",_X);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wX=[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],l7=n("MonitorPause",wX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LX=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],s7=n("MonitorPlay",LX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CX=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],h7=n("MonitorSmartphone",CX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IX=[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]],y7=n("MonitorSpeaker",IX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SX=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]],u7=n("MonitorStop",SX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NX=[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],p7=n("MonitorUp",NX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $X=[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],k7=n("MonitorX",$X);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zX=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],f7=n("Monitor",zX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qX=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]],m7=n("MoonStar",qX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AX=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],M7=n("Moon",AX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bX=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]],v7=n("MountainSnow",bX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jX=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],g7=n("Mountain",jX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HX=[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],x7=n("MouseOff",HX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PX=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],_7=n("MousePointer2",PX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VX=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",key:"11pp1i"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]],w7=n("MousePointerBan",VX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TX=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],L7=n("MousePointerClick",TX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FX=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],C7=n("MousePointer",FX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DX=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],I7=n("Mouse",DX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RX=[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]],so=n("Move3d",RX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BX=[["path",{d:"M19 13v6h-6",key:"1hxl6d"}],["path",{d:"M5 11V5h6",key:"12e2xe"}],["path",{d:"m5 5 14 14",key:"11anup"}]],S7=n("MoveDiagonal2",BX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EX=[["path",{d:"M11 19H5v-6",key:"8awifj"}],["path",{d:"M13 5h6v6",key:"7voy1q"}],["path",{d:"M19 5 5 19",key:"wwaj1z"}]],N7=n("MoveDiagonal",EX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OX=[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],$7=n("MoveDownLeft",OX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UX=[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],z7=n("MoveDownRight",UX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZX=[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]],q7=n("MoveDown",ZX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WX=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],A7=n("MoveHorizontal",WX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GX=[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]],b7=n("MoveLeft",GX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XX=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],j7=n("MoveRight",XX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KX=[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],H7=n("MoveUpLeft",KX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QX=[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],P7=n("MoveUpRight",QX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JX=[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]],V7=n("MoveUp",JX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YX=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]],T7=n("MoveVertical",YX);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eK=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],F7=n("Move",eK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tK=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],D7=n("Music2",tK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nK=[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]],R7=n("Music3",nK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oK=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],B7=n("Music4",oK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aK=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],E7=n("Music",aK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cK=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],O7=n("Navigation2Off",cK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iK=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],U7=n("Navigation2",iK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rK=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Z7=n("NavigationOff",rK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dK=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],W7=n("Navigation",dK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lK=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],G7=n("Network",lK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sK=[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]],X7=n("Newspaper",sK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hK=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]],K7=n("Nfc",hK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yK=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]],Q7=n("NotebookPen",yK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]],J7=n("NotebookTabs",uK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],Y7=n("NotebookText",pK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kK=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],ef=n("Notebook",kK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fK=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],tf=n("NotepadTextDashed",fK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mK=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],nf=n("NotepadText",mK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MK=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],of=n("NutOff",MK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vK=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]],af=n("Nut",vK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gK=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],ho=n("OctagonAlert",gK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xK=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"M8 12h8",key:"1wcyev"}]],cf=n("OctagonMinus",xK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _K=[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],yo=n("OctagonPause",_K);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wK=[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],uo=n("OctagonX",wK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LK=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],rf=n("Octagon",LK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CK=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",key:"1x94xo"}]],df=n("Omega",CK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IK=[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]],lf=n("Option",IK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SK=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],sf=n("Orbit",SK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NK=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]],hf=n("Origami",NK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $K=[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]],yf=n("Package2",$K);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zK=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],uf=n("PackageCheck",zK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qK=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],pf=n("PackageMinus",qK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AK=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],kf=n("PackageOpen",AK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bK=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],ff=n("PackagePlus",bK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jK=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]],mf=n("PackageSearch",jK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HK=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]],Mf=n("PackageX",HK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PK=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],vf=n("Package",PK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VK=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]],gf=n("PaintBucket",VK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TK=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],xf=n("PaintRoller",TK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FK=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]],po=n("PaintbrushVertical",FK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DK=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],_f=n("Paintbrush",DK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RK=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],wf=n("Palette",RK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]],Lf=n("PanelBottomClose",BK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]],ko=n("PanelBottomDashed",EK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],Cf=n("PanelBottomOpen",OK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],If=n("PanelBottom",UK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],fo=n("PanelLeftClose",ZK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]],mo=n("PanelLeftDashed",WK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Mo=n("PanelLeftOpen",GK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],vo=n("PanelLeft",XK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],Sf=n("PanelRightClose",KK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]],go=n("PanelRightDashed",QK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]],Nf=n("PanelRightOpen",JK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$f=n("PanelRight",YK);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]],zf=n("PanelTopClose",eQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]],xo=n("PanelTopDashed",tQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]],qf=n("PanelTopOpen",nQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Af=n("PanelTop",oQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]],bf=n("PanelsLeftBottom",aQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]],jf=n("PanelsRightBottom",cQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],_o=n("PanelsTopLeft",iQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rQ=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Hf=n("Paperclip",rQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dQ=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]],Pf=n("Parentheses",dQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lQ=[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]],Vf=n("ParkingMeter",lQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sQ=[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]],Tf=n("PartyPopper",sQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hQ=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Ff=n("Pause",hQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yQ=[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]],Df=n("PawPrint",yQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uQ=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Rf=n("PcCase",uQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pQ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],wo=n("PenLine",pQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kQ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Bf=n("PenOff",kQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fQ=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Ef=n("PenTool",fQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Lo=n("Pen",mQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MQ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]],Of=n("PencilLine",MQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vQ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Uf=n("PencilOff",vQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gQ=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Zf=n("PencilRuler",gQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Wf=n("Pencil",xQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Q=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",key:"2hea0t"}]],Gf=n("Pentagon",_Q);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wQ=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],Xf=n("Percent",wQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LQ=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Kf=n("PersonStanding",LQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CQ=[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]],Qf=n("PhilippinePeso",CQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IQ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Jf=n("PhoneCall",IQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SQ=[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Yf=n("PhoneForwarded",SQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NQ=[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],em=n("PhoneIncoming",NQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Q=[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],tm=n("PhoneMissed",$Q);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zQ=[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]],nm=n("PhoneOff",zQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qQ=[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],om=n("PhoneOutgoing",qQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AQ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],am=n("Phone",AQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bQ=[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]],cm=n("Pi",bQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jQ=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]],im=n("Piano",jQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HQ=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]],rm=n("Pickaxe",HQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PQ=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]],dm=n("PictureInPicture2",PQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VQ=[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]],lm=n("PictureInPicture",VQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TQ=[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]],sm=n("PiggyBank",TQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FQ=[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]],hm=n("PilcrowLeft",FQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DQ=[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]],ym=n("PilcrowRight",DQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RQ=[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]],um=n("Pilcrow",RQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BQ=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]],pm=n("PillBottle",BQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EQ=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],km=n("Pill",EQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OQ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],fm=n("PinOff",OQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UQ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],mm=n("Pin",UQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZQ=[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]],Mm=n("Pipette",ZQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WQ=[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]],vm=n("Pizza",WQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GQ=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]],gm=n("PlaneLanding",GQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XQ=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]],xm=n("PlaneTakeoff",XQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KQ=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],wc=n("Plane",KQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QQ=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],_m=n("Play",QQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JQ=[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z",key:"wtfw2c"}]],wm=n("Plug2",JQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YQ=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],Co=n("PlugZap",YQ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eJ=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],Lm=n("Plug",eJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tJ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Cm=n("Plus",tJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nJ=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]],Im=n("PocketKnife",nJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oJ=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]],Sm=n("Pocket",oJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aJ=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]],Nm=n("Podcast",aJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cJ=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],$m=n("PointerOff",cJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iJ=[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]],zm=n("Pointer",iJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rJ=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]],qm=n("Popcorn",rJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dJ=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]],Am=n("Popsicle",dJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lJ=[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]],bm=n("PoundSterling",lJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sJ=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],jm=n("PowerOff",sJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hJ=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Hm=n("Power",hJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yJ=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Pm=n("Presentation",yJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uJ=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",key:"qeb09x"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",key:"1md90i"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}]],Vm=n("PrinterCheck",uJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pJ=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Tm=n("Printer",pJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kJ=[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]],Fm=n("Projector",kJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fJ=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]],Dm=n("Proportions",fJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mJ=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Rm=n("Puzzle",mJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MJ=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],Bm=n("Pyramid",MJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vJ=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Em=n("QrCode",vJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gJ=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Om=n("Quote",gJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xJ=[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]],Um=n("Rabbit",xJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _J=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],Zm=n("Radar",_J);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wJ=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]],Wm=n("Radiation",wJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LJ=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]],Gm=n("Radical",LJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CJ=[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],Xm=n("RadioReceiver",CJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IJ=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],Km=n("RadioTower",IJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SJ=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Qm=n("Radio",SJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NJ=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Jm=n("Radius",NJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $J=[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]],Ym=n("RailSymbol",$J);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zJ=[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]],e9=n("Rainbow",zJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qJ=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]],t9=n("Rat",qJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AJ=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],n9=n("Ratio",AJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],o9=n("ReceiptCent",bJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]],a9=n("ReceiptEuro",jJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]],c9=n("ReceiptIndianRupee",HJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]],i9=n("ReceiptJapaneseYen",PJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]],r9=n("ReceiptPoundSterling",VJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]],d9=n("ReceiptRussianRuble",TJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]],l9=n("ReceiptSwissFranc",FJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]],s9=n("ReceiptText",DJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RJ=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],h9=n("Receipt",RJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BJ=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],Io=n("RectangleEllipsis",BJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EJ=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],y9=n("RectangleHorizontal",EJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OJ=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],u9=n("RectangleVertical",OJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UJ=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]],p9=n("Recycle",UJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZJ=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],k9=n("Redo2",ZJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WJ=[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],f9=n("RedoDot",WJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GJ=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],m9=n("Redo",GJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XJ=[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],M9=n("RefreshCcwDot",XJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KJ=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],v9=n("RefreshCcw",KJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QJ=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],g9=n("RefreshCwOff",QJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JJ=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],x9=n("RefreshCw",JJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YJ=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]],_9=n("Refrigerator",YJ);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eY=[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]],w9=n("Regex",eY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tY=[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]],L9=n("RemoveFormatting",tY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nY=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]],C9=n("Repeat1",nY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oY=[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]],I9=n("Repeat2",oY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aY=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],S9=n("Repeat",aY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cY=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"1yyzbs"}],["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"zfj4xr"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1",key:"1ageje"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],N9=n("ReplaceAll",cY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iY=[["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1",key:"3y3t5z"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],$9=n("Replace",iY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rY=[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]],z9=n("ReplyAll",rY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dY=[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]],q9=n("Reply",dY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lY=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],A9=n("Rewind",lY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sY=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]],b9=n("Ribbon",sY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hY=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],j9=n("Rocket",hY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yY=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]],H9=n("RockingChair",yY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uY=[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]],P9=n("RollerCoaster",uY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pY=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],So=n("Rotate3d",pY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kY=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]],V9=n("RotateCcwSquare",kY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fY=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],T9=n("RotateCcw",fY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mY=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]],F9=n("RotateCwSquare",mY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MY=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],D9=n("RotateCw",MY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vY=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],R9=n("RouteOff",vY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gY=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],B9=n("Route",gY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xY=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],E9=n("Router",xY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Y=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],No=n("Rows2",_Y);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],$o=n("Rows3",wY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]],O9=n("Rows4",LY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CY=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],U9=n("Rss",CY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IY=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],Z9=n("Ruler",IY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SY=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]],W9=n("RussianRuble",SY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NY=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]],G9=n("Sailboat",NY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Y=[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]],X9=n("Salad",$Y);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zY=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]],K9=n("Sandwich",zY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qY=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],Q9=n("SatelliteDish",qY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AY=[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]],J9=n("Satellite",AY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bY=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]],Y9=n("SaveAll",bY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jY=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M29.5 11.5s5 5 4 5",key:"zzn4i6"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]],eM=n("SaveOff",jY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HY=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tM=n("Save",HY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PY=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]],zo=n("Scale3d",PY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VY=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],nM=n("Scale",VY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TY=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]],oM=n("Scaling",TY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]],aM=n("ScanBarcode",FY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],cM=n("ScanEye",DY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]],iM=n("ScanFace",RY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BY=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",key:"1algrk"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],rM=n("ScanHeart",BY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],dM=n("ScanLine",EY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OY=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4",key:"uk4fdo"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M17 8V7",key:"q2g9wo"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1",key:"m9kyts"}]],lM=n("ScanQrCode",OY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],sM=n("ScanSearch",UY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]],hM=n("ScanText",ZY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WY=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],yM=n("Scan",WY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GY=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],uM=n("School",GY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XY=[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],pM=n("ScissorsLineDashed",XY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KY=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],kM=n("Scissors",KY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QY=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],fM=n("ScreenShareOff",QY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JY=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]],mM=n("ScreenShare",JY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YY=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],MM=n("ScrollText",YY);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eee=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],vM=n("Scroll",eee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tee=[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],gM=n("SearchCheck",tee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nee=[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xM=n("SearchCode",nee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oee=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],_M=n("SearchSlash",oee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aee=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],wM=n("SearchX",aee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cee=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],LM=n("Search",cee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iee=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]],CM=n("Section",iee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ree=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],qo=n("SendHorizontal",ree);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dee=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]],IM=n("SendToBack",dee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lee=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],SM=n("Send",lee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const see=[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]],NM=n("SeparatorHorizontal",see);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hee=[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]],$M=n("SeparatorVertical",hee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yee=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]],zM=n("ServerCog",yee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uee=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]],qM=n("ServerCrash",uee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pee=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],AM=n("ServerOff",pee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kee=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],bM=n("Server",kee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fee=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],jM=n("Settings2",fee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mee=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],HM=n("Settings",mee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mee=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],PM=n("Shapes",Mee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vee=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],VM=n("Share2",vee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gee=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]],TM=n("Share",gee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xee=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]],FM=n("Sheet",xee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ee=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]],DM=n("Shell",_ee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],RM=n("ShieldAlert",wee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]],BM=n("ShieldBan",Lee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],EM=n("ShieldCheck",Cee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],OM=n("ShieldEllipsis",Iee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const See=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]],UM=n("ShieldHalf",See);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]],ZM=n("ShieldMinus",Nee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ee=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]],WM=n("ShieldOff",$ee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],Lc=n("ShieldPlus",zee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]],GM=n("ShieldQuestion",qee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],Ao=n("ShieldX",Aee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],XM=n("Shield",bee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jee=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]],KM=n("ShipWheel",jee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hee=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],QM=n("Ship",Hee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pee=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],JM=n("Shirt",Pee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vee=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],YM=n("ShoppingBag",Vee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tee=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],ev=n("ShoppingBasket",Tee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fee=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],tv=n("ShoppingCart",Fee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dee=[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]],nv=n("Shovel",Dee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ree=[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]],ov=n("ShowerHead",Ree);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bee=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],av=n("Shrink",Bee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eee=[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",key:"ubcgy"}],["path",{d:"m14 14-2 2",key:"847xa2"}]],cv=n("Shrub",Eee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oee=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],iv=n("Shuffle",Oee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uee=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]],rv=n("Sigma",Uee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]],dv=n("SignalHigh",Zee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]],lv=n("SignalLow",Wee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]],sv=n("SignalMedium",Gee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xee=[["path",{d:"M2 20h.01",key:"4haj6o"}]],hv=n("SignalZero",Xee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kee=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]],yv=n("Signal",Kee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qee=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]],uv=n("Signature",Qee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jee=[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]],pv=n("SignpostBig",Jee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yee=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",key:"gqqp9m"}]],kv=n("Signpost",Yee);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1e=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]],fv=n("Siren",e1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1e=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],mv=n("SkipBack",t1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1e=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Mv=n("SkipForward",n1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1e=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],vv=n("Skull",o1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1e=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]],gv=n("Slack",a1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1e=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],xv=n("Slash",c1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1e=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]],_v=n("Slice",i1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1e=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],wv=n("SlidersHorizontal",r1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1e=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],bo=n("SlidersVertical",d1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1e=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]],Lv=n("SmartphoneCharging",l1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1e=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]],Cv=n("SmartphoneNfc",s1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1e=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Iv=n("Smartphone",h1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1e=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],Sv=n("SmilePlus",y1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1e=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Nv=n("Smile",u1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1e=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]],$v=n("Snail",p1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1e=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],zv=n("Snowflake",k1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1e=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],qv=n("Sofa",f1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1e=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]],Av=n("Soup",m1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1e=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],bv=n("Space",M1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1e=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]],jv=n("Spade",v1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1e=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]],Hv=n("Sparkle",g1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1e=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],jo=n("Sparkles",x1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1e=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]],Pv=n("Speaker",_1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1e=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]],Vv=n("Speech",w1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1e=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]],Tv=n("SpellCheck2",L1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1e=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],Fv=n("SpellCheck",C1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1e=[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]],Dv=n("Spline",I1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1e=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]],Rv=n("Split",S1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1e=[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]],Bv=n("SprayCan",N1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1e=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],Ev=n("Sprout",$1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]],Ho=n("SquareActivity",z1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]],Po=n("SquareArrowDownLeft",q1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]],Vo=n("SquareArrowDownRight",A1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],To=n("SquareArrowDown",b1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]],Fo=n("SquareArrowLeft",j1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1e=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Do=n("SquareArrowOutDownLeft",H1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1e=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]],Ro=n("SquareArrowOutDownRight",P1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1e=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]],Bo=n("SquareArrowOutUpLeft",V1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1e=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]],Eo=n("SquareArrowOutUpRight",T1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],Oo=n("SquareArrowRight",F1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]],Uo=n("SquareArrowUpLeft",D1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]],Zo=n("SquareArrowUpRight",R1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],Wo=n("SquareArrowUp",B1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]],Go=n("SquareAsterisk",E1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1e=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],Xo=n("SquareBottomDashedScissors",O1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]],L1=n("SquareChartGantt",U1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1e=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ko=n("SquareCheckBig",Z1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qo=n("SquareCheck",W1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],Jo=n("SquareChevronDown",G1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],Yo=n("SquareChevronLeft",X1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],ea=n("SquareChevronRight",K1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],ta=n("SquareChevronUp",Q1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1e=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],na=n("SquareCode",J1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1e=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]],Ov=n("SquareDashedBottomCode",Y1e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ete=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]],Uv=n("SquareDashedBottom",ete);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tte=[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]],oa=n("SquareDashedKanban",tte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nte=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]],aa=n("SquareDashedMousePointer",nte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ote=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],ca=n("SquareDashed",ote);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ate=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]],ia=n("SquareDivide",ate);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],ra=n("SquareDot",cte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ite=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]],da=n("SquareEqual",ite);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],la=n("SquareFunction",rte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],sa=n("SquareKanban",dte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]],ha=n("SquareLibrary",lte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ste=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]],ya=n("SquareM",ste);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]],ua=n("SquareMenu",hte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]],pa=n("SquareMinus",yte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ute=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]],ka=n("SquareMousePointer",ute);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pte=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]],fa=n("SquareParkingOff",pte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],ma=n("SquareParking",kte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fte=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Ke=n("SquarePen",fte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],Ma=n("SquarePercent",mte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]],va=n("SquarePi",Mte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]],ga=n("SquarePilcrow",vte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]],xa=n("SquarePlay",gte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],_a=n("SquarePlus",xte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _te=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],wa=n("SquarePower",_te);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wte=[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Zv=n("SquareRadical",wte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lte=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],La=n("SquareScissors",Lte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]],Ca=n("SquareSigma",Cte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ite=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],Ia=n("SquareSlash",Ite);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ste=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],Sa=n("SquareSplitHorizontal",Ste);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nte=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Na=n("SquareSplitVertical",Nte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $te=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Wv=n("SquareSquare",$te);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zte=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]],Gv=n("SquareStack",zte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qte=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],$a=n("SquareTerminal",qte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ate=[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],za=n("SquareUserRound",Ate);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]],qa=n("SquareUser",bte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Aa=n("SquareX",jte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hte=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Xv=n("Square",Hte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pte=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]],Kv=n("Squircle",Pte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vte=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]],Qv=n("Squirrel",Vte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tte=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]],Jv=n("Stamp",Tte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fte=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],Yv=n("StarHalf",Fte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dte=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],eg=n("StarOff",Dte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rte=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Cc=n("Star",Rte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bte=[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]],tg=n("StepBack",Bte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ete=[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]],ng=n("StepForward",Ete);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ote=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],og=n("Stethoscope",Ote);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ute=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]],ag=n("Sticker",Ute);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zte=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]],cg=n("StickyNote",Zte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wte=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],ig=n("Store",Wte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gte=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]],rg=n("StretchHorizontal",Gte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xte=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]],dg=n("StretchVertical",Xte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kte=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],lg=n("Strikethrough",Kte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qte=[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]],sg=n("Subscript",Qte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jte=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]],hg=n("SunDim",Jte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yte=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]],yg=n("SunMedium",Yte);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ene=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]],ug=n("SunMoon",ene);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tne=[["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 9a3 3 0 0 0 0 6",key:"gv75dk"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6 1.5-3H22",key:"o5qa3v"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}]],pg=n("SunSnow",tne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nne=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kg=n("Sun",nne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const one=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],fg=n("Sunrise",one);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ane=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],mg=n("Sunset",ane);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cne=[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]],Mg=n("Superscript",cne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ine=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]],vg=n("SwatchBook",ine);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rne=[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]],gg=n("SwissFranc",rne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dne=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]],xg=n("SwitchCamera",dne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lne=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]],_g=n("Sword",lne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sne=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],wg=n("Swords",sne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hne=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],Lg=n("Syringe",hne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yne=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],Cg=n("Table2",yne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const une=[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ig=n("TableCellsMerge",une);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pne=[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Sg=n("TableCellsSplit",pne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kne=[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]],Ng=n("TableColumnsSplit",kne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fne=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]],$g=n("TableOfContents",fne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mne=[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],zg=n("TableProperties",mne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mne=[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]],qg=n("TableRowsSplit",Mne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vne=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Ag=n("Table",vne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gne=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],bg=n("TabletSmartphone",gne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xne=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],jg=n("Tablet",xne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ne=[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]],Hg=n("Tablets",_ne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wne=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Pg=n("Tag",wne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lne=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]],Vg=n("Tags",Lne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cne=[["path",{d:"M4 4v16",key:"6qkkli"}]],Tg=n("Tally1",Cne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ine=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]],Fg=n("Tally2",Ine);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]],Dg=n("Tally3",Sne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]],Rg=n("Tally4",Nne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ne=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]],Bg=n("Tally5",$ne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zne=[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]],Eg=n("Tangent",zne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qne=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Og=n("Target",qne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ane=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],Ug=n("Telescope",Ane);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bne=[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]],Zg=n("TentTree",bne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jne=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],Wg=n("Tent",jne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hne=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Gg=n("Terminal",Hne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pne=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]],ba=n("TestTubeDiagonal",Pne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vne=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],Xg=n("TestTube",Vne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tne=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]],Kg=n("TestTubes",Tne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fne=[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]],Qg=n("TextCursorInput",Fne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dne=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]],Jg=n("TextCursor",Dne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rne=[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]],Yg=n("TextQuote",Rne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bne=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],ex=n("TextSearch",Bne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ene=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]],ja=n("TextSelect",Ene);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const One=[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]],tx=n("Text",One);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Une=[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]],nx=n("Theater",Une);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zne=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]],ox=n("ThermometerSnowflake",Zne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wne=[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]],ax=n("ThermometerSun",Wne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gne=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],cx=n("Thermometer",Gne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xne=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],ix=n("ThumbsDown",Xne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kne=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],rx=n("ThumbsUp",Kne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qne=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dx=n("TicketCheck",Qne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jne=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]],lx=n("TicketMinus",Jne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yne=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],sx=n("TicketPercent",Yne);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eoe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],hx=n("TicketPlus",eoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]],yx=n("TicketSlash",toe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const noe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],ux=n("TicketX",noe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ooe=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],px=n("Ticket",ooe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aoe=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",key:"16muxl"}],["path",{d:"m12 13.5 3.75.5",key:"1i9qhk"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],kx=n("TicketsPlane",aoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const coe=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],fx=n("Tickets",coe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ioe=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],mx=n("TimerOff",ioe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const roe=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],Mx=n("TimerReset",roe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const doe=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],vx=n("Timer",doe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const loe=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]],gx=n("ToggleLeft",loe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const soe=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]],xx=n("ToggleRight",soe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hoe=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]],_x=n("Toilet",hoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yoe=[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]],wx=n("Tornado",yoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uoe=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]],Lx=n("Torus",uoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const poe=[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]],Cx=n("TouchpadOff",poe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const koe=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]],Ix=n("Touchpad",koe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const foe=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]],Sx=n("TowerControl",foe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const moe=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]],Nx=n("ToyBrick",moe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Moe=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]],$x=n("Tractor",Moe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const voe=[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]],zx=n("TrafficCone",voe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const goe=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]],qx=n("TrainFrontTunnel",goe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xoe=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],Ax=n("TrainFront",xoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _oe=[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]],bx=n("TrainTrack",_oe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const woe=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],Ha=n("TramFront",woe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Loe=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],jx=n("Trash2",Loe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Coe=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],Hx=n("Trash",Coe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ioe=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],Px=n("TreeDeciduous",Ioe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Soe=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]],Pa=n("TreePalm",Soe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Noe=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]],Vx=n("TreePine",Noe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $oe=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Tx=n("Trees",$oe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zoe=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]],Fx=n("Trello",zoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qoe=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Dx=n("TrendingDown",qoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aoe=[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]],Rx=n("TrendingUpDown",Aoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const boe=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Bx=n("TrendingUp",boe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const joe=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Va=n("TriangleAlert",joe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hoe=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013",key:"pltmmw"}],["path",{d:"M14 21h2",key:"v4qezv"}],["path",{d:"m15.874 7.743 1 1.732",key:"10m0iw"}],["path",{d:"m18.849 12.952 1 1.732",key:"zadnam"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824",key:"fvwuk4"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839",key:"1e1kah"}],["path",{d:"m5.136 12.952-1 1.732",key:"1u4ldi"}],["path",{d:"M8 21h2",key:"i9zjee"}],["path",{d:"m8.102 7.743-1 1.732",key:"1zzo4u"}]],Ex=n("TriangleDashed",Hoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Poe=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]],Ox=n("TriangleRight",Poe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Voe=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],Ux=n("Triangle",Voe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Toe=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Zx=n("Trophy",Toe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Foe=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Wx=n("Truck",Foe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Doe=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]],Gx=n("Turtle",Doe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Roe=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],Xx=n("TvMinimalPlay",Roe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Boe=[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],Ta=n("TvMinimal",Boe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eoe=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],Kx=n("Tv",Eoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ooe=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]],Qx=n("Twitch",Ooe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uoe=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Jx=n("Twitter",Uoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zoe=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",key:"1reda3"}]],Yx=n("TypeOutline",Zoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Woe=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],e_=n("Type",Woe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Goe=[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],t_=n("UmbrellaOff",Goe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xoe=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]],n_=n("Umbrella",Xoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Koe=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],o_=n("Underline",Koe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qoe=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],a_=n("Undo2",Qoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Joe=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13",key:"8mp6z9"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}]],c_=n("UndoDot",Joe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yoe=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],i_=n("Undo",Yoe);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eae=[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]],r_=n("UnfoldHorizontal",eae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tae=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]],d_=n("UnfoldVertical",tae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nae=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]],l_=n("Ungroup",nae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oae=[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"11g7fi"}]],Fa=n("University",oae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aae=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]],s_=n("Unlink2",aae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cae=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],h_=n("Unlink",cae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iae=[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]],y_=n("Unplug",iae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rae=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],u_=n("Upload",rae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dae=[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]],p_=n("Usb",dae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],k_=n("UserCheck",lae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sae=[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]],f_=n("UserCog",sae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],m_=n("UserMinus",hae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yae=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]],M_=n("UserPen",yae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],v_=n("UserPlus",uae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],Da=n("UserRoundCheck",pae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kae=[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]],Ra=n("UserRoundCog",kae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],Ba=n("UserRoundMinus",fae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mae=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487",key:"1c8h7z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}]],g_=n("UserRoundPen",mae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mae=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],Ea=n("UserRoundPlus",Mae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vae=[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]],x_=n("UserRoundSearch",vae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gae=[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]],Oa=n("UserRoundX",gae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xae=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Ua=n("UserRound",xae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ae=[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]],__=n("UserSearch",_ae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],w_=n("UserX",wae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lae=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],L_=n("User",Lae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cae=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],Za=n("UsersRound",Cae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iae=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],C_=n("Users",Iae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sae=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Wa=n("UtensilsCrossed",Sae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nae=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Ga=n("Utensils",Nae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ae=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]],I_=n("UtilityPole",$ae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zae=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],S_=n("Variable",zae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qae=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],N_=n("Vault",qae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aae=[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]],$_=n("Vegan",Aae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bae=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]],z_=n("VenetianMask",bae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jae=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],q_=n("VibrateOff",jae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hae=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]],A_=n("Vibrate",Hae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pae=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],b_=n("VideoOff",Pae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vae=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],j_=n("Video",Vae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tae=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]],H_=n("Videotape",Tae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fae=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],P_=n("View",Fae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dae=[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]],V_=n("Voicemail",Dae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rae=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4",key:"2880wi"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5",key:"113sja"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5",key:"1qmsgl"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",key:"1bmeqp"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",key:"iekzv9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],T_=n("Volleyball",Rae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]],F_=n("Volume1",Bae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],D_=n("Volume2",Eae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oae=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]],R_=n("VolumeOff",Oae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],B_=n("VolumeX",Uae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zae=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]],E_=n("Volume",Zae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wae=[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]],O_=n("Vote",Wae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gae=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],U_=n("WalletCards",Gae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xae=[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]],Xa=n("WalletMinimal",Xae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kae=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Z_=n("Wallet",Kae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qae=[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]],W_=n("Wallpaper",Qae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jae=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Ka=n("WandSparkles",Jae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yae=[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]],G_=n("Wand",Yae);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2e=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]],X_=n("Warehouse",e2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2e=[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]],K_=n("WashingMachine",t2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2e=[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]],Q_=n("Watch",n2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2e=[["path",{d:"M19 5a2 2 0 0 0-2 2v11",key:"s41o68"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}],["path",{d:"M7 13h10",key:"1rwob1"}],["path",{d:"M7 9h10",key:"12czzb"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11",key:"x0q4gh"}]],J_=n("WavesLadder",o2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2e=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Y_=n("Waves",a2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2e=[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]],ew=n("Waypoints",c2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2e=[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]],tw=n("Webcam",i2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2e=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],nw=n("WebhookOff",r2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2e=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]],ow=n("Webhook",d2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2e=[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]],aw=n("Weight",l2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2e=[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],cw=n("WheatOff",s2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2e=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],iw=n("Wheat",h2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2e=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],rw=n("WholeWord",y2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],dw=n("WifiHigh",u2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],lw=n("WifiLow",p2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sw=n("WifiOff",k2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2e=[["path",{d:"M12 20h.01",key:"zekei9"}]],hw=n("WifiZero",f2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2e=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],yw=n("Wifi",m2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2e=[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]],uw=n("WindArrowDown",M2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2e=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],pw=n("Wind",v2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2e=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],kw=n("WineOff",g2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2e=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],fw=n("Wine",x2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2e=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],mw=n("Workflow",_2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2e=[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]],Mw=n("Worm",w2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2e=[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]],vw=n("WrapText",L2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2e=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],gw=n("Wrench",C2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2e=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xw=n("X",I2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2e=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],_w=n("Youtube",S2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2e=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ww=n("ZapOff",N2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2e=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lw=n("Zap",$2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2e=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Cw=n("ZoomIn",z2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2e=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Iw=n("ZoomOut",q2e);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2e=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Fi,AArrowUp:Di,ALargeSmall:Ri,Accessibility:Bi,Activity:Ei,AirVent:Oi,Airplay:Ui,AlarmClock:Wi,AlarmClockCheck:mt,AlarmClockMinus:Mt,AlarmClockOff:Zi,AlarmClockPlus:vt,AlarmSmoke:Gi,Album:Xi,AlignCenter:Ji,AlignCenterHorizontal:Ki,AlignCenterVertical:Qi,AlignEndHorizontal:Yi,AlignEndVertical:er,AlignHorizontalDistributeCenter:tr,AlignHorizontalDistributeEnd:nr,AlignHorizontalDistributeStart:or,AlignHorizontalJustifyCenter:ar,AlignHorizontalJustifyEnd:cr,AlignHorizontalJustifyStart:ir,AlignHorizontalSpaceAround:rr,AlignHorizontalSpaceBetween:dr,AlignJustify:lr,AlignLeft:sr,AlignRight:hr,AlignStartHorizontal:yr,AlignStartVertical:ur,AlignVerticalDistributeCenter:pr,AlignVerticalDistributeEnd:kr,AlignVerticalDistributeStart:fr,AlignVerticalJustifyCenter:mr,AlignVerticalJustifyEnd:Mr,AlignVerticalJustifyStart:vr,AlignVerticalSpaceAround:gr,AlignVerticalSpaceBetween:xr,Ambulance:_r,Ampersand:wr,Ampersands:Lr,Amphora:Cr,Anchor:Ir,Angry:Sr,Annoyed:Nr,Antenna:$r,Anvil:zr,Aperture:qr,AppWindow:br,AppWindowMac:Ar,Apple:jr,Archive:Vr,ArchiveRestore:Hr,ArchiveX:Pr,Armchair:Tr,ArrowBigDown:Dr,ArrowBigDownDash:Fr,ArrowBigLeft:Br,ArrowBigLeftDash:Rr,ArrowBigRight:Or,ArrowBigRightDash:Er,ArrowBigUp:Zr,ArrowBigUpDash:Ur,ArrowDown:n0,ArrowDown01:Wr,ArrowDown10:Gr,ArrowDownAZ:gt,ArrowDownFromLine:Xr,ArrowDownLeft:Kr,ArrowDownNarrowWide:Qr,ArrowDownRight:Jr,ArrowDownToDot:Yr,ArrowDownToLine:e0,ArrowDownUp:t0,ArrowDownWideNarrow:xt,ArrowDownZA:_t,ArrowLeft:i0,ArrowLeftFromLine:o0,ArrowLeftRight:a0,ArrowLeftToLine:c0,ArrowRight:s0,ArrowRightFromLine:r0,ArrowRightLeft:d0,ArrowRightToLine:l0,ArrowUp:g0,ArrowUp01:h0,ArrowUp10:y0,ArrowUpAZ:wt,ArrowUpDown:u0,ArrowUpFromDot:p0,ArrowUpFromLine:k0,ArrowUpLeft:f0,ArrowUpNarrowWide:Lt,ArrowUpRight:m0,ArrowUpToLine:M0,ArrowUpWideNarrow:v0,ArrowUpZA:Ct,ArrowsUpFromLine:x0,Asterisk:_0,AtSign:w0,Atom:L0,AudioLines:C0,AudioWaveform:I0,Award:S0,Axe:N0,Axis3d:It,Baby:$0,Backpack:z0,Badge:Z0,BadgeAlert:q0,BadgeCent:A0,BadgeCheck:St,BadgeDollarSign:b0,BadgeEuro:j0,BadgeHelp:H0,BadgeIndianRupee:P0,BadgeInfo:V0,BadgeJapaneseYen:T0,BadgeMinus:F0,BadgePercent:D0,BadgePlus:R0,BadgePoundSterling:B0,BadgeRussianRuble:E0,BadgeSwissFranc:O0,BadgeX:U0,BaggageClaim:W0,Ban:G0,Banana:X0,Bandage:K0,Banknote:Q0,Barcode:J0,Baseline:Y0,Bath:ed,Battery:id,BatteryCharging:td,BatteryFull:nd,BatteryLow:od,BatteryMedium:ad,BatteryWarning:cd,Beaker:rd,Bean:ld,BeanOff:dd,Bed:yd,BedDouble:sd,BedSingle:hd,Beef:ud,Beer:kd,BeerOff:pd,Bell:_d,BellDot:fd,BellElectric:md,BellMinus:Md,BellOff:vd,BellPlus:gd,BellRing:xd,BetweenHorizontalEnd:Nt,BetweenHorizontalStart:$t,BetweenVerticalEnd:wd,BetweenVerticalStart:Ld,BicepsFlexed:Cd,Bike:Id,Binary:Sd,Binoculars:Nd,Biohazard:$d,Bird:zd,Bitcoin:qd,Blend:Ad,Blinds:bd,Blocks:jd,Bluetooth:Td,BluetoothConnected:Hd,BluetoothOff:Pd,BluetoothSearching:Vd,Bold:Fd,Bolt:Dd,Bomb:Rd,Bone:Bd,Book:hl,BookA:Ed,BookAudio:Od,BookCheck:Ud,BookCopy:Zd,BookDashed:zt,BookDown:Wd,BookHeadphones:Gd,BookHeart:Xd,BookImage:Kd,BookKey:Qd,BookLock:Jd,BookMarked:Yd,BookMinus:el,BookOpen:ol,BookOpenCheck:tl,BookOpenText:nl,BookPlus:al,BookText:cl,BookType:il,BookUp:dl,BookUp2:rl,BookUser:ll,BookX:sl,Bookmark:fl,BookmarkCheck:yl,BookmarkMinus:ul,BookmarkPlus:pl,BookmarkX:kl,BoomBox:ml,Bot:gl,BotMessageSquare:Ml,BotOff:vl,Box:xl,Boxes:_l,Braces:qt,Brackets:wl,Brain:Il,BrainCircuit:Ll,BrainCog:Cl,BrickWall:Sl,Briefcase:zl,BriefcaseBusiness:pc,BriefcaseConveyorBelt:Nl,BriefcaseMedical:$l,BringToFront:ql,Brush:Al,Bug:Hl,BugOff:bl,BugPlay:jl,Building:Vl,Building2:Pl,Bus:Fl,BusFront:Tl,Cable:Rl,CableCar:Dl,Cake:El,CakeSlice:Bl,Calculator:Ol,Calendar:hs,Calendar1:Ul,CalendarArrowDown:Zl,CalendarArrowUp:Wl,CalendarCheck:Xl,CalendarCheck2:Gl,CalendarClock:Kl,CalendarCog:Ql,CalendarDays:Jl,CalendarFold:Yl,CalendarHeart:es,CalendarMinus:ns,CalendarMinus2:ts,CalendarOff:os,CalendarPlus:cs,CalendarPlus2:as,CalendarRange:is,CalendarSearch:rs,CalendarSync:ds,CalendarX:ss,CalendarX2:ls,Camera:us,CameraOff:ys,Candy:fs,CandyCane:ps,CandyOff:ks,Cannabis:ms,Captions:At,CaptionsOff:Ms,Car:fc,CarFront:vs,CarTaxiFront:kc,Caravan:gs,Carrot:xs,CaseLower:_s,CaseSensitive:ws,CaseUpper:Ls,CassetteTape:Cs,Cast:Is,Castle:Ss,Cat:Ns,Cctv:$s,ChartArea:bt,ChartBar:Ht,ChartBarBig:jt,ChartBarDecreasing:zs,ChartBarIncreasing:qs,ChartBarStacked:As,ChartCandlestick:Pt,ChartColumn:Ft,ChartColumnBig:Vt,ChartColumnDecreasing:bs,ChartColumnIncreasing:Tt,ChartColumnStacked:js,ChartGantt:Hs,ChartLine:Dt,ChartNetwork:Ps,ChartNoAxesColumn:Bt,ChartNoAxesColumnDecreasing:Vs,ChartNoAxesColumnIncreasing:Rt,ChartNoAxesCombined:Ts,ChartNoAxesGantt:Et,ChartPie:Ot,ChartScatter:Ut,ChartSpline:Fs,Check:Rs,CheckCheck:Ds,ChefHat:Bs,Cherry:Es,ChevronDown:Os,ChevronFirst:Us,ChevronLast:Zs,ChevronLeft:mc,ChevronRight:Mc,ChevronUp:Ws,ChevronsDown:Xs,ChevronsDownUp:Gs,ChevronsLeft:Js,ChevronsLeftRight:Qs,ChevronsLeftRightEllipsis:Ks,ChevronsRight:eh,ChevronsRightLeft:Ys,ChevronsUp:nh,ChevronsUpDown:th,Chrome:oh,Church:ah,Cigarette:ih,CigaretteOff:ch,Circle:mh,CircleAlert:Zt,CircleArrowDown:Wt,CircleArrowLeft:Gt,CircleArrowOutDownLeft:Xt,CircleArrowOutDownRight:Kt,CircleArrowOutUpLeft:Qt,CircleArrowOutUpRight:Jt,CircleArrowRight:Yt,CircleArrowUp:en,CircleCheck:nn,CircleCheckBig:tn,CircleChevronDown:on,CircleChevronLeft:an,CircleChevronRight:cn,CircleChevronUp:rn,CircleDashed:rh,CircleDivide:dn,CircleDollarSign:dh,CircleDot:sh,CircleDotDashed:lh,CircleEllipsis:hh,CircleEqual:yh,CircleFadingArrowUp:uh,CircleFadingPlus:ph,CircleGauge:ln,CircleHelp:sn,CircleMinus:hn,CircleOff:kh,CircleParking:un,CircleParkingOff:yn,CirclePause:pn,CirclePercent:kn,CirclePlay:fn,CirclePlus:mn,CirclePower:Mn,CircleSlash:fh,CircleSlash2:vn,CircleStop:gn,CircleUser:_n,CircleUserRound:xn,CircleX:wn,CircuitBoard:Mh,Citrus:vh,Clapperboard:gh,Clipboard:$h,ClipboardCheck:xh,ClipboardCopy:_h,ClipboardList:wh,ClipboardMinus:Lh,ClipboardPaste:Ch,ClipboardPen:Cn,ClipboardPenLine:Ln,ClipboardPlus:Ih,ClipboardType:Sh,ClipboardX:Nh,Clock:vc,Clock1:zh,Clock10:qh,Clock11:Ah,Clock12:bh,Clock2:jh,Clock3:Hh,Clock4:Ph,Clock5:Vh,Clock6:Th,Clock7:Fh,Clock8:Dh,Clock9:Rh,ClockAlert:Bh,ClockArrowDown:Eh,ClockArrowUp:Oh,Cloud:cy,CloudAlert:Uh,CloudCog:Zh,CloudDownload:In,CloudDrizzle:Wh,CloudFog:Gh,CloudHail:Xh,CloudLightning:Kh,CloudMoon:Jh,CloudMoonRain:Qh,CloudOff:Yh,CloudRain:ty,CloudRainWind:ey,CloudSnow:ny,CloudSun:ay,CloudSunRain:oy,CloudUpload:Sn,Cloudy:iy,Clover:ry,Club:dy,Code:ly,CodeXml:Nn,Codepen:sy,Codesandbox:hy,Coffee:yy,Cog:uy,Coins:py,Columns2:$n,Columns3:zn,Columns4:ky,Combine:fy,Command:my,Compass:My,Component:vy,Computer:gy,ConciergeBell:xy,Cone:_y,Construction:wy,Contact:Ly,ContactRound:qn,Container:Cy,Contrast:Iy,Cookie:Sy,CookingPot:Ny,Copy:jy,CopyCheck:$y,CopyMinus:zy,CopyPlus:qy,CopySlash:Ay,CopyX:by,Copyleft:Hy,Copyright:Py,CornerDownLeft:Vy,CornerDownRight:Ty,CornerLeftDown:Fy,CornerLeftUp:Dy,CornerRightDown:Ry,CornerRightUp:By,CornerUpLeft:Ey,CornerUpRight:Oy,Cpu:Uy,CreativeCommons:Zy,CreditCard:Wy,Croissant:Gy,Crop:Xy,Cross:Ky,Crosshair:Qy,Crown:Jy,Cuboid:Yy,CupSoda:eu,Currency:tu,Cylinder:nu,Dam:ou,Database:iu,DatabaseBackup:au,DatabaseZap:cu,Delete:ru,Dessert:du,Diameter:lu,Diamond:yu,DiamondMinus:su,DiamondPercent:An,DiamondPlus:hu,Dice1:uu,Dice2:pu,Dice3:ku,Dice4:fu,Dice5:mu,Dice6:Mu,Dices:vu,Diff:gu,Disc:Lu,Disc2:xu,Disc3:_u,DiscAlbum:wu,Divide:Cu,Dna:Su,DnaOff:Iu,Dock:Nu,Dog:$u,DollarSign:zu,Donut:qu,DoorClosed:Au,DoorOpen:bu,Dot:ju,Download:Hu,DraftingCompass:Pu,Drama:Vu,Dribbble:Tu,Drill:Fu,Droplet:Ru,DropletOff:Du,Droplets:Bu,Drum:Eu,Drumstick:Ou,Dumbbell:Uu,Ear:Wu,EarOff:Zu,Earth:bn,EarthLock:Gu,Eclipse:Xu,Egg:Ju,EggFried:Ku,EggOff:Qu,Ellipsis:Hn,EllipsisVertical:jn,Equal:tp,EqualApproximately:Yu,EqualNot:ep,Eraser:np,EthernetPort:op,Euro:ap,Expand:cp,ExternalLink:ip,Eye:lp,EyeClosed:rp,EyeOff:dp,Facebook:sp,Factory:hp,Fan:yp,FastForward:up,Feather:pp,Fence:kp,FerrisWheel:fp,Figma:mp,File:p4,FileArchive:Mp,FileAudio:gp,FileAudio2:vp,FileAxis3d:Pn,FileBadge:_p,FileBadge2:xp,FileBox:wp,FileChartColumn:Tn,FileChartColumnIncreasing:Vn,FileChartLine:Fn,FileChartPie:Dn,FileCheck:Cp,FileCheck2:Lp,FileClock:Ip,FileCode:Np,FileCode2:Sp,FileCog:Rn,FileDiff:$p,FileDigit:zp,FileDown:qp,FileHeart:Ap,FileImage:bp,FileInput:jp,FileJson:Pp,FileJson2:Hp,FileKey:Tp,FileKey2:Vp,FileLock:Dp,FileLock2:Fp,FileMinus:Bp,FileMinus2:Rp,FileMusic:Ep,FileOutput:Op,FilePen:En,FilePenLine:Bn,FilePlus:Zp,FilePlus2:Up,FileQuestion:Wp,FileScan:Gp,FileSearch:Kp,FileSearch2:Xp,FileSliders:Qp,FileSpreadsheet:Jp,FileStack:Yp,FileSymlink:e4,FileTerminal:t4,FileText:n4,FileType:a4,FileType2:o4,FileUp:c4,FileUser:i4,FileVideo:d4,FileVideo2:r4,FileVolume:s4,FileVolume2:l4,FileWarning:h4,FileX:u4,FileX2:y4,Files:k4,Film:f4,Filter:M4,FilterX:m4,Fingerprint:v4,FireExtinguisher:g4,Fish:w4,FishOff:x4,FishSymbol:_4,Flag:S4,FlagOff:L4,FlagTriangleLeft:C4,FlagTriangleRight:I4,Flame:$4,FlameKindling:N4,Flashlight:q4,FlashlightOff:z4,FlaskConical:b4,FlaskConicalOff:A4,FlaskRound:j4,FlipHorizontal:P4,FlipHorizontal2:H4,FlipVertical:T4,FlipVertical2:V4,Flower:D4,Flower2:F4,Focus:R4,FoldHorizontal:B4,FoldVertical:E4,Folder:mk,FolderArchive:O4,FolderCheck:U4,FolderClock:Z4,FolderClosed:W4,FolderCode:G4,FolderCog:On,FolderDot:X4,FolderDown:K4,FolderGit:J4,FolderGit2:Q4,FolderHeart:Y4,FolderInput:ek,FolderKanban:tk,FolderKey:nk,FolderLock:ok,FolderMinus:ak,FolderOpen:ik,FolderOpenDot:ck,FolderOutput:rk,FolderPen:Un,FolderPlus:dk,FolderRoot:lk,FolderSearch:hk,FolderSearch2:sk,FolderSymlink:yk,FolderSync:uk,FolderTree:pk,FolderUp:kk,FolderX:fk,Folders:Mk,Footprints:vk,Forklift:gk,Forward:xk,Frame:_k,Framer:wk,Frown:Lk,Fuel:Ck,Fullscreen:Ik,GalleryHorizontal:Nk,GalleryHorizontalEnd:Sk,GalleryThumbnails:$k,GalleryVertical:qk,GalleryVerticalEnd:zk,Gamepad:bk,Gamepad2:Ak,Gauge:jk,Gavel:Hk,Gem:Pk,Ghost:Vk,Gift:Tk,GitBranch:Dk,GitBranchPlus:Fk,GitCommitHorizontal:Zn,GitCommitVertical:Rk,GitCompare:Ek,GitCompareArrows:Bk,GitFork:Ok,GitGraph:Uk,GitMerge:Zk,GitPullRequest:Jk,GitPullRequestArrow:Wk,GitPullRequestClosed:Gk,GitPullRequestCreate:Kk,GitPullRequestCreateArrow:Xk,GitPullRequestDraft:Qk,Github:Yk,Gitlab:e5,GlassWater:t5,Glasses:n5,Globe:a5,GlobeLock:o5,Goal:c5,Grab:i5,GraduationCap:r5,Grape:d5,Grid2x2:Kn,Grid2x2Check:Wn,Grid2x2Plus:Gn,Grid2x2X:Xn,Grid3x3:w1,Grip:h5,GripHorizontal:l5,GripVertical:s5,Group:y5,Guitar:u5,Ham:p5,Hammer:k5,Hand:g5,HandCoins:f5,HandHeart:m5,HandHelping:Qn,HandMetal:M5,HandPlatter:v5,Handshake:x5,HardDrive:L5,HardDriveDownload:_5,HardDriveUpload:w5,HardHat:C5,Hash:I5,Haze:S5,HdmiPort:N5,Heading:H5,Heading1:$5,Heading2:z5,Heading3:q5,Heading4:A5,Heading5:b5,Heading6:j5,HeadphoneOff:P5,Headphones:V5,Headset:T5,Heart:E5,HeartCrack:F5,HeartHandshake:D5,HeartOff:R5,HeartPulse:B5,Heater:O5,Hexagon:U5,Highlighter:Z5,History:W5,Hop:X5,HopOff:G5,Hospital:K5,Hotel:gc,Hourglass:Q5,House:Jn,HousePlug:J5,HousePlus:Y5,HouseWifi:e3,IceCreamBowl:Yn,IceCreamCone:eo,IdCard:t3,Image:l3,ImageDown:n3,ImageMinus:o3,ImageOff:a3,ImagePlay:c3,ImagePlus:i3,ImageUp:r3,ImageUpscale:d3,Images:s3,Import:h3,Inbox:y3,IndentDecrease:to,IndentIncrease:no,IndianRupee:u3,Infinity:p3,Info:k3,InspectionPanel:f3,Instagram:m3,Italic:M3,IterationCcw:v3,IterationCw:g3,JapaneseYen:x3,Joystick:_3,Kanban:w3,Key:I3,KeyRound:L3,KeySquare:C3,Keyboard:$3,KeyboardMusic:S3,KeyboardOff:N3,Lamp:H3,LampCeiling:z3,LampDesk:q3,LampFloor:A3,LampWallDown:b3,LampWallUp:j3,LandPlot:P3,Landmark:V3,Languages:T3,Laptop:D3,LaptopMinimal:oo,LaptopMinimalCheck:F3,Lasso:B3,LassoSelect:R3,Laugh:E3,Layers:ao,Layers2:O3,LayoutDashboard:U3,LayoutGrid:Z3,LayoutList:W3,LayoutPanelLeft:G3,LayoutPanelTop:X3,LayoutTemplate:K3,Leaf:Q3,LeafyGreen:J3,Lectern:Y3,LetterText:e6,Library:n6,LibraryBig:t6,LifeBuoy:o6,Ligature:a6,Lightbulb:i6,LightbulbOff:c6,Link:l6,Link2:d6,Link2Off:r6,Linkedin:s6,List:S6,ListCheck:h6,ListChecks:y6,ListCollapse:u6,ListEnd:p6,ListFilter:f6,ListFilterPlus:k6,ListMinus:m6,ListMusic:M6,ListOrdered:v6,ListPlus:g6,ListRestart:x6,ListStart:_6,ListTodo:w6,ListTree:L6,ListVideo:C6,ListX:I6,Loader:$6,LoaderCircle:co,LoaderPinwheel:N6,Locate:A6,LocateFixed:z6,LocateOff:q6,Lock:j6,LockKeyhole:b6,LockKeyholeOpen:io,LockOpen:ro,LogIn:H6,LogOut:P6,Logs:V6,Lollipop:T6,Luggage:F6,Magnet:D6,Mail:X6,MailCheck:R6,MailMinus:B6,MailOpen:E6,MailPlus:O6,MailQuestion:U6,MailSearch:Z6,MailWarning:W6,MailX:G6,Mailbox:K6,Mails:Q6,Map:_c,MapPin:xc,MapPinCheck:Y6,MapPinCheckInside:J6,MapPinHouse:e8,MapPinMinus:n8,MapPinMinusInside:t8,MapPinOff:o8,MapPinPlus:c8,MapPinPlusInside:a8,MapPinX:r8,MapPinXInside:i8,MapPinned:d8,Martini:l8,Maximize:h8,Maximize2:s8,Medal:y8,Megaphone:p8,MegaphoneOff:u8,Meh:k8,MemoryStick:f8,Menu:m8,Merge:M8,MessageCircle:$8,MessageCircleCode:v8,MessageCircleDashed:g8,MessageCircleHeart:x8,MessageCircleMore:_8,MessageCircleOff:w8,MessageCirclePlus:L8,MessageCircleQuestion:C8,MessageCircleReply:I8,MessageCircleWarning:S8,MessageCircleX:N8,MessageSquare:U8,MessageSquareCode:z8,MessageSquareDashed:q8,MessageSquareDiff:A8,MessageSquareDot:b8,MessageSquareHeart:j8,MessageSquareLock:H8,MessageSquareMore:P8,MessageSquareOff:V8,MessageSquarePlus:T8,MessageSquareQuote:F8,MessageSquareReply:D8,MessageSquareShare:R8,MessageSquareText:B8,MessageSquareWarning:E8,MessageSquareX:O8,MessagesSquare:Z8,Mic:G8,MicOff:W8,MicVocal:lo,Microchip:X8,Microscope:K8,Microwave:Q8,Milestone:J8,Milk:e7,MilkOff:Y8,Minimize:n7,Minimize2:t7,Minus:o7,Monitor:f7,MonitorCheck:a7,MonitorCog:c7,MonitorDot:i7,MonitorDown:r7,MonitorOff:d7,MonitorPause:l7,MonitorPlay:s7,MonitorSmartphone:h7,MonitorSpeaker:y7,MonitorStop:u7,MonitorUp:p7,MonitorX:k7,Moon:M7,MoonStar:m7,Mountain:g7,MountainSnow:v7,Mouse:I7,MouseOff:x7,MousePointer:C7,MousePointer2:_7,MousePointerBan:w7,MousePointerClick:L7,Move:F7,Move3d:so,MoveDiagonal:N7,MoveDiagonal2:S7,MoveDown:q7,MoveDownLeft:$7,MoveDownRight:z7,MoveHorizontal:A7,MoveLeft:b7,MoveRight:j7,MoveUp:V7,MoveUpLeft:H7,MoveUpRight:P7,MoveVertical:T7,Music:E7,Music2:D7,Music3:R7,Music4:B7,Navigation:W7,Navigation2:U7,Navigation2Off:O7,NavigationOff:Z7,Network:G7,Newspaper:X7,Nfc:K7,Notebook:ef,NotebookPen:Q7,NotebookTabs:J7,NotebookText:Y7,NotepadText:nf,NotepadTextDashed:tf,Nut:af,NutOff:of,Octagon:rf,OctagonAlert:ho,OctagonMinus:cf,OctagonPause:yo,OctagonX:uo,Omega:df,Option:lf,Orbit:sf,Origami:hf,Package:vf,Package2:yf,PackageCheck:uf,PackageMinus:pf,PackageOpen:kf,PackagePlus:ff,PackageSearch:mf,PackageX:Mf,PaintBucket:gf,PaintRoller:xf,Paintbrush:_f,PaintbrushVertical:po,Palette:wf,PanelBottom:If,PanelBottomClose:Lf,PanelBottomDashed:ko,PanelBottomOpen:Cf,PanelLeft:vo,PanelLeftClose:fo,PanelLeftDashed:mo,PanelLeftOpen:Mo,PanelRight:$f,PanelRightClose:Sf,PanelRightDashed:go,PanelRightOpen:Nf,PanelTop:Af,PanelTopClose:zf,PanelTopDashed:xo,PanelTopOpen:qf,PanelsLeftBottom:bf,PanelsRightBottom:jf,PanelsTopLeft:_o,Paperclip:Hf,Parentheses:Pf,ParkingMeter:Vf,PartyPopper:Tf,Pause:Ff,PawPrint:Df,PcCase:Rf,Pen:Lo,PenLine:wo,PenOff:Bf,PenTool:Ef,Pencil:Wf,PencilLine:Of,PencilOff:Uf,PencilRuler:Zf,Pentagon:Gf,Percent:Xf,PersonStanding:Kf,PhilippinePeso:Qf,Phone:am,PhoneCall:Jf,PhoneForwarded:Yf,PhoneIncoming:em,PhoneMissed:tm,PhoneOff:nm,PhoneOutgoing:om,Pi:cm,Piano:im,Pickaxe:rm,PictureInPicture:lm,PictureInPicture2:dm,PiggyBank:sm,Pilcrow:um,PilcrowLeft:hm,PilcrowRight:ym,Pill:km,PillBottle:pm,Pin:mm,PinOff:fm,Pipette:Mm,Pizza:vm,Plane:wc,PlaneLanding:gm,PlaneTakeoff:xm,Play:_m,Plug:Lm,Plug2:wm,PlugZap:Co,Plus:Cm,Pocket:Sm,PocketKnife:Im,Podcast:Nm,Pointer:zm,PointerOff:$m,Popcorn:qm,Popsicle:Am,PoundSterling:bm,Power:Hm,PowerOff:jm,Presentation:Pm,Printer:Tm,PrinterCheck:Vm,Projector:Fm,Proportions:Dm,Puzzle:Rm,Pyramid:Bm,QrCode:Em,Quote:Om,Rabbit:Um,Radar:Zm,Radiation:Wm,Radical:Gm,Radio:Qm,RadioReceiver:Xm,RadioTower:Km,Radius:Jm,RailSymbol:Ym,Rainbow:e9,Rat:t9,Ratio:n9,Receipt:h9,ReceiptCent:o9,ReceiptEuro:a9,ReceiptIndianRupee:c9,ReceiptJapaneseYen:i9,ReceiptPoundSterling:r9,ReceiptRussianRuble:d9,ReceiptSwissFranc:l9,ReceiptText:s9,RectangleEllipsis:Io,RectangleHorizontal:y9,RectangleVertical:u9,Recycle:p9,Redo:m9,Redo2:k9,RedoDot:f9,RefreshCcw:v9,RefreshCcwDot:M9,RefreshCw:x9,RefreshCwOff:g9,Refrigerator:_9,Regex:w9,RemoveFormatting:L9,Repeat:S9,Repeat1:C9,Repeat2:I9,Replace:$9,ReplaceAll:N9,Reply:q9,ReplyAll:z9,Rewind:A9,Ribbon:b9,Rocket:j9,RockingChair:H9,RollerCoaster:P9,Rotate3d:So,RotateCcw:T9,RotateCcwSquare:V9,RotateCw:D9,RotateCwSquare:F9,Route:B9,RouteOff:R9,Router:E9,Rows2:No,Rows3:$o,Rows4:O9,Rss:U9,Ruler:Z9,RussianRuble:W9,Sailboat:G9,Salad:X9,Sandwich:K9,Satellite:J9,SatelliteDish:Q9,Save:tM,SaveAll:Y9,SaveOff:eM,Scale:nM,Scale3d:zo,Scaling:oM,Scan:yM,ScanBarcode:aM,ScanEye:cM,ScanFace:iM,ScanHeart:rM,ScanLine:dM,ScanQrCode:lM,ScanSearch:sM,ScanText:hM,School:uM,Scissors:kM,ScissorsLineDashed:pM,ScreenShare:mM,ScreenShareOff:fM,Scroll:vM,ScrollText:MM,Search:LM,SearchCheck:gM,SearchCode:xM,SearchSlash:_M,SearchX:wM,Section:CM,Send:SM,SendHorizontal:qo,SendToBack:IM,SeparatorHorizontal:NM,SeparatorVertical:$M,Server:bM,ServerCog:zM,ServerCrash:qM,ServerOff:AM,Settings:HM,Settings2:jM,Shapes:PM,Share:TM,Share2:VM,Sheet:FM,Shell:DM,Shield:XM,ShieldAlert:RM,ShieldBan:BM,ShieldCheck:EM,ShieldEllipsis:OM,ShieldHalf:UM,ShieldMinus:ZM,ShieldOff:WM,ShieldPlus:Lc,ShieldQuestion:GM,ShieldX:Ao,Ship:QM,ShipWheel:KM,Shirt:JM,ShoppingBag:YM,ShoppingBasket:ev,ShoppingCart:tv,Shovel:nv,ShowerHead:ov,Shrink:av,Shrub:cv,Shuffle:iv,Sigma:rv,Signal:yv,SignalHigh:dv,SignalLow:lv,SignalMedium:sv,SignalZero:hv,Signature:uv,Signpost:kv,SignpostBig:pv,Siren:fv,SkipBack:mv,SkipForward:Mv,Skull:vv,Slack:gv,Slash:xv,Slice:_v,SlidersHorizontal:wv,SlidersVertical:bo,Smartphone:Iv,SmartphoneCharging:Lv,SmartphoneNfc:Cv,Smile:Nv,SmilePlus:Sv,Snail:$v,Snowflake:zv,Sofa:qv,Soup:Av,Space:bv,Spade:jv,Sparkle:Hv,Sparkles:jo,Speaker:Pv,Speech:Vv,SpellCheck:Fv,SpellCheck2:Tv,Spline:Dv,Split:Rv,SprayCan:Bv,Sprout:Ev,Square:Xv,SquareActivity:Ho,SquareArrowDown:To,SquareArrowDownLeft:Po,SquareArrowDownRight:Vo,SquareArrowLeft:Fo,SquareArrowOutDownLeft:Do,SquareArrowOutDownRight:Ro,SquareArrowOutUpLeft:Bo,SquareArrowOutUpRight:Eo,SquareArrowRight:Oo,SquareArrowUp:Wo,SquareArrowUpLeft:Uo,SquareArrowUpRight:Zo,SquareAsterisk:Go,SquareBottomDashedScissors:Xo,SquareChartGantt:L1,SquareCheck:Qo,SquareCheckBig:Ko,SquareChevronDown:Jo,SquareChevronLeft:Yo,SquareChevronRight:ea,SquareChevronUp:ta,SquareCode:na,SquareDashed:ca,SquareDashedBottom:Uv,SquareDashedBottomCode:Ov,SquareDashedKanban:oa,SquareDashedMousePointer:aa,SquareDivide:ia,SquareDot:ra,SquareEqual:da,SquareFunction:la,SquareKanban:sa,SquareLibrary:ha,SquareM:ya,SquareMenu:ua,SquareMinus:pa,SquareMousePointer:ka,SquareParking:ma,SquareParkingOff:fa,SquarePen:Ke,SquarePercent:Ma,SquarePi:va,SquarePilcrow:ga,SquarePlay:xa,SquarePlus:_a,SquarePower:wa,SquareRadical:Zv,SquareScissors:La,SquareSigma:Ca,SquareSlash:Ia,SquareSplitHorizontal:Sa,SquareSplitVertical:Na,SquareSquare:Wv,SquareStack:Gv,SquareTerminal:$a,SquareUser:qa,SquareUserRound:za,SquareX:Aa,Squircle:Kv,Squirrel:Qv,Stamp:Jv,Star:Cc,StarHalf:Yv,StarOff:eg,StepBack:tg,StepForward:ng,Stethoscope:og,Sticker:ag,StickyNote:cg,Store:ig,StretchHorizontal:rg,StretchVertical:dg,Strikethrough:lg,Subscript:sg,Sun:kg,SunDim:hg,SunMedium:yg,SunMoon:ug,SunSnow:pg,Sunrise:fg,Sunset:mg,Superscript:Mg,SwatchBook:vg,SwissFranc:gg,SwitchCamera:xg,Sword:_g,Swords:wg,Syringe:Lg,Table:Ag,Table2:Cg,TableCellsMerge:Ig,TableCellsSplit:Sg,TableColumnsSplit:Ng,TableOfContents:$g,TableProperties:zg,TableRowsSplit:qg,Tablet:jg,TabletSmartphone:bg,Tablets:Hg,Tag:Pg,Tags:Vg,Tally1:Tg,Tally2:Fg,Tally3:Dg,Tally4:Rg,Tally5:Bg,Tangent:Eg,Target:Og,Telescope:Ug,Tent:Wg,TentTree:Zg,Terminal:Gg,TestTube:Xg,TestTubeDiagonal:ba,TestTubes:Kg,Text:tx,TextCursor:Jg,TextCursorInput:Qg,TextQuote:Yg,TextSearch:ex,TextSelect:ja,Theater:nx,Thermometer:cx,ThermometerSnowflake:ox,ThermometerSun:ax,ThumbsDown:ix,ThumbsUp:rx,Ticket:px,TicketCheck:dx,TicketMinus:lx,TicketPercent:sx,TicketPlus:hx,TicketSlash:yx,TicketX:ux,Tickets:fx,TicketsPlane:kx,Timer:vx,TimerOff:mx,TimerReset:Mx,ToggleLeft:gx,ToggleRight:xx,Toilet:_x,Tornado:wx,Torus:Lx,Touchpad:Ix,TouchpadOff:Cx,TowerControl:Sx,ToyBrick:Nx,Tractor:$x,TrafficCone:zx,TrainFront:Ax,TrainFrontTunnel:qx,TrainTrack:bx,TramFront:Ha,Trash:Hx,Trash2:jx,TreeDeciduous:Px,TreePalm:Pa,TreePine:Vx,Trees:Tx,Trello:Fx,TrendingDown:Dx,TrendingUp:Bx,TrendingUpDown:Rx,Triangle:Ux,TriangleAlert:Va,TriangleDashed:Ex,TriangleRight:Ox,Trophy:Zx,Truck:Wx,Turtle:Gx,Tv:Kx,TvMinimal:Ta,TvMinimalPlay:Xx,Twitch:Qx,Twitter:Jx,Type:e_,TypeOutline:Yx,Umbrella:n_,UmbrellaOff:t_,Underline:o_,Undo:i_,Undo2:a_,UndoDot:c_,UnfoldHorizontal:r_,UnfoldVertical:d_,Ungroup:l_,University:Fa,Unlink:h_,Unlink2:s_,Unplug:y_,Upload:u_,Usb:p_,User:L_,UserCheck:k_,UserCog:f_,UserMinus:m_,UserPen:M_,UserPlus:v_,UserRound:Ua,UserRoundCheck:Da,UserRoundCog:Ra,UserRoundMinus:Ba,UserRoundPen:g_,UserRoundPlus:Ea,UserRoundSearch:x_,UserRoundX:Oa,UserSearch:__,UserX:w_,Users:C_,UsersRound:Za,Utensils:Ga,UtensilsCrossed:Wa,UtilityPole:I_,Variable:S_,Vault:N_,Vegan:$_,VenetianMask:z_,Vibrate:A_,VibrateOff:q_,Video:j_,VideoOff:b_,Videotape:H_,View:P_,Voicemail:V_,Volleyball:T_,Volume:E_,Volume1:F_,Volume2:D_,VolumeOff:R_,VolumeX:B_,Vote:O_,Wallet:Z_,WalletCards:U_,WalletMinimal:Xa,Wallpaper:W_,Wand:G_,WandSparkles:Ka,Warehouse:X_,WashingMachine:K_,Watch:Q_,Waves:Y_,WavesLadder:J_,Waypoints:ew,Webcam:tw,Webhook:ow,WebhookOff:nw,Weight:aw,Wheat:iw,WheatOff:cw,WholeWord:rw,Wifi:yw,WifiHigh:dw,WifiLow:lw,WifiOff:sw,WifiZero:hw,Wind:pw,WindArrowDown:uw,Wine:fw,WineOff:kw,Workflow:mw,Worm:Mw,WrapText:vw,Wrench:gw,X:xw,Youtube:_w,Zap:Lw,ZapOff:ww,ZoomIn:Cw,ZoomOut:Iw},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2e=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Fi,AArrowDownIcon:Fi,AArrowUp:Di,AArrowUpIcon:Di,ALargeSmall:Ri,ALargeSmallIcon:Ri,Accessibility:Bi,AccessibilityIcon:Bi,Activity:Ei,ActivityIcon:Ei,ActivitySquare:Ho,ActivitySquareIcon:Ho,AirVent:Oi,AirVentIcon:Oi,Airplay:Ui,AirplayIcon:Ui,AlarmCheck:mt,AlarmCheckIcon:mt,AlarmClock:Wi,AlarmClockCheck:mt,AlarmClockCheckIcon:mt,AlarmClockIcon:Wi,AlarmClockMinus:Mt,AlarmClockMinusIcon:Mt,AlarmClockOff:Zi,AlarmClockOffIcon:Zi,AlarmClockPlus:vt,AlarmClockPlusIcon:vt,AlarmMinus:Mt,AlarmMinusIcon:Mt,AlarmPlus:vt,AlarmPlusIcon:vt,AlarmSmoke:Gi,AlarmSmokeIcon:Gi,Album:Xi,AlbumIcon:Xi,AlertCircle:Zt,AlertCircleIcon:Zt,AlertOctagon:ho,AlertOctagonIcon:ho,AlertTriangle:Va,AlertTriangleIcon:Va,AlignCenter:Ji,AlignCenterHorizontal:Ki,AlignCenterHorizontalIcon:Ki,AlignCenterIcon:Ji,AlignCenterVertical:Qi,AlignCenterVerticalIcon:Qi,AlignEndHorizontal:Yi,AlignEndHorizontalIcon:Yi,AlignEndVertical:er,AlignEndVerticalIcon:er,AlignHorizontalDistributeCenter:tr,AlignHorizontalDistributeCenterIcon:tr,AlignHorizontalDistributeEnd:nr,AlignHorizontalDistributeEndIcon:nr,AlignHorizontalDistributeStart:or,AlignHorizontalDistributeStartIcon:or,AlignHorizontalJustifyCenter:ar,AlignHorizontalJustifyCenterIcon:ar,AlignHorizontalJustifyEnd:cr,AlignHorizontalJustifyEndIcon:cr,AlignHorizontalJustifyStart:ir,AlignHorizontalJustifyStartIcon:ir,AlignHorizontalSpaceAround:rr,AlignHorizontalSpaceAroundIcon:rr,AlignHorizontalSpaceBetween:dr,AlignHorizontalSpaceBetweenIcon:dr,AlignJustify:lr,AlignJustifyIcon:lr,AlignLeft:sr,AlignLeftIcon:sr,AlignRight:hr,AlignRightIcon:hr,AlignStartHorizontal:yr,AlignStartHorizontalIcon:yr,AlignStartVertical:ur,AlignStartVerticalIcon:ur,AlignVerticalDistributeCenter:pr,AlignVerticalDistributeCenterIcon:pr,AlignVerticalDistributeEnd:kr,AlignVerticalDistributeEndIcon:kr,AlignVerticalDistributeStart:fr,AlignVerticalDistributeStartIcon:fr,AlignVerticalJustifyCenter:mr,AlignVerticalJustifyCenterIcon:mr,AlignVerticalJustifyEnd:Mr,AlignVerticalJustifyEndIcon:Mr,AlignVerticalJustifyStart:vr,AlignVerticalJustifyStartIcon:vr,AlignVerticalSpaceAround:gr,AlignVerticalSpaceAroundIcon:gr,AlignVerticalSpaceBetween:xr,AlignVerticalSpaceBetweenIcon:xr,Ambulance:_r,AmbulanceIcon:_r,Ampersand:wr,AmpersandIcon:wr,Ampersands:Lr,AmpersandsIcon:Lr,Amphora:Cr,AmphoraIcon:Cr,Anchor:Ir,AnchorIcon:Ir,Angry:Sr,AngryIcon:Sr,Annoyed:Nr,AnnoyedIcon:Nr,Antenna:$r,AntennaIcon:$r,Anvil:zr,AnvilIcon:zr,Aperture:qr,ApertureIcon:qr,AppWindow:br,AppWindowIcon:br,AppWindowMac:Ar,AppWindowMacIcon:Ar,Apple:jr,AppleIcon:jr,Archive:Vr,ArchiveIcon:Vr,ArchiveRestore:Hr,ArchiveRestoreIcon:Hr,ArchiveX:Pr,ArchiveXIcon:Pr,AreaChart:bt,AreaChartIcon:bt,Armchair:Tr,ArmchairIcon:Tr,ArrowBigDown:Dr,ArrowBigDownDash:Fr,ArrowBigDownDashIcon:Fr,ArrowBigDownIcon:Dr,ArrowBigLeft:Br,ArrowBigLeftDash:Rr,ArrowBigLeftDashIcon:Rr,ArrowBigLeftIcon:Br,ArrowBigRight:Or,ArrowBigRightDash:Er,ArrowBigRightDashIcon:Er,ArrowBigRightIcon:Or,ArrowBigUp:Zr,ArrowBigUpDash:Ur,ArrowBigUpDashIcon:Ur,ArrowBigUpIcon:Zr,ArrowDown:n0,ArrowDown01:Wr,ArrowDown01Icon:Wr,ArrowDown10:Gr,ArrowDown10Icon:Gr,ArrowDownAZ:gt,ArrowDownAZIcon:gt,ArrowDownAz:gt,ArrowDownAzIcon:gt,ArrowDownCircle:Wt,ArrowDownCircleIcon:Wt,ArrowDownFromLine:Xr,ArrowDownFromLineIcon:Xr,ArrowDownIcon:n0,ArrowDownLeft:Kr,ArrowDownLeftFromCircle:Xt,ArrowDownLeftFromCircleIcon:Xt,ArrowDownLeftFromSquare:Do,ArrowDownLeftFromSquareIcon:Do,ArrowDownLeftIcon:Kr,ArrowDownLeftSquare:Po,ArrowDownLeftSquareIcon:Po,ArrowDownNarrowWide:Qr,ArrowDownNarrowWideIcon:Qr,ArrowDownRight:Jr,ArrowDownRightFromCircle:Kt,ArrowDownRightFromCircleIcon:Kt,ArrowDownRightFromSquare:Ro,ArrowDownRightFromSquareIcon:Ro,ArrowDownRightIcon:Jr,ArrowDownRightSquare:Vo,ArrowDownRightSquareIcon:Vo,ArrowDownSquare:To,ArrowDownSquareIcon:To,ArrowDownToDot:Yr,ArrowDownToDotIcon:Yr,ArrowDownToLine:e0,ArrowDownToLineIcon:e0,ArrowDownUp:t0,ArrowDownUpIcon:t0,ArrowDownWideNarrow:xt,ArrowDownWideNarrowIcon:xt,ArrowDownZA:_t,ArrowDownZAIcon:_t,ArrowDownZa:_t,ArrowDownZaIcon:_t,ArrowLeft:i0,ArrowLeftCircle:Gt,ArrowLeftCircleIcon:Gt,ArrowLeftFromLine:o0,ArrowLeftFromLineIcon:o0,ArrowLeftIcon:i0,ArrowLeftRight:a0,ArrowLeftRightIcon:a0,ArrowLeftSquare:Fo,ArrowLeftSquareIcon:Fo,ArrowLeftToLine:c0,ArrowLeftToLineIcon:c0,ArrowRight:s0,ArrowRightCircle:Yt,ArrowRightCircleIcon:Yt,ArrowRightFromLine:r0,ArrowRightFromLineIcon:r0,ArrowRightIcon:s0,ArrowRightLeft:d0,ArrowRightLeftIcon:d0,ArrowRightSquare:Oo,ArrowRightSquareIcon:Oo,ArrowRightToLine:l0,ArrowRightToLineIcon:l0,ArrowUp:g0,ArrowUp01:h0,ArrowUp01Icon:h0,ArrowUp10:y0,ArrowUp10Icon:y0,ArrowUpAZ:wt,ArrowUpAZIcon:wt,ArrowUpAz:wt,ArrowUpAzIcon:wt,ArrowUpCircle:en,ArrowUpCircleIcon:en,ArrowUpDown:u0,ArrowUpDownIcon:u0,ArrowUpFromDot:p0,ArrowUpFromDotIcon:p0,ArrowUpFromLine:k0,ArrowUpFromLineIcon:k0,ArrowUpIcon:g0,ArrowUpLeft:f0,ArrowUpLeftFromCircle:Qt,ArrowUpLeftFromCircleIcon:Qt,ArrowUpLeftFromSquare:Bo,ArrowUpLeftFromSquareIcon:Bo,ArrowUpLeftIcon:f0,ArrowUpLeftSquare:Uo,ArrowUpLeftSquareIcon:Uo,ArrowUpNarrowWide:Lt,ArrowUpNarrowWideIcon:Lt,ArrowUpRight:m0,ArrowUpRightFromCircle:Jt,ArrowUpRightFromCircleIcon:Jt,ArrowUpRightFromSquare:Eo,ArrowUpRightFromSquareIcon:Eo,ArrowUpRightIcon:m0,ArrowUpRightSquare:Zo,ArrowUpRightSquareIcon:Zo,ArrowUpSquare:Wo,ArrowUpSquareIcon:Wo,ArrowUpToLine:M0,ArrowUpToLineIcon:M0,ArrowUpWideNarrow:v0,ArrowUpWideNarrowIcon:v0,ArrowUpZA:Ct,ArrowUpZAIcon:Ct,ArrowUpZa:Ct,ArrowUpZaIcon:Ct,ArrowsUpFromLine:x0,ArrowsUpFromLineIcon:x0,Asterisk:_0,AsteriskIcon:_0,AsteriskSquare:Go,AsteriskSquareIcon:Go,AtSign:w0,AtSignIcon:w0,Atom:L0,AtomIcon:L0,AudioLines:C0,AudioLinesIcon:C0,AudioWaveform:I0,AudioWaveformIcon:I0,Award:S0,AwardIcon:S0,Axe:N0,AxeIcon:N0,Axis3D:It,Axis3DIcon:It,Axis3d:It,Axis3dIcon:It,Baby:$0,BabyIcon:$0,Backpack:z0,BackpackIcon:z0,Badge:Z0,BadgeAlert:q0,BadgeAlertIcon:q0,BadgeCent:A0,BadgeCentIcon:A0,BadgeCheck:St,BadgeCheckIcon:St,BadgeDollarSign:b0,BadgeDollarSignIcon:b0,BadgeEuro:j0,BadgeEuroIcon:j0,BadgeHelp:H0,BadgeHelpIcon:H0,BadgeIcon:Z0,BadgeIndianRupee:P0,BadgeIndianRupeeIcon:P0,BadgeInfo:V0,BadgeInfoIcon:V0,BadgeJapaneseYen:T0,BadgeJapaneseYenIcon:T0,BadgeMinus:F0,BadgeMinusIcon:F0,BadgePercent:D0,BadgePercentIcon:D0,BadgePlus:R0,BadgePlusIcon:R0,BadgePoundSterling:B0,BadgePoundSterlingIcon:B0,BadgeRussianRuble:E0,BadgeRussianRubleIcon:E0,BadgeSwissFranc:O0,BadgeSwissFrancIcon:O0,BadgeX:U0,BadgeXIcon:U0,BaggageClaim:W0,BaggageClaimIcon:W0,Ban:G0,BanIcon:G0,Banana:X0,BananaIcon:X0,Bandage:K0,BandageIcon:K0,Banknote:Q0,BanknoteIcon:Q0,BarChart:Rt,BarChart2:Bt,BarChart2Icon:Bt,BarChart3:Ft,BarChart3Icon:Ft,BarChart4:Tt,BarChart4Icon:Tt,BarChartBig:Vt,BarChartBigIcon:Vt,BarChartHorizontal:Ht,BarChartHorizontalBig:jt,BarChartHorizontalBigIcon:jt,BarChartHorizontalIcon:Ht,BarChartIcon:Rt,Barcode:J0,BarcodeIcon:J0,Baseline:Y0,BaselineIcon:Y0,Bath:ed,BathIcon:ed,Battery:id,BatteryCharging:td,BatteryChargingIcon:td,BatteryFull:nd,BatteryFullIcon:nd,BatteryIcon:id,BatteryLow:od,BatteryLowIcon:od,BatteryMedium:ad,BatteryMediumIcon:ad,BatteryWarning:cd,BatteryWarningIcon:cd,Beaker:rd,BeakerIcon:rd,Bean:ld,BeanIcon:ld,BeanOff:dd,BeanOffIcon:dd,Bed:yd,BedDouble:sd,BedDoubleIcon:sd,BedIcon:yd,BedSingle:hd,BedSingleIcon:hd,Beef:ud,BeefIcon:ud,Beer:kd,BeerIcon:kd,BeerOff:pd,BeerOffIcon:pd,Bell:_d,BellDot:fd,BellDotIcon:fd,BellElectric:md,BellElectricIcon:md,BellIcon:_d,BellMinus:Md,BellMinusIcon:Md,BellOff:vd,BellOffIcon:vd,BellPlus:gd,BellPlusIcon:gd,BellRing:xd,BellRingIcon:xd,BetweenHorizonalEnd:Nt,BetweenHorizonalEndIcon:Nt,BetweenHorizonalStart:$t,BetweenHorizonalStartIcon:$t,BetweenHorizontalEnd:Nt,BetweenHorizontalEndIcon:Nt,BetweenHorizontalStart:$t,BetweenHorizontalStartIcon:$t,BetweenVerticalEnd:wd,BetweenVerticalEndIcon:wd,BetweenVerticalStart:Ld,BetweenVerticalStartIcon:Ld,BicepsFlexed:Cd,BicepsFlexedIcon:Cd,Bike:Id,BikeIcon:Id,Binary:Sd,BinaryIcon:Sd,Binoculars:Nd,BinocularsIcon:Nd,Biohazard:$d,BiohazardIcon:$d,Bird:zd,BirdIcon:zd,Bitcoin:qd,BitcoinIcon:qd,Blend:Ad,BlendIcon:Ad,Blinds:bd,BlindsIcon:bd,Blocks:jd,BlocksIcon:jd,Bluetooth:Td,BluetoothConnected:Hd,BluetoothConnectedIcon:Hd,BluetoothIcon:Td,BluetoothOff:Pd,BluetoothOffIcon:Pd,BluetoothSearching:Vd,BluetoothSearchingIcon:Vd,Bold:Fd,BoldIcon:Fd,Bolt:Dd,BoltIcon:Dd,Bomb:Rd,BombIcon:Rd,Bone:Bd,BoneIcon:Bd,Book:hl,BookA:Ed,BookAIcon:Ed,BookAudio:Od,BookAudioIcon:Od,BookCheck:Ud,BookCheckIcon:Ud,BookCopy:Zd,BookCopyIcon:Zd,BookDashed:zt,BookDashedIcon:zt,BookDown:Wd,BookDownIcon:Wd,BookHeadphones:Gd,BookHeadphonesIcon:Gd,BookHeart:Xd,BookHeartIcon:Xd,BookIcon:hl,BookImage:Kd,BookImageIcon:Kd,BookKey:Qd,BookKeyIcon:Qd,BookLock:Jd,BookLockIcon:Jd,BookMarked:Yd,BookMarkedIcon:Yd,BookMinus:el,BookMinusIcon:el,BookOpen:ol,BookOpenCheck:tl,BookOpenCheckIcon:tl,BookOpenIcon:ol,BookOpenText:nl,BookOpenTextIcon:nl,BookPlus:al,BookPlusIcon:al,BookTemplate:zt,BookTemplateIcon:zt,BookText:cl,BookTextIcon:cl,BookType:il,BookTypeIcon:il,BookUp:dl,BookUp2:rl,BookUp2Icon:rl,BookUpIcon:dl,BookUser:ll,BookUserIcon:ll,BookX:sl,BookXIcon:sl,Bookmark:fl,BookmarkCheck:yl,BookmarkCheckIcon:yl,BookmarkIcon:fl,BookmarkMinus:ul,BookmarkMinusIcon:ul,BookmarkPlus:pl,BookmarkPlusIcon:pl,BookmarkX:kl,BookmarkXIcon:kl,BoomBox:ml,BoomBoxIcon:ml,Bot:gl,BotIcon:gl,BotMessageSquare:Ml,BotMessageSquareIcon:Ml,BotOff:vl,BotOffIcon:vl,Box:xl,BoxIcon:xl,BoxSelect:ca,BoxSelectIcon:ca,Boxes:_l,BoxesIcon:_l,Braces:qt,BracesIcon:qt,Brackets:wl,BracketsIcon:wl,Brain:Il,BrainCircuit:Ll,BrainCircuitIcon:Ll,BrainCog:Cl,BrainCogIcon:Cl,BrainIcon:Il,BrickWall:Sl,BrickWallIcon:Sl,Briefcase:zl,BriefcaseBusiness:pc,BriefcaseBusinessIcon:pc,BriefcaseConveyorBelt:Nl,BriefcaseConveyorBeltIcon:Nl,BriefcaseIcon:zl,BriefcaseMedical:$l,BriefcaseMedicalIcon:$l,BringToFront:ql,BringToFrontIcon:ql,Brush:Al,BrushIcon:Al,Bug:Hl,BugIcon:Hl,BugOff:bl,BugOffIcon:bl,BugPlay:jl,BugPlayIcon:jl,Building:Vl,Building2:Pl,Building2Icon:Pl,BuildingIcon:Vl,Bus:Fl,BusFront:Tl,BusFrontIcon:Tl,BusIcon:Fl,Cable:Rl,CableCar:Dl,CableCarIcon:Dl,CableIcon:Rl,Cake:El,CakeIcon:El,CakeSlice:Bl,CakeSliceIcon:Bl,Calculator:Ol,CalculatorIcon:Ol,Calendar:hs,Calendar1:Ul,Calendar1Icon:Ul,CalendarArrowDown:Zl,CalendarArrowDownIcon:Zl,CalendarArrowUp:Wl,CalendarArrowUpIcon:Wl,CalendarCheck:Xl,CalendarCheck2:Gl,CalendarCheck2Icon:Gl,CalendarCheckIcon:Xl,CalendarClock:Kl,CalendarClockIcon:Kl,CalendarCog:Ql,CalendarCogIcon:Ql,CalendarDays:Jl,CalendarDaysIcon:Jl,CalendarFold:Yl,CalendarFoldIcon:Yl,CalendarHeart:es,CalendarHeartIcon:es,CalendarIcon:hs,CalendarMinus:ns,CalendarMinus2:ts,CalendarMinus2Icon:ts,CalendarMinusIcon:ns,CalendarOff:os,CalendarOffIcon:os,CalendarPlus:cs,CalendarPlus2:as,CalendarPlus2Icon:as,CalendarPlusIcon:cs,CalendarRange:is,CalendarRangeIcon:is,CalendarSearch:rs,CalendarSearchIcon:rs,CalendarSync:ds,CalendarSyncIcon:ds,CalendarX:ss,CalendarX2:ls,CalendarX2Icon:ls,CalendarXIcon:ss,Camera:us,CameraIcon:us,CameraOff:ys,CameraOffIcon:ys,CandlestickChart:Pt,CandlestickChartIcon:Pt,Candy:fs,CandyCane:ps,CandyCaneIcon:ps,CandyIcon:fs,CandyOff:ks,CandyOffIcon:ks,Cannabis:ms,CannabisIcon:ms,Captions:At,CaptionsIcon:At,CaptionsOff:Ms,CaptionsOffIcon:Ms,Car:fc,CarFront:vs,CarFrontIcon:vs,CarIcon:fc,CarTaxiFront:kc,CarTaxiFrontIcon:kc,Caravan:gs,CaravanIcon:gs,Carrot:xs,CarrotIcon:xs,CaseLower:_s,CaseLowerIcon:_s,CaseSensitive:ws,CaseSensitiveIcon:ws,CaseUpper:Ls,CaseUpperIcon:Ls,CassetteTape:Cs,CassetteTapeIcon:Cs,Cast:Is,CastIcon:Is,Castle:Ss,CastleIcon:Ss,Cat:Ns,CatIcon:Ns,Cctv:$s,CctvIcon:$s,ChartArea:bt,ChartAreaIcon:bt,ChartBar:Ht,ChartBarBig:jt,ChartBarBigIcon:jt,ChartBarDecreasing:zs,ChartBarDecreasingIcon:zs,ChartBarIcon:Ht,ChartBarIncreasing:qs,ChartBarIncreasingIcon:qs,ChartBarStacked:As,ChartBarStackedIcon:As,ChartCandlestick:Pt,ChartCandlestickIcon:Pt,ChartColumn:Ft,ChartColumnBig:Vt,ChartColumnBigIcon:Vt,ChartColumnDecreasing:bs,ChartColumnDecreasingIcon:bs,ChartColumnIcon:Ft,ChartColumnIncreasing:Tt,ChartColumnIncreasingIcon:Tt,ChartColumnStacked:js,ChartColumnStackedIcon:js,ChartGantt:Hs,ChartGanttIcon:Hs,ChartLine:Dt,ChartLineIcon:Dt,ChartNetwork:Ps,ChartNetworkIcon:Ps,ChartNoAxesColumn:Bt,ChartNoAxesColumnDecreasing:Vs,ChartNoAxesColumnDecreasingIcon:Vs,ChartNoAxesColumnIcon:Bt,ChartNoAxesColumnIncreasing:Rt,ChartNoAxesColumnIncreasingIcon:Rt,ChartNoAxesCombined:Ts,ChartNoAxesCombinedIcon:Ts,ChartNoAxesGantt:Et,ChartNoAxesGanttIcon:Et,ChartPie:Ot,ChartPieIcon:Ot,ChartScatter:Ut,ChartScatterIcon:Ut,ChartSpline:Fs,ChartSplineIcon:Fs,Check:Rs,CheckCheck:Ds,CheckCheckIcon:Ds,CheckCircle:tn,CheckCircle2:nn,CheckCircle2Icon:nn,CheckCircleIcon:tn,CheckIcon:Rs,CheckSquare:Ko,CheckSquare2:Qo,CheckSquare2Icon:Qo,CheckSquareIcon:Ko,ChefHat:Bs,ChefHatIcon:Bs,Cherry:Es,CherryIcon:Es,ChevronDown:Os,ChevronDownCircle:on,ChevronDownCircleIcon:on,ChevronDownIcon:Os,ChevronDownSquare:Jo,ChevronDownSquareIcon:Jo,ChevronFirst:Us,ChevronFirstIcon:Us,ChevronLast:Zs,ChevronLastIcon:Zs,ChevronLeft:mc,ChevronLeftCircle:an,ChevronLeftCircleIcon:an,ChevronLeftIcon:mc,ChevronLeftSquare:Yo,ChevronLeftSquareIcon:Yo,ChevronRight:Mc,ChevronRightCircle:cn,ChevronRightCircleIcon:cn,ChevronRightIcon:Mc,ChevronRightSquare:ea,ChevronRightSquareIcon:ea,ChevronUp:Ws,ChevronUpCircle:rn,ChevronUpCircleIcon:rn,ChevronUpIcon:Ws,ChevronUpSquare:ta,ChevronUpSquareIcon:ta,ChevronsDown:Xs,ChevronsDownIcon:Xs,ChevronsDownUp:Gs,ChevronsDownUpIcon:Gs,ChevronsLeft:Js,ChevronsLeftIcon:Js,ChevronsLeftRight:Qs,ChevronsLeftRightEllipsis:Ks,ChevronsLeftRightEllipsisIcon:Ks,ChevronsLeftRightIcon:Qs,ChevronsRight:eh,ChevronsRightIcon:eh,ChevronsRightLeft:Ys,ChevronsRightLeftIcon:Ys,ChevronsUp:nh,ChevronsUpDown:th,ChevronsUpDownIcon:th,ChevronsUpIcon:nh,Chrome:oh,ChromeIcon:oh,Church:ah,ChurchIcon:ah,Cigarette:ih,CigaretteIcon:ih,CigaretteOff:ch,CigaretteOffIcon:ch,Circle:mh,CircleAlert:Zt,CircleAlertIcon:Zt,CircleArrowDown:Wt,CircleArrowDownIcon:Wt,CircleArrowLeft:Gt,CircleArrowLeftIcon:Gt,CircleArrowOutDownLeft:Xt,CircleArrowOutDownLeftIcon:Xt,CircleArrowOutDownRight:Kt,CircleArrowOutDownRightIcon:Kt,CircleArrowOutUpLeft:Qt,CircleArrowOutUpLeftIcon:Qt,CircleArrowOutUpRight:Jt,CircleArrowOutUpRightIcon:Jt,CircleArrowRight:Yt,CircleArrowRightIcon:Yt,CircleArrowUp:en,CircleArrowUpIcon:en,CircleCheck:nn,CircleCheckBig:tn,CircleCheckBigIcon:tn,CircleCheckIcon:nn,CircleChevronDown:on,CircleChevronDownIcon:on,CircleChevronLeft:an,CircleChevronLeftIcon:an,CircleChevronRight:cn,CircleChevronRightIcon:cn,CircleChevronUp:rn,CircleChevronUpIcon:rn,CircleDashed:rh,CircleDashedIcon:rh,CircleDivide:dn,CircleDivideIcon:dn,CircleDollarSign:dh,CircleDollarSignIcon:dh,CircleDot:sh,CircleDotDashed:lh,CircleDotDashedIcon:lh,CircleDotIcon:sh,CircleEllipsis:hh,CircleEllipsisIcon:hh,CircleEqual:yh,CircleEqualIcon:yh,CircleFadingArrowUp:uh,CircleFadingArrowUpIcon:uh,CircleFadingPlus:ph,CircleFadingPlusIcon:ph,CircleGauge:ln,CircleGaugeIcon:ln,CircleHelp:sn,CircleHelpIcon:sn,CircleIcon:mh,CircleMinus:hn,CircleMinusIcon:hn,CircleOff:kh,CircleOffIcon:kh,CircleParking:un,CircleParkingIcon:un,CircleParkingOff:yn,CircleParkingOffIcon:yn,CirclePause:pn,CirclePauseIcon:pn,CirclePercent:kn,CirclePercentIcon:kn,CirclePlay:fn,CirclePlayIcon:fn,CirclePlus:mn,CirclePlusIcon:mn,CirclePower:Mn,CirclePowerIcon:Mn,CircleSlash:fh,CircleSlash2:vn,CircleSlash2Icon:vn,CircleSlashIcon:fh,CircleSlashed:vn,CircleSlashedIcon:vn,CircleStop:gn,CircleStopIcon:gn,CircleUser:_n,CircleUserIcon:_n,CircleUserRound:xn,CircleUserRoundIcon:xn,CircleX:wn,CircleXIcon:wn,CircuitBoard:Mh,CircuitBoardIcon:Mh,Citrus:vh,CitrusIcon:vh,Clapperboard:gh,ClapperboardIcon:gh,Clipboard:$h,ClipboardCheck:xh,ClipboardCheckIcon:xh,ClipboardCopy:_h,ClipboardCopyIcon:_h,ClipboardEdit:Cn,ClipboardEditIcon:Cn,ClipboardIcon:$h,ClipboardList:wh,ClipboardListIcon:wh,ClipboardMinus:Lh,ClipboardMinusIcon:Lh,ClipboardPaste:Ch,ClipboardPasteIcon:Ch,ClipboardPen:Cn,ClipboardPenIcon:Cn,ClipboardPenLine:Ln,ClipboardPenLineIcon:Ln,ClipboardPlus:Ih,ClipboardPlusIcon:Ih,ClipboardSignature:Ln,ClipboardSignatureIcon:Ln,ClipboardType:Sh,ClipboardTypeIcon:Sh,ClipboardX:Nh,ClipboardXIcon:Nh,Clock:vc,Clock1:zh,Clock10:qh,Clock10Icon:qh,Clock11:Ah,Clock11Icon:Ah,Clock12:bh,Clock12Icon:bh,Clock1Icon:zh,Clock2:jh,Clock2Icon:jh,Clock3:Hh,Clock3Icon:Hh,Clock4:Ph,Clock4Icon:Ph,Clock5:Vh,Clock5Icon:Vh,Clock6:Th,Clock6Icon:Th,Clock7:Fh,Clock7Icon:Fh,Clock8:Dh,Clock8Icon:Dh,Clock9:Rh,Clock9Icon:Rh,ClockAlert:Bh,ClockAlertIcon:Bh,ClockArrowDown:Eh,ClockArrowDownIcon:Eh,ClockArrowUp:Oh,ClockArrowUpIcon:Oh,ClockIcon:vc,Cloud:cy,CloudAlert:Uh,CloudAlertIcon:Uh,CloudCog:Zh,CloudCogIcon:Zh,CloudDownload:In,CloudDownloadIcon:In,CloudDrizzle:Wh,CloudDrizzleIcon:Wh,CloudFog:Gh,CloudFogIcon:Gh,CloudHail:Xh,CloudHailIcon:Xh,CloudIcon:cy,CloudLightning:Kh,CloudLightningIcon:Kh,CloudMoon:Jh,CloudMoonIcon:Jh,CloudMoonRain:Qh,CloudMoonRainIcon:Qh,CloudOff:Yh,CloudOffIcon:Yh,CloudRain:ty,CloudRainIcon:ty,CloudRainWind:ey,CloudRainWindIcon:ey,CloudSnow:ny,CloudSnowIcon:ny,CloudSun:ay,CloudSunIcon:ay,CloudSunRain:oy,CloudSunRainIcon:oy,CloudUpload:Sn,CloudUploadIcon:Sn,Cloudy:iy,CloudyIcon:iy,Clover:ry,CloverIcon:ry,Club:dy,ClubIcon:dy,Code:ly,Code2:Nn,Code2Icon:Nn,CodeIcon:ly,CodeSquare:na,CodeSquareIcon:na,CodeXml:Nn,CodeXmlIcon:Nn,Codepen:sy,CodepenIcon:sy,Codesandbox:hy,CodesandboxIcon:hy,Coffee:yy,CoffeeIcon:yy,Cog:uy,CogIcon:uy,Coins:py,CoinsIcon:py,Columns:$n,Columns2:$n,Columns2Icon:$n,Columns3:zn,Columns3Icon:zn,Columns4:ky,Columns4Icon:ky,ColumnsIcon:$n,Combine:fy,CombineIcon:fy,Command:my,CommandIcon:my,Compass:My,CompassIcon:My,Component:vy,ComponentIcon:vy,Computer:gy,ComputerIcon:gy,ConciergeBell:xy,ConciergeBellIcon:xy,Cone:_y,ConeIcon:_y,Construction:wy,ConstructionIcon:wy,Contact:Ly,Contact2:qn,Contact2Icon:qn,ContactIcon:Ly,ContactRound:qn,ContactRoundIcon:qn,Container:Cy,ContainerIcon:Cy,Contrast:Iy,ContrastIcon:Iy,Cookie:Sy,CookieIcon:Sy,CookingPot:Ny,CookingPotIcon:Ny,Copy:jy,CopyCheck:$y,CopyCheckIcon:$y,CopyIcon:jy,CopyMinus:zy,CopyMinusIcon:zy,CopyPlus:qy,CopyPlusIcon:qy,CopySlash:Ay,CopySlashIcon:Ay,CopyX:by,CopyXIcon:by,Copyleft:Hy,CopyleftIcon:Hy,Copyright:Py,CopyrightIcon:Py,CornerDownLeft:Vy,CornerDownLeftIcon:Vy,CornerDownRight:Ty,CornerDownRightIcon:Ty,CornerLeftDown:Fy,CornerLeftDownIcon:Fy,CornerLeftUp:Dy,CornerLeftUpIcon:Dy,CornerRightDown:Ry,CornerRightDownIcon:Ry,CornerRightUp:By,CornerRightUpIcon:By,CornerUpLeft:Ey,CornerUpLeftIcon:Ey,CornerUpRight:Oy,CornerUpRightIcon:Oy,Cpu:Uy,CpuIcon:Uy,CreativeCommons:Zy,CreativeCommonsIcon:Zy,CreditCard:Wy,CreditCardIcon:Wy,Croissant:Gy,CroissantIcon:Gy,Crop:Xy,CropIcon:Xy,Cross:Ky,CrossIcon:Ky,Crosshair:Qy,CrosshairIcon:Qy,Crown:Jy,CrownIcon:Jy,Cuboid:Yy,CuboidIcon:Yy,CupSoda:eu,CupSodaIcon:eu,CurlyBraces:qt,CurlyBracesIcon:qt,Currency:tu,CurrencyIcon:tu,Cylinder:nu,CylinderIcon:nu,Dam:ou,DamIcon:ou,Database:iu,DatabaseBackup:au,DatabaseBackupIcon:au,DatabaseIcon:iu,DatabaseZap:cu,DatabaseZapIcon:cu,Delete:ru,DeleteIcon:ru,Dessert:du,DessertIcon:du,Diameter:lu,DiameterIcon:lu,Diamond:yu,DiamondIcon:yu,DiamondMinus:su,DiamondMinusIcon:su,DiamondPercent:An,DiamondPercentIcon:An,DiamondPlus:hu,DiamondPlusIcon:hu,Dice1:uu,Dice1Icon:uu,Dice2:pu,Dice2Icon:pu,Dice3:ku,Dice3Icon:ku,Dice4:fu,Dice4Icon:fu,Dice5:mu,Dice5Icon:mu,Dice6:Mu,Dice6Icon:Mu,Dices:vu,DicesIcon:vu,Diff:gu,DiffIcon:gu,Disc:Lu,Disc2:xu,Disc2Icon:xu,Disc3:_u,Disc3Icon:_u,DiscAlbum:wu,DiscAlbumIcon:wu,DiscIcon:Lu,Divide:Cu,DivideCircle:dn,DivideCircleIcon:dn,DivideIcon:Cu,DivideSquare:ia,DivideSquareIcon:ia,Dna:Su,DnaIcon:Su,DnaOff:Iu,DnaOffIcon:Iu,Dock:Nu,DockIcon:Nu,Dog:$u,DogIcon:$u,DollarSign:zu,DollarSignIcon:zu,Donut:qu,DonutIcon:qu,DoorClosed:Au,DoorClosedIcon:Au,DoorOpen:bu,DoorOpenIcon:bu,Dot:ju,DotIcon:ju,DotSquare:ra,DotSquareIcon:ra,Download:Hu,DownloadCloud:In,DownloadCloudIcon:In,DownloadIcon:Hu,DraftingCompass:Pu,DraftingCompassIcon:Pu,Drama:Vu,DramaIcon:Vu,Dribbble:Tu,DribbbleIcon:Tu,Drill:Fu,DrillIcon:Fu,Droplet:Ru,DropletIcon:Ru,DropletOff:Du,DropletOffIcon:Du,Droplets:Bu,DropletsIcon:Bu,Drum:Eu,DrumIcon:Eu,Drumstick:Ou,DrumstickIcon:Ou,Dumbbell:Uu,DumbbellIcon:Uu,Ear:Wu,EarIcon:Wu,EarOff:Zu,EarOffIcon:Zu,Earth:bn,EarthIcon:bn,EarthLock:Gu,EarthLockIcon:Gu,Eclipse:Xu,EclipseIcon:Xu,Edit:Ke,Edit2:Lo,Edit2Icon:Lo,Edit3:wo,Edit3Icon:wo,EditIcon:Ke,Egg:Ju,EggFried:Ku,EggFriedIcon:Ku,EggIcon:Ju,EggOff:Qu,EggOffIcon:Qu,Ellipsis:Hn,EllipsisIcon:Hn,EllipsisVertical:jn,EllipsisVerticalIcon:jn,Equal:tp,EqualApproximately:Yu,EqualApproximatelyIcon:Yu,EqualIcon:tp,EqualNot:ep,EqualNotIcon:ep,EqualSquare:da,EqualSquareIcon:da,Eraser:np,EraserIcon:np,EthernetPort:op,EthernetPortIcon:op,Euro:ap,EuroIcon:ap,Expand:cp,ExpandIcon:cp,ExternalLink:ip,ExternalLinkIcon:ip,Eye:lp,EyeClosed:rp,EyeClosedIcon:rp,EyeIcon:lp,EyeOff:dp,EyeOffIcon:dp,Facebook:sp,FacebookIcon:sp,Factory:hp,FactoryIcon:hp,Fan:yp,FanIcon:yp,FastForward:up,FastForwardIcon:up,Feather:pp,FeatherIcon:pp,Fence:kp,FenceIcon:kp,FerrisWheel:fp,FerrisWheelIcon:fp,Figma:mp,FigmaIcon:mp,File:p4,FileArchive:Mp,FileArchiveIcon:Mp,FileAudio:gp,FileAudio2:vp,FileAudio2Icon:vp,FileAudioIcon:gp,FileAxis3D:Pn,FileAxis3DIcon:Pn,FileAxis3d:Pn,FileAxis3dIcon:Pn,FileBadge:_p,FileBadge2:xp,FileBadge2Icon:xp,FileBadgeIcon:_p,FileBarChart:Vn,FileBarChart2:Tn,FileBarChart2Icon:Tn,FileBarChartIcon:Vn,FileBox:wp,FileBoxIcon:wp,FileChartColumn:Tn,FileChartColumnIcon:Tn,FileChartColumnIncreasing:Vn,FileChartColumnIncreasingIcon:Vn,FileChartLine:Fn,FileChartLineIcon:Fn,FileChartPie:Dn,FileChartPieIcon:Dn,FileCheck:Cp,FileCheck2:Lp,FileCheck2Icon:Lp,FileCheckIcon:Cp,FileClock:Ip,FileClockIcon:Ip,FileCode:Np,FileCode2:Sp,FileCode2Icon:Sp,FileCodeIcon:Np,FileCog:Rn,FileCog2:Rn,FileCog2Icon:Rn,FileCogIcon:Rn,FileDiff:$p,FileDiffIcon:$p,FileDigit:zp,FileDigitIcon:zp,FileDown:qp,FileDownIcon:qp,FileEdit:En,FileEditIcon:En,FileHeart:Ap,FileHeartIcon:Ap,FileIcon:p4,FileImage:bp,FileImageIcon:bp,FileInput:jp,FileInputIcon:jp,FileJson:Pp,FileJson2:Hp,FileJson2Icon:Hp,FileJsonIcon:Pp,FileKey:Tp,FileKey2:Vp,FileKey2Icon:Vp,FileKeyIcon:Tp,FileLineChart:Fn,FileLineChartIcon:Fn,FileLock:Dp,FileLock2:Fp,FileLock2Icon:Fp,FileLockIcon:Dp,FileMinus:Bp,FileMinus2:Rp,FileMinus2Icon:Rp,FileMinusIcon:Bp,FileMusic:Ep,FileMusicIcon:Ep,FileOutput:Op,FileOutputIcon:Op,FilePen:En,FilePenIcon:En,FilePenLine:Bn,FilePenLineIcon:Bn,FilePieChart:Dn,FilePieChartIcon:Dn,FilePlus:Zp,FilePlus2:Up,FilePlus2Icon:Up,FilePlusIcon:Zp,FileQuestion:Wp,FileQuestionIcon:Wp,FileScan:Gp,FileScanIcon:Gp,FileSearch:Kp,FileSearch2:Xp,FileSearch2Icon:Xp,FileSearchIcon:Kp,FileSignature:Bn,FileSignatureIcon:Bn,FileSliders:Qp,FileSlidersIcon:Qp,FileSpreadsheet:Jp,FileSpreadsheetIcon:Jp,FileStack:Yp,FileStackIcon:Yp,FileSymlink:e4,FileSymlinkIcon:e4,FileTerminal:t4,FileTerminalIcon:t4,FileText:n4,FileTextIcon:n4,FileType:a4,FileType2:o4,FileType2Icon:o4,FileTypeIcon:a4,FileUp:c4,FileUpIcon:c4,FileUser:i4,FileUserIcon:i4,FileVideo:d4,FileVideo2:r4,FileVideo2Icon:r4,FileVideoIcon:d4,FileVolume:s4,FileVolume2:l4,FileVolume2Icon:l4,FileVolumeIcon:s4,FileWarning:h4,FileWarningIcon:h4,FileX:u4,FileX2:y4,FileX2Icon:y4,FileXIcon:u4,Files:k4,FilesIcon:k4,Film:f4,FilmIcon:f4,Filter:M4,FilterIcon:M4,FilterX:m4,FilterXIcon:m4,Fingerprint:v4,FingerprintIcon:v4,FireExtinguisher:g4,FireExtinguisherIcon:g4,Fish:w4,FishIcon:w4,FishOff:x4,FishOffIcon:x4,FishSymbol:_4,FishSymbolIcon:_4,Flag:S4,FlagIcon:S4,FlagOff:L4,FlagOffIcon:L4,FlagTriangleLeft:C4,FlagTriangleLeftIcon:C4,FlagTriangleRight:I4,FlagTriangleRightIcon:I4,Flame:$4,FlameIcon:$4,FlameKindling:N4,FlameKindlingIcon:N4,Flashlight:q4,FlashlightIcon:q4,FlashlightOff:z4,FlashlightOffIcon:z4,FlaskConical:b4,FlaskConicalIcon:b4,FlaskConicalOff:A4,FlaskConicalOffIcon:A4,FlaskRound:j4,FlaskRoundIcon:j4,FlipHorizontal:P4,FlipHorizontal2:H4,FlipHorizontal2Icon:H4,FlipHorizontalIcon:P4,FlipVertical:T4,FlipVertical2:V4,FlipVertical2Icon:V4,FlipVerticalIcon:T4,Flower:D4,Flower2:F4,Flower2Icon:F4,FlowerIcon:D4,Focus:R4,FocusIcon:R4,FoldHorizontal:B4,FoldHorizontalIcon:B4,FoldVertical:E4,FoldVerticalIcon:E4,Folder:mk,FolderArchive:O4,FolderArchiveIcon:O4,FolderCheck:U4,FolderCheckIcon:U4,FolderClock:Z4,FolderClockIcon:Z4,FolderClosed:W4,FolderClosedIcon:W4,FolderCode:G4,FolderCodeIcon:G4,FolderCog:On,FolderCog2:On,FolderCog2Icon:On,FolderCogIcon:On,FolderDot:X4,FolderDotIcon:X4,FolderDown:K4,FolderDownIcon:K4,FolderEdit:Un,FolderEditIcon:Un,FolderGit:J4,FolderGit2:Q4,FolderGit2Icon:Q4,FolderGitIcon:J4,FolderHeart:Y4,FolderHeartIcon:Y4,FolderIcon:mk,FolderInput:ek,FolderInputIcon:ek,FolderKanban:tk,FolderKanbanIcon:tk,FolderKey:nk,FolderKeyIcon:nk,FolderLock:ok,FolderLockIcon:ok,FolderMinus:ak,FolderMinusIcon:ak,FolderOpen:ik,FolderOpenDot:ck,FolderOpenDotIcon:ck,FolderOpenIcon:ik,FolderOutput:rk,FolderOutputIcon:rk,FolderPen:Un,FolderPenIcon:Un,FolderPlus:dk,FolderPlusIcon:dk,FolderRoot:lk,FolderRootIcon:lk,FolderSearch:hk,FolderSearch2:sk,FolderSearch2Icon:sk,FolderSearchIcon:hk,FolderSymlink:yk,FolderSymlinkIcon:yk,FolderSync:uk,FolderSyncIcon:uk,FolderTree:pk,FolderTreeIcon:pk,FolderUp:kk,FolderUpIcon:kk,FolderX:fk,FolderXIcon:fk,Folders:Mk,FoldersIcon:Mk,Footprints:vk,FootprintsIcon:vk,ForkKnife:Ga,ForkKnifeCrossed:Wa,ForkKnifeCrossedIcon:Wa,ForkKnifeIcon:Ga,Forklift:gk,ForkliftIcon:gk,FormInput:Io,FormInputIcon:Io,Forward:xk,ForwardIcon:xk,Frame:_k,FrameIcon:_k,Framer:wk,FramerIcon:wk,Frown:Lk,FrownIcon:Lk,Fuel:Ck,FuelIcon:Ck,Fullscreen:Ik,FullscreenIcon:Ik,FunctionSquare:la,FunctionSquareIcon:la,GalleryHorizontal:Nk,GalleryHorizontalEnd:Sk,GalleryHorizontalEndIcon:Sk,GalleryHorizontalIcon:Nk,GalleryThumbnails:$k,GalleryThumbnailsIcon:$k,GalleryVertical:qk,GalleryVerticalEnd:zk,GalleryVerticalEndIcon:zk,GalleryVerticalIcon:qk,Gamepad:bk,Gamepad2:Ak,Gamepad2Icon:Ak,GamepadIcon:bk,GanttChart:Et,GanttChartIcon:Et,GanttChartSquare:L1,GanttChartSquareIcon:L1,Gauge:jk,GaugeCircle:ln,GaugeCircleIcon:ln,GaugeIcon:jk,Gavel:Hk,GavelIcon:Hk,Gem:Pk,GemIcon:Pk,Ghost:Vk,GhostIcon:Vk,Gift:Tk,GiftIcon:Tk,GitBranch:Dk,GitBranchIcon:Dk,GitBranchPlus:Fk,GitBranchPlusIcon:Fk,GitCommit:Zn,GitCommitHorizontal:Zn,GitCommitHorizontalIcon:Zn,GitCommitIcon:Zn,GitCommitVertical:Rk,GitCommitVerticalIcon:Rk,GitCompare:Ek,GitCompareArrows:Bk,GitCompareArrowsIcon:Bk,GitCompareIcon:Ek,GitFork:Ok,GitForkIcon:Ok,GitGraph:Uk,GitGraphIcon:Uk,GitMerge:Zk,GitMergeIcon:Zk,GitPullRequest:Jk,GitPullRequestArrow:Wk,GitPullRequestArrowIcon:Wk,GitPullRequestClosed:Gk,GitPullRequestClosedIcon:Gk,GitPullRequestCreate:Kk,GitPullRequestCreateArrow:Xk,GitPullRequestCreateArrowIcon:Xk,GitPullRequestCreateIcon:Kk,GitPullRequestDraft:Qk,GitPullRequestDraftIcon:Qk,GitPullRequestIcon:Jk,Github:Yk,GithubIcon:Yk,Gitlab:e5,GitlabIcon:e5,GlassWater:t5,GlassWaterIcon:t5,Glasses:n5,GlassesIcon:n5,Globe:a5,Globe2:bn,Globe2Icon:bn,GlobeIcon:a5,GlobeLock:o5,GlobeLockIcon:o5,Goal:c5,GoalIcon:c5,Grab:i5,GrabIcon:i5,GraduationCap:r5,GraduationCapIcon:r5,Grape:d5,GrapeIcon:d5,Grid:w1,Grid2X2:Kn,Grid2X2Check:Wn,Grid2X2CheckIcon:Wn,Grid2X2Icon:Kn,Grid2X2Plus:Gn,Grid2X2PlusIcon:Gn,Grid2X2X:Xn,Grid2X2XIcon:Xn,Grid2x2:Kn,Grid2x2Check:Wn,Grid2x2CheckIcon:Wn,Grid2x2Icon:Kn,Grid2x2Plus:Gn,Grid2x2PlusIcon:Gn,Grid2x2X:Xn,Grid2x2XIcon:Xn,Grid3X3:w1,Grid3X3Icon:w1,Grid3x3:w1,Grid3x3Icon:w1,GridIcon:w1,Grip:h5,GripHorizontal:l5,GripHorizontalIcon:l5,GripIcon:h5,GripVertical:s5,GripVerticalIcon:s5,Group:y5,GroupIcon:y5,Guitar:u5,GuitarIcon:u5,Ham:p5,HamIcon:p5,Hammer:k5,HammerIcon:k5,Hand:g5,HandCoins:f5,HandCoinsIcon:f5,HandHeart:m5,HandHeartIcon:m5,HandHelping:Qn,HandHelpingIcon:Qn,HandIcon:g5,HandMetal:M5,HandMetalIcon:M5,HandPlatter:v5,HandPlatterIcon:v5,Handshake:x5,HandshakeIcon:x5,HardDrive:L5,HardDriveDownload:_5,HardDriveDownloadIcon:_5,HardDriveIcon:L5,HardDriveUpload:w5,HardDriveUploadIcon:w5,HardHat:C5,HardHatIcon:C5,Hash:I5,HashIcon:I5,Haze:S5,HazeIcon:S5,HdmiPort:N5,HdmiPortIcon:N5,Heading:H5,Heading1:$5,Heading1Icon:$5,Heading2:z5,Heading2Icon:z5,Heading3:q5,Heading3Icon:q5,Heading4:A5,Heading4Icon:A5,Heading5:b5,Heading5Icon:b5,Heading6:j5,Heading6Icon:j5,HeadingIcon:H5,HeadphoneOff:P5,HeadphoneOffIcon:P5,Headphones:V5,HeadphonesIcon:V5,Headset:T5,HeadsetIcon:T5,Heart:E5,HeartCrack:F5,HeartCrackIcon:F5,HeartHandshake:D5,HeartHandshakeIcon:D5,HeartIcon:E5,HeartOff:R5,HeartOffIcon:R5,HeartPulse:B5,HeartPulseIcon:B5,Heater:O5,HeaterIcon:O5,HelpCircle:sn,HelpCircleIcon:sn,HelpingHand:Qn,HelpingHandIcon:Qn,Hexagon:U5,HexagonIcon:U5,Highlighter:Z5,HighlighterIcon:Z5,History:W5,HistoryIcon:W5,Home:Jn,HomeIcon:Jn,Hop:X5,HopIcon:X5,HopOff:G5,HopOffIcon:G5,Hospital:K5,HospitalIcon:K5,Hotel:gc,HotelIcon:gc,Hourglass:Q5,HourglassIcon:Q5,House:Jn,HouseIcon:Jn,HousePlug:J5,HousePlugIcon:J5,HousePlus:Y5,HousePlusIcon:Y5,HouseWifi:e3,HouseWifiIcon:e3,IceCream:eo,IceCream2:Yn,IceCream2Icon:Yn,IceCreamBowl:Yn,IceCreamBowlIcon:Yn,IceCreamCone:eo,IceCreamConeIcon:eo,IceCreamIcon:eo,Icon:h$,IdCard:t3,IdCardIcon:t3,Image:l3,ImageDown:n3,ImageDownIcon:n3,ImageIcon:l3,ImageMinus:o3,ImageMinusIcon:o3,ImageOff:a3,ImageOffIcon:a3,ImagePlay:c3,ImagePlayIcon:c3,ImagePlus:i3,ImagePlusIcon:i3,ImageUp:r3,ImageUpIcon:r3,ImageUpscale:d3,ImageUpscaleIcon:d3,Images:s3,ImagesIcon:s3,Import:h3,ImportIcon:h3,Inbox:y3,InboxIcon:y3,Indent:no,IndentDecrease:to,IndentDecreaseIcon:to,IndentIcon:no,IndentIncrease:no,IndentIncreaseIcon:no,IndianRupee:u3,IndianRupeeIcon:u3,Infinity:p3,InfinityIcon:p3,Info:k3,InfoIcon:k3,Inspect:ka,InspectIcon:ka,InspectionPanel:f3,InspectionPanelIcon:f3,Instagram:m3,InstagramIcon:m3,Italic:M3,ItalicIcon:M3,IterationCcw:v3,IterationCcwIcon:v3,IterationCw:g3,IterationCwIcon:g3,JapaneseYen:x3,JapaneseYenIcon:x3,Joystick:_3,JoystickIcon:_3,Kanban:w3,KanbanIcon:w3,KanbanSquare:sa,KanbanSquareDashed:oa,KanbanSquareDashedIcon:oa,KanbanSquareIcon:sa,Key:I3,KeyIcon:I3,KeyRound:L3,KeyRoundIcon:L3,KeySquare:C3,KeySquareIcon:C3,Keyboard:$3,KeyboardIcon:$3,KeyboardMusic:S3,KeyboardMusicIcon:S3,KeyboardOff:N3,KeyboardOffIcon:N3,Lamp:H3,LampCeiling:z3,LampCeilingIcon:z3,LampDesk:q3,LampDeskIcon:q3,LampFloor:A3,LampFloorIcon:A3,LampIcon:H3,LampWallDown:b3,LampWallDownIcon:b3,LampWallUp:j3,LampWallUpIcon:j3,LandPlot:P3,LandPlotIcon:P3,Landmark:V3,LandmarkIcon:V3,Languages:T3,LanguagesIcon:T3,Laptop:D3,Laptop2:oo,Laptop2Icon:oo,LaptopIcon:D3,LaptopMinimal:oo,LaptopMinimalCheck:F3,LaptopMinimalCheckIcon:F3,LaptopMinimalIcon:oo,Lasso:B3,LassoIcon:B3,LassoSelect:R3,LassoSelectIcon:R3,Laugh:E3,LaughIcon:E3,Layers:ao,Layers2:O3,Layers2Icon:O3,Layers3:ao,Layers3Icon:ao,LayersIcon:ao,Layout:_o,LayoutDashboard:U3,LayoutDashboardIcon:U3,LayoutGrid:Z3,LayoutGridIcon:Z3,LayoutIcon:_o,LayoutList:W3,LayoutListIcon:W3,LayoutPanelLeft:G3,LayoutPanelLeftIcon:G3,LayoutPanelTop:X3,LayoutPanelTopIcon:X3,LayoutTemplate:K3,LayoutTemplateIcon:K3,Leaf:Q3,LeafIcon:Q3,LeafyGreen:J3,LeafyGreenIcon:J3,Lectern:Y3,LecternIcon:Y3,LetterText:e6,LetterTextIcon:e6,Library:n6,LibraryBig:t6,LibraryBigIcon:t6,LibraryIcon:n6,LibrarySquare:ha,LibrarySquareIcon:ha,LifeBuoy:o6,LifeBuoyIcon:o6,Ligature:a6,LigatureIcon:a6,Lightbulb:i6,LightbulbIcon:i6,LightbulbOff:c6,LightbulbOffIcon:c6,LineChart:Dt,LineChartIcon:Dt,Link:l6,Link2:d6,Link2Icon:d6,Link2Off:r6,Link2OffIcon:r6,LinkIcon:l6,Linkedin:s6,LinkedinIcon:s6,List:S6,ListCheck:h6,ListCheckIcon:h6,ListChecks:y6,ListChecksIcon:y6,ListCollapse:u6,ListCollapseIcon:u6,ListEnd:p6,ListEndIcon:p6,ListFilter:f6,ListFilterIcon:f6,ListFilterPlus:k6,ListFilterPlusIcon:k6,ListIcon:S6,ListMinus:m6,ListMinusIcon:m6,ListMusic:M6,ListMusicIcon:M6,ListOrdered:v6,ListOrderedIcon:v6,ListPlus:g6,ListPlusIcon:g6,ListRestart:x6,ListRestartIcon:x6,ListStart:_6,ListStartIcon:_6,ListTodo:w6,ListTodoIcon:w6,ListTree:L6,ListTreeIcon:L6,ListVideo:C6,ListVideoIcon:C6,ListX:I6,ListXIcon:I6,Loader:$6,Loader2:co,Loader2Icon:co,LoaderCircle:co,LoaderCircleIcon:co,LoaderIcon:$6,LoaderPinwheel:N6,LoaderPinwheelIcon:N6,Locate:A6,LocateFixed:z6,LocateFixedIcon:z6,LocateIcon:A6,LocateOff:q6,LocateOffIcon:q6,Lock:j6,LockIcon:j6,LockKeyhole:b6,LockKeyholeIcon:b6,LockKeyholeOpen:io,LockKeyholeOpenIcon:io,LockOpen:ro,LockOpenIcon:ro,LogIn:H6,LogInIcon:H6,LogOut:P6,LogOutIcon:P6,Logs:V6,LogsIcon:V6,Lollipop:T6,LollipopIcon:T6,LucideAArrowDown:Fi,LucideAArrowUp:Di,LucideALargeSmall:Ri,LucideAccessibility:Bi,LucideActivity:Ei,LucideActivitySquare:Ho,LucideAirVent:Oi,LucideAirplay:Ui,LucideAlarmCheck:mt,LucideAlarmClock:Wi,LucideAlarmClockCheck:mt,LucideAlarmClockMinus:Mt,LucideAlarmClockOff:Zi,LucideAlarmClockPlus:vt,LucideAlarmMinus:Mt,LucideAlarmPlus:vt,LucideAlarmSmoke:Gi,LucideAlbum:Xi,LucideAlertCircle:Zt,LucideAlertOctagon:ho,LucideAlertTriangle:Va,LucideAlignCenter:Ji,LucideAlignCenterHorizontal:Ki,LucideAlignCenterVertical:Qi,LucideAlignEndHorizontal:Yi,LucideAlignEndVertical:er,LucideAlignHorizontalDistributeCenter:tr,LucideAlignHorizontalDistributeEnd:nr,LucideAlignHorizontalDistributeStart:or,LucideAlignHorizontalJustifyCenter:ar,LucideAlignHorizontalJustifyEnd:cr,LucideAlignHorizontalJustifyStart:ir,LucideAlignHorizontalSpaceAround:rr,LucideAlignHorizontalSpaceBetween:dr,LucideAlignJustify:lr,LucideAlignLeft:sr,LucideAlignRight:hr,LucideAlignStartHorizontal:yr,LucideAlignStartVertical:ur,LucideAlignVerticalDistributeCenter:pr,LucideAlignVerticalDistributeEnd:kr,LucideAlignVerticalDistributeStart:fr,LucideAlignVerticalJustifyCenter:mr,LucideAlignVerticalJustifyEnd:Mr,LucideAlignVerticalJustifyStart:vr,LucideAlignVerticalSpaceAround:gr,LucideAlignVerticalSpaceBetween:xr,LucideAmbulance:_r,LucideAmpersand:wr,LucideAmpersands:Lr,LucideAmphora:Cr,LucideAnchor:Ir,LucideAngry:Sr,LucideAnnoyed:Nr,LucideAntenna:$r,LucideAnvil:zr,LucideAperture:qr,LucideAppWindow:br,LucideAppWindowMac:Ar,LucideApple:jr,LucideArchive:Vr,LucideArchiveRestore:Hr,LucideArchiveX:Pr,LucideAreaChart:bt,LucideArmchair:Tr,LucideArrowBigDown:Dr,LucideArrowBigDownDash:Fr,LucideArrowBigLeft:Br,LucideArrowBigLeftDash:Rr,LucideArrowBigRight:Or,LucideArrowBigRightDash:Er,LucideArrowBigUp:Zr,LucideArrowBigUpDash:Ur,LucideArrowDown:n0,LucideArrowDown01:Wr,LucideArrowDown10:Gr,LucideArrowDownAZ:gt,LucideArrowDownAz:gt,LucideArrowDownCircle:Wt,LucideArrowDownFromLine:Xr,LucideArrowDownLeft:Kr,LucideArrowDownLeftFromCircle:Xt,LucideArrowDownLeftFromSquare:Do,LucideArrowDownLeftSquare:Po,LucideArrowDownNarrowWide:Qr,LucideArrowDownRight:Jr,LucideArrowDownRightFromCircle:Kt,LucideArrowDownRightFromSquare:Ro,LucideArrowDownRightSquare:Vo,LucideArrowDownSquare:To,LucideArrowDownToDot:Yr,LucideArrowDownToLine:e0,LucideArrowDownUp:t0,LucideArrowDownWideNarrow:xt,LucideArrowDownZA:_t,LucideArrowDownZa:_t,LucideArrowLeft:i0,LucideArrowLeftCircle:Gt,LucideArrowLeftFromLine:o0,LucideArrowLeftRight:a0,LucideArrowLeftSquare:Fo,LucideArrowLeftToLine:c0,LucideArrowRight:s0,LucideArrowRightCircle:Yt,LucideArrowRightFromLine:r0,LucideArrowRightLeft:d0,LucideArrowRightSquare:Oo,LucideArrowRightToLine:l0,LucideArrowUp:g0,LucideArrowUp01:h0,LucideArrowUp10:y0,LucideArrowUpAZ:wt,LucideArrowUpAz:wt,LucideArrowUpCircle:en,LucideArrowUpDown:u0,LucideArrowUpFromDot:p0,LucideArrowUpFromLine:k0,LucideArrowUpLeft:f0,LucideArrowUpLeftFromCircle:Qt,LucideArrowUpLeftFromSquare:Bo,LucideArrowUpLeftSquare:Uo,LucideArrowUpNarrowWide:Lt,LucideArrowUpRight:m0,LucideArrowUpRightFromCircle:Jt,LucideArrowUpRightFromSquare:Eo,LucideArrowUpRightSquare:Zo,LucideArrowUpSquare:Wo,LucideArrowUpToLine:M0,LucideArrowUpWideNarrow:v0,LucideArrowUpZA:Ct,LucideArrowUpZa:Ct,LucideArrowsUpFromLine:x0,LucideAsterisk:_0,LucideAsteriskSquare:Go,LucideAtSign:w0,LucideAtom:L0,LucideAudioLines:C0,LucideAudioWaveform:I0,LucideAward:S0,LucideAxe:N0,LucideAxis3D:It,LucideAxis3d:It,LucideBaby:$0,LucideBackpack:z0,LucideBadge:Z0,LucideBadgeAlert:q0,LucideBadgeCent:A0,LucideBadgeCheck:St,LucideBadgeDollarSign:b0,LucideBadgeEuro:j0,LucideBadgeHelp:H0,LucideBadgeIndianRupee:P0,LucideBadgeInfo:V0,LucideBadgeJapaneseYen:T0,LucideBadgeMinus:F0,LucideBadgePercent:D0,LucideBadgePlus:R0,LucideBadgePoundSterling:B0,LucideBadgeRussianRuble:E0,LucideBadgeSwissFranc:O0,LucideBadgeX:U0,LucideBaggageClaim:W0,LucideBan:G0,LucideBanana:X0,LucideBandage:K0,LucideBanknote:Q0,LucideBarChart:Rt,LucideBarChart2:Bt,LucideBarChart3:Ft,LucideBarChart4:Tt,LucideBarChartBig:Vt,LucideBarChartHorizontal:Ht,LucideBarChartHorizontalBig:jt,LucideBarcode:J0,LucideBaseline:Y0,LucideBath:ed,LucideBattery:id,LucideBatteryCharging:td,LucideBatteryFull:nd,LucideBatteryLow:od,LucideBatteryMedium:ad,LucideBatteryWarning:cd,LucideBeaker:rd,LucideBean:ld,LucideBeanOff:dd,LucideBed:yd,LucideBedDouble:sd,LucideBedSingle:hd,LucideBeef:ud,LucideBeer:kd,LucideBeerOff:pd,LucideBell:_d,LucideBellDot:fd,LucideBellElectric:md,LucideBellMinus:Md,LucideBellOff:vd,LucideBellPlus:gd,LucideBellRing:xd,LucideBetweenHorizonalEnd:Nt,LucideBetweenHorizonalStart:$t,LucideBetweenHorizontalEnd:Nt,LucideBetweenHorizontalStart:$t,LucideBetweenVerticalEnd:wd,LucideBetweenVerticalStart:Ld,LucideBicepsFlexed:Cd,LucideBike:Id,LucideBinary:Sd,LucideBinoculars:Nd,LucideBiohazard:$d,LucideBird:zd,LucideBitcoin:qd,LucideBlend:Ad,LucideBlinds:bd,LucideBlocks:jd,LucideBluetooth:Td,LucideBluetoothConnected:Hd,LucideBluetoothOff:Pd,LucideBluetoothSearching:Vd,LucideBold:Fd,LucideBolt:Dd,LucideBomb:Rd,LucideBone:Bd,LucideBook:hl,LucideBookA:Ed,LucideBookAudio:Od,LucideBookCheck:Ud,LucideBookCopy:Zd,LucideBookDashed:zt,LucideBookDown:Wd,LucideBookHeadphones:Gd,LucideBookHeart:Xd,LucideBookImage:Kd,LucideBookKey:Qd,LucideBookLock:Jd,LucideBookMarked:Yd,LucideBookMinus:el,LucideBookOpen:ol,LucideBookOpenCheck:tl,LucideBookOpenText:nl,LucideBookPlus:al,LucideBookTemplate:zt,LucideBookText:cl,LucideBookType:il,LucideBookUp:dl,LucideBookUp2:rl,LucideBookUser:ll,LucideBookX:sl,LucideBookmark:fl,LucideBookmarkCheck:yl,LucideBookmarkMinus:ul,LucideBookmarkPlus:pl,LucideBookmarkX:kl,LucideBoomBox:ml,LucideBot:gl,LucideBotMessageSquare:Ml,LucideBotOff:vl,LucideBox:xl,LucideBoxSelect:ca,LucideBoxes:_l,LucideBraces:qt,LucideBrackets:wl,LucideBrain:Il,LucideBrainCircuit:Ll,LucideBrainCog:Cl,LucideBrickWall:Sl,LucideBriefcase:zl,LucideBriefcaseBusiness:pc,LucideBriefcaseConveyorBelt:Nl,LucideBriefcaseMedical:$l,LucideBringToFront:ql,LucideBrush:Al,LucideBug:Hl,LucideBugOff:bl,LucideBugPlay:jl,LucideBuilding:Vl,LucideBuilding2:Pl,LucideBus:Fl,LucideBusFront:Tl,LucideCable:Rl,LucideCableCar:Dl,LucideCake:El,LucideCakeSlice:Bl,LucideCalculator:Ol,LucideCalendar:hs,LucideCalendar1:Ul,LucideCalendarArrowDown:Zl,LucideCalendarArrowUp:Wl,LucideCalendarCheck:Xl,LucideCalendarCheck2:Gl,LucideCalendarClock:Kl,LucideCalendarCog:Ql,LucideCalendarDays:Jl,LucideCalendarFold:Yl,LucideCalendarHeart:es,LucideCalendarMinus:ns,LucideCalendarMinus2:ts,LucideCalendarOff:os,LucideCalendarPlus:cs,LucideCalendarPlus2:as,LucideCalendarRange:is,LucideCalendarSearch:rs,LucideCalendarSync:ds,LucideCalendarX:ss,LucideCalendarX2:ls,LucideCamera:us,LucideCameraOff:ys,LucideCandlestickChart:Pt,LucideCandy:fs,LucideCandyCane:ps,LucideCandyOff:ks,LucideCannabis:ms,LucideCaptions:At,LucideCaptionsOff:Ms,LucideCar:fc,LucideCarFront:vs,LucideCarTaxiFront:kc,LucideCaravan:gs,LucideCarrot:xs,LucideCaseLower:_s,LucideCaseSensitive:ws,LucideCaseUpper:Ls,LucideCassetteTape:Cs,LucideCast:Is,LucideCastle:Ss,LucideCat:Ns,LucideCctv:$s,LucideChartArea:bt,LucideChartBar:Ht,LucideChartBarBig:jt,LucideChartBarDecreasing:zs,LucideChartBarIncreasing:qs,LucideChartBarStacked:As,LucideChartCandlestick:Pt,LucideChartColumn:Ft,LucideChartColumnBig:Vt,LucideChartColumnDecreasing:bs,LucideChartColumnIncreasing:Tt,LucideChartColumnStacked:js,LucideChartGantt:Hs,LucideChartLine:Dt,LucideChartNetwork:Ps,LucideChartNoAxesColumn:Bt,LucideChartNoAxesColumnDecreasing:Vs,LucideChartNoAxesColumnIncreasing:Rt,LucideChartNoAxesCombined:Ts,LucideChartNoAxesGantt:Et,LucideChartPie:Ot,LucideChartScatter:Ut,LucideChartSpline:Fs,LucideCheck:Rs,LucideCheckCheck:Ds,LucideCheckCircle:tn,LucideCheckCircle2:nn,LucideCheckSquare:Ko,LucideCheckSquare2:Qo,LucideChefHat:Bs,LucideCherry:Es,LucideChevronDown:Os,LucideChevronDownCircle:on,LucideChevronDownSquare:Jo,LucideChevronFirst:Us,LucideChevronLast:Zs,LucideChevronLeft:mc,LucideChevronLeftCircle:an,LucideChevronLeftSquare:Yo,LucideChevronRight:Mc,LucideChevronRightCircle:cn,LucideChevronRightSquare:ea,LucideChevronUp:Ws,LucideChevronUpCircle:rn,LucideChevronUpSquare:ta,LucideChevronsDown:Xs,LucideChevronsDownUp:Gs,LucideChevronsLeft:Js,LucideChevronsLeftRight:Qs,LucideChevronsLeftRightEllipsis:Ks,LucideChevronsRight:eh,LucideChevronsRightLeft:Ys,LucideChevronsUp:nh,LucideChevronsUpDown:th,LucideChrome:oh,LucideChurch:ah,LucideCigarette:ih,LucideCigaretteOff:ch,LucideCircle:mh,LucideCircleAlert:Zt,LucideCircleArrowDown:Wt,LucideCircleArrowLeft:Gt,LucideCircleArrowOutDownLeft:Xt,LucideCircleArrowOutDownRight:Kt,LucideCircleArrowOutUpLeft:Qt,LucideCircleArrowOutUpRight:Jt,LucideCircleArrowRight:Yt,LucideCircleArrowUp:en,LucideCircleCheck:nn,LucideCircleCheckBig:tn,LucideCircleChevronDown:on,LucideCircleChevronLeft:an,LucideCircleChevronRight:cn,LucideCircleChevronUp:rn,LucideCircleDashed:rh,LucideCircleDivide:dn,LucideCircleDollarSign:dh,LucideCircleDot:sh,LucideCircleDotDashed:lh,LucideCircleEllipsis:hh,LucideCircleEqual:yh,LucideCircleFadingArrowUp:uh,LucideCircleFadingPlus:ph,LucideCircleGauge:ln,LucideCircleHelp:sn,LucideCircleMinus:hn,LucideCircleOff:kh,LucideCircleParking:un,LucideCircleParkingOff:yn,LucideCirclePause:pn,LucideCirclePercent:kn,LucideCirclePlay:fn,LucideCirclePlus:mn,LucideCirclePower:Mn,LucideCircleSlash:fh,LucideCircleSlash2:vn,LucideCircleSlashed:vn,LucideCircleStop:gn,LucideCircleUser:_n,LucideCircleUserRound:xn,LucideCircleX:wn,LucideCircuitBoard:Mh,LucideCitrus:vh,LucideClapperboard:gh,LucideClipboard:$h,LucideClipboardCheck:xh,LucideClipboardCopy:_h,LucideClipboardEdit:Cn,LucideClipboardList:wh,LucideClipboardMinus:Lh,LucideClipboardPaste:Ch,LucideClipboardPen:Cn,LucideClipboardPenLine:Ln,LucideClipboardPlus:Ih,LucideClipboardSignature:Ln,LucideClipboardType:Sh,LucideClipboardX:Nh,LucideClock:vc,LucideClock1:zh,LucideClock10:qh,LucideClock11:Ah,LucideClock12:bh,LucideClock2:jh,LucideClock3:Hh,LucideClock4:Ph,LucideClock5:Vh,LucideClock6:Th,LucideClock7:Fh,LucideClock8:Dh,LucideClock9:Rh,LucideClockAlert:Bh,LucideClockArrowDown:Eh,LucideClockArrowUp:Oh,LucideCloud:cy,LucideCloudAlert:Uh,LucideCloudCog:Zh,LucideCloudDownload:In,LucideCloudDrizzle:Wh,LucideCloudFog:Gh,LucideCloudHail:Xh,LucideCloudLightning:Kh,LucideCloudMoon:Jh,LucideCloudMoonRain:Qh,LucideCloudOff:Yh,LucideCloudRain:ty,LucideCloudRainWind:ey,LucideCloudSnow:ny,LucideCloudSun:ay,LucideCloudSunRain:oy,LucideCloudUpload:Sn,LucideCloudy:iy,LucideClover:ry,LucideClub:dy,LucideCode:ly,LucideCode2:Nn,LucideCodeSquare:na,LucideCodeXml:Nn,LucideCodepen:sy,LucideCodesandbox:hy,LucideCoffee:yy,LucideCog:uy,LucideCoins:py,LucideColumns:$n,LucideColumns2:$n,LucideColumns3:zn,LucideColumns4:ky,LucideCombine:fy,LucideCommand:my,LucideCompass:My,LucideComponent:vy,LucideComputer:gy,LucideConciergeBell:xy,LucideCone:_y,LucideConstruction:wy,LucideContact:Ly,LucideContact2:qn,LucideContactRound:qn,LucideContainer:Cy,LucideContrast:Iy,LucideCookie:Sy,LucideCookingPot:Ny,LucideCopy:jy,LucideCopyCheck:$y,LucideCopyMinus:zy,LucideCopyPlus:qy,LucideCopySlash:Ay,LucideCopyX:by,LucideCopyleft:Hy,LucideCopyright:Py,LucideCornerDownLeft:Vy,LucideCornerDownRight:Ty,LucideCornerLeftDown:Fy,LucideCornerLeftUp:Dy,LucideCornerRightDown:Ry,LucideCornerRightUp:By,LucideCornerUpLeft:Ey,LucideCornerUpRight:Oy,LucideCpu:Uy,LucideCreativeCommons:Zy,LucideCreditCard:Wy,LucideCroissant:Gy,LucideCrop:Xy,LucideCross:Ky,LucideCrosshair:Qy,LucideCrown:Jy,LucideCuboid:Yy,LucideCupSoda:eu,LucideCurlyBraces:qt,LucideCurrency:tu,LucideCylinder:nu,LucideDam:ou,LucideDatabase:iu,LucideDatabaseBackup:au,LucideDatabaseZap:cu,LucideDelete:ru,LucideDessert:du,LucideDiameter:lu,LucideDiamond:yu,LucideDiamondMinus:su,LucideDiamondPercent:An,LucideDiamondPlus:hu,LucideDice1:uu,LucideDice2:pu,LucideDice3:ku,LucideDice4:fu,LucideDice5:mu,LucideDice6:Mu,LucideDices:vu,LucideDiff:gu,LucideDisc:Lu,LucideDisc2:xu,LucideDisc3:_u,LucideDiscAlbum:wu,LucideDivide:Cu,LucideDivideCircle:dn,LucideDivideSquare:ia,LucideDna:Su,LucideDnaOff:Iu,LucideDock:Nu,LucideDog:$u,LucideDollarSign:zu,LucideDonut:qu,LucideDoorClosed:Au,LucideDoorOpen:bu,LucideDot:ju,LucideDotSquare:ra,LucideDownload:Hu,LucideDownloadCloud:In,LucideDraftingCompass:Pu,LucideDrama:Vu,LucideDribbble:Tu,LucideDrill:Fu,LucideDroplet:Ru,LucideDropletOff:Du,LucideDroplets:Bu,LucideDrum:Eu,LucideDrumstick:Ou,LucideDumbbell:Uu,LucideEar:Wu,LucideEarOff:Zu,LucideEarth:bn,LucideEarthLock:Gu,LucideEclipse:Xu,LucideEdit:Ke,LucideEdit2:Lo,LucideEdit3:wo,LucideEgg:Ju,LucideEggFried:Ku,LucideEggOff:Qu,LucideEllipsis:Hn,LucideEllipsisVertical:jn,LucideEqual:tp,LucideEqualApproximately:Yu,LucideEqualNot:ep,LucideEqualSquare:da,LucideEraser:np,LucideEthernetPort:op,LucideEuro:ap,LucideExpand:cp,LucideExternalLink:ip,LucideEye:lp,LucideEyeClosed:rp,LucideEyeOff:dp,LucideFacebook:sp,LucideFactory:hp,LucideFan:yp,LucideFastForward:up,LucideFeather:pp,LucideFence:kp,LucideFerrisWheel:fp,LucideFigma:mp,LucideFile:p4,LucideFileArchive:Mp,LucideFileAudio:gp,LucideFileAudio2:vp,LucideFileAxis3D:Pn,LucideFileAxis3d:Pn,LucideFileBadge:_p,LucideFileBadge2:xp,LucideFileBarChart:Vn,LucideFileBarChart2:Tn,LucideFileBox:wp,LucideFileChartColumn:Tn,LucideFileChartColumnIncreasing:Vn,LucideFileChartLine:Fn,LucideFileChartPie:Dn,LucideFileCheck:Cp,LucideFileCheck2:Lp,LucideFileClock:Ip,LucideFileCode:Np,LucideFileCode2:Sp,LucideFileCog:Rn,LucideFileCog2:Rn,LucideFileDiff:$p,LucideFileDigit:zp,LucideFileDown:qp,LucideFileEdit:En,LucideFileHeart:Ap,LucideFileImage:bp,LucideFileInput:jp,LucideFileJson:Pp,LucideFileJson2:Hp,LucideFileKey:Tp,LucideFileKey2:Vp,LucideFileLineChart:Fn,LucideFileLock:Dp,LucideFileLock2:Fp,LucideFileMinus:Bp,LucideFileMinus2:Rp,LucideFileMusic:Ep,LucideFileOutput:Op,LucideFilePen:En,LucideFilePenLine:Bn,LucideFilePieChart:Dn,LucideFilePlus:Zp,LucideFilePlus2:Up,LucideFileQuestion:Wp,LucideFileScan:Gp,LucideFileSearch:Kp,LucideFileSearch2:Xp,LucideFileSignature:Bn,LucideFileSliders:Qp,LucideFileSpreadsheet:Jp,LucideFileStack:Yp,LucideFileSymlink:e4,LucideFileTerminal:t4,LucideFileText:n4,LucideFileType:a4,LucideFileType2:o4,LucideFileUp:c4,LucideFileUser:i4,LucideFileVideo:d4,LucideFileVideo2:r4,LucideFileVolume:s4,LucideFileVolume2:l4,LucideFileWarning:h4,LucideFileX:u4,LucideFileX2:y4,LucideFiles:k4,LucideFilm:f4,LucideFilter:M4,LucideFilterX:m4,LucideFingerprint:v4,LucideFireExtinguisher:g4,LucideFish:w4,LucideFishOff:x4,LucideFishSymbol:_4,LucideFlag:S4,LucideFlagOff:L4,LucideFlagTriangleLeft:C4,LucideFlagTriangleRight:I4,LucideFlame:$4,LucideFlameKindling:N4,LucideFlashlight:q4,LucideFlashlightOff:z4,LucideFlaskConical:b4,LucideFlaskConicalOff:A4,LucideFlaskRound:j4,LucideFlipHorizontal:P4,LucideFlipHorizontal2:H4,LucideFlipVertical:T4,LucideFlipVertical2:V4,LucideFlower:D4,LucideFlower2:F4,LucideFocus:R4,LucideFoldHorizontal:B4,LucideFoldVertical:E4,LucideFolder:mk,LucideFolderArchive:O4,LucideFolderCheck:U4,LucideFolderClock:Z4,LucideFolderClosed:W4,LucideFolderCode:G4,LucideFolderCog:On,LucideFolderCog2:On,LucideFolderDot:X4,LucideFolderDown:K4,LucideFolderEdit:Un,LucideFolderGit:J4,LucideFolderGit2:Q4,LucideFolderHeart:Y4,LucideFolderInput:ek,LucideFolderKanban:tk,LucideFolderKey:nk,LucideFolderLock:ok,LucideFolderMinus:ak,LucideFolderOpen:ik,LucideFolderOpenDot:ck,LucideFolderOutput:rk,LucideFolderPen:Un,LucideFolderPlus:dk,LucideFolderRoot:lk,LucideFolderSearch:hk,LucideFolderSearch2:sk,LucideFolderSymlink:yk,LucideFolderSync:uk,LucideFolderTree:pk,LucideFolderUp:kk,LucideFolderX:fk,LucideFolders:Mk,LucideFootprints:vk,LucideForkKnife:Ga,LucideForkKnifeCrossed:Wa,LucideForklift:gk,LucideFormInput:Io,LucideForward:xk,LucideFrame:_k,LucideFramer:wk,LucideFrown:Lk,LucideFuel:Ck,LucideFullscreen:Ik,LucideFunctionSquare:la,LucideGalleryHorizontal:Nk,LucideGalleryHorizontalEnd:Sk,LucideGalleryThumbnails:$k,LucideGalleryVertical:qk,LucideGalleryVerticalEnd:zk,LucideGamepad:bk,LucideGamepad2:Ak,LucideGanttChart:Et,LucideGanttChartSquare:L1,LucideGauge:jk,LucideGaugeCircle:ln,LucideGavel:Hk,LucideGem:Pk,LucideGhost:Vk,LucideGift:Tk,LucideGitBranch:Dk,LucideGitBranchPlus:Fk,LucideGitCommit:Zn,LucideGitCommitHorizontal:Zn,LucideGitCommitVertical:Rk,LucideGitCompare:Ek,LucideGitCompareArrows:Bk,LucideGitFork:Ok,LucideGitGraph:Uk,LucideGitMerge:Zk,LucideGitPullRequest:Jk,LucideGitPullRequestArrow:Wk,LucideGitPullRequestClosed:Gk,LucideGitPullRequestCreate:Kk,LucideGitPullRequestCreateArrow:Xk,LucideGitPullRequestDraft:Qk,LucideGithub:Yk,LucideGitlab:e5,LucideGlassWater:t5,LucideGlasses:n5,LucideGlobe:a5,LucideGlobe2:bn,LucideGlobeLock:o5,LucideGoal:c5,LucideGrab:i5,LucideGraduationCap:r5,LucideGrape:d5,LucideGrid:w1,LucideGrid2X2:Kn,LucideGrid2X2Check:Wn,LucideGrid2X2Plus:Gn,LucideGrid2X2X:Xn,LucideGrid2x2:Kn,LucideGrid2x2Check:Wn,LucideGrid2x2Plus:Gn,LucideGrid2x2X:Xn,LucideGrid3X3:w1,LucideGrid3x3:w1,LucideGrip:h5,LucideGripHorizontal:l5,LucideGripVertical:s5,LucideGroup:y5,LucideGuitar:u5,LucideHam:p5,LucideHammer:k5,LucideHand:g5,LucideHandCoins:f5,LucideHandHeart:m5,LucideHandHelping:Qn,LucideHandMetal:M5,LucideHandPlatter:v5,LucideHandshake:x5,LucideHardDrive:L5,LucideHardDriveDownload:_5,LucideHardDriveUpload:w5,LucideHardHat:C5,LucideHash:I5,LucideHaze:S5,LucideHdmiPort:N5,LucideHeading:H5,LucideHeading1:$5,LucideHeading2:z5,LucideHeading3:q5,LucideHeading4:A5,LucideHeading5:b5,LucideHeading6:j5,LucideHeadphoneOff:P5,LucideHeadphones:V5,LucideHeadset:T5,LucideHeart:E5,LucideHeartCrack:F5,LucideHeartHandshake:D5,LucideHeartOff:R5,LucideHeartPulse:B5,LucideHeater:O5,LucideHelpCircle:sn,LucideHelpingHand:Qn,LucideHexagon:U5,LucideHighlighter:Z5,LucideHistory:W5,LucideHome:Jn,LucideHop:X5,LucideHopOff:G5,LucideHospital:K5,LucideHotel:gc,LucideHourglass:Q5,LucideHouse:Jn,LucideHousePlug:J5,LucideHousePlus:Y5,LucideHouseWifi:e3,LucideIceCream:eo,LucideIceCream2:Yn,LucideIceCreamBowl:Yn,LucideIceCreamCone:eo,LucideIdCard:t3,LucideImage:l3,LucideImageDown:n3,LucideImageMinus:o3,LucideImageOff:a3,LucideImagePlay:c3,LucideImagePlus:i3,LucideImageUp:r3,LucideImageUpscale:d3,LucideImages:s3,LucideImport:h3,LucideInbox:y3,LucideIndent:no,LucideIndentDecrease:to,LucideIndentIncrease:no,LucideIndianRupee:u3,LucideInfinity:p3,LucideInfo:k3,LucideInspect:ka,LucideInspectionPanel:f3,LucideInstagram:m3,LucideItalic:M3,LucideIterationCcw:v3,LucideIterationCw:g3,LucideJapaneseYen:x3,LucideJoystick:_3,LucideKanban:w3,LucideKanbanSquare:sa,LucideKanbanSquareDashed:oa,LucideKey:I3,LucideKeyRound:L3,LucideKeySquare:C3,LucideKeyboard:$3,LucideKeyboardMusic:S3,LucideKeyboardOff:N3,LucideLamp:H3,LucideLampCeiling:z3,LucideLampDesk:q3,LucideLampFloor:A3,LucideLampWallDown:b3,LucideLampWallUp:j3,LucideLandPlot:P3,LucideLandmark:V3,LucideLanguages:T3,LucideLaptop:D3,LucideLaptop2:oo,LucideLaptopMinimal:oo,LucideLaptopMinimalCheck:F3,LucideLasso:B3,LucideLassoSelect:R3,LucideLaugh:E3,LucideLayers:ao,LucideLayers2:O3,LucideLayers3:ao,LucideLayout:_o,LucideLayoutDashboard:U3,LucideLayoutGrid:Z3,LucideLayoutList:W3,LucideLayoutPanelLeft:G3,LucideLayoutPanelTop:X3,LucideLayoutTemplate:K3,LucideLeaf:Q3,LucideLeafyGreen:J3,LucideLectern:Y3,LucideLetterText:e6,LucideLibrary:n6,LucideLibraryBig:t6,LucideLibrarySquare:ha,LucideLifeBuoy:o6,LucideLigature:a6,LucideLightbulb:i6,LucideLightbulbOff:c6,LucideLineChart:Dt,LucideLink:l6,LucideLink2:d6,LucideLink2Off:r6,LucideLinkedin:s6,LucideList:S6,LucideListCheck:h6,LucideListChecks:y6,LucideListCollapse:u6,LucideListEnd:p6,LucideListFilter:f6,LucideListFilterPlus:k6,LucideListMinus:m6,LucideListMusic:M6,LucideListOrdered:v6,LucideListPlus:g6,LucideListRestart:x6,LucideListStart:_6,LucideListTodo:w6,LucideListTree:L6,LucideListVideo:C6,LucideListX:I6,LucideLoader:$6,LucideLoader2:co,LucideLoaderCircle:co,LucideLoaderPinwheel:N6,LucideLocate:A6,LucideLocateFixed:z6,LucideLocateOff:q6,LucideLock:j6,LucideLockKeyhole:b6,LucideLockKeyholeOpen:io,LucideLockOpen:ro,LucideLogIn:H6,LucideLogOut:P6,LucideLogs:V6,LucideLollipop:T6,LucideLuggage:F6,LucideMSquare:ya,LucideMagnet:D6,LucideMail:X6,LucideMailCheck:R6,LucideMailMinus:B6,LucideMailOpen:E6,LucideMailPlus:O6,LucideMailQuestion:U6,LucideMailSearch:Z6,LucideMailWarning:W6,LucideMailX:G6,LucideMailbox:K6,LucideMails:Q6,LucideMap:_c,LucideMapPin:xc,LucideMapPinCheck:Y6,LucideMapPinCheckInside:J6,LucideMapPinHouse:e8,LucideMapPinMinus:n8,LucideMapPinMinusInside:t8,LucideMapPinOff:o8,LucideMapPinPlus:c8,LucideMapPinPlusInside:a8,LucideMapPinX:r8,LucideMapPinXInside:i8,LucideMapPinned:d8,LucideMartini:l8,LucideMaximize:h8,LucideMaximize2:s8,LucideMedal:y8,LucideMegaphone:p8,LucideMegaphoneOff:u8,LucideMeh:k8,LucideMemoryStick:f8,LucideMenu:m8,LucideMenuSquare:ua,LucideMerge:M8,LucideMessageCircle:$8,LucideMessageCircleCode:v8,LucideMessageCircleDashed:g8,LucideMessageCircleHeart:x8,LucideMessageCircleMore:_8,LucideMessageCircleOff:w8,LucideMessageCirclePlus:L8,LucideMessageCircleQuestion:C8,LucideMessageCircleReply:I8,LucideMessageCircleWarning:S8,LucideMessageCircleX:N8,LucideMessageSquare:U8,LucideMessageSquareCode:z8,LucideMessageSquareDashed:q8,LucideMessageSquareDiff:A8,LucideMessageSquareDot:b8,LucideMessageSquareHeart:j8,LucideMessageSquareLock:H8,LucideMessageSquareMore:P8,LucideMessageSquareOff:V8,LucideMessageSquarePlus:T8,LucideMessageSquareQuote:F8,LucideMessageSquareReply:D8,LucideMessageSquareShare:R8,LucideMessageSquareText:B8,LucideMessageSquareWarning:E8,LucideMessageSquareX:O8,LucideMessagesSquare:Z8,LucideMic:G8,LucideMic2:lo,LucideMicOff:W8,LucideMicVocal:lo,LucideMicrochip:X8,LucideMicroscope:K8,LucideMicrowave:Q8,LucideMilestone:J8,LucideMilk:e7,LucideMilkOff:Y8,LucideMinimize:n7,LucideMinimize2:t7,LucideMinus:o7,LucideMinusCircle:hn,LucideMinusSquare:pa,LucideMonitor:f7,LucideMonitorCheck:a7,LucideMonitorCog:c7,LucideMonitorDot:i7,LucideMonitorDown:r7,LucideMonitorOff:d7,LucideMonitorPause:l7,LucideMonitorPlay:s7,LucideMonitorSmartphone:h7,LucideMonitorSpeaker:y7,LucideMonitorStop:u7,LucideMonitorUp:p7,LucideMonitorX:k7,LucideMoon:M7,LucideMoonStar:m7,LucideMoreHorizontal:Hn,LucideMoreVertical:jn,LucideMountain:g7,LucideMountainSnow:v7,LucideMouse:I7,LucideMouseOff:x7,LucideMousePointer:C7,LucideMousePointer2:_7,LucideMousePointerBan:w7,LucideMousePointerClick:L7,LucideMousePointerSquareDashed:aa,LucideMove:F7,LucideMove3D:so,LucideMove3d:so,LucideMoveDiagonal:N7,LucideMoveDiagonal2:S7,LucideMoveDown:q7,LucideMoveDownLeft:$7,LucideMoveDownRight:z7,LucideMoveHorizontal:A7,LucideMoveLeft:b7,LucideMoveRight:j7,LucideMoveUp:V7,LucideMoveUpLeft:H7,LucideMoveUpRight:P7,LucideMoveVertical:T7,LucideMusic:E7,LucideMusic2:D7,LucideMusic3:R7,LucideMusic4:B7,LucideNavigation:W7,LucideNavigation2:U7,LucideNavigation2Off:O7,LucideNavigationOff:Z7,LucideNetwork:G7,LucideNewspaper:X7,LucideNfc:K7,LucideNotebook:ef,LucideNotebookPen:Q7,LucideNotebookTabs:J7,LucideNotebookText:Y7,LucideNotepadText:nf,LucideNotepadTextDashed:tf,LucideNut:af,LucideNutOff:of,LucideOctagon:rf,LucideOctagonAlert:ho,LucideOctagonMinus:cf,LucideOctagonPause:yo,LucideOctagonX:uo,LucideOmega:df,LucideOption:lf,LucideOrbit:sf,LucideOrigami:hf,LucideOutdent:to,LucidePackage:vf,LucidePackage2:yf,LucidePackageCheck:uf,LucidePackageMinus:pf,LucidePackageOpen:kf,LucidePackagePlus:ff,LucidePackageSearch:mf,LucidePackageX:Mf,LucidePaintBucket:gf,LucidePaintRoller:xf,LucidePaintbrush:_f,LucidePaintbrush2:po,LucidePaintbrushVertical:po,LucidePalette:wf,LucidePalmtree:Pa,LucidePanelBottom:If,LucidePanelBottomClose:Lf,LucidePanelBottomDashed:ko,LucidePanelBottomInactive:ko,LucidePanelBottomOpen:Cf,LucidePanelLeft:vo,LucidePanelLeftClose:fo,LucidePanelLeftDashed:mo,LucidePanelLeftInactive:mo,LucidePanelLeftOpen:Mo,LucidePanelRight:$f,LucidePanelRightClose:Sf,LucidePanelRightDashed:go,LucidePanelRightInactive:go,LucidePanelRightOpen:Nf,LucidePanelTop:Af,LucidePanelTopClose:zf,LucidePanelTopDashed:xo,LucidePanelTopInactive:xo,LucidePanelTopOpen:qf,LucidePanelsLeftBottom:bf,LucidePanelsLeftRight:zn,LucidePanelsRightBottom:jf,LucidePanelsTopBottom:$o,LucidePanelsTopLeft:_o,LucidePaperclip:Hf,LucideParentheses:Pf,LucideParkingCircle:un,LucideParkingCircleOff:yn,LucideParkingMeter:Vf,LucideParkingSquare:ma,LucideParkingSquareOff:fa,LucidePartyPopper:Tf,LucidePause:Ff,LucidePauseCircle:pn,LucidePauseOctagon:yo,LucidePawPrint:Df,LucidePcCase:Rf,LucidePen:Lo,LucidePenBox:Ke,LucidePenLine:wo,LucidePenOff:Bf,LucidePenSquare:Ke,LucidePenTool:Ef,LucidePencil:Wf,LucidePencilLine:Of,LucidePencilOff:Uf,LucidePencilRuler:Zf,LucidePentagon:Gf,LucidePercent:Xf,LucidePercentCircle:kn,LucidePercentDiamond:An,LucidePercentSquare:Ma,LucidePersonStanding:Kf,LucidePhilippinePeso:Qf,LucidePhone:am,LucidePhoneCall:Jf,LucidePhoneForwarded:Yf,LucidePhoneIncoming:em,LucidePhoneMissed:tm,LucidePhoneOff:nm,LucidePhoneOutgoing:om,LucidePi:cm,LucidePiSquare:va,LucidePiano:im,LucidePickaxe:rm,LucidePictureInPicture:lm,LucidePictureInPicture2:dm,LucidePieChart:Ot,LucidePiggyBank:sm,LucidePilcrow:um,LucidePilcrowLeft:hm,LucidePilcrowRight:ym,LucidePilcrowSquare:ga,LucidePill:km,LucidePillBottle:pm,LucidePin:mm,LucidePinOff:fm,LucidePipette:Mm,LucidePizza:vm,LucidePlane:wc,LucidePlaneLanding:gm,LucidePlaneTakeoff:xm,LucidePlay:_m,LucidePlayCircle:fn,LucidePlaySquare:xa,LucidePlug:Lm,LucidePlug2:wm,LucidePlugZap:Co,LucidePlugZap2:Co,LucidePlus:Cm,LucidePlusCircle:mn,LucidePlusSquare:_a,LucidePocket:Sm,LucidePocketKnife:Im,LucidePodcast:Nm,LucidePointer:zm,LucidePointerOff:$m,LucidePopcorn:qm,LucidePopsicle:Am,LucidePoundSterling:bm,LucidePower:Hm,LucidePowerCircle:Mn,LucidePowerOff:jm,LucidePowerSquare:wa,LucidePresentation:Pm,LucidePrinter:Tm,LucidePrinterCheck:Vm,LucideProjector:Fm,LucideProportions:Dm,LucidePuzzle:Rm,LucidePyramid:Bm,LucideQrCode:Em,LucideQuote:Om,LucideRabbit:Um,LucideRadar:Zm,LucideRadiation:Wm,LucideRadical:Gm,LucideRadio:Qm,LucideRadioReceiver:Xm,LucideRadioTower:Km,LucideRadius:Jm,LucideRailSymbol:Ym,LucideRainbow:e9,LucideRat:t9,LucideRatio:n9,LucideReceipt:h9,LucideReceiptCent:o9,LucideReceiptEuro:a9,LucideReceiptIndianRupee:c9,LucideReceiptJapaneseYen:i9,LucideReceiptPoundSterling:r9,LucideReceiptRussianRuble:d9,LucideReceiptSwissFranc:l9,LucideReceiptText:s9,LucideRectangleEllipsis:Io,LucideRectangleHorizontal:y9,LucideRectangleVertical:u9,LucideRecycle:p9,LucideRedo:m9,LucideRedo2:k9,LucideRedoDot:f9,LucideRefreshCcw:v9,LucideRefreshCcwDot:M9,LucideRefreshCw:x9,LucideRefreshCwOff:g9,LucideRefrigerator:_9,LucideRegex:w9,LucideRemoveFormatting:L9,LucideRepeat:S9,LucideRepeat1:C9,LucideRepeat2:I9,LucideReplace:$9,LucideReplaceAll:N9,LucideReply:q9,LucideReplyAll:z9,LucideRewind:A9,LucideRibbon:b9,LucideRocket:j9,LucideRockingChair:H9,LucideRollerCoaster:P9,LucideRotate3D:So,LucideRotate3d:So,LucideRotateCcw:T9,LucideRotateCcwSquare:V9,LucideRotateCw:D9,LucideRotateCwSquare:F9,LucideRoute:B9,LucideRouteOff:R9,LucideRouter:E9,LucideRows:No,LucideRows2:No,LucideRows3:$o,LucideRows4:O9,LucideRss:U9,LucideRuler:Z9,LucideRussianRuble:W9,LucideSailboat:G9,LucideSalad:X9,LucideSandwich:K9,LucideSatellite:J9,LucideSatelliteDish:Q9,LucideSave:tM,LucideSaveAll:Y9,LucideSaveOff:eM,LucideScale:nM,LucideScale3D:zo,LucideScale3d:zo,LucideScaling:oM,LucideScan:yM,LucideScanBarcode:aM,LucideScanEye:cM,LucideScanFace:iM,LucideScanHeart:rM,LucideScanLine:dM,LucideScanQrCode:lM,LucideScanSearch:sM,LucideScanText:hM,LucideScatterChart:Ut,LucideSchool:uM,LucideSchool2:Fa,LucideScissors:kM,LucideScissorsLineDashed:pM,LucideScissorsSquare:La,LucideScissorsSquareDashedBottom:Xo,LucideScreenShare:mM,LucideScreenShareOff:fM,LucideScroll:vM,LucideScrollText:MM,LucideSearch:LM,LucideSearchCheck:gM,LucideSearchCode:xM,LucideSearchSlash:_M,LucideSearchX:wM,LucideSection:CM,LucideSend:SM,LucideSendHorizonal:qo,LucideSendHorizontal:qo,LucideSendToBack:IM,LucideSeparatorHorizontal:NM,LucideSeparatorVertical:$M,LucideServer:bM,LucideServerCog:zM,LucideServerCrash:qM,LucideServerOff:AM,LucideSettings:HM,LucideSettings2:jM,LucideShapes:PM,LucideShare:TM,LucideShare2:VM,LucideSheet:FM,LucideShell:DM,LucideShield:XM,LucideShieldAlert:RM,LucideShieldBan:BM,LucideShieldCheck:EM,LucideShieldClose:Ao,LucideShieldEllipsis:OM,LucideShieldHalf:UM,LucideShieldMinus:ZM,LucideShieldOff:WM,LucideShieldPlus:Lc,LucideShieldQuestion:GM,LucideShieldX:Ao,LucideShip:QM,LucideShipWheel:KM,LucideShirt:JM,LucideShoppingBag:YM,LucideShoppingBasket:ev,LucideShoppingCart:tv,LucideShovel:nv,LucideShowerHead:ov,LucideShrink:av,LucideShrub:cv,LucideShuffle:iv,LucideSidebar:vo,LucideSidebarClose:fo,LucideSidebarOpen:Mo,LucideSigma:rv,LucideSigmaSquare:Ca,LucideSignal:yv,LucideSignalHigh:dv,LucideSignalLow:lv,LucideSignalMedium:sv,LucideSignalZero:hv,LucideSignature:uv,LucideSignpost:kv,LucideSignpostBig:pv,LucideSiren:fv,LucideSkipBack:mv,LucideSkipForward:Mv,LucideSkull:vv,LucideSlack:gv,LucideSlash:xv,LucideSlashSquare:Ia,LucideSlice:_v,LucideSliders:bo,LucideSlidersHorizontal:wv,LucideSlidersVertical:bo,LucideSmartphone:Iv,LucideSmartphoneCharging:Lv,LucideSmartphoneNfc:Cv,LucideSmile:Nv,LucideSmilePlus:Sv,LucideSnail:$v,LucideSnowflake:zv,LucideSofa:qv,LucideSortAsc:Lt,LucideSortDesc:xt,LucideSoup:Av,LucideSpace:bv,LucideSpade:jv,LucideSparkle:Hv,LucideSparkles:jo,LucideSpeaker:Pv,LucideSpeech:Vv,LucideSpellCheck:Fv,LucideSpellCheck2:Tv,LucideSpline:Dv,LucideSplit:Rv,LucideSplitSquareHorizontal:Sa,LucideSplitSquareVertical:Na,LucideSprayCan:Bv,LucideSprout:Ev,LucideSquare:Xv,LucideSquareActivity:Ho,LucideSquareArrowDown:To,LucideSquareArrowDownLeft:Po,LucideSquareArrowDownRight:Vo,LucideSquareArrowLeft:Fo,LucideSquareArrowOutDownLeft:Do,LucideSquareArrowOutDownRight:Ro,LucideSquareArrowOutUpLeft:Bo,LucideSquareArrowOutUpRight:Eo,LucideSquareArrowRight:Oo,LucideSquareArrowUp:Wo,LucideSquareArrowUpLeft:Uo,LucideSquareArrowUpRight:Zo,LucideSquareAsterisk:Go,LucideSquareBottomDashedScissors:Xo,LucideSquareChartGantt:L1,LucideSquareCheck:Qo,LucideSquareCheckBig:Ko,LucideSquareChevronDown:Jo,LucideSquareChevronLeft:Yo,LucideSquareChevronRight:ea,LucideSquareChevronUp:ta,LucideSquareCode:na,LucideSquareDashed:ca,LucideSquareDashedBottom:Uv,LucideSquareDashedBottomCode:Ov,LucideSquareDashedKanban:oa,LucideSquareDashedMousePointer:aa,LucideSquareDivide:ia,LucideSquareDot:ra,LucideSquareEqual:da,LucideSquareFunction:la,LucideSquareGanttChart:L1,LucideSquareKanban:sa,LucideSquareLibrary:ha,LucideSquareM:ya,LucideSquareMenu:ua,LucideSquareMinus:pa,LucideSquareMousePointer:ka,LucideSquareParking:ma,LucideSquareParkingOff:fa,LucideSquarePen:Ke,LucideSquarePercent:Ma,LucideSquarePi:va,LucideSquarePilcrow:ga,LucideSquarePlay:xa,LucideSquarePlus:_a,LucideSquarePower:wa,LucideSquareRadical:Zv,LucideSquareScissors:La,LucideSquareSigma:Ca,LucideSquareSlash:Ia,LucideSquareSplitHorizontal:Sa,LucideSquareSplitVertical:Na,LucideSquareSquare:Wv,LucideSquareStack:Gv,LucideSquareTerminal:$a,LucideSquareUser:qa,LucideSquareUserRound:za,LucideSquareX:Aa,LucideSquircle:Kv,LucideSquirrel:Qv,LucideStamp:Jv,LucideStar:Cc,LucideStarHalf:Yv,LucideStarOff:eg,LucideStars:jo,LucideStepBack:tg,LucideStepForward:ng,LucideStethoscope:og,LucideSticker:ag,LucideStickyNote:cg,LucideStopCircle:gn,LucideStore:ig,LucideStretchHorizontal:rg,LucideStretchVertical:dg,LucideStrikethrough:lg,LucideSubscript:sg,LucideSubtitles:At,LucideSun:kg,LucideSunDim:hg,LucideSunMedium:yg,LucideSunMoon:ug,LucideSunSnow:pg,LucideSunrise:fg,LucideSunset:mg,LucideSuperscript:Mg,LucideSwatchBook:vg,LucideSwissFranc:gg,LucideSwitchCamera:xg,LucideSword:_g,LucideSwords:wg,LucideSyringe:Lg,LucideTable:Ag,LucideTable2:Cg,LucideTableCellsMerge:Ig,LucideTableCellsSplit:Sg,LucideTableColumnsSplit:Ng,LucideTableOfContents:$g,LucideTableProperties:zg,LucideTableRowsSplit:qg,LucideTablet:jg,LucideTabletSmartphone:bg,LucideTablets:Hg,LucideTag:Pg,LucideTags:Vg,LucideTally1:Tg,LucideTally2:Fg,LucideTally3:Dg,LucideTally4:Rg,LucideTally5:Bg,LucideTangent:Eg,LucideTarget:Og,LucideTelescope:Ug,LucideTent:Wg,LucideTentTree:Zg,LucideTerminal:Gg,LucideTerminalSquare:$a,LucideTestTube:Xg,LucideTestTube2:ba,LucideTestTubeDiagonal:ba,LucideTestTubes:Kg,LucideText:tx,LucideTextCursor:Jg,LucideTextCursorInput:Qg,LucideTextQuote:Yg,LucideTextSearch:ex,LucideTextSelect:ja,LucideTextSelection:ja,LucideTheater:nx,LucideThermometer:cx,LucideThermometerSnowflake:ox,LucideThermometerSun:ax,LucideThumbsDown:ix,LucideThumbsUp:rx,LucideTicket:px,LucideTicketCheck:dx,LucideTicketMinus:lx,LucideTicketPercent:sx,LucideTicketPlus:hx,LucideTicketSlash:yx,LucideTicketX:ux,LucideTickets:fx,LucideTicketsPlane:kx,LucideTimer:vx,LucideTimerOff:mx,LucideTimerReset:Mx,LucideToggleLeft:gx,LucideToggleRight:xx,LucideToilet:_x,LucideTornado:wx,LucideTorus:Lx,LucideTouchpad:Ix,LucideTouchpadOff:Cx,LucideTowerControl:Sx,LucideToyBrick:Nx,LucideTractor:$x,LucideTrafficCone:zx,LucideTrain:Ha,LucideTrainFront:Ax,LucideTrainFrontTunnel:qx,LucideTrainTrack:bx,LucideTramFront:Ha,LucideTrash:Hx,LucideTrash2:jx,LucideTreeDeciduous:Px,LucideTreePalm:Pa,LucideTreePine:Vx,LucideTrees:Tx,LucideTrello:Fx,LucideTrendingDown:Dx,LucideTrendingUp:Bx,LucideTrendingUpDown:Rx,LucideTriangle:Ux,LucideTriangleAlert:Va,LucideTriangleDashed:Ex,LucideTriangleRight:Ox,LucideTrophy:Zx,LucideTruck:Wx,LucideTurtle:Gx,LucideTv:Kx,LucideTv2:Ta,LucideTvMinimal:Ta,LucideTvMinimalPlay:Xx,LucideTwitch:Qx,LucideTwitter:Jx,LucideType:e_,LucideTypeOutline:Yx,LucideUmbrella:n_,LucideUmbrellaOff:t_,LucideUnderline:o_,LucideUndo:i_,LucideUndo2:a_,LucideUndoDot:c_,LucideUnfoldHorizontal:r_,LucideUnfoldVertical:d_,LucideUngroup:l_,LucideUniversity:Fa,LucideUnlink:h_,LucideUnlink2:s_,LucideUnlock:ro,LucideUnlockKeyhole:io,LucideUnplug:y_,LucideUpload:u_,LucideUploadCloud:Sn,LucideUsb:p_,LucideUser:L_,LucideUser2:Ua,LucideUserCheck:k_,LucideUserCheck2:Da,LucideUserCircle:_n,LucideUserCircle2:xn,LucideUserCog:f_,LucideUserCog2:Ra,LucideUserMinus:m_,LucideUserMinus2:Ba,LucideUserPen:M_,LucideUserPlus:v_,LucideUserPlus2:Ea,LucideUserRound:Ua,LucideUserRoundCheck:Da,LucideUserRoundCog:Ra,LucideUserRoundMinus:Ba,LucideUserRoundPen:g_,LucideUserRoundPlus:Ea,LucideUserRoundSearch:x_,LucideUserRoundX:Oa,LucideUserSearch:__,LucideUserSquare:qa,LucideUserSquare2:za,LucideUserX:w_,LucideUserX2:Oa,LucideUsers:C_,LucideUsers2:Za,LucideUsersRound:Za,LucideUtensils:Ga,LucideUtensilsCrossed:Wa,LucideUtilityPole:I_,LucideVariable:S_,LucideVault:N_,LucideVegan:$_,LucideVenetianMask:z_,LucideVerified:St,LucideVibrate:A_,LucideVibrateOff:q_,LucideVideo:j_,LucideVideoOff:b_,LucideVideotape:H_,LucideView:P_,LucideVoicemail:V_,LucideVolleyball:T_,LucideVolume:E_,LucideVolume1:F_,LucideVolume2:D_,LucideVolumeOff:R_,LucideVolumeX:B_,LucideVote:O_,LucideWallet:Z_,LucideWallet2:Xa,LucideWalletCards:U_,LucideWalletMinimal:Xa,LucideWallpaper:W_,LucideWand:G_,LucideWand2:Ka,LucideWandSparkles:Ka,LucideWarehouse:X_,LucideWashingMachine:K_,LucideWatch:Q_,LucideWaves:Y_,LucideWavesLadder:J_,LucideWaypoints:ew,LucideWebcam:tw,LucideWebhook:ow,LucideWebhookOff:nw,LucideWeight:aw,LucideWheat:iw,LucideWheatOff:cw,LucideWholeWord:rw,LucideWifi:yw,LucideWifiHigh:dw,LucideWifiLow:lw,LucideWifiOff:sw,LucideWifiZero:hw,LucideWind:pw,LucideWindArrowDown:uw,LucideWine:fw,LucideWineOff:kw,LucideWorkflow:mw,LucideWorm:Mw,LucideWrapText:vw,LucideWrench:gw,LucideX:xw,LucideXCircle:wn,LucideXOctagon:uo,LucideXSquare:Aa,LucideYoutube:_w,LucideZap:Lw,LucideZapOff:ww,LucideZoomIn:Cw,LucideZoomOut:Iw,Luggage:F6,LuggageIcon:F6,MSquare:ya,MSquareIcon:ya,Magnet:D6,MagnetIcon:D6,Mail:X6,MailCheck:R6,MailCheckIcon:R6,MailIcon:X6,MailMinus:B6,MailMinusIcon:B6,MailOpen:E6,MailOpenIcon:E6,MailPlus:O6,MailPlusIcon:O6,MailQuestion:U6,MailQuestionIcon:U6,MailSearch:Z6,MailSearchIcon:Z6,MailWarning:W6,MailWarningIcon:W6,MailX:G6,MailXIcon:G6,Mailbox:K6,MailboxIcon:K6,Mails:Q6,MailsIcon:Q6,Map:_c,MapIcon:_c,MapPin:xc,MapPinCheck:Y6,MapPinCheckIcon:Y6,MapPinCheckInside:J6,MapPinCheckInsideIcon:J6,MapPinHouse:e8,MapPinHouseIcon:e8,MapPinIcon:xc,MapPinMinus:n8,MapPinMinusIcon:n8,MapPinMinusInside:t8,MapPinMinusInsideIcon:t8,MapPinOff:o8,MapPinOffIcon:o8,MapPinPlus:c8,MapPinPlusIcon:c8,MapPinPlusInside:a8,MapPinPlusInsideIcon:a8,MapPinX:r8,MapPinXIcon:r8,MapPinXInside:i8,MapPinXInsideIcon:i8,MapPinned:d8,MapPinnedIcon:d8,Martini:l8,MartiniIcon:l8,Maximize:h8,Maximize2:s8,Maximize2Icon:s8,MaximizeIcon:h8,Medal:y8,MedalIcon:y8,Megaphone:p8,MegaphoneIcon:p8,MegaphoneOff:u8,MegaphoneOffIcon:u8,Meh:k8,MehIcon:k8,MemoryStick:f8,MemoryStickIcon:f8,Menu:m8,MenuIcon:m8,MenuSquare:ua,MenuSquareIcon:ua,Merge:M8,MergeIcon:M8,MessageCircle:$8,MessageCircleCode:v8,MessageCircleCodeIcon:v8,MessageCircleDashed:g8,MessageCircleDashedIcon:g8,MessageCircleHeart:x8,MessageCircleHeartIcon:x8,MessageCircleIcon:$8,MessageCircleMore:_8,MessageCircleMoreIcon:_8,MessageCircleOff:w8,MessageCircleOffIcon:w8,MessageCirclePlus:L8,MessageCirclePlusIcon:L8,MessageCircleQuestion:C8,MessageCircleQuestionIcon:C8,MessageCircleReply:I8,MessageCircleReplyIcon:I8,MessageCircleWarning:S8,MessageCircleWarningIcon:S8,MessageCircleX:N8,MessageCircleXIcon:N8,MessageSquare:U8,MessageSquareCode:z8,MessageSquareCodeIcon:z8,MessageSquareDashed:q8,MessageSquareDashedIcon:q8,MessageSquareDiff:A8,MessageSquareDiffIcon:A8,MessageSquareDot:b8,MessageSquareDotIcon:b8,MessageSquareHeart:j8,MessageSquareHeartIcon:j8,MessageSquareIcon:U8,MessageSquareLock:H8,MessageSquareLockIcon:H8,MessageSquareMore:P8,MessageSquareMoreIcon:P8,MessageSquareOff:V8,MessageSquareOffIcon:V8,MessageSquarePlus:T8,MessageSquarePlusIcon:T8,MessageSquareQuote:F8,MessageSquareQuoteIcon:F8,MessageSquareReply:D8,MessageSquareReplyIcon:D8,MessageSquareShare:R8,MessageSquareShareIcon:R8,MessageSquareText:B8,MessageSquareTextIcon:B8,MessageSquareWarning:E8,MessageSquareWarningIcon:E8,MessageSquareX:O8,MessageSquareXIcon:O8,MessagesSquare:Z8,MessagesSquareIcon:Z8,Mic:G8,Mic2:lo,Mic2Icon:lo,MicIcon:G8,MicOff:W8,MicOffIcon:W8,MicVocal:lo,MicVocalIcon:lo,Microchip:X8,MicrochipIcon:X8,Microscope:K8,MicroscopeIcon:K8,Microwave:Q8,MicrowaveIcon:Q8,Milestone:J8,MilestoneIcon:J8,Milk:e7,MilkIcon:e7,MilkOff:Y8,MilkOffIcon:Y8,Minimize:n7,Minimize2:t7,Minimize2Icon:t7,MinimizeIcon:n7,Minus:o7,MinusCircle:hn,MinusCircleIcon:hn,MinusIcon:o7,MinusSquare:pa,MinusSquareIcon:pa,Monitor:f7,MonitorCheck:a7,MonitorCheckIcon:a7,MonitorCog:c7,MonitorCogIcon:c7,MonitorDot:i7,MonitorDotIcon:i7,MonitorDown:r7,MonitorDownIcon:r7,MonitorIcon:f7,MonitorOff:d7,MonitorOffIcon:d7,MonitorPause:l7,MonitorPauseIcon:l7,MonitorPlay:s7,MonitorPlayIcon:s7,MonitorSmartphone:h7,MonitorSmartphoneIcon:h7,MonitorSpeaker:y7,MonitorSpeakerIcon:y7,MonitorStop:u7,MonitorStopIcon:u7,MonitorUp:p7,MonitorUpIcon:p7,MonitorX:k7,MonitorXIcon:k7,Moon:M7,MoonIcon:M7,MoonStar:m7,MoonStarIcon:m7,MoreHorizontal:Hn,MoreHorizontalIcon:Hn,MoreVertical:jn,MoreVerticalIcon:jn,Mountain:g7,MountainIcon:g7,MountainSnow:v7,MountainSnowIcon:v7,Mouse:I7,MouseIcon:I7,MouseOff:x7,MouseOffIcon:x7,MousePointer:C7,MousePointer2:_7,MousePointer2Icon:_7,MousePointerBan:w7,MousePointerBanIcon:w7,MousePointerClick:L7,MousePointerClickIcon:L7,MousePointerIcon:C7,MousePointerSquareDashed:aa,MousePointerSquareDashedIcon:aa,Move:F7,Move3D:so,Move3DIcon:so,Move3d:so,Move3dIcon:so,MoveDiagonal:N7,MoveDiagonal2:S7,MoveDiagonal2Icon:S7,MoveDiagonalIcon:N7,MoveDown:q7,MoveDownIcon:q7,MoveDownLeft:$7,MoveDownLeftIcon:$7,MoveDownRight:z7,MoveDownRightIcon:z7,MoveHorizontal:A7,MoveHorizontalIcon:A7,MoveIcon:F7,MoveLeft:b7,MoveLeftIcon:b7,MoveRight:j7,MoveRightIcon:j7,MoveUp:V7,MoveUpIcon:V7,MoveUpLeft:H7,MoveUpLeftIcon:H7,MoveUpRight:P7,MoveUpRightIcon:P7,MoveVertical:T7,MoveVerticalIcon:T7,Music:E7,Music2:D7,Music2Icon:D7,Music3:R7,Music3Icon:R7,Music4:B7,Music4Icon:B7,MusicIcon:E7,Navigation:W7,Navigation2:U7,Navigation2Icon:U7,Navigation2Off:O7,Navigation2OffIcon:O7,NavigationIcon:W7,NavigationOff:Z7,NavigationOffIcon:Z7,Network:G7,NetworkIcon:G7,Newspaper:X7,NewspaperIcon:X7,Nfc:K7,NfcIcon:K7,Notebook:ef,NotebookIcon:ef,NotebookPen:Q7,NotebookPenIcon:Q7,NotebookTabs:J7,NotebookTabsIcon:J7,NotebookText:Y7,NotebookTextIcon:Y7,NotepadText:nf,NotepadTextDashed:tf,NotepadTextDashedIcon:tf,NotepadTextIcon:nf,Nut:af,NutIcon:af,NutOff:of,NutOffIcon:of,Octagon:rf,OctagonAlert:ho,OctagonAlertIcon:ho,OctagonIcon:rf,OctagonMinus:cf,OctagonMinusIcon:cf,OctagonPause:yo,OctagonPauseIcon:yo,OctagonX:uo,OctagonXIcon:uo,Omega:df,OmegaIcon:df,Option:lf,OptionIcon:lf,Orbit:sf,OrbitIcon:sf,Origami:hf,OrigamiIcon:hf,Outdent:to,OutdentIcon:to,Package:vf,Package2:yf,Package2Icon:yf,PackageCheck:uf,PackageCheckIcon:uf,PackageIcon:vf,PackageMinus:pf,PackageMinusIcon:pf,PackageOpen:kf,PackageOpenIcon:kf,PackagePlus:ff,PackagePlusIcon:ff,PackageSearch:mf,PackageSearchIcon:mf,PackageX:Mf,PackageXIcon:Mf,PaintBucket:gf,PaintBucketIcon:gf,PaintRoller:xf,PaintRollerIcon:xf,Paintbrush:_f,Paintbrush2:po,Paintbrush2Icon:po,PaintbrushIcon:_f,PaintbrushVertical:po,PaintbrushVerticalIcon:po,Palette:wf,PaletteIcon:wf,Palmtree:Pa,PalmtreeIcon:Pa,PanelBottom:If,PanelBottomClose:Lf,PanelBottomCloseIcon:Lf,PanelBottomDashed:ko,PanelBottomDashedIcon:ko,PanelBottomIcon:If,PanelBottomInactive:ko,PanelBottomInactiveIcon:ko,PanelBottomOpen:Cf,PanelBottomOpenIcon:Cf,PanelLeft:vo,PanelLeftClose:fo,PanelLeftCloseIcon:fo,PanelLeftDashed:mo,PanelLeftDashedIcon:mo,PanelLeftIcon:vo,PanelLeftInactive:mo,PanelLeftInactiveIcon:mo,PanelLeftOpen:Mo,PanelLeftOpenIcon:Mo,PanelRight:$f,PanelRightClose:Sf,PanelRightCloseIcon:Sf,PanelRightDashed:go,PanelRightDashedIcon:go,PanelRightIcon:$f,PanelRightInactive:go,PanelRightInactiveIcon:go,PanelRightOpen:Nf,PanelRightOpenIcon:Nf,PanelTop:Af,PanelTopClose:zf,PanelTopCloseIcon:zf,PanelTopDashed:xo,PanelTopDashedIcon:xo,PanelTopIcon:Af,PanelTopInactive:xo,PanelTopInactiveIcon:xo,PanelTopOpen:qf,PanelTopOpenIcon:qf,PanelsLeftBottom:bf,PanelsLeftBottomIcon:bf,PanelsLeftRight:zn,PanelsLeftRightIcon:zn,PanelsRightBottom:jf,PanelsRightBottomIcon:jf,PanelsTopBottom:$o,PanelsTopBottomIcon:$o,PanelsTopLeft:_o,PanelsTopLeftIcon:_o,Paperclip:Hf,PaperclipIcon:Hf,Parentheses:Pf,ParenthesesIcon:Pf,ParkingCircle:un,ParkingCircleIcon:un,ParkingCircleOff:yn,ParkingCircleOffIcon:yn,ParkingMeter:Vf,ParkingMeterIcon:Vf,ParkingSquare:ma,ParkingSquareIcon:ma,ParkingSquareOff:fa,ParkingSquareOffIcon:fa,PartyPopper:Tf,PartyPopperIcon:Tf,Pause:Ff,PauseCircle:pn,PauseCircleIcon:pn,PauseIcon:Ff,PauseOctagon:yo,PauseOctagonIcon:yo,PawPrint:Df,PawPrintIcon:Df,PcCase:Rf,PcCaseIcon:Rf,Pen:Lo,PenBox:Ke,PenBoxIcon:Ke,PenIcon:Lo,PenLine:wo,PenLineIcon:wo,PenOff:Bf,PenOffIcon:Bf,PenSquare:Ke,PenSquareIcon:Ke,PenTool:Ef,PenToolIcon:Ef,Pencil:Wf,PencilIcon:Wf,PencilLine:Of,PencilLineIcon:Of,PencilOff:Uf,PencilOffIcon:Uf,PencilRuler:Zf,PencilRulerIcon:Zf,Pentagon:Gf,PentagonIcon:Gf,Percent:Xf,PercentCircle:kn,PercentCircleIcon:kn,PercentDiamond:An,PercentDiamondIcon:An,PercentIcon:Xf,PercentSquare:Ma,PercentSquareIcon:Ma,PersonStanding:Kf,PersonStandingIcon:Kf,PhilippinePeso:Qf,PhilippinePesoIcon:Qf,Phone:am,PhoneCall:Jf,PhoneCallIcon:Jf,PhoneForwarded:Yf,PhoneForwardedIcon:Yf,PhoneIcon:am,PhoneIncoming:em,PhoneIncomingIcon:em,PhoneMissed:tm,PhoneMissedIcon:tm,PhoneOff:nm,PhoneOffIcon:nm,PhoneOutgoing:om,PhoneOutgoingIcon:om,Pi:cm,PiIcon:cm,PiSquare:va,PiSquareIcon:va,Piano:im,PianoIcon:im,Pickaxe:rm,PickaxeIcon:rm,PictureInPicture:lm,PictureInPicture2:dm,PictureInPicture2Icon:dm,PictureInPictureIcon:lm,PieChart:Ot,PieChartIcon:Ot,PiggyBank:sm,PiggyBankIcon:sm,Pilcrow:um,PilcrowIcon:um,PilcrowLeft:hm,PilcrowLeftIcon:hm,PilcrowRight:ym,PilcrowRightIcon:ym,PilcrowSquare:ga,PilcrowSquareIcon:ga,Pill:km,PillBottle:pm,PillBottleIcon:pm,PillIcon:km,Pin:mm,PinIcon:mm,PinOff:fm,PinOffIcon:fm,Pipette:Mm,PipetteIcon:Mm,Pizza:vm,PizzaIcon:vm,Plane:wc,PlaneIcon:wc,PlaneLanding:gm,PlaneLandingIcon:gm,PlaneTakeoff:xm,PlaneTakeoffIcon:xm,Play:_m,PlayCircle:fn,PlayCircleIcon:fn,PlayIcon:_m,PlaySquare:xa,PlaySquareIcon:xa,Plug:Lm,Plug2:wm,Plug2Icon:wm,PlugIcon:Lm,PlugZap:Co,PlugZap2:Co,PlugZap2Icon:Co,PlugZapIcon:Co,Plus:Cm,PlusCircle:mn,PlusCircleIcon:mn,PlusIcon:Cm,PlusSquare:_a,PlusSquareIcon:_a,Pocket:Sm,PocketIcon:Sm,PocketKnife:Im,PocketKnifeIcon:Im,Podcast:Nm,PodcastIcon:Nm,Pointer:zm,PointerIcon:zm,PointerOff:$m,PointerOffIcon:$m,Popcorn:qm,PopcornIcon:qm,Popsicle:Am,PopsicleIcon:Am,PoundSterling:bm,PoundSterlingIcon:bm,Power:Hm,PowerCircle:Mn,PowerCircleIcon:Mn,PowerIcon:Hm,PowerOff:jm,PowerOffIcon:jm,PowerSquare:wa,PowerSquareIcon:wa,Presentation:Pm,PresentationIcon:Pm,Printer:Tm,PrinterCheck:Vm,PrinterCheckIcon:Vm,PrinterIcon:Tm,Projector:Fm,ProjectorIcon:Fm,Proportions:Dm,ProportionsIcon:Dm,Puzzle:Rm,PuzzleIcon:Rm,Pyramid:Bm,PyramidIcon:Bm,QrCode:Em,QrCodeIcon:Em,Quote:Om,QuoteIcon:Om,Rabbit:Um,RabbitIcon:Um,Radar:Zm,RadarIcon:Zm,Radiation:Wm,RadiationIcon:Wm,Radical:Gm,RadicalIcon:Gm,Radio:Qm,RadioIcon:Qm,RadioReceiver:Xm,RadioReceiverIcon:Xm,RadioTower:Km,RadioTowerIcon:Km,Radius:Jm,RadiusIcon:Jm,RailSymbol:Ym,RailSymbolIcon:Ym,Rainbow:e9,RainbowIcon:e9,Rat:t9,RatIcon:t9,Ratio:n9,RatioIcon:n9,Receipt:h9,ReceiptCent:o9,ReceiptCentIcon:o9,ReceiptEuro:a9,ReceiptEuroIcon:a9,ReceiptIcon:h9,ReceiptIndianRupee:c9,ReceiptIndianRupeeIcon:c9,ReceiptJapaneseYen:i9,ReceiptJapaneseYenIcon:i9,ReceiptPoundSterling:r9,ReceiptPoundSterlingIcon:r9,ReceiptRussianRuble:d9,ReceiptRussianRubleIcon:d9,ReceiptSwissFranc:l9,ReceiptSwissFrancIcon:l9,ReceiptText:s9,ReceiptTextIcon:s9,RectangleEllipsis:Io,RectangleEllipsisIcon:Io,RectangleHorizontal:y9,RectangleHorizontalIcon:y9,RectangleVertical:u9,RectangleVerticalIcon:u9,Recycle:p9,RecycleIcon:p9,Redo:m9,Redo2:k9,Redo2Icon:k9,RedoDot:f9,RedoDotIcon:f9,RedoIcon:m9,RefreshCcw:v9,RefreshCcwDot:M9,RefreshCcwDotIcon:M9,RefreshCcwIcon:v9,RefreshCw:x9,RefreshCwIcon:x9,RefreshCwOff:g9,RefreshCwOffIcon:g9,Refrigerator:_9,RefrigeratorIcon:_9,Regex:w9,RegexIcon:w9,RemoveFormatting:L9,RemoveFormattingIcon:L9,Repeat:S9,Repeat1:C9,Repeat1Icon:C9,Repeat2:I9,Repeat2Icon:I9,RepeatIcon:S9,Replace:$9,ReplaceAll:N9,ReplaceAllIcon:N9,ReplaceIcon:$9,Reply:q9,ReplyAll:z9,ReplyAllIcon:z9,ReplyIcon:q9,Rewind:A9,RewindIcon:A9,Ribbon:b9,RibbonIcon:b9,Rocket:j9,RocketIcon:j9,RockingChair:H9,RockingChairIcon:H9,RollerCoaster:P9,RollerCoasterIcon:P9,Rotate3D:So,Rotate3DIcon:So,Rotate3d:So,Rotate3dIcon:So,RotateCcw:T9,RotateCcwIcon:T9,RotateCcwSquare:V9,RotateCcwSquareIcon:V9,RotateCw:D9,RotateCwIcon:D9,RotateCwSquare:F9,RotateCwSquareIcon:F9,Route:B9,RouteIcon:B9,RouteOff:R9,RouteOffIcon:R9,Router:E9,RouterIcon:E9,Rows:No,Rows2:No,Rows2Icon:No,Rows3:$o,Rows3Icon:$o,Rows4:O9,Rows4Icon:O9,RowsIcon:No,Rss:U9,RssIcon:U9,Ruler:Z9,RulerIcon:Z9,RussianRuble:W9,RussianRubleIcon:W9,Sailboat:G9,SailboatIcon:G9,Salad:X9,SaladIcon:X9,Sandwich:K9,SandwichIcon:K9,Satellite:J9,SatelliteDish:Q9,SatelliteDishIcon:Q9,SatelliteIcon:J9,Save:tM,SaveAll:Y9,SaveAllIcon:Y9,SaveIcon:tM,SaveOff:eM,SaveOffIcon:eM,Scale:nM,Scale3D:zo,Scale3DIcon:zo,Scale3d:zo,Scale3dIcon:zo,ScaleIcon:nM,Scaling:oM,ScalingIcon:oM,Scan:yM,ScanBarcode:aM,ScanBarcodeIcon:aM,ScanEye:cM,ScanEyeIcon:cM,ScanFace:iM,ScanFaceIcon:iM,ScanHeart:rM,ScanHeartIcon:rM,ScanIcon:yM,ScanLine:dM,ScanLineIcon:dM,ScanQrCode:lM,ScanQrCodeIcon:lM,ScanSearch:sM,ScanSearchIcon:sM,ScanText:hM,ScanTextIcon:hM,ScatterChart:Ut,ScatterChartIcon:Ut,School:uM,School2:Fa,School2Icon:Fa,SchoolIcon:uM,Scissors:kM,ScissorsIcon:kM,ScissorsLineDashed:pM,ScissorsLineDashedIcon:pM,ScissorsSquare:La,ScissorsSquareDashedBottom:Xo,ScissorsSquareDashedBottomIcon:Xo,ScissorsSquareIcon:La,ScreenShare:mM,ScreenShareIcon:mM,ScreenShareOff:fM,ScreenShareOffIcon:fM,Scroll:vM,ScrollIcon:vM,ScrollText:MM,ScrollTextIcon:MM,Search:LM,SearchCheck:gM,SearchCheckIcon:gM,SearchCode:xM,SearchCodeIcon:xM,SearchIcon:LM,SearchSlash:_M,SearchSlashIcon:_M,SearchX:wM,SearchXIcon:wM,Section:CM,SectionIcon:CM,Send:SM,SendHorizonal:qo,SendHorizonalIcon:qo,SendHorizontal:qo,SendHorizontalIcon:qo,SendIcon:SM,SendToBack:IM,SendToBackIcon:IM,SeparatorHorizontal:NM,SeparatorHorizontalIcon:NM,SeparatorVertical:$M,SeparatorVerticalIcon:$M,Server:bM,ServerCog:zM,ServerCogIcon:zM,ServerCrash:qM,ServerCrashIcon:qM,ServerIcon:bM,ServerOff:AM,ServerOffIcon:AM,Settings:HM,Settings2:jM,Settings2Icon:jM,SettingsIcon:HM,Shapes:PM,ShapesIcon:PM,Share:TM,Share2:VM,Share2Icon:VM,ShareIcon:TM,Sheet:FM,SheetIcon:FM,Shell:DM,ShellIcon:DM,Shield:XM,ShieldAlert:RM,ShieldAlertIcon:RM,ShieldBan:BM,ShieldBanIcon:BM,ShieldCheck:EM,ShieldCheckIcon:EM,ShieldClose:Ao,ShieldCloseIcon:Ao,ShieldEllipsis:OM,ShieldEllipsisIcon:OM,ShieldHalf:UM,ShieldHalfIcon:UM,ShieldIcon:XM,ShieldMinus:ZM,ShieldMinusIcon:ZM,ShieldOff:WM,ShieldOffIcon:WM,ShieldPlus:Lc,ShieldPlusIcon:Lc,ShieldQuestion:GM,ShieldQuestionIcon:GM,ShieldX:Ao,ShieldXIcon:Ao,Ship:QM,ShipIcon:QM,ShipWheel:KM,ShipWheelIcon:KM,Shirt:JM,ShirtIcon:JM,ShoppingBag:YM,ShoppingBagIcon:YM,ShoppingBasket:ev,ShoppingBasketIcon:ev,ShoppingCart:tv,ShoppingCartIcon:tv,Shovel:nv,ShovelIcon:nv,ShowerHead:ov,ShowerHeadIcon:ov,Shrink:av,ShrinkIcon:av,Shrub:cv,ShrubIcon:cv,Shuffle:iv,ShuffleIcon:iv,Sidebar:vo,SidebarClose:fo,SidebarCloseIcon:fo,SidebarIcon:vo,SidebarOpen:Mo,SidebarOpenIcon:Mo,Sigma:rv,SigmaIcon:rv,SigmaSquare:Ca,SigmaSquareIcon:Ca,Signal:yv,SignalHigh:dv,SignalHighIcon:dv,SignalIcon:yv,SignalLow:lv,SignalLowIcon:lv,SignalMedium:sv,SignalMediumIcon:sv,SignalZero:hv,SignalZeroIcon:hv,Signature:uv,SignatureIcon:uv,Signpost:kv,SignpostBig:pv,SignpostBigIcon:pv,SignpostIcon:kv,Siren:fv,SirenIcon:fv,SkipBack:mv,SkipBackIcon:mv,SkipForward:Mv,SkipForwardIcon:Mv,Skull:vv,SkullIcon:vv,Slack:gv,SlackIcon:gv,Slash:xv,SlashIcon:xv,SlashSquare:Ia,SlashSquareIcon:Ia,Slice:_v,SliceIcon:_v,Sliders:bo,SlidersHorizontal:wv,SlidersHorizontalIcon:wv,SlidersIcon:bo,SlidersVertical:bo,SlidersVerticalIcon:bo,Smartphone:Iv,SmartphoneCharging:Lv,SmartphoneChargingIcon:Lv,SmartphoneIcon:Iv,SmartphoneNfc:Cv,SmartphoneNfcIcon:Cv,Smile:Nv,SmileIcon:Nv,SmilePlus:Sv,SmilePlusIcon:Sv,Snail:$v,SnailIcon:$v,Snowflake:zv,SnowflakeIcon:zv,Sofa:qv,SofaIcon:qv,SortAsc:Lt,SortAscIcon:Lt,SortDesc:xt,SortDescIcon:xt,Soup:Av,SoupIcon:Av,Space:bv,SpaceIcon:bv,Spade:jv,SpadeIcon:jv,Sparkle:Hv,SparkleIcon:Hv,Sparkles:jo,SparklesIcon:jo,Speaker:Pv,SpeakerIcon:Pv,Speech:Vv,SpeechIcon:Vv,SpellCheck:Fv,SpellCheck2:Tv,SpellCheck2Icon:Tv,SpellCheckIcon:Fv,Spline:Dv,SplineIcon:Dv,Split:Rv,SplitIcon:Rv,SplitSquareHorizontal:Sa,SplitSquareHorizontalIcon:Sa,SplitSquareVertical:Na,SplitSquareVerticalIcon:Na,SprayCan:Bv,SprayCanIcon:Bv,Sprout:Ev,SproutIcon:Ev,Square:Xv,SquareActivity:Ho,SquareActivityIcon:Ho,SquareArrowDown:To,SquareArrowDownIcon:To,SquareArrowDownLeft:Po,SquareArrowDownLeftIcon:Po,SquareArrowDownRight:Vo,SquareArrowDownRightIcon:Vo,SquareArrowLeft:Fo,SquareArrowLeftIcon:Fo,SquareArrowOutDownLeft:Do,SquareArrowOutDownLeftIcon:Do,SquareArrowOutDownRight:Ro,SquareArrowOutDownRightIcon:Ro,SquareArrowOutUpLeft:Bo,SquareArrowOutUpLeftIcon:Bo,SquareArrowOutUpRight:Eo,SquareArrowOutUpRightIcon:Eo,SquareArrowRight:Oo,SquareArrowRightIcon:Oo,SquareArrowUp:Wo,SquareArrowUpIcon:Wo,SquareArrowUpLeft:Uo,SquareArrowUpLeftIcon:Uo,SquareArrowUpRight:Zo,SquareArrowUpRightIcon:Zo,SquareAsterisk:Go,SquareAsteriskIcon:Go,SquareBottomDashedScissors:Xo,SquareBottomDashedScissorsIcon:Xo,SquareChartGantt:L1,SquareChartGanttIcon:L1,SquareCheck:Qo,SquareCheckBig:Ko,SquareCheckBigIcon:Ko,SquareCheckIcon:Qo,SquareChevronDown:Jo,SquareChevronDownIcon:Jo,SquareChevronLeft:Yo,SquareChevronLeftIcon:Yo,SquareChevronRight:ea,SquareChevronRightIcon:ea,SquareChevronUp:ta,SquareChevronUpIcon:ta,SquareCode:na,SquareCodeIcon:na,SquareDashed:ca,SquareDashedBottom:Uv,SquareDashedBottomCode:Ov,SquareDashedBottomCodeIcon:Ov,SquareDashedBottomIcon:Uv,SquareDashedIcon:ca,SquareDashedKanban:oa,SquareDashedKanbanIcon:oa,SquareDashedMousePointer:aa,SquareDashedMousePointerIcon:aa,SquareDivide:ia,SquareDivideIcon:ia,SquareDot:ra,SquareDotIcon:ra,SquareEqual:da,SquareEqualIcon:da,SquareFunction:la,SquareFunctionIcon:la,SquareGanttChart:L1,SquareGanttChartIcon:L1,SquareIcon:Xv,SquareKanban:sa,SquareKanbanIcon:sa,SquareLibrary:ha,SquareLibraryIcon:ha,SquareM:ya,SquareMIcon:ya,SquareMenu:ua,SquareMenuIcon:ua,SquareMinus:pa,SquareMinusIcon:pa,SquareMousePointer:ka,SquareMousePointerIcon:ka,SquareParking:ma,SquareParkingIcon:ma,SquareParkingOff:fa,SquareParkingOffIcon:fa,SquarePen:Ke,SquarePenIcon:Ke,SquarePercent:Ma,SquarePercentIcon:Ma,SquarePi:va,SquarePiIcon:va,SquarePilcrow:ga,SquarePilcrowIcon:ga,SquarePlay:xa,SquarePlayIcon:xa,SquarePlus:_a,SquarePlusIcon:_a,SquarePower:wa,SquarePowerIcon:wa,SquareRadical:Zv,SquareRadicalIcon:Zv,SquareScissors:La,SquareScissorsIcon:La,SquareSigma:Ca,SquareSigmaIcon:Ca,SquareSlash:Ia,SquareSlashIcon:Ia,SquareSplitHorizontal:Sa,SquareSplitHorizontalIcon:Sa,SquareSplitVertical:Na,SquareSplitVerticalIcon:Na,SquareSquare:Wv,SquareSquareIcon:Wv,SquareStack:Gv,SquareStackIcon:Gv,SquareTerminal:$a,SquareTerminalIcon:$a,SquareUser:qa,SquareUserIcon:qa,SquareUserRound:za,SquareUserRoundIcon:za,SquareX:Aa,SquareXIcon:Aa,Squircle:Kv,SquircleIcon:Kv,Squirrel:Qv,SquirrelIcon:Qv,Stamp:Jv,StampIcon:Jv,Star:Cc,StarHalf:Yv,StarHalfIcon:Yv,StarIcon:Cc,StarOff:eg,StarOffIcon:eg,Stars:jo,StarsIcon:jo,StepBack:tg,StepBackIcon:tg,StepForward:ng,StepForwardIcon:ng,Stethoscope:og,StethoscopeIcon:og,Sticker:ag,StickerIcon:ag,StickyNote:cg,StickyNoteIcon:cg,StopCircle:gn,StopCircleIcon:gn,Store:ig,StoreIcon:ig,StretchHorizontal:rg,StretchHorizontalIcon:rg,StretchVertical:dg,StretchVerticalIcon:dg,Strikethrough:lg,StrikethroughIcon:lg,Subscript:sg,SubscriptIcon:sg,Subtitles:At,SubtitlesIcon:At,Sun:kg,SunDim:hg,SunDimIcon:hg,SunIcon:kg,SunMedium:yg,SunMediumIcon:yg,SunMoon:ug,SunMoonIcon:ug,SunSnow:pg,SunSnowIcon:pg,Sunrise:fg,SunriseIcon:fg,Sunset:mg,SunsetIcon:mg,Superscript:Mg,SuperscriptIcon:Mg,SwatchBook:vg,SwatchBookIcon:vg,SwissFranc:gg,SwissFrancIcon:gg,SwitchCamera:xg,SwitchCameraIcon:xg,Sword:_g,SwordIcon:_g,Swords:wg,SwordsIcon:wg,Syringe:Lg,SyringeIcon:Lg,Table:Ag,Table2:Cg,Table2Icon:Cg,TableCellsMerge:Ig,TableCellsMergeIcon:Ig,TableCellsSplit:Sg,TableCellsSplitIcon:Sg,TableColumnsSplit:Ng,TableColumnsSplitIcon:Ng,TableIcon:Ag,TableOfContents:$g,TableOfContentsIcon:$g,TableProperties:zg,TablePropertiesIcon:zg,TableRowsSplit:qg,TableRowsSplitIcon:qg,Tablet:jg,TabletIcon:jg,TabletSmartphone:bg,TabletSmartphoneIcon:bg,Tablets:Hg,TabletsIcon:Hg,Tag:Pg,TagIcon:Pg,Tags:Vg,TagsIcon:Vg,Tally1:Tg,Tally1Icon:Tg,Tally2:Fg,Tally2Icon:Fg,Tally3:Dg,Tally3Icon:Dg,Tally4:Rg,Tally4Icon:Rg,Tally5:Bg,Tally5Icon:Bg,Tangent:Eg,TangentIcon:Eg,Target:Og,TargetIcon:Og,Telescope:Ug,TelescopeIcon:Ug,Tent:Wg,TentIcon:Wg,TentTree:Zg,TentTreeIcon:Zg,Terminal:Gg,TerminalIcon:Gg,TerminalSquare:$a,TerminalSquareIcon:$a,TestTube:Xg,TestTube2:ba,TestTube2Icon:ba,TestTubeDiagonal:ba,TestTubeDiagonalIcon:ba,TestTubeIcon:Xg,TestTubes:Kg,TestTubesIcon:Kg,Text:tx,TextCursor:Jg,TextCursorIcon:Jg,TextCursorInput:Qg,TextCursorInputIcon:Qg,TextIcon:tx,TextQuote:Yg,TextQuoteIcon:Yg,TextSearch:ex,TextSearchIcon:ex,TextSelect:ja,TextSelectIcon:ja,TextSelection:ja,TextSelectionIcon:ja,Theater:nx,TheaterIcon:nx,Thermometer:cx,ThermometerIcon:cx,ThermometerSnowflake:ox,ThermometerSnowflakeIcon:ox,ThermometerSun:ax,ThermometerSunIcon:ax,ThumbsDown:ix,ThumbsDownIcon:ix,ThumbsUp:rx,ThumbsUpIcon:rx,Ticket:px,TicketCheck:dx,TicketCheckIcon:dx,TicketIcon:px,TicketMinus:lx,TicketMinusIcon:lx,TicketPercent:sx,TicketPercentIcon:sx,TicketPlus:hx,TicketPlusIcon:hx,TicketSlash:yx,TicketSlashIcon:yx,TicketX:ux,TicketXIcon:ux,Tickets:fx,TicketsIcon:fx,TicketsPlane:kx,TicketsPlaneIcon:kx,Timer:vx,TimerIcon:vx,TimerOff:mx,TimerOffIcon:mx,TimerReset:Mx,TimerResetIcon:Mx,ToggleLeft:gx,ToggleLeftIcon:gx,ToggleRight:xx,ToggleRightIcon:xx,Toilet:_x,ToiletIcon:_x,Tornado:wx,TornadoIcon:wx,Torus:Lx,TorusIcon:Lx,Touchpad:Ix,TouchpadIcon:Ix,TouchpadOff:Cx,TouchpadOffIcon:Cx,TowerControl:Sx,TowerControlIcon:Sx,ToyBrick:Nx,ToyBrickIcon:Nx,Tractor:$x,TractorIcon:$x,TrafficCone:zx,TrafficConeIcon:zx,Train:Ha,TrainFront:Ax,TrainFrontIcon:Ax,TrainFrontTunnel:qx,TrainFrontTunnelIcon:qx,TrainIcon:Ha,TrainTrack:bx,TrainTrackIcon:bx,TramFront:Ha,TramFrontIcon:Ha,Trash:Hx,Trash2:jx,Trash2Icon:jx,TrashIcon:Hx,TreeDeciduous:Px,TreeDeciduousIcon:Px,TreePalm:Pa,TreePalmIcon:Pa,TreePine:Vx,TreePineIcon:Vx,Trees:Tx,TreesIcon:Tx,Trello:Fx,TrelloIcon:Fx,TrendingDown:Dx,TrendingDownIcon:Dx,TrendingUp:Bx,TrendingUpDown:Rx,TrendingUpDownIcon:Rx,TrendingUpIcon:Bx,Triangle:Ux,TriangleAlert:Va,TriangleAlertIcon:Va,TriangleDashed:Ex,TriangleDashedIcon:Ex,TriangleIcon:Ux,TriangleRight:Ox,TriangleRightIcon:Ox,Trophy:Zx,TrophyIcon:Zx,Truck:Wx,TruckIcon:Wx,Turtle:Gx,TurtleIcon:Gx,Tv:Kx,Tv2:Ta,Tv2Icon:Ta,TvIcon:Kx,TvMinimal:Ta,TvMinimalIcon:Ta,TvMinimalPlay:Xx,TvMinimalPlayIcon:Xx,Twitch:Qx,TwitchIcon:Qx,Twitter:Jx,TwitterIcon:Jx,Type:e_,TypeIcon:e_,TypeOutline:Yx,TypeOutlineIcon:Yx,Umbrella:n_,UmbrellaIcon:n_,UmbrellaOff:t_,UmbrellaOffIcon:t_,Underline:o_,UnderlineIcon:o_,Undo:i_,Undo2:a_,Undo2Icon:a_,UndoDot:c_,UndoDotIcon:c_,UndoIcon:i_,UnfoldHorizontal:r_,UnfoldHorizontalIcon:r_,UnfoldVertical:d_,UnfoldVerticalIcon:d_,Ungroup:l_,UngroupIcon:l_,University:Fa,UniversityIcon:Fa,Unlink:h_,Unlink2:s_,Unlink2Icon:s_,UnlinkIcon:h_,Unlock:ro,UnlockIcon:ro,UnlockKeyhole:io,UnlockKeyholeIcon:io,Unplug:y_,UnplugIcon:y_,Upload:u_,UploadCloud:Sn,UploadCloudIcon:Sn,UploadIcon:u_,Usb:p_,UsbIcon:p_,User:L_,User2:Ua,User2Icon:Ua,UserCheck:k_,UserCheck2:Da,UserCheck2Icon:Da,UserCheckIcon:k_,UserCircle:_n,UserCircle2:xn,UserCircle2Icon:xn,UserCircleIcon:_n,UserCog:f_,UserCog2:Ra,UserCog2Icon:Ra,UserCogIcon:f_,UserIcon:L_,UserMinus:m_,UserMinus2:Ba,UserMinus2Icon:Ba,UserMinusIcon:m_,UserPen:M_,UserPenIcon:M_,UserPlus:v_,UserPlus2:Ea,UserPlus2Icon:Ea,UserPlusIcon:v_,UserRound:Ua,UserRoundCheck:Da,UserRoundCheckIcon:Da,UserRoundCog:Ra,UserRoundCogIcon:Ra,UserRoundIcon:Ua,UserRoundMinus:Ba,UserRoundMinusIcon:Ba,UserRoundPen:g_,UserRoundPenIcon:g_,UserRoundPlus:Ea,UserRoundPlusIcon:Ea,UserRoundSearch:x_,UserRoundSearchIcon:x_,UserRoundX:Oa,UserRoundXIcon:Oa,UserSearch:__,UserSearchIcon:__,UserSquare:qa,UserSquare2:za,UserSquare2Icon:za,UserSquareIcon:qa,UserX:w_,UserX2:Oa,UserX2Icon:Oa,UserXIcon:w_,Users:C_,Users2:Za,Users2Icon:Za,UsersIcon:C_,UsersRound:Za,UsersRoundIcon:Za,Utensils:Ga,UtensilsCrossed:Wa,UtensilsCrossedIcon:Wa,UtensilsIcon:Ga,UtilityPole:I_,UtilityPoleIcon:I_,Variable:S_,VariableIcon:S_,Vault:N_,VaultIcon:N_,Vegan:$_,VeganIcon:$_,VenetianMask:z_,VenetianMaskIcon:z_,Verified:St,VerifiedIcon:St,Vibrate:A_,VibrateIcon:A_,VibrateOff:q_,VibrateOffIcon:q_,Video:j_,VideoIcon:j_,VideoOff:b_,VideoOffIcon:b_,Videotape:H_,VideotapeIcon:H_,View:P_,ViewIcon:P_,Voicemail:V_,VoicemailIcon:V_,Volleyball:T_,VolleyballIcon:T_,Volume:E_,Volume1:F_,Volume1Icon:F_,Volume2:D_,Volume2Icon:D_,VolumeIcon:E_,VolumeOff:R_,VolumeOffIcon:R_,VolumeX:B_,VolumeXIcon:B_,Vote:O_,VoteIcon:O_,Wallet:Z_,Wallet2:Xa,Wallet2Icon:Xa,WalletCards:U_,WalletCardsIcon:U_,WalletIcon:Z_,WalletMinimal:Xa,WalletMinimalIcon:Xa,Wallpaper:W_,WallpaperIcon:W_,Wand:G_,Wand2:Ka,Wand2Icon:Ka,WandIcon:G_,WandSparkles:Ka,WandSparklesIcon:Ka,Warehouse:X_,WarehouseIcon:X_,WashingMachine:K_,WashingMachineIcon:K_,Watch:Q_,WatchIcon:Q_,Waves:Y_,WavesIcon:Y_,WavesLadder:J_,WavesLadderIcon:J_,Waypoints:ew,WaypointsIcon:ew,Webcam:tw,WebcamIcon:tw,Webhook:ow,WebhookIcon:ow,WebhookOff:nw,WebhookOffIcon:nw,Weight:aw,WeightIcon:aw,Wheat:iw,WheatIcon:iw,WheatOff:cw,WheatOffIcon:cw,WholeWord:rw,WholeWordIcon:rw,Wifi:yw,WifiHigh:dw,WifiHighIcon:dw,WifiIcon:yw,WifiLow:lw,WifiLowIcon:lw,WifiOff:sw,WifiOffIcon:sw,WifiZero:hw,WifiZeroIcon:hw,Wind:pw,WindArrowDown:uw,WindArrowDownIcon:uw,WindIcon:pw,Wine:fw,WineIcon:fw,WineOff:kw,WineOffIcon:kw,Workflow:mw,WorkflowIcon:mw,Worm:Mw,WormIcon:Mw,WrapText:vw,WrapTextIcon:vw,Wrench:gw,WrenchIcon:gw,X:xw,XCircle:wn,XCircleIcon:wn,XIcon:xw,XOctagon:uo,XOctagonIcon:uo,XSquare:Aa,XSquareIcon:Aa,Youtube:_w,YoutubeIcon:_w,Zap:Lw,ZapIcon:Lw,ZapOff:ww,ZapOffIcon:ww,ZoomIn:Cw,ZoomInIcon:Cw,ZoomOut:Iw,ZoomOutIcon:Iw,createLucideIcon:n,icons:A2e},Symbol.toStringTag,{value:"Module"})),j2e=({images:l})=>{const[s,d]=ke.useState(0);return ke.useEffect(()=>{const M=setInterval(()=>{d(g=>g===l.length-1?0:g+1)},5e3);return()=>clearInterval(M)},[l.length]),y.jsxs("div",{className:"relative w-full h-64 overflow-hidden rounded-lg",children:[l.map((M,g)=>y.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 
            ${g===s?"opacity-100":"opacity-0"}`,children:y.jsx("img",{src:M,alt:`Vehicle view ${g+1}`,className:"w-full h-full object-cover"})},g)),y.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2",children:l.map((M,g)=>y.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 
              ${g===s?"bg-white w-3":"bg-white/50"}`},g))})]})},H2e=({vehicle:l,isActive:s})=>y.jsxs("div",{className:`
        relative bg-white rounded-3xl shadow-xl overflow-hidden
        w-[350px] transition-all duration-500 transform-gpu
        ${s?"scale-105 shadow-2xl":"scale-100 shadow-lg"}
        hover:scale-105 hover:shadow-2xl
      `,children:[y.jsx(j2e,{images:l.images}),y.jsxs("div",{className:"p-6 pb-8",children:[y.jsx("h3",{className:"text-3xl font-bold mb-4 text-gray-900",children:l.name}),y.jsx("div",{className:"inline-block bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6",style:{boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:l.capacity}),y.jsx("div",{className:"grid grid-cols-2 gap-4 max-h-[150px] overflow-y-auto",children:l.features.map((d,M)=>{const g=b2e[d.icon];return y.jsxs("div",{className:"flex items-center gap-2 p-3 bg-gray-100 rounded-lg transition-transform duration-300 hover:-translate-y-1",style:{boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:[y.jsx(g,{size:20,className:"text-yellow-500"}),y.jsx("span",{className:"text-sm font-medium text-gray-800",children:d.text})]},M)})})]}),s&&y.jsx("div",{className:"absolute inset-0 border-4 border-yellow-500 rounded-3xl pointer-events-none",style:{boxShadow:"0 0 20px rgba(255, 215, 0, 0.5)"}})]}),P2e=({vehicles:l})=>{const[s,d]=ke.useState(0),[M,g]=ke.useState(null),f=w=>{g(w),d(w==="left"?_=>_===0?l.length-1:_-1:_=>_===l.length-1?0:_+1)};ke.useEffect(()=>{const w=setTimeout(()=>g(null),500);return()=>clearTimeout(w)},[M]);const C=w=>{let $=w-s;$<-1&&($+=l.length),$>1&&($-=l.length);const T=`
      absolute transition-all duration-500 ease-in-out
      ${$===0?"z-10 scale-100 opacity-100":"scale-85 opacity-60"}
      ${$===-1?"-translate-x-[60%]":""}
      ${$===1?"translate-x-[60%]":""}
    `,E={transform:`
        perspective(1000px)
        rotateY(${$*45}deg)
        translateX(${$*50}%)
        scale(${$===0?1:.85})
      `,zIndex:$===0?10:5};return{cardClasses:T,cardStyles:E}};return y.jsxs("div",{className:"relative h-[600px] w-full overflow-hidden",children:[y.jsx("button",{onClick:()=>f("left"),className:"absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors",children:y.jsx(mc,{size:24})}),y.jsx("button",{onClick:()=>f("right"),className:"absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors",children:y.jsx(Mc,{size:24})}),y.jsx("div",{className:"relative w-full h-full flex items-center justify-center",children:l.map((w,_)=>{const{cardClasses:$,cardStyles:T}=C(_);return y.jsx("div",{className:$,style:T,children:y.jsx(H2e,{vehicle:w,isActive:_===s})},w.id)})}),y.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20",children:l.map((w,_)=>y.jsx("button",{onClick:()=>d(_),className:`w-3 h-3 rounded-full transition-all duration-300 
              ${s===_?"bg-yellow-500 w-6":"bg-gray-400 hover:bg-gray-300"}`},_))})]})},V2e="/martintogomez-taxi/images/hyundai/auto_fondo_vidriera.webp",T2e="/martintogomez-taxi/images/hyundai/hyundai_2.webp",F2e="/martintogomez-taxi/images/hyundai/hyundai_3.webp",D2e="/martintogomez-taxi/images/mercedes/mercedes_1.webp",R2e="/martintogomez-taxi/images/mercedes/mercedes_2.webp",B2e="/martintogomez-taxi/images/mercedes/mercedes_3.webp",E2e="/martintogomez-taxi/images/alfa/alfa_1.webp",O2e="/martintogomez-taxi/images/alfa/alfa_2.webp",U2e="/martintogomez-taxi/images/alfa/alfa_3.webp",Z2e={en:{about_us:{title:"About Us",subtitle:"Our Fleet",text:"At Martinto Gomez Taxi, we offer reliable and personalized transportation with dedicated drivers. Our goal is to provide a comfortable and stress-free experience, ensuring you reach your destination safely and on time."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 people",features:{capacity:"Capacity: 4 passengers",efficient:"Efficient consumption",air:"Air conditioning",load_capacity:"Spacious trunk",wifi:"Onboard Wi-Fi",music:"Premium audio system"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 people",features:{capacity:"Capacity: 7 passengers",confort:"Maximum comfort",air:"Tri-zone climate control",entretainment:"Onboard entertainment",wifi:"Onboard Wi-Fi",battery:"USB ports in every row"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 people",features:{capacity:"Capacity: 3 passengers",efficient:"Sports performance",safety:"Maximum safety",air:"Dual-zone climate control",navigation:"Premium navigation",music:"Audio Harman Kardon"}}},es:{about_us:{title:"Sobre Nosotros",subtitle:"Nuestra Flota",text:"En Martinto Gomez Taxi, ofrecemos transporte confiable y personalizado con conductores dedicados. Nuestro objetivo es brindar una experiencia cómoda y sin estrés, asegurando que llegues a tu destino de manera segura y puntual."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 personas",features:{capacity:"Capacidad: 4 pasajeros",efficient:"Consumo eficiente",air:"Aire acondicionado",load_capacity:"Maletero espacioso",wifi:"Wi-Fi a bordo",music:"Sistema de audio premium"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 personas",features:{capacity:"Capacidad: 7 pasajeros",confort:"Máximo confort",air:"Control climático tri-zona",entretainment:"Entretenimiento a bordo",wifi:"Wi-Fi a bordo",battery:"Puertos USB en cada fila"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 personas",features:{capacity:"Capacidad: 3 pasajeros",efficient:"Rendimiento deportivo",safety:"Máxima seguridad",air:"Control climático dual-zona",navigation:"Navegación premium",music:"Audio Harman Kardon"}}},fr:{about_us:{title:"À propos de nous",subtitle:"Notre flotte",text:"Chez Martinto Gomez Taxi, nous offrons un transport fiable et personnalisé avec des chauffeurs dédiés. Notre objectif est de vous offrir une expérience confortable et sans stress, en vous assurant d'atteindre votre destination en toute sécurité et à l'heure."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 personnes",features:{capacity:"Capacité : 4 passagers",efficient:"Consommation efficace",air:"Climatisation",load_capacity:"Coffre spacieux",wifi:"Wi-Fi à bord",music:"Système audio premium"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 personnes",features:{capacity:"Capacité : 7 passagers",confort:"Confort maximal",air:"Contrôle climatique tri-zone",entretainment:"Divertissement à bord",wifi:"Wi-Fi à bord",battery:"Ports USB sur chaque rangée"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 personnes",features:{capacity:"Capacité : 3 passagers",efficient:"Performance sportive",safety:"Sécurité maximale",air:"Contrôle climatique bi-zone",navigation:"Navigation premium",music:"Audio Harman Kardon"}}},de:{about_us:{title:"Über uns",subtitle:"Unsere Flotte",text:"Bei Martinto Gomez Taxi bieten wir zuverlässigen und personalisierten Transport mit engagierten Fahrern an. Unser Ziel ist es, ein komfortables und stressfreies Erlebnis zu bieten und sicherzustellen, dass Sie sicher und pünktlich am Ziel ankommen."},Hyundai_i30:{name:"Hyundai i30",users:"3-4 Personen",features:{capacity:"Kapazität: 4 Passagiere",efficient:"Effizienter Verbrauch",air:"Klimaanlage",load_capacity:"Geräumiger Kofferraum",wifi:"WLAN an Bord",music:"Premium-Audiosystem"}},Mercedes_V_Class:{name:"Mercedes V Class",users:"7 Personen",features:{capacity:"Kapazität: 7 Passagiere",confort:"Maximaler Komfort",air:"Dreizonen-Klimaautomatik",entretainment:"Unterhaltungssystem an Bord",wifi:"WLAN an Bord",battery:"USB-Anschlüsse in jeder Reihe"}},Alfa_Romeo_4C:{name:"Alfa Romeo 4C",users:"3-4 Personen",features:{capacity:"Kapazität: 3 Passagiere",efficient:"Sportliche Leistung",safety:"Maximale Sicherheit",air:"Zweizonen-Klimaautomatik",navigation:"Premium-Navigation",music:"Harman Kardon Audio"}}}},W2e=()=>{const{language:l}=nt(),s=g=>{const f=g.split(".");let C=Z2e[l||"en"];return f.forEach(w=>C=C==null?void 0:C[w]),C||""},d={hyundai:[V2e,T2e,F2e],mercedes:[D2e,R2e,B2e],alfa:[E2e,O2e,U2e]},M=[{id:1,name:s("Hyundai_i30.name"),capacity:s("Hyundai_i30.users"),features:[{icon:"Users",text:s("Hyundai_i30.features.capacity")},{icon:"Fuel",text:s("Hyundai_i30.features.efficient")},{icon:"Wind",text:s("Hyundai_i30.features.air")},{icon:"Luggage",text:s("Hyundai_i30.features.load_capacity")},{icon:"Wifi",text:s("Hyundai_i30.features.wifi")},{icon:"Music",text:s("Hyundai_i30.features.music")}],images:d.hyundai},{id:2,name:s("Mercedes_V_Class.name"),capacity:s("Mercedes_V_Class.users"),features:[{icon:"Users",text:s("Mercedes_V_Class.features.capacity")},{icon:"ThumbsUp",text:s("Mercedes_V_Class.features.confort")},{icon:"Wind",text:s("Mercedes_V_Class.features.air")},{icon:"Tv",text:s("Mercedes_V_Class.features.entretainment")},{icon:"Wifi",text:s("Mercedes_V_Class.features.wifi")},{icon:"BatteryFull",text:s("Mercedes_V_Class.features.battery")}],images:d.mercedes},{id:3,name:s("Alfa_Romeo_4C.name"),capacity:s("Alfa_Romeo_4C.users"),features:[{icon:"Users",text:s("Alfa_Romeo_4C.features.capacity")},{icon:"Gauge",text:s("Alfa_Romeo_4C.features.efficient")},{icon:"Shield",text:s("Alfa_Romeo_4C.features.safety")},{icon:"Wind",text:s("Alfa_Romeo_4C.features.air")},{icon:"Map",text:s("Alfa_Romeo_4C.features.navigation")},{icon:"Speaker",text:s("Alfa_Romeo_4C.features.music")}],images:d.alfa}];return y.jsx(y.Fragment,{children:y.jsx("section",{id:"about_us",className:"py-16 bg-gray-100 border-b-4 border-yellow-500",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-oswald text-yellow-500 text-center mb-8",children:s("about_us.title")}),y.jsx("p",{className:"text-gray-700 text-center mb-12 max-w-2xl mx-auto",children:s("about_us.text")}),y.jsx("div",{className:"max-w-7xl mx-auto",children:y.jsx(P2e,{vehicles:M})})]})})})},G2e={en:{services:{title:"Our Services","24_7":"24/7 Availability","24_7_desc":"Reliable transportation anytime, day or night, whenever you need it.",driver:"Experienced Driver",driver_desc:"Professional driving with years of experience for a smooth and safe journey.",airport:"Airport",airport_desc:"Seamless airport transfers with punctuality and comfort guaranteed.",events:"Events",events_desc:"Trustworthy rides for any event, whether it's a wedding, birthday, or corporate party.",hospitals:"Hospitals",hospitals_desc:"Reliable transportation to and from hospitals and clinics, ensuring timely arrivals.",nursing_homes:"Nursing Homes",nursing_homes_desc:"Comfortable rides for seniors to and from nursing homes, always with a helping hand.",travel_tours:"Travel/Tours",travel_tours_desc:"Experience the best of your city with our guided tours or comfortable rides to and from the airport.",business_vip_transfer:"Business VIP Transfer",business_vip_transfer_desc:"Professional, punctual and personalized transportation for your company's most important clients.",economic_transfer:"Economic Transfer",economic_transfer_desc:"Affordable and reliable rides for any occasion, without compromising on quality.",premium_transfer:"Premium Transfer",premium_transfer_desc:"Top-notch rides for special occasions, complete with luxurious vehicles and impeccable service."}},es:{services:{title:"Nuestros Servicios","24_7":"Disponibilidad 24/7","24_7_desc":"Transporte confiable en cualquier momento, de día o de noche, cuando lo necesites.",driver:"Conductor Experimentado",driver_desc:"Conducción profesional con años de experiencia para un viaje suave y seguro.",airport:"Aeropuerto",airport_desc:"Traslados al aeropuerto sin complicaciones con puntualidad y comodidad garantizadas.",events:"Eventos",events_desc:"Viajes confiables para cualquier evento, ya sea una boda, cumpleaños o fiesta corporativa.",hospitals:"Hospitales",hospitals_desc:"Transporte confiable hacia y desde hospitales y clínicas, asegurando llegadas puntuales.",nursing_homes:"Residencias de Ancianos",nursing_homes_desc:"Viajes cómodos para personas mayores hacia y desde residencias, siempre con una mano amiga.",travel_tours:"Viajes/Tours",travel_tours_desc:"Experimenta lo mejor de tu ciudad con nuestros tours guiados o traslados cómodos al aeropuerto.",business_vip_transfer:"Traslado VIP Empresarial",business_vip_transfer_desc:"Transporte profesional, puntual y personalizado para los clientes más importantes de tu empresa.",economic_transfer:"Traslado Económico",economic_transfer_desc:"Viajes asequibles y confiables para cualquier ocasión, sin comprometer la calidad.",premium_transfer:"Traslado Premium",premium_transfer_desc:"Viajes de primera clase para ocasiones especiales, con vehículos lujosos y un servicio impecable."}},fr:{services:{title:"Nos Services","24_7":"Disponibilité 24/7","24_7_desc":"Transport fiable à tout moment, de jour comme de nuit, quand vous en avez besoin.",driver:"Chauffeur Expérimenté",driver_desc:"Conduite professionnelle avec des années d'expérience pour un trajet fluide et sûr.",airport:"Aéroport",airport_desc:"Transferts aéroport sans tracas avec ponctualité et confort garantis.",events:"Événements",events_desc:"Trajets fiables pour tout événement, qu'il s'agisse d'un mariage, d'un anniversaire ou d'une fête d'entreprise.",hospitals:"Hôpitaux",hospitals_desc:"Transport fiable vers et depuis les hôpitaux et cliniques, assurant des arrivées ponctuelles.",nursing_homes:"Maisons de Retraite",nursing_homes_desc:"Trajets confortables pour les personnes âgées vers et depuis les maisons de retraite, toujours avec une aide bienveillante.",travel_tours:"Voyages/Excursions",travel_tours_desc:"Découvrez le meilleur de votre ville avec nos visites guidées ou des trajets confortables vers et depuis l'aéroport.",business_vip_transfer:"Transfert VIP Affaires",business_vip_transfer_desc:"Transport professionnel, ponctuel et personnalisé pour les clients les plus importants de votre entreprise.",economic_transfer:"Transfert Économique",economic_transfer_desc:"Trajets abordables et fiables pour toute occasion, sans compromettre la qualité.",premium_transfer:"Transfert Premium",premium_transfer_desc:"Trajets haut de gamme pour les occasions spéciales, avec des véhicules luxueux et un service impeccable."}},de:{services:{title:"Unsere Dienstleistungen","24_7":"24/7 Verfügbarkeit","24_7_desc":"Zuverlässiger Transport jederzeit, Tag und Nacht, wenn Sie ihn benötigen.",driver:"Erfahrener Fahrer",driver_desc:"Professionelles Fahren mit jahrelanger Erfahrung für eine reibungslose und sichere Fahrt.",airport:"Flughafen",airport_desc:"Reibungslose Flughafentransfers mit Garantie auf Pünktlichkeit und Komfort.",events:"Veranstaltungen",events_desc:"Vertrauenswürdige Fahrten für jede Veranstaltung, sei es eine Hochzeit, ein Geburtstag oder eine Firmenfeier.",hospitals:"Krankenhäuser",hospitals_desc:"Zuverlässiger Transport zu und von Krankenhäusern und Kliniken, um pünktliche Ankünfte zu gewährleisten.",nursing_homes:"Pflegeheime",nursing_homes_desc:"Komfortable Fahrten für Senioren zu und von Pflegeheimen, immer mit einer helfenden Hand.",travel_tours:"Reisen/Ausflüge",travel_tours_desc:"Erleben Sie das Beste Ihrer Stadt mit unseren geführten Touren oder komfortablen Fahrten zum und vom Flughafen.",business_vip_transfer:"Geschäftlicher VIP-Transfer",business_vip_transfer_desc:"Professioneller, pünktlicher und personalisierter Transport für die wichtigsten Kunden Ihres Unternehmens.",economic_transfer:"Wirtschaftlicher Transfer",economic_transfer_desc:"Bezahlbare und zuverlässige Fahrten für jede Gelegenheit, ohne Kompromisse bei der Qualität.",premium_transfer:"Premium-Transfer",premium_transfer_desc:"Hochwertige Fahrten für besondere Anlässe, komplett mit luxuriösen Fahrzeugen und einem makellosen Service."}}},_1=({icon:l,title:s,description:d})=>y.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105",children:[y.jsx("div",{className:"flex items-center justify-center mb-4",children:y.jsx("div",{className:"rounded-full bg-[#1B1B25] p-3",children:y.jsx(l,{size:40,className:"text-yellow-500"})})}),y.jsx("h3",{className:"text-xl font-bold text-center mb-2 text-gray-900",children:s}),y.jsx("p",{className:"text-sm text-center text-gray-600",children:d})]}),X2e=()=>{const{language:l}=nt(),s=d=>{const M=d.split(".");let g=G2e[l||"en"];return M.forEach(f=>g=g==null?void 0:g[f]),g||""};return y.jsx("section",{id:"services",className:"py-16 bg-gray-100 border-b-4 border-yellow-500",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold text-center mb-12 text-gray-900",children:s("services.title")}),y.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[y.jsx(_1,{icon:vc,title:s("services.24_7"),description:s("services.24_7_desc")}),y.jsx(_1,{icon:Cc,title:s("services.driver"),description:s("services.driver_desc")}),y.jsx(_1,{icon:wc,title:s("services.airport"),description:s("services.airport_desc")}),y.jsx(_1,{icon:xc,title:s("services.events"),description:s("services.events_desc")}),y.jsx(_1,{icon:Lc,title:s("services.hospitals"),description:s("services.hospitals_desc")}),y.jsx(_1,{icon:gc,title:s("services.nursing_homes"),description:s("services.nursing_homes_desc")}),y.jsx(_1,{icon:_c,title:s("services.travel_tours"),description:s("services.travel_tours_desc")}),y.jsx(_1,{icon:pc,title:s("services.business_vip_transfer"),description:s("services.business_vip_transfer_desc")}),y.jsx(_1,{icon:kc,title:s("services.economic_transfer"),description:s("services.economic_transfer_desc")}),y.jsx(_1,{icon:fc,title:s("services.premium_transfer"),description:s("services.premium_transfer_desc")})]})]})})},K2e={en:{mission:{title:"Mission",text:"To provide personalized, safe, and reliable transportation services with a focus on convenience and customer satisfaction, ensuring every ride feels like a premium experience."},vision:{title:"Vision",text:"To become the most trusted and preferred solo driver service in the city, known for exceptional customer care, efficiency, and a commitment to safety."}},es:{mission:{title:"Misión",text:"Ofrecer servicios de transporte personalizados, seguros y confiables, centrados en la comodidad y la satisfacción del cliente, asegurando que cada viaje sea una experiencia premium."},vision:{title:"Visión",text:"Convertirnos en el servicio de conductor individual más confiable y preferido de la ciudad, reconocidos por un cuidado excepcional al cliente, eficiencia y compromiso con la seguridad."}},fr:{mission:{title:"Mission",text:"Fournir des services de transport personnalisés, sûrs et fiables, axés sur le confort et la satisfaction des clients, en assurant que chaque trajet soit une expérience premium."},vision:{title:"Vision",text:"Devenir le service de chauffeur individuel le plus fiable et préféré de la ville, reconnu pour des soins exceptionnels aux clients, l'efficacité et un engagement envers la sécurité."}},de:{mission:{title:"Mission",text:"Personalisierte, sichere und zuverlässige Transportdienstleistungen anzubieten, die sich auf Komfort und Kundenzufriedenheit konzentrieren und sicherstellen, dass jede Fahrt ein Premium-Erlebnis ist."},vision:{title:"Vision",text:"Der vertrauenswürdigste und bevorzugte Einzelfahrer-Service der Stadt zu werden, bekannt für außergewöhnliche Kundenbetreuung, Effizienz und Engagement für Sicherheit."}}};function Q2e(){const{language:l}=nt(),s=d=>{const M=d.split(".");let g=K2e[l||"en"];return M.forEach(f=>g=g==null?void 0:g[f]),g||""};return y.jsx("section",{id:"mission",className:"py-16 bg-black text-white border-b-4 border-yellow-500",children:y.jsx("div",{className:"container mx-auto px-4",children:y.jsxs("div",{className:"max-w-3xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("h3",{className:"text-yellow-500 text-xl font-semibold mb-4",children:s("mission.title")}),y.jsx("p",{className:"text-lg",children:s("mission.text")})]}),y.jsxs("div",{className:"text-center",children:[y.jsx("h3",{className:"text-yellow-500 text-xl font-semibold mb-4",children:s("vision.title")}),y.jsx("p",{className:"text-lg",children:s("vision.text")})]})]})})})}const J2e={en:{contact:{title:"Contact Us",message:"We are here to help you. Contact us through the following means:",phone:"Phone",email:"Email",address:"Address",whatsapp:"WhatsApp",instagram:"Instagram",facebook:"Facebook",linkedin:"LinkedIn"}},es:{contact:{title:"Contáctenos",message:"Estamos aquí para ayudarte. Contáctenos a través de los siguientes medios:",phone:"Teléfono",email:"Correo Electrónico",address:"Dirección",whatsapp:"WhatsApp",instagram:"Instagram",facebook:"Facebook",linkedin:"LinkedIn"}},fr:{contact:{title:"Contactez-nous",message:"Nous sommes là pour vous aider. Contactez-nous par les moyens suivants :",phone:"Téléphone",email:"Email",address:"Adresse",whatsapp:"WhatsApp",instagram:"Instagram",facebook:"Facebook",linkedin:"LinkedIn"}},de:{contact:{title:"Kontaktieren Sie uns",message:"Wir sind hier, um Ihnen zu helfen. Kontaktieren Sie uns über die folgenden Kanäle:",phone:"Telefon",email:"E-Mail",address:"Adresse",whatsapp:"WhatsApp",instagram:"Instagram",facebook:"Facebook",linkedin:"LinkedIn"}}},Y2e=()=>{const{language:l}=nt(),s=d=>{const M=d.split(".");let g=J2e[l||"en"];return M.forEach(f=>g=g==null?void 0:g[f]),g||""};return y.jsx("section",{id:"contact",className:"py-16 bg-gray-100",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-yellow-500",children:s("contact.title")}),y.jsxs("div",{className:"max-w-xl mx-auto text-center space-y-6",children:[y.jsx("p",{className:"text-lg text-black",children:s("contact.message")}),y.jsxs("div",{className:"space-y-2 text-black",children:[y.jsxs("p",{children:[y.jsxs("strong",{children:[s("contact.phone"),": "]})," +41 75 5777 700"]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[s("contact.email"),": "]})," ","service@martintogomez-taxi.com"]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[s("contact.address"),": "]})," 123 Business St, City, Country"]})]}),y.jsxs("div",{className:"flex justify-center space-x-4 mt-6",children:[y.jsx("a",{href:"https://www.facebook.com/profile.php?id=61568516343141","aria-label":s("contact.facebook"),target:"_blank",rel:"noopener noreferrer",children:y.jsx("i",{className:"ri-facebook-box-fill text-2xl text-blue-600 hover:text-blue-800"})}),y.jsx("a",{href:"https://instagram.com/martintogomez.taxi","aria-label":s("contact.instagram"),target:"_blank",rel:"noopener noreferrer",children:y.jsx("i",{className:"ri-instagram-fill text-2xl text-pink-500 hover:text-pink-700"})}),y.jsx("a",{href:"https://wa.me/+41755777700","aria-label":s("contact.whatsapp"),target:"_blank",rel:"noopener noreferrer",children:y.jsx("i",{className:"ri-whatsapp-fill text-2xl text-green-500 hover:text-green-700"})}),y.jsx("a",{href:"https://www.linkedin.com/company/martintogomez-taxi","aria-label":s("contact.linkedin"),target:"_blank",rel:"noopener noreferrer",children:y.jsx("i",{className:"ri-linkedin-box-fill text-2xl text-blue-500 hover:text-blue-700"})})]})]})]})})},e$={de:{steps:["Dienstleistungstyp","Datum & Uhrzeit","Fahrtdetails","Kontakt","Bestätigung"],selectOption:"Wählen Sie eine Option",next:"WEITER",back:"ZURÜCK",send:"SENDEN",close:"Schließen",serviceType:"Dienstleistungstyp",date:"Datum",time:"Uhrzeit",pickup:"Abholort",destination:"Zielort",selectCar:"Fahrzeug auswählen",contact:"Kontaktinformationen",fullName:"Vollständiger Name",email:"E-Mail",phone:"Telefonnummer",services:["Executive","Kinder mit besonderen Bedürfnissen","Senioren","Spezielle Veranstaltungen"],cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 Passagiere)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],confirmation:"Überprüfen Sie Ihre Daten",capacity:"Kapazität",passengers:"Passagiere",rate:"Preis"},fr:{steps:["Type de service","Date et heure","Détails du trajet","Contact","Confirmation"],selectOption:"Sélectionnez une option",next:"SUIVANT",back:"RETOUR",send:"ENVOYER",close:"Fermer",serviceType:"Type de service",date:"Date",time:"Heure",pickup:"Lieu de prise en charge",destination:"Destination",selectCar:"Sélectionner un véhicule",contact:"Informations de contact",fullName:"Nom complet",email:"Email",phone:"Numéro de téléphone",services:["Exécutif","Enfants à besoins spéciaux","Personnes âgées","Événements spéciaux"],cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 passagers)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],confirmation:"Vérifiez vos informations",capacity:"Capacité",passengers:"passagers",rate:"Tarif"},en:{steps:["Service Type","Date & Time","Trip Details","Contact","Review Your Details"],selectOption:"Select an option",next:"NEXT",back:"BACK",send:"SEND",close:"Close",serviceType:"Service Type",date:"Date",time:"Time",pickup:"Pickup Location",destination:"Destination",selectCar:"Select Vehicle",contact:"Contact Information",fullName:"Full Name",email:"Email",phone:"Phone Number",services:["Executive","Special Needs Children","Elderly","Special Events"],confirmation:"Review Your Details",cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],capacity:"Capacity",passengers:"passengers",rate:"Rate"},es:{steps:["Tipo de Servicio","Fecha y Hora","Detalles del Viaje","Contacto","Confirmación"],selectOption:"Selecciona una opción",next:"SIGUIENTE",back:"ATRÁS",send:"ENVIAR",close:"Cerrar",serviceType:"Tipo de servicio",date:"Fecha",time:"Hora",pickup:"Lugar de Recogida",destination:"Destino",selectCar:"Seleccionar Vehículo",contact:"Información de Contacto",fullName:"Nombre Completo",email:"Correo Electrónico",phone:"Teléfono",services:["Ejecutivo","Niños Especiales","Adultos Mayores","Eventos Especiales"],confirmation:"Revisa tu Información",cars:[{name:"Mercedes V-Class",capacity:7,rate:2.5},{name:"Mercedes S-Class",capacity:4,rate:3},{name:"Mercedes E-Class",capacity:4,rate:2.8},{name:"BMW 520 D M Paket",capacity:4,rate:2.7},{name:"Mercedes Sprinter",capacity:16,rate:4},{name:"Bus (50 pasajeros)",capacity:50,rate:5},{name:"Tesla",capacity:5,rate:3.5}],capacity:"Capacidad",passengers:"pasajeros",rate:"Tarifa"}};function ece({onClose:l}){const{language:s}=nt(),d=e$[s]||e$.en,[M,g]=ke.useState(1),[f,C]=ke.useState({service:"",date:"",time:"",pickup:"",destination:"",car:null,fullName:"",email:"",phone:""}),w=G=>{const{name:oe,value:K}=G.target;C(O=>({...O,[oe]:K}))},_=()=>{M<d.steps.length&&g(G=>G+1)},$=()=>{M>1&&g(G=>G-1)},T=M/d.steps.length*100,E=()=>{var O,ie,fe;const G=`
      ${d.confirmation}:

      ${d.serviceType}: ${f.service}

      ${d.date}: ${f.date}

      ${d.time}: ${f.time}

      ${d.pickup}: ${f.pickup}

      ${d.destination}: ${f.destination}

      ${d.selectCar}: ${((O=f.car)==null?void 0:O.name)||"N/A"}

      ${d.capacity}: ${((ie=f.car)==null?void 0:ie.capacity)||"N/A"} ${d.passengers}

      ${d.rate}: ${((fe=f.car)==null?void 0:fe.rate)||"N/A"} CHF/km

      ${d.fullName}: ${f.fullName}

      ${d.email}: ${f.email}

      ${d.phone}: ${f.phone}
    `,K=`https://wa.me/+5353616391?text=${encodeURIComponent(G)}`;window.open(K,"_blank","noopener noreferrer"),l()},Z=()=>{var G,oe,K,O;switch(M){case 1:return y.jsx("div",{className:"flex flex-col gap-4",children:y.jsxs("select",{name:"service",value:f.service,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.selectOption,children:[y.jsx("option",{value:"",children:d.selectOption}),d.services.map((ie,fe)=>y.jsx("option",{value:ie,children:ie},fe))]})});case 2:return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"relative",children:[y.jsx("label",{className:`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${f.date?"opacity-0":"opacity-100"}`,children:d.date}),y.jsx("input",{type:"date",name:"date",value:f.date,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.date})]}),y.jsxs("div",{className:"relative",children:[y.jsx("label",{className:`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${f.time?"opacity-0":"opacity-100"}`,children:d.time}),y.jsx("input",{type:"time",name:"time",value:f.time,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.time})]})]});case 3:return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("input",{type:"text",name:"pickup",placeholder:d.pickup,value:f.pickup,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.pickup}),y.jsx("input",{type:"text",name:"destination",placeholder:d.destination,value:f.destination,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.destination}),y.jsxs("select",{name:"car",value:((G=f.car)==null?void 0:G.name)||"",onChange:ie=>{const fe=d.cars.find(Ae=>Ae.name===ie.target.value);C(Ae=>({...Ae,car:fe}))},className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.selectCar,children:[y.jsx("option",{value:"",children:d.selectOption}),d.cars.map((ie,fe)=>y.jsx("option",{value:ie.name,children:`${ie.name} (${ie.capacity} ${d.passengers}, ${ie.rate} CHF/km)`},fe))]})]});case 4:return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("input",{type:"text",name:"fullName",placeholder:d.fullName,value:f.fullName,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.fullName}),y.jsx("input",{type:"email",name:"email",placeholder:d.email,value:f.email,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.email}),y.jsx("input",{type:"tel",name:"phone",placeholder:d.phone,value:f.phone,onChange:w,className:"bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold","aria-label":d.phone})]});case 5:return y.jsxs("div",{className:"text-gray-300 text-left",children:[y.jsxs("p",{children:[y.jsxs("strong",{children:[d.serviceType,":"]})," ",f.service]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.date,":"]})," ",f.date]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.time,":"]})," ",f.time]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.pickup,":"]})," ",f.pickup]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.destination,":"]})," ",f.destination]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.selectCar,":"]})," ",((oe=f.car)==null?void 0:oe.name)||"N/A"]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.capacity,":"]})," ",((K=f.car)==null?void 0:K.capacity)||"N/A"," ",d.passengers]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.rate,":"]})," ",((O=f.car)==null?void 0:O.rate)||"N/A"," CHF/km"]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.fullName,":"]})," ",f.fullName]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.email,":"]})," ",f.email]}),y.jsxs("p",{children:[y.jsxs("strong",{children:[d.phone,":"]})," ",f.phone]})]});default:return null}};return y.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[y.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-60",onClick:l,role:"button","aria-label":"Close modal"}),y.jsxs("div",{className:"relative w-[404px] h-[416px] bg-[#202020] rounded-[11px] shadow-lg p-6 flex flex-col justify-between z-10",children:[y.jsx("button",{onClick:l,className:"absolute top-3 right-3 text-gray-400 hover:text-gray-200","aria-label":"Close modal",children:"✕"}),y.jsx("h3",{className:"text-gold font-bebas text-[22px] leading-[64.87px] font-bebas text-center",children:d.steps[M-1]}),y.jsx("div",{className:"w-[369px] h-[5px] bg-gray-700 rounded-[48px] mx-auto mt-2 overflow-hidden",children:y.jsx("div",{className:"h-full bg-gold transition-all duration-300",style:{width:`${T}%`},role:"progressbar","aria-valuenow":T,"aria-valuemin":"0","aria-valuemax":"100"})}),y.jsx("div",{className:"flex-grow flex items-center justify-center",children:Z()}),y.jsxs("div",{className:"flex justify-between gap-[8.36px] mt-4",children:[M>1&&y.jsx("button",{onClick:$,className:"w-[370px] h-[42px] bg-gray-700 text-white font-bebas rounded-[380.14px] hover:bg-gray-600 transition","aria-label":d.back,children:d.back}),y.jsx("button",{onClick:M<d.steps.length?_:E,className:"w-[370px] h-[42px] bg-gold text-white font-bebas rounded-[380.14px] hover:bg-yellow-600 transition","aria-label":M<d.steps.length?d.next:d.send,children:M<d.steps.length?d.next:d.send})]})]})]})}function tce(){const[l,s]=ke.useState(!1),d=()=>s(!0),M=()=>s(!1);return y.jsx(d$,{children:y.jsx(vq,{children:y.jsxs("div",{className:"bg-black text-white font-sans",children:[y.jsx(Zq,{onOpenWizard:d}),y.jsx(Xq,{onOpenWizard:d}),y.jsx(W2e,{}),y.jsx(Q2e,{}),y.jsx(X2e,{}),y.jsx(Y2e,{}),y.jsx(Wq,{}),l&&y.jsx(ece,{onClose:M})]})})})}Mq.createRoot(document.getElementById("root")).render(y.jsx(ke.StrictMode,{children:y.jsx(tce,{})}));
