(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{452:function(t,e,n){"use strict";n.r(e);n(43);var l=n(1).a.extend({props:{title:String,items:null|Array,preview_number:{required:!1,default:6},preview_titles:Array},data:function(){return{load:!0,preview:!0}},computed:{get_items:function(){return null==this.items?null:this.preview?this.items.slice(0,this.preview_number):this.items},get_preview_title:function(){return this.preview?this.preview_titles[0]:this.preview_titles[1]},is_initial_loading:function(){return this.load&&null===this.items},is_loading:function(){return!(this.load&&null===this.items)&&this.load}},methods:{loading:function(){this.load=!0},loaded:function(){this.load=!1}}}),r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card compact shadow bordered bg-base-100 pb-2"},[e("div",{staticClass:"stats relative"},[t.is_loading?e("div",{staticClass:"btn btn-sm bg-base-100 border-0 btn-square loading absolute top-2 right-2"}):t._e(),t._v(" "),e("div",{staticClass:"stat text-center"},[e("div",{staticClass:"stat-title"},[t._v(t._s(t.title))]),t._v(" "),t.is_initial_loading?e("div",{staticClass:"stat-value"},[e("div",{staticClass:"btn btn-md bg-base-100 border-0 btn-square loading"})]):t._e()])]),t._v(" "),t.is_initial_loading?t._e():e("div",[null!==t.items&&t.get_items.length>0?e("div",[t._t("content",null,{get_items:t.get_items}),t._v(" "),e("div",{staticClass:"mt-4"},[t.items.length>t.preview_number?e("div",{staticClass:"text-center"},[e("div",{staticClass:"btn uppercase border border-green btn-green",on:{click:function(e){t.preview=!t.preview}}},[t._v(t._s(t.get_preview_title))])]):t._e()])],2):e("div",{staticClass:"text-center font-bold mb-2 text-xl"},[t._v("\n            Pas de statistiques\n        ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);