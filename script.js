// Analytics Page View Tracker
let views = parseInt(localStorage.getItem("jbb_views") || "0");
localStorage.setItem("jbb_views", views + 1);

const $=s=>document.querySelector(s);
const overlay=$("#overlay"),cart=$("#cart"),account=$("#accountPanel");

function openPanel(p){p.classList.add("open");overlay.classList.add("open");p.setAttribute("aria-hidden","false")}
function closePanel(p){p.classList.remove("open");if(!document.querySelector(".panel.open"))overlay.classList.remove("open");p.setAttribute("aria-hidden","true")}

$("#cartButton").onclick=()=>openPanel(cart);$("#closeCart").onclick=()=>closePanel(cart);
$("#accountButton").onclick=()=>openPanel(account);$("#closeAccount").onclick=()=>closePanel(account);$("#accountOk").onclick=()=>closePanel(account);
overlay.onclick=()=>{closePanel(cart);closePanel(account)};

const mobile=$("#mobileMenu");$("#menuButton").onclick=()=>mobile.classList.toggle("open");
mobile.querySelectorAll("a").forEach(a=>a.onclick=()=>mobile.classList.remove("open"));

function modal(id,closeId){const m=$(id);$(closeId).onclick=()=>m.classList.remove("open");return m}
const idea=modal("#ideaModal","#closeIdea"), orderModal=modal("#orderModal","#closeOrder");
$("#ideaButton").onclick=()=>idea.classList.add("open");

document.addEventListener("keydown",e=>{if(e.key==="Escape"){cart.classList.remove("open");account.classList.remove("open");idea.classList.remove("open");orderModal.classList.remove("open");overlay.classList.remove("open");mobile.classList.remove("open")}});
$("#year").textContent=new Date().getFullYear();

// Cart logic
let hasItem = false;
$("#addToCartBtn").onclick = () => {
  hasItem = true;
  $("#cartCount").textContent = "1";
  $("#emptyCartMsg").classList.add("hidden");
  $("#cartItemDetails").classList.remove("hidden");
  openPanel(cart);
};

$("#checkoutBtn").onclick = () => {
  closePanel(cart);
  orderModal.classList.add("open");
};

// School Order Submission
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#orderName").value;
  const grade = $("#orderGrade").value;
  const pay = $("#orderPay").value;
  
  // Save order to LocalStorage for Admin Dashboard
  const newOrder = { name, grade, pay, item: "Sea Salt Spray", date: new Date().toLocaleDateString() };
  let orders = JSON.parse(localStorage.getItem("jbb_orders") || "[]");
  orders.push(newOrder);
  localStorage.setItem("jbb_orders", JSON.stringify(orders));
  
  // Open Email Client
  const email = "rayan.owen13@gmail.com";
  const subject = encodeURIComponent(`[JBB School Order] ${name}`);
  const body = encodeURIComponent(`New School Order!\n\nName: ${name}\nGrade/Class: ${grade}\nItem: Sea Salt Spray ($15)\nPayment Method: ${pay}`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  
  orderModal.classList.remove("open");
  hasItem = false;
  $("#cartCount").textContent = "0";
  $("#emptyCartMsg").classList.remove("hidden");
  $("#cartItemDetails").classList.add("hidden");
  alert("Order submitted! Check your email app to finalize sending.");
});

// Suggestion Submission
$("#suggestionForm").addEventListener("submit",e=>{
  e.preventDefault();
  const type=$("#suggestionType").value;
  const text=$("#suggestionText").value;
  const email="rayan.owen13@gmail.com";
  const subject=encodeURIComponent(`[JBB Suggestion] ${type}`);
  const body=encodeURIComponent(`Category: ${type}\n\nSuggestion Details:\n${text}`);
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
  idea.classList.remove("open");
});
