let url = 'api.openweathermap.org/data/2.5/weather?q='
let apiKey = '&appid=bbcbc22c4ee1c4bd5eecd122afbb2825';

document.getElementById('submit').addEventListener('click', console.log('Hi hi hi'));

function getWeather(e) {
    const newCity = document.getElementById('getCity').value;
    // cityWeather(url, newCity, apiKey);
    console.log(newCity)
}

// const cityWeather = async (url, city, key) => {

//     const res = await fetch(url+city+key)
//     try {

//         const data = await res.json();
//         console.log(data)
//         return data;

//     } catch (error) {
//         console.log("error", error);

//     }
// }