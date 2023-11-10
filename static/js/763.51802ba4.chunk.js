"use strict";(self.webpackChunkReact_Modul_5_2=self.webpackChunkReact_Modul_5_2||[]).push([[763],{763:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s,o=n(861),a=n(671),i=n(144),r=n(136),c=n(104),l=n(757),m=n.n(l),d=n(243),p=n(791),h=n(168),u=n(867).ZP.div(s||(s=(0,h.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  .loader {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n  }\n\n  .postList {\n    list-style: none;\n    padding: 0;\n    max-width: 450px;\n  }\n  .postListItem {\n    padding: 20px;\n    border: 2px solid black;\n    margin-bottom: 25px;\n    cursor: pointer;\n  }\n  .itemTitle {\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  .itemBody {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .error-bage {\n    padding: 25px;\n    border: 1px solid blue;\n    background-color: orange;\n    margin-bottom: 20px;\n    font-size: 20px;\n  }\n\n  .listWrapper {\n    display: flex;\n    gap: 20px;\n  }\n\n  .commentsList {\n    list-style: none;\n    padding: 0;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    position: sticky;\n    top: 15px;\n    max-height: 100vh;\n    /* overflow: overlay; */\n  }\n\n  .commentsListItem {\n    padding: 20px;\n    border: 2px solid green;\n    margin-bottom: 25px;\n  }\n\n  .commentTitle {\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  .commentEmail {\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n\n  .commentBody {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),x=n(263),g=n(87),f=n(184),b=function(t){(0,r.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,a.Z)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={posts:null,comments:null,selectedPostId:null,isLoading:!1,error:null},t.fetchPosts=(0,o.Z)(m().mark((function e(){var n,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setState({isLoading:!0}),e.next=4,d.Z.get("https://jsonplaceholder.typicode.com/posts");case 4:n=e.sent,s=n.data,t.setState({posts:s}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.setState({error:e.t0.message});case 12:return e.prev=12,t.setState({isLoading:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),t.fetchPostComments=(0,o.Z)(m().mark((function e(){var n,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setState({isLoading:!0}),e.next=4,d.Z.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(t.state.selectedPostId));case 4:n=e.sent,s=n.data,t.setState({comments:s}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.setState({error:e.t0.message});case 12:return e.prev=12,t.setState({isLoading:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),t.onSelecPostId=function(e){t.setState({selectedPostId:e})},t}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"componentDidUpdate",value:function(t,e){e.selectedPostId!==this.state.selectedPostId&&this.fetchPostComments()}},{key:"render",value:function(){return(0,f.jsxs)(u,{children:[(0,f.jsx)("h1",{children:"HTTP-requests"}),null!==this.state.error&&(0,f.jsxs)("p",{className:"error-bage",children:["Oops, some error occured... Error message: ",this.state.error]}),this.state.isLoading&&(0,f.jsx)(x.Z,{}),(0,f.jsxs)("div",{className:"listWrapper",children:[(0,f.jsx)("ul",{className:"postList",children:null!==this.state.posts&&this.state.posts.map((function(t){return(0,f.jsx)("li",{className:"postListItem",children:(0,f.jsxs)(g.rU,{to:"/posts/".concat(t.id),children:[(0,f.jsx)("h2",{className:"itemTitle",children:t.title}),(0,f.jsxs)("p",{className:"itemBody",children:[(0,f.jsx)("b",{children:"Body:"})," ",t.body]})]})},t.id)}))}),(0,f.jsxs)("ul",{className:"commentsList",children:[null!==this.state.selectedPostId&&(0,f.jsxs)("li",{className:"commentsListItem",children:["Selected post id: ",this.state.selectedPostId]}),null!==this.state.comments&&this.state.comments.map((function(t){return(0,f.jsxs)("li",{className:"commentsListItem",children:[(0,f.jsxs)("h2",{className:"commentTitle",children:["Name: ",t.name]}),(0,f.jsxs)("h3",{className:"commentEmail",children:["Email: ",t.email]}),(0,f.jsxs)("p",{className:"commentBody",children:[(0,f.jsx)("b",{children:"Body:"})," ",t.body]})]},t.id)}))]})]})]})}}]),n}(p.Component),v=b}}]);
//# sourceMappingURL=763.51802ba4.chunk.js.map