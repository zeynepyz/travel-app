# Travel Planner Application

This application helps users plan their trips by fetching relevant weather data and displaying images of the destination. The app utilizes multiple APIs to provide current and future weather forecasts based on the user's travel date and location.

## Table of Contents

- [Overview](#overview)
- [APIs Used](#apis-used)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)

## Overview

This travel application accepts a location and departure date from the user and returns:
1. **Current Weather Forecast** if the trip is within a week.
2. **Predicted Weather Forecast** if the trip is in the future.
3. **Image** of the travel destination.

### Key Features:
- Fetches weather data using the **Weatherbit API**.
- Retrieves coordinates for the location from the **Geonames API**.
- Displays images of the travel destination using the **Pixabay API**.

## APIs Used

### 1. **Geonames API**
   - Purpose: Get latitude and longitude coordinates for a given location.
   - API Docs: [Geonames API Documentation](https://www.geonames.org/export/web-services.html)

### 2. **Weatherbit API**
   - Purpose: Get weather forecast data (current or predicted) based on coordinates.
   - API Docs: [Weatherbit API Documentation](https://www.weatherbit.io/api)

### 3. **Pixabay API**
   - Purpose: Fetch an image of the travel destination based on the location name.
   - API Docs: [Pixabay API Documentation](https://pixabay.com/api/docs/)

## How It Works

1. The user submits a location and a departure date via a simple form.
2. The app sends the location to the **Geonames API** to retrieve the geographical coordinates (latitude and longitude).
3. Based on the proximity of the departure date:
   - If the trip is within 7 days, the app fetches the current weather forecast using the **Weatherbit API**.
   - If the trip is more than 7 days away, it fetches the predicted forecast from the same API.
4. The app sends the location name to the **Pixabay API** to retrieve an image of the destination.
5. All this data (weather and image) is displayed to the user.

## Installation

### Prerequisites:
- Node.js v22 (for running JavaScript)
- API keys for **Geonames**, **Weatherbit**, and **Pixabay** (sign up on their respective websites to get these).

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travel-planner.git
2. Install dependencies:
    npm install
3. Set up environment variables:
    Create a .env file in the root directory.
    Add the following keys with your API information:
        GEONAMES_USERNAME=your_geonames_username
        WEATHERBIT_API_KEY=your_weatherbit_api_key
        PIXABAY_API_KEY=your_pixabay_api_key
4. Run the application:
    npm start


