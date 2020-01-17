(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(t,n,e){"use strict";var i=e(25),s=e(24),o=e(3),a=e.n(o).a.extend({name:"rippleable",directives:{ripple:s.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),r=e(119),l=e(2);n.a=Object(l.a)(i.a,a,r.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some(n=>this.valueComparator(n,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i.a.options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,n){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},n),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);const e=n.length;n=n.filter(n=>!this.valueComparator(n,t)),n.length===e&&n.push(t)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(n,t)?null:t:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n},onFocus(){this.isFocused=!0},onKeydown(t){}}})},163:function(t,n,e){var i=e(222);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(6)(i,s);i.locals&&(t.exports=i.locals)},222:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,'/** Ripples */\n/** Elements */\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {\n  color: rgba(0, 0, 0, 0.26) !important;\n}\n\n.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {\n  color: rgba(255, 255, 255, 0.3) !important;\n}\n\n.v-input--selection-controls {\n  margin-top: 16px;\n  padding-top: 4px;\n}\n.v-input--selection-controls .v-input__append-outer,\n.v-input--selection-controls .v-input__prepend-outer {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.v-input--selection-controls .v-input__control {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  width: auto;\n}\n.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {\n  margin-bottom: 12px;\n}\n.v-input--selection-controls__input {\n  color: inherit;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  height: 24px;\n  position: relative;\n  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transition-property: color, -webkit-transform;\n  transition-property: color, -webkit-transform;\n  transition-property: color, transform;\n  transition-property: color, transform, -webkit-transform;\n  width: 24px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-application--is-ltr .v-input--selection-controls__input {\n  margin-right: 8px;\n}\n.v-application--is-rtl .v-input--selection-controls__input {\n  margin-left: 8px;\n}\n.v-input--selection-controls__input input[role=checkbox],\n.v-input--selection-controls__input input[role=radio],\n.v-input--selection-controls__input input[role=switch] {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-input--selection-controls__input + .v-label {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-input--selection-controls__ripple {\n  border-radius: 50%;\n  cursor: pointer;\n  height: 34px;\n  position: absolute;\n  -webkit-transition: inherit;\n  transition: inherit;\n  width: 34px;\n  left: -12px;\n  top: calc(50% - 24px);\n  margin: 7px;\n}\n.v-input--selection-controls__ripple:before {\n  border-radius: inherit;\n  bottom: 0;\n  content: "";\n  position: absolute;\n  opacity: 0.2;\n  left: 0;\n  right: 0;\n  top: 0;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.v-input--selection-controls__ripple .v-ripple__container {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple {\n  width: 28px;\n  height: 28px;\n  left: -11px;\n}\n.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple {\n  top: calc(50% - 21px);\n}\n.v-input--selection-controls.v-input {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n.v-input--selection-controls.v-input .v-label {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  top: 0;\n  height: auto;\n}\n.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,\n.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before {\n  background: currentColor;\n  opacity: 0.4;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before {\n  background: currentColor;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  -webkit-transition: none;\n  transition: none;\n}',""])},237:function(t,n,e){var i=e(238);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(6)(i,s);i.locals&&(t.exports=i.locals)},238:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,"/** Ripples */\n/** Elements */\n.theme--light.v-input--switch .v-input--switch__thumb {\n  color: #FFFFFF;\n}\n.theme--light.v-input--switch .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #fafafa !important;\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.theme--dark.v-input--switch .v-input--switch__thumb {\n  color: #bdbdbd;\n}\n.theme--dark.v-input--switch .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #424242 !important;\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.1) !important;\n}\n\n.v-input--switch__track, .v-input--switch__thumb {\n  background-color: currentColor;\n  pointer-events: none;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.v-input--switch__track {\n  border-radius: 8px;\n  width: 36px;\n  height: 14px;\n  left: 2px;\n  position: absolute;\n  opacity: 0.6;\n  right: 2px;\n  top: calc(50% - 7px);\n}\n.v-input--switch__thumb {\n  border-radius: 50%;\n  top: calc(50% - 10px);\n  height: 20px;\n  position: relative;\n  width: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-input--switch .v-input--selection-controls__input {\n  width: 38px;\n}\n.v-input--switch .v-input--selection-controls__ripple {\n  top: calc(50% - 24px);\n}\n.v-input--switch.v-input--dense .v-input--switch__thumb {\n  width: 18px;\n  height: 18px;\n}\n.v-input--switch.v-input--dense .v-input--switch__track {\n  height: 12px;\n  width: 32px;\n}\n.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track {\n  height: 22px;\n  width: 44px;\n  top: calc(50% - 12px);\n  left: -3px;\n}\n.v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  top: calc(50% - 22px);\n}\n.v-input--switch.v-input--is-dirty.v-input--is-disabled {\n  opacity: 0.6;\n}\n.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple {\n  left: -14px;\n}\n.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  left: -12px;\n}\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(20px, 0);\n          transform: translate(20px, 0);\n}\n.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple {\n  right: -14px;\n}\n.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  right: -12px;\n}\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(-20px, 0);\n          transform: translate(-20px, 0);\n}\n.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-input--switch--inset .v-input--switch__track,\n.v-input--switch--inset .v-input--selection-controls__input {\n  width: 48px;\n}\n.v-input--switch--inset .v-input--switch__track {\n  border-radius: 14px;\n  height: 28px;\n  left: -4px;\n  opacity: 0.32;\n  top: calc(50% - 14px);\n}\n.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb {\n  -webkit-transform: translate(0, 0) !important;\n          transform: translate(0, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb {\n  -webkit-transform: translate(-6px, 0) !important;\n          transform: translate(-6px, 0) !important;\n}\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(20px, 0) !important;\n          transform: translate(20px, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(-26px, 0) !important;\n          transform: translate(-26px, 0) !important;\n}",""])},564:function(t,n,e){"use strict";e(122);var i=e(3),s=e.n(i),o=e(51),a=e(0);const r=["sm","md","lg","xl"],l=r.reduce((t,n)=>(t[n]={type:[Boolean,String,Number],default:!1},t),{}),p=r.reduce((t,n)=>(t["offset"+Object(a.p)(n)]={type:[String,Number],default:null},t),{}),c=r.reduce((t,n)=>(t["order"+Object(a.p)(n)]={type:[String,Number],default:null},t),{}),u={col:Object.keys(l),offset:Object.keys(p),order:Object.keys(c)};function h(t,n,e){let i=t;if(null!=e&&!1!==e){if(n){i+=`-${n.replace(t,"")}`}return"col"!==t||""!==e&&!0!==e?(i+=`-${e}`,i.toLowerCase()):i.toLowerCase()}}const v=new Map;n.a=s.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...p,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:n,data:e,children:i,parent:s}){let a="";for(const t in n)a+=String(n[t]);let r=v.get(a);if(!r){let t;for(t in r=[],u)u[t].forEach(e=>{const i=n[e],s=h(t,e,i);s&&r.push(s)});const e=r.some(t=>t.startsWith("col-"));r.push({col:!e||!n.cols,[`col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),v.set(a,r)}return t(n.tag,Object(o.a)(e,{class:r}),i)}})},565:function(t,n,e){"use strict";e(122);var i=e(3),s=e.n(i),o=e(51),a=e(0);const r=["sm","md","lg","xl"],l=["start","end","center"];function p(t,n){return r.reduce((e,i)=>(e[t+Object(a.p)(i)]=n(),e),{})}const c=t=>[...l,"baseline","stretch"].includes(t),u=p("align",()=>({type:String,default:null,validator:c})),h=t=>[...l,"space-between","space-around"].includes(t),v=p("justify",()=>({type:String,default:null,validator:h})),d=t=>[...l,"space-between","space-around","stretch"].includes(t),m=p("alignContent",()=>({type:String,default:null,validator:d})),w={align:Object.keys(u),justify:Object.keys(v),alignContent:Object.keys(m)},_={align:"align",justify:"justify",alignContent:"align-content"};function g(t,n,e){let i=_[t];if(null!=e){if(n){i+=`-${n.replace(t,"")}`}return i+=`-${e}`,i.toLowerCase()}}const b=new Map;n.a=s.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:h},...v,alignContent:{type:String,default:null,validator:d},...m},render(t,{props:n,data:e,children:i}){let s="";for(const t in n)s+=String(n[t]);let a=b.get(s);if(!a){let t;for(t in a=[],w)w[t].forEach(e=>{const i=n[e],s=g(t,e,i);s&&a.push(s)});a.push({"no-gutters":n.noGutters,"row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),b.set(s,a)}return t(n.tag,Object(o.a)(e,{staticClass:"row",class:a}),i)}})},573:function(t,n,e){"use strict";e.r(n);e(104),e(86);var i={mounted:function(){console.log("Component mounted.")},props:{currentWeatherData:{type:Object},onUsersHome:{type:Boolean},userLoggedIn:{type:Boolean}},data:function(){return{onHomePage:this.onUsersHome||!1,switchAddRemoveHomePageLoading:!1,switchAddRemoveHomePageSuccess:!1,switchErrorMessage:null}},computed:{weatherData:function(){return this.currentWeatherData}},methods:{addRemoveHomePage:function(t){var n=this;this.onHomePage=t,this.userLoggedIn?(this.switchAddRemoveHomePageLoading=!0,axios.post("user/weather/home/add",{longitude:this.weatherData.coordinates.lon,latitude:this.weatherData.coordinates.lat,homepage:t}).then((function(e){console.log(e),(e.status=200)&&(n.switchAddRemoveHomePageSuccess=!0),t||n.$bus.emit("removeWeatherFromUsersHomepage","test"),n.$bus.emit("showSnackBarMessage",t?"Added to homepage":"Removed from homepage")})).catch((function(t){console.error(t)})),this.switchAddRemoveHomePageLoading=!1):(this.switchErrorMessage="You need to login to use this feature.",this.onHomePage=!1)}}},s=e(11),o=e(18),a=e.n(o),r=e(564),l=e(581),p=e(156),c=e(565),u=(e(163),e(237),e(103)),h=e(25),v=e(59),d=e(42),m=e(94),w=e(0),_=u.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...h.a.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...this.attrs$}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(m.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===w.m.left&&this.isActive||t.keyCode===w.m.right&&!this.isActive)&&this.onChange()}}}),g=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-container",{staticStyle:{"max-width":"400px",padding:"0","padding-bottom":"10px"}},[e("v-row",[e("v-col",{staticClass:"text-center",attrs:{sm:"5"}},[e("zoom-center-transition",{attrs:{appear:"",duration:300}},[e("v-icon",{key:t.weatherData.id,attrs:{size:"85"}},[t._v(t._s(t.weatherData.icon.name))])],1),t._v(" "),e("slide-y-up-transition",{attrs:{appear:"",duration:300}},[e("p",{key:t.weatherData.id,staticClass:"title mb-0 text-capitalize"},[t._v(t._s(t.weatherData.weather_description))])]),t._v(" "),e("slide-y-up-transition",{attrs:{appear:"",duration:300}},[e("v-switch",{key:t.weatherData.id,attrs:{"input-value":t.onHomePage,label:t.onHomePage?"Remove from homepage":"Add to homepage",loading:t.switchAddRemoveHomePageLoading,readonly:t.switchAddRemoveHomePageLoading,success:t.switchAddRemoveHomePageSuccess,"error-messages":t.switchErrorMessage},on:{change:t.addRemoveHomePage}})],1)],1),t._v(" "),e("v-col",{attrs:{sm:"7"}},[e("v-row",[e("v-col",[e("slide-x-right-transition",{attrs:{appear:"",duration:300}},[e("p",{key:t.weatherData.id,staticClass:"display-2 mb-0"},[t._v(t._s(t.weatherData.temp)+"℃")])])],1)],1),t._v(" "),e("v-row",[e("v-col",[e("zoom-center-transition",{attrs:{appear:"",duration:300}},[e("p",{key:t.weatherData.id,staticClass:"display-1 text-left mb-1"},[t._v(t._s(t.weatherData.location_name))])]),t._v(" "),e("slide-y-up-transition",{attrs:{appear:"",duration:300}},[e("p",{key:t.weatherData.id,staticClass:"title text-left mb-0"},[t._v(t._s(t.weatherData.date))])]),t._v(" "),e("slide-y-up-transition",{attrs:{appear:"",duration:300}},[e("p",{key:t.weatherData.id,staticClass:"title text-left mb-0"},[t._v(t._s(t.weatherData.time))])])],1)],1)],1)],1)],1),t._v(" "),e("v-container",[e("slide-y-up-transition",{attrs:{appear:""}},[e("v-row",{key:t.weatherData.id},[e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"#22d46f"}},[t._v("mdi-water-percent")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Humidity")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.humidity)+"%")])]),t._v(" "),e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-water-pump")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Pressure")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.pressure))])]),t._v(" "),e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"cryan"}},[t._v("mdi-eye-outline")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Visibility")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.visibility))])]),t._v(" "),e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"#b4badb"}},[t._v("mdi-weather-windy")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Wind speed")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.wind.speed)+"mph")])]),t._v(" "),e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"#bdc8ff"}},[t._v("mdi-thermometer")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Temp min")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.temp_min)+"℃")])]),t._v(" "),e("v-col",{attrs:{sm:"2"}},[e("p",{staticClass:"text-center mb-2"},[e("v-icon",{attrs:{color:"red"}},[t._v("mdi-thermometer-lines")])],1),t._v(" "),e("p",{staticClass:"text-center title mb-2"},[t._v("Temp max")]),t._v(" "),e("p",{staticClass:"text-center mb-2"},[t._v(t._s(t.weatherData.temp_max)+"℃")])])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=g.exports;a()(g,{VCol:r.a,VContainer:l.a,VIcon:p.a,VRow:c.a,VSwitch:_})}}]);