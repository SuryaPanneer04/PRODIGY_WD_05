const url ='https://api.openweathermap.org/data/2.5/weather';

const apiKey ='243ed9da65792f982be8adb948da543b';


$(document).ready(function () {
	weatherFn('chennai');
});

async function weatherFn(cName ) {
    
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    
    try{
        const res = await fetch(temp);
        const data = await res.json();

        if(res.ok){
            weatherShowFn(data);
        }else{
            alert('city not found,pls try again');
        }
    }catch (error){
        console.error('Error fetching weather data:',error);
    }
}


function weatherShowFn(data){
    
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind speed : ${data.wind.speed} m/s`);

    // $('#weather-icon').
    // attr('src',
    //     ``);
     $('#weather-info').fadeIn();
    

}