!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var o=document.getElementById("menuFog"),l=document.getElementById("menuBox"),r=document.body;o.addEventListener("click",(function(e){e.target===o&&(l.style.left="-360px",o.style.pointerEvents="none",o.style.backgroundColor="rgba(255, 255, 255, 0)",r.style.overflow="auto")}));var i=document.getElementById("menuFog"),c=document.getElementById("menuBox"),s=document.getElementById("messageFog"),d=document.getElementById("messageBox"),a=document.getElementById("closeMessageDesktop"),u=document.body;var y=document.getElementById("menuFog"),g=document.getElementById("menuBox"),p=document.getElementById("phoneBox"),f=document.getElementById("phoneFog"),m=document.getElementById("closePhoneDesktop"),E=document.body;document.getElementById("openPhone").addEventListener("click",(function(){f.style.backgroundColor="rgba(255, 255, 255, 0.8)",f.style.pointerEvents="auto",p.style.right=0,E.style.overflow="hidden"})),m.addEventListener("click",(function(){p.style.right="-450px",f.style.backgroundColor="rgba(255, 255, 255, 0)",f.style.pointerEvents="none",m.style.pointerEvents="none",m.style.opacity=0})),document.getElementById("infoRead").addEventListener("click",(function(){var e=document.querySelector(".info__second");document.querySelector(".info__description").style.height="auto",e.style.display="block"})),document.getElementById("menu").addEventListener("click",(function(){document.getElementById("menuBox").style.left=0,o.style.backgroundColor="rgba(255, 255, 255, 0.8)",o.style.pointerEvents="auto",r.style.overflow="hidden"})),document.getElementById("closeMenu").addEventListener("click",(function(){l.style.left="-360px",o.style.backgroundColor="rgba(255, 255, 255, 0)",o.style.pointerEvents="none",r.style.overflow="auto"})),function(){var e=document.getElementById("langRU"),t=document.getElementById("langEN"),n=document.getElementById("langCH");function o(){e.style.color="",t.style.color="",n.style.color=""}e.style.color="rgba(126, 126, 130, 1)",e.addEventListener("click",(function(){o(),e.style.color="rgba(126, 126, 130, 1)"})),t.addEventListener("click",(function(){o(),t.style.color="rgba(126, 126, 130, 1)"})),n.addEventListener("click",(function(){o(),n.style.color="rgba(126, 126, 130, 1)"}))}(),document.getElementById("message").addEventListener("click",(function(){c.style.left="-360px",i.style.backgroundColor="rgba(255, 255, 255, 0)",i.style.pointerEvents="none",setTimeout((function(){a.style.pointerEvents="auto",a.style.opacity=1}),300),setTimeout((function(){s.style.backgroundColor="rgba(255, 255, 255, 0.8)",s.style.pointerEvents="auto",d.style.right=0}),300),u.style.overflow="hidden"})),document.getElementById("closeMessage").addEventListener("click",(function(){d.style.right="-450px",s.style.backgroundColor="rgba(255, 255, 255, 0)",s.style.pointerEvents="none",u.style.overflow="auto"})),document.getElementById("closeMessageDesktop").addEventListener("click",(function(){d.style.right="-450px",s.style.backgroundColor="rgba(255, 255, 255, 0)",s.style.pointerEvents="none",a.style.pointerEvents="none",a.style.opacity=0,u.style.overflow="auto"})),document.getElementById("openMessage").addEventListener("click",(function(){s.style.backgroundColor="rgba(255, 255, 255, 0.8)",s.style.pointerEvents="auto",d.style.right=0,u.style.overflow="hidden"})),s.addEventListener("click",(function(e){e.target===s&&(d.style.right="-450px",s.style.backgroundColor="rgba(255, 255, 255, 0)",s.style.pointerEvents="none",a.style.pointerEvents="none",a.style.opacity=0,u.style.overflow="auto")})),document.getElementById("phone").addEventListener("click",(function(){g.style.left="-360px",y.style.backgroundColor="rgba(255, 255, 255, 0)",y.style.pointerEvents="none",E.style.overflow="hidden",setTimeout((function(){p.style.right=0,f.style.backgroundColor="rgba(255, 255, 255, 0.8)",f.style.pointerEvents="auto",m.style.opacity=1}),300)})),document.getElementById("closePhone").addEventListener("click",(function(){p.style.right="-450px",f.style.backgroundColor="rgba(255, 255, 255, 0)",f.style.pointerEvents="none",E.style.overflow="auto"})),f.addEventListener("click",(function(e){e.target===f&&(p.style.right="-450px",f.style.backgroundColor="rgba(255, 255, 255, 0)",f.style.pointerEvents="none",m.style.opacity=0,E.style.overflow="auto")})),function(){new Swiper(".brands__swiper",{slidesPerView:1.2,spaceBetween:10,on:{init:function(){document.querySelectorAll(".swiper-slide").forEach((function(e){e.style.height="72px"}))}},navigation:{nextEl:".brands__btn"},pagination:{el:".swiper-pagination",clickable:!0},loop:!0,breakpoints:{768:{spaceBetween:0,slidesPerView:1,allowSlideNext:!1,allowSlidePrev:!1}}});var e=!0,t=document.getElementById("all-logo");t.innerText="Показать все",t.addEventListener("click",(function(){var n=document.querySelectorAll(".brands__slide:nth-child(n + 7)"),o=document.querySelectorAll(".brands__slide:nth-child(7)"),l=document.querySelectorAll(".brands__slide:nth-child(8)");e?(n.forEach((function(e){e.style.display="flex"})),t.innerText="Скрыть",e=!e):(n.forEach((function(e){e.style.display="none"})),window.matchMedia("(min-width: 1120px)").matches&&(o.forEach((function(e){e.style.display="flex"})),l.forEach((function(e){e.style.display="flex"}))),t.innerText="Показать все",e=!e)}))}(),function(){new Swiper(".repair__swiper",{slidesPerView:1.2,spaceBetween:10,navigation:{nextEl:".repair__btn"},pagination:{el:".swiper-pagination",clickable:!0},loop:!0,breakpoints:{768:{spaceBetween:0,slidesPerView:1,allowSlideNext:!1,allowSlidePrev:!1}}});var e=!0,t=document.getElementById("all-repair");t.innerText="Показать все",t.addEventListener("click",(function(){var n=document.querySelectorAll(".repair__slide:nth-child(n + 7)"),o=document.querySelectorAll(".repair__slide:nth-child(7)"),l=document.querySelectorAll(".repair__slide:nth-child(8)");e?(n.forEach((function(e){e.style.display="flex"})),t.innerText="Скрыть",e=!e):(n.forEach((function(e){e.style.display="none"})),window.matchMedia("(min-width: 1120px)").matches&&(o.forEach((function(e){e.style.display="flex"})),l.forEach((function(e){e.style.display="flex"}))),t.innerText="Показать все",e=!e)}))}(),new Swiper(".price--swiper",{slidesPerView:1.2,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},loop:!0,breakpoints:{768:{enabled:!1}}})}]);
//# sourceMappingURL=bundle.js.map