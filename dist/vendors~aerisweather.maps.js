(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{346:function(t,e,n){"use strict";n.r(e),n.d(e,"Views",(function(){return h}));var a,i=n(336),s=n(309),o={us:{name:"United States",bounds:{north:56.26,west:-131.39,south:15.45,east:-61.17}},usne:{name:"Northeast",bounds:{north:50.37,west:-87.71,south:36.42,east:-61.96}},usec:{name:"Mid-Atlantic",bounds:{north:42.16,west:-88.18,south:31.62,east:-70.55}},usse:{name:"Southeast",bounds:{north:38.85,west:-99.23,south:22.31,east:-73.48}},usnc:{name:"Northern Plains",bounds:{north:51.18,west:-107.8,south:37.44,east:-82.05}},usov:{name:"Lower Ohio Valley",bounds:{north:43.1,west:-97.1,south:32.7,east:-79.48}},usce:{name:"Central Plains",bounds:{north:47.37,west:-110.83,south:34.78,east:-88.42}},ussc:{name:"Southern Plains",bounds:{north:40.85,west:-111.05,south:24.69,east:-85.3}},usnw:{name:"Pacific Northwest",bounds:{north:52.5,west:-129.33,south:39.13,east:-103.53}},uswc:{name:"West Coast",bounds:{north:45.95,west:-129.02,south:33.06,east:-106.61}},ussw:{name:"Southwest",bounds:{north:44.15,west:-127.01,south:28.7,east:-101.21}},usak:{name:"Alaska",bounds:{north:72.87,west:-196.96,south:48.81,east:-127.18}},ushi:{name:"Hawaii",bounds:{north:24.61,west:-162.77,south:16.55,east:-151.3}},ca:{name:"Canada",bounds:{north:75.85,west:-146.95,south:38.96,east:-43.95}},mx:{name:"Mexico",bounds:{north:36.63,west:-119.4,south:11.44,east:-82.13}},crb:{name:"Caribbean",bounds:{north:29.57,west:-91.45,south:5.18,east:-57}},nam:{name:"North America",bounds:{north:75.32,west:-185.45,south:-4.57,east:-22.68}},sam:{name:"South America",bounds:{north:19.97,west:-125.51,south:-58.45,east:-1.75}},eur:{name:"Europe",bounds:{north:72.5,west:-41.5,south:30.3,east:59.41}},afr:{name:"Africa",bounds:{north:44.47,west:-44.83,south:-41.25,east:82.1}},mide:{name:"Middle East",bounds:{north:46.01,west:23.29,south:8.93,east:80.77}},aus:{name:"Australia",bounds:{north:-.18,west:107.05,south:-50.01,east:184.22}},nas:{name:"Northern Asia",bounds:{north:81.09,west:24.61,south:22.27,east:189.84}},sas:{name:"Southern Asia",bounds:{north:55.97,west:59.59,south:-15.45,east:171.04}},asia:{name:"Asia",bounds:{north:78.06,west:12.66,south:-14.94,east:206.02}},world:{name:"World",bounds:{north:85,west:-170.16,south:-67.07,east:191.6}}};!function(t){t.get=function(t){return o[t]},t.set=function(t,e){o[t]=e},t.slug=function(e){var n=t.get(e);if(n)return n.slug||(""+n.name).toLowerCase().replace(/\s+/,"-")},t.asArray=function(e,n){var a=[];return e.forEach((function(e){var i=t.get(e);if(i){var s={};Object.keys(n).forEach((function(a){var o=n[a],r=a;s[r]="key"===o||"code"===o?e:"slug"===o?t.slug(e):i[o]})),a.push(s)}})),a}}(a||(a={}));var r,u,c,h,p,f=n(3),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(t){function e(e){void 0===e&&(e=void 0);var n=t.call(this)||this;return n.onChange=Object(f.debounce)((function(){n.trigger("change")}),500),n._opts=Object(f.extend)({},{layers:{base:void 0,data:void 0,overlays:void 0,text:void 0},center:void 0,zoom:3,bounds:void 0,size:{width:600,height:400},offset:"0",date:void 0,autoFuture:!0,combined:!1,metric:!1},e),n}return l(e,t),Object.defineProperty(e.prototype,"layers",{get:function(){return this._layers},set:function(t){this._layers=t},enumerable:!0,configurable:!0}),e.prototype.opts=function(t,e){return Object(f.isset)(e)?(Object(f.set)(this._opts,t,e),null):Object(f.get)(this._opts,t)},e.prototype.data=function(){return this.opts("layers.data")},e.prototype.setData=function(t){var e=this;if(this._opts.combined)this.opts("layers.data",t);else{var n=[],a=[];t.forEach((function(t){/-text-?/.test(t)&&e.layers.inGroup(t,"text")?n.push(t):a.push(t)})),this.opts("layers.data",a),this.opts("layers.text",n)}return this.trigger("change:data",{data:t}),this.onChange(),this},e.prototype.base=function(){return this.opts("layers.base")},e.prototype.setBase=function(t){return this.opts("layers.base",t),this.trigger("change:base",{base:t}),this.onChange(),this},e.prototype.overlays=function(){return this.opts("layers.overlays")},e.prototype.setOverlays=function(t){return this.opts("layers.overlays",t),this.trigger("change:overlays",{overlays:t}),this.onChange(),this},e.prototype.hasOverlays=function(){var t=this.overlays();return t&&!Object(f.isEmpty)(t)},e.prototype.text=function(){return this.opts("layers.text")},e.prototype.setText=function(t){return this.opts("layers.text",t),this.trigger("change:text",{text:t}),this.onChange(),this},e.prototype.hasText=function(){var t=this.text();return t&&!Object(f.isEmpty)(t)},e.prototype.setLayers=function(t){return(t=t||{}).base&&this.setBase(t.base),t.data&&this.setData(t.data),t.overlays&&this.setOverlays(t.overlays),t.text&&this.setText(t.text),this},e.prototype.offset=function(){return this.opts("offset")},e.prototype.setOffset=function(t){return this.opts("offset",""+t),this.trigger("change:offset",{offset:t}),this.onChange(),this},e.prototype.setDate=function(t){t instanceof Date?this.setOffset(function(t){var e=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3);return Object(f.formatDate)(e,"yyyyMMddHHmm00")}(t)):this.setOffset(""+t)},e.prototype.center=function(){var t=this.opts("center");if(t&&/^[\d\.-]+,[\d\.-]+$/.test(t)){var e=t.split(",");if(e&&2===e.length)return{lat:parseFloat(e[0]),lon:parseFloat(e[1])}}return t},e.prototype.setCenter=function(t,e){if(void 0===e&&(e=null),Object(f.isPlainObject)(t)){var n=t;t=n.lat+","+n.lon}return this.opts("center",t),delete this._opts.bounds,e>=0&&this.opts("zoom",e),this.trigger("change:center"),this.trigger("change:bounds"),this.onChange(),this},e.prototype.zoom=function(){return this.opts("zoom")},e.prototype.setZoom=function(t){return this.opts("zoom",t),this.trigger("change:zoom"),this.trigger("change:bounds"),this.onChange(),this},e.prototype.bounds=function(){return this.opts("bounds")},e.prototype.setBounds=function(t){return this.opts("bounds",t),delete this._opts.center,this.trigger("change:bounds"),this.onChange(),this},e.prototype.setRegion=function(t){var e=a.get(t);return e&&(e.center?this.setCenter(e.center.lat+","+e.center.lon,this.zoom()):e.bounds&&this.setBounds(e.bounds)),this},e.prototype.size=function(){var t=this.opts("size");return t&&t.width&&t.height?{width:t.width,height:t.height}:null},e.prototype.setSize=function(t,e){if("auto"===e){var n=this.opts("size.factor");n&&(e=Math.round(t*n))}return this._opts.size={width:t,height:e},this.trigger("change:size",this.size()),this.trigger("change:bounds"),this.onChange(),this},e.prototype.metric=function(){return this.opts("metric")},e.prototype.setMetric=function(t){return this.opts("metric",t),this.trigger("change:metric",{metric:t}),this.onChange(),this},e.prototype.toRequestOpts=function(t,e){var n=this;void 0===e&&(e=!1);var a=[];if((t=t||["base","data","overlays","text"]).forEach((function(t){var e=n.opts("layers."+t);Object(f.isEmpty)(e)||(a=a.concat(e))})),a){var i=a.slice();if(t.indexOf("text")>-1&&(i=i.map((function(t){if(/-text-?/.test(t)&&n.layers.hasMetric(t)){var e=n.opts("metric")?"text-metric":"text",a=t.match(/^([\w-]+-text)(-metric)?(-(dk|lg)){0,2}/);return a[1].replace(/-text.*$/,"")+"-"+e+(a[3]||"")}return t.replace(/-metric/,"")}))),-1!==t.indexOf("data")||-1!==t.indexOf("text")){this.layers.future();var s=this.layers.futureCodes();this.opts("autoFuture")&&a.forEach((function(t){var e=n.layers.find("id","f"+t,!0);e&&-1===i.indexOf(e.id)&&i.splice(a.indexOf(t)+1,0,e.id)}));var o=function(t){var e=-1!==s.indexOf(t);return e||s.forEach((function(n){var a=new RegExp("^"+n+"-");!e&&a.test(t)&&(e=!0)})),e};i=i.filter((function(t){return!(!n.layers.inGroup(t,"overlay")&&!n.layers.inGroup(t,"masks"))||(e?o(t):!o(t))}))}a=0===i.length?null:i}var r=this.center();if(Object(f.isPlainObject)(r)){var u=r;r=u.lat+","+u.lon}return{layers:{base:-1!==t.indexOf("base")?this.base():null,data:-1!==t.indexOf("data")?a:null,overlays:-1!==t.indexOf("overlays")?this.overlays():null,text:-1!==t.indexOf("text")?a:null},p:r,zoom:this.zoom(),bounds:this.bounds(),size:this.size(),offset:this.offset(),metric:this.metric(),format:"png"}},e}(s.a),g=n(69),m=n(326),b=n(325),y=function(){function t(t,e){this._targets=t,this._opts=Object(f.extend)({enabled:!0,autoplay:!1,alwaysShowPast:!1,alwaysShowFuture:!1},e),this.init()}return Object.defineProperty(t.prototype,"timeline",{get:function(){return this._timeline},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"provider",{set:function(t){var e=this;Object.keys(this.timeline.animations).forEach((function(n){var a=e.timeline.animations[n];a instanceof m.a&&(a.provider=t)}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"past",{get:function(){return this.timeline.get("past")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"future",{get:function(){return this.timeline.get("future")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pastText",{get:function(){return this.timeline.get("pastText")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"futureText",{get:function(){return this.timeline.get("futureText")},enumerable:!0,configurable:!0}),t.prototype.init=function(){var t=this._targets,e=new b.a(this._opts);if(this._timeline=e,t.past){var n=new m.a(t.past,Object(f.extend)({},this._opts,{key:"past",alwaysShow:this._opts.alwaysShowPast}));e.add("past",n)}if(t.future){var a=new m.a(t.future,Object(f.extend)({},this._opts,{key:"future",future:!0,alwaysShow:this._opts.alwaysShowFuture}));e.add("future",a)}if(t.pastText){var i=new m.a(t.pastText,Object(f.extend)({},this._opts,{key:"pastText",alwaysShow:this._opts.alwaysShowPast}));e.add("pastText",i)}if(t.futureText){var s=new m.a(t.futureText,Object(f.extend)({},this._opts,{key:"futureText",future:!0,alwaysShow:this._opts.alwaysShowFuture}));e.add("futureText",s)}},t}(),v=n(331),O=n(327),w=n(314),_=n(23),x=n(25),j=n(68),T=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),z={combined:["layers"],split:["base","past","future","overlays","past-text","future-text"]},P=function(){function t(t){this._opts=Object(f.extend)({format:"MM/dd/yyyy hh:mm a",continuous:!0},t),this.element=Object(j.a)('<div class="awxjs__map-overlay__timestamp"></div>')}return t.prototype.continuous=function(){return!0===this._opts.continuous},t.prototype.update=function(t){var e=new Date(t);this.element.html(Object(f.formatDate)(e,this._opts.format))},t}(),E=function(t){function e(n,a){void 0===a&&(a=void 0);var i=t.call(this)||this;if(i._ready=!1,i.handleLayerChange=function(t){if(i.timeline){var n=i.config.hasText(),a=i.timeline.get("pastText"),s=i.timeline.get("futureText");a&&a.enabled(n),s&&s.enabled(n)}i.trigger(e.Event.CHANGE_DATA,{layers:i.config.data()})},i.handleOffsetChange=function(t){var e=t.data.offset;if(Object(f.isset)(e)&&(/^-/.test(e=""+e)||"0"===e||"current"==e?Object(f.get)(i.opts,"animation.alwaysShowFuture")||["future","futureText"].forEach((function(t){return i._targets[t].hide()})):Object(f.get)(i.opts,"animation.alwaysShowPast")||["past","pastText"].forEach((function(t){return i._targets[t].hide()})),i._timestamp)){var n=Object(f.offsetToTime)(i.config.offset());i._timestamp.update(n)}},i._loadingGroups=[],i.update=Object(f.debounce)((function(t){if(i._ready){var n=(i.config.data()||[]).length>0;i._animator.past.enabled(n),i._animator.pastText.enabled(n),i._animator.future.enabled(n),i._animator.futureText.enabled(n);var a=t||i._loadingGroups;if(0!==(a=i._adjustTypesForUpdate(a)).length){if(i.timeline&&i.timeline.reset(),i._timestamp&&(!i.timeline||!i.timeline.isEnabled())){var s=Object(f.offsetToTime)(i.config.offset());i._timestamp.update(s)}i.trigger(e.Event.LOAD_START);var o=function(){0===u.length&&(Object.keys(r).forEach((function(t){i.setImage(t,r[t])})),i.trigger(e.Event.LOAD_DONE))},r={},u=a.slice(0);a.forEach((function(t){var e="future"==t,n=t;if("past"===t||"future"===t?n="data":"pastText"!==t&&"futureText"!==t||(n="text"),Object(f.isset)(i.config.opts("layers."+n))){if(i.timeline&&("data"===n||"text"===n)){var a=i.timeline.get(t);return void(a&&(a.canShow()?a.once("load:image load:error",(function(e){u.splice(u.indexOf(t),1),o()})):(u.splice(u.indexOf(t),1),o()),a.goToTime(i.timeline.currentTime)))}var s=i._request.clone();s.setParams(i.config.toRequestOpts([n],e)),s.get().then((function(e){u.splice(u.indexOf(t),1),e.image&&(r[t]=e.image.src),o()})).catch((function(t){console.error("ERROR",t)}))}else u.forEach((function(t,e){"past"!==t&&"future"!==t&&"pastText"!==t&&"futureText"!==t||u.splice(e,1)})),i.setImage(t,null)}))}}}),500),!n)throw new Error("[Aeris] Invalid DOM target specified for MapView");return["base","data","overlays"].forEach((function(t){var e="map.layers."+t,n=Object(f.get)(a,e);Object(f.isString)(n)&&Object(f.set)(a,e,n.replace(/\s/,"").split(","))})),i._opts=Object(f.extend)({account:null,map:{layers:{base:["flat"],overlays:["admin"]},size:{width:600,height:400},autoFuture:!0,combine:!1},animation:{enabled:!0,from:-7200,to:0,autoplay:!1,alwaysShowPast:!1,alwaysShowFuture:!1},overlays:{title:void 0,timestamp:"MM/dd/yyyy hh:mm a",branding:{html:void 0,img:void 0}},legend:{enabled:!0},controls:{layers:void 0,regions:void 0}},a),i._target=Object(j.a)(n),i._config=new d(i._opts.map),i._config.on("change",(function(){return i.trigger(e.Event.CHANGE)})),i.account&&(i._request=new g.b({server:Object(f.get)(i._opts,"servers.maps"),client:i.account.credentials()})),i._layers=new O.a,i._layers.fetch().then((function(t){i.config.layers=i._layers,i.render()})),i}return T(e,t),Object.defineProperty(e.prototype,"$el",{get:function(){return this._target},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$map",{get:function(){return this._map},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$container",{get:function(){return Object(j.a)("."+x.a.cssPrefix+"map-container",this.$el)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"account",{get:function(){return this.opts.account},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"opts",{get:function(){return this._opts},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeline",{get:function(){return this._animator?this._animator.timeline:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"legend",{get:function(){return this._legend},enumerable:!0,configurable:!0}),e.prototype.el=function(t){return Object(j.a)(t,this.$el)},e.prototype.setLayers=function(t,e){this.config.setLayers(t),e&&this.setLegend(e)},e.prototype.setLegend=function(t){if(this._legendUrl=null,t)if(Object(f.isString)(t)){var e=t;e.match(/^(https?:)?\/\//)?(this._legendUrl=e,this.legend.setUrl(e)):this.legend.set(e.replace(/\s/g,"").split(","))}else Object(f.isArray)(t)&&this.legend.set(t)},e.prototype.setMetric=function(t){this.config.setMetric(t)},e.prototype.render=function(){this.$el.empty(),this.$el.html('\n\t\t\t<div class="awxjs__mapview">\n\t\t\t\t<ul class="awxjs__map-nav"></ul>\n\t\t\t\t<div class="awxjs__map-container">\n\t\t\t\t\t<div class="awxjs__map">\n\t\t\t\t\t\t<ul class="awxjs__map-region-nav horizontal"></ul>\n\t\t\t\t\t\t<ul class="awxjs__map-anim-controls">\n\t\t\t\t\t\t\t<li data-anim-action="toggle"><button>Play</button></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="awxjs__map-legend"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t');var t=this.opts,n=Object(j.a)("."+x.a.cssPrefix+"map-container > ."+x.a.cssPrefix+"map",this.$el);this._map=n;var a=n.width()||320,i=n.height()||300;t.map.size&&(a=t.map.size.width||a,i=t.map.size.height||i,"auto"===a&&(a=n.width(),t.map.size.width=a,t.map.size.autoscale&&Object(j.a)(window).on("resize",(function(e){var a=n.width();t.map.size.width=a}))));var s=this.config.size(),o=s.width,r=s.height;o&&r&&(n.width(o).height(r),this.$container.width(o)),t.map.region&&!t.map.bounds&&this.config.setRegion(t.map.region);var u=this.opts.overlays,c=this.opts.controls,h=this.opts.animation,p=this.opts.legend;this.setupContainers(n),u&&this.setupOverlays(u),c&&this.setupControls(c),h&&this.setupAnimation(h),p&&this.setupLegend(p),this.setupEvents(),this.trigger(e.Event.READY),this._ready=!0,this.updateGroups()},e.prototype.setupEvents=function(){var t=this;if(this.config.on("change:data change:offset",(function(e){t.updateGroups(["past","future"])})),this.config.on("change:units",(function(e){t.updateGroups(["pastText","futureText"])})),this.config.on("change:data",this.handleLayerChange),this.config.on("change:bounds change:size",(function(e){t.updateGroups()})),this.config.on("change:size",(function(e){var n=e.data,a=n.width,i=n.height;a&&i&&(t.$map.width(a).height(i),t.$container.width(a))})),this.timeline||(this.config.on("change:offset",this.handleOffsetChange),this.config.setOffset(this.config.offset())),this._timestamp&&this.timeline){var e=this._timestamp;!1===e.continuous()?this.timeline.on("advance:image",(function(t){e.update(t.data.time)})):this.timeline.on("advance",(function(t){e.update(t.data.time)})),this.timeline instanceof b.a&&Object.keys(this.timeline.animations).forEach((function(n){var a,i=t.timeline.get(n);i.isEnabled()&&("past"===n||"future"===n)&&(a=i),a&&a.on("load:progress",(function(t){a.canShow()&&e.update(t.data.time)}))}))}},e.prototype.setupContainers=function(t){var e=this,n=x.a.cssPrefix+"map__layers";t.append('<div class="'+n+'"></div>');var a=this.el("."+n);this._indicator=new w.a,this._indicator.appendTo(a[0]),this.on("load:start",(function(){e._indicator.startAnimating()})),this.on("load:done",(function(){e._indicator.stopAnimating()}));var i=this.opts.map.combine?z.combined:z.split,s={};i.forEach((function(t,e){var n=x.a.cssPrefix+"map-layer-"+t;a.append('<div class="'+n+'"></div>');var i=Object(_.camelcase)(t),o=Object(j.a)("."+n,a);o.css({position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":e}),s[i]=o})),this._targets=s},e.prototype.setupControls=function(t){var e=this;if(t.layers){var n=this.el("."+x.a.cssPrefix+"map-nav");t.layers.forEach((function(t){n.append('<li data-map-layer="'+t.value+'"><button>'+t.title+"</button></li>")}));var a=Object(j.a)("li",n);a.on("click",(function(t){t.preventDefault();var n="button"===t.target.tagName.toLowerCase()?Object(j.a)(t.target).parent():Object(j.a)(t.target),i=n.allData("map-layer");a.removeClass("selected"),n.addClass("selected"),i&&e.config.setData(i.split(","))})),this.on("ready",(function(t){var n=Object(f.get)(e.opts,"map.layers.data")||null;n?a.each((function(t,e){var a=Object(j.a)(t);(a.allData("map-layer")===n.join(",")||0===e)&&a.click()})):a.get(0).click()}))}if(t.regions){var i=this,s=this.el("."+x.a.cssPrefix+"map-region-nav");t.regions.forEach((function(t){var e=Object.keys(t).reduce((function(e,n){if("title"!==n){var a=t[n];Object(f.isObject)(a)&&("center"===n?a=a.lat+","+a.lon:"bounds"===n&&(a=a.north+","+a.west+","+a.south+","+a.east)),e.push("data-map-"+n+'="'+a+'"')}return e}),[]);s.append("<li "+e.join(" ")+"><button>"+t.title+"</button></li>")}));var o=Object(j.a)("li",s);o.on("click",(function(t){t.preventDefault();var n="button"===t.target.tagName.toLowerCase()?Object(j.a)(t.target).parent():Object(j.a)(t.target),a=n.allData("map-zoom"),s=n.allData("map-center")||Object(f.get)(e.opts,"map.center"),r=n.allData("map-region"),u=n.allData("map-bounds");if(o.removeClass("selected"),n.addClass("selected"),r)i.config.setRegion(r);else if(u){var c=u.split(",");4===c.length&&i.config.setBounds({north:c[0],west:c[1],south:c[2],east:c[3]})}else s&&!Object(f.isEmpty)(s)?Object(f.isset)(a)&&a>0?i.config.setCenter(s,a):i.config.setCenter(s,e.config.zoom()):a>0&&i.config.setZoom(a)})),this.on("ready",(function(t){var n=Object(f.get)(e.opts,"map.zoom")||null;Object(f.isset)(n)?o.each((function(t,e){var a=Object(j.a)(t);(a.allData("map-zoom")===""+n||0===e)&&a.click()})):o.get(0).click()}))}},e.prototype.setupOverlays=function(t){var e=x.a.cssPrefix+"map__overlays";this.$map.append('<div class="'+e+'"></div>');var n=this.el("."+e);if(t.timestamp){var a=t.timestamp;Object(f.isString)(a)&&(a={format:a});var i=new P(a);i.element.css({"z-index":10}),n.append(i.element),this._timestamp=i}if(t.title){var s=x.a.cssPrefix+"map-overlay__title";n.append('<div class="'+s+'">'+t.title+"</div>"),Object(j.a)("."+s,n).css({"z-index":11})}if(t.branding){var o=t.branding,r=o.img,u=o.html;s=x.a.cssPrefix+"map-overlay__branding";n.append('<div class="'+s+'"></div>');var c=Object(j.a)("."+s,n);c.css({"z-index":12}),Object(f.isset)(r)?c.html('<img src="'+r+'" />'):Object(f.isset)(u)&&c.html(u)}},e.prototype.setupAnimation=function(t){var n=this,a=this.el(".awxjs__map-anim-controls > li");if(!t.enabled)return this.config.setOffset(Object(f.get)(this.opts,"map.offset")||0),void a.remove();var i=new y({past:this._targets.past,future:this._targets.future,pastText:this._targets.pastText,futureText:this._targets.futureText},t);i.provider=this,this._animator=i;var s=i.timeline;s.on("load:start",(function(){n._indicator.startAnimating()})),s.on("load:done load:error",(function(){n._indicator.stopAnimating()})),this.config.opts("autoFuture",s.containsFuture()),s.on("end:change",(function(t){n.config.opts("autoFuture",s.containsFuture())})),s.on("start:change end:change",(function(t){s.canAnimate()?a.show():a.hide()})),s.canAnimate()||a.hide(),this.on("ready",(function(){n.config.on("change:data change:size change:zoom change:offset change:center change:bounds",(function(t){})),n.config.on("change:units",(function(t){s.stop();var e=s.get("pastText");e&&e.reset();var n=s.get("futureText");n&&n.reset()})),s.goToInit(),s.isAutoPlay()&&n.once(e.Event.LOAD_DONE,(function(){setTimeout((function(){s.play()}),500)}))})),a.each((function(t){var e=Object(j.a)(t);if("toggle"===e.allData("anim-action")){var n=Object(j.a)("button",e);s.on("play load:start",(function(){n.html("Stop")})),s.on("stop",(function(){n.html("Play")}))}})).on("click",(function(t){t.preventDefault();var e=("button"===t.target.tagName.toLowerCase()?Object(j.a)(t.target).parent():Object(j.a)(t.target)).allData("anim-action");"toggle"===e?s.toggle():"play"===e?s.play():"pause"===e?s.pause():"stop"===e&&s.stop()}))},e.prototype.setupLegend=function(t){var e=this,n=this.el(".awxjs__map-legend");if(t.enabled){var a=new v.a(n,Object(f.extend)({size:{width:this.$map.width()}},t));this._legend=a;var i=Object(f.debounce)((function(){if(!e._legendUrl){var t=e.config.data(),n={account:e.account};t&&-1!==t.indexOf("alerts")&&(n.within={bounds:e.config.bounds(),center:e.config.center(),zoom:e.config.zoom(),size:e.config.size()}),a.set(t,n)}}),50);this.config.on("change:data change:bounds",(function(t){i()})),this.config.on("change:size",(function(t){a.setWidth(t.data.width)})),this.config.on("change:metric",(function(t){a.setMetric(t.data.metric)})),i()}else n.remove()},e.prototype.setImage=function(t,e){var n=Object(j.a)("."+x.a.cssPrefix+"map-layer-"+t,this.$el);n&&(n.empty(),e&&n.append('<img src="'+e+'" width="'+this.config.size().width+'" height="'+this.config.size().height+'">'))},e.prototype.updateGroups=function(t){var e=this;(t=t||["base","past","future","overlays"]).forEach((function(t){-1===e._loadingGroups.indexOf(t)&&e._loadingGroups.push(t)})),this.update()},e.prototype._adjustTypesForUpdate=function(t){var e=t.splice(0),n=(new Date).getTime();if(this.timeline&&this.timeline.isEnabled()){var a=e.indexOf("past");a>-1&&this.timeline.startDate().getTime()>n&&e.splice(a,1);var i=e.indexOf("future");i>-1&&this.timeline.endDate().getTime()<=n&&!1===this._animator.timeline.get("future").canShow()&&e.splice(i,1)}return this.config.hasText()&&(e.indexOf("past")>-1&&e.push("pastText"),e.indexOf("future")>-1&&e.push("futureText")),e},e.prototype.animationUrlForDate=function(t,e){var n=this._request.clone(),a=/text$/i.test(t.key)?"text":"data",i=this.config.toRequestOpts([a],t.isFuture());return"data"===a&&Object(f.isset)(i.layers.data)||"text"===a&&Object(f.isset)(i.layers.text)?(n.setParams(i),n.date(e),n.url()):null},e.prototype.animationSizeForImage=function(t){return this.config.size()},e.Event={READY:"ready",CHANGE:"change",CHANGE_DATA:"change:data",LOAD_START:"load:start",LOAD_DONE:"load:done"},e}(s.a),A=n(330),C=n(310),D=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),S=function(){return(S=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return D(e,t),e}(i.a);(p=h||(h={})).utils=S({},C),p.datasources={Tile:A.c,Vector:A.d,GeoJson:A.a,Text:A.b},p.setAccount=function(t){u=t},p.setServers=function(t){c=t},p.InteractiveMap=function(t,e,n){return(e=e||{}).account=u,e.servers=e.servers||c,new k(t,e,n)},p.Map=function(t,e){return(e=e||{}).account=u,e.servers=e.servers||c,new E(t,e)},p.Legend=function(t,e){return(e=e||{}).account=u,new v.a(t,e)}}}]);