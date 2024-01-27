import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import GreetingText from "./GreetingText";

interface ShareWaParams {
    number: "first" | "second";
}

const firstNumber = "+6282249910022";
const secondNumber = "+6282249910033";

const MessageBox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleClickShareWa = ({ number }: ShareWaParams) => {
        let messageDone = `as-salāmu ʿalaykum wa-raḥmatu -llāhi wa-barakātuh, halo admin saya ingin bertanya tentan pmb.`;

        let hotlineNumber;
        if (number === "first") {
            hotlineNumber = firstNumber;
        } else if (number === "second") {
            hotlineNumber = secondNumber;
        }

        let url = `https://wa.me/${hotlineNumber}?text=${messageDone}`;

        window.open(url);
    };

    return (
        <div className="fixed bottom-10 right-5 flex items-center flex-col z-50">
            {!isOpen && (
                <>
                    <p className="text-sm mb-2 shadow-sm mix-blend-difference">
                        Butuh bantuan ?
                    </p>
                    <div
                        onClick={toggleModal}
                        title="Hubungi kami"
                        className="p-3 rounded-full border border-green-600 bg-green-100 cursor-pointer z-50 shadow-lg w-max"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            className="fill-green-600"
                        >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                    </div>
                </>
            )}

            {isOpen && (
                <div className="transition-all delay-100">
                    <div className="h-[433px] w-[401px]  bg-green-200 rounded-xl shadow-lg p-4 bg-gradient-to-b from-green-600  via-green-500 to-white">
                        <img
                            src="/svg/white-logo.svg"
                            alt="Logo"
                            className="w-[350px]"
                        />
                        <div className="px-5">
                            <div className="mt-6 flex flex-col gap-y-2">
                                <div className="flex items-center">
                                    <GreetingText />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-7 h-7 -rotate-45 text-white ml-3 fill-[#F0C087] "
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-white font-semibold text-2xl">
                                    Ada yang bisa kami bantu ?
                                </h1>
                            </div>
                            <div className="bg-white rounded-xl p-4 mt-5 shadow-md">
                                <h1>Hubungi kami di :</h1>

                                <ul className="mt-5 flex flex-col gap-y-3">
                                    <li>
                                        <Button
                                            onClick={() =>
                                                handleClickShareWa({
                                                    number: "first",
                                                })
                                            }
                                            variant={"outline"}
                                            className="w-full py-6 border-green-600 hover:bg-green-600 hover:text-white"
                                        >
                                            +62 822-4991-0022
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            onClick={() =>
                                                handleClickShareWa({
                                                    number: "second",
                                                })
                                            }
                                            variant={"outline"}
                                            className="w-full py-6 border-green-600 hover:bg-green-600 hover:text-white"
                                        >
                                            +62 822-4991-0033
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end ">
                        <div
                            onClick={toggleModal}
                            className="p-2 rounded-full border w-max bg-black mt-3 cursor-pointer hover:opacity-70"
                        >
                            <XIcon className="stroke-white" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessageBox;
