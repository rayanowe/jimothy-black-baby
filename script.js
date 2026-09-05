const cart=document.getElementById('cart'),overlay=document.getElementById('overlay');
function openCart(){cart.classList.add('open');overlay.classList.add('open');cart.setAttribute('aria-hidden','false')}
function closeCart(){cart.classList.remove('open');overlay.classList.remove('open');cart.setAttribute('aria-hidden','true')}
document.getElementById('cartButton').onclick=openCart;
document.getElementById('close').onclick=closeCart;
document.getElementById('keep').onclick=closeCart;
overlay.onclick=closeCart;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('signup').addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('email');document.getElementById('message').textContent=`You're on the list — ${email.value}`;email.value='';});
