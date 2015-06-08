/*global document: false */
/*global Reveal: false */
(function () {
  'use strict';

  Reveal.addEventListener('fragmentshown', function (e) {
    var parent = e.fragment.parentElement,
        pState = parent.getAttribute('data-state'),
        background1 = document.querySelector('.backgrounds > .slide-background.present'),
        background2 = document.querySelector('.backgrounds > .slide-background.present .slide-background.present');

    if (pState) {
      if(pState.split(' ').indexOf('dt-rad') !== -1) {
        background1.style.backgroundImage = 'url("images/dt-rad.svg")';
        background2.style.backgroundImage = 'url("images/dt-rad.svg")';
      }
    }
  });
})();
