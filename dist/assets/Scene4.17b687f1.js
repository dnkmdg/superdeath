import{a as p,u as v,r as c,o,c as r,b as k,w as g,T as _,d as l,f as e,i as u,e as d,h as x,v as b,j as w,g as f}from"./index.f4c74834.js";const y="/assets/romolo.725ad7be.jpeg",D={class:"flex flex-col items-center justify-center w-screen h-screen"},N={key:0,class:"flex flex-col w-1/3 space-y-4"},B=e("p",null," Ingen i gruppen kan undg\xE5 den tryckande k\xE4nslan av \xE4ckel och obehag. Vad \xE4r det f\xF6r fasansfull plats ni hamnat p\xE5 egentligen? D\xF6d, pl\xE5ga och mis\xE4r - det finns inget s\xE4tt att undg\xE5 m\xF6rkret som inte bara omger er, utan nu ocks\xE5 har tagit f\xE4ste inom er. Ruttnande f\xF6rtvinande tankar b\xF6rjar f\xE5 f\xE4ste \xE4ven hos de starkaste i er grupp. ",-1),S=e("p",null," De ondskefulla vapen det talas om verkar dock harml\xF6sa inf\xF6r den syn som m\xF6ter er nu. I m\xF6rkret tar en sv\xE4vande cirkel form, en cirkel av outtydliga ord och tecken. Sakta sv\xE4var den mot er sakta \xF6kande i hastighet. Tyd orden innan det \xE4r f\xF6r sent. ",-1),T={class:"flex"},V=e("br",null,null,-1),M={key:1,class:"flex flex-col w-full h-full"},P=e("div",{class:"relative w-full h-full"},[e("img",{src:y,class:"absolute -translate-x-1/2 -translate-y-1/2 w-96 filter mix-blend-screen invert grayscale blend top-1/2 left-1/2"}),e("svg",{class:"absolute top-0 left-0 w-full h-screen text-sm animate-spin-slow",viewBox:"0 0 300 300"},[e("defs",null,[e("path",{id:"circlePath",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "}),e("filter",{id:"glow"},[e("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e("feMerge",null,[e("feMergeNode",{in:"coloredBlur"}),e("feMergeNode",{in:"SourceGraphic"})])])]),e("g",null,[e("use",{"xlink:href":"#circlePath",fill:"none"}),e("text",{fill:"#fff",filter:"url(#glow)"},[e("textPath",{"xlink:href":"#circlePath"},[f("PYG XWX\xD6XY EYDM\xD6LYH?\xA0\xA0-\xA0\xA0XYN P\xD6L "),e("tspan",{class:"font-icons"},"brutus"),f("\xA0\xA0-")])])])])],-1),C={class:"absolute top-[75vh] w-96 left-1/2 -translate-x-1/2"},G=["onKeyup"],X={__name:"Scene4",setup(Y){const m=p(),i=v();let s=c(1),a=c("");function h(){a.value.toLowerCase()!=="brutus"?i.doDeath():m.goToLevel({name:"scene.5"})}return(j,t)=>(o(),r("main",D,[k(_,{name:"fade"},{default:g(()=>[l(s)===1?(o(),r("div",N,[B,S,e("div",T,[e("button",{class:"p-1 mt-4 btn",onClick:t[0]||(t[0]=n=>u(s)?s.value=2:s=2)}," Titta n\xE4rmare p\xE5 cirkeln "),V,e("button",{class:"p-1 mt-4 ml-auto btn",onClick:t[1]||(t[1]=n=>l(i).doDeath())}," G\xF6m er bakom en stor sten ")])])):d("",!0),l(s)===2?(o(),r("div",M,[P,e("div",C,[x(e("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>u(a)?a.value=n:a=n),type:"text",class:"w-full",onKeyup:w(h,["enter"])},null,40,G),[[b,l(a)]])])])):d("",!0)]),_:1})]))}};export{X as default};
