(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[39,50],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"deepNodes",(function(){return o}));var r=n(9);function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=n(437),i=function(e){var t=e.children,n=void 0===t?[]:t,i=a(e,["children"]);return Object(r.a)({id:Object(c.a)(),name:"".concat(n.length?"Group":"Child"),children:n},i)},o=(t.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}],[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[i({children:[i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[]})]})])},161:function(e,t,n){"use strict";n.r(t);var r=n(81),a=n(0),c=n.n(a),i=n(209),o=n(210),d=n(84),l=n(85),u=n(120);t.default=function(){var e=Object(a.useState)(u.default),t=Object(r.a)(e,2),n=t[0],f=t[1],s=Object(a.useRef)(null),h=Object(a.useState)(""),p=Object(r.a)(h,2),b=p[0],m=p[1],y=Object(a.useState)(!1),g=Object(r.a)(y,2),v=g[0],O=g[1];return c.a.createElement(i.a,{key:v,data:n,fluid:!0,groupIcon:c.a.createElement(d.a,null),instanceRef:s,itemIcon:c.a.createElement(l.a,null),onOrderChange:f,onItemClick:function(e){var t;s.current.actions.select(e),b!==e.id?(t=!0,m(e.id)):s.current.state.selection[e.id]?(O(!v),console.log("Some clear selection logic here")):t=!0,t&&console.log("Some selection logic here")},plugins:[o.a],showChildrenAmount:!0,sortable:!0})}},437:function(e,t,n){"use strict";var r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function c(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(e){return"string"===typeof e&&i.test(e)},d=[],l=0;l<256;++l)d.push((l+256).toString(16).substr(1));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return u(r)}}}]);
//# sourceMappingURL=39.d31f6b4d.chunk.js.map