(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[27],{103:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(622),a=n(3);t.default=function(e){var t=e.customHandlers.onToggle,n=void 0===t?function(){}:t,i=e.metaData.rowData,u=e.entityType,l=void 0===u?"workflow-rule":u,s=e.activeField,d=void 0===s?"active":s,f=i.id,h=Object(a.get)(i,d),b={"data-testid":"".concat(l,"-").concat(d,"-toggle"),["data-".concat(l,"Id")]:f,containerProps:{"data-testid":"".concat(l,"-").concat(d,"-toggle-container")}},v=Object(o.useCallback)((function(e){e.stopPropagation(),n(i)}),[n,i]);return r.a.createElement(c.a,Object.assign({},b,{checked:h,onChange:v}))}},190:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}))},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return a}));var o=n(190);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?i(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}},622:function(e,t,n){"use strict";var o=n(13),r=n(22),c=n(0),a=n.n(c),i=n(2),u=n.n(i),l=n(7),s=n(15),d=n(209),f=function(){return{startPoint:null,isDragging:!1}},h=function(e){return function(t){var n=t.circleWidth,o=t.boxWidth;return e?{drag:o-n}:{drag:0}}},b=n(33);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t,n=e.containerProps,r=e.id,c=e.className,i=void 0===c?"":c,u=e.style,l=void 0===u?{}:u,s=e.hasError,d=void 0!==s&&s,f=e.readOnly,h=void 0!==f&&f,v=e.disabled,O=void 0!==v&&v,g=e.checked,y=void 0!==g&&g,j=e.onBlur,m=void 0===j?function(){return null}:j,k=e.onFocus,D=void 0===k?function(){return null}:k,E=e.onChange,P=void 0===E?function(){return null}:E,w=e.onMouseDown,S=void 0===w?function(){return null}:w,M=e.onMouseEnter,C=void 0===M?function(){return null}:M,T=e.onMouseLeave,x=void 0===T?function(){return null}:T,W=e.onTouchCancel,F=void 0===W?function(){return null}:W,N=e.onTouchEnd,R=void 0===N?function(){return null}:N,L=e.onTouchMove,z=void 0===L?function(){return null}:L,B=e.onTouchStart,_=void 0===B?function(){return null}:B,X=e.labelOn,U=void 0===X?"ON":X,I=e.labelOff,J=void 0===I?"OFF":I,V=e.dragStyle,H=void 0===V?{}:V,K=e.containerRef,q=void 0===K?null:K,A=e.handRef,G=void 0===A?null:A,Q=e.name,Y=void 0===Q?"":Q,Z=e.value,$=void 0===Z?"":Z,ee=e.size,te=void 0===ee?"s":ee,ne=Object(b.b)("form-element-toggle",i,{hasError:d,readOnly:h,disabled:O,checked:y,id:r,size:te}),oe=ne.cssClassName,re=ne.classNameBlock,ce=ne.classNameElement,ae=O||h;return a.a.createElement("div",Object(o.a)({},n,{"data-testid":"em-ds-toggle","aria-disabled":O,defaultChecked:y,defaultValue:$},{role:"button",tabIndex:"0",onClick:t=ae?null:P,onKeyPress:function(e){e.stopPropagation();var n=e.keycode;("Enter"===e.key||13===n)&&t(e)}},{ref:q,className:oe,onBlur:m,onFocus:D}),a.a.createElement("div",{className:re("box")},y&&a.a.createElement("div",{className:ce("icon-on")},U),!y&&a.a.createElement("div",{className:ce("icon-off")},J)),a.a.createElement("div",{ref:G,"aria-checked":y,"aria-disabled":O,className:ce("input"),onMouseDown:ae?null:S,onMouseEnter:ae?null:C,onMouseLeave:ae?null:x,onTouchCancel:ae?null:F,onTouchEnd:ae?null:R,onTouchMove:ae?null:z,onTouchStart:ae?null:_,style:p(p({},l),H)}),a.a.createElement("input",{className:ce("hidden-checkbox"),defaultChecked:y,defaultValue:$,name:Y,type:"checkbox"}))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.b)(e);if(t){var r=Object(d.b)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.c)(this,n)}}var m=function(e){Object(d.a)(n,e);var t=j(n);function n(e){var o;return Object(d.d)(this,n),o=t.call(this,e),Object(s.a)(Object(d.e)(o),"onDragStart",(function(e){var t=o.state,n=t.startPoint,r=t.checked,c=function(e,t){var n=t.startPoint,o=t.checked,r=t.isDragging,c=t.boxWidth,a=t.circleWidth;if(!r)return null;var i=n-e,u=o?c-a-i:e-n;return!o&&e>0&&e>n&&u<.7*c||o&&e>0&&e<n&&i<.7*c?u:null}(e,{startPoint:n,checked:r,isDragging:t.isDragging,boxWidth:t.boxWidth,circleWidth:t.circleWidth});c?o.setState({drag:c}):o.setDragOnChange(r)})),Object(s.a)(Object(d.e)(o),"onDragStop",(function(e){var t=o.state.checked;!function(e){var t=e.inside,n=e.circleWidth,o=e.drag,r=e.checked,c=e.boxWidth;return r?!t&&-o>(c-n)/2:!t&&o>c/3}(o.state)?o.setDragOnChange(t):(o.onChange(e),o.setState(f))})),Object(s.a)(Object(d.e)(o),"onBlur",(function(e){var t=o.props,n=t.onBlur,r=t.id;n&&n(e,r)})),Object(s.a)(Object(d.e)(o),"onFocus",(function(e){var t=o.props,n=t.onFocus,r=t.id;n&&n(e,r)})),Object(s.a)(Object(d.e)(o),"onChange",(function(e){var t=o.state.checked,n=o.props,r=n.onChange,c=n.id,a=n.value,i=!t;o.setState({checked:i}),e.target.value=a,e.target.checked=i,e.checked=i,r(e,c),o.setDragOnChange(i)})),Object(s.a)(Object(d.e)(o),"onMouseEnter",(function(){o.setState({inside:!0})})),Object(s.a)(Object(d.e)(o),"onMouseLeave",(function(){o.setState({inside:!1})})),Object(s.a)(Object(d.e)(o),"onMouseMove",(function(e){e.preventDefault(),o.onDragStart(e.clientX)})),Object(s.a)(Object(d.e)(o),"onMouseDown",(function(e){o.onDragStart(e.clientX),o.setState({startPoint:e.clientX,isDragging:!0}),window.addEventListener("mousemove",o.onMouseMove),window.addEventListener("mouseup",o.onMouseUp)})),Object(s.a)(Object(d.e)(o),"onMouseUp",(function(e){o.onDragStop(e),window.removeEventListener("mousemove",o.onMouseMove),window.removeEventListener("mouseup",o.onMouseUp)})),Object(s.a)(Object(d.e)(o),"onTouchCancel",(function(){o.setState({inside:!1})})),Object(s.a)(Object(d.e)(o),"onTouchEnd",(function(e){e.preventDefault(),o.onDragStop(e)})),Object(s.a)(Object(d.e)(o),"onTouchMove",(function(e){o.onDragStart(e.touches[0].clientX)})),Object(s.a)(Object(d.e)(o),"onTouchStart",(function(e){o.onDragStart(e.touches[0].clientX),o.setState({startPoint:e.touches[0].clientX,isDragging:!0})})),o.state=y({checked:e.checked||!1,inside:!1,isDragging:!1,drag:null,startPoint:null,circleWidth:null,boxWidth:null},h(e.checked||!1)),o.circle=a.a.createRef(),o.box=a.a.createRef(),o}return Object(d.f)(n,[{key:"componentDidMount",value:function(){this.verifyElements()}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.verifyElements()}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.size;return e.size!==t}},{key:"setDragOnChange",value:function(e){this.setState(h(e))}},{key:"verifyElements",value:function(){var e=this,t=this.state.checked,n=this.props.checked,o=setInterval((function(){if(e.circle&&e.box&&e.circle.current&&e.box.current){var r=e.circle.current.clientWidth,c=e.box.current.clientWidth;r&&c&&r!==c&&(e.setState({boxWidth:c,circleWidth:r}),e.setDragOnChange(null!=n?n:t),clearInterval(o))}}),100)}},{key:"render",value:function(){var e=this.state,t=e.checked,n=e.drag,r=e.inside,c=null!==n?{transform:"translateX(".concat(n,"px)")}:null;return a.a.createElement(O,Object(o.a)({},this.props,{checked:t,containerRef:this.box,dragStyle:c,handRef:this.circle,inside:r,onBlur:this.onBlur,onChange:this.onChange,onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onTouchCancel:this.onTouchCancel,onTouchEnd:this.onTouchEnd,onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!=e.checked?y({checked:e.checked},h(e.checked)(t)):null}}]),n}(c.Component),k=function(e){var t=e.containerProps,n=void 0===t?{}:t,c=e.hasError,i=void 0!==c&&c,u=e.readOnly,l=void 0!==u&&u,s=e.disabled,d=void 0!==s&&s,f=e.checked,h=void 0===f?void 0:f,b=e.labelOn,v=void 0===b?"ON":b,p=e.labelOff,O=void 0===p?"OFF":p,g=e.name,y=void 0===g?"":g,j=e.value,k=void 0===j?"":j,D=e.size,E=void 0===D?"s":D,P=Object(r.a)(e,["containerProps","hasError","readOnly","disabled","checked","labelOn","labelOff","name","value","size"]);return a.a.createElement(m,Object(o.a)({},P,{checked:h,containerProps:n,disabled:d,hasError:i,labelOff:O,labelOn:v,name:y,readOnly:l,size:E,value:k}))};k.propTypes={containerProps:u.a.shape({}),hasError:u.a.bool,readOnly:u.a.bool,disabled:u.a.bool,checked:u.a.bool,onChange:u.a.func,labelOn:u.a.string,labelOff:u.a.string,value:u.a.string,size:u.a.oneOf(l.h)};t.a=k}}]);
//# sourceMappingURL=27.a785ff84.chunk.js.map