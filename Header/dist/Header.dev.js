"use strict";

var menu_map = document.getElementById('menu_map');
menu_map.addEventListener('click', fuc);
menu_map.addEventListener('blur', funck);

function fuc() {
  document.getElementById('mer').style.display = 'flex';
}

function funck() {
  document.getElementById('mer').style.display = 'none';
}

document.querySelector('.menu').onclick = function () {
  var menu = document.querySelectorAll('.menu');

  for (var i = 0; i < menu.length; i++) {
    menu[0].style.display = 'flex';
  }

  menu[1].style.display = 'flex';
  menu[2].style.display = 'flex';
  menu[3].style.display = 'flex';
  menu[4].style.display = 'flex';
  menu[5].style.display = 'flex';
  var menu1 = document.querySelector('#menu');
  menu1.addEventListener('blur', function () {
    menu[1].style.display = 'none';
    menu[2].style.display = 'none';
    menu[3].style.display = 'none';
    menu[4].style.display = 'none';
    menu[5].style.display = 'none';
    menu[6].style.display = 'none';
  });
};