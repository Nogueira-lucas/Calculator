(this["webpackJsonpcalculadora-app"]=this["webpackJsonpcalculadora-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(8),l=n.n(s),i=(n(14),n.p,n(15),n(4)),o=n(5),u=n(7),b=n(6),p=n(2);n(16);function d(t){var e,n=t.result,c=t.clear;return Object(a.jsxs)("div",{className:"input_container",children:[Object(a.jsx)("input",(e={type:"number"},Object(p.a)(e,"type","text"),Object(p.a)(e,"className","display form-control"),Object(p.a)(e,"value",n),e)),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return c()},children:"Clear"})]})}var j=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"botoes-container",children:[Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(1)},children:"1"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(2)},children:"2"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(3)},children:"3"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addOperator(1)},children:"+"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(4)},children:"4"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(5)},children:"5"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(6)},children:"6"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addOperator(2)},children:"-"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(7)},children:"7"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(8)},children:"8"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(9)},children:"9"}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addOperator(3)},children:"*"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addTempValue(0)},children:"0"}),Object(a.jsx)("button",{className:"btn btn-light igual",onClick:function(){return t.props.calc()},children:"="}),Object(a.jsx)("button",{className:"btn btn-light",onClick:function(){return t.props.addOperator(4)},children:"/"})]})}}]),n}(r.a.Component),h=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).addOperator=function(t){a.setState({operator:t}),a.state.result=a.state.tempValue,a.state.tempValue=0},a.addTempValue=function(t){var e=a.state.tempValue;a.setState({tempValue:Number.parseInt("".concat(e)+t)})},a.calc=function(){var t=a.state.operator,e=a.state.tempValue,n=a.state.result;switch(t){case 1:a.setState({tempValue:e+n});break;case 2:a.setState({tempValue:-1*(e-n)});break;case 3:a.setState({tempValue:e*n});break;case 4:a.setState({tempValue:e/n})}},a.clear=function(){a.setState({operator:0,tempValue:0})},a.state={operator:0,tempValue:0},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"calculadora_container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(d,{result:this.state.tempValue,clear:this.clear})}),Object(a.jsx)("div",{className:"buttons",children:Object(a.jsx)(j,{className:"btn btn-light",addTempValue:this.addTempValue,addOperator:this.addOperator,calc:this.calc})})]})}}]),n}(r.a.Component);function m(){return Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)("h1",{children:"Calculadora"}),Object(a.jsx)("hr",{className:"headerline"})]})}var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{}),Object(a.jsx)(h,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.ba4d9edc.chunk.js.map