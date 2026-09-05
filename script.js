/* PT. Alfa Sentra Wisesa - website configuration */

const BUSINESS_EMAIL = 'export@alfasentrawisesa.org';
const WHATSAPP_NUMBER = '628133154451';


/* =========================
   FOOTER YEAR
========================= */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      open ? 'true' : 'false'
    );
  });
}


/* Close mobile menu after clicking navigation */

if (nav) {
  document.querySelectorAll('.nav a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');

      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}


/* =========================
   WHATSAPP BUTTON
========================= */

const waButton = document.getElementById('waButton');

if (waButton) {

  if (WHATSAPP_NUMBER) {

    const whatsappMessage =
      'Hello PT. Alfa Sentra Wisesa, I would like to request a quotation.';

    waButton.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    waButton.target = '_blank';
    waButton.rel = 'noopener noreferrer';

  } else {

    waButton.href = '#quote';

  }
}


/* =========================
   REQUEST A QUOTE FORM
========================= */

const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {

  quoteForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const companyName = form.get('name') || '';
    const buyerEmail = form.get('email') || '';
    const product = form.get('product') || '';
    const quantity = form.get('quantity') || '';
    const destination = form.get('destination') || '';
    const message = form.get('message') || '';


    /* Email subject */

    const subject =
      `Charcoal Export Inquiry - ${product}`;


    /* Email body */

    const body = [

      `Company / Name: ${companyName}`,

      `Email: ${buyerEmail}`,

      `Product: ${product}`,

      `Quantity: ${quantity}`,

      `Destination: ${destination}`,

      '',

      `Message: ${message}`,

      '',

      '---',

      'PT. Alfa Sentra Wisesa',

      'Indonesia • Export'

    ].join('\n');


    /* Check business email */

    if (
      !BUSINESS_EMAIL ||
      BUSINESS_EMAIL === 'REPLACE_WITH_YOUR_BUSINESS_EMAIL'
    ) {

      alert(
        'Business email is not configured. Please contact PT. Alfa Sentra Wisesa directly.'
      );

      return;
    }


    /* Open email application */

    const gmailUrl =
  `https://mail.google.com/mail/?view=cm` +
  `&fs=1` +
  `&to=${encodeURIComponent(BUSINESS_EMAIL)}` +
  `&su=${encodeURIComponent(subject)}` +
  `&body=${encodeURIComponent(body)}`;

window.open(gmailUrl, '_blank');

  });

}
