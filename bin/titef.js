#! /usr/bin/env node
!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports={executeCallback:async e=>{if("AsyncFunction"===e[Symbol.toStringTag])try{await e()}catch(e){throw e}else e()},isNumber:e=>"[object Number]"===Object.prototype.toString.call(e),isFunction:e=>"[object Function]"===Object.prototype.toString.call(e),isObject:e=>"[object Object]"===Object.prototype.toString.call(e),log:class{static error(...e){console.log(TEXT_FORMAT.RED,"[ERROR]",...e,TEXT_FORMAT.RESET)}static info(...e){console.log("[INFO]",...e,TEXT_FORMAT.RESET)}}}},function(e,t){const r=new Map,n={setTimeout:setTimeout,setInterval:setInterval,clearTimeout:clearTimeout,clearInterval:clearInterval};e.exports={ERROR:{INVALID_ARGUMENT:"ERR_INVALID_ARGUMENT",INTERVAL:"ERR_CLEAR_INTERVAL",TIMEOUT:"ERR_CLEAR_TIMEOUT"},rejectMap:r,oldies:n}},function(module,exports,__webpack_require__){const{resolve:resolve}=__webpack_require__(3),{existsSync:existsSync}=__webpack_require__(4),{print:print,TEXT_FORMAT:TEXT_FORMAT}=__webpack_require__(0),printHelp=__webpack_require__(5),nonTrivialArguments=process.argv.slice(2),hasHelp=nonTrivialArguments.find(e=>"-h"===e||"--help"===e);hasHelp&&(printHelp(),process.exit(0));const filePath=nonTrivialArguments.length?resolve(nonTrivialArguments.slice(-1)[0]):null;filePath?existsSync(filePath)||(print(TEXT_FORMAT.RED,"ERROR: The specified test file does not exist!"),process.exit(1)):(print(TEXT_FORMAT.RED,"ERROR: Missing path to test file!\n"),printHelp(),process.exit(1)),__webpack_require__(6),eval("require")(filePath)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,r){const{print:n}=r(0);e.exports=(()=>{n("Usage: titef [OPTIONS] [FILE]\nExecutes test files written in Titef framework.\n\nOptions:\n  -h, --help            shows this help\n  ")})},function(e,t,r){r(7),r(8),r(9)},function(e,t,r){const{isNumber:n}=r(0),{ERROR:o,rejectMap:i,oldies:s}=r(1);setTimeout=((e,t)=>{if(!n(t)&&t>=0)throw new TypeError("Timeout should be a positive number!");let r,c;const l=new Promise((n,o)=>{c=o,r=s.setTimeout(()=>{try{e(),n()}catch(e){o(e),s.clearTimeout(r)}},t)}).catch(e=>{if(e!==o.TIMEOUT)throw e;s.clearTimeout(r)});return i.set(l,c),l}),clearTimeout=(e=>{const[t,r]=(()=>e?[e,i.get(e)]:[i.entries()])();if(!r)throw new Error("Unable to find timeout");r(o.TIMEOUT),i.delete(t)})},function(e,t,r){const{isNumber:n}=r(0),{ERROR:o,rejectMap:i,oldies:s}=r(1);setInterval=((e,t)=>{if(!n(t)&&t>=0)throw new TypeError("Timeout should be a positive number!");let r,c;const l=new Promise((n,o)=>{c=o,r=s.setInterval(()=>{try{e()}catch(e){o(e),s.clearInterval(r)}},t)}).catch(e=>{if(e!==o.INTERVAL)throw e;s.clearInterval(r)});return i.set(l,c),l}),clearInterval=(e=>{const[t,r]=(()=>e?[e,i.get(e)]:[i.entries()])();if(!r)throw new Error("Unable to find interval promise");r(o.INTERVAL),i.delete(t)})},function(e,t,r){const n=r(10);n.throwsAsync=(async(e,t,r)=>{let o=()=>{};try{await e()}catch(e){o=(()=>{throw e})}finally{n.throws(o,t,r)}}),n.doesNotThrowAsync=(async(e,t,r)=>{let o=()=>{};try{await e()}catch(e){o=(()=>{throw e})}finally{n.doesNotThrow(o,t,r)}})},function(e,t){e.exports=require("assert")}]));