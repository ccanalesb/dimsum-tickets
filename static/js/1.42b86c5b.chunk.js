(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[1],{366:function(e,t,n){"use strict";n(3),n(0),n(6);var o=n(23),a=Object(o.a)({paths:["M15 10.5c0 3.038-2.462 5.5-5.5 5.5S4 13.538 4 10.5 6.462 5 9.5 5 15 7.462 15 10.5zm-2.672-2.121l-.707-.707L9.5 9.793 7.379 7.672l-.707.707L8.793 10.5l-2.121 2.121.707.707L9.5 11.207l2.121 2.121.707-.707-2.121-2.121 2.121-2.121z"],height:20,width:20});t.a=a},502:function(e,t,n){"use strict";var o=n(3),a=n(5),r=n(0),i=n.n(r),l=n(28),c=n(4),s=n(33),u=n(34),p=n(73),d=n(74),f=n(30);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var v=Object(l.b)("div")("input-addon-wrapper"),O=Object(l.b)("span")("input-addon-wrapper","addon",(function(e){var t=e.left,n=e.right,o=e.variant;return Object(c.a)({left:t,right:n},o,o)})),y=function(e){Object(p.a)(n,e);var t=m(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(u.a)(n,[{key:"getLeftAddon",value:function(e){return this.renderAddonComponent(!0,e)}},{key:"getRightAddon",value:function(e){return this.renderAddonComponent(!1,e)}},{key:"renderAddonComponent",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;if(!t)return null;if(Array.isArray(t)&&!t.filter((function(e){return e})).length)return null;var n=this.props.containerProps,a=e?{left:!0}:{right:!0};return i.a.createElement(O,Object(o.a)({classProps:a},n),t.map((function(e,t){return e&&i.a.cloneElement(e,h(h({},e.props),{},{key:t}))})))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.innerRef,r=e.rightComponents,l=e.leftComponents,c=e.children,s=e.variant,u=e.containerProps,p=i.a.Children.only(c),d=p.props,f=d.hasError,b=d.readOnly,h=d.disabled,m=this.getRightAddon(Object(a.a)(r)),O=this.getLeftAddon(Object(a.a)(l));return i.a.createElement(v,Object(o.a)({className:t,classProps:{hasError:f,readOnly:b,disabled:h,variant:s},innerRef:n},u),O,p,m)}}]),n}(r.Component);Object(c.a)(y,"defaultProps",{rightComponents:[],leftComponents:[],containerProps:{}}),t.a=y},619:function(e,t,n){"use strict";var o=n(3),a=(n(5),n(6)),r=n(0),i=n.n(r),l=n(2),c=n.n(l),s=n(4),u=n(33),p=n(34),d=n(8),f=n(73),b=n(74),h=n(30),m=n(76),v=n(28),O=n(227),y=n(620),g=n(366),j=n(502);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(b.a)(this,n)}}var P=Object(v.b)("input")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),x=Object(v.b)("div")("input","tooltip-ref"),T=Object(v.b)("div")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),L=Object(v.b)(O.a)("input","clearable"),R=function(e){return e},A=function(){return null},S=function(e){Object(f.a)(n,e);var t=E(n);function n(e){var o;return Object(u.a)(this,n),o=t.call(this,e),Object(s.a)(Object(d.a)(o),"state",{width:-1,active:!1,showTooltip:!1}),Object(s.a)(Object(d.a)(o),"handleBlur",(function(e){(0,o.props.onBlur)(e),o.setState({active:!1})})),Object(s.a)(Object(d.a)(o),"handleFocus",(function(e){(0,o.props.onFocus)(e),o.setState({active:!0})})),Object(s.a)(Object(d.a)(o),"handleMouseEnter",(function(){o.setState({showTooltip:!0})})),Object(s.a)(Object(d.a)(o),"handleMouseLeave",(function(){o.setState({showTooltip:!1})})),Object(s.a)(Object(d.a)(o),"setWidth",(function(){var e=o.refTooltip.current.getBoundingClientRect();o.setState({width:e.width})})),o.ref=i.a.createRef(),o.refTooltip=i.a.createRef(),o.handleClear=o.handleClear.bind(Object(d.a)(o)),o}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setWidth(),window.addEventListener("resize",this.setWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setWidth)}},{key:"handleClear",value:function(){var e=this.props,t=e.onClear,n=e.onChange;e.clearable&&t?t():n({target:{value:""}}),(this.ref||{}).current&&this.ref.current.focus()}},{key:"renderClearableComponent",value:function(){var e=this.props,t=e.clearable,n=e.value,o=e.disabled;return o?null:t&&n?i.a.createElement(L,{buttonType:"text","data-testid":"ds-input_clearable-btn",disabled:o,icon:i.a.createElement(g.a,null),onClick:this.handleClear}):null}},{key:"render",value:function(){var e=this.props,t=e.role,n=e.id,r=e.isShowElipsisActive,l=e.autoFocus,c=e.className,s=e.name,u=e.innerRef,p=e.maxLength,d=e.minLength,f=e.placeholder,b=e.leftComponent,h=e.rightComponent,m=e.disableTooltip,v=e.readOnly,O=e.disabled,g=e.value,C=e.onClick,E=e.onChange,L=e.onKeyDown,A=e.onKeyUp,S=e.onFocus,k=e.onBlur,F=e.onPaste,D=e.required,M=e.type,I=e.customInputType,N=e.min,q=e.max,W=e.clearable,B=e.onMouseLeave,z=e.onMouseOut,K=e.style,U=e.containerProps,J=e.tabIndex,_=Object(a.a)(e,["role","id","isShowElipsisActive","autoFocus","className","name","innerRef","maxLength","minLength","placeholder","leftComponent","rightComponent","disableTooltip","readOnly","disabled","value","onClick","onChange","onKeyDown","onKeyUp","onFocus","onBlur","onPaste","required","type","customInputType","min","max","clearable","onMouseLeave","onMouseOut","style","containerProps","tabIndex"]),H=this.state,V=H.width,G=H.active,Q=H.showTooltip,X=[this.renderClearableComponent(),h].filter(R),Y=[b].filter(R),Z=w({"aria-label":_["aria-label"],"aria-placeholder":f,"aria-required":D,"aria-multiline":!1,"aria-autocomplete":"none","data-testid":_["data-testid"],role:t,id:n,ref:this.ref,className:c,autoFocus:l,disabled:O||v,innerRef:u,maxLength:p,minLength:d,name:s,onBlur:k,onChange:E,onClick:C,onFocus:S,onKeyDown:L,onKeyUp:A,onPaste:F,onMouseLeave:B,disableTooltip:m,onMouseOut:z,placeholder:f,required:D,type:M,value:g,min:N,max:q,style:K,tabIndex:J},U),$=i.a.createElement(x,{ref:this.refTooltip,style:{width:"100%"}},I?i.a.createElement(T,Object(o.a)({},U,{clearable:W,value:g}),I(w({},Z))):i.a.createElement(P,Object(o.a)({},Z,{autocomplete:"off",clearable:W,onBlur:this.handleBlur,onFocus:this.handleFocus,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,value:g})));return function(e,t){return 8*String(t).length>e}(V,g)&&!G&&Q&&V&&r&&($=i.a.createElement(y.a,{isOpen:m,title:String(g),zIndex:11,triggerComponent:i.a.createElement(x,{style:{width:"100%"}},$)})),X.length||Y.length||W?i.a.createElement(j.a,Object(o.a)({className:c,leftComponents:Y,rightComponents:X},U),$):$}}]),n}(r.Component);Object(s.a)(S,"defaultProps",{onBlur:A,onFocus:A}),S.propTypes={className:c.a.string,customInputType:c.a.func,id:c.a.oneOfType([c.a.string,c.a.number]),isShowElipsisActive:c.a.bool,max:c.a.oneOfType([c.a.string,c.a.number]),min:c.a.oneOfType([c.a.string,c.a.number]),name:c.a.string,onBlur:c.a.func,onChange:c.a.func,onClick:c.a.func,onFocus:c.a.func,onKeyDown:c.a.func,onKeyUp:c.a.func,onMouseLeave:c.a.func,onMouseOut:c.a.func,onPaste:c.a.func,placeholder:c.a.string,required:c.a.bool,role:c.a.string,style:c.a.object,tabIndex:c.a.oneOfType([c.a.string,c.a.number]),value:function(e,t,n){if(e.isShowElipsisActive&&"string"!==typeof e[t])return new Error("Invalid prop `".concat(t,"` of type `").concat(Object(m.a)(e[t]),"` supplied to")+" `".concat(n,"`. Prop `value` should be of type `string` if prop `isShowElipsisActive` is set to `true`.")+" Either set `isShowElipsisActive` to `false`, or properly format your `value` prop to `string`.")}};var k=S;t.a=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.id,l=e.autoFocus,c=void 0!==l&&l,s=e.disabled,u=void 0!==s&&s,p=e.className,d=void 0===p?"":p,f=e.clearable,b=void 0!==f&&f,h=e.name,m=void 0===h?"":h,v=e.maxLength,O=void 0===v?255:v,y=e.minLength,g=void 0===y?0:y,j=e.fluidWidth,C=void 0!==j&&j,w=e.disableTooltip,E=void 0===w||w,P=e.placeholder,x=e.value,T=void 0===x?"":x,L=e.hasError,R=void 0!==L&&L,A=e.readOnly,S=void 0!==A&&A,F=e.innerRef,D=void 0===F?null:F,M=e.type,I=void 0===M?"text":M,N=e.min,q=void 0===N?void 0:N,W=e.max,B=void 0===W?void 0:W,z=e.leftComponent,K=void 0===z?null:z,U=e.rightComponent,J=void 0===U?null:U,_=e.required,H=void 0!==_&&_,V=e.customInputType,G=void 0===V?null:V,Q=e.variant,X=e.isShowElipsisActive,Y=void 0===X||X,Z=Object(a.a)(e,["containerProps","id","autoFocus","disabled","className","clearable","name","maxLength","minLength","fluidWidth","disableTooltip","placeholder","value","hasError","readOnly","innerRef","type","min","max","leftComponent","rightComponent","required","customInputType","variant","isShowElipsisActive"]);return i.a.createElement(k,Object(o.a)({},Z,{"aria-label":Z["aria-label"],autoFocus:c,className:d,clearable:b,containerProps:n,customInputType:G,"data-testid":Z["data-testid"]||"ds-input_main-component",disabled:u,disableTooltip:E,fluidWidth:C,hasError:R,id:r,innerRef:D,isShowElipsisActive:Y,leftComponent:K,max:B,maxLength:O,min:q,minLength:g,name:m,placeholder:P,readOnly:S,required:H,rightComponent:J,type:I,value:T,variant:Q}))}},620:function(e,t,n){"use strict";var o=n(3),a=n(6),r=n(0),i=n.n(r),l=n(2),c=n.n(l),s=n(28),u=n(32),p=n(365),d=n(532),f=n(925),b="tooltip",h=n(299),m=Object(s.b)("div")("tooltip"),v=Object(s.b)("span")("tooltip","text"),O=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.innerRef,l=e.placement,c=void 0===l?p.a.TOP:l,s=e.title,O=void 0===s?"":s,y=e.delayClose,g=void 0===y?300:y,j=e.delayOpen,C=void 0===j?200:j,w=e.interactionType,E=void 0===w?d.a.HOVER:w,P=e.triggerComponent,x=void 0===P?null:P,T=e.className,L=void 0===T?"":T,R=e.isOpen,A=void 0===R?void 0:R,S=e.onOpen,k=void 0===S?function(){return null}:S,F=e.springAnimationComponent,D=void 0===F?void 0:F,M=e.tooltipType,I=void 0===M?b:M,N=e.showArrow,q=void 0===N||N,W=e.zIndex,B=Object(a.a)(e,["containerProps","innerRef","placement","title","delayClose","delayOpen","interactionType","triggerComponent","className","isOpen","onOpen","springAnimationComponent","tooltipType","showArrow","zIndex"]),z=Object(u.b)("tooltip").cssClassName,K=O;return"string"===typeof O&&(K=i.a.createElement(v,null,O)),i.a.createElement(f.a,{blockName:z,contentComponent:i.a.createElement(m,Object(o.a)({},n,B,{className:"tooltip-container--".concat(I," ").concat(L),innerRef:r}),K),delayClose:g,delayOpen:C,interactionType:E,isOpen:A,onOpen:k,placement:c,showArrow:I===b&&q,springAnimationComponent:D,triggerComponent:Object(h.a)(x),zIndex:W})};O.propTypes={containerProps:c.a.shape({}),placement:c.a.oneOf(p.b),title:c.a.string,delayClose:c.a.string,delayOpen:c.a.string,interactionType:c.a.oneOf(d.b),triggerComponent:c.a.element,isOpen:c.a.bool,onOpen:c.a.func,springAnimationComponent:c.a.element,showArrow:c.a.bool};t.a=O},732:function(e,t,n){"use strict";var o=n(3),a=n(6),r=n(0),i=n.n(r),l=n(2),c=n.n(l),s=n(619),u=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.autoFocus,l=void 0!==r&&r,c=e.disabled,u=void 0!==c&&c,p=e.maxLength,d=void 0===p?255:p,f=e.minLength,b=void 0===f?0:f,h=e.fluidWidth,m=void 0!==h&&h,v=e.placeholder,O=e.value,y=void 0===O?"":O,g=e.hasError,j=void 0!==g&&g,C=e.readOnly,w=void 0!==C&&C,E=e.innerRef,P=void 0===E?null:E,x=e.type,T=void 0===x?"text":x,L=e.min,R=void 0===L?void 0:L,A=e.max,S=void 0===A?void 0:A,k=e.clearable,F=void 0!==k&&k,D=e.leftComponent,M=void 0===D?null:D,I=e.rightComponent,N=void 0===I?null:I,q=e.required,W=void 0!==q&&q,B=e.variant,z=Object(a.a)(e,["containerProps","autoFocus","disabled","maxLength","minLength","fluidWidth","placeholder","value","hasError","readOnly","innerRef","type","min","max","clearable","leftComponent","rightComponent","required","variant"]);return i.a.createElement(s.a,Object(o.a)({},z,{"aria-label":z["aria-label"]||"Text Box",autoFocus:l,clearable:F,containerProps:n,disabled:u,fluidWidth:m,hasError:j,innerRef:P,leftComponent:M,max:S,maxLength:d,min:R,minLength:b,placeholder:v,readOnly:w,required:W,rightComponent:N,role:"textbox",type:T,value:y,variant:B}))};u.propTypes={containerProps:c.a.shape({}),autoFocus:c.a.bool,disabled:c.a.bool,maxLength:c.a.number,minLength:c.a.number,fluidWidth:c.a.bool,placeholder:c.a.string,value:c.a.string,hasError:c.a.bool,readOnly:c.a.bool,min:c.a.number,max:c.a.number,clearable:c.a.bool,leftComponent:c.a.element,rightComponent:c.a.element,required:c.a.bool,variant:c.a.string},t.a=u}}]);
//# sourceMappingURL=1.42b86c5b.chunk.js.map