/* ============================================================
   Shri Kuber Travel Agency — shared script
   Edit CONFIG (phone number!) and DATA (prices, text, photos) below.
   ============================================================ */

const CONFIG = {
  name: 'Shri kashi Kuber Travel Agency',
  whatsapp: '8887936376',          // <-- country code + number, digits only
  phoneDisplay: '8887936376',
  email: 'info@shrikubertravel.example',
  city: 'Varanasi, Uttar Pradesh',
  address: ' Kuber Complex, Rathyatra Crossing, Jahumandi, Varanasi, Uttar Pradesh 221010',
  hours: 'Open daily, 6:00 AM – 10:00 PM'
};

/* Static prices. price = number in INR, unit = label shown after it.
   img = path of the card photo, e.g. 'assets/img/packages/packages1.jpg' */
const DATA = {
  packages: [
    { id: 'kashi-darshan', title: 'Kashi Darshan 2N/3D', img: 'assets/img/packages/packages1.jpg', price: 5499, unit: 'per person',
      tag: 'Most Popular', qty: 'Number of travellers',
      desc: 'Kashi Vishwanath, Ganga Aarti, Sankat Mochan, Sarnath and a sunrise boat ride.',
      points: ['Hotel stay (2 nights)', 'Breakfast included', 'AC car for sightseeing'] },
    { id: 'ganga-aarti-day', title: 'Ganga Aarti & Ghat Day Tour', img: 'assets/img/packages/gangaartipackage2.jpg', price: 1999, unit: 'per person',
      tag: '1 Day', qty: 'Number of travellers',
      desc: 'Walk the ghats, temple visits and the evening Ganga Aarti at Dashashwamedh.',
      points: ['Local guide', 'Boat ride included', 'Pick up & drop in city'] },
    { id: 'ayodhya-prayagraj', title: 'Varanasi – Ayodhya – Prayagraj', img: 'assets/img/packages/packages4.jpg', price: 8999, unit: 'per person',
      tag: '3N/4D', qty: 'Number of travellers',
      desc: 'Covering Ram Janmabhoomi, Hanuman Garh with Triveni Sangam.',
      points: ['3 nights hotel', 'Private AC car', 'Breakfast & driver included'] },
    { id: 'sarnath-bodhgaya', title: 'Sarnath & Bodh Gaya Buddhist Trail', img: 'assets/img/packages/packages44.jpg', price: 6499, unit: 'per person',
      tag: '2N/3D', qty: 'Number of travellers',
      desc: 'Sarnath, Mahabodhi Temple and Gaya.',
      points: ['2 nights hotel', 'AC car', 'Guide at Sarnath'] },
    { id: 'family-holiday', title: 'Family Holiday Package', img: 'assets/img/packages/packagekids.jpg', price: 12999, unit: 'per family (4 pax)',
      tag: 'Family', qty: 'Number of families',
      desc: 'Relaxed 3N/4D with Varanasi, Sarnath and a day of leisure. Kid-friendly pace.',
      points: ['Family room stay', 'All transfers', 'Breakfast included'] },
    { id: 'honeymoon', title: 'Couple Special', img: 'assets/img/packages/packagesCouple.jpg', price: 14999, unit: 'per couple',
      tag: 'Couples', qty: 'Number of couples',
      desc: 'Sunset boat, dinner on the ghats and a private Ac-driven car.',
      points: ['Premium hotel', 'Private boat ride', 'Decorated room'] }
  ],

  cars: [
    { id: 'dzire', title: 'Swift Dzire (Sedan)', img: 'assets/img/cars/cars1.jpg', price: 2200, unit: 'per day · 80 km', qty: 'Number of days',
      tag: '4 Seater',
      desc: 'Comfortable AC sedan for city sightseeing and short trips.',
      points: ['AC', 'Driver included', 'Extra km ₹12'] },
    { id: 'wagonr', title: 'WagonR / Celerio (Hatchback)', img: 'assets/img/cars/cars2.jpg', price: 1800, unit: 'per day · 80 km', qty: 'Number of days',
      tag: '4 Seater',
      desc: 'Budget-friendly choice for small groups in the city.',
      points: ['AC', 'Driver included', 'Extra km ₹10'] },
    { id: 'ertiga', title: 'Maruti Ertiga', img: 'assets/img/cars/cars3.jpg', price: 3000, unit: 'per day · 80 km', qty: 'Number of days',
      tag: '6 Seater',
      desc: 'Spacious 6-seater for families with luggage.',
      points: ['AC', 'Driver included', 'Extra km ₹14'] },
    { id: 'innova', title: 'Toyota Innova Crysta', img: 'assets/img/cars/cars4.jpg', price: 3800, unit: 'per day · 80 km', qty: 'Number of days',
      tag: '7 Seater',
      desc: 'Premium comfort for long routes and VIP pickups.',
      points: ['Premium AC', 'Driver included', 'Extra km ₹18'] },
    { id: 'tempo', title: 'Tempo Traveller (12 Seater)', img: 'assets/img/cars/cars5.jpg', price: 5500, unit: 'per day · 80 km', qty: 'Number of days',
      tag: '12 Seater',
      desc: 'Perfect for group tours, pilgrimages and wedding guests.',
      points: ['Push-back seats', 'Driver included', 'Extra km ₹22'] },
    { id: 'airport-drop', title: 'Airport Transfer (Babatpur)', img: 'assets/img/cars/cars6.jpg', price: 900, unit: 'one way', qty: 'Number of trips',
      tag: 'Transfer',
      desc: 'Fixed-rate sedan transfer between Varanasi airport and your hotel.',
      points: ['AC sedan', 'Flight tracking', 'No hidden charges'] }
  ],

  scooters: [
    { id: 'activa', title: 'Honda Activa 6G', img: 'assets/img/scooters/scooters1.jpg', price: 400, unit: 'per day', qty: 'Number of days',
      tag: 'Best Seller',
      desc: 'Easy to ride, light on fuel — ideal for narrow Varanasi lanes.',
      points: ['Helmet included', 'Petrol extra', 'ID proof required'] },
    { id: 'jupiter', title: 'TVS Jupiter', img: 'assets/img/scooters/scooters2.jpg', price: 450, unit: 'per day', qty: 'Number of days',
      tag: 'Comfort',
      desc: 'Smooth ride with large under-seat storage.',
      points: ['Helmet included', 'Petrol extra', 'ID proof required'] },
    { id: 'access', title: 'Suzuki Access 125', img: 'assets/img/scooters/scooters3.jpg', price: 450, unit: 'per day', qty: 'Number of days',
      tag: 'Powerful',
      desc: 'A 125cc scooter with more pick-up for longer rides to Sarnath.',
      points: ['Helmet included', 'Petrol extra', 'ID proof required'] },
    { id: 'ola-s1', title: 'Electric Scooter (Ola S1)', img: 'assets/img/scooters/scooters4.jpg', price: 550, unit: 'per day', qty: 'Number of days',
      tag: 'Electric',
      desc: 'Silent, eco-friendly and zero fuel cost. Around 100 km per charge.',
      points: ['Helmet included', 'Charger on request', 'ID proof required'] },
    { id: 'vespa', title: 'Vespa 125', img: 'assets/img/scooters/scooters5.jpg', price: 650, unit: 'per day', qty: 'Number of days',
      tag: 'Classic Style',
      desc: 'Retro looks for a stylish ride along the ghats.',
      points: ['Helmet included', 'Petrol extra', 'ID proof required'] },
    { id: 'weekly', title: 'Weekly Scooter Plan', img: 'assets/img/scooters/scooters6.jpg', price: 2400, unit: 'per week', qty: 'Number of weeks',
      tag: 'Save More',
      desc: 'Any Activa / Jupiter / Access for 7 days at a discounted rate.',
      points: ['Helmet included', 'Free service support', 'ID proof required'] }
  ],

  services: [
    { id: 'boat-ride', title: 'Ganga Boat Ride', img: 'assets/img/services/boatRide.jpg', price: 500, unit: 'per person (shared)', qty: 'Number of persons',
      tag: 'Nature & Culture',
      desc: 'Witness the Ganga Aarti from the river. Private boat from ₹1,500.',
      points: ['Life jackets provided', 'Private boat available'] },
    { id: 'railway-pickup', title: 'Railway Station Pick-up & Drop', img: 'assets/img/services/stationsjn.jpg', price: 600, unit: 'per trip', qty: 'Number of trips',
      tag: 'Varanasi Jn · Kashi · Banaras',
      desc: 'On-time AC car pick-up or drop at Varanasi Junction and Banaras stations.',
      points: ['Train-time tracking', 'AC sedan', 'Luggage assistance'] },
    { id: 'pre-wedding', title: 'Pre-Wedding Shoot', img: 'assets/img/services/prewedding.jpg', price: 15000, unit: 'per shoot', qty: 'Number of shoots',
      tag: 'Photo + Video',
      desc: 'Cinematic pre-wedding photography at the Varanasi ghats and heritage spots.',
      points: ['Photographer + videographer', '60+ edited photos', 'Outfit change support'] },
    { id: 'hotel-booking', title: 'Hotel Booking', img: 'assets/img/services/hotelService.jpg', price: 1200, unit: 'per night (from)', qty: 'Number of nights',
      tag: 'Budget to Premium',
      desc: 'Verified hotels and guest houses near the ghats and Kashi Vishwanath at our partner rates.',
      points: ['Verified stays', 'Ghat-view rooms', 'Free cancellation on select'] }
  ]
};


/* If a photo is not found, tries .jpeg .webp .png, then hides it (card keeps its soft colour background) */
function imgFallback(el) {
  const exts = ['jpg', 'jpeg', 'webp', 'png'];
  const n = +(el.dataset.try || 0) + 1;
  if (n >= exts.length) { el.remove(); return; }
  el.dataset.try = n;
  el.src = el.src.replace(/\.[a-z]+$/i, '.' + exts[n]);
}

const TYPE_LABEL = { packages: 'Tour Package', cars: 'Car Rental', scooters: 'Scooter Rental', services: 'Service' };
const GRADS = { packages: 'from-saffron-100 to-sage-100', cars: 'from-sage-100 to-sand', scooters: 'from-sand to-saffron-100', services: 'from-sage-200 to-cream' };

const inr = n => '₹' + Number(n).toLocaleString('en-IN');
const waLink = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------------- Header / Footer ---------------- */
const NAV = [
  ['#/', 'Home', 'home'],
  ['#/packages', 'Our Packages', 'packages'],
  ['#/rent-car', 'Rent Car', 'rent-car'],
  ['#/rent-scooter', 'Rent Scooter', 'rent-scooter'],
  ['#/services', 'Our Services', 'services'],
  ['#/contact', 'Contact Us', 'contact']
];
const TITLES = {
  'home': 'Shri Kuber Travel Agency | Varanasi Tours, Cars, Scooters & Services',
  'packages': 'Our Packages | Shri Kuber Travel Agency',
  'rent-car': 'Rent a Car in Varanasi | Shri Kuber Travel Agency',
  'rent-scooter': 'Rent a Scooter in Varanasi | Shri Kuber Travel Agency',
  'services': 'Our Services | Shri Kuber Travel Agency',
  'contact': 'Contact Us | Shri Kuber Travel Agency'
};
const NAV_ACTIVE = ['bg-sage-600', 'text-white'];
const NAV_IDLE = ['text-ink', 'hover:bg-sage-100'];

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  const link = (h, t, k, extra = '') =>
    `<a href="${h}" data-nav="${k}" class="${extra} px-3 py-2 rounded-full text-sm font-medium transition text-ink hover:bg-sage-100">${t}</a>`;
  el.innerHTML = `
  <header class="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-sand">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#/" class="flex items-center gap-2">
        <span class="w-9 h-9 rounded-full bg-saffron-400 text-white grid place-items-center font-display font-bold">K</span>
        <span class="font-display font-bold text-sage-900 text-lg leading-none">Shri Kuber<span class="block text-[10px] tracking-[.25em] font-sans font-medium text-sage-600">TRAVEL AGENCY</span></span>
      </a>
      <nav class="hidden lg:flex items-center gap-1">${NAV.map(n => link(...n)).join('')}</nav>
      <div class="flex items-center gap-2">
        <a href="${waLink('Namaste! I would like to know more about your travel services.')}" target="_blank" rel="noopener"
           class="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:brightness-95 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-soft">Chat on WhatsApp</a>
        <button id="menu-btn" aria-label="Menu" class="lg:hidden w-10 h-10 rounded-full bg-sage-100 text-sage-700 grid place-items-center text-xl">☰</button>
      </div>
    </div>
    <nav id="mobile-menu" class="hidden lg:hidden border-t border-sand bg-cream px-4 py-3 grid gap-1">${NAV.map(n => link(...n, 'block')).join('')}</nav>
  </header>`;
  document.getElementById('menu-btn').onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="bg-sage-900 text-sage-100 mt-20">
    <div class="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
      <div>
        <h3 class="font-display text-2xl text-white">${CONFIG.name}</h3>
        <p class="mt-3 text-sm text-sage-200">Tours, cars, scooters and local services in Varanasi — planned with care, priced clearly, booked on WhatsApp.</p>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-3">Explore</h4>
        <ul class="space-y-2 text-sm">${NAV.map(n => `<li><a class="hover:text-saffron-400" href="${n[0]}">${n[1]}</a></li>`).join('')}</ul>
      </div>
      <div class="text-sm space-y-2">
        <h4 class="font-semibold text-white mb-3">Reach us</h4>
        <p>📍 ${CONFIG.city}</p>
        <p>📞 ${CONFIG.phoneDisplay}</p>
        <p>✉️ ${CONFIG.email}</p>
        <p>🕖 ${CONFIG.hours}</p>
      </div>
    </div>
    <div class="border-t border-sage-700 text-center text-xs text-sage-200 py-4">© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.</div>
  </footer>
  <a href="${waLink('Namaste! I would like to know more about your travel services.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
     class="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-soft hover:scale-105 transition">
    <span class="text-2xl">💬</span>
  </a>`;
}

/* ---------------- Cards ---------------- */
function card(type, i) {
  return `
  <article class="h-[30rem] bg-white rounded-3xl overflow-hidden shadow-soft border border-sand flex flex-col hover:-translate-y-1 transition duration-300">
    <div class="relative h-60 shrink-0 overflow-hidden bg-gradient-to-br ${GRADS[type]}">
      <img src="${esc(i.img || `assets/img/${type}/${i.id}.jpg`)}" alt="${esc(i.title)}" loading="lazy" onerror="imgFallback(this)" class="absolute inset-0 w-full h-full object-cover object-center">
      <span class="absolute top-3 left-3 bg-cream/95 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full">${esc(i.tag)}</span>
    </div>
    <div class="p-4 flex flex-col flex-1 min-h-0">
      <h3 class="font-display text-xl text-sage-900 line-clamp-2">${esc(i.title)}</h3>
      <p class="text-sm text-ink/70 mt-1.5 line-clamp-2">${esc(i.desc)}</p>
      <ul class="mt-2 space-y-0.5 text-sm text-ink/80 overflow-hidden">${i.points.map(p => `<li class="flex gap-2"><span class="text-sage-500">✔</span>${esc(p)}</li>`).join('')}</ul>
      <div class="mt-auto pt-3 flex items-end justify-between gap-3">
        <div><span class="text-2xl font-bold text-saffron-600">${inr(i.price)}</span><span class="block text-xs text-ink/60">${esc(i.unit)}</span></div>
        <button data-book="${type}:${i.id}" class="bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">Book Now</button>
      </div>
    </div>
  </article>`;
}

function renderLists() {
  document.querySelectorAll('[data-list]').forEach(el => {
    const type = el.dataset.list;
    let items = DATA[type] || [];
    if (el.dataset.limit) items = items.slice(0, +el.dataset.limit);
    el.innerHTML = items.map(i => card(type, i)).join('');
  });
}

/* ---------------- Booking modal -> WhatsApp ---------------- */
function injectModal() {
  const m = document.createElement('div');
  m.id = 'book-modal';
  m.className = 'hidden fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm p-4 overflow-y-auto';
  m.innerHTML = `
    <div class="max-w-md mx-auto mt-10 bg-cream rounded-3xl shadow-soft border border-sand p-6">
      <div class="flex justify-between items-start">
        <div><p id="bm-type" class="text-xs font-semibold text-sage-600 uppercase tracking-wider"></p>
        <h3 id="bm-title" class="font-display text-2xl text-sage-900"></h3></div>
        <button id="bm-close" class="w-9 h-9 rounded-full bg-sand text-ink" aria-label="Close">✕</button>
      </div>
      <form id="bm-form" class="mt-4 space-y-3">
        <input required id="bm-name" placeholder="Your name" class="w-full rounded-xl border border-sand bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-200">
        <div class="grid grid-cols-2 gap-3">
          <input required type="date" id="bm-date" class="w-full rounded-xl border border-sand bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-200">
          <input required type="number" min="1" value="1" id="bm-qty" class="w-full rounded-xl border border-sand bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-200">
        </div>
        <p id="bm-qty-label" class="text-xs text-ink/60 -mt-2"></p>
        <textarea id="bm-note" rows="2" placeholder="Pick-up location / special request (optional)" class="w-full rounded-xl border border-sand bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-200"></textarea>
        <div class="flex items-center justify-between bg-sage-50 rounded-xl px-4 py-3 text-sm">
          <span class="text-ink/70">Estimated total</span><strong id="bm-total" class="text-sage-700 text-lg"></strong>
        </div>
        <button class="w-full bg-[#25D366] hover:brightness-95 text-white font-semibold py-3 rounded-full">Continue on WhatsApp</button>
        <p class="text-[11px] text-center text-ink/50">Rates are fixed. Final confirmation is shared on WhatsApp.</p>
      </form>
    </div>`;
  document.body.appendChild(m);

  let cur = null;
  const open = (type, id) => {
    const item = DATA[type].find(x => x.id === id);
    if (!item) return;
    cur = { type, item };
    document.getElementById('bm-type').textContent = TYPE_LABEL[type];
    document.getElementById('bm-title').textContent = item.title;
    document.getElementById('bm-qty-label').textContent = item.qty + ' · ' + inr(item.price) + ' ' + item.unit;
    document.getElementById('bm-qty').value = 1;
    const d = document.getElementById('bm-date');
    d.min = new Date().toISOString().split('T')[0];
    updateTotal();
    m.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };
  const close = () => { m.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); };
  const updateTotal = () => {
    const q = Math.max(1, +document.getElementById('bm-qty').value || 1);
    document.getElementById('bm-total').textContent = inr(cur.item.price * q);
  };

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-book]');
    if (b) { const [t, id] = b.dataset.book.split(':'); open(t, id); }
  });
  document.getElementById('bm-close').onclick = close;
  m.addEventListener('click', e => { if (e.target === m) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.getElementById('bm-qty').addEventListener('input', updateTotal);

  document.getElementById('bm-form').addEventListener('submit', e => {
    e.preventDefault();
    const { type, item } = cur;
    const q = Math.max(1, +document.getElementById('bm-qty').value || 1);
    const note = document.getElementById('bm-note').value.trim();
    const dateLabel = type === 'cars' || type === 'scooters' ? 'Pick-up date' : 'Date';
    const lines = [
      `Namaste ${CONFIG.name}! 🙏`,
      `I would like to book:`,
      ``,
      `*${TYPE_LABEL[type]}:* ${item.title}`,
      `*Rate:* ${inr(item.price)} ${item.unit}`,
      `*${item.qty}:* ${q}`,
      `*${dateLabel}:* ${document.getElementById('bm-date').value}`,
      `*Estimated total:* ${inr(item.price * q)}`,
      `*Name:* ${document.getElementById('bm-name').value.trim()}`
    ];
    if (note) lines.push(`*Note:* ${note}`);
    lines.push('', 'Please confirm availability. Thank you!');
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    close();
  });
}

/* ---------------- Contact form -> WhatsApp ---------------- */
function bindContactForm() {
  const f = document.getElementById('contact-form');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const v = id => document.getElementById(id).value.trim();
    const text = [
      `Namaste ${CONFIG.name}! 🙏`,
      `*Name:* ${v('cf-name')}`,
      `*Interested in:* ${v('cf-topic')}`,
      `*Travel date:* ${v('cf-date') || 'Not decided'}`,
      `*Message:* ${v('cf-msg') || '-'}`
    ].join('\n');
    window.open(waLink(text), '_blank', 'noopener');
  });
}

/* generic CTA: <a data-wa="message"> */
function bindWaLinks() {
  document.querySelectorAll('[data-wa]').forEach(a => {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

/* ---------------- Contact page info (filled from CONFIG) ---------------- */
function fillContactInfo() {
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  set('c-address', esc(CONFIG.address));
  set('c-phone', `<a class="hover:underline" href="tel:+${CONFIG.whatsapp}">${esc(CONFIG.phoneDisplay)}</a>`);
  set('c-email', `<a class="hover:underline" href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>`);
  set('c-hours', esc(CONFIG.hours));
}

/* ---------------- Router: header/footer stay, only <main> changes ---------------- */
function currentKey() {
  const k = location.hash.replace(/^#\/?/, '') || 'home';
  return document.getElementById('tpl-' + k) ? k : 'home';
}

function setActiveNav(key) {
  document.querySelectorAll('[data-nav]').forEach(a => {
    const on = a.dataset.nav === key;
    a.classList.remove(...NAV_ACTIVE, ...NAV_IDLE);
    a.classList.add(...(on ? NAV_ACTIVE : NAV_IDLE));
  });
}

function route() {
  const key = currentKey();
  const app = document.getElementById('app');
  app.innerHTML = document.getElementById('tpl-' + key).innerHTML;
  app.classList.remove('page-in'); void app.offsetWidth; app.classList.add('page-in');
  document.title = TITLES[key];
  setActiveNav(key);
  renderLists();
  bindContactForm();
  bindWaLinks();
  fillContactInfo();
  const mm = document.getElementById('mobile-menu');
  if (mm) mm.classList.add('hidden');
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();   // once
  renderFooter();   // once
  injectModal();    // once
  route();
  window.addEventListener('hashchange', route);
});