const FormInputT = () => {
    const handleSubmit = (data) => {
        const city = data.get("city");
        console.log(city);
    };

    return (
        <>
            <form
                action={handleSubmit}
                className="flex  gap-2 my-6"
                id="my-form"
            >
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Enter a city.."
                    className="w-[60%] bg-slate-400/20 p-2 rounded-md grow"
                />

                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-[60%] bg-slate-400/20 p-2 rounded-md grow"
                />

                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    className="w-[60%] bg-slate-400/20 p-2 rounded-md grow"
                />

                <button className="bg-[#ff00fb] px-6 rounded-md grow">
                    Search
                </button>
            </form>
        </>
    );
};

export default FormInputT;
