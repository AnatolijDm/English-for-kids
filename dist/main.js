!function(e){var t={};function c(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,t,l){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(l,o,function(t){return e[t]}.bind(null,o));return l},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const l=["Main page","Action (set A)","Action (set B)","Action (set C)","Adjective","Animal (set A)","Animal (set B)","Clothes","Emotion"];function o(){document.querySelector(".play_button").addEventListener("click",()=>{document.querySelector(".play_button").innerHTML="";let e=document.createElement("img");e.className="retry",document.querySelector(".play_button").appendChild(e),e.src="./src/images/restart.png",document.querySelector(".play_button").style.width="50px",document.querySelector(".play_button").style.borderRadius="50%",function(){if("Action (set A)"===document.querySelector(".active").innerHTML){let e=[],t=1;if(function c(l,o,r){if(t<=5){let n=document.createElement("audio");n.src=`./src/sound/${d[l]}.mp3`,n.play(),document.querySelector(".blocks").addEventListener("click",n=>{if(n.target.style.backgroundImage.includes(d[l])){document.querySelector(`#result div:nth-child(${r})`).style.background="yellow";let n=document.createElement("audio");n.src="./src/sound/correct.mp3",n.play(),e.push(1),t+=1,c(o,l+1,r+1)}else{document.querySelector(`#result div:nth-child(${r})`).style.background="red";let e=document.createElement("audio");e.src="./src/sound/failure.mp3",e.play(),t+=1,c(o,l+1,r+1)}})}}(2,1,1),console.log(t),console.log(e),t>=5)if(5===e.length){document.querySelector(".blocks__square").style.display="none";let e=document.createElement("img");e.src="./src/images/success.jpg",e.className="resultIcon",document.querySelector(".blocks").appendChild(e);let t=document.createElement("audio");t.src="./src/sound/success.mp3",t.play()}else if(e.length<5){document.querySelector(".blocks__square").style.display="none";let e=document.createElement("img");e.className="resultIcon",e.src="./src/images/failure.jpg",document.querySelector(".blocks").appendChild(e);let t=document.createElement("audio");t.src="./src/sound/failure.mp3",t.play()}}}()})}const r=document.querySelector(".blocks"),n=document.querySelector(".menu_icon"),u=document.querySelector(".hidden_menu"),i=document.querySelectorAll(".hidden_menu > a");document.querySelector(".play-train"),document.querySelector(".play_box");let s="off";const a=["Main page","Action (set A)","Action (set B)","Action (set C)","Adjective","Animal (set A)","Animal (set B)","Clothes","Emotion"],d=["cry","dance","dive","draw","fish","fly","hug","jump"],y=["open","play","point","ride","run","sing","skip","swim"],m=["argue","build","carry","catch","drive","drop","pull","push"],p=["big","small","fast","slow","friendly","unfriendly","young","old"],h=["cat","chick","chicken","dog","horse","pig","rabbit","sheep"],g=["bird","fish","frog","giraffe","lion","mouse","turtle","dolphin"],b=["skirt","pants","blouse","dress","boot","shirt","coat","shoe"],f=["sad","angry","happy","tired","surprised","scared","smile","laugh"],S=["cry","dance","dive","draw","fish","fly","hug","jump","open","play","point","ride","run","sing","skip","swim","argue","build","carry","catch","drive","drop","pull","push","big","small","fast","slow","friendly","unfriendly","young","old","cat","chick","chicken","dog","horse","pig","rabbit","sheep","bird","fish","frog","giraffe","lion","mouse","turtle","dolphin","skirt","pants","blouse","dress","boot","shirt","coat","shoe","sad","angry","happy","tired","surprised","scared","smile","laugh"],q=["плакать","танцевать","нырять","водить машину","ловить рыбу","летать","обнимать","прыгать","открывать","играть","указывать","ездить","бежать","петь","прыгать","плавать","спорить","строить","нести","ловить","водить машину","падать","тянуть","толкать","большой","маленький","быстрый","медленный","дружелюбный","недружелюбный","молодой","старый","кот","цепленок","курица","собака","конь","свинья","кролик","овца","птица","рыба","лягушка","жираф","лев","мышь","черепаха","дельфин","юбка","брюки","блузка","платье","ботинки","рубашка","пальто","туфли","грустный","злой","счастливый","усталый","удивленный","испуганный","улыбка","смех"];function k(){setTimeout((function(){u.style.display="none"}),500),s="off",n.style.animation="menu_button_back 1s",n.style.backgroundImage="url('./src/images/menu-icon.png')"}function L(e){let t=document.createElement("img");t.className="rotate",document.querySelector(`.blocks a:nth-child(${e})`).appendChild(t),document.querySelector(`.blocks a:nth-child(${e}) img`).addEventListener("mouseover",()=>{t.src="./src/images/rotateHover.jpg"}),document.querySelector(`.blocks a:nth-child(${e}) img`).addEventListener("mouseout",()=>{t.src="./src/images/rotate.jpg"}),t.src="./src/images/rotate.jpg"}function T(e){document.querySelector(`.blocks a:nth-child(${e}) img`).addEventListener("click",()=>{for(let c=0;c<65;c++){const l=document.querySelector(`.blocks a:nth-child(${e})`);if(l.innerHTML.includes(S[c])){function t(){l.innerHTML=q[c],l.style.paddingTop="235px",l.style.height="40px"}setTimeout(t,0),l.addEventListener("mouseout",()=>{for(let t=0;t<65;t++)l.innerHTML.includes(q[t])&&(l.innerHTML=S[t],L(e),T(e),l.style.paddingTop="215px",l.style.height="60px")})}}})}function M(e){for(let t=0;t<9;t++)if(e.target.innerHTML===a[t])if(document.querySelector(".resultIcon")&&(document.querySelector(".resultIcon").style.display="none"),"Action (set A)"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=d[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetA/${d[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetA/${d[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(2)").classList.add("active")}else if("Action (set B)"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=y[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetB/${y[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetB/${y[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(3)").classList.add("active")}else if("Action (set C)"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=m[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetC/${m[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/asetC/${m[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(4)").classList.add("active")}else if("Adjective"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=p[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/aset/${p[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/aset/${p[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(5)").classList.add("active")}else if("Animal (set A)"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=h[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/ansetA/${h[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/ansetA/${h[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(6)").classList.add("active")}else if("Animal (set B)"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=g[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/ansetB/${g[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/ansetB/${g[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(7)").classList.add("active")}else if("Clothes"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=b[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/clset/${b[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/clset/${b[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(8)").classList.add("active")}else if("Emotion"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=f[e],document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/eset/${f[e]}.jpg')`,L(e+1),T(e+1);else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML="",document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundImage=`url('./src/images/eset/${f[e]}.jpg')`,document.querySelector(`.blocks a:nth-child(${e+1})`).style.backgroundSize="305px 275px",document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex",o();i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(9)").classList.add("active")}else if("Main page"===a[t]){if("TRAIN"===document.querySelector(".play_box p").innerHTML)for(let e=1;e<9;e++)document.querySelector(`.blocks a:nth-child(${e})`).innerHTML=a[e],document.querySelector(`.blocks a:nth-child(${e})`).style.backgroundImage=`url('./src/images/menu/${a[e]}.jpg')`;else if("PLAY"===document.querySelector(".play_box p").innerHTML)for(let e=1;e<9;e++)document.querySelector(`.blocks a:nth-child(${e})`).innerHTML=a[e],document.querySelector(`.blocks a:nth-child(${e})`).style.backgroundImage=`url('./src/images/menuPlay/${a[e]}.jpg')`;i.forEach(e=>{e.classList.remove("active")}),document.querySelector(".hidden_menu a:nth-child(1)").classList.add("active")}}function $(){if("Main page"===document.querySelector(".active").innerHTML)for(let e=1;e<9;e++)document.querySelector(`.blocks a:nth-child(${e})`).innerHTML=a[e],document.querySelector(`.blocks a:nth-child(${e})`).style.backgroundImage=`url('./src/images/menu/${a[e]}.jpg')`}const v=document.querySelector(".blocks"),H=["cry","dance","dive","draw","fish","fly","hug","jump","open","play","point","ride","run","sing","skip","swim","argue","build","carry","catch","drive","drop","pull","push","big","small","fast","slow","friendly","unfriendly","young","old","cat","chick","chicken","dog","horse","pig","rabbit","sheep","bird","fish","frog","giraffe","lion","mouse","turtle","dolphin","skirt","pants","blouse","dress","boot","shirt","coat","shoe","sad","angry","happy","tired","surprised","scared","smile","laugh"];const x=document.querySelector(".play-train"),_=document.querySelector(".play_box");document.querySelector(".blocks"),document.querySelector(".hidden_menu");let A="off",I=[];x.addEventListener("click",()=>{"off"===A?(_.style.flexDirection="row-reverse",_.style.paddingLeft="5px",_.style.paddingRight="15px",_.style.background="linear-gradient(to right, #f1f38a 0%, #f34343 100%)",document.querySelector(".play_box p").innerHTML="PLAY",function(){"Main page"!==document.querySelector(".active").innerHTML&&(document.querySelectorAll(".blocks > a").forEach(e=>{e.style.backgroundSize="305px 275px";let t=e.innerHTML.toString().indexOf("<");console.log(t);let c=e.innerHTML.split(""),l="";for(let e=0;e<t;e++)l+=c[e].toString();I.push(l),console.log(I),e.innerHTML=""}),document.querySelector(".play_button").style.display="block",document.querySelector("#result").style.display="flex");document.querySelectorAll(".rotate").forEach(e=>{e.style.display="none"}),function(){if("Main page"===document.querySelector(".active").innerHTML)for(let e=1;e<9;e++)document.querySelector(`.blocks a:nth-child(${e})`).innerHTML=l[e],document.querySelector(`.blocks a:nth-child(${e})`).style.backgroundImage=`url('./src/images/menuPlay/${l[e]}.jpg')`}()}(),A="on",o()):"on"===A&&(_.style.flexDirection="row",_.style.paddingLeft="15px",_.style.paddingRight="5px",_.style.background="linear-gradient(to right, #29ac6f 0%, #178686 100%)",document.querySelector(".play_box p").innerHTML="TRAIN",function(){document.querySelector(".play_button").style.display="none",document.querySelector("#result").style.display="none",document.querySelector(".resultIcon")&&(document.querySelector(".resultIcon").style.display="none");if(document.querySelectorAll(".blocks > a").forEach(e=>{e.style.backgroundSize="305px 225px"}),"Main page"!==document.querySelector(".active").innerHTML&&0!==I.length)for(let e=0;e<8;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=I[e],L(e+1),T(e+1);if(0===I.length)if("Action (set A)"===document.querySelector(".active").innerHTML)for(let e=0;e<8;e++)console.log(d[e]),document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=d[e],L(e+1),T(e+1);else if("Action (set B)"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=y[e],L(e+1),T(e+1);else if("Action (set C)"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=m[e],L(e+1),T(e+1);else if("Adjective"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=p[e],L(e+1),T(e+1);else if("Animal (set A)"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=h[e],L(e+1),T(e+1);else if("Animal (set B)"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=g[e],L(e+1),T(e+1);else if("Clothes"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=b[e],L(e+1),T(e+1);else if("Emotion"===document.querySelector(".active").innerHTML)for(let e=0;e<9;e++)document.querySelector(`.blocks a:nth-child(${e+1})`).innerHTML=f[e],L(e+1),T(e+1);document.querySelectorAll(".rotate").forEach(e=>{e.style.display="inline-block"}),$(),I=[]}(),A="off")}),v.addEventListener("click",e=>{if("Main page"!==document.querySelector(".active").innerHTML&&"TRAIN"===document.querySelector(".play_box p").innerHTML)for(let t=0;t<65;t++)if(e.target.innerHTML.includes(H[t])){let e=document.createElement("audio");e.src=`./src/sound/${H[t]}.mp3`,e.play()}}),n.addEventListener("click",()=>{"off"===s?(u.style.display="flex",s="on",n.style.animation="menu_button 1s",n.style.backgroundImage="url('./src/images/x-icon.png')"):(s="on")&&k()}),r.addEventListener("click",e=>{"Main page"===document.querySelector(".active").innerHTML&&M(e)}),u.addEventListener("click",e=>{i.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active"),k(),M(e)}),document.querySelector("body").addEventListener("click",e=>{"menu_icon"!==e.target.className&&k()}),window.onload=$(),document.querySelector(".play_button").style.display="none",document.querySelector("#result").style.display="none",document.querySelector(".resultIcon")&&(document.querySelector(".resultIcon").style.display="none")}]);