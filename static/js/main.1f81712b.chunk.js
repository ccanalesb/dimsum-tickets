(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[33],{148:function(e,t,a){},231:function(e,t,a){e.exports=a(65)},321:function(e,t,a){var r={"./":[65,9],"./App":[74,9],"./App.js":[74,9],"./ComboBox/Overview":[213,7,23],"./ComboBox/Overview.js":[213,7,23],"./DataGrid/Overview":[228,9,0,1,2,3,5],"./DataGrid/Overview.js":[228,9,0,1,2,3,5],"./DataGrid/PUI-2089":[214,9,0,1,2,3,10],"./DataGrid/PUI-2089.js":[214,9,0,1,2,3,10],"./DataGrid/PUI-2090":[215,9,0,1,2,3,11],"./DataGrid/PUI-2090.js":[215,9,0,1,2,3,11],"./DataGrid/PUI-2098":[216,9,0,1,2,3,12],"./DataGrid/PUI-2098.js":[216,9,0,1,2,3,12],"./DataGrid/PUI-2512":[217,9,0,1,2,3,9],"./DataGrid/PUI-2512.js":[217,9,0,1,2,3,9],"./DataGrid/PUI-2604":[218,9,0,1,2,3,7],"./DataGrid/PUI-2604.js":[218,9,0,1,2,3,7],"./DataGrid/ToolbarIssues":[219,9,0,1,2,3,8],"./DataGrid/ToolbarIssues.js":[219,9,0,1,2,3,8],"./DataGrid/columns":[201,9,24],"./DataGrid/columns.js":[201,9,24],"./DataGrid/editableColumns":[194,9,1,2,32,15],"./DataGrid/editableColumns.js":[194,9,1,2,32,15],"./FormItemLayout/LargeInputText":[230,9,0,25],"./FormItemLayout/LargeInputText.js":[230,9,0,25],"./MainLayout":[75,9],"./MainLayout.js":[75,9],"./NotFound":[146,9,4],"./NotFound.js":[146,9,4],"./PageHeader/PUI-2920":[220,9,1,2,14,18],"./PageHeader/PUI-2920.js":[220,9,1,2,14,18],"./PageHeader/Toolbars/ThreeButtonsToolbar":[205,9,17],"./PageHeader/Toolbars/ThreeButtonsToolbar.js":[205,9,17],"./Shuttle/Overview":[221,9,3,13,26],"./Shuttle/Overview.js":[221,9,3,13,26],"./Tabs/PUI-X":[229,9,0,1,2,3,6],"./Tabs/PUI-X.js":[229,9,0,1,2,3,6],"./TooltipTextProvider/PUI-2468":[222,9,0,19],"./TooltipTextProvider/PUI-2468.js":[222,9,0,19],"./TreeView/ExpandAll":[223,9,20],"./TreeView/ExpandAll.js":[223,9,20],"./TreeView/Overview":[224,9,27],"./TreeView/Overview.js":[224,9,27],"./TreeView/PUI-2579":[225,9,1,16,28],"./TreeView/PUI-2579.js":[225,9,1,16,28],"./TreeView/PUI-2690":[227,9,22],"./TreeView/PUI-2690-B":[226,9,21],"./TreeView/PUI-2690-B.js":[226,9,21],"./TreeView/PUI-2690.js":[227,9,22],"./TreeView/nodes":[202,9,29],"./TreeView/nodes.js":[202,9,29],"./components/styled":[206,9,0,30],"./components/styled.js":[206,9,0,30],"./index":[65,9],"./index.js":[65,9],"./styles.scss":[148,7],"./tickets":[84,9],"./tickets.js":[84,9],"./utils/randomData":[190,9,31],"./utils/randomData.js":[190,9,31]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(n,t[1])}))}n.keys=function(){return Object.keys(r)},n.id=321,e.exports=n},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(16),o=a.n(i),c=a(74),u=document.getElementById("root");o.a.render(n.a.createElement(c.default,null),u)},74:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var r=a(43),n=a(0),i=a.n(n),o=(a(148),a(181),a(75)),c=a(42);function u(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n  font-weight: bold;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  padding: 8px;\n  height: 100vh;\n"]);return l=function(){return e},e}var s=c.a.div(l()),d=c.a.div(u());function j(){return i.a.createElement(s,null,i.a.createElement(d,null,"Select a ticket to render on the right pane"),i.a.createElement(o.default,null))}},75:function(e,t,a){"use strict";a.r(t);var r=a(131),n=a(43),i=a(0),o=a.n(i),c=a(100),u=a(136),l=a(137),s=a(84),d=a(42),j=a(176),b=a.n(j),O=a(122),p=a(126);function I(){var e=Object(n.a)(["\n  width: 100%;\n"]);return I=function(){return e},e}function P(){var e=Object(n.a)(["\n  display: flex !important;\n  height: 96%;\n"]);return P=function(){return e},e}var h=d.a.div(P()),v=d.a.div(I());t.default=function(){var e,t=Object(i.useState)(""),n=Object(r.a)(t,2),d=n[0],j=n[1],I=(e=d,b()({loader:function(){return a(321)("./".concat(e)).catch((function(){return a.e(4).then(a.bind(null,146))}))},loading:p.a}));return o.a.createElement(h,null,o.a.createElement(c.c,{data:s.default,fluid:!0,groupIcon:o.a.createElement(u.a,null),itemIcon:o.a.createElement(l.a,null),onItemClick:function(e){"group"!==e.type&&e.path&&j(e.path)},plugins:[c.b],showChildrenAmount:!0,width:256}),o.a.createElement(O.a,{orientation:"vertical",style:{height:"".concat(window.innerHeight-80,"px")}}),d&&o.a.createElement(v,null,o.a.createElement(I,null)))}},84:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(323),i=function(e){return{id:Object(n.a)(),name:e,type:"ticket",children:[]}};t.default=[Object(r.a)(Object(r.a)({},i("DataGrid")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"DataGrid/Overview"}),Object(r.a)(Object(r.a)({},i("PUI-2089")),{},{path:"DataGrid/PUI-2089"}),Object(r.a)(Object(r.a)({},i("PUI-2090")),{},{path:"DataGrid/PUI-2090"}),Object(r.a)(Object(r.a)({},i("PUI-2098")),{},{path:"DataGrid/PUI-2098"}),Object(r.a)(Object(r.a)({},i("PUI-2512")),{},{path:"DataGrid/PUI-2512"}),Object(r.a)(Object(r.a)({},i("PUI-2604")),{},{path:"DataGrid/PUI-2604"}),Object(r.a)(Object(r.a)({},i("ToolbarIssues")),{},{path:"DataGrid/ToolbarIssues"})]}),Object(r.a)(Object(r.a)({},i("FormItemLayout")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("LargeInputText")),{},{path:"FormItemLayout/LargeInputText"})]}),Object(r.a)(Object(r.a)({},i("PageHeader")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("PUI-2920")),{},{path:"PageHeader/PUI-2920"})]}),Object(r.a)(Object(r.a)({},i("TooltipTextProvider")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("PUI-2468")),{},{path:"TooltipTextProvider/PUI-2468"})]}),Object(r.a)(Object(r.a)({},i("TreeView")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"TreeView/Overview"}),Object(r.a)(Object(r.a)({},i("PUI-2579")),{},{path:"TreeView/PUI-2579"}),Object(r.a)(Object(r.a)({},i("PUI-2690-B")),{},{path:"TreeView/PUI-2690-B"}),Object(r.a)(Object(r.a)({},i("PUI-2690")),{},{path:"TreeView/PUI-2690"})]}),Object(r.a)(Object(r.a)({},i("Shuttle")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"Shuttle/Overview"})]})]}},[[231,34,35]]]);
//# sourceMappingURL=main.1f81712b.chunk.js.map