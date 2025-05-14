import WeatherHead from "./WeatherHead";
import FormInputT from "./FormInputT";
import WeatherFoot from "./WeatherFoot";

const WeatherCard = () => {
    return (
        <section className="border-2 w-[70vw] p-6">
            <WeatherHead />
            <FormInputT />
            <WeatherFoot />
        </section>
    );
};

export default WeatherCard;
