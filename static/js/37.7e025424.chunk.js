(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[37,50],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"deepNodes",(function(){return d}));var r=t(9);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=t(437),i=function(e){var n=e.children,t=void 0===n?[]:n,i=a(e,["children"]);return Object(r.a)({id:Object(c.a)(),name:"".concat(t.length?"Group":"Child"),children:t},i)},d=(n.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}],[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[i({children:[i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[]})]})])},157:function(e,n,t){"use strict";t.r(n);var r=t(81),a=t(0),c=t.n(a),i=t(209),d=t(210),o=t(84),l=t(85),f=t(120),u=function(e){console.log(111,e)};n.default=function(){var e=Object(a.useState)(f.default),n=Object(r.a)(e,2),t=n[0],s=(n[1],Object(a.useRef)(null));return Object(a.useEffect)((function(){!function(){var e=s.current.actions.toggleExpandAll;e&&e()}()}),[]),c.a.createElement(i.a,{data:t,fluid:!0,instanceRef:s,groupIcon:c.a.createElement(o.a,null),itemIcon:c.a.createElement(l.a,null),onItemClick:u,plugins:[d.a]})}},437:function(e,n,t){"use strict";var r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function c(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"===typeof e&&i.test(e)},o=[],l=0;l<256;++l)o.push((l+256).toString(16).substr(1));var f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase();if(!d(t))throw TypeError("Stringified UUID is invalid");return t};n.a=function(e,n,t){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return f(r)}}}]);
//# sourceMappingURL=37.7e025424.chunk.js.map