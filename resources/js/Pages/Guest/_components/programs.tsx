import React from "react";

const Programs = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <div className="w-full bg-[#851518] flex cursor-pointer items-center justify-center md:h-[105px] h-[60px]">
                <h1 className="font-bold uppercase text-white ">
                    ADMISI SARJANA (S1)
                </h1>
            </div>
            <div className="w-full cursor-pointer bg-[#851518] flex items-center justify-center md:h-[105px] h-[60px]">
                <h1 className="font-bold uppercase text-white ">
                    ADMISI PASCASARJANA (S2)
                </h1>
            </div>
        </div>
    );
};

export default Programs;
