(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{422:function(e,t,r){var content=r(451);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("05fb31c0",content,!0,{sourceMap:!1})},450:function(e,t,r){"use strict";r(422)},451:function(e,t,r){(t=r(13)(!1)).push([e.i,"a[data-v-710b453b]{text-decoration:none}",""]),e.exports=t},515:function(e,t,r){"use strict";r.r(t);r(46);var n=r(4),o={name:"Login",data:function(){return{snackbar:!1,timeout:2e3,text:null,login:{username:"",password:""},loading:!1,register:{name:"",username:"",password:"",email:""}}},methods:{showError:function(e){this.text=e,this.snackbar=!0},doRegister:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$sdk.User.register(e.register);case 4:if(!(r=t.sent).error){t.next=7;break}throw new Error(r.error);case 7:return e.login.username=e.register.username,e.login.password=e.register.password,t.next=11,e.doLogin();case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e.showError(t.t0.message);case 16:return t.prev=16,e.loading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))()},doLogin:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$sdk.User.login(e.login);case 4:if(!(r=t.sent).error){t.next=7;break}throw new Error(r.error);case 7:e.$router.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.showError(t.t0.mesage);case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}}},l=(r(450),r(78)),c=r(118),d=r.n(c),v=r(141),m=r(94),f=r(109),x=r(508),w=r(518),k=r(419),_=r(414),h=r(509),y=r(408),V=r(270),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{align:"center",justify:"center",fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[e._v("Login")]),e._v(" "),r("v-list-item-subtitle",[e._v("Sign in to your chat account")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"username",label:"Username"},model:{value:e.login.username,callback:function(t){e.$set(e.login,"username",t)},expression:"login.username"}}),e._v(" "),r("v-text-field",{attrs:{type:"password",name:"password",label:"Password"},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{loading:e.loading,text:"",color:"accent"},on:{click:e.doLogin}},[e._v("LOGIN")])],1)],1)],1),e._v(" "),r("v-col",{attrs:{md:"4","offset-md":"1"}},[r("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[e._v("Register")]),e._v(" "),r("v-list-item-subtitle",[e._v("Create your new account")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"name",label:"Full name"},model:{value:e.register.name,callback:function(t){e.$set(e.register,"name",t)},expression:"register.name"}}),e._v(" "),r("v-text-field",{attrs:{type:"text",name:"username",label:"Username"},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}}),e._v(" "),r("v-text-field",{attrs:{type:"email",name:"email",label:"Email Address"},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}}),e._v(" "),r("v-text-field",{attrs:{type:"password",name:"password",label:"Password"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",loading:e.loading,color:"secondary"},on:{click:e.doRegister}},[e._v("REGISTER")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{timeout:e.timeout,top:"",center:""},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[r("v-btn",e._b({attrs:{color:"accent",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v("\n        Close\n      ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n\n    ")])],1)}),[],!1,null,"710b453b",null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCol:x.a,VContainer:w.a,VListItem:k.a,VListItemContent:_.b,VListItemSubtitle:_.c,VListItemTitle:_.d,VRow:h.a,VSnackbar:y.a,VTextField:V.a})}}]);