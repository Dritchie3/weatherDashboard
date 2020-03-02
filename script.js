// get todays date and the next four dates for the 5 day forcast
let when = moment();
let when2 = moment().add(1,'d');
let when3 = moment().add(2,'d');
let when4 = moment().add(3,'d');
let when5 = moment().add(4,'d');
let date = when.format("M/D/YYYY");
let date2= when2.format('M/D/YYYY');
let date3= when3.format('M/D/YYYY');
let date4= when4.format('M/D/YYYY');
let date5= when5.format('M/D/YYYY');

// Store the inputed city in the array and create a button
let cities = [];

function renderButtons() {
    var btns = $('#citiesView');
    btns.empty();
   
    for (i=0; i<cities.length; i++) {
        var newBtn = $('<button>');
        newBtn.text(cities[i]);
        newBtn.attr('cityName', cities[i]);
        newBtn.css('width', '100%');
        btns.append(newBtn);                
      }    
    }; 

// Onclick function to start the quuery for the city entered
// create 2 onclick events to start function make a function



$("#addCity").on("click", function() {
    event.preventDefault();
        var cityName = $('#cityInput').val();
        cities.push($('#cityInput').val());
        $('#cityInput').val('')
        console.log(cityName);
        // query openweathermap todays weather
        var queryURL ='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=6d38855c9713d8c7df4486fb228ef4f5&units=imperial';
        // query openweathermap 5 day forcast
        var queryURL5Day ='https://api.openweathermap.org/data/2.5/forecast?q='+ cityName +',us&mode=json&appid=6d38855c9713d8c7df4486fb228ef4f5&units=imperial';
        renderButtons();

    // Ajax query for the 5 day forcast
    $.ajax({
        url: queryURL5Day,
        method: "GET"
    })
    .then(function(response5Day) {
        $('#day1Date').empty();
        $('#day1Icon').empty();
        $('#day1Temp').empty();
        $('#day1Humidity').empty();
        $('#day2Date').empty();
        $('#day2Icon').empty();
        $('#day2Temp').empty();
        $('#day2Humidity').empty();
        $('#day3Date').empty();
        $('#day3Icon').empty();
        $('#day3Temp').empty();
        $('#day3Humidity').empty();
        $('#day4Date').empty();
        $('#day4Icon').empty();
        $('#day4Temp').empty();
        $('#day4Humidity').empty();
        $('#day5Date').empty();
        $('#day5Icon').empty();
        $('#day5Temp').empty();
        $('#day5Humidity').empty();
        
        // Data for day 1       
        let iconCode1 = response5Day.list[0].weather[0].icon;
        $('#day1Date').append(date).css('font-size', '70%');
        $('#day1Icon').append('<img src="http://openweathermap.org/img/w/' + iconCode1 + '.png"/>');
        $('#day1Temp').text('Temp: ' + response5Day.list[0].main.temp + '℉').css('font-size', '70%');
        $('#day1Humidity').text('Humidity: ' + response5Day.list[0].main.humidity + '%').css('font-size', '70%');

        // Data for day 2
        let iconCode2 = response5Day.list[1].weather[0].icon;
        $('#day2Date').append(date2).css('font-size', '70%');
        $('#day2Icon').append('<img src="http://openweathermap.org/img/w/' + iconCode2 + '.png"/>');
        $('#day2Temp').text('Temp: ' + response5Day.list[1].main.temp + '℉').css('font-size', '70%');
        $('#day2Humidity').text('Humidity: ' + response5Day.list[1].main.humidity + '%').css('font-size', '70%');

        // Data for day 3
        let iconCode3 = response5Day.list[2].weather[0].icon;
        $('#day3Date').append(date3).css('font-size', '70%');
        $('#day3Icon').append('<img src="http://openweathermap.org/img/w/' + iconCode3 + '.png"/>');
        $('#day3Temp').text('Temp: ' + response5Day.list[2].main.temp + '℉').css('font-size', '70%');
        $('#day3Humidity').text('Humidity: ' + response5Day.list[2].main.humidity + '%').css('font-size', '70%');

        // Data for day 4
        let iconCode4 = response5Day.list[3].weather[0].icon;
        $('#day4Date').append(date4).css('font-size', '70%');
        $('#day4Icon').append('<img src="http://openweathermap.org/img/w/' + iconCode4 + '.png"/>');
        $('#day4Temp').text('Temp: ' + response5Day.list[3].main.temp + '℉').css('font-size', '70%');
        $('#day4Humidity').text('Humidity: ' + response5Day.list[3].main.humidity + '%').css('font-size', '70%');

        // Data for day 5
        let iconCode5 = response5Day.list[4].weather[0].icon;
        $('#day5Date').append(date5).css('font-size', '70%');
        $('#day5Icon').append('<img src="http://openweathermap.org/img/w/' + iconCode1 + '.png"/>');
        $('#day5Temp').text('Temp: ' + response5Day.list[4].main.temp + '℉').css('font-size', '70%');
        $('#day5Humidity').text('Humidity: ' + response5Day.list[4].main.humidity + '%').css('font-size', '70%');
    });
    // ajax query for current 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        $('#enteredCity').text(cityName);
        $('#temp').text('Temperature: ' + (Math.floor(response.main.temp * 10))/10 + "℉");  
        console.log('temp', response.main.temp);
        $('#humidity').text('Humidity: ' + response.main.humidity + ' %');
        console.log('humidity', response.main.humidity);
        $('#windSpeed').text('Wind Speed: ' + response.wind.speed + ' MPH');
        console.log('Wind Speed', response.wind.speed);

        let lat = response.coord.lat;
        console.log('lat', lat);
        let lon = response.coord.lon;
        console.log('lon' , lon);
    
        // queryURL for UV Index
        var queryURLuv ='https://api.openweathermap.org/data/2.5/uvi?appid=6d38855c9713d8c7df4486fb228ef4f5&lat=' + lat + '&lon=' + lon;
        console.log(queryURLuv);
        
        // ajax query for UV Index   
        $.ajax({
            url: queryURLuv,
            method: "GET"
        })
        .then(function(responseUv) {
            $('#uvIndex').text('UV Index: ' + responseUv.value).css('background-color','red').width('105px');
            

      });
    });

    });

    




    