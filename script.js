async function getWeather() {
    const apiKey = '0ca94c3845a60f37efcc5b5ea7440e4c';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
        const data = await response.json();
console.log(data);
        if (response.ok) {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            weatherInfo.innerHTML = `<h2>Weather in ${name}</h2>
                                    <p>Temperature: ${temperature} °C</p>
                                    <p>Description: ${description}</p>
                                    <p>Thank you for using our open source api</p>`;
        } else {
            weatherInfo.innerHTML = '<p>City not found</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Something went wrong</p>';
    }
}
