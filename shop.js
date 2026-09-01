const SHOP_FILTERS = [
  ["all","همه محصولات"],["hair","مراقبت مو"],["repair","احیا مو"],["color","مکمل رنگ"],["shampoo","شامپو"]
];
let activeFilter = "all";
let query = "";
let cart = JSON.parse(localStorage.getItem("razmehr-shop-cart") || "[]");
const toman = new Intl.NumberFormat("fa-IR");
const $ = id => document.getElementById(id);

function normalize(value){return String(value||"").toLowerCase().replace(/ي/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim()}
function productKey(product){return product.img.split("/").pop().replace(/\.[^.]+$/,"")}
function visibleProducts(){
  return PRODUCTS.filter(product => {
    const categoryMatch = activeFilter === "all" || product.catKey === activeFilter;
    const text = normalize(`${product.name.fa} ${product.name.en} ${product.cat.fa} ${product.desc.fa}`);
    return categoryMatch && (!query || text.includes(query));
  });
}
function renderFilters(){
  $("filters").innerHTML = SHOP_FILTERS.map(([key,label]) => `<button class="filter ${key===activeFilter?"active":""}" data-key="${key}">${label}</button>`).join("");
  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click",()=>{activeFilter=button.dataset.key;renderFilters();renderProducts()}));
}
function renderProducts(){
  const list = visibleProducts();
  $("resultMeta").textContent = `${toman.format(list.length)} محصول`;
  $("grid").innerHTML = list.length ? list.map(product => `<article class="card">
    <div class="photo"><img src="${product.displayImg || product.img}" alt="${product.name.fa}" loading="lazy">${product.tag?`<span class="tag">${product.tag.fa}</span>`:""}</div>
    <div class="body"><div class="cat">${product.cat.fa}</div><h2>${product.name.fa}</h2><p class="desc">${product.desc.fa}</p><div class="foot"><span class="price">${product.price.fa} تومان</span><button class="add" data-id="${productKey(product)}" aria-label="افزودن ${product.name.fa} به سبد">+</button></div></div>
  </article>`).join("") : `<div class="empty">محصولی با این عبارت پیدا نشد.</div>`;
  document.querySelectorAll(".add").forEach(button => button.addEventListener("click",()=>addToCart(button.dataset.id)));
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
  $("cartCount").textContent=toman.format(count);$("cartCount").classList.toggle("show",count>0);
  let total=0;
  $("cartItems").innerHTML = cart.length ? cart.map(item=>{
    const product=PRODUCTS.find(p=>productKey(p)===item.id);if(!product)return "";total+=product.priceN*item.qty;
    return `<div class="cart-row"><img src="${product.displayImg || product.img}" alt=""><div><h3>${product.name.fa}</h3><small>${toman.format(item.qty)} × ${product.price.fa}</small></div><button class="remove" data-id="${item.id}">حذف</button></div>`;
  }).join("") : `<div class="empty">سبد خرید شما خالی است.</div>`;
  $("total").textContent=`${toman.format(total)} تومان`;
  document.querySelectorAll(".remove").forEach(button=>button.addEventListener("click",()=>removeFromCart(button.dataset.id)));
}
function openCart(){$("overlay").classList.add("open");$("drawer").classList.add("open")}
function closeCart(){$("overlay").classList.remove("open");$("drawer").classList.remove("open")}
function checkout(){
  if(!cart.length){showToast("سبد خرید خالی است");return}
  const rows=cart.map(item=>{const p=PRODUCTS.find(x=>productKey(x)===item.id);return `• ${p.name.fa} — ${item.qty} عدد`}).join("\n");
  const message=encodeURIComponent(`سلام، برای سفارش محصولات رازمهر پیام می‌دهم:\n${rows}`);
  window.open(`https://wa.me/989923777056?text=${message}`,"_blank","noopener");
}
let toastTimer;
function showToast(message="به سبد خرید اضافه شد"){$("toast").textContent=message;$("toast").classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").classList.remove("show"),1800)}

$("search").addEventListener("input",event=>{query=normalize(event.target.value);renderProducts()});
$("cartOpen").addEventListener("click",openCart);$("close").addEventListener("click",closeCart);$("overlay").addEventListener("click",closeCart);$("checkout").addEventListener("click",checkout);
$("year").textContent=new Date().getFullYear();renderFilters();renderProducts();renderCart();
