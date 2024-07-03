import {AlertTriangle, RotateCw} from "lucide-react";
import Modal from "@/Components/Modal";
import {useState} from "react";
import {Button} from "@/Components/ui/button";
import axios from "axios";
import {router} from "@inertiajs/react";
import {toast} from "sonner";
import { Faculty} from "@/types";

interface DeleteConfirmProps {
    faculty: Faculty;
    onClose: () => void
}

const DeleteConfirm = ({faculty, onClose}: DeleteConfirmProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleDelete = async () => {
        setIsLoading(true)
        await axios.delete(route("faculty.destroy", faculty.id))
            .then((data) => {
                toast.success(`Data berhasil dihapus`);
                onClose();
                router.reload()
            }).catch((err) => {
                console.info(err)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <Modal
            onClose={onClose}
            show={true}
            closeable={!isLoading}
            maxWidth="md"
        >
            <div className="px-10 py-4">
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="bg-red-100 p-3 rounded-full">
                        <AlertTriangle className="h-5 w-5 stroke-red-700" />
                    </div>
                    <h2 className="font-semibold mt-3 text-gray-700">Apakah anda yakin ?</h2>
                    <p className="text-sm text-muted-foreground mt-2 text-center">Aksi ini tidak dapat di kembalikan, data akan dihapus secara permanen di database!</p>
                </div>
                <div className="w-full flex flex-col gap-y-2 mt-6 mb-3">
                    <Button
                        className="w-full bg-red-700"
                        variant="destructive"
                        disabled={isLoading}
                        onClick={handleDelete}
                    >
                        {isLoading && (
                            <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Hapus
                    </Button>
                    <Button disabled={isLoading} variant="outline" onClick={onClose}>
                        Batalkan
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteConfirm;
