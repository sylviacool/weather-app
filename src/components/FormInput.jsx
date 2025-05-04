import React from "react";

const FormInput = () => {
    return (
        <form className="flex  gap-2 my-6">
            <input
                type="text"
                name=""
                id=""
                placeholder="Enter a city.."
                className="w-[60%] bg-slate-400/20 p-2 rounded-md grow"
            />
            <input
                type="button"
                value="Search"
                className="bg-[#ff00fb] px-6 rounded-md grow"
            />
        </form>
    );
};

export default FormInput;
