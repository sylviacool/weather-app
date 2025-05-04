import React from "react";
import WeatherHead from "./WeatherHead";
import FormInput from "./FormInput";
import WeatherInfo from "./WeatherInfo";
import WeatherFoot from "./WeatherFoot";

const WeatherCard = () => {
    return (
        <section className="border-2 w-[70vw] p-6">
            <WeatherHead />
            <FormInput />
            <WeatherInfo />
            <WeatherFoot />
        </section>
    );
};

export default WeatherCard;
