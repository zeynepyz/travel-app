const renderUI = (geoData) => {
    // Elementi seç ve yeni içeriği eklemeye hazırlan
    const contentElement = document.querySelector("#title");
  
    // Mevcut içeriği temizle (eğer daha önce eklenmişse)
    const existingContent = document.querySelector("#content");
    if (existingContent) {
      existingContent.remove();
    }
  
    // Yeni HTML içeriği ekle
    const contentHTML = `
      <div id="content">
        <div id="content-text">
          <h3 id="destination">Destination: ${geoData.name}</h3>
          <p id="countdown">Days Until: ${geoData.daysUntil}</p>
          <p id="current-weather">Current Weather: ${geoData.currentTemp} C° 
            <img id="icon" src="https://www.weatherbit.io/static/img/icons/${geoData.weatherIcon}.png" alt="Weather Icon" />
          </p>
        </div>
        <img id="city-image" src="${geoData.image}" alt="Image of your destination" />
      </div>
    `;
  
    // Yeni içeriği "title" elementinin hemen sonrasına ekle
    contentElement.insertAdjacentHTML("afterend", contentHTML);
  };
  
  export { renderUI };
  