import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

const FormInput = () => {
    const API_KEY = "110ad1cbf92a4ea7b14103734250505";
    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(true);

    const handleForm = (formData) => {
        const city = formData.get("city");
        fetchWeather(city);
    };

    const fetchWeather = async (city) => {
        const weather = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        const res = await weather.json();
        console.log(res);
        setWeatherData(res);
    };

    

    return (
        <>
            <form action={handleForm} className="flex  gap-2 my-6">
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter a city.."
                    className="w-[60%] bg-slate-400/20 p-2 rounded-md grow"
                />
                {/* <input  className="bg-[#ff00fb] px-6 rounded-md grow" type="submit" value="Search" /> */}
                <button className="bg-[#ff00fb] px-6 rounded-md grow">
                    Search
                </button>
            </form>
            {weatherData && <WeatherInfo data={weatherData} />}
        </>
    );
};

export default FormInput;
