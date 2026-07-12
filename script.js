const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(
".service-card,.project-card,.step,.why-card,.pricing-card,.testimonial,.faq-item,.glass-card"
).forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});

// ---------- Header ----------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(8,10,15,.92)";
header.style.boxShadow="0 18px 50px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(9,10,14,.55)";
header.style.boxShadow="none";

}

});

// ---------- Active Menu ----------

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-160;

if(pageYOffset>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ---------- Buttons ----------

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn,.card-btn")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// ---------- Tilt Cards ----------

document.querySelectorAll(".project-card,.service-card,.glass-card")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;
const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// ---------- Counter ----------

const counters=document.querySelectorAll(".hero-stats h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=counter.innerText;

let number=parseInt(target);

if(isNaN(number))return;

let current=0;

const step=Math.ceil(number/45);

const timer=setInterval(()=>{

current+=step;

if(current>=number){

counter.innerText=target;

clearInterval(timer);

}else{

counter.innerText=current+"+";

}

},25);

counterObserver.unobserve(counter);

});

});

counters.forEach(c=>counterObserver.observe(c));

// ---------- Inject CSS ----------

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

nav a.active{

color:#7C5CFF;

}

`;

document.head.appendChild(style);

console.log("Sasha Digital Premium Loaded");




const glow=document.createElement("div");

glow.className="cursor-glow";

if (document.body) {
    document.body.appendChild(glow);
}

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});


// ---------- Smooth Page Fade ----------

// document.body.style.opacity = "0";

window.addEventListener("load",()=>{

document.body.animate([

{opacity:0},
{opacity:1}

],{

duration:900,
fill:"forwards"

});

});


// ---------- Magnetic Buttons ----------

document.querySelectorAll(
".primary-btn,.secondary-btn,.nav-btn,.card-btn"
).forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/8;
const moveY=(y-rect.height/2)/8;

btn.style.transform=`translate(${moveX}px,${moveY}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});


// ---------- Portfolio Hover Glow ----------

document.querySelectorAll(".project-card")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

card.style.setProperty(
"--x",
(e.clientX-rect.left)+"px"
);

card.style.setProperty(
"--y",
(e.clientY-rect.top)+"px"
);

});

});


// ---------- Hero Parallax ----------

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.scrollY;

hero.style.backgroundPositionY=offset*.35+"px";

});


// ---------- Scroll Progress ----------

const progress=document.createElement("div");

progress.className="progress-bar";

if (document.body) {
    document.body.appendChild(progress);
}

window.addEventListener("scroll",()=>{

const h=document.documentElement;

const scrolled=(h.scrollTop)/(h.scrollHeight-h.clientHeight);

progress.style.width=scrolled*100+"%";

});


// ---------- Inject CSS ----------

const css=document.createElement("style");

css.innerHTML=`

.progress-bar{

position:fixed;

top:0;
left:0;

height:4px;

width:0;

background:linear-gradient(
90deg,
#7C5CFF,
#00D2FF
);

z-index:999999;

}

.cursor-glow{

position:fixed;

width:320px;
height:320px;

pointer-events:none;

border-radius:50%;

background:radial-gradient(circle,
rgba(124,92,255,.16),
transparent 70%);

transform:translate(-50%,-50%);

filter:blur(40px);

z-index:-1;

transition:left .08s linear,
top .08s linear;

}

.project-card{

position:relative;

overflow:hidden;

}

.project-card::before{

content:"";

position:absolute;

width:260px;
height:260px;

left:calc(var(--x) - 130px);

top:calc(var(--y) - 130px);

background:radial-gradient(circle,
rgba(255,255,255,.18),
transparent 70%);

opacity:0;

transition:.25s;

pointer-events:none;

}

.project-card:hover::before{

opacity:1;

}

`;

document.head.appendChild(css);

console.log("STEP 3.2 COMPLETE");




const bg=document.createElement("div");

bg.className="animated-bg";

if (document.body) {
    document.body.appendChild(bg);
}


// ==========================
// Cursor Ring
// ==========================

const ring=document.createElement("div");

ring.className="cursor-ring";

if (document.body) {
    document.body.appendChild(ring);
}

document.addEventListener("mousemove",(e)=>{

ring.style.left=e.clientX+"px";
ring.style.top=e.clientY+"px";

});


// ==========================
// Scroll Scale
// ==========================

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

document.querySelectorAll(".project-card")
.forEach((card,index)=>{

const speed=(index+1)*0.02;

card.style.transform=`
translateY(${scroll*speed}px)
`;

});

});


// ==========================
// Hero Float
// ==========================

const heroCard=document.querySelector(".glass-card");

if(heroCard){

setInterval(()=>{

heroCard.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:1

});

},3500);

}


// ==========================
// Section Fade
// ==========================

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(70px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards",

easing:"ease"

});

}

});

},{

threshold:.12

});

document.querySelectorAll("section")
.forEach(section=>{

fadeObserver.observe(section);

});


// ==========================
// Service Hover
// ==========================

document.querySelectorAll(".service-card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.04)"

},

{

transform:"scale(1.02)"

}

],{

duration:450,

fill:"forwards"

});

});

});


// ==========================
// CSS
// ==========================

const premium=document.createElement("style");

premium.innerHTML=`

.cursor-ring{

position:fixed;

width:24px;

height:24px;

border:2px solid #7C5CFF;

border-radius:50%;

pointer-events:none;

transform:translate(-50%,-50%);

transition:left .05s linear,
top .05s linear;

z-index:99999;

}

.animated-bg{

position:fixed;

inset:0;

background:

radial-gradient(circle at 20% 30%,
rgba(124,92,255,.08),
transparent 40%),

radial-gradient(circle at 80% 70%,
rgba(0,210,255,.08),
transparent 40%);

animation:bgMove 12s linear infinite alternate;

pointer-events:none;

z-index:-3;

}

@keyframes bgMove{

0%{

transform:scale(1);

}

100%{

transform:scale(1.15) rotate(2deg);

}

}

`;

document.head.appendChild(premium);

console.log("STEP 6.1 COMPLETE");




// =============================
// Loading Screen
// =============================

const loader=document.createElement("div");

loader.className="page-loader";

loader.innerHTML=`

<div class="loader-logo">

Sasha<span>Digital</span>

</div>

`;

if (document.body) {
    document.body.appendChild(loader);
}

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},800);

},900);

});


// =============================
// Smooth Number Animation
// =============================

document.querySelectorAll(".hero-stats h2").forEach(counter=>{

const finalText=counter.innerText;

const finalValue=parseInt(finalText);

if(isNaN(finalValue)) return;

let current=0;

const interval=setInterval(()=>{

current+=Math.ceil(finalValue/40);

if(current>=finalValue){

counter.innerText=finalText;

clearInterval(interval);

}else{

counter.innerText=current+"+";

}

},35);

});


// =============================
// Button Ripple
// =============================

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn")
.forEach(button=>{

button.style.position="relative";
button.style.overflow="hidden";

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


// =============================
// Floating Cards
// =============================

document.querySelectorAll(
".project-card,.service-card,.testimonial-card"
).forEach((card,index)=>{

setInterval(()=>{

card.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-6px)"
},

{
transform:"translateY(0px)"
}

],{

duration:3000+(index*400),

iterations:1,

easing:"ease-in-out"

});

},3200+(index*250));

});


// =============================
// CSS
// =============================

const finalEffects=document.createElement("style");

finalEffects.innerHTML=`

.page-loader{

position:fixed;

inset:0;

background:#07090d;

display:flex;

align-items:center;

justify-content:center;

z-index:999999;

transition:.8s;

}

.loader-logo{

font-size:48px;

font-weight:800;

letter-spacing:1px;

color:white;

}

.loader-logo span{

color:#7C5CFF;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.35);

transform:scale(0);

animation:ripple .7s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

html{

scroll-padding-top:100px;

}

::-webkit-scrollbar{

width:11px;

}

::-webkit-scrollbar-track{

background:#0d1016;

}

::-webkit-scrollbar-thumb{

background:#7C5CFF;

border-radius:100px;

}

::-webkit-scrollbar-thumb:hover{

background:#9578ff;

}

::selection{

background:#7C5CFF;

color:white;

}

`;

document.head.appendChild(finalEffects);

console.log("STEP 6.2 COMPLETE");




// ===============================
// Create Burger Button
// ===============================

const navigation=document.querySelector(".nav");

const burger=document.createElement("div");

burger.className="burger";

burger.innerHTML=`

<span></span>
<span></span>
<span></span>

`;

if (navigation) {
    navigation.appendChild(burger);
}


// ===============================
// Mobile Menu
// ===============================

const menu=document.querySelector("nav");

burger.addEventListener("click",()=>{

burger.classList.toggle("active");

menu.classList.toggle("mobile-open");

document.body.classList.toggle("lock-scroll");

});


// ===============================
// Close After Click
// ===============================

document.querySelectorAll("nav a")
.forEach(link=>{

link.addEventListener("click",()=>{

burger.classList.remove("active");

menu.classList.remove("mobile-open");

document.body.classList.remove("lock-scroll");

});

});


// ===============================
// Resize Fix
// ===============================

window.addEventListener("resize",()=>{

if(window.innerWidth>768){

burger.classList.remove("active");

menu.classList.remove("mobile-open");

document.body.classList.remove("lock-scroll");

}

});


// ===============================
// Inject CSS
// ===============================

const mobileMenuCSS=document.createElement("style");

mobileMenuCSS.innerHTML=`

.lock-scroll{

overflow:hidden;

}

.burger{

display:none;

width:34px;

cursor:pointer;

flex-direction:column;

gap:6px;

}

.burger span{

height:3px;

border-radius:20px;

background:white;

transition:.35s;

}

.burger.active span:nth-child(1){

transform:translateY(9px) rotate(45deg);

}

.burger.active span:nth-child(2){

opacity:0;

}

.burger.active span:nth-child(3){

transform:translateY(-9px) rotate(-45deg);

}

@media(max-width:768px){

.burger{

display:flex;

}

nav{

position:fixed;

top:74px;

left:0;

width:100%;

background:#0B0F15;

display:flex;

flex-direction:column;

align-items:center;

gap:28px;

padding:40px;

transform:translateY(-120%);

transition:.45s;

border-bottom:1px solid rgba(255,255,255,.05);

z-index:999;

}

nav.mobile-open{

transform:translateY(0);

}

nav a{

font-size:18px;

}

}

`;

document.head.appendChild(mobileMenuCSS);

console.log("STEP 7.2 COMPLETE");



"use strict";

// =============================
// Lazy Images
// =============================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});


// =============================
// Current Year
// =============================

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Sasha Digital. All Rights Reserved.`;

}


// =============================
// Disable Right Click (Optional)
// =============================

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});


// =============================
// Disable Drag Images
// =============================

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


// =============================
// Smooth Anchor Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


// =============================
// Navbar Hide/Show
// =============================

let lastScroll=0;

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>120){

navbar.style.transform="translateY(-100%)";

}else{

navbar.style.transform="translateY(0)";

}

lastScroll=current;

});


// =============================
// Console Signature
// =============================

console.clear();

console.log("%cSasha Digital",
"font-size:28px;font-weight:bold;color:#7C5CFF;");

console.log("%cPremium Website",
"font-size:14px;color:#00D2FF;");


// =============================
// Page Ready
// =============================

window.addEventListener("load",()=>{

document.body.classList.add("ready");

});


// =============================
// Inject Final CSS
// =============================

const finalCSS=document.createElement("style");

finalCSS.innerHTML=`

header{

transition:
transform .45s ease,
background .35s ease;

}

body.ready{

animation:fadeReady .8s ease;

}

@keyframes fadeReady{

from{

opacity:.97;

}

to{

opacity:1;

}

}

img{

user-select:none;

-webkit-user-drag:none;

}

button,
a{

-webkit-tap-highlight-color:transparent;

}

`;

document.head.appendChild(finalCSS);

console.log("Website Optimized Successfully");

/* ===========================================
END OF PROJECT
Sasha Digital Website v1.0
=========================================== */
