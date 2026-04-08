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