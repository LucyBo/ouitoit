(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"0935":function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&n(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"486f":function(t,e,r){"use strict";r("89d9")},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,v,p=i(t),g="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,y=void 0!==h,m=u(p),S=0;if(y&&(h=n(h,b>2?arguments[2]:void 0,2)),void 0==m||g==Array&&a(m))for(e=s(p.length),r=new g(e);e>S;S++)v=y?h(p[S],S):p[S],c(r,S,v);else for(l=m.call(p),d=l.next,r=new g;!(f=d.call(l)).done;S++)v=y?o(l,h,[f.value,S],!0):f.value,c(r,S,v);return r.length=S,r}},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,s=String(i(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},6566:function(t,e,r){"use strict";var n=r("9bf2").f,i=r("7c73"),o=r("e2cc"),a=r("0366"),s=r("19aa"),c=r("2266"),u=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,v=r("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,r,u){var f=t((function(t,n){s(t,f,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&c(n,t[u],{that:t,AS_ENTRIES:r})})),v=g(e),b=function(t,e,r){var n,i,o=v(t),a=h(t,e);return a?a.value=r:(o.last=a={index:i=d(e,!0),key:e,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=a),n&&(n.next=a),l?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},h=function(t,e){var r,n=v(t),i=d(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return o(f.prototype,{clear:function(){var t=this,e=v(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=v(e),n=h(e,t);if(n){var i=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),r.first==n&&(r.first=i),r.last==n&&(r.last=o),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=v(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),o(f.prototype,r?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",i=g(e),o=g(n);u(t,e,(function(t,e){p(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6b33":function(t,e,r){"use strict";r("daac")},"6d61":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("94ca"),a=r("6eeb"),s=r("f183"),c=r("2266"),u=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),v=r("d44e"),p=r("7156");t.exports=function(t,e,r){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),h=g?"set":"add",y=i[t],m=y&&y.prototype,S=y,x={},w=function(t){var e=m[t];a(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(o(t,"function"!=typeof y||!(b||m.forEach&&!l((function(){(new y).entries().next()})))))S=r.getConstructor(e,t,g,h),s.REQUIRED=!0;else if(o(t,!0)){var C=new S,A=C[h](b?{}:-0,1)!=C,O=l((function(){C.has(1)})),E=d((function(t){new y(t)})),_=!b&&l((function(){var t=new y,e=5;while(e--)t[h](e,e);return!t.has(-0)}));E||(S=e((function(e,r){u(e,S,t);var n=p(new y,e,S);return void 0!=r&&c(r,n[h],{that:n,AS_ENTRIES:g}),n})),S.prototype=m,m.constructor=S),(O||_)&&(w("delete"),w("has"),g&&w("get")),(_||A)&&w(h),b&&m.clear&&delete m.clear}return x[t]=S,n({global:!0,forced:S!=y},x),v(S,t),b||r.setStrong(S,t,g),S}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"89d9":function(t,e,r){},"8d04":function(t,e,r){"use strict";r("dd0d")},"8f97":function(t,e,r){"use strict";r("0935")},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(a){throw i(t),a}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),g=r("7b0b"),b=r("fc6a"),h=r("c04e"),y=r("5c6c"),m=r("7c73"),S=r("df75"),x=r("241c"),w=r("057f"),C=r("7418"),A=r("06cf"),O=r("9bf2"),E=r("d1e7"),_=r("9112"),j=r("6eeb"),k=r("5692"),L=r("f772"),T=r("d012"),P=r("90e3"),R=r("b622"),I=r("e538"),q=r("746f"),D=r("d44e"),N=r("69f3"),M=r("b727").forEach,F=L("hidden"),z="Symbol",$="prototype",B=R("toPrimitive"),J=N.set,V=N.getterFor(z),G=Object[$],Q=i.Symbol,U=o("JSON","stringify"),H=A.f,W=O.f,Z=w.f,K=E.f,X=k("symbols"),Y=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=s&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(G,e);n&&delete G[e],W(t,e,r),n&&t!==G&&W(G,e,n)}:W,at=function(t,e){var r=X[t]=m(Q[$]);return J(r,{type:z,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,r){t===G&&ct(Y,e,r),p(t);var n=h(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,F)||W(t,F,y(1,{})),t[F][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){p(t);var r=b(e),n=S(r).concat(pt(r));return M(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=h(t,!0),r=K.call(this,e);return!(this===G&&l(X,e)&&!l(Y,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=b(t),n=h(e,!0);if(r!==G||!l(X,n)||l(Y,n)){var i=H(r,n);return!i||!l(X,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},vt=function(t){var e=Z(b(t)),r=[];return M(e,(function(t){l(X,t)||l(T,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=Z(e?Y:b(t)),n=[];return M(r,(function(t){!l(X,t)||e&&!l(G,t)||n.push(X[t])})),n};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),r=function(t){this===G&&r.call(Y,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(G,e,{configurable:!0,set:r}),at(e,t)},j(Q[$],"toString",(function(){return V(this).tag})),j(Q,"withoutSetter",(function(t){return at(P(t),t)})),E.f=lt,O.f=ct,A.f=dt,x.f=w.f=vt,C.f=pt,I.f=function(t){return at(R(t),t)},s&&(W(Q[$],"description",{configurable:!0,get:function(){return V(this).description}}),a||j(G,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),M(S(rt),(function(t){q(t)})),n({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(g(t))}}),U){var gt=!c||f((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,U.apply(null,i)}})}Q[$][B]||_(Q[$],B,Q[$].valueOf),D(Q,z),T[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:c,l=o(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,p,g,b){for(var h,y,m=o(v),S=i(m),x=n(p,g,3),w=a(S.length),C=0,A=b||s,O=e?A(v,w):r?A(v,0):void 0;w>C;C++)if((d||C in S)&&(h=S[C],y=x(h,C,m),t))if(e)O[C]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return C;case 2:c.call(O,h)}else if(f)return!1;return l?-1:u||f?f:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,o=r("1dde"),a=r("ae40"),s=o("map"),c=a("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},daac:function(t,e,r){},dd0d:function(t,e,r){},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in i){var d=n[l],v=d&&d.prototype;if(v){if(v[c]!==f)try{a(v,c,f)}catch(g){v[c]=f}if(v[u]||a(v,u,l),i[l])for(var p in o)if(v[p]!==o[p])try{a(v,p,o[p])}catch(g){v[p]=o[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var p=v.toString,g="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=g?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ec80:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CardCollection"),r("CategoriesBar")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",attrs:{id:"card-collection"}},[r("b-row",t._l(t.flashcards,(function(t){return r("Card2",{key:t.id,attrs:{flashcard:t}})})),1)],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{staticClass:"card",attrs:{sm:"12",md:"6",lg:"4"}},[r("div",{attrs:{id:"card"}},[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"","img-width":"480","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{attrs:{caption:"Question","img-blank":"","img-alt":"Blank image"}},[r("div",{staticClass:"image-overlay"}),r("div",{staticClass:"question"},[t._v(" "+t._s(t.flashcard.question)+" ")])]),r("b-carousel-slide",{attrs:{caption:"Answer","img-blank":"","img-alt":"Blank image"}},[r("div",{staticClass:"answer"},[t._v(" "+t._s(t.flashcard.answer)+" ")])])],1),r("p",{staticClass:"timestamp"},[t._v(" "+t._s(t.flashcard.createdAdd)+" ")])],1)])},c=[],u={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},props:["flashcard"]},f=u,l=(r("8f97"),r("2877")),d=Object(l["a"])(f,s,c,!1,null,null,null),v=d.exports,p=[{id:"2",createdAdd:"2020-12-01T13:26:17.308Z",category:"JavaScript",question:"What is the main difference in using constructor function or the literal notation objects?",answer:"The difference is that one or more key-value pairs can be included in a literal declaration, while for constructed objects, properties must be added one at a time."},{id:"1",createdAdd:"2020-12-01T13:11:37.542Z",category:"Data and Structure",question:"List 7 primitive data types in JavaScript",answer:"Boolean | Null | Undefined | Number | BigInt | String | Symbol"},{id:"3",createdAdd:"2020-11-20T19:55:38.753Z",category:"Theory",question:"Curabitur porttitor lacinia dui. Pellentesque sit amet leo eget orci efficitur mattis. Nulla facilisi.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ipsum eget urna aliquam lacinia. Cras egestas nibh at porttitor placerat."},{id:"4",createdAdd:"2020-11-20T19:55:38.753Z",category:"functionalJS",question:"Curabitur porttitor lacinia dui. Pellentesque sit amet leo eget orci efficitur mattis. Nulla facilisi.",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ipsum eget urna aliquam lacinia. Cras egestas nibh at porttitor placerat."}],g=p,b={name:"CardCollection",components:{Card2:v},data:function(){return{flashcards:g}}},h=b,y=(r("8d04"),Object(l["a"])(h,o,a,!1,null,"505d6bff",null)),m=y.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{id:"categories"}},t._l(t.uniqueCategories(t.flashcards),(function(t){return r("Category",{key:t.key,attrs:{category:t.value}})})),1)},x=[];r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0");function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function C(t){if(Array.isArray(t))return w(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630");function A(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function O(t,e){if(t){if("string"===typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(t){return C(t)||A(t)||O(t)||E()}var j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[t._v(" "+t._s(t.category)+" ")])},k=[],L={props:["category"]},T=L,P=Object(l["a"])(T,j,k,!1,null,null,null),R=P.exports,I={name:"CategoriesBar",components:{Category:R},data:function(){return{flashcards:g}},methods:{uniqueCategories:function(t){var e=t.map((function(t){return t.category})),r=new Set(e),n=_(r);return n.map((function(t,e){return{key:e,value:t}}))}}},q=I,D=(r("486f"),Object(l["a"])(q,S,x,!1,null,"692dc425",null)),N=D.exports,M={name:"FlashCards",components:{CardCollection:m,CategoriesBar:N}},F=M,z=Object(l["a"])(F,n,i,!1,null,null,null);e["default"]=z.exports},f036:function(t,e,r){t.exports=r.p+"img/doggo.b8d821aa.png"},f183:function(t,e,r){var n=r("d012"),i=r("861d"),o=r("5135"),a=r("9bf2").f,s=r("90e3"),c=r("bb2f"),u=s("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},p=function(t,e){if(!o(t,u)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},g=function(t){return c&&b.REQUIRED&&l(t)&&!o(t,u)&&d(t),t},b=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:g};n[u]=!0},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("b-container",[n("div",{staticClass:"project"},[n("h1",[n("span",{attrs:{id:"brand"}},[t._v("Si to it")]),t._v(" - joyful concept inspired by flashcards and mnemonics!")]),n("p",[t._v("✔ born in pandemic, ")]),n("p",[t._v("✔ set in the IT industry,")]),n("p",[t._v("✔ for expressing stereotypes in frontend related languages and libraries,")]),n("p",[t._v("✔ with the mission of make JavaScript Avant-garde again!")]),n("p",[t._v("(the project is under constant development)")])]),n("img",{staticClass:"img-fluid",attrs:{src:r("f036")}})]),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"action"},[t._v(" Say "),r("span",[t._v("-Si!")]),t._v(" to our flashacrds and learn with us! ")])}],o=(r("6b33"),r("2877")),a={},s=Object(o["a"])(a,n,i,!1,null,"b6d454e4",null);e["default"]=s.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),v=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),g=f("species"),b=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),v=a(t,d),p=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,v,p);for(n=new(void 0===r?Array:r)(h(p-v,0)),f=0;v<p;v++,f++)v in l&&u(n,f,l[v]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.c2d97226.js.map