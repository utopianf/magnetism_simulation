(this.webpackJsonpmagnetism=this.webpackJsonpmagnetism||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(13),n(3)),j=(n(14),n(8)),u=n.n(j),l=n(5),b=n(0),o=function(){var e=360,t=Object(a.useState)(.003),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(-15e-6),j=Object(s.a)(i,2),o=j[0],O=j[1],d=Object(a.useState)(12e-6),h=Object(s.a)(d,2),g=h[0],x=h[1],f=Object(a.useMemo)((function(){for(var t=new l.a(0,0),n=Array.from({length:e},(function(e,t){return 1*t})),a=Array.from({length:e},(function(){return Array.from({length:e},(function(){return 0}))})),r=new l.a(5,0),i=new l.a(5,0),s=1/0,j=0,O=0,d=0;d<e;d++){for(var h=0;h<e;h++)a[d][h]=c*r.dot(i)+o*r.y*r.y+g*i.y*i.y,a[d][h]-s<-1e-13&&(s=a[d][h],j=n[h],O=n[d]),i.rotateAround(t,1*Math.PI/180);r.rotateAround(t,1*Math.PI/180)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:["minE: ",s]}),Object(b.jsxs)("div",{children:["\u03b81: ",j]}),Object(b.jsxs)("div",{children:["\u03b82: ",O]}),Object(b.jsx)(u.a,{data:[{z:a,x:n,y:n,type:"contour",contours:{showlabels:!0,labelfont:{family:"Raleway",size:12,color:"white"}},colorbar:{title:"Energy",titleside:"right"}}],layout:{width:1080,height:720,title:"H = JS1\uff65S2 + \u03941|S1z|^2 + \u03942|S2z|^2",xaxis:{title:"\u03b81 (degree)"},yaxis:{title:"\u03b82 (degree)"}}})]})}),[c,o,g]),m=Object(a.useState)(c),y=Object(s.a)(m,2),v=y[0],p=y[1],S=Object(a.useState)(o),w=Object(s.a)(S,2),C=w[0],F=w[1],J=Object(a.useState)(g),A=Object(s.a)(J,2),k=A[0],z=A[1],I=function(e){switch(e.target.name){case"J":p(e.target.value);break;case"delta1":F(e.target.value);break;case"delta2":z(e.target.value)}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(v),O(C),x(k)},children:[Object(b.jsxs)("label",{children:["J",Object(b.jsx)("input",{type:"text",name:"J",value:v,onChange:I})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["\u03941",Object(b.jsx)("input",{type:"text",name:"delta1",value:C,onChange:I})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["\u03942",Object(b.jsx)("input",{type:"text",name:"delta2",value:k,onChange:I})]}),Object(b.jsx)("input",{type:"submit",value:"submit"})]}),f]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.d24f44c0.chunk.js.map