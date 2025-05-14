import React from "react";

const WeatherInfo = ({ data: { location, current } }) => {
    return (
        <section className="my-6">
            <section className="flex justify-between">
                <div className="left border-2">
                    <h2>{location.name}</h2>
                    <p>{new Date().toLocaleString("en-US", { weekday: "long" })}</p> {/* Dynamically fetch current weekday */}
                    <p>{current.condition.text}</p> {/* Dynamic condition text, e.g., "Rainy" */}
                </div>

                <div className="right border-2">
                    <h2>{current.temp_c}°C</h2> {/* Dynamic temperature in Celsius */}
                    <p>{current.temp_f}°F</p> {/* Dynamic temperature in Fahrenheit */}
                </div>
            </section>

            <section className="flex justify-between">
                <div className="info border-2">
                    <h2>Humidity</h2>
                    <p>{current.humidity}%</p> {/* Dynamic humidity */}
                </div>
                <div className="info border-2">
                    <h2>Wind Speed</h2>
                    <p>{current.wind_kph} km/h</p> {/* Dynamic wind speed */}
                </div>
                <div className="info border-2">
                    <h2>Feels Like</h2>
                    <p>{current.feelslike_c}°C</p> {/* Dynamic feels-like temperature */}
                </div>
                <div className="info border-2">
                    <h2>Visibility</h2>
                    <p>{current.vis_km} km</p> {/* Dynamic visibility */}
                </div>
            </section>
        </section>
    );
};

export default WeatherInfo;
