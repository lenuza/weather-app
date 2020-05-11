let url = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '&appid=bbcbc22c4ee1c4bd5eecd122afbb2825';
var data;
// document.getElementById('submit').addEventListener('click', getWeather);

const postData = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
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
        data = await res.json();
        console.log(data)
        //display data
        document.getElementById('show-weather').innerHTML = data.main.feels_like;

        postData('/weatherData', data);
        return data;

    } catch (error) {
        console.log('error', error);
    }
}
