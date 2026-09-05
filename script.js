const $=s=>document.querySelector(s);
const overlay=$("#overlay"),cart=$("#cart"),account=$("#accountPanel");
function openPanel(p){p.classList.add("open");overlay.classList.add("open");p.setAttribute("aria-hidden","false")}
function closePanel(p){p.classList.remove("open");if(!document.querySelector(".panel.open"))overlay.classList.remove("open");p.setAttribute("aria-hidden","true")}
$("#cartButton").onclick=()=>openPanel(cart);$("#closeCart").onclick=()=>closePanel(cart);$("#keep").onclick=()=>closePanel(cart);
$("#accountButton").onclick=()=>openPanel(account);$("#closeAccount").onclick=()=>closePanel(account);$("#accountOk").onclick=()=>closePanel(account);
overlay.onclick=()=>{closePanel(cart);closePanel(account)};
const mobile=$("#mobileMenu");$("#menuButton").onclick=()=>mobile.classList.toggle("open");
mobile.querySelectorAll("a").forEach(a=>a.onclick=()=>mobile.classList.remove("open"));
function modal(id,closeId,okId){const m=$(id);$(closeId).onclick=()=>m.classList.remove("open");$(okId).onclick=()=>m.classList.remove("open");return m}
const idea=modal("#ideaModal","#closeIdea","#ideaOk"),notify=modal("#notifyModal","#closeNotify","#notifyOk");
$("#ideaButton").onclick=()=>idea.classList.add("open");$("#notifyButton").onclick=()=>notify.classList.add("open");
document.addEventListener("keydown",e=>{if(e.key==="Escape"){cart.classList.remove("open");account.classList.remove("open");idea.classList.remove("open");notify.classList.remove("open");overlay.classList.remove("open");mobile.classList.remove("open")}});
$("#year").textContent=new Date().getFullYear();
$("#signup").addEventListener("submit",e=>{e.preventDefault();const email=$("#email");$("#message").textContent=`You're on the list — ${email.value}`;email.value=""});
