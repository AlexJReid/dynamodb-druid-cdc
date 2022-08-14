/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6550:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

var shadow$provide = {};
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
})(this, function() {
  var shadow$umd$export = null;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g;function r(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}var aa="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a){const b=[];let c=0;for(const d in a)b[c++]=d;return b};function da(a,b){null!=a&&this.append.apply(this,arguments)}g=da.prototype;g.Ba="";g.set=function(a){this.Ba=""+a};g.append=function(a,b,c){this.Ba+=String(a);if(null!=b)for(let d=1;d<arguments.length;d++)this.Ba+=arguments[d];return this};g.clear=function(){this.Ba=""};g.toString=function(){return this.Ba};var fa={},ha={},df,u={},ja=null,ka=!0,la=null;function na(){return new oa(null,5,[pa,!0,qa,!0,ra,!1,sa,!1,ta,null],null)}function ua(){ka=!1;ja=function(){var a=arguments,b=console.log,c=b.apply,d=console;{const e=a.length;if(0<e){const f=Array(e);for(let h=0;h<e;h++)f[h]=a[h];a=f}else a=[]}return c.call(b,d,a)}}function v(a){return null!=a&&!1!==a}function w(a,b){return a[r(null==b?null:b)]?!0:a._?!0:!1}
function x(a,b){var c=null==b?null:b.constructor;return Error(["No protocol method ",a," defined for type ",v(v(c)?c.vb:c)?c.jb:r(b),": ",b].join(""))}function va(a){var b=a.jb;return v(b)?b:z.g(a)}var wa="undefined"!==typeof Symbol&&"function"===r(Symbol)?Symbol.iterator:"@@iterator";function B(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function Kf(a){function b(d,e){d.push(e);return d}var c=[];return uc?uc(b,c,a):vc.call(null,b,c,a)}function xa(){}
function ya(a){if(null!=a&&null!=a.V)a=a.V(a);else{var b=ya[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=ya._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("ICounted.-count",a);}return a}function za(){}function Aa(a){if(null!=a&&null!=a.W)a=a.W(a);else{var b=Aa[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Aa._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IEmptyableCollection.-empty",a);}return a}function Ba(){}
function Ca(a,b){if(null!=a&&null!=a.U)a=a.U(a,b);else{var c=Ca[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=Ca._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("ICollection.-conj",a);}return a}function Da(){}
var ff=function(){function a(d,e,f){var h=D[r(null==d?null:d)];if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);h=D._;if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);throw x("IIndexed.-nth",d);}function b(d,e){var f=D[r(null==d?null:d)];if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);f=D._;if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);throw x("IIndexed.-nth",d);}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.h=b;c.l=a;return c}(),D=function D(a){switch(arguments.length){case 2:return D.h(arguments[0],arguments[1]);case 3:return D.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};D.h=function(a,b){return null!=a&&null!=a.T?a.T(a,b):ff(a,b)};D.l=function(a,b,c){return null!=a&&null!=a.la?a.la(a,b,c):ff(a,b,c)};D.Y=3;function Lf(){}
function E(a){if(null!=a&&null!=a.ca)a=a.ca(a);else{var b=E[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=E._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("ISeq.-first",a);}return a}function G(a){if(null!=a&&null!=a.ga)a=a.ga(a);else{var b=G[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=G._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("ISeq.-rest",a);}return a}function Fa(){}function Ga(){}
var jf=function(){function a(d,e,f){var h=Ha[r(null==d?null:d)];if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);h=Ha._;if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);throw x("ILookup.-lookup",d);}function b(d,e){var f=Ha[r(null==d?null:d)];if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);f=Ha._;if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);throw x("ILookup.-lookup",d);}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.h=b;c.l=a;return c}(),Ha=function Ha(a){switch(arguments.length){case 2:return Ha.h(arguments[0],arguments[1]);case 3:return Ha.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};Ha.h=function(a,b){return null!=a&&null!=a.ka?a.ka(a,b):jf(a,b)};Ha.l=function(a,b,c){return null!=a&&null!=a.H?a.H(a,b,c):jf(a,b,c)};Ha.Y=3;function Ja(){}
function Ka(a,b){if(null!=a&&null!=a.Ua)a=a.Ua(a,b);else{var c=Ka[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=Ka._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("IAssociative.-contains-key?",a);}return a}function La(a,b,c){if(null!=a&&null!=a.xa)a=a.xa(a,b,c);else{var d=La[r(null==a?null:a)];if(null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else if(d=La._,null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else throw x("IAssociative.-assoc",a);}return a}function Ma(){}
function Na(a){if(null!=a&&null!=a.Gb)a=a.key;else{var b=Na[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Na._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IMapEntry.-key",a);}return a}function Oa(a){if(null!=a&&null!=a.Hb)a=a.G;else{var b=Oa[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Oa._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IMapEntry.-val",a);}return a}function Pa(){}
function Qa(a){if(null!=a&&null!=a.Ab)a=a.G;else{var b=Qa[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Qa._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IDeref.-deref",a);}return a}function Ra(){}function Sa(a){if(null!=a&&null!=a.P)a=a.P(a);else{var b=Sa[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Sa._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IMeta.-meta",a);}return a}
function Ta(a,b){if(null!=a&&null!=a.R)a=a.R(a,b);else{var c=Ta[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=Ta._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("IWithMeta.-with-meta",a);}return a}function Ua(){}
var kf=function(){function a(d,e,f){var h=Va[r(null==d?null:d)];if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);h=Va._;if(null!=h)return h.l?h.l(d,e,f):h.call(null,d,e,f);throw x("IReduce.-reduce",d);}function b(d,e){var f=Va[r(null==d?null:d)];if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);f=Va._;if(null!=f)return f.h?f.h(d,e):f.call(null,d,e);throw x("IReduce.-reduce",d);}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.h=b;c.l=a;return c}(),Va=function Va(a){switch(arguments.length){case 2:return Va.h(arguments[0],arguments[1]);case 3:return Va.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};Va.h=function(a,b){return null!=a&&null!=a.aa?a.aa(a,b):kf(a,b)};Va.l=function(a,b,c){return null!=a&&null!=a.ba?a.ba(a,b,c):kf(a,b,c)};Va.Y=3;function Xa(){}
function Ya(a,b){if(null!=a&&null!=a.hb)a=a.hb(a,b,!0);else{var c=Ya[r(null==a?null:a)];if(null!=c)a=c.l?c.l(a,b,!0):c.call(null,a,b,!0);else if(c=Ya._,null!=c)a=c.l?c.l(a,b,!0):c.call(null,a,b,!0);else throw x("IKVReduce.-kv-reduce",a);}return a}function Za(a,b){if(null!=a&&null!=a.K)a=a.K(a,b);else{var c=Za[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=Za._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("IEquiv.-equiv",a);}return a}
function $a(a){if(null!=a&&null!=a.O)a=a.O(a);else{var b=$a[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=$a._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IHash.-hash",a);}return a}function ab(){}function bb(a){if(null!=a&&null!=a.I)a=a.I(a);else{var b=bb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=bb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("ISeqable.-seq",a);}return a}function cb(){}function db(){}function eb(){}function If(){}
function Jf(a){if(null!=a&&null!=a.ec)a=a.ec(a);else{var b=Jf[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Jf._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IReversible.-rseq",a);}return a}function H(a,b){if(null!=a&&null!=a.ub)a=a.ub(a,b);else{var c=H[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=H._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("IWriter.-write",a);}return a}function fb(){}
function gb(a,b,c){if(null!=a&&null!=a.M)a=a.M(a,b,c);else{var d=gb[r(null==a?null:a)];if(null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else if(d=gb._,null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else throw x("IPrintWithWriter.-pr-writer",a);}return a}function hb(a){if(null!=a&&null!=a.Xa)a=a.Xa(a);else{var b=hb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=hb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IEditableCollection.-as-transient",a);}return a}
function ib(a,b){if(null!=a&&null!=a.$a)a=a.$a(a,b);else{var c=ib[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=ib._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("ITransientCollection.-conj!",a);}return a}function jb(a){if(null!=a&&null!=a.ib)a=a.ib(a);else{var b=jb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=jb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("ITransientCollection.-persistent!",a);}return a}
function kb(a,b,c){if(null!=a&&null!=a.Va)a=a.Va(a,b,c);else{var d=kb[r(null==a?null:a)];if(null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else if(d=kb._,null!=d)a=d.l?d.l(a,b,c):d.call(null,a,b,c);else throw x("ITransientAssociative.-assoc!",a);}return a}function lb(a){if(null!=a&&null!=a.qb)a=a.qb(a);else{var b=lb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=lb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IChunk.-drop-first",a);}return a}
function mb(a){if(null!=a&&null!=a.nb)a=a.nb(a);else{var b=mb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=mb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IChunkedSeq.-chunked-first",a);}return a}function nb(a){if(null!=a&&null!=a.gb)a=a.gb(a);else{var b=nb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=nb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IChunkedSeq.-chunked-rest",a);}return a}function ob(){}
function pb(a){if(null!=a&&null!=a.sa)a=a.sa(a);else{var b=pb[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=pb._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IIterable.-iterator",a);}return a}function qb(a){this.Pb=a;this.j=1073741824;this.A=0}qb.prototype.ub=function(a,b){return this.Pb.append(b)};function rb(a){var b=new da;a.M(null,new qb(b),na());return z.g(b)}
var sb="undefined"!==typeof Math&&"undefined"!==typeof Math.imul?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function tb(a){a=sb(a|0,-862048943);return sb(a<<15|a>>>-15,461845907)}function ub(a,b){a=(a|0)^(b|0);return sb(a<<13|a>>>-13,5)+-430675100|0}function vb(a,b){a=(a|0)^b;a=sb(a^a>>>16,-2048144789);a=sb(a^a>>>13,-1028477387);return a^a>>>16}
function wb(a){a:{var b=1;for(var c=0;;)if(b<a.length)c=ub(c,tb(a.charCodeAt(b-1)|a.charCodeAt(b)<<16)),b+=2;else{b=c;break a}}return vb(1===(a.length&1)?b^tb(a.charCodeAt(a.length-1)):b,sb(2,a.length))}var xb={},yb=0;function zb(a){255<yb&&(xb={},yb=0);if(null==a)return 0;var b=xb[a];if("number"===typeof b)a=b;else{a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)d=sb(31,d)+a.charCodeAt(c),c+=1;else{b=d;break a}else b=0;else b=0;xb[a]=b;yb+=1;a=b}return a}
function Ab(a){if(null!=a&&(a.j&4194304||u===a.Ub))return a.O(null)^0;if("number"===typeof a){if(isFinite(a))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1231:!1===a?a=1237:"string"===typeof a?(a=zb(a),a=0===a?a:vb(ub(0,tb(a)),4)):a=a instanceof Date?a.valueOf()^0:null==a?0:$a(a)^0,a}function Bb(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function Cb(a,b,c,d,e){this.fb=a;this.name=b;this.Aa=c;this.Ta=d;this.ra=e;this.j=2154168321;this.A=4096}g=Cb.prototype;g.toString=function(){return this.Aa};g.K=function(a,b){return b instanceof Cb?this.Aa===b.Aa:!1};
g.call=function(){function a(d,e,f){return I.l?I.l(e,this,f):I.call(null,e,this,f)}function b(d,e){return I.h?I.h(e,this):I.call(null,e,this)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.h=b;c.l=a;return c}();
g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return I.h?I.h(a,this):I.call(null,a,this)};g.h=function(a,b){return I.l?I.l(a,this,b):I.call(null,a,this,b)};g.P=function(){return this.ra};g.R=function(a,b){return new Cb(this.fb,this.name,this.Aa,this.Ta,b)};g.O=function(){var a=this.Ta;return null!=a?a:this.Ta=a=Bb(wb(this.name),zb(this.fb))};
g.M=function(a,b){return H(b,this.Aa)};var Db=function Db(a){switch(arguments.length){case 1:return Db.g(arguments[0]);case 2:return Db.h(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};Db.g=function(a){for(;;){if(a instanceof Cb)return a;if("string"===typeof a){var b=a.indexOf("/");return 1>b?Db.h(null,a):Db.h(a.substring(0,b),a.substring(b+1,a.length))}if(a instanceof K)a=a.va;else throw Error("no conversion to symbol");}};
Db.h=function(a,b){var c=null!=a?[z.g(a),"/",z.g(b)].join(""):b;return new Cb(a,b,c,null,null)};Db.Y=2;function Eb(a){return null!=a?a.A&131072||u===a.Vb?!0:a.A?!1:w(ob,a):w(ob,a)}
function M(a){if(null==a)return null;if(null!=a&&(a.j&8388608||u===a.Lb))return a.I(null);if(Array.isArray(a)||"string"===typeof a)return 0===a.length?null:new N(a,0,null);if(null!=a&&null!=a[wa])return a=(null!==a&&wa in a?a[wa]:void 0).call(a),Fb.g?Fb.g(a):Fb.call(null,a);if(w(ab,a))return bb(a);throw Error([z.g(a)," is not ISeqable"].join(""));}function O(a){if(null==a)return null;if(null!=a&&(a.j&64||u===a.Za))return a.ca(null);a=M(a);return null==a?null:E(a)}
function Gb(a){return null!=a?null!=a&&(a.j&64||u===a.Za)?a.ga(null):(a=M(a))?a.ga(null):P:P}function R(a){return null==a?null:null!=a&&(a.j&128||u===a.Ya)?a.Z():M(Gb(a))}var S=function S(a){switch(arguments.length){case 1:return S.g(arguments[0]);case 2:return S.h(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return S.J(arguments[0],arguments[1],new N(c.slice(2),0,null))}};S.g=function(){return!0};
S.h=function(a,b){return null==a?null==b:a===b||Za(a,b)};S.J=function(a,b,c){for(;;)if(S.h(a,b))if(R(c))a=b,b=O(c),c=R(c);else return S.h(b,O(c));else return!1};S.X=function(a){var b=O(a),c=R(a);a=O(c);c=R(c);return this.J(b,a,c)};S.Y=2;function Hb(a){this.C=a}Hb.prototype.next=function(){if(null!=this.C){var a=O(this.C);this.C=R(this.C);return{value:a,done:!1}}return{value:null,done:!0}};function Ib(a){return new Hb(M(a))}
function Jb(a,b){this.value=a;this.wb=b;this.kb=null;this.j=8388672;this.A=0}Jb.prototype.I=function(){return this};Jb.prototype.ca=function(){return this.value};Jb.prototype.ga=function(){null==this.kb&&(this.kb=Fb.g?Fb.g(this.wb):Fb.call(null,this.wb));return this.kb};function Fb(a){var b=a.next();return v(b.done)?null:new Jb(b.value,a)}function Kb(a){var b=0,c=1;for(a=M(a);;)if(null!=a)b+=1,c=sb(31,c)+Ab(O(a))|0,a=R(a);else return vb(ub(0,tb(c)),b)}var Lb=vb(ub(0,tb(1)),0);
function Mb(a){var b=0,c=0;for(a=M(a);;)if(null!=a)b+=1,c=c+Ab(O(a))|0,a=R(a);else return vb(ub(0,tb(c)),b)}var Nb=vb(ub(0,tb(0)),0);xa["null"]=!0;ya["null"]=function(){return 0};Date.prototype.K=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Za.number=function(a,b){return a===b};Ra["function"]=!0;Sa["function"]=function(){return null};$a._=function(a){return Object.prototype.hasOwnProperty.call(a,aa)&&a[aa]||(a[aa]=++ba)};function Ob(){this.G=!1;this.j=32768;this.A=0}
Ob.prototype.Ab=function(){return this.G};function Pb(a){return a instanceof Ob}function Qb(a){return Qa(a)}function Rb(a,b){var c=a.length;if(0===a.length)return b.F?b.F():b.call(null);for(var d=a[0],e=1;;)if(e<c){var f=a[e];d=b.h?b.h(d,f):b.call(null,d,f);if(Pb(d))return Qa(d);e+=1}else return d}function Sb(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c];e=b.h?b.h(e,f):b.call(null,e,f);if(Pb(e))return Qa(e);c+=1}else return e}
function Tb(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.h?b.h(c,f):b.call(null,c,f);if(Pb(c))return Qa(c);d+=1}else return c}function Ub(a){return null!=a?a.j&2||u===a.zb?!0:a.j?!1:w(xa,a):w(xa,a)}function Vb(a){return null!=a?a.j&16||u===a.sb?!0:a.j?!1:w(Da,a):w(Da,a)}function T(a,b,c){var d=U.g?U.g(a):U.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(S.h(Wb?Wb(a,c):Xb.call(null,a,c),b))return c;c+=1}else return-1}
function V(a,b,c){var d=U.g?U.g(a):U.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(S.h(Wb?Wb(a,c):Xb.call(null,a,c),b))return c;--c}else return-1}function Yb(a,b){this.i=a;this.o=b}Yb.prototype.ia=function(){return this.o<this.i.length};Yb.prototype.next=function(){var a=this.i[this.o];this.o+=1;return a};function N(a,b,c){this.i=a;this.o=b;this.u=c;this.j=166592766;this.A=139264}g=N.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U.g?U.g(this):U.call(null,this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.T=function(a,b){a=b+this.o;if(0<=a&&a<this.i.length)return this.i[a];throw Error("Index out of bounds");};g.la=function(a,b,c){a=b+this.o;return 0<=a&&a<this.i.length?this.i[a]:c};
g.sa=function(){return new Yb(this.i,this.o)};g.P=function(){return this.u};g.Z=function(){return this.o+1<this.i.length?new N(this.i,this.o+1,null):null};g.V=function(){var a=this.i.length-this.o;return 0>a?0:a};g.ec=function(){var a=this.V(null);return 0<a?new Xf(this,a-1,null):null};g.O=function(){return Kb(this)};g.K=function(a,b){return Zb.h?Zb.h(this,b):Zb.call(null,this,b)};g.W=function(){return P};g.aa=function(a,b){return Tb(this.i,b,this.i[this.o],this.o+1)};
g.ba=function(a,b,c){return Tb(this.i,b,c,this.o)};g.ca=function(){return this.i[this.o]};g.ga=function(){return this.o+1<this.i.length?new N(this.i,this.o+1,null):P};g.I=function(){return this.o<this.i.length?this:null};g.R=function(a,b){return b===this.u?this:new N(this.i,this.o,b)};g.U=function(a,b){return W.h?W.h(b,this):W.call(null,b,this)};N.prototype[wa]=function(){return Ib(this)};function $b(a){return 0<a.length?new N(a,0,null):null}
function Xf(a,b,c){this.dc=a;this.o=b;this.u=c;this.j=32374990;this.A=8192}g=Xf.prototype;g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U.g?U.g(this):U.call(null,this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){return 0<this.o?new Xf(this.dc,this.o-1,null):null};g.V=function(){return this.o+1};g.O=function(){return Kb(this)};
g.K=function(a,b){return Zb.h?Zb.h(this,b):Zb.call(null,this,b)};g.W=function(){return P};g.aa=function(a,b){return tc?tc(b,this):Yf.call(null,b,this)};g.ba=function(a,b,c){return wc?wc(b,c,this):Yf.call(null,b,c,this)};g.ca=function(){return D(this.dc,this.o)};g.ga=function(){return 0<this.o?new Xf(this.dc,this.o-1,null):P};g.I=function(){return this};g.R=function(a,b){return b===this.u?this:new Xf(this.dc,this.o,b)};g.U=function(a,b){return W.h?W.h(b,this):W.call(null,b,this)};
Xf.prototype[wa]=function(){return Ib(this)};Za._=function(a,b){return a===b};var ac=function ac(a){switch(arguments.length){case 0:return ac.F();case 1:return ac.g(arguments[0]);case 2:return ac.h(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ac.J(arguments[0],arguments[1],new N(c.slice(2),0,null))}};ac.F=function(){return bc};ac.g=function(a){return a};ac.h=function(a,b){return null!=a?Ca(a,b):new cc(null,b,null,1,null)};
ac.J=function(a,b,c){for(;;)if(v(c))a=ac.h(a,b),b=O(c),c=R(c);else return ac.h(a,b)};ac.X=function(a){var b=O(a),c=R(a);a=O(c);c=R(c);return this.J(b,a,c)};ac.Y=2;function Mf(a){return null==a?null:null!=a&&(a.j&4||u===a.Bb)?a.W(null):(null!=a?a.j&4||u===a.Bb||(a.j?0:w(za,a)):w(za,a))?Aa(a):null}
function U(a){if(null!=a)if(null!=a&&(a.j&2||u===a.zb))a=a.V(null);else if(Array.isArray(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.j&8388608||u===a.Lb))a:{a=M(a);for(var b=0;;){if(Ub(a)){a=b+ya(a);break a}a=R(a);b+=1}}else a=ya(a);else a=0;return a}function dc(a,b,c){for(;;){if(null==a)return c;if(0===b)return M(a)?O(a):c;if(Vb(a))return D(a,b,c);if(M(a))a=R(a),--b;else return c}}
function Xb(a){switch(arguments.length){case 2:return Wb(arguments[0],arguments[1]);case 3:return X(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}
function Wb(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.j&16||u===a.sb))return a.T(null,b);if(Array.isArray(a)){if(-1<b&&b<a.length)return a[b|0];throw Error("Index out of bounds");}if("string"===typeof a){if(-1<b&&b<a.length)return a.charAt(b|0);throw Error("Index out of bounds");}if(null!=a&&(a.j&64||u===a.Za)||null!=a&&(a.j&16777216||u===a.tb)){if(0>b)throw Error("Index out of bounds");a:for(;;){if(null==a)throw Error("Index out of bounds");
if(0===b){if(M(a)){a=O(a);break a}throw Error("Index out of bounds");}if(Vb(a)){a=D(a,b);break a}if(M(a))a=R(a),--b;else throw Error("Index out of bounds");}return a}if(w(Da,a))return D(a,b);throw Error(["nth not supported on this type ",z.g(va(null==a?null:a.constructor))].join(""));}
function X(a,b,c){if("number"!==typeof b)throw Error("Index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.j&16||u===a.sb))return a.la(null,b,c);if(Array.isArray(a))return-1<b&&b<a.length?a[b|0]:c;if("string"===typeof a)return-1<b&&b<a.length?a.charAt(b|0):c;if(null!=a&&(a.j&64||u===a.Za)||null!=a&&(a.j&16777216||u===a.tb))return 0>b?c:dc(a,b,c);if(w(Da,a))return D(a,b,c);throw Error(["nth not supported on this type ",z.g(va(null==a?null:a.constructor))].join(""));}
var I=function I(a){switch(arguments.length){case 2:return I.h(arguments[0],arguments[1]);case 3:return I.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};I.h=function(a,b){return null==a?null:null!=a&&(a.j&256||u===a.Fb)?a.ka(null,b):Array.isArray(a)?null!=b&&b<a.length?a[b|0]:null:"string"===typeof a?null!=b&&-1<b&&b<a.length?a.charAt(b|0):null:w(Ga,a)?Ha(a,b):null};
I.l=function(a,b,c){return null!=a?null!=a&&(a.j&256||u===a.Fb)?a.H(null,b,c):Array.isArray(a)?null!=b&&-1<b&&b<a.length?a[b|0]:c:"string"===typeof a?null!=b&&-1<b&&b<a.length?a.charAt(b|0):c:w(Ga,a)?Ha(a,b,c):c:c};I.Y=3;var ec=function ec(a){switch(arguments.length){case 3:return ec.l(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ec.J(arguments[0],arguments[1],arguments[2],new N(c.slice(3),0,null))}};
ec.l=function(a,b,c){return null!=a&&(a.j&512||u===a.yb)?a.xa(null,b,c):null!=a?La(a,b,c):fc([b,c])};ec.J=function(a,b,c,d){for(;;)if(a=ec.l(a,b,c),v(d))b=O(d),c=O(R(d)),d=R(R(d));else return a};ec.X=function(a){var b=O(a),c=R(a);a=O(c);var d=R(c);c=O(d);d=R(d);return this.J(b,a,c,d)};ec.Y=3;function gc(a,b){this.s=a;this.u=b;this.j=393217;this.A=0}g=gc.prototype;g.P=function(){return this.u};g.R=function(a,b){return new gc(this.s,b)};
g.call=function(){function a(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf,lf){Pd=this;return hc.Eb?hc.Eb(Pd.s,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf,lf):hc.call(null,Pd.s,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf,lf)}function b(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf){Pd=this;return Pd.s.La?Pd.s.La(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,
ef,gf)}function c(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef){Pd=this;return Pd.s.Ka?Pd.s.Ka(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef)}function d(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf){Pd=this;return Pd.s.Ja?Pd.s.Ja(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf)}function e(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,
$e,af,bf){Pd=this;return Pd.s.Ia?Pd.s.Ia(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf)}function f(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af){Pd=this;return Pd.s.Ha?Pd.s.Ha(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af)}function h(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e){Pd=this;return Pd.s.Ga?Pd.s.Ga(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e):Pd.s.call(null,ia,
Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e)}function k(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze){Pd=this;return Pd.s.Fa?Pd.s.Fa(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze)}function l(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye){Pd=this;return Pd.s.Ea?Pd.s.Ea(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye)}function m(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe){Pd=this;return Pd.s.Da?Pd.s.Da(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe):
Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe)}function n(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We){Pd=this;return Pd.s.Ca?Pd.s.Ca(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We)}function p(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve){Pd=this;return Pd.s.Qa?Pd.s.Qa(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve)}function q(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue){Pd=this;return Pd.s.Pa?Pd.s.Pa(ia,Ea,Ia,Wa,Re,Se,Te,Ue):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue)}function t(Pd,ia,Ea,
Ia,Wa,Re,Se,Te){Pd=this;return Pd.s.Oa?Pd.s.Oa(ia,Ea,Ia,Wa,Re,Se,Te):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te)}function y(Pd,ia,Ea,Ia,Wa,Re,Se){Pd=this;return Pd.s.Na?Pd.s.Na(ia,Ea,Ia,Wa,Re,Se):Pd.s.call(null,ia,Ea,Ia,Wa,Re,Se)}function A(Pd,ia,Ea,Ia,Wa,Re){Pd=this;return Pd.s.ua?Pd.s.ua(ia,Ea,Ia,Wa,Re):Pd.s.call(null,ia,Ea,Ia,Wa,Re)}function C(Pd,ia,Ea,Ia,Wa){Pd=this;return Pd.s.fa?Pd.s.fa(ia,Ea,Ia,Wa):Pd.s.call(null,ia,Ea,Ia,Wa)}function F(Pd,ia,Ea,Ia){Pd=this;return Pd.s.l?Pd.s.l(ia,Ea,Ia):Pd.s.call(null,
ia,Ea,Ia)}function J(Pd,ia,Ea){Pd=this;return Pd.s.h?Pd.s.h(ia,Ea):Pd.s.call(null,ia,Ea)}function Q(Pd,ia){Pd=this;return Pd.s.g?Pd.s.g(ia):Pd.s.call(null,ia)}function ea(Pd){Pd=this;return Pd.s.F?Pd.s.F():Pd.s.call(null)}var ma=null;ma=function(Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf,lf){switch(arguments.length){case 1:return ea.call(this,Pd);case 2:return Q.call(this,Pd,ia);case 3:return J.call(this,Pd,ia,Ea);case 4:return F.call(this,Pd,ia,Ea,Ia);case 5:return C.call(this,
Pd,ia,Ea,Ia,Wa);case 6:return A.call(this,Pd,ia,Ea,Ia,Wa,Re);case 7:return y.call(this,Pd,ia,Ea,Ia,Wa,Re,Se);case 8:return t.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te);case 9:return q.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue);case 10:return p.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve);case 11:return n.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We);case 12:return m.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe);case 13:return l.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye);case 14:return k.call(this,Pd,ia,Ea,Ia,
Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze);case 15:return h.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e);case 16:return f.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af);case 17:return e.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf);case 18:return d.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf);case 19:return c.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef);case 20:return b.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,
bf,cf,ef,gf);case 21:return this.s.Ma?this.s.Ma(ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf):this.s.call(null,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf);case 22:return a.call(this,Pd,ia,Ea,Ia,Wa,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,ef,gf,hf,lf)}throw Error("Invalid arity: "+(arguments.length-1));};ma.g=ea;ma.h=Q;ma.l=J;ma.fa=F;ma.ua=C;ma.Na=A;ma.Oa=y;ma.Pa=t;ma.Qa=q;ma.Ca=p;ma.Da=n;ma.Ea=m;ma.Fa=l;ma.Ga=k;ma.Ha=h;ma.Ia=f;ma.Ja=e;ma.Ka=d;ma.La=c;ma.Ma=b;ma.Eb=a;
return ma}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.F=function(){return this.s.F?this.s.F():this.s.call(null)};g.g=function(a){return this.s.g?this.s.g(a):this.s.call(null,a)};g.h=function(a,b){return this.s.h?this.s.h(a,b):this.s.call(null,a,b)};g.l=function(a,b,c){return this.s.l?this.s.l(a,b,c):this.s.call(null,a,b,c)};
g.fa=function(a,b,c,d){return this.s.fa?this.s.fa(a,b,c,d):this.s.call(null,a,b,c,d)};g.ua=function(a,b,c,d,e){return this.s.ua?this.s.ua(a,b,c,d,e):this.s.call(null,a,b,c,d,e)};g.Na=function(a,b,c,d,e,f){return this.s.Na?this.s.Na(a,b,c,d,e,f):this.s.call(null,a,b,c,d,e,f)};g.Oa=function(a,b,c,d,e,f,h){return this.s.Oa?this.s.Oa(a,b,c,d,e,f,h):this.s.call(null,a,b,c,d,e,f,h)};g.Pa=function(a,b,c,d,e,f,h,k){return this.s.Pa?this.s.Pa(a,b,c,d,e,f,h,k):this.s.call(null,a,b,c,d,e,f,h,k)};
g.Qa=function(a,b,c,d,e,f,h,k,l){return this.s.Qa?this.s.Qa(a,b,c,d,e,f,h,k,l):this.s.call(null,a,b,c,d,e,f,h,k,l)};g.Ca=function(a,b,c,d,e,f,h,k,l,m){return this.s.Ca?this.s.Ca(a,b,c,d,e,f,h,k,l,m):this.s.call(null,a,b,c,d,e,f,h,k,l,m)};g.Da=function(a,b,c,d,e,f,h,k,l,m,n){return this.s.Da?this.s.Da(a,b,c,d,e,f,h,k,l,m,n):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n)};g.Ea=function(a,b,c,d,e,f,h,k,l,m,n,p){return this.s.Ea?this.s.Ea(a,b,c,d,e,f,h,k,l,m,n,p):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p)};
g.Fa=function(a,b,c,d,e,f,h,k,l,m,n,p,q){return this.s.Fa?this.s.Fa(a,b,c,d,e,f,h,k,l,m,n,p,q):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q)};g.Ga=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t){return this.s.Ga?this.s.Ga(a,b,c,d,e,f,h,k,l,m,n,p,q,t):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t)};g.Ha=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y){return this.s.Ha?this.s.Ha(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y)};
g.Ia=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A){return this.s.Ia?this.s.Ia(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A)};g.Ja=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C){return this.s.Ja?this.s.Ja(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C)};g.Ka=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F){return this.s.Ka?this.s.Ka(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F)};
g.La=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J){return this.s.La?this.s.La(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J)};g.Ma=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q){return this.s.Ma?this.s.Ma(a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q):this.s.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q)};function ic(a,b){return"function"===typeof a?new gc(a,b):null==a?null:Ta(a,b)}
function jc(a){var b=null!=a;return(b?null!=a?a.j&131072||u===a.Ib||(a.j?0:w(Ra,a)):w(Ra,a):b)?Sa(a):null}function Nf(a){return null==a?!1:null!=a?a.j&8||u===a.Sb?!0:a.j?!1:w(Ba,a):w(Ba,a)}function kc(a){return null!=a?a.j&16777216||u===a.tb?!0:a.j?!1:w(cb,a):w(cb,a)}function lc(a){return null==a?!1:null!=a?a.j&1024||u===a.Yb?!0:a.j?!1:w(Ma,a):w(Ma,a)}function mc(a){return null!=a?a.j&67108864||u===a.$b?!0:a.j?!1:w(eb,a):w(eb,a)}
function nc(a){return null!=a?a.j&16384||u===a.ac?!0:a.j?!1:w(Pa,a):w(Pa,a)}function oc(a){return null!=a?a.A&512||u===a.Rb?!0:!1:!1}function pc(a,b,c,d,e){for(;;){if(0===e)return c;c[d]=a[b];d+=1;--e;b+=1}}var qc={};function rc(a){return null==a?!1:!1===a?!1:!0}function Of(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)}function sc(a,b){return null!=a&&(a.j&512||u===a.yb)?a.Ua(null,b):w(Ja,a)?Ka(a,b):I.l(a,b,qc)===qc?!1:!0}
function Yf(a){switch(arguments.length){case 2:return tc(arguments[0],arguments[1]);case 3:return wc(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}function tc(a,b){var c=M(b);return c?(b=O(c),c=R(c),uc?uc(a,b,c):vc.call(null,a,b,c)):a.F?a.F():a.call(null)}function wc(a,b,c){for(c=M(c);;)if(c){var d=O(c);b=a.h?a.h(b,d):a.call(null,b,d);if(Pb(b))return Qa(b);c=R(c)}else return b}
function xc(a,b){a=pb(a);if(v(a.ia()))for(var c=a.next();;)if(a.ia()){var d=a.next();c=b.h?b.h(c,d):b.call(null,c,d);if(Pb(c))return Qa(c)}else return c;else return b.F?b.F():b.call(null)}function yc(a,b,c){for(a=pb(a);;)if(a.ia()){var d=a.next();c=b.h?b.h(c,d):b.call(null,c,d);if(Pb(c))return Qa(c)}else return c}
function vc(a){switch(arguments.length){case 2:var b=arguments[0],c=arguments[1];return null!=c&&(c.j&524288||u===c.Kb)?c.aa(null,b):Array.isArray(c)?Rb(c,b):"string"===typeof c?Rb(c,b):w(Ua,c)?Va(c,b):Eb(c)?xc(c,b):tc(b,c);case 3:return uc(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}
function uc(a,b,c){return null!=c&&(c.j&524288||u===c.Kb)?c.ba(null,a,b):Array.isArray(c)?Sb(c,a,b):"string"===typeof c?Sb(c,a,b):w(Ua,c)?Va(c,a,b):Eb(c)?yc(c,a,b):wc(a,b,c)}function zc(a,b){return null!=b?Ya(b,a):!0}function Ac(a){return a}function Pf(a,b,c,d){a=a.g?a.g(b):a.call(null,b);c=uc(a,c,d);return a.g?a.g(c):a.call(null,c)}function Bc(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}
function Cc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}var z=function z(a){switch(arguments.length){case 0:return z.F();case 1:return z.g(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return z.J(arguments[0],new N(c.slice(1),0,null))}};z.F=function(){return""};z.g=function(a){return null==a?"":[a].join("")};z.J=function(a,b){for(a=new da(z.g(a));;)if(v(b))a=a.append(z.g(O(b))),b=R(b);else return a.toString()};
z.X=function(a){var b=O(a);a=R(a);return this.J(b,a)};z.Y=1;function Zb(a,b){if(kc(b))if(Ub(a)&&Ub(b)&&U(a)!==U(b))a=!1;else a:for(a=M(a),b=M(b);;){if(null==a){a=null==b;break a}if(null!=b&&S.h(O(a),O(b)))a=R(a),b=R(b);else{a=!1;break a}}else a=null;return rc(a)}function cc(a,b,c,d,e){this.u=a;this.first=b;this.wa=c;this.count=d;this.v=e;this.j=65937646;this.A=8192}g=cc.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,this.count)}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){return 1===this.count?null:this.wa};g.V=function(){return this.count};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};
g.W=function(){return Ta(P,this.u)};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return this.first};g.ga=function(){return 1===this.count?P:this.wa};g.I=function(){return this};g.R=function(a,b){return b===this.u?this:new cc(b,this.first,this.wa,this.count,this.v)};g.U=function(a,b){return new cc(this.u,b,this,this.count+1,null)};cc.prototype[wa]=function(){return Ib(this)};function Dc(a){this.u=a;this.j=65937614;this.A=8192}g=Dc.prototype;
g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){return null};g.V=function(){return 0};g.O=function(){return Lb};g.K=function(a,b){return(null!=b?b.j&33554432||u===b.Xb||(b.j?0:w(db,b)):w(db,b))||kc(b)?null==M(b):!1};g.W=function(){return this};
g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return null};g.ga=function(){return P};g.I=function(){return null};g.R=function(a,b){return b===this.u?this:new Dc(b)};g.U=function(a,b){return new cc(this.u,b,null,1,null)};var P=new Dc(null);Dc.prototype[wa]=function(){return Ib(this)};function Zf(a){return(null!=a?a.j&134217728||u===a.fc||(a.j?0:w(If,a)):w(If,a))?(a=Jf(a))?a:P:uc(ac,P,a)}
function Ec(a,b,c,d){this.u=a;this.first=b;this.wa=c;this.v=d;this.j=65929452;this.A=8192}g=Ec.prototype;g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){return null==this.wa?null:M(this.wa)};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};
g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return this.first};g.ga=function(){return null==this.wa?P:this.wa};g.I=function(){return this};g.R=function(a,b){return b===this.u?this:new Ec(b,this.first,this.wa,this.v)};g.U=function(a,b){return new Ec(null,b,this,null)};Ec.prototype[wa]=function(){return Ib(this)};function W(a,b){return null==b?new cc(null,a,null,1,null):null!=b&&(b.j&64||u===b.Za)?new Ec(null,a,b,null):new Ec(null,a,M(b),null)}
function K(a,b,c,d){this.fb=a;this.name=b;this.va=c;this.Ta=d;this.j=2153775105;this.A=4096}g=K.prototype;g.toString=function(){return[":",z.g(this.va)].join("")};g.K=function(a,b){return b instanceof K?this.va===b.va:!1};g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return I.h(c,this);case 3:return I.l(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return I.h(c,this)};a.l=function(b,c,d){return I.l(c,this,d)};return a}();
g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return I.h(a,this)};g.h=function(a,b){return I.l(a,this,b)};g.O=function(){var a=this.Ta;return null!=a?a:this.Ta=a=Bb(wb(this.name),zb(this.fb))+2654435769|0};g.M=function(a,b){return H(b,[":",z.g(this.va)].join(""))};
function Fc(a){if(null!=a&&(a.A&4096||u===a.Jb))return a.fb;throw Error(["Doesn't support namespace: ",z.g(a)].join(""));}var Gc=function Gc(a){switch(arguments.length){case 1:return Gc.g(arguments[0]);case 2:return Gc.h(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}};
Gc.g=function(a){if(a instanceof K)return a;if(a instanceof Cb)return new K(Fc(a),Hc.g?Hc.g(a):Hc.call(null,a),a.Aa,null);if(S.h("/",a))return new K(null,a,a,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new K(b[0],b[1],a,null):new K(null,b[0],a,null)}return null};
Gc.h=function(a,b){a=a instanceof K?Hc.g?Hc.g(a):Hc.call(null,a):a instanceof Cb?Hc.g?Hc.g(a):Hc.call(null,a):a;b=b instanceof K?Hc.g?Hc.g(b):Hc.call(null,b):b instanceof Cb?Hc.g?Hc.g(b):Hc.call(null,b):b;return new K(a,b,[v(a)?[z.g(a),"/"].join(""):null,z.g(b)].join(""),null)};Gc.Y=2;function Ic(a,b,c){this.u=a;this.ab=b;this.C=null;this.v=c;this.j=32374988;this.A=1}g=Ic.prototype;g.toString=function(){return rb(this)};
function Jc(a){null!=a.ab&&(a.C=a.ab.F?a.ab.F():a.ab.call(null),a.ab=null);return a.C}g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){this.I(null);return null==this.C?null:R(this.C)};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};g.W=function(){return Ta(P,this.u)};
g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){this.I(null);return null==this.C?null:O(this.C)};g.ga=function(){this.I(null);return null!=this.C?Gb(this.C):P};g.I=function(){Jc(this);if(null==this.C)return null;for(var a=this.C;;)if(a instanceof Ic)a=Jc(a);else return this.C=a,M(this.C)};g.R=function(a,b){var c=this;return b===this.u?c:new Ic(b,function(){return c.I(null)},this.v)};g.U=function(a,b){return W(b,this)};Ic.prototype[wa]=function(){return Ib(this)};
function Kc(a){this.mb=a;this.end=0;this.j=2;this.A=0}Kc.prototype.add=function(a){this.mb[this.end]=a;return this.end+=1};Kc.prototype.ta=function(){var a=new Lc(this.mb,0,this.end);this.mb=null;return a};Kc.prototype.V=function(){return this.end};function Lc(a,b,c){this.i=a;this.S=b;this.end=c;this.j=524306;this.A=0}g=Lc.prototype;g.V=function(){return this.end-this.S};g.T=function(a,b){return this.i[this.S+b]};g.la=function(a,b,c){return 0<=b&&b<this.end-this.S?this.i[this.S+b]:c};
g.qb=function(){if(this.S===this.end)throw Error("-drop-first of empty chunk");return new Lc(this.i,this.S+1,this.end)};g.aa=function(a,b){return Tb(this.i,b,this.i[this.S],this.S+1)};g.ba=function(a,b,c){return Tb(this.i,b,c,this.S)};function Mc(a,b,c,d){this.ta=a;this.oa=b;this.u=c;this.v=d;this.j=31850732;this.A=1536}g=Mc.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){return 1<ya(this.ta)?new Mc(lb(this.ta),this.oa,null,null):null==this.oa?null:bb(this.oa)};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};
g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};g.ca=function(){return D(this.ta,0)};g.ga=function(){return 1<ya(this.ta)?new Mc(lb(this.ta),this.oa,null,null):null==this.oa?P:this.oa};g.I=function(){return this};g.nb=function(){return this.ta};g.gb=function(){return null==this.oa?P:this.oa};g.R=function(a,b){return b===this.u?this:new Mc(this.ta,this.oa,b,this.v)};g.U=function(a,b){return W(b,this)};g.rb=function(){return null==this.oa?null:this.oa};Mc.prototype[wa]=function(){return Ib(this)};
function Nc(a,b){return 0===ya(a)?b:new Mc(a,b,null,null)}function Oc(a,b){a.add(b)}function Pc(a,b){if(Ub(b))return U(b);var c=0;for(b=M(b);;)if(null!=b&&c<a)c+=1,b=R(b);else return c}
var Qc=function Qc(a){if(null==a)return null;var c=R(a);return null==c?M(O(a)):W(O(a),Qc.g?Qc.g(c):Qc.call(null,c))},mf=function mf(a){switch(arguments.length){case 0:return mf.F();case 1:return mf.g(arguments[0]);case 2:return mf.h(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return mf.J(arguments[0],arguments[1],new N(c.slice(2),0,null))}};mf.F=function(){return new Ic(null,function(){return null},null)};
mf.g=function(a){return new Ic(null,function(){return a},null)};mf.h=function(a,b){return new Ic(null,function(){var c=M(a);return c?oc(c)?Nc(mb(c),mf.h(nb(c),b)):W(O(c),mf.h(Gb(c),b)):b},null)};mf.J=function(a,b,c){return function h(e,f){return new Ic(null,function(){var k=M(e);return k?oc(k)?Nc(mb(k),h(nb(k),f)):W(O(k),h(Gb(k),f)):v(f)?h(O(f),R(f)):null},null)}(mf.h(a,b),c)};mf.X=function(a){var b=O(a),c=R(a);a=O(c);c=R(c);return this.J(b,a,c)};mf.Y=2;
function Rc(a,b,c){var d=M(c);if(0===b)return a.F?a.F():a.call(null);c=E(d);var e=G(d);if(1===b)return a.g?a.g(c):a.call(null,c);d=E(e);var f=G(e);if(2===b)return a.h?a.h(c,d):a.call(null,c,d);e=E(f);var h=G(f);if(3===b)return a.l?a.l(c,d,e):a.call(null,c,d,e);f=E(h);var k=G(h);if(4===b)return a.fa?a.fa(c,d,e,f):a.call(null,c,d,e,f);h=E(k);var l=G(k);if(5===b)return a.ua?a.ua(c,d,e,f,h):a.call(null,c,d,e,f,h);k=E(l);var m=G(l);if(6===b)return a.Na?a.Na(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);l=E(m);
var n=G(m);if(7===b)return a.Oa?a.Oa(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);m=E(n);var p=G(n);if(8===b)return a.Pa?a.Pa(c,d,e,f,h,k,l,m):a.call(null,c,d,e,f,h,k,l,m);n=E(p);var q=G(p);if(9===b)return a.Qa?a.Qa(c,d,e,f,h,k,l,m,n):a.call(null,c,d,e,f,h,k,l,m,n);p=E(q);var t=G(q);if(10===b)return a.Ca?a.Ca(c,d,e,f,h,k,l,m,n,p):a.call(null,c,d,e,f,h,k,l,m,n,p);q=E(t);var y=G(t);if(11===b)return a.Da?a.Da(c,d,e,f,h,k,l,m,n,p,q):a.call(null,c,d,e,f,h,k,l,m,n,p,q);t=E(y);var A=G(y);if(12===b)return a.Ea?
a.Ea(c,d,e,f,h,k,l,m,n,p,q,t):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t);y=E(A);var C=G(A);if(13===b)return a.Fa?a.Fa(c,d,e,f,h,k,l,m,n,p,q,t,y):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y);A=E(C);var F=G(C);if(14===b)return a.Ga?a.Ga(c,d,e,f,h,k,l,m,n,p,q,t,y,A):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A);C=E(F);var J=G(F);if(15===b)return a.Ha?a.Ha(c,d,e,f,h,k,l,m,n,p,q,t,y,A,C):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C);F=E(J);var Q=G(J);if(16===b)return a.Ia?a.Ia(c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F):a.call(null,
c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F);J=E(Q);var ea=G(Q);if(17===b)return a.Ja?a.Ja(c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J);Q=E(ea);var ma=G(ea);if(18===b)return a.Ka?a.Ka(c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q);ea=E(ma);ma=G(ma);if(19===b)return a.La?a.La(c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea);var Pd=E(ma);G(ma);if(20===b)return a.Ma?a.Ma(c,d,e,f,h,k,l,m,n,p,q,t,
y,A,C,F,J,Q,ea,Pd):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea,Pd);throw Error("Only up to 20 arguments supported on functions");}function Sc(a){return null!=a&&(a.j&128||u===a.Ya)?a.Z():M(Gb(a))}function Tc(a,b,c){return null==c?a.g?a.g(b):a.call(a,b):Uc(a,b,E(c),Sc(c))}function Uc(a,b,c,d){return null==d?a.h?a.h(b,c):a.call(a,b,c):Vc(a,b,c,E(d),Sc(d))}function Vc(a,b,c,d,e){return null==e?a.l?a.l(b,c,d):a.call(a,b,c,d):Wc(a,b,c,d,E(e),Sc(e))}
function Wc(a,b,c,d,e,f){if(null==f)return a.fa?a.fa(b,c,d,e):a.call(a,b,c,d,e);var h=E(f),k=R(f);if(null==k)return a.ua?a.ua(b,c,d,e,h):a.call(a,b,c,d,e,h);f=E(k);var l=R(k);if(null==l)return a.Na?a.Na(b,c,d,e,h,f):a.call(a,b,c,d,e,h,f);k=E(l);var m=R(l);if(null==m)return a.Oa?a.Oa(b,c,d,e,h,f,k):a.call(a,b,c,d,e,h,f,k);l=E(m);var n=R(m);if(null==n)return a.Pa?a.Pa(b,c,d,e,h,f,k,l):a.call(a,b,c,d,e,h,f,k,l);m=E(n);var p=R(n);if(null==p)return a.Qa?a.Qa(b,c,d,e,h,f,k,l,m):a.call(a,b,c,d,e,h,f,k,l,
m);n=E(p);var q=R(p);if(null==q)return a.Ca?a.Ca(b,c,d,e,h,f,k,l,m,n):a.call(a,b,c,d,e,h,f,k,l,m,n);p=E(q);var t=R(q);if(null==t)return a.Da?a.Da(b,c,d,e,h,f,k,l,m,n,p):a.call(a,b,c,d,e,h,f,k,l,m,n,p);q=E(t);var y=R(t);if(null==y)return a.Ea?a.Ea(b,c,d,e,h,f,k,l,m,n,p,q):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q);t=E(y);var A=R(y);if(null==A)return a.Fa?a.Fa(b,c,d,e,h,f,k,l,m,n,p,q,t):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t);y=E(A);var C=R(A);if(null==C)return a.Ga?a.Ga(b,c,d,e,h,f,k,l,m,n,p,q,t,y):a.call(a,b,
c,d,e,h,f,k,l,m,n,p,q,t,y);A=E(C);var F=R(C);if(null==F)return a.Ha?a.Ha(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t,y,A);C=E(F);var J=R(F);if(null==J)return a.Ia?a.Ia(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C);F=E(J);var Q=R(J);if(null==Q)return a.Ja?a.Ja(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F);J=E(Q);var ea=R(Q);if(null==ea)return a.Ka?a.Ka(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J):a.call(a,b,c,d,e,h,f,k,l,m,
n,p,q,t,y,A,C,F,J);Q=E(ea);var ma=R(ea);if(null==ma)return a.La?a.La(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J,Q):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J,Q);ea=E(ma);ma=R(ma);if(null==ma)return a.Ma?a.Ma(b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea):a.call(a,b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea);b=[b,c,d,e,h,f,k,l,m,n,p,q,t,y,A,C,F,J,Q,ea];for(c=ma;;)if(c)b.push(E(c)),c=R(c);else break;return a.apply(a,b)}
function hc(a){switch(arguments.length){case 2:return Xc(arguments[0],arguments[1]);case 3:return Yc(arguments[0],arguments[1],arguments[2]);case 4:var b=arguments[0];var c=arguments[1],d=arguments[2],e=arguments[3];b.X?(c=W(c,W(d,e)),d=b.Y,e=2+Pc(d-1,e),b=e<=d?Rc(b,e,c):b.X(c)):b=Uc(b,c,d,M(e));return b;case 5:return $f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:e=[];b=arguments.length;for(c=0;;)if(c<b)e.push(arguments[c]),c+=1;else break;b=arguments[0];c=arguments[1];
d=arguments[2];var f=arguments[3],h=arguments[4];e=new N(e.slice(5),0,null);b.X?(e=Qc(e),c=W(c,W(d,W(f,W(h,e)))),d=b.Y,e=4+Pc(d-3,e),b=e<=d?Rc(b,e,c):b.X(c)):b=Wc(b,c,d,f,h,Qc(e));return b}}function Xc(a,b){if(a.X){var c=a.Y,d=Pc(c+1,b);return d<=c?Rc(a,d,b):a.X(b)}b=M(b);return null==b?a.F?a.F():a.call(a):Tc(a,E(b),Sc(b))}function Yc(a,b,c){if(a.X){b=W(b,c);var d=a.Y;c=Pc(d,c)+1;return c<=d?Rc(a,c,b):a.X(b)}return Tc(a,b,M(c))}
function $f(a,b,c,d,e){return a.X?(b=W(b,W(c,W(d,e))),c=a.Y,e=3+Pc(c-2,e),e<=c?Rc(a,e,b):a.X(b)):Vc(a,b,c,d,M(e))}function Zc(a){if(null!=a&&(a.j&64||u===a.Za))if(R(a)){a:{var b=[];for(a=M(a);;)if(null!=a)b.push(O(a)),a=R(a);else break a}b=fc(b)}else b=M(a)?O(a):$c;else b=a;return b}
function ad(){if("undefined"===typeof fa||"undefined"===typeof ha||"undefined"===typeof df)df=function(a){this.Ob=a;this.j=393216;this.A=0},df.prototype.R=function(a,b){return new df(b)},df.prototype.P=function(){return this.Ob},df.prototype.ia=function(){return!1},df.prototype.next=function(){return Error("No such element")},df.prototype.remove=function(){return Error("Unsupported operation")},df.vb=!0,df.jb="cljs.core/t_cljs$core14327",df.Mb=function(a){return H(a,"cljs.core/t_cljs$core14327")};
return new df($c)}function bd(a,b){for(;;){if(null==M(b))return!0;var c=O(b);c=a.g?a.g(c):a.call(null,c);if(v(c))b=R(b);else return!1}}
var ag=function ag(a){switch(arguments.length){case 0:return ag.F();case 1:return ag.g(arguments[0]);case 2:return ag.h(arguments[0],arguments[1]);case 3:return ag.l(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ag.J(arguments[0],arguments[1],arguments[2],new N(c.slice(3),0,null))}};ag.F=function(){return Ac};ag.g=function(a){return a};
ag.h=function(a,b){return function(){function c(l,m,n){l=b.l?b.l(l,m,n):b.call(null,l,m,n);return a.g?a.g(l):a.call(null,l)}function d(l,m){l=b.h?b.h(l,m):b.call(null,l,m);return a.g?a.g(l):a.call(null,l)}function e(l){l=b.g?b.g(l):b.call(null,l);return a.g?a.g(l):a.call(null,l)}function f(){var l=b.F?b.F():b.call(null);return a.g?a.g(l):a.call(null,l)}var h=null,k=function(){function l(n,p,q,t){var y=null;if(3<arguments.length){y=0;for(var A=Array(arguments.length-3);y<A.length;)A[y]=arguments[y+
3],++y;y=new N(A,0,null)}return m.call(this,n,p,q,y)}function m(n,p,q,t){n=$f(b,n,p,q,t);return a.g?a.g(n):a.call(null,n)}l.Y=3;l.X=function(n){var p=O(n);n=R(n);var q=O(n);n=R(n);var t=O(n);n=Gb(n);return m(p,q,t,n)};l.J=m;return l}();h=function(l,m,n,p){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,l);case 2:return d.call(this,l,m);case 3:return c.call(this,l,m,n);default:var q=null;if(3<arguments.length){q=0;for(var t=Array(arguments.length-3);q<t.length;)t[q]=arguments[q+
3],++q;q=new N(t,0,null)}return k.J(l,m,n,q)}throw Error("Invalid arity: "+arguments.length);};h.Y=3;h.X=k.X;h.F=f;h.g=e;h.h=d;h.l=c;h.J=k.J;return h}()};
ag.l=function(a,b,c){return function(){function d(m,n,p){m=c.l?c.l(m,n,p):c.call(null,m,n,p);m=b.g?b.g(m):b.call(null,m);return a.g?a.g(m):a.call(null,m)}function e(m,n){m=c.h?c.h(m,n):c.call(null,m,n);m=b.g?b.g(m):b.call(null,m);return a.g?a.g(m):a.call(null,m)}function f(m){m=c.g?c.g(m):c.call(null,m);m=b.g?b.g(m):b.call(null,m);return a.g?a.g(m):a.call(null,m)}function h(){var m=c.F?c.F():c.call(null);m=b.g?b.g(m):b.call(null,m);return a.g?a.g(m):a.call(null,m)}var k=null,l=function(){function m(p,
q,t,y){var A=null;if(3<arguments.length){A=0;for(var C=Array(arguments.length-3);A<C.length;)C[A]=arguments[A+3],++A;A=new N(C,0,null)}return n.call(this,p,q,t,A)}function n(p,q,t,y){p=$f(c,p,q,t,y);p=b.g?b.g(p):b.call(null,p);return a.g?a.g(p):a.call(null,p)}m.Y=3;m.X=function(p){var q=O(p);p=R(p);var t=O(p);p=R(p);var y=O(p);p=Gb(p);return n(q,t,y,p)};m.J=n;return m}();k=function(m,n,p,q){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,m);case 2:return e.call(this,
m,n);case 3:return d.call(this,m,n,p);default:var t=null;if(3<arguments.length){t=0;for(var y=Array(arguments.length-3);t<y.length;)y[t]=arguments[t+3],++t;t=new N(y,0,null)}return l.J(m,n,p,t)}throw Error("Invalid arity: "+arguments.length);};k.Y=3;k.X=l.X;k.F=h;k.g=f;k.h=e;k.l=d;k.J=l.J;return k}()};
ag.J=function(a,b,c,d){var e=Zf(W(a,W(b,W(c,d))));return function(){function f(k){var l=null;if(0<arguments.length){l=0;for(var m=Array(arguments.length-0);l<m.length;)m[l]=arguments[l+0],++l;l=new N(m,0,null)}return h.call(this,l)}function h(k){k=Xc(O(e),k);for(var l=R(e);;)if(l){var m=O(l);k=m.g?m.g(k):m.call(null,k);l=R(l)}else return k}f.Y=0;f.X=function(k){k=M(k);return h(k)};f.J=h;return f}()};ag.X=function(a){var b=O(a),c=R(a);a=O(c);var d=R(c);c=O(d);d=R(d);return this.J(b,a,c,d)};ag.Y=3;
var Y=function Y(a){switch(arguments.length){case 1:return Y.g(arguments[0]);case 2:return Y.h(arguments[0],arguments[1]);case 3:return Y.l(arguments[0],arguments[1],arguments[2]);case 4:return Y.fa(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Y.J(arguments[0],arguments[1],arguments[2],arguments[3],new N(c.slice(4),0,null))}};
Y.g=function(a){return function(b){return function(){function c(k,l){l=a.g?a.g(l):a.call(null,l);return b.h?b.h(k,l):b.call(null,k,l)}function d(k){return b.g?b.g(k):b.call(null,k)}function e(){return b.F?b.F():b.call(null)}var f=null,h=function(){function k(m,n,p){var q=null;if(2<arguments.length){q=0;for(var t=Array(arguments.length-2);q<t.length;)t[q]=arguments[q+2],++q;q=new N(t,0,null)}return l.call(this,m,n,q)}function l(m,n,p){n=Yc(a,n,p);return b.h?b.h(m,n):b.call(null,m,n)}k.Y=2;k.X=function(m){var n=
O(m);m=R(m);var p=O(m);m=Gb(m);return l(n,p,m)};k.J=l;return k}();f=function(k,l,m){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,k);case 2:return c.call(this,k,l);default:var n=null;if(2<arguments.length){n=0;for(var p=Array(arguments.length-2);n<p.length;)p[n]=arguments[n+2],++n;n=new N(p,0,null)}return h.J(k,l,n)}throw Error("Invalid arity: "+arguments.length);};f.Y=2;f.X=h.X;f.F=e;f.g=d;f.h=c;f.J=h.J;return f}()}};
Y.h=function(a,b){return new Ic(null,function(){var c=M(b);if(c){if(oc(c)){for(var d=mb(c),e=U(d),f=new Kc(Array(e)),h=0;;)if(h<e)Oc(f,function(){var k=D(d,h);return a.g?a.g(k):a.call(null,k)}()),h+=1;else break;return Nc(f.ta(),Y.h(a,nb(c)))}return W(function(){var k=O(c);return a.g?a.g(k):a.call(null,k)}(),Y.h(a,Gb(c)))}return null},null)};
Y.l=function(a,b,c){return new Ic(null,function(){var d=M(b),e=M(c);if(d&&e){var f=O(d);var h=O(e);f=a.h?a.h(f,h):a.call(null,f,h);d=W(f,Y.l(a,Gb(d),Gb(e)))}else d=null;return d},null)};Y.fa=function(a,b,c,d){return new Ic(null,function(){var e=M(b),f=M(c),h=M(d);if(e&&f&&h){var k=O(e);var l=O(f),m=O(h);k=a.l?a.l(k,l,m):a.call(null,k,l,m);e=W(k,Y.fa(a,Gb(e),Gb(f),Gb(h)))}else e=null;return e},null)};
Y.J=function(a,b,c,d,e){return Y.h(function(f){return Xc(a,f)},function k(h){return new Ic(null,function(){var l=Y.h(M,h);return bd(Ac,l)?W(Y.h(O,l),k(Y.h(Gb,l))):null},null)}(ac.J(e,d,$b([c,b]))))};Y.X=function(a){var b=O(a),c=R(a);a=O(c);var d=R(c);c=O(d);var e=R(d);d=O(e);e=R(e);return this.J(b,a,c,d,e)};Y.Y=4;function Ef(a,b){return Xc(mf,Yc(Y,a,b))}function cd(a,b){return null!=a?null!=a&&(a.A&4||u===a.Tb)?Ta(jb(uc(ib,hb(a),b)),jc(a)):uc(Ca,a,b):uc(ac,a,b)}
function Qf(a,b,c){if(null!=a&&(a.A&4||u===a.Tb)){var d=jc(a);return Pf(b,function(){function e(h){return Ta(jb(h),d)}var f=null;f=function(h,k){switch(arguments.length){case 1:return e.call(this,h);case 2:return ib(h,k)}throw Error("Invalid arity: "+arguments.length);};f.g=e;f.h=function(h,k){return ib(h,k)};return f}(),hb(a),c)}return Pf(b,ac,a,c)}function nf(a,b){return jb(uc(function(c,d){d=a.g?a.g(d):a.call(null,d);return ib(c,d)},hb(bc),b))}function of(a,b){return uc(I,a,b)}
function dd(a,b){this.D=a;this.i=b}function ed(a){return new dd(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function fd(a){a=a.m;return 32>a?0:a-1>>>5<<5}function gd(a,b,c){for(;;){if(0===b)return c;var d=ed(a);d.i[0]=c;c=d;b-=5}}
var hd=function hd(a,b,c,d){var f=new dd(c.D,B(c.i)),h=a.m-1>>>b&31;5===b?f.i[h]=d:(c=c.i[h],null!=c?(b-=5,a=hd.fa?hd.fa(a,b,c,d):hd.call(null,a,b,c,d)):a=gd(null,b-5,d),f.i[h]=a);return f};function id(a,b){if(b>=fd(a))return a.ea;var c=a.root;for(a=a.shift;;)if(0<a){var d=a-5;c=c.i[b>>>a&31];a=d}else return c.i}function jd(a,b){if(0<=b&&b<a.m)b=id(a,b);else throw a=a.m,Error(["No item ",z.g(b)," in vector of length ",z.g(a)].join(""));return b}
var kd=function kd(a,b,c,d,e){var h=new dd(c.D,B(c.i));if(0===b)h.i[d&31]=e;else{var k=d>>>b&31;b-=5;c=c.i[k];a=kd.ua?kd.ua(a,b,c,d,e):kd.call(null,a,b,c,d,e);h.i[k]=a}return h};function ld(a,b,c){this.lb=this.o=0;this.i=a;this.Qb=b;this.start=0;this.end=c}ld.prototype.ia=function(){return this.o<this.end};ld.prototype.next=function(){32===this.o-this.lb&&(this.i=id(this.Qb,this.o),this.lb+=32);var a=this.i[this.o&31];this.o+=1;return a};
function md(a,b,c,d){return c<d?nd(a,b,Wb(a,c),c+1,d):b.F?b.F():b.call(null)}function nd(a,b,c,d,e){var f=c;c=d;for(d=id(a,d);;)if(c<e){var h=c&31;d=0===h?id(a,c):d;h=d[h];f=b.h?b.h(f,h):b.call(null,f,h);if(Pb(f))return Qa(f);c+=1}else return f}function od(a,b,c,d,e,f){this.u=a;this.m=b;this.shift=c;this.root=d;this.ea=e;this.v=f;this.j=167666463;this.A=139268}g=od.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.ka=function(a,b){return this.H(null,b,null)};g.H=function(a,b,c){return"number"===typeof b?this.la(null,b,c):c};
g.hb=function(a,b,c){a=0;for(var d=c;;)if(a<this.m){var e=id(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=f+a,k=e[f];d=b.l?b.l(d,h,k):b.call(null,d,h,k);if(Pb(d)){e=d;break a}f+=1}else{e=d;break a}if(Pb(e))return Qa(e);a+=c;d=e}else return d};g.T=function(a,b){return jd(this,b)[b&31]};g.la=function(a,b,c){return 0<=b&&b<this.m?id(this,b)[b&31]:c};
g.ob=function(a,b){if(0<=a&&a<this.m){if(fd(this)<=a){var c=B(this.ea);c[a&31]=b;return new od(this.u,this.m,this.shift,this.root,c,null)}return new od(this.u,this.m,this.shift,kd(this,this.shift,this.root,a,b),this.ea,null)}if(a===this.m)return this.U(null,b);throw Error(["Index ",z.g(a)," out of bounds  [0,",z.g(this.m),"]"].join(""));};g.sa=function(){var a=this.m;return new ld(0<U(this)?id(this,0):null,this,a)};g.P=function(){return this.u};g.V=function(){return this.m};
g.ec=function(){return 0<this.m?new Xf(this,this.m-1,null):null};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){if(b instanceof od)if(this.m===U(b))for(a=this.sa(null),b=b.sa(null);;)if(a.ia()){var c=a.next(),d=b.next();if(!S.h(c,d))return!1}else return!0;else return!1;else return Zb(this,b)};g.Xa=function(){return new pd(this.m,this.shift,qd.g?qd.g(this.root):qd.call(null,this.root),rd.g?rd.g(this.ea):rd.call(null,this.ea))};g.W=function(){return Ta(bc,this.u)};
g.aa=function(a,b){return md(this,b,0,this.m)};g.ba=function(a,b,c){a=0;for(var d=c;;)if(a<this.m){var e=id(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=e[f];d=b.h?b.h(d,h):b.call(null,d,h);if(Pb(d)){e=d;break a}f+=1}else{e=d;break a}if(Pb(e))return Qa(e);a+=c;d=e}else return d};g.xa=function(a,b,c){if("number"===typeof b)return this.ob(b,c);throw Error("Vector's key for assoc must be a number.");};g.Ua=function(a,b){return Of(b)?0<=b&&b<this.m:!1};
g.I=function(){if(0===this.m)return null;if(32>=this.m)return new N(this.ea,0,null);a:{var a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.i[0];else{a=a.i;break a}}return sd?sd(this,a,0,0):td.call(null,this,a,0,0)};g.R=function(a,b){return b===this.u?this:new od(b,this.m,this.shift,this.root,this.ea,this.v)};
g.U=function(a,b){if(32>this.m-fd(this)){a=this.ea.length;for(var c=Array(a+1),d=0;;)if(d<a)c[d]=this.ea[d],d+=1;else break;c[a]=b;return new od(this.u,this.m+1,this.shift,this.root,c,null)}a=(c=this.m>>>5>1<<this.shift)?this.shift+5:this.shift;c?(c=ed(null),c.i[0]=this.root,d=gd(null,this.shift,new dd(null,this.ea)),c.i[1]=d):c=hd(this,this.shift,this.root,new dd(null,this.ea));return new od(this.u,this.m+1,a,c,[b],null)};
g.call=function(a,b){if("number"===typeof b)return this.T(null,b);throw Error("Key must be integer");};g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){if("number"===typeof a)return this.T(null,a);throw Error("Key must be integer");};
var ud=new dd(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),bc=new od(null,0,5,ud,[],Lb);od.prototype[wa]=function(){return Ib(this)};function vd(a,b,c,d,e){this.ja=a;this.node=b;this.o=c;this.S=d;this.u=e;this.v=null;this.j=32375020;this.A=1536}g=vd.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){if(this.S+1<this.node.length){var a=this.ja;var b=this.node,c=this.o,d=this.S+1;a=sd?sd(a,b,c,d):td.call(null,a,b,c,d);return null==a?null:a}return this.rb()};
g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};g.aa=function(a,b){return md(this.ja,b,this.o+this.S,U(this.ja))};g.ba=function(a,b,c){return nd(this.ja,b,c,this.o+this.S,U(this.ja))};g.ca=function(){return this.node[this.S]};g.ga=function(){if(this.S+1<this.node.length){var a=this.ja;var b=this.node,c=this.o,d=this.S+1;a=sd?sd(a,b,c,d):td.call(null,a,b,c,d);return null==a?P:a}return this.gb(null)};g.I=function(){return this};
g.nb=function(){var a=this.node;return new Lc(a,this.S,a.length)};g.gb=function(){var a=this.o+this.node.length;if(a<ya(this.ja)){var b=this.ja,c=id(this.ja,a);return sd?sd(b,c,a,0):td.call(null,b,c,a,0)}return P};g.R=function(a,b){return b===this.u?this:wd?wd(this.ja,this.node,this.o,this.S,b):td.call(null,this.ja,this.node,this.o,this.S,b)};g.U=function(a,b){return W(b,this)};
g.rb=function(){var a=this.o+this.node.length;if(a<ya(this.ja)){var b=this.ja,c=id(this.ja,a);return sd?sd(b,c,a,0):td.call(null,b,c,a,0)}return null};vd.prototype[wa]=function(){return Ib(this)};
function td(a){switch(arguments.length){case 3:var b=arguments[0],c=arguments[1],d=arguments[2];return new vd(b,jd(b,c),c,d,null);case 4:return sd(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return wd(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}function sd(a,b,c,d){return new vd(a,b,c,d,null)}function wd(a,b,c,d,e){return new vd(a,b,c,d,e)}
function xd(a,b){return a===b.D?b:new dd(a,B(b.i))}function qd(a){return new dd({},B(a.i))}function rd(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];pc(a,0,b,0,a.length);return b}var yd=function yd(a,b,c,d){c=xd(a.root.D,c);var f=a.m-1>>>b&31;if(5===b)a=d;else{var h=c.i[f];null!=h?(b-=5,a=yd.fa?yd.fa(a,b,h,d):yd.call(null,a,b,h,d)):a=gd(a.root.D,b-5,d)}c.i[f]=a;return c};
function pd(a,b,c,d){this.m=a;this.shift=b;this.root=c;this.ea=d;this.A=88;this.j=275}g=pd.prototype;
g.$a=function(a,b){if(this.root.D){if(32>this.m-fd(this))this.ea[this.m&31]=b;else{a=new dd(this.root.D,this.ea);var c=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];c[0]=b;this.ea=c;this.m>>>5>1<<this.shift?(b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],c=this.shift+
5,b[0]=this.root,b[1]=gd(this.root.D,this.shift,a),this.root=new dd(this.root.D,b),this.shift=c):this.root=yd(this,this.shift,this.root,a)}this.m+=1;return this}throw Error("conj! after persistent!");};g.ib=function(){if(this.root.D){this.root.D=null;var a=this.m-fd(this),b=Array(a);pc(this.ea,0,b,0,a);return new od(null,this.m,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.Va=function(a,b,c){if("number"===typeof b)return zd(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
function zd(a,b,c){if(a.root.D){if(0<=b&&b<a.m){if(fd(a)<=b)a.ea[b&31]=c;else{var d=function k(f,h){h=xd(a.root.D,h);if(0===f)h.i[b&31]=c;else{var l=b>>>f&31;f=k(f-5,h.i[l]);h.i[l]=f}return h}(a.shift,a.root);a.root=d}return a}if(b===a.m)return a.$a(null,c);throw Error(["Index ",z.g(b)," out of bounds for TransientVector of length",z.g(a.m)].join(""));}throw Error("assoc! after persistent!");}g.V=function(){if(this.root.D)return this.m;throw Error("count after persistent!");};
g.T=function(a,b){if(this.root.D)return jd(this,b)[b&31];throw Error("nth after persistent!");};g.la=function(a,b,c){return 0<=b&&b<this.m?this.T(null,b):c};g.ka=function(a,b){return this.H(null,b,null)};g.H=function(a,b,c){if(this.root.D)return"number"===typeof b?this.la(null,b,c):c;throw Error("lookup after persistent!");};
g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.ka(null,c);case 3:return this.H(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.ka(null,c)};a.l=function(b,c,d){return this.H(null,c,d)};return a}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return this.ka(null,a)};
g.h=function(a,b){return this.H(null,a,b)};function Ad(){this.j=2097152;this.A=0}Ad.prototype.K=function(){return!1};var Bd=new Ad;function Cd(a,b){return rc(lc(b)&&!mc(b)?U(a)===U(b)?(null!=a?a.j&1048576||u===a.Wb||(a.j?0:w(Xa,a)):w(Xa,a))?zc(function(c,d,e){return S.h(I.l(b,d,Bd),e)?!0:new Ob},a):bd(function(c){return S.h(I.l(b,O(c),Bd),O(R(c)))},a):null:null)}function Dd(a){this.C=a}
Dd.prototype.next=function(){if(null!=this.C){var a=O(this.C),b=X(a,0,null);a=X(a,1,null);this.C=R(this.C);return{value:[b,a],done:!1}}return{value:null,done:!0}};
function Ed(a,b){if(b instanceof K)a:{var c=a.length;b=b.va;for(var d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof K&&b===a[d].va){a=d;break a}d+=2}}else if("string"===typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){a=-1;break a}if(b===a[d]){a=d;break a}d+=2}else if(b instanceof Cb)a:for(c=a.length,b=b.Aa,d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof Cb&&b===a[d].Aa){a=d;break a}d+=2}else if(null==b)a:for(b=a.length,c=0;;){if(b<=c){a=-1;break a}if(null==a[c]){a=c;break a}c+=2}else a:for(c=
a.length,d=0;;){if(c<=d){a=-1;break a}if(S.h(b,a[d])){a=d;break a}d+=2}return a}function Fd(a,b){this.key=a;this.G=b;this.v=null;this.j=166619935;this.A=0}g=Fd.prototype;g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.ka=function(a,b){return this.la(null,b,null)};g.H=function(a,b,c){return this.la(null,b,c)};g.T=function(a,b){if(0===b)return this.key;if(1===b)return this.G;throw Error("Index out of bounds");};
g.la=function(a,b,c){return 0===b?this.key:1===b?this.G:c};g.ob=function(a,b){return(new od(null,2,5,ud,[this.key,this.G],null)).ob(a,b)};g.P=function(){return null};g.V=function(){return 2};g.Gb=function(){return this.key};g.Hb=function(){return this.G};g.ec=function(){return new N([this.G,this.key],0,null)};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};g.W=function(){return null};
g.aa=function(a,b){a:if(a=this.V(null),0===a)b=b.F?b.F():b.call(null);else for(var c=this.T(null,0),d=1;;)if(d<a){var e=this.T(null,d);c=b.h?b.h(c,e):b.call(null,c,e);if(Pb(c)){b=Qa(c);break a}d+=1}else{b=c;break a}return b};g.ba=function(a,b,c){a:{a=this.V(null);var d=c;for(c=0;;)if(c<a){var e=this.T(null,c);d=b.h?b.h(d,e):b.call(null,d,e);if(Pb(d)){b=Qa(d);break a}c+=1}else{b=d;break a}}return b};g.xa=function(a,b,c){return ec.l(new od(null,2,5,ud,[this.key,this.G],null),b,c)};
g.Ua=function(a,b){return 0===b||1===b};g.I=function(){return new N([this.key,this.G],0,null)};g.R=function(a,b){return ic(new od(null,2,5,ud,[this.key,this.G],null),b)};g.U=function(a,b){return new od(null,3,5,ud,[this.key,this.G,b],null)};
g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.T(null,c);case 3:return this.la(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.T(null,c)};a.l=function(b,c,d){return this.la(null,c,d)};return a}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return this.T(null,a)};
g.h=function(a,b){return this.la(null,a,b)};function Gd(a){return null!=a?a.j&2048||u===a.Zb?!0:!1:!1}function Hd(a,b,c){this.i=a;this.o=b;this.ra=c;this.j=32374990;this.A=0}g=Hd.prototype;g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.ra};g.Z=function(){return this.o<this.i.length-2?new Hd(this.i,this.o+2,null):null};g.V=function(){return(this.i.length-this.o)/2};g.O=function(){return Kb(this)};g.K=function(a,b){return Zb(this,b)};
g.W=function(){return P};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return new Fd(this.i[this.o],this.i[this.o+1])};g.ga=function(){return this.o<this.i.length-2?new Hd(this.i,this.o+2,null):P};g.I=function(){return this};g.R=function(a,b){return b===this.ra?this:new Hd(this.i,this.o,b)};g.U=function(a,b){return W(b,this)};Hd.prototype[wa]=function(){return Ib(this)};function Id(a,b){this.i=a;this.o=0;this.m=b}
Id.prototype.ia=function(){return this.o<this.m};Id.prototype.next=function(){var a=new Fd(this.i[this.o],this.i[this.o+1]);this.o+=2;return a};function oa(a,b,c,d){this.u=a;this.m=b;this.i=c;this.v=d;this.j=16647951;this.A=139268}g=oa.prototype;g.toString=function(){return rb(this)};g.keys=function(){return Ib(Jd.g?Jd.g(this):Jd.call(null,this))};g.entries=function(){return new Dd(M(M(this)))};g.values=function(){return Ib(Kd.g?Kd.g(this):Kd.call(null,this))};g.has=function(a){return sc(this,a)};
g.get=function(a,b){return this.H(null,a,b)};g.forEach=function(a){for(var b=M(this),c=null,d=0,e=0;;)if(e<d){var f=c.T(null,e),h=X(f,0,null);f=X(f,1,null);a.h?a.h(f,h):a.call(null,f,h);e+=1}else if(b=M(b))oc(b)?(c=mb(b),b=nb(b),h=c,d=U(c),c=h):(c=O(b),h=X(c,0,null),f=X(c,1,null),a.h?a.h(f,h):a.call(null,f,h),b=R(b),c=null,d=0),e=0;else return null};g.ka=function(a,b){return this.H(null,b,null)};g.H=function(a,b,c){a=Ed(this.i,b);return-1===a?c:this.i[a+1]};
g.hb=function(a,b,c){a=this.i.length;for(var d=0;;)if(d<a){var e=this.i[d],f=this.i[d+1];c=b.l?b.l(c,e,f):b.call(null,c,e,f);if(Pb(c))return Qa(c);d+=2}else return c};g.sa=function(){return new Id(this.i,2*this.m)};g.P=function(){return this.u};g.V=function(){return this.m};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Mb(this)};
g.K=function(a,b){if(lc(b)&&!mc(b))if(a=this.i.length,this.m===b.V(null))for(var c=0;;)if(c<a){var d=b.H(null,this.i[c],qc);if(d!==qc)if(S.h(this.i[c+1],d))c+=2;else return!1;else return!1}else return!0;else return!1;else return!1};g.Xa=function(){return new Ld(this.i.length,B(this.i))};g.W=function(){return Ta($c,this.u)};g.aa=function(a,b){return xc(this,b)};g.ba=function(a,b,c){return yc(this,b,c)};
g.xa=function(a,b,c){a=Ed(this.i,b);if(-1===a){if(this.m<Md){a=this.i;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new oa(this.u,this.m+1,e,null)}return Ta(La(cd(Nd,this),b,c),this.u)}if(c===this.i[a+1])return this;b=B(this.i);b[a+1]=c;return new oa(this.u,this.m,b,null)};g.Ua=function(a,b){return-1!==Ed(this.i,b)};g.I=function(){var a=this.i;return 0<=a.length-2?new Hd(a,0,null):null};
g.R=function(a,b){return b===this.u?this:new oa(b,this.m,this.i,this.v)};g.U=function(a,b){if(nc(b))return this.xa(null,D(b,0),D(b,1));a=this;for(b=M(b);;){if(null==b)return a;var c=O(b);if(nc(c))a=La(a,D(c,0),D(c,1)),b=R(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.ka(null,c);case 3:return this.H(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.ka(null,c)};a.l=function(b,c,d){return this.H(null,c,d)};return a}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return this.ka(null,a)};
g.h=function(a,b){return this.H(null,a,b)};var $c=new oa(null,0,[],Nb),Md=8;function Od(a,b){return a===b?!0:a===b||a instanceof K&&b instanceof K&&a.va===b.va?!0:S.h(a,b)}function Qd(a){for(var b=0,c=0;;)if(b<a.length){var d;a:for(d=0;;)if(d<b){var e=Od(a[b],a[d]);if(e){d=e;break a}d=2+d}else{d=!1;break a}c=d?c:c+2;b=2+b}else return c}function Rd(a,b){var c=a.length-1,d=M(b);b=Array(c+2*U(d));a=pc(a,0,b,0,c);for(b=c;;)if(d){var e=O(d);a[b]=Na(e);a[b+1]=Oa(e);b=2+c;d=R(d)}else return a}
function fc(a){var b=a.length,c=1===(b&1),d;if(!(d=c))a:for(d=0;;)if(d<a.length){var e;b:for(e=0;;)if(e<d){var f=Od(a[d],a[e]);if(f){e=f;break b}e=2+e}else{e=!1;break b}if(e){d=e;break a}d=2+d}else{d=!1;break a}return d?Sd(a,c):new oa(null,b/2,a,null)}
function Sd(a,b){var c=b?Rd(a,cd($c,a[a.length-1])):a;a=Qd(c);var d=c.length;if(a<d){a=Array(a);for(var e=0,f=0;;)if(e<d)(function(){for(var h=0;;)if(h<f){var k=Od(c[e],c[h]);if(k)return k;h=2+h}else return!1})()?(b=f,e=2+e,f=b):(b=function(){for(var h=d-2;;)if(h>=e){if(Od(c[e],c[h]))return h;h-=2}else return h}(),a[f]=c[e],a[f+1]=c[b+1],b=2+f,e=2+e,f=b);else break;return new oa(null,a.length/2,a,null)}return new oa(null,c.length/2,c,null)}oa.prototype[wa]=function(){return Ib(this)};
function Ld(a,b){this.Wa={};this.Sa=a;this.i=b;this.j=259;this.A=56}g=Ld.prototype;g.V=function(){if(this.Wa)return Bc(this.Sa);throw Error("count after persistent!");};g.ka=function(a,b){return this.H(null,b,null)};g.H=function(a,b,c){if(this.Wa)return a=Ed(this.i,b),-1===a?c:this.i[a+1];throw Error("lookup after persistent!");};
g.$a=function(a,b){if(this.Wa){if(Gd(b))return this.Va(null,Td.g?Td.g(b):Td.call(null,b),Ud.g?Ud.g(b):Ud.call(null,b));if(nc(b))return this.Va(null,b.g?b.g(0):b.call(null,0),b.g?b.g(1):b.call(null,1));a=M(b);for(b=this;;){var c=O(a);if(v(c))a=R(a),b=kb(b,Td.g?Td.g(c):Td.call(null,c),Ud.g?Ud.g(c):Ud.call(null,c));else return b}}else throw Error("conj! after persistent!");};g.ib=function(){if(this.Wa)return this.Wa=!1,new oa(null,Bc(this.Sa),this.i,null);throw Error("persistent! called twice");};
g.Va=function(a,b,c){if(this.Wa){a=Ed(this.i,b);if(-1===a){if(this.Sa+2<=2*Md)return this.Sa+=2,this.i.push(b),this.i.push(c),this;a=Vd.h?Vd.h(this.Sa,this.i):Vd.call(null,this.Sa,this.i);return kb(a,b,c)}c!==this.i[a+1]&&(this.i[a+1]=c);return this}throw Error("assoc! after persistent!");};
g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.H(null,c,null);case 3:return this.H(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.H(null,c,null)};a.l=function(b,c,d){return this.H(null,c,d)};return a}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};
g.g=function(a){return this.H(null,a,null)};g.h=function(a,b){return this.H(null,a,b)};function Vd(a,b){for(var c=hb(Nd),d=0;;)if(d<a)c=kb(c,b[d],b[d+1]),d+=2;else return c}function Wd(){this.G=!1}function Xd(a,b,c){a=B(a);a[b]=c;return a}function Yd(a,b,c,d){a=a.Ra(b);a.i[c]=d;return a}function Zd(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.l?b.l(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.cb(b,f):f;if(Pb(c))return c;e+=2;f=c}else return f}
function $d(a){this.i=a;this.o=0;this.pa=this.eb=null}$d.prototype.advance=function(){for(var a=this.i.length;;)if(this.o<a){var b=this.i[this.o],c=this.i[this.o+1];null!=b?b=this.eb=new Fd(b,c):null!=c?(b=pb(c),b=b.ia()?this.pa=b:!1):b=!1;this.o+=2;if(b)return!0}else return!1};$d.prototype.ia=function(){var a=null!=this.eb;return a?a:(a=null!=this.pa)?a:this.advance()};
$d.prototype.next=function(){if(null!=this.eb){var a=this.eb;this.eb=null;return a}if(null!=this.pa)return a=this.pa.next(),this.pa.ia()||(this.pa=null),a;if(this.advance())return this.next();throw Error("No such element");};$d.prototype.remove=function(){return Error("Unsupported operation")};function ae(a,b,c){this.D=a;this.N=b;this.i=c;this.A=131072;this.j=0}g=ae.prototype;
g.Ra=function(a){if(a===this.D)return this;var b=Cc(this.N),c=Array(0>b?4:2*(b+1));pc(this.i,0,c,0,2*b);return new ae(a,this.N,c)};g.bb=function(){return be?be(this.i):ce.call(null,this.i)};g.cb=function(a,b){return Zd(this.i,a,b)};g.za=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.N&e))return d;var f=Cc(this.N&e-1);e=this.i[2*f];f=this.i[2*f+1];return null==e?f.za(a+5,b,c,d):Od(c,e)?f:d};
g.na=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=Cc(this.N&h-1);if(0===(this.N&h)){var l=Cc(this.N);if(2*l<this.i.length){a=this.Ra(a);b=a.i;f.G=!0;c=2*(l-k);f=2*k+(c-1);for(l=2*(k+1)+(c-1);0!==c;)b[l]=b[f],--l,--c,--f;b[2*k]=d;b[2*k+1]=e;a.N|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=de.na(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0===(this.N>>>d&1)?
d+=1:(k[d]=null!=this.i[e]?de.na(a,b+5,Ab(this.i[e]),this.i[e],this.i[e+1],f):this.i[e+1],e+=2,d+=1);else break;return new ee(a,l+1,k)}b=Array(2*(l+4));pc(this.i,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;pc(this.i,2*k,b,2*(k+1),2*(l-k));f.G=!0;a=this.Ra(a);a.i=b;a.N|=h;return a}l=this.i[2*k];h=this.i[2*k+1];if(null==l)return l=h.na(a,b+5,c,d,e,f),l===h?this:Yd(this,a,2*k+1,l);if(Od(d,l))return e===h?this:Yd(this,a,2*k+1,e);f.G=!0;f=b+5;d=fe?fe(a,f,l,h,c,d,e):ge.call(null,a,f,l,h,c,d,e);e=2*k;k=2*k+1;a=this.Ra(a);
a.i[e]=null;a.i[k]=d;return a};
g.ma=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=Cc(this.N&f-1);if(0===(this.N&f)){var k=Cc(this.N);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=de.ma(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0===(this.N>>>c&1)?c+=1:(h[c]=null!=this.i[d]?de.ma(a+5,Ab(this.i[d]),this.i[d],this.i[d+1],e):this.i[d+1],d+=2,c+=1);else break;return new ee(null,k+1,h)}a=Array(2*(k+1));pc(this.i,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;pc(this.i,2*h,a,2*(h+1),2*(k-h));e.G=!0;return new ae(null,this.N|f,a)}var l=this.i[2*h];f=this.i[2*h+1];if(null==l)return k=f.ma(a+5,b,c,d,e),k===f?this:new ae(null,this.N,Xd(this.i,2*h+1,k));if(Od(c,l))return d===f?this:new ae(null,this.N,Xd(this.i,2*h+1,d));e.G=!0;e=this.N;k=this.i;a+=5;a=he?he(a,l,f,b,c,d):ge.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=B(k);d[c]=null;d[h]=a;return new ae(null,e,d)};g.sa=function(){return new $d(this.i)};var de=new ae(null,0,[]);
function ie(a){this.i=a;this.o=0;this.pa=null}ie.prototype.ia=function(){for(var a=this.i.length;;){if(null!=this.pa&&this.pa.ia())return!0;if(this.o<a){var b=this.i[this.o];this.o+=1;null!=b&&(this.pa=pb(b))}else return!1}};ie.prototype.next=function(){if(this.ia())return this.pa.next();throw Error("No such element");};ie.prototype.remove=function(){return Error("Unsupported operation")};function ee(a,b,c){this.D=a;this.m=b;this.i=c;this.A=131072;this.j=0}g=ee.prototype;
g.Ra=function(a){return a===this.D?this:new ee(a,this.m,B(this.i))};g.bb=function(){return je?je(this.i):ke.call(null,this.i)};g.cb=function(a,b){for(var c=this.i.length,d=0;;)if(d<c){var e=this.i[d];if(null!=e){b=e.cb(a,b);if(Pb(b))return b;d+=1}else d+=1}else return b};g.za=function(a,b,c,d){var e=this.i[b>>>a&31];return null!=e?e.za(a+5,b,c,d):d};
g.na=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.i[h];if(null==k)return a=Yd(this,a,h,de.na(a,b+5,c,d,e,f)),a.m+=1,a;b=k.na(a,b+5,c,d,e,f);return b===k?this:Yd(this,a,h,b)};g.ma=function(a,b,c,d,e){var f=b>>>a&31,h=this.i[f];if(null==h)return new ee(null,this.m+1,Xd(this.i,f,de.ma(a+5,b,c,d,e)));a=h.ma(a+5,b,c,d,e);return a===h?this:new ee(null,this.m,Xd(this.i,f,a))};g.sa=function(){return new ie(this.i)};function le(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Od(c,a[d]))return d;d+=2}else return-1}
function me(a,b,c,d){this.D=a;this.ya=b;this.m=c;this.i=d;this.A=131072;this.j=0}g=me.prototype;g.Ra=function(a){if(a===this.D)return this;var b=Array(2*(this.m+1));pc(this.i,0,b,0,2*this.m);return new me(a,this.ya,this.m,b)};g.bb=function(){return be?be(this.i):ce.call(null,this.i)};g.cb=function(a,b){return Zd(this.i,a,b)};g.za=function(a,b,c,d){a=le(this.i,this.m,c);return 0>a?d:Od(c,this.i[a])?this.i[a+1]:d};
g.na=function(a,b,c,d,e,f){if(c===this.ya){b=le(this.i,this.m,d);if(-1===b){if(this.i.length>2*this.m)return b=2*this.m,c=2*this.m+1,a=this.Ra(a),a.i[b]=d,a.i[c]=e,f.G=!0,a.m+=1,a;c=this.i.length;b=Array(c+2);pc(this.i,0,b,0,c);b[c]=d;b[c+1]=e;f.G=!0;d=this.m+1;a===this.D?(this.i=b,this.m=d,a=this):a=new me(this.D,this.ya,d,b);return a}return this.i[b+1]===e?this:Yd(this,a,b+1,e)}return(new ae(a,1<<(this.ya>>>b&31),[null,this,null,null])).na(a,b,c,d,e,f)};
g.ma=function(a,b,c,d,e){return b===this.ya?(a=le(this.i,this.m,c),-1===a?(a=2*this.m,b=Array(a+2),pc(this.i,0,b,0,a),b[a]=c,b[a+1]=d,e.G=!0,new me(null,this.ya,this.m+1,b)):S.h(this.i[a+1],d)?this:new me(null,this.ya,this.m,Xd(this.i,a+1,d))):(new ae(null,1<<(this.ya>>>a&31),[null,this])).ma(a,b,c,d,e)};g.sa=function(){return new $d(this.i)};
function ge(a){switch(arguments.length){case 6:return he(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return fe(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}function he(a,b,c,d,e,f){var h=Ab(b);if(h===d)return new me(null,h,2,[b,c,e,f]);var k=new Wd;return de.ma(a,h,b,c,k).ma(a,d,e,f,k)}
function fe(a,b,c,d,e,f,h){var k=Ab(c);if(k===e)return new me(null,k,2,[c,d,f,h]);var l=new Wd;return de.na(a,b,k,c,d,l).na(a,b,e,f,h,l)}function ne(a,b,c,d,e){this.u=a;this.qa=b;this.o=c;this.C=d;this.v=e;this.j=32374988;this.A=0}g=ne.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){if(null==this.C){var a=this.qa,b=this.o+2;return oe?oe(a,b,null):ce.call(null,a,b,null)}a=this.qa;b=this.o;var c=R(this.C);return oe?oe(a,b,c):ce.call(null,a,b,c)};
g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return null==this.C?new Fd(this.qa[this.o],this.qa[this.o+1]):O(this.C)};
g.ga=function(){var a=this,b=null==a.C?function(){var c=a.qa,d=a.o+2;return oe?oe(c,d,null):ce.call(null,c,d,null)}():function(){var c=a.qa,d=a.o,e=R(a.C);return oe?oe(c,d,e):ce.call(null,c,d,e)}();return null!=b?b:P};g.I=function(){return this};g.R=function(a,b){return b===this.u?this:new ne(b,this.qa,this.o,this.C,this.v)};g.U=function(a,b){return W(b,this)};ne.prototype[wa]=function(){return Ib(this)};
function ce(a){switch(arguments.length){case 1:return be(arguments[0]);case 3:return oe(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}function be(a){return oe(a,0,null)}function oe(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new ne(null,a,b,null,null);var d=a[b+1];if(v(d)&&(d=d.bb(),v(d)))return new ne(null,a,b+2,d,null);b+=2}else return null;else return new ne(null,a,b,c,null)}
function pe(a,b,c,d,e){this.u=a;this.qa=b;this.o=c;this.C=d;this.v=e;this.j=32374988;this.A=0}g=pe.prototype;g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.u};g.Z=function(){var a=this.qa,b=this.o,c=R(this.C);return qe?qe(a,b,c):ke.call(null,a,b,c)};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Kb(this)};g.K=function(a,b){return Zb(this,b)};
g.W=function(){return P};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return O(this.C)};g.ga=function(){var a=this.qa;var b=this.o,c=R(this.C);a=qe?qe(a,b,c):ke.call(null,a,b,c);return null!=a?a:P};g.I=function(){return this};g.R=function(a,b){return b===this.u?this:new pe(b,this.qa,this.o,this.C,this.v)};g.U=function(a,b){return W(b,this)};pe.prototype[wa]=function(){return Ib(this)};
function ke(a){switch(arguments.length){case 1:return je(arguments[0]);case 3:return qe(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.g(arguments.length)].join(""));}}function je(a){return qe(a,0,null)}function qe(a,b,c){if(null==c)for(c=a.length;;)if(b<c){var d=a[b];if(v(d)&&(d=d.bb(),v(d)))return new pe(null,a,b+1,d,null);b+=1}else return null;else return new pe(null,a,b,c,null)}function re(a,b){this.da=a;this.xb=b;this.pb=!1}
re.prototype.ia=function(){return!this.pb||this.xb.ia()};re.prototype.next=function(){if(this.pb)return this.xb.next();this.pb=!0;return new Fd(null,this.da)};re.prototype.remove=function(){return Error("Unsupported operation")};function se(a,b,c,d,e,f){this.u=a;this.m=b;this.root=c;this.ha=d;this.da=e;this.v=f;this.j=16123663;this.A=139268}g=se.prototype;g.toString=function(){return rb(this)};g.keys=function(){return Ib(Jd.g?Jd.g(this):Jd.call(null,this))};g.entries=function(){return new Dd(M(M(this)))};
g.values=function(){return Ib(Kd.g?Kd.g(this):Kd.call(null,this))};g.has=function(a){return sc(this,a)};g.get=function(a,b){return this.H(null,a,b)};g.forEach=function(a){for(var b=M(this),c=null,d=0,e=0;;)if(e<d){var f=c.T(null,e),h=X(f,0,null);f=X(f,1,null);a.h?a.h(f,h):a.call(null,f,h);e+=1}else if(b=M(b))oc(b)?(c=mb(b),b=nb(b),h=c,d=U(c),c=h):(c=O(b),h=X(c,0,null),f=X(c,1,null),a.h?a.h(f,h):a.call(null,f,h),b=R(b),c=null,d=0),e=0;else return null};g.ka=function(a,b){return this.H(null,b,null)};
g.H=function(a,b,c){return null==b?this.ha?this.da:c:null==this.root?c:this.root.za(0,Ab(b),b,c)};g.hb=function(a,b,c){a=this.ha?b.l?b.l(c,null,this.da):b.call(null,c,null,this.da):c;Pb(a)?b=Qa(a):null!=this.root?(b=this.root.cb(b,a),b=Pb(b)?Qb.g?Qb.g(b):Qb.call(null,b):b):b=a;return b};g.sa=function(){var a=this.root?pb(this.root):ad();return this.ha?new re(this.da,a):a};g.P=function(){return this.u};g.V=function(){return this.m};g.O=function(){var a=this.v;return null!=a?a:this.v=a=Mb(this)};
g.K=function(a,b){return Cd(this,b)};g.Xa=function(){return new te(this.root,this.m,this.ha,this.da)};g.W=function(){return Ta(Nd,this.u)};g.xa=function(a,b,c){if(null==b)return this.ha&&c===this.da?this:new se(this.u,this.ha?this.m:this.m+1,this.root,!0,c,null);a=new Wd;b=(null==this.root?de:this.root).ma(0,Ab(b),b,c,a);return b===this.root?this:new se(this.u,a.G?this.m+1:this.m,b,this.ha,this.da,null)};g.Ua=function(a,b){return null==b?this.ha:null==this.root?!1:this.root.za(0,Ab(b),b,qc)!==qc};
g.I=function(){if(0<this.m){var a=null!=this.root?this.root.bb():null;return this.ha?W(new Fd(null,this.da),a):a}return null};g.R=function(a,b){return b===this.u?this:new se(b,this.m,this.root,this.ha,this.da,this.v)};g.U=function(a,b){if(nc(b))return this.xa(null,D(b,0),D(b,1));a=this;for(b=M(b);;){if(null==b)return a;var c=O(b);if(nc(c))a=La(a,D(c,0),D(c,1)),b=R(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.ka(null,c);case 3:return this.H(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.ka(null,c)};a.l=function(b,c,d){return this.H(null,c,d)};return a}();g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return this.ka(null,a)};
g.h=function(a,b){return this.H(null,a,b)};var Nd=new se(null,0,null,!1,null,Nb);se.prototype[wa]=function(){return Ib(this)};function te(a,b,c,d){this.D={};this.root=a;this.count=b;this.ha=c;this.da=d;this.j=259;this.A=56}function ue(a,b,c){if(a.D){if(null==b)a.da!==c&&(a.da=c),a.ha||(a.count+=1,a.ha=!0);else{var d=new Wd;b=(null==a.root?de:a.root).na(a.D,0,Ab(b),b,c,d);b!==a.root&&(a.root=b);d.G&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=te.prototype;
g.V=function(){if(this.D)return this.count;throw Error("count after persistent!");};g.ka=function(a,b){return null==b?this.ha?this.da:null:null==this.root?null:this.root.za(0,Ab(b),b)};g.H=function(a,b,c){return null==b?this.ha?this.da:c:null==this.root?c:this.root.za(0,Ab(b),b,c)};
g.$a=function(a,b){a:if(this.D)if(Gd(b))a=ue(this,Td.g?Td.g(b):Td.call(null,b),Ud.g?Ud.g(b):Ud.call(null,b));else if(nc(b))a=ue(this,b.g?b.g(0):b.call(null,0),b.g?b.g(1):b.call(null,1));else for(a=M(b),b=this;;){var c=O(a);if(v(c))a=R(a),b=ue(b,Td.g?Td.g(c):Td.call(null,c),Ud.g?Ud.g(c):Ud.call(null,c));else{a=b;break a}}else throw Error("conj! after persistent");return a};
g.ib=function(){if(this.D){this.D=null;var a=new se(null,this.count,this.root,this.ha,this.da,null)}else throw Error("persistent! called twice");return a};g.Va=function(a,b,c){return ue(this,b,c)};g.call=function(){var a=null;a=function(b,c,d){switch(arguments.length){case 2:return this.ka(null,c);case 3:return this.H(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.h=function(b,c){return this.ka(null,c)};a.l=function(b,c,d){return this.H(null,c,d)};return a}();
g.apply=function(a,b){var c=B(b);a=this.call;b=a.apply;var d=[this],e=d.concat;if(20<c.length){var f=c.slice(0,20);f.push(c.slice(20));c=f}return b.call(a,this,e.call(d,c))};g.g=function(a){return this.ka(null,a)};g.h=function(a,b){return this.H(null,a,b)};var Rf=function Rf(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Rf.J(0<c.length?new N(c.slice(0),0,null):null)};
Rf.J=function(a){var b=a instanceof N&&0===a.o?a.i:Kf(a);a=b.length;if(!Of(a))throw Error(["Argument must be an integer: ",z.g(a)].join(""));if(0!==(a&1)){a=Error;var c=z,d=c.g;a:for(;;){var e=R(b);if(null!=e)b=e;else{b=O(b);break a}}throw a(["No value supplied for key: ",d.call(c,b)].join(""));}return fc(b)};Rf.Y=0;Rf.X=function(a){return this.J(M(a))};function ve(a,b){this.B=a;this.ra=b;this.j=32374988;this.A=0}g=ve.prototype;g.toString=function(){return rb(this)};
g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.ra};g.Z=function(){var a=(null!=this.B?this.B.j&128||u===this.B.Ya||(this.B.j?0:w(Fa,this.B)):w(Fa,this.B))?this.B.Z():R(this.B);return null==a?null:new ve(a,null)};g.O=function(){return Kb(this)};
g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return this.B.ca(null).key};g.ga=function(){var a=(null!=this.B?this.B.j&128||u===this.B.Ya||(this.B.j?0:w(Fa,this.B)):w(Fa,this.B))?this.B.Z():R(this.B);return null!=a?new ve(a,null):P};g.I=function(){return this};g.R=function(a,b){return b===this.ra?this:new ve(this.B,b)};g.U=function(a,b){return W(b,this)};ve.prototype[wa]=function(){return Ib(this)};
function Jd(a){return(a=M(a))?new ve(a,null):null}function Td(a){return Na(a)}function we(a,b){this.B=a;this.ra=b;this.j=32374988;this.A=0}g=we.prototype;g.toString=function(){return rb(this)};g.indexOf=function(){var a=null;a=function(b,c){switch(arguments.length){case 1:return T(this,b,0);case 2:return T(this,b,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(b){return T(this,b,0)};a.h=function(b,c){return T(this,b,c)};return a}();
g.lastIndexOf=function(){function a(c){return V(this,c,U(this))}var b=null;b=function(c,d){switch(arguments.length){case 1:return a.call(this,c);case 2:return V(this,c,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.h=function(c,d){return V(this,c,d)};return b}();g.P=function(){return this.ra};g.Z=function(){var a=(null!=this.B?this.B.j&128||u===this.B.Ya||(this.B.j?0:w(Fa,this.B)):w(Fa,this.B))?this.B.Z():R(this.B);return null==a?null:new we(a,null)};g.O=function(){return Kb(this)};
g.K=function(a,b){return Zb(this,b)};g.W=function(){return P};g.aa=function(a,b){return tc(b,this)};g.ba=function(a,b,c){return wc(b,c,this)};g.ca=function(){return this.B.ca(null).G};g.ga=function(){var a=(null!=this.B?this.B.j&128||u===this.B.Ya||(this.B.j?0:w(Fa,this.B)):w(Fa,this.B))?this.B.Z():R(this.B);return null!=a?new we(a,null):P};g.I=function(){return this};g.R=function(a,b){return b===this.ra?this:new we(this.B,b)};g.U=function(a,b){return W(b,this)};we.prototype[wa]=function(){return Ib(this)};
function Kd(a){return(a=M(a))?new we(a,null):null}function Ud(a){return Oa(a)}function pf(a,b){var c=$c;for(b=M(b);;)if(b){var d=O(b),e=I.l(a,d,qf);c=S.h(e,qf)?c:ec.l(c,d,e);b=R(b)}else return Ta(c,jc(a))}function Hc(a){if(null!=a&&(a.A&4096||u===a.Jb))return a.name;if("string"===typeof a)return a;throw Error(["Doesn't support name: ",z.g(a)].join(""));}function Sf(a){a:for(var b=a;;)if(b=M(b))b=R(b);else break a;return a}
function xe(a,b,c,d,e,f,h){var k=la;la=null==la?null:la-1;try{if(null!=la&&0>la)return H(a,"#");H(a,c);if(0===ta.g(f))M(h)&&H(a,function(){var t=ye.g(f);return v(t)?t:"..."}());else{if(M(h)){var l=O(h);b.l?b.l(l,a,f):b.call(null,l,a,f)}for(var m=R(h),n=ta.g(f)-1;;)if(!m||null!=n&&0===n){M(m)&&0===n&&(H(a,d),H(a,function(){var t=ye.g(f);return v(t)?t:"..."}()));break}else{H(a,d);var p=O(m);c=a;h=f;b.l?b.l(p,c,h):b.call(null,p,c,h);var q=R(m);c=n-1;m=q;n=c}}return H(a,e)}finally{la=k}}
function ze(a,b){b=M(b);for(var c=null,d=0,e=0;;)if(e<d){var f=c.T(null,e);H(a,f);e+=1}else if(b=M(b))c=b,oc(c)?(b=mb(c),d=nb(c),c=b,f=U(b),b=d,d=f):(f=O(c),H(a,f),b=R(c),c=null,d=0),e=0;else return null}function Ae(a){if(null==ja)throw Error("No *print-fn* fn set for evaluation environment");ja.call(null,a)}var Be={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function Ce(a){return['"',z.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(b){return Be[b]})),'"'].join("")}function De(a,b){return(a=rc(I.h(a,ra)))?(a=null!=b?b.j&131072||u===b.Ib?!0:!1:!1)?null!=jc(b):a:a}
function Ee(a,b,c){if(null==a)return H(b,"nil");if(De(c,a)){H(b,"^");var d=jc(a);Z.l?Z.l(d,b,c):Z.call(null,d,b,c);H(b," ")}if(a.vb)return a.Mb(b);if(null!=a?a.j&2147483648||u===a.$||(a.j?0:w(fb,a)):w(fb,a))return gb(a,b,c);if(!0===a||!1===a)return H(b,z.g(a));if("number"===typeof a)return H(b,isNaN(a)?"##NaN":a===Number.POSITIVE_INFINITY?"##Inf":a===Number.NEGATIVE_INFINITY?"##-Inf":z.g(a));if(null!=a&&a.constructor===Object)return H(b,"#js "),d=Y.h(function(f){var h=/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/;
if("string"===typeof f)if(h=h.exec(f),null!=h&&S.h(h[0],f))if(1===h.length)h=h[0];else if(v(Gd.g?Gd.g(h):Gd.call(null,h)))h=new od(null,2,5,ud,[Td.g?Td.g(h):Td.call(null,h),Ud.g?Ud.g(h):Ud.call(null,h)],null);else if(nc(h))h=ic(h,null);else if(Array.isArray(h))b:{var k=h.length;if(32>k)h=new od(null,k,5,ud,h,null);else for(var l=32,m=(new od(null,32,5,ud,h.slice(0,32),null)).Xa(null);;)if(l<k){var n=l+1;m=ib(m,h[l]);l=n}else{h=jb(m);break b}}else h=jb(uc(ib,hb(bc),h));else h=null;else throw new TypeError("re-matches must match against a string.");
return new Fd(null!=h?Gc.g(f):f,a[f])},ca(a)),Fe.fa?Fe.fa(d,Z,b,c):Fe.call(null,d,Z,b,c);if(Array.isArray(a))return xe(b,Z,"#js ["," ","]",c,a);if("string"===typeof a)return v(qa.g(c))?H(b,Ce(a)):H(b,a);if("function"===typeof a){var e=a.name;c=v(function(){var f=null==e;return f?f:/^[\s\xa0]*$/.test(e)}())?"Function":e;return ze(b,$b(["#object[",c,v(!1)?[' "',z.g(a),'"'].join(""):"","]"]))}if(a instanceof Date)return c=function(f,h){for(f=z.g(f);;)if(f.length<h)f=["0",f].join("");else return f},ze(b,
$b(['#inst "',c(a.getUTCFullYear(),4),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"']));if(a instanceof RegExp)return ze(b,$b(['#"',a.source,'"']));if("symbol"===r(a)||"undefined"!==typeof Symbol&&a instanceof Symbol)return ze(b,$b(["#object[",a.toString(),"]"]));if(v(function(){var f=null==a?null:a.constructor;return null==f?null:f.jb}()))return ze(b,$b(["#object[",a.constructor.jb.replace(RegExp("/",
"g"),"."),"]"]));e=function(){var f=null==a?null:a.constructor;return null==f?null:f.name}();c=v(function(){var f=null==e;return f?f:/^[\s\xa0]*$/.test(e)}())?"Object":e;return null==a.constructor?ze(b,$b(["#object[",c,"]"])):ze(b,$b(["#object[",c," ",z.g(a),"]"]))}function Z(a,b,c){var d=Ge.g(c);return v(d)?(c=ec.l(c,He,Ee),d.l?d.l(a,b,c):d.call(null,a,b,c)):Ee(a,b,c)}
function Ie(a,b){var c;(c=null==a)||(c=M(a),c=null==c?!0:!1===c?!0:!1);if(c)b="";else{c=z;var d=c.g,e=new da,f=new qb(e);Z(O(a),f,b);a=M(R(a));for(var h=null,k=0,l=0;;)if(l<k){var m=h.T(null,l);H(f," ");Z(m,f,b);l+=1}else if(a=M(a))h=a,oc(h)?(a=mb(h),k=nb(h),h=a,m=U(a),a=k,k=m):(m=O(h),H(f," "),Z(m,f,b),a=R(h),h=null,k=0),l=0;else break;b=d.call(c,e)}return b}function Je(a){return a instanceof Cb?Db.h(null,Hc(a)):Gc.h(null,Hc(a))}
function Ke(a){if(v(!1)){var b=M(a),c=M(b),d=O(c);R(c);X(d,0,null);X(d,1,null);c=Mf(a);for(a=null;;){d=a;b=M(b);a=O(b);var e=R(b),f=a;a=X(f,0,null);b=X(f,1,null);if(v(f))if(a instanceof K||a instanceof Cb)if(v(d))if(S.h(d,Fc(a)))c=ec.l(c,Je(a),b),a=d,b=e;else return null;else if(d=Fc(a),v(d))c=ec.l(c,Je(a),b),a=d,b=e;else return null;else return null;else return new od(null,2,5,ud,[d,c],null)}}else return null}
function Le(a,b,c,d,e){return xe(d,function(f,h,k){var l=Na(f);c.l?c.l(l,h,k):c.call(null,l,h,k);H(h," ");f=Oa(f);return c.l?c.l(f,h,k):c.call(null,f,h,k)},[z.g(a),"{"].join(""),", ","}",e,M(b))}function Fe(a,b,c,d){var e=lc(a)?Ke(a):null,f=X(e,0,null);e=X(e,1,null);return v(f)?Le(["#:",z.g(f)].join(""),e,b,c,d):Le(null,a,b,c,d)}N.prototype.$=u;N.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};Ic.prototype.$=u;Ic.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};
Fd.prototype.$=u;Fd.prototype.M=function(a,b,c){return xe(b,Z,"["," ","]",c,this)};ne.prototype.$=u;ne.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};Hd.prototype.$=u;Hd.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};Jb.prototype.$=u;Jb.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};vd.prototype.$=u;vd.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};Ec.prototype.$=u;Ec.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};
Xf.prototype.$=u;Xf.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};se.prototype.$=u;se.prototype.M=function(a,b,c){return Fe(this,Z,b,c)};pe.prototype.$=u;pe.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};Mc.prototype.$=u;Mc.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};we.prototype.$=u;we.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};od.prototype.$=u;od.prototype.M=function(a,b,c){return xe(b,Z,"["," ","]",c,this)};
Dc.prototype.$=u;Dc.prototype.M=function(a,b){return H(b,"()")};oa.prototype.$=u;oa.prototype.M=function(a,b,c){return Fe(this,Z,b,c)};ve.prototype.$=u;ve.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};cc.prototype.$=u;cc.prototype.M=function(a,b,c){return xe(b,Z,"("," ",")",c,this)};function Me(){}
function Ne(a){if(null!=a&&null!=a.Db)a=a.Db(a);else{var b=Ne[r(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Ne._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw x("IEncodeJS.-clj-\x3ejs",a);}return a}function Oe(a,b){return(null!=a?u===a.Cb||(a.Nb?0:w(Me,a)):w(Me,a))?Ne(a):"string"===typeof a||"number"===typeof a||a instanceof K||a instanceof Cb?b.g?b.g(a):b.call(null,a):Ie($b([a]),na())}
var Pe=function Pe(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Pe.J(arguments[0],1<c.length?new N(c.slice(1),0,null):null)};
Pe.J=function(a,b){b=Zc(b);var c=I.l(b,Qe,Hc),d=function h(f){if(null==f)return null;if(null!=f?u===f.Cb||(f.Nb?0:w(Me,f)):w(Me,f))return Ne(f);if(f instanceof K)return c.g?c.g(f):c.call(null,f);if(f instanceof Cb)return z.g(f);if(lc(f)){var k={};f=M(f);for(var l=null,m=0,n=0;;)if(n<m){var p=l.T(null,n),q=X(p,0,null);p=X(p,1,null);q=Oe(q,d);p=h(p);k[q]=p;n+=1}else if(f=M(f))oc(f)?(m=mb(f),f=nb(f),l=m,m=U(m)):(m=O(f),l=X(m,0,null),m=X(m,1,null),l=Oe(l,d),m=h(m),k[l]=m,f=R(f),l=null,m=0),n=0;else break;
return k}if(Nf(f)){k=[];f=M(Y.h(h,f));l=null;for(n=m=0;;)if(n<m)q=l.T(null,n),k.push(q),n+=1;else if(f=M(f))l=f,oc(l)?(f=mb(l),n=nb(l),l=f,m=U(f),f=n):(f=O(l),k.push(f),f=R(l),l=null,m=0),n=0;else break;return k}return f};return d(a)};Pe.Y=1;Pe.X=function(a){var b=O(a);a=R(a);return this.J(b,a)};function Tf(){}
function Uf(a,b){if(null!=a&&null!=a.bc)a=a.bc(a,b);else{var c=Uf[r(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=Uf._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw x("IEncodeClojure.-js-\x3eclj",a);}return a}
function Vf(a){var b=$b([Wf,!0]),c=Zc(b);c=I.h(c,Wf);var d=v(c)?Gc:z;return function h(f){return(null!=f?u===f.cc||(f.Nb?0:w(Tf,f)):w(Tf,f))?Uf(f,Xc(Rf,b)):(null==f?0:null!=f?f.j&64||u===f.Za||(f.j?0:w(Lf,f)):w(Lf,f))?Sf(Y.h(h,f)):Gd(f)?new Fd(h(Na(f)),h(Oa(f))):Nf(f)?Qf(Mf(f),Y.g(h),f):Array.isArray(f)?jb(uc(function(k,l){l=h(l);return ib(k,l)},hb(bc),f)):(null==f?null:f.constructor)===Object?jb(uc(function(k,l){var m=d.g?d.g(l):d.call(null,l);l=h(null!==f&&l in f?f[l]:void 0);return kb(k,m,l)},
hb($c),ca(f))):f}(a)}"undefined"!==typeof console&&ua();ua();var fg=new K(null,"Data","Data",1886470088),cg=new K(null,"partition-key","partition-key",-433145888),ta=new K(null,"print-length","print-length",1931866356),rf=new K(null,"NewImage","NewImage",152898694),pa=new K(null,"flush-on-newline","flush-on-newline",-151457939),sf=new K(null,"timestamp","timestamp",579478971),ra=new K(null,"meta","meta",1499536964),hg=new K(null,"PartitionKey","PartitionKey",1317455751),tf=new K(null,"S","S",1267293308),Wf=new K(null,"keywordize-keys","keywordize-keys",1310784252),
uf=new K(null,"ApproximateCreationDateTime","ApproximateCreationDateTime",1565473879),zf=new K(null,"rating","rating",144173662),vf=new K(null,"count","count",2139924085),Hf=new K(null,"status","status",-1997798413),wf=new K(null,"eventName","eventName",-1311990110),He=new K(null,"fallback-impl","fallback-impl",-1501286995),xf=new K(null,"Records","Records",-1562168015),yf=new K(null,"dynamodb","dynamodb",2099853782),bg=new K(null,"language","language",-1591107564),qa=new K(null,"readably","readably",
1129599760),Qe=new K(null,"keyword-fn","keyword-fn",-64566675),lg=new K(null,"Keys","Keys",655126131),Ge=new K(null,"alt-impl","alt-impl",670969595),Af=new K(null,"retraction","retraction",-317713819),mg=new K(null,"PK","PK",-1709310568),qf=new K("cljs.core","not-found","cljs.core/not-found",-1572889185),dg=new K(null,"location","location",1815599388),sa=new K(null,"dup","dup",556298533),ye=new K(null,"more-marker","more-marker",-14717935),gg=new K(null,"StreamName","StreamName",-1277700593),Bf=new K(null,
"OldImage","OldImage",-802379691),eg=new K(null,"region","region",270415120);function Cf(a,b){return cd($c,nf(function(c){var d=X(c,0,null);c=X(c,1,null);c=tf.g(c);return v(c)?new od(null,2,5,ud,[d,c],null):null},pf(a,b)))}function Df(a,b){var c=Zc(b);b=I.l(c,cg,null);var d=I.l(c,Af,!1);c=I.l(c,sf,0);return ec.J(a,cg,b,$b([sf,c,Af,d,vf,v(d)?-1:1]))}var ng=function ng(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ng.J(arguments[0],arguments[1],2<c.length?new N(c.slice(2),0,null):null)};
ng.J=function(a,b,c){var d=X(c,0,null);return Ef(function(e){a:{var f=Y.h(Gc,b),h=$b([Gc.g(d)]),k=X(h,0,null);h=of(e,new od(null,2,5,ud,[yf,uf],null));if(v(k)){var l=Cf(of(e,new od(null,2,5,ud,[yf,lg],null)),new od(null,1,5,ud,[k],null));k=k.g?k.g(l):k.call(null,l)}else k=null;l=wf.g(e);var m=Cf(of(e,new od(null,2,5,ud,[yf,Bf],null)),f);e=Cf(of(e,new od(null,2,5,ud,[yf,rf],null)),f);switch(l){case "INSERT":e=new od(null,1,5,ud,[Df(e,$b([new oa(null,3,[cg,k,sf,h,Af,!1],null)]))],null);break a;case "MODIFY":e=
S.h(m,e)?null:new od(null,2,5,ud,[Df(m,$b([new oa(null,3,[cg,k,sf,h,Af,!0],null)])),Df(e,$b([new oa(null,3,[cg,k,sf,h,Af,!1],null)]))],null);break a;case "REMOVE":e=new od(null,1,5,ud,[Df(m,$b([new oa(null,3,[cg,k,sf,h,Af,!0],null)]))],null);break a;default:throw Error(["No matching clause: ",z.g(l)].join(""));}}return e},$b([xf.g(Vf(a))]))};ng.Y=2;ng.X=function(a){var b=O(a),c=R(a);a=O(c);c=R(c);return this.J(b,a,c)};var og=ag.h(Pe,ng);var ig=__nccwpck_require__(5474);var jg=new ig.KinesisClient(new oa(null,1,[eg,"eu-west-1"],null)),kg=process.env.KINESIS_STREAM,Gf=function Gf(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Gf.J(arguments[0],arguments[1],2<c.length?new N(c.slice(2),0,null):null)};Gf.J=function(a,b,c){var d=X(c,0,null);return function(e,f,h){e=ng.J(e,a,$b([d]));return b.h?b.h(e,h):b.call(null,e,h)}};Gf.Y=2;Gf.X=function(a){var b=O(a),c=R(a);a=O(c);c=R(c);return this.J(b,a,c)};
var qg=Gf.J(new od(null,4,5,ud,[zf,dg,Hf,bg],null),function(a,b){a=Y.h(function(c){var d=Buffer.from(JSON.stringify(Pe(c)));c=cg.g(c);return new oa(null,2,[fg,d,hg,v(c)?c:"1"],null)},a);a=new ig.PutRecordsCommand(Pe(new oa(null,2,[gg,kg,xf,a],null)));return jg.send(a,b)},$b([mg]));shadow$umd$export={handler:Gf(new od(null,4,5,ud,[zf,dg,Hf,bg],null),function(a){a=$b([a]);var b=ec.l(na(),qa,!1);Ae(Ie(a,b));v(ka)?(a=na(),Ae("\n"),a=(I.h(a,pa),null)):a=null;return a}),kinesisHandler:qg,makeHandler:Gf,processDynamoDBStreamEvent:og};return shadow$umd$export;
});

/***/ }),

/***/ 2374:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = void 0;
var tslib_1 = __nccwpck_require__(5066);
var util_1 = __nccwpck_require__(1236);
var index_1 = __nccwpck_require__(7327);
var AwsCrc32 = /** @class */ (function () {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function (toHash) {
        if ((0, util_1.isEmptyData)(toHash))
            return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, (0, util_1.numToUint8)(this.crc32.digest())];
            });
        });
    };
    return AwsCrc32;
}());
exports.AwsCrc32 = AwsCrc32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzX2NyYzMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2F3c19jcmMzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLHNDQUFzQzs7OztBQUd0Qyx5Q0FBNEU7QUFDNUUsaUNBQWdDO0FBRWhDO0lBQUE7UUFDbUIsVUFBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7SUFXdkMsQ0FBQztJQVRDLHlCQUFNLEdBQU4sVUFBTyxNQUFrQjtRQUN2QixJQUFJLElBQUEsa0JBQVcsRUFBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUEsc0JBQWUsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFSyx5QkFBTSxHQUFaOzs7Z0JBQ0Usc0JBQU8sSUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQzs7O0tBQ3hDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSGFzaCwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydFRvQnVmZmVyLCBpc0VtcHR5RGF0YSwgbnVtVG9VaW50OCB9IGZyb20gXCJAYXdzLWNyeXB0by91dGlsXCI7XG5pbXBvcnQgeyBDcmMzMiB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBBd3NDcmMzMiBpbXBsZW1lbnRzIEhhc2gge1xuICBwcml2YXRlIHJlYWRvbmx5IGNyYzMyID0gbmV3IENyYzMyKCk7XG5cbiAgdXBkYXRlKHRvSGFzaDogU291cmNlRGF0YSkge1xuICAgIGlmIChpc0VtcHR5RGF0YSh0b0hhc2gpKSByZXR1cm47XG5cbiAgICB0aGlzLmNyYzMyLnVwZGF0ZShjb252ZXJ0VG9CdWZmZXIodG9IYXNoKSk7XG4gIH1cblxuICBhc3luYyBkaWdlc3QoKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gICAgcmV0dXJuIG51bVRvVWludDgodGhpcy5jcmMzMi5kaWdlc3QoKSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 7327:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __nccwpck_require__(5066);
var util_1 = __nccwpck_require__(1236);
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = (0, tslib_1.__values)(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __nccwpck_require__(2374);
Object.defineProperty(exports, "AwsCrc32", ({ enumerable: true, get: function () { return aws_crc32_1.AwsCrc32; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlDQUFpRDtBQUVqRCxTQUFnQixLQUFLLENBQUMsSUFBZ0I7SUFDcEMsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBRkQsc0JBRUM7QUFFRDtJQUFBO1FBQ1UsYUFBUSxHQUFHLFVBQVUsQ0FBQztJQWNoQyxDQUFDO0lBWkMsc0JBQU0sR0FBTixVQUFPLElBQWdCOzs7WUFDckIsS0FBbUIsSUFBQSxTQUFBLHNCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBcEIsSUFBTSxJQUFJLGlCQUFBO2dCQUNiLElBQUksQ0FBQyxRQUFRO29CQUNYLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RFOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxzQkFBSztBQWlCbEIsa0JBQWtCO0FBQ2xCLElBQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7Q0FDL0MsQ0FBQztBQUNGLElBQU0sV0FBVyxHQUFnQixJQUFBLHNCQUFlLEVBQUMsYUFBYSxDQUFDLENBQUE7QUFDL0QseUNBQXVDO0FBQTlCLHFHQUFBLFFBQVEsT0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dWludDMyQXJyYXlGcm9tfSBmcm9tIFwiQGF3cy1jcnlwdG8vdXRpbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JjMzIoZGF0YTogVWludDhBcnJheSk6IG51bWJlciB7XG4gIHJldHVybiBuZXcgQ3JjMzIoKS51cGRhdGUoZGF0YSkuZGlnZXN0KCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmMzMiB7XG4gIHByaXZhdGUgY2hlY2tzdW0gPSAweGZmZmZmZmZmO1xuXG4gIHVwZGF0ZShkYXRhOiBVaW50OEFycmF5KTogdGhpcyB7XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGRhdGEpIHtcbiAgICAgIHRoaXMuY2hlY2tzdW0gPVxuICAgICAgICAodGhpcy5jaGVja3N1bSA+Pj4gOCkgXiBsb29rdXBUYWJsZVsodGhpcy5jaGVja3N1bSBeIGJ5dGUpICYgMHhmZl07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaWdlc3QoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuY2hlY2tzdW0gXiAweGZmZmZmZmZmKSA+Pj4gMDtcbiAgfVxufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGFfbG9va1VwVGFibGUgPSBbXG4gIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4RUUwRTYxMkMsIDB4OTkwOTUxQkEsXG4gIDB4MDc2REM0MTksIDB4NzA2QUY0OEYsIDB4RTk2M0E1MzUsIDB4OUU2NDk1QTMsXG4gIDB4MEVEQjg4MzIsIDB4NzlEQ0I4QTQsIDB4RTBENUU5MUUsIDB4OTdEMkQ5ODgsXG4gIDB4MDlCNjRDMkIsIDB4N0VCMTdDQkQsIDB4RTdCODJEMDcsIDB4OTBCRjFEOTEsXG4gIDB4MURCNzEwNjQsIDB4NkFCMDIwRjIsIDB4RjNCOTcxNDgsIDB4ODRCRTQxREUsXG4gIDB4MUFEQUQ0N0QsIDB4NkREREU0RUIsIDB4RjRENEI1NTEsIDB4ODNEMzg1QzcsXG4gIDB4MTM2Qzk4NTYsIDB4NjQ2QkE4QzAsIDB4RkQ2MkY5N0EsIDB4OEE2NUM5RUMsXG4gIDB4MTQwMTVDNEYsIDB4NjMwNjZDRDksIDB4RkEwRjNENjMsIDB4OEQwODBERjUsXG4gIDB4M0I2RTIwQzgsIDB4NEM2OTEwNUUsIDB4RDU2MDQxRTQsIDB4QTI2NzcxNzIsXG4gIDB4M0MwM0U0RDEsIDB4NEIwNEQ0NDcsIDB4RDIwRDg1RkQsIDB4QTUwQUI1NkIsXG4gIDB4MzVCNUE4RkEsIDB4NDJCMjk4NkMsIDB4REJCQkM5RDYsIDB4QUNCQ0Y5NDAsXG4gIDB4MzJEODZDRTMsIDB4NDVERjVDNzUsIDB4RENENjBEQ0YsIDB4QUJEMTNENTksXG4gIDB4MjZEOTMwQUMsIDB4NTFERTAwM0EsIDB4QzhENzUxODAsIDB4QkZEMDYxMTYsXG4gIDB4MjFCNEY0QjUsIDB4NTZCM0M0MjMsIDB4Q0ZCQTk1OTksIDB4QjhCREE1MEYsXG4gIDB4MjgwMkI4OUUsIDB4NUYwNTg4MDgsIDB4QzYwQ0Q5QjIsIDB4QjEwQkU5MjQsXG4gIDB4MkY2RjdDODcsIDB4NTg2ODRDMTEsIDB4QzE2MTFEQUIsIDB4QjY2NjJEM0QsXG4gIDB4NzZEQzQxOTAsIDB4MDFEQjcxMDYsIDB4OThEMjIwQkMsIDB4RUZENTEwMkEsXG4gIDB4NzFCMTg1ODksIDB4MDZCNkI1MUYsIDB4OUZCRkU0QTUsIDB4RThCOEQ0MzMsXG4gIDB4NzgwN0M5QTIsIDB4MEYwMEY5MzQsIDB4OTYwOUE4OEUsIDB4RTEwRTk4MTgsXG4gIDB4N0Y2QTBEQkIsIDB4MDg2RDNEMkQsIDB4OTE2NDZDOTcsIDB4RTY2MzVDMDEsXG4gIDB4NkI2QjUxRjQsIDB4MUM2QzYxNjIsIDB4ODU2NTMwRDgsIDB4RjI2MjAwNEUsXG4gIDB4NkMwNjk1RUQsIDB4MUIwMUE1N0IsIDB4ODIwOEY0QzEsIDB4RjUwRkM0NTcsXG4gIDB4NjVCMEQ5QzYsIDB4MTJCN0U5NTAsIDB4OEJCRUI4RUEsIDB4RkNCOTg4N0MsXG4gIDB4NjJERDFEREYsIDB4MTVEQTJENDksIDB4OENEMzdDRjMsIDB4RkJENDRDNjUsXG4gIDB4NERCMjYxNTgsIDB4M0FCNTUxQ0UsIDB4QTNCQzAwNzQsIDB4RDRCQjMwRTIsXG4gIDB4NEFERkE1NDEsIDB4M0REODk1RDcsIDB4QTREMUM0NkQsIDB4RDNENkY0RkIsXG4gIDB4NDM2OUU5NkEsIDB4MzQ2RUQ5RkMsIDB4QUQ2Nzg4NDYsIDB4REE2MEI4RDAsXG4gIDB4NDQwNDJENzMsIDB4MzMwMzFERTUsIDB4QUEwQTRDNUYsIDB4REQwRDdDQzksXG4gIDB4NTAwNTcxM0MsIDB4MjcwMjQxQUEsIDB4QkUwQjEwMTAsIDB4QzkwQzIwODYsXG4gIDB4NTc2OEI1MjUsIDB4MjA2Rjg1QjMsIDB4Qjk2NkQ0MDksIDB4Q0U2MUU0OUYsXG4gIDB4NUVERUY5MEUsIDB4MjlEOUM5OTgsIDB4QjBEMDk4MjIsIDB4QzdEN0E4QjQsXG4gIDB4NTlCMzNEMTcsIDB4MkVCNDBEODEsIDB4QjdCRDVDM0IsIDB4QzBCQTZDQUQsXG4gIDB4RURCODgzMjAsIDB4OUFCRkIzQjYsIDB4MDNCNkUyMEMsIDB4NzRCMUQyOUEsXG4gIDB4RUFENTQ3MzksIDB4OUREMjc3QUYsIDB4MDREQjI2MTUsIDB4NzNEQzE2ODMsXG4gIDB4RTM2MzBCMTIsIDB4OTQ2NDNCODQsIDB4MEQ2RDZBM0UsIDB4N0E2QTVBQTgsXG4gIDB4RTQwRUNGMEIsIDB4OTMwOUZGOUQsIDB4MEEwMEFFMjcsIDB4N0QwNzlFQjEsXG4gIDB4RjAwRjkzNDQsIDB4ODcwOEEzRDIsIDB4MUUwMUYyNjgsIDB4NjkwNkMyRkUsXG4gIDB4Rjc2MjU3NUQsIDB4ODA2NTY3Q0IsIDB4MTk2QzM2NzEsIDB4NkU2QjA2RTcsXG4gIDB4RkVENDFCNzYsIDB4ODlEMzJCRTAsIDB4MTBEQTdBNUEsIDB4NjdERDRBQ0MsXG4gIDB4RjlCOURGNkYsIDB4OEVCRUVGRjksIDB4MTdCN0JFNDMsIDB4NjBCMDhFRDUsXG4gIDB4RDZENkEzRTgsIDB4QTFEMTkzN0UsIDB4MzhEOEMyQzQsIDB4NEZERkYyNTIsXG4gIDB4RDFCQjY3RjEsIDB4QTZCQzU3NjcsIDB4M0ZCNTA2REQsIDB4NDhCMjM2NEIsXG4gIDB4RDgwRDJCREEsIDB4QUYwQTFCNEMsIDB4MzYwMzRBRjYsIDB4NDEwNDdBNjAsXG4gIDB4REY2MEVGQzMsIDB4QTg2N0RGNTUsIDB4MzE2RThFRUYsIDB4NDY2OUJFNzksXG4gIDB4Q0I2MUIzOEMsIDB4QkM2NjgzMUEsIDB4MjU2RkQyQTAsIDB4NTI2OEUyMzYsXG4gIDB4Q0MwQzc3OTUsIDB4QkIwQjQ3MDMsIDB4MjIwMjE2QjksIDB4NTUwNTI2MkYsXG4gIDB4QzVCQTNCQkUsIDB4QjJCRDBCMjgsIDB4MkJCNDVBOTIsIDB4NUNCMzZBMDQsXG4gIDB4QzJEN0ZGQTcsIDB4QjVEMENGMzEsIDB4MkNEOTlFOEIsIDB4NUJERUFFMUQsXG4gIDB4OUI2NEMyQjAsIDB4RUM2M0YyMjYsIDB4NzU2QUEzOUMsIDB4MDI2RDkzMEEsXG4gIDB4OUMwOTA2QTksIDB4RUIwRTM2M0YsIDB4NzIwNzY3ODUsIDB4MDUwMDU3MTMsXG4gIDB4OTVCRjRBODIsIDB4RTJCODdBMTQsIDB4N0JCMTJCQUUsIDB4MENCNjFCMzgsXG4gIDB4OTJEMjhFOUIsIDB4RTVENUJFMEQsIDB4N0NEQ0VGQjcsIDB4MEJEQkRGMjEsXG4gIDB4ODZEM0QyRDQsIDB4RjFENEUyNDIsIDB4NjhEREIzRjgsIDB4MUZEQTgzNkUsXG4gIDB4ODFCRTE2Q0QsIDB4RjZCOTI2NUIsIDB4NkZCMDc3RTEsIDB4MThCNzQ3NzcsXG4gIDB4ODgwODVBRTYsIDB4RkYwRjZBNzAsIDB4NjYwNjNCQ0EsIDB4MTEwMTBCNUMsXG4gIDB4OEY2NTlFRkYsIDB4Rjg2MkFFNjksIDB4NjE2QkZGRDMsIDB4MTY2Q0NGNDUsXG4gIDB4QTAwQUUyNzgsIDB4RDcwREQyRUUsIDB4NEUwNDgzNTQsIDB4MzkwM0IzQzIsXG4gIDB4QTc2NzI2NjEsIDB4RDA2MDE2RjcsIDB4NDk2OTQ3NEQsIDB4M0U2RTc3REIsXG4gIDB4QUVEMTZBNEEsIDB4RDlENjVBREMsIDB4NDBERjBCNjYsIDB4MzdEODNCRjAsXG4gIDB4QTlCQ0FFNTMsIDB4REVCQjlFQzUsIDB4NDdCMkNGN0YsIDB4MzBCNUZGRTksXG4gIDB4QkRCREYyMUMsIDB4Q0FCQUMyOEEsIDB4NTNCMzkzMzAsIDB4MjRCNEEzQTYsXG4gIDB4QkFEMDM2MDUsIDB4Q0RENzA2OTMsIDB4NTRERTU3MjksIDB4MjNEOTY3QkYsXG4gIDB4QjM2NjdBMkUsIDB4QzQ2MTRBQjgsIDB4NUQ2ODFCMDIsIDB4MkE2RjJCOTQsXG4gIDB4QjQwQkJFMzcsIDB4QzMwQzhFQTEsIDB4NUEwNURGMUIsIDB4MkQwMkVGOEQsXG5dO1xuY29uc3QgbG9va3VwVGFibGU6IFVpbnQzMkFycmF5ID0gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGUpXG5leHBvcnQgeyBBd3NDcmMzMiB9IGZyb20gXCIuL2F3c19jcmMzMlwiO1xuIl19

/***/ }),

/***/ 5066:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __createBinding = function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 3228:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __nccwpck_require__(8172);
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFRvQnVmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnZlcnRUb0J1ZmZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLHNDQUFzQzs7O0FBR3RDLGdFQUF5RTtBQUV6RSxpQkFBaUI7QUFDakIsSUFBTSxRQUFRLEdBQ1osT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJO0lBQzFDLENBQUMsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUExQixDQUEwQjtJQUMvQyxDQUFDLENBQUMsNEJBQWUsQ0FBQztBQUV0QixTQUFnQixlQUFlLENBQUMsSUFBZ0I7SUFDOUMsOEJBQThCO0lBQzlCLElBQUksSUFBSSxZQUFZLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQztJQUU1QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QjtJQUVELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM1QixPQUFPLElBQUksVUFBVSxDQUNuQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQy9DLENBQUM7S0FDSDtJQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQWpCRCwwQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZnJvbVV0ZjggYXMgZnJvbVV0ZjhCcm93c2VyIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyXCI7XG5cbi8vIFF1aWNrIHBvbHlmaWxsXG5jb25zdCBmcm9tVXRmOCA9XG4gIHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQnVmZmVyLmZyb21cbiAgICA/IChpbnB1dDogc3RyaW5nKSA9PiBCdWZmZXIuZnJvbShpbnB1dCwgXCJ1dGY4XCIpXG4gICAgOiBmcm9tVXRmOEJyb3dzZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXIoZGF0YTogU291cmNlRGF0YSk6IFVpbnQ4QXJyYXkge1xuICAvLyBBbHJlYWR5IGEgVWludDgsIGRvIG5vdGhpbmdcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSByZXR1cm4gZGF0YTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFxuICAgICAgZGF0YS5idWZmZXIsXG4gICAgICBkYXRhLmJ5dGVPZmZzZXQsXG4gICAgICBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn1cbiJdfQ==

/***/ }),

/***/ 1236:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __nccwpck_require__(3228);
Object.defineProperty(exports, "convertToBuffer", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));
var isEmptyData_1 = __nccwpck_require__(8275);
Object.defineProperty(exports, "isEmptyData", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));
var numToUint8_1 = __nccwpck_require__(3775);
Object.defineProperty(exports, "numToUint8", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));
var uint32ArrayFrom_1 = __nccwpck_require__(9404);
Object.defineProperty(exports, "uint32ArrayFrom", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFvRTtBQUNwRSxzQ0FBc0M7OztBQUV0QyxxREFBb0Q7QUFBM0Msa0hBQUEsZUFBZSxPQUFBO0FBQ3hCLDZDQUE0QztBQUFuQywwR0FBQSxXQUFXLE9BQUE7QUFDcEIsMkNBQTBDO0FBQWpDLHdHQUFBLFVBQVUsT0FBQTtBQUNuQixxREFBa0Q7QUFBMUMsa0hBQUEsZUFBZSxPQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCB7IGNvbnZlcnRUb0J1ZmZlciB9IGZyb20gXCIuL2NvbnZlcnRUb0J1ZmZlclwiO1xuZXhwb3J0IHsgaXNFbXB0eURhdGEgfSBmcm9tIFwiLi9pc0VtcHR5RGF0YVwiO1xuZXhwb3J0IHsgbnVtVG9VaW50OCB9IGZyb20gXCIuL251bVRvVWludDhcIjtcbmV4cG9ydCB7dWludDMyQXJyYXlGcm9tfSBmcm9tICcuL3VpbnQzMkFycmF5RnJvbSc7XG4iXX0=

/***/ }),

/***/ 8275:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFbXB0eURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXNFbXB0eURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFvRTtBQUNwRSxzQ0FBc0M7OztBQUl0QyxTQUFnQixXQUFXLENBQUMsSUFBZ0I7SUFDMUMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQU5ELGtDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlEYXRhKGRhdGE6IFNvdXJjZURhdGEpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEuYnl0ZUxlbmd0aCA9PT0gMDtcbn1cbiJdfQ==

/***/ }),

/***/ 3775:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtVG9VaW50OC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9udW1Ub1VpbnQ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBb0U7QUFDcEUsc0NBQXNDOzs7QUFFdEMsU0FBZ0IsVUFBVSxDQUFDLEdBQVc7SUFDcEMsT0FBTyxJQUFJLFVBQVUsQ0FBQztRQUNwQixDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFO1FBQ3hCLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7UUFDeEIsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN2QixHQUFHLEdBQUcsVUFBVTtLQUNqQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBUEQsZ0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGZ1bmN0aW9uIG51bVRvVWludDgobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAobnVtICYgMHhmZjAwMDAwMCkgPj4gMjQsXG4gICAgKG51bSAmIDB4MDBmZjAwMDApID4+IDE2LFxuICAgIChudW0gJiAweDAwMDBmZjAwKSA+PiA4LFxuICAgIG51bSAmIDB4MDAwMDAwZmYsXG4gIF0pO1xufVxuIl19

/***/ }),

/***/ 9404:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWludDMyQXJyYXlGcm9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VpbnQzMkFycmF5RnJvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLHNDQUFzQzs7O0FBRXRDLDBEQUEwRDtBQUMxRCxTQUFnQixlQUFlLENBQUMsYUFBNEI7SUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDckIsSUFBTSxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUNmLE9BQU8sT0FBTyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5QyxPQUFPLElBQUksQ0FBQyxDQUFBO1NBQ2I7UUFDRCxPQUFPLFlBQVksQ0FBQTtLQUNwQjtJQUNELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUN4QyxDQUFDO0FBWEQsMENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tLCBzbyB3ZSBkbyBpdCBtYW51YWxseVxuZXhwb3J0IGZ1bmN0aW9uIHVpbnQzMkFycmF5RnJvbShhX2xvb2tVcFRhYmxlOiBBcnJheTxudW1iZXI+KTogVWludDMyQXJyYXkge1xuICBpZiAoIVVpbnQzMkFycmF5LmZyb20pIHtcbiAgICBjb25zdCByZXR1cm5fYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYV9sb29rVXBUYWJsZS5sZW5ndGgpXG4gICAgbGV0IGFfaW5kZXggPSAwXG4gICAgd2hpbGUgKGFfaW5kZXggPCBhX2xvb2tVcFRhYmxlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuX2FycmF5W2FfaW5kZXhdID0gYV9sb29rVXBUYWJsZVthX2luZGV4XVxuICAgICAgYV9pbmRleCArPSAxXG4gICAgfVxuICAgIHJldHVybiByZXR1cm5fYXJyYXlcbiAgfVxuICByZXR1cm4gVWludDMyQXJyYXkuZnJvbShhX2xvb2tVcFRhYmxlKVxufVxuIl19

/***/ }),

/***/ 9406:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Kinesis = void 0;
const AddTagsToStreamCommand_1 = __nccwpck_require__(2987);
const CreateStreamCommand_1 = __nccwpck_require__(8107);
const DecreaseStreamRetentionPeriodCommand_1 = __nccwpck_require__(5161);
const DeleteStreamCommand_1 = __nccwpck_require__(129);
const DeregisterStreamConsumerCommand_1 = __nccwpck_require__(2221);
const DescribeLimitsCommand_1 = __nccwpck_require__(9658);
const DescribeStreamCommand_1 = __nccwpck_require__(4825);
const DescribeStreamConsumerCommand_1 = __nccwpck_require__(8266);
const DescribeStreamSummaryCommand_1 = __nccwpck_require__(2194);
const DisableEnhancedMonitoringCommand_1 = __nccwpck_require__(1505);
const EnableEnhancedMonitoringCommand_1 = __nccwpck_require__(9304);
const GetRecordsCommand_1 = __nccwpck_require__(1586);
const GetShardIteratorCommand_1 = __nccwpck_require__(2982);
const IncreaseStreamRetentionPeriodCommand_1 = __nccwpck_require__(3938);
const ListShardsCommand_1 = __nccwpck_require__(4358);
const ListStreamConsumersCommand_1 = __nccwpck_require__(5250);
const ListStreamsCommand_1 = __nccwpck_require__(9151);
const ListTagsForStreamCommand_1 = __nccwpck_require__(4079);
const MergeShardsCommand_1 = __nccwpck_require__(8301);
const PutRecordCommand_1 = __nccwpck_require__(5601);
const PutRecordsCommand_1 = __nccwpck_require__(3177);
const RegisterStreamConsumerCommand_1 = __nccwpck_require__(3670);
const RemoveTagsFromStreamCommand_1 = __nccwpck_require__(5181);
const SplitShardCommand_1 = __nccwpck_require__(2925);
const StartStreamEncryptionCommand_1 = __nccwpck_require__(1717);
const StopStreamEncryptionCommand_1 = __nccwpck_require__(2128);
const SubscribeToShardCommand_1 = __nccwpck_require__(9898);
const UpdateShardCountCommand_1 = __nccwpck_require__(9845);
const UpdateStreamModeCommand_1 = __nccwpck_require__(7251);
const KinesisClient_1 = __nccwpck_require__(4741);
class Kinesis extends KinesisClient_1.KinesisClient {
    addTagsToStream(args, optionsOrCb, cb) {
        const command = new AddTagsToStreamCommand_1.AddTagsToStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStream(args, optionsOrCb, cb) {
        const command = new CreateStreamCommand_1.CreateStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    decreaseStreamRetentionPeriod(args, optionsOrCb, cb) {
        const command = new DecreaseStreamRetentionPeriodCommand_1.DecreaseStreamRetentionPeriodCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStream(args, optionsOrCb, cb) {
        const command = new DeleteStreamCommand_1.DeleteStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterStreamConsumer(args, optionsOrCb, cb) {
        const command = new DeregisterStreamConsumerCommand_1.DeregisterStreamConsumerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLimits(args, optionsOrCb, cb) {
        const command = new DescribeLimitsCommand_1.DescribeLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStream(args, optionsOrCb, cb) {
        const command = new DescribeStreamCommand_1.DescribeStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStreamConsumer(args, optionsOrCb, cb) {
        const command = new DescribeStreamConsumerCommand_1.DescribeStreamConsumerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStreamSummary(args, optionsOrCb, cb) {
        const command = new DescribeStreamSummaryCommand_1.DescribeStreamSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableEnhancedMonitoring(args, optionsOrCb, cb) {
        const command = new DisableEnhancedMonitoringCommand_1.DisableEnhancedMonitoringCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableEnhancedMonitoring(args, optionsOrCb, cb) {
        const command = new EnableEnhancedMonitoringCommand_1.EnableEnhancedMonitoringCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRecords(args, optionsOrCb, cb) {
        const command = new GetRecordsCommand_1.GetRecordsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getShardIterator(args, optionsOrCb, cb) {
        const command = new GetShardIteratorCommand_1.GetShardIteratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    increaseStreamRetentionPeriod(args, optionsOrCb, cb) {
        const command = new IncreaseStreamRetentionPeriodCommand_1.IncreaseStreamRetentionPeriodCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listShards(args, optionsOrCb, cb) {
        const command = new ListShardsCommand_1.ListShardsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStreamConsumers(args, optionsOrCb, cb) {
        const command = new ListStreamConsumersCommand_1.ListStreamConsumersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStreams(args, optionsOrCb, cb) {
        const command = new ListStreamsCommand_1.ListStreamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForStream(args, optionsOrCb, cb) {
        const command = new ListTagsForStreamCommand_1.ListTagsForStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    mergeShards(args, optionsOrCb, cb) {
        const command = new MergeShardsCommand_1.MergeShardsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRecord(args, optionsOrCb, cb) {
        const command = new PutRecordCommand_1.PutRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRecords(args, optionsOrCb, cb) {
        const command = new PutRecordsCommand_1.PutRecordsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerStreamConsumer(args, optionsOrCb, cb) {
        const command = new RegisterStreamConsumerCommand_1.RegisterStreamConsumerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromStream(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromStreamCommand_1.RemoveTagsFromStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    splitShard(args, optionsOrCb, cb) {
        const command = new SplitShardCommand_1.SplitShardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startStreamEncryption(args, optionsOrCb, cb) {
        const command = new StartStreamEncryptionCommand_1.StartStreamEncryptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopStreamEncryption(args, optionsOrCb, cb) {
        const command = new StopStreamEncryptionCommand_1.StopStreamEncryptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    subscribeToShard(args, optionsOrCb, cb) {
        const command = new SubscribeToShardCommand_1.SubscribeToShardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateShardCount(args, optionsOrCb, cb) {
        const command = new UpdateShardCountCommand_1.UpdateShardCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStreamMode(args, optionsOrCb, cb) {
        const command = new UpdateStreamModeCommand_1.UpdateStreamModeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Kinesis = Kinesis;


/***/ }),

/***/ 4741:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KinesisClient = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const eventstream_serde_config_resolver_1 = __nccwpck_require__(3271);
const middleware_content_length_1 = __nccwpck_require__(2245);
const middleware_host_header_1 = __nccwpck_require__(2545);
const middleware_logger_1 = __nccwpck_require__(14);
const middleware_recursion_detection_1 = __nccwpck_require__(5525);
const middleware_retry_1 = __nccwpck_require__(6064);
const middleware_signing_1 = __nccwpck_require__(4935);
const middleware_user_agent_1 = __nccwpck_require__(4688);
const smithy_client_1 = __nccwpck_require__(4963);
const runtimeConfig_1 = __nccwpck_require__(6711);
class KinesisClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_signing_1.resolveAwsAuthConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, eventstream_serde_config_resolver_1.resolveEventStreamSerdeConfig)(_config_6);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.KinesisClient = KinesisClient;


/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTagsToStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class AddTagsToStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "AddTagsToStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddTagsToStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1AddTagsToStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1AddTagsToStreamCommand)(output, context);
    }
}
exports.AddTagsToStreamCommand = AddTagsToStreamCommand;


/***/ }),

/***/ 8107:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class CreateStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "CreateStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1CreateStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1CreateStreamCommand)(output, context);
    }
}
exports.CreateStreamCommand = CreateStreamCommand;


/***/ }),

/***/ 5161:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecreaseStreamRetentionPeriodCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DecreaseStreamRetentionPeriodCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DecreaseStreamRetentionPeriodCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DecreaseStreamRetentionPeriodInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DecreaseStreamRetentionPeriodCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand)(output, context);
    }
}
exports.DecreaseStreamRetentionPeriodCommand = DecreaseStreamRetentionPeriodCommand;


/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DeleteStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DeleteStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DeleteStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DeleteStreamCommand)(output, context);
    }
}
exports.DeleteStreamCommand = DeleteStreamCommand;


/***/ }),

/***/ 2221:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeregisterStreamConsumerCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DeregisterStreamConsumerCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DeregisterStreamConsumerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeregisterStreamConsumerInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DeregisterStreamConsumerCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DeregisterStreamConsumerCommand)(output, context);
    }
}
exports.DeregisterStreamConsumerCommand = DeregisterStreamConsumerCommand;


/***/ }),

/***/ 9658:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DescribeLimitsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DescribeLimitsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DescribeLimitsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeLimitsInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeLimitsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DescribeLimitsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DescribeLimitsCommand)(output, context);
    }
}
exports.DescribeLimitsCommand = DescribeLimitsCommand;


/***/ }),

/***/ 4825:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DescribeStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DescribeStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DescribeStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeStreamOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DescribeStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DescribeStreamCommand)(output, context);
    }
}
exports.DescribeStreamCommand = DescribeStreamCommand;


/***/ }),

/***/ 8266:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DescribeStreamConsumerCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DescribeStreamConsumerCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DescribeStreamConsumerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeStreamConsumerInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeStreamConsumerOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DescribeStreamConsumerCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DescribeStreamConsumerCommand)(output, context);
    }
}
exports.DescribeStreamConsumerCommand = DescribeStreamConsumerCommand;


/***/ }),

/***/ 2194:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DescribeStreamSummaryCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DescribeStreamSummaryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DescribeStreamSummaryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeStreamSummaryInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeStreamSummaryOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DescribeStreamSummaryCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DescribeStreamSummaryCommand)(output, context);
    }
}
exports.DescribeStreamSummaryCommand = DescribeStreamSummaryCommand;


/***/ }),

/***/ 1505:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DisableEnhancedMonitoringCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class DisableEnhancedMonitoringCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "DisableEnhancedMonitoringCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisableEnhancedMonitoringInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.EnhancedMonitoringOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1DisableEnhancedMonitoringCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1DisableEnhancedMonitoringCommand)(output, context);
    }
}
exports.DisableEnhancedMonitoringCommand = DisableEnhancedMonitoringCommand;


/***/ }),

/***/ 9304:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnableEnhancedMonitoringCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class EnableEnhancedMonitoringCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "EnableEnhancedMonitoringCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.EnableEnhancedMonitoringInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.EnhancedMonitoringOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1EnableEnhancedMonitoringCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1EnableEnhancedMonitoringCommand)(output, context);
    }
}
exports.EnableEnhancedMonitoringCommand = EnableEnhancedMonitoringCommand;


/***/ }),

/***/ 1586:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetRecordsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class GetRecordsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "GetRecordsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRecordsInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRecordsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1GetRecordsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1GetRecordsCommand)(output, context);
    }
}
exports.GetRecordsCommand = GetRecordsCommand;


/***/ }),

/***/ 2982:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetShardIteratorCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class GetShardIteratorCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "GetShardIteratorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetShardIteratorInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetShardIteratorOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1GetShardIteratorCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1GetShardIteratorCommand)(output, context);
    }
}
exports.GetShardIteratorCommand = GetShardIteratorCommand;


/***/ }),

/***/ 3938:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncreaseStreamRetentionPeriodCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class IncreaseStreamRetentionPeriodCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "IncreaseStreamRetentionPeriodCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.IncreaseStreamRetentionPeriodInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1IncreaseStreamRetentionPeriodCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand)(output, context);
    }
}
exports.IncreaseStreamRetentionPeriodCommand = IncreaseStreamRetentionPeriodCommand;


/***/ }),

/***/ 4358:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListShardsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class ListShardsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "ListShardsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListShardsInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListShardsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1ListShardsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1ListShardsCommand)(output, context);
    }
}
exports.ListShardsCommand = ListShardsCommand;


/***/ }),

/***/ 5250:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListStreamConsumersCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class ListStreamConsumersCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "ListStreamConsumersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListStreamConsumersInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListStreamConsumersOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1ListStreamConsumersCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1ListStreamConsumersCommand)(output, context);
    }
}
exports.ListStreamConsumersCommand = ListStreamConsumersCommand;


/***/ }),

/***/ 9151:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListStreamsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class ListStreamsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "ListStreamsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListStreamsInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListStreamsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1ListStreamsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1ListStreamsCommand)(output, context);
    }
}
exports.ListStreamsCommand = ListStreamsCommand;


/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListTagsForStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class ListTagsForStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "ListTagsForStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTagsForStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTagsForStreamOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1ListTagsForStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1ListTagsForStreamCommand)(output, context);
    }
}
exports.ListTagsForStreamCommand = ListTagsForStreamCommand;


/***/ }),

/***/ 8301:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergeShardsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class MergeShardsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "MergeShardsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.MergeShardsInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1MergeShardsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1MergeShardsCommand)(output, context);
    }
}
exports.MergeShardsCommand = MergeShardsCommand;


/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PutRecordCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class PutRecordCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "PutRecordCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutRecordInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutRecordOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1PutRecordCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1PutRecordCommand)(output, context);
    }
}
exports.PutRecordCommand = PutRecordCommand;


/***/ }),

/***/ 3177:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PutRecordsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class PutRecordsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "PutRecordsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutRecordsInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutRecordsOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1PutRecordsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1PutRecordsCommand)(output, context);
    }
}
exports.PutRecordsCommand = PutRecordsCommand;


/***/ }),

/***/ 3670:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterStreamConsumerCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class RegisterStreamConsumerCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "RegisterStreamConsumerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RegisterStreamConsumerInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RegisterStreamConsumerOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1RegisterStreamConsumerCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1RegisterStreamConsumerCommand)(output, context);
    }
}
exports.RegisterStreamConsumerCommand = RegisterStreamConsumerCommand;


/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveTagsFromStreamCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class RemoveTagsFromStreamCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "RemoveTagsFromStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RemoveTagsFromStreamInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1RemoveTagsFromStreamCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1RemoveTagsFromStreamCommand)(output, context);
    }
}
exports.RemoveTagsFromStreamCommand = RemoveTagsFromStreamCommand;


/***/ }),

/***/ 2925:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplitShardCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class SplitShardCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "SplitShardCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SplitShardInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1SplitShardCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1SplitShardCommand)(output, context);
    }
}
exports.SplitShardCommand = SplitShardCommand;


/***/ }),

/***/ 1717:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartStreamEncryptionCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class StartStreamEncryptionCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "StartStreamEncryptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartStreamEncryptionInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1StartStreamEncryptionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1StartStreamEncryptionCommand)(output, context);
    }
}
exports.StartStreamEncryptionCommand = StartStreamEncryptionCommand;


/***/ }),

/***/ 2128:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StopStreamEncryptionCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class StopStreamEncryptionCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "StopStreamEncryptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StopStreamEncryptionInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1StopStreamEncryptionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1StopStreamEncryptionCommand)(output, context);
    }
}
exports.StopStreamEncryptionCommand = StopStreamEncryptionCommand;


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscribeToShardCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class SubscribeToShardCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "SubscribeToShardCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SubscribeToShardInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SubscribeToShardOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1SubscribeToShardCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1SubscribeToShardCommand)(output, context);
    }
}
exports.SubscribeToShardCommand = SubscribeToShardCommand;


/***/ }),

/***/ 9845:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateShardCountCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class UpdateShardCountCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "UpdateShardCountCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateShardCountInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateShardCountOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1UpdateShardCountCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1UpdateShardCountCommand)(output, context);
    }
}
exports.UpdateShardCountCommand = UpdateShardCountCommand;


/***/ }),

/***/ 7251:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStreamModeCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1434);
const Aws_json1_1_1 = __nccwpck_require__(7171);
class UpdateStreamModeCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "UpdateStreamModeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateStreamModeInputFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1UpdateStreamModeCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1UpdateStreamModeCommand)(output, context);
    }
}
exports.UpdateStreamModeCommand = UpdateStreamModeCommand;


/***/ }),

/***/ 8417:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(2987), exports);
tslib_1.__exportStar(__nccwpck_require__(8107), exports);
tslib_1.__exportStar(__nccwpck_require__(5161), exports);
tslib_1.__exportStar(__nccwpck_require__(129), exports);
tslib_1.__exportStar(__nccwpck_require__(2221), exports);
tslib_1.__exportStar(__nccwpck_require__(9658), exports);
tslib_1.__exportStar(__nccwpck_require__(4825), exports);
tslib_1.__exportStar(__nccwpck_require__(8266), exports);
tslib_1.__exportStar(__nccwpck_require__(2194), exports);
tslib_1.__exportStar(__nccwpck_require__(1505), exports);
tslib_1.__exportStar(__nccwpck_require__(9304), exports);
tslib_1.__exportStar(__nccwpck_require__(1586), exports);
tslib_1.__exportStar(__nccwpck_require__(2982), exports);
tslib_1.__exportStar(__nccwpck_require__(3938), exports);
tslib_1.__exportStar(__nccwpck_require__(4358), exports);
tslib_1.__exportStar(__nccwpck_require__(5250), exports);
tslib_1.__exportStar(__nccwpck_require__(9151), exports);
tslib_1.__exportStar(__nccwpck_require__(4079), exports);
tslib_1.__exportStar(__nccwpck_require__(8301), exports);
tslib_1.__exportStar(__nccwpck_require__(5601), exports);
tslib_1.__exportStar(__nccwpck_require__(3177), exports);
tslib_1.__exportStar(__nccwpck_require__(3670), exports);
tslib_1.__exportStar(__nccwpck_require__(5181), exports);
tslib_1.__exportStar(__nccwpck_require__(2925), exports);
tslib_1.__exportStar(__nccwpck_require__(1717), exports);
tslib_1.__exportStar(__nccwpck_require__(2128), exports);
tslib_1.__exportStar(__nccwpck_require__(9898), exports);
tslib_1.__exportStar(__nccwpck_require__(9845), exports);
tslib_1.__exportStar(__nccwpck_require__(7251), exports);


/***/ }),

/***/ 9138:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const regionHash = {
    "us-east-1": {
        variants: [
            {
                hostname: "kinesis-fips.us-east-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-east-2": {
        variants: [
            {
                hostname: "kinesis-fips.us-east-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-gov-east-1": {
        variants: [
            {
                hostname: "kinesis.us-gov-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1": {
        variants: [
            {
                hostname: "kinesis.us-gov-west-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-west-1",
    },
    "us-west-1": {
        variants: [
            {
                hostname: "kinesis-fips.us-west-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-west-2": {
        variants: [
            {
                hostname: "kinesis-fips.us-west-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "fips-us-east-1",
            "fips-us-east-2",
            "fips-us-west-1",
            "fips-us-west-2",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "kinesis.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "kinesis-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "kinesis-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "kinesis.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "kinesis.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "kinesis-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "kinesis-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "kinesis.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "kinesis.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "kinesis-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "kinesis.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "kinesis-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "kinesis.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "kinesis-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "kinesis-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "kinesis.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "kinesis",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),

/***/ 5474:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KinesisServiceException = void 0;
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9406), exports);
tslib_1.__exportStar(__nccwpck_require__(4741), exports);
tslib_1.__exportStar(__nccwpck_require__(8417), exports);
tslib_1.__exportStar(__nccwpck_require__(98), exports);
tslib_1.__exportStar(__nccwpck_require__(2513), exports);
tslib_1.__exportStar(__nccwpck_require__(1148), exports);
var KinesisServiceException_1 = __nccwpck_require__(5831);
Object.defineProperty(exports, "KinesisServiceException", ({ enumerable: true, get: function () { return KinesisServiceException_1.KinesisServiceException; } }));


/***/ }),

/***/ 5831:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KinesisServiceException = void 0;
const smithy_client_1 = __nccwpck_require__(4963);
class KinesisServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, KinesisServiceException.prototype);
    }
}
exports.KinesisServiceException = KinesisServiceException;


/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(1434), exports);


/***/ }),

/***/ 1434:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnableEnhancedMonitoringInputFilterSensitiveLog = exports.EnhancedMonitoringOutputFilterSensitiveLog = exports.DisableEnhancedMonitoringInputFilterSensitiveLog = exports.DescribeStreamSummaryOutputFilterSensitiveLog = exports.StreamDescriptionSummaryFilterSensitiveLog = exports.DescribeStreamSummaryInputFilterSensitiveLog = exports.DescribeStreamConsumerOutputFilterSensitiveLog = exports.DescribeStreamConsumerInputFilterSensitiveLog = exports.DescribeStreamOutputFilterSensitiveLog = exports.StreamDescriptionFilterSensitiveLog = exports.ShardFilterSensitiveLog = exports.SequenceNumberRangeFilterSensitiveLog = exports.EnhancedMetricsFilterSensitiveLog = exports.DescribeStreamInputFilterSensitiveLog = exports.DescribeLimitsOutputFilterSensitiveLog = exports.DescribeLimitsInputFilterSensitiveLog = exports.DeregisterStreamConsumerInputFilterSensitiveLog = exports.DeleteStreamInputFilterSensitiveLog = exports.DecreaseStreamRetentionPeriodInputFilterSensitiveLog = exports.CreateStreamInputFilterSensitiveLog = exports.StreamModeDetailsFilterSensitiveLog = exports.ConsumerDescriptionFilterSensitiveLog = exports.ConsumerFilterSensitiveLog = exports.ChildShardFilterSensitiveLog = exports.HashKeyRangeFilterSensitiveLog = exports.AddTagsToStreamInputFilterSensitiveLog = exports.ScalingType = exports.SubscribeToShardEventStream = exports.ValidationException = exports.ShardFilterType = exports.InternalFailureException = exports.ShardIteratorType = exports.ProvisionedThroughputExceededException = exports.KMSThrottlingException = exports.KMSOptInRequired = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.ExpiredNextTokenException = exports.ExpiredIteratorException = exports.StreamStatus = exports.MetricsName = exports.EncryptionType = exports.StreamMode = exports.ConsumerStatus = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.LimitExceededException = exports.InvalidArgumentException = void 0;
exports.UpdateStreamModeInputFilterSensitiveLog = exports.UpdateShardCountOutputFilterSensitiveLog = exports.UpdateShardCountInputFilterSensitiveLog = exports.SubscribeToShardOutputFilterSensitiveLog = exports.SubscribeToShardEventStreamFilterSensitiveLog = exports.SubscribeToShardEventFilterSensitiveLog = exports.SubscribeToShardInputFilterSensitiveLog = exports.StartingPositionFilterSensitiveLog = exports.StopStreamEncryptionInputFilterSensitiveLog = exports.StartStreamEncryptionInputFilterSensitiveLog = exports.SplitShardInputFilterSensitiveLog = exports.RemoveTagsFromStreamInputFilterSensitiveLog = exports.RegisterStreamConsumerOutputFilterSensitiveLog = exports.RegisterStreamConsumerInputFilterSensitiveLog = exports.PutRecordsOutputFilterSensitiveLog = exports.PutRecordsResultEntryFilterSensitiveLog = exports.PutRecordsInputFilterSensitiveLog = exports.PutRecordsRequestEntryFilterSensitiveLog = exports.PutRecordOutputFilterSensitiveLog = exports.PutRecordInputFilterSensitiveLog = exports.MergeShardsInputFilterSensitiveLog = exports.ListTagsForStreamOutputFilterSensitiveLog = exports.TagFilterSensitiveLog = exports.ListTagsForStreamInputFilterSensitiveLog = exports.ListStreamsOutputFilterSensitiveLog = exports.ListStreamsInputFilterSensitiveLog = exports.ListStreamConsumersOutputFilterSensitiveLog = exports.ListStreamConsumersInputFilterSensitiveLog = exports.ListShardsOutputFilterSensitiveLog = exports.ListShardsInputFilterSensitiveLog = exports.ShardFilterFilterSensitiveLog = exports.IncreaseStreamRetentionPeriodInputFilterSensitiveLog = exports.GetShardIteratorOutputFilterSensitiveLog = exports.GetShardIteratorInputFilterSensitiveLog = exports.GetRecordsOutputFilterSensitiveLog = exports._RecordFilterSensitiveLog = exports.GetRecordsInputFilterSensitiveLog = void 0;
const KinesisServiceException_1 = __nccwpck_require__(5831);
class InvalidArgumentException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "InvalidArgumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidArgumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
class LimitExceededException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceInUseException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
exports.ResourceInUseException = ResourceInUseException;
class ResourceNotFoundException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
var ConsumerStatus;
(function (ConsumerStatus) {
    ConsumerStatus["ACTIVE"] = "ACTIVE";
    ConsumerStatus["CREATING"] = "CREATING";
    ConsumerStatus["DELETING"] = "DELETING";
})(ConsumerStatus = exports.ConsumerStatus || (exports.ConsumerStatus = {}));
var StreamMode;
(function (StreamMode) {
    StreamMode["ON_DEMAND"] = "ON_DEMAND";
    StreamMode["PROVISIONED"] = "PROVISIONED";
})(StreamMode = exports.StreamMode || (exports.StreamMode = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
    EncryptionType["NONE"] = "NONE";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var MetricsName;
(function (MetricsName) {
    MetricsName["ALL"] = "ALL";
    MetricsName["INCOMING_BYTES"] = "IncomingBytes";
    MetricsName["INCOMING_RECORDS"] = "IncomingRecords";
    MetricsName["ITERATOR_AGE_MILLISECONDS"] = "IteratorAgeMilliseconds";
    MetricsName["OUTGOING_BYTES"] = "OutgoingBytes";
    MetricsName["OUTGOING_RECORDS"] = "OutgoingRecords";
    MetricsName["READ_PROVISIONED_THROUGHPUT_EXCEEDED"] = "ReadProvisionedThroughputExceeded";
    MetricsName["WRITE_PROVISIONED_THROUGHPUT_EXCEEDED"] = "WriteProvisionedThroughputExceeded";
})(MetricsName = exports.MetricsName || (exports.MetricsName = {}));
var StreamStatus;
(function (StreamStatus) {
    StreamStatus["ACTIVE"] = "ACTIVE";
    StreamStatus["CREATING"] = "CREATING";
    StreamStatus["DELETING"] = "DELETING";
    StreamStatus["UPDATING"] = "UPDATING";
})(StreamStatus = exports.StreamStatus || (exports.StreamStatus = {}));
class ExpiredIteratorException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ExpiredIteratorException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredIteratorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredIteratorException.prototype);
    }
}
exports.ExpiredIteratorException = ExpiredIteratorException;
class ExpiredNextTokenException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ExpiredNextTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredNextTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
    }
}
exports.ExpiredNextTokenException = ExpiredNextTokenException;
class KMSAccessDeniedException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSAccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
    }
}
exports.KMSAccessDeniedException = KMSAccessDeniedException;
class KMSDisabledException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
    }
}
exports.KMSDisabledException = KMSDisabledException;
class KMSInvalidStateException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSInvalidStateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
    }
}
exports.KMSInvalidStateException = KMSInvalidStateException;
class KMSNotFoundException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
    }
}
exports.KMSNotFoundException = KMSNotFoundException;
class KMSOptInRequired extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSOptInRequired",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSOptInRequired";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSOptInRequired.prototype);
    }
}
exports.KMSOptInRequired = KMSOptInRequired;
class KMSThrottlingException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSThrottlingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSThrottlingException.prototype);
    }
}
exports.KMSThrottlingException = KMSThrottlingException;
class ProvisionedThroughputExceededException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedThroughputExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    }
}
exports.ProvisionedThroughputExceededException = ProvisionedThroughputExceededException;
var ShardIteratorType;
(function (ShardIteratorType) {
    ShardIteratorType["AFTER_SEQUENCE_NUMBER"] = "AFTER_SEQUENCE_NUMBER";
    ShardIteratorType["AT_SEQUENCE_NUMBER"] = "AT_SEQUENCE_NUMBER";
    ShardIteratorType["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    ShardIteratorType["LATEST"] = "LATEST";
    ShardIteratorType["TRIM_HORIZON"] = "TRIM_HORIZON";
})(ShardIteratorType = exports.ShardIteratorType || (exports.ShardIteratorType = {}));
class InternalFailureException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "InternalFailureException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalFailureException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalFailureException.prototype);
    }
}
exports.InternalFailureException = InternalFailureException;
var ShardFilterType;
(function (ShardFilterType) {
    ShardFilterType["AFTER_SHARD_ID"] = "AFTER_SHARD_ID";
    ShardFilterType["AT_LATEST"] = "AT_LATEST";
    ShardFilterType["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    ShardFilterType["AT_TRIM_HORIZON"] = "AT_TRIM_HORIZON";
    ShardFilterType["FROM_TIMESTAMP"] = "FROM_TIMESTAMP";
    ShardFilterType["FROM_TRIM_HORIZON"] = "FROM_TRIM_HORIZON";
})(ShardFilterType = exports.ShardFilterType || (exports.ShardFilterType = {}));
class ValidationException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
exports.ValidationException = ValidationException;
var SubscribeToShardEventStream;
(function (SubscribeToShardEventStream) {
    SubscribeToShardEventStream.visit = (value, visitor) => {
        if (value.SubscribeToShardEvent !== undefined)
            return visitor.SubscribeToShardEvent(value.SubscribeToShardEvent);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.ResourceInUseException !== undefined)
            return visitor.ResourceInUseException(value.ResourceInUseException);
        if (value.KMSDisabledException !== undefined)
            return visitor.KMSDisabledException(value.KMSDisabledException);
        if (value.KMSInvalidStateException !== undefined)
            return visitor.KMSInvalidStateException(value.KMSInvalidStateException);
        if (value.KMSAccessDeniedException !== undefined)
            return visitor.KMSAccessDeniedException(value.KMSAccessDeniedException);
        if (value.KMSNotFoundException !== undefined)
            return visitor.KMSNotFoundException(value.KMSNotFoundException);
        if (value.KMSOptInRequired !== undefined)
            return visitor.KMSOptInRequired(value.KMSOptInRequired);
        if (value.KMSThrottlingException !== undefined)
            return visitor.KMSThrottlingException(value.KMSThrottlingException);
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(SubscribeToShardEventStream = exports.SubscribeToShardEventStream || (exports.SubscribeToShardEventStream = {}));
var ScalingType;
(function (ScalingType) {
    ScalingType["UNIFORM_SCALING"] = "UNIFORM_SCALING";
})(ScalingType = exports.ScalingType || (exports.ScalingType = {}));
const AddTagsToStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AddTagsToStreamInputFilterSensitiveLog = AddTagsToStreamInputFilterSensitiveLog;
const HashKeyRangeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.HashKeyRangeFilterSensitiveLog = HashKeyRangeFilterSensitiveLog;
const ChildShardFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ChildShardFilterSensitiveLog = ChildShardFilterSensitiveLog;
const ConsumerFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ConsumerFilterSensitiveLog = ConsumerFilterSensitiveLog;
const ConsumerDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ConsumerDescriptionFilterSensitiveLog = ConsumerDescriptionFilterSensitiveLog;
const StreamModeDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StreamModeDetailsFilterSensitiveLog = StreamModeDetailsFilterSensitiveLog;
const CreateStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateStreamInputFilterSensitiveLog = CreateStreamInputFilterSensitiveLog;
const DecreaseStreamRetentionPeriodInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DecreaseStreamRetentionPeriodInputFilterSensitiveLog = DecreaseStreamRetentionPeriodInputFilterSensitiveLog;
const DeleteStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteStreamInputFilterSensitiveLog = DeleteStreamInputFilterSensitiveLog;
const DeregisterStreamConsumerInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeregisterStreamConsumerInputFilterSensitiveLog = DeregisterStreamConsumerInputFilterSensitiveLog;
const DescribeLimitsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeLimitsInputFilterSensitiveLog = DescribeLimitsInputFilterSensitiveLog;
const DescribeLimitsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeLimitsOutputFilterSensitiveLog = DescribeLimitsOutputFilterSensitiveLog;
const DescribeStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamInputFilterSensitiveLog = DescribeStreamInputFilterSensitiveLog;
const EnhancedMetricsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EnhancedMetricsFilterSensitiveLog = EnhancedMetricsFilterSensitiveLog;
const SequenceNumberRangeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SequenceNumberRangeFilterSensitiveLog = SequenceNumberRangeFilterSensitiveLog;
const ShardFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ShardFilterSensitiveLog = ShardFilterSensitiveLog;
const StreamDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StreamDescriptionFilterSensitiveLog = StreamDescriptionFilterSensitiveLog;
const DescribeStreamOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamOutputFilterSensitiveLog = DescribeStreamOutputFilterSensitiveLog;
const DescribeStreamConsumerInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamConsumerInputFilterSensitiveLog = DescribeStreamConsumerInputFilterSensitiveLog;
const DescribeStreamConsumerOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamConsumerOutputFilterSensitiveLog = DescribeStreamConsumerOutputFilterSensitiveLog;
const DescribeStreamSummaryInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamSummaryInputFilterSensitiveLog = DescribeStreamSummaryInputFilterSensitiveLog;
const StreamDescriptionSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StreamDescriptionSummaryFilterSensitiveLog = StreamDescriptionSummaryFilterSensitiveLog;
const DescribeStreamSummaryOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeStreamSummaryOutputFilterSensitiveLog = DescribeStreamSummaryOutputFilterSensitiveLog;
const DisableEnhancedMonitoringInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DisableEnhancedMonitoringInputFilterSensitiveLog = DisableEnhancedMonitoringInputFilterSensitiveLog;
const EnhancedMonitoringOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EnhancedMonitoringOutputFilterSensitiveLog = EnhancedMonitoringOutputFilterSensitiveLog;
const EnableEnhancedMonitoringInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EnableEnhancedMonitoringInputFilterSensitiveLog = EnableEnhancedMonitoringInputFilterSensitiveLog;
const GetRecordsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetRecordsInputFilterSensitiveLog = GetRecordsInputFilterSensitiveLog;
const _RecordFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports._RecordFilterSensitiveLog = _RecordFilterSensitiveLog;
const GetRecordsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetRecordsOutputFilterSensitiveLog = GetRecordsOutputFilterSensitiveLog;
const GetShardIteratorInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetShardIteratorInputFilterSensitiveLog = GetShardIteratorInputFilterSensitiveLog;
const GetShardIteratorOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetShardIteratorOutputFilterSensitiveLog = GetShardIteratorOutputFilterSensitiveLog;
const IncreaseStreamRetentionPeriodInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IncreaseStreamRetentionPeriodInputFilterSensitiveLog = IncreaseStreamRetentionPeriodInputFilterSensitiveLog;
const ShardFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ShardFilterFilterSensitiveLog = ShardFilterFilterSensitiveLog;
const ListShardsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListShardsInputFilterSensitiveLog = ListShardsInputFilterSensitiveLog;
const ListShardsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListShardsOutputFilterSensitiveLog = ListShardsOutputFilterSensitiveLog;
const ListStreamConsumersInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListStreamConsumersInputFilterSensitiveLog = ListStreamConsumersInputFilterSensitiveLog;
const ListStreamConsumersOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListStreamConsumersOutputFilterSensitiveLog = ListStreamConsumersOutputFilterSensitiveLog;
const ListStreamsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListStreamsInputFilterSensitiveLog = ListStreamsInputFilterSensitiveLog;
const ListStreamsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListStreamsOutputFilterSensitiveLog = ListStreamsOutputFilterSensitiveLog;
const ListTagsForStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForStreamInputFilterSensitiveLog = ListTagsForStreamInputFilterSensitiveLog;
const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagFilterSensitiveLog = TagFilterSensitiveLog;
const ListTagsForStreamOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForStreamOutputFilterSensitiveLog = ListTagsForStreamOutputFilterSensitiveLog;
const MergeShardsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MergeShardsInputFilterSensitiveLog = MergeShardsInputFilterSensitiveLog;
const PutRecordInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordInputFilterSensitiveLog = PutRecordInputFilterSensitiveLog;
const PutRecordOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordOutputFilterSensitiveLog = PutRecordOutputFilterSensitiveLog;
const PutRecordsRequestEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordsRequestEntryFilterSensitiveLog = PutRecordsRequestEntryFilterSensitiveLog;
const PutRecordsInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordsInputFilterSensitiveLog = PutRecordsInputFilterSensitiveLog;
const PutRecordsResultEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordsResultEntryFilterSensitiveLog = PutRecordsResultEntryFilterSensitiveLog;
const PutRecordsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutRecordsOutputFilterSensitiveLog = PutRecordsOutputFilterSensitiveLog;
const RegisterStreamConsumerInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RegisterStreamConsumerInputFilterSensitiveLog = RegisterStreamConsumerInputFilterSensitiveLog;
const RegisterStreamConsumerOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RegisterStreamConsumerOutputFilterSensitiveLog = RegisterStreamConsumerOutputFilterSensitiveLog;
const RemoveTagsFromStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RemoveTagsFromStreamInputFilterSensitiveLog = RemoveTagsFromStreamInputFilterSensitiveLog;
const SplitShardInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SplitShardInputFilterSensitiveLog = SplitShardInputFilterSensitiveLog;
const StartStreamEncryptionInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StartStreamEncryptionInputFilterSensitiveLog = StartStreamEncryptionInputFilterSensitiveLog;
const StopStreamEncryptionInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StopStreamEncryptionInputFilterSensitiveLog = StopStreamEncryptionInputFilterSensitiveLog;
const StartingPositionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StartingPositionFilterSensitiveLog = StartingPositionFilterSensitiveLog;
const SubscribeToShardInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SubscribeToShardInputFilterSensitiveLog = SubscribeToShardInputFilterSensitiveLog;
const SubscribeToShardEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SubscribeToShardEventFilterSensitiveLog = SubscribeToShardEventFilterSensitiveLog;
const SubscribeToShardEventStreamFilterSensitiveLog = (obj) => {
    if (obj.SubscribeToShardEvent !== undefined)
        return { SubscribeToShardEvent: (0, exports.SubscribeToShardEventFilterSensitiveLog)(obj.SubscribeToShardEvent) };
    if (obj.ResourceNotFoundException !== undefined)
        return { ResourceNotFoundException: obj.ResourceNotFoundException };
    if (obj.ResourceInUseException !== undefined)
        return { ResourceInUseException: obj.ResourceInUseException };
    if (obj.KMSDisabledException !== undefined)
        return { KMSDisabledException: obj.KMSDisabledException };
    if (obj.KMSInvalidStateException !== undefined)
        return { KMSInvalidStateException: obj.KMSInvalidStateException };
    if (obj.KMSAccessDeniedException !== undefined)
        return { KMSAccessDeniedException: obj.KMSAccessDeniedException };
    if (obj.KMSNotFoundException !== undefined)
        return { KMSNotFoundException: obj.KMSNotFoundException };
    if (obj.KMSOptInRequired !== undefined)
        return { KMSOptInRequired: obj.KMSOptInRequired };
    if (obj.KMSThrottlingException !== undefined)
        return { KMSThrottlingException: obj.KMSThrottlingException };
    if (obj.InternalFailureException !== undefined)
        return { InternalFailureException: obj.InternalFailureException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.SubscribeToShardEventStreamFilterSensitiveLog = SubscribeToShardEventStreamFilterSensitiveLog;
const SubscribeToShardOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventStream && { EventStream: "STREAMING_CONTENT" }),
});
exports.SubscribeToShardOutputFilterSensitiveLog = SubscribeToShardOutputFilterSensitiveLog;
const UpdateShardCountInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateShardCountInputFilterSensitiveLog = UpdateShardCountInputFilterSensitiveLog;
const UpdateShardCountOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateShardCountOutputFilterSensitiveLog = UpdateShardCountOutputFilterSensitiveLog;
const UpdateStreamModeInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateStreamModeInputFilterSensitiveLog = UpdateStreamModeInputFilterSensitiveLog;


/***/ }),

/***/ 3821:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3716:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginateListStreamConsumers = void 0;
const ListStreamConsumersCommand_1 = __nccwpck_require__(5250);
const Kinesis_1 = __nccwpck_require__(9406);
const KinesisClient_1 = __nccwpck_require__(4741);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamConsumersCommand_1.ListStreamConsumersCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listStreamConsumers(input, ...args);
};
async function* paginateListStreamConsumers(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Kinesis_1.Kinesis) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof KinesisClient_1.KinesisClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Kinesis | KinesisClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListStreamConsumers = paginateListStreamConsumers;


/***/ }),

/***/ 2513:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(3821), exports);
tslib_1.__exportStar(__nccwpck_require__(3716), exports);


/***/ }),

/***/ 7171:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeAws_json1_1PutRecordsCommand = exports.deserializeAws_json1_1PutRecordCommand = exports.deserializeAws_json1_1MergeShardsCommand = exports.deserializeAws_json1_1ListTagsForStreamCommand = exports.deserializeAws_json1_1ListStreamsCommand = exports.deserializeAws_json1_1ListStreamConsumersCommand = exports.deserializeAws_json1_1ListShardsCommand = exports.deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand = exports.deserializeAws_json1_1GetShardIteratorCommand = exports.deserializeAws_json1_1GetRecordsCommand = exports.deserializeAws_json1_1EnableEnhancedMonitoringCommand = exports.deserializeAws_json1_1DisableEnhancedMonitoringCommand = exports.deserializeAws_json1_1DescribeStreamSummaryCommand = exports.deserializeAws_json1_1DescribeStreamConsumerCommand = exports.deserializeAws_json1_1DescribeStreamCommand = exports.deserializeAws_json1_1DescribeLimitsCommand = exports.deserializeAws_json1_1DeregisterStreamConsumerCommand = exports.deserializeAws_json1_1DeleteStreamCommand = exports.deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand = exports.deserializeAws_json1_1CreateStreamCommand = exports.deserializeAws_json1_1AddTagsToStreamCommand = exports.serializeAws_json1_1UpdateStreamModeCommand = exports.serializeAws_json1_1UpdateShardCountCommand = exports.serializeAws_json1_1SubscribeToShardCommand = exports.serializeAws_json1_1StopStreamEncryptionCommand = exports.serializeAws_json1_1StartStreamEncryptionCommand = exports.serializeAws_json1_1SplitShardCommand = exports.serializeAws_json1_1RemoveTagsFromStreamCommand = exports.serializeAws_json1_1RegisterStreamConsumerCommand = exports.serializeAws_json1_1PutRecordsCommand = exports.serializeAws_json1_1PutRecordCommand = exports.serializeAws_json1_1MergeShardsCommand = exports.serializeAws_json1_1ListTagsForStreamCommand = exports.serializeAws_json1_1ListStreamsCommand = exports.serializeAws_json1_1ListStreamConsumersCommand = exports.serializeAws_json1_1ListShardsCommand = exports.serializeAws_json1_1IncreaseStreamRetentionPeriodCommand = exports.serializeAws_json1_1GetShardIteratorCommand = exports.serializeAws_json1_1GetRecordsCommand = exports.serializeAws_json1_1EnableEnhancedMonitoringCommand = exports.serializeAws_json1_1DisableEnhancedMonitoringCommand = exports.serializeAws_json1_1DescribeStreamSummaryCommand = exports.serializeAws_json1_1DescribeStreamConsumerCommand = exports.serializeAws_json1_1DescribeStreamCommand = exports.serializeAws_json1_1DescribeLimitsCommand = exports.serializeAws_json1_1DeregisterStreamConsumerCommand = exports.serializeAws_json1_1DeleteStreamCommand = exports.serializeAws_json1_1DecreaseStreamRetentionPeriodCommand = exports.serializeAws_json1_1CreateStreamCommand = exports.serializeAws_json1_1AddTagsToStreamCommand = void 0;
exports.deserializeAws_json1_1UpdateStreamModeCommand = exports.deserializeAws_json1_1UpdateShardCountCommand = exports.deserializeAws_json1_1SubscribeToShardCommand = exports.deserializeAws_json1_1StopStreamEncryptionCommand = exports.deserializeAws_json1_1StartStreamEncryptionCommand = exports.deserializeAws_json1_1SplitShardCommand = exports.deserializeAws_json1_1RemoveTagsFromStreamCommand = exports.deserializeAws_json1_1RegisterStreamConsumerCommand = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const smithy_client_1 = __nccwpck_require__(4963);
const KinesisServiceException_1 = __nccwpck_require__(5831);
const models_0_1 = __nccwpck_require__(1434);
const serializeAws_json1_1AddTagsToStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.AddTagsToStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToStreamCommand = serializeAws_json1_1AddTagsToStreamCommand;
const serializeAws_json1_1CreateStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.CreateStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStreamCommand = serializeAws_json1_1CreateStreamCommand;
const serializeAws_json1_1DecreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DecreaseStreamRetentionPeriod",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DecreaseStreamRetentionPeriodInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DecreaseStreamRetentionPeriodCommand = serializeAws_json1_1DecreaseStreamRetentionPeriodCommand;
const serializeAws_json1_1DeleteStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DeleteStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStreamCommand = serializeAws_json1_1DeleteStreamCommand;
const serializeAws_json1_1DeregisterStreamConsumerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DeregisterStreamConsumer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterStreamConsumerCommand = serializeAws_json1_1DeregisterStreamConsumerCommand;
const serializeAws_json1_1DescribeLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DescribeLimits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLimitsCommand = serializeAws_json1_1DescribeLimitsCommand;
const serializeAws_json1_1DescribeStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DescribeStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStreamCommand = serializeAws_json1_1DescribeStreamCommand;
const serializeAws_json1_1DescribeStreamConsumerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DescribeStreamConsumer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStreamConsumerCommand = serializeAws_json1_1DescribeStreamConsumerCommand;
const serializeAws_json1_1DescribeStreamSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DescribeStreamSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamSummaryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStreamSummaryCommand = serializeAws_json1_1DescribeStreamSummaryCommand;
const serializeAws_json1_1DisableEnhancedMonitoringCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.DisableEnhancedMonitoring",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableEnhancedMonitoringInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableEnhancedMonitoringCommand = serializeAws_json1_1DisableEnhancedMonitoringCommand;
const serializeAws_json1_1EnableEnhancedMonitoringCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.EnableEnhancedMonitoring",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableEnhancedMonitoringInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableEnhancedMonitoringCommand = serializeAws_json1_1EnableEnhancedMonitoringCommand;
const serializeAws_json1_1GetRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.GetRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRecordsCommand = serializeAws_json1_1GetRecordsCommand;
const serializeAws_json1_1GetShardIteratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.GetShardIterator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetShardIteratorCommand = serializeAws_json1_1GetShardIteratorCommand;
const serializeAws_json1_1IncreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.IncreaseStreamRetentionPeriod",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1IncreaseStreamRetentionPeriodInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1IncreaseStreamRetentionPeriodCommand = serializeAws_json1_1IncreaseStreamRetentionPeriodCommand;
const serializeAws_json1_1ListShardsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.ListShards",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListShardsCommand = serializeAws_json1_1ListShardsCommand;
const serializeAws_json1_1ListStreamConsumersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.ListStreamConsumers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStreamConsumersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStreamConsumersCommand = serializeAws_json1_1ListStreamConsumersCommand;
const serializeAws_json1_1ListStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.ListStreams",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStreamsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStreamsCommand = serializeAws_json1_1ListStreamsCommand;
const serializeAws_json1_1ListTagsForStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.ListTagsForStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForStreamCommand = serializeAws_json1_1ListTagsForStreamCommand;
const serializeAws_json1_1MergeShardsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.MergeShards",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergeShardsCommand = serializeAws_json1_1MergeShardsCommand;
const serializeAws_json1_1PutRecordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.PutRecord",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRecordCommand = serializeAws_json1_1PutRecordCommand;
const serializeAws_json1_1PutRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.PutRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRecordsCommand = serializeAws_json1_1PutRecordsCommand;
const serializeAws_json1_1RegisterStreamConsumerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.RegisterStreamConsumer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterStreamConsumerCommand = serializeAws_json1_1RegisterStreamConsumerCommand;
const serializeAws_json1_1RemoveTagsFromStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.RemoveTagsFromStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromStreamCommand = serializeAws_json1_1RemoveTagsFromStreamCommand;
const serializeAws_json1_1SplitShardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.SplitShard",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SplitShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SplitShardCommand = serializeAws_json1_1SplitShardCommand;
const serializeAws_json1_1StartStreamEncryptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.StartStreamEncryption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartStreamEncryptionCommand = serializeAws_json1_1StartStreamEncryptionCommand;
const serializeAws_json1_1StopStreamEncryptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.StopStreamEncryption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopStreamEncryptionCommand = serializeAws_json1_1StopStreamEncryptionCommand;
const serializeAws_json1_1SubscribeToShardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.SubscribeToShard",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubscribeToShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubscribeToShardCommand = serializeAws_json1_1SubscribeToShardCommand;
const serializeAws_json1_1UpdateShardCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.UpdateShardCount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateShardCountInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateShardCountCommand = serializeAws_json1_1UpdateShardCountCommand;
const serializeAws_json1_1UpdateStreamModeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Kinesis_20131202.UpdateStreamMode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStreamModeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateStreamModeCommand = serializeAws_json1_1UpdateStreamModeCommand;
const deserializeAws_json1_1AddTagsToStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToStreamCommand = deserializeAws_json1_1AddTagsToStreamCommand;
const deserializeAws_json1_1AddTagsToStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1CreateStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStreamCommand = deserializeAws_json1_1CreateStreamCommand;
const deserializeAws_json1_1CreateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand = deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand;
const deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStreamCommand = deserializeAws_json1_1DeleteStreamCommand;
const deserializeAws_json1_1DeleteStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeregisterStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterStreamConsumerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterStreamConsumerCommand = deserializeAws_json1_1DeregisterStreamConsumerCommand;
const deserializeAws_json1_1DeregisterStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLimitsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLimitsCommand = deserializeAws_json1_1DescribeLimitsCommand;
const deserializeAws_json1_1DescribeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStreamCommand = deserializeAws_json1_1DescribeStreamCommand;
const deserializeAws_json1_1DescribeStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamConsumerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStreamConsumerCommand = deserializeAws_json1_1DescribeStreamConsumerCommand;
const deserializeAws_json1_1DescribeStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeStreamSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStreamSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamSummaryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStreamSummaryCommand = deserializeAws_json1_1DescribeStreamSummaryCommand;
const deserializeAws_json1_1DescribeStreamSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DisableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableEnhancedMonitoringCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableEnhancedMonitoringCommand = deserializeAws_json1_1DisableEnhancedMonitoringCommand;
const deserializeAws_json1_1DisableEnhancedMonitoringCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1EnableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableEnhancedMonitoringCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableEnhancedMonitoringCommand = deserializeAws_json1_1EnableEnhancedMonitoringCommand;
const deserializeAws_json1_1EnableEnhancedMonitoringCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRecordsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRecordsCommand = deserializeAws_json1_1GetRecordsCommand;
const deserializeAws_json1_1GetRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredIteratorException":
        case "com.amazonaws.kinesis#ExpiredIteratorException":
            throw await deserializeAws_json1_1ExpiredIteratorExceptionResponse(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetShardIteratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetShardIteratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetShardIteratorOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetShardIteratorCommand = deserializeAws_json1_1GetShardIteratorCommand;
const deserializeAws_json1_1GetShardIteratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand = deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand;
const deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListShardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListShardsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListShardsCommand = deserializeAws_json1_1ListShardsCommand;
const deserializeAws_json1_1ListShardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis#ExpiredNextTokenException":
            throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListStreamConsumersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStreamConsumersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStreamConsumersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStreamConsumersCommand = deserializeAws_json1_1ListStreamConsumersCommand;
const deserializeAws_json1_1ListStreamConsumersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis#ExpiredNextTokenException":
            throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStreamsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStreamsCommand = deserializeAws_json1_1ListStreamsCommand;
const deserializeAws_json1_1ListStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListTagsForStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForStreamOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForStreamCommand = deserializeAws_json1_1ListTagsForStreamCommand;
const deserializeAws_json1_1ListTagsForStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1MergeShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeShardsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergeShardsCommand = deserializeAws_json1_1MergeShardsCommand;
const deserializeAws_json1_1MergeShardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutRecordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRecordOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRecordCommand = deserializeAws_json1_1PutRecordCommand;
const deserializeAws_json1_1PutRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRecordsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRecordsCommand = deserializeAws_json1_1PutRecordsCommand;
const deserializeAws_json1_1PutRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1RegisterStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterStreamConsumerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterStreamConsumerCommand = deserializeAws_json1_1RegisterStreamConsumerCommand;
const deserializeAws_json1_1RegisterStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1RemoveTagsFromStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromStreamCommand = deserializeAws_json1_1RemoveTagsFromStreamCommand;
const deserializeAws_json1_1RemoveTagsFromStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1SplitShardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SplitShardCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SplitShardCommand = deserializeAws_json1_1SplitShardCommand;
const deserializeAws_json1_1SplitShardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1StartStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartStreamEncryptionCommand = deserializeAws_json1_1StartStreamEncryptionCommand;
const deserializeAws_json1_1StartStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1StopStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopStreamEncryptionCommand = deserializeAws_json1_1StopStreamEncryptionCommand;
const deserializeAws_json1_1StopStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1SubscribeToShardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubscribeToShardCommandError(output, context);
    }
    const contents = { EventStream: deserializeAws_json1_1SubscribeToShardEventStream(output.body, context) };
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubscribeToShardCommand = deserializeAws_json1_1SubscribeToShardCommand;
const deserializeAws_json1_1SubscribeToShardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1UpdateShardCountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateShardCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateShardCountOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateShardCountCommand = deserializeAws_json1_1UpdateShardCountCommand;
const deserializeAws_json1_1UpdateShardCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1UpdateStreamModeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateStreamModeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateStreamModeCommand = deserializeAws_json1_1UpdateStreamModeCommand;
const deserializeAws_json1_1UpdateStreamModeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: KinesisServiceException_1.KinesisServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ExpiredIteratorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredIteratorException(body, context);
    const exception = new models_0_1.ExpiredIteratorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
    const exception = new models_0_1.ExpiredNextTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const exception = new models_0_1.InvalidArgumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSAccessDeniedException(body, context);
    const exception = new models_0_1.KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSDisabledException(body, context);
    const exception = new models_0_1.KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
    const exception = new models_0_1.KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSNotFoundException(body, context);
    const exception = new models_0_1.KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSOptInRequiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSOptInRequired(body, context);
    const exception = new models_0_1.KMSOptInRequired({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1KMSThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSThrottlingException(body, context);
    const exception = new models_0_1.KMSThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
    const exception = new models_0_1.ProvisionedThroughputExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const exception = new models_0_1.ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_json1_1SubscribeToShardEventStream = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["SubscribeToShardEvent"] != null) {
            return {
                SubscribeToShardEvent: await deserializeAws_json1_1SubscribeToShardEvent_event(event["SubscribeToShardEvent"], context),
            };
        }
        if (event["ResourceNotFoundException"] != null) {
            return {
                ResourceNotFoundException: await deserializeAws_json1_1ResourceNotFoundException_event(event["ResourceNotFoundException"], context),
            };
        }
        if (event["ResourceInUseException"] != null) {
            return {
                ResourceInUseException: await deserializeAws_json1_1ResourceInUseException_event(event["ResourceInUseException"], context),
            };
        }
        if (event["KMSDisabledException"] != null) {
            return {
                KMSDisabledException: await deserializeAws_json1_1KMSDisabledException_event(event["KMSDisabledException"], context),
            };
        }
        if (event["KMSInvalidStateException"] != null) {
            return {
                KMSInvalidStateException: await deserializeAws_json1_1KMSInvalidStateException_event(event["KMSInvalidStateException"], context),
            };
        }
        if (event["KMSAccessDeniedException"] != null) {
            return {
                KMSAccessDeniedException: await deserializeAws_json1_1KMSAccessDeniedException_event(event["KMSAccessDeniedException"], context),
            };
        }
        if (event["KMSNotFoundException"] != null) {
            return {
                KMSNotFoundException: await deserializeAws_json1_1KMSNotFoundException_event(event["KMSNotFoundException"], context),
            };
        }
        if (event["KMSOptInRequired"] != null) {
            return {
                KMSOptInRequired: await deserializeAws_json1_1KMSOptInRequired_event(event["KMSOptInRequired"], context),
            };
        }
        if (event["KMSThrottlingException"] != null) {
            return {
                KMSThrottlingException: await deserializeAws_json1_1KMSThrottlingException_event(event["KMSThrottlingException"], context),
            };
        }
        if (event["InternalFailureException"] != null) {
            return {
                InternalFailureException: await deserializeAws_json1_1InternalFailureException_event(event["InternalFailureException"], context),
            };
        }
        return { $unknown: output };
    });
};
const deserializeAws_json1_1InternalFailureException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSAccessDeniedException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSDisabledException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSInvalidStateException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSNotFoundException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSOptInRequired_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSThrottlingException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1ResourceInUseException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1ResourceNotFoundException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1SubscribeToShardEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_json1_1SubscribeToShardEvent(data, context));
    return contents;
};
const deserializeAws_json1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalFailureException(body, context);
    const exception = new models_0_1.InternalFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const serializeAws_json1_1AddTagsToStreamInput = (input, context) => {
    return {
        ...(input.StreamName != null && { StreamName: input.StreamName }),
        ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateStreamInput = (input, context) => {
    return {
        ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
        ...(input.StreamModeDetails != null && {
            StreamModeDetails: serializeAws_json1_1StreamModeDetails(input.StreamModeDetails, context),
        }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1DecreaseStreamRetentionPeriodInput = (input, context) => {
    return {
        ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1DeleteStreamInput = (input, context) => {
    return {
        ...(input.EnforceConsumerDeletion != null && { EnforceConsumerDeletion: input.EnforceConsumerDeletion }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1DeregisterStreamConsumerInput = (input, context) => {
    return {
        ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
        ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
        ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    };
};
const serializeAws_json1_1DescribeLimitsInput = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeStreamConsumerInput = (input, context) => {
    return {
        ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
        ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
        ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    };
};
const serializeAws_json1_1DescribeStreamInput = (input, context) => {
    return {
        ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
        ...(input.Limit != null && { Limit: input.Limit }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1DescribeStreamSummaryInput = (input, context) => {
    return {
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1DisableEnhancedMonitoringInput = (input, context) => {
    return {
        ...(input.ShardLevelMetrics != null && {
            ShardLevelMetrics: serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context),
        }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1EnableEnhancedMonitoringInput = (input, context) => {
    return {
        ...(input.ShardLevelMetrics != null && {
            ShardLevelMetrics: serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context),
        }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1GetRecordsInput = (input, context) => {
    return {
        ...(input.Limit != null && { Limit: input.Limit }),
        ...(input.ShardIterator != null && { ShardIterator: input.ShardIterator }),
    };
};
const serializeAws_json1_1GetShardIteratorInput = (input, context) => {
    return {
        ...(input.ShardId != null && { ShardId: input.ShardId }),
        ...(input.ShardIteratorType != null && { ShardIteratorType: input.ShardIteratorType }),
        ...(input.StartingSequenceNumber != null && { StartingSequenceNumber: input.StartingSequenceNumber }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
        ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    };
};
const serializeAws_json1_1IncreaseStreamRetentionPeriodInput = (input, context) => {
    return {
        ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1ListShardsInput = (input, context) => {
    return {
        ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
        ...(input.ShardFilter != null && { ShardFilter: serializeAws_json1_1ShardFilter(input.ShardFilter, context) }),
        ...(input.StreamCreationTimestamp != null && {
            StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
        }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1ListStreamConsumersInput = (input, context) => {
    return {
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
        ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
        ...(input.StreamCreationTimestamp != null && {
            StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
        }),
    };
};
const serializeAws_json1_1ListStreamsInput = (input, context) => {
    return {
        ...(input.ExclusiveStartStreamName != null && { ExclusiveStartStreamName: input.ExclusiveStartStreamName }),
        ...(input.Limit != null && { Limit: input.Limit }),
    };
};
const serializeAws_json1_1ListTagsForStreamInput = (input, context) => {
    return {
        ...(input.ExclusiveStartTagKey != null && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
        ...(input.Limit != null && { Limit: input.Limit }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1MergeShardsInput = (input, context) => {
    return {
        ...(input.AdjacentShardToMerge != null && { AdjacentShardToMerge: input.AdjacentShardToMerge }),
        ...(input.ShardToMerge != null && { ShardToMerge: input.ShardToMerge }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1MetricsNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1PutRecordInput = (input, context) => {
    return {
        ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
        ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
        ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
        ...(input.SequenceNumberForOrdering != null && { SequenceNumberForOrdering: input.SequenceNumberForOrdering }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1PutRecordsInput = (input, context) => {
    return {
        ...(input.Records != null && { Records: serializeAws_json1_1PutRecordsRequestEntryList(input.Records, context) }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1PutRecordsRequestEntry = (input, context) => {
    return {
        ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
        ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
        ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
    };
};
const serializeAws_json1_1PutRecordsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_json1_1PutRecordsRequestEntry(entry, context);
    });
};
const serializeAws_json1_1RegisterStreamConsumerInput = (input, context) => {
    return {
        ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
        ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    };
};
const serializeAws_json1_1RemoveTagsFromStreamInput = (input, context) => {
    return {
        ...(input.StreamName != null && { StreamName: input.StreamName }),
        ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1ShardFilter = (input, context) => {
    return {
        ...(input.ShardId != null && { ShardId: input.ShardId }),
        ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.Type != null && { Type: input.Type }),
    };
};
const serializeAws_json1_1SplitShardInput = (input, context) => {
    return {
        ...(input.NewStartingHashKey != null && { NewStartingHashKey: input.NewStartingHashKey }),
        ...(input.ShardToSplit != null && { ShardToSplit: input.ShardToSplit }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1StartingPosition = (input, context) => {
    return {
        ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
        ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.Type != null && { Type: input.Type }),
    };
};
const serializeAws_json1_1StartStreamEncryptionInput = (input, context) => {
    return {
        ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
        ...(input.KeyId != null && { KeyId: input.KeyId }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1StopStreamEncryptionInput = (input, context) => {
    return {
        ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
        ...(input.KeyId != null && { KeyId: input.KeyId }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
    };
};
const serializeAws_json1_1StreamModeDetails = (input, context) => {
    return {
        ...(input.StreamMode != null && { StreamMode: input.StreamMode }),
    };
};
const serializeAws_json1_1SubscribeToShardInput = (input, context) => {
    return {
        ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
        ...(input.ShardId != null && { ShardId: input.ShardId }),
        ...(input.StartingPosition != null && {
            StartingPosition: serializeAws_json1_1StartingPosition(input.StartingPosition, context),
        }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1UpdateShardCountInput = (input, context) => {
    return {
        ...(input.ScalingType != null && { ScalingType: input.ScalingType }),
        ...(input.StreamName != null && { StreamName: input.StreamName }),
        ...(input.TargetShardCount != null && { TargetShardCount: input.TargetShardCount }),
    };
};
const serializeAws_json1_1UpdateStreamModeInput = (input, context) => {
    return {
        ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
        ...(input.StreamModeDetails != null && {
            StreamModeDetails: serializeAws_json1_1StreamModeDetails(input.StreamModeDetails, context),
        }),
    };
};
const deserializeAws_json1_1ChildShard = (output, context) => {
    return {
        HashKeyRange: output.HashKeyRange != null ? deserializeAws_json1_1HashKeyRange(output.HashKeyRange, context) : undefined,
        ParentShards: output.ParentShards != null ? deserializeAws_json1_1ShardIdList(output.ParentShards, context) : undefined,
        ShardId: (0, smithy_client_1.expectString)(output.ShardId),
    };
};
const deserializeAws_json1_1ChildShardList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ChildShard(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1Consumer = (output, context) => {
    return {
        ConsumerARN: (0, smithy_client_1.expectString)(output.ConsumerARN),
        ConsumerCreationTimestamp: output.ConsumerCreationTimestamp != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.ConsumerCreationTimestamp)))
            : undefined,
        ConsumerName: (0, smithy_client_1.expectString)(output.ConsumerName),
        ConsumerStatus: (0, smithy_client_1.expectString)(output.ConsumerStatus),
    };
};
const deserializeAws_json1_1ConsumerDescription = (output, context) => {
    return {
        ConsumerARN: (0, smithy_client_1.expectString)(output.ConsumerARN),
        ConsumerCreationTimestamp: output.ConsumerCreationTimestamp != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.ConsumerCreationTimestamp)))
            : undefined,
        ConsumerName: (0, smithy_client_1.expectString)(output.ConsumerName),
        ConsumerStatus: (0, smithy_client_1.expectString)(output.ConsumerStatus),
        StreamARN: (0, smithy_client_1.expectString)(output.StreamARN),
    };
};
const deserializeAws_json1_1ConsumerList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Consumer(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1DescribeLimitsOutput = (output, context) => {
    return {
        OnDemandStreamCount: (0, smithy_client_1.expectInt32)(output.OnDemandStreamCount),
        OnDemandStreamCountLimit: (0, smithy_client_1.expectInt32)(output.OnDemandStreamCountLimit),
        OpenShardCount: (0, smithy_client_1.expectInt32)(output.OpenShardCount),
        ShardLimit: (0, smithy_client_1.expectInt32)(output.ShardLimit),
    };
};
const deserializeAws_json1_1DescribeStreamConsumerOutput = (output, context) => {
    return {
        ConsumerDescription: output.ConsumerDescription != null
            ? deserializeAws_json1_1ConsumerDescription(output.ConsumerDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeStreamOutput = (output, context) => {
    return {
        StreamDescription: output.StreamDescription != null
            ? deserializeAws_json1_1StreamDescription(output.StreamDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeStreamSummaryOutput = (output, context) => {
    return {
        StreamDescriptionSummary: output.StreamDescriptionSummary != null
            ? deserializeAws_json1_1StreamDescriptionSummary(output.StreamDescriptionSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1EnhancedMetrics = (output, context) => {
    return {
        ShardLevelMetrics: output.ShardLevelMetrics != null
            ? deserializeAws_json1_1MetricsNameList(output.ShardLevelMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_1EnhancedMonitoringList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnhancedMetrics(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1EnhancedMonitoringOutput = (output, context) => {
    return {
        CurrentShardLevelMetrics: output.CurrentShardLevelMetrics != null
            ? deserializeAws_json1_1MetricsNameList(output.CurrentShardLevelMetrics, context)
            : undefined,
        DesiredShardLevelMetrics: output.DesiredShardLevelMetrics != null
            ? deserializeAws_json1_1MetricsNameList(output.DesiredShardLevelMetrics, context)
            : undefined,
        StreamName: (0, smithy_client_1.expectString)(output.StreamName),
    };
};
const deserializeAws_json1_1ExpiredIteratorException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1ExpiredNextTokenException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1GetRecordsOutput = (output, context) => {
    return {
        ChildShards: output.ChildShards != null ? deserializeAws_json1_1ChildShardList(output.ChildShards, context) : undefined,
        MillisBehindLatest: (0, smithy_client_1.expectLong)(output.MillisBehindLatest),
        NextShardIterator: (0, smithy_client_1.expectString)(output.NextShardIterator),
        Records: output.Records != null ? deserializeAws_json1_1RecordList(output.Records, context) : undefined,
    };
};
const deserializeAws_json1_1GetShardIteratorOutput = (output, context) => {
    return {
        ShardIterator: (0, smithy_client_1.expectString)(output.ShardIterator),
    };
};
const deserializeAws_json1_1HashKeyRange = (output, context) => {
    return {
        EndingHashKey: (0, smithy_client_1.expectString)(output.EndingHashKey),
        StartingHashKey: (0, smithy_client_1.expectString)(output.StartingHashKey),
    };
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSAccessDeniedException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSDisabledException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSInvalidStateException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSNotFoundException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSOptInRequired = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1KMSThrottlingException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1ListShardsOutput = (output, context) => {
    return {
        NextToken: (0, smithy_client_1.expectString)(output.NextToken),
        Shards: output.Shards != null ? deserializeAws_json1_1ShardList(output.Shards, context) : undefined,
    };
};
const deserializeAws_json1_1ListStreamConsumersOutput = (output, context) => {
    return {
        Consumers: output.Consumers != null ? deserializeAws_json1_1ConsumerList(output.Consumers, context) : undefined,
        NextToken: (0, smithy_client_1.expectString)(output.NextToken),
    };
};
const deserializeAws_json1_1ListStreamsOutput = (output, context) => {
    return {
        HasMoreStreams: (0, smithy_client_1.expectBoolean)(output.HasMoreStreams),
        StreamNames: output.StreamNames != null ? deserializeAws_json1_1StreamNameList(output.StreamNames, context) : undefined,
    };
};
const deserializeAws_json1_1ListTagsForStreamOutput = (output, context) => {
    return {
        HasMoreTags: (0, smithy_client_1.expectBoolean)(output.HasMoreTags),
        Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1MetricsNameList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_json1_1ProvisionedThroughputExceededException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1PutRecordOutput = (output, context) => {
    return {
        EncryptionType: (0, smithy_client_1.expectString)(output.EncryptionType),
        SequenceNumber: (0, smithy_client_1.expectString)(output.SequenceNumber),
        ShardId: (0, smithy_client_1.expectString)(output.ShardId),
    };
};
const deserializeAws_json1_1PutRecordsOutput = (output, context) => {
    return {
        EncryptionType: (0, smithy_client_1.expectString)(output.EncryptionType),
        FailedRecordCount: (0, smithy_client_1.expectInt32)(output.FailedRecordCount),
        Records: output.Records != null ? deserializeAws_json1_1PutRecordsResultEntryList(output.Records, context) : undefined,
    };
};
const deserializeAws_json1_1PutRecordsResultEntry = (output, context) => {
    return {
        ErrorCode: (0, smithy_client_1.expectString)(output.ErrorCode),
        ErrorMessage: (0, smithy_client_1.expectString)(output.ErrorMessage),
        SequenceNumber: (0, smithy_client_1.expectString)(output.SequenceNumber),
        ShardId: (0, smithy_client_1.expectString)(output.ShardId),
    };
};
const deserializeAws_json1_1PutRecordsResultEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PutRecordsResultEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1_Record = (output, context) => {
    return {
        ApproximateArrivalTimestamp: output.ApproximateArrivalTimestamp != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.ApproximateArrivalTimestamp)))
            : undefined,
        Data: output.Data != null ? context.base64Decoder(output.Data) : undefined,
        EncryptionType: (0, smithy_client_1.expectString)(output.EncryptionType),
        PartitionKey: (0, smithy_client_1.expectString)(output.PartitionKey),
        SequenceNumber: (0, smithy_client_1.expectString)(output.SequenceNumber),
    };
};
const deserializeAws_json1_1RecordList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1_Record(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1RegisterStreamConsumerOutput = (output, context) => {
    return {
        Consumer: output.Consumer != null ? deserializeAws_json1_1Consumer(output.Consumer, context) : undefined,
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeAws_json1_1SequenceNumberRange = (output, context) => {
    return {
        EndingSequenceNumber: (0, smithy_client_1.expectString)(output.EndingSequenceNumber),
        StartingSequenceNumber: (0, smithy_client_1.expectString)(output.StartingSequenceNumber),
    };
};
const deserializeAws_json1_1Shard = (output, context) => {
    return {
        AdjacentParentShardId: (0, smithy_client_1.expectString)(output.AdjacentParentShardId),
        HashKeyRange: output.HashKeyRange != null ? deserializeAws_json1_1HashKeyRange(output.HashKeyRange, context) : undefined,
        ParentShardId: (0, smithy_client_1.expectString)(output.ParentShardId),
        SequenceNumberRange: output.SequenceNumberRange != null
            ? deserializeAws_json1_1SequenceNumberRange(output.SequenceNumberRange, context)
            : undefined,
        ShardId: (0, smithy_client_1.expectString)(output.ShardId),
    };
};
const deserializeAws_json1_1ShardIdList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_json1_1ShardList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Shard(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1StreamDescription = (output, context) => {
    return {
        EncryptionType: (0, smithy_client_1.expectString)(output.EncryptionType),
        EnhancedMonitoring: output.EnhancedMonitoring != null
            ? deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context)
            : undefined,
        HasMoreShards: (0, smithy_client_1.expectBoolean)(output.HasMoreShards),
        KeyId: (0, smithy_client_1.expectString)(output.KeyId),
        RetentionPeriodHours: (0, smithy_client_1.expectInt32)(output.RetentionPeriodHours),
        Shards: output.Shards != null ? deserializeAws_json1_1ShardList(output.Shards, context) : undefined,
        StreamARN: (0, smithy_client_1.expectString)(output.StreamARN),
        StreamCreationTimestamp: output.StreamCreationTimestamp != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.StreamCreationTimestamp)))
            : undefined,
        StreamModeDetails: output.StreamModeDetails != null
            ? deserializeAws_json1_1StreamModeDetails(output.StreamModeDetails, context)
            : undefined,
        StreamName: (0, smithy_client_1.expectString)(output.StreamName),
        StreamStatus: (0, smithy_client_1.expectString)(output.StreamStatus),
    };
};
const deserializeAws_json1_1StreamDescriptionSummary = (output, context) => {
    return {
        ConsumerCount: (0, smithy_client_1.expectInt32)(output.ConsumerCount),
        EncryptionType: (0, smithy_client_1.expectString)(output.EncryptionType),
        EnhancedMonitoring: output.EnhancedMonitoring != null
            ? deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context)
            : undefined,
        KeyId: (0, smithy_client_1.expectString)(output.KeyId),
        OpenShardCount: (0, smithy_client_1.expectInt32)(output.OpenShardCount),
        RetentionPeriodHours: (0, smithy_client_1.expectInt32)(output.RetentionPeriodHours),
        StreamARN: (0, smithy_client_1.expectString)(output.StreamARN),
        StreamCreationTimestamp: output.StreamCreationTimestamp != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.StreamCreationTimestamp)))
            : undefined,
        StreamModeDetails: output.StreamModeDetails != null
            ? deserializeAws_json1_1StreamModeDetails(output.StreamModeDetails, context)
            : undefined,
        StreamName: (0, smithy_client_1.expectString)(output.StreamName),
        StreamStatus: (0, smithy_client_1.expectString)(output.StreamStatus),
    };
};
const deserializeAws_json1_1StreamModeDetails = (output, context) => {
    return {
        StreamMode: (0, smithy_client_1.expectString)(output.StreamMode),
    };
};
const deserializeAws_json1_1StreamNameList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_json1_1SubscribeToShardEvent = (output, context) => {
    return {
        ChildShards: output.ChildShards != null ? deserializeAws_json1_1ChildShardList(output.ChildShards, context) : undefined,
        ContinuationSequenceNumber: (0, smithy_client_1.expectString)(output.ContinuationSequenceNumber),
        MillisBehindLatest: (0, smithy_client_1.expectLong)(output.MillisBehindLatest),
        Records: output.Records != null ? deserializeAws_json1_1RecordList(output.Records, context) : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: (0, smithy_client_1.expectString)(output.Key),
        Value: (0, smithy_client_1.expectString)(output.Value),
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1UpdateShardCountOutput = (output, context) => {
    return {
        CurrentShardCount: (0, smithy_client_1.expectInt32)(output.CurrentShardCount),
        StreamName: (0, smithy_client_1.expectString)(output.StreamName),
        TargetShardCount: (0, smithy_client_1.expectInt32)(output.TargetShardCount),
    };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: (0, smithy_client_1.expectString)(output.message),
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ 6711:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const tslib_1 = __nccwpck_require__(4351);
const package_json_1 = tslib_1.__importDefault(__nccwpck_require__(5798));
const client_sts_1 = __nccwpck_require__(2209);
const config_resolver_1 = __nccwpck_require__(6153);
const credential_provider_node_1 = __nccwpck_require__(5531);
const eventstream_serde_node_1 = __nccwpck_require__(6889);
const hash_node_1 = __nccwpck_require__(7442);
const middleware_retry_1 = __nccwpck_require__(6064);
const node_config_provider_1 = __nccwpck_require__(7684);
const node_http_handler_1 = __nccwpck_require__(8805);
const util_base64_node_1 = __nccwpck_require__(8588);
const util_body_length_node_1 = __nccwpck_require__(4147);
const util_user_agent_node_1 = __nccwpck_require__(8095);
const util_utf8_node_1 = __nccwpck_require__(6278);
const runtimeConfig_shared_1 = __nccwpck_require__(8291);
const smithy_client_1 = __nccwpck_require__(4963);
const util_defaults_mode_node_1 = __nccwpck_require__(4243);
const smithy_client_2 = __nccwpck_require__(4963);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : (0, client_sts_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        eventStreamSerdeProvider: (_f = config === null || config === void 0 ? void 0 : config.eventStreamSerdeProvider) !== null && _f !== void 0 ? _f : eventstream_serde_node_1.eventStreamSerdeProvider,
        maxAttempts: (_g = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _g !== void 0 ? _g : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_h = config === null || config === void 0 ? void 0 : config.region) !== null && _h !== void 0 ? _h : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_j = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _j !== void 0 ? _j : new node_http_handler_1.NodeHttp2Handler(async () => ({ ...(await defaultConfigProvider()), disableConcurrentStreams: true })),
        retryMode: (_k = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _k !== void 0 ? _k : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_l = config === null || config === void 0 ? void 0 : config.sha256) !== null && _l !== void 0 ? _l : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_m = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _m !== void 0 ? _m : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_o = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _o !== void 0 ? _o : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_p = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _p !== void 0 ? _p : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_q = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _q !== void 0 ? _q : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_r = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _r !== void 0 ? _r : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 8291:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const url_parser_1 = __nccwpck_require__(7190);
const endpoints_1 = __nccwpck_require__(9138);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2013-12-02",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "Kinesis",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 1148:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(1081), exports);
tslib_1.__exportStar(__nccwpck_require__(4260), exports);


/***/ }),

/***/ 1081:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.waitUntilStreamExists = exports.waitForStreamExists = void 0;
const util_waiter_1 = __nccwpck_require__(1627);
const DescribeStreamCommand_1 = __nccwpck_require__(4825);
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.StreamDescription.StreamStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamExists = waitForStreamExists;
const waitUntilStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilStreamExists = waitUntilStreamExists;


/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.waitUntilStreamNotExists = exports.waitForStreamNotExists = void 0;
const util_waiter_1 = __nccwpck_require__(1627);
const DescribeStreamCommand_1 = __nccwpck_require__(4825);
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamNotExists = waitForStreamNotExists;
const waitUntilStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilStreamNotExists = waitUntilStreamNotExists;


/***/ }),

/***/ 9838:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSO = void 0;
const GetRoleCredentialsCommand_1 = __nccwpck_require__(8972);
const ListAccountRolesCommand_1 = __nccwpck_require__(1513);
const ListAccountsCommand_1 = __nccwpck_require__(4296);
const LogoutCommand_1 = __nccwpck_require__(4511);
const SSOClient_1 = __nccwpck_require__(1057);
class SSO extends SSOClient_1.SSOClient {
    getRoleCredentials(args, optionsOrCb, cb) {
        const command = new GetRoleCredentialsCommand_1.GetRoleCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccountRoles(args, optionsOrCb, cb) {
        const command = new ListAccountRolesCommand_1.ListAccountRolesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccounts(args, optionsOrCb, cb) {
        const command = new ListAccountsCommand_1.ListAccountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    logout(args, optionsOrCb, cb) {
        const command = new LogoutCommand_1.LogoutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SSO = SSO;


/***/ }),

/***/ 1057:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSOClient = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const middleware_content_length_1 = __nccwpck_require__(2245);
const middleware_host_header_1 = __nccwpck_require__(2545);
const middleware_logger_1 = __nccwpck_require__(14);
const middleware_recursion_detection_1 = __nccwpck_require__(5525);
const middleware_retry_1 = __nccwpck_require__(6064);
const middleware_user_agent_1 = __nccwpck_require__(4688);
const smithy_client_1 = __nccwpck_require__(4963);
const runtimeConfig_1 = __nccwpck_require__(9756);
class SSOClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_4);
        super(_config_5);
        this.config = _config_5;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.SSOClient = SSOClient;


/***/ }),

/***/ 8972:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetRoleCredentialsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(6390);
const Aws_restJson1_1 = __nccwpck_require__(8507);
class GetRoleCredentialsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "GetRoleCredentialsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRoleCredentialsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRoleCredentialsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetRoleCredentialsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetRoleCredentialsCommand)(output, context);
    }
}
exports.GetRoleCredentialsCommand = GetRoleCredentialsCommand;


/***/ }),

/***/ 1513:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListAccountRolesCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(6390);
const Aws_restJson1_1 = __nccwpck_require__(8507);
class ListAccountRolesCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountRolesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAccountRolesRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAccountRolesResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListAccountRolesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListAccountRolesCommand)(output, context);
    }
}
exports.ListAccountRolesCommand = ListAccountRolesCommand;


/***/ }),

/***/ 4296:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListAccountsCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(6390);
const Aws_restJson1_1 = __nccwpck_require__(8507);
class ListAccountsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAccountsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAccountsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListAccountsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListAccountsCommand)(output, context);
    }
}
exports.ListAccountsCommand = ListAccountsCommand;


/***/ }),

/***/ 4511:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogoutCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(6390);
const Aws_restJson1_1 = __nccwpck_require__(8507);
class LogoutCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "LogoutCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.LogoutRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1LogoutCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1LogoutCommand)(output, context);
    }
}
exports.LogoutCommand = LogoutCommand;


/***/ }),

/***/ 5706:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(8972), exports);
tslib_1.__exportStar(__nccwpck_require__(1513), exports);
tslib_1.__exportStar(__nccwpck_require__(4296), exports);
tslib_1.__exportStar(__nccwpck_require__(4511), exports);


/***/ }),

/***/ 3546:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const regionHash = {
    "ap-east-1": {
        variants: [
            {
                hostname: "portal.sso.ap-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-east-1",
    },
    "ap-northeast-1": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-1",
    },
    "ap-northeast-2": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-2",
    },
    "ap-northeast-3": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-3.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-3",
    },
    "ap-south-1": {
        variants: [
            {
                hostname: "portal.sso.ap-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-south-1",
    },
    "ap-southeast-1": {
        variants: [
            {
                hostname: "portal.sso.ap-southeast-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-southeast-1",
    },
    "ap-southeast-2": {
        variants: [
            {
                hostname: "portal.sso.ap-southeast-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-southeast-2",
    },
    "ca-central-1": {
        variants: [
            {
                hostname: "portal.sso.ca-central-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ca-central-1",
    },
    "eu-central-1": {
        variants: [
            {
                hostname: "portal.sso.eu-central-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-central-1",
    },
    "eu-north-1": {
        variants: [
            {
                hostname: "portal.sso.eu-north-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-north-1",
    },
    "eu-south-1": {
        variants: [
            {
                hostname: "portal.sso.eu-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-south-1",
    },
    "eu-west-1": {
        variants: [
            {
                hostname: "portal.sso.eu-west-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-1",
    },
    "eu-west-2": {
        variants: [
            {
                hostname: "portal.sso.eu-west-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-2",
    },
    "eu-west-3": {
        variants: [
            {
                hostname: "portal.sso.eu-west-3.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-3",
    },
    "me-south-1": {
        variants: [
            {
                hostname: "portal.sso.me-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "me-south-1",
    },
    "sa-east-1": {
        variants: [
            {
                hostname: "portal.sso.sa-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "sa-east-1",
    },
    "us-east-1": {
        variants: [
            {
                hostname: "portal.sso.us-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-1",
    },
    "us-east-2": {
        variants: [
            {
                hostname: "portal.sso.us-east-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-2",
    },
    "us-gov-east-1": {
        variants: [
            {
                hostname: "portal.sso.us-gov-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1": {
        variants: [
            {
                hostname: "portal.sso.us-gov-west-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-west-1",
    },
    "us-west-2": {
        variants: [
            {
                hostname: "portal.sso.us-west-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-west-2",
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "awsssoportal",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSOServiceException = void 0;
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9838), exports);
tslib_1.__exportStar(__nccwpck_require__(1057), exports);
tslib_1.__exportStar(__nccwpck_require__(5706), exports);
tslib_1.__exportStar(__nccwpck_require__(4952), exports);
tslib_1.__exportStar(__nccwpck_require__(6773), exports);
var SSOServiceException_1 = __nccwpck_require__(1517);
Object.defineProperty(exports, "SSOServiceException", ({ enumerable: true, get: function () { return SSOServiceException_1.SSOServiceException; } }));


/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSOServiceException = void 0;
const smithy_client_1 = __nccwpck_require__(4963);
class SSOServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}
exports.SSOServiceException = SSOServiceException;


/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(6390), exports);


/***/ }),

/***/ 6390:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogoutRequestFilterSensitiveLog = exports.ListAccountsResponseFilterSensitiveLog = exports.ListAccountsRequestFilterSensitiveLog = exports.ListAccountRolesResponseFilterSensitiveLog = exports.RoleInfoFilterSensitiveLog = exports.ListAccountRolesRequestFilterSensitiveLog = exports.GetRoleCredentialsResponseFilterSensitiveLog = exports.RoleCredentialsFilterSensitiveLog = exports.GetRoleCredentialsRequestFilterSensitiveLog = exports.AccountInfoFilterSensitiveLog = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = void 0;
const smithy_client_1 = __nccwpck_require__(4963);
const SSOServiceException_1 = __nccwpck_require__(1517);
class InvalidRequestException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
exports.InvalidRequestException = InvalidRequestException;
class ResourceNotFoundException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class TooManyRequestsException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
class UnauthorizedException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
exports.UnauthorizedException = UnauthorizedException;
const AccountInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AccountInfoFilterSensitiveLog = AccountInfoFilterSensitiveLog;
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetRoleCredentialsRequestFilterSensitiveLog = GetRoleCredentialsRequestFilterSensitiveLog;
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.RoleCredentialsFilterSensitiveLog = RoleCredentialsFilterSensitiveLog;
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: (0, exports.RoleCredentialsFilterSensitiveLog)(obj.roleCredentials) }),
});
exports.GetRoleCredentialsResponseFilterSensitiveLog = GetRoleCredentialsResponseFilterSensitiveLog;
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListAccountRolesRequestFilterSensitiveLog = ListAccountRolesRequestFilterSensitiveLog;
const RoleInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RoleInfoFilterSensitiveLog = RoleInfoFilterSensitiveLog;
const ListAccountRolesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListAccountRolesResponseFilterSensitiveLog = ListAccountRolesResponseFilterSensitiveLog;
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListAccountsRequestFilterSensitiveLog = ListAccountsRequestFilterSensitiveLog;
const ListAccountsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListAccountsResponseFilterSensitiveLog = ListAccountsResponseFilterSensitiveLog;
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
});
exports.LogoutRequestFilterSensitiveLog = LogoutRequestFilterSensitiveLog;


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8460:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginateListAccountRoles = void 0;
const ListAccountRolesCommand_1 = __nccwpck_require__(1513);
const SSO_1 = __nccwpck_require__(9838);
const SSOClient_1 = __nccwpck_require__(1057);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListAccountRolesCommand_1.ListAccountRolesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listAccountRoles(input, ...args);
};
async function* paginateListAccountRoles(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSO_1.SSO) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOClient_1.SSOClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListAccountRoles = paginateListAccountRoles;


/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginateListAccounts = void 0;
const ListAccountsCommand_1 = __nccwpck_require__(4296);
const SSO_1 = __nccwpck_require__(9838);
const SSOClient_1 = __nccwpck_require__(1057);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListAccountsCommand_1.ListAccountsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listAccounts(input, ...args);
};
async function* paginateListAccounts(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSO_1.SSO) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOClient_1.SSOClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListAccounts = paginateListAccounts;


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(849), exports);
tslib_1.__exportStar(__nccwpck_require__(8460), exports);
tslib_1.__exportStar(__nccwpck_require__(938), exports);


/***/ }),

/***/ 8507:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeAws_restJson1LogoutCommand = exports.deserializeAws_restJson1ListAccountsCommand = exports.deserializeAws_restJson1ListAccountRolesCommand = exports.deserializeAws_restJson1GetRoleCredentialsCommand = exports.serializeAws_restJson1LogoutCommand = exports.serializeAws_restJson1ListAccountsCommand = exports.serializeAws_restJson1ListAccountRolesCommand = exports.serializeAws_restJson1GetRoleCredentialsCommand = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(6390);
const SSOServiceException_1 = __nccwpck_require__(1517);
const serializeAws_restJson1GetRoleCredentialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/federation/credentials";
    const query = map({
        role_name: [, input.roleName],
        account_id: [, input.accountId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetRoleCredentialsCommand = serializeAws_restJson1GetRoleCredentialsCommand;
const serializeAws_restJson1ListAccountRolesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/roles";
    const query = map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
        account_id: [, input.accountId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccountRolesCommand = serializeAws_restJson1ListAccountRolesCommand;
const serializeAws_restJson1ListAccountsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/accounts";
    const query = map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccountsCommand = serializeAws_restJson1ListAccountsCommand;
const serializeAws_restJson1LogoutCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/logout";
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1LogoutCommand = serializeAws_restJson1LogoutCommand;
const deserializeAws_restJson1GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRoleCredentialsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.roleCredentials != null) {
        contents.roleCredentials = deserializeAws_restJson1RoleCredentials(data.roleCredentials, context);
    }
    return contents;
};
exports.deserializeAws_restJson1GetRoleCredentialsCommand = deserializeAws_restJson1GetRoleCredentialsCommand;
const deserializeAws_restJson1GetRoleCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOServiceException_1.SSOServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountRolesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.nextToken != null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.roleList != null) {
        contents.roleList = deserializeAws_restJson1RoleListType(data.roleList, context);
    }
    return contents;
};
exports.deserializeAws_restJson1ListAccountRolesCommand = deserializeAws_restJson1ListAccountRolesCommand;
const deserializeAws_restJson1ListAccountRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOServiceException_1.SSOServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.accountList != null) {
        contents.accountList = deserializeAws_restJson1AccountListType(data.accountList, context);
    }
    if (data.nextToken != null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListAccountsCommand = deserializeAws_restJson1ListAccountsCommand;
const deserializeAws_restJson1ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOServiceException_1.SSOServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1LogoutCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1LogoutCommand = deserializeAws_restJson1LogoutCommand;
const deserializeAws_restJson1LogoutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: SSOServiceException_1.SSOServiceException,
                errorCode,
            });
    }
};
const map = smithy_client_1.map;
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1AccountInfo = (output, context) => {
    return {
        accountId: (0, smithy_client_1.expectString)(output.accountId),
        accountName: (0, smithy_client_1.expectString)(output.accountName),
        emailAddress: (0, smithy_client_1.expectString)(output.emailAddress),
    };
};
const deserializeAws_restJson1AccountListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccountInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RoleCredentials = (output, context) => {
    return {
        accessKeyId: (0, smithy_client_1.expectString)(output.accessKeyId),
        expiration: (0, smithy_client_1.expectLong)(output.expiration),
        secretAccessKey: (0, smithy_client_1.expectString)(output.secretAccessKey),
        sessionToken: (0, smithy_client_1.expectString)(output.sessionToken),
    };
};
const deserializeAws_restJson1RoleInfo = (output, context) => {
    return {
        accountId: (0, smithy_client_1.expectString)(output.accountId),
        roleName: (0, smithy_client_1.expectString)(output.roleName),
    };
};
const deserializeAws_restJson1RoleListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoleInfo(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ 9756:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const tslib_1 = __nccwpck_require__(4351);
const package_json_1 = tslib_1.__importDefault(__nccwpck_require__(1092));
const config_resolver_1 = __nccwpck_require__(6153);
const hash_node_1 = __nccwpck_require__(7442);
const middleware_retry_1 = __nccwpck_require__(6064);
const node_config_provider_1 = __nccwpck_require__(7684);
const node_http_handler_1 = __nccwpck_require__(8805);
const util_base64_node_1 = __nccwpck_require__(8588);
const util_body_length_node_1 = __nccwpck_require__(4147);
const util_user_agent_node_1 = __nccwpck_require__(8095);
const util_utf8_node_1 = __nccwpck_require__(6278);
const runtimeConfig_shared_1 = __nccwpck_require__(4355);
const smithy_client_1 = __nccwpck_require__(4963);
const util_defaults_mode_node_1 = __nccwpck_require__(4243);
const smithy_client_2 = __nccwpck_require__(4963);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_f = config === null || config === void 0 ? void 0 : config.region) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_g = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _g !== void 0 ? _g : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_h = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _h !== void 0 ? _h : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_j = config === null || config === void 0 ? void 0 : config.sha256) !== null && _j !== void 0 ? _j : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_k = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _k !== void 0 ? _k : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_l = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _l !== void 0 ? _l : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_m = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _m !== void 0 ? _m : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _o !== void 0 ? _o : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _p !== void 0 ? _p : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 4355:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const url_parser_1 = __nccwpck_require__(7190);
const endpoints_1 = __nccwpck_require__(3546);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2019-06-10",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "SSO",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 2605:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STS = void 0;
const AssumeRoleCommand_1 = __nccwpck_require__(9802);
const AssumeRoleWithSAMLCommand_1 = __nccwpck_require__(2865);
const AssumeRoleWithWebIdentityCommand_1 = __nccwpck_require__(7451);
const DecodeAuthorizationMessageCommand_1 = __nccwpck_require__(4150);
const GetAccessKeyInfoCommand_1 = __nccwpck_require__(9804);
const GetCallerIdentityCommand_1 = __nccwpck_require__(4278);
const GetFederationTokenCommand_1 = __nccwpck_require__(7552);
const GetSessionTokenCommand_1 = __nccwpck_require__(3285);
const STSClient_1 = __nccwpck_require__(4195);
class STS extends STSClient_1.STSClient {
    assumeRole(args, optionsOrCb, cb) {
        const command = new AssumeRoleCommand_1.AssumeRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assumeRoleWithSAML(args, optionsOrCb, cb) {
        const command = new AssumeRoleWithSAMLCommand_1.AssumeRoleWithSAMLCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assumeRoleWithWebIdentity(args, optionsOrCb, cb) {
        const command = new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    decodeAuthorizationMessage(args, optionsOrCb, cb) {
        const command = new DecodeAuthorizationMessageCommand_1.DecodeAuthorizationMessageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAccessKeyInfo(args, optionsOrCb, cb) {
        const command = new GetAccessKeyInfoCommand_1.GetAccessKeyInfoCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCallerIdentity(args, optionsOrCb, cb) {
        const command = new GetCallerIdentityCommand_1.GetCallerIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFederationToken(args, optionsOrCb, cb) {
        const command = new GetFederationTokenCommand_1.GetFederationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSessionToken(args, optionsOrCb, cb) {
        const command = new GetSessionTokenCommand_1.GetSessionTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.STS = STS;


/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STSClient = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const middleware_content_length_1 = __nccwpck_require__(2245);
const middleware_host_header_1 = __nccwpck_require__(2545);
const middleware_logger_1 = __nccwpck_require__(14);
const middleware_recursion_detection_1 = __nccwpck_require__(5525);
const middleware_retry_1 = __nccwpck_require__(6064);
const middleware_sdk_sts_1 = __nccwpck_require__(5959);
const middleware_user_agent_1 = __nccwpck_require__(4688);
const smithy_client_1 = __nccwpck_require__(4963);
const runtimeConfig_1 = __nccwpck_require__(3405);
class STSClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_sdk_sts_1.resolveStsAuthConfig)(_config_4, { stsClientCtor: STSClient });
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.STSClient = STSClient;


/***/ }),

/***/ 9802:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssumeRoleCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class AssumeRoleCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleCommand)(output, context);
    }
}
exports.AssumeRoleCommand = AssumeRoleCommand;


/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssumeRoleWithSAMLCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class AssumeRoleWithSAMLCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithSAMLCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleWithSAMLCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleWithSAMLCommand)(output, context);
    }
}
exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;


/***/ }),

/***/ 7451:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssumeRoleWithWebIdentityCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class AssumeRoleWithWebIdentityCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithWebIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleWithWebIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleWithWebIdentityCommand)(output, context);
    }
}
exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;


/***/ }),

/***/ 4150:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecodeAuthorizationMessageCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class DecodeAuthorizationMessageCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "DecodeAuthorizationMessageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DecodeAuthorizationMessageRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DecodeAuthorizationMessageResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryDecodeAuthorizationMessageCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryDecodeAuthorizationMessageCommand)(output, context);
    }
}
exports.DecodeAuthorizationMessageCommand = DecodeAuthorizationMessageCommand;


/***/ }),

/***/ 9804:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetAccessKeyInfoCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class GetAccessKeyInfoCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetAccessKeyInfoCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAccessKeyInfoRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAccessKeyInfoResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetAccessKeyInfoCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetAccessKeyInfoCommand)(output, context);
    }
}
exports.GetAccessKeyInfoCommand = GetAccessKeyInfoCommand;


/***/ }),

/***/ 4278:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCallerIdentityCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class GetCallerIdentityCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetCallerIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetCallerIdentityRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetCallerIdentityResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetCallerIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetCallerIdentityCommand)(output, context);
    }
}
exports.GetCallerIdentityCommand = GetCallerIdentityCommand;


/***/ }),

/***/ 7552:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetFederationTokenCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class GetFederationTokenCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetFederationTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetFederationTokenRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetFederationTokenResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetFederationTokenCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetFederationTokenCommand)(output, context);
    }
}
exports.GetFederationTokenCommand = GetFederationTokenCommand;


/***/ }),

/***/ 3285:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSessionTokenCommand = void 0;
const middleware_serde_1 = __nccwpck_require__(3631);
const middleware_signing_1 = __nccwpck_require__(4935);
const smithy_client_1 = __nccwpck_require__(4963);
const models_0_1 = __nccwpck_require__(1780);
const Aws_query_1 = __nccwpck_require__(740);
class GetSessionTokenCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetSessionTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetSessionTokenRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetSessionTokenResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetSessionTokenCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetSessionTokenCommand)(output, context);
    }
}
exports.GetSessionTokenCommand = GetSessionTokenCommand;


/***/ }),

/***/ 5716:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9802), exports);
tslib_1.__exportStar(__nccwpck_require__(2865), exports);
tslib_1.__exportStar(__nccwpck_require__(7451), exports);
tslib_1.__exportStar(__nccwpck_require__(4150), exports);
tslib_1.__exportStar(__nccwpck_require__(9804), exports);
tslib_1.__exportStar(__nccwpck_require__(4278), exports);
tslib_1.__exportStar(__nccwpck_require__(7552), exports);
tslib_1.__exportStar(__nccwpck_require__(3285), exports);


/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
const defaultStsRoleAssumers_1 = __nccwpck_require__(48);
const STSClient_1 = __nccwpck_require__(4195);
const getDefaultRoleAssumer = (stsOptions = {}) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumer)(stsOptions, STSClient_1.STSClient);
exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumerWithWebIdentity)(stsOptions, STSClient_1.STSClient);
exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: (0, exports.getDefaultRoleAssumer)(input),
    roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input),
    ...input,
});
exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
const AssumeRoleCommand_1 = __nccwpck_require__(9802);
const AssumeRoleWithWebIdentityCommand_1 = __nccwpck_require__(7451);
const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const decorateDefaultRegion = (region) => {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return async () => {
        try {
            return await region();
        }
        catch (e) {
            return ASSUME_ROLE_DEFAULT_REGION;
        }
    };
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand_1.AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: (0, exports.getDefaultRoleAssumer)(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input, input.stsClientCtor),
    ...input,
});
exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;


/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const regionHash = {
    "aws-global": {
        variants: [
            {
                hostname: "sts.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-1",
    },
    "us-east-1": {
        variants: [
            {
                hostname: "sts-fips.us-east-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-east-2": {
        variants: [
            {
                hostname: "sts-fips.us-east-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-gov-east-1": {
        variants: [
            {
                hostname: "sts.us-gov-east-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-gov-west-1": {
        variants: [
            {
                hostname: "sts.us-gov-west-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-west-1": {
        variants: [
            {
                hostname: "sts-fips.us-west-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-west-2": {
        variants: [
            {
                hostname: "sts-fips.us-west-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "aws-global",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-1-fips",
            "us-east-2",
            "us-east-2-fips",
            "us-west-1",
            "us-west-1-fips",
            "us-west-2",
            "us-west-2-fips",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "sts",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),

/***/ 2209:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STSServiceException = void 0;
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(2605), exports);
tslib_1.__exportStar(__nccwpck_require__(4195), exports);
tslib_1.__exportStar(__nccwpck_require__(5716), exports);
tslib_1.__exportStar(__nccwpck_require__(8028), exports);
tslib_1.__exportStar(__nccwpck_require__(106), exports);
var STSServiceException_1 = __nccwpck_require__(6450);
Object.defineProperty(exports, "STSServiceException", ({ enumerable: true, get: function () { return STSServiceException_1.STSServiceException; } }));


/***/ }),

/***/ 6450:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STSServiceException = void 0;
const smithy_client_1 = __nccwpck_require__(4963);
class STSServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}
exports.STSServiceException = STSServiceException;


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(1780), exports);


/***/ }),

/***/ 1780:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSessionTokenResponseFilterSensitiveLog = exports.GetSessionTokenRequestFilterSensitiveLog = exports.GetFederationTokenResponseFilterSensitiveLog = exports.FederatedUserFilterSensitiveLog = exports.GetFederationTokenRequestFilterSensitiveLog = exports.GetCallerIdentityResponseFilterSensitiveLog = exports.GetCallerIdentityRequestFilterSensitiveLog = exports.GetAccessKeyInfoResponseFilterSensitiveLog = exports.GetAccessKeyInfoRequestFilterSensitiveLog = exports.DecodeAuthorizationMessageResponseFilterSensitiveLog = exports.DecodeAuthorizationMessageRequestFilterSensitiveLog = exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = exports.AssumeRoleResponseFilterSensitiveLog = exports.CredentialsFilterSensitiveLog = exports.AssumeRoleRequestFilterSensitiveLog = exports.TagFilterSensitiveLog = exports.PolicyDescriptorTypeFilterSensitiveLog = exports.AssumedRoleUserFilterSensitiveLog = exports.InvalidAuthorizationMessageException = exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = void 0;
const STSServiceException_1 = __nccwpck_require__(6450);
class ExpiredTokenException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
exports.ExpiredTokenException = ExpiredTokenException;
class MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
class PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;
class RegionDisabledException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
exports.RegionDisabledException = RegionDisabledException;
class IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
exports.IDPRejectedClaimException = IDPRejectedClaimException;
class InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
exports.InvalidIdentityTokenException = InvalidIdentityTokenException;
class IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
class InvalidAuthorizationMessageException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
exports.InvalidAuthorizationMessageException = InvalidAuthorizationMessageException;
const AssumedRoleUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumedRoleUserFilterSensitiveLog = AssumedRoleUserFilterSensitiveLog;
const PolicyDescriptorTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PolicyDescriptorTypeFilterSensitiveLog = PolicyDescriptorTypeFilterSensitiveLog;
const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagFilterSensitiveLog = TagFilterSensitiveLog;
const AssumeRoleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleRequestFilterSensitiveLog = AssumeRoleRequestFilterSensitiveLog;
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CredentialsFilterSensitiveLog = CredentialsFilterSensitiveLog;
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleResponseFilterSensitiveLog = AssumeRoleResponseFilterSensitiveLog;
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithSAMLRequestFilterSensitiveLog = AssumeRoleWithSAMLRequestFilterSensitiveLog;
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithSAMLResponseFilterSensitiveLog = AssumeRoleWithSAMLResponseFilterSensitiveLog;
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = AssumeRoleWithWebIdentityRequestFilterSensitiveLog;
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = AssumeRoleWithWebIdentityResponseFilterSensitiveLog;
const DecodeAuthorizationMessageRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DecodeAuthorizationMessageRequestFilterSensitiveLog = DecodeAuthorizationMessageRequestFilterSensitiveLog;
const DecodeAuthorizationMessageResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DecodeAuthorizationMessageResponseFilterSensitiveLog = DecodeAuthorizationMessageResponseFilterSensitiveLog;
const GetAccessKeyInfoRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetAccessKeyInfoRequestFilterSensitiveLog = GetAccessKeyInfoRequestFilterSensitiveLog;
const GetAccessKeyInfoResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetAccessKeyInfoResponseFilterSensitiveLog = GetAccessKeyInfoResponseFilterSensitiveLog;
const GetCallerIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCallerIdentityRequestFilterSensitiveLog = GetCallerIdentityRequestFilterSensitiveLog;
const GetCallerIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetCallerIdentityResponseFilterSensitiveLog = GetCallerIdentityResponseFilterSensitiveLog;
const GetFederationTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetFederationTokenRequestFilterSensitiveLog = GetFederationTokenRequestFilterSensitiveLog;
const FederatedUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.FederatedUserFilterSensitiveLog = FederatedUserFilterSensitiveLog;
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetFederationTokenResponseFilterSensitiveLog = GetFederationTokenResponseFilterSensitiveLog;
const GetSessionTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetSessionTokenRequestFilterSensitiveLog = GetSessionTokenRequestFilterSensitiveLog;
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetSessionTokenResponseFilterSensitiveLog = GetSessionTokenResponseFilterSensitiveLog;


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeAws_queryGetSessionTokenCommand = exports.deserializeAws_queryGetFederationTokenCommand = exports.deserializeAws_queryGetCallerIdentityCommand = exports.deserializeAws_queryGetAccessKeyInfoCommand = exports.deserializeAws_queryDecodeAuthorizationMessageCommand = exports.deserializeAws_queryAssumeRoleWithWebIdentityCommand = exports.deserializeAws_queryAssumeRoleWithSAMLCommand = exports.deserializeAws_queryAssumeRoleCommand = exports.serializeAws_queryGetSessionTokenCommand = exports.serializeAws_queryGetFederationTokenCommand = exports.serializeAws_queryGetCallerIdentityCommand = exports.serializeAws_queryGetAccessKeyInfoCommand = exports.serializeAws_queryDecodeAuthorizationMessageCommand = exports.serializeAws_queryAssumeRoleWithWebIdentityCommand = exports.serializeAws_queryAssumeRoleWithSAMLCommand = exports.serializeAws_queryAssumeRoleCommand = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const smithy_client_1 = __nccwpck_require__(4963);
const entities_1 = __nccwpck_require__(3000);
const fast_xml_parser_1 = __nccwpck_require__(7448);
const models_0_1 = __nccwpck_require__(1780);
const STSServiceException_1 = __nccwpck_require__(6450);
const serializeAws_queryAssumeRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleRequest(input, context),
        Action: "AssumeRole",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleCommand = serializeAws_queryAssumeRoleCommand;
const serializeAws_queryAssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithSAMLRequest(input, context),
        Action: "AssumeRoleWithSAML",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleWithSAMLCommand = serializeAws_queryAssumeRoleWithSAMLCommand;
const serializeAws_queryAssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context),
        Action: "AssumeRoleWithWebIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleWithWebIdentityCommand = serializeAws_queryAssumeRoleWithWebIdentityCommand;
const serializeAws_queryDecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDecodeAuthorizationMessageRequest(input, context),
        Action: "DecodeAuthorizationMessage",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDecodeAuthorizationMessageCommand = serializeAws_queryDecodeAuthorizationMessageCommand;
const serializeAws_queryGetAccessKeyInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetAccessKeyInfoRequest(input, context),
        Action: "GetAccessKeyInfo",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccessKeyInfoCommand = serializeAws_queryGetAccessKeyInfoCommand;
const serializeAws_queryGetCallerIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetCallerIdentityRequest(input, context),
        Action: "GetCallerIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetCallerIdentityCommand = serializeAws_queryGetCallerIdentityCommand;
const serializeAws_queryGetFederationTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetFederationTokenRequest(input, context),
        Action: "GetFederationToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetFederationTokenCommand = serializeAws_queryGetFederationTokenCommand;
const serializeAws_queryGetSessionTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSessionTokenRequest(input, context),
        Action: "GetSessionToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSessionTokenCommand = serializeAws_queryGetSessionTokenCommand;
const deserializeAws_queryAssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleCommand = deserializeAws_queryAssumeRoleCommand;
const deserializeAws_queryAssumeRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryAssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleWithSAMLCommand = deserializeAws_queryAssumeRoleWithSAMLCommand;
const deserializeAws_queryAssumeRoleWithSAMLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaimException":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityTokenException":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryAssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleWithWebIdentityCommand = deserializeAws_queryAssumeRoleWithWebIdentityCommand;
const deserializeAws_queryAssumeRoleWithWebIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPCommunicationErrorException":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaimException":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityTokenException":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryDecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDecodeAuthorizationMessageCommand = deserializeAws_queryDecodeAuthorizationMessageCommand;
const deserializeAws_queryDecodeAuthorizationMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryGetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccessKeyInfoCommand = deserializeAws_queryGetAccessKeyInfoCommand;
const deserializeAws_queryGetAccessKeyInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: STSServiceException_1.STSServiceException,
        errorCode,
    });
};
const deserializeAws_queryGetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetCallerIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetCallerIdentityCommand = deserializeAws_queryGetCallerIdentityCommand;
const deserializeAws_queryGetCallerIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: STSServiceException_1.STSServiceException,
        errorCode,
    });
};
const deserializeAws_queryGetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetFederationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetFederationTokenCommand = deserializeAws_queryGetFederationTokenCommand;
const deserializeAws_queryGetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryGetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSessionTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSessionTokenCommand = deserializeAws_queryGetSessionTokenCommand;
const deserializeAws_queryGetSessionTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException_1.STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExpiredTokenException(body.Error, context);
    const exception = new models_0_1.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
    const exception = new models_0_1.IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
    const exception = new models_0_1.IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthorizationMessageException(body.Error, context);
    const exception = new models_0_1.InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
    const exception = new models_0_1.InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const exception = new models_0_1.MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
    const exception = new models_0_1.PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryRegionDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRegionDisabledException(body.Error, context);
    const exception = new models_0_1.RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const serializeAws_queryAssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TransitiveTagKeys != null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExternalId != null) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.SourceIdentity != null) {
        entries["SourceIdentity"] = input.SourceIdentity;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.PrincipalArn != null) {
        entries["PrincipalArn"] = input.PrincipalArn;
    }
    if (input.SAMLAssertion != null) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken != null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    if (input.ProviderId != null) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryDecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input.EncodedMessage != null) {
        entries["EncodedMessage"] = input.EncodedMessage;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId != null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryGetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    return entries;
};
const serializeAws_querypolicyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input.arn != null) {
        entries["arn"] = input.arn;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key != null) {
        entries["Key"] = input.Key;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const deserializeAws_queryAssumedRoleUser = (output, context) => {
    const contents = {
        AssumedRoleId: undefined,
        Arn: undefined,
    };
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = (0, smithy_client_1.expectString)(output["AssumedRoleId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Subject: undefined,
        SubjectType: undefined,
        Issuer: undefined,
        Audience: undefined,
        NameQualifier: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["Subject"] !== undefined) {
        contents.Subject = (0, smithy_client_1.expectString)(output["Subject"]);
    }
    if (output["SubjectType"] !== undefined) {
        contents.SubjectType = (0, smithy_client_1.expectString)(output["SubjectType"]);
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = (0, smithy_client_1.expectString)(output["Issuer"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
    }
    if (output["NameQualifier"] !== undefined) {
        contents.NameQualifier = (0, smithy_client_1.expectString)(output["NameQualifier"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        SubjectFromWebIdentityToken: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Provider: undefined,
        Audience: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken = (0, smithy_client_1.expectString)(output["SubjectFromWebIdentityToken"]);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = (0, smithy_client_1.expectString)(output["Provider"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryCredentials = (output, context) => {
    const contents = {
        AccessKeyId: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined,
        Expiration: undefined,
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = (0, smithy_client_1.expectString)(output["AccessKeyId"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = (0, smithy_client_1.expectString)(output["SecretAccessKey"]);
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = (0, smithy_client_1.expectString)(output["SessionToken"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output["Expiration"]));
    }
    return contents;
};
const deserializeAws_queryDecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {
        DecodedMessage: undefined,
    };
    if (output["DecodedMessage"] !== undefined) {
        contents.DecodedMessage = (0, smithy_client_1.expectString)(output["DecodedMessage"]);
    }
    return contents;
};
const deserializeAws_queryExpiredTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryFederatedUser = (output, context) => {
    const contents = {
        FederatedUserId: undefined,
        Arn: undefined,
    };
    if (output["FederatedUserId"] !== undefined) {
        contents.FederatedUserId = (0, smithy_client_1.expectString)(output["FederatedUserId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyInfoResponse = (output, context) => {
    const contents = {
        Account: undefined,
    };
    if (output["Account"] !== undefined) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
    }
    return contents;
};
const deserializeAws_queryGetCallerIdentityResponse = (output, context) => {
    const contents = {
        UserId: undefined,
        Account: undefined,
        Arn: undefined,
    };
    if (output["UserId"] !== undefined) {
        contents.UserId = (0, smithy_client_1.expectString)(output["UserId"]);
    }
    if (output["Account"] !== undefined) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetFederationTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        FederatedUser: undefined,
        PackedPolicySize: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["FederatedUser"] !== undefined) {
        contents.FederatedUser = deserializeAws_queryFederatedUser(output["FederatedUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    return contents;
};
const deserializeAws_queryGetSessionTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    return contents;
};
const deserializeAws_queryIDPCommunicationErrorException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryIDPRejectedClaimException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidAuthorizationMessageException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidIdentityTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryPackedPolicyTooLargeException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryRegionDisabledException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parsedObj = (0, fast_xml_parser_1.parse)(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : (0, entities_1.decodeHTML)(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => (0, smithy_client_1.extendedEncodeURIComponent)(key) + "=" + (0, smithy_client_1.extendedEncodeURIComponent)(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};


/***/ }),

/***/ 3405:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const tslib_1 = __nccwpck_require__(4351);
const package_json_1 = tslib_1.__importDefault(__nccwpck_require__(7947));
const defaultStsRoleAssumers_1 = __nccwpck_require__(48);
const config_resolver_1 = __nccwpck_require__(6153);
const credential_provider_node_1 = __nccwpck_require__(5531);
const hash_node_1 = __nccwpck_require__(7442);
const middleware_retry_1 = __nccwpck_require__(6064);
const node_config_provider_1 = __nccwpck_require__(7684);
const node_http_handler_1 = __nccwpck_require__(8805);
const util_base64_node_1 = __nccwpck_require__(8588);
const util_body_length_node_1 = __nccwpck_require__(4147);
const util_user_agent_node_1 = __nccwpck_require__(8095);
const util_utf8_node_1 = __nccwpck_require__(6278);
const runtimeConfig_shared_1 = __nccwpck_require__(2642);
const smithy_client_1 = __nccwpck_require__(4963);
const util_defaults_mode_node_1 = __nccwpck_require__(4243);
const smithy_client_2 = __nccwpck_require__(4963);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : (0, defaultStsRoleAssumers_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_g = config === null || config === void 0 ? void 0 : config.region) !== null && _g !== void 0 ? _g : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_h = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _h !== void 0 ? _h : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_j = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _j !== void 0 ? _j : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_k = config === null || config === void 0 ? void 0 : config.sha256) !== null && _k !== void 0 ? _k : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_l = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _l !== void 0 ? _l : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_m = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _m !== void 0 ? _m : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_o = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _o !== void 0 ? _o : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _p !== void 0 ? _p : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_q = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _q !== void 0 ? _q : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 2642:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const url_parser_1 = __nccwpck_require__(7190);
const endpoints_1 = __nccwpck_require__(3571);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2011-06-15",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "STS",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 4723:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_DUALSTACK_ENDPOINT = exports.CONFIG_USE_DUALSTACK_ENDPOINT = exports.ENV_USE_DUALSTACK_ENDPOINT = void 0;
const util_config_provider_1 = __nccwpck_require__(6168);
exports.ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
exports.CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
exports.DEFAULT_USE_DUALSTACK_ENDPOINT = false;
exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.ENV),
    configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ 2478:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_FIPS_ENDPOINT = exports.CONFIG_USE_FIPS_ENDPOINT = exports.ENV_USE_FIPS_ENDPOINT = void 0;
const util_config_provider_1 = __nccwpck_require__(6168);
exports.ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
exports.CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
exports.DEFAULT_USE_FIPS_ENDPOINT = false;
exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.ENV),
    configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ 7392:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(4723), exports);
tslib_1.__exportStar(__nccwpck_require__(2478), exports);
tslib_1.__exportStar(__nccwpck_require__(2108), exports);
tslib_1.__exportStar(__nccwpck_require__(2327), exports);


/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveCustomEndpointsConfig = void 0;
const util_middleware_1 = __nccwpck_require__(236);
const resolveCustomEndpointsConfig = (input) => {
    var _a;
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)(input.useDualstackEndpoint),
    };
};
exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;


/***/ }),

/***/ 2327:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveEndpointsConfig = void 0;
const util_middleware_1 = __nccwpck_require__(236);
const getEndpointFromRegion_1 = __nccwpck_require__(4159);
const resolveEndpointsConfig = (input) => {
    var _a;
    const useDualstackEndpoint = (0, util_middleware_1.normalizeProvider)(input.useDualstackEndpoint);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: endpoint
            ? (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0, getEndpointFromRegion_1.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: endpoint ? true : false,
        useDualstackEndpoint,
    };
};
exports.resolveEndpointsConfig = resolveEndpointsConfig;


/***/ }),

/***/ 4159:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndpointFromRegion = void 0;
const getEndpointFromRegion = async (input) => {
    var _a;
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (_a = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }))) !== null && _a !== void 0 ? _a : {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};
exports.getEndpointFromRegion = getEndpointFromRegion;


/***/ }),

/***/ 6153:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(7392), exports);
tslib_1.__exportStar(__nccwpck_require__(5441), exports);
tslib_1.__exportStar(__nccwpck_require__(6258), exports);


/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODE_REGION_CONFIG_FILE_OPTIONS = exports.NODE_REGION_CONFIG_OPTIONS = exports.REGION_INI_NAME = exports.REGION_ENV_NAME = void 0;
exports.REGION_ENV_NAME = "AWS_REGION";
exports.REGION_INI_NAME = "region";
exports.NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.REGION_ENV_NAME],
    configFileSelector: (profile) => profile[exports.REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRealRegion = void 0;
const isFipsRegion_1 = __nccwpck_require__(2440);
const getRealRegion = (region) => (0, isFipsRegion_1.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;
exports.getRealRegion = getRealRegion;


/***/ }),

/***/ 5441:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(422), exports);
tslib_1.__exportStar(__nccwpck_require__(1595), exports);


/***/ }),

/***/ 2440:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFipsRegion = void 0;
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
exports.isFipsRegion = isFipsRegion;


/***/ }),

/***/ 1595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveRegionConfig = void 0;
const getRealRegion_1 = __nccwpck_require__(2844);
const isFipsRegion_1 = __nccwpck_require__(2440);
const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0, getRealRegion_1.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0, getRealRegion_1.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0, isFipsRegion_1.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint === "boolean" ? Promise.resolve(useFipsEndpoint) : useFipsEndpoint();
        },
    };
};
exports.resolveRegionConfig = resolveRegionConfig;


/***/ }),

/***/ 3566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHostnameFromVariants = void 0;
const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => {
    var _a;
    return (_a = variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))) === null || _a === void 0 ? void 0 : _a.hostname;
};
exports.getHostnameFromVariants = getHostnameFromVariants;


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRegionInfo = void 0;
const getHostnameFromVariants_1 = __nccwpck_require__(5280);
const getResolvedHostname_1 = __nccwpck_require__(3877);
const getResolvedPartition_1 = __nccwpck_require__(7642);
const getResolvedSigningRegion_1 = __nccwpck_require__(3517);
const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    var _a, _b, _c, _d, _e, _f;
    const partition = (0, getResolvedPartition_1.getResolvedPartition)(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : (_b = (_a = partitionHash[partition]) === null || _a === void 0 ? void 0 : _a.endpoint) !== null && _b !== void 0 ? _b : region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_c = regionHash[resolvedRegion]) === null || _c === void 0 ? void 0 : _c.variants, hostnameOptions);
    const partitionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_d = partitionHash[partition]) === null || _d === void 0 ? void 0 : _d.variants, hostnameOptions);
    const hostname = (0, getResolvedHostname_1.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = (0, getResolvedSigningRegion_1.getResolvedSigningRegion)(hostname, {
        signingRegion: (_e = regionHash[resolvedRegion]) === null || _e === void 0 ? void 0 : _e.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(((_f = regionHash[resolvedRegion]) === null || _f === void 0 ? void 0 : _f.signingService) && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};
exports.getRegionInfo = getRegionInfo;


/***/ }),

/***/ 3877:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResolvedHostname = void 0;
const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;
exports.getResolvedHostname = getResolvedHostname;


/***/ }),

/***/ 7642:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResolvedPartition = void 0;
const getResolvedPartition = (region, { partitionHash }) => { var _a; return (_a = Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region))) !== null && _a !== void 0 ? _a : "aws"; };
exports.getResolvedPartition = getResolvedPartition;


/***/ }),

/***/ 3517:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResolvedSigningRegion = void 0;
const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};
exports.getResolvedSigningRegion = getResolvedSigningRegion;


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(3566), exports);
tslib_1.__exportStar(__nccwpck_require__(6057), exports);
tslib_1.__exportStar(__nccwpck_require__(6167), exports);


/***/ }),

/***/ 255:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromEnv = exports.ENV_EXPIRATION = exports.ENV_SESSION = exports.ENV_SECRET = exports.ENV_KEY = void 0;
const property_provider_1 = __nccwpck_require__(4462);
exports.ENV_KEY = "AWS_ACCESS_KEY_ID";
exports.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
exports.ENV_SESSION = "AWS_SESSION_TOKEN";
exports.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const fromEnv = () => async () => {
    const accessKeyId = process.env[exports.ENV_KEY];
    const secretAccessKey = process.env[exports.ENV_SECRET];
    const sessionToken = process.env[exports.ENV_SESSION];
    const expiry = process.env[exports.ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
        };
    }
    throw new property_provider_1.CredentialsProviderError("Unable to find environment variable credentials.");
};
exports.fromEnv = fromEnv;


/***/ }),

/***/ 5972:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(255), exports);


/***/ }),

/***/ 3736:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Endpoint = void 0;
var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));


/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENDPOINT_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_NAME = exports.ENV_ENDPOINT_NAME = void 0;
exports.ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
exports.CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
exports.ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_NAME],
    default: undefined,
};


/***/ }),

/***/ 1695:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndpointMode = void 0;
var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode = exports.EndpointMode || (exports.EndpointMode = {}));


/***/ }),

/***/ 7824:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENDPOINT_MODE_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_MODE_NAME = exports.ENV_ENDPOINT_MODE_NAME = void 0;
const EndpointMode_1 = __nccwpck_require__(1695);
exports.ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
exports.CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
exports.ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode_1.EndpointMode.IPv4,
};


/***/ }),

/***/ 5232:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromContainerMetadata = exports.ENV_CMDS_AUTH_TOKEN = exports.ENV_CMDS_RELATIVE_URI = exports.ENV_CMDS_FULL_URI = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const url_1 = __nccwpck_require__(7310);
const httpRequest_1 = __nccwpck_require__(1303);
const ImdsCredentials_1 = __nccwpck_require__(1467);
const RemoteProviderInit_1 = __nccwpck_require__(2314);
const retry_1 = __nccwpck_require__(9912);
exports.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
exports.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
exports.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
    return () => (0, retry_1.retry)(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
            throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
    }, maxRetries);
};
exports.fromContainerMetadata = fromContainerMetadata;
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[exports.ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[exports.ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await (0, httpRequest_1.httpRequest)({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[exports.ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[exports.ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[exports.ENV_CMDS_FULL_URI]) {
        const parsed = (0, url_1.parse)(process.env[exports.ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new property_provider_1.CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new property_provider_1.CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new property_provider_1.CredentialsProviderError("The container metadata credential provider cannot be used unless" +
        ` the ${exports.ENV_CMDS_RELATIVE_URI} or ${exports.ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};


/***/ }),

/***/ 5813:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromInstanceMetadata = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const httpRequest_1 = __nccwpck_require__(1303);
const ImdsCredentials_1 = __nccwpck_require__(1467);
const RemoteProviderInit_1 = __nccwpck_require__(2314);
const retry_1 = __nccwpck_require__(9912);
const getInstanceMetadataEndpoint_1 = __nccwpck_require__(1206);
const staticStabilityProvider_1 = __nccwpck_require__(4620);
const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const fromInstanceMetadata = (init = {}) => (0, staticStabilityProvider_1.staticStabilityProvider)(getInstanceImdsProvider(init), { logger: init.logger });
exports.fromInstanceMetadata = fromInstanceMetadata;
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
    const getCredentials = async (maxRetries, options) => {
        const profile = (await (0, retry_1.retry)(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return (0, retry_1.retry)(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(profile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await (0, getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint)();
        if (disableFetchToken) {
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.statusCode) === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    "x-aws-ec2-metadata-token": token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => (0, httpRequest_1.httpRequest)({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await (0, httpRequest_1.httpRequest)({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await (0, httpRequest_1.httpRequest)({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
        throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
};


/***/ }),

/***/ 5898:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInstanceMetadataEndpoint = exports.httpRequest = void 0;
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5232), exports);
tslib_1.__exportStar(__nccwpck_require__(5813), exports);
tslib_1.__exportStar(__nccwpck_require__(2314), exports);
tslib_1.__exportStar(__nccwpck_require__(1178), exports);
var httpRequest_1 = __nccwpck_require__(1303);
Object.defineProperty(exports, "httpRequest", ({ enumerable: true, get: function () { return httpRequest_1.httpRequest; } }));
var getInstanceMetadataEndpoint_1 = __nccwpck_require__(1206);
Object.defineProperty(exports, "getInstanceMetadataEndpoint", ({ enumerable: true, get: function () { return getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint; } }));


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromImdsCredentials = exports.isImdsCredentials = void 0;
const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
exports.isImdsCredentials = isImdsCredentials;
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});
exports.fromImdsCredentials = fromImdsCredentials;


/***/ }),

/***/ 2314:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.providerConfigFromInit = exports.DEFAULT_MAX_RETRIES = exports.DEFAULT_TIMEOUT = void 0;
exports.DEFAULT_TIMEOUT = 1000;
exports.DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = exports.DEFAULT_MAX_RETRIES, timeout = exports.DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });
exports.providerConfigFromInit = providerConfigFromInit;


/***/ }),

/***/ 1303:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.httpRequest = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const buffer_1 = __nccwpck_require__(4300);
const http_1 = __nccwpck_require__(3685);
function httpRequest(options) {
    return new Promise((resolve, reject) => {
        var _a;
        const req = (0, http_1.request)({
            method: "GET",
            ...options,
            hostname: (_a = options.hostname) === null || _a === void 0 ? void 0 : _a.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new property_provider_1.ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new property_provider_1.ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new property_provider_1.ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(buffer_1.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}
exports.httpRequest = httpRequest;


/***/ }),

/***/ 9912:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retry = void 0;
const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};
exports.retry = retry;


/***/ }),

/***/ 1178:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8473:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExtendedInstanceMetadataCredentials = void 0;
const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    var _a;
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        "credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = (_a = credentials.originalExpiration) !== null && _a !== void 0 ? _a : credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};
exports.getExtendedInstanceMetadataCredentials = getExtendedInstanceMetadataCredentials;


/***/ }),

/***/ 1206:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInstanceMetadataEndpoint = void 0;
const node_config_provider_1 = __nccwpck_require__(7684);
const url_parser_1 = __nccwpck_require__(7190);
const Endpoint_1 = __nccwpck_require__(3736);
const EndpointConfigOptions_1 = __nccwpck_require__(8438);
const EndpointMode_1 = __nccwpck_require__(1695);
const EndpointModeConfigOptions_1 = __nccwpck_require__(7824);
const getInstanceMetadataEndpoint = async () => (0, url_parser_1.parseUrl)((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
exports.getInstanceMetadataEndpoint = getInstanceMetadataEndpoint;
const getFromEndpointConfig = async () => (0, node_config_provider_1.loadConfig)(EndpointConfigOptions_1.ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await (0, node_config_provider_1.loadConfig)(EndpointModeConfigOptions_1.ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode_1.EndpointMode.IPv4:
            return Endpoint_1.Endpoint.IPv4;
        case EndpointMode_1.EndpointMode.IPv6:
            return Endpoint_1.Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode_1.EndpointMode)}`);
    }
};


/***/ }),

/***/ 4620:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.staticStabilityProvider = void 0;
const getExtendedInstanceMetadataCredentials_1 = __nccwpck_require__(8473);
const staticStabilityProvider = (provider, options = {}) => {
    const logger = (options === null || options === void 0 ? void 0 : options.logger) || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};
exports.staticStabilityProvider = staticStabilityProvider;


/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromIni = void 0;
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const resolveProfileData_1 = __nccwpck_require__(5653);
const fromIni = (init = {}) => async () => {
    const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
    return (0, resolveProfileData_1.resolveProfileData)((0, shared_ini_file_loader_1.getProfileName)(init), profiles, init);
};
exports.fromIni = fromIni;


/***/ }),

/***/ 4203:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5442), exports);


/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveAssumeRoleCredentials = exports.isAssumeRoleProfile = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const resolveCredentialSource_1 = __nccwpck_require__(2458);
const resolveProfileData_1 = __nccwpck_require__(5653);
const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
exports.isAssumeRoleProfile = isAssumeRoleProfile;
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new property_provider_1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${(0, shared_ini_file_loader_1.getProfileName)(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? (0, resolveProfileData_1.resolveProfileData)(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (0, resolveCredentialSource_1.resolveCredentialSource)(data.credential_source, profileName)();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};
exports.resolveAssumeRoleCredentials = resolveAssumeRoleCredentials;


/***/ }),

/***/ 2458:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveCredentialSource = void 0;
const credential_provider_env_1 = __nccwpck_require__(5972);
const credential_provider_imds_1 = __nccwpck_require__(5898);
const property_provider_1 = __nccwpck_require__(4462);
const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: credential_provider_imds_1.fromContainerMetadata,
        Ec2InstanceMetadata: credential_provider_imds_1.fromInstanceMetadata,
        Environment: credential_provider_env_1.fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new property_provider_1.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};
exports.resolveCredentialSource = resolveCredentialSource;


/***/ }),

/***/ 5653:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveProfileData = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const resolveAssumeRoleCredentials_1 = __nccwpck_require__(853);
const resolveSsoCredentials_1 = __nccwpck_require__(9867);
const resolveStaticCredentials_1 = __nccwpck_require__(3071);
const resolveWebIdentityCredentials_1 = __nccwpck_require__(8342);
const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && (0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
    }
    if ((0, resolveAssumeRoleCredentials_1.isAssumeRoleProfile)(data)) {
        return (0, resolveAssumeRoleCredentials_1.resolveAssumeRoleCredentials)(profileName, profiles, options, visitedProfiles);
    }
    if ((0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
    }
    if ((0, resolveWebIdentityCredentials_1.isWebIdentityProfile)(data)) {
        return (0, resolveWebIdentityCredentials_1.resolveWebIdentityCredentials)(data, options);
    }
    if ((0, resolveSsoCredentials_1.isSsoProfile)(data)) {
        return (0, resolveSsoCredentials_1.resolveSsoCredentials)(data);
    }
    throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};
exports.resolveProfileData = resolveProfileData;


/***/ }),

/***/ 9867:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveSsoCredentials = exports.isSsoProfile = void 0;
const credential_provider_sso_1 = __nccwpck_require__(6414);
var credential_provider_sso_2 = __nccwpck_require__(6414);
Object.defineProperty(exports, "isSsoProfile", ({ enumerable: true, get: function () { return credential_provider_sso_2.isSsoProfile; } }));
const resolveSsoCredentials = (data) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = (0, credential_provider_sso_1.validateSsoProfile)(data);
    return (0, credential_provider_sso_1.fromSSO)({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
    })();
};
exports.resolveSsoCredentials = resolveSsoCredentials;


/***/ }),

/***/ 3071:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveStaticCredentials = exports.isStaticCredsProfile = void 0;
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
exports.isStaticCredsProfile = isStaticCredsProfile;
const resolveStaticCredentials = (profile) => Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
});
exports.resolveStaticCredentials = resolveStaticCredentials;


/***/ }),

/***/ 8342:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveWebIdentityCredentials = exports.isWebIdentityProfile = void 0;
const credential_provider_web_identity_1 = __nccwpck_require__(5646);
const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
exports.isWebIdentityProfile = isWebIdentityProfile;
const resolveWebIdentityCredentials = async (profile, options) => (0, credential_provider_web_identity_1.fromTokenFile)({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
})();
exports.resolveWebIdentityCredentials = resolveWebIdentityCredentials;


/***/ }),

/***/ 5560:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultProvider = void 0;
const credential_provider_env_1 = __nccwpck_require__(5972);
const credential_provider_ini_1 = __nccwpck_require__(4203);
const credential_provider_process_1 = __nccwpck_require__(9969);
const credential_provider_sso_1 = __nccwpck_require__(6414);
const credential_provider_web_identity_1 = __nccwpck_require__(5646);
const property_provider_1 = __nccwpck_require__(4462);
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const remoteProvider_1 = __nccwpck_require__(626);
const defaultProvider = (init = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)(...(init.profile || process.env[shared_ini_file_loader_1.ENV_PROFILE] ? [] : [(0, credential_provider_env_1.fromEnv)()]), (0, credential_provider_sso_1.fromSSO)(init), (0, credential_provider_ini_1.fromIni)(init), (0, credential_provider_process_1.fromProcess)(init), (0, credential_provider_web_identity_1.fromTokenFile)(init), (0, remoteProvider_1.remoteProvider)(init), async () => {
    throw new property_provider_1.CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);
exports.defaultProvider = defaultProvider;


/***/ }),

/***/ 5531:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5560), exports);


/***/ }),

/***/ 626:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.remoteProvider = exports.ENV_IMDS_DISABLED = void 0;
const credential_provider_imds_1 = __nccwpck_require__(5898);
const property_provider_1 = __nccwpck_require__(4462);
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = (init) => {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return (0, credential_provider_imds_1.fromContainerMetadata)(init);
    }
    if (process.env[exports.ENV_IMDS_DISABLED]) {
        return async () => {
            throw new property_provider_1.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    return (0, credential_provider_imds_1.fromInstanceMetadata)(init);
};
exports.remoteProvider = remoteProvider;


/***/ }),

/***/ 2650:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromProcess = void 0;
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const resolveProcessCredentials_1 = __nccwpck_require__(4926);
const fromProcess = (init = {}) => async () => {
    const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
    return (0, resolveProcessCredentials_1.resolveProcessCredentials)((0, shared_ini_file_loader_1.getProfileName)(init), profiles);
};
exports.fromProcess = fromProcess;


/***/ }),

/***/ 1104:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getValidatedProcessCredentials = void 0;
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    };
};
exports.getValidatedProcessCredentials = getValidatedProcessCredentials;


/***/ }),

/***/ 9969:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(2650), exports);


/***/ }),

/***/ 4926:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveProcessCredentials = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const child_process_1 = __nccwpck_require__(2081);
const util_1 = __nccwpck_require__(3837);
const getValidatedProcessCredentials_1 = __nccwpck_require__(1104);
const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0, util_1.promisify)(child_process_1.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch (_a) {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return (0, getValidatedProcessCredentials_1.getValidatedProcessCredentials)(profileName, data);
            }
            catch (error) {
                throw new property_provider_1.CredentialsProviderError(error.message);
            }
        }
        else {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};
exports.resolveProcessCredentials = resolveProcessCredentials;


/***/ }),

/***/ 5184:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromSSO = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const isSsoProfile_1 = __nccwpck_require__(2572);
const resolveSSOCredentials_1 = __nccwpck_require__(4729);
const validateSsoProfile_1 = __nccwpck_require__(8098);
const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName) {
        const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
        const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
        const profile = profiles[profileName];
        if (!(0, isSsoProfile_1.isSsoProfile)(profile)) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name } = (0, validateSsoProfile_1.validateSsoProfile)(profile);
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
            ssoStartUrl: sso_start_url,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new property_provider_1.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl",' +
            ' "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({ ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient });
    }
};
exports.fromSSO = fromSSO;


/***/ }),

/***/ 6414:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5184), exports);
tslib_1.__exportStar(__nccwpck_require__(2572), exports);
tslib_1.__exportStar(__nccwpck_require__(6623), exports);
tslib_1.__exportStar(__nccwpck_require__(8098), exports);


/***/ }),

/***/ 2572:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSsoProfile = void 0;
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");
exports.isSsoProfile = isSsoProfile;


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveSSOCredentials = void 0;
const client_sso_1 = __nccwpck_require__(2666);
const property_provider_1 = __nccwpck_require__(4462);
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const EXPIRE_WINDOW_MS = 15 * 60 * 1000;
const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    try {
        token = await (0, shared_ini_file_loader_1.getSSOTokenFromFile)(ssoStartUrl);
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
        throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const sso = ssoClient || new client_sso_1.SSOClient({ region: ssoRegion });
    let ssoResp;
    try {
        ssoResp = await sso.send(new client_sso_1.GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw property_provider_1.CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new property_provider_1.CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};
exports.resolveSSOCredentials = resolveSSOCredentials;


/***/ }),

/***/ 6623:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8098:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateSsoProfile = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new property_provider_1.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", ` +
            `"sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};
exports.validateSsoProfile = validateSsoProfile;


/***/ }),

/***/ 5614:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromTokenFile = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const fs_1 = __nccwpck_require__(7147);
const fromWebToken_1 = __nccwpck_require__(7905);
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    return resolveTokenFile(init);
};
exports.fromTokenFile = fromTokenFile;
const resolveTokenFile = (init) => {
    var _a, _b, _c;
    const webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
    const roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
    const roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified");
    }
    return (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};


/***/ }),

/***/ 7905:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromWebToken = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const fromWebToken = (init) => () => {
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity, } = init;
    if (!roleAssumerWithWebIdentity) {
        throw new property_provider_1.CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity,` +
            ` but no role assumption callback was provided.`, false);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};
exports.fromWebToken = fromWebToken;


/***/ }),

/***/ 5646:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5614), exports);
tslib_1.__exportStar(__nccwpck_require__(7905), exports);


/***/ }),

/***/ 5779:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventStreamCodec = void 0;
const crc32_1 = __nccwpck_require__(7327);
const HeaderMarshaller_1 = __nccwpck_require__(9020);
const splitMessage_1 = __nccwpck_require__(4558);
class EventStreamCodec {
    constructor(toUtf8, fromUtf8) {
        this.headerMarshaller = new HeaderMarshaller_1.HeaderMarshaller(toUtf8, fromUtf8);
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new crc32_1.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = (0, splitMessage_1.splitMessage)(message);
        return { headers: this.headerMarshaller.parse(headers), body };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}
exports.EventStreamCodec = EventStreamCodec;


/***/ }),

/***/ 9020:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderMarshaller = void 0;
const util_hex_encoding_1 = __nccwpck_require__(1968);
const Int64_1 = __nccwpck_require__(6220);
class HeaderMarshaller {
    constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64_1.Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0, util_hex_encoding_1.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(0, 4))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(4, 6))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(6, 8))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(8, 10))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(10))}`,
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
exports.HeaderMarshaller = HeaderMarshaller;
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;


/***/ }),

/***/ 6220:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Int64 = void 0;
const util_hex_encoding_1 = __nccwpck_require__(1968);
class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0, util_hex_encoding_1.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
exports.Int64 = Int64;
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}


/***/ }),

/***/ 9516:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8075:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5779), exports);
tslib_1.__exportStar(__nccwpck_require__(6220), exports);
tslib_1.__exportStar(__nccwpck_require__(9516), exports);


/***/ }),

/***/ 4558:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitMessage = void 0;
const crc32_1 = __nccwpck_require__(7327);
const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new crc32_1.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),
    };
}
exports.splitMessage = splitMessage;


/***/ }),

/***/ 3404:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveEventStreamSerdeConfig = void 0;
const resolveEventStreamSerdeConfig = (input) => ({
    ...input,
    eventStreamMarshaller: input.eventStreamSerdeProvider(input),
});
exports.resolveEventStreamSerdeConfig = resolveEventStreamSerdeConfig;


/***/ }),

/***/ 3271:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(3404), exports);


/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventStreamMarshaller = void 0;
const eventstream_serde_universal_1 = __nccwpck_require__(8632);
const stream_1 = __nccwpck_require__(2781);
const utils_1 = __nccwpck_require__(4686);
class EventStreamMarshaller {
    constructor({ utf8Encoder, utf8Decoder }) {
        this.universalMarshaller = new eventstream_serde_universal_1.EventStreamMarshaller({
            utf8Decoder,
            utf8Encoder,
        });
    }
    deserialize(body, deserializer) {
        const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : (0, utils_1.readabletoIterable)(body);
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
    }
    serialize(input, serializer) {
        const serializedIterable = this.universalMarshaller.serialize(input, serializer);
        if (typeof stream_1.Readable.from === "function") {
            return stream_1.Readable.from(serializedIterable);
        }
        else {
            const iterator = serializedIterable[Symbol.asyncIterator]();
            const serializedStream = new stream_1.Readable({
                autoDestroy: true,
                objectMode: true,
                async read() {
                    iterator
                        .next()
                        .then(({ done, value }) => {
                        if (done) {
                            this.push(null);
                        }
                        else {
                            this.push(value);
                        }
                    })
                        .catch((err) => {
                        this.destroy(err);
                    });
                },
            });
            serializedStream.on("error", () => {
                serializedStream.destroy();
            });
            serializedStream.on("end", () => {
                serializedStream.destroy();
            });
            return serializedStream;
        }
    }
}
exports.EventStreamMarshaller = EventStreamMarshaller;


/***/ }),

/***/ 6889:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(448), exports);
tslib_1.__exportStar(__nccwpck_require__(8278), exports);


/***/ }),

/***/ 8278:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventStreamSerdeProvider = void 0;
const EventStreamMarshaller_1 = __nccwpck_require__(448);
const eventStreamSerdeProvider = (options) => new EventStreamMarshaller_1.EventStreamMarshaller(options);
exports.eventStreamSerdeProvider = eventStreamSerdeProvider;


/***/ }),

/***/ 4686:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readabletoIterable = void 0;
async function* readabletoIterable(readStream) {
    let streamEnded = false;
    let generationEnded = false;
    const records = new Array();
    readStream.on("error", (err) => {
        if (!streamEnded) {
            streamEnded = true;
        }
        if (err) {
            throw err;
        }
    });
    readStream.on("data", (data) => {
        records.push(data);
    });
    readStream.on("end", () => {
        streamEnded = true;
    });
    while (!generationEnded) {
        const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
        if (value) {
            yield value;
        }
        generationEnded = streamEnded && records.length === 0;
    }
}
exports.readabletoIterable = readabletoIterable;


/***/ }),

/***/ 1741:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventStreamMarshaller = void 0;
const eventstream_codec_1 = __nccwpck_require__(8075);
const getChunkedStream_1 = __nccwpck_require__(1366);
const getUnmarshalledStream_1 = __nccwpck_require__(3949);
class EventStreamMarshaller {
    constructor({ utf8Encoder, utf8Decoder }) {
        this.eventStreamCodec = new eventstream_codec_1.EventStreamCodec(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
    }
    deserialize(body, deserializer) {
        const chunkedStream = (0, getChunkedStream_1.getChunkedStream)(body);
        const unmarshalledStream = (0, getUnmarshalledStream_1.getUnmarshalledStream)(chunkedStream, {
            eventStreamCodec: this.eventStreamCodec,
            deserializer,
            toUtf8: this.utfEncoder,
        });
        return unmarshalledStream;
    }
    serialize(input, serializer) {
        const self = this;
        const serializedIterator = async function* () {
            for await (const chunk of input) {
                const payloadBuf = self.eventStreamCodec.encode(serializer(chunk));
                yield payloadBuf;
            }
            yield new Uint8Array(0);
        };
        return {
            [Symbol.asyncIterator]: serializedIterator,
        };
    }
}
exports.EventStreamMarshaller = EventStreamMarshaller;


/***/ }),

/***/ 1366:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getChunkedStream = void 0;
function getChunkedStream(source) {
    let currentMessageTotalLength = 0;
    let currentMessagePendingLength = 0;
    let currentMessage = null;
    let messageLengthBuffer = null;
    const allocateMessage = (size) => {
        if (typeof size !== "number") {
            throw new Error("Attempted to allocate an event message where size was not a number: " + size);
        }
        currentMessageTotalLength = size;
        currentMessagePendingLength = 4;
        currentMessage = new Uint8Array(size);
        const currentMessageView = new DataView(currentMessage.buffer);
        currentMessageView.setUint32(0, size, false);
    };
    const iterator = async function* () {
        const sourceIterator = source[Symbol.asyncIterator]();
        while (true) {
            const { value, done } = await sourceIterator.next();
            if (done) {
                if (!currentMessageTotalLength) {
                    return;
                }
                else if (currentMessageTotalLength === currentMessagePendingLength) {
                    yield currentMessage;
                }
                else {
                    throw new Error("Truncated event message received.");
                }
                return;
            }
            const chunkLength = value.length;
            let currentOffset = 0;
            while (currentOffset < chunkLength) {
                if (!currentMessage) {
                    const bytesRemaining = chunkLength - currentOffset;
                    if (!messageLengthBuffer) {
                        messageLengthBuffer = new Uint8Array(4);
                    }
                    const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
                    messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
                    currentMessagePendingLength += numBytesForTotal;
                    currentOffset += numBytesForTotal;
                    if (currentMessagePendingLength < 4) {
                        break;
                    }
                    allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
                    messageLengthBuffer = null;
                }
                const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
                currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
                currentMessagePendingLength += numBytesToWrite;
                currentOffset += numBytesToWrite;
                if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
                    yield currentMessage;
                    currentMessage = null;
                    currentMessageTotalLength = 0;
                    currentMessagePendingLength = 0;
                }
            }
        }
    };
    return {
        [Symbol.asyncIterator]: iterator,
    };
}
exports.getChunkedStream = getChunkedStream;


/***/ }),

/***/ 3949:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUnmarshalledStream = void 0;
function getUnmarshalledStream(source, options) {
    return {
        [Symbol.asyncIterator]: async function* () {
            for await (const chunk of source) {
                const message = options.eventStreamCodec.decode(chunk);
                const { value: messageType } = message.headers[":message-type"];
                if (messageType === "error") {
                    const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
                    unmodeledError.name = message.headers[":error-code"].value;
                    throw unmodeledError;
                }
                else if (messageType === "exception") {
                    const code = message.headers[":exception-type"].value;
                    const exception = { [code]: message };
                    const deserializedException = await options.deserializer(exception);
                    if (deserializedException.$unknown) {
                        const error = new Error(options.toUtf8(message.body));
                        error.name = code;
                        throw error;
                    }
                    throw deserializedException[code];
                }
                else if (messageType === "event") {
                    const event = {
                        [message.headers[":event-type"].value]: message,
                    };
                    const deserialized = await options.deserializer(event);
                    if (deserialized.$unknown)
                        continue;
                    yield deserialized;
                }
                else {
                    throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
                }
            }
        },
    };
}
exports.getUnmarshalledStream = getUnmarshalledStream;


/***/ }),

/***/ 8632:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(1741), exports);
tslib_1.__exportStar(__nccwpck_require__(4813), exports);


/***/ }),

/***/ 4813:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventStreamSerdeProvider = void 0;
const EventStreamMarshaller_1 = __nccwpck_require__(1741);
const eventStreamSerdeProvider = (options) => new EventStreamMarshaller_1.EventStreamMarshaller(options);
exports.eventStreamSerdeProvider = eventStreamSerdeProvider;


/***/ }),

/***/ 7442:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hash = void 0;
const util_buffer_from_1 = __nccwpck_require__(6010);
const buffer_1 = __nccwpck_require__(4300);
const crypto_1 = __nccwpck_require__(6113);
class Hash {
    constructor(algorithmIdentifier, secret) {
        this.hash = secret ? (0, crypto_1.createHmac)(algorithmIdentifier, castSourceData(secret)) : (0, crypto_1.createHash)(algorithmIdentifier);
    }
    update(toHash, encoding) {
        this.hash.update(castSourceData(toHash, encoding));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
}
exports.Hash = Hash;
function castSourceData(toCast, encoding) {
    if (buffer_1.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return (0, util_buffer_from_1.fromString)(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return (0, util_buffer_from_1.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return (0, util_buffer_from_1.fromArrayBuffer)(toCast);
}


/***/ }),

/***/ 9126:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArrayBuffer = void 0;
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
exports.isArrayBuffer = isArrayBuffer;


/***/ }),

/***/ 2245:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContentLengthPlugin = exports.contentLengthMiddlewareOptions = exports.contentLengthMiddleware = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
exports.contentLengthMiddleware = contentLengthMiddleware;
exports.contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), exports.contentLengthMiddlewareOptions);
    },
});
exports.getContentLengthPlugin = getContentLengthPlugin;


/***/ }),

/***/ 2545:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHostHeaderPlugin = exports.hostHeaderMiddlewareOptions = exports.hostHeaderMiddleware = exports.resolveHostHeaderConfig = void 0;
const protocol_http_1 = __nccwpck_require__(223);
function resolveHostHeaderConfig(input) {
    return input;
}
exports.resolveHostHeaderConfig = resolveHostHeaderConfig;
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = "";
    }
    else if (!request.headers["host"]) {
        request.headers["host"] = request.hostname;
    }
    return next(args);
};
exports.hostHeaderMiddleware = hostHeaderMiddleware;
exports.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.hostHeaderMiddleware)(options), exports.hostHeaderMiddlewareOptions);
    },
});
exports.getHostHeaderPlugin = getHostHeaderPlugin;


/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9754), exports);


/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLoggerPlugin = exports.loggerMiddlewareOptions = exports.loggerMiddleware = void 0;
const loggerMiddleware = () => (next, context) => async (args) => {
    const { clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog } = context;
    const response = await next(args);
    if (!logger) {
        return response;
    }
    if (typeof logger.info === "function") {
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger.info({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
    }
    return response;
};
exports.loggerMiddleware = loggerMiddleware;
exports.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.loggerMiddleware)(), exports.loggerMiddlewareOptions);
    },
});
exports.getLoggerPlugin = getLoggerPlugin;


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRecursionDetectionPlugin = exports.addRecursionDetectionMiddlewareOptions = exports.recursionDetectionMiddleware = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
exports.recursionDetectionMiddleware = recursionDetectionMiddleware;
exports.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.recursionDetectionMiddleware)(options), exports.addRecursionDetectionMiddlewareOptions);
    },
});
exports.getRecursionDetectionPlugin = getRecursionDetectionPlugin;


/***/ }),

/***/ 7328:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdaptiveRetryStrategy = void 0;
const config_1 = __nccwpck_require__(5192);
const DefaultRateLimiter_1 = __nccwpck_require__(6402);
const StandardRetryStrategy_1 = __nccwpck_require__(533);
class AdaptiveRetryStrategy extends StandardRetryStrategy_1.StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options !== null && options !== void 0 ? options : {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new DefaultRateLimiter_1.DefaultRateLimiter();
        this.mode = config_1.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}
exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;


/***/ }),

/***/ 6402:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultRateLimiter = void 0;
const service_error_classification_1 = __nccwpck_require__(1921);
class DefaultRateLimiter {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = (_a = options === null || options === void 0 ? void 0 : options.beta) !== null && _a !== void 0 ? _a : 0.7;
        this.minCapacity = (_b = options === null || options === void 0 ? void 0 : options.minCapacity) !== null && _b !== void 0 ? _b : 1;
        this.minFillRate = (_c = options === null || options === void 0 ? void 0 : options.minFillRate) !== null && _c !== void 0 ? _c : 0.5;
        this.scaleConstant = (_d = options === null || options === void 0 ? void 0 : options.scaleConstant) !== null && _d !== void 0 ? _d : 0.4;
        this.smooth = (_e = options === null || options === void 0 ? void 0 : options.smooth) !== null && _e !== void 0 ? _e : 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0, service_error_classification_1.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}
exports.DefaultRateLimiter = DefaultRateLimiter;


/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StandardRetryStrategy = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const service_error_classification_1 = __nccwpck_require__(1921);
const uuid_1 = __nccwpck_require__(5840);
const config_1 = __nccwpck_require__(5192);
const constants_1 = __nccwpck_require__(41);
const defaultRetryQuota_1 = __nccwpck_require__(2568);
const delayDecider_1 = __nccwpck_require__(5940);
const retryDecider_1 = __nccwpck_require__(9572);
class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : retryDecider_1.defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : delayDecider_1.defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : (0, defaultRetryQuota_1.getDefaultRetryQuota)(constants_1.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = config_1.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            request.headers[constants_1.INVOCATION_ID_HEADER] = (0, uuid_1.v4)();
        }
        while (true) {
            try {
                if (protocol_http_1.HttpRequest.isInstance(request)) {
                    request.headers[constants_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options === null || options === void 0 ? void 0 : options.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delay = this.delayDecider((0, service_error_classification_1.isThrottlingError)(err) ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE, attempts);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
exports.StandardRetryStrategy = StandardRetryStrategy;
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};


/***/ }),

/***/ 5192:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_RETRY_MODE = exports.DEFAULT_MAX_ATTEMPTS = exports.RETRY_MODES = void 0;
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES = exports.RETRY_MODES || (exports.RETRY_MODES = {}));
exports.DEFAULT_MAX_ATTEMPTS = 3;
exports.DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;


/***/ }),

/***/ 6160:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODE_RETRY_MODE_CONFIG_OPTIONS = exports.CONFIG_RETRY_MODE = exports.ENV_RETRY_MODE = exports.resolveRetryConfig = exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = exports.CONFIG_MAX_ATTEMPTS = exports.ENV_MAX_ATTEMPTS = void 0;
const util_middleware_1 = __nccwpck_require__(236);
const AdaptiveRetryStrategy_1 = __nccwpck_require__(7328);
const config_1 = __nccwpck_require__(5192);
const StandardRetryStrategy_1 = __nccwpck_require__(533);
exports.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
exports.CONFIG_MAX_ATTEMPTS = "max_attempts";
exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[exports.ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${exports.ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[exports.CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${exports.CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: config_1.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    var _a;
    const maxAttempts = (0, util_middleware_1.normalizeProvider)((_a = input.maxAttempts) !== null && _a !== void 0 ? _a : config_1.DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (input.retryStrategy) {
                return input.retryStrategy;
            }
            const retryMode = await (0, util_middleware_1.normalizeProvider)(input.retryMode)();
            if (retryMode === config_1.RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy_1.AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy_1.StandardRetryStrategy(maxAttempts);
        },
    };
};
exports.resolveRetryConfig = resolveRetryConfig;
exports.ENV_RETRY_MODE = "AWS_RETRY_MODE";
exports.CONFIG_RETRY_MODE = "retry_mode";
exports.NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[exports.CONFIG_RETRY_MODE],
    default: config_1.DEFAULT_RETRY_MODE,
};


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REQUEST_HEADER = exports.INVOCATION_ID_HEADER = exports.NO_RETRY_INCREMENT = exports.TIMEOUT_RETRY_COST = exports.RETRY_COST = exports.INITIAL_RETRY_TOKENS = exports.THROTTLING_RETRY_DELAY_BASE = exports.MAXIMUM_RETRY_DELAY = exports.DEFAULT_RETRY_DELAY_BASE = void 0;
exports.DEFAULT_RETRY_DELAY_BASE = 100;
exports.MAXIMUM_RETRY_DELAY = 20 * 1000;
exports.THROTTLING_RETRY_DELAY_BASE = 500;
exports.INITIAL_RETRY_TOKENS = 500;
exports.RETRY_COST = 5;
exports.TIMEOUT_RETRY_COST = 10;
exports.NO_RETRY_INCREMENT = 1;
exports.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
exports.REQUEST_HEADER = "amz-sdk-request";


/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDefaultRetryQuota = void 0;
const constants_1 = __nccwpck_require__(41);
const getDefaultRetryQuota = (initialRetryTokens, options) => {
    var _a, _b, _c;
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = (_a = options === null || options === void 0 ? void 0 : options.noRetryIncrement) !== null && _a !== void 0 ? _a : constants_1.NO_RETRY_INCREMENT;
    const retryCost = (_b = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _b !== void 0 ? _b : constants_1.RETRY_COST;
    const timeoutRetryCost = (_c = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _c !== void 0 ? _c : constants_1.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};
exports.getDefaultRetryQuota = getDefaultRetryQuota;


/***/ }),

/***/ 5940:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultDelayDecider = void 0;
const constants_1 = __nccwpck_require__(41);
const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
exports.defaultDelayDecider = defaultDelayDecider;


/***/ }),

/***/ 6064:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(7328), exports);
tslib_1.__exportStar(__nccwpck_require__(6402), exports);
tslib_1.__exportStar(__nccwpck_require__(533), exports);
tslib_1.__exportStar(__nccwpck_require__(5192), exports);
tslib_1.__exportStar(__nccwpck_require__(6160), exports);
tslib_1.__exportStar(__nccwpck_require__(5940), exports);
tslib_1.__exportStar(__nccwpck_require__(3521), exports);
tslib_1.__exportStar(__nccwpck_require__(9572), exports);
tslib_1.__exportStar(__nccwpck_require__(1806), exports);
tslib_1.__exportStar(__nccwpck_require__(8580), exports);


/***/ }),

/***/ 3521:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOmitRetryHeadersPlugin = exports.omitRetryHeadersMiddlewareOptions = exports.omitRetryHeadersMiddleware = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const constants_1 = __nccwpck_require__(41);
const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (protocol_http_1.HttpRequest.isInstance(request)) {
        delete request.headers[constants_1.INVOCATION_ID_HEADER];
        delete request.headers[constants_1.REQUEST_HEADER];
    }
    return next(args);
};
exports.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
exports.omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.omitRetryHeadersMiddleware)(), exports.omitRetryHeadersMiddlewareOptions);
    },
});
exports.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;


/***/ }),

/***/ 9572:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultRetryDecider = void 0;
const service_error_classification_1 = __nccwpck_require__(1921);
const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0, service_error_classification_1.isRetryableByTrait)(error) || (0, service_error_classification_1.isClockSkewError)(error) || (0, service_error_classification_1.isThrottlingError)(error) || (0, service_error_classification_1.isTransientError)(error);
};
exports.defaultRetryDecider = defaultRetryDecider;


/***/ }),

/***/ 1806:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRetryPlugin = exports.retryMiddlewareOptions = exports.retryMiddleware = void 0;
const retryMiddleware = (options) => (next, context) => async (args) => {
    const retryStrategy = await options.retryStrategy();
    if (retryStrategy === null || retryStrategy === void 0 ? void 0 : retryStrategy.mode)
        context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
};
exports.retryMiddleware = retryMiddleware;
exports.retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.retryMiddleware)(options), exports.retryMiddlewareOptions);
    },
});
exports.getRetryPlugin = getRetryPlugin;


/***/ }),

/***/ 8580:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5959:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveStsAuthConfig = void 0;
const middleware_signing_1 = __nccwpck_require__(4935);
const resolveStsAuthConfig = (input, { stsClientCtor }) => (0, middleware_signing_1.resolveAwsAuthConfig)({
    ...input,
    stsClientCtor,
});
exports.resolveStsAuthConfig = resolveStsAuthConfig;


/***/ }),

/***/ 5648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializerMiddleware = void 0;
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        throw error;
    }
};
exports.deserializerMiddleware = deserializerMiddleware;


/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5648), exports);
tslib_1.__exportStar(__nccwpck_require__(9328), exports);
tslib_1.__exportStar(__nccwpck_require__(9511), exports);


/***/ }),

/***/ 9328:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSerdePlugin = exports.serializerMiddlewareOption = exports.deserializerMiddlewareOption = void 0;
const deserializerMiddleware_1 = __nccwpck_require__(5648);
const serializerMiddleware_1 = __nccwpck_require__(9511);
exports.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
exports.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add((0, deserializerMiddleware_1.deserializerMiddleware)(config, deserializer), exports.deserializerMiddlewareOption);
            commandStack.add((0, serializerMiddleware_1.serializerMiddleware)(config, serializer), exports.serializerMiddlewareOption);
        },
    };
}
exports.getSerdePlugin = getSerdePlugin;


/***/ }),

/***/ 9511:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializerMiddleware = void 0;
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const request = await serializer(args.input, options);
    return next({
        ...args,
        request,
    });
};
exports.serializerMiddleware = serializerMiddleware;


/***/ }),

/***/ 3061:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveSigV4AuthConfig = exports.resolveAwsAuthConfig = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const signature_v4_1 = __nccwpck_require__(4275);
const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = () => normalizeProvider(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const signerConstructor = input.signerConstructor || signature_v4_1.SignatureV4;
            return new signerConstructor(params);
        });
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
exports.resolveAwsAuthConfig = resolveAwsAuthConfig;
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = normalizeProvider(new signature_v4_1.SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
exports.resolveSigV4AuthConfig = resolveSigV4AuthConfig;
const normalizeProvider = (input) => {
    if (typeof input === "object") {
        const promisified = Promise.resolve(input);
        return () => promisified;
    }
    return input;
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return (0, property_provider_1.memoize)(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return normalizeProvider(credentials);
};


/***/ }),

/***/ 4935:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(3061), exports);
tslib_1.__exportStar(__nccwpck_require__(2509), exports);


/***/ }),

/***/ 2509:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin = exports.awsAuthMiddlewareOptions = exports.awsAuthMiddleware = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const getSkewCorrectedDate_1 = __nccwpck_require__(8253);
const getUpdatedSystemClockOffset_1 = __nccwpck_require__(5863);
const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
    const signer = await options.signer();
    const output = await next({
        ...args,
        request: await signer.sign(args.request, {
            signingDate: (0, getSkewCorrectedDate_1.getSkewCorrectedDate)(options.systemClockOffset),
            signingRegion: context["signing_region"],
            signingService: context["signing_service"],
        }),
    }).catch((error) => {
        var _a;
        const serverTime = (_a = error.ServerTime) !== null && _a !== void 0 ? _a : getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(dateHeader, options.systemClockOffset);
    }
    return output;
};
exports.awsAuthMiddleware = awsAuthMiddleware;
const getDateHeader = (response) => { var _a, _b, _c; return protocol_http_1.HttpResponse.isInstance(response) ? (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.date) !== null && _b !== void 0 ? _b : (_c = response.headers) === null || _c === void 0 ? void 0 : _c.Date : undefined; };
exports.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.awsAuthMiddleware)(options), exports.awsAuthMiddlewareOptions);
    },
});
exports.getAwsAuthPlugin = getAwsAuthPlugin;
exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin;


/***/ }),

/***/ 8253:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSkewCorrectedDate = void 0;
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
exports.getSkewCorrectedDate = getSkewCorrectedDate;


/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUpdatedSystemClockOffset = void 0;
const isClockSkewed_1 = __nccwpck_require__(5301);
const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0, isClockSkewed_1.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};
exports.getUpdatedSystemClockOffset = getUpdatedSystemClockOffset;


/***/ }),

/***/ 5301:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isClockSkewed = void 0;
const getSkewCorrectedDate_1 = __nccwpck_require__(8253);
const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0, getSkewCorrectedDate_1.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;
exports.isClockSkewed = isClockSkewed;


/***/ }),

/***/ 8399:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.constructStack = void 0;
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = () => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expendedMiddlewareList) => {
            wholeList.push(...expendedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain.map((entry) => entry.middleware);
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === name);
                    const toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be ` +
                            `overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override } = options;
            const entry = {
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === name);
                    const toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                            `by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo((0, exports.constructStack)()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name } = entry;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo((0, exports.constructStack)());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList().reverse()) {
                handler = middleware(handler, context);
            }
            return handler;
        },
    };
    return stack;
};
exports.constructStack = constructStack;
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};


/***/ }),

/***/ 1461:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(8399), exports);


/***/ }),

/***/ 6546:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveUserAgentConfig = void 0;
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}
exports.resolveUserAgentConfig = resolveUserAgentConfig;


/***/ }),

/***/ 8025:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UA_ESCAPE_REGEX = exports.SPACE = exports.X_AMZ_USER_AGENT = exports.USER_AGENT = void 0;
exports.USER_AGENT = "user-agent";
exports.X_AMZ_USER_AGENT = "x-amz-user-agent";
exports.SPACE = " ";
exports.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;


/***/ }),

/***/ 4688:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(6546), exports);
tslib_1.__exportStar(__nccwpck_require__(6236), exports);


/***/ }),

/***/ 6236:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserAgentPlugin = exports.getUserAgentMiddlewareOptions = exports.userAgentMiddleware = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const constants_1 = __nccwpck_require__(8025);
const userAgentMiddleware = (options) => (next, context) => async (args) => {
    var _a, _b;
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
    const sdkUserAgentValue = [...defaultUserAgent, ...userAgent, ...customUserAgent].join(constants_1.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(constants_1.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[constants_1.X_AMZ_USER_AGENT] = headers[constants_1.X_AMZ_USER_AGENT]
                ? `${headers[constants_1.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[constants_1.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[constants_1.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
exports.userAgentMiddleware = userAgentMiddleware;
const escapeUserAgent = ([name, version]) => {
    const prefixSeparatorIndex = name.indexOf("/");
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .map((item) => item === null || item === void 0 ? void 0 : item.replace(constants_1.UA_ESCAPE_REGEX, "_"))
        .join("/");
};
exports.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.userAgentMiddleware)(config), exports.getUserAgentMiddlewareOptions);
    },
});
exports.getUserAgentPlugin = getUserAgentPlugin;


/***/ }),

/***/ 2175:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadConfig = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const fromEnv_1 = __nccwpck_require__(6161);
const fromSharedConfigFiles_1 = __nccwpck_require__(3905);
const fromStatic_1 = __nccwpck_require__(5881);
const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromEnv_1.fromEnv)(environmentVariableSelector), (0, fromSharedConfigFiles_1.fromSharedConfigFiles)(configFileSelector, configuration), (0, fromStatic_1.fromStatic)(defaultValue)));
exports.loadConfig = loadConfig;


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromEnv = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};
exports.fromEnv = fromEnv;


/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromSharedConfigFiles = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const shared_ini_file_loader_1 = __nccwpck_require__(7387);
const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = (0, shared_ini_file_loader_1.getProfileName)(init);
    const { configFile, credentialsFile } = await (0, shared_ini_file_loader_1.loadSharedConfigFiles)(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const configValue = configSelector(mergedProfile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message ||
            `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};
exports.fromSharedConfigFiles = fromSharedConfigFiles;


/***/ }),

/***/ 5881:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromStatic = void 0;
const property_provider_1 = __nccwpck_require__(4462);
const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0, property_provider_1.fromStatic)(defaultValue);
exports.fromStatic = fromStatic;


/***/ }),

/***/ 7684:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(2175), exports);


/***/ }),

/***/ 3647:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODEJS_TIMEOUT_ERROR_CODES = void 0;
exports.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];


/***/ }),

/***/ 6225:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTransformedHeaders = void 0;
const getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};
exports.getTransformedHeaders = getTransformedHeaders;


/***/ }),

/***/ 8805:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(2298), exports);
tslib_1.__exportStar(__nccwpck_require__(2533), exports);
tslib_1.__exportStar(__nccwpck_require__(2198), exports);


/***/ }),

/***/ 2298:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeHttpHandler = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const querystring_builder_1 = __nccwpck_require__(3402);
const http_1 = __nccwpck_require__(3685);
const https_1 = __nccwpck_require__(5687);
const constants_1 = __nccwpck_require__(3647);
const get_transformed_headers_1 = __nccwpck_require__(6225);
const set_connection_timeout_1 = __nccwpck_require__(3598);
const set_socket_timeout_1 = __nccwpck_require__(4751);
const write_request_body_1 = __nccwpck_require__(5248);
class NodeHttpHandler {
    constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            socketTimeout,
            httpAgent: httpAgent || new http_1.Agent({ keepAlive, maxSockets }),
            httpsAgent: httpsAgent || new https_1.Agent({ keepAlive, maxSockets }),
        };
    }
    destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.httpAgent) === null || _b === void 0 ? void 0 : _b.destroy();
        (_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.httpsAgent) === null || _d === void 0 ? void 0 : _d.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((resolve, reject) => {
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const queryString = (0, querystring_builder_1.buildQueryString)(request.query || {});
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path: queryString ? `${request.path}?${queryString}` : request.path,
                port: request.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
            };
            const requestFunc = isSSL ? https_1.request : http_1.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: res.statusCode || -1,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            (0, set_connection_timeout_1.setConnectionTimeout)(req, reject, this.config.connectionTimeout);
            (0, set_socket_timeout_1.setSocketTimeout)(req, reject, this.config.socketTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            (0, write_request_body_1.writeRequestBody)(req, request);
        });
    }
}
exports.NodeHttpHandler = NodeHttpHandler;


/***/ }),

/***/ 2533:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeHttp2Handler = void 0;
const protocol_http_1 = __nccwpck_require__(223);
const querystring_builder_1 = __nccwpck_require__(3402);
const http2_1 = __nccwpck_require__(5158);
const get_transformed_headers_1 = __nccwpck_require__(6225);
const write_request_body_1 = __nccwpck_require__(5248);
class NodeHttp2Handler {
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
        this.sessionCache = new Map();
    }
    destroy() {
        for (const sessions of this.sessionCache.values()) {
            sessions.forEach((session) => this.destroySession(session));
        }
        this.sessionCache.clear();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((resolve, rejectOriginal) => {
            let fulfilled = false;
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                rejectOriginal(abortError);
                return;
            }
            const { hostname, method, port, protocol, path, query } = request;
            const authority = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
            const session = this.getSession(authority, disableConcurrentStreams || false);
            const reject = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                rejectOriginal(err);
            };
            const queryString = (0, querystring_builder_1.buildQueryString)(query || {});
            const req = session.request({
                ...request.headers,
                [http2_1.constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
                [http2_1.constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.deleteSessionFromCache(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    reject(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            req.on("frameError", (type, code, id) => {
                reject(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", reject);
            req.on("aborted", () => {
                reject(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    reject(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            (0, write_request_body_1.writeRequestBody)(req, request);
        });
    }
    getSession(authority, disableConcurrentStreams) {
        var _a;
        const sessionCache = this.sessionCache;
        const existingSessions = sessionCache.get(authority) || [];
        if (existingSessions.length > 0 && !disableConcurrentStreams)
            return existingSessions[0];
        const newSession = (0, http2_1.connect)(authority);
        newSession.unref();
        const destroySessionCb = () => {
            this.destroySession(newSession);
            this.deleteSessionFromCache(authority, newSession);
        };
        newSession.on("goaway", destroySessionCb);
        newSession.on("error", destroySessionCb);
        newSession.on("frameError", destroySessionCb);
        newSession.on("close", () => this.deleteSessionFromCache(authority, newSession));
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.sessionTimeout) {
            newSession.setTimeout(this.config.sessionTimeout, destroySessionCb);
        }
        existingSessions.push(newSession);
        sessionCache.set(authority, existingSessions);
        return newSession;
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
    deleteSessionFromCache(authority, session) {
        const existingSessions = this.sessionCache.get(authority) || [];
        if (!existingSessions.includes(session)) {
            return;
        }
        this.sessionCache.set(authority, existingSessions.filter((s) => s !== session));
    }
}
exports.NodeHttp2Handler = NodeHttp2Handler;


/***/ }),

/***/ 3598:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setConnectionTimeout = void 0;
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", (socket) => {
        if (socket.connecting) {
            const timeoutId = setTimeout(() => {
                request.destroy();
                reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
                    name: "TimeoutError",
                }));
            }, timeoutInMs);
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
    });
};
exports.setConnectionTimeout = setConnectionTimeout;


/***/ }),

/***/ 4751:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setSocketTimeout = void 0;
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};
exports.setSocketTimeout = setSocketTimeout;


/***/ }),

/***/ 4362:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collector = void 0;
const stream_1 = __nccwpck_require__(2781);
class Collector extends stream_1.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}
exports.Collector = Collector;


/***/ }),

/***/ 2198:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.streamCollector = void 0;
const collector_1 = __nccwpck_require__(4362);
const streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new collector_1.Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});
exports.streamCollector = streamCollector;


/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeRequestBody = void 0;
const stream_1 = __nccwpck_require__(2781);
function writeRequestBody(httpRequest, request) {
    const expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
        httpRequest.on("continue", () => {
            writeBody(httpRequest, request.body);
        });
    }
    else {
        writeBody(httpRequest, request.body);
    }
}
exports.writeRequestBody = writeRequestBody;
function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}


/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CredentialsProviderError = void 0;
const ProviderError_1 = __nccwpck_require__(1786);
class CredentialsProviderError extends ProviderError_1.ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}
exports.CredentialsProviderError = CredentialsProviderError;


/***/ }),

/***/ 1786:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProviderError = void 0;
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}
exports.ProviderError = ProviderError;


/***/ }),

/***/ 1444:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chain = void 0;
const ProviderError_1 = __nccwpck_require__(1786);
function chain(...providers) {
    return () => {
        let promise = Promise.reject(new ProviderError_1.ProviderError("No providers in chain"));
        for (const provider of providers) {
            promise = promise.catch((err) => {
                if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        }
        return promise;
    };
}
exports.chain = chain;


/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromStatic = void 0;
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);
exports.fromStatic = fromStatic;


/***/ }),

/***/ 4462:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(6875), exports);
tslib_1.__exportStar(__nccwpck_require__(1786), exports);
tslib_1.__exportStar(__nccwpck_require__(1444), exports);
tslib_1.__exportStar(__nccwpck_require__(529), exports);
tslib_1.__exportStar(__nccwpck_require__(714), exports);


/***/ }),

/***/ 714:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoize = void 0;
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};
exports.memoize = memoize;


/***/ }),

/***/ 6779:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2872:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpRequest = void 0;
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
exports.HttpRequest = HttpRequest;
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),

/***/ 2348:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponse = void 0;
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}
exports.HttpResponse = HttpResponse;


/***/ }),

/***/ 223:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(6779), exports);
tslib_1.__exportStar(__nccwpck_require__(2872), exports);
tslib_1.__exportStar(__nccwpck_require__(2348), exports);
tslib_1.__exportStar(__nccwpck_require__(5694), exports);


/***/ }),

/***/ 5694:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidHostname = void 0;
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}
exports.isValidHostname = isValidHostname;


/***/ }),

/***/ 3402:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildQueryString = void 0;
const util_uri_escape_1 = __nccwpck_require__(7952);
function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, util_uri_escape_1.escapeUri)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0, util_uri_escape_1.escapeUri)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0, util_uri_escape_1.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}
exports.buildQueryString = buildQueryString;


/***/ }),

/***/ 7424:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseQueryString = void 0;
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}
exports.parseQueryString = parseQueryString;


/***/ }),

/***/ 7352:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TRANSIENT_ERROR_STATUS_CODES = exports.TRANSIENT_ERROR_CODES = exports.THROTTLING_ERROR_CODES = exports.CLOCK_SKEW_ERROR_CODES = void 0;
exports.CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
exports.THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
exports.TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
exports.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTransientError = exports.isThrottlingError = exports.isClockSkewError = exports.isRetryableByTrait = void 0;
const constants_1 = __nccwpck_require__(7352);
const isRetryableByTrait = (error) => error.$retryable !== undefined;
exports.isRetryableByTrait = isRetryableByTrait;
const isClockSkewError = (error) => constants_1.CLOCK_SKEW_ERROR_CODES.includes(error.name);
exports.isClockSkewError = isClockSkewError;
const isThrottlingError = (error) => {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 ||
        constants_1.THROTTLING_ERROR_CODES.includes(error.name) ||
        ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
exports.isThrottlingError = isThrottlingError;
const isTransientError = (error) => {
    var _a;
    return constants_1.TRANSIENT_ERROR_CODES.includes(error.name) ||
        constants_1.TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};
exports.isTransientError = isTransientError;


/***/ }),

/***/ 5216:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getConfigFilepath = exports.ENV_CONFIG_PATH = void 0;
const path_1 = __nccwpck_require__(1017);
const getHomeDir_1 = __nccwpck_require__(7363);
exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[exports.ENV_CONFIG_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "config");
exports.getConfigFilepath = getConfigFilepath;


/***/ }),

/***/ 1569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCredentialsFilepath = exports.ENV_CREDENTIALS_PATH = void 0;
const path_1 = __nccwpck_require__(1017);
const getHomeDir_1 = __nccwpck_require__(7363);
exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[exports.ENV_CREDENTIALS_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "credentials");
exports.getCredentialsFilepath = getCredentialsFilepath;


/***/ }),

/***/ 7363:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHomeDir = void 0;
const os_1 = __nccwpck_require__(2037);
const path_1 = __nccwpck_require__(1017);
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    return (0, os_1.homedir)();
};
exports.getHomeDir = getHomeDir;


/***/ }),

/***/ 7498:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProfileData = void 0;
const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
const getProfileData = (data) => Object.entries(data)
    .filter(([key]) => profileKeyRegex.test(key))
    .reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
    ...(data.default && { default: data.default }),
});
exports.getProfileData = getProfileData;


/***/ }),

/***/ 6776:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProfileName = exports.DEFAULT_PROFILE = exports.ENV_PROFILE = void 0;
exports.ENV_PROFILE = "AWS_PROFILE";
exports.DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[exports.ENV_PROFILE] || exports.DEFAULT_PROFILE;
exports.getProfileName = getProfileName;


/***/ }),

/***/ 2992:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSSOTokenFilepath = void 0;
const crypto_1 = __nccwpck_require__(6113);
const path_1 = __nccwpck_require__(1017);
const getHomeDir_1 = __nccwpck_require__(7363);
const getSSOTokenFilepath = (ssoStartUrl) => {
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(ssoStartUrl).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
};
exports.getSSOTokenFilepath = getSSOTokenFilepath;


/***/ }),

/***/ 8553:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSSOTokenFromFile = void 0;
const fs_1 = __nccwpck_require__(7147);
const getSSOTokenFilepath_1 = __nccwpck_require__(2992);
const { readFile } = fs_1.promises;
const getSSOTokenFromFile = async (ssoStartUrl) => {
    const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(ssoStartUrl);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};
exports.getSSOTokenFromFile = getSSOTokenFromFile;


/***/ }),

/***/ 7387:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(7363), exports);
tslib_1.__exportStar(__nccwpck_require__(6776), exports);
tslib_1.__exportStar(__nccwpck_require__(2992), exports);
tslib_1.__exportStar(__nccwpck_require__(8553), exports);
tslib_1.__exportStar(__nccwpck_require__(7871), exports);
tslib_1.__exportStar(__nccwpck_require__(6533), exports);
tslib_1.__exportStar(__nccwpck_require__(4105), exports);


/***/ }),

/***/ 7871:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSharedConfigFiles = void 0;
const getConfigFilepath_1 = __nccwpck_require__(5216);
const getCredentialsFilepath_1 = __nccwpck_require__(1569);
const getProfileData_1 = __nccwpck_require__(7498);
const parseIni_1 = __nccwpck_require__(2806);
const slurpFile_1 = __nccwpck_require__(9242);
const swallowError = () => ({});
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
    const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath).then(parseIni_1.parseIni).then(getProfileData_1.getProfileData).catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath).then(parseIni_1.parseIni).catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
exports.loadSharedConfigFiles = loadSharedConfigFiles;


/***/ }),

/***/ 2806:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseIni = void 0;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0].trim();
        const isSection = line[0] === "[" && line[line.length - 1] === "]";
        if (isSection) {
            currentSection = line.substring(1, line.length - 1);
            if (profileNameBlockList.includes(currentSection)) {
                throw new Error(`Found invalid profile name "${currentSection}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = line.indexOf("=");
            const start = 0;
            const end = line.length - 1;
            const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
            if (isAssignment) {
                const [name, value] = [
                    line.substring(0, indexOfEqualsSign).trim(),
                    line.substring(indexOfEqualsSign + 1).trim(),
                ];
                map[currentSection] = map[currentSection] || {};
                map[currentSection][name] = value;
            }
        }
    }
    return map;
};
exports.parseIni = parseIni;


/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseKnownFiles = void 0;
const loadSharedConfigFiles_1 = __nccwpck_require__(7871);
const parseKnownFiles = async (init) => {
    const parsedFiles = await (0, loadSharedConfigFiles_1.loadSharedConfigFiles)(init);
    return {
        ...parsedFiles.configFile,
        ...parsedFiles.credentialsFile,
    };
};
exports.parseKnownFiles = parseKnownFiles;


/***/ }),

/***/ 9242:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.slurpFile = void 0;
const fs_1 = __nccwpck_require__(7147);
const { readFile } = fs_1.promises;
const filePromisesHash = {};
const slurpFile = (path) => {
    if (!filePromisesHash[path]) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
exports.slurpFile = slurpFile;


/***/ }),

/***/ 4105:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5086:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignatureV4 = void 0;
const util_hex_encoding_1 = __nccwpck_require__(1968);
const util_middleware_1 = __nccwpck_require__(236);
const constants_1 = __nccwpck_require__(342);
const credentialDerivation_1 = __nccwpck_require__(1424);
const getCanonicalHeaders_1 = __nccwpck_require__(3590);
const getCanonicalQuery_1 = __nccwpck_require__(2019);
const getPayloadHash_1 = __nccwpck_require__(7080);
const headerUtil_1 = __nccwpck_require__(4120);
const moveHeadersToQuery_1 = __nccwpck_require__(8201);
const prepareRequest_1 = __nccwpck_require__(5772);
const utilDate_1 = __nccwpck_require__(4799);
class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, util_middleware_1.normalizeProvider)(region);
        this.credentialProvider = (0, util_middleware_1.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const request = (0, moveHeadersToQuery_1.moveHeadersToQuery)((0, prepareRequest_1.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, getPayloadHash_1.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const hashedPayload = await (0, getPayloadHash_1.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, util_hex_encoding_1.toHex)(await hash.digest());
        const stringToSign = [
            constants_1.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(stringToSign);
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const request = (0, prepareRequest_1.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0, getPayloadHash_1.getPayloadHash)(request, this.sha256);
        if (!(0, headerUtil_1.hasHeader)(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] =
            `${constants_1.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, getCanonicalQuery_1.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(canonicalRequest);
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, util_hex_encoding_1.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if ((pathSegment === null || pathSegment === void 0 ? void 0 : pathSegment.length) === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${(path === null || path === void 0 ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path === null || path === void 0 ? void 0 : path.endsWith("/")) ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(stringToSign);
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0, credentialDerivation_1.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
}
exports.SignatureV4 = SignatureV4;
const formatDate = (now) => {
    const longDate = (0, utilDate_1.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),

/***/ 3141:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneQuery = exports.cloneRequest = void 0;
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? (0, exports.cloneQuery)(query) : undefined,
});
exports.cloneRequest = cloneRequest;
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});
exports.cloneQuery = cloneQuery;


/***/ }),

/***/ 342:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_PRESIGNED_TTL = exports.KEY_TYPE_IDENTIFIER = exports.MAX_CACHE_SIZE = exports.UNSIGNED_PAYLOAD = exports.EVENT_ALGORITHM_IDENTIFIER = exports.ALGORITHM_IDENTIFIER_V4A = exports.ALGORITHM_IDENTIFIER = exports.UNSIGNABLE_PATTERNS = exports.SEC_HEADER_PATTERN = exports.PROXY_HEADER_PATTERN = exports.ALWAYS_UNSIGNABLE_HEADERS = exports.HOST_HEADER = exports.TOKEN_HEADER = exports.SHA256_HEADER = exports.SIGNATURE_HEADER = exports.GENERATED_HEADERS = exports.DATE_HEADER = exports.AMZ_DATE_HEADER = exports.AUTH_HEADER = exports.REGION_SET_PARAM = exports.TOKEN_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
exports.REGION_SET_PARAM = "X-Amz-Region-Set";
exports.AUTH_HEADER = "authorization";
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.DATE_HEADER = "date";
exports.GENERATED_HEADERS = [exports.AUTH_HEADER, exports.AMZ_DATE_HEADER, exports.DATE_HEADER];
exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
exports.SHA256_HEADER = "x-amz-content-sha256";
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
exports.HOST_HEADER = "host";
exports.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
exports.PROXY_HEADER_PATTERN = /^proxy-/;
exports.SEC_HEADER_PATTERN = /^sec-/;
exports.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
exports.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
exports.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.MAX_CACHE_SIZE = 50;
exports.KEY_TYPE_IDENTIFIER = "aws4_request";
exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ 1424:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearCredentialCache = exports.getSigningKey = exports.createScope = void 0;
const util_hex_encoding_1 = __nccwpck_require__(1968);
const constants_1 = __nccwpck_require__(342);
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
exports.createScope = createScope;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0, util_hex_encoding_1.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > constants_1.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, constants_1.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
exports.getSigningKey = getSigningKey;
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
exports.clearCredentialCache = clearCredentialCache;
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
};


/***/ }),

/***/ 3590:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCanonicalHeaders = void 0;
const constants_1 = __nccwpck_require__(342);
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS ||
            (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) ||
            constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};
exports.getCanonicalHeaders = getCanonicalHeaders;


/***/ }),

/***/ 2019:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCanonicalQuery = void 0;
const util_uri_escape_1 = __nccwpck_require__(7952);
const constants_1 = __nccwpck_require__(342);
const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([`${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`]), [])
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};
exports.getCanonicalQuery = getCanonicalQuery;


/***/ }),

/***/ 7080:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPayloadHash = void 0;
const is_array_buffer_1 = __nccwpck_require__(9126);
const util_hex_encoding_1 = __nccwpck_require__(1968);
const constants_1 = __nccwpck_require__(342);
const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, is_array_buffer_1.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(body);
        return (0, util_hex_encoding_1.toHex)(await hashCtor.digest());
    }
    return constants_1.UNSIGNED_PAYLOAD;
};
exports.getPayloadHash = getPayloadHash;


/***/ }),

/***/ 4120:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteHeader = exports.getHeaderValue = exports.hasHeader = void 0;
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
exports.hasHeader = hasHeader;
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
exports.getHeaderValue = getHeaderValue;
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};
exports.deleteHeader = deleteHeader;


/***/ }),

/***/ 4275:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareRequest = exports.moveHeadersToQuery = exports.getPayloadHash = exports.getCanonicalQuery = exports.getCanonicalHeaders = void 0;
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(5086), exports);
var getCanonicalHeaders_1 = __nccwpck_require__(3590);
Object.defineProperty(exports, "getCanonicalHeaders", ({ enumerable: true, get: function () { return getCanonicalHeaders_1.getCanonicalHeaders; } }));
var getCanonicalQuery_1 = __nccwpck_require__(2019);
Object.defineProperty(exports, "getCanonicalQuery", ({ enumerable: true, get: function () { return getCanonicalQuery_1.getCanonicalQuery; } }));
var getPayloadHash_1 = __nccwpck_require__(7080);
Object.defineProperty(exports, "getPayloadHash", ({ enumerable: true, get: function () { return getPayloadHash_1.getPayloadHash; } }));
var moveHeadersToQuery_1 = __nccwpck_require__(8201);
Object.defineProperty(exports, "moveHeadersToQuery", ({ enumerable: true, get: function () { return moveHeadersToQuery_1.moveHeadersToQuery; } }));
var prepareRequest_1 = __nccwpck_require__(5772);
Object.defineProperty(exports, "prepareRequest", ({ enumerable: true, get: function () { return prepareRequest_1.prepareRequest; } }));
tslib_1.__exportStar(__nccwpck_require__(1424), exports);


/***/ }),

/***/ 8201:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moveHeadersToQuery = void 0;
const cloneRequest_1 = __nccwpck_require__(3141);
const moveHeadersToQuery = (request, options = {}) => {
    var _a;
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};
exports.moveHeadersToQuery = moveHeadersToQuery;


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareRequest = void 0;
const cloneRequest_1 = __nccwpck_require__(3141);
const constants_1 = __nccwpck_require__(342);
const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)) {
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
exports.prepareRequest = prepareRequest;


/***/ }),

/***/ 4799:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toDate = exports.iso8601 = void 0;
const iso8601 = (time) => (0, exports.toDate)(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
exports.iso8601 = iso8601;
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
exports.toDate = toDate;


/***/ }),

/***/ 6034:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
const middleware_stack_1 = __nccwpck_require__(1461);
class Client {
    constructor(config) {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}
exports.Client = Client;


/***/ }),

/***/ 4014:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Command = void 0;
const middleware_stack_1 = __nccwpck_require__(1461);
class Command {
    constructor() {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
    }
}
exports.Command = Command;


/***/ }),

/***/ 8392:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SENSITIVE_STRING = void 0;
exports.SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),

/***/ 4695:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseEpochTimestamp = exports.parseRfc7231DateTime = exports.parseRfc3339DateTime = exports.dateToUtcString = void 0;
const parse_utils_1 = __nccwpck_require__(4809);
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
exports.dateToUtcString = dateToUtcString;
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
exports.parseRfc3339DateTime = parseRfc3339DateTime;
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
exports.parseRfc7231DateTime = parseRfc7231DateTime;
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = (0, parse_utils_1.strictParseDouble)(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
exports.parseEpochTimestamp = parseEpochTimestamp;
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = (0, parse_utils_1.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return (0, parse_utils_1.strictParseFloat32)("0." + value) * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),

/***/ 7222:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throwDefaultError = void 0;
const exceptions_1 = __nccwpck_require__(7778);
const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
    });
    throw (0, exceptions_1.decorateServiceException)(response, parsedBody);
};
exports.throwDefaultError = throwDefaultError;
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};


/***/ }),

/***/ 3088:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadConfigsForDefaultMode = void 0;
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};
exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;


/***/ }),

/***/ 2363:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emitWarningIfUnsupportedVersion = void 0;
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
        process.emitWarning(`The AWS SDK for JavaScript (v3) will\n` +
            `no longer support Node.js ${version} on November 1, 2022.\n\n` +
            `To continue receiving updates to AWS services, bug fixes, and security\n` +
            `updates please upgrade to Node.js 14.x or later.\n\n` +
            `For details, please refer our blog post: https://a.co/48dbdYz`, `NodeDeprecationWarning`);
    }
};
exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;


/***/ }),

/***/ 7778:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decorateServiceException = exports.ServiceException = void 0;
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
exports.ServiceException = ServiceException;
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};
exports.decorateServiceException = decorateServiceException;


/***/ }),

/***/ 1927:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendedEncodeURIComponent = void 0;
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;


/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getArrayIfSingleItem = void 0;
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
exports.getArrayIfSingleItem = getArrayIfSingleItem;


/***/ }),

/***/ 5830:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getValueFromTextNode = void 0;
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = (0, exports.getValueFromTextNode)(obj[key]);
        }
    }
    return obj;
};
exports.getValueFromTextNode = getValueFromTextNode;


/***/ }),

/***/ 4963:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(6034), exports);
tslib_1.__exportStar(__nccwpck_require__(4014), exports);
tslib_1.__exportStar(__nccwpck_require__(8392), exports);
tslib_1.__exportStar(__nccwpck_require__(4695), exports);
tslib_1.__exportStar(__nccwpck_require__(7222), exports);
tslib_1.__exportStar(__nccwpck_require__(3088), exports);
tslib_1.__exportStar(__nccwpck_require__(2363), exports);
tslib_1.__exportStar(__nccwpck_require__(7778), exports);
tslib_1.__exportStar(__nccwpck_require__(1927), exports);
tslib_1.__exportStar(__nccwpck_require__(6457), exports);
tslib_1.__exportStar(__nccwpck_require__(5830), exports);
tslib_1.__exportStar(__nccwpck_require__(3613), exports);
tslib_1.__exportStar(__nccwpck_require__(1599), exports);
tslib_1.__exportStar(__nccwpck_require__(4809), exports);
tslib_1.__exportStar(__nccwpck_require__(308), exports);
tslib_1.__exportStar(__nccwpck_require__(8000), exports);
tslib_1.__exportStar(__nccwpck_require__(8730), exports);


/***/ }),

/***/ 3613:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LazyJsonString = exports.StringWrapper = void 0;
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
exports.StringWrapper = StringWrapper;
exports.StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: exports.StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(exports.StringWrapper, String);
class LazyJsonString extends exports.StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}
exports.LazyJsonString = LazyJsonString;


/***/ }),

/***/ 1599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertMap = exports.map = void 0;
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        let [filter, value] = instructions[key];
        if (typeof value === "function") {
            let _value;
            const defaultFilterPassed = filter === undefined && (_value = value()) != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed) {
                target[key] = _value;
            }
            else if (customFilterPassed) {
                target[key] = value();
            }
        }
        else {
            const defaultFilterPassed = filter === undefined && value != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed || customFilterPassed) {
                target[key] = value;
            }
        }
    }
    return target;
}
exports.map = map;
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
exports.convertMap = convertMap;
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};


/***/ }),

/***/ 4809:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.strictParseByte = exports.strictParseShort = exports.strictParseInt32 = exports.strictParseInt = exports.strictParseLong = exports.limitedParseFloat32 = exports.limitedParseFloat = exports.handleFloat = exports.limitedParseDouble = exports.strictParseFloat32 = exports.strictParseFloat = exports.strictParseDouble = exports.expectUnion = exports.expectString = exports.expectObject = exports.expectNonNull = exports.expectByte = exports.expectShort = exports.expectInt32 = exports.expectInt = exports.expectLong = exports.expectFloat32 = exports.expectNumber = exports.expectBoolean = exports.parseBoolean = void 0;
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
exports.parseBoolean = parseBoolean;
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}`);
};
exports.expectBoolean = expectBoolean;
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}`);
};
exports.expectNumber = expectNumber;
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = (0, exports.expectNumber)(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
exports.expectFloat32 = expectFloat32;
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}`);
};
exports.expectLong = expectLong;
exports.expectInt = exports.expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
exports.expectInt32 = expectInt32;
const expectShort = (value) => expectSizedInt(value, 16);
exports.expectShort = expectShort;
const expectByte = (value) => expectSizedInt(value, 8);
exports.expectByte = expectByte;
const expectSizedInt = (value, size) => {
    const expected = (0, exports.expectLong)(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
exports.expectNonNull = expectNonNull;
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    throw new TypeError(`Expected object, got ${typeof value}`);
};
exports.expectObject = expectObject;
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    throw new TypeError(`Expected string, got ${typeof value}`);
};
exports.expectString = expectString;
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = (0, exports.expectObject)(value);
    const setKeys = Object.entries(asObject)
        .filter(([_, v]) => v !== null && v !== undefined)
        .map(([k, _]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
exports.expectUnion = expectUnion;
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return (0, exports.expectNumber)(parseNumber(value));
    }
    return (0, exports.expectNumber)(value);
};
exports.strictParseDouble = strictParseDouble;
exports.strictParseFloat = exports.strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return (0, exports.expectFloat32)(parseNumber(value));
    }
    return (0, exports.expectFloat32)(value);
};
exports.strictParseFloat32 = strictParseFloat32;
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectNumber)(value);
};
exports.limitedParseDouble = limitedParseDouble;
exports.handleFloat = exports.limitedParseDouble;
exports.limitedParseFloat = exports.limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectFloat32)(value);
};
exports.limitedParseFloat32 = limitedParseFloat32;
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectLong)(parseNumber(value));
    }
    return (0, exports.expectLong)(value);
};
exports.strictParseLong = strictParseLong;
exports.strictParseInt = exports.strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectInt32)(parseNumber(value));
    }
    return (0, exports.expectInt32)(value);
};
exports.strictParseInt32 = strictParseInt32;
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectShort)(parseNumber(value));
    }
    return (0, exports.expectShort)(value);
};
exports.strictParseShort = strictParseShort;
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectByte)(parseNumber(value));
    }
    return (0, exports.expectByte)(value);
};
exports.strictParseByte = strictParseByte;


/***/ }),

/***/ 308:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvedPath = void 0;
const extended_encode_uri_component_1 = __nccwpck_require__(1927);
const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => (0, extended_encode_uri_component_1.extendedEncodeURIComponent)(segment))
                .join("/")
            : (0, extended_encode_uri_component_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};
exports.resolvedPath = resolvedPath;


/***/ }),

/***/ 8000:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeFloat = void 0;
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
exports.serializeFloat = serializeFloat;


/***/ }),

/***/ 8730:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitEvery = void 0;
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}
exports.splitEvery = splitEvery;


/***/ }),

/***/ 7190:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseUrl = void 0;
const querystring_parser_1 = __nccwpck_require__(7424);
const parseUrl = (url) => {
    const { hostname, pathname, port, protocol, search } = new URL(url);
    let query;
    if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};
exports.parseUrl = parseUrl;


/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toBase64 = exports.fromBase64 = void 0;
const util_buffer_from_1 = __nccwpck_require__(6010);
const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
function fromBase64(input) {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
exports.fromBase64 = fromBase64;
function toBase64(input) {
    return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
}
exports.toBase64 = toBase64;


/***/ }),

/***/ 9190:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateBodyLength = void 0;
const fs_1 = __nccwpck_require__(7147);
const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, fs_1.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0, fs_1.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};
exports.calculateBodyLength = calculateBodyLength;


/***/ }),

/***/ 4147:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9190), exports);


/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromString = exports.fromArrayBuffer = void 0;
const is_array_buffer_1 = __nccwpck_require__(9126);
const buffer_1 = __nccwpck_require__(4300);
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!(0, is_array_buffer_1.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer_1.Buffer.from(input, offset, length);
};
exports.fromArrayBuffer = fromArrayBuffer;
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
};
exports.fromString = fromString;


/***/ }),

/***/ 9509:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.booleanSelector = exports.SelectorType = void 0;
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
exports.booleanSelector = booleanSelector;


/***/ }),

/***/ 6168:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(9509), exports);


/***/ }),

/***/ 6488:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMDS_REGION_PATH = exports.DEFAULTS_MODE_OPTIONS = exports.ENV_IMDS_DISABLED = exports.AWS_DEFAULT_REGION_ENV = exports.AWS_REGION_ENV = exports.AWS_EXECUTION_ENV = void 0;
exports.AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
exports.AWS_REGION_ENV = "AWS_REGION";
exports.AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
exports.DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
exports.IMDS_REGION_PATH = "/latest/meta-data/placement/region";


/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = void 0;
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};


/***/ }),

/***/ 4243:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(8238), exports);


/***/ }),

/***/ 8238:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveDefaultsModeConfig = void 0;
const config_resolver_1 = __nccwpck_require__(6153);
const credential_provider_imds_1 = __nccwpck_require__(5898);
const node_config_provider_1 = __nccwpck_require__(7684);
const property_provider_1 = __nccwpck_require__(4462);
const constants_1 = __nccwpck_require__(6488);
const defaultsModeConfig_1 = __nccwpck_require__(8450);
const resolveDefaultsModeConfig = ({ region = (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS), defaultsMode = (0, node_config_provider_1.loadConfig)(defaultsModeConfig_1.NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => (0, property_provider_1.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode === null || mode === void 0 ? void 0 : mode.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${constants_1.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    var _a;
    if (process.env[constants_1.AWS_EXECUTION_ENV] && (process.env[constants_1.AWS_REGION_ENV] || process.env[constants_1.AWS_DEFAULT_REGION_ENV])) {
        return (_a = process.env[constants_1.AWS_REGION_ENV]) !== null && _a !== void 0 ? _a : process.env[constants_1.AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[constants_1.ENV_IMDS_DISABLED]) {
        try {
            const endpoint = await (0, credential_provider_imds_1.getInstanceMetadataEndpoint)();
            return (await (0, credential_provider_imds_1.httpRequest)({ ...endpoint, path: constants_1.IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};


/***/ }),

/***/ 1968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toHex = exports.fromHex = void 0;
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
exports.fromHex = fromHex;
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
exports.toHex = toHex;


/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(7776), exports);


/***/ }),

/***/ 7776:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeProvider = void 0;
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};
exports.normalizeProvider = normalizeProvider;


/***/ }),

/***/ 5774:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUriPath = void 0;
const escape_uri_1 = __nccwpck_require__(4652);
const escapeUriPath = (uri) => uri.split("/").map(escape_uri_1.escapeUri).join("/");
exports.escapeUriPath = escapeUriPath;


/***/ }),

/***/ 4652:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUri = void 0;
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
exports.escapeUri = escapeUri;
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ 7952:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(4652), exports);
tslib_1.__exportStar(__nccwpck_require__(5774), exports);


/***/ }),

/***/ 8095:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultUserAgent = exports.UA_APP_ID_INI_NAME = exports.UA_APP_ID_ENV_NAME = void 0;
const node_config_provider_1 = __nccwpck_require__(7684);
const os_1 = __nccwpck_require__(2037);
const process_1 = __nccwpck_require__(7282);
const is_crt_available_1 = __nccwpck_require__(8390);
exports.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
exports.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        [`os/${(0, os_1.platform)()}`, (0, os_1.release)()],
        ["lang/js"],
        ["md/nodejs", `${process_1.versions.node}`],
    ];
    const crtAvailable = (0, is_crt_available_1.isCrtAvailable)();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (process_1.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${process_1.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = (0, node_config_provider_1.loadConfig)({
        environmentVariableSelector: (env) => env[exports.UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[exports.UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};
exports.defaultUserAgent = defaultUserAgent;


/***/ }),

/***/ 8390:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCrtAvailable = void 0;
const isCrtAvailable = () => {
    try {
        if ( true && __nccwpck_require__(7578)) {
            return ["md/crt-avail"];
        }
        return null;
    }
    catch (e) {
        return null;
    }
};
exports.isCrtAvailable = isCrtAvailable;


/***/ }),

/***/ 8172:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUtf8 = exports.fromUtf8 = void 0;
const pureJs_1 = __nccwpck_require__(1590);
const whatwgEncodingApi_1 = __nccwpck_require__(9215);
const fromUtf8 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 1590:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUtf8 = exports.fromUtf8 = void 0;
const fromUtf8 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);
            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);
        }
        else {
            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);
        }
    }
    return Uint8Array.from(bytes);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (0b11000000 <= byte && byte < 0b11100000) {
            const nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));
        }
        else if (0b11110000 <= byte && byte < 0b101101101) {
            const surrogatePair = [byte, input[++i], input[++i], input[++i]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));
        }
    }
    return decoded;
};
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 9215:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUtf8 = exports.fromUtf8 = void 0;
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
exports.fromUtf8 = fromUtf8;
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 6278:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUtf8 = exports.fromUtf8 = void 0;
const util_buffer_from_1 = __nccwpck_require__(6010);
const fromUtf8 = (input) => {
    const buf = (0, util_buffer_from_1.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input) => (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 8880:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createWaiter = void 0;
const poller_1 = __nccwpck_require__(2105);
const utils_1 = __nccwpck_require__(6001);
const waiter_1 = __nccwpck_require__(4996);
const abortTimeout = async (abortSignal) => {
    return new Promise((resolve) => {
        abortSignal.onabort = () => resolve({ state: waiter_1.WaiterState.ABORTED });
    });
};
const createWaiter = async (options, input, acceptorChecks) => {
    const params = {
        ...waiter_1.waiterServiceDefaults,
        ...options,
    };
    (0, utils_1.validateWaiterOptions)(params);
    const exitConditions = [(0, poller_1.runPolling)(params, input, acceptorChecks)];
    if (options.abortController) {
        exitConditions.push(abortTimeout(options.abortController.signal));
    }
    if (options.abortSignal) {
        exitConditions.push(abortTimeout(options.abortSignal));
    }
    return Promise.race(exitConditions);
};
exports.createWaiter = createWaiter;


/***/ }),

/***/ 1627:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(8880), exports);
tslib_1.__exportStar(__nccwpck_require__(4996), exports);


/***/ }),

/***/ 2105:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runPolling = void 0;
const sleep_1 = __nccwpck_require__(7397);
const waiter_1 = __nccwpck_require__(4996);
const exponentialBackoffWithJitter = (minDelay, maxDelay, attemptCeiling, attempt) => {
    if (attempt > attemptCeiling)
        return maxDelay;
    const delay = minDelay * 2 ** (attempt - 1);
    return randomInRange(minDelay, delay);
};
const randomInRange = (min, max) => min + Math.random() * (max - min);
const runPolling = async ({ minDelay, maxDelay, maxWaitTime, abortController, client, abortSignal }, input, acceptorChecks) => {
    var _a;
    const { state } = await acceptorChecks(client, input);
    if (state !== waiter_1.WaiterState.RETRY) {
        return { state };
    }
    let currentAttempt = 1;
    const waitUntil = Date.now() + maxWaitTime * 1000;
    const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
    while (true) {
        if (((_a = abortController === null || abortController === void 0 ? void 0 : abortController.signal) === null || _a === void 0 ? void 0 : _a.aborted) || (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted)) {
            return { state: waiter_1.WaiterState.ABORTED };
        }
        const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
        if (Date.now() + delay * 1000 > waitUntil) {
            return { state: waiter_1.WaiterState.TIMEOUT };
        }
        await (0, sleep_1.sleep)(delay);
        const { state } = await acceptorChecks(client, input);
        if (state !== waiter_1.WaiterState.RETRY) {
            return { state };
        }
        currentAttempt += 1;
    }
};
exports.runPolling = runPolling;


/***/ }),

/***/ 6001:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(4351);
tslib_1.__exportStar(__nccwpck_require__(7397), exports);
tslib_1.__exportStar(__nccwpck_require__(3931), exports);


/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const sleep = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
exports.sleep = sleep;


/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateWaiterOptions = void 0;
const validateWaiterOptions = (options) => {
    if (options.maxWaitTime < 1) {
        throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
    }
    else if (options.minDelay < 1) {
        throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
    }
    else if (options.maxDelay < 1) {
        throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
    }
    else if (options.maxWaitTime <= options.minDelay) {
        throw new Error(`WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
    else if (options.maxDelay < options.minDelay) {
        throw new Error(`WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
};
exports.validateWaiterOptions = validateWaiterOptions;


/***/ }),

/***/ 4996:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkExceptions = exports.WaiterState = exports.waiterServiceDefaults = void 0;
exports.waiterServiceDefaults = {
    minDelay: 2,
    maxDelay: 120,
};
var WaiterState;
(function (WaiterState) {
    WaiterState["ABORTED"] = "ABORTED";
    WaiterState["FAILURE"] = "FAILURE";
    WaiterState["SUCCESS"] = "SUCCESS";
    WaiterState["RETRY"] = "RETRY";
    WaiterState["TIMEOUT"] = "TIMEOUT";
})(WaiterState = exports.WaiterState || (exports.WaiterState = {}));
const checkExceptions = (result) => {
    if (result.state === WaiterState.ABORTED) {
        const abortError = new Error(`${JSON.stringify({
            ...result,
            reason: "Request was aborted",
        })}`);
        abortError.name = "AbortError";
        throw abortError;
    }
    else if (result.state === WaiterState.TIMEOUT) {
        const timeoutError = new Error(`${JSON.stringify({
            ...result,
            reason: "Waiter has timed out",
        })}`);
        timeoutError.name = "TimeoutError";
        throw timeoutError;
    }
    else if (result.state !== WaiterState.SUCCESS) {
        throw new Error(`${JSON.stringify({ result })}`);
    }
    return result;
};
exports.checkExceptions = checkExceptions;


/***/ }),

/***/ 5107:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__nccwpck_require__(9323));
var legacy_json_1 = __importDefault(__nccwpck_require__(9591));
var xml_json_1 = __importDefault(__nccwpck_require__(2586));
var decode_codepoint_1 = __importDefault(__nccwpck_require__(1227));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),

/***/ 1227:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decode_json_1 = __importDefault(__nccwpck_require__(3600));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports["default"] = decodeCodePoint;


/***/ }),

/***/ 2006:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__nccwpck_require__(2586));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__nccwpck_require__(9323));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),

/***/ 3000:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __nccwpck_require__(5107);
var encode_1 = __nccwpck_require__(2006);
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __nccwpck_require__(2006);
Object.defineProperty(exports, "encodeXML", ({ enumerable: true, get: function () { return encode_2.encodeXML; } }));
Object.defineProperty(exports, "encodeHTML", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeNonAsciiHTML", ({ enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } }));
Object.defineProperty(exports, "escape", ({ enumerable: true, get: function () { return encode_2.escape; } }));
Object.defineProperty(exports, "escapeUTF8", ({ enumerable: true, get: function () { return encode_2.escapeUTF8; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeHTML5", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
var decode_2 = __nccwpck_require__(5107);
Object.defineProperty(exports, "decodeXML", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));
Object.defineProperty(exports, "decodeHTML", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML5", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML4Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeHTML5Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeXMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildOptions = (__nccwpck_require__(8280).buildOptions);

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataTagName: false,
  cdataPositionChar: '\\c',
  format: false,
  indentBy: '  ',
  supressEmptyNode: false,
  tagValueProcessor: function(a) {
    return a;
  },
  attrValueProcessor: function(a) {
    return a;
  },
};

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'cdataTagName',
  'cdataPositionChar',
  'format',
  'indentBy',
  'supressEmptyNode',
  'tagValueProcessor',
  'attrValueProcessor',
];

function Parser(options) {
  this.options = buildOptions(options, defaultOptions, props);
  if (this.options.ignoreAttributes || this.options.attrNodeName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  if (this.options.cdataTagName) {
    this.isCDATA = isCDATA;
  } else {
    this.isCDATA = function(/*a*/) {
      return false;
    };
  }
  this.replaceCDATAstr = replaceCDATAstr;
  this.replaceCDATAarr = replaceCDATAarr;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }

  if (this.options.supressEmptyNode) {
    this.buildTextNode = buildEmptyTextNode;
    this.buildObjNode = buildEmptyObjNode;
  } else {
    this.buildTextNode = buildTextValNode;
    this.buildObjNode = buildObjectNode;
  }

  this.buildTextValNode = buildTextValNode;
  this.buildObjectNode = buildObjectNode;
}

Parser.prototype.parse = function(jObj) {
  return this.j2x(jObj, 0).val;
};

Parser.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  const keys = Object.keys(jObj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += ' ' + attr + '="' + this.options.attrValueProcessor('' + jObj[key]) + '"';
      } else if (this.isCDATA(key)) {
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAstr('', jObj[key]);
        }
      } else {
        //tag value
        if (key === this.options.textNodeName) {
          if (jObj[this.options.cdataTagName]) {
            //value will added while processing cdata
          } else {
            val += this.options.tagValueProcessor('' + jObj[key]);
          }
        } else {
          val += this.buildTextNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      if (this.isCDATA(key)) {
        val += this.indentate(level);
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAarr('', jObj[key]);
        }
      } else {
        //nested nodes
        const arrLen = jObj[key].length;
        for (let j = 0; j < arrLen; j++) {
          const item = jObj[key][j];
          if (typeof item === 'undefined') {
            // supress undefined node
          } else if (item === null) {
            val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          } else if (typeof item === 'object') {
            const result = this.j2x(item, level + 1);
            val += this.buildObjNode(result.val, key, result.attrStr, level);
          } else {
            val += this.buildTextNode(item, key, '', level);
          }
        }
      }
    } else {
      //nested node
      if (this.options.attrNodeName && key === this.options.attrNodeName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += ' ' + Ks[j] + '="' + this.options.attrValueProcessor('' + jObj[key][Ks[j]]) + '"';
        }
      } else {
        const result = this.j2x(jObj[key], level + 1);
        val += this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

function replaceCDATAstr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata + ']]' + this.tagEndChar;
  } else {
    return str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata + ']]' + this.tagEndChar);
  }
}

function replaceCDATAarr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata.join(']]><![CDATA[') + ']]' + this.tagEndChar;
  } else {
    for (let v in cdata) {
      str = str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata[v] + ']]>');
    }
    return str + this.newLine;
  }
}

function buildObjectNode(val, key, attrStr, level) {
  if (attrStr && !val.includes('<')) {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      '>' +
      val +
      //+ this.newLine
      // + this.indentate(level)
      '</' +
      key +
      this.tagEndChar
    );
  } else {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      this.tagEndChar +
      val +
      //+ this.newLine
      this.indentate(level) +
      '</' +
      key +
      this.tagEndChar
    );
  }
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
    //+ this.newLine
  }
}

function buildTextValNode(val, key, attrStr, level) {
  return (
    this.indentate(level) +
    '<' +
    key +
    attrStr +
    '>' +
    this.options.tagValueProcessor(val) +
    '</' +
    key +
    this.tagEndChar
  );
}

function buildEmptyTextNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildTextValNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
  }
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

function isCDATA(name) {
  return name === this.options.cdataTagName;
}

//formatting
//indentation
//\n after each closing or self closing tag

module.exports = Parser;


/***/ }),

/***/ 1901:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

const char = function(a) {
  return String.fromCharCode(a);
};

const chars = {
  nilChar: char(176),
  missingChar: char(201),
  nilPremitive: char(175),
  missingPremitive: char(200),

  emptyChar: char(178),
  emptyValue: char(177), //empty Premitive

  boundryChar: char(179),

  objStart: char(198),
  arrStart: char(204),
  arrayEnd: char(185),
};

const charsArr = [
  chars.nilChar,
  chars.nilPremitive,
  chars.missingChar,
  chars.missingPremitive,
  chars.boundryChar,
  chars.emptyChar,
  chars.emptyValue,
  chars.arrayEnd,
  chars.objStart,
  chars.arrStart,
];

const _e = function(node, e_schema, options) {
  if (typeof e_schema === 'string') {
    //premitive
    if (node && node[0] && node[0].val !== undefined) {
      return getValue(node[0].val, e_schema);
    } else {
      return getValue(node, e_schema);
    }
  } else {
    const hasValidData = hasData(node);
    if (hasValidData === true) {
      let str = '';
      if (Array.isArray(e_schema)) {
        //attributes can't be repeated. hence check in children tags only
        str += chars.arrStart;
        const itemSchema = e_schema[0];
        //var itemSchemaType = itemSchema;
        const arr_len = node.length;

        if (typeof itemSchema === 'string') {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = getValue(node[arr_i].val, itemSchema);
            str = processValue(str, r);
          }
        } else {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = _e(node[arr_i], itemSchema, options);
            str = processValue(str, r);
          }
        }
        str += chars.arrayEnd; //indicates that next item is not array item
      } else {
        //object
        str += chars.objStart;
        const keys = Object.keys(e_schema);
        if (Array.isArray(node)) {
          node = node[0];
        }
        for (let i in keys) {
          const key = keys[i];
          //a property defined in schema can be present either in attrsMap or children tags
          //options.textNodeName will not present in both maps, take it's value from val
          //options.attrNodeName will be present in attrsMap
          let r;
          if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
            r = _e(node.attrsMap[key], e_schema[key], options);
          } else if (key === options.textNodeName) {
            r = _e(node.val, e_schema[key], options);
          } else {
            r = _e(node.child[key], e_schema[key], options);
          }
          str = processValue(str, r);
        }
      }
      return str;
    } else {
      return hasValidData;
    }
  }
};

const getValue = function(a /*, type*/) {
  switch (a) {
    case undefined:
      return chars.missingPremitive;
    case null:
      return chars.nilPremitive;
    case '':
      return chars.emptyValue;
    default:
      return a;
  }
};

const processValue = function(str, r) {
  if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
    str += chars.boundryChar;
  }
  return str + r;
};

const isAppChar = function(ch) {
  return charsArr.indexOf(ch) !== -1;
};

function hasData(jObj) {
  if (jObj === undefined) {
    return chars.missingChar;
  } else if (jObj === null) {
    return chars.nilChar;
  } else if (
    jObj.child &&
    Object.keys(jObj.child).length === 0 &&
    (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)
  ) {
    return chars.emptyChar;
  } else {
    return true;
  }
}

const x2j = __nccwpck_require__(6712);
const buildOptions = (__nccwpck_require__(8280).buildOptions);

const convert2nimn = function(node, e_schema, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);
  return _e(node, e_schema, options);
};

exports.convert2nimn = convert2nimn;


/***/ }),

/***/ 8270:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(8280);

const convertToJson = function(node, options, parentTagName) {
  const jObj = {};

  // when no child node or attr is present
  if ((!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
    return util.isExist(node.val) ? node.val : '';
  }

  // otherwise create a textnode if node has some text
  if (util.isExist(node.val) && !(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
    const asArray = util.isTagNameInArrayMode(node.tagname, options.arrayMode, parentTagName)
    jObj[options.textNodeName] = asArray ? [node.val] : node.val;
  }

  util.merge(jObj, node.attrsMap, options.arrayMode);

  const keys = Object.keys(node.child);
  for (let index = 0; index < keys.length; index++) {
    const tagName = keys[index];
    if (node.child[tagName] && node.child[tagName].length > 1) {
      jObj[tagName] = [];
      for (let tag in node.child[tagName]) {
        if (node.child[tagName].hasOwnProperty(tag)) {
          jObj[tagName].push(convertToJson(node.child[tagName][tag], options, tagName));
        }
      }
    } else {
      const result = convertToJson(node.child[tagName][0], options, tagName);
      const asArray = (options.arrayMode === true && typeof result === 'object') || util.isTagNameInArrayMode(tagName, options.arrayMode, parentTagName);
      jObj[tagName] = asArray ? [result] : result;
    }
  }

  //add value
  return jObj;
};

exports.convertToJson = convertToJson;


/***/ }),

/***/ 6014:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(8280);
const buildOptions = (__nccwpck_require__(8280).buildOptions);
const x2j = __nccwpck_require__(6712);

//TODO: do it later
const convertToJsonString = function(node, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);

  options.indentBy = options.indentBy || '';
  return _cToJsonStr(node, options, 0);
};

const _cToJsonStr = function(node, options, level) {
  let jObj = '{';

  //traver through all the children
  const keys = Object.keys(node.child);

  for (let index = 0; index < keys.length; index++) {
    var tagname = keys[index];
    if (node.child[tagname] && node.child[tagname].length > 1) {
      jObj += '"' + tagname + '" : [ ';
      for (var tag in node.child[tagname]) {
        jObj += _cToJsonStr(node.child[tagname][tag], options) + ' , ';
      }
      jObj = jObj.substr(0, jObj.length - 1) + ' ] '; //remove extra comma in last
    } else {
      jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + ' ,';
    }
  }
  util.merge(jObj, node.attrsMap);
  //add attrsMap as new children
  if (util.isEmptyObject(jObj)) {
    return util.isExist(node.val) ? node.val : '';
  } else {
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
      }
    }
  }
  //add value
  if (jObj[jObj.length - 1] === ',') {
    jObj = jObj.substr(0, jObj.length - 2);
  }
  return jObj + '}';
};

function stringval(v) {
  if (v === true || v === false || !isNaN(v)) {
    return v;
  } else {
    return '"' + v + '"';
  }
}

function indentate(options, level) {
  return options.indentBy.repeat(level);
}

exports.convertToJsonString = convertToJsonString;


/***/ }),

/***/ 7448:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const nodeToJson = __nccwpck_require__(8270);
const xmlToNodeobj = __nccwpck_require__(6712);
const x2xmlnode = __nccwpck_require__(6712);
const buildOptions = (__nccwpck_require__(8280).buildOptions);
const validator = __nccwpck_require__(1739);

exports.parse = function(xmlData, options, validationOption) {
  if( validationOption){
    if(validationOption === true) validationOption = {}
    
    const result = validator.validate(xmlData, validationOption);
    if (result !== true) {
      throw Error( result.err.msg)
    }
  }
  options = buildOptions(options, x2xmlnode.defaultOptions, x2xmlnode.props);
  const traversableObj = xmlToNodeobj.getTraversalObj(xmlData, options)
  //print(traversableObj, "  ");
  return nodeToJson.convertToJson(traversableObj, options);
};
exports.convertTonimn = __nccwpck_require__(1901).convert2nimn;
exports.getTraversalObj = xmlToNodeobj.getTraversalObj;
exports.convertToJson = nodeToJson.convertToJson;
exports.convertToJsonString = __nccwpck_require__(6014).convertToJsonString;
exports.validate = validator.validate;
exports.j2xParser = __nccwpck_require__(5152);
exports.parseToNimn = function(xmlData, schema, options) {
  return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
};


function print(xmlNode, indentation){
  if(xmlNode){
    console.log(indentation + "{")
    console.log(indentation + "  \"tagName\": \"" + xmlNode.tagname + "\", ");
    if(xmlNode.parent){
      console.log(indentation + "  \"parent\": \"" + xmlNode.parent.tagname  + "\", ");
    }
    console.log(indentation + "  \"val\": \"" + xmlNode.val  + "\", ");
    console.log(indentation + "  \"attrs\": " + JSON.stringify(xmlNode.attrsMap,null,4)  + ", ");

    if(xmlNode.child){
      console.log(indentation + "\"child\": {")
      const indentation2 = indentation + indentation;
      Object.keys(xmlNode.child).forEach( function(key) {
        const node = xmlNode.child[key];

        if(Array.isArray(node)){
          console.log(indentation +  "\""+key+"\" :[")
          node.forEach( function(item,index) {
            //console.log(indentation + " \""+index+"\" : [")
            print(item, indentation2);
          })
          console.log(indentation + "],")  
        }else{
          console.log(indentation + " \""+key+"\" : {")
          print(node, indentation2);
          console.log(indentation + "},")  
        }
      });
      console.log(indentation + "},")
    }
    console.log(indentation + "},")
  }
}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.buildOptions = function(options, defaultOptions, props) {
  var newOptions = {};
  if (!options) {
    return defaultOptions; //if there are not options
  }

  for (let i = 0; i < props.length; i++) {
    if (options[props[i]] !== undefined) {
      newOptions[props[i]] = options[props[i]];
    } else {
      newOptions[props[i]] = defaultOptions[props[i]];
    }
  }
  return newOptions;
};

/**
 * Check if a tag name should be treated as array
 *
 * @param tagName the node tagname
 * @param arrayMode the array mode option
 * @param parentTagName the parent tag name
 * @returns {boolean} true if node should be parsed as array
 */
exports.isTagNameInArrayMode = function (tagName, arrayMode, parentTagName) {
  if (arrayMode === false) {
    return false;
  } else if (arrayMode instanceof RegExp) {
    return arrayMode.test(tagName);
  } else if (typeof arrayMode === 'function') {
    return !!arrayMode(tagName, parentTagName);
  }

  return arrayMode === "strict";
}

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),

/***/ 1739:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(8280);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
};

const props = ['allowBooleanAttributes'];

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = util.buildOptions(options, defaultOptions, props);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }

  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value

      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "There is an unnecessary space between tag name and backward slash '</ ..'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, i));
          } else {
            const otg = tags.pop();
            if (tagName !== otg) {
              return getErrorObject('InvalidTag', "Closing tag '"+otg+"' is expected inplace of '"+tagName+"'.", getLineNumberForPosition(xmlData, i));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else {
            tags.push(tagName);
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', "Invalid '"+JSON.stringify(tags, null, 4).replace(/\r?\n/g, '')+"' found.", 1);
  }

  return true;
};

/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  var start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

var doubleQuote = '"';
var singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
        continue;
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(attrStr, matches[i][0]))
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(attrStr, matches[i][0]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  var lines = xmlData.substring(0, index).split(/\r?\n/);
  return lines.length;
}

//this function returns the position of the last character of match within attrStr
function getPositionFromMatch(attrStr, match) {
  return attrStr.indexOf(match) + match.length;
}


/***/ }),

/***/ 9539:
/***/ ((module) => {

"use strict";


module.exports = function(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags
  this.attrsMap = {}; //attributes map
  this.val = val; //text only
  this.addChild = function(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
};


/***/ }),

/***/ 6712:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(8280);
const buildOptions = (__nccwpck_require__(8280).buildOptions);
const xmlNode = __nccwpck_require__(9539);
const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

//polyfill
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false, //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseNodeValue: true,
  parseAttributeValue: false,
  arrayMode: false,
  trimValues: true, //Trim string values of tag and attributes
  cdataTagName: false,
  cdataPositionChar: '\\c',
  tagValueProcessor: function(a, tagName) {
    return a;
  },
  attrValueProcessor: function(a, attrName) {
    return a;
  },
  stopNodes: []
  //decodeStrict: false,
};

exports.defaultOptions = defaultOptions;

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'ignoreNameSpace',
  'allowBooleanAttributes',
  'parseNodeValue',
  'parseAttributeValue',
  'arrayMode',
  'trimValues',
  'cdataTagName',
  'cdataPositionChar',
  'tagValueProcessor',
  'attrValueProcessor',
  'parseTrueNumberOnly',
  'stopNodes'
];
exports.props = props;

/**
 * Trim -> valueProcessor -> parse value
 * @param {string} tagName
 * @param {string} val
 * @param {object} options
 */
function processTagValue(tagName, val, options) {
  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }
    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue, options.parseTrueNumberOnly);
  }

  return val;
}

function resolveNameSpace(tagname, options) {
  if (options.ignoreNameSpace) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

function parseValue(val, shouldParse, parseTrueNumberOnly) {
  if (shouldParse && typeof val === 'string') {
    let parsed;
    if (val.trim() === '' || isNaN(val)) {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = Number.parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = Number.parseFloat(val);
        val = val.replace(/\.?0+$/, "");
      } else {
        parsed = Number.parseInt(val, 10);
      }
      if (parseTrueNumberOnly) {
        parsed = String(parsed) === val ? parsed : val;
      }
    }
    return parsed;
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

function buildAttributesMap(attrStr, options) {
  if (!options.ignoreAttributes && typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = resolveNameSpace(matches[i][1], options);
      if (attrName.length) {
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }
          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[options.attributeNamePrefix + attrName] = parseValue(
            matches[i][4],
            options.parseAttributeValue,
            options.parseTrueNumberOnly
          );
        } else if (options.allowBooleanAttributes) {
          attrs[options.attributeNamePrefix + attrName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (options.attrNodeName) {
      const attrCollection = {};
      attrCollection[options.attrNodeName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}

const getTraversalObj = function(xmlData, options) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  options = buildOptions(options, defaultOptions, props);
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";

//function match(xmlData){
  for(let i=0; i< xmlData.length; i++){
    const ch = xmlData[i];
    if(ch === '<'){
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        /* if (currentNode.parent) {
          currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue2(tagName, textData , options);
        } */
        if(currentNode){
          if(currentNode.val){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tagName, textData , options);
          }else{
            currentNode.val = processTagValue(tagName, textData , options);
          }
        }

        if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
          currentNode.child = []
          if (currentNode.attrsMap == undefined) { currentNode.attrsMap = {}}
          currentNode.val = xmlData.substr(currentNode.startIndex + 1, i - currentNode.startIndex - 1)
        }
        currentNode = currentNode.parent;
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {
        i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.")
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.")
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.")
        const tagExp = xmlData.substring(i, closeIndex);
        if(tagExp.indexOf("[") >= 0){
          i = xmlData.indexOf("]>", i) + 1;
        }else{
          i = closeIndex;
        }
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2
        const tagExp = xmlData.substring(i + 9,closeIndex);

        //considerations
        //1. CDATA will always have parent node
        //2. A tag with CDATA is not a leaf node so it's value would be string type.
        if(textData){
          currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData , options);
          textData = "";
        }

        if (options.cdataTagName) {
          //add cdata node
          const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
          currentNode.addChild(childNode);
          //for backtracking
          currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
          //add rest value to parent node
          if (tagExp) {
            childNode.val = tagExp;
          }
        } else {
          currentNode.val = (currentNode.val || '') + (tagExp || '');
        }

        i = closeIndex + 2;
      }else {//Opening tag
        const result = closingIndexForOpeningTag(xmlData, i+1)
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.indexOf(" ");
        let tagName = tagExp;
        let shouldBuildAttributesMap = true;
        if(separatorIndex !== -1){
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
          tagExp = tagExp.substr(separatorIndex + 1);
        }

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
            shouldBuildAttributesMap = tagName !== result.data.substr(colonIndex + 1);
          }
        }

        //save text to parent node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue( currentNode.tagname, textData, options);
          }
        }

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){//selfClosing tag

          if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          }else{
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }

          const childNode = new xmlNode(tagName, currentNode, '');
          if(tagName !== tagExp){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
        }else{//opening tag

          const childNode = new xmlNode( tagName, currentNode );
          if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
            childNode.startIndex=closeIndex;
          }
          if(tagName !== tagExp && shouldBuildAttributesMap){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
          currentNode = childNode;
        }
        textData = "";
        i = closeIndex;
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj;
}

function closingIndexForOpeningTag(data, i){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < data.length; index++) {
    let ch = data[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === '>') {
        return {
          data: tagExp,
          index: index
        }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

exports.getTraversalObj = getTraversalObj;


/***/ }),

/***/ 4351:
/***/ ((module) => {

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


/***/ }),

/***/ 5840:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(8628));

var _v2 = _interopRequireDefault(__nccwpck_require__(6409));

var _v3 = _interopRequireDefault(__nccwpck_require__(5122));

var _v4 = _interopRequireDefault(__nccwpck_require__(9120));

var _nil = _interopRequireDefault(__nccwpck_require__(5332));

var _version = _interopRequireDefault(__nccwpck_require__(2414));

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 5274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 8950:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _md = _interopRequireDefault(__nccwpck_require__(4569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _sha = _interopRequireDefault(__nccwpck_require__(5274));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(814));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 2414:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 7578:
/***/ ((module) => {

module.exports = eval("require")("aws-crt");


/***/ }),

/***/ 4300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5158:
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 5798:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@aws-sdk/client-kinesis","description":"AWS SDK for JavaScript Kinesis Client for Node.js, Browser and React Native","version":"3.145.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/client-sts":"3.145.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/credential-provider-node":"3.145.0","@aws-sdk/eventstream-serde-browser":"3.127.0","@aws-sdk/eventstream-serde-config-resolver":"3.127.0","@aws-sdk/eventstream-serde-node":"3.127.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-signing":"3.130.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.142.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.142.0","@aws-sdk/util-defaults-mode-node":"3.142.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","@aws-sdk/util-waiter":"3.127.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"overrides":{"typedoc":{"typescript":"~4.6.2"}},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-kinesis","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-kinesis"}}');

/***/ }),

/***/ 1092:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@aws-sdk/client-sso","description":"AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native","version":"3.145.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.142.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.142.0","@aws-sdk/util-defaults-mode-node":"3.142.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"overrides":{"typedoc":{"typescript":"~4.6.2"}},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso"}}');

/***/ }),

/***/ 7947:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@aws-sdk/client-sts","description":"AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native","version":"3.145.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/credential-provider-node":"3.145.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-sdk-sts":"3.130.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-signing":"3.130.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.142.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.142.0","@aws-sdk/util-defaults-mode-node":"3.142.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","entities":"2.2.0","fast-xml-parser":"3.19.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"overrides":{"typedoc":{"typescript":"~4.6.2"}},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sts"}}');

/***/ }),

/***/ 3600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');

/***/ }),

/***/ 9323:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

/***/ }),

/***/ 9591:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ 2586:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(6550);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;