document.getElementById('year').textContent = new Date().getFullYear();

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('overlay');
  const isOpen = panel.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  panel.setAttribute('aria-hidden', String(!isOpen));
}

function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const message = document.getElementById('signupMessage');
  message.textContent = `You're on the list — ${email.value}`;
  email.value = '';
}
