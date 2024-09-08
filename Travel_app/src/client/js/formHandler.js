import { fetchGeoData } from './apiGeonames';
import { fetchPixabayImage } from './apiPixabay';
import { getWeatherForecast } from './apiWeatherbit';
import { renderUI } from './updateUI';

export async function formHandler() {
  const cityName = document.getElementById("zip").value;
  const departureDate = document.getElementById("date").value;

  const countdownDate = Date.parse(departureDate);
  const currentDate = new Date().getTime();
  const daysUntil = Math.floor((countdownDate - currentDate) / (1000 * 60 * 60 * 24));

  let geoData = { daysUntil };  // Başlangıçta daysUntil'i ekliyoruz

  try {
    // Geonames API'den veri çekme
    const geoRes = await fetchGeoData(cityName);
    if (geoRes.geonames?.length > 0) {
      const { name, lat, lng, countryCode } = geoRes.geonames[0];
      geoData = { ...geoData, name, lat, lng, countryCode }; // geoData'ya lat, lng ve countryCode ekliyoruz

      // Eğer coğrafi veriler varsa hava durumu verilerini alalım
      if (lat && lng) {
        const weatherRes = await getWeatherForecast(geoData);
        if (weatherRes.data?.length > 0) {
          const { temp: currentTemp, weather: { icon: weatherIcon } } = weatherRes.data[0];
          geoData = { ...geoData, currentTemp, weatherIcon }; // geoData'ya sıcaklık ve hava durumu simgesi ekleniyor

          // Pixabay API'den şehir görüntüsünü alalım
          const pixabayRes = await fetchPixabayImage(cityName);
          if (pixabayRes.hits?.length > 0) {
            const image = pixabayRes.hits[0].webformatURL;
            geoData.image = image; // Görüntü geoData'ya ekleniyor

            // UI'yi güncelle
            renderUI(geoData);
          } else {
            console.error("Pixabay API'den görüntü bulunamadı.");
          }
        } else {
          console.error("Weatherbit API'den hava durumu verisi bulunamadı.");
        }
      } else {
        console.error("Coğrafi verilere ulaşılamadı (enlem/boylam eksik).");
      }
    } else {
      console.error("Geonames API'den şehir bilgisi bulunamadı.");
    }
  } catch (error) {
    console.error("formHandler'da hata oluştu:", error);
  }
}
