(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0366":function(t,e,r){var n=r("1c0b");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"06cf":function(t,e,r){var n=r("83ab"),o=r("d1e7"),i=r("5c6c"),a=r("fc6a"),c=r("c04e"),u=r("5135"),s=r("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(r){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},"0935":function(t,e,r){},"19aa":function(t,e){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},"1be4":function(t,e,r){var n=r("d066");t.exports=n("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,r){var n=r("b622"),o=n("iterator"),i=!1;try{var a=0,c={next:function(){return{done:!!a++}},return:function(){i=!0}};c[o]=function(){return this},Array.from(c,(function(){throw 2}))}catch(u){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var n={};n[o]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(u){}return r}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,r){var n=r("825a"),o=r("e95a"),i=r("50c4"),a=r("0366"),c=r("35a1"),u=r("2a62"),s=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var f,l,d,p,v,h,b,y=r&&r.that,g=!(!r||!r.AS_ENTRIES),m=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=a(e,y,1+g+w),S=function(t){return f&&u(f),new s(!0,t)},O=function(t){return g?(n(t),w?x(t[0],t[1],S):x(t[0],t[1])):w?x(t,S):x(t)};if(m)f=t;else{if(l=c(t),"function"!=typeof l)throw TypeError("Target is not iterable");if(o(l)){for(d=0,p=i(t.length);p>d;d++)if(v=O(t[d]),v&&v instanceof s)return v;return new s(!1)}f=l.call(t)}h=f.next;while(!(b=h.call(f)).done){try{v=O(b.value)}catch(A){throw u(f),A}if("object"==typeof v&&v&&v instanceof s)return v}return new s(!1)}},"23cb":function(t,e,r){var n=r("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},"23e7":function(t,e,r){var n=r("da84"),o=r("06cf").f,i=r("9112"),a=r("6eeb"),c=r("ce4e"),u=r("e893"),s=r("94ca");t.exports=function(t,e){var r,f,l,d,p,v,h=t.target,b=t.global,y=t.stat;if(f=b?n:y?n[h]||c(h,{}):(n[h]||{}).prototype,f)for(l in e){if(p=e[l],t.noTargetGet?(v=o(f,l),d=v&&v.value):d=f[l],r=s(b?l:h+(y?".":"#")+l,t.forced),!r&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),a(f,l,p,t)}}},"241c":function(t,e,r){var n=r("ca84"),o=r("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},2626:function(t,e,r){"use strict";var n=r("d066"),o=r("9bf2"),i=r("b622"),a=r("83ab"),c=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[c]&&r(e,c,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,r){var n=r("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return n(e.call(t)).value}},"2d00":function(t,e,r){var n,o,i=r("da84"),a=r("342f"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?(n=s.split("."),o=n[0]+n[1]):a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(o=n[1]))),t.exports=o&&+o},"342f":function(t,e,r){var n=r("d066");t.exports=n("navigator","userAgent")||""},"35a1":function(t,e,r){var n=r("f5df"),o=r("3f8c"),i=r("b622"),a=i("iterator");t.exports=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[n(t)]}},"37e8":function(t,e,r){var n=r("83ab"),o=r("9bf2"),i=r("825a"),a=r("df75");t.exports=n?Object.defineProperties:function(t,e){i(t);var r,n=a(e),c=n.length,u=0;while(c>u)o.f(t,r=n[u++],e[r]);return t}},"3bbe":function(t,e,r){var n=r("861d");t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"44ad":function(t,e,r){var n=r("d039"),o=r("c6b6"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,r){var n=r("b622"),o=r("7c73"),i=r("9bf2"),a=n("unscopables"),c=Array.prototype;void 0==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},"486f":function(t,e,r){"use strict";r("89d9")},"4d64":function(t,e,r){var n=r("fc6a"),o=r("50c4"),i=r("23cb"),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),f=i(a,s);if(t&&r!=r){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,l,d,p,v=o(t),h="function"==typeof this?this:Array,b=arguments.length,y=b>1?arguments[1]:void 0,g=void 0!==y,m=s(v),w=0;if(g&&(y=n(y,b>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(e=c(v.length),r=new h(e);e>w;w++)p=g?y(v[w],w):v[w],u(r,w,p);else for(l=m.call(v),d=l.next,r=new h;!(f=d.call(l)).done;w++)p=g?i(l,y,[f.value,w],!0):f.value,u(r,w,p);return r.length=w,r}},"50c4":function(t,e,r){var n=r("a691"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},"56ef":function(t,e,r){var n=r("d066"),o=r("241c"),i=r("7418"),a=r("825a");t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},6062:function(t,e,r){"use strict";var n=r("6d61"),o=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},"62d8":function(t,e,r){"use strict";r("ed6b")},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},6566:function(t,e,r){"use strict";var n=r("9bf2").f,o=r("7c73"),i=r("e2cc"),a=r("0366"),c=r("19aa"),u=r("2266"),s=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,p=r("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,r,s){var f=t((function(t,n){c(t,f,e),v(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&u(n,t[s],{that:t,AS_ENTRIES:r})})),p=h(e),b=function(t,e,r){var n,o,i=p(t),a=y(t,e);return a?a.value=r:(i.last=a={index:o=d(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},y=function(t,e){var r,n=p(t),o=d(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(f.prototype,{clear:function(){var t=this,e=p(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=p(e),n=y(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first==n&&(r.first=o),r.last==n&&(r.last=i),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=p(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(f.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return p(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",o=h(e),i=h(n);s(t,e,(function(t,e){v(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("94ca"),a=r("6eeb"),c=r("f183"),u=r("2266"),s=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),p=r("d44e"),v=r("7156");t.exports=function(t,e,r){var h=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),y=h?"set":"add",g=o[t],m=g&&g.prototype,w=g,x={},S=function(t){var e=m[t];a(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof g||!(b||m.forEach&&!l((function(){(new g).entries().next()})))))w=r.getConstructor(e,t,h,y),c.REQUIRED=!0;else if(i(t,!0)){var O=new w,A=O[y](b?{}:-0,1)!=O,_=l((function(){O.has(1)})),E=d((function(t){new g(t)})),j=!b&&l((function(){var t=new g,e=5;while(e--)t[y](e,e);return!t.has(-0)}));E||(w=e((function(e,r){s(e,w,t);var n=v(new g,e,w);return void 0!=r&&u(r,n[y],{that:n,AS_ENTRIES:h}),n})),w.prototype=m,m.constructor=w),(_||j)&&(S("delete"),S("has"),h&&S("get")),(j||A)&&S(y),b&&m.clear&&delete m.clear}return x[t]=w,n({global:!0,forced:w!=g},x),p(w,t),b||r.setStrong(w,t,h),w}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,r){var n=r("1d80");t.exports=function(t){return Object(n(t))}},"7c73":function(t,e,r){var n,o=r("825a"),i=r("37e8"),a=r("7839"),c=r("d012"),u=r("1be4"),s=r("cc12"),f=r("f772"),l=">",d="<",p="prototype",v="script",h=f("IE_PROTO"),b=function(){},y=function(t){return d+v+l+t+d+"/"+v+l},g=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},m=function(){var t,e=s("iframe"),r="java"+v+":";return e.style.display="none",u.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}w=n?g(n):m();var t=a.length;while(t--)delete w[p][a[t]];return w()};c[h]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(b[p]=o(t),r=new b,b[p]=null,r[h]=t):r=w(),void 0===e?r:i(r,e)}},"7dd0":function(t,e,r){"use strict";var n=r("23e7"),o=r("9ed3"),i=r("e163"),a=r("d2bb"),c=r("d44e"),u=r("9112"),s=r("6eeb"),f=r("b622"),l=r("c430"),d=r("3f8c"),p=r("ae93"),v=p.IteratorPrototype,h=p.BUGGY_SAFARI_ITERATORS,b=f("iterator"),y="keys",g="values",m="entries",w=function(){return this};t.exports=function(t,e,r,f,p,x,S){o(r,e,f);var O,A,_,E=function(t){if(t===p&&I)return I;if(!h&&t in C)return C[t];switch(t){case y:return function(){return new r(this,t)};case g:return function(){return new r(this,t)};case m:return function(){return new r(this,t)}}return function(){return new r(this)}},j=e+" Iterator",k=!1,C=t.prototype,T=C[b]||C["@@iterator"]||p&&C[p],I=!h&&T||E(p),L="Array"==e&&C.entries||T;if(L&&(O=i(L.call(new t)),v!==Object.prototype&&O.next&&(l||i(O)===v||(a?a(O,v):"function"!=typeof O[b]&&u(O,b,w)),c(O,j,!0,!0),l&&(d[j]=w))),p==g&&T&&T.name!==g&&(k=!0,I=function(){return T.call(this)}),l&&!S||C[b]===I||u(C,b,I),d[e]=I,p)if(A={values:E(g),keys:x?I:E(y),entries:E(m)},S)for(_ in A)(h||k||!(_ in C))&&s(C,_,A[_]);else n({target:e,proto:!0,forced:h||k},A);return A}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"89d9":function(t,e,r){},"8d04":function(t,e,r){"use strict";r("dd0d")},"8f97":function(t,e,r){"use strict";r("0935")},"94ca":function(t,e,r){var n=r("d039"),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},"9ed3":function(t,e,r){"use strict";var n=r("ae93").IteratorPrototype,o=r("7c73"),i=r("5c6c"),a=r("d44e"),c=r("3f8c"),u=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,s,!1,!0),c[s]=u,t}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),v=r("825a"),h=r("7b0b"),b=r("fc6a"),y=r("c04e"),g=r("5c6c"),m=r("7c73"),w=r("df75"),x=r("241c"),S=r("057f"),O=r("7418"),A=r("06cf"),_=r("9bf2"),E=r("d1e7"),j=r("9112"),k=r("6eeb"),C=r("5692"),T=r("f772"),I=r("d012"),L=r("90e3"),P=r("b622"),R=r("e538"),F=r("746f"),N=r("d44e"),D=r("69f3"),J=r("b727").forEach,M=T("hidden"),z="Symbol",B="prototype",q=P("toPrimitive"),G=D.set,V=D.getterFor(z),$=Object[B],U=o.Symbol,W=i("JSON","stringify"),H=A.f,Z=_.f,Q=S.f,Y=E.f,K=C("symbols"),X=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,it=c&&f((function(){return 7!=m(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H($,e);n&&delete $[e],Z(t,e,r),n&&t!==$&&Z($,e,n)}:Z,at=function(t,e){var r=K[t]=m(U[B]);return G(r,{type:z,tag:t,description:e}),c||(r.description=e),r},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ut=function(t,e,r){t===$&&ut(X,e,r),v(t);var n=y(e,!0);return v(r),l(K,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,M)||Z(t,M,g(1,{})),t[M][n]=!0),it(t,n,r)):Z(t,n,r)},st=function(t,e){v(t);var r=b(e),n=w(r).concat(vt(r));return J(n,(function(e){c&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=y(t,!0),r=Y.call(this,e);return!(this===$&&l(K,e)&&!l(X,e))&&(!(r||!l(this,e)||!l(K,e)||l(this,M)&&this[M][e])||r)},dt=function(t,e){var r=b(t),n=y(e,!0);if(r!==$||!l(K,n)||l(X,n)){var o=H(r,n);return!o||!l(K,n)||l(r,M)&&r[M][n]||(o.enumerable=!0),o}},pt=function(t){var e=Q(b(t)),r=[];return J(e,(function(t){l(K,t)||l(I,t)||r.push(t)})),r},vt=function(t){var e=t===$,r=Q(e?X:b(t)),n=[];return J(r,(function(t){!l(K,t)||e&&!l($,t)||n.push(K[t])})),n};if(u||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===$&&r.call(X,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),it(this,e,g(1,t))};return c&&ot&&it($,e,{configurable:!0,set:r}),at(e,t)},k(U[B],"toString",(function(){return V(this).tag})),k(U,"withoutSetter",(function(t){return at(L(t),t)})),E.f=lt,_.f=ut,A.f=dt,x.f=S.f=pt,O.f=vt,R.f=function(t){return at(P(t),t)},c&&(Z(U[B],"description",{configurable:!0,get:function(){return V(this).description}}),a||k($,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:U}),J(w(rt),(function(t){F(t)})),n({target:z,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),W){var ht=!u||f((function(){var t=U();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,W.apply(null,o)}})}U[B][q]||j(U[B],q,U[B].valueOf),N(U,z),I[M]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},a691:function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,f,l)}))}},ae93:function(t,e,r){"use strict";var n,o,i,a=r("e163"),c=r("9112"),u=r("5135"),s=r("b622"),f=r("c430"),l=s("iterator"),d=!1,p=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=a(a(i)),o!==Object.prototype&&(n=o)):d=!0),void 0==n&&(n={}),f||u(n,l)||c(n,l,p),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,v,h,b){for(var y,g,m=i(p),w=o(m),x=n(v,h,3),S=a(w.length),O=0,A=b||c,_=e?A(p,S):r?A(p,0):void 0;S>O;O++)if((d||O in w)&&(y=w[O],g=x(y,O,m),t))if(e)_[O]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(_,y)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},ca84:function(t,e,r){var n=r("5135"),o=r("fc6a"),i=r("4d64").indexOf,a=r("d012");t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(a,r)&&n(c,r)&&s.push(r);while(e.length>u)n(c,r=e[u++])&&(~i(s,r)||s.push(r));return s}},d066:function(t,e,r){var n=r("428f"),o=r("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},d28b:function(t,e,r){var n=r("746f");n("iterator")},d2bb:function(t,e,r){var n=r("825a"),o=r("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(r,[]),e=r instanceof Array}catch(i){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},d44e:function(t,e,r){var n=r("9bf2").f,o=r("5135"),i=r("b622"),a=i("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),u=a("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dd0d:function(t,e,r){},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),u=c("iterator"),s=c("toStringTag"),f=i.values;for(var l in o){var d=n[l],p=d&&d.prototype;if(p){if(p[u]!==f)try{a(p,u,f)}catch(h){p[u]=f}if(p[s]||a(p,s,l),o[l])for(var v in i)if(p[v]!==i[v])try{a(p,v,i[v])}catch(h){p[v]=i[v]}}}},df75:function(t,e,r){var n=r("ca84"),o=r("7839");t.exports=Object.keys||function(t){return n(t,o)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),u=r("9bf2").f,s=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var p=d.prototype=f.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(a(l,t))return"";var r=h?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e163:function(t,e,r){var n=r("5135"),o=r("7b0b"),i=r("f772"),a=r("e177"),c=i("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},e177:function(t,e,r){var n=r("d039");t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,r){"use strict";var n=r("fc6a"),o=r("44d2"),i=r("3f8c"),a=r("69f3"),c=r("7dd0"),u="Array Iterator",s=a.set,f=a.getterFor(u);t.exports=c(Array,"Array",(function(t,e){s(this,{type:u,target:n(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(t,e,r){var n=r("6eeb");t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},e538:function(t,e,r){var n=r("b622");e.f=n},e893:function(t,e,r){var n=r("5135"),o=r("56ef"),i=r("06cf"),a=r("9bf2");t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||c(t,f,u(e,f))}}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e95a:function(t,e,r){var n=r("b622"),o=r("3f8c"),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},ec80:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CardCollection"),r("CategoriesBar")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",attrs:{id:"card-collection"}},[r("b-row",t._l(t.flashcards,(function(t){return r("Card2",{key:t.id,attrs:{flashcard:t}})})),1)],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{staticClass:"card",attrs:{sm:"12",md:"6",lg:"4"}},[r("div",{attrs:{id:"card"}},[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"","img-width":"480","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{attrs:{caption:"","img-blank":"","img-alt":"Blank image"}},[r("div",{staticClass:"image-overlay"}),r("div",{staticClass:"question"},[t._v(" "+t._s(t.flashcard.question)+" ")])]),r("b-carousel-slide",{attrs:{caption:"","img-blank":"","img-alt":"Blank image"}},[r("div",{staticClass:"answer"},[t._v(" "+t._s(t.flashcard.answer)+" ")])])],1),r("p",{staticClass:"timestamp"},[t._v(" "+t._s(t.flashcard.createdAdd)+" ")])],1)])},u=[],s={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},props:["flashcard"]},f=s,l=(r("8f97"),r("2877")),d=Object(l["a"])(f,c,u,!1,null,null,null),p=d.exports,v=[{id:"6",createdAdd:"2020-12-09T19:01:32.717Z",category:"JavaScript",question:"What are the 3 different keywords used in JavaScript to declare variables?",answer:"VAR, LET and CONST"},{id:"5",createdAdd:"2020-12-09T18:58:20.894Z",category:"JavaScript",question:"How to write single line comment in JS?",answer:"Single line comments start with //. Any text between // and the end of the line will be ignored by JavaScript (will not be executed)."},{id:"4",createdAdd:"2020-12-09T18:53:43.049Z",category:"JavaScript",question:"How to come out of the current loop entirely in JavaScript?",answer:"By using: break. Break terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."},{id:"3",createdAdd:"2020-12-09T18:30:05.196Z",category:"JavaScript",question:"Is JavaScript a case sensitive language?",answer:"Thats true! All JavaScript identifiers are case sensitive. The variables lastName and lastname, are two different variables. Beware: JavaScript does not interpret VAR or Var as the keyword var. Fun fact: ☝  You can use in your code Unicode block symbols like this coffee ☕️ as variables definitions."},{id:"2",createdAdd:"2020-12-01T13:26:17.308Z",category:"JavaScript",question:"What is the main difference in using constructor function or the literal notation objects?",answer:"The main difference is that one or more key-value pairs can be included in a literal declaration, while for constructed objects, properties must be added one at a time."},{id:"1",createdAdd:"2020-12-01T13:11:37.542Z",category:"Data and Structure",question:"List 7 primitive data types in JavaScript",answer:"Boolean | Null | Undefined | Number | BigInt | String | Symbol"}],h=v,b={name:"CardCollection",components:{Card2:p},data:function(){return{flashcards:h}}},y=b,g=(r("8d04"),Object(l["a"])(y,i,a,!1,null,"505d6bff",null)),m=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{id:"categories"}},t._l(t.uniqueCategories(t.flashcards),(function(t){return r("Category",{key:t.key,attrs:{category:t.value}})})),1)},x=[];r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0");function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t){if(Array.isArray(t))return S(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630");function A(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function _(t,e){if(t){if("string"===typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(t){return O(t)||A(t)||_(t)||E()}var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[t._v(" "+t._s(t.category)+" ")])},C=[],T={props:["category"]},I=T,L=Object(l["a"])(I,k,C,!1,null,null,null),P=L.exports,R={name:"CategoriesBar",components:{Category:P},data:function(){return{flashcards:h}},methods:{uniqueCategories:function(t){var e=t.map((function(t){return t.category})),r=new Set(e),n=j(r);return n.map((function(t,e){return{key:e,value:t}}))}}},F=R,N=(r("486f"),Object(l["a"])(F,w,x,!1,null,"692dc425",null)),D=N.exports,J={name:"FlashCards",components:{CardCollection:m,CategoriesBar:D}},M=J,z=Object(l["a"])(M,n,o,!1,null,null,null);e["default"]=z.exports},ed6b:function(t,e,r){},f036:function(t,e,r){t.exports=r.p+"img/doggo.b8d821aa.png"},f183:function(t,e,r){var n=r("d012"),o=r("861d"),i=r("5135"),a=r("9bf2").f,c=r("90e3"),u=r("bb2f"),s=c("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},p=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[s].objectID},v=function(t,e){if(!i(t,s)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[s].weakData},h=function(t){return u&&b.REQUIRED&&l(t)&&!i(t,s)&&d(t),t},b=t.exports={REQUIRED:!1,fastKey:p,getWeakData:v,onFreeze:h};n[s]=!0},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"project text-left"},[n("h1",[n("span",{attrs:{id:"brand"}},[t._v("Si to it")]),t._v(" - joyful concept for improving skills")]),n("div",[t._v("✓ born in pandemic, ")]),n("div",[t._v("✓ set in the IT industry,")]),n("div",[t._v("✓ for expressing stereotypes in frontend related languages and libraries,")]),n("div",[t._v("✓ addressed to everyone who wants to stay in relationship with IT technologies")]),n("div",[t._v("✓ from the developer who love to dig into JS programming problems,")]),n("div",[t._v("✓ with the mission of make JavaScript understandable and avant-garde!")]),n("div",[t._v("(the project is under constant development)")])])]),n("b-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"project text-left"},[n("h1",[t._v("Flashcards")]),n("p",[t._v("Flashcards are a tried-and-true study tool. Whether you're preparing for an exam or interview, flashcards can help you memorize information, reinforce understanding, and retain details.")]),n("p",[t._v("Flashcards give your brain a very quick way to check if you got the answer correct and this kind of test is one of the most efficient way to study. Getting wrong answers with your engagement brings to you surprisingly good results in expanding knowledge. ")]),n("p",[t._v("More information here: "),n("a",{attrs:{href:"https://www.thoughtco.com/how-to-use-flash-cards-1857515",target:"popup",onclick:"window.open('https://www.thoughtco.com/how-to-use-flash-cards-1857515','name','width=600,height=400')"}},[t._v("Link!")])])])])],1),n("img",{staticClass:"img-fluid",attrs:{src:r("f036")}})],1),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"action"},[t._v(" Say "),r("span",[t._v("-Si!")]),t._v(" to our flashacrds and learn with us! ")])}],i=(r("62d8"),r("2877")),a={},c=Object(i["a"])(a,n,o,!1,null,"45696c2c",null);e["default"]=c.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),u=r("fc6a"),s=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),h=f("species"),b=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var r,n,f,l=u(this),d=c(l.length),p=a(t,d),v=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,p,v);for(n=new(void 0===r?Array:r)(y(v-p,0)),f=0;p<v;p++,f++)p in l&&s(n,f,l[p]);return n.length=f,n}})},fc6a:function(t,e,r){var n=r("44ad"),o=r("1d80");t.exports=function(t){return n(o(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.a97b6b07.js.map