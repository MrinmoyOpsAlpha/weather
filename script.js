
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '546b586490msha7951b9b563d95cp17244ajsndcc71ae1a6b2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cities = [
    { name: 'Delhi', rowId: 'delhiRow' },
    { name: 'Mumbai', rowId: 'mumbaiRow' },
    { name: 'Kolkata', rowId: 'kolkataRow' },
    { name: 'Chennai', rowId: 'chennaiRow' }
  ];
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };
  
  
  const updateWeatherData = (city, rowId) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then((response) => {
        const row = document.getElementById(rowId);
        row.cells[1].textContent = response.cloud_pct;
        row.cells[2].textContent = response.feels_like;
        row.cells[3].textContent = response.humidity;
        row.cells[4].textContent = response.max_temp;
        row.cells[5].textContent = response.min_temp;
        row.cells[6].textContent = formatTime(response.sunrise);
        row.cells[7].textContent = formatTime(response.sunset);
        row.cells[8].textContent = response.temp;
        row.cells[9].textContent = response.wind_degrees;
        row.cells[10].textContent = response.wind_speed;
      })
      .catch(err => console.error(err));
  };
  
  cities.forEach(city => {
    const cityCell = document.getElementById(city.rowId);
    cityCell.cells[0].textContent = city.name;
    updateWeatherData(city.name, city.rowId);
  });


const getWeather = (city) =>{
    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
.then(response => response.json())
.then((response) =>{
    console.log(response)

    //cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp    
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees 
    sunrise.innerHTML = formatTime(response.sunrise)
    sunset.innerHTML = formatTime(response.sunset)
})
.catch(err =>console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Silchar")