// renderUI fonksiyonunu import edelim
import { renderUI } from '../src/client/js/updateUI';

describe('renderUI', () => {
  beforeEach(() => {
    // Testler başlamadan önce temiz bir HTML yapısı oluşturun
    document.body.innerHTML = `
      <div id="app">
        <h1 id="title">Excited for Your Next Trip?</h1>
      </div>
    `;
  });

  test('it renders the UI with correct content', () => {
    const geoData = {
      name: 'New York',
      daysUntil: 10,
      currentTemp: 25,
      weatherIcon: 'c01d',
      image: 'https://example.com/image.jpg',
    };

    renderUI(geoData);

    const content = document.querySelector('#content');
    expect(content).toBeTruthy();
    expect(document.querySelector('#destination').textContent).toBe('Destination: New York');
    expect(document.querySelector('#countdown').textContent).toBe('Days Until: 10');
    expect(document.querySelector('#current-weather').textContent).toContain('Current Weather: 25 C°');
    expect(document.querySelector('#icon').src).toBe('https://www.weatherbit.io/static/img/icons/c01d.png');
    expect(document.querySelector('#city-image').src).toBe('https://example.com/image.jpg');
  });
});


// Birim testi için bir HTML yapı oluşturalım
document.body.innerHTML = `
  <div id="app">
    <h1 id="title">Excited for Your Next Trip?</h1>
  </div>
`;

// Test verileri (geoData) oluşturalım
const mockGeoData = {
  name: "New York",
  daysUntil: 5,
  currentTemp: 25,
  weatherIcon: "c01d",
  image: "https://example.com/newyork.jpg"
};

// 1. Fonksiyonu çalıştırarak UI'ı güncelle
renderUI(mockGeoData);

// 2. Test sonuçlarını kontrol et
const contentElement = document.querySelector("#content");
const destinationElement = document.querySelector("#destination");
const countdownElement = document.querySelector("#countdown");
const currentWeatherElement = document.querySelector("#current-weather");
const cityImageElement = document.querySelector("#city-image");

// 3. Beklenen sonuçları doğrula
if (!contentElement) {
  console.error("Hata: #content elementi bulunamadı!");
} else {
  console.log("#content elementi başarıyla eklendi.");
}

if (destinationElement.textContent === "Destination: New York") {
  console.log("Destination doğru render edildi.");
} else {
  console.error("Hata: Destination yanlış render edildi.");
}

if (countdownElement.textContent === "Days Until: 5") {
  console.log("Countdown doğru render edildi.");
} else {
  console.error("Hata: Countdown yanlış render edildi.");
}

if (currentWeatherElement.textContent.includes("25 C°")) {
  console.log("Current weather doğru render edildi.");
} else {
  console.error("Hata: Current weather yanlış render edildi.");
}

if (cityImageElement.src === "https://example.com/newyork.jpg") {
  console.log("City image doğru render edildi.");
} else {
  console.error("Hata: City image yanlış render edildi.");
}
