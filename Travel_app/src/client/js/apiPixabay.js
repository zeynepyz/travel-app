const fetchPixabayImage = async (cityName) => {
    const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
    const requestURL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(cityName)}&image_type=photo`;
  
    try {
      console.log(`Fetching image from Pixabay for: ${cityName}`);
      const response = await fetch(requestURL);
  
      if (!response.ok) {
        throw new Error(`Error fetching Pixabay API, status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        console.log(`Successfully retrieved image for: ${cityName}`);
        return data.hits[0];  // Returning the first image result
      } else {
        throw new Error(`No images found for: ${cityName}`);
      }
    } catch (error) {
      console.error(`Error fetching Pixabay data: ${error.message}`);
      return null;
    }
  };
  
  export { fetchPixabayImage };