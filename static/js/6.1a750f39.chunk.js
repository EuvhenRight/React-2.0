(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols")}}},244:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return u}),a.d(t,"c",function(){return m});var n=a(248),r=a(0),i=a.n(r),o=a(245),s=a.n(o),c=a(270),l=(a(243),function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),o=a.touched&&a.error;return i.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},i.a.createElement("textarea",Object.assign({},t,r)),i.a.createElement("div",null,o&&i.a.createElement("span",null,a.error)))}),u=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),o=a.touched&&a.error;return i.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},i.a.createElement("input",Object.assign({},t,r)),i.a.createElement("div",null,o&&i.a.createElement("span",null,a.error)))},m=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r))," ",o)}},245:function(e,t,a){e.exports={formControl:"FormControl_formControl__1lVtw",error:"FormControl_error__1WuHp"}},250:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1uJ2V",dialogsItems:"Dialogs_dialogsItems__2HBFP",messages:"Dialogs_messages__1_uzI",active:"Dialogs_active__3chAR",dialogsavatar:"Dialogs_dialogsavatar__3vR5s"}},256:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(28),r=a(29),i=a(31),o=a(30),s=a(32),c=a(1),l=a(0),u=a.n(l),m=a(17),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),a}(u.a.Component);return Object(m.b)(d)(t)}},346:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(72),o=a(250),s=a.n(o),c=a(9),l=function(e){return e.isActive?s.a.active:s.a.dialogsItems},u=function(e){return r.a.createElement("div",null,r.a.createElement(c.b,{className:l,to:"/dialogs/"+e.id},r.a.createElement("img",{className:s.a.dialogsavatar,src:e.avatar}),e.name))},m=function(e){return r.a.createElement("div",{className:s.a.message},e.message)},d=a(270),g=a(271),f=a(244),v=a(243),b=Object(v.a)(100),E=Object(g.a)({form:"Dialogs"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(d.a,{component:f.b,name:"newPostTextMessage",placeholder:"enter message",validate:[v.b,b]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add message")))}),p=function(e){var t=e.dialogPage,a=t.dialogs.map(function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,avatar:e.avatar})}),n=t.messages.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,message:e.message})});return r.a.createElement("div",{className:s.a.dialogs},r.a.createElement("div",{className:s.a.dialogsItems},a),r.a.createElement("div",{className:s.a.messages},r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement(E,{onSubmit:function(t){e.newMessageBody(t.newPostTextMessage)}}))))},_=a(17),h=a(256),j=a(12);t.default=Object(j.d)(h.a,Object(_.b)(function(e){return{dialogPage:e.dialogPage}},function(e){return{newMessageBody:function(t){e(Object(i.b)(t))}}}))(p)}}]);
//# sourceMappingURL=6.1a750f39.chunk.js.map