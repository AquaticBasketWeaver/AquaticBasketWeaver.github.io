(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=(a(97),a(16)),l=a(14),m=a(159),s=a(13),u=a(170),d=a(160),p=a(48),g=a(162),f=a(174),b=a(163),h=a(164),E=a(172),v=a(165),x=a(173),y=a(166),j=a(167),k=Object(m.a)((function(){return{rightButtonGroup:{display:"flex",width:"100%",justifyContent:"flex-end"},toolbarContainer:{display:"flex",alignItems:"center",maxWidth:"1140px",width:"100%"},toolbar:{justifyContent:"center"},toolbarButton:{textTransform:"none"},appBar:{position:"fixed",top:"0",right:"0",left:"0",zIndex:"1430",boxShadow:"none",backgroundColor:"transparent",transition:"background-color 200ms linear",height:"".concat(64,"px")},appBarScroll:{backgroundColor:"#fff",boxShadow:"0 .5rem 1rem rgba(0,0,0,.15)",transition:"background-color 200ms linear",display:"flex",justifyContent:"center"},appBarNoBoxShadow:{boxShadow:"none"},navButtonText:{color:"rgba(255,255,255,.7)",fontWeight:"bold"},navButtonTextScroll:{color:"black"},menuButton:{color:"black"},list:{paddingTop:"".concat(64,"px"),paddingLeft:"".concat(45,"px")}}}));var w=function(e){var t=e.sections,a=k(),r=Object(s.a)(),i=Object(n.useState)("top"),m=Object(c.a)(i,2),w=m[0],C=m[1],N=Object(n.useState)(!1),O=Object(c.a)(N,2),I=O[0],B=O[1],T=Object(n.useState)(!1),W=Object(c.a)(T,2),S=W[0],L=W[1];Object(n.useEffect)((function(){window.innerWidth<r.breakpoints.values.sm?B(!0):B(!1)}),[r.breakpoints.values.sm]),Object(n.useEffect)((function(){var e=document.addEventListener("scroll",(function(e){document.scrollingElement.scrollTop>=120?""!==w&&C(""):"top"!==w&&C("top")})),t=window.addEventListener("resize",(function(e){window.innerWidth<r.breakpoints.values.sm?B(!0):(B(!1),L(!1))}));return function(){document.removeEventListener("scroll",e),document.removeEventListener("resize",t)}}),[w,I,r.breakpoints.values.sm]);var _=function(e){e?l.scroller.scrollTo(e,{duration:800,delay:0,smooth:"easeInOutCubic",offset:-64}):l.animateScroll.scrollToTop({duration:800,delay:0,smooth:"easeInOutCubic"})},z=function(e,t){return"".concat(e," ").concat((!w||I)&&t)};return o.a.createElement(h.a,{className:z(a.appBar,a.appBarScroll)+" "+(S&&a.appBarNoBoxShadow),position:"static"},o.a.createElement(E.a,{anchor:"top",open:S,onClose:function(){L(!1)}},o.a.createElement(g.a,{className:a.list},Object.entries(t).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return o.a.createElement(f.a,{button:!0,key:a,onClick:function(){L(!1),_(n)}},o.a.createElement(b.a,{primary:n}))})))),o.a.createElement(v.a,{className:a.toolbar},o.a.createElement(u.a,{className:a.toolbarContainer},o.a.createElement(x.a,{smUp:!0},o.a.createElement(y.a,{edge:"start",className:z(null,a.menuButton),onClick:function(){L(!0)},color:"inherit","aria-label":"menu"},o.a.createElement(j.a,null))),o.a.createElement(d.a,{className:a.toolbarButton,onClick:function(){L(!1),_()}},o.a.createElement(p.a,{className:z(a.navButtonText,a.navButtonTextScroll),variant:"h6"},"Welcome")),o.a.createElement(x.a,{only:"xs"},o.a.createElement(u.a,{className:a.rightButtonGroup},Object.entries(t).map((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return o.a.createElement(d.a,{key:n,className:a.toolbarButton,onClick:function(){_(r)}},o.a.createElement(p.a,{className:z(a.navButtonText,a.navButtonTextScroll),variant:"body1"},r))})))))))},C=a(39),N=a.n(C),O=Object(m.a)((function(){return{container:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"linear-gradient(to bottom,rgba(38,149,235,.3) 0,rgba(38,149,235,.3) 100%), url(".concat(N.a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",height:"100vh"},divider:{width:"100%",marginTop:"1.5em",marginBottom:"1.5em",borderColor:"#2695eb",maxWidth:"3.25rem",borderWidth:".2rem",borderTop:0,borderLeft:0,borderRight:0},caption:{maxWidth:"66%",textAlign:"center",width:"760px",color:"rgba(255,255,255,.75)"},title:{color:"white",fontWeight:"bold"},img:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:-1,overflow:"hidden"}}}));var I=function(e){e.id;var t=O();return o.a.createElement(u.a,{className:t.container},o.a.createElement(p.a,{className:t.title,variant:"h3"},"WELCOME"),o.a.createElement("hr",{className:t.divider}),o.a.createElement(p.a,{className:t.caption,variant:"h6"},"Hi, my name is Ivan Lam and here you'll be able to see some of the things I did, as well as the hobbies that I'm interested in"))},B=a(32),T=Object(m.a)((function(){return{container:function(e){return Object(B.a)({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"8rem 0",backgroundColor:"#2695eb"},e&&e.container)},title:function(e){return Object(B.a)({color:"white"},e&&e.title)},divider:function(e){return Object(B.a)({width:"100%",marginTop:"1.5em",marginBottom:"1.5em",maxWidth:"3.25rem",borderWidth:".2rem",borderTop:0,borderLeft:0,borderRight:0,borderColor:"white"},e&&e.divider)},caption:function(e){return Object(B.a)({color:"rgba(255,255,255,.75)",maxWidth:"66%",textAlign:"center",width:"760px"},e&&e.caption)},children:function(e){return Object(B.a)({marginTop:"3rem"},e&&e.children)}}}));var W=function(e){var t=e.title,a=e.caption,n=e.style,r=e.children,i=e.id,c=T(n);return o.a.createElement(u.a,{className:c.container,id:i},o.a.createElement(p.a,{className:c.title,variant:"h4"},t),a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:c.divider}),o.a.createElement(p.a,{className:c.caption,variant:"body1"},a)),r&&o.a.createElement(u.a,{className:c.children},r))};var S=function(e){var t=e.id;return o.a.createElement(l.Element,{name:t},o.a.createElement(W,{title:"About Me",caption:"Hey there! I am a fourth year computer science student currently studying at the University of Waterloo.\n      I have a passion for programming, technology, and in general, learning new things so that I can apply them in creative ways.\n      Here you can follow me as I try my hand with photography, as well as view some of the things I've done during my co-op terms.\n      I'm also starting to dabble with a bit of guitar and music in general, so be prepared for that in the future!"}))},L=a(54),_=a.n(L),z=a(78),A=a(168),D=a(79),P=a.n(D),R=a(80),H=a.n(R),M=a(81),F=a.n(M),G=a(82),J=a.n(G),U=a(83),V=a.n(U),Y=a(110),Z=Object(m.a)((function(){return{listContainer:{padding:"3rem 3rem"},workLogo:{maxWidth:"100%",maxHeight:"100%",margin:"auto"},logoContainer:{display:"flex",alignItems:"center",justifyContent:"center"},orgInfo:{color:"#6c757d"},divider:{marginTop:"1.5em",marginBottom:"1.5em",borderWidth:"2px",borderTop:0,borderLeft:0,borderRight:0,borderColor:"#20baf7"},orgContainer:{paddingRight:"3rem"},orgPoints:{marginBottom:"1rem"},pointsContainer:{marginTop:".5rem",marginBottom:"2rem"}}}));var q=function(e){var t=e.id,a=Z(),r=Object(n.useState)({}),i=Object(c.a)(r,2),m=i[0],s=i[1],d={zenreachLogo:H.a,ctrlVLogo:F.a,ttcLogo:J.a,bonfireLogo:V.a},g=function(e){return o.a.createElement(u.a,{className:a.listContainer,key:e.organization},o.a.createElement(A.a,{container:!0},o.a.createElement(A.a,{item:!0,sm:12,md:6},o.a.createElement(u.a,{className:a.orgContainer},o.a.createElement(p.a,{variant:"h4"},e.organization),e.position.map((function(e){return o.a.createElement(u.a,{className:a.pointsContainer,key:e.title},o.a.createElement(p.a,{className:a.orgInfo,variant:"subtitle1"},e.title+" | "+e.location),o.a.createElement(p.a,{className:a.orgInfo,variant:"subtitle1"},e.duration),o.a.createElement("hr",{className:a.divider}),function e(t){var n=t.points;return o.a.createElement("ul",null,n.map((function(t,n){var r=t.point,i=t.points;return o.a.createElement("li",{key:n},o.a.createElement(p.a,{className:a.orgPoints,variant:"body1"},r),i&&e({points:i}))})))}(e))})))),o.a.createElement(x.a,{smDown:!0},o.a.createElement(A.a,{className:a.logoContainer,item:!0,md:6},o.a.createElement("img",{className:a.workLogo,src:d[e.logoImg],alt:e.logoImg})))))};return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(_.a.mark((function e(){var t,a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P.a);case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,n=Y.safeLoad(a),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(l.Element,{name:t},o.a.createElement(u.a,{className:a.workExperienceContainer},o.a.createElement(W,{title:"Work Experience",style:{container:{backgroundColor:"#1e7ad6"}}}),m["Work Experience"]&&m["Work Experience"].map((function(e){return g(e)}))))},K=a(171),Q=a(55),X=a.n(Q),$=a(56),ee=a.n($),te=a(57),ae=a.n(te),ne=a(58),oe=a.n(ne),re=a(59),ie=a.n(re),ce=a(60),le=a.n(ce),me=a(61),se=a.n(me),ue=a(62),de=a.n(ue),pe=a(63),ge=a.n(pe),fe=a(64),be=a.n(fe),he=a(65),Ee=a.n(he),ve=Object(m.a)((function(){return{modalImg:{maxHeight:"90%",maxWidth:"90%"},modalContainer:{display:"flex",justifyContent:"center",alignItems:"center",zIndex:"1500 !important"},thumbnail:{maxWidth:"100%",height:"auto",display:"block",position:"relative"},card:{width:"95%",maxWidth:"85em",margin:"auto"},cardImage:{width:"100%"},tint:{height:"100%",width:"100%",position:"relative",transition:"0.5s",zIndex:"1",cursor:"pointer",top:"-100%","&:hover":{backgroundColor:"rgba(38,149,235,.3)"}}}}));var xe=function(e){var t=e.id,a=ve(),r=Object(n.useState)(!1),i=Object(c.a)(r,2),m=i[0],s=i[1],d=Object(n.useState)(),p=Object(c.a)(d,2),g=p[0],f=p[1],b=function(e,t){return{thumbnail:e,image:t}},h=[b(X.a,X.a),b(ee.a,ee.a),b(ae.a,ae.a),b(N.a,N.a),b(oe.a,oe.a),b(ie.a,ie.a),b(le.a,le.a),b(Ee.a,Ee.a),b(de.a,de.a),b(be.a,be.a),b(ge.a,ge.a),b(se.a,se.a)];return o.a.createElement(l.Element,{name:t},o.a.createElement(u.a,null,o.a.createElement(W,{title:"Photography",style:{container:{backgroundColor:"#1e7ad6"}}}),o.a.createElement(A.a,{container:!0,spacing:0},h.map((function(e,t){return o.a.createElement(A.a,{key:t,className:a.thumbnailContainer,item:!0,md:4,sm:6,xs:12},o.a.createElement("img",{className:a.thumbnail,src:e.thumbnail,alt:""}),o.a.createElement(x.a,{xsDown:!0},o.a.createElement("div",{className:a.tint,onClick:function(){return t=e.image,f(t),void s(!0);var t}})))}))),o.a.createElement(K.a,{className:a.modalContainer,open:m,onClose:function(){s(!1)}},o.a.createElement("img",{className:a.modalImg,src:g,alt:""}))))},ye=a(169),je=Object(m.a)((function(){return{container:{},emailContainer:{fontSize:"3em",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},email:{marginTop:"1rem",color:"#2695eb",textDecoration:"none"},emailIcon:{color:"#6c757d"}}}));var ke=function(e){var t=e.id,a=je();return o.a.createElement(l.Element,{name:t},o.a.createElement(u.a,null,o.a.createElement(W,{title:"Contact Me",caption:"Want to get in touch? You're welcome to send me an e-mail and I'll respond as soon as possible!",style:{container:{backgroundColor:"white"},title:{color:"rgb(33, 37, 41)"},caption:{color:"rgb(108, 117, 125)"},divider:{borderColor:"rgb(38, 149, 235)"}}},o.a.createElement(u.a,{className:a.emailContainer},o.a.createElement(ye.a,{className:a.emailIcon,fontSize:"inherit"}),o.a.createElement(p.a,{className:a.email,variant:"body1",component:"a",href:"mailto:Lamivan1668@gmail.com"},"Lamivan1668@gmail.com")))))};var we=function(){var e={about:"About",work:"Work",photography:"Photography",contact:"Contact"};return o.a.createElement("div",{className:"App"},o.a.createElement(w,{sections:e}),o.a.createElement(I,null),o.a.createElement(S,{id:e.about}),o.a.createElement(q,{id:e.work}),o.a.createElement(xe,{id:e.photography}),o.a.createElement(ke,{id:e.contact}))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(we,null)),document.getElementById("root"))},39:function(e,t,a){e.exports=a.p+"static/media/dock_view-min.1c326a98.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/carousel-min.43b046a8.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/close_up_bee-min.dcd6c80f.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/dark_dock-min.f3344a24.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/ferry-min.a2250fce.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/hk_at_night-min.1252ed89.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/hk_harbor-min.8e810f03.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/hk_harbor_with_ferry-min.1e9db561.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/green_forestry-min.fa56a45f.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/Purple_Flower-min.2005a32e.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/Riverwood-min.ce5c14aa.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/Toronto_on_Trees-min.f1cca66a.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/resume.02c26157.yaml"},80:function(e,t,a){e.exports=a.p+"static/media/Zenreach-logo.b628bc80.png"},81:function(e,t,a){e.exports=a.p+"static/media/CtrlV-logo.1409980e.png"},82:function(e,t,a){e.exports=a.p+"static/media/TTC-logo.e84c427c.png"},83:function(e,t,a){e.exports=a.p+"static/media/bonfire-logo.7ef56b30.svg"},92:function(e,t,a){e.exports=a(136)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.e384b964.chunk.js.map