(function(t){function e(e){for(var r,n,s=e[0],i=e[1],c=e[2],l=0,u=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(u.length)u.shift()();return A.push.apply(A,c||[]),a()}function a(){for(var t,e=0;e<A.length;e++){for(var a=A[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(A.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={index:0},o={index:0},A=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e45131f5"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"de525173"}[t]+".css",o=i.p+r,A=document.getElementsByTagName("link"),s=0;s<A.length;s++){var c=A[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,A=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");A.code="CSS_CHUNK_LOAD_FAILED",A.request=r,delete n[t],f.parentNode.removeChild(f),a(A)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var A=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=A);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var u=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;A.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"007f":function(t,e,a){},"0c7c":function(t,e,a){},"1f6e":function(t,e,a){},"359c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCwwKEzlPejHRAAADG0lEQVRIx4XVXWjXdRQG8Oc/3dxMGfmCSoq6ZmLRNPU2sghEBEkisJJC6dK7CtIiwoJCksRCUswwxBCCEYEXkZkY02GT1YUI2ow0L5ovm23/Tef8dLH//vNlL+fqnPM85/me7/kdft9ChjEPZXWezVOpS22SzrTldI7mcKE7Y5vpdvrPoLVrL/s37DBt9OJKW3SiW6PXzDMhSUww3+saFdFhs8qRyqc4gpt2mz4C/okeHB8W95jzaDZv1B7rnMI5C+4HpjqPb9VoGFnCfA1qHMI5U+69+xEcVLAF/G7twNcw22yTksRaf4DNCg7hR+OHBN7BKTWJi/q0glYXyvO/UMq16PN3YqIWvDvU/nW96hJV+DPxjFb0adPkuLNuo9XTiTZ3VCbq3VQ0e0BgOz5LEuP1+ydJjPOkieUOJ3vCuCRxWX/J24kdSUzUqTiwICpcGzhhhCFWueOqitLC9ehQEy/i+xJhI5oVRhQoaMaGUvQDXohd2FhK/eW2paPuwTL92kr+G/g8mvBokliEpoxhTmJhkliAXytSn+RykmRpkmNjCeRYkmVJkktJ6itSm2uFniRJdZLOMQVuJKlKkkJPrqe2IoX0laDuJNPHFJhWYibJrVTEFX0DczcXv405gxbMSRIV+vwbp/BICTyNlaOWr0JLyZ+D5tiLdaXUarRbNGL5465gVSl6BXviVewrU7aj05sPbqMqb7mBbeXMfqyLWkXdHk40mKxgq1tot98mK5LECpt84wpu+WBwT01V1G1yEvuwJXFShw2JxQ4oMniabaDogIa7OnofXw64C/XpMtd7ein9Sl7GGdVJotoZvHTPhebp1mXWYPgpjqi0Rr8Oz6t1EOvL9PX44q7ySkexdShRrRm7E28bsuVlfDm+K0cFe3FioL/B5CyX8JVKa/zkrOtYUkaXoLF8+te4WG6/TFrsIn5RnyQahxdQ7xgu3j3Ou7s4gaIPzRhOwAwfKaLJzJE2rdpWXeh1FSvLT9tKXNWLmz4eyI687TPt0jXs49plj7r7+cP+/0zK6jyXxaXnvSMX0pqfc7jQ9SD3f6jOB/JkrqirAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTExLTEyVDEwOjE5OjU3KzAwOjAwk8wWWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMS0xMlQxMDoxOTo1NyswMDowMOKRruYAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},5307:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCwwKEwOJduhjAAABi0lEQVRIx82VrUtDYRTGf3cOP0CZCwaDiJvRrJb5EUxuVYN/hGkIJkERQViwiM0wi1EMgmwrFotFjKKCH8iQDTcxyPYY7tXdy+blvVvxaee8PM/5eM97XgCUUkFVBUFVeSWxoe1AVDe2wFKKE6DMMSXMEWWZCJBCBUkljQUg23nHVJaUQxVJ+0HpADqQ9B6iH3htR4AXYCBsHK+bBON88cS5VW/4DQW0wi7DjrHKXuMkZERPk/2lg6fhBgKaZMfj8HTMpIS0E+aBQz4pchRUYAaAGnPWffOhSQ+GAHhuRTcTsJwMaFfAFx0L+DRRs0y7zIjWALixTo0E1MMZvS5H1JmGukatR5MS+jx0N6PmNf/Cxx8L5sVwEq0vTZOgCzgA4I11oEbh9y3WgTqSpA2/Pjv7767JP6Wissb7oEWOlwz9h0HqSEATGuxAQEtccxGiCq51FQQLwAjKSyop5hOp5TUqbn8sYTLMM8iVjrn1jffzmGzEWSICZABttf25bv6kk1ROlUDUinJaBPgGdbhlmFYg3ecAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTEtMTJUMTA6MTk6MDMrMDA6MDAvYzwtAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTExLTEyVDEwOjE5OjAzKzAwOjAwXj6EkQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),n=a("2274"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view"),a("div",{attrs:{id:"app"}}),a("Footer")],1)},A=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"navbar"}},[a("b-navbar",{staticClass:"container",attrs:{toggleable:"md",type:"light"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Si to it ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("router-link",{attrs:{to:"/"}},[t._v("Home |")])],1),a("b-navbar-nav",[a("router-link",{attrs:{to:"/flashcards"}},[t._v("Flashcards |")])],1),a("b-navbar-nav",[a("router-link",{attrs:{to:"/about"}},[t._v("About |")])],1)],1)],1)],1)},i=[],c={name:"Navbar"},l=c,u=(a("b3be"),a("2877")),f=Object(u["a"])(l,s,i,!1,null,"460e2ffe",null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid text-left",attrs:{id:"footer"}},[r("b-container",[r("p",{staticClass:"brand"},[t._v("Si to it")]),r("p",[t._v("Get daily tips and tricks for improve your skills!")]),r("div",{staticClass:"input-group"},[r("b-form-input",{attrs:{placeholder:"Enter your e-mail"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),r("b-button",{attrs:{variant:"outline-secondary"}},[t._v("This button doesn't do anything yet!")])],1),r("p",{staticClass:"social"},[t._v(" Folow us: "),r("a",{attrs:{href:"/"}},[r("img",{attrs:{alt:"facebook logo",src:a("5307")}})]),r("a",{attrs:{href:"/"}},[r("img",{attrs:{alt:"facebook logo",src:a("c7f8")}})]),r("a",{attrs:{href:"/"}},[r("img",{attrs:{alt:"facebook logo",src:a("359c")}})])])]),r("div",{staticClass:"about-author container-fluid"},[r("b-container",[r("p",[t._v(" This website was handcrafted by Lucyna Borkowska ")]),r("p",[t._v(" Si to it - part of the LucyBo publishing family ")]),r("p",[t._v("Beautiful free photos contributed by talented community of "),r("a",{attrs:{href:"https://www.pexels.com/"}},[t._v("Pexels")]),t._v(" and "),r("a",{attrs:{href:"https://www.unsplash.com/"}},[t._v("Unsplash")])]),r("p",[t._v("Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[t._v("Pixel perfect")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v(" www.flaticon.com")])]),r("p",[t._v("Photo by Andrea Piacquadio from Pexels")])])],1)],1)},h=[],m={data:function(){return{text:""}}},v=m,b=(a("8317"),Object(u["a"])(v,p,h,!1,null,"fdd7de5e",null)),g=b.exports,w={name:"App",components:{Navbar:d,Footer:g}},C=w,E=(a("5c0b"),Object(u["a"])(C,o,A,!1,null,null,null)),y=E.exports,x=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"home"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"text-left",attrs:{sm:"auto",md:"6",lg:"6",xl:"6"}},[a("p",[t._v("Learning languages gives you a freedom to travel unexpected roads without fear. ")]),a("p",[t._v("Learning with "),a("span",{staticClass:"brand"},[t._v("Si to it ")]),t._v(" gives you a chance to acquire self-confidence in speaking all dialects of JavaScript. ")])]),a("b-col",{staticClass:"girl-img"})],1)],1)],1),a("b-container",[a("div",{staticClass:"steps"},[a("b-row",{staticClass:"text-center align-items-center"},[a("b-col",{staticClass:"deko",attrs:{sm:"auto",md:"6",lg:"3",xl:"3"}},[t._v(" Discover theory and use what you learn ")]),a("b-col",{staticClass:"deko",attrs:{sm:"auto",md:"6",lg:"3",xl:"3"}},[t._v(" Remeber everything and back to review whenerver you want ")]),a("b-col",{staticClass:"deko",attrs:{sm:"auto",md:"6",lg:"3",xl:"3"}},[t._v(" Use social media for improving your skills ")]),a("b-col",{staticClass:"deko",attrs:{sm:"auto",md:"6",lg:"3",xl:"3"}},[t._v(" Learn easy as a child at any time! ")])],1)],1)])],1)},R=[],B={name:"Home",components:{}},O=B,M=(a("ec07"),Object(u["a"])(O,k,R,!1,null,"7729ece4",null)),J=M.exports;r["default"].use(x["a"]);var P=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/flashcards",name:"FlashCards",component:function(){return a.e("about").then(a.bind(null,"ec80"))}}],V=new x["a"]({mode:"history",base:"/",routes:P}),F=V,j=a("2f62");r["default"].use(j["a"]);var T=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=a("5f5b"),Q=a("b1e0");a("f9e3"),a("2dd8");r["default"].config.productionTip=!1,r["default"].use(S["a"]),r["default"].use(Q["a"]),r["default"].use(n["a"],{prefix:"Si to IT"}),new r["default"]({router:F,store:T,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},8317:function(t,e,a){"use strict";a("007f")},"9c0c":function(t,e,a){},b3be:function(t,e,a){"use strict";a("1f6e")},c7f8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCwwKERrfKyIhAAACvklEQVRIx5WVTW9VVRSGn3Nui5d7pRAY8BEIxAiFSBo+/gEgIGmECokQByAEQhzQyoh/ABMKE8KcCYQBiIIpFI38AhKMsbcNYtHQUsD20vQD03sfB+dcPOeeEm7XbK+93nftvdfa6w14axZpZztraWERUGQeTSwAxpnhXyaAMV4zwH1uB5OkzdDTvrBRe+G3hhEyAPBDbvApAGV+ZQh4TYU31PIU+IAcLcBy2mgBoJeOYKKWvVfV3+2wifeYzX5hn6p341PYper3Ft4HfktS8LaqpwDnO6L2NQa36DaXgkVL6nPzuE/VLxuC532klm0FD6m6F7vVCfMNEWyNq3AanO+k2t3EeqAUTGeCF3KAHayiyh/08F0wDZT4m5XM8ACCKUtsohUH1KsZ+Alfpio/6OcALvNrN8Yx19V+HFYv1cEvxrBn3vNnX6latasu6rI6hGX1fGrjmzhnu1GbNXnEf9SKe1JxF9QxnFLPJtxLHFP/dHkq+BNH1QGbE75z6mRICFQTsV+xEDgeDCUJgt84A3zMroSzCuRCcnUEO4HHQW+mhleYhBRBBQijE1QS7jXAw2wPBFP0AauzJ6i3KvEfzXIA1tc7jHgSrqfA5izaAq3AYMIVAtUwuknCfRf4yF0ZhsMU4t2aRa+XKeNiR9VBV6Tyb7Ss9mfLOFsjnVT1qXujgWGzRx1VK+5OxR206oPZW7k7buVhe/3FUVUrnsq8yxrz0We6ltk6Vjdin9g+a2UI/JHPeBhsyVC0sJ8drKbCY3q4FbyZnWBOA6UOucElUBtpB+cM32fVv8xh3hG1ZHFO8KJP1GFzgJ2q/jCnsX5P1aPRMoyXfe5PNso7wPM8YClWkrAmbUVuxtI2ziOe8W5pW0EbCwDooSMxig3tcqRhcR2xMyWutZvRznbWZeR9imlmGAfKjNHPT9z5X97/A6dbWxe8B7MMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTExLTEyVDEwOjE3OjI2KzAwOjAwIbckRAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMS0xMlQxMDoxNzoyNiswMDowMFDqnPgAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},ec07:function(t,e,a){"use strict";a("0c7c")}});
//# sourceMappingURL=index.6311e776.js.map