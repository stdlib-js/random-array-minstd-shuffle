// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-ctors@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.3.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-dtypes@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";var a="float64",h="float64",j=l(),u=m();function c(e,t,r){if(!y(t))return new TypeError(p("1eF2V",t));if(0===r){if(f(t,"idtype")&&(e.idtype=t.idtype,j.indexOf(e.idtype)<0))return new TypeError(p("1eF4S","idtype",j.join('", "'),e.idtype));if(f(t,"ndtype")&&(e.ndtype=t.ndtype,u.indexOf(e.ndtype)<0))return new TypeError(p("1eF4S","ndtype",u.join('", "'),e.ndtype))}else if(1===r&&f(t,"dtype")){if(e.dtype=t.dtype,j.indexOf(e.dtype)<0)return new TypeError(p("1eF4S","dtype",j.join('", "'),e.dtype))}else if(f(t,"dtype")&&(e.dtype=t.dtype,u.indexOf(e.dtype)<0))return new TypeError(p("1eF4S","dtype",u.join('", "'),e.dtype));return null}function v(){var m,l,y,f,j,u;if(y={idtype:a,ndtype:h},f=function(e,r){var n,s,m,l,f;if(!t(e))throw new TypeError(p("1eF2d",e));if(f={},arguments.length>1&&(m=c(f,r,1)))throw m;if("generic"===(l=f.dtype||y.idtype))return d(e,j);return n=i(l),s=new n(e),o([s],[e],[1],j),s},0===(l=arguments.length))j=s;else if(1===l&&(m=arguments[0],j=s.factory(m),u=c(y,m,0)))throw u;return r(f,"seed",(function(){return f.PRNG.seed})),r(f,"seedLength",(function(){return f.PRNG.seedLength})),n(f,"state",(function(){return f.PRNG.state}),(function(e){f.PRNG.state=e})),r(f,"stateLength",(function(){return f.PRNG.stateLength})),r(f,"byteLength",(function(){return f.PRNG.byteLength})),e(f,"PRNG",j),e(f,"normalized",(function(e,r){var n,s,m,l,f;if(!t(e))throw new TypeError(p("1eF2d",e));if(f={},arguments.length>1&&(m=c(f,r,2)))throw m;if("generic"===(l=f.dtype||y.ndtype))return d(e,j.normalized);return n=i(l),s=new n(e),o([s],[e],[1],j.normalized),s})),f}j.push("generic"),u.push("generic");var g=v();e(g,"factory",v);export{g as default,v as factory};
//# sourceMappingURL=index.mjs.map
