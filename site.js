// ===== Edit these three lines, then publish =====
const CONTACT_EMAIL = 'ilyessmaatalla95@gmail.com';      // your support email
const OWNER_NAME = 'Ilyess Maatalla';               // you, or your company
const STORE_URL = 'https://chromewebstore.google.com/detail/eimnfljmhngmdjefmbgdmhkdpdpiopgo'; // Chrome Web Store link
// ================================================

document.querySelectorAll('[data-email]').forEach((el) => {
  el.textContent = CONTACT_EMAIL;
  if (el.tagName === 'A') el.href = 'mailto:' + CONTACT_EMAIL;
});

document.querySelectorAll('[data-owner]').forEach((el) => {
  el.textContent = OWNER_NAME;
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// "Add to Chrome" buttons: point at the store when the link exists,
// otherwise at the pricing section.
document.querySelectorAll('[data-store]').forEach((el) => {
  if (STORE_URL) {
    el.href = STORE_URL;
  } else {
    el.href = '#pricing';
    if (el.dataset.store === 'label') el.textContent = 'See plans';
  }
});
