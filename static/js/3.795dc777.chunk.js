(window["webpackJsonpold-ontach"]=window["webpackJsonpold-ontach"]||[]).push([[3],{321:function(e,t,a){e.exports=a.p+"static/media/def_usrpic.465eaf9e.jpg"},322:function(e,t,a){"use strict";var n=a(88),o=a.n(n),l=a(0),r=a.n(l);t.a=function(e){var t=e.isDisabled,a=e.buttonClick,n=e.isFollow,l=e.isStretched,i=o.a.follow__button;return l&&(i+=" "+o.a.follow__button_stretched),n?r.a.createElement("button",{className:i,onClick:a,disabled:t},"Stop following"):r.a.createElement("button",{className:i,onClick:a,disabled:t},"Follow user")}},323:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__1_Ogf",profileInfo__label:"ProfileInfo_profileInfo__label__3Zwp_",profileInfo__data:"ProfileInfo_profileInfo__data__1aAll"}},324:function(e,t,a){e.exports={profilePage:"Profile_profilePage__366-F",profileData:"Profile_profileData__lNJms",userInfo__header:"Profile_userInfo__header__yIqv2",userInfo__header_edited:"Profile_userInfo__header_edited__DyKol",leftBlock:"Profile_leftBlock__3jHU2",leftBlock__profileMenu:"Profile_leftBlock__profileMenu__hLKSE"}},325:function(e,t,a){"use strict";var n=a(113),o=a(114),l=a(116),r=a(115),i=a(117),s=a(0),c=a.n(s),u=a(13),p=a(44),m=a(40),d=function(e){return{isAuth:e.auth.isAuth,previousLocation:e.auth.previousLocation}};t.a=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.previousLocation&&this.props.previousLocation===this.props.location.pathname||this.props.setLocation(this.props.location.pathname),this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(p.a,{to:"login"})}}]),a}(c.a.Component);return Object(p.f)(Object(u.b)(d,{setLocation:m.f})(t))}},329:function(e,t,a){e.exports={someUsers:"SomeFriendsBlock_someUsers__3NC-a",profile__small:"SomeFriendsBlock_profile__small__1DUO7",profileImage:"SomeFriendsBlock_profileImage__2Irdt"}},330:function(e,t,a){e.exports=a.p+"static/media/def_usrpic_small.d63d672f.jpg"},331:function(e,t,a){e.exports={percentValue:"RateProfile_percentValue__3ddfL",rateBlock:"RateProfile_rateBlock__2PCYi",rateBlock__filled:"RateProfile_rateBlock__filled__3gJiY",rateBlock__empty:"RateProfile_rateBlock__empty__2LJQZ"}},334:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(113),l=a(114),r=a(116),i=a(115),s=a(117),c=a(0),u=a.n(c),p=a(13),m=a(9),d=a(44),f=a(118),h=a(151),E=a(154),_=a(105),b=a(79),g=a(67),k=a(56),v=a(43),O=a(29),I=a(324),F=a.n(I),j=a(38),w=a(321),P=a.n(w),y=a(11),N=a(322),B=a(152),S=a(329),x=a.n(S),C=a(330),U=a.n(C),R=a(112),A=a(119),M=a(12),q=Object(R.a)(function(e){var t=e.users,a=e.count,n=e.pageId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(A.a,{count:a,name:1===a?"friend":"friends",link:"/friends"+n}),u.a.createElement("div",{className:x.a.someUsers},t.map(function(e){return u.a.createElement(M.b,{to:"/id"+e.id,className:x.a.profile__small,key:e.id},u.a.createElement("div",{className:x.a.profileImage,key:e.id},u.a.createElement("img",{src:e.photos.small?e.photos.small:U.a,alt:"id"+e.id+" small userpic"})),e.name)})))}),D=a(17),J=a(14),L=a(15),T=a(80);function V(){var e=Object(J.a)(["\n    word-break: break-word;\n    font-weight: bold;\n"]);return V=function(){return e},e}function Y(){var e=Object(J.a)(["\n    color:grey\n"]);return Y=function(){return e},e}function W(){var e=Object(J.a)(["\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: 90px auto;\n"]);return W=function(){return e},e}var K=L.a.div(W()),Z=L.a.span(Y()),z=L.a.div(V()),H=function(e){var t=e.photo;return t.description.length>51?u.a.createElement(u.a.Fragment,null,t.description.slice(0,50),"\u2026"):u.a.createElement(u.a.Fragment,null,t.description)},Q=Object(R.a)(function(e){var t=e.photos,a=e.count,n=e.pageId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(A.a,{count:a,name:1===a?"photo":"photos",link:"/photos"+n}),u.a.createElement(K,null,t.map(function(e){return u.a.createElement(u.a.Fragment,{key:e.id},u.a.createElement(M.b,Object(D.a)({key:e.id,to:"/photos"+n},"key",n),u.a.createElement("img",{width:"80px",src:e.preview,alt:"id ".concat(e.userId," photo")})),u.a.createElement("div",{key:e.id},u.a.createElement(z,null,u.a.createElement(H,{photo:e}))," ",u.a.createElement("br",null),u.a.createElement(Z,null,"Uploaded ",T.a.toStrings(e.date))))})))}),G=a(331),X=a.n(G),$=function(e){var t=e.rateValue,a=Math.trunc(199*t/100);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:X.a.percentValue},t+"%"),u.a.createElement("div",{className:X.a.rateBlock},u.a.createElement("div",{style:{width:a},className:X.a.rateBlock__filled}),u.a.createElement("div",{style:{width:199-a},className:X.a.rateBlock__empty})))},ee=function(e){var t=e.user,a=e.isOwner,o=e.uploadPhoto,l=e.setEditMode,r=e.rating,i=e.friends,s=(e.beginFollowing,Object(n.a)(e,["user","isOwner","uploadPhoto","setEditMode","rating","friends","beginFollowing"])),c=t.photos.large?t.photos.large:P.a,p=s.singleProfileFollow,m=s.singleProfileUnfollow,d=s.profileFollowingFetch;return u.a.createElement("div",{className:F.a.leftBlock},u.a.createElement("img",{src:c,alt:t.fullName+" prfile photo",width:"210px"}),u.a.createElement("ul",{className:F.a.leftBlock__profileMenu},a?u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:"fileUpload"},u.a.createElement(B.a,{onUpload:function(e){e.target.files.length&&o(e.target.files[0])}},u.a.createElement(y.a,{linkName:"Upload new user photo"}))),u.a.createElement("li",{key:"editProfile"},u.a.createElement(y.a,{linkName:"Edit my profile",onClick:l}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:"writeTo"},u.a.createElement(y.a,{linkName:"Send message to "+t.fullName,to:"/dialog"+t.userId})),u.a.createElement("li",{key:"followUser"},u.a.createElement(N.a,{isFollow:t.isFollow,isStretched:!0,buttonClick:function(){t.isFollow?m(t.userId):p(t.userId)},isDisabled:d})))),u.a.createElement($,{rateValue:r}),u.a.createElement(q,{text:"Friends",count:i.totalCount,users:i.profiles,pageId:t.userId}),u.a.createElement(Q,{text:"Photos",count:s.photosTotalCount,photos:s.photos,pageId:t.userId}))},te=a(153),ae=a.n(te),ne=function(e){var t=e.statusText,a=e.setStatus,n=e.isOwner,o=Object(c.useState)(!1),l=Object(O.a)(o,2),r=l[0],i=l[1],s=Object(c.useState)(t),p=Object(O.a)(s,2),m=p[0],d=p[1];Object(c.useEffect)(function(){d(t)},[t]);return u.a.createElement("div",{className:ae.a.userStatus},r?u.a.createElement("input",{autoFocus:!0,placeholder:"Change status",value:m,onChange:function(e){d(e.target.value)},onBlur:function(e){i(!1),a(m)}}):u.a.createElement(u.a.Fragment,null,n?u.a.createElement("a",{onDoubleClick:function(){i(!0)}},!t||t.length<1?"Create your status!":t):u.a.createElement("a",null," ",t),u.a.createElement("div",{className:ae.a.userStatus__lastUpdate},"updated 5 years ago")))},oe=a(323),le=a.n(oe),re=function(e){var t=e.link,a=e.children,n=e.label,o=t?u.a.createElement(y.a,{to:t,linkName:a,isExternal:!0}):u.a.createElement(u.a.Fragment,null,a);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:le.a.profileInfo__label},n),u.a.createElement("div",{className:le.a.profileInfo__data},o))},ie=function(e){var t=e.aboutMe,a=e.lookingForAJob,n=e.description;return u.a.createElement("div",{className:le.a.profileInfo},u.a.createElement(re,{label:"About me:"},t),u.a.createElement(re,{label:"Looking for a job:"}," ",a?"Yes":"No"),u.a.createElement(re,{label:"Professional skills:"},n," "))},se=a(155),ce=a(58),ue=Object(R.a)(function(e){var t=e.contacts,a=e.isEdit;return t?a?u.a.createElement("div",{className:le.a.profileInfo},Object.keys(t).map(function(e){return u.a.createElement(re,{label:e,key:e},u.a.createElement(se.a,{name:"contacts."+e,component:ce.a}))})):u.a.createElement("div",{className:le.a.profileInfo},Object.keys(t).map(function(e){if(t[e])return u.a.createElement(re,{link:t[e],label:e,key:e}," ",t[e]," ")})):u.a.createElement("div",null)}),pe=a(16),me=a.n(pe),de=a(106),fe=a(77),he=function(e){var t=0;return Object.keys(e).map(function(a){a&&e[a]&&t++}),t},Ee=a(47),_e=(Object(fe.a)(4),Object(de.a)({form:"updateProfile",enableReinitialize:!0})(function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:F.a.userInfo__header},u.a.createElement("div",{className:F.a.userInfo__header_edited},u.a.createElement("span",null,"Your full name:"),u.a.createElement("div",{className:me.a.loginInput+" "+me.a.loginInput__profile},u.a.createElement(se.a,{name:"fullName",component:ce.a,validate:[fe.b]}))),e.children),u.a.createElement("div",null,u.a.createElement("div",{className:le.a.profileInfo},u.a.createElement(re,{label:"About me:"},u.a.createElement(se.a,{name:"aboutMe",component:ce.a})),u.a.createElement(re,{label:"Looking for a job:"},u.a.createElement(se.a,{name:"lookingForAJob",component:"input",type:"checkbox"})),u.a.createElement(re,{label:"Professional skills"},u.a.createElement(se.a,{name:"lookingForAJobDescription",component:ce.a,multiline:!0}))),u.a.createElement(ue,{contacts:e.user.contacts,isEdit:!0,text:"contacts",count:he(e.user.contacts)}),u.a.createElement("div",{className:me.a.formBlock__events_cancel},u.a.createElement(y.a,{linkName:"Cancel",onClick:e.onCancel})),u.a.createElement("div",{className:me.a.loginButton+" "+me.a.loginButton__unshifted},u.a.createElement(Ee.a,null,"Save changes")),e.error&&u.a.createElement("div",{className:me.a.formError}," ",e.error," ")))})),be=function(e){var t=e.user,a=e.setStatusRequest,o=e.statusText,l=e.isOwner,r=e.uploadProfile,i=e.isEdit,s=e.profileUpdateFetching,p=Object(n.a)(e,["user","setStatusRequest","statusText","isOwner","uploadProfile","isEdit","profileUpdateFetching"]),m=Object(c.useState)(!1),d=Object(O.a)(m,2),f=d[0],h=d[1];Object(c.useEffect)(function(){h(i)},[i]);return u.a.createElement(j.a,{text:t.fullName},u.a.createElement("div",{className:F.a.profilePage},u.a.createElement(ee,Object.assign({user:t,isOwner:l,setEditMode:function(){h(!0)}},p)),u.a.createElement("div",{className:F.a.profileData},f&&l?u.a.createElement(_e,{onSubmit:function(e){r(e)},user:t,initialValues:t,onCancel:function(){h(!1)}},u.a.createElement(ne,{statusText:o}),s&&u.a.createElement("h2",null,"profile updating...")):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:F.a.userInfo__header},t.fullName,u.a.createElement(ne,{statusText:o,setStatus:a,isOwner:l})),u.a.createElement(ie,{lookingForAJob:t.lookingForAJob,aboutMe:t.aboutMe,description:t.lookingForAJobDescription}),u.a.createElement(ue,{text:"Contacts",contacts:t.contacts,count:he(t.contacts)}),p.children))))},ge=a(48),ke=a(156),ve=a(325),Oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={editMode:!1},a.uploadUserProfile=function(){var e=a.props.match.params.userId||a.props.myId;a.props.getStatusRequest(e),a.props.getProfileRequest(e),a.props.getFriendsById(1,e),a.props.getWallRequest(e),a.props.getPhotosRequest(e)},a.setEditMode=function(e){a.setState({editMode:e||!1})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setEditMode(this.props.isEdit),this.uploadUserProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!=this.props.match.params.userId&&this.uploadUserProfile(),e.profileUpdateFetching&&!this.props.profileUpdateFetching&&this.setEditMode(!1),!e.profileUpdateFetching&&this.props.profileUpdateFetching&&this.setEditMode(!0)}},{key:"render",value:function(){var e=this.props,t=e.match,a=(e.getProfileRequest,e.getFriendsById,e.isEdit),o=Object(n.a)(e,["match","getProfileRequest","getFriendsById","isEdit"]);return this.props.profileFetch?u.a.createElement(ge.a,null):u.a.createElement(be,Object.assign({},o,{isEdit:this.state.editMode,isOwner:this.props.isAuth&&(t.params.userId==this.props.myId||a)}),u.a.createElement(ke.a,{text:"Wall",isAuth:!0,pageId:o.user.userId,posts:this.props.posts,count:this.props.postsCount,addPost:this.props.AddNewPostRequest}))}}]),t}(u.a.Component);t.default=Object(m.d)(d.f,ve.a,Object(p.b)(function(e){return{user:Object(h.b)(e),statusText:e.profile.statusText,profileUpdateFetching:e.profile.profileUpdateFetching,myId:e.auth.myId,isAuth:e.auth.isAuth,profileFetch:e.profile.profileFetch,profileFollowingFetch:Object(h.a)(e),friends:Object(f.a)(e),rating:Object(h.d)(e),posts:Object(E.a)(e),postsCount:e.wall.totalCount,photos:Object(_.b)(e),photosTotalCount:e.photos.totalCount}},{setStatusRequest:b.d,getProfileRequest:b.a,getStatusRequest:b.b,uploadProfile:b.h,uploadPhoto:b.g,getFriendsById:g.c,singleProfileFollow:b.e,singleProfileUnfollow:b.f,AddNewPostRequest:k.a,getWallRequest:k.b,getPhotosRequest:v.b}))(Oe)}}]);
//# sourceMappingURL=3.795dc777.chunk.js.map