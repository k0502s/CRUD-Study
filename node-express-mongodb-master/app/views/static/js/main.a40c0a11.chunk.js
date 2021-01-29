(this["webpackJsonpreact-hooks-crud"]=this["webpackJsonpreact-hooks-crud"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),o=a.n(c),r=a(8),i=a(7),s=(a(35),a(36),a(10)),u=a(12),m=a(5),d=a(27),b=a.n(d).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),p=function(){return b.get("/tutorials")},E=function(e){return b.get("/tutorials/".concat(e))},f=function(e){return b.post("/tutorials",e)},h=function(e,t){return b.put("/tutorials/".concat(e),t)},v=function(e){return b.delete("/tutorials/".concat(e))},g=function(){return b.delete("/tutorials")},N=function(e){return b.get("/tutorials?title=".concat(e))},j=function(){var e={id:null,title:"",description:"",published:!1},t=Object(n.useState)(e),a=Object(m.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),d=i[0],b=i[1],p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(u.a)({},c,Object(s.a)({},a,n)))};return l.a.createElement("div",{className:"submit-form"},d?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){o(e),b(!1)}},"Add")):l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:c.title,onChange:p,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:c.description,onChange:p,name:"description"})),l.a.createElement("button",{onClick:function(){var e={title:c.title,description:c.description};f(e).then((function(e){o({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published}),b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Submit")))},O=function(e){var t=Object(n.useState)({id:null,title:"",description:"",published:!1}),a=Object(m.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),d=i[0],b=i[1];Object(n.useEffect)((function(){var t;t=e.match.params.id,E(t).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(u.a)({},c,Object(s.a)({},a,n)))},f=function(e){var t={id:c.id,title:c.title,description:c.description,published:e};h(c.id,t).then((function(t){o(Object(u.a)({},c,{published:e})),console.log(t.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",null,c?l.a.createElement("div",{className:"edit-form"},l.a.createElement("h4",null,"Tutorial"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:c.title,onChange:p})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",name:"description",value:c.description,onChange:p})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("strong",null,"Status:")),c.published?"Published":"Pending")),c.published?l.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return f(!1)}},"UnPublish"):l.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return f(!0)}},"Publish"),l.a.createElement("button",{className:"badge badge-danger mr-2",onClick:function(){v(c.id).then((function(t){console.log(t.data),e.history.push("/tutorials")})).catch((function(e){console.log(e)}))}},"Delete"),l.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:function(){h(c.id,c).then((function(e){console.log(e.data),b("The tutorial was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update"),l.a.createElement("p",null,d)):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial...")))},k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(-1),b=Object(m.a)(d,2),E=b[0],f=b[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),j=v[0],O=v[1];Object(n.useEffect)((function(){k()}),[]);var k=function(){p().then((function(e){c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"list row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",value:j,onChange:function(e){var t=e.target.value;O(t)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){N(j).then((function(e){c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}},"Search")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h4",null,"Tutorials List"),l.a.createElement("ul",{className:"list-group"},a&&a.map((function(e,t){return l.a.createElement("li",{className:"list-group-item "+(t===E?"active":""),onClick:function(){return function(e,t){u(e),f(t)}(e,t)},key:t},e.title)}))),l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){g().then((function(e){console.log(e.data),k(),u(null),f(-1)})).catch((function(e){console.log(e)}))}},"Remove All")),l.a.createElement("div",{className:"col-md-6"},s?l.a.createElement("div",null,l.a.createElement("h4",null,"Tutorial"),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("strong",null,"Title:"))," ",s.title),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("strong",null,"Description:"))," ",s.description),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("strong",null,"Status:"))," ",s.published?"Published":"Pending"),l.a.createElement(r.b,{to:"/tutorials/"+s.id,className:"badge badge-warning"},"Edit")):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial..."))))};var y=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{href:"/tutorials",className:"navbar-brand"},"bezKoder"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/tutorials",className:"nav-link"},"Tutorials")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/add",className:"nav-link"},"Add")))),l.a.createElement("div",{className:"container mt-3"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/tutorials"],component:k}),l.a.createElement(i.a,{exact:!0,path:"/add",component:j}),l.a.createElement(i.a,{path:"/tutorials/:id",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(r.a,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a40c0a11.chunk.js.map