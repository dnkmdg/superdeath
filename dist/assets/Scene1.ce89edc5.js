import{a as v,u as x,r as m,o,c as r,b as i,w as k,T as g,d as a,i as f,e as c,h as w,v as y,f as e,j as b,_ as S}from"./index.f4c74834.js";import{_ as u}from"./GlitchButton.85807d17.js";const p="/assets/baphomet.7f3da572.svg",T={class:"flex flex-col items-center justify-center w-screen h-screen"},M={key:0,class:"flex flex-col w-1/3 space-y-4"},N=e("p",null," Efter att ha g\xE5tt n\xE5gra skr\xE4ckinjagande steg i den m\xF6rka skogen f\xE5r en uppm\xE4rksam sj\xE4l i s\xE4llskapet syn p\xE5 en port. ",-1),C=e("p",null," P\xE5 porten syns ett flertal m\xE4rkliga tecken och en sv\xE5rtydd text. En av era dumdristiga kamrater springer direkt fram till porten och b\xF6rjar leta efter ett handtag utan framg\xE5ng, och dras pl\xF6tsligt av en osynlig kraft in i porten. ",-1),E=e("p",null,"Det d\xE5nar en r\xF6st - som om den vore inuti era huvuden:",-1),P=e("p",{class:"text-lg italic font-semibold"},' "Era kr\xE4k! L\xF6s min g\xE5ta eller d\xF6." ',-1),j=e("p",null,"Paniken s\xE4tter in och ni b\xF6rjar genast unders\xF6ka porten n\xE4rmare.",-1),A={key:1,class:"flex flex-col items-center w-full h-full space-y-8 text-center text-white font-general"},B=e("div",{class:"relative"},[e("svg",{viewBox:"0 0 500 500",class:"text-white w-[35rem] absolute top-0 -left-[5.3rem]"},[e("path",{id:"curve",fill:"transparent",d:"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"}),e("text",{width:"500",fill:"#fff",class:"text-3xl"},[e("textPath",{"xlink:href":"#curve"}," MEUS AUCTOR EST \xC9LIPHAS ")])]),e("img",{src:p,class:"inline mt-24 w-96"})],-1),L=e("span",{class:"mt-4"}," S\xE4g mitt namn och skona era on\xF6diga liv: ",-1),R=["onKeyup"],U={key:2,class:"flex flex-col items-center w-full h-full space-y-8 text-center text-white font-general"},D=e("div",{class:"relative"},[e("svg",{viewBox:"0 0 500 500",class:"text-white w-[35rem] absolute top-0 -left-[5.3rem]"},[e("path",{id:"curve",fill:"transparent",d:"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"}),e("text",{width:"500",fill:"#fff",class:"text-3xl"},[e("textPath",{"xlink:href":"#curve"}," MIN SKAPARE \xC4R \xC9LIPHAS ")])]),e("img",{src:p,class:"inline mt-24 w-96"})],-1),I=e("span",{class:"mt-4"}," MITT NAMN \xC4R ",-1),K=e("p",{class:"w-64"}," Min f\xF6rbannelse \xE4r nu er. Tr\xE4d in genom min port och undanfly de satans demoner som nu flyger \xF6ver m\xE4nniskans sista kvarlevor. ",-1),F={__name:"Scene1",setup(V){const h=v(),_=x();let t=m(1),n=m("");function d(){n.value.toLowerCase()!=="baphomet"?_.doDeath():t.value=3}return($,s)=>(o(),r("main",T,[i(g,{name:"fade"},{default:k(()=>[a(t)===1?(o(),r("div",M,[N,C,E,P,j,i(u,{label:"Unders\xF6k porten",class:"mx-auto",onClick:s[0]||(s[0]=l=>f(t)?t.value=2:t=2)})])):c("",!0),a(t)===2?(o(),r("div",A,[B,L,w(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>f(n)?n.value=l:n=l),type:"text",onKeyup:b(d,["enter"])},null,40,R),[[y,a(n)]]),e("button",{class:"btn",onClick:d}," F\xF6rs\xF6k ")])):c("",!0),a(t)===3?(o(),r("div",U,[D,I,e("span",null,[i(S,{letter:"baphomet",class:"text-yellow shadow-cmyk","without-background":""})]),K,i(u,{label:"G\xE5 in i porten",onClick:s[2]||(s[2]=l=>a(h).goToLevel({name:"scene.2"}))})])):c("",!0)]),_:1})]))}};export{F as default};