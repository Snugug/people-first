/*global window: false */
/*global document: false */
/*global Reveal: false */
(function () {
  'use strict';

  var countdown;

  function timeString(time) {
    var minutes, seconds;
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? '' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
  }

  function startTimer(duration, display) {
    var timer = duration;

    // console.log(timer);
    display.style.display = 'inline';

    countdown = window.setInterval(function () {

      display.textContent = timeString(timer);

      if (--timer < 0) {
        display.textContent = timeString(duration);
        // Audio from https://www.freesound.org/people/hykenfreak/sounds/202029/
        document.getElementById('chime').play();
        window.clearInterval(countdown);
      }
    }, 1000);
  }

  Reveal.addEventListener('slidechanged', function (e) {
    var time = e.currentSlide.getAttribute('data-timer'),
        display = document.getElementById('time');

    window.clearInterval(countdown);
    display.style.display = 'none';

    if (time) {
      time = parseFloat(time);
      display.textContent = timeString(time);
      display.style.display = 'inline';
      startTimer(time, display);
    }
  });

  // window.onload = function () {
  //   var fiveMinutes = 60 * 2,
  //     display = document.querySelector('#time');

  //   // console.log('hello')
  //   startTimer(fiveMinutes, display);
  // };
})();
