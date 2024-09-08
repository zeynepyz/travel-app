import { fetchGeoData } from './apiGeonames';
import { fetchPixabayImage } from './apiPixabay';
import { getWeatherForecast } from './apiWeatherbit';
import { renderUI } from './updateUI';

const Client = {
  fetchGeoData,
  fetchPixabayImage,
  getWeatherForecast,
  renderUI
};

export default Client;