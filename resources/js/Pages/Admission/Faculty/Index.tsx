import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";
import {useState} from "react";
import {ModalCreate} from "@/Pages/Admission/Faculty/_components/ModalCreate";
import {Faculty} from "@/types";
import {DataTable} from "@/Pages/Admission/Faculty/_components/DataTable";
import {columns} from "@/Pages/Admission/Faculty/_components/Column";

interface IndexProps {
    faculties: Faculty[];
}

const Index = ({faculties}: IndexProps) => {

    const [isModalCreateOpen, setIsModalCreateOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsModalCreateOpen(false)
    }

    return (
        <Authenticated>
            <Head title="Fakultas" />
            <div>
                <div className="flex items-center justify-between">
                    <Heading
                        title="Fakultas"
                        description="Kelola dan perbarui informasi Fakultas dengan mudah."
                    />
                    <Button variant="primary" onClick={() => setIsModalCreateOpen(true)}>
                        Tambah Fakultas
                    </Button>
                </div>

                <div className="w-full mt-10">

                    <DataTable
                        columns={columns}
                        data={faculties}
                    />

                </div>
                {
                    isModalCreateOpen && <ModalCreate isOpen={isModalCreateOpen} onClose={handleCloseModal} />
                }
            </div>
        </Authenticated>
    )
}

export default Index;
