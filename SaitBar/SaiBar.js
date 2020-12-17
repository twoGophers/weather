let images = ['1.jpg','2.jpg','3.jpg']
let slider = document.querySelector('.NEWS__images')
let img = slider.querySelector('.images_news')
let delay = 5000

let i = 0
window.setInterval(function() {
    img.src = 'Images/img/' + images[i]
    i++
    if( i == images.length) {
        i = 0
    }
}, delay)





