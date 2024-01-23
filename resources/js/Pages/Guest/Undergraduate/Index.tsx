import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

const UndergraduatePage = () => {
    const prodiData = [
        { nama: "Teknik Informatika", bpp: "Rp. 3.500.000", akreditasi: "A" },
        { nama: "Sistem Informasi", bpp: "Rp. 3.250.000", akreditasi: "A" },
        { nama: "Teknik Komputer", bpp: "Rp. 3.750.000", akreditasi: "B" },
        { nama: "Teknik Elektro", bpp: "Rp. 3.800.000", akreditasi: "B" },
        { nama: "Teknik Industri", bpp: "Rp. 3.600.000", akreditasi: "A" },
        { nama: "Teknik Mesin", bpp: "Rp. 3.400.000", akreditasi: "A" },
        { nama: "Teknik Sipil", bpp: "Rp. 3.500.000", akreditasi: "A" },
        { nama: "Arsitektur", bpp: "Rp. 3.850.000", akreditasi: "A" },
        {
            nama: "Desain Komunikasi Visual",
            bpp: "Rp. 3.300.000",
            akreditasi: "B",
        },
        { nama: "Ilmu Komunikasi", bpp: "Rp. 3.200.000", akreditasi: "A" },
        { nama: "Manajemen", bpp: "Rp. 3.100.000", akreditasi: "A" },
        { nama: "Akuntansi", bpp: "Rp. 3.200.000", akreditasi: "A" },
        {
            nama: "Pendidikan Bahasa Inggris",
            bpp: "Rp. 2.800.000",
            akreditasi: "B",
        },
        {
            nama: "Pendidikan Matematika",
            bpp: "Rp. 2.900.000",
            akreditasi: "B",
        },
        { nama: "Pendidikan Fisika", bpp: "Rp. 2.950.000", akreditasi: "B" },
        { nama: "Pendidikan Kimia", bpp: "Rp. 2.850.000", akreditasi: "B" },
        { nama: "Pendidikan Biologi", bpp: "Rp. 2.900.000", akreditasi: "A" },
        { nama: "Pendidikan Ekonomi", bpp: "Rp. 3.000.000", akreditasi: "A" },
        { nama: "Pendidikan Sejarah", bpp: "Rp. 2.750.000", akreditasi: "B" },
        {
            nama: "Pendidikan Pancasila dan Kewarganegaraan",
            bpp: "Rp. 2.800.000",
            akreditasi: "B",
        },
    ];

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
                <h2 className="text-3xl font-bold mb-2">Program studi</h2>
                <p className="text-sm mb-4 text-muted-foreground">
                    Berikut adalah daftar dari beberapa program studi yang kami
                    tawarkan. Setiap program studi memiliki biaya pendidikan per
                    periode (BPP) dan status akreditasi. Kami berkomitmen untuk
                    menyediakan pendidikan berkualitas tinggi dan terjangkau,
                    dan kami berusaha untuk memastikan bahwa semua program studi
                    kami akreditasi.
                </p>

                <div className="pb-10 mt-8">
                    <div className="w-full mx-auto overflow-auto">
                        <table className="w-full text-sm leading-normal border">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">
                                        Nama
                                    </th>
                                    <th className="px-4 py-2 text-left">BPP</th>
                                    <th className="px-4 py-2 text-left">
                                        Akreditasi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {prodiData.map((prodi, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">
                                            {prodi.nama}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {prodi.bpp}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {prodi.akreditasi}
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

export default UndergraduatePage;
