"use strict";

var images = ['1.jpg', '2.jpg', '3.jpg'];
var slider = document.querySelector('.NEWS__images');
var img = slider.querySelector('.images_news');
var delay = 5000;
var i = 0;
window.setInterval(function () {
  img.src = 'Images/img/' + images[i];
  i++;

  if (i == images.length) {
    i = 0;
  }
}, delay);