(window["webpackJsonpold-ontach"]=window["webpackJsonpold-ontach"]||[]).push([[3],{298:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},299:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return o})},300:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",function(){return n})},301:function(e,t,a){e.exports=a.p+"static/media/def_usrpic.465eaf9e.jpg"},302:function(e,t,a){"use strict";var n=a(79),o=a.n(n),r=a(0),l=a.n(r);t.a=function(e){var t=e.isDisabled,a=e.buttonClick,n=e.isFollow,r=e.isStretched,i=o.a.follow__button;return r&&(i+=" "+o.a.follow__button_stretched),n?l.a.createElement("button",{className:i,onClick:a,disabled:t},"Stop following"):l.a.createElement("button",{className:i,onClick:a,disabled:t},"Follow user")}},303:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var r=a(103);function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(r.a)(e):t}a.d(t,"a",function(){return l})},304:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return o})},305:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__1_Ogf",profileInfo__label:"ProfileInfo_profileInfo__label__3Zwp_",profileInfo__data:"ProfileInfo_profileInfo__data__1aAll"}},306:function(e,t,a){"use strict";var n=a(298),o=a(299),r=a(303),l=a(300),i=a(304),s=a(0),c=a.n(s),u=a(11),f=a(35),m=a(31),p=function(e){return{isAuth:e.auth.isAuth,previousLocation:e.auth.previousLocation}};t.a=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.previousLocation&&this.props.previousLocation===this.props.location.pathname||this.props.setLocation(this.props.location.pathname),this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(f.a,{to:"login"})}}]),a}(c.a.Component);return Object(f.f)(Object(u.b)(p,{setLocation:m.f})(t))}},310:function(e,t,a){e.exports={profilePage:"Profile_profilePage__366-F",profileData:"Profile_profileData__lNJms",userInfo__header:"Profile_userInfo__header__yIqv2",userInfo__header_edited:"Profile_userInfo__header_edited__DyKol",leftBlock:"Profile_leftBlock__3jHU2",leftBlock__profileMenu:"Profile_leftBlock__profileMenu__hLKSE"}},311:function(e,t,a){e.exports={userStatus:"UserStatus_userStatus__tuLty",userStatus__lastUpdate:"UserStatus_userStatus__lastUpdate__3pUHQ"}},312:function(e,t,a){e.exports={badgeProfile__header:"BadgeHeader_badgeProfile__header__1K1kq",badgeProfile__header_open:"BadgeHeader_badgeProfile__header_open___GFCr",badgeProfile__header_roll:"BadgeHeader_badgeProfile__header_roll__3zMKS"}},313:function(e,t,a){e.exports={someUsers:"SomeFriendsBlock_someUsers__3EcNE",profile__small:"SomeFriendsBlock_profile__small__3yXq8",profileImage:"SomeFriendsBlock_profileImage__g5Mjf",subBadge:"SomeFriendsBlock_subBadge__1L4Jy",subBadge__all:"SomeFriendsBlock_subBadge__all__39zcK"}},314:function(e,t,a){e.exports=a.p+"static/media/def_usrpic_small.d63d672f.jpg"},315:function(e,t,a){e.exports={percentValue:"RateProfile_percentValue__3ddfL",rateBlock:"RateProfile_rateBlock__2PCYi",rateBlock__filled:"RateProfile_rateBlock__filled__3gJiY",rateBlock__empty:"RateProfile_rateBlock__empty__2LJQZ"}},318:function(e,t,a){"use strict";a.r(t);var n=a(44),o=a(298),r=a(299),l=a(303),i=a(300),s=a(304),c=a(0),u=a.n(c),f=a(11),m=a(10),p=a(35),d=a(104),_=a(135),b=a(71),h=a(102),E=a(67),g=a(310),y=a.n(g),v=a(42),k=a(311),O=a.n(k),j=function(e){var t=e.statusText,a=e.setStatus,n=e.isOwner,o=Object(c.useState)(!1),r=Object(E.a)(o,2),l=r[0],i=r[1],s=Object(c.useState)(t),f=Object(E.a)(s,2),m=f[0],p=f[1];Object(c.useEffect)(function(){p(t)},[t]);return u.a.createElement("div",{className:O.a.userStatus},l?u.a.createElement("input",{autoFocus:!0,placeholder:"Change status",value:m,onChange:function(e){p(e.target.value)},onBlur:function(e){i(!1),a(m)}}):u.a.createElement(u.a.Fragment,null,n?u.a.createElement("a",{onDoubleClick:function(){i(!0)}},!t||t.length<1?"Create your status!":t):u.a.createElement("a",null," ",t),u.a.createElement("div",{className:O.a.userStatus__lastUpdate},"updated 5 years ago")))},P=a(305),F=a.n(P),I=a(23),N=function(e){var t=e.link,a=e.children,n=e.label,o=t?u.a.createElement(I.a,{to:t,linkName:a,isExternal:!0}):u.a.createElement(u.a.Fragment,null,a);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:F.a.profileInfo__label},n),u.a.createElement("div",{className:F.a.profileInfo__data},o))},S=function(e){var t=e.aboutMe,a=e.lookingForAJob,n=e.description;return u.a.createElement("div",{className:F.a.profileInfo},u.a.createElement(N,{label:"About me:"},t),u.a.createElement(N,{label:"Looking for a job:"}," ",a?"Yes":"No"),u.a.createElement(N,{label:"Professional skills"},n," "))},w=a(137),B=a(312),U=a.n(B),x=function(e){return function(t){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).toggleBadge=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!0},t}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.state.isOpen?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:U.a.badgeProfile__header+" "+U.a.badgeProfile__header_open,onClick:this.toggleBadge},u.a.createElement("h2",null,this.props.text," ")),u.a.createElement(e,this.props)):u.a.createElement("div",{className:U.a.badgeProfile__header+" "+U.a.badgeProfile__header_roll,onClick:this.toggleBadge},u.a.createElement("h2",null,this.props.text,u.a.createElement("span",null,this.props.count?" ("+this.props.count+")":"")))}}]),a}(u.a.Component)},C=a(78),M=x(function(e){var t=e.contacts,a=e.isEdit;return t?a?u.a.createElement("div",{className:F.a.profileInfo},Object.keys(t).map(function(e){return u.a.createElement(N,{label:e,key:e},u.a.createElement(w.a,{name:"contacts."+e,component:C.a}))})):u.a.createElement("div",{className:F.a.profileInfo},Object.keys(t).map(function(e){if(t[e])return u.a.createElement(N,{link:t[e],label:e,key:e}," ",t[e]," ")})):u.a.createElement("div",null)}),A=a(301),R=a.n(A),L=a(14),q=a.n(L),J=a(96),D=a(69),T=function(e){var t=0;return Object.keys(e).map(function(a){a&&e[a]&&t++}),t},V=a(58),H=(Object(D.a)(4),Object(J.a)({form:"updateProfile",enableReinitialize:!0})(function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:y.a.userInfo__header},u.a.createElement("div",{className:y.a.userInfo__header_edited},u.a.createElement("span",null,"Your full name:"),u.a.createElement("div",{className:q.a.loginInput+" "+q.a.loginInput__profile},u.a.createElement(w.a,{name:"fullName",component:C.a,validate:[D.b]}))),e.children),u.a.createElement("div",null,u.a.createElement("div",{className:F.a.profileInfo},u.a.createElement(N,{label:"About me:"},u.a.createElement(w.a,{name:"aboutMe",component:C.a})),u.a.createElement(N,{label:"Looking for a job:"},u.a.createElement(w.a,{name:"lookingForAJob",component:"input",type:"checkbox"})),u.a.createElement(N,{label:"Professional skills"},u.a.createElement(w.a,{name:"lookingForAJobDescription",component:C.a,multiline:!0}))),u.a.createElement(M,{contacts:e.user.contacts,isEdit:!0,text:"contacts",count:T(e.user.contacts)}),u.a.createElement(I.a,{linkName:"Cancel",onClick:e.onCancel}),e.error&&u.a.createElement("div",{className:q.a.formError}," ",e.error," "),u.a.createElement("div",{className:q.a.loginButton},u.a.createElement(V.a,null,"Save changes"))))})),K=a(136),Y=a(313),z=a.n(Y),Q=a(314),Z=a.n(Q),G=a(12),X=function(e){var t=e.count,a=e.name,n=e.link,o=t+" "+a;return u.a.createElement("div",{className:z.a.subBadge},u.a.createElement(I.a,{to:n,linkName:o}),u.a.createElement("div",{className:z.a.subBadge__all}," ",u.a.createElement(I.a,{to:n,linkName:"All"})," "))},W=x(function(e){var t=e.users,a=e.count,n=e.pageId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(X,{count:a,name:1===a?"friend":"friends",link:"/friends"+n}),u.a.createElement("div",{className:z.a.someUsers},t.map(function(e){return u.a.createElement(G.b,{to:"/id"+e.id,className:z.a.profile__small,key:e.id},u.a.createElement("div",{className:z.a.profileImage,key:e.id},u.a.createElement("img",{src:e.photos.small?e.photos.small:Z.a,alt:"id"+e.id+" small userpic"})),e.name)})))}),$=a(315),ee=a.n($),te=function(e){var t=e.rateValue,a=Math.trunc(199*t/100);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:ee.a.percentValue},t+"%"),u.a.createElement("div",{className:ee.a.rateBlock},u.a.createElement("div",{style:{width:a},className:ee.a.rateBlock__filled}),u.a.createElement("div",{style:{width:199-a},className:ee.a.rateBlock__empty})))},ae=a(302),ne=function(e){var t=e.user,a=e.isOwner,o=e.uploadPhoto,r=e.setEditMode,l=e.rating,i=e.friends,s=(e.beginFollowing,Object(n.a)(e,["user","isOwner","uploadPhoto","setEditMode","rating","friends","beginFollowing"])),c=t.photos.large?t.photos.large:R.a,f=s.singleProfileFollow,m=s.singleProfileUnfollow,p=s.profileFollowingFetch;return u.a.createElement("div",{className:y.a.leftBlock},u.a.createElement("img",{src:c,alt:t.fullName+" prfile photo",width:"210px"}),u.a.createElement("ul",{className:y.a.leftBlock__profileMenu},a?u.a.createElement(u.a.Fragment,null,u.a.createElement("li",null,u.a.createElement(K.a,{onUpload:function(e){e.target.files.length&&o(e.target.files[0])}},u.a.createElement(I.a,{linkName:"Upload new user photo"}))),u.a.createElement("li",null,u.a.createElement(I.a,{linkName:"Edit my profile",onClick:r}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("li",null,u.a.createElement(I.a,{linkName:"Send message to "+t.fullName,to:"/dialog"+t.userId})),u.a.createElement("li",null,u.a.createElement(ae.a,{isFollow:t.isFollow,isStretched:!0,buttonClick:function(){t.isFollow?m(t.userId):f(t.userId)},isDisabled:p})))),u.a.createElement(te,{rateValue:l}),u.a.createElement(W,{text:"friends",count:i.totalCount,users:i.profiles,pageId:t.userId}))},oe=function(e){var t=e.user,a=e.setStatusRequest,o=e.statusText,r=e.isOwner,l=e.uploadProfile,i=e.isEdit,s=e.profileUpdateFetching,f=Object(n.a)(e,["user","setStatusRequest","statusText","isOwner","uploadProfile","isEdit","profileUpdateFetching"]),m=Object(c.useState)(!1),p=Object(E.a)(m,2),d=p[0],_=p[1];Object(c.useEffect)(function(){_(i)},[i]);return u.a.createElement(v.a,{text:t.fullName},u.a.createElement("div",{className:y.a.profilePage},u.a.createElement(ne,Object.assign({user:t,isOwner:r,setEditMode:function(){_(!0)}},f)),u.a.createElement("div",{className:y.a.profileData},d&&r?u.a.createElement(H,{onSubmit:function(e){l(e)},user:t,initialValues:t,onCancel:function(){_(!1)}},u.a.createElement(j,{statusText:o}),s&&u.a.createElement("h2",null,"profile updating...")):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:y.a.userInfo__header},t.fullName,u.a.createElement(j,{statusText:o,setStatus:a,isOwner:r})),u.a.createElement(S,{lookingForAJob:t.lookingForAJob,aboutMe:t.aboutMe,description:t.lookingForAJobDescription}),u.a.createElement(M,{text:"contacts",contacts:t.contacts,count:T(t.contacts)})))))},re=a(38),le=a(306),ie=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1},a.uploadUserProfile=function(){var e=a.props.match.params.userId||a.props.myId;a.props.getStatusRequest(e),a.props.getProfileRequest(e),a.props.getFriendsById(1,e)},a.setEditMode=function(e){a.setState({editMode:e||!1})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setEditMode(this.props.isEdit),this.uploadUserProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!=this.props.match.params.userId&&this.uploadUserProfile(),e.profileUpdateFetching&&!this.props.profileUpdateFetching&&this.setEditMode(!1),!e.profileUpdateFetching&&this.props.profileUpdateFetching&&this.setEditMode(!0)}},{key:"render",value:function(){var e=this.props,t=e.match,a=(e.getProfileRequest,e.getFriendsById,e.isEdit),o=Object(n.a)(e,["match","getProfileRequest","getFriendsById","isEdit"]);return this.props.profileFetch?u.a.createElement(re.a,null):u.a.createElement(oe,Object.assign({},o,{isEdit:this.state.editMode,isOwner:this.props.isAuth&&(t.params.userId==this.props.myId||a)}))}}]),t}(u.a.Component);t.default=Object(m.d)(p.f,le.a,Object(f.b)(function(e){return{user:Object(_.b)(e),statusText:e.profile.statusText,profileUpdateFetching:e.profile.profileUpdateFetching,myId:e.auth.myId,isAuth:e.auth.isAuth,profileFetch:e.profile.profileFetch,profileFollowingFetch:Object(_.a)(e),friends:Object(d.a)(e),rating:Object(_.d)(e)}},{setStatusRequest:b.d,getProfileRequest:b.a,getStatusRequest:b.b,uploadProfile:b.h,uploadPhoto:b.g,getFriendsById:h.c,singleProfileFollow:b.e,singleProfileUnfollow:b.f}))(ie)}}]);
//# sourceMappingURL=3.638507a8.chunk.js.map