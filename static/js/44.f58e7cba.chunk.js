"use strict";(self.webpackChunkreact_router=self.webpackChunkreact_router||[]).push([[44],{44:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(523),c=n(931),o=n(152),d=n(791),r=n(995),m=n(853),a=n(997),u=n(184),l=function(e){var t=(0,d.useRef)(),n=(0,r.Z)(m.Ir,!0),s=n.sendRequest,c=n.data,l=n.error,i=n.status,h=(0,d.useState)(!1),x=(0,o.Z)(h,2),f=x[0],j=x[1];(0,d.useEffect)((function(){"completed"!==i||l||(e.onAddedComment(c),j(!1))}),[i,c,l,e]);var p=function(n){n.preventDefault(),j(!0),s({commentData:{text:t.current.value},quoteId:e.quoteId})};return(0,u.jsxs)("form",{className:"form form--layout",onSubmit:p,children:["pending"===i&&f&&(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(a.Z,{})}),(0,u.jsxs)("div",{className:"form form--layout",onSubmit:p,children:[(0,u.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,u.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,u.jsx)("div",{className:"actions",children:(0,u.jsx)("button",{className:"btn",children:"Add Comment"})})]})},i=function(e){return(0,u.jsxs)("li",{className:"comment-item",children:[(0,u.jsx)("p",{children:e.text}),(0,u.jsx)("button",{className:"btn",onClick:function(){e.deleteComment(e.commentId,e.quoteId)},children:"Delete"})]})},h=function(e){var t=function(t,n){e.updateComments(t,n)};return(0,u.jsx)("ul",{className:"comments comments--list",children:e.comments.map((function(n){return(0,u.jsx)(i,{text:n.text,commentId:n.id,quoteId:e.quoteId,deleteComment:t},n.id)}))})},x=function(e){var t,n=(0,c.UO)(),s=n.quoteId,i=(0,r.Z)(m.$W,!0),x=i.sendRequest,f=i.data,j=i.status,p=(0,d.useState)(!1),N=(0,o.Z)(p,2),q=N[0],I=N[1],C=(0,d.useCallback)((function(e){x({method:"fetch",quoteId:s}),I(!1)}),[x,s]);return(0,d.useEffect)((function(){x({method:"fetch",quoteId:s})}),[x,s]),"pending"===j&&(t=(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(a.Z,{})})),"completed"===j&&f&&f.length>0&&(t=(0,u.jsx)(h,{quoteId:s,comments:f,updateComments:function(e,t){x({method:"delete",quoteId:t,commentId:e})}})),"completed"===j&&f&&0===f.length&&(t=(0,u.jsx)("p",{className:"centered",children:"No comments were added yet!"})),(0,u.jsxs)("section",{className:"comments",children:[(0,u.jsx)("h2",{children:"User Comments"}),!q&&(0,u.jsx)("button",{className:"btn",onClick:function(){I(!0)},children:"Add a Comment"}),q&&(0,u.jsx)(l,{quoteId:n.quoteId,onAddedComment:C}),t]})},f=function(e){return(0,u.jsxs)("figure",{className:"quote",children:[(0,u.jsx)("p",{children:e.text}),(0,u.jsx)("figcaption",{children:e.author})]})},j=function(){var e=(0,c.$B)(),t=(0,c.UO)().quoteId,n=(0,r.Z)(m.jR,!0),o=n.sendRequest,l=n.data,i=n.error,h=n.status;return(0,d.useEffect)((function(){o(t)}),[o,t]),"pending"===h?(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(a.Z,{})}):i?(0,u.jsx)("p",{className:"centered focused",children:i}):l.text?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Quote detail"}),(0,u.jsx)(f,{author:l.author,text:l.text}),(0,u.jsx)(c.AW,{exact:!0,path:e.path,children:(0,u.jsx)(s.rU,{to:"".concat(e.url,"/comments"),className:"btn",children:"Show Comments"})}),(0,u.jsx)(c.AW,{path:"".concat(e.path,"/comments"),children:(0,u.jsx)(x,{})})]}):(0,u.jsx)("p",{children:"No Quote Found!"})}}}]);
//# sourceMappingURL=44.f58e7cba.chunk.js.map