

$("#addCity").on("click", function(event) {
    event.preventDefault();
    cities.push($('#cityInput').val());
    renderButtons();
});

//Store the inputed city in the array and create a button
let cities = [];

function renderButtons() {
    var btns = $('#citiesView');
    btns.empty();
    

    for (i=0; i<cities.length; i++) {
        var newBtn = $('<button>');
        newBtn.text(cities[i]);
        newBtn.attr('cityName', i);        
        btns.append(newBtn);        
      }
    
    }; 


$("#addCity").on("click", function() {
    event.preventDefault();
    var cityName = $('#city');
    var addCity = $('#addCity').val;
    var movie = $(this).attr("data-name");
    console.log('addCity', addCity);
    var queryURL ='https://api.openweathermap.org/data/2.5/forecast?q='+ addCity +',us&mode=xml&appid=6d38855c9713d8c7df4486fb228ef4f5';
    console.log('queryURL', queryURL);

    

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log('response', response);
        console.log('response.data', response.data);
      });

    });

    // renderButtons();




    