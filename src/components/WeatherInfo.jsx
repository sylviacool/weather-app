import React from "react";

const WeatherInfo = () => {
    return (
        <section className="my-6">
            <section className="flex justify-between">
                <div className="left border-2">
                    <h2>San Francisco</h2>
                    <p>Sunday</p>
                    <p>Rainy</p>
                </div>

                <div className="right border-2">
                    <h2> 16'C</h2>
                </div>
            </section>

            <section className="flex justify-between">
                <div className="info border-2">
                    <h2>Sun</h2>
                    <p>18'C</p>
                </div>
                <div className="info border-2">
                    <h2>Sun</h2>
                    <p>18'C</p>
                </div>
                <div className="info border-2">
                    <h2>Sun</h2>
                    <p>18'C</p>
                </div>
                <div className="info border-2">
                    <h2>Sun</h2>
                    <p>18'C</p>
                </div>
            </section>
        </section>
    );
};

export default WeatherInfo;
