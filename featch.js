window.onload = () => {



//Идет поиск города по нажатию кнопки

        let input__help = document.querySelector('.input__help')//input
        let name__sites = document.querySelector('.name__sites')//button

        name__sites.addEventListener('click',function() {

        const city = input__help.value;  


    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=f86223118b45e9130f61ec4aace08b5f')
        .then(function (resp) { return resp.json() })
        .then(function (data) {

        console.log(data);

        let cites__temp = document.querySelectorAll('.cites__temp');
        for(let i = 0; i < cites__temp.length; i = i + 1) {
            cites__temp[i].textContent = data.city.name;
        }
        
        document.querySelector('.cites__temp_temp').innerHTML = Math.round(data.list[0].main.temp - 273) + "&deg";
        document.querySelector('.Broken').textContent = data.list[0].weather[0]['description'];
        document.querySelector('.humidity').textContent = 'humidity' + ':'+' ' + data.list[0].main.humidity +'%';     
        document.querySelector('.wind').textContent = 'wind'+ ':'+ data.list[0].wind.speed + ' ' +'M/s';
        document.querySelector('.cites__temp_icon').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png">` ;
        let img__week = document.querySelectorAll('.img__week p');



        //images weather
        for(let i = 0; i < img__week.length; i++) {
            let arr__img = '';            

            for(let j = 0; j < data.list.length; j++) {
                    arr__img += data.list[j];

                 if( arr__img[j] <= 7 ) {
                     img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                } 
                else if ( arr__img[j] >= 8 && j <= 15) {
                    img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                } 
                else if ( arr__img[j] >= 16 && j <= 24) {
                    img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                } 
                else if ( arr__img[j] >= 25 && j <= 31) {
                    img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                 }
                else if ( arr__img[j]>= 32 && j <= 39) {
                    img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                }
            }
        }
       
        let SUN = document.querySelector('.SUN'); 
        let MON = document.querySelector('.MON');
        let TUE = document.querySelector('.TUE');  
        let WED = document.querySelector('.WED');
        let FRI = document.querySelector('.FRI');
       
        let arr = '';
       
            for(let i = 0; i <= 39; i++) {
                arr = data.list[i].main.temp;
                arr = parseInt(arr)

                if( i <= 7) {
                    SUN.innerHTML =  Math.round(arr - 273) + "&deg";
                } else if ( i >= 8 && i <= 15) {
                    MON.innerHTML =  Math.round(arr - 273) + "&deg";
                } else if ( i >= 16 && i <= 24) {
                    TUE.innerHTML =   Math.round(arr - 273) + "&deg";
                } else if ( i >= 25 && i <= 31) {
                    WED.innerHTML =   Math.round(arr - 273) + "&deg";
                } else if ( i >= 32 && i <= 39) {
                    FRI.innerHTML =  + Math.round(arr - 273) + "&deg";
                }              
            }
    })

    .catch(function (error) {
    console.log(error)
})

})

// Функция с картами, загружается при загрузки страницы
                //  API-ключ
                    var token = "22d5f7d45669155594db0ea82073fde836e50c1e";

                    function iplocate(ip) {
                    var serviceUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address";
                    if (ip) {
                        serviceUrl += "?ip=" + ip;
                    }
                    var params = {
                        type: "GET",
                        contentType: "application/json",
                        headers: {
                        "Authorization": "Token " + token
                        }
                    };
                        return $.ajax(serviceUrl, params);
                    }

                    function detect() {
                    var ip = $("#ip").val();
                    iplocate(ip).done(function(response) {
                        $("#suggestions").text(JSON.stringify(response, null, 4));




                        //fetch по координатам города
                        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+response.location.data.city+'&appid=f86223118b45e9130f61ec4aace08b5f')
                        .then(function (resp) { return resp.json() })
                        .then(function (data) {

                                                                    

                            const aeris = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                            aeris.views().then(views => {
                                const map = new views.InteractiveMap(document.getElementById('map'), {
                                    center: {
                                        lat: Namelat,
                                        lon: Namelat
                                    },
                                    zoom: 5,
                                    layers: 'terrain,radar-global,admin-dk,counties'
                                });
                            });
                        
                        
                            
                                const aeriss = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                aeriss.views().then(views => {
                                    const map = new views.InteractiveMap(document.getElementById('maps'), {
                                        center: {
                                            lat: Namelat,
                                            lon: Namelat
                                        },
                                        zoom: 5,
                                        layers: 'blue-marble,radar-global,satellite-geocolor,states'
                                    });
                                });




                                                let cites__temp = document.querySelectorAll('.cites__temp');
                                                for(let i = 0; i < cites__temp.length; i = i + 1) {
                                                    cites__temp[i].textContent = data.city.name;
                                                }
                                                
                                                document.querySelector('.cites__temp_temp').innerHTML = Math.round(data.list[0].main.temp - 273) + "&deg";
                                                document.querySelector('.Broken').textContent = data.list[0].weather[0]['description'];
                                                document.querySelector('.humidity').textContent = 'humidity' + ':'+' ' + data.list[0].main.humidity +'%';     
                                                document.querySelector('.wind').textContent = 'wind'+ ':'+ data.list[0].wind.speed + ' ' +'M/s';
                                                document.querySelector('.cites__temp_icon').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png">` ;
                                                let img__week = document.querySelectorAll('.img__week p');
console.log(response.location.data.city)
                                                const Namelat = data.city.coord.lat;
                                                const Namelon = data.city.coord.lon;

                                                //images weather
                                                for(let i = 0; i < img__week.length; i++) {
                                                    let arr__img = '';            

                                                    for(let j = 0; j < data.list.length; j++) {
                                                            arr__img += data.list[j];

                                                        if( arr__img[j] <= 7 ) {
                                                            img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                                                        } 
                                                        else if ( arr__img[j] >= 8 && j <= 15) {
                                                            img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                                                        } 
                                                        else if ( arr__img[j] >= 16 && j <= 24) {
                                                            img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                                                        } 
                                                        else if ( arr__img[j] >= 25 && j <= 31) {
                                                            img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                                                        }
                                                        else if ( arr__img[j]>= 32 && j <= 39) {
                                                            img__week[i].innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png">` ;
                                                        }
                                                    }
                                                }
                                            
                                                let SUN = document.querySelector('.SUN'); 
                                                let MON = document.querySelector('.MON');
                                                let TUE = document.querySelector('.TUE');  
                                                let WED = document.querySelector('.WED');
                                                let FRI = document.querySelector('.FRI');
                                            
                                                let arr = '';
                                            
                                                    for(let i = 0; i <= 39; i++) {
                                                        arr = data.list[i].main.temp;
                                                        arr = parseInt(arr)

                                                        if( i <= 7) {
                                                            SUN.innerHTML =  Math.round(arr - 273) + "&deg";
                                                        } else if ( i >= 8 && i <= 15) {
                                                            MON.innerHTML =  Math.round(arr - 273) + "&deg";
                                                        } else if ( i >= 16 && i <= 24) {
                                                            TUE.innerHTML =   Math.round(arr - 273) + "&deg";
                                                        } else if ( i >= 25 && i <= 31) {
                                                            WED.innerHTML =   Math.round(arr - 273) + "&deg";
                                                        } else if ( i >= 32 && i <= 39) {
                                                            FRI.innerHTML =  + Math.round(arr - 273) + "&deg";
                                                        }              
                                                    };

                                        

                            
                                      
                            
                                    
                                    })
                
                        .catch(function (error) {
                            console.log(error)
                        });


                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                        console.log(errorThrown);
                    });
                    }

                    $("#ip").on("change", detect);

                    detect();







       
        
};

