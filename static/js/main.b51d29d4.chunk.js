(this["webpackJsonpcv-rlun"]=this["webpackJsonpcv-rlun"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/bachelor_thesis_marcus_robin_2019.b3439e10.pdf"},,function(e,t,a){e.exports=a.p+"static/media/react.c76a4c67.svg"},,,function(e,t,a){e.exports=a.p+"static/media/ocean.881f1e95.mp4"},,,function(e,t,a){e.exports=a.p+"static/media/github.d68d3f2f.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.e3b6f347.svg"},function(e,t,a){e.exports=a.p+"static/media/pdf.a9542306.svg"},function(e,t,a){e.exports=a.p+"static/media/mobile-github.6cb06a87.svg"},function(e,t,a){e.exports=a.p+"static/media/mobileLinkedIn.f144f7d9.svg"},function(e,t,a){e.exports=a.p+"static/media/mobile-pdf.44faeb03.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.0cb62d1f.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.8b980e33.svg"},function(e,t,a){e.exports=a.p+"static/media/work.f8b962e2.svg"},function(e,t,a){e.exports=a.p+"static/media/education.9d2a4bb2.svg"},function(e,t,a){e.exports=a.p+"static/media/mini-work.ba2502dd.svg"},function(e,t,a){e.exports=a.p+"static/media/mini-education.3f6cf7f1.svg"},,function(e,t,a){e.exports=a.p+"static/media/home.a7949942.svg"},function(e,t,a){e.exports=a.p+"static/media/else.2ffe822e.svg"},function(e,t,a){e.exports=a.p+"static/media/work.8debe8f5.svg"},function(e,t,a){e.exports=a.p+"static/media/education.f3a86312.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.1e88d373.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.faeb59fc.svg"},function(e,t,a){e.exports=a.p+"static/media/pinpoint.9bf51505.svg"},function(e,t,a){e.exports=a.p+"static/media/license.6b604c07.svg"},function(e,t,a){e.exports=a.p+"static/media/language.ef2b09c0.svg"},function(e,t,a){e.exports=a.p+"static/media/grow.dcfd1a08.svg"},function(e,t,a){e.exports=a.p+"static/media/sql.04e43eeb.svg"},function(e,t,a){e.exports=a.p+"static/media/mongoDB.2a6a909d.svg"},function(e,t,a){e.exports=a.p+"static/media/express.5ca35ea0.svg"},function(e,t,a){e.exports=a.p+"static/media/copy.87e96632.svg"},function(e,t,a){e.exports=a.p+"static/media/ga.539696ff.svg"},function(e,t,a){e.exports=a.p+"static/media/gtm.56fff9eb.svg"},function(e,t,a){e.exports=a.p+"static/media/seo.202564c0.svg"},function(e,t,a){e.exports=a.p+"static/media/model.a3344eea.svg"},function(e,t,a){e.exports=a.p+"static/media/graphQL.f6526dbd.svg"},function(e,t,a){e.exports=a.p+"static/media/adobe.9825bf47.svg"},function(e,t,a){e.exports=a.p+"static/media/css.f0c47fd2.svg"},function(e,t,a){e.exports=a.p+"static/media/angular.23589c85.svg"},function(e,t,a){e.exports=a.p+"static/media/node.c508b582.svg"},function(e,t,a){e.exports=a.p+"static/media/redux.461013a5.svg"},function(e,t,a){e.exports=a.p+"static/media/wordpress.32815377.svg"},function(e,t,a){e.exports=a.p+"static/media/react.9de66b83.svg"},function(e,t,a){e.exports=a(73)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),l=a.n(r),s=a(2),o=(a(64),a(4)),c=a(1),m=function(e,t){return function(t,a){var n=Object(c.a)({},a().menu.menu.fields.menuInformation);n.navs.find((function(t){t.active=!1,t.css="menu__nav__section__inner__arc--inactive",t.key==e.key&&(t.reload=Math.random(),t.active=!0,t.css="menu__nav__section__inner__arc")})),e&&t({type:"MENU_INFORMATION",payload:n})}},_=function(e){return function(t,a){var n=a().header.header.fields.hamburger;"toggle"===e&&(n.active=!n.active),t({type:"SIDENAV_TOGGLE",payload:n})}},d=a(11),u=a.n(d),p=(a(65),Object(s.b)((function(e){return{banner:e.banner.banner,status:e}}),{setBannerInformation:function(){return function(e,t){e({type:"BANNER_INFORMATION",payload:{}})}},toggleSidenav:_,manipulateBannerState:function(e){return function(t,a){var n=Object(c.a)({},a().banner.banner.fields.bannerInformation);console.log(n),n.sites.find((function(t){t.active=!1,t.key==e.key&&(t.reload=Math.random(),t.active=!0)})),e&&t({type:"BANNER_INFORMATION",payload:n})}},manipulateMenuState:m})((function(e){Object(n.useEffect)((function(){e.setBannerInformation()}),[]);var t=function(t){e.manipulateBannerState(t),e.manipulateMenuState(t)},a=e.banner.fields.bannerInformation,r=e.status.header.status,l=e.status.menu.menu.fields.menuInformation.navs.find((function(e){return e.active}));return i.a.createElement("div",{className:r&&r.active&&window.screen.width>1350?"banner-flex":"banner"},i.a.createElement("div",{className:"vid"},i.a.createElement("div",{className:"vid__bg"}),i.a.createElement("video",{className:"vid__vid",autoPlay:!0,loop:!0,muted:!0},i.a.createElement("source",{src:u.a,type:"video/mp4"}),i.a.createElement("source",{src:u.a,type:"video/ogg"}),"Your browser does not support the standard html video tag. Please update your software.")),i.a.createElement("div",{className:"banner__container"},i.a.createElement("div",{className:"banner__pb"}),i.a.createElement("h4",{className:"banner__title"},a.name),i.a.createElement("p",{className:"banner__undertitle"},a.title),i.a.createElement("div",{className:"banner__navs"},i.a.createElement("ul",{className:"banner__navs__ul"},i.a.createElement("li",{onClick:function(){return t(a.sta)},style:"sta"===l.key?{color:"white",textShadow:"0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)"}:{color:""}},a.sta.title),i.a.createElement("li",{onClick:function(){return t(a.com)},style:"com"===l.key?{color:"white",textShadow:"0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)"}:{color:""}},a.com.title),i.a.createElement("li",{onClick:function(){return t(a.exp)},style:"exp"===l.key?{color:"white",textShadow:"0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)"}:{color:""}},a.exp.title),i.a.createElement("li",{onClick:function(){return t(a.edu)},style:"edu"===l.key?{color:"white",textShadow:"0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)"}:{color:""}},a.edu.title),i.a.createElement("div",{className:"underbar"})))))}))),v=(a(66),a(14)),g=a.n(v),f=a(15),b=a.n(f),h=a(16),E=a.n(h),k=a(6),N=a.n(k),x=Object(s.b)((function(e){return{header:e.header.header,status:e}}),{headerState:function(){return function(e,t){e({type:"HEADER_STATE",payload:{}})}},toggleSidenav:_})((function(e){Object(n.useEffect)((function(){e.headerState(),e.toggleSidenav()}),[]);var t=e.status.header.status;return i.a.createElement("div",{className:t&&t.active?"header-flex":"header"},i.a.createElement("div",{className:"header__left"},i.a.createElement("div",{id:"nav-icon3",onClick:function(){return t="toggle",void e.toggleSidenav(t);var t},className:t&&t.active?"open":"false"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{className:"header__middle"},i.a.createElement("div",{className:"header-middle__cols"},i.a.createElement("a",{href:"https://www.github.com/robinlundgren"},i.a.createElement("img",{className:"header-middle__cols__img",src:g.a}))),i.a.createElement("div",{className:"header-middle__cols"},i.a.createElement("a",{href:"https://www.linkedin.com/in/robin-lundgren-301a46179"},i.a.createElement("img",{className:"header-middle__cols__img",src:b.a}))),i.a.createElement("div",{className:"header-middle__cols"},i.a.createElement("a",{href:N.a},i.a.createElement("img",{className:"header-middle__cols__img",src:E.a})))),i.a.createElement("div",{className:"header__right"},i.a.createElement("p",{className:"header__right__text"},"robin lundgren @ 2020")))})),w=a(17),y=a.n(w),O=a(18),S=a.n(O),I=a(19),C=a.n(I),j=a(20),T=a.n(j),A=a(21),M=a.n(A),R=(a(67),Object(s.b)((function(e){return{status:e}}),{toggleSidenav:_,setMenuInformation:function(){return function(e,t){e({type:"MENU_INFORMATION",payload:{}})}},manipulateMenuState:m})((function(e){Object(n.useEffect)((function(){e.setMenuInformation()}),[]);var t=e.status.menu.menu.fields.menuInformation,a=e.status.header.status;return i.a.createElement("div",{className:a&&a.active?"menu":"menu-flex"},i.a.createElement("div",{className:"menu__top"},i.a.createElement("div",{className:"menu__top__link--start"},i.a.createElement("a",{href:"https://www.linkedin.com/in/robin-lundgren-301a46179"},i.a.createElement("img",{className:"menu__top__link__img",src:S.a}))),i.a.createElement("div",{className:"menu__top__link"},i.a.createElement("a",{href:"https://www.github.com/robinlundgren"},i.a.createElement("img",{className:"menu__top__link__img",src:y.a}))),i.a.createElement("div",{className:window.screen.width<510?"menu__top__link":"menu__top__link--end"},i.a.createElement("a",{href:N.a},i.a.createElement("img",{className:"menu__top__link__img",src:C.a}))),window.screen.width<510&&i.a.createElement("div",{onClick:function(){return t="toggle",void e.toggleSidenav(t);var t},className:"menu__top__link--end"},i.a.createElement("div",{className:"divX"},i.a.createElement("p",{className:"xxx"},"X")))),i.a.createElement("div",{className:"menu__banner"},i.a.createElement("div",{className:"menu__banner__pb"}),i.a.createElement("h5",{className:"menu__banner__title"},t.name),i.a.createElement("p",{className:"menu__banner__subtitle"},t.title)),i.a.createElement("div",{className:"menu__nav-divider"},i.a.createElement("div",{className:"menu__nav-divider__innerdiv"},i.a.createElement("p",{className:"menu__nav-divider__innerdiv__title"},t.nav))),i.a.createElement("div",{className:"menu__nav"},t.navs.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:function(){return function(t,a){e.manipulateMenuState(t,a),window.screen.width<510&&e.toggleSidenav("toggle")}(t,a)},className:"menu__nav__section"},i.a.createElement("div",{className:"menu__nav__section__inner"},i.a.createElement("img",{className:"menu__nav__section__inner__img",src:t.img})),i.a.createElement("div",{className:"menu__nav__section__inner"},i.a.createElement("p",{className:"menu__nav__section__inner__title"},t.title)),i.a.createElement("div",{className:"menu__nav__section__inner"},i.a.createElement("div",{className:t.css}))))}))),i.a.createElement("div",{className:"menu__nav-divider"},i.a.createElement("div",{className:"menu__nav-divider__innerdiv"},i.a.createElement("p",{className:"menu__nav-divider__innerdiv__title"},t.kon))),i.a.createElement("div",{className:"menu__contact"},i.a.createElement("div",{className:"menu__contact__phone"},i.a.createElement("img",{className:"menu__contact__phone__img",src:T.a,alt:"phone"}),i.a.createElement("p",{className:"menu__contact__phone__text"},"076 038 93 27"," ")),i.a.createElement("div",{className:"menu__contact__mail"},i.a.createElement("img",{className:"menu__contact__mail__img",src:M.a,alt:"phone"}),i.a.createElement("p",{className:"menu__contact__mail__text"},"robinlundgrenska@gmail.com"))))}))),F=function(){return function(e,t){e({type:"TIMELINE_INFORMATION",payload:{}})}},B=a(22),L=a.n(B),V=a(23),K=a.n(V),U=a(24),q=a.n(U),D=a(25),G=a.n(D),H=a(8),P=a.n(H),J=(a(68),Object(s.b)((function(e){return{timeline:e.timeline.timeline,status:e}}),{setTimelineInformation:F,toggleSidenav:_})((function(e){var t=e.props,a=e.compKey,r=e.value,l=e.height,s=i.a.useState(0),c=Object(o.a)(s,2),m=c[0],_=c[1],d=i.a.useState(0),u=Object(o.a)(d,2),p=u[0],v=u[1],g=i.a.useRef(null);Object(n.useEffect)((function(){g.current&&(_(l),v(1))}),[]);var f=t.status.menu.menu.fields.menuInformation.navs.find((function(e){return e.active})),b=t.status.header.status;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:g,className:b&&b.active&&window.screen.width>1350?"timeline-flex":"timeline",style:{height:"".concat(m,"px")}},i.a.createElement("div",{className:"timeline__position-divider"}),i.a.createElement("div",{className:"timeline__line"}),f.key==="".concat(a)&&r.map((function(e){return i.a.createElement("div",{className:"timeline__loop"},i.a.createElement("div",{className:"timeline__loop__arc"},i.a.createElement("div",{className:"timeline__loop__arc__inner"},window.screen.width>675?i.a.createElement("img",{className:"timeline__loop__arc__inner__img",src:"exp"===f.key?L.a:K.a}):i.a.createElement("img",{className:"timeline__loop__arc__inner__img",src:"exp"===f.key?q.a:G.a}))),i.a.createElement("div",{className:e.noClass?"":"timeline__loop__line"}),i.a.createElement("div",{className:e.stamp,ref:g,style:{opacity:"".concat(p)}},i.a.createElement("h4",{className:"stamp-text"},e.timestamp)),i.a.createElement("div",{className:"timeline__loop__content",ref:g,style:{opacity:"".concat(p)}},i.a.createElement("div",{className:e.noClass?e.noClassClass:e.class},i.a.createElement("h3",{className:"timeline__loop__content__title"},e.title),i.a.createElement("h5",{className:"timeline__loop__content__subtitle"},e.subtitle),i.a.createElement("p",{className:"timeline__loop__content__info"},e.information)),i.a.createElement("div",{className:e.noClass?e.noTail:e.tail})))}))))}))),W=(a(69),Object(s.b)((function(e){return{start:e.start.start,status:e}}),{toggleSidenav:_,setStartInformation:function(){return function(e,t){e({type:"START_INFORMATION",payload:{}})}}})((function(e){Object(n.useEffect)((function(){e.setStartInformation()}),[]);var t=e.start.fields.startInformation,a=(e.status.menu.menu.fields.menuInformation.navs.find((function(e){return e.active})),e.status.header.status);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a&&a.active&&window.screen.width>1350?"start-flex":"start"},i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"start__intro"},i.a.createElement("div",{className:"start__intro__wp-container"},i.a.createElement("div",{className:"start__intro__wp-container__img"},i.a.createElement("div",{className:"start__intro__wp-container__img__overlay"})))),i.a.createElement("div",{className:"start__intro-text"},i.a.createElement("div",{className:"start__intro-text__grid"},i.a.createElement("div",{className:"start__intro-text__grid__title"},"INTRODUKTION"),i.a.createElement("div",{className:"start__intro-text__grid__text"},t.intro))),i.a.createElement("div",{className:"show__header"},i.a.createElement("span",{className:"show__header__text"},"Kontakt")),i.a.createElement("div",{className:"start__middle-section"},t.contact.map((function(e){return i.a.createElement("div",{className:e.bg},i.a.createElement("p",{className:"start__middle-section__square__title"},e.title),i.a.createElement("img",{className:"start__middle-section__square__img",src:e.img}),i.a.createElement("p",{className:"start__middle-section__square__description"},e.value))}))),i.a.createElement("div",{className:"show__header"},i.a.createElement("span",{className:"show__header__text"},"Referenser")),i.a.createElement("div",{className:"start__reference"},i.a.createElement("div",{className:"start__reference__images"},i.a.createElement("div",{className:"start__reference__images__hedin"}),i.a.createElement("div",{className:"start__reference__images__malmberg"})))))}))),Q=function(e){var t=e.data;return i.a.createElement("div",{className:"column-values"},i.a.createElement("div",{className:"columns row"},t.map((function(e){return i.a.createElement("div",{className:"col-6 col-md-4 col-lg-3 text-center p-2"},i.a.createElement("img",{src:e.icon}),i.a.createElement("p",{className:"mt-3 font-weight-bold text-uppercase text-white"},e.title))}))))},X=function(e){var t=e.rangeType,a=e.value,n=e.skill;return i.a.createElement("div",{className:"slider-wrapper"},i.a.createElement("p",{className:"slider-wrapper__title"},n),i.a.createElement("section",null,i.a.createElement("input",{className:"".concat(t),type:"range",value:a,min:1,max:10,readOnly:!0})))},Y=(a(70),Object(s.b)((function(e){return{show:e.show.show,status:e}}),{toggleSidenav:_,setShowInformation:function(){return function(e,t){e({type:"SHOW_INFORMATION",payload:{}})}}})((function(e){Object(n.useEffect)((function(){e.setShowInformation()}),[]);var t=e.show.fields.showInformation,a=e.status.header.status;return console.log(t),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a&&a.active&&window.screen.width>1350?"show-flex":"show"},i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"show__header"},i.a.createElement("span",{className:"show__header__text"},t.title1)),i.a.createElement("div",{className:"show__featured"},t.features.map((function(e){return i.a.createElement("a",{className:e.style},i.a.createElement("div",{className:e.bg}),i.a.createElement("div",{className:"show__featured__text-block"},i.a.createElement("div",{className:"show__featured__text-block__overline"}),i.a.createElement("div",{className:"show__featured__text-block__subtitle"},e.title)))}))),i.a.createElement("div",{className:"show__header"},i.a.createElement("span",{className:"show__header__text"},t.title2)),i.a.createElement("div",{className:"show__flex-wrapper"},i.a.createElement("div",{className:"show__flex-wrapper__main"},i.a.createElement(Q,{data:t.columnValues})),i.a.createElement("div",{className:"show__flex-wrapper__statistics"},i.a.createElement("h5",{className:"text-uppercase font-weight-bold"},t.fieldName),t.sliderValues.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(X,{key:t,skill:e.skill,rangeType:e.key,value:e.value}))}))))))}))),$=(a(71),function(){var e=i.a.useState(0),t=Object(o.a)(e,2),a=t[0],r=t[1],l=i.a.useRef(null);return Object(n.useEffect)((function(){l.current&&r(1)}),[]),i.a.createElement("footer",{className:"page-footer"},i.a.createElement("div",{ref:l,className:"footer",style:{opacity:"".concat(a)}},i.a.createElement("p",{className:"footer__text"},"powered by",i.a.createElement("span",{className:"footer__img"},i.a.createElement("img",{src:P.a,className:"logo"})))))}),z=(a(72),Object(s.b)((function(e){return{status:e,timeline:e.timeline.timeline}}),{toggleSidenav:_,setTimelineInformation:F})((function(e){var t=i.a.useState(null),a=Object(o.a)(t,2),r=a[0],l=a[1],s=e.status.menu.menu.fields.menuInformation.navs.find((function(e){return e.active})),c=e.timeline.fields.timelineInformation;return Object(n.useEffect)((function(){l(s.reload)})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement(R,null),i.a.createElement(x,null),i.a.createElement(p,null),i.a.createElement("div",{className:"content"},"sta"===s.key&&i.a.createElement(W,null),"com"===s.key&&i.a.createElement(Y,null),"exp"===s.key&&i.a.createElement(J,{key:r,props:e,compKey:"exp",value:c.wrkValues,height:1595}),"edu"===s.key&&i.a.createElement(J,{key:r,props:e,compKey:"edu",value:c.ecnValues,height:1300}))),i.a.createElement($,{key:r}))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(3),ee=a(26),te={banner:function(){return{fields:{bannerInformation:{name:"Robin Lundgren",title:"E-commerce \u2022 Webbutveckling \u2022 Frontend",sites:[{key:"sta",title:"Start",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},{key:"com",title:"Kompetens",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},{key:"exp",title:"Erfarenhet",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},{key:"edu",title:"Utbildning",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null}],sta:{key:"sta",title:"Start",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},com:{key:"com",title:"Kompetens",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},exp:{key:"exp",title:"Erfarenhet",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null},edu:{key:"edu",title:"Utbildning",class:"banner__button-container__btn--inactive",underline:"banner__button-container__underline--inactive",active:!1,reload:null}}}}}()},ae={header:function(){return{fields:{hamburger:{active:!1}}}}()},ne=a(27),ie=a.n(ne),re=a(28),le=a.n(re),se=a(29),oe=a.n(se),ce=a(30),me=a.n(ce),_e={menu:function(){return{fields:{menuInformation:{name:"Robin Lundgren",title:"Frontendutvecklare",nav:"navigation",kon:"kontakt",navs:[{key:"sta",title:"Start",active:!0,reload:null,img:ie.a,css:"menu__nav__section__inner__arc"},{key:"com",title:"Kompetens",active:!1,reload:null,img:le.a,css:"menu__nav__section__inner__arc--inactive"},{key:"exp",title:"Erfarenhet",active:!1,reload:null,img:oe.a,css:"menu__nav__section__inner__arc--inactive"},{key:"edu",title:"Utbildning",active:!1,reload:null,img:me.a,css:"menu__nav__section__inner__arc--inactive"}]}}}}()},de={timeline:function(){return{fields:{timelineInformation:{name:"Robin Lundgren",title:"Frontendutvecklare",nav:"navigation",kon:"Timeline Works",fieldName:"contentBlock",reloadKey:null,wrkValues:[{title:"Hedin IT",subtitle:"Frontend \u2022 E-handel \u2022 Sitecore",timestamp:"2019 - 2020",colorCode:"rgb(36, 136, 41)",information:"Tj\xe4nsten innefattade att tillsammans med ett utvecklingsteam bygga en e-handelsplattform fr\xe5n grunden med Sitecore som inneh\xe5llshanteringssystem. Under min tid i tj\xe4nsten var jag delaktig i utveckling och bearbetning av solida l\xf6sningar f\xf6r produkts\xf6k, produktlistor, detaljvyer, kundkonton, onlinebokningssystem m.fl, som byggdes med hj\xe4lp av javascriptbaserade React, Redux, GraphQL",class:"timeline__loop__content__right",tail:"timeline__loop__content__right__tail",stamp:"timeline__loop__left-stamp"},{title:"PostNord",subtitle:"Logistik \u2022 Transport",timestamp:"2016 - 2019",colorCode:"rgb(36, 136, 41)",information:"Fr\xe4mst ett sommarjobb under h\xf6gskole\xe5ren. Jobbet \xe4r ett serviceinriktat transportyrke som till st\xf6rst del g\xe5r ut p\xe5 att leverera gods till f\xf6retag samt privatpersoner",class:"timeline__loop__content__left",tail:"timeline__loop__content__left__tail",stamp:"timeline__loop__right-stamp"},{title:"CJ Automotive",subtitle:"Mont\xf6r",timestamp:"2015 - 2016",colorCode:"rgb(36, 136, 41)",information:"Ett industriarbete som innefattade fr\xe4mst montering av rattst\xe4nger till traktorer och skogsmaskiner, samt bearbetning av komponenter till slutprodukten",class:"timeline__loop__content__right",tail:"timeline__loop__content__right__tail",stamp:"timeline__loop__left-stamp"},{title:"RAY Metallfabrik",subtitle:"CNC",timestamp:"2014 - 2015",colorCode:"rgb(36, 136, 41)",information:"Verkstadsinriktat industriarbete med svetsning och bockning av r\xf6r till fr\xe4mst avgassystem, men ocks\xe5 r\xf6r till andra typer av produkter som bl.a. dammsugare",class:"timeline__loop__content__left",tail:"timeline__loop__content__left__tail",noTail:"timeline__loop__content__left__tail--noClass",stamp:"timeline__loop__right-stamp",noClass:!0,noClassClass:"timeline__loop__content__left--noClass"}],ecnValues:[{title:"Sitecore Solution Developer",subtitle:"Sitecore UK, London",timestamp:"2019 - 2019",colorCode:"rgb(163, 54, 10)",information:"En kurs som gick ut p\xe5 att djupdyka i Sitecores CMS ifr\xe5n ett utvecklarperspektiv. H\xe4r fick vi kursdeltagare l\xe4ra oss hur man p\xe5 b\xe4sta tillv\xe4gag\xe5ngss\xe4tt s\xe4tter upp en sajt i Sitecore, samt kunskap om att skapa anv\xe4ndarv\xe4nliga redakt\xf6rsgr\xe4nssnitt i ASP.NET MVC Pattern.",class:"timeline__loop__content__right",tail:"timeline__loop__content__right__tail",stamp:"timeline__loop__left-stamp"},{title:"Webbredakt\xf6rsprogrammet 180hp",subtitle:"H\xf6gskolan i Bor\xe5s",timestamp:"2016 - 2019",colorCode:"rgb(163, 54, 10)",information:"En tre\xe5rig utbildning som innefattade en kandidatexamen inom omr\xe5det informationsarkitektur. Utbildningen ber\xf6rde det mesta som kan kallas inneh\xe5ll p\xe5 webben. Programmet gav ocks\xe5 studenten m\xf6jlighet att inrikta sig p\xe5 olika omr\xe5den, varp\xe5 jag valde att inrikta mig inom b\xe5de frontend samt backend-utveckling",class:"timeline__loop__content__left",tail:"timeline__loop__content__left__tail",stamp:"timeline__loop__right-stamp"},{title:"Grundl\xe4ggande Milit\xe4r Utbildning",subtitle:"Tr\xe4ngregementet (T2), Sk\xf6vde",timestamp:"2013 - 2013",colorCode:"rgb(163, 54, 10)",information:"En utbildning p\xe5 tre m\xe5nader, utan normal helgledighet d\xe4r rekryten l\xe4rde sig allt grundl\xe4ggande som soldat inom svenska f\xf6rsvarsmakten.",class:"timeline__loop__content__right",tail:"timeline__loop__content__right__tail",noTail:"timeline__loop__content__right__tail--noClass",stamp:"timeline__loop__left-stamp",noClassClass:"timeline__loop__content__right--noClass",noClass:!0}]}}}}()},ue=a(31),pe=a.n(ue),ve=a(32),ge=a.n(ve),fe=a(33),be=a.n(fe),he=a(34),Ee=a.n(he),ke=a(35),Ne=a.n(ke),xe=a(36),we=a.n(xe),ye={start:function(){return{fields:{startInformation:{intro:"Jag skapar och bygger webbaserade gr\xe4nssnitt utefter krav, anspr\xe5k och givetvis slutanv\xe4ndarens medvetna eller undermedvetna behov av enkelhet och tillg\xe4nglighet i den digitala tillvaron. Med hj\xe4lp av den senaste tekniken, naturligtvis.",contact:[{key:"mail",title:"mejl",img:pe.a,value:"robinlundgrenska@gmail.com",bg:"start__middle-section__square--one"},{key:"phone",title:"telefon",img:ge.a,value:"0760 - 38 93 27",bg:"start__middle-section__square--two"},{key:"address",title:"adress",img:be.a,value:"Storgatan 55, Herrljunga",bg:"start__middle-section__square--three"},{key:"lang",title:"spr\xe5k",img:Ne.a,value:"Svenska & Engelska",bg:"start__middle-section__square--five"},{key:"license",title:"k\xf6rkort",img:Ee.a,value:"B, AM, Truck",bg:"start__middle-section__square--four"},{key:"age",title:"\xc5lder",img:we.a,value:"26",bg:"start__middle-section__square--six"}]}}}}()},Oe=a(37),Se=a.n(Oe),Ie=a(38),Ce=a.n(Ie),je=a(39),Te=a.n(je),Ae=a(40),Me=a.n(Ae),Re=a(41),Fe=a.n(Re),Be=a(42),Le=a.n(Be),Ve=a(43),Ke=a.n(Ve),Ue=a(44),qe=a.n(Ue),De=a(45),Ge=a.n(De),He=a(46),Pe=a.n(He),Je=a(47),We=a.n(Je),Qe=a(48),Xe=a.n(Qe),Ye=a(49),$e=a.n(Ye),ze=a(50),Ze=a.n(ze),et=a(51),tt=a.n(et),at=a(52),nt=a.n(at),it={show:function(){return{fields:{showInformation:{title1:"Featured",title2:"Kompetens",features:[{key:"react",title:"React",style:"show__featured__content1",bg:"show__featured__background-react"},{key:"angular",title:"Angular",style:"show__featured__content2",bg:"show__featured__background-angular"},{key:"node",title:"Node",style:"show__featured__content3",bg:"show__featured__background-node"},{key:"mongodb",title:"MongoDB",style:"show__featured__content4",bg:"show__featured__background-mongo"}],columnValues:[{title:"SQL",icon:Se.a,colorCode:"rgb(149, 110, 0)"},{title:"MongoDB",icon:Ce.a,colorCode:"rgb(149, 110, 0)"},{title:"Express",icon:Te.a,colorCode:"rgb(149, 110, 0)"},{title:"Google Tag Manager",icon:Le.a,colorCode:"rgb(149, 110, 0)"},{title:"Google Analytics",icon:Fe.a,colorCode:"rgb(149, 110, 0)"},{title:"SEO",icon:Ke.a,colorCode:"rgb(149, 110, 0)"},{title:"Modellering",icon:qe.a,colorCode:"rgb(149, 110, 0)"},{title:"GraphQL",icon:Ge.a,colorCode:"rgb(149, 110, 0)"},{title:"Copywriting",icon:Me.a,colorCode:"rgb(149, 110, 0)"},{title:"Adobe",icon:Pe.a,colorCode:"rgb(149, 110, 0)"},{title:"CSS",icon:We.a,colorCode:"rgb(149, 110, 0)"},{title:"Angular",icon:Xe.a,colorCode:"rgb(149, 110, 0)"},{title:"node",icon:$e.a,colorCode:"rgb(149, 110, 0)"},{title:"redux",icon:Ze.a,colorCode:"rgb(149, 110, 0)"},{title:"wordpress",icon:tt.a,colorCode:"rgb(149, 110, 0)"},{title:"react",icon:nt.a,colorCode:"rgb(149, 110, 0)"}],sliderValues:[{skill:"React / Redux / Javascript",key:"skill-range-green",value:9},{skill:"Sitecore / JSS",key:"skill-range-darkblue",value:8},{skill:"Angular / Typescript",key:"skill-range-blue",value:8},{skill:"CSS / SASS / BOOTSTRAP",key:"skill-range-orange",value:9},{skill:"wordpress / php",key:"skill-range-darkgreen",value:6},{skill:"Adobe PS / IA / AE / ID",key:"skill-range-red",value:8}]}}}}()},rt=Object(Z.c)({banner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BANNER_INFORMATION":return Object(c.a)(Object(c.a)({},e),{},{banner:te.banner});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEADER_STATE":return Object(c.a)(Object(c.a)({},e),{},{header:ae.header});case"SIDENAV_TOGGLE":return Object(c.a)(Object(c.a)({},e),{},{status:t.payload});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_INFORMATION":return Object(c.a)(Object(c.a)({},e),{},{menu:_e.menu});default:return e}},timeline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMELINE_INFORMATION":return Object(c.a)(Object(c.a)({},e),{},{timeline:de.timeline});default:return e}},start:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_INFORMATION":return Object(c.a)(Object(c.a)({},e),{},{start:ye.start});default:return e}},show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_INFORMATION":return Object(c.a)(Object(c.a)({},e),{},{show:it.show});default:return e}}}),lt=[ee.a],st=Object(Z.d)(rt,{},Z.a.apply(void 0,lt));l.a.render(i.a.createElement(s.a,{store:st},i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[53,1,2]]]);
//# sourceMappingURL=main.b51d29d4.chunk.js.map