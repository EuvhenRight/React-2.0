(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{573:function(e,t,n){e.exports={selectedPages:"Paginator_selectedPages__2xcXD",numberPage:"Paginator_numberPage__YF2So",prev:"Paginator_prev__2kE6x",next:"Paginator_next__eMx8Q"}},575:function(e,t,n){e.exports={avatar:"Users_avatar__3Diqw",selectedPages:"Users_selectedPages__3DLbb",numberPage:"Users_numberPage__2fRWR"}},583:function(e,t,n){"use strict";n.r(t);var a=n(67),r=n(68),s=n(41),o=n(69),u=n(42),l=n(0),i=n.n(l),c=n(18),g=n(116),p=n(16),m=n(573),P=n.n(m),f=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onChangedPage,s=e.positionSize,o=void 0===s?20:s,u=Math.ceil(t/n),c=[],g=1;g<=u;g++)c.push(g);var m=Math.ceil(u/o),f=Object(l.useState)(1),h=Object(p.a)(f,2),d=h[0],b=h[1],w=[d-1]*o+1,C=d*o;return i.a.createElement("div",{className:P.a.numberPage},d>0&&i.a.createElement("button",{className:P.a.prev,onClick:function(){b(d-1)}},"previous"),c.filter(function(e){return e>=w&&e<=C}).map(function(e){return i.a.createElement("span",{className:a===e&&P.a.selectedPages,key:e,onClick:function(){r(e)}},e)}),m>d&&i.a.createElement("button",{className:P.a.next,onClick:function(){b(d+1)}},"next"))},h=n(575),d=n.n(h),b=n(132),w=n.n(b),C=n(19),v=function(e){var t=e.user,n=e.isFetchingInProgress,a=e.unfollow,r=e.follow;return i.a.createElement("div",{className:d.a.users},i.a.createElement(C.b,{to:"/profile/"+t.id},i.a.createElement("img",{src:null!=t.photos.small?t.photos.small:w.a,className:d.a.avatar})),i.a.createElement("span",null,i.a.createElement("div",null,t.followed?i.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"UnFollow"):i.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow")),i.a.createElement("div",null,t.name),i.a.createElement("div",null,t.status)))},E=function(e){var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onChangedPage,s=e.users,o=Object(g.a)(e,["totalItemsCount","pageSize","currentPage","onChangedPage","users"]);return i.a.createElement("div",null,i.a.createElement(f,{totalItemsCount:t,pageSize:n,currentPage:a,onChangedPage:r}),i.a.createElement("div",null,s.map(function(e){return i.a.createElement(v,{key:e.id,user:e,isFetchingInProgress:o.isFetchingInProgress,follow:o.follow,unfollow:o.unfollow})})))},_=n(43),F=n(60),I=n(8),k=function(e){return e.usersPage.users},S=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalItemsCount},j=function(e){return e.usersPage.currentPage},O=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.setToggleFollowInProgress},U=function(e){return e.usersPage.isFetchingInProgress},y=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).onChangedPage=function(e){n.props.setCurrentPage(e),n.props.setUsersThunkCreate(e,n.props.pageSize)},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.setUsersThunkCreate(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(F.a,null):null,i.a.createElement(E,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onChangedPage:this.onChangedPage,users:this.props.users,unfollow:this.props.unFollow,follow:this.props.follow,isFetchingInProgress:this.props.isFetchingInProgress}))}}]),t}(i.a.Component);t.default=Object(I.d)(Object(c.b)(function(e){return{users:k(e),pageSize:S(e),totalItemsCount:z(e),currentPage:j(e),isFetching:O(e),setToggleFollowInProgress:x(e),isFetchingInProgress:U(e)}},{follow:_.b,unFollow:_.f,setCurrentPage:_.c,setToggleFollowInProgress:_.d,setUsersThunkCreate:_.e}))(y)}}]);
//# sourceMappingURL=6.e7a72f04.chunk.js.map