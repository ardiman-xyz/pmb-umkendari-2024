import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {FormCreate} from "./_components/FormCreate";

const Create = () => {
    return (
        <Authenticated>
            <Head title="Fasilitas Baru" />
            <div>
                <Heading
                    title="Tambah Prestasi"
                    description="Masukkan informasi baru untuk prestasi yang tersedia."
                />

                <div className="flex lg:flex-row flex-col lg:gap-x-4 gap-x-0 mt-10">
                    <div className="lg:w-1/2 w-full">
                        <FormCreate />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h2>Keterangan :</h2>
                        <ul className="text-sm mt-2 text-muted-foreground list-decimal pl-6">
                            <li>
                                Ukuran gambar harus <b>: 1080x1185</b> piksel
                            </li>
                            <li>Format file yang diterima: Webp, PNG, atau JPG</li>
                            <li>
                                Format <b>Webp</b> sangat direkomendasikan untuk
                                performa optimal dan memiliki kualitas yang baik
                                untuk website
                            </li>
                            <li>
                                Ukuran file maksimal: <b>2 MB</b>
                            </li>
                            <li>
                                Pastikan gambar memiliki resolusi tinggi dan jernih
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Create;
