let menu_map = document.getElementById('menu_map')
menu_map.addEventListener('click',fuc)
menu_map.addEventListener('blur', funck)
function fuc() {
document.getElementById('mer').style.display = 'flex'
}
function funck() {
    document.getElementById('mer').style.display = 'none'
}




