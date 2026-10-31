// Tiny progressive enhancement: the site works without it.
(function () {
  document.documentElement.classList.remove('no-js');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var year = document.querySelectorAll('[data-year]');
  for (var i = 0; i < year.length; i++) year[i].textContent = String(new Date().getFullYear());
})();
