import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

import faculties from "@/data/graduate.json";

const Index = () => {
    const { postgraduate_programs } = faculties;

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

            <div className="container mx-auto max-w-5xl mt-10">
                <h2 className="text-3xl font-bold mb-2">
                    Fakultas & Program studi
                </h2>
                <p className="text-sm mb-4 text-muted-foreground">
                    Berikut adalah daftar dari beberapa program studi yang kami
                    tawarkan. Setiap program studi memiliki biaya pendidikan per
                    periode (BPP) dan status akreditasi.
                </p>

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
                                {postgraduate_programs.map((program, key) => (
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Guest>
    );
};

export default Index;
