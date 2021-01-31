(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){e.exports=n(37)},25:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),c=n.n(a),o=n(17),r=n.n(o),l=n(4),u=n(18),s=n(19),i=n(22),m=n(20),p=n(23),h=(n(30),n(7)),d=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"landing"},c.a.createElement("div",{className:"landing-box"},c.a.createElement("h1",null,"Welcome to Sunshine Pets!"),c.a.createElement("p",null,"Our goal here is to match you with a pet who has been in our shelter the longest! First in first out as we like to say! Our pets are in high demand as they are the fluffiest, sweetest out there. Join the queue and select your pet preference. We know there is a perfect fit for you out there, so let Sunshine Pets find it for you!"),c.a.createElement("label",{className:"enter"},"Enter the Queue:"),c.a.createElement("input",{className:"name",type:"text",placeholder:"Your Name",value:this.props.name,onChange:function(t){return e.props.setName(t.target.value)}}),c.a.createElement(h.b,{to:"/Adopt/AdoptPageDog"},c.a.createElement("button",{className:"start-dog"},"Dream dog!")),c.a.createElement(h.b,{to:"/Adopt/AdoptPageCat"},c.a.createElement("button",{className:"start-cat"},"Dream cat!"))))}}]),t}(c.a.Component),f=(n(36),n(1)),E=(n(16),{API_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"http://localhost:8000"}),j=function(e){var t=e.pet;return null===t||void 0===t?"":c.a.createElement("div",{className:"pet-box"},e.isToggleOn?c.a.createElement("p",null," Your Perfect Match!"):"",e.isToggleOn?c.a.createElement("button",{className:"adoptButton"},"Adopt me!"):"",c.a.createElement("p",null,"Name: ",t.name),c.a.createElement("p",null,"Age: ",t.age),c.a.createElement("p",null,"Breed: ",t.breed),c.a.createElement("p",null,"Gender: ",t.gender),c.a.createElement("img",{src:t.imageURL,alt:t.description,className:"animalImg"}),c.a.createElement("p",null,"Desc: ",t.description),c.a.createElement("p",null,"Story: ",t.story))},b=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),i=s[0],m=s[1],p=Object(a.useState)(null),d=Object(l.a)(p,2),f=d[0],b=d[1],g=Object(a.useState)([]),O=Object(l.a)(g,2),N=O[0],v=O[1];Object(a.useEffect)((function(){i||fetch("".concat(E.API_URL,"/people/"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e.name})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then(P).catch((function(e){console.error({error:e})})),m(!0)}));var P=function(){fetch("".concat(E.API_URL,"/people/"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){v(e),y()}))},y=function(){fetch("".concat(E.API_URL,"/people/next"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){if(console.log("Next in queue: ".concat(t)),void 0===t||null===t||""==t)return Promise.reject("No next person found");t===e.name?(r(!0),A()):(A(),setTimeout(P,3e3))}))},A=function(){fetch("".concat(E.API_URL,"/pets/cats/next"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){b([e])}))};return c.a.createElement("div",{className:"adopt"},c.a.createElement("div",{className:"adopt-box"},c.a.createElement("div",{className:"button-flex"},c.a.createElement(h.b,{to:"/"},c.a.createElement("button",{className:"back"},"Home Page"))),c.a.createElement("div",{className:"user-queue"},c.a.createElement("h3",null,"Please Wait in the Queue"),c.a.createElement("div",{className:"user-name"},N.map((function(e){return c.a.createElement(c.a.Fragment,null,e,c.a.createElement("br",null))})))),c.a.createElement("div",{className:"animal"},f?f.map((function(e){return c.a.createElement(j,{pet:e,isToggleOn:o})})):"")))},g=function(e){var t=e.pet;return null===t||void 0===t?"":c.a.createElement("div",{className:"pet-box"},e.isToggleOn?c.a.createElement("p",null," Your Perfect Match!"):"",e.isToggleOn?c.a.createElement("button",{className:"adoptButton"},"Adopt me!"):"",c.a.createElement("p",null,"Name: ",t.name),c.a.createElement("p",null,"Age: ",t.age),c.a.createElement("p",null,"Breed: ",t.breed),c.a.createElement("p",null,"Gender: ",t.gender),c.a.createElement("img",{src:t.imageURL,alt:t.description,className:"animalImg"}),c.a.createElement("p",null,"Desc: ",t.description),c.a.createElement("p",null,"Story: ",t.story))},O=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),i=s[0],m=s[1],p=Object(a.useState)(null),d=Object(l.a)(p,2),f=d[0],j=d[1],b=Object(a.useState)([]),O=Object(l.a)(b,2),N=O[0],v=O[1];Object(a.useEffect)((function(){i||fetch("".concat(E.API_URL,"/people/"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e.name})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then(P).catch((function(e){console.error({error:e})})),m(!0)}));var P=function(){fetch("".concat(E.API_URL,"/people/"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){v(e),y()}))},y=function(){fetch("".concat(E.API_URL,"/people/next"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){if(console.log("Next in queue: ".concat(t)),void 0===t||null===t||""==t)return Promise.reject("No next person found");t===e.name?(r(!0),A()):(A(),setTimeout(P,3e3))}))},A=function(){fetch("".concat(E.API_URL,"/pets/dogs/next"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){j([e])}))};return c.a.createElement("div",{className:"adopt"},c.a.createElement("div",{className:"adopt-box"},c.a.createElement("div",{className:"button-flex"},c.a.createElement(h.b,{to:"/"},c.a.createElement("button",{className:"back"},"Home Page"))),c.a.createElement("div",{className:"user-queue"},c.a.createElement("h3",null,"Please Wait in the Queue"),c.a.createElement("div",{className:"user-name"},N.map((function(e){return c.a.createElement(c.a.Fragment,null,e,c.a.createElement("br",null))})))),c.a.createElement("div",{className:"animal"},f?f.map((function(e){return c.a.createElement(g,{pet:e,isToggleOn:o})})):"")))};var N=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/"},c.a.createElement(d,{name:n,setName:o})),c.a.createElement(f.a,{path:"/Adopt/AdoptPageCat"},c.a.createElement(b,{name:n})),c.a.createElement(f.a,{path:"/Adopt/AdoptPageDog"},c.a.createElement(O,{name:n})))))};r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d18de73a.chunk.js.map