!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){const r={PENDING:"PENDING",SUCCESS:"SUCCESS",FAILURE:"FAILURE",IGNORED:"IGNORED"},s=Object.values(r);e.exports={records:{},promises:{},RESULT:r,RESULTS:s,TEXT_FORMAT:{RED:"[31m",GREEN:"[32m",YELLOW:"[33m",RESET:"[0m",BOLD:"[1m",GREY:"[90m"}}},function(e,t,r){const s=r(2),{Reporter:o}=r(6);e.exports=new class extends s{constructor(e){super(e),this._reporters=[o],this.errorCode=0,this.subscribeSpecEvents(),this.subscribeSuiteEvents(),this.subscribeReporterEvents()}subscribeSpecEvents(){this.on("spec:start",(...e)=>{this._reporters.forEach(t=>{t.emit("spec:start",...e)})}),this.on("spec:success",(...e)=>{this._reporters.forEach(t=>{t.emit("spec:success",...e)})}),this.on("spec:failure",(...e)=>{this.errorCode=1,this._reporters.forEach(t=>{t.emit("spec:failure",...e)})}),this.on("spec:ignored",(...e)=>{this._reporters.forEach(t=>{t.emit("spec:ignored",...e)})})}subscribeSuiteEvents(){this.on("suite:start",(...e)=>{"test"!==process.env.TITEF_ENV&&this._reporters.forEach(t=>{t.emit("suite:start",...e)})}),this.on("suite:end",(...e)=>{"test"!==process.env.TITEF_ENV&&this._reporters.forEach(t=>{t.emit("suite:end",...e)})})}subscribeReporterEvents(){this._reporters.forEach(e=>{e.on("report:end",()=>{process.exit(this.errorCode)})})}}("Event Bus")},function(e,t){e.exports=require("events")},function(e,t){e.exports={isNumber:e=>"[object Number]"===Object.prototype.toString.call(e),isFunction:e=>/\[object (Async)?Function]/.test(Object.prototype.toString.call(e)),isObject:e=>"[object Object]"===Object.prototype.toString.call(e)}},function(e,t,r){const{suite:s}=r(5),{spec:o,xspec:n}=r(10);e.exports={suite:s,spec:o,xspec:n}},function(e,t,r){const s=r(1),{log:o,isFunction:n,isObject:i}=r(3),{ERROR:c}=r(9);e.exports={suite:async(e,...t)=>{const r=String(e);s.emit("suite:start",r);const a={title:r,setup:()=>{},teardown:()=>{}},{options:u,callback:p}=((e,t)=>{const r=e[0],s=e[1];switch(e.length){case 1:if(!n(r))throw o.error("Second argument must be a function!"),new TypeError(c.INVALID_ARGUMENT);return{options:t,callback:r};case 2:if(!i(r))throw o.error("Second argument must be an object!"),new TypeError(c.INVALID_ARGUMENT);if(!n(s))throw o.error("Third argument must be a function!"),new TypeError(c.INVALID_ARGUMENT);return{options:Object.assign({},t,r),callback:s};default:throw o.error("Invalid arguments! Expected (title: string, options?: object, callback: function). Actual: ",e),new TypeError(c.INVALID_ARGUMENT)}})(t,a);if(!n(u.setup))throw o.error("Setup must be a function!"),new TypeError(c.INVALID_ARGUMENT);if(u.setup(),await p(),!n(u.teardown))throw o.error("Teardown must be a function!"),new TypeError(c.INVALID_ARGUMENT);u.teardown(),s.emit("suite:end")}}},function(e,t,r){const s=r(2),{RESULT:o}=r(0),{printRecords:n}=r(7),{updateRecord:i,saveRecord:c,startSuite:a}=r(8);e.exports={Reporter:new class extends s{constructor(e){super(e),this.on("spec:start",(e,t)=>{c(e,t)}),this.on("spec:success",e=>{i(e,o.SUCCESS)}),this.on("spec:failure",(e,t)=>{i(e,o.FAILURE,t)}),this.on("spec:ignored",e=>{i(e,o.IGNORED)}),this.on("suite:start",e=>{a(e)}),this.on("suite:end",async()=>{this.emit("report:start"),await n(),this.emit("report:end")})}}("Reporter")}},function(e,t,r){const{isFunction:s}=r(3),{records:o,promises:n,RESULT:i,TEXT_FORMAT:c}=r(0),a=(...e)=>{const t=[...e,c.RESET,"\n"];return process.stdout.write(t.map(String).join(""))},u=e=>s(e)?e.name:String(e);e.exports={printRecords:async()=>{const e={};await Promise.all(...Object.values(n)),Object.keys(o).forEach(t=>{a(c.BOLD,`SUITE: ${t}`),Object.values(o[t]).forEach(t=>{t.result===i.SUCCESS?a(c.GREEN,`[ ✔ ] ${t.title}`):t.result===i.IGNORED?a(c.YELLOW,`[ - ] ${t.title}`):t.result===i.PENDING?a(c.GREY,`[...] ${t.title}`):(a(c.RED,`[ ✕ ] ${t.title}`),e[`${t.suite} > ${t.title}`]=t.payload)})});const t=Object.entries(e);t.length&&(a(c.BOLD,"\nError details:"),t.forEach((e,t)=>{const r=e[0],s=e[1];a(c.BOLD,`\n${t+1}) ${r}`),(e=>{const t=(e=>e.message?e.message:e.toString().split(":").slice(-1)[0])(e);if((e=>"ERR_ASSERTION"===e.code||0===e.toString().indexOf("AssertionError"))(e)){const r=u(e.operator),s=u(e.expected),o=u(e.actual);a(`ASSERTION FAILURE: ${t}`),"fail"===r?a("\tUnexpected:\t",c.RED,`${o}`):!r&&e.expected&&e.actual&&(a("\tExpected:\t",c.GREEN,s),a("\tActual:\t\t",c.RED,o))}else a(`ERROR: ${t}`);a(c.GREY,e.stack)})(s)}))}}},function(e,t,r){const{records:s,promises:o,RESULT:n,RESULTS:i}=r(0);let c;e.exports={saveRecord:(e,t)=>{const r=c;if(!r)throw new TypeError("Missing LAST_SUITE!");if(!e)throw new TypeError("Missing record title!");if(!s[r])throw new TypeError(`Missing or null records list for ${r}`);s[r][e]={title:e,suite:r,result:n.PENDING,payload:null},o[r]=o[r]?[...o[r],t]:[t]},updateRecord:(e,t,r)=>{const o=c;if(!o)throw new TypeError("Missing LAST_SUITE!");if(!i.includes(t))throw new TypeError(`Result should be one of ${i.join()}. Got ${t}.`);s[o][e]=Object.assign({},s[o][e],{result:t,payload:r})},startSuite:e=>{c=e,s[e]={}}}},function(e,t){const r=new Map,s={setTimeout:setTimeout,setInterval:setInterval,clearTimeout:clearTimeout,clearInterval:clearInterval};e.exports={ERROR:{INVALID_ARGUMENT:"ERR_INVALID_ARGUMENT",INTERVAL:"ERR_CLEAR_INTERVAL",TIMEOUT:"ERR_CLEAR_TIMEOUT"},rejectMap:r,oldies:s}},function(e,t,r){const s=r(1);e.exports={spec:async(e,t)=>{let r;const o=new Promise(e=>{r=e});s.emit("spec:start",e,o);try{await t(),s.emit("spec:success",e)}catch(t){s.emit("spec:failure",e,t)}return s.emit("spec:end"),r&&r()},xspec:async e=>{s.emit("spec:start",e,Promise.resolve()),s.emit("spec:ignored",e),s.emit("spec:end")}}}]));