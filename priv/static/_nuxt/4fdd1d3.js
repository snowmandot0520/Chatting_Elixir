(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{416:function(e,t,n){"use strict";n.r(t);n(25),n(20);var r={name:"TextAvatar",props:{profile:{type:String,default:""},name:{type:String,default:""},size:{type:Number,default:128},left:{type:Boolean,default:!1}},data:function(){return{colors:["#b71c1c","#d32f2f","#d81b60","#7b1fa2","#512da8","#546e7a","#bb4d00","#387002","#00701a","#004d40"]}},computed:{color:function(){return this.colors[this.displayName.charCodeAt(0)%this.colors.length]},displayName:function(){var e;return((null===(e=this.name)||void 0===e?void 0:e.substring(0,1))||"p").toUpperCase()},fontSize:function(){return this.size/2.5+"px"}}},o=n(78),l=n(118),c=n.n(l),d=n(426),m=n(255),v=n(509),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-avatar",{attrs:{color:e.color,size:e.size,left:e.left}},[n("v-img",{attrs:{src:e.profile},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("span",{staticClass:"white--text",style:{fontSize:e.fontSize}},[e._v(e._s(e.displayName))])])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAvatar:d.a,VImg:m.a,VRow:v.a})},427:function(e,t,n){var content=n(468);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("232d6859",content,!0,{sourceMap:!1})},428:function(e,t,n){var content=n(472);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("791f31a2",content,!0,{sourceMap:!1})},429:function(e,t,n){var content=n(474);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("ca2cc438",content,!0,{sourceMap:!1})},430:function(e,t,n){var content=n(478);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("7914c824",content,!0,{sourceMap:!1})},432:function(e,t,n){var content=n(482);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("81448c96",content,!0,{sourceMap:!1})},438:function(e,t,n){var content=n(494);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("42521e0d",content,!0,{sourceMap:!1})},439:function(e,t,n){"use strict";n.r(t);n(83),n(265),n(30),n(49),n(71);var r=n(16),o={name:"MessageInput",components:{VEmojiPicker:n(499).a},data:function(){return{message:"",isEmojiVisible:!1}},methods:{closeConditional:function(){return!this.isEmojiVisible},toggleEmoji:function(){this.isEmojiVisible=!this.isEmojiVisible},selectEmoji:function(e){this.message+=e.data},sendMessage:function(e){if(!e.shiftKey){e.preventDefault();var t=this.message;""===(t=t.split("\n"))[t.length-1].trim()&&t.splice(t.length-1,1),(t=t.join("\n")).length&&(this.$emit("send",t),this.message="")}},onFilePicked:function(e){var t=Object(r.a)(e.target.files,1)[0];t&&this.$emit("attachment",t)}}},l=(n(467),n(78)),c=n(118),d=n.n(c),m=n(509),v=n(510),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"input-row"},[n("VEmojiPicker",{directives:[{name:"show",rawName:"v-show",value:e.isEmojiVisible,expression:"isEmojiVisible"}],staticClass:"emoji-selector",on:{select:e.selectEmoji}}),e._v(" "),n("v-textarea",{staticClass:"message-input",attrs:{label:"Enter your message...",outlined:"",filled:"",dense:"","append-outer-icon":"mdi-send",shaped:"","prepend-icon":"mdi-emoticon","prepend-inner-icon":"mdi-paperclip",clearable:"","single-line":"",rows:"1"},on:{"click:prepend":e.toggleEmoji,"click:append-outer":e.sendMessage,"click:prepend-inner":function(t){return e.$refs.image.click()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}})],1)}),[],!1,null,"f51e8dec",null);t.default=component.exports;d()(component,{VRow:m.a,VTextarea:v.a})},440:function(e,t,n){"use strict";n.r(t);var r=n(443),o=n(444),l=n(445),c={name:"Conversation",components:{Message:r.default,ChatToolbar:l.default,EmptyConversation:o.default},props:{title:{type:String,default:null},subtitle:{type:String,default:""},members:{type:Array,default:function(){return[]}},messages:{type:Array,default:function(){return[]}}},data:function(){return{height:0}},watch:{messages:function(e){var t=this.$refs.messages,n=null==t?void 0:t.$children;null!=n&&n.length&&t.$el.clientHeight+t.$el.scrollTop===t.$el.scrollHeight&&this.$nextTick((function(){var e=n[n.length-1];null==e||e.$el.scrollIntoView()}))}},methods:{onInvite:function(){this.$emit("invite")},onDelete:function(){this.$emit("delete")},onBlock:function(){this.$emit("block")},onKick:function(){this.$emit("kick")},onExit:function(){this.$emit("exit")}}},d=(n(477),n(78)),m=n(118),v=n.n(m),f=n(518),h=n(431),x=n(423),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[e.title?n("div",[n("chat-toolbar",{attrs:{title:e.title,subtitle:e.subtitle,view:e.members.length?"group":"user"},on:{invite:e.onInvite,kick:e.onKick,delete:e.onDelete,block:e.onBlock,exit:e.onExit}}),e._v(" "),n("v-divider"),e._v(" "),n("v-list",{ref:"messages",staticClass:"messages"},e._l(e.messages,(function(e){return n("message",{key:e.title,attrs:{title:e.title,subtitle:e.subtitle,right:e.self,sender:e.sender,type:e.type}})})),1)],1):n("empty-conversation")],1)}),[],!1,null,"47600f3b",null);t.default=component.exports;v()(component,{EmptyConversation:n(444).default,ChatToolbar:n(445).default,Message:n(443).default}),v()(component,{VContainer:f.a,VDivider:h.a,VList:x.a})},441:function(e,t,n){"use strict";n.r(t);n(119),n(265),n(25),n(20);var r={components:{TextAvatar:n(416).default},props:{group:{type:Object,default:null},opened:{type:Boolean,default:!1},operation:{type:Number,default:0},contacts:{type:Array,default:function(){return[]}}},data:function(){return{dialogModel:!1,valid:!1,defaultName:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=4||"Name must be more than 3 characters"}],members:{model:[],search:null,rules:[function(e){return e.length>=1||"Must have at least 1 member"}]},supportedOperations:[{title:"Create Group",operation:"create"},{title:"Kick Member",operation:"kick"},{title:"Invite Member",operation:"invite"}]}},computed:{name:{get:function(){var e;return(null===(e=this.group)||void 0===e?void 0:e.info.name)||this.defaultName},set:function(e){this.defaultName=e}},disabled:function(){return!!this.group},dialog:{get:function(){return this.opened||this.dialogModel},set:function(e){this.dialogModel=e}}},watch:{opened:function(e){e||(this.dialogModel=e)}},methods:{open:function(){this.dialog=!0,this.$emit("open",this.operation)},close:function(){var e,t=this;null===(e=this.$refs.form)||void 0===e||e.reset(),this.$emit("close"),this.$nextTick((function(){t.dialogModel&&(t.dialogModel=!1)}))},remove:function(e){var t=this.members.model.indexOf(e);t>=0&&this.members.model.splice(t,1)},submit:function(){var e,t;if(null!==(e=this.$refs.form)&&void 0!==e&&e.validate()){var n=this.supportedOperations[this.operation].operation;this.$emit(n,{members:this.members.model,name:this.defaultName||(null===(t=this.group)||void 0===t?void 0:t.info.name)}),this.close()}}}},o=(n(481),n(78)),l=n(118),c=n.n(l),d=n(514),m=n(141),v=n(94),f=n(436),h=n(508),x=n(404),w=n(512),k=n(110),y=n(419),M=n(425),_=n(414),V=n(509),C=n(406),$=n(270),j=n(144),S=n(266),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-list-item",{attrs:{ripple:!1},on:{click:function(t){return t.stopPropagation(),e.open()}}},[e._t("icon")],2),e._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.close()}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.supportedOperations[e.operation].title))]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-form",{ref:"form",staticClass:"mt-4 ms-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"5"}},[n("v-text-field",{attrs:{counter:40,rules:e.nameRules,label:"Group Name",required:"",outlined:"",shaped:"",disabled:e.disabled},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"8"}},[n("v-autocomplete",{attrs:{items:e.contacts,filled:"",chips:"",color:"blue-grey lighten-2",label:"Members",multiple:"","deletable-chips":"",rules:e.members.rules},scopedSlots:e._u([{key:"selection",fn:function(data){return[n("v-chip",e._b({attrs:{"input-value":data.selected,close:""},on:{click:data.select,"click:close":function(t){return e.remove(data.item)}}},"v-chip",data.attrs,!1),[n("text-avatar",{attrs:{size:16,name:data.item,left:""}}),e._v("\n                  "+e._s(data.item)+"\n                ")],1)]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-item-content",{domProps:{textContent:e._s(data.item)}})]:[n("v-list-item-avatar",[n("text-avatar",{attrs:{size:36,name:data.item}})],1),e._v(" "),n("v-list-item-content",{staticClass:"ms-2"},[n("v-list-item-title",[e._v(e._s(data.item))])],1)]]}}]),model:{value:e.members.model,callback:function(t){e.$set(e.members,"model",t)},expression:"members.model"}})],1)],1),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:function(t){return e.submit()}},scopedSlots:e._u([{key:"loader",fn:function(){return[n("span",{staticClass:"custom-loader"},[n("v-icon",[e._v("mdi-cached")])],1)]},proxy:!0}])},[e._v("\n            "+e._s(e.supportedOperations[e.operation].title)+"\n            ")])],1)],1)],1)],1)],1)}),[],!1,null,"430f21ed",null);t.default=component.exports;c()(component,{TextAvatar:n(416).default}),c()(component,{VAutocomplete:d.a,VBtn:m.a,VCard:v.a,VChip:f.a,VCol:h.a,VDialog:x.a,VForm:w.a,VIcon:k.a,VListItem:y.a,VListItemAvatar:M.a,VListItemContent:_.b,VListItemTitle:_.d,VRow:V.a,VSpacer:C.a,VTextField:$.a,VToolbar:j.a,VToolbarTitle:S.a})},442:function(e,t,n){"use strict";n.r(t);n(41),n(25),n(30),n(271),n(27),n(46);var r=n(4),o={data:function(){return{search:null,model:null,isLoading:!1,searchResults:[]}},watch:{search:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=null,o=!1;return function(){if(!o){n&&clearTimeout(n);var l=this,c=arguments;n=setTimeout(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=!0,t.next=3,e.apply(l,c);case 3:o=!1;case 4:case"end":return t.stop()}}),t)}))),t)}}}(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<=3||this.isLoading||t===(null===(n=this.model)||void 0===n?void 0:n.name))){e.next=2;break}return e.abrupt("return");case 2:return this.isLoading=!0,e.next=5,this.$sdk.User.search(t);case 5:r=e.sent,this.isLoading=!1,r.error,this.searchResults=r.results.map((function(e){return{username:e.username,name:e.name,type:"user"}}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())},methods:{select:function(e){null!=e&&e.username&&this.$emit("select",{title:e.name,subtitle:e.username,id:e.username})}}},l=n(78),c=n(118),d=n.n(c),m=n(514),v=n(425),f=n(414),h=n(152),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-scale-transition",{attrs:{origin:"right center 0"}},[n("v-autocomplete",{staticClass:"autocomplete",attrs:{loading:e.isLoading,items:e.searchResults,"search-input":e.search,flat:"","hide-details":"",label:"Search...","solo-inverted":"","hide-no-data":"","item-text":"name","item-value":"username","return-object":"",dense:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"item",fn:function(t){var r=t.item;return[n("v-list-item-avatar",[n("text-avatar",{attrs:{name:r.name,size:24}})],1),e._v(" "),n("v-list-item-content",{on:{click:function(t){return e.select(r)}}},[n("v-list-item-title",{staticClass:"search-title"},[e._v(e._s(r.name))]),e._v(" "),n("v-list-item-subtitle",[e._v(" @"+e._s(r.username)+" ")])],1)]}}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{TextAvatar:n(416).default}),d()(component,{VAutocomplete:m.a,VListItemAvatar:v.a,VListItemContent:f.b,VListItemSubtitle:f.c,VListItemTitle:f.d,VScaleTransition:h.d})},443:function(e,t,n){"use strict";n.r(t);var r={name:"Message",props:{title:{type:String,default:""},subtitle:{type:String,default:""},sender:{type:String,default:""},right:{type:Boolean,default:!1},type:{type:String,default:"text"}},computed:{rtlCSS:function(){return(this.right?"right":"left")+" message-container"}}},o=(n(471),n(78)),l=n(118),c=n.n(l),d=n(419),m=n(425),v=n(414),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{class:e.rtlCSS},[e.sender?n("v-list-item-avatar",{staticClass:"user-avatar mb-6"},[n("text-avatar",{attrs:{name:e.sender,size:32}})],1):e._e(),e._v(" "),n("v-list-item-content",{staticClass:"message-content"},[e.title?n("v-list-item-title",{staticClass:"user-name"},[e._v(e._s(e.title))]):e._e(),e._v(" "),"text"===e.type?n("div",{staticClass:"speech-bubble"},[n("v-list-item-subtitle",{staticClass:"user-message"},[e._v(e._s(e.subtitle))])],1):"image"===e.type?n("v-list-item-subtitle",{staticClass:"user-image"},[n("img",{attrs:{src:e.subtitle}})]):e._e()],1)],1)}),[],!1,null,"3124620a",null);t.default=component.exports;c()(component,{TextAvatar:n(416).default}),c()(component,{VListItem:d.a,VListItemAvatar:m.a,VListItemContent:v.b,VListItemSubtitle:v.c,VListItemTitle:v.d})},444:function(e,t,n){"use strict";n.r(t);var r={name:"EmptyConversation"},o=(n(473),n(78)),l=n(118),c=n.n(l),d=n(518),m=n(110),v=n(509),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{staticClass:"empty-container",attrs:{fluid:""}},[t("v-row",{staticClass:"centered",attrs:{"no-gutters":""}},[t("v-icon",{attrs:{size:"600%"}},[this._v(" mdi-chat-plus-outline ")]),this._v("\n    Start a conversation by selecting a chat or use the search bar above\n  ")],1)],1)}),[],!1,null,"c0e73760",null);t.default=component.exports;c()(component,{VContainer:d.a,VIcon:m.a,VRow:v.a})},445:function(e,t,n){"use strict";n.r(t);n(70);var r={components:{TextAvatar:n(416).default},props:{title:{type:String,default:""},subtitle:{type:String,default:""},view:{type:String,default:"user"}},data:function(){var e=this,t=function(){var t=e.$sdk.Connection.username;return"group"===e.view&&e.$sdk.Managers.Groups.active.info.admin===t};return{links:{group:[{title:"Invite",onclick:function(){return e.$emit("invite")},canShow:t},{title:"Kick Member(s)",onclick:function(){return e.$emit("kick")},canShow:t},{title:"Delete Group",onclick:function(){return e.$emit("delete")},canShow:t},{title:"Exit Group",onclick:function(){return e.$emit("exit")},canShow:function(){return!0}}],user:[]}}},computed:{toolbarLinks:function(){return this.links[this.view].filter((function(e){return(0,e.canShow)()}))}}},o=n(78),l=n(118),c=n.n(l),d=n(511),m=n(141),v=n(110),f=n(423),h=n(419),x=n(414),w=n(447),k=n(406),y=n(144),M=n(266),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{color:"primary"}},[n("v-app-bar-nav-icon",[n("text-avatar",{attrs:{size:42,name:e.title}})],1),e._v(" "),n("v-toolbar-title",[n("div",{staticClass:"text-body-1"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"text-caption"},[e._v(e._s(e.subtitle))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),n("v-list",e._l(e.toolbarLinks,(function(t){return n("v-list-item",{key:t.title},[n("v-list-item-title",{on:{click:function(e){return t.onclick()}}},[e._v(e._s(t.title))])],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{TextAvatar:n(416).default}),c()(component,{VAppBarNavIcon:d.a,VBtn:m.a,VIcon:v.a,VList:f.a,VListItem:h.a,VListItemTitle:x.d,VMenu:w.a,VSpacer:k.a,VToolbar:y.a,VToolbarTitle:M.a})},467:function(e,t,n){"use strict";n(427)},468:function(e,t,n){(t=n(13)(!1)).push([e.i,".message-input[data-v-f51e8dec]{max-height:60vh;overflow-y:auto;overflow-x:hidden}.emoji-selector[data-v-f51e8dec]{position:absolute;margin-top:-32%;z-index:99999}",""]),e.exports=t},471:function(e,t,n){"use strict";n(428)},472:function(e,t,n){(t=n(13)(!1)).push([e.i,'.message-container[data-v-3124620a]{max-width:50vw;overflow:hidden}.right.message-container[data-v-3124620a]{align-self:flex-end}.user-image img[data-v-3124620a]{width:25vw;height:25vw}.user-name[data-v-3124620a]{font-size:14px;color:var(--v-primary-lighten1);align-self:flex-start}.message-content[data-v-3124620a]{flex:initial;flex-wrap:nowrap;flex-direction:column;overflow:visible;align-items:flex-start}.speech-bubble[data-v-3124620a]{position:relative;border-radius:.4em}.user-message[data-v-3124620a]{background-color:var(--v-primary-base);padding-top:8px;padding-bottom:8px;white-space:pre-wrap;word-break:break-all}.user-avatar[data-v-3124620a]{align-self:flex-start}.left .user-message[data-v-3124620a]{padding-left:10px;padding-right:18px;border-radius:0 10px 10px 10px}.left .speech-bubble[data-v-3124620a]:after{content:"";position:absolute;left:0;top:0;width:0;height:0;border:20px solid transparent;border-right:20px solid var(--v-primary-base);border-left:0;border-top:0;margin-left:-12px}.right[data-v-3124620a]{flex-direction:row-reverse}.right .message-content[data-v-3124620a]{text-align:right;margin-right:12px}.right .speech-bubble[data-v-3124620a],.right .user-name[data-v-3124620a]{align-self:flex-end}.right .user-message[data-v-3124620a]{align-self:flex-end;text-align:right;padding-left:18px;padding-right:10px;border-radius:10px 0 10px 10px;margin-right:6px}.right .speech-bubble[data-v-3124620a]:after{content:"";position:absolute;right:0;top:0;width:0;height:0;border:30px solid transparent;border-left:30px solid var(--v-primary-base);border-right:0;border-top:0;margin-right:-15px}.right .user-avatar[data-v-3124620a]{margin-right:0;margin-left:6px}',""]),e.exports=t},473:function(e,t,n){"use strict";n(429)},474:function(e,t,n){(t=n(13)(!1)).push([e.i,".empty-container[data-v-c0e73760]{height:100vh;justify-content:center;flex-direction:column}.centered[data-v-c0e73760],.empty-container[data-v-c0e73760]{display:flex;align-items:center}.centered[data-v-c0e73760]{flex-direction:column;flex:0 1 auto}",""]),e.exports=t},477:function(e,t,n){"use strict";n(430)},478:function(e,t,n){(t=n(13)(!1)).push([e.i,".messages[data-v-47600f3b]{background-color:transparent;overflow-y:auto;max-height:76vh;display:flex;flex-direction:column}",""]),e.exports=t},481:function(e,t,n){"use strict";n(432)},482:function(e,t,n){(t=n(13)(!1)).push([e.i,".v-list-item[data-v-430f21ed]{margin-left:0;margin-right:0;padding-left:0;padding-right:0;flex:1}.v-list-item .v-avatar[data-v-430f21ed]{margin-left:auto;margin-right:auto;padding:0}.custom-loader[data-v-430f21ed]{-webkit-animation:loader-data-v-430f21ed 1s infinite;animation:loader-data-v-430f21ed 1s infinite;display:flex}@-webkit-keyframes loader-data-v-430f21ed{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader-data-v-430f21ed{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]),e.exports=t},493:function(e,t,n){"use strict";n(438)},494:function(e,t,n){(t=n(13)(!1)).push([e.i,".unread[data-v-6865d5e4]{border-left:1px solid var(--v-primary-base)}.nav-container[data-v-6865d5e4]{flex-wrap:nowrap}.autocomplete[data-v-6865d5e4]{max-width:90%;margin:0 auto!important}.icon-row[data-v-6865d5e4]{display:flex;flex-direction:column;padding:0}.icon-row .v-list-item[data-v-6865d5e4]{margin-left:0;margin-right:0;padding-left:0;padding-right:0;flex:1}.icon-row .v-list-item .v-avatar[data-v-6865d5e4]{margin-left:auto;margin-right:auto;padding:0}.column[data-v-6865d5e4]{padding:0}.chat[data-v-6865d5e4]{background-color:#36393f;flex:1 1;max-width:100%;display:flex;flex-direction:column}.chat .message-list[data-v-6865d5e4]{flex:1 0;padding:0;overflow:hidden}.chat .message-input[data-v-6865d5e4]{flex:0 0 90%}.chat .message-container[data-v-6865d5e4]{min-height:15%;max-height:60%;background:#202225;display:flex;align-items:flex-end}",""]),e.exports=t},516:function(e,t,n){"use strict";n.r(t);n(23),n(70),n(80),n(32),n(41),n(120),n(25),n(17),n(51),n(42),n(81),n(274);var r=n(2),o=n(16),l=(n(46),n(4)),c=n(416),d=n(439),m=n(440),v=n(441),f=n(442);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:{MessageInput:d.default,Conversation:m.default,CreateGroup:v.default,TextAvatar:c.default,SearchBar:f.default},middleware:"authenticated",asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,d,m,v,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,r=e.$sdk,o=e.redirect,(c=n.state.app.userInfo.username)||(d=new URL(window.location.href),c=d.searchParams.get("user")),m={username:c},!c){t.next=11;break}return r.Connection.connect(c),t.next=8,new Promise((function(e){r.Connection.addListener("connect",function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Managers.Users.load();case 2:return t.next=4,r.Managers.Groups.load();case 4:e(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 8:v=t.sent,f=v.name,m.name=f;case 11:if(c){t.next=15;break}return t.next=14,r.User.logout();case 14:return t.abrupt("return",o("/login"));case 15:return t.abrupt("return",m);case 16:case"end":return t.stop()}}),t)})))()},data:function(){var e,t,n,r=this,c=this.$sdk;return{conversation:{title:null,subtitle:null,members:[],messages:[]},activeView:"user",channels:[],groups:[],fileTransfers:{},drawer:!1,groupManagementPopup:{group:null,opened:!1,operation:0,contacts:c.Managers.Users.listContacts().map((function(e){return Object(o.a)(e,1)[0]})),onCreate:(n=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,o=t.members,e.next=3,c.Managers.Groups.create(n,o);case 3:r.updateView(),r.groupManagementPopup.opened=!1;case 5:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),onKick:(t=Object(l.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.members,e.next=3,c.Managers.Groups.active.kick(n);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)}),onInvite:(e=Object(l.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.members,e.next=3,c.Managers.Groups.active.invite(n);case 3:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)}),onOpen:function(e){var t,n=(null===(t=c.Managers.Groups.active)||void 0===t?void 0:t.members.map((function(e){return e.user_id})))||[],l=c.Managers.Users.listContacts().map((function(e){return Object(o.a)(e,1)[0]}));switch(e){case 0:r.groupManagementPopup.contacts=l;break;case 1:r.groupManagementPopup.contacts=n;break;case 2:r.groupManagementPopup.contacts=l.filter((function(e){return!n.includes(e)}))}}}}},mounted:function(){var e=this;if(this.username){var t=this.$sdk;t.Message.onNewMessageHandler(this.onNewMessage.bind(this)),t.Managers.Groups.onNewGroupHandler(this.onNewGroup.bind(this)),t.Managers.Groups.onModelUpdate((function(){"group"!==e.activeView||t.Managers.Groups.active?e.updateView({message:!1}):(e.activeView="user",e.conversation.title=null,e.updateView())})),t.File.addListener("onFileSend",this.onFileSend.bind(this)),t.File.addListener("onFileReceive",this.onFileReceive.bind(this)),this.updateView()}},methods:{onFileSend:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.fileTransfers[e.receipient],delete t.fileTransfers[e.receipient],!e.error){n.next=5;break}return t.$dialog.notify.warning("P2P: Error while sending file to ".concat(e.receipient,": ").concat(e.error.message,"\n           \n           To save server resources we perform on-demand connection. Try sending a message to\n           initiate a connection which will connect the user if he is online\n          "),{position:"top-right",timeout:5e3}),n.abrupt("return");case 5:return n.next=7,t.$sdk.File.send(r,e.instance,e.receipient);case 7:o=n.sent,t.$sdk.Managers.Users.addMessage({timestamp:Date.now(),message:new Blob(o),sender:t.username,channel:e.receipient,name:t.name,type:"image"});case 10:case"end":return n.stop()}}),n)})))()},onFileReceive:function(e){var t=this;if(e.error instanceof window.RTCErrorEvent){if(0===e.error.error.code)return;e.error=e.error.error}if(e.error)this.$dialog.notify.warning("P2P: Error while receiving file from ".concat(e.sender,": ").concat(e.error.message),{position:"top-right",timeout:5e3});else{var n=[];e.instance.connection.on("close",(function(){t.$sdk.Managers.Users.addMessage({timestamp:Date.now(),message:new Blob(n),sender:e.sender,channel:e.sender,type:"image"})})),e.instance.connection.on("data",(function(data){n.push(data)}))}},getUnread:function(e){var t=this.$sdk,n=0;if(e){var r=t.Managers.Groups.getGroupById(e);n=(null==r?void 0:r.listChannels().reduce((function(e,t){return e+t.unread}),n))||0}else n=t.Managers.Users.listChannels().reduce((function(e,t){return e+t.unread}),n);return n>10?"10+":n},updateView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:!0,channels:!0,groups:!0};!1!==e.groups&&this.updateGroups(),!1!==e.channels&&this.updateChannels(),!1!==e.messages&&this.updateMessages()},updateGroups:function(){var e=this.$sdk;this.groups=e.Managers.Groups.listGroups()},updateChannels:function(){var e,t=this.$sdk;this.channels=("user"===this.activeView?t.Managers.Users.listChannels():null===(e=t.Managers.Groups.active)||void 0===e?void 0:e.listChannels())||[]},updateMessages:function(){var e,t=this.$sdk;this.conversation.messages=("user"===this.activeView?t.Managers.Users.messages:null===(e=t.Managers.Groups.active)||void 0===e?void 0:e.messages)||[]},setGroupView:function(e){this.$sdk.Managers.Groups.active=e.id,this.activeView="group",this.setActiveChannel({title:e.name,id:e.id}),this.updateView()},setUserView:function(){this.activeView="user";var e=this.$sdk,t=e.Managers.Users.channel;t&&(t=e.Managers.Users.listChannels().find((function(e){return e.id===t}))),t&&this.setActiveChannel(t),this.updateView()},setActiveChannel:function(e){var t=this.$sdk;if("user"===this.activeView)t.Managers.Users.addChannel(e.id,e.title),t.Managers.Users.channel=e.id,this.conversation.title=e.title,this.conversation.subtitle="@".concat(e.subtitle),this.conversation.members=[];else{t.Managers.Groups.active.channel=e.id,this.conversation.title=e.title;var n=t.Managers.Groups.active.members;this.conversation.subtitle="".concat(n.length," members"),this.conversation.members=n}this.updateView()},onNewGroup:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.group,o=t.$sdk,n.next=4,o.Managers.Groups.add(r);case 4:t.updateView();case 5:case"end":return n.stop()}}),n)})))()},onNewMessage:function(body){var e=this.$sdk,t=body.group?body.group:body.sender;body.group?e.Managers.Groups.addMessage(body,body.group):(body=x(x({},body),{},{channel:t}),e.Managers.Users.addMessage(body));var n=!1;n="user"===this.activeView?e.Managers.Users.channel===body.channel:e.Managers.Groups.active.info.id===body.group,this.updateView({messages:!n})},sendMessage:function(e){var t=this.$sdk;if("user"===this.activeView){var n=t.Managers.Users.channel;t.Managers.Users.addMessage({timestamp:Date.now(),message:e,sender:this.username,channel:n,name:this.name}),t.Message.user(t.Managers.Users.channel,e)}else t.Message.group(t.Managers.Groups.active.info.id,e);this.updateView({messages:!1})},openGroup:function(){this.groupManagementPopup.opened=!0,this.groupManagementPopup.onOpen(this.groupManagementPopup.operation)},onInvite:function(){var e=this.$sdk;this.groupManagementPopup.group=e.Managers.Groups.active,this.groupManagementPopup.operation=2,this.openGroup()},onDelete:function(){},onBlock:function(){var e=this.$sdk;e.User.block(e.Managers.Users.channel)},onKick:function(){var e=this.$sdk;this.groupManagementPopup.group=e.Managers.Groups.active,this.groupManagementPopup.operation=1,this.openGroup()},onExit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$sdk,r=n.Managers.Groups.active,e.username!==r.info.admin){t.next=10;break}return t.next=5,e.$dialog.confirm({text:"Since you are an admin, the group will also be deleted. Do you want to proceed?",title:"Warning"});case 5:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:t.next=15;break;case 10:return t.next=12,e.$dialog.confirm({text:"Are you sure you want to exit this group",title:"Warning"});case 12:if(t.sent){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,n.Managers.Groups.exit(e.username,r.info.id);case 17:case"end":return t.stop()}}),t)})))()},onGroupManagementPopupClose:function(){this.groupManagementPopup.opened=!1,this.groupManagementPopup.group=null,this.groupManagementPopup.operation=0},onSearchSelect:function(e){this.activeView="user",this.setActiveChannel(e),this.updateView()},onAttachment:function(e){var t=this.$sdk;"user"===this.activeView&&(t.File.init(t.Managers.Users.channel),this.fileTransfers[t.Managers.Users.channel]=e)},logout:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$sdk.User.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}},k=(n(493),n(78)),y=n(118),M=n.n(y),_=n(426),V=n(513),C=n(508),$=n(431),j=n(110),S=n(423),O=n(419),G=n(424),P=n(414),I=n(425),T=n(446),E=n(517),L=n(509),R=n(434),component=Object(k.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-navigation-drawer",{attrs:{width:"286",permanent:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-row",{staticClass:"fill-height nav-container",attrs:{"no-gutters":""}},[n("v-navigation-drawer",{attrs:{"mini-variant":"",permanent:"","mini-variant-width":"66"}},[n("v-list",{staticClass:"icon-row",attrs:{nav:"",dense:""}},[n("v-list-item",{attrs:{ripple:!1,dense:""},on:{click:function(t){return e.setUserView()}}},[n("v-list-item-avatar",{staticStyle:{overflow:"visible"},attrs:{title:e.username}},[n("v-badge",{attrs:{color:"primary",value:e.getUnread(),overlap:"",dot:""}},[n("text-avatar",{attrs:{name:e.username,size:36}})],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("create-group",{attrs:{group:e.groupManagementPopup.group,opened:e.groupManagementPopup.opened,operation:e.groupManagementPopup.operation,contacts:e.groupManagementPopup.contacts},on:{close:e.onGroupManagementPopupClose,create:e.groupManagementPopup.onCreate,open:e.groupManagementPopup.onOpen,kick:e.groupManagementPopup.onKick,invite:e.groupManagementPopup.onInvite},scopedSlots:e._u([{key:"icon",fn:function(){return[n("v-avatar",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-plus")])],1)]},proxy:!0}])}),e._v(" "),n("v-list-item",{on:{click:function(t){return e.logout()}}},[n("v-list-item-avatar",{staticStyle:{overflow:"visible"}},[n("v-icon",[e._v("mdi-logout")])],1)],1),e._v(" "),e._l(e.groups,(function(i){return n("v-list-item",{key:i.name,attrs:{ripple:!1},on:{click:function(t){return e.setGroupView(i)}}},[n("v-list-item-avatar",{staticStyle:{overflow:"visible"},attrs:{title:i.name}},[n("v-badge",{attrs:{color:"primary",value:e.getUnread(i.id),overlap:"",dot:""}},[n("text-avatar",{attrs:{size:36,name:i.name}})],1)],1)],1)}))],2)],1),e._v(" "),n("v-list",{attrs:{"max-width":"210",shaped:""}},[n("search-bar",{on:{select:e.onSearchSelect}}),e._v(" "),n("v-subheader",{staticClass:"text-overline"},[e._v(e._s("user"===e.activeView?"Conversations":"Channels"))]),e._v(" "),n("v-list-item-group",{attrs:{color:"primary"}},e._l(e.channels,(function(i){return n("v-list-item",{key:i.title,attrs:{dense:"","two-line":""},on:{click:function(t){return e.setActiveChannel(i)}}},[n("v-list-item-avatar",[n("text-avatar",{attrs:{name:i.title,size:32}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{attrs:{title:i.title}},[e._v(e._s(i.title))]),e._v(" "),i.subtitle?n("v-list-item-subtitle",[e._v("\n                "+e._s(i.subtitle))]):e._e()],1),e._v(" "),i.unread?n("v-list-item-action",[n("v-list-item-action-text",[e._v("\n                "+e._s(i.unread)+"\n              ")])],1):e._e()],1)})),1)],1)],1)],1),e._v(" "),n("v-col",{staticClass:"chat column",attrs:{cols:"9"}},[n("conversation",{staticClass:"message-list",attrs:{title:e.conversation.title,subtitle:e.conversation.subtitle,members:e.conversation.members,messages:e.conversation.messages},on:{invite:e.onInvite,delete:e.onDelete,kick:e.onKick,block:e.onBlock,exit:e.onExit}}),e._v(" "),e.conversation.title?n("div",{staticClass:"message-container"},[n("message-input",{staticClass:"message-input mx-auto",on:{send:e.sendMessage,attachment:e.onAttachment}})],1):e._e()],1)],1)}),[],!1,null,"6865d5e4",null);t.default=component.exports;M()(component,{TextAvatar:n(416).default,CreateGroup:n(441).default,SearchBar:n(442).default,Conversation:n(440).default,MessageInput:n(439).default}),M()(component,{VAvatar:_.a,VBadge:V.a,VCol:C.a,VDivider:$.a,VIcon:j.a,VList:S.a,VListItem:O.a,VListItemAction:G.a,VListItemActionText:P.a,VListItemAvatar:I.a,VListItemContent:P.b,VListItemGroup:T.a,VListItemSubtitle:P.c,VListItemTitle:P.d,VNavigationDrawer:E.a,VRow:L.a,VSubheader:R.a})}}]);