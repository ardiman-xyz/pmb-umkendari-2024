import { router } from "@inertiajs/react";
import React from "react";

const Programs = () => {
    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <div
                onClick={() => handleRedirect("undergraduate.index")}
                className="w-full bg-[#851518] flex cursor-pointer items-center justify-center md:h-[105px] h-[60px]"
            >
                <h1 className="font-bold uppercase text-white ">
                    ADMISI SARJANA (S1)
                </h1>
            </div>
            <div
                onClick={() => handleRedirect("graduate.index")}
                className="w-full cursor-pointer bg-[#851518] flex items-center justify-center md:h-[105px] h-[60px]"
            >
                <h1 className="font-bold uppercase text-white ">
                    ADMISI PASCASARJANA (S2)
                </h1>
            </div>
        </div>
    );
};

export default Programs;
