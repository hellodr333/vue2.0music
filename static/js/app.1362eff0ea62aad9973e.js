webpackJsonp([0,2],[,function(t,e,n){n(14);var r=n(0)(n(18),n(10),"data-v-64358222",null);t.exports=r.exports},function(t,e,n){n(12);var r=n(0)(n(19),n(8),null,null);t.exports=r.exports},function(t,e,n){n(13);var r=n(0)(n(20),n(9),null,null);t.exports=r.exports},function(t,e,n){n(15);var r=n(0)(n(21),n(11),null,null);t.exports=r.exports},,,function(t,e,n){t.exports=n.p+"static/img/home.c633921.png"},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n(7),width:"100%",alt:""}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("router-link",{staticClass:"home",attrs:{to:"/home"}},[t._v("主页")]),t._v(" "),n("span",{staticClass:"mid"},[t._v("中间")]),t._v(" "),n("router-link",{staticClass:"list",attrs:{to:"/hello"}},[t._v("菜单")])],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list"},t._l(t.songs,function(e){return n("li",[n("router-link",{attrs:{to:{path:"detail",query:{id:e.id}}}},[n("span",[t._v(t._s(e.name))])])],1)}))])},staticRenderFns:[]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"detail",data:function(){return{msg:""}},created:function(){this.msg=this.$route.query.id,console.log(this.$route.query.id)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{songs:[{name:"一生为你",id:"01"},{name:"豆腐西施",id:"02"},{name:"黑豆难煮",id:"03"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),s=n.n(r),a=n(1),o=n.n(a),i=n(6),u=n.n(i),c=n(4),l=n.n(c),d=n(3),f=n.n(d),p=n(2),m=n.n(p);s.a.use(u.a);var _=[{path:"/home",component:f.a},{path:"/hello",component:l.a},{path:"/detail",component:m.a},{path:"/",component:f.a}],v=new u.a({routes:_}),h=new s.a({router:v,components:{App:o.a},render:function(t){return t(o.a)}});h.$mount("#app"),v.push("/home")}],[22]);