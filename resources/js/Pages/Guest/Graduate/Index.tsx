import Guest from "@/Layouts/GuestLayout";
import { Head, router } from "@inertiajs/react";

import faculties from "@/data/graduate.json";
import { ChevronRight, Download } from "lucide-react";

const Index = () => {
    const { postgraduate_programs } = faculties;

    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    return (
        <Guest>
            <Head title="Admisi pascasarjana" />
            <div className="h-[369px] bg-[#FFEBEB] bg-custom-image  bg-cover bg-center bg-no-repeat">
                <div className="w-full container mx-auto flex items-center h-full">
                    <h1 className="font-extrabold text-4xl text-white lead">
                        PASCASARJANA (S2)
                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-10">
                <h2 className="text-3xl font-bold mb-2">
                    Fakultas & Program studi
                </h2>
                <p className="text-sm mb-4 text-muted-foreground">
                    Berikut adalah daftar dari beberapa program studi yang kami
                    tawarkan. Setiap program studi memiliki biaya pendidikan per
                    periode (BPP) dan status akreditasi.
                </p>

                <div className="w-full flex md:flex-row flex-col md:gap-x-20 gap-x-0">
                    <div className="md:w-2/3 w-full pb-10">
                        <div className="pb-10 mt-8">
                            <div className="w-full mx-auto overflow-auto">
                                <table className="w-full text-sm leading-normal border border-zinc-500">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border border-zinc-500">
                                                Nama
                                            </th>
                                            <th className="px-4 py-2  border border-zinc-500 text-center">
                                                Akreditasi
                                            </th>
                                            <th className="px-4 py-2 border border-zinc-500 text-center">
                                                Kuota
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {postgraduate_programs.map(
                                            (program, key) => (
                                                <tr key={key}>
                                                    <td className="px-4 py-2 border border-zinc-500">
                                                        {program.name}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-500 w-[100px] text-center">
                                                        {program.accreditation}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-500 w-[100px] text-center">
                                                        {program.quota}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div
                        id="right"
                        className="md:w-1/3 w-full mt-8 sticky top-0"
                    >
                        <ul className="w-full  flex flex-col">
                            <li
                                onClick={() =>
                                    handleRedirect("undergraduate.index")
                                }
                                className="px-4 py-6 bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Admisi Sarjana
                                <ChevronRight />
                            </li>
                            <li
                                onClick={() => handleRedirect("tuition.index")}
                                className="px-4 py-6 border-t bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Biaya Pendidikan
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