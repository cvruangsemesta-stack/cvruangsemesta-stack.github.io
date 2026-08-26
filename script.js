/* PT. Alfa Sentra Wisesa - website configuration */
const BUSINESS_EMAIL = 'REPLACE_WITH_YOUR_BUSINESS_EMAIL';
const WHATSAPP_NUMBER = ''; // Example format: 62812XXXXXXXXX (digits only). Do not include + or spaces.

document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const waButton = document.getElementById('waButton');
if (WHATSAPP_NUMBER) {
  waButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello PT. Alfa Sentra Wisesa, I would like to request a quotation.')}`;
  waButton.target = '_blank';
} else {
  waButton.href = '#quote';
}

document.getElementById('quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Charcoal Export Inquiry - ${form.get('product')}`;
  const body = [
    `Company / Name: ${form.get('name')}`,
    `Email: ${form.get('email')}`,
    `Product: ${form.get('product')}`,
    `Quantity: ${form.get('quantity')}`,
    `Destination: ${form.get('destination')}`,
    '',
    `Message: ${form.get('message')}`
  ].join('\n');
  if (BUSINESS_EMAIL === 'REPLACE_WITH_YOUR_BUSINESS_EMAIL') {
    alert('Please set your business email address in script.js before using this inquiry form.');
    return;
  }
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
