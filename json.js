/*
let input__help = document.querySelector('.input__help')//input
let name__sites = document.querySelector('.name__sites')//button
let london = document.querySelector('.cites__temp')//city
let temp = document.querySelector('.cites__temp_temp')//temp
let broken = document.querySelector('.Broken')

name__sites.addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=london&appid=f86223118b45e9130f61ec4aace08b5f')
    .then(response => response.json())
    .then(data =>  {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let discValue = data['weather'][0]['description']

        london.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        broken.innerHTML = discValue
        
 
    })
    .catch(err => alert('Wrong city name!'))
})
*/



