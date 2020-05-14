let url = 'https://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&units=imperial&appid=bbcbc22c4ee1c4bd5eecd122afbb2825';
// var weatherData;
let content = document.getElementById('feelings');

//listen for click event
// document.getElementById('generate').addEventListener('click', getWeather);

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

//get the city and then fetch, post and update UI
function getWeather() {
    const newZip = document.getElementById('zip').value;
    cityWeather(url, newZip, apiKey)
    .then(function(data){
        console.log(new Date());
        postData('/weatherData', {
            temperature: data.main.temp,
            city: data.name,
            date: new Date(),
            content: content.value
        })
    })
    .then(function (){
        getData();
    })

}

//fetch data from the weather api
const cityWeather = async (url, zip, key) => {

    const res = await fetch(url + zip + key)
    try {
        const weatherData = await res.json();

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
        document.getElementById('city').innerHTML = allData.newEntry.city;
        document.getElementById('date').innerHTML = allData.newEntry.date;
        document.getElementById('temp').innerHTML = allData.newEntry.temperature;
        document.getElementById('content').innerHTML = allData.newEntry.content;

        feelings.value = '';
    } catch (error) {
        console.log("error", error);
    }
}
