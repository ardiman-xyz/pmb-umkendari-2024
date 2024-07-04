import { Head, router } from "@inertiajs/react";

import Guest from "@/Layouts/GuestLayout";

import FilePdf from "../../../../../public/file/jenis_persyaratan_beasiswa.pdf";
import { ChevronRight, Download } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {Information} from "@/types";
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

interface IndexProps {
    information: Information
}

const Index = ({information}: IndexProps) => {

    console.info(information)

    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = information.entry_paths_requirements ?? "/file/jenis_persyaratan_beasiswa.pdf";
        link.download = information.entry_paths_requirements ?? "jenis_persyaratan_beasiswa_2024.pdf";
        link.click();
    };

    const handleDownloadBrosur = () => {
        const link = document.createElement("a");
        link.href = "/file/admisi-umk-brosur-2024.pdf";
        link.download = "admisi-umk-brosur-2024.pdf.pdf";
        link.click();
    };

    return (
        <Guest>
            <Head title="Jenis dan persyaratan beasiswa" />
            <div className="h-[369px] bg-[#FFEBEB] bg-custom-image  bg-cover bg-center bg-no-repeat">
                <div className="w-full container mx-auto flex  items-center h-full">
                    <h1 className="font-extrabold text-4xl text-white lead uppercase">
                        Jalur Masuk dan Persyaratan
                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-10">
                <div className="w-full flex md:flex-row flex-col mt-10 md:gap-x-14 gap-x-0">
                    <div className="md:w-4/5 w-full pb-10">
                        {/*<iframe*/}
                        {/*    src={`${information.entry_paths_requirements ?? FilePdf}`}*/}
                        {/*    width={"100%"}*/}
                        {/*    height={800}*/}
                        {/*></iframe>*/}

                        <p>Silahkan download file JALUR MASUK DAN PERSYARATAN di <a target="_blank" href={information.entry_paths_requirements ?? "#"} className="font-bold text-[#991B1B] hover:underline">sini</a></p>

                        <hr />
                        <div className="mt-4">
                            <a
                                target="_blank"
                                className="flex items-center gap-x-2 px-6 py-4 bg-[#991B1B] w-max text-white cursor-pointer"
                                href={information.entry_paths_requirements ?? "#"}
                            >
                                Unduh Jalur Masuk
                                <Download className="h-4 w-4 ml-3" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/5 w-full pb-10 md:mt-0">
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
                                onClick={() => handleRedirect("graduate.index")}
                                className="px-4 py-6 border-t  bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Admisi Pascasarjana
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
                                onClick={() => handleRedirect("flow.index")}
                                className="px-4 py-6 border-t bg-red-800 border-white border-opacity-80 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Alur Pendaftaran
                                <ChevronRight />
                            </li>
                        </ul>

                        <div className=" mt-10 md:mb-0 mb-10">
                            <div
                                className="w-full cursor-pointer relative"
                                onClick={handleDownloadBrosur}
                            >
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

