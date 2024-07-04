import React from "react";

interface ProgramsProps {
    url: string;
}

const Programs = ({url}: ProgramsProps) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <a
                href={`${url}/sarjana`}
                className="w-full bg-[#851518] flex cursor-pointer items-center justify-center md:h-[105px] h-[60px]"
            >
                <h1 className="font-bold uppercase text-white ">
                    ADMISI SARJANA (S1)
                </h1>
            </a>
            <a
                href={`${url}/pascasarjana`}
                className="w-full cursor-pointer bg-[#851518] flex items-center justify-center md:h-[105px] h-[60px]"
            >
                <h1 className="font-bold uppercase text-white ">
                    ADMISI PASCASARJANA (S2)
                </h1>
            </a>
        </div>
    );
};

export default Programs;
