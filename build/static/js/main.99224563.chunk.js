(this.webpackJsonpContact=this.webpackJsonpContact||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(65),r=n.n(c),o=n(20),i=n(3),l=(n(165),n(166),n(0)),d=function(){return Object(l.jsx)("nav",{className:"col-md-2 side-bar",children:Object(l.jsxs)("div",{className:"sidebar-sticky",children:[Object(l.jsxs)(o.b,{className:"logo-link",to:"/dashboard",children:[Object(l.jsx)("span",{className:"img-wrap",children:Object(l.jsx)("img",{src:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg",alt:"Company Logos"})}),Object(l.jsx)("h5",{className:"logo-text",children:"Nonso"})]}),Object(l.jsxs)("ul",{className:" list-wrap flex-row-sm",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.c,{className:"nav-link",to:"/dashboard",children:[Object(l.jsx)("span",{children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"14px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home",children:[Object(l.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),Object(l.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]})})," ",Object(l.jsx)("span",{children:"Dashboard"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.c,{className:"nav-link",to:"/contact",children:[Object(l.jsxs)("span",{children:[" ",Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"14px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",children:[Object(l.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(l.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})]})," ",Object(l.jsx)("span",{children:"Add Contact"})]})})]})]})})},j=n(5),b=n(37),h=n.n(b),u=n(67),m=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},x=function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=5;break}return e.next=3,navigator.geolocation.getCurrentPosition(t);case 3:e.next=6;break;case 5:alert("Geolocation is not supported by this browser.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(45),p=Object(O.withScriptjs)(Object(O.withGoogleMap)((function(e){return Object(l.jsx)(O.GoogleMap,{defaultZoom:10,defaultCenter:e.position,children:e.isMarkerShown&&Object(l.jsx)(O.Marker,{position:e.position})})}))),f=n(155),g=n(156),v=n(160),w=n(158),N=function(e){Object(v.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{className:"text-center",children:"Map Could not be loaded"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(s.a.Component),y=function(){return Object(l.jsxs)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom",children:[Object(l.jsx)("h1",{className:"h2",children:"Dashboard"}),Object(l.jsxs)(o.b,{type:"button",className:"btn btn-primary",to:"/contact",children:[Object(l.jsx)("span",{children:Object(l.jsxs)("svg",{"data-v-75419b40":"","data-v-aa799a9e":"",xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"14px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-25 feather feather-plus",children:[Object(l.jsx)("line",{"data-v-75419b40":"","data-v-aa799a9e":"",x1:"12",y1:"5",x2:"12",y2:"19"}),Object(l.jsx)("line",{"data-v-75419b40":"","data-v-aa799a9e":"",x1:"5",y1:"12",x2:"19",y2:"12"})]})}),"Create new contact"]})]})},k=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),r=Object(j.a)(c,2),o=r[0],i=r[1],d=Object(a.useState)(""),b=Object(j.a)(d,2),h=b[0],u=b[1],m=function(e){if(e){var t=e.coords,n=t.latitude,a=t.longitude;i(n),u(a)}},O=function(e){var t=e.target,a=n.filter((function(e){return+e.id!==+t.id}));s(a),localStorage.setItem("contacts",JSON.stringify(a))};return Object(a.useEffect)((function(){m(),x(m);var e=JSON.parse(localStorage.getItem("contacts"));e&&0!==e.length?s(e):s([])}),[]),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsx)(y,{}),Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-striped ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Phone"}),Object(l.jsx)("th",{children:"Address"}),Object(l.jsx)("th",{children:"Longitude"}),Object(l.jsx)("th",{children:"Latitude"}),Object(l.jsx)("th",{children:"Delete"})]})}),Object(l.jsx)("tbody",{children:n&&n.length>0?n.map((function(e,t){var n=e.id,a=e.name,s=e.email,c=e.phone,r=e.address,o=e.lat,i=e.long;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t+1}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:o}),Object(l.jsx)("td",{children:i}),Object(l.jsx)("td",{id:n,className:"pointer",onClick:O,children:Object(l.jsx)("span",{id:n,children:Object(l.jsxs)("svg",{id:n,xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"14px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-50 feather feather-trash",children:[Object(l.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(l.jsx)("path",{id:n,d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})})]},n)})):Object(l.jsx)("tr",{className:"text-center",children:"Contact details is empty"})})]})}),Object(l.jsx)("div",{className:"map-box",children:Object(l.jsx)(N,{children:Object(l.jsx)(p,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(l.jsx)("div",{style:{height:"100%"}}),containerElement:Object(l.jsx)("div",{style:{height:"400px"}}),mapElement:Object(l.jsx)("div",{style:{height:"100%"}}),position:o&&h?{lat:o,lng:h}:{lat:6.5244,lng:3.3792}})})})]})},S=n(159),C=n(157),E=n.n(C),L=(n(373),function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),s=n[0],c=n[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(E.a,{value:s,onChange:function(t){c(t),e.tagsDetails(t)},inputProps:{placeholder:"Your address",className:"form-control"}})})}),W=(n(374),function(){return Object(l.jsxs)("div",{className:"contact-header flex-wrap flex-md-nowrap  pb-2 mb-3 border-bottom",children:[Object(l.jsx)("h1",{className:"h2",children:"Add contact"}),Object(l.jsxs)(o.b,{type:"button",className:"btn btn-primary",to:"/dashboard",children:[Object(l.jsxs)("span",{children:[" ",Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"14px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-eye",children:[Object(l.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(l.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})]}),Object(l.jsx)("span",{children:" View contact(s) "})]})]})}),A=Object(i.f)((function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),i=o[0],d=o[1],b=Object(a.useState)(""),O=Object(j.a)(b,2),p=O[0],f=O[1],g=Object(a.useState)(""),v=Object(j.a)(g,2),w=v[0],N=v[1],y=Object(a.useState)(""),k=Object(j.a)(y,2),C=k[0],E=k[1],A=Object(a.useState)(""),M=Object(j.a)(A,2),D=M[0],F=M[1],I=Object(a.useState)(!1),P=Object(j.a)(I,2),B=P[0],J=P[1],z=Object(a.useState)([]),R=Object(j.a)(z,2),U=R[0],V=R[1],Y=Object(a.useState)(!1),G=Object(j.a)(Y,2),H=G[0],Z=G[1],T=Object(a.useState)(!1),$=Object(j.a)(T,2),q=$[0],K=$[1],Q=Object(a.useState)(!1),X=Object(j.a)(Q,2),_=X[0],ee=X[1],te=Object(a.useState)(!1),ne=Object(j.a)(te,2),ae=ne[0],se=ne[1],ce=function(){var e=!0;return""===s&&(J(!1),Z(!0),e=!1),""!==i&&m(i)||(J(!1),K(!0),e=!1),""===p&&(J(!1),ee(!0),e=!1),0===w.length&&(J(!1),se(!0),e=!1),e},re=function(){var t=Object(u.a)(h.a.mark((function t(n){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(!0),n.preventDefault(),ce(),ce()&&(a={id:Date.now(),name:s,email:i,phone:p,address:w,lat:C,long:D},U.length>0?(c=[].concat(Object(S.a)(U),[a]),localStorage.setItem("contacts",JSON.stringify(c)),e.history.push("/dashboard")):(localStorage.setItem("contacts",JSON.stringify([a])),e.history.push("/dashboard")));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(e){if(e){var t=e.coords,n=t.latitude,a=t.longitude;E(n),F(a)}};return Object(a.useEffect)((function(){oe(),x(oe);var e=JSON.parse(localStorage.getItem("contacts"));e&&0!==e.length?V(e):V([])}),[]),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsx)(W,{}),Object(l.jsx)("div",{className:"form-container mb-3",children:Object(l.jsxs)("form",{onSubmit:re,children:[Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"name","aria-describedby":"name",placeholder:"Your Name",value:s,onChange:function(e){var t=e.target;c(t.value)}}),H&&s.length<2&&Object(l.jsx)("small",{id:"nameError",className:"form-text text-danger",children:"Name can not be empty & must be 2 digits or more"})]}),Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",id:"email",value:i,placeholder:"Your email",onChange:function(e){var t=e.target;d(t.value)}}),q&&!m(i)&&Object(l.jsx)("small",{id:"emailError",className:"form-text text-danger",children:"Email must be valid"})]}),Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsxs)("label",{htmlFor:"phone",children:["Phone  ",Object(l.jsx)("b",{children:"*(Valid 11 digits)"})]}),Object(l.jsx)("input",{type:"number",className:"form-control",id:"phone",placeholder:"Your Phone Number",value:p,onChange:function(e){var t=e.target;f(t.value)}}),_&&11!==p.length&&Object(l.jsx)("small",{id:"phoneError",className:"form-text text-danger",children:"Phone number must be valid"})]}),Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsxs)("label",{htmlFor:"address",children:["Address ",Object(l.jsx)("b",{children:"*(type your address & enter)"})]}),Object(l.jsx)(L,{tagsDetails:function(e){N(e)}}),ae&&0===w.length&&Object(l.jsx)("small",{id:"addressError",className:"form-text text-danger",children:"Address can not be empty"})]}),Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsx)("label",{htmlFor:"address",children:"Latitude"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"lat",placeholder:"Enter Latitude",value:C&&C,disabled:!0})]}),Object(l.jsxs)("div",{className:"form-group mb-3",children:[Object(l.jsx)("label",{htmlFor:"address",children:"Longitude"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"Enter Longitude",value:D&&D,disabled:!0})]}),Object(l.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[B&&Object(l.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(l.jsx)("span",{children:"Submit"})]})]})})]})})),M=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"app",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(d,{}),Object(l.jsx)("main",{role:"main",className:"col-md-10 main",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/dashboard",component:k}),Object(l.jsx)(i.a,{exact:!0,path:"/contact",component:A})]})})]})})})})},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(l.jsx)(M,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[375,1,2]]]);
//# sourceMappingURL=main.99224563.chunk.js.map