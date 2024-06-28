import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";
import {useState} from "react";
import {ModalCreate} from "@/Pages/Admission/Faculty/_components/ModalCreate";

const Index = () => {

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
                </div>
                {
                    isModalCreateOpen && <ModalCreate isOpen={isModalCreateOpen} onClose={handleCloseModal} />
                }
            </div>
        </Authenticated>
    )
}

export default Index;
