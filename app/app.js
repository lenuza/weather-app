let url = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '&appid=bbcbc22c4ee1c4bd5eecd122afbb2825';
var weatherData;
let feelings = document.getElementById('feelings');
document.getElementById('generate').addEventListener('click', getWeather);

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
    console.log('client post done');
}

function getWeather() {
    const newCity = document.getElementById('getCity').value;
    cityWeather(url, newCity, apiKey);
    console.log(newCity)
}

const cityWeather = async (url, city, key) => {

    const res = await fetch(url + city + key)
    try {
        weatherData = await res.json();
        console.log(weatherData)

        postData('/weatherData', weatherData)
        getData()
        // performAction();
        return weatherData;

    } catch (error) {
        console.log('error', error);
    }
}

const getData = async (url = '/getWeatherData') => {

    const request = await fetch(url);

    try {
        const allData = await request.json();
        console.log(allData)
        document.getElementById('city').innerHTML = allData[0].name;
        document.getElementById('date').innerHTML = new Date();
        document.getElementById('temp').innerHTML = allData[0].main.temp;
        document.getElementById('content').innerHTML = feelings.value;

        feelings.value = '';
    } catch (error) {
        console.log("error", error);
    }
}