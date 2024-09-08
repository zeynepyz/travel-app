import './styles/style.scss';
import { formHandler } from './js/formHandler';
import { fetchGeoData } from './js/apiGeonames';
import { fetchPixabayImage } from './js/apiPixabay';
import { getWeatherForecast } from './js/apiWeatherbit';
import { renderUI } from './js/updateUI';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener("click", formHandler);
});


export { fetchGeoData, fetchPixabayImage, getWeatherForecast, renderUI, formHandler };