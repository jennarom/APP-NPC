(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-273d4261"],{"1f4f":function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),i=a("7560"),c=a("58df");e["a"]=Object(c["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"3c48":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",{staticClass:"text-center"},[t._v("Próximamente")]),a("v-card-text",{staticClass:"blue--text text-center"},[a("strong",[t._v("Lista de Productos Vencidos")])]),a("v-card-text",{staticClass:"blue--text text-right"},[t._v(" "+t._s(new Date)+" — "),a("strong",[t._v("Fecha Actual")])]),a("div",{staticClass:"col-md-12"},[a("v-simple-table",[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Nombre")]),a("th",[t._v("Marca")]),a("th",[t._v("Caducidad")]),a("th",[t._v("Opciones")])])]),a("tbody",t._l(t.Products,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.ID))]),a("td",[t._v(t._s(e.Nombre))]),a("td",[t._v(t._s(e.Marca))]),a("td",[t._v(t._s(e.Caducidad))]),a("td",[a("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"Editar",params:{id:e._id}},color:"primary"}},[a("v-icon",[t._v("mdi-pencil ")])],1),a("v-button",{staticClass:"btn btn-danger",attrs:{color:"error"},on:{click:function(a){return a.preventDefault(),t.deleteProduct(e._id)}}},[a("v-icon",[t._v("mdi-delete ")])],1)],1)])})),0)])],1)],1)},n=[],i=(a("c740"),a("a434"),a("bc3a")),c=a.n(i),o={data:function(){return{Products:[]}},created:function(){var t=this,e="https://freshfoodapp.herokuapp.com/api/Plista";c.a.get(e).then((function(e){t.Products=e.data})).catch((function(t){console.log(t)}))},methods:{deleteProduct:function(t){var e=this,a="https://freshfoodapp.herokuapp.com/api/delete-product/".concat(t),s=this.Products.findIndex((function(e){return e._id===t}));window.confirm("¿Desea borrar el Item?")&&c.a.delete(a).then((function(){e.Products.splice(s,1)})).catch((function(t){console.log(t)}))}}},r=o,d=(a("67ca"),a("2877")),l=a("6544"),u=a.n(l),h=a("99d9"),v=a("132d"),b=a("1f4f"),f=Object(d["a"])(r,s,n,!1,null,null,null);e["default"]=f.exports;u()(f,{VCardText:h["b"],VIcon:v["a"],VSimpleTable:b["a"]})},"67ca":function(t,e,a){"use strict";a("6f3b")},"6f3b":function(t,e,a){},"8b37":function(t,e,a){}}]);
//# sourceMappingURL=chunk-273d4261.ef0628ba.js.map