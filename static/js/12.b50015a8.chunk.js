(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[12,20,26],{184:function(e,r,t){"use strict";t.r(r),t.d(r,"randomEntity",(function(){return i})),t.d(r,"randomEntities",(function(){return l})),t.d(r,"randomGroupedEntities",(function(){return u}));var n=t(12),o=t(322),a=["North","South","East","West"],i=function(){var e=Object(n.random)(1500,3500,!0).toFixed(2),r=Object(o.a)(),t=a[Object(n.random)(0,3)];return{id:r,name:"".concat(Object(n.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(r),owner:["Borrower","Co-Borrower","Both"][Object(n.random)(0,2)],salary:(12*e).toFixed(2),monthly:e,overtime:Object(n.random)(20,800,!0).toFixed(2),bonuses:Object(n.random)(20,500,!0).toFixed(2),commission:Object(n.random)(20,25e3,!0).toFixed(2),other:Object(n.random)(20,1e3,!0).toFixed(2),text:"Some random very long text",inFolderE:Object(n.random)(0,1)>0,group:t}},l=function(e){return new Array(e).fill(0).map((function(){return i()}))},u=function(e){var r=l(e);return a.map((function(e){return{group:e,children:r.filter((function(r){return r.group===e}))}})).filter((function(e){return e.children.length}))}},189:function(e,r,t){"use strict";t.r(r),r.default=[{property:"name",label:"Name",sortable:!0,resizable:!0},{property:"owner",label:"Owner",resizable:!0},{property:"salary",label:"Salary",searchable:!0,resizable:!0},{property:"monthly",label:"Monthly",resizable:!0},{property:"overtime",label:"Overtime",resizable:!0}]},215:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(351),i=t(189),l=t(184),u=Object(l.randomGroupedEntities)(5),c=function(e,r,t){console.log(e,r,t)};r.default=function(){return o.a.createElement(a.a,{onSelectRow:c,columns:i.default,rows:u,searchFilters:!0,sortable:!0,selectable:"single",showSelectColumn:!1,autoHeight:!0,resizeableColumns:!0,getChildrenRows:function(e){return e.rowData.children},groupedRows:!0,groupedRowsRenderHeader:function(e){var r=(e||{}).group;return o.a.createElement(o.a.Fragment,null," Group : ",r," ")}})}},349:function(e,r){}}]);
//# sourceMappingURL=12.b50015a8.chunk.js.map