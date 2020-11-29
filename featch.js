let input__help = document.querySelector('.input__help')//input
let name__sites = document.querySelector('.name__sites')//button

name__sites.addEventListener('click',function() {

    const city = input__help.value;  
    let cit = input__help.value;

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=f86223118b45e9130f61ec4aace08b5f')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
        console.log(data.name);
        let cites__temp = document.querySelectorAll('.cites__temp');
        for(let i = 0; i < cites__temp.length; i = i + 1) {
            cites__temp[i].textContent = data.name;
        }
        
        document.querySelector('.cites__temp_temp').innerHTML = Math.round(data.main.temp - 273) + "&deg";
        document.querySelector('.Broken').textContent = data.weather[0]['description'];
        document.querySelector('.humidity').textContent = 'humidity' + ':'+' ' + data.main['humidity'] +'%';    
        document.querySelector('.wind').textContent = 'wind'+ ':'+ data.wind['speed'] + 'M/s';
        document.querySelector('.cites__temp_icon').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">` ;
        
    })

    .catch(function (error) {
    console.log(error)


});

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ cit +'&appid=f86223118b45e9130f61ec4aace08b5f')
.then(function (res) {return res.json() })
.then(function(datas) {


    let img__week = document.querySelectorAll('.img__week p');

    for(let i = 0; i < img__week.length; i++) {
        let arr__img = '';            

        for(let j = 0; j < datas.list.length; j++) {
                arr__img += datas.list[j];

             if( arr__img[j] <= 7 ) {
                 img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${datas.list[j].weather[0].icon}@2x.png">` ;
            } 
            else if ( arr__img[j] >= 8 && j <= 15) {
                img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${datas.list[j].weather[0].icon}@2x.png">` ;
            } 
            else if ( arr__img[j] >= 16 && j <= 24) {
                img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${datas.list[j].weather[0].icon}@2x.png">` ;
            } 
            else if ( arr__img[j] >= 25 && j <= 31) {
                img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${datas.list[j].weather[0].icon}@2x.png">` ;
             }
            else if ( arr__img[j]>= 32 && j <= 39) {
                img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${datas.list[j].weather[0].icon}@2x.png">` ;
            };
        };
    };
   

    let SUN = document.querySelector('.SUN'); 
    let MON = document.querySelector('.MON');
    let TUE = document.querySelector('.TUE');  
    let WED = document.querySelector('.WED');
    let FRI = document.querySelector('.FRI');

    let arr = '';
   
        for(let i = 0; i <= 39; i++) {
            arr = datas.list[i].main.temp;
            arr = parseInt(arr);

                if( i <= 7) {
                SUN.innerHTML =  Math.round(arr - 273) + "&deg";
            } else if ( i >= 8 && i <= 15) {
                MON.innerHTML = Math.round(arr - 273) + "&deg";
            } else if ( i >= 16 && i <= 24) {
                TUE.innerHTML = Math.round(arr - 273) + "&deg";
            } else if ( i >= 25 && i <= 31) {
                WED.innerHTML = Math.round(arr - 273) + "&deg";
            } else if ( i >= 32 && i <= 39) {
                FRI.innerHTML = Math.round(arr - 273) + "&deg";
            };
            
            
        };
            //arr += datas.list[0].main.temp

})


.catch(function () {

});

});

