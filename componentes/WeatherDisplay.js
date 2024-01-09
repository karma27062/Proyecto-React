// componentes/WeatherDisplay.js
import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      const apiKey = 'b5beff4ad38d425981b74426240901'; // Tu clave API
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error al obtener datos del clima: ", error);
      }
    };

    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    }, (error) => {
      console.error("Error al obtener la ubicación: ", error);
    });
  }, []);

  if (!weather) {
    return <div>Cargando datos del clima...</div>;
  }

  return (
    <div>
      <h2>El clima en {weather.location.name}</h2>
      <p>Temperatura: {weather.current.temp_c} °C</p>
      <p>Humedad: {weather.current.humidity} %</p>
      {/* Renderiza más datos del clima si es necesario */}
    </div>
  );
};

export default WeatherDisplay;
