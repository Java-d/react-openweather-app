// Set your OpenWeather API key here
const API_KEY = "54844826348540e3d5e2da0fc8acadc2";

//Don't modify
let API_URL_TEMPLATE = `//api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=##CITY##`;

export const apiUrl = city => {
    return API_URL_TEMPLATE.replace(/(##CITY##)/, city);
};

export const citiesUrl = "https://restcountries.eu/rest/v2/all";
