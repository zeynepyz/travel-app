const fetchGeoData = async (cityName) => {
    const geoURL = "http://api.geonames.org/searchJSON";
    const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;
    const requestURL = `${geoURL}?q=${encodeURIComponent(cityName)}&maxRows=1&username=${GEONAMES_USERNAME}`;
  
    try {
      console.log(`Fetching data from Geonames for city: ${cityName}`);
      const response = await fetch(requestURL);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch from Geonames API, status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.geonames && data.geonames.length > 0) {
        console.log(`Successfully retrieved data for: ${cityName}`);
        return data.geonames[0];  // Only returning the first result
      } else {
        throw new Error(`No results found for: ${cityName}`);
      }
    } catch (error) {
      console.error(`Error fetching data from Geonames: ${error.message}`);
      return null;
    }
  };
  
  export { fetchGeoData };