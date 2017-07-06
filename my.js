$(document).ready(function() {
  var lat;
  var long;

    $.getJSON("http://ip-api.com/json",function(data2){
      lat=data2.lat;
      long=data2.lon;

      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=d9f487f67d4c783cb88f9e1104793c1a';
      $.getJSON(api, function(data) {
        var kTemp = data.main.temp;
        var fTemp = parseInt((kTemp) * (9 / 5) - 459.67);;
        var cTemp = parseInt(kTemp - 273);;
        var cloudy = data.clouds.all;
        var city = data.name;
        var id = data.weather[0].id;
        var weatherType = data.weather[0].description;
        var element = document.getElementById("swag");
        var icon = data.weather[0].icon;

//display correct weather font icon and background image based on weather id//
        if(200<= id && id <= 232) {
          element.classList.add("wi-thunderstorm");
          $('body').css('background-image', 'url(/img/lightning.jpeg)');
        } else if (300<= id && id <=321) {
          element.classList.add("wi-showers");
          $('body').css('background-image', 'url(/img/rainy.jpg)');
        } else if (500<= id && id  <=531) {
          element.classList.add("wi-rain");
          $('body').css('background-image', 'url(/img/rainy.jpg)');
        } else if (600<= id && id  <=622) {
          element.classList.add("wi-snow");
          $('body').css('background-image', 'url(/img/snow.jpeg)');
        } else if (701<= id && id <=781) {
          element.classList.add("wi-fog");
          $('body').css('background-image', 'url(/img/fog.jpeg)');
        } else if (801<= id && id  <=804) {
          element.classList.add("wi-cloudy");
          $('body').css('background-image', 'url(/img/cloudy.jpeg)');
        } else if (900<= id && id  <=962) {
          element.classList.add("wi-rain-wind");
          $('body').css('background-image', 'url(/img/rainy.jpg)');
        } else if (id === 800 && icon === "01n.png") {
          element.classList.add("wi-night-clear");
          $('body').css('background-image', 'url(/img/nightclear.jpeg)');
        } else {
          element.classList.add("wi-day-sunny");
          $('body').css('background-image', 'url(/img/sunny.jpg)');
        }
//end//

        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp+"&#176");
        $("#cTemp").html(cTemp+"&#176");
        $("#cloudy").html(cloudy);
        $("#id").html(id);

      });


});
});
