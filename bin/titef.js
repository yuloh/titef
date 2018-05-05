#! /usr/bin/env node
!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){const r={PENDING:"PENDING",SUCCESS:"SUCCESS",FAILURE:"FAILURE",IGNORED:"IGNORED"},s=Object.values(r);e.exports={EVENT:{PROCESS:{EXIT:"process:exit",EXIT_CODE:{FAILURE:"process:exit-code:failure"}},DATABASE:{RECORDSET:{CREATE:"database:recordset:create",CLOSED:"database:recordset:closed"},RECORD:{CREATE:"database:record:create",UPDATE:"database:record:update",CLOSE:"database:record:close"},PROCESS:{ENDED:"database:process:ended"}},SUITE:{STARTED:"suite:started",HOOKS:{REGISTER:"suite:hooks:register",UNREGISTER:"suite:hooks:unregister"},ENDED:"suite:ended"},SPEC:{SETUP:{REGISTER:"spec:before-each:register",UNREGISTER:"spec:before-each:unregister"},TEARDOWN:{REGISTER:"spec:after-each:register",UNREGISTER:"spec:after-each:unregister"},STARTED:"spec:started",SUCCESS:"spec:success",IGNORE:"spec:ignore",FAILURE:"spec:failure",ENDED:"spec:ended"},REPORTER:{REPORT:{START:"reporter:report:start",ENDED:"reporter:report:ended"}}},RESULT:r,RESULTS:s}},function(e,t){e.exports=require("events")},function(e,t){e.exports={isNumber:e=>"[object Number]"===Object.prototype.toString.call(e),isFunction:e=>/\[object (Async)?Function]/.test(Object.prototype.toString.call(e)),isObject:e=>"[object Object]"===Object.prototype.toString.call(e)}},function(e,t){const r=new Map,s={setTimeout:setTimeout,setInterval:setInterval,clearTimeout:clearTimeout,clearInterval:clearInterval};e.exports={ERROR:{INTERVAL:"ERR_CLEAR_INTERVAL",TIMEOUT:"ERR_CLEAR_TIMEOUT"},rejectMap:r,oldies:s}},function(e,t,r){const s=r(1),{EVENT:n}=r(0),o=new s,i={before:{},after:{}};o.on(n.SPEC.SETUP.REGISTER,(e,t)=>{i.before[e]=t}),o.on(n.SPEC.TEARDOWN.REGISTER,(e,t)=>{i.after[e]=t}),o.on(n.SPEC.SETUP.UNREGISTER,e=>{i.before[e]=null}),o.on(n.SPEC.TEARDOWN.UNREGISTER,e=>{i.after[e]=null}),e.exports={spec:async function(e,t){const r=String(e).replace("."," "),s=this.path,E=`${s}.${r}`;o.emit(n.SPEC.STARTED,E),i.before&&i.before[s]&&i.before[s]();try{await t(),o.emit(n.SPEC.SUCCESS,E)}catch(e){o.emit(n.SPEC.FAILURE,E,e)}i.after&&i.after[s]&&i.after[s](),o.emit(n.SPEC.ENDED,E)},xspec:async function(e){const t=String(e).replace("."," "),r=`${this.path}.${t}`;o.emit(n.SPEC.STARTED,r),o.emit(n.SPEC.IGNORE,r),o.emit(n.SPEC.ENDED,r)},Spec:o}},function(e,t,r){const s=r(1),{isFunction:n,isObject:o}=r(2),{EVENT:i}=r(0),E=new s;e.exports={suite:function(e,...t){const r=String(e).replace("."," "),s=this.path,c=s?`${s}.${r}`:r,a={title:r,setup:Function(),teardown:Function(),eachSetup:Function(),eachTeardown:Function(),silent:!1},{options:R,callback:p}=function(e,t){const r=e[0],s=e[1];switch(e.length){case 1:if(!n(r))throw new TypeError("Second argument must be a function!");return{options:t,callback:r};case 2:if(!o(r))throw new TypeError("Second argument must be an object!");if(!n(s))throw new TypeError("Third argument must be a function!");return{options:Object.assign({},t,r),callback:s};default:throw new TypeError(`Invalid arguments! Expected (title: string, options?: object, callback: function). Actual: ${e.map(String).join()}`)}}(t,a);if(E.emit(i.SUITE.STARTED,c,R.silent),E.emit(i.SUITE.HOOKS.REGISTER,c,R.eachSetup,R.eachTeardown),!n(R.setup))throw new TypeError("Setup must be a function!");R.setup(),p.call(Object.assign(this,{path:c})),Object.assign(this,{path:s}),E.on(i.SUITE.ENDED,e=>{if(e===c){if(!n(R.teardown))throw new TypeError("Teardown must be a function!");R.teardown(),E.emit(i.SUITE.HOOKS.UNREGISTER),E.removeAllListeners(i.SUITE.ENDED)}})},Suite:E}},function(module,exports,__webpack_require__){const{resolve:resolve}=__webpack_require__(7),{existsSync:existsSync}=__webpack_require__(8),{printHelp:printHelp,printVersion:printVersion}=__webpack_require__(9),nonTrivialArguments=process.argv.slice(2),showHelp=nonTrivialArguments.find(e=>"-h"===e||"--help"===e),showVersion=nonTrivialArguments.find(e=>"-v"===e||"--version"===e);showHelp?(printHelp(),process.exit(0)):showVersion&&(printVersion(),process.exit(0));const filePath=nonTrivialArguments.length?resolve(nonTrivialArguments[nonTrivialArguments.length-1]):null;if(!filePath)throw new Error("Missing path to test file! Use `titef --help` for further information");if(!existsSync(filePath))throw new Error("The specified file does not exist! Use `titef --help` for further information");__webpack_require__(10),__webpack_require__(15),eval("require")(filePath)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,r){const s=(...e)=>{const t=[...e,"\n"];return process.stdout.write(t.map(String).join(""))};e.exports={printHelp(){s("Usage: titef [OPTIONS] [FILE]\nExecutes test files written in Titef (https://www.npmjs.com/package/titef) framework.\n\nOptions:\n  -h, --help            shows this help\n  -v, --version         prints version number\n  ")},printVersion(){s(void 0)}}},function(e,t,r){r(11),r(12),r(13)},function(e,t,r){const{isNumber:s}=r(2),{ERROR:n,rejectMap:o,oldies:i}=r(3);setTimeout=((e,t)=>{if(!s(t)&&t>=0)throw new TypeError("Timeout should be a positive number!");let r,E;const c=new Promise((s,n)=>{E=n,r=i.setTimeout(()=>{try{e(),s()}catch(e){n(e),i.clearTimeout(r)}},t)}).catch(e=>{if(e!==n.TIMEOUT)throw e;i.clearTimeout(r)});return o.set(c,E),c}),clearTimeout=(e=>{const[t,r]=(()=>e?[e,o.get(e)]:[o.entries()])();if(!r)throw new Error("Unable to find timeout");r(n.TIMEOUT),o.delete(t)})},function(e,t,r){const{isNumber:s}=r(2),{ERROR:n,rejectMap:o,oldies:i}=r(3);setInterval=((e,t)=>{if(!s(t)&&t>=0)throw new TypeError("Timeout should be a positive number!");let r,E;const c=new Promise((s,n)=>{E=n,r=i.setInterval(()=>{try{e()}catch(e){n(e),i.clearInterval(r)}},t)}).catch(e=>{if(e!==n.INTERVAL)throw e;i.clearInterval(r)});return o.set(c,E),c}),clearInterval=(e=>{const[t,r]=(()=>e?[e,o.get(e)]:[o.entries()])();if(!r)throw new Error("Unable to find interval promise");r(n.INTERVAL),o.delete(t)})},function(e,t,r){const s=r(14);s.throwsAsync=(async(e,t,r)=>{let n=()=>{};try{await e()}catch(e){n=(()=>{throw e})}finally{s.throws(n,t,r)}}),s.doesNotThrowAsync=(async(e,t,r)=>{let n=()=>{};try{await e()}catch(e){n=(()=>{throw e})}finally{s.doesNotThrow(n,t,r)}})},function(e,t){e.exports=require("assert")},function(e,t,r){const{spec:s,xspec:n}=r(4),{suite:o}=r(5);r(16).init();const i={},E={suite:o.bind(i),describe:o.bind(i),spec:s.bind(i),it:s.bind(i),xspec:n.bind(i),xit:n.bind(i)};Object.assign(global,E),e.exports=E},function(e,t,r){const{EVENT:s,RESULT:n}=r(0),o=r(17),i=r(20),E=r(21),{Spec:c}=r(4),{Suite:a}=r(5);e.exports=new class{init(){this._reporters=[o],a.on(s.SUITE.STARTED,(e,t)=>{i.emit(s.DATABASE.RECORDSET.CREATE,e,t)}),a.on(s.SUITE.HOOKS.REGISTER,(e,t,r)=>{c.emit(s.SPEC.SETUP.REGISTER,e,t),c.emit(s.SPEC.TEARDOWN.REGISTER,e,r)}),a.on(s.SUITE.HOOKS.UNREGISTER,()=>{c.emit(s.SPEC.SETUP.UNREGISTER),c.emit(s.SPEC.TEARDOWN.UNREGISTER)}),c.on(s.SPEC.STARTED,e=>{i.emit(s.DATABASE.RECORD.CREATE,e)}),c.on(s.SPEC.SUCCESS,e=>{i.emit(s.DATABASE.RECORD.UPDATE,e,n.SUCCESS)}),c.on(s.SPEC.IGNORE,e=>{i.emit(s.DATABASE.RECORD.UPDATE,e,n.IGNORED)}),c.on(s.SPEC.FAILURE,(e,t)=>{i.emit(s.DATABASE.RECORD.UPDATE,e,n.FAILURE,t),E.emit(s.PROCESS.EXIT_CODE.FAILURE)}),c.on(s.SPEC.ENDED,e=>{i.emit(s.DATABASE.RECORD.CLOSE,e)}),i.on(s.DATABASE.PROCESS.ENDED,e=>{this._reporters.forEach(t=>{t.emit(s.REPORTER.REPORT.START,e)})}),i.on(s.DATABASE.RECORDSET.CLOSED,e=>{a.emit(s.SUITE.ENDED,e)}),this._reporters.forEach(e=>{e.on(s.REPORTER.REPORT.ENDED,()=>{E.emit(s.PROCESS.EXIT)})})}}},function(e,t,r){const s=r(1),{printDatabase:n}=r(18),{EVENT:o}=r(0);e.exports=new class extends s{constructor(){super(),this.on(o.REPORTER.REPORT.START,async e=>{await n(e),this.emit(o.REPORTER.REPORT.ENDED)})}}},function(e,t,r){const{isFunction:s}=r(2),{TEXT_FORMAT:n}=r(19),{RESULT:o}=r(0),i=(...e)=>{const t=[...e,n.RESET,"\n"];return process.stdout.write(t.map(String).join(""))},E=e=>s(e)?e.name:String(e),c=(e,t,r="")=>{const s={};return e.meta.silent||i(n.BOLD,`${r}${t.toUpperCase()}`,n.RESET,n.YELLOW,` (${e.meta.duration.toFixed(2)}s)`),Object.entries(e).forEach(([E,a])=>{if(!(a.meta&&a.meta.silent||e.meta.silent)){if(a.meta)Object.assign(s,c(a,E,`${r}    `));else{const e=a.duration>1?[n.YELLOW,` (${a.duration.toFixed(2)}s)`]:[];a.result===o.SUCCESS?i(n.GREEN,`${r} ✔ ${E}`,...e):a.result===o.IGNORED?i(n.YELLOW,`${r} - ${E}`,...e):a.result===o.PENDING?i(n.GREY,`${r} . ${E}`,...e):(i(n.RED,`${r} ✕ ${E}`,...e),s[`${t} > ${E}`]=a.payload)}}}),s};e.exports={printDatabase:async e=>{let t={};Object.entries(e).forEach(([e,r])=>{t=c(r,e),i("\n  Duration: ",n.YELLOW,`${r.meta.duration.toFixed(2)}s`)});const r=Object.entries(t);r.length&&(i(n.BOLD,"\nError details:"),r.forEach((e,t)=>{const r=e[0],s=e[1];i(n.BOLD,`\n${t+1}) ${r}`),(e=>{const t=(e=>e.message?e.message:e.toString().split(":").slice(-1)[0])(e);if((e=>"ERR_ASSERTION"===e.code||0===e.toString().indexOf("AssertionError"))(e)){const r=E(e.operator),s=E(e.expected),o=E(e.actual);i(`ASSERTION FAILURE: ${t}`),"fail"===r?i("\tUnexpected:\t",n.RED,`${o}`):!r&&e.expected&&e.actual&&(i("\tExpected:\t",n.GREEN,s),i("\tActual:\t\t",n.RED,o))}else i(`ERROR: ${t}`);i(n.GREY,e.stack)})(s)}))}}},function(e,t){e.exports={TEXT_FORMAT:{RED:"[31m",GREEN:"[32m",YELLOW:"[33m",RESET:"[0m",BOLD:"[1m",GREY:"[90m"}}},function(e,t,r){const s=r(1),{EVENT:n,RESULT:o,RESULTS:i}=r(0);class E extends s{static create(e,t,r){const[s,n]=t.split(/\.(.*)/);return n?(e[s]=e[s]||{},E.create(e[s],n,r)):(e[s]=r,e)}static open(e,t){const[r,s]=t.split(/\.(.*)/);return s?E.open(e[r],s):e[r]}static parent(e,t){const[r,s]=t.split(/\.(.*)/);return s?E.parent(e[r],s):e}constructor(){super(),this._recordsets={},this._processed=0,this._created=0,this.on(n.DATABASE.RECORDSET.CREATE,this.createRecordset),this.on(n.DATABASE.RECORD.CREATE,this.createRecord),this.on(n.DATABASE.RECORD.UPDATE,this.updateRecord),this.on(n.DATABASE.RECORD.CLOSE,this.closeRecord)}createRecordset(e,t){const r={duration:process.hrtime(),processed:0,path:e,silent:t};E.create(this._recordsets,e,Object.defineProperty({},"meta",{value:r}))}createRecord(e){if(!e)throw new TypeError("Missing record path!");if(!E.parent(this._recordsets,e))throw new TypeError(`Missing or null records list for ${e}`);this._created+=1,E.create(this._recordsets,e,{result:o.PENDING,payload:null,duration:process.hrtime()})}updateRecord(e,t,r){if(!i.includes(t))throw new TypeError(`Result should be one of ${i.join()}. Got ${t}.`);const s=E.open(this._recordsets,e);if(!s)throw new TypeError(`Missing or null records list for ${e}`);s.result=t,s.payload=r}closeRecord(e){setImmediate(()=>{this._processed+=1;const t=this._processed===this._created,r=E.parent(this._recordsets,e);r.meta.processed+=1;const s=Object.values(r).filter(e=>!e.meta).length,o=r.meta.processed===s;if(t)r.meta.duration=Number.parseFloat(process.hrtime(r.meta.duration).join(".")),this.emit(n.DATABASE.PROCESS.ENDED,this._recordsets);else if(o)r.meta.duration=Number.parseFloat(process.hrtime(r.meta.duration).join(".")),this.emit(n.DATABASE.RECORDSET.CLOSED,r.meta.path);else{const t=E.open(this._recordsets,e);t.duration=Number.parseFloat(process.hrtime(t.duration).join("."))}})}}e.exports=new E},function(e,t,r){const s=r(1),{EVENT:n}=r(0);e.exports=new class extends s{constructor(){super(),this._exitCode=0,this.on(n.PROCESS.EXIT,()=>{process.exit(this._exitCode)}),this.on(n.PROCESS.EXIT_CODE.FAILURE,()=>{this._exitCode=1})}}}]));