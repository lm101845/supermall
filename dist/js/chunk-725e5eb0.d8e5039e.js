(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725e5eb0"],{"0408":function(t,e,s){"use strict";s("6a14")},1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports="".repeat||function(t){var e=String(n(this)),s="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(s+=e);return s}},"159b":function(t,e,s){var i=s("da84"),n=s("fdbc"),a=s("17c2"),o=s("9112");for(var r in n){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(f){l.forEach=a}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,n=s("a640"),a=s("ae40"),o=n("forEach"),r=a("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"35fb":function(t,e,s){"use strict";s("ae6f")},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},4113:function(t,e,s){"use strict";s("a97b")},4160:function(t,e,s){"use strict";var i=s("23e7"),n=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"459e":function(t,e,s){"use strict";s("9ba6")},"4de4":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").filter,a=s("1dde"),o=s("ae40"),r=a("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5093:function(t,e,s){"use strict";s("cbf4")},5804:function(t,e,s){},5993:function(t,e,s){},"64ee":function(t,e,s){"use strict";s("cca7")},"6a14":function(t,e,s){},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"param",attrs:{"param-info":t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},n=[];s("a9e3"),s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{staticClass:"title-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)},l=[],f=s("a7ac"),u={name:"DetailNavBar",components:{NavBar:f["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},d=u,m=(s("35fb"),s("2877")),h=Object(m["a"])(d,c,l,!1,null,"e69e3f2c",null),p=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t){return s("swiper-item",[s("img",{attrs:{src:t,alt:""}})])})),1)},b=[],g=s("dc2c"),_={name:"DetailSwiper",components:{Swiper:g["a"],SwiperItem:g["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},C=_,I=(s("dac5"),Object(m["a"])(C,v,b,!1,null,"6e1a72ec",null)),w=I.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},O=[],k={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},j=k,x=(s("5093"),Object(m["a"])(j,y,O,!1,null,"1f4a9b32",null)),T=x.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],D=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),P=D,S=(s("d50d"),Object(m["a"])(P,$,E,!1,null,"46c310b1",null)),B=S.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},L=[],F={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},N=F,A=(s("4113"),Object(m["a"])(N,Y,L,!1,null,"0b03b470",null)),G=A.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},z=[],R={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},J=R,U=(s("0408"),Object(m["a"])(J,M,z,!1,null,"6f0c66c3",null)),V=U.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{attrs:{src:t}})})),0)])])]):t._e()},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])}],q=s("90b9"),H={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(q["b"])(e,"yyyy-MM-dd hh:mm:ss")}}},K=H,Q=(s("459e"),Object(m["a"])(K,W,X,!1,null,"a47869fc",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],st={name:"DetailBottomBar",methods:{addToCart:function(){console.log("点击了添加到购物车"),this.$emit("addToCart")}}},it=st,nt=(s("bfae"),Object(m["a"])(it,tt,et,!1,null,"f38f6184",null)),at=nt.exports,ot=s("5d17"),rt=s("6d71");s("b0c0");function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var lt=s("1bab");function ft(t){return Object(lt["a"])({url:"/detail",params:{iid:t}})}function ut(){return Object(lt["a"])({url:"/recommend"})}var dt=function t(e,s,i){ct(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.nowPrice=e.highNowPrice},mt=function t(e){ct(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},ht=function t(e,s){ct(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},pt=s("eecb"),vt=s("2f62"),bt={name:"Detail",components:{DetailNavBar:p,DetailSwiper:w,DetailBaseInfo:T,DetailShopInfo:B,DetailGoodsInfo:G,DetailParamInfo:V,DetailCommentInfo:Z,DetailBottomBar:at,Scroll:ot["a"],GoodsList:rt["a"]},mixins:[pt["b"],pt["a"]],data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopY:null,currentIndex:0,message:"",show:!1}},created:function(){var t=this;this.iid=this.$route.params.iid,ft(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new mt(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new ht(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),ut().then((function(e){t.recommends=e.data.list})),this.getThemeTopY=Object(q["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.param.$el.offsetTop),t.themeTopYs.push(t.$refs.comment.$el.offsetTop),t.themeTopYs.push(t.$refs.recommend.$el.offsetTop),t.themeTopYs.push(Number.MAX_VALUE),console.log(t.themeTopYs)}),100)},mounted:function(){},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:r(r({},Object(vt["b"])(["addToCart"])),{},{imageLoad:function(){this.refresh(),this.getThemeTopY()},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],200)},contentScroll:function(t){for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.listenShowBackTop(t)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.newPrice=this.goods.nowPrice,e.iid=this.iid,this.$store.dispatch("addToCart",e).then((function(e){t.$toast.show(e,1e3)}))}})},gt=bt,_t=(s("64ee"),Object(m["a"])(gt,i,n,!1,null,"3176ba7c",null));e["default"]=_t.exports},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"9ba6":function(t,e,s){},a97b:function(t,e,s){},ae6f:function(t,e,s){},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),a=s("df75"),o=s("d039"),r=o((function(){a(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return a(n(t))}})},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),a=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},u=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,s,i,r,c=a(this),d=n(t),m=[0,0,0,0,0,0],h="",p="0",v=function(t,e){var s=-1,i=e;while(++s<6)i+=t*m[s],m[s]=i%1e7,i=l(i/1e7)},b=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=u(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),i=d;while(i>=7)v(1e7,0),i-=7;v(f(10,i,1),0),i=e-1;while(i>=23)b(1<<23),i-=23;b(1<<i),v(1,1),b(2),p=g()}else v(0,s),v(1<<-e,0),p=g()+o.call("0",d);return d>0?(r=p.length,p=h+(r<=d?"0."+o.call("0",d-r)+p:p.slice(0,r-d)+"."+p.slice(r-d))):p=h+p,p}})},bfae:function(t,e,s){"use strict";s("5993")},cbf4:function(t,e,s){},cca7:function(t,e,s){},d50d:function(t,e,s){"use strict";s("f177")},dac5:function(t,e,s){"use strict";s("5804")},dbb4:function(t,e,s){var i=s("23e7"),n=s("83ab"),a=s("56ef"),o=s("fc6a"),r=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,s,i=o(t),n=r.f,l=a(i),f={},u=0;while(l.length>u)s=n(i,e=l[u++]),void 0!==s&&c(f,e,s);return f}})},e439:function(t,e,s){var i=s("23e7"),n=s("d039"),a=s("fc6a"),o=s("06cf").f,r=s("83ab"),c=n((function(){o(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},f177:function(t,e,s){}}]);
//# sourceMappingURL=chunk-725e5eb0.d8e5039e.js.map