(this.webpackJsonpwebdevapp=this.webpackJsonpwebdevapp||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),j=(c(10),c(2)),l=(c(11),c(12),c(0)),i=function(e){for(var t=e.name,c=e.capital,a=e.flag,n=e.region,s=e.subregion,r=e.population,j=[],i=0;i<e.borders.length;i++)i===e.borders.length-1?j[i]=" "+e.borders[i]+".":j[i]=" "+e.borders[i]+" ,";for(var b=[],o=0;o<e.languages.length;o++)o===e.languages.length-1?b[o]=" "+e.languages[o].name+".":b[o]=" "+e.languages[o].name+" ,";return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"a1",children:["Name: ",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("div",{className:"box1",children:[Object(l.jsxs)("p",{className:"a1",children:["Capital: ",Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("p",{className:"a1",children:["Flag: ",Object(l.jsx)("img",{src:a,alt:"",width:"100px"})]})]}),Object(l.jsxs)("p",{className:"a1",children:["Region: ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("p",{className:"a1",children:["Subregion: ",Object(l.jsx)("span",{children:s})," "]}),Object(l.jsxs)("p",{className:"a1",children:["Population: ",Object(l.jsx)("span",{children:r})]}),Object(l.jsxs)("p",{className:"a1",children:["Borders: ",Object(l.jsx)("span",{children:j})]}),Object(l.jsxs)("p",{className:"a1",children:["Languages: ",Object(l.jsx)("span",{children:b})," "]})]})},b=c(5);var o=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("India"),r=Object(j.a)(s,2),o=r[0],u=r[1],O=Object(a.useRef)(),d=Object(a.useState)(""),h=Object(j.a)(d,2),p=h[0],g=h[1],x=Object(a.useState)(""),f=Object(j.a)(x,2),m=f[0],v=f[1],N=Object(a.useState)(""),S=Object(j.a)(N,2),C=S[0],w=S[1],F=Object(a.useState)(""),k=Object(j.a)(F,2),y=k[0],A=k[1],B=Object(a.useState)(""),E=Object(j.a)(B,2),I=E[0],L=E[1],P=Object(a.useState)(""),R=Object(j.a)(P,2),T=R[0],D=R[1],J=Object(a.useState)(""),M=Object(j.a)(J,2),q=M[0],z=M[1],G=Object(a.useState)(""),H=Object(j.a)(G,2),K=H[0],Q=H[1];return Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat(o,"?fullText=true")).then((function(e){return e.json()})).then((function(e){g(e[0].name),v(e[0].capital),w(e[0].flag),A(e[0].region),L(e[0].subregion),D(e[0].population),z(e[0].borders),Q(e[0].languages)}))}),[o,c]),console.log(q),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("p",{className:"heado",children:"AAC DataCollecter App"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"cont",children:[Object(l.jsx)("input",{type:"search",placeholder:"Enter Country Name ",onChange:function(e){return e.target.value},ref:O}),Object(l.jsx)("div",{className:"searchcont",children:Object(l.jsx)("button",{onClick:function(){return u(O.current.value),void(O.current.value="")},className:"searche",children:Object(l.jsx)(b.a,{style:{width:"30px",height:"30px",color:"white"}})})}),Object(l.jsx)(i,{name:p,capital:m,flag:C,region:y,subregion:I,population:T,borders:q,languages:K}),Object(l.jsx)("button",{onClick:function(){return n(c+1)},className:"btn1",children:"Refresh"})]})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.6cd8f091.chunk.js.map