(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[31],{190:function(n,t,r){"use strict";r.r(t),r.d(t,"randomEntity",(function(){return c})),r.d(t,"randomEntities",(function(){return a})),r.d(t,"randomGroupedEntities",(function(){return u}));var o=r(12),e=r(323),i=["North","South","East","West"],c=function(){var n=Object(o.random)(1500,3500,!0).toFixed(2),t=Object(e.a)(),r=i[Object(o.random)(0,3)];return{id:t,name:"".concat(Object(o.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(t),owner:["Borrower","Co-Borrower","Both"][Object(o.random)(0,2)],salary:(12*n).toFixed(2),monthly:n,overtime:Object(o.random)(20,800,!0).toFixed(2),bonuses:Object(o.random)(20,500,!0).toFixed(2),commission:Object(o.random)(20,25e3,!0).toFixed(2),other:Object(o.random)(20,1e3,!0).toFixed(2),text:"Some random very long text",inFolderE:Object(o.random)(0,1)>0,group:r}},a=function(n){return new Array(n).fill(0).map((function(){return c()}))},u=function(n){var t=a(n);return i.map((function(n){return{group:n,children:t.filter((function(t){return t.group===n}))}})).filter((function(n){return n.children.length}))}}}]);
//# sourceMappingURL=31.73da46f6.chunk.js.map