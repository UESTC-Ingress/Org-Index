(function(t){function e(e){for(var a,r,s=e[0],c=e[1],o=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(l.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},l=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2fbdbb49":"3906d9bb","chunk-3fa5be4d":"e9d2ce11","chunk-5360bdcb":"0555ba7d"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var o=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",o.name="ChunkLoadError",o.type=a,o.request=l,n[1](o)}i[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=o;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"092d":function(t,e,n){"use strict";var a=n("8658"),i=n.n(a);i.a},"21bb":function(t,e,n){"use strict";var a=n("2dad"),i=n.n(a);i.a},"2dad":function(t,e,n){},"31a5":function(t,e,n){"use strict";var a=n("40eb"),i=n.n(a);i.a},"40eb":function(t,e,n){},"4a8e":function(t){t.exports=JSON.parse('{"headline":{"title":"关于有序安排复工、恢复开展科研活动的通知","desc":"根据国家有关法律法规规定和《奈安提克计划中国奇异物质研究所突发公共卫生事件应急预案》，结合敝所新冠肺炎疫情防控形势...","url":"news-headline-6","time":"2020-02-24"}}')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(i["a"]);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("div",{staticClass:"row no-gutters main-cont"},[n("div",{staticClass:"col-12 col-md-10 offset-md-1"},[n("router-view")],1)]),n("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-header mb-4 text-muted"},[n("div",{staticClass:"d-none d-md-block"},[n("div",{staticClass:"row headerheaderbar pb-2 pt-1 no-gutters"},[n("div",{staticClass:"col offset-1"},[n("small",[t._v(t._s(Date()))])]),t._m(0),n("div",{staticClass:"col-1"})])]),n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-10 offset-1 mt-4 mb-4 col-md-6"},[n("b-img",{staticClass:"headerimg",attrs:{src:t.logo_long,fluid:""},on:{click:function(e){return t.$router.push("/")}}})],1),n("div",{staticClass:"w-100"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("div",{staticClass:"col-10 offset-1"},[n("b-collapse",{staticClass:"justify-content-center",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",t._l(t.links,(function(e){return n("div",{key:e.title,staticStyle:{"white-space":"nowrap"}},["undefined"===typeof e.sub?n("b-nav-item",{attrs:{to:"/"+e.link}},[t._v(" "+t._s(e.title)+" ")]):n("b-nav-item-dropdown",{attrs:{text:e.title}},t._l(e.sub,(function(a){return n("b-dropdown-item",{key:a.title,attrs:{to:"/"+("undefined"!=typeof a.type?a.type+"/":"")+e.link+"/"+a.link}},[t._v(t._s(a.title))])})),1)],1)})),0),n("div",{staticClass:"col"}),n("b-navbar-nav",{staticClass:"ml-auto d-none d-xl-block"},[n("b-input-group",{attrs:{right:""}},[n("b-form-input",{staticClass:"mr-sm-1 barsearch",attrs:{placeholder:"输入搜索内容"}}),n("b-button",{staticClass:"my-sm-0",attrs:{variant:"outline-light",type:"submit"}},[t._v("搜索")])],1)],1)],1)],1)],1)],1)])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col ml-auto text-right"},[n("small",[n("a",{staticClass:"text-muted",attrs:{href:"mailto:admin@nia.ac.cn"}},[t._v("联系我们")]),t._v(" | "),n("a",{staticClass:"text-muted",attrs:{href:"https://net.nia.ac.cn"}},[t._v("内部资源")]),t._v(" | "),n("a",{staticClass:"text-muted",attrs:{href:"http://mail.nia.ac.cn"}},[t._v("邮件系统")]),t._v(" | "),n("a",{staticClass:"text-muted",attrs:{href:"mailto:coop@nia.ac.cn"}},[t._v("申请合作")])])])}],o=n("ce18"),u=n.n(o),d=n("c243"),p={data:function(){return{logo_long:u.a,links:d}}},f=p,m=(n("092d"),n("2877")),b=Object(m["a"])(f,s,c,!1,null,"2ba2ac2a",null),g=b.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-2 footer no-gutters"},[a("div",{staticClass:"col-10 offset-1 mt-4"},[a("b-navbar",{attrs:{type:"dark"}},[a("div",{staticClass:"col-6"},[a("b-navbar-nav",{staticClass:"row"},[a("b-nav-item",{staticClass:"col-12 col-md-3",attrs:{href:"mailto:admin@nia.ac.cn"}},[t._v(" 负责人信箱 ")]),a("b-nav-item",{staticClass:"col-12 col-md-3"},[t._v(" 网站地图 ")]),a("b-nav-item",{staticClass:"col-12 col-md-3"},[t._v(" 留言反馈 ")]),a("b-nav-item",{staticClass:"col-12 col-md-3",attrs:{to:"/page/info/contact"}},[t._v(" 联系我们 ")])],1)],1),a("div",{staticClass:"ml-auto"},[a("b-form-select",{attrs:{value:null,options:t.extLinks},model:{value:t.linkSelected,callback:function(e){t.linkSelected=e},expression:"linkSelected"}})],1)]),a("hr")],1),a("div",{staticClass:"col-10 offset-1 mb-4 mt-4"},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-12 col-md-5"},[a("b-img",{staticClass:"whitelogo",attrs:{src:n("ce18"),fluid:""}})],1),t._m(0)])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-md-6 text-light mt-4 mt-md-0"},[n("small",[t._v(" Copyright © 2020 奈安提克计划中国奇异物质研究所 "),n("br"),t._v(" 地址:成都市高新区（西区）西源大道2006号 "),n("br"),t._v(" 邮编:611731 电话:1331-13313113-0100 NIACNET备1331-02号 ")])])}],y={data:function(){return{linkSelected:null,extLinks:[{text:"友情链接",value:null},{text:"奈安提克计划首页",value:"https://nianticproject.com"}]}},watch:{linkSelected:function(t){null!=t&&(window.location.href=t)}}},_=y,w=(n("7e91"),Object(m["a"])(_,h,v,!1,null,"2eaaeed0",null)),k=w.exports,C={components:{NavBar:g,Footer:k}},x=C,j=(n("db1e"),Object(m["a"])(x,l,r,!1,null,"0d2e20fc",null)),S=j.exports,O=(n("d3b7"),n("8c4f")),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"mb-2",attrs:{"no-body":""}},[n("div",{staticClass:"row justify-content-around no-gutters"},[n("div",{staticClass:"col-12 col-md-7"},[n("SliderView")],1),n("div",{staticClass:"col-12 col-md-5"},[n("PrimaryNews")],1)])]),n("div",{staticClass:"row justify-content-around no-gutters"},[n("div",{staticClass:"col-12 mb-2"},[n("ImgCard",{attrs:{src:t.anni}})],1),n("div",{staticClass:"col-12 col-md-8"},[n("div",{staticClass:"row no-gutters"},t._l([1,2,3,4],(function(e){return n("div",{key:e,staticClass:"col-10 offset-1 offset-md-0 col-md-6 mb-2"},[n("SecondaryNews",{attrs:{headerclass:"subnews"+e,title:t.news[e-1].title,items:t.news[e-1].items,url:t.news[e-1].url}})],1)})),0)]),n("div",{staticClass:"col-10 col-md-4 mb-2"},[n("Functions"),n("b-card",{attrs:{"header-class":"topic","no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("b",{staticClass:"text-danger"},[t._v("专题")])]},proxy:!0}])},[n("Topic")],1)],1)])],1)},N=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"600"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"XM自旋的自抑制机制异常研究进展"},scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"/doc/images/home_header_scroll_xm_new_char_1.jpg"}})]},proxy:!0}])},[n("p",[t._v(" 奈安提克研究所在 2020年1月 的 II 类异常态 XM 粒子实验中发现了此类异常，成为世界第一家能够独立创造该种异常条件的实验机构。 ")])]),n("b-carousel-slide",{attrs:{caption:"奇异物质新的高维特性被发现"},scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"/doc/images/home_header_scroll_high_dimension_breakthough_1.jpg"}})]},proxy:!0}])},[n("p",[t._v(" 2020年一月，本院成功实现了对博格达诺维奇现象的完整复现，成功证明了 XM 存在一种新的高维特性。 ")])])],1)},$=[],P={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},T=P,J=Object(m["a"])(T,M,$,!1,null,null,null),X=J.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-2 h-100"},[n("div",{staticClass:"row h-100 w-100 no-gutters"},[n("b-card-text",{staticClass:"mt-2 ml-2 mr-2 mb-auto "},[n("small",[t._v("头条新闻")]),n("h5",{staticClass:"text-truncate"},[n("router-link",{staticClass:"text-danger",attrs:{to:"/article/news/headline/"+t.head_news.headline.url}},[t._v(" "+t._s(t.head_news.headline.title)+" ")])],1),n("p",[n("small",[t._v(" "+t._s(t.head_news.headline.desc)),n("br"),n("router-link",{staticClass:"text-danger",attrs:{to:"/article/news/headline/"+t.head_news.headline.url}},[t._v(" 了解更多 >> ")])],1)]),n("hr"),t._l(t.headline.slice(0,5),(function(e){return n("div",{key:e.title,staticClass:"row news-item no-gutters"},[n("div",{staticClass:"col col-auto"},[n("router-link",{staticClass:"text-danger",attrs:{to:"/article/news/headline/"+e.url}},[t._v(t._s(e.title))])],1),n("div",{staticClass:"col"},[n("p",{staticClass:"text-right"},[n("small",[t._v(t._s(e.time))])])])])}))],2),n("b-card-footer",{staticClass:"align-self-end text-right w-100"},[n("b-badge",{attrs:{to:"/catagory/news/headline",variant:"danger"}},[t._v("查看更多")])],1)],1)])},z=[],I=n("70c9"),F=n("4a8e"),L={data:function(){return{headline:I,head_news:F}}},B=L,A=(n("8bfb"),Object(m["a"])(B,q,z,!1,null,"8389ecf4",null)),U=A.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"ml-2 mr-2",attrs:{"header-class":t.headerclass},scopedSlots:t._u([{key:"header",fn:function(){return[n("b",{staticClass:"text-danger"},[t._v(t._s(t.title))])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"text-right"},[n("b-badge",{attrs:{to:"/catagory/news/"+t.url,variant:"danger"}},[t._v("查看更多")])],1)]},proxy:!0}])},[n("b-card-text",t._l(t.items.slice(0,5),(function(e){return n("p",{key:e.url,staticClass:"news-item text-truncate"},[n("router-link",{staticClass:"text-danger",attrs:{to:"/article/news/"+t.url+"/"+e.url}},[t._v(t._s(e.title))])],1)})),0)],1)},D=[],G=n("789b"),R={methods:{genTitle:function(){return G({count:Math.floor(9*Math.random())+9}).text}},props:["headerclass","title","items","url"]},H=R,K=(n("31a5"),Object(m["a"])(H,V,D,!1,null,null,null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("b-img",{attrs:{src:t.src,fluid:""}})],1)},Y=[],Z={props:["src"]},tt=Z,et=Object(m["a"])(tt,W,Y,!1,null,null,null),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2 row no-gutters"},[n("b-button",{staticClass:"col-6",attrs:{href:"https://net.nia.ac.cn",size:"lg",squared:"",variant:"outline-danger"}},[t._v("内部网络")]),n("b-button",{staticClass:"col-6",attrs:{href:"https://github.com/UESTC-Ingress",size:"lg",squared:"",variant:"outline-danger"}},[t._v("项目列表")]),n("b-button",{staticClass:"col-6",attrs:{size:"lg",href:"https://missions.nia.ac.cn",squared:"",variant:"outline-danger"}},[t._v("任务指引")]),n("b-button",{staticClass:"col-6",attrs:{size:"lg",href:"https://recruit.nia.ac.cn",squared:"",variant:"outline-danger"}},[t._v("招聘信息")]),n("b-button",{staticClass:"col-6",attrs:{size:"lg",href:"https://status.nia.ac.cn",squared:"",variant:"outline-danger"}},[t._v("设施监控")]),n("b-button",{staticClass:"col-6",attrs:{size:"lg",href:"http://mail.nia.ac.cn",squared:"",variant:"outline-danger"}},[t._v("邮件系统")])],1)},it=[],lt={},rt=Object(m["a"])(lt,at,it,!1,null,null,null),st=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-btn",{attrs:{block:"",squared:"",size:"lg",variant:"outline-danger",disabled:""}},[t._v("暂无内容")])],1)},ot=[],ut={},dt=Object(m["a"])(ut,ct,ot,!1,null,null,null),pt=dt.exports,ft=n("8631"),mt=n("bb24"),bt=n("df94"),gt=n("e88d"),ht=n("f5eb"),vt=n.n(ht),yt={data:function(){return{anni:vt.a,news:[{title:"科研动态",url:"research",items:mt},{title:"项目进展",url:"projects",items:bt},{title:"综合新闻",url:"generic",items:gt},{title:"会议信息",url:"conference",items:ft}]}},components:{SliderView:X,PrimaryNews:U,SecondaryNews:Q,ImgCard:nt,Functions:st,Topic:pt}},_t=yt,wt=(n("21bb"),Object(m["a"])(_t,E,N,!1,null,null,null)),kt=wt.exports;a["default"].use(O["a"]);var Ct=[{path:"/",component:kt},{path:"/page/:catagory/:item",component:function(){return n.e("chunk-2fbdbb49").then(n.bind(null,"898f"))}},{path:"/article/:catagory/:item/:article",component:function(){return n.e("chunk-2fbdbb49").then(n.bind(null,"898f"))}},{path:"/catagory/:catagory/:item",component:function(){return n.e("chunk-3fa5be4d").then(n.bind(null,"e187"))}},{path:"/redirect/:catagory/:item",component:function(){return n.e("chunk-5360bdcb").then(n.bind(null,"ec3c"))}}],xt=new O["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:Ct}),jt=xt,St=n("2f62");a["default"].use(St["a"]);var Ot=new St["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Et=n("bc3a"),Nt=n.n(Et),Mt=n("866c"),$t=n.n(Mt);a["default"].use($t.a,{flavor:"github"}),Nt.a.defaults.baseURL="/",a["default"].prototype.$ajax=Nt.a,a["default"].config.productionTip=!1,new a["default"]({router:jt,store:Ot,render:function(t){return t(S)}}).$mount("#app")},"668a":function(t,e,n){},"70c9":function(t){t.exports=JSON.parse('[{"title":"关于有序安排复工、恢复开展科研活动的通知","url":"news-headline-6","time":"2020-02-24"},{"title":"关于疫情期间实行网络办公与分地域科研的公告","url":"news-headline-5","time":"2020-02-22"},{"title":"关于疫情期间撤销对外学术活动授权的公告","url":"news-headline-4","time":"2020-02-11"},{"title":"本院应对近期突发冠状病毒疾病的通知","url":"news-headline-3","time":"2020-01-20"},{"title":"XM自旋的自抑制机制研究获得重大突破","url":"news-headline-2","time":"2020-01-17"},{"title":"本院召开2019年度总结表彰大会","url":"news-headline-1","time":"2020-01-04"}]')},"7e91":function(t,e,n){"use strict";var a=n("668a"),i=n.n(a);i.a},8035:function(t,e,n){},8631:function(t){t.exports=JSON.parse('[{"title":"国际奇异物质论坛 2020 年会 会议通知","url":"news-conference-4","time":"2020-02-18"},{"title":"泛亚太奇异物质实验室联合会议 会议通知","url":"news-conference-3","time":"2020-01-29"},{"title":"XMCCONF XM粒子聚合态研究研讨会 会议通知","url":"news-conference-2","time":"2020-01-28"},{"title":"本院召开2019年度总结表彰大会","url":"news-conference-5","time":"2020-01-04"},{"title":"全国 XM 科研机构联合会 第三次会议 会议通知","url":"news-conference-1","time":"2019-12-21"}]')},8658:function(t,e,n){},"8bfb":function(t,e,n){"use strict";var a=n("8035"),i=n.n(a);i.a},bb24:function(t){t.exports=JSON.parse('[{"title":"机构再次派出小组调查武汉肺炎疫情","url":"news-research-5","time":"2020-02-24"},{"title":"千叶由香里教授在世界奇异物质对称性研讨会上的报告","url":"news-research-4","time":"2020-01-21"},{"title":"奇异物质重点实验室 XM 异常激发装置获得升级","url":"news-research-3","time":"2020-01-11"},{"title":"皮特金院士团队首次发现混沌物质的异常维持特性","url":"news-research-2","time":"2020-01-09"},{"title":"千叶由香里教授在世界奇异物质对称性研讨会上的报告","url":"news-research-1","time":"2020-01-02"}]')},c243:function(t){t.exports=JSON.parse('[{"title":"首页","link":""},{"title":"单位概况","link":"info","sub":[{"title":"机构简介","type":"page","link":"org"},{"title":"现任领导","type":"page","link":"leader"},{"title":"历任领导","type":"page","link":"leaders"},{"title":"历史沿革","type":"page","link":"history"},{"title":"发展规划","type":"page","link":"development"},{"title":"地理位置","type":"page","link":"location"},{"title":"联系我们","type":"page","link":"contact"}]},{"title":"新闻动态","link":"news","sub":[{"title":"头条新闻","type":"catagory","link":"headline"},{"title":"科研动态","type":"catagory","link":"research"},{"title":"项目进展","type":"catagory","link":"projects"},{"title":"综合新闻","type":"catagory","link":"generic"},{"title":"会议信息","type":"catagory","link":"conference"}]},{"title":"机构设置","link":"facilities","sub":[{"title":"科研部门","type":"page","link":"science"},{"title":"管理部门","type":"page","link":"admin"},{"title":"支持部门","type":"page","link":"support"},{"title":"驻外机构","type":"page","link":"foreign"},{"title":"重点实验室","type":"page","link":"keylab"}]},{"title":"研究队伍","link":"research_team","sub":[{"title":"概况介绍","type":"page","link":"general"},{"title":"院士专家","type":"page","link":"professional"},{"title":"研究员","type":"page","link":"researchers"}]},{"title":"科研成果","link":"result","sub":[{"title":"概况介绍","type":"page","link":"general"},{"title":"获奖","type":"page","link":"prize"},{"title":"论文","type":"page","link":"paper"},{"title":"专利","type":"page","link":"invention"},{"title":"专著","type":"page","link":"books"},{"title":"重点成果介绍","type":"page","link":"important"}]},{"title":"合作交流","link":"coop","sub":[{"title":"国内合作","type":"catagory","link":"homeland"},{"title":"国际会议","type":"catagory","link":"meetings"},{"title":"国际组织","type":"catagory","link":"org"},{"title":"合作项目","type":"catagory","link":"projects"}]},{"title":"学术出版","link":"publish","sub":[{"title":"奈安提克学报","type":"redirect","link":"niaj","url":"https://journal.nia.ac.cn"}]},{"title":"信息公开","link":"information","sub":[{"title":"信息公开规定","type":"catagory","link":"rule"},{"title":"信息公开目录","type":"catagory","link":"catagory"},{"title":"依申请公开","type":"catagory","link":"apply"},{"title":"信息公开年度报告","type":"catagory","link":"annual"},{"title":"信息公开联系方式","type":"catagory","link":"contact"}]}]')},ce18:function(t,e,n){t.exports=n.p+"img/logo_long_new.9fd67663.png"},d8d2:function(t,e,n){},db1e:function(t,e,n){"use strict";var a=n("d8d2"),i=n.n(a);i.a},df94:function(t){t.exports=JSON.parse('[{"title":"皮特金院士团队2020-2月科研进度报告","url":"news-project-5","time":"2020-02-27"},{"title":"XM 改良设备课题组开始建设实验室基础设施","url":"news-project-2","time":"2020-01-20"},{"title":"我院三组科研项目成功结题","url":"news-project-3","time":"2020-01-02"},{"title":"研究所2019年度总结报告","url":"news-project-4","time":"2019-12-24"},{"title":"NIACNET 高性能计算中心季度工作报告","url":"news-project-1","time":"2019-12-20"}]')},e88d:function(t){t.exports=JSON.parse('[{"title":"本机构与英国SE公司建立长期合作关系","url":"news-generic-6","time":"2020-03-06"},{"title":"关于预防新型冠状病毒的有关倡议","url":"news-generic-5","time":"2020-02-01"},{"title":"院内开展”回归历史“慰问老研究员活动","url":"news-generic-4","time":"2020-01-10"},{"title":"本院成功举办2020新春团拜会","url":"news-generic-3","time":"2020-01-04"},{"title":"千叶由香里教授代表机构进行学术访问","url":"news-generic-2","time":"2020-01-01"},{"title":"”JGB的食用方法“--本院奈安提克文化论坛第3期","url":"news-generic-1","time":"2019-12-24"}]')},f5eb:function(t,e,n){t.exports=n.p+"img/anni.a0a83da7.png"}});
//# sourceMappingURL=app.13015095.js.map