lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Animation.json"
});


// ===== LOTTIE - Projects Animation =====
var projectsAnim = document.getElementById('projects-animation');
if (projectsAnim) {
  lottie.loadAnimation({
    container: projectsAnim,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Web Development.json'
  });
}


var contactAnim = document.getElementById('contact-lottie');
if (contactAnim) {
  lottie.loadAnimation({
    container: contactAnim,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'contact.json'
  });
}

// ===== MOBILE SCROLL REVEAL =====
// نضيف كلاس "reveal" للعناصر المهمة عشان تتحرك وهي تدخل الشاشة
// (التأثير الفعلي مفعّل بس بالـ CSS تحت @media max-width:1100px، فما يأثر على الديسكتوب)
document.querySelectorAll(
  '.card, .projects-text, .projects-placeholder, .contact-text, .contact-animation'
).forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // يتحرك مرة وحدة بس
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== HAMBURGER MENU (يظهر بس بالجوال حسب الـ CSS) =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });

  // إقفال القائمة تلقائيًا بعد الضغط على أي رابط
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
    });
  });

  // إقفال القائمة لو ضغطت بره منها
  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('nav-open');
    }
  });
}