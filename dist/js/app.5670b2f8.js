(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0b58c742":"15dba802","chunk-37737f16":"1ef3fa27","chunk-3e03d56d":"5b35ac2d","chunk-08587bc8":"18f8d3f1","chunk-725e5eb0":"d8e5039e","chunk-7fa5d54e":"5f85af82","chunk-2d21a3d2":"54a4b0f4"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-37737f16":1,"chunk-3e03d56d":1,"chunk-08587bc8":1,"chunk-725e5eb0":1,"chunk-7fa5d54e":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0b58c742":"31d6cfe0","chunk-37737f16":"861bd81f","chunk-3e03d56d":"222b6fd3","chunk-08587bc8":"eb033ca2","chunk-725e5eb0":"410c2d3a","chunk-7fa5d54e":"64708bd7","chunk-2d21a3d2":"31d6cfe0"}[t]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="./",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"435b":function(t,e,n){},"45db":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页 ")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},d=l,f=(n("93d2"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,"3e98bb53",null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,k=(n("9e93"),Object(f["a"])(g,h,b,!1,null,"4c960714",null)),y=k.exports,x={name:"MainTabBar",components:{TabBar:p,TabBarItem:y}},_=x,w=Object(f["a"])(_,a,c,!1,null,"a20db614",null),C=w.exports,S={name:"App",components:{MainTabBar:C}},T=S,O=(n("034f"),Object(f["a"])(T,i,o,!1,null,null,null)),j=O.exports,E=(n("d3b7"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-3e03d56d"),n.e("chunk-08587bc8")]).then(n.bind(null,"b3d7"))},$=function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},L=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-7fa5d54e")]).then(n.bind(null,"c228"))},A=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-37737f16")]).then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-3e03d56d"),n.e("chunk-725e5eb0")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:$},{path:"/cart",component:L},{path:"/profile",component:A},{path:"/detail/:iid",component:B}],N=new E["a"]({routes:M,mode:"hash"}),D=N,I=n("2f62"),q={addCounter:function(t,e){e.count++},addToCart:function(t,e){e.checked=!0,t.cartList.push(e)}},J=(n("7db0"),{addToCart:function(t,e){return new Promise((function(n,r){var i=t.state.cartList.find((function(t){return t.iid===e.iid}));i?(t.commit("addCounter",i),n("当前的商品数量+1")):(e.count=1,t.commit("addToCart",e),n("添加了新的商品"))}))}}),F={cartList:function(t){return t.cartList},cartCount:function(t,e){return e.cartList.length}},H=F;r["a"].use(I["a"]);var K={cartList:[]},U=new I["a"].Store({state:K,mutations:q,actions:J,getters:H}),z=U,G=n("fe3c"),Q=n.n(G),R=n("caf9"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},W=[],X={name:"Toast",props:{},data:function(){return{message:"",isShow:!1}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认文字",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=""}),n)}}},Y=X,Z=(n("f195"),Object(f["a"])(Y,V,W,!1,null,"336e8c8e",null)),tt=Z.exports,et={install:function(t){var e=t.extend(tt),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},nt=et;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(nt),Q.a.attach(document.body),r["a"].use(R["a"],{loading:n("bc5e")}),new r["a"]({render:function(t){return t(j)},router:D,store:z}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},"93d2":function(t,e,n){"use strict";n("bda6")},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"9e93":function(t,e,n){"use strict";n("45db")},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},bda6:function(t,e,n){},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f195:function(t,e,n){"use strict";n("435b")}});
//# sourceMappingURL=app.5670b2f8.js.map