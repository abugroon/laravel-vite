import{C as e,V as n}from"./vendor.f1583b27.js";function t(e,n,t,o,s,r,i,a){var c,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):s&&(c=a?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,n){return c.call(n),l(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:d}}const o={};var s=t({name:"MainApp",data:()=>({message:"test file",jokes:[]}),mounted(){axios.get("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/2").then((e=>{this.jokes=e.data})).catch(console.log)}},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"main-app"}},[t("ul",e._l(e.jokes,(function(n){return t("li",[e._v(" "+e._s(n.setup)+" "),t("br"),e._v(" "+e._s(n.punchline)+" ")])})),0)])}),[],!1,r,"3446b204",null,null);function r(e){for(let n in o)this[n]=o[n]}var i=function(){return s.exports}();window.axios=e,n.component("main-app",i),new n({el:"#app"});