(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{684:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return m})),n.d(e,"k",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"j",(function(){return y})),n.d(e,"h",(function(){return _})),n.d(e,"i",(function(){return v}));var o="/platform/sys/msg/list",l="/platform/sys/msg/create",r="/platform/sys/msg/delete/",c="/platform/sys/msg/get_type",m="/platform/sys/msg/get_user_view_list",d="/platform/sys/msg/select_user_list",f="/platform/sys/msg/my_msg_list",h="/platform/sys/msg/get/",y="/platform/sys/msg/status/read_one/",_="/platform/sys/msg/status/read_all",v="/platform/sys/msg/status/read_more"},685:function(t,e,n){},698:function(t,e,n){"use strict";var o=n(685);n.n(o).a},724:function(t,e,n){"use strict";n.r(e);n(91),n(44),n(35),n(26),n(69),n(425),n(27);var o=n(28),l=n(55),r=n(684);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={middleware:["authenticated","check_permissions"],data:function(){return{loading:!0,btnLoading:!1,addDialogVisible:!1,listLoading:!1,viewListLoading:!1,selectDialogVisible:!1,listData:[],msgType:[],pageData:{status:"unread",type:"",pageNo:1,pageSize:10,totalCount:0,pageOrderName:"createdAt",pageOrderBy:"descending"},filedomain:"",uploadurl:"",selectDataList:[],selectAll:!1,id:this.$route.query.id,msgData:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({conf:function(t){return t.conf}}),{formRules:function(){var t={title:[{required:!0,message:this.$t("sys.manage.msg.form.title"),trigger:["blur","change"]}]};return t}}),watch:{$route:function(){this.init()}},created:function(){this.getType(),this.init()},methods:{getType:function(){var t,data;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios.$get(r.d,{}));case 2:t=e.sent,(data=t.data)&&(this.msgType=data);case 5:case"end":return e.stop()}}),null,this)},init:function(){this.id=this.$route.query.id,this.id?this.getMsg():this.listPage()},getMsg:function(){var t=this;this.$axios.$post(r.c+this.id).then((function(e){0===e.code&&(t.msgData=e.data,t.readMsg(t.msgData.id))}))},readMsg:function(t){this.$axios.$post(r.j+this.id).then((function(t){}))},typeChange:function(t){this.pageData.pageNo=1,this.pageData.type=t,this.listPage()},handleSelect:function(t){this.$router.push("/notifications"),this.pageData.pageNo=1,this.pageData.status=t,this.listPage()},goBack:function(){this.$router.push("/notifications")},handleMsgTableChange:function(t){this.selectDataList=t,this.selectDataList.length===this.listData.length?this.selectAll=!0:this.selectAll=!1},changeSelectAll:function(){this.$refs.msgTable.toggleAllSelection()},handleTableSelectAllChange:function(t){t.length===this.listData.length?this.selectAll=!0:this.selectAll=!1},formatType:function(t){if(this.msgType&&this.msgType.length>0){var e=this.msgType.findIndex((function(e){return e.value===t}));return this.$t(this.msgType[e].text)}return""},read:function(){var t=this,e=[];this.selectDataList.forEach((function(t){e.push(t.id)})),this.$confirm(this.$t("sys.manage.msg.read.more",{num:e.length}),this.$t("system.commons.txt.notice"),{confirmButtonText:this.$t("system.commons.button.ok"),cancelButtonText:this.$t("system.commons.button.cancel"),type:"warning"}).then((function(){t.$axios.$post(r.i,{ids:e.toString()}).then((function(e){t.$message({message:e.msg,type:"success"}),t.listPage()}))}))},readAll:function(){var t=this;this.$confirm(this.$t("sys.manage.msg.read.all"),this.$t("system.commons.txt.notice"),{confirmButtonText:this.$t("system.commons.button.ok"),cancelButtonText:this.$t("system.commons.button.cancel"),type:"warning"}).then((function(){t.$axios.$post(r.h,{}).then((function(e){t.$message({message:e.msg,type:"success"}),t.listPage()}))}))},doChangePage:function(t){this.pageData.pageNo=t,this.listPage()},doSizeChange:function(t){this.pageData.pageSize=t,this.listPage()},doPageSort:function(t){this.pageData.pageOrderName=t.prop,this.pageData.pageOrderBy=t.order,this.listPage()},listPage:function(){var t=this;this.listLoading=!0,this.$axios.$post(r.g,this.pageData).then((function(e){t.listLoading=!1,0===e.code&&(t.listData=e.data.list,t.pageData.totalCount=e.data.totalCount)}))},doSearch:function(){this.pageData.pageNo=1,this.listPage()}}},d=(n(698),n(11)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-aside",{staticStyle:{width:"160px"}},[n("el-menu",{staticClass:"el_menu_left",attrs:{"default-active":"unread","default-openeds":["msg"],"unique-opened":!0},on:{select:t.handleSelect}},[n("el-submenu",{attrs:{index:"msg"}},[n("template",{slot:"title"},[t._v(t._s(t.$t("sys.manage.msg.title.menu")))]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"all"}},[t._v(t._s(t.$t("sys.manage.msg.status.all")))]),t._v(" "),n("el-menu-item",{attrs:{index:"unread"}},[t._v(t._s(t.$t("sys.manage.msg.status.unread")))]),t._v(" "),n("el-menu-item",{attrs:{index:"read"}},[t._v(t._s(t.$t("sys.manage.msg.status.read")))])],1)],2)],1)],1),t._v(" "),t.id?n("el-container",[n("el-main",{staticStyle:{padding:"2px 0 0 10px",overflow:"hidden"}},[n("div",{staticClass:"platform-content"},[n("h4",{staticClass:"platform-content-title"},[n("span",[t._v(t._s(t.$t("sys.manage.msg.status."+t.pageData.status))+"\n              "),n("el-button",{attrs:{type:"text",icon:"fa fa-arrow-circle-left"},on:{click:t.goBack}},[t._v(" "+t._s(t.$t("system.commons.button.goback")))])],1)]),t._v(" "),n("div",{staticClass:"platform-content-info"},[n("el-row",{staticClass:"msgData_title"},[t._v("\n              "+t._s(t.msgData.title)+"\n            ")]),t._v(" "),n("el-row",{staticClass:"msgData_date"},[t._v("\n              "+t._s(t._f("moment")(t.msgData.sendAt,"datetime"))+"\n            ")]),t._v(" "),n("el-row",{staticStyle:{"border-bottom":"1px solid #DDD"}}),t._v(" "),n("el-row",{staticClass:"msgData_note"},[n("div",{domProps:{innerHTML:t._s(t.msgData.note)}})])],1)])])],1):n("el-container",[n("el-main",{staticStyle:{padding:"2px 0 0 10px",overflow:"hidden"}},[n("div",{staticClass:"platform-content"},[n("h4",{staticClass:"platform-content-title"},[n("span",[t._v(t._s(t.$t("sys.manage.msg")))]),t._v(" "),n("div",{staticClass:"platform-list-op"},[n("el-button",{attrs:{size:"small",disabled:0===t.selectDataList.length},on:{click:t.read}},[t._v("\n                "+t._s(t.$t("sys.manage.msg.button.read"))+"\n              ")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.readAll}},[t._v("\n                "+t._s(t.$t("sys.manage.msg.button.readall"))+"\n              ")])],1)]),t._v(" "),n("div",{staticClass:"platform-content-info"},[n("div",{staticClass:"platform-content-search"},[n("el-form",{staticClass:"platform-content-search-form",attrs:{inline:!0,model:t.pageData,size:"small"}},[n("el-form-item",[n("el-radio-group",{on:{change:t.typeChange},model:{value:t.pageData.type,callback:function(e){t.$set(t.pageData,"type",e)},expression:"pageData.type"}},[n("el-radio-button",{attrs:{label:""}},[t._v(t._s(t.$t("sys.manage.msg.form.type.all")))]),t._v(" "),t._l(t.msgType,(function(e){return n("el-radio-button",{key:e.value,attrs:{label:e.value}},[t._v(t._s(t.$t(e.text)))])}))],2)],1)],1)],1),t._v(" "),n("div",{staticClass:"platform-content-list"},[n("div",{staticClass:"platform-content-list-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"msgTable",attrs:{data:t.listData,stripe:""},on:{"select-all":t.handleTableSelectAllChange,"sort-change":t.doPageSort,"selection-change":t.handleMsgTableChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:t.$t("sys.manage.msg.form.title"),"header-align":"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?n("span",{staticClass:"unread"},[n("nuxt-link",{attrs:{to:{name:"notifications",query:{id:e.row.msgid}}}},[t._v(t._s(e.row.title))])],1):n("span",{staticClass:"read"},[n("nuxt-link",{attrs:{to:{name:"notifications",query:{id:e.row.msgid}}}},[t._v(t._s(e.row.title))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"sendAt",label:t.$t("sys.manage.msg.form.sendAt"),"header-align":"center",align:"center",width:"220px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                      "+t._s(t._f("moment")(e.row.sendat,"datetime"))+"\n                    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"type",label:t.$t("sys.manage.msg.form.type"),sortable:"",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                      "+t._s(t.formatType(e.row.type))+"\n                    ")]}}])})],1),t._v(" "),n("div",{staticClass:"platform-content-list-pagination"},[n("div",{staticStyle:{float:"left"}},[n("span",{staticStyle:{padding:"0 20px 0 16px"}},[n("el-checkbox",{on:{change:t.changeSelectAll},model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}})],1),t._v(" "),n("el-button",{attrs:{size:"small",disabled:0===t.selectDataList.length},on:{click:t.read}},[t._v(t._s(t.$t("sys.manage.msg.button.read")))]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.readAll}},[t._v(t._s(t.$t("sys.manage.msg.button.readall")))])],1),t._v(" "),n("el-pagination",{staticClass:"platform-pagenation",attrs:{"current-page":t.pageData.pageNo,"page-size":t.pageData.pageSize,total:t.pageData.totalCount,background:"","page-sizes":[10,20,30,50],layout:"sizes, prev, pager, next"},on:{"current-change":t.doChangePage,"size-change":t.doSizeChange}})],1)],1)])])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);