(this["webpackJsonpdevice-test"]=this["webpackJsonpdevice-test"]||[]).push([[0],{23:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(17),o=c.n(a),i=(c(23),c(18)),s=c(2),j=c(7),b=c(8),l=c.n(b),d=c(10),u=c(4),O=c(11),v=c.n(O),x=(c(9),c(1));function f(){var e=Object(r.useState)({access:!1,recorder:null,error:""}),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({active:!1,available:!1,url:""}),o=Object(u.a)(a,2),i=o[0],s=o[1],b=Object(r.useRef)([]),O=Object(r.useRef)(null);Object(r.useEffect)((function(){h()}),[O]);var f=window.navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];console.log("browser",f[1]);var h=function(){navigator.mediaDevices.getUserMedia({audio:!0,video:{width:563,height:430}}).then((function(e){var t,c=O.current;c.muted=!0,c.setAttribute("playsinline",!0),c.srcObject=e,c.play();try{t=new MediaRecorder(e,{mimeType:"Safari"===f[1]?"video/mp4":"video/webm"})}catch(r){console.log(r)}t.stream.getTracks()[0].onended=function(){return console.log("ended")},t.onstart=function(){console.log("Video recording started"),s({active:!0,available:!1,url:""})},t.ondataavailable=function(e){console.log("data available",e.data),b.current.push(e.data)},t.onstop=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("stopped"),t=URL.createObjectURL(b.current[0]),console.log("url",t),b.current=[],s({active:!1,available:!0,url:t});case 5:case"end":return e.stop()}}),e)}))),n(Object(j.a)(Object(j.a)({},e),{},{access:!0,recorder:t}))})).catch((function(e){console.error("error:",e)}))};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"audio-container",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{disabled:i.active,onClick:function(){return!i.active&&c.recorder.start()},children:"Start Recording"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{disabled:!i.active,onClick:function(){return c.recorder.stop()},children:"Stop Recording"}),i.available&&Object(x.jsx)(v.a,{url:i.url,controls:!0,width:"300px",height:"300px",id:"reactPlayer"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("video",{id:"video",ref:O})]})}function h(){var e=Object(r.useState)({access:!1,recorder:null,error:""}),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({active:!1,available:!1,url:""}),o=Object(u.a)(a,2),i=o[0],s=o[1],b=Object(r.useRef)([]),O=window.navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];console.log("browser",O[1]);var v=function(){return"Safari"===O[1]?"audio/mp4":"audio/webm"};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),c.access?Object(x.jsxs)("div",{className:"audio-container",children:[Object(x.jsx)("button",{className:i.active?"active":null,disabled:i.active,onClick:function(){return!i.active&&c.recorder.start()},children:"Start Recording"}),i.active&&Object(x.jsx)("p",{children:"Recording in progress "}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{disabled:!i.active,onClick:function(){return c.recorder.stop()},children:"Stop Recording"}),i.available&&Object(x.jsx)("audio",{controls:!0,src:i.url})]}):Object(x.jsx)("button",{onClick:function(){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){alert("Got permission"),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t;try{t=new MediaRecorder(e,{mimeType:v()})}catch(r){console.log(r)}t.stream.getTracks()[0].onended=function(){return console.log("ended")},t.onstart=function(){s({active:!0,available:!1,url:""})},t.ondataavailable=function(e){console.log("data available"),b.current.push(e.data)},t.onstop=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("stopped"),t=URL.createObjectURL(b.current[0]),b.current=[],s({active:!1,available:!0,url:t});case 4:case"end":return e.stop()}}),e)}))),n(Object(j.a)(Object(j.a)({},c),{},{access:!0,recorder:t}))})).catch((function(e){console.log(e),n(Object(j.a)(Object(j.a)({},c),{},{error:e}))}))})).catch((function(e){console.error("Error accessing media devices.",e)}))},children:"Geta Mic Access"})]})}var g=function(){var e=Object(s.f)();return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){return e("/video")},children:"  Check video"}),Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){return e("/audio")},children:" Check audio"}),Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){return e("/playVideo")},children:" Play video"}),Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){return e("/face")},children:" Detect face"})]})},p=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(v.a,{url:"https://www.youtube.com/watch?v=GCsxgn4j8ag",controls:!0,width:"680px",height:"378px"})})};c(48),c(49);var m=function(){var e=r.useState(!1),t=Object(u.a)(e,2),c=(t[0],t[1]),n=r.useRef(null);r.useEffect((function(){o(),a()}),[n]);var a=function(){navigator.mediaDevices.getUserMedia({video:{width:350,height:350}}).then((function(e){var t=n.current;t.muted=!0,t.srcObject=e,t.setAttribute("playsinline",""),t.play()})).catch((function(e){console.error("error:",e)}))},o=function(){var e=document.getElementById("video"),t=document.getElementById("canvas"),r=t.getContext("2d"),n=new tracking.ObjectTracker(["face"]);tracking.track("#video",n,{}),n.on("track",(function(a){console.log(a),r.clearRect(0,0,"350","350"),a.data.forEach((function(a){if(console.log("react value ",a),r.strokeStyle="#F8E71C",r.lineWidth=2,r.strokeRect(a.x,a.y,"162","162"),a.x>110&&a.x<190&&a.y>110&&a.y<190){r.drawImage(e,0,0,"350","350");var o=t.toDataURL("image/jpeg");console.log(o),n.removeAllListeners(),c(!0)}}))}))};return Object(x.jsxs)("div",{className:"Container",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("video",{id:"video",ref:n,width:"350px",height:"350px"}),Object(x.jsx)("canvas",{id:"canvas",width:"350px",height:"350px"})]})},w=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(n.a.Fragment,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/device-test",element:Object(x.jsx)(g,{})}),Object(x.jsx)(s.a,{path:"/video",element:Object(x.jsx)(f,{})}),Object(x.jsx)(s.a,{path:"/audio",element:Object(x.jsx)(h,{})}),Object(x.jsx)(s.a,{path:"/playVideo",element:Object(x.jsx)(p,{})}),Object(x.jsx)(s.a,{path:"/face",element:Object(x.jsx)(m,{})})]})})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),r(e),n(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),k()},9:function(e,t,c){}},[[50,1,2]]]);
//# sourceMappingURL=main.dc22c586.chunk.js.map