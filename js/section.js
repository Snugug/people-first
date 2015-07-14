/*global document: false */
/*global Reveal: false */
(function () {
  'use strict';

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  Reveal.addEventListener('slidechanged', function (e) {
    var section = e.currentSlide.getAttribute('data-section'),
        display = document.getElementById('section');

    display.textContent = '';

    if (section) {
      display.textContent = toTitleCase(section);
    }
  });
})();
