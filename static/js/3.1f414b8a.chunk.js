(window["webpackJsonpold-ontach"]=window["webpackJsonpold-ontach"]||[]).push([[3],{323:function(e,t,a){e.exports=a.p+"static/media/def_usrpic.465eaf9e.jpg"},324:function(e,t,a){"use strict";var n=a(89),o=a.n(n),l=a(0),r=a.n(l);t.a=function(e){var t=e.isDisabled,a=e.buttonClick,n=e.isFollow,l=e.isStretched,i=o.a.follow__button;return l&&(i+=" "+o.a.follow__button_stretched),n?r.a.createElement("button",{className:i,onClick:a,disabled:t},"Stop following"):r.a.createElement("button",{className:i,onClick:a,disabled:t},"Follow user")}},325:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__1_Ogf",profileInfo__label:"ProfileInfo_profileInfo__label__3Zwp_",profileInfo__data:"ProfileInfo_profileInfo__data__1aAll"}},326:function(e,t,a){e.exports={profilePage:"Profile_profilePage__366-F",profileData:"Profile_profileData__lNJms",userInfo__header:"Profile_userInfo__header__yIqv2",userInfo__header_edited:"Profile_userInfo__header_edited__DyKol",leftBlock:"Profile_leftBlock__3jHU2",leftBlock__profileMenu:"Profile_leftBlock__profileMenu__hLKSE"}},327:function(e,t,a){"use strict";var n=a(115),o=a(116),l=a(118),r=a(117),i=a(119),s=a(0),c=a.n(s),u=a(14),p=a(45),m=a(40),d=function(e){return{isAuth:e.auth.isAuth,previousLocation:e.auth.previousLocation}};t.a=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.previousLocation&&this.props.previousLocation===this.props.location.pathname||this.props.setLocation(this.props.location.pathname),this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(p.a,{to:"login"})}}]),a}(c.a.Component);return Object(p.f)(Object(u.b)(d,{setLocation:m.f})(t))}},331:function(e,t,a){e.exports={someUsers:"SomeFriendsBlock_someUsers__3NC-a",profile__small:"SomeFriendsBlock_profile__small__1DUO7",profileImage:"SomeFriendsBlock_profileImage__2Irdt"}},332:function(e,t,a){e.exports=a.p+"static/media/def_usrpic_small.d63d672f.jpg"},333:function(e,t,a){e.exports={percentValue:"RateProfile_percentValue__3ddfL",rateBlock:"RateProfile_rateBlock__2PCYi",rateBlock__filled:"RateProfile_rateBlock__filled__3gJiY",rateBlock__empty:"RateProfile_rateBlock__empty__2LJQZ"}},336:function(e,t,a){"use strict";a.r(t);var n=a(29),o=a(115),l=a(116),r=a(118),i=a(117),s=a(119),c=a(0),u=a.n(c),p=a(14),m=a(8),d=a(45),f=a(120),h=a(153),E=a(156),_=a(106),b=a(80),g=a(68),k=a(57),v=a(44),O=a(31),I=a(326),F=a.n(I),j=a(36),w=a(323),P=a.n(w),N=a(13),y=a(324),B=a(154),S=a(331),x=a.n(S),C=a(332),U=a.n(C),R=a(114),A=a(121),M=a(15),q=Object(R.a)(function(e){var t=e.users,a=e.count,n=e.pageId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(A.a,{count:a,name:1===a?"friend":"friends",link:"/friends"+n}),u.a.createElement("div",{className:x.a.someUsers},t.map(function(e){return u.a.createElement(M.b,{to:"/id"+e.id,className:x.a.profile__small,key:e.id},u.a.createElement("div",{className:x.a.profileImage,key:e.id},u.a.createElement("img",{src:e.photos.small?e.photos.small:U.a,alt:"id"+e.id+" small userpic"})),e.name)})))}),D=a(16),J=a(11),L=a(12),T=a(43),V=a(157);function Y(){var e=Object(J.a)(["\n    word-break: break-word;\n    font-weight: bold;\n"]);return Y=function(){return e},e}function W(){var e=Object(J.a)(["\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: 90px auto;\n"]);return W=function(){return e},e}var K=L.a.div(W()),Z=L.a.div(Y()),z=function(e){var t=e.photo;return t.description.length>51?u.a.createElement(u.a.Fragment,null,t.description.slice(0,50),"\u2026"):u.a.createElement(u.a.Fragment,null,t.description)},H=Object(R.a)(function(e){var t=e.photos,a=e.count,n=e.pageId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(A.a,{count:a,name:1===a?"photo":"photos",link:"/photos"+n}),u.a.createElement(K,null,t.map(function(e){return u.a.createElement(u.a.Fragment,{key:e.id},u.a.createElement(M.b,Object(D.a)({key:e.id,to:"/photos"+n},"key",n),u.a.createElement("img",{width:"80px",src:e.preview,alt:"id ".concat(e.userId," photo")})),u.a.createElement("div",{key:e.id},u.a.createElement(Z,null,u.a.createElement(z,{photo:e}))," ",u.a.createElement("br",null),u.a.createElement(V.a,null,"Uploaded ",T.b.toStrings(e.date))))})))}),Q=a(333),G=a.n(Q),X=function(e){var t=e.rateValue,a=Math.trunc(199*t/100);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:G.a.percentValue},t+"%"),u.a.createElement("div",{className:G.a.rateBlock},u.a.createElement("div",{style:{width:a},className:G.a.rateBlock__filled}),u.a.createElement("div",{style:{width:199-a},className:G.a.rateBlock__empty})))},$=function(e){var t=e.user,a=e.isOwner,o=e.uploadPhoto,l=e.setEditMode,r=e.rating,i=e.friends,s=(e.beginFollowing,Object(n.a)(e,["user","isOwner","uploadPhoto","setEditMode","rating","friends","beginFollowing"])),c=t.photos.large?t.photos.large:P.a,p=s.singleProfileFollow,m=s.singleProfileUnfollow,d=s.profileFollowingFetch;return u.a.createElement("div",{className:F.a.leftBlock},u.a.createElement("img",{src:c,alt:t.fullName+" prfile photo",width:"210px"}),u.a.createElement("ul",{className:F.a.leftBlock__profileMenu},a?u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:"fileUpload"},u.a.createElement(B.a,{onUpload:function(e){e.target.files.length&&o(e.target.files[0])}},u.a.createElement(N.a,{linkName:"Upload new user photo"}))),u.a.createElement("li",{key:"editProfile"},u.a.createElement(N.a,{linkName:"Edit my profile",onClick:l}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:"writeTo"},u.a.createElement(N.a,{linkName:"Send message to "+t.fullName,to:"/dialog"+t.userId})),u.a.createElement("li",{key:"followUser"},u.a.createElement(y.a,{isFollow:t.isFollow,isStretched:!0,buttonClick:function(){t.isFollow?m(t.userId):p(t.userId)},isDisabled:d})))),u.a.createElement(X,{rateValue:r}),u.a.createElement(q,{text:"Friends",count:i.totalCount,users:i.profiles,pageId:t.userId}),u.a.createElement(H,{text:"Photos",count:s.photosTotalCount,photos:s.photos,pageId:t.userId}))},ee=a(155),te=a.n(ee),ae=function(e){var t=e.statusText,a=e.setStatus,n=e.isOwner,o=Object(c.useState)(!1),l=Object(O.a)(o,2),r=l[0],i=l[1],s=Object(c.useState)(t),p=Object(O.a)(s,2),m=p[0],d=p[1];Object(c.useEffect)(function(){d(t)},[t]);return u.a.createElement("div",{className:te.a.userStatus},r?u.a.createElement("input",{autoFocus:!0,placeholder:"Change status",value:m,onChange:function(e){d(e.target.value)},onBlur:function(e){i(!1),a(m)}}):u.a.createElement(u.a.Fragment,null,n?u.a.createElement("a",{onDoubleClick:function(){i(!0)}},!t||t.length<1?"Create your status!":t):u.a.createElement("a",null," ",t),u.a.createElement("div",{className:te.a.userStatus__lastUpdate},"updated 5 years ago")))},ne=a(325),oe=a.n(ne),le=function(e){var t=e.link,a=e.children,n=e.label,o=t?u.a.createElement(N.a,{to:t,linkName:a,isExternal:!0}):u.a.createElement(u.a.Fragment,null,a);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:oe.a.profileInfo__label},n),u.a.createElement("div",{className:oe.a.profileInfo__data},o))},re=function(e){var t=e.aboutMe,a=e.lookingForAJob,n=e.description;return u.a.createElement("div",{className:oe.a.profileInfo},u.a.createElement(le,{label:"About me:"},t),u.a.createElement(le,{label:"Looking for a job:"}," ",a?"Yes":"No"),u.a.createElement(le,{label:"Professional skills:"},n," "))},ie=a(107),se=a(59),ce=Object(R.a)(function(e){var t=e.contacts,a=e.isEdit;return t?a?u.a.createElement("div",{className:oe.a.profileInfo},Object.keys(t).map(function(e){return u.a.createElement(le,{label:e,key:e},u.a.createElement(ie.a,{name:"contacts."+e,component:se.a}))})):u.a.createElement("div",{className:oe.a.profileInfo},Object.keys(t).map(function(e){if(t[e])return u.a.createElement(le,{link:t[e],label:e,key:e}," ",t[e]," ")})):u.a.createElement("div",null)}),ue=a(17),pe=a.n(ue),me=a(108),de=a(78),fe=function(e){var t=0;return Object.keys(e).map(function(a){a&&e[a]&&t++}),t},he=a(48),Ee=(Object(de.a)(4),Object(me.a)({form:"updateProfile",enableReinitialize:!0})(function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:F.a.userInfo__header},u.a.createElement("div",{className:F.a.userInfo__header_edited},u.a.createElement("span",null,"Your full name:"),u.a.createElement("div",{className:pe.a.loginInput+" "+pe.a.loginInput__profile},u.a.createElement(ie.a,{name:"fullName",component:se.a,validate:[de.b]}))),e.children),u.a.createElement("div",null,u.a.createElement("div",{className:oe.a.profileInfo},u.a.createElement(le,{label:"About me:"},u.a.createElement(ie.a,{name:"aboutMe",component:se.a})),u.a.createElement(le,{label:"Looking for a job:"},u.a.createElement(ie.a,{name:"lookingForAJob",component:"input",type:"checkbox"})),u.a.createElement(le,{label:"Professional skills"},u.a.createElement(ie.a,{name:"lookingForAJobDescription",component:se.a,multiline:!0}))),u.a.createElement(ce,{contacts:e.user.contacts,isEdit:!0,text:"contacts",count:fe(e.user.contacts)}),u.a.createElement("div",{className:pe.a.formBlock__events_cancel},u.a.createElement(N.a,{linkName:"Cancel",onClick:e.onCancel})),u.a.createElement("div",{className:pe.a.loginButton+" "+pe.a.loginButton__unshifted},u.a.createElement(he.a,null,"Save changes")),e.error&&u.a.createElement("div",{className:pe.a.formError}," ",e.error," ")))})),_e=function(e){var t=e.user,a=e.setStatusRequest,o=e.statusText,l=e.isOwner,r=e.uploadProfile,i=e.isEdit,s=e.profileUpdateFetching,p=Object(n.a)(e,["user","setStatusRequest","statusText","isOwner","uploadProfile","isEdit","profileUpdateFetching"]),m=Object(c.useState)(!1),d=Object(O.a)(m,2),f=d[0],h=d[1];Object(c.useEffect)(function(){h(i)},[i]);return u.a.createElement(j.a,{text:t.fullName},u.a.createElement("div",{className:F.a.profilePage},u.a.createElement($,Object.assign({user:t,isOwner:l,setEditMode:function(){h(!0)}},p)),u.a.createElement("div",{className:F.a.profileData},f&&l?u.a.createElement(Ee,{onSubmit:function(e){r(e)},user:t,initialValues:t,onCancel:function(){h(!1)}},u.a.createElement(ae,{statusText:o}),s&&u.a.createElement("h2",null,"profile updating...")):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:F.a.userInfo__header},t.fullName,u.a.createElement(ae,{statusText:o,setStatus:a,isOwner:l})),u.a.createElement(re,{lookingForAJob:t.lookingForAJob,aboutMe:t.aboutMe,description:t.lookingForAJobDescription}),u.a.createElement(ce,{text:"Contacts",contacts:t.contacts,count:fe(t.contacts)}),p.children))))},be=a(49),ge=a(159),ke=a(327),ve=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={editMode:!1},a.uploadUserProfile=function(){var e=a.props.match.params.userId||a.props.myId;a.props.getStatusRequest(e),a.props.getProfileRequest(e),a.props.getFriendsById(1,e),a.props.getWallRequest(e),a.props.getPhotosRequest(e)},a.setEditMode=function(e){a.setState({editMode:e||!1})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setEditMode(this.props.isEdit),this.uploadUserProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!=this.props.match.params.userId&&this.uploadUserProfile(),e.profileUpdateFetching&&!this.props.profileUpdateFetching&&this.setEditMode(!1),!e.profileUpdateFetching&&this.props.profileUpdateFetching&&this.setEditMode(!0)}},{key:"render",value:function(){var e=this.props,t=e.match,a=(e.getProfileRequest,e.getFriendsById,e.isEdit),o=Object(n.a)(e,["match","getProfileRequest","getFriendsById","isEdit"]);return this.props.profileFetch?u.a.createElement(be.a,null):u.a.createElement(_e,Object.assign({},o,{isEdit:this.state.editMode,isOwner:this.props.isAuth&&(t.params.userId==this.props.myId||a)}),u.a.createElement(ge.a,{text:"Wall",isAuth:!0,pageId:o.user.userId,posts:this.props.posts,count:this.props.postsCount,addPost:this.props.AddNewPostRequest}))}}]),t}(u.a.Component);t.default=Object(m.d)(d.f,ke.a,Object(p.b)(function(e){return{user:Object(h.b)(e),statusText:e.profile.statusText,profileUpdateFetching:e.profile.profileUpdateFetching,myId:e.auth.myId,isAuth:e.auth.isAuth,profileFetch:e.profile.profileFetch,profileFollowingFetch:Object(h.a)(e),friends:Object(f.a)(e),rating:Object(h.d)(e),posts:Object(E.a)(e),postsCount:e.wall.totalCount,photos:Object(_.b)(e),photosTotalCount:e.photos.totalCount}},{setStatusRequest:b.d,getProfileRequest:b.a,getStatusRequest:b.b,uploadProfile:b.h,uploadPhoto:b.g,getFriendsById:g.c,singleProfileFollow:b.e,singleProfileUnfollow:b.f,AddNewPostRequest:k.a,getWallRequest:k.b,getPhotosRequest:v.b}))(ve)}}]);
//# sourceMappingURL=3.1f414b8a.chunk.js.map