(this["webpackJsonpmy-app-react1"]=this["webpackJsonpmy-app-react1"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),i=(n(15),n(2)),s=n(10),u=n(6),j=n.n(u),o=n(8),d=function(){var e=Object(o.a)(j.a.mark((function e(t){var n,c,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=g0zHgLKMNY7MvkU8B1thz6jbYiwXyecD"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(0),b=function(e){e.id;var t=e.title,n=e.url;return Object(l.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(l.jsx)("img",{src:n,alt:t}),Object(l.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){d(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,r=n.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:t}),r&&Object(l.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(l.jsx)("div",{className:"cardGrid",children:Object(l.jsx)("ol",{children:a.map((function(e){return Object(l.jsx)(b,Object(s.a)({},e),e.id)}))})})]})},p=n(9),O=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.length>2&&(t((function(e){return[r].concat(Object(p.a)(e))})),s(""))},children:Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value)}})})},f=function(){var e=Object(c.useState)(["One Piece"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"GifSearchApp"}),Object(l.jsx)("hr",{}),Object(l.jsx)(O,{setCategories:a}),Object(l.jsx)("ol",{children:n.map((function(e){return Object(l.jsx)(h,{category:e},e)}))})]})};r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b6eecda4.chunk.js.map