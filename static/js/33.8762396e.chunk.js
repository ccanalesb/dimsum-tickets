(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[33],{157:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.r(t),n.d(t,"default",(function(){return h}));var s=n(0),d=n.n(s),f=n(490),h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(b,e);var t,n,u,s,h=(t=b,function(){var e,n=a(t);if(i()){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return l(this,e)});function b(){var e;o(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=h.call.apply(h,[this].concat(n))).state={isChecked:!0},e}return n=b,(u=[{key:"handleChange",value:function(e){var t=e.target.checked;this.setState({isChecked:t})}},{key:"render",value:function(){var e=this.state.isChecked;return d.a.createElement("div",null,d.a.createElement(f.a,{checked:e,containerProps:{id:"my-custom-id"},onChange:this.handleChange,value:"myVal"}),d.a.createElement("h3",null,e?"TRUE":"FALSE"))}}])&&r(n.prototype,u),s&&r(n,s),b}(s.Component)},490:function(e,t,n){"use strict";var o=n(3),r=n(7),c=n(0),a=n.n(c),i=n(4),u=n.n(i),l=n(5),s=n(11),d=n(33),f=n(34),h=n(8),b=n(71),v=n(72),p=n(30),O=function(){return{startPoint:null,isDragging:!1}},g=function(e){return function(t){var n=t.circleWidth,o=t.boxWidth;return e?{drag:o-n}:{drag:0}}},y=n(32),j=function(e){return{role:"button",tabIndex:"0",onClick:e,onKeyPress:function(t){t.stopPropagation();var n=t.keycode;("Enter"===t.key||13===n)&&e(t)}}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.containerProps,n=e.id,r=e.className,c=void 0===r?"":r,i=e.style,u=void 0===i?{}:i,l=e.hasError,s=void 0!==l&&l,d=e.readOnly,f=void 0!==d&&d,h=e.disabled,b=void 0!==h&&h,v=e.checked,p=void 0!==v&&v,O=e.onBlur,g=void 0===O?function(){return null}:O,m=e.onFocus,E=void 0===m?function(){return null}:m,D=e.onChange,S=void 0===D?function(){return null}:D,P=e.onMouseDown,w=void 0===P?function(){return null}:P,C=e.onMouseEnter,M=void 0===C?function(){return null}:C,T=e.onMouseLeave,x=void 0===T?function(){return null}:T,R=e.onTouchCancel,W=void 0===R?function(){return null}:R,F=e.onTouchEnd,N=void 0===F?function(){return null}:F,L=e.onTouchMove,z=void 0===L?function(){return null}:L,B=e.onTouchStart,_=void 0===B?function(){return null}:B,X=e.labelOn,U=void 0===X?"ON":X,I=e.labelOff,V=void 0===I?"OFF":I,A=e.dragStyle,J=void 0===A?{}:A,K=e.containerRef,q=void 0===K?null:K,G=e.handRef,H=void 0===G?null:G,Q=e.name,Y=void 0===Q?"":Q,Z=e.value,$=void 0===Z?"":Z,ee=e.size,te=void 0===ee?"s":ee,ne=Object(y.b)("form-element-toggle",c,{hasError:s,readOnly:f,disabled:b,checked:p,id:n,size:te}),oe=ne.cssClassName,re=ne.classNameBlock,ce=ne.classNameElement,ae=b||f;return a.a.createElement("div",Object(o.a)({},t,{"data-testid":"em-ds-toggle","aria-disabled":b,defaultChecked:p,defaultValue:$},j(ae?null:S),{ref:q,className:oe,onBlur:g,onFocus:E}),a.a.createElement("div",{className:re("box")},p&&a.a.createElement("div",{className:ce("icon-on")},U),!p&&a.a.createElement("div",{className:ce("icon-off")},V)),a.a.createElement("div",{ref:H,"aria-checked":p,"aria-disabled":b,className:ce("input"),onMouseDown:ae?null:w,onMouseEnter:ae?null:M,onMouseLeave:ae?null:x,onTouchCancel:ae?null:W,onTouchEnd:ae?null:N,onTouchMove:ae?null:z,onTouchStart:ae?null:_,style:k(k({},u),J)}),a.a.createElement("input",{className:ce("hidden-checkbox"),defaultChecked:p,defaultValue:$,name:Y,type:"checkbox"}))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v.a)(this,n)}}var w=function(e){Object(b.a)(n,e);var t=P(n);function n(e){var o;return Object(d.a)(this,n),o=t.call(this,e),Object(l.a)(Object(h.a)(o),"onDragStart",(function(e){var t=o.state,n=t.startPoint,r=t.checked,c=function(e,t){var n=t.startPoint,o=t.checked,r=t.isDragging,c=t.boxWidth,a=t.circleWidth;if(!r)return null;var i=n-e,u=o?c-a-i:e-n;return!o&&e>0&&e>n&&u<.7*c||o&&e>0&&e<n&&i<.7*c?u:null}(e,{startPoint:n,checked:r,isDragging:t.isDragging,boxWidth:t.boxWidth,circleWidth:t.circleWidth});c?o.setState({drag:c}):o.setDragOnChange(r)})),Object(l.a)(Object(h.a)(o),"onDragStop",(function(e){var t=o.state.checked;!function(e){var t=e.inside,n=e.circleWidth,o=e.drag,r=e.checked,c=e.boxWidth;return r?!t&&-o>(c-n)/2:!t&&o>c/3}(o.state)?o.setDragOnChange(t):(o.onChange(e),o.setState(O))})),Object(l.a)(Object(h.a)(o),"onBlur",(function(e){var t=o.props,n=t.onBlur,r=t.id;n&&n(e,r)})),Object(l.a)(Object(h.a)(o),"onFocus",(function(e){var t=o.props,n=t.onFocus,r=t.id;n&&n(e,r)})),Object(l.a)(Object(h.a)(o),"onChange",(function(e){var t=o.state.checked,n=o.props,r=n.onChange,c=n.id,a=n.value,i=!t;o.setState({checked:i}),e.target.value=a,e.target.checked=i,e.checked=i,r(e,c),o.setDragOnChange(i)})),Object(l.a)(Object(h.a)(o),"onMouseEnter",(function(){o.setState({inside:!0})})),Object(l.a)(Object(h.a)(o),"onMouseLeave",(function(){o.setState({inside:!1})})),Object(l.a)(Object(h.a)(o),"onMouseMove",(function(e){e.preventDefault(),o.onDragStart(e.clientX)})),Object(l.a)(Object(h.a)(o),"onMouseDown",(function(e){o.onDragStart(e.clientX),o.setState({startPoint:e.clientX,isDragging:!0}),window.addEventListener("mousemove",o.onMouseMove),window.addEventListener("mouseup",o.onMouseUp)})),Object(l.a)(Object(h.a)(o),"onMouseUp",(function(e){o.onDragStop(e),window.removeEventListener("mousemove",o.onMouseMove),window.removeEventListener("mouseup",o.onMouseUp)})),Object(l.a)(Object(h.a)(o),"onTouchCancel",(function(){o.setState({inside:!1})})),Object(l.a)(Object(h.a)(o),"onTouchEnd",(function(e){e.preventDefault(),o.onDragStop(e)})),Object(l.a)(Object(h.a)(o),"onTouchMove",(function(e){o.onDragStart(e.touches[0].clientX)})),Object(l.a)(Object(h.a)(o),"onTouchStart",(function(e){o.onDragStart(e.touches[0].clientX),o.setState({startPoint:e.touches[0].clientX,isDragging:!0})})),o.state=S({checked:e.checked||!1,inside:!1,isDragging:!1,drag:null,startPoint:null,circleWidth:null,boxWidth:null},g(e.checked||!1)),o.circle=a.a.createRef(),o.box=a.a.createRef(),o}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.verifyElements()}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.verifyElements()}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.size;return e.size!==t}},{key:"setDragOnChange",value:function(e){this.setState(g(e))}},{key:"verifyElements",value:function(){var e=this,t=this.state.checked,n=this.props.checked,o=setInterval((function(){if(e.circle&&e.box&&e.circle.current&&e.box.current){var r=e.circle.current.clientWidth,c=e.box.current.clientWidth;r&&c&&r!==c&&(e.setState({boxWidth:c,circleWidth:r}),e.setDragOnChange(null!=n?n:t),clearInterval(o))}}),100)}},{key:"render",value:function(){var e=this.state,t=e.checked,n=e.drag,r=e.inside,c=null!==n?{transform:"translateX(".concat(n,"px)")}:null;return a.a.createElement(E,Object(o.a)({},this.props,{checked:t,containerRef:this.box,dragStyle:c,handRef:this.circle,inside:r,onBlur:this.onBlur,onChange:this.onChange,onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onTouchCancel:this.onTouchCancel,onTouchEnd:this.onTouchEnd,onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!=e.checked?S({checked:e.checked},g(e.checked)(t)):null}}]),n}(c.Component),C=function(e){var t=e.containerProps,n=void 0===t?{}:t,c=e.hasError,i=void 0!==c&&c,u=e.readOnly,l=void 0!==u&&u,s=e.disabled,d=void 0!==s&&s,f=e.checked,h=void 0===f?void 0:f,b=e.labelOn,v=void 0===b?"ON":b,p=e.labelOff,O=void 0===p?"OFF":p,g=e.name,y=void 0===g?"":g,j=e.value,m=void 0===j?"":j,k=e.size,E=void 0===k?"s":k,D=Object(r.a)(e,["containerProps","hasError","readOnly","disabled","checked","labelOn","labelOff","name","value","size"]);return a.a.createElement(w,Object(o.a)({},D,{checked:h,containerProps:n,disabled:d,hasError:i,labelOff:O,labelOn:v,name:y,readOnly:l,size:E,value:m}))};C.propTypes={containerProps:u.a.shape({}),hasError:u.a.bool,readOnly:u.a.bool,disabled:u.a.bool,checked:u.a.bool,onChange:u.a.func,labelOn:u.a.string,labelOff:u.a.string,value:u.a.string,size:u.a.oneOf(s.h)};t.a=C}}]);
//# sourceMappingURL=33.8762396e.chunk.js.map