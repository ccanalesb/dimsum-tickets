(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[27,40,53,54],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"randomEntity",(function(){return a})),n.d(t,"randomEntities",(function(){return i})),n.d(t,"randomEntityNoChildren",(function(){return o})),n.d(t,"randomEntitiesNoChildren",(function(){return u}));var r=n(2),c=n(203),a=function(e){var t=Object(c.a)(),n=Object(r.random)(0,4)<1,a=n?i(Object(r.random)(0,5),t):void 0;return{id:t,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(t),type:n?"group":"single",parent:e,children:a}},i=function(e,t){return new Array(e).fill(0).map((function(){return a(t)}))},o=function(){var e=Object(c.a)(),t=Object(r.random)(0,4)<2,n=t?i(Object(r.random)(0,2),e):void 0;return Object(r.random)(0,4)<2&&(n=[]),{id:e,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:t?"group":"single",children:n,isGroup:t}},u=function(e){return new Array(e).fill(0).map((function(){return o()}))}},117:function(e,t,n){"use strict";n.r(t),n.d(t,"evalParent",(function(){return a})),n.d(t,"selectedItemsMapper",(function(){return i}));var r=n(16),c=n.n(r),a=function e(t){var n=t.hash,r=t.selectedItems,c=t.acc,a=t.parentId,i=t.mixed,o=void 0!==i&&i,u=n[a];c.parents.push(u);var s=r.filter((function(e){return e.parent===a}));if(s=s.concat(c.parents.filter((function(e){return e.parent===a}))),u.children.length>0){var l=o;if(u.children.length!==s.length||o?(c.items[a]="mixed",l=!0):c.items[a]=!0,u.parent&&!c.items[u.parent])return e({hash:n,selectedItems:r,acc:c,parentId:u.parent,mixed:l})}return c},i=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!0},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()(e,"current.state.selection",{}),a=Object.keys(r).reduce((function(e,c){if("all"===c||!r[c])return e;var a=t[c];return a&&n(a)?(e.push(a),e):e}),[]);return a}}},120:function(e,t,n){"use strict";n.r(t),n.d(t,"useTreeInitialSelectionState",(function(){return o}));var r=n(1),c=n(79),a=n(0),i=n(117),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)({}),o=Object(c.a)(n,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){var n={},c=Array.isArray(t)?t:[t];c.length&&(n=c.reduce((function(t,n){return t.items=Object(r.a)(Object(r.a)({},t.items),{},{[n.id]:!0}),n.parent&&!t.items[n.parent]?Object(i.evalParent)({hash:e,selectedItems:c,acc:t,parentId:n.parent}):t}),{items:[],parents:[]})),s(n.items)}),[e,t]),u}},148:function(e,t,n){"use strict";n.r(t);var r=n(79),c=n(0),a=n.n(c),i=n(202),o=n(204),u=n(80),s=n(81),l=n(120),d=n(112),f=Object(d.randomEntities)(50),m=function(e){console.log(111,e)};t.default=function(){var e=Object(c.useState)(f),t=Object(r.a)(e,1)[0],n=Object(l.useTreeInitialSelectionState)(f,[f[40]]),d=Object(c.useRef)(null);return Object(c.useEffect)((function(){!function(){var e=d.current.actions.toggleExpandAll;console.log("REF",d.current),e&&e()}()}),[]),a.a.createElement(i.a,{data:t,fluid:!0,instanceRef:d,groupIcon:a.a.createElement(u.a,null),itemIcon:a.a.createElement(s.a,null),selection:n,onItemClick:m,plugins:[o.a]})}}}]);
//# sourceMappingURL=27.b6a74762.chunk.js.map