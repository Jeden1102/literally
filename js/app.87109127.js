(function(e){function t(t){for(var a,c,o=t[0],i=t[1],d=t[2],l=0,u=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ba8d089c"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(e);var d=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/literally/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0377":function(e,t,r){e.exports=r.p+"img/winner.cc9d349a.png"},"23b5":function(e,t,r){"use strict";r("2982")},2982:function(e,t,r){},"45e2":function(e,t,r){e.exports=r.p+"img/clover.2107f4bf.png"},4795:function(e,t,r){"use strict";r("95fc")},"488e":function(e,t,r){e.exports=r.p+"img/loser.252b3378.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n=r("5fbe"),s=r.n(n),c=function(e){return Object(a["w"])("data-v-ce57f924"),e=e(),Object(a["u"])(),e},o={id:"nav",class:"flex items-center justify-center space-x-8"},i=Object(a["i"])("WordFinder "),d=c((function(){return Object(a["g"])("img",{src:s.a,class:"h-8 w-8 mx-1",alt:""},null,-1)})),l=Object(a["i"])("About");function b(e,t,r,n,s,c){var b=Object(a["B"])("router-link"),u=Object(a["B"])("Tips"),f=Object(a["B"])("router-view"),p=Object(a["B"])("notifications");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",o,[Object(a["j"])(b,{class:"flex items-center justify-center",to:"/"},{default:Object(a["G"])((function(){return[i,d]})),_:1}),Object(a["j"])(b,{to:"/about"},{default:Object(a["G"])((function(){return[l]})),_:1})]),s.showTips?Object(a["e"])("",!0):(Object(a["t"])(),Object(a["d"])(u,{key:0,onHideTips:t[0]||(t[0]=function(e){return s.showTips=!1})})),Object(a["j"])(f,{class:"w-3/4 mx-auto p-8 box"}),Object(a["j"])(p,{group:"foo"})],64)}var u=r("cd5c"),f=r.n(u),p=r("45e2"),h=r.n(p),x={class:"w-1/2 p-6 container relative"},y=Object(a["h"])('<p data-v-39cbaaae>Odgadnij słowo w 6 próbach</p><p data-v-39cbaaae>Każda próba to pięcioliterowe słowo znajdujęce się w słowniku języka polskiego. Kliknij &quot;enter&quot; aby zatwierdzić próbę.</p><p data-v-39cbaaae>Po każdej próbie kolor kafelka zdradzi, czy zbliżyłeś się do odgadnięcia hasła.</p><hr data-v-39cbaaae><div class="flex flex-col justify-center items-center space-y-6 p-6" data-v-39cbaaae><p class="font-bold" data-v-39cbaaae>Przykłady</p><div class="flex space-x-2" data-v-39cbaaae><div class="flex items-center border border-gray-600 justify-center p-4 bg-dark-green w-20 h-20 text-white text-2xl" data-v-39cbaaae> S </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> K </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> L </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> E </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> P </div></div><p data-v-39cbaaae>Litera <span class="font-bold" data-v-39cbaaae>S</span> znajduje się w odgadywanym słowie na właściwym miejscu.</p><div class="flex space-x-2" data-v-39cbaaae><div class="flex items-center border border-gray-600 justify-center p-4 bg-gray-100 w-20 h-20 text-black text-2xl" data-v-39cbaaae> B </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> Ł </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-dark-yellow text-white w-20 h-20 text-2xl" data-v-39cbaaae> O </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> T </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> O </div></div><p data-v-39cbaaae>Litera <span class="font-bold" data-v-39cbaaae>O</span> znajduje się w odgadywanym słowie, ale na innym miejscu.</p><div class="flex space-x-2" data-v-39cbaaae><div class="flex items-center border border-gray-600 justify-center p-4 bg-gray-100 w-20 h-20 text-black text-2xl" data-v-39cbaaae> S </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> P </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> O </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-400 text-black w-20 h-20 text-2xl" data-v-39cbaaae> R </div><div class="flex items-center justify-center border border-gray-600 p-4 bg-gray-100 text-black w-20 h-20 text-2xl" data-v-39cbaaae> O </div></div><p data-v-39cbaaae>Litera <span class="font-bold" data-v-39cbaaae>R</span> nie występuje w szukanym słowie.</p></div><h2 data-v-39cbaaae>Powodzenia </h2><img src="'+h.a+'" class="w-8 h-8 mx-auto" alt="" data-v-39cbaaae>',7);function g(e,t,r,n,s,c){return Object(a["t"])(),Object(a["f"])("div",x,[Object(a["g"])("img",{onClick:t[0]||(t[0]=function(){return c.hideTips&&c.hideTips.apply(c,arguments)}),src:f.a,class:"w-8 h-8 absolute right-2 top-2 cursor-pointer",alt:""}),y,Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return c.hideTips&&c.hideTips.apply(c,arguments)}),class:"my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700"},"Graj")])}var j={methods:{hideTips:function(){this.$emit("hide-tips")}}},v=(r("23b5"),r("6b0d")),w=r.n(v);const m=w()(j,[["render",g],["__scopeId","data-v-39cbaaae"]]);var O=m,k={data:function(){return{showTips:!0}},components:{Tips:O}};r("4795");const T=w()(k,[["render",b],["__scopeId","data-v-ce57f924"]]);var L=T,z=(r("ba8c"),r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),A={class:"home text-black flex items-center justify-center flex-col"},B={class:"circle text-white"},P=["id"],_=["id"];function W(e,t,r,n,s,c){var o=Object(a["B"])("Alert"),i=Object(a["B"])("EndModal");return Object(a["t"])(),Object(a["f"])("div",A,[s.showAlert?(Object(a["t"])(),Object(a["d"])(o,{key:0,onCloseAlert:t[0]||(t[0]=function(e){return s.showAlert=!1})},{default:Object(a["G"])((function(){return[Object(a["i"])(Object(a["D"])(s.alertText),1)]})),_:1})):Object(a["e"])("",!0),s.endGame?(Object(a["t"])(),Object(a["d"])(i,{key:1,onRestart:c.restart,result:s.won,haslo:s.drawnWord},null,8,["onRestart","result","haslo"])):Object(a["e"])("",!0),Object(a["g"])("div",B,Object(a["D"])(s.drawnWord),1),(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(s.boxes,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",{class:"flex space-x-2",key:t},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e,(function(e){return Object(a["t"])(),Object(a["f"])("div",{id:"boxik-big-".concat(e.id),key:e.id,class:Object(a["p"])(["boxik flex rounded items-center my-1 justify-center border border-gray-300 p-4 bg-gray-100 text-black w-20 h-20 text-2xl",{"bg-dark-green text-white":"direct"==e.status,"bg-dark-yellow text-white":"includes"==e.status,"bg-gray-400":"none"==e.status}])},[Object(a["g"])("p",{id:"boxik-".concat(e.id)},Object(a["D"])(e.letter),9,_)],10,P)})),128))])})),128))])}r("ac1f"),r("1276"),r("a434"),r("99af"),r("caad"),r("2532"),r("159b");var C=r("cffa"),D=Object(a["g"])("h2",null,"ALERT",-1);function E(e,t,r,n,s,c){return Object(a["t"])(),Object(a["f"])("div",{onClick:t[0]||(t[0]=function(){return c.closeAlert&&c.closeAlert.apply(c,arguments)}),class:"alert-box fixed right-4 bottom-4 bg-dark-green text-white p-5 rounded w-1/2"},[D,Object(a["g"])("p",null,[Object(a["A"])(e.$slots,"default")])])}var S={mounted:function(){var e=this;C["a"].from(".alert-box",{duration:2,scale:.5,opacity:0,delay:.2,stagger:.2,ease:"elastic",force3D:!0}),setTimeout((function(){C["a"].to(".alert-box",{duration:2,scale:.5,opacity:0,delay:.2,stagger:.2,ease:"elastic",force3D:!0}),e.closeAlert()}),5e3)},methods:{closeAlert:function(){var e=this;C["a"].to(".alert-box",{duration:2,scale:.5,opacity:0,delay:.2,stagger:.2,ease:"elastic",force3D:!0}),setTimeout((function(){e.$emit("close-alert")}),1e3)}}};const G=w()(S,[["render",E]]);var M=G,H=r("488e"),R=r.n(H),$=r("0377"),q=r.n($),I=function(e){return Object(a["w"])("data-v-4cf16921"),e=e(),Object(a["u"])(),e},K={class:"container w-1/2 p-6 z-10 flex items-center justify-center flex-col space-y-4"},U={key:0,class:"flex items-center justify-center flex-col space-y-4"},J=I((function(){return Object(a["g"])("img",{src:R.a,alt:""},null,-1)})),F={class:"text-3xl text-center"},N=Object(a["i"])("Hasło "),Q=I((function(){return Object(a["g"])("h3",{class:"text-red-500 text-2xl text-center"},"Przegrałeś..:(",-1)})),V={key:1,class:"flex items-center justify-center flex-col space-y-4"},X={class:"text-3xl text-center"},Y=Object(a["i"])("Hasło "),Z=I((function(){return Object(a["g"])("img",{src:q.a,alt:""},null,-1)})),ee=I((function(){return Object(a["g"])("h3",{class:"text-green-500 text-2xl text-center"},"Grrratulacje :)))",-1)}));function te(e,t,r,n,s,c){return Object(a["t"])(),Object(a["f"])("div",K,[r.result?(Object(a["t"])(),Object(a["f"])("div",V,[Object(a["g"])("h2",X,[Y,Object(a["g"])("b",null,Object(a["D"])(r.haslo),1)]),Z,ee,Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return c.restart&&c.restart.apply(c,arguments)}),class:"my-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700 mx-auto"},"Spróbuj ponownie")])):(Object(a["t"])(),Object(a["f"])("div",U,[J,Object(a["g"])("h2",F,[N,Object(a["g"])("b",null,Object(a["D"])(r.haslo),1)]),Q,Object(a["g"])("button",{onClick:t[0]||(t[0]=function(){return c.restart&&c.restart.apply(c,arguments)}),class:"my-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700 mx-auto"},"Spróbuj ponownie")]))])}var re={props:["result","haslo"],methods:{restart:function(){this.$emit("restart")}}};r("db6e");const ae=w()(re,[["render",te],["__scopeId","data-v-4cf16921"]]);var ne=ae,se={name:"Home",components:{Alert:M,EndModal:ne},data:function(){return{wordsList:null,drawnWord:null,boxes:[[],[],[],[],[],[]],wordTyped:0,letterTyped:0,showBoxes:!1,showAlert:!1,alertText:"",endGame:!1,won:!0}},methods:{restart:function(){this.wordsList=null,this.drawnWord=null,this.boxes=[[],[],[],[],[],[]],this.wordTyped=0,this.letterTyped=0,this.showBoxes=!1,this.endGame=!1,this.won=!0,this.loadBoxes(),window.addEventListener("keydown",this.registerLetter),this.getWordList(),this.generateBoxesObjects()},getWordList:function(){var e=this;fetch("https://jeden1102.github.io/literally/nowe.txt").then((function(e){return e.text()})).then((function(t){e.wordsList=t,e.randomWord()}))},randomWord:function(){var e=this.wordsList.split(/\r?\n/),t=Math.floor(Math.random()*e.length);this.drawnWord=e[t]},generateBoxesObjects:function(){for(var e=[],t=0;t<30;t++){var r={id:t,filled:!1,letter:"",status:null};e.push(r)}this.boxes[0]=e.splice(0,5),this.boxes[1]=e.splice(0,5),this.boxes[2]=e.splice(0,5),this.boxes[3]=e.splice(0,5),this.boxes[4]=e.splice(0,5),this.boxes[5]=e.splice(0,5)},registerLetter:function(e){var t=this,r=e.key;if(1==r.length&&this.letterTyped<5){var a=this.wordTyped+1,n=this.letterTyped+1,s=0;s=0==this.wordTyped?a*n-1:5*(a-1)+n-1,this.boxes[this.wordTyped][this.letterTyped].letter=r.toUpperCase(),C["a"].from("#boxik-".concat(s),{duration:2,scale:.5,opacity:0,stagger:.2,ease:"elastic",force3D:!0}),this.letterTyped++}if("Backspace"==r&&this.letterTyped>0&&(this.letterTyped--,this.boxes[this.wordTyped][this.letterTyped].letter=""),"Enter"==r){this.wordTyped++;var c=this.boxes[this.wordTyped-1],o="".concat(c[0].letter).concat(c[1].letter).concat(c[2].letter).concat(c[3].letter).concat(c[4].letter);if(this.wordsList.includes(o.toLowerCase()))if(5==this.letterTyped){var i=0;i=0==this.wordTyped?0:5*this.wordTyped;for(var d=i;d<i+5;d++)C["a"].from("#boxik-big-".concat(d),{duration:2,scale:.5,opacity:0,stagger:.2,ease:"elastic",force3D:!0});this.letterTyped=0;var l=this.drawnWord.toUpperCase().split(""),b=0;c.forEach((function(e,r){e.letter==l[r]?(e.status="direct",b++):t.drawnWord.toUpperCase().includes(e.letter)?e.status="includes":e.status="none"})),5==b&&(this.endGame=!0,this.won=!0),6==this.wordTyped&&5!=b&&(this.endGame=!0,this.won=!1)}else this.alertText="Słowo musi zawierać 5 liter",this.showAlert=!0,this.wordTyped--;else if(this.wordTyped--,this.alertText="Takie słowo nie istnieje :(",this.showAlert=!0,5==this.letterTyped){var u=0;u=0==this.wordTyped?0:5*this.wordTyped;for(var f=u;f<u+5;f++)C["a"].from("#boxik-big-".concat(f),{duration:1,scale:.5,opacity:0,stagger:.2,ease:"bounce",force3D:!0})}}},loadBoxes:function(){var e=this;setTimeout((function(){C["a"].from(".boxik",{duration:2,scale:.5,opacity:0,delay:.5,stagger:.2,ease:"elastic",force3D:!0}),e.showBoxes=!0}),1)}},mounted:function(){this.loadBoxes(),window.addEventListener("keydown",this.registerLetter),this.getWordList(),this.generateBoxesObjects()}};const ce=w()(se,[["render",W]]);var oe=ce,ie=[{path:"/",name:"Home",component:oe},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],de=Object(z["a"])({history:Object(z["b"])("/literally/"),routes:ie}),le=de;Object(a["c"])(L).use(le).mount("#app")},"5fbe":function(e,t,r){e.exports=r.p+"img/logo2.33705ebd.png"},"95fc":function(e,t,r){},ad95:function(e,t,r){},ba8c:function(e,t,r){},cd5c:function(e,t,r){e.exports=r.p+"img/close.0139bc5b.png"},db6e:function(e,t,r){"use strict";r("ad95")}});
//# sourceMappingURL=app.87109127.js.map
