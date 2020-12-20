(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"164e":function(e,t){e.exports=echarts},"52ad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),i=n.n(a),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[e._v("Dynamic Aviation Network Under Pandemic")]),n("h2",{staticClass:"subtitle"},[e._v("A Demo For Course CIE6036")]),n("div",{staticClass:"section"},[n("div",{staticClass:"section_title"},[e._v("INTRODUCTION")]),n("div",{ref:"introduction",staticClass:"section_content"},[e._v("Inspired by the fusing command from civil aviation, the decision making of dynamic airline system takes a more essential role in current situation. After we propose a new decision making model on airline capacity and solve a constrained optimization problem, we obtain empirical experiment results. To better illustrate the relationship between decision making with different "),n("strong",[e._v("dates/cities/$\\epsilon$/$T$")]),e._v(", we now apply echarts to our Dynamic Airline System in 3D.")])]),n("GlobeChart"),n("div",{staticClass:"section"},[n("div",{staticClass:"section_title"},[e._v("ILLUSTRATION")]),n("div",{ref:"illustration",staticClass:"section_content"},[e._v("To further illustrate, we explain several characteristics: "),n("br"),e._v(" 1. Relative Capacity: $c_{ij}^* / c_{ij}^{max}$ (optimal airline load rate) "),n("br"),e._v(" 2. Absolute Capacity: $c_{ij}^*$ (optimal airline capacity) "),n("br"),e._v(" 3. Date: $S_i$ (infection severity of different cities) "),n("br"),e._v(" 4. Relaxtion parameter: $(\\epsilon,T)$")])]),e._m(0),n("GlobeTotalChart",{staticClass:"global-total-chart"}),n("div",{staticClass:"section"},[n("div",{staticClass:"section_title"},[e._v("FUTURE WORK")]),n("div",{ref:"future_work",staticClass:"section_content"},[e._v("1. Decide the flight to/between high risk area better "),n("br"),e._v(" 2. Generate the $c^{max}$ matrix by the whole year's data "),n("br"),e._v(" 3. Get the data of other main countries like U.S. and U.K")])]),e._m(1)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"section_title"},[e._v("CONCLUSION")]),n("div",{staticClass:"section_content"},[e._v("In sum, we could draw several meaningful conclusions: "),n("br"),e._v(" 1. Reflect the tradeoff between the satisfaction of passengers’ transportation demand and the avoidance of disease spreading "),n("br"),e._v(' 2. Show the necessity to greatly reduce the capacity of airline from the cities with severe outbreaks ("Five One" policy)')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"section_title"},[e._v("REFERENCES")]),n("div",{staticClass:"section_content references"},[e._v("[1] The impacts of covid-19 on the global airline industry: An event study approach. Journal of air transport man agement, 2020. "),n("br"),e._v(" [2] Scenarios for a post-covid-19 world airline network. arXiv preprint 2020. "),n("br"),e._v(" [3] Temporal characteristics of the chinese aviation network and their effects on the spread of infectious diseases. Scientific Reports, 2017. "),n("br"),e._v(" [4] European air lines' strategic responses to the covid-19 pandemic (January-May, 2020). Journal of air transport man agement, 2020. "),n("br"),e._v(" [5] European airline response to the covid-19 pandemic–contraction, consolidation and future considerations for airline business and management. Research in Transportation Business & Management, 2020. "),n("br"),e._v(" [6] Geatpy: the genetic and evolutionary algorithm toolbox with high performance in python, 2020. "),n("br"),e._v(" [7] Air quality forecast monitoring and its impact on brain health based on big data and the internet of things. IEEE Access, 2018. "),n("br"),e._v(" [8] A sidarthe model of covid-19 epidemic in Italy. arXiv preprint, 2020."),n("br"),e._v(" [9] Extended sir prediction of the epidemics trend of covid-19 in Italy and compared with hunan, China. Frontiers in medicine, 2020. "),n("br"),e._v(" [10] Prevention and control of covid-19 in public transportation: experience from China. Environmental pollution, 2020. "),n("br"),e._v(" [11] Early dynamics of transmission and control of covid-19: a mathematical modelling study. The lancet infectious diseases, 2020.")])])}],s=(n("96cf"),n("1da1")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer-container"},[n("div",{ref:"globe",staticClass:"chart-container"}),n("div",{staticClass:"tool-bar"},[n("el-select",{attrs:{placeholder:"Capacity Type",disabled:e.loading||e.playing},on:{change:e.handleChangeOption},model:{value:e.typeSelected,callback:function(t){e.typeSelected=t},expression:"typeSelected"}},e._l(e.typeOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:e.loading||e.playing}})})),1),n("el-cascader",{attrs:{options:e.selectOptions,placeholder:"Select Param T",disabled:e.loading||e.playing},on:{change:e.handleChangeParam},model:{value:e.paramSelected,callback:function(t){e.paramSelected=t},expression:"paramSelected"}}),n("el-date-picker",{attrs:{pickerOptions:e.pickerOptions,clearable:!1,disabled:e.loading||e.playing},on:{change:e.handleChangeDate},model:{value:e.dateSelected,callback:function(t){e.dateSelected=t},expression:"dateSelected"}}),n("el-button",{attrs:{icon:e.playing?"el-icon-switch-button":"el-icon-caret-right",circle:"",disabled:e.dateSelected.getTime()>=e.endDate.getTime()},on:{click:e.handlePlayDate}})],1)])},l=[],u=(n("99af"),n("0481"),n("4160"),n("4069"),n("6b93"),n("d3b7"),n("159b"),n("164e")),d=n.n(u),p=(n("7cb2"),n("cebe")),h=n.n(p);function f(e,t,n){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var i,r,o,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i="T=".concat(t," ep=").concat(n),r="".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate(),".json"),o="/data/capacity/".concat(i,"/").concat(r),s="/data/severity/".concat(r),e.next=6,h.a.get(o);case 6:return c=e.sent.data,e.next=9,h.a.get(s);case 9:return l=e.sent.data,e.abrupt("return",{capacityMatrix:c,severityVector:l});case 11:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function m(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}function v(e){var t=864e5;return new Date(e.getTime()+t)}function b(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return{type:"lines3D",effect:{show:a,constantSpeed:t/1.5,trailWidth:Math.max(.3*t,1),trailLength:.1,trailOpacity:1,trailColor:n?"rgb(113, 150, 60)":"rgb(188, 59, 24)"},lineStyle:{width:t,color:"rgb(50, 50, 150)",opacity:.1},blendMode:"lighter",data:[e]}}function y(e,t){return{type:"scatter3D",coordinateSystem:"globe",blendMode:"lighter",symbolSize:t,itemStyle:{color:"rgb(150, 50, 150)",opacity:.9},data:[e]}}var x={name:"GlobeChart",props:{startDate:{type:Date,default:function(){return new Date(2020,1,16)}},endDate:{type:Date,default:function(){return new Date(2020,3,16)}}},data:function(){var e=this;return{waitList:Promise.resolve(),intervalIdx:null,playInterval:150,expectedMaxS:5e4,toggled:!1,loading:!1,playing:!1,paramSelected:[1e3,.7],dateSelected:this.startDate,typeSelected:"relative",pickerOptions:{disabledDate:function(t){return t.getTime()<e.startDate.getTime()||t.getTime()>e.endDate.getTime()},shortcuts:[{text:"Feb. 16, 2020",onClick:function(t){t.$emit("pick",e.startDate)}},{text:"Apr. 16, 2020",onClick:function(t){t.$emit("pick",e.endDate)}}]},typeOptions:[{value:"relative",label:"Relative Capacity"},{value:"absolute",label:"Absolute Capacity"}],selectOptions:[{value:100,label:"T=100",disabled:!0},{value:1e3,label:"T=1000",children:[{value:.7,label:"ep=0.7"},{value:.8,label:"ep=0.8"},{value:.9,label:"ep=0.9"}]},{value:1e4,label:"T=10000",disabled:!0}],pointScale:30,lineScale:15,chart:null,airports:null,maxCapacityMatrix:null,option:{animation:!1,globe:{baseTexture:"/data/geoinfo/texture/world.topo.bathy.200401.jpg",heightTexture:"/data/geoinfo/texture/world.topo.bathy.200401.jpg",displacementScale:.04,displacementQuality:"medium",shading:"lambert",environment:"/data/geoinfo/texture/starfield.jpg",realisticMaterial:{roughness:.9},postEffect:{enable:!0,depthOfField:{enable:!1,focalDistance:150}},temporalSuperSampling:{enable:!0},light:{ambient:{intensity:0},main:{intensity:5,shadow:!0,time:function(){var e=new Date;return e.setHours(20),e}()},ambientCubemap:{texture:"/data/geoinfo/texture/pisa.hdr",exposure:1,diffuseIntensity:.2,specularIntensity:2}},viewControl:{targetCoord:[112.5,31],autoRotate:!1,distance:50}},series:null}}},methods:{chartNextTick:function(){var e=this;return new Promise((function(t){e.chart.on("rendered",(function(){t()}))}))},updateChart:function(){var e=arguments,t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=!(e.length>0&&void 0!==e[0])||e[0],t.loading=!0,n.next=4,t.updateSeries(t.paramSelected[0],t.paramSelected[1],t.dateSelected,t.typeSelected,a);case 4:return t.chart.setOption(t.option,!0),n.next=7,t.chartNextTick();case 7:t.loading=!1,t.toggled=!1;case 9:case"end":return n.stop()}}),n)})))()},handlePlayDate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.playing){t.next=8;break}return e.playing=!1,t.next=4,e.chartNextTick();case 4:return t.next=6,e.updateChart(!0);case 6:t.next=26;break;case 8:if(!(e.dateSelected.getTime()<e.endDate.getTime())){t.next=26;break}e.playing=!0;case 10:if(!(e.playing&&e.dateSelected.getTime()<e.endDate.getTime())){t.next=26;break}if(e.dateSelected=v(e.dateSelected),e.playing){t.next=14;break}return t.abrupt("return");case 14:if(!(e.dateSelected.getTime()<e.endDate.getTime())){t.next=19;break}return t.next=17,e.updateChart(!1);case 17:t.next=22;break;case 19:return t.next=21,e.updateChart(!0);case 21:e.playing=!1;case 22:return t.next=24,m(e.playInterval);case 24:t.next=10;break;case 26:case"end":return t.stop()}}),t)})))()},handleChangeOption:function(){this.updateChart()},handleChangeParam:function(){this.updateChart()},handleChangeDate:function(){this.updateChart()},initChart:function(){var e=this.$refs["globe"];this.chart=d.a.init(e),this.chart.setOption(this.option)},toggle:function(){var e=this;this.toggled=!this.toggled,this.option.series&&this.option.series.forEach((function(t,n){e.chart.dispatchAction({type:"lines3DToggleEffect",seriesIndex:n})}))},stopOrStartAnime:function(e){" "!==e.key||this.playing||this.toggle()},updateSeries:function(e,t,n){var a=arguments,i=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var o,s,c,l,u,d,p,h,g,m,v,x,w,C,S,_,T;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=a.length>3&&void 0!==a[3]?a[3]:"relative",s=!(a.length>4&&void 0!==a[4])||a[4],i.option.series=[],r.next=5,f(e,t,n);case 5:for(c=r.sent,l=c.capacityMatrix,u=c.severityVector,d=i.airports.length,p=0;p<d;p++)for(h=0;h<d;h++)p!==h&&0!==l[p][h]&&(g=[i.airports[p],i.airports[h]],m=1,"relative"===o?m=Math.max(i.lineScale*l[p][h]/i.maxCapacityMatrix[p][h],1):"absolute"===o&&(v=Math.max.apply(null,l.flat(2)),m=Math.max(i.lineScale*l[p][h]/v,1)),x=b(g,m,p<h,s),i.option.series.push(x));for(w=0;w<d;w++)C=Math.max.apply(null,u),S=1/(1+Math.log10(i.expectedMaxS/C)),_=Math.max(S*i.pointScale/(1+Math.log10(C/u[w])),1),T=y(i.airports[w],_),i.option.series.push(T);case 11:case"end":return r.stop()}}),r)})))()}},beforeMount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/data/geoinfo/flights/airports.json");case 2:return e.airports=t.sent.data,t.next=5,h.a.get("/data/capacity/max.json");case 5:e.maxCapacityMatrix=t.sent.data;case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:return e.initChart(),t.next=5,e.updateChart();case 5:window.addEventListener("resize",e.chart.resize),window.addEventListener("keydown",e.stopOrStartAnime);case 7:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("resize",this.chart.resize),window.removeEventListener("keydown",this.stopOrStartAnime)}},w=x,C=(n("6625"),n("2877")),S=Object(C["a"])(w,c,l,!1,null,"623ac3b7",null),_=S.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer-container"},[n("div",{ref:"globe",staticClass:"chart-container"})])},k=[],O=(n("4de4"),n("d81d"),n("b64b"),{legend:{selectedMode:"single",left:"left",data:null,orient:"vertical",textStyle:{color:"#fff"}},globe:{environment:"/data/geoinfo/texture/starfield.jpg",baseTexture:"/data/geoinfo/texture/world.topo.bathy.200401.jpg",heightTexture:"/data/geoinfo/texture/world.topo.bathy.200401.jpg",displacementScale:.04,displacementQuality:"medium",shading:"lambert",realisticMaterial:{roughness:.9},postEffect:{enable:!0,depthOfField:{enable:!1,focalDistance:150}},temporalSuperSampling:{enable:!0},light:{ambient:{intensity:0},main:{intensity:5,shadow:!0,time:function(){var e=new Date;return e.setHours(20),e}()},ambientCubemap:{texture:"/data/geoinfo/texture/pisa.hdr",exposure:1,diffuseIntensity:.2,specularIntensity:2}},viewControl:{autoRotate:!0},silent:!0},series:null}),M={name:"GlobeTotalChart",data:function(){return{toggled:!1,chart:null,option:O}},methods:{toggle:function(){var e=this;this.toggled=!this.toggled,this.option.series&&this.option.series.forEach((function(t,n){e.chart.dispatchAction({type:"lines3DToggleEffect",seriesIndex:n})}))},stopOrStartAnime:function(e){" "!==e.key||this.playing||this.toggle()}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=function(e){return[n.airports[e][3],n.airports[e][4]]},t.next=3,h.a.get("/data/geoinfo/flights/total-flights.json");case 3:n=t.sent.data,a=n.airports.map((function(e){return{coord:[e[3],e[4]]}})),r={},n.routes.forEach((function(e){var t=n.airlines[e[0]],a=t[0];r[a]||(r[a]=[]),r[a].push(e)})),o=[],n.routes.forEach((function(e){o.push(i(e[1])),o.push(i(e[2]))})),s=n.airlines.map((function(e){var t=e[0],n=r[t];return n?{type:"lines3D",name:t,effect:{show:!0,trailWidth:2,trailLength:.15,trailOpacity:1,trailColor:"rgb(30, 30, 60)"},lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},blendMode:"lighter",data:n.map((function(e){return[a[e[1]].coord,a[e[2]].coord]}))}:null})).filter((function(e){return!!e})),s.push({type:"scatter3D",coordinateSystem:"globe",blendMode:"lighter",symbolSize:10*Math.random(),itemStyle:{color:"rgb(50, 50, 150)",opacity:.2},data:o}),e.option.series=s,e.option.legend.data=Object.keys(r),c=e.$refs["globe"],e.chart=d.a.init(c),e.chart.setOption(e.option),window.addEventListener("resize",e.chart.resize),window.addEventListener("keydown",e.stopOrStartAnime);case 18:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("resize",this.chart.resize),window.removeEventListener("keydown",this.stopOrStartAnime)}},j=M,D=(n("9170"),Object(C["a"])(j,T,k,!1,null,"6c67573e",null)),E=D.exports,$={name:"App",components:{GlobeTotalChart:E,GlobeChart:_},methods:{getDoms:function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var i=0,r=n;i<r.length;i++){var o=r[i];e.push(this.$refs[o])}return e}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.$mathjax.isMathjaxConfig||e.$mathjax.initMathjaxConfig(),e.$mathjax.MathQueue(e.getDoms("introduction","illustration","future_work"));case 4:case"end":return t.stop()}}),t)})))()}},R=$,A=(n("bd90"),Object(C["a"])(R,r,o,!1,null,null,null)),I=A.exports,P=n("5f72"),L=n.n(P),z=n("b2d6"),N=n.n(z),F=!1,J=function(){window.MathJax&&(window.MathJax.Hub.Config({showProcessingMessages:!1,messageStyle:"none",jax:["input/TeX","output/HTML-CSS"],tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],skipTags:["script","noscript","style","textarea","pre"]},"HTML-CSS":{availableFonts:["STIX","TeX"],showMathMenu:!1}}),F=!0)},G=function(){if(window.MathJax){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,i=t;a<i.length;a++){var r=i[a];window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,r])}}},U=function e(t){e.installed||(e.installed=!0,Object.defineProperties(t.prototype,{$mathjax:{get:function(){return{isMathjaxConfig:F,initMathjaxConfig:J,MathQueue:G}}}}))},H=U;i.a.use(L.a,{locale:N.a}),i.a.use(H),i.a.config.productionTip=!1,new i.a({render:function(e){return e(I)}}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},6625:function(e,t,n){"use strict";n("bce5")},"8bbf":function(e,t){e.exports=Vue},9170:function(e,t,n){"use strict";n("52ad")},"97ea":function(e,t,n){},bce5:function(e,t,n){},bd90:function(e,t,n){"use strict";n("97ea")},cebe:function(e,t){e.exports=axios}});