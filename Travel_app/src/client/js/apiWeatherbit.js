const getWeatherForecast = async (coordinates) => {
    const baseURL = "https://api.weatherbit.io/v2.0/forecast/daily";
    const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
    const { lat, lng } = coordinates;
    const requestURL = `${baseURL}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&key=${WEATHERBIT_API_KEY}`;
  
    try {
      console.log(`Fetching weather data for coordinates: lat=${lat}, lon=${lng}`);
      const response = await fetch(requestURL);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch Weatherbit API, status: ${response.status}`);
      }
  
      const weatherData = await response.json();
      console.log("Weatherbit API Response:", weatherData);
      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
  };
  
  export { getWeatherForecast };