const updateWeatherInfo = (city, temperature, humidity, windSpeed, feels_like, cloud_pct) => {
	document.getElementById("cityName").textContent = city;
	document.getElementById("temperature").textContent = temperature;
	document.getElementById("humidity").textContent = humidity;
	document.getElementById("windSpeed").textContent = windSpeed;
	document.getElementById("feels_like").textContent = feels_like;
	document.getElementById("cloud_pct").textContent = cloud_pct;
}

const fetchWeatherData = async (city) => {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "017eadc647mshddcd1f1c6d44877p1bef56jsn47d87e396a73",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		if (response.status === 200) {
			const result = await response.json();
			console.log(result);

			const temperature = result.temp;
			const humidity = result.humidity;
			const windSpeed = result.wind_speed;
			const feels_like = result.feels_like;
			const cloud_pct = result.cloud_pct;
			updateWeatherInfo(city, temperature, humidity, windSpeed, feels_like, cloud_pct);

			// if(temperature < 20){
			// 	weatherImg.innerHTML ="<i class='big-weather fa-solid fa-cloud-rain'></i>"
			// }
			// else if(temperature = 20){
			// 	weatherImg.innerHTML ="<i class='big-weather fa-solid fa-cloud-rain'></i>"
			// }
			// else{
			// 	weatherImg.innerHTML ="<i class='big-weather fa-solid fa-sun'></i>"
			// }
		} else {
			alert("City not found. Please enter a valid city name.");
		}
	} catch (error) {
		console.error(error);
	}
	
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

const Search = () => {
	const cityInput = document.getElementById("input");
	const city = capitalize(cityInput.value);

	if (city.trim() !== "") {
		fetchWeatherData(city);
	} else {
		alert("Please enter a city name.");
	}
};

fetchWeatherData("Delhi");