import { Head, router } from "@inertiajs/react";

import Guest from "@/Layouts/GuestLayout";
import { Button } from "@/Components/ui/button";
import {ChevronRight, Download} from "lucide-react";
import {Department, Undergraduate} from "@/types";
import {useState} from "react";
import {TuitionFeesModal} from "@/Pages/Guest/Undergraduate/_components/TuitionFeesModal";

interface Props {
    data: Undergraduate[]
}

const UndergraduatePage = ({data}: Props) => {

    const [selectedDepartment, setSelectedDepartment] = useState<Department|undefined>(undefined);

    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = "/file/admisi.pdf";
    //     link.download = "admisi_2024.pdf";
    //     link.click();
    // };

    const handleDownloadBrosur = () => {
        const link = document.createElement("a");
        link.href = "/file/admisi-umk-brosur-2024.pdf";
        link.download = "admisi-umk-brosur-2024.pdf.pdf";
        link.click();
    };

    const onClickDetail = (department: Department) => {
        setSelectedDepartment(department);
    };

    const closeModal = () => {
        setSelectedDepartment(undefined);
    };

    return (
        <Guest>
            <Head title="Admisi sarjana" />
            <div className="h-[369px] bg-[#FFEBEB] bg-custom-image  bg-cover bg-center bg-no-repeat">
                <div className="w-full container mx-auto flex items-center h-full">
                    <h1 className="font-extrabold text-4xl text-white lead">
                        SARJANA (S1)
                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-10">
                <h2 className="text-3xl font-bold mb-2">
                    Fakultas & Program studi
                </h2>
                <p className="text-sm mb-4 text-muted-foreground">
                    Berikut ini daftar program studi yang ditawarkan di
                    Universitas Muhammadiyah Kendari
                </p>

                <div className="w-full flex md:flex-row flex-col mt-10 md:gap-x-20 gap-x-0">
                    <div className="md:w-2/3 w-full pb-10">
                        <div className="w-full mx-auto overflow-x-auto ">
                            {data.map((faculty, index) => (
                                <div key={index} className="mb-6">
                                    <h1 className="mb-2 font-bold capitalize">
                                       Fakultas {faculty.name}
                                    </h1>

                                    <table className="w-[100%] text-sm leading-normal border border-zinc-500">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border border-zinc-500">
                                                Program Studi
                                            </th>
                                            <th className="px-4 py-2  border border-zinc-500 text-center">
                                                Akreditasi
                                            </th>
                                            <th className="px-4 py-2 border border-zinc-500 text-center">
                                                Daya Tampung
                                            </th>
                                            <th className="px-4 py-2 border border-zinc-500 text-center">
                                                Biaya Pendidikan
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {faculty.sarjana_departments.map(
                                            (department, key) => (
                                                <tr key={key}>
                                                    <td className="px-4 py-2 border border-zinc-500">
                                                        {department.name}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-500 w-[100px] text-center">
                                                        {department.accreditation}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-500 w-[200px] text-center">
                                                        {department.tuition_fees.capacity}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-500 w-[200px] text-center">
                                                        <Button onClick={() => onClickDetail(department)} variant="ghost" className="text-[#991B1B] underline">
                                                            Lihat
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                        {/*<hr />*/}

                        {/*<div className="mt-10 flex">*/}
                        {/*    <Button*/}
                        {/*        onClick={handleDownload}*/}
                        {/*        variant="guestButtonDefault"*/}
                        {/*    >*/}
                        {/*        Donwload template*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        id="right"
                        className="md:w-1/3 w-full mt-8 sticky top-0"
                    >
                        <ul className="w-full  flex flex-col">
                            <li
                                onClick={() => handleRedirect("graduate.index")}
                                className="px-4 py-6 bg-red-800 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
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
                                onClick={() => handleRedirect("pathways.index")}
                                className="px-4 py-6 border-t bg-red-800 border-white border-opacity-80 text-white flex flex-row items-center gap-x-3 justify-between cursor-pointer "
                            >
                                Persyaratan
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

            {
                selectedDepartment && (
                    <TuitionFeesModal onOpen={true} onClose={closeModal} data={selectedDepartment} />
                )
            }
        </Guest>
    );
};

export default UndergraduatePage;
