const SHOP_FILTERS = [
  ["all",{fa:"همه محصولات",en:"All Products"}],["hair",{fa:"مراقبت مو",en:"Hair Care"}],["repair",{fa:"احیا مو",en:"Hair Repair"}],["color",{fa:"مکمل رنگ",en:"Color Enhancers"}],["shampoo",{fa:"شامپو",en:"Shampoo"}]
];
let activeFilter = "all";
let query = "";
let cart = JSON.parse(localStorage.getItem("razmehr-shop-cart") || "[]");
let activeDetailId = null;
let activeLanguage = ["fa","en","tr","ar"].includes(localStorage.getItem("razmehr-language")) ? localStorage.getItem("razmehr-language") : "fa";
let lang = activeLanguage === "en" ? "en" : "fa";
const numberFormatter = () => new Intl.NumberFormat({fa:"fa-IR",en:"en-US",tr:"tr-TR",ar:"ar"}[activeLanguage] || "fa-IR");
const copy = (fa,en) => {
  if(activeLanguage === "fa") return fa;
  if(activeLanguage === "en") return en;
  const dictionary = activeLanguage === "tr" ? window.RAZMEHR_TRANSLATIONS_TR : window.RAZMEHR_TRANSLATIONS_AR;
  return dictionary?.[fa] || fa;
};
const $ = id => document.getElementById(id);

function normalize(value){return String(value||"").toLowerCase().replace(/ي/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim()}
function productKey(product){return product.img.split("/").pop().replace(/\.[^.]+$/,"")}
function visibleProducts(){
  return PRODUCTS.filter(product => {
    const categoryMatch = activeFilter === "all" || product.catKey === activeFilter;
    const text = normalize(`${product.name.fa} ${product.name.en} ${product.cat.fa} ${product.cat.en} ${product.desc.fa} ${product.desc.en}`);
    return categoryMatch && (!query || text.includes(query));
  });
}
function renderFilters(){
  $("filters").innerHTML = SHOP_FILTERS.map(([key,label]) => `<button class="filter ${key===activeFilter?"active":""}" data-key="${key}">${label[lang]}</button>`).join("");
  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click",()=>{activeFilter=button.dataset.key;renderFilters();renderProducts()}));
}
function renderProducts(){
  const list = visibleProducts();
  $("resultMeta").textContent = lang === "en" ? `${numberFormatter().format(list.length)} products` : `${numberFormatter().format(list.length)} محصول`;
  $("grid").innerHTML = list.length ? list.map(product => `<article class="card">
    <button type="button" class="photo" data-open="${productKey(product)}" aria-label="${copy('مشاهده توضیحات','View details for')} ${product.name[lang]}"><img src="${product.img}" alt="${product.name[lang]}" loading="lazy">${product.tag?`<span class="tag">${product.tag[lang]}</span>`:""}</button>
    <div class="body"><div class="cat">${product.cat[lang]}</div><h2>${product.name[lang]}</h2><p class="desc">${product.desc[lang]}</p><button type="button" class="detail-btn" data-open="${productKey(product)}">${copy('توضیحات محصول','Product Details')}</button><div class="foot"><span class="price">${product.price[lang]} ${copy('تومان','tomans')}</span><button class="add" data-id="${productKey(product)}" aria-label="${copy('افزودن به سبد:','Add to cart:')} ${product.name[lang]}">+</button></div></div>
  </article>`).join("") : `<div class="empty">${copy('محصولی با این عبارت پیدا نشد.','No products match your search.')}</div>`;
  document.querySelectorAll(".add").forEach(button => button.addEventListener("click",()=>addToCart(button.dataset.id)));
  document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click",()=>openProductDetails(button.dataset.open)));
}
function addToCart(id){
  const row = cart.find(item=>item.id===id);
  if(row) row.qty += 1; else cart.push({id,qty:1});
  saveCart();showToast();renderCart();
}
function removeFromCart(id){cart=cart.filter(item=>item.id!==id);saveCart();renderCart()}
function saveCart(){localStorage.setItem("razmehr-shop-cart",JSON.stringify(cart))}
function renderCart(){
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  $("cartCount").textContent=numberFormatter().format(count);$("cartCount").classList.toggle("show",count>0);
  let total=0;
  $("cartItems").innerHTML = cart.length ? cart.map(item=>{
    const product=PRODUCTS.find(p=>productKey(p)===item.id);if(!product)return "";total+=product.priceN*item.qty;
    return `<div class="cart-row"><img src="${product.img}" alt=""><div><h3>${product.name[lang]}</h3><small>${numberFormatter().format(item.qty)} × ${product.price[lang]}</small></div><button class="remove" data-id="${item.id}">${copy('حذف','Remove')}</button></div>`;
  }).join("") : `<div class="empty">${copy('سبد خرید شما خالی است.','Your cart is empty.')}</div>`;
  $("total").textContent=`${numberFormatter().format(total)} ${copy('تومان','tomans')}`;
  document.querySelectorAll(".remove").forEach(button=>button.addEventListener("click",()=>removeFromCart(button.dataset.id)));
}
function openCart(){$("overlay").classList.add("open");$("drawer").classList.add("open")}
function closeCart(){$("overlay").classList.remove("open");$("drawer").classList.remove("open")}
function openProductDetails(id){
  const product=PRODUCTS.find(item=>productKey(item)===id);if(!product)return;
  activeDetailId=id;
  $("pdImage").src=product.img;$("pdImage").alt=product.name[lang];
  $("pdCat").textContent=product.cat[lang];$("pdTitle").textContent=product.name[lang];
  $("pdDesc").textContent=product.desc[lang];$("pdPrice").textContent=`${product.price[lang]} ${copy('تومان','tomans')}`;
  $("productDetailOverlay").classList.add("open");$("productDetailModal").classList.add("open");
  document.body.style.overflow="hidden";
}
function closeProductDetails(){
  activeDetailId=null;$("productDetailOverlay").classList.remove("open");$("productDetailModal").classList.remove("open");
  document.body.style.overflow="";
}
function checkout(){
  if(!cart.length){showToast(copy("سبد خرید خالی است","Your cart is empty"));return}
  const rows=cart.map(item=>{const p=PRODUCTS.find(x=>productKey(x)===item.id);return `• ${copy(p.name.fa,p.name.en)} — ${item.qty} ${copy('عدد','item(s)')}`}).join("\n");
  const message=encodeURIComponent(copy(`سلام، برای سفارش محصولات رازمهر پیام می‌دهم:\n${rows}`,`Hello Razmehr, I'd like to order these products:\n${rows}`));
  window.open(`https://wa.me/989367737214?text=${message}`,"_blank","noopener");
}
let toastTimer;
function showToast(message=copy("به سبد خرید اضافه شد","Added to your cart")){$("toast").textContent=message;$("toast").classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").classList.remove("show"),1800)}

$("search").addEventListener("input",event=>{query=normalize(event.target.value);renderProducts()});
$("cartOpen").addEventListener("click",openCart);$("close").addEventListener("click",closeCart);$("overlay").addEventListener("click",closeCart);$("checkout").addEventListener("click",checkout);
$("pdClose").addEventListener("click",closeProductDetails);$("productDetailOverlay").addEventListener("click",closeProductDetails);
$("pdAdd").addEventListener("click",()=>{if(activeDetailId){addToCart(activeDetailId);closeProductDetails()}});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeProductDetails()});
document.addEventListener('razmehr:language-change',event=>{activeLanguage=["fa","en","tr","ar"].includes(event.detail?.language)?event.detail.language:"fa";lang=activeLanguage==='en'?'en':'fa';renderFilters();renderProducts();renderCart();if(activeDetailId)openProductDetails(activeDetailId)});
$("year").textContent=new Date().getFullYear();renderFilters();renderProducts();renderCart();
