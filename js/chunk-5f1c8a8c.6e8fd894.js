(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f1c8a8c"],{"261e":function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));n("e18c");var r=n("be3b");function o(t,e){return new Promise((function(n,o){r["a"].get(t,{params:e}).then((function(t){n(t.data)})).catch((function(t){o(t.data)}))}))}function i(t,e){return new Promise((function(n,o){r["a"].post(t,e).then((function(t){n(t.data)})).catch((function(t){o(t.data)}))}))}function a(t,e){return new Promise((function(n,o){r["a"].put(t,e).then((function(t){n(t.data)})).catch((function(t){o(t.data)}))}))}var c=function(t){return i("/api/app/login",t)},u=function(t){return i("/api/app/smsCode",t)},s=function(t){return i("/api/app/password",t)},l=function(t){return o("/api/app/userInfo",t)},f=function(t){return a("/api/app/user",t)},h=function(t){return o("/api/app/banner",t)}},"327b":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("e18c");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"6a61":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new $(r||[]);return i._invoke=E(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function v(){}function y(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==n&&r.call(x,i)&&(w=x);var _=g.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return N()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),u(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"6d89":function(t,e,n){},e698:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smsLogin"},[t._m(0),n("van-form",{on:{submit:t.onSubmit}},[n("div",{staticClass:"yan"},[n("van-field",{attrs:{name:"用户名",label:"",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],on:{click:t.sms}},[t._v("获取验证码")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticStyle:{color:"#ccc"}},[t._v("获取验证码 ("+t._s(t.count)+")")])],1),n("van-field",{attrs:{name:"验证码",label:"",placeholder:"请输入短信验证码"},model:{value:t.sms_code,callback:function(e){t.sms_code=e},expression:"sms_code"}}),n("div",{staticClass:"pass"},[n("span",{staticStyle:{color:"#b7b7b7"}},[t._v("*未注册的手机号将自动注册")]),n("span",{staticStyle:{color:"#999"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("使用密码登录")])]),n("div",{staticStyle:{margin:"0.3rem"}},[n("van-button",{attrs:{round:"",block:"",type:"warning","native-type":"submit"}},[t._v("登录")])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],i=(n("6a61"),n("327b")),a=n("261e"),c={name:"",props:[],components:{},data:function(){return{mobile:"",sms_code:"",type:2,sms_type:"",client:1,flag:!1,count:""}},computed:{},watch:{},methods:{onSubmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=/^1[3|4|5|7|8][0-9]{9}$/,o=/^[0-9]{6}$/,!r.test(e.mobile)){n.next=13;break}if(!o.test(e.sms_code)){n.next=10;break}return n.next=6,Object(a["d"])({mobile:e.mobile,sms_code:e.sms_code,client:e.client,type:e.type});case 6:i=n.sent,200==i.code&&(sessionStorage.setItem("token",i.data.remember_token),e.$toast.success("登录成功"),1==i.data.is_new?e.$router.push("/setPassword"):2==i.data.is_new&&e.$router.push("/person")),n.next=11;break;case 10:e.$toast("验证码必须是6位的数字");case 11:n.next=14;break;case 13:e.$toast("请输入正确的手机号");case 14:console.log("submit",t),console.log(res);case 16:case"end":return n.stop()}}),n)})))()},sms:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/^1[3|4|5|7|8][0-9]{9}$/,!n.test(t.mobile)||""==t.mobile){e.next=8;break}return e.next=4,Object(a["f"])({mobile:t.mobile,sms_type:"login"});case 4:r=e.sent,200==r.code&&(t.$toast.success("发送成功"),o=60,t.count=o,t.flag=!0,setInterval((function(){t.count>0&&t.count<=o?t.count--:t.flag=!1}),1e3)),e.next=9;break;case 8:t.$toast("请输入正确的手机号");case 9:case"end":return e.stop()}}),e)})))()}},created:function(){},mounted:function(){}},u=c,s=(n("f887"),n("2c07")),l=Object(s["a"])(u,r,o,!1,null,"1c837a09",null);e["default"]=l.exports},f887:function(t,e,n){"use strict";n("6d89")}}]);
//# sourceMappingURL=chunk-5f1c8a8c.6e8fd894.js.map