let url = 'https://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&units=imperial&appid=bbcbc22c4ee1c4bd5eecd122afbb2825';
var weatherData;
let feelings = document.getElementById('feelings');

//listen for click event
document.getElementById('generate').addEventListener('click', getWeather);

//async post request
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
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

//get the city
function getWeather() {
    const newZip = document.getElementById('zip').value;
    cityWeather(url, newZip, apiKey);
}

//fetch data from the weather api
const cityWeather = async (url, zip, key) => {

    const res = await fetch(url + zip + key)
    try {
        weatherData = await res.json();

        //display fetched data
        document.getElementById('city').innerHTML = weatherData.name;
        document.getElementById('date').innerHTML = new Date();
        document.getElementById('temp').innerHTML = weatherData.main.temp;
        document.getElementById('content').innerHTML = feelings.value;

        //call post request
        postData('/weatherData', { weather: weatherData, feelings: feelings.value} )
        getData()
        return weatherData;

    } catch (error) {
        console.log('error', error);
    }
}

// async get request
const getData = async (url = '/getWeatherData') => {

    const request = await fetch(url);

    try {
        const allData = await request.json();

        feelings.value = '';
    } catch (error) {
        console.log("error", error);
    }
}