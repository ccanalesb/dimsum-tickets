(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[43],{135:function(e,n,t){"use strict";t.r(n);var a=t(66),r=t(0),c=t.n(r),i=t(179),o=t(181),l=t(772),u=t(67),s=t(68),p=t(27),h=t(16),d=t(190),f=t(3),b=t(213),O=t(601),v=t(306),m=t(9),j=t(657);function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(b.b)(e);if(n){var r=Object(b.b)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(b.c)(this,t)}}var g=Object(p.a)("div")("expandable-input",null,(function(e){return{opened:e.isOpen}})),E=Object(p.a)(j.a)("expandable-input","wrapper",(function(e){return{opened:e.isOpen}})),w=function(e){Object(b.a)(t,e);var n=y(t);function t(){return Object(b.d)(this,t),n.call(this)}return Object(b.f)(t,[{key:"componentDidUpdate",value:function(e){var n=this.props.isOpen;n&&n!==e.isOpen&&this.input.focus()}},{key:"render",value:function(){var e=this,n=this.props,t=n.innerRef,a=n.triggerComponent,i=n.children,o=n.width,l=n.isOpen,u=n.onOpen,s=n.onClose,p=n.onBlur,h=n.containerProps,d=c.a.Children.only(i);return c.a.createElement(g,Object(m.a)({},h,{classProps:{isOpen:l},innerRef:t,style:{width:l&&o}}),c.a.createElement(E,{rightComponents:[Object(r.cloneElement)(a,{key:"handler",onClick:function(e){"function"===typeof a.onClick&&a.onClick(e),l?s():u()}})]},Object(r.cloneElement)(d,{className:"expandable-input__input",innerRef:function(n){return e.input=n},onBlur:p})))}}]),t}(r.Component),I=function(e){var n=e.containerProps,t=void 0===n?{}:n,a=e.innerRef,r=e.className,i=void 0===r?"":r,o=e.style,l=void 0===o?{}:o,u=e.triggerComponent,s=void 0===u?void 0:u,p=e.children,h=e.isOpen,d=void 0!==h&&h,f=e.onOpen,b=void 0===f?function(){return null}:f,O=e.onClose,v=void 0===O?function(){return null}:O,m=e.onBlur,j=void 0===m?function(){return null}:m,y=e.width,g=void 0===y?void 0:y;return c.a.createElement(w,{className:i,containerProps:t,innerRef:a,isOpen:d,onBlur:j,onClose:v,onOpen:b,style:l,triggerComponent:s,width:g},p)},C=t(307);function R(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(b.b)(e);if(n){var r=Object(b.b)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(b.c)(this,t)}}var S=Object(p.a)("div")("searchbox-toggle"),k=function(e){Object(b.a)(t,e);var n=R(t);function t(e){var a;return Object(b.d)(this,t),a=n.call(this,e),Object(h.a)(Object(b.e)(a),"hideInput",Object(f.debounce)(a.handleHideInput,100)),Object(h.a)(Object(b.e)(a),"showInput",Object(f.debounce)(a.handleShowInput,100)),a.state={isOpen:!1},a.hideInput=a.hideInput.bind(Object(b.e)(a)),a.showInput=a.showInput.bind(Object(b.e)(a)),a.handleHideInput=a.handleHideInput.bind(Object(b.e)(a)),a.handleShowInput=a.handleShowInput.bind(Object(b.e)(a)),a.handleBlur=a.handleBlur.bind(Object(b.e)(a)),a}return Object(b.f)(t,[{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.clearOnSearch,a=n.value,r=e.value;t&&a!==r&&!a&&r&&1!==r.length&&this.handleHideInput(!1)}},{key:"handleSearch",value:function(){var e=this.props,n=e.onSearch,t=e.clearOnSearch;n(),t&&this.setState({isOpen:!1})}},{key:"handleHideInput",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.props.value;n?e&&this.handleSearch():this.setState({isOpen:!1})}},{key:"handleBlur",value:function(e){this.expandableEl.contains(e.target)||this.hideInput(!1)}},{key:"handleShowInput",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.onChange,a=n.onKeyUp,r=n.value,i=n.placeholder,o=n.clearable,l=n.className,u=n.buttonRef,s=n.containerProps,p=n.width,h=void 0===p?300:p,f=this.state.isOpen;return c.a.createElement(S,null,c.a.createElement(I,{containerProps:s,innerRef:function(n){return e.expandableEl=n},isOpen:f,onBlur:this.handleBlur,onClose:this.hideInput,onOpen:this.showInput,triggerComponent:c.a.createElement(d.a,{key:"handler",buttonType:"text",icon:c.a.createElement(v.a,null),innerRef:u}),width:h},c.a.createElement(O.a,{className:"expandable-input__input ".concat(l),clearable:o,onChange:t,onKeyUp:a,placeholder:i,showIcon:!1,value:r})))}}]),t}(r.Component),x=Object(C.a)(k),B=t(652),P=t(178),D=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}];n.default=function(){var e=Object(r.useState)(D),n=Object(a.a)(e,2),t=n[0],p=n[1],h=Object(r.useRef)(null),d=Object(r.useState)(""),f=Object(a.a)(d,2),b=f[0],O=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{width:270,height:"100%"}},c.a.createElement(B.a,{withDepth:!1},c.a.createElement(x,{clearable:!0,containerProps:{"data-testid":"tree-searchbox"},onSearch:function(e){var n=e.value;return O(n)},placeholder:"Search all",searchOnEnter:!1,value:b})),c.a.createElement(P.a,{margin:"none",orientation:"horizontal",type:"non-form"}),c.a.createElement(i.a,{data:t,fluid:!0,groupIcon:c.a.createElement(u.a,null),instanceRef:h,isMultiSelect:!0,itemIcon:c.a.createElement(s.a,null),onOrderChange:p,onToggleExpand:function(e){h.current.actions.toggleExpand(e,{expandAllChildren:!0})},plugins:[o.a,l.a],searchQuery:b,showChildrenAmount:!0,sortable:!0})))}}}]);
//# sourceMappingURL=43.44415716.chunk.js.map