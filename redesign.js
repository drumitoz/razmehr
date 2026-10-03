/* RAZMEHR redesign layer. To switch it off, remove the redesign.js <script> line from index.html. */
(function(){
'use strict';
var root=document.documentElement;
var boot=document.createElement('style');
boot.textContent="html:not(.rd-booted)::before{content:\"\";position:fixed;inset:0;z-index:99999;background:#F7F3EA url(img/logo.png) center/78px no-repeat}";
document.head.appendChild(boot);
setTimeout(function(){root.classList.add('rd-booted','rd-ready');},4000);
var CSS=":root{--rd-ease:cubic-bezier(.16,1,.3,1);--rd-radius:26px;--rd-rainbow:linear-gradient(90deg,#D14A6E,#8E4FB0,#4E6FC0,#3FA3AE,#5FB877,#C9B45E);}html{scroll-padding-top:90px}::selection{background:var(--gold-soft);color:var(--ink)}.footer-col a[data-lang]{display:none}body.lang-fa .footer-col a[data-lang=\"fa\"],body.lang-tr .footer-col a[data-lang=\"tr\"],body.lang-en .footer-col a[data-lang=\"en\"],body.lang-ar .footer-col a[data-lang=\"fa\"]{display:block}.rd-loader{position:fixed;inset:0;z-index:9999;background:var(--cream);display:grid;place-items:center;transition:clip-path 1.1s var(--rd-ease),visibility 0s 1.1s;clip-path:inset(0 0 0 0);}.rd-loader.done{clip-path:inset(0 0 100% 0);visibility:hidden}.rd-loader-inner{display:flex;flex-direction:column;align-items:center;gap:22px}.rd-loader img{width:78px;height:78px;border-radius:50%;opacity:0;transform:scale(.85);animation:rdLogoIn .9s var(--rd-ease) .1s forwards}.rd-loader-word{font-family:var(--font-display);letter-spacing:.55em;padding-left:.55em;font-size:15px;color:var(--sage-deep);opacity:0;animation:rdFade .8s ease .35s forwards}.rd-loader-bar{width:140px;height:2px;border-radius:2px;background:rgba(95,107,66,.14);overflow:hidden}.rd-loader-bar::after{content:\"\";display:block;height:100%;background:var(--rd-rainbow);transform:scaleX(0);transform-origin:left;animation:rdBar 1s var(--rd-ease) .25s forwards}@keyframes rdLogoIn{to{opacity:1;transform:scale(1)}}@keyframes rdFade{to{opacity:1}}@keyframes rdBar{to{transform:scaleX(1)}}.rd-cursor,.rd-cursor-dot{position:fixed;top:0;left:0;pointer-events:none;z-index:9998;border-radius:50%;opacity:0}.rd-cursor{width:38px;height:38px;margin:-19px 0 0 -19px;border:1px solid rgba(95,107,66,.55);transition:opacity .3s,width .35s var(--rd-ease),height .35s var(--rd-ease),margin .35s var(--rd-ease),background .35s,border-color .35s}.rd-cursor-dot{width:6px;height:6px;margin:-3px 0 0 -3px;background:var(--gold);transition:opacity .3s}body.rd-has-cursor .rd-cursor,body.rd-has-cursor .rd-cursor-dot{opacity:1}.rd-cursor.is-hover{width:64px;height:64px;margin:-32px 0 0 -32px;background:rgba(194,163,94,.12);border-color:rgba(194,163,94,.5)}.rd-progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:200;background:var(--rd-rainbow);transform-origin:right;transform:scaleX(0);pointer-events:none}body.lang-en .rd-progress,body.lang-tr .rd-progress{transform-origin:left}header{transition:background .5s,padding .5s var(--rd-ease),box-shadow .5s,transform .5s var(--rd-ease)}header.rd-hide{transform:translateY(-110%)}header .brand-logo{border-radius:50%;transition:transform .6s var(--rd-ease)}header .brand:hover .brand-logo{transform:rotate(-12deg) scale(1.06)}@media(max-width:720px){header .search-label{display:none!important}header .search-btn{width:42px;height:42px;padding:0}header .cart-btn{width:42px;height:42px;padding:0;justify-content:center}header .cart-btn>span[data-lang]{display:none!important}header .cart-btn svg{width:19px;height:19px}}.hero-visual{perspective:1200px;width:100%;max-width:min(460px,calc((100svh - 200px) * .8));margin-inline:auto}.hero-frame{transform-style:preserve-3d;transition:transform .8s var(--rd-ease)}.hero-frame img{transform:scale(1.18);animation:rdKenBurns 2.4s var(--rd-ease) .5s forwards}@keyframes rdKenBurns{to{transform:scale(1.02)}}.hero-visual::before,.hero-visual::after{content:\"\";position:absolute;pointer-events:none;clip-path:inset(100% 0 0 0)}.hero-visual::before{inset:-16px;z-index:-1;border:1px solid rgba(194,163,94,.6);border-radius:200px 200px 32px 32px;animation:rdArchDraw 1.8s var(--rd-ease) .9s forwards;}.hero-visual::after{inset:-34px;z-index:-2;border:1px dashed rgba(126,139,87,.3);border-radius:200px 200px 42px 42px;animation:rdArchDraw 2.2s var(--rd-ease) 1.1s forwards;}@keyframes rdArchDraw{to{clip-path:inset(0 0 0 0)}}.hero-branch{display:none}.hero-badge{bottom:-30px!important;z-index:4;animation:rdFloat 6s ease-in-out infinite}@keyframes rdFloat{0%,100%{translate:0 0}50%{translate:0 -8px}}.rd-ticker{position:absolute;top:-46px;left:-10px;width:min(300px,78%);height:26px;z-index:4;overflow:hidden;pointer-events:none;direction:ltr;unicode-bidi:isolate;-webkit-mask-image:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent);mask-image:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent);}.rd-ticker span{position:absolute;top:50%;left:0;white-space:nowrap;font-family:'Marcellus',serif;font-size:13px;letter-spacing:.32em;color:var(--sage-deep);transform:translate(-100%,-50%);animation:rdTicker 9s cubic-bezier(.45,0,.55,1) 1.6s infinite;}@keyframes rdTicker{0%{transform:translate(-100%,-50%);opacity:0}20%{opacity:.35}50%{opacity:1}80%{opacity:.35}100%{transform:translate(min(300px,100vw),-50%);opacity:0}}.rd-scroll-cue{position:absolute;bottom:30px;left:50%;translate:-50% 0;z-index:3;width:26px;height:42px;border:1px solid rgba(95,107,66,.4);border-radius:20px;}.rd-scroll-cue::after{content:\"\";position:absolute;top:8px;left:50%;width:3px;height:8px;margin-left:-1.5px;border-radius:3px;background:var(--sage-deep);animation:rdCue 1.8s ease-in-out infinite;}@keyframes rdCue{0%{opacity:0;transform:translateY(0)}35%{opacity:1}100%{opacity:0;transform:translateY(14px)}}.rd-ready .hero-content>*{opacity:0;transform:translateY(34px);animation:rdRise 1.1s var(--rd-ease) forwards}.rd-ready .hero-content>*:nth-child(1){animation-delay:.55s}.rd-ready .hero-content>*:nth-child(2){animation-delay:.68s}.rd-ready .hero-content>*:nth-child(3){animation-delay:.82s}.rd-ready .hero-content>*:nth-child(4){animation-delay:.94s}.rd-ready .hero-content>*:nth-child(5){animation-delay:1.06s}.rd-ready .hero-content>*:nth-child(6){animation-delay:1.18s}@keyframes rdRise{to{opacity:1;transform:none}}.hero .reveal{opacity:1;transform:none;filter:none}.rd-marquee{position:relative;overflow:hidden;background:var(--paper);border-block:1px solid var(--line);padding:22px 0;direction:ltr}.rd-marquee-track{display:flex;width:max-content;animation:rdMarquee 38s linear infinite}.rd-marquee:hover .rd-marquee-track{animation-play-state:paused}.rd-marquee-group{display:flex;align-items:center;flex-shrink:0}.rd-marquee-item{display:flex;align-items:center;gap:34px;padding-inline:34px;white-space:nowrap;direction:rtl;font-size:clamp(22px,3vw,40px);font-weight:700;color:var(--ink);}.rd-marquee-item.is-outline{color:transparent;-webkit-text-stroke:1px rgba(95,107,66,.55)}.rd-marquee-star{width:22px;height:22px;flex-shrink:0;color:var(--gold)}@keyframes rdMarquee{to{transform:translateX(-50%)}}section{padding:120px 0}.sec-head{max-width:760px;margin-bottom:64px}.sec-head h2{font-size:clamp(34px,5vw,64px);line-height:1.12}body.lang-fa .sec-head h2{line-height:1.3}.sec-eyebrow{padding:7px 16px 7px 14px;border:1px solid rgba(126,139,87,.22);border-radius:40px;background:rgba(255,255,255,.5)}.reveal{opacity:0;transform:translateY(46px);filter:blur(6px);transition:opacity 1.1s var(--rd-ease),transform 1.1s var(--rd-ease),filter 1.1s var(--rd-ease)}.reveal.in{opacity:1;transform:none;filter:none}.rd-stagger>*{opacity:0;transform:translateY(30px);transition:opacity .9s var(--rd-ease),transform .9s var(--rd-ease)}.rd-stagger.rd-in>*{opacity:1;transform:none}.rd-magnetic{transition:transform .5s var(--rd-ease),background .35s,color .35s,box-shadow .35s!important}.pillar::before{opacity:1!important;transform:none!important;background:radial-gradient(380px circle at var(--mx,50%) var(--my,0%),rgba(194,163,94,.22),transparent 45%)!important;}.pillar:not(:hover)::before{opacity:0!important}.master-photo img{transform:scale(1.12);transition:transform 1.6s var(--rd-ease)}.master-visual.in .master-photo img{transform:scale(1)}.cred{transition:transform .5s var(--rd-ease),box-shadow .5s!important}.cred:hover{transform:translateY(-4px)!important;box-shadow:0 20px 40px -24px rgba(22,21,15,.4)!important}.academy-entry{position:relative;overflow:hidden;transition:transform .5s var(--rd-ease),box-shadow .5s!important}.academy-entry::after{content:\"\";position:absolute;top:0;bottom:0;width:40%;left:-60%;pointer-events:none;background:linear-gradient(100deg,transparent,rgba(255,255,255,.3),transparent);animation:rdSheen 3.6s ease-in-out infinite;}@keyframes rdSheen{0%,55%{left:-60%}100%{left:130%}}.academy-entry:hover{transform:translateY(-4px) scale(1.01)}.live-course{transition:transform .5s var(--rd-ease),box-shadow .5s!important}.live-course:hover{transform:translateY(-5px)}#svcList .svc-item{padding:0;gap:0;border-radius:var(--rd-radius);overflow:hidden;isolation:isolate;transition:transform .7s var(--rd-ease),box-shadow .7s var(--rd-ease),border-color .5s;}#svcList .svc-item::before{display:none}#svcList .svc-item:hover{transform:translateY(-8px);box-shadow:0 34px 60px -34px rgba(22,21,15,.5)}#svcList .svc-top{position:relative;display:block}#svcList .svc-thumb-slider{width:100%;height:auto;aspect-ratio:1/1.08;border-radius:0;border:none}#svcList .svc-thumb-slider img{transition:opacity .9s ease,transform 6s linear}#svcList .svc-item:hover .svc-thumb-slider img.is-active{transform:scale(1.07)}#svcList .svc-thumb-slider::after{content:\"\";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(22,21,15,0) 40%,rgba(22,21,15,.45) 70%,rgba(22,21,15,.86));}#svcList .svc-num{position:absolute;top:16px;z-index:3;width:auto;opacity:1;font-size:13px;padding:4px 12px;border-radius:30px;color:var(--ink);background:rgba(251,249,243,.85);backdrop-filter:blur(8px);}body.lang-fa #svcList .svc-num,body.lang-ar #svcList .svc-num{right:16px}body.lang-en #svcList .svc-num,body.lang-tr #svcList .svc-num{left:16px}#svcList .svc-info{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:0 22px 18px}#svcList .svc-info h4{color:#fff;font-size:22px;font-weight:700;margin-bottom:2px}#svcList .svc-info p{color:rgba(255,255,255,.8);font-size:13px}#svcList .svc-arrow{display:none}#svcList .svc-actions{padding:14px 16px 16px}#svcList .svc-btn{border-radius:40px}#svcList.svc-grid{grid-template-columns:repeat(3,1fr);gap:22px}.rd-hs{position:relative}.rd-hs-sticky{position:sticky;top:0;height:100svh;overflow:clip;display:flex;flex-direction:column;justify-content:center;gap:28px;padding:84px 0 26px;}.rd-hs-sticky .sec-head{margin-bottom:0}.rd-hs-sticky .sec-head h2{font-size:clamp(30px,4vw,52px);margin-bottom:8px}.rd-hs-sticky .sec-head p{font-size:14.5px}#svcList.svc-grid.rd-rail{display:flex;grid-template-columns:none;gap:22px;width:max-content;will-change:transform;padding:6px 4px 10px;}#svcList.rd-rail .svc-item{flex:0 0 var(--rd-card-w,320px)}#svcList.rd-rail .svc-thumb-slider{aspect-ratio:auto;height:var(--rd-img-h,340px)}.rd-hs-bar{position:relative;height:3px;border-radius:3px;background:rgba(95,107,66,.14);overflow:hidden;width:min(320px,60%);margin:0 auto}.rd-hs-bar span{position:absolute;inset:0;background:var(--rd-rainbow);transform:scaleX(0);transform-origin:right}body.lang-en .rd-hs-bar span,body.lang-tr .rd-hs-bar span{transform-origin:left}.product-card{transition:transform .7s var(--rd-ease),box-shadow .7s var(--rd-ease),border-color .5s!important}.product-card:hover{transform:translateY(-10px)!important;box-shadow:0 36px 64px -38px rgba(22,21,15,.5)!important}.product-img img{transition:transform .9s var(--rd-ease)!important}.product-card:hover .product-img img{transform:scale(1.06) translateY(-4px)!important}.bn-card{transition:transform .7s var(--rd-ease),box-shadow .7s!important}.bn-card img{transition:transform 1.4s var(--rd-ease)!important}.bn-card:hover{transform:translateY(-8px)}.bn-card:hover img{transform:scale(1.08)!important}@media(min-width:901px){.bn-grid{grid-template-columns:1.35fr 1fr!important;grid-template-rows:1fr 1fr}.bn-card:first-child{grid-row:1/3;min-height:620px!important}.bn-card:not(:first-child){min-height:290px!important}}.yazd-home figure{overflow:hidden}.yazd-home figure img{transition:transform 1.4s var(--rd-ease)}.yazd-home figure:hover img{transform:scale(1.05)}.contact-form input,.contact-form select,.contact-form textarea{transition:border-color .35s,box-shadow .35s,background .35s!important}.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{outline:none;border-color:var(--gold)!important;background:#fff!important;box-shadow:0 0 0 4px rgba(194,163,94,.18)!important}.cmethod{transition:transform .5s var(--rd-ease),border-color .4s,background .4s!important}.cmethod:hover{transform:translateX(-6px)}body.lang-en .cmethod:hover,body.lang-tr .cmethod:hover{transform:translateX(6px)}footer{position:relative;overflow:hidden;padding-bottom:0!important}.rd-wordmark{font-family:var(--font-display);font-size:clamp(64px,17vw,250px);line-height:.8;letter-spacing:.06em;text-align:center;margin-top:50px;user-select:none;pointer-events:none;direction:ltr;color:transparent;-webkit-text-stroke:1px rgba(194,163,94,.28);background:linear-gradient(180deg,rgba(194,163,94,.2),transparent 85%);-webkit-background-clip:text;background-clip:text;transform:translateY(12%);}.footer-col a{transition:color .3s,transform .4s var(--rd-ease)!important}.footer-col a:hover{transform:translateX(-4px)}.wa-float{transition:transform .5s var(--rd-ease),opacity .4s!important}.wa-float::before{content:\"\";position:absolute;inset:0;border-radius:50%;border:2px solid #25D366;animation:rdPulse 2.6s ease-out infinite}@keyframes rdPulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.7);opacity:0}}.rd-mbar{display:none}@media(max-width:720px){.wa-float{display:none!important}.rd-mbar{position:fixed;left:50%;bottom:calc(14px + env(safe-area-inset-bottom));z-index:150;display:flex;gap:5px;padding:5px;border-radius:40px;background:rgba(251,249,243,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--line);box-shadow:0 14px 30px -14px rgba(22,21,15,.45);transform:translate(-50%,160%);transition:transform .6s var(--rd-ease);}.rd-mbar.show{transform:translate(-50%,0)}.rd-mbar a,.rd-mbar button{display:flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;height:36px;padding:0 14px;border-radius:30px;font-size:12.5px;font-weight:600;font-family:var(--font-fa);}.rd-mbar svg{width:15px;height:15px;flex-shrink:0}.rd-mbar .rd-mbar-book{background:var(--sage-deep);color:var(--cream)}.rd-mbar .rd-mbar-wa{background:#25D366;color:#fff}}@media(max-width:960px){#svcList.svc-grid:not(.rd-rail){grid-template-columns:repeat(2,1fr)}}@media(max-width:720px){section{padding:90px 0}.hero-visual{max-width:310px}.rd-ticker{top:-40px;left:0;width:82%}.rd-scroll-cue{display:none}.hero-badge{bottom:-24px!important}.rd-hs-sticky{gap:18px;padding:74px 0 20px}.rd-hs-sticky .sec-head p{display:none}#svcList.rd-rail{gap:14px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.rd-marquee-track{animation:none}.reveal,.rd-stagger>*{opacity:1;transform:none;filter:none}.rd-cursor,.rd-cursor-dot{display:none}}";
function start(){
var style=document.createElement('style');
style.id='rd-styles';
style.textContent=CSS;
document.head.appendChild(style);
var loader=document.createElement('div');
loader.className='rd-loader';
loader.setAttribute('aria-hidden','true');
loader.innerHTML='<div class="rd-loader-inner"><img src="img/logo.png" alt=""><div class="rd-loader-word">RAZMEHR</div><div class="rd-loader-bar"></div></div>';
document.body.prepend(loader);
root.classList.add('rd-booted');
main();
}
function main(){
'use strict';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const isRTL = () => document.body.classList.contains('lang-fa') || document.body.classList.contains('lang-ar');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
function finishLoader(){
const loader = $('.rd-loader');
document.documentElement.classList.add('rd-ready');
if(loader && !loader.classList.contains('done')){
loader.classList.add('done');
setTimeout(() => loader.remove(), 1300);
}
}
const loaderStart = performance.now();
window.addEventListener('load', () => {
const wait = Math.max(0, 1100 - (performance.now() - loaderStart));
setTimeout(finishLoader, reduceMotion ? 0 : wait);
});
setTimeout(finishLoader, 3200); // never block the page
const progress = document.createElement('div');
progress.className = 'rd-progress';
document.body.appendChild(progress);
const header = $('#header');
let lastY = window.scrollY;
let ticking = false;
function onScroll(){
const y = window.scrollY;
const max = document.documentElement.scrollHeight - innerHeight;
progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
const menuOpen = $('#navLinks')?.classList.contains('open');
if(header && !menuOpen){
if(y > 700 && y > lastY + 4) header.classList.add('rd-hide');
else if(y < lastY - 4 || y < 700) header.classList.remove('rd-hide');
}
lastY = y;
parallax(y);
toggleMobileBar(y);
ticking = false;
}
window.addEventListener('scroll', () => {
if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
}, {passive:true});
const hero = $('.hero');
const heroVisual = $('.hero-visual');
const heroFrame = $('.hero-frame');
if(heroVisual){
const ticker = document.createElement('div');
ticker.className = 'rd-ticker';
ticker.setAttribute('aria-hidden', 'true');
ticker.innerHTML = '<span>RAZMEHR · BEAUTY GARDEN · YAZD</span>';
heroVisual.appendChild(ticker);
}
if(hero){
const cue = document.createElement('a');
cue.className = 'rd-scroll-cue';
cue.href = '#master';
cue.setAttribute('aria-label', 'scroll');
hero.appendChild(cue);
}
if(hero && heroFrame && finePointer && !reduceMotion){
hero.addEventListener('mousemove', e => {
const r = hero.getBoundingClientRect();
const x = (e.clientX - r.left) / r.width - .5;
const y = (e.clientY - r.top) / r.height - .5;
heroFrame.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
});
hero.addEventListener('mouseleave', () => { heroFrame.style.transform = ''; });
}
const parallaxItems = [
{el: heroVisual, speed: .12, max: innerHeight * 1.2},
{el: $('.hero-content'), speed: -.06, max: innerHeight * 1.2},
{el: $('.master-photo'), speed: -.06},
{el: $('.yazd-home figure img'), speed: -.05}
].filter(item => item.el);
function parallax(y){
if(reduceMotion) return;
parallaxItems.forEach(item => {
if(item.max){
if(y > item.max) return;
item.el.style.translate = `0 ${y * item.speed}px`;
return;
}
const r = item.el.getBoundingClientRect();
if(r.bottom < -200 || r.top > innerHeight + 200) return;
const center = r.top + r.height / 2 - innerHeight / 2;
item.el.style.translate = `0 ${center * item.speed}px`;
});
}
const tag = $('.hero-tag');
if(hero && tag){
const band = document.createElement('div');
band.className = 'rd-marquee';
band.setAttribute('aria-hidden', 'true');
const star = '<svg class="rd-marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z"/></svg>';
const group = () => {
const g = document.createElement('div');
g.className = 'rd-marquee-group';
for(let i = 0; i < 4; i++){
const item = document.createElement('div');
item.className = 'rd-marquee-item' + (i % 2 ? ' is-outline' : '');
item.innerHTML = tag.innerHTML + star;
g.appendChild(item);
}
return g;
};
const track = document.createElement('div');
track.className = 'rd-marquee-track';
track.append(group(), group());
band.appendChild(track);
hero.after(band);
}
$$('.pillar').forEach(card => {
card.addEventListener('mousemove', e => {
const r = card.getBoundingClientRect();
card.style.setProperty('--mx', `${e.clientX - r.left}px`);
card.style.setProperty('--my', `${e.clientY - r.top}px`);
});
});
const groups = new Map();
$$('.reveal').forEach(el => {
const parent = el.parentElement;
if(!groups.has(parent)) groups.set(parent, []);
groups.get(parent).push(el);
});
groups.forEach(list => {
if(list.length > 1) list.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i, 6) * 110}ms`; });
});
const staggerIO = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(!entry.isIntersecting) return;
entry.target.classList.add('rd-in');
staggerIO.unobserve(entry.target);
});
}, {threshold:.15});
$$('.cred-grid, .countries, .lc-facts').forEach(container => {
container.classList.add('rd-stagger');
Array.from(container.children).forEach((child, i) => { child.style.transitionDelay = `${Math.min(i, 8) * 80}ms`; });
staggerIO.observe(container);
});
const toLatin = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
function countUp(node){
const textNode = Array.from(node.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim());
if(!textNode) return;
const original = textNode.nodeValue;
const match = original.match(/[0-9۰-۹٠-٩][0-9۰-۹٠-٩٬,.]*/);
if(!match) return;
const target = parseInt(toLatin(match[0]).replace(/[٬,.]/g, ''), 10);
if(!target) return;
const persian = /[۰-۹]/.test(match[0]);
const grouped = /[٬,.]/.test(match[0]);
const fmt = v => {
if(persian) return grouped ? v.toLocaleString('fa-IR') : v.toLocaleString('fa-IR', {useGrouping:false});
return grouped ? v.toLocaleString(node.dataset.lang === 'tr' ? 'tr-TR' : 'en-US') : String(v);
};
const start = performance.now();
const duration = 1800;
const step = now => {
const t = Math.min(1, (now - start) / duration);
const eased = 1 - Math.pow(1 - t, 4);
if(t < 1){
textNode.nodeValue = original.replace(match[0], fmt(Math.round(target * eased)));
requestAnimationFrame(step);
} else {
textNode.nodeValue = original;
}
};
requestAnimationFrame(step);
}
const stats = $('.hero-stats');
if(stats && !reduceMotion){
const run = () => $$('.hero-stat .num', stats).filter(n => n.offsetParent !== null).forEach(countUp);
const waitForReady = () => document.documentElement.classList.contains('rd-ready') ? setTimeout(run, 1200) : setTimeout(waitForReady, 120);
waitForReady();
}
if(finePointer && !reduceMotion){
$$('.btn-primary, .btn-ghost, .cart-btn, .svc-cta-btn, .bn-all, .form-submit').forEach(btn => {
btn.classList.add('rd-magnetic');
btn.addEventListener('mousemove', e => {
const r = btn.getBoundingClientRect();
const x = e.clientX - r.left - r.width / 2;
const y = e.clientY - r.top - r.height / 2;
btn.style.transform = `translate(${x * .22}px, ${y * .32}px)`;
});
btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});
}
if(finePointer && !reduceMotion){
const ring = document.createElement('div');
const dot = document.createElement('div');
ring.className = 'rd-cursor';
dot.className = 'rd-cursor-dot';
document.body.append(ring, dot);
let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
window.addEventListener('mousemove', e => {
mx = e.clientX; my = e.clientY;
dot.style.transform = `translate(${mx}px, ${my}px)`;
document.body.classList.add('rd-has-cursor');
}, {passive:true});
document.addEventListener('mouseleave', () => document.body.classList.remove('rd-has-cursor'));
const follow = () => {
rx += (mx - rx) * .16; ry += (my - ry) * .16;
ring.style.transform = `translate(${rx}px, ${ry}px)`;
requestAnimationFrame(follow);
};
follow();
document.addEventListener('mouseover', e => {
ring.classList.toggle('is-hover', !!e.target.closest('a, button, summary, .product-img, .svc-thumb-slider, input, select, textarea'));
});
}
const mbar = document.createElement('div');
mbar.className = 'rd-mbar';
const bookSource = $('.hero-cta .btn-ghost');
const waSource = $('.wa-float');
mbar.innerHTML = `
<button type="button" class="rd-mbar-book">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
${bookSource ? bookSource.innerHTML : ''}
</button>
<a class="rd-mbar-wa" target="_blank" rel="noopener" href="${waSource ? waSource.getAttribute('href') : 'https://wa.me/989367737214'}">
<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2z"/></svg>
WhatsApp
</a>`;
mbar.querySelector('.rd-mbar-book').addEventListener('click', () => {
if(typeof window.openContactPicker === 'function') window.openContactPicker('service');
});
document.body.appendChild(mbar);
function toggleMobileBar(y){
const nearEnd = y + innerHeight > document.documentElement.scrollHeight - 160;
mbar.classList.toggle('show', y > innerHeight * .7 && !nearEnd);
}
const svcList = $('#svcList');
const svcSection = $('#services');
if(svcList && svcSection && !reduceMotion){
const wrap = svcSection.querySelector('.wrap');
const head = wrap.querySelector('.sec-head');
const hs = document.createElement('div');
hs.className = 'rd-hs';
const sticky = document.createElement('div');
sticky.className = 'rd-hs-sticky';
const lane = document.createElement('div');
lane.className = 'rd-hs-lane';
const bar = document.createElement('div');
bar.className = 'rd-hs-bar';
bar.innerHTML = '<span></span>';
wrap.insertBefore(hs, head);
sticky.append(head, lane, bar);
lane.appendChild(svcList);
hs.appendChild(sticky);
svcList.classList.add('rd-rail');
head.classList.add('in');
let distance = 0, hsTop = 0, laneW = 0;
const layout = () => {
const vw = document.documentElement.clientWidth;
const vh = innerHeight;
const mobile = vw <= 720;
const pad = Math.max(20, (vw - 1144) / 2);
sticky.style.width = vw + 'px';
sticky.style.marginInline = `${-(vw - hs.clientWidth) / 2}px`;
lane.style.paddingInline = pad + 'px';
const headH = head.offsetHeight;
const reserved = (mobile ? 74 + 20 + 18 * 2 + 56 : 84 + 26 + 28 * 2) + headH + 3 + 70;
const imgH = Math.max(190, Math.min(460, vh - reserved));
const cardW = Math.min(mobile ? vw * .76 : 380, Math.round(imgH * .9));
svcList.style.setProperty('--rd-img-h', imgH + 'px');
svcList.style.setProperty('--rd-card-w', cardW + 'px');
laneW = vw;
distance = Math.max(0, svcList.scrollWidth + pad * 2 - vw);
hs.style.height = distance > 0 ? (vh + distance) + 'px' : '';
sticky.style.position = distance > 0 ? '' : 'static';
sticky.style.height = distance > 0 ? '' : 'auto';
hsTop = hs.getBoundingClientRect().top + window.scrollY;
update();
};
const update = () => {
const p = distance > 0 ? Math.min(1, Math.max(0, (window.scrollY - hsTop) / distance)) : 0;
const x = p * distance;
svcList.style.transform = `translate3d(${isRTL() ? x : -x}px,0,0)`;
bar.firstChild.style.transform = `scaleX(${p})`;
};
window.addEventListener('scroll', () => requestAnimationFrame(update), {passive:true});
window.addEventListener('resize', layout);
window.addEventListener('load', layout);
document.addEventListener('razmehr:language-change', () => setTimeout(layout, 60));
new MutationObserver(() => requestAnimationFrame(layout)).observe(svcList, {childList:true});
layout();
const originalSelect = window.selectSiteSearch;
if(typeof originalSelect === 'function'){
window.selectSiteSearch = function(kind, key){
const card = kind === 'service' && document.getElementById(`service-${key}`);
if(!card || distance <= 0) return originalSelect.apply(this, arguments);
if(typeof window.closeSiteSearch === 'function') window.closeSiteSearch();
const fromStart = isRTL() ? svcList.offsetWidth - card.offsetLeft - card.offsetWidth : card.offsetLeft;
const x = Math.min(distance, Math.max(0, fromStart - (laneW - card.offsetWidth) / 2));
setTimeout(() => {
window.scrollTo({top: hsTop + x, behavior: 'smooth'});
card.classList.add('svc-focus');
setTimeout(() => card.classList.remove('svc-focus'), 2200);
}, 120);
};
}
}
const footerWrap = $('footer .wrap');
if(footerWrap){
const mark = document.createElement('div');
mark.className = 'rd-wordmark';
mark.setAttribute('aria-hidden', 'true');
mark.textContent = 'RAZMEHR';
footerWrap.appendChild(mark);
}
onScroll();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
