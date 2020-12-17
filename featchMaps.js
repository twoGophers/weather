window.onload = () => {


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

                    //Name city
                    document.querySelector('.maps__content').innerHTML = response.location.data.city;


                    //fetch по координатам города
                    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+response.location.data.city+'&appid=f86223118b45e9130f61ec4aace08b5f')
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {

                                                                
                                          
console.log(response.location.data.city)
                                            const Namelat = data.city.coord.lat;
                                            const Namelon = data.city.coord.lon;

                                                const aeris1 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris1.views().then(views => {
                                                    const map1 = new views.InteractiveMap(document.getElementById('map1'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 12,
                                                        layers: 'blue-marble,satellite-geocolor,satellite-watervapor,roads'
                                                    });
                                                });
                                            
                                            
                                            
                                                const aeris2 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris2.views().then(views => {
                                                    const map2 = new views.InteractiveMap(document.getElementById('map2'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 10,
                                                        layers: 'flat-dk,satellite-geocolor,satellite,fradar,roads'
                                                    });
                                                });
                                            
                                            
                                                const aeris3 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris3.views().then(views => {
                                                    const map3 = new views.InteractiveMap(document.getElementById('map3'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 8,
                                                        layers: 'blue-marble,satellite-geocolor,admin'
                                                    });
                                                });
                                            
                                            
                                                const aeris4 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris4.views().then(views => {
                                                    const map4 = new views.InteractiveMap(document.getElementById('map4'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 6,
                                                        layers: 'terrain,fradar,radar,admin'
                                                    });
                                                });
                                            
                                            
                                                const aeris5 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris5.views().then(views => {
                                                    const map5 = new views.InteractiveMap(document.getElementById('map5'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 5,
                                                        layers: 'terrain,radar-global,admin,roads'
                                                    });
                                                });
                                            
                                            
                                                const aeris6 = new AerisWeather('9PD9WEBUKlwk15uCa7z35', 'dWM5OjwFrPdJuF2dYbx3Um9SaNzwVoaCZvFA31RO');
                                                aeris6.views().then(views => {
                                                    const map6 = new views.InteractiveMap(document.getElementById('map6'), {
                                                        center: {
                                                            lat: Namelat,
                                                            lon: Namelon
                                                        },
                                                        zoom: 5,
                                                        layers: 'terrain,radar-global,satellite-water-vapor,admin,roads'
                                                    });
                                                });
                        
                                
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



