"use strict";(self.webpackChunkReact_Modul_5_2=self.webpackChunkReact_Modul_5_2||[]).push([[953],{953:function(e,t,n){n.r(t);var r=n(861),s=n(439),c=n(757),a=n.n(c),u=n(243),l=n(263),i=n(791),o=n(87),d=n(689),h=n(184);t.default=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],c=t[1],p=(0,i.useState)(null),f=(0,s.Z)(p,2),x=f[0],j=f[1],v=(0,i.useState)(null),m=(0,s.Z)(v,2),b=m[0],y=m[1],Z=(0,o.lr)(),k=(0,s.Z)(Z,2),S=k[0],_=k[1],g=(0,d.TH)(),w=S.get("query");return(0,i.useEffect)((function(){if(w){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),y(null),e.next=5,u.Z.get("https://jsonplaceholder.typicode.com/posts/".concat(w));case 5:t=e.sent,n=t.data,c([n]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),y(e.t0.message);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchKey.value;_({query:t})},children:[(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"Search post by id: "}),(0,h.jsx)("input",{type:"text",name:"searchKey",required:!0,placeholder:"12"})," "]}),(0,h.jsx)("button",{type:"submit",children:"Search post"})]}),null!==b&&(0,h.jsx)("p",{className:"error-bage",children:b}),x&&(0,h.jsx)(l.Z,{}),null!==n&&n.map((function(e){return(0,h.jsx)(o.rU,{state:{from:g},to:"/posts/".concat(e.id),children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:e.title}),(0,h.jsxs)("h3",{children:["PostId: ",e.id]}),(0,h.jsx)("code",{children:e.body})]})},e.id)}))]})}}}]);
//# sourceMappingURL=953.83fa8508.chunk.js.map