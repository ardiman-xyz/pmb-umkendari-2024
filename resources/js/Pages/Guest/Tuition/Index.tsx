import { Head, router } from "@inertiajs/react";

import Guest from "@/Layouts/GuestLayout";

import Undergraduate from "./_components/undergraduate";
import PostGraduate from "./_components/post-graduate";
import { ChevronRight, Download } from "lucide-react";

const Index = () => {
    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    return (
        <Guest>
            <Head title="Biaya Pendidikan" />
            <div className="h-[369px] bg-[#FFEBEB] bg-custom-image  bg-cover bg-center bg-no-repeat">
                <div className="w-full container mx-auto flex items-center h-full">
                    <h1 className="font-extrabold text-4xl text-white lead uppercase">
                        Biaya Pendidikan
                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-10">
                <div className="w-full flex md:flex-row flex-col mt-10 md:gap-x-14 gap-x-0">
                    <div className="md:w-4/5 w-full pb-10">
                        <div className="mb-10">
                            <Undergraduate />
                        </div>
                        <hr />
                        <div className="mt-10">
                            <PostGraduate />
                        </div>
                    </div>

                    <div className="md:w-1/5 w-full pb-10 md:mt-16">
                        <ul className="w-full  flex flex-col">
                            <li
                                onClick={() =>
                                    handleRedirect("undergraduate.index")
                                }
                                className="px-4 py-6 bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Admisi sarjana
                                <ChevronRight />
                            </li>
                            <li
                                onClick={() => handleRedirect("graduate.index")}
                                className="px-4 py-6 border-t  bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Admisi pascasarjana
                                <ChevronRight />
                            </li>
                            <li
                                onClick={() => handleRedirect("pathways.index")}
                                className="px-4 py-6 border-t bg-red-800 border-white border-opacity-80 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Persyaratan
                                <ChevronRight />
                            </li>
                            <li className="px-4 py-6 border-t bg-red-800 border-white border-opacity-80 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer ">
                                Alur pendapaftaran
                                <ChevronRight />
                            </li>
                        </ul>

                        <div className=" mt-10 md:mb-0 mb-10">
                            <div className="w-full cursor-pointer relative">
                                <img
                                    src="/images/brosur.png"
                                    alt="logo"
                                    className="w-full"
                                />

                                <div className="absolute top-0 right-0 bg-red-800 p-2 rounded-full animate-bounce">
                                    <Download className="stroke-white w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
};

export default Index;
