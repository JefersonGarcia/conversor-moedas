(function(t){function e(e){for(var o,n,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),r=a.n(o);r.a},"388d":function(t,e,a){"use strict";var o=a("6f21"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=a("5f5b"),s=a("b1e0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{attrs:{id:"linha",color:"#f1f1f1"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"USD",moedaB:"BRL"}})],1),a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"CAD",moedaB:"BRL"}})],1),a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"EUR",moedaB:"BRL"}})],1)])])])]),a("div",{staticClass:"col-md"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"BRL",moedaB:"USD"}})],1),a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"BRL",moedaB:"CAD"}})],1),a("li",{staticClass:"list-group-item"},[a("conversor",{attrs:{moedaA:"BRL",moedaB:"EUR"}})],1)])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"cabecalho"}},[a("div",{staticClass:"container"},[a("h1",[t._v("Conversor de moedas - Comercial")])])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conversor"},[a("div",{staticClass:"text-center"},[a("h2",[a("span",{staticClass:"badge badge-info"},[t._v(" "+t._s(t.moedaA)+" Para "+t._s(t.moedaB))])])]),a("b-input-group",{staticClass:"mt-3"},[a("b-form-input",{attrs:{type:"text",placeholder:t.moedaA},model:{value:t.moedaA_value,callback:function(e){t.moedaA_value=e},expression:"moedaA_value"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"success"},on:{click:t.converter}},[t._v("Venda")]),a("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.converter("compra")}}},[t._v(" Compra ")])],1)],1),a("div",{staticClass:"text-center"},[a("h2",[a("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(t.moedaB_value)+" ")])])])],1)},l=[],u=(a("b680"),a("d3b7"),{name:"Conversor",props:["moedaA","moedaB"],data:function(){return{moedaA_value:"",moedaB_value:0}},methods:{converter:function(t){var e=this;console.log(t);var a="BRL"==this.moedaA,o=o=a?this.moedaB+"-"+this.moedaA:this.moedaA+"-"+this.moedaB,r="https://economia.awesomeapi.com.br/all/"+o;console.log(r);var s=a?this.moedaB:this.moedaA;fetch(r).then((function(t){return t.json()})).then((function(o){var r=o[s].bid,n=o[s].ask,i="compra"==t?r:n;e.moedaB_value=a?(parseFloat(e.moedaA_value)/i).toFixed(2):(i*parseFloat(e.moedaA_value)).toFixed(2)}))}}}),d=u,p=(a("388d"),a("2877")),f=Object(p["a"])(d,c,l,!1,null,"0d35fe1e",null),v=f.exports,m={name:"App",components:{Conversor:v}},b=m,h=(a("034f"),Object(p["a"])(b,n,i,!1,null,null,null)),C=h.exports;a("f9e3"),a("2dd8");o["default"].use(r["a"]),o["default"].use(s["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(C)}}).$mount("#app")},"6f21":function(t,e,a){},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.a615cdc9.js.map