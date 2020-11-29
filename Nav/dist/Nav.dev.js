"use strict";

// let click__menu = document.querySelector('#menu__smoll');
// click__menu.onclick = function f5 () {   
//     let menu__see = document.querySelector('.navigation');   
//     menu__see.style.display = 'flex';
//     if (menu__see.style.display == 'flex') {
//         click__menu.onclick = () => {
//             menu__see.style.display = 'none';
//         } 
//     }
// }     
// if( document.getElementById(id).style.display=='none') document.getElementById(id).style.display='block';
// else document.getElementById(id).style.display='none';
document.querySelector('#menu__smoll').onclick = function () {
  var ressu = document.querySelector('.navigation ');

  if (ressu.style.display == 'flex') {
    ressu.style.display = 'none';
  } else {
    ressu.style.display = 'flex';
  }
};