webpackJsonp([1],{"0TUU":function(t,s){},"4ChU":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("qRXP"),e={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left-nav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),a("div",[t._v("收银")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),a("div",[t._v("店铺")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),a("div",[t._v("商品")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),a("div",[t._v("会员")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-zuanshi"}),t._v(" "),a("div",[t._v("统计")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),a("div",[t._v("设置")])])])])}]},n={name:"app",components:{leftNav:a("/Xao")({},e,!1,function(t){a("4ChU")},null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("leftNav"),this._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]},l=a("/Xao")(n,i,!1,function(t){a("0TUU")},null,null).exports,c=a("zO6J"),d=a("2sCs"),r=a.n(d),p={name:"pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0}},created:function(){var t=this;r.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(s){t.oftenGoods=s.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),r.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(s){t.type0Goods=s.data[0],t.type1Goods=s.data[1],t.type2Goods=s.data[2],t.type3Goods=s.data[3]}).catch(function(t){console.log(t),alert("无数据")})},methods:{addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var s=!1,a=0;a<this.tableData.length;a++)this.tableData[a].goodsId==t.goodsId&&(s=!0);if(s){this.tableData.filter(function(s){return s.goodsId==t.goodsId})[0].count++}else{var o={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(o)}this.getAllMoney(t)},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(s){return s.goodsId!=t.goodsId}),this.getAllMoney(t)},getAllMoney:function(t){var s=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(t){s.totalCount+=t.count,s.totalMoney=s.totalMoney+t.count*t.price})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力!",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pos"},[a("el-row",{staticClass:"pos-main"},[a("el-col",{staticClass:"pos-order",attrs:{span:7}},[a("el-tabs",{attrs:{type:"card"}},[a("el-tab-pane",{attrs:{label:"订单"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delSingleGoods(s.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),a("div",{staticClass:"totalDiv"},[a("small",[t._v("数量: ")]),a("span",[t._v(t._s(t.totalCount))]),t._v(" / "),a("small",[t._v("总金额：")]),a("span",[t._v("￥"+t._s(t.totalMoney)+"元")])])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单"}},[t._v("挂单")]),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")])],1),t._v(" "),a("div",{staticClass:"pos-btn"},[a("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(s){t.delAllGoods()}}},[t._v("清空")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(s){t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("el-row",{staticClass:"pos-top"},[a("div",{staticClass:"pos-title"},[t._v("热门商品")]),t._v(" "),a("div",{staticClass:"pos-shop"},[a("ul",t._l(t.oftenGoods,function(s){return a("li",{key:s.id,on:{click:function(a){t.addOrderList(s)}}},[a("span",[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"pos-price"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-row",{staticClass:"pos-bottom"},[a("el-tabs",{attrs:{type:"card"}},[a("el-tab-pane",{attrs:{label:"订单"}},[a("div",{staticClass:"pos-tabs"},[a("ul",t._l(t.type0Goods,function(s){return a("li",{key:s.id,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"goodImg"},[a("img",{staticStyle:{width:"100%"},attrs:{src:s.goodsImg}})]),t._v(" "),a("span",{staticClass:"goodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"goodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"零食"}},[a("div",{staticClass:"pos-tabs"},[a("ul",t._l(t.type1Goods,function(s){return a("li",{key:s.id,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"goodImg"},[a("img",{staticStyle:{width:"100%"},attrs:{src:s.goodsImg}})]),t._v(" "),a("span",{staticClass:"goodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"goodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"主食"}},[a("div",{staticClass:"pos-tabs"},[a("ul",t._l(t.type2Goods,function(s){return a("li",{key:s.id,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"goodImg"},[a("img",{staticStyle:{width:"100%"},attrs:{src:s.goodsImg}})]),t._v(" "),a("span",{staticClass:"goodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"goodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},[a("div",{staticClass:"pos-tabs"},[a("ul",t._l(t.type3Goods,function(s){return a("li",{key:s.id,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"goodImg"},[a("img",{staticStyle:{width:"100%"},attrs:{src:s.goodsImg}})]),t._v(" "),a("span",{staticClass:"goodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"goodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])])],1)],1)],1)],1)],1)},staticRenderFns:[]},v=a("/Xao")(p,u,!1,function(t){a("mBf0")},"data-v-42e0fe63",null).exports;o.default.use(c.a);var _=new c.a({routes:[{path:"/",name:"Pos",component:v}]}),f=a("ynTT"),g=a.n(f);a("QTsQ");o.default.config.productionTip=!1,o.default.use(g.a),new o.default({el:"#app",router:_,template:"<App/>",components:{App:l}})},QTsQ:function(t,s){},mBf0:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.5d796d711b75dd2822e6.js.map