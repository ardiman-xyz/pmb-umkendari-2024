import {Slider} from "@/types";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import {CircleEllipsis, Trash} from "lucide-react";
import {useEffect, useState} from "react";
import ContainerModal from "@/Components/ContainerModal";
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/Components/ui/dialog";
import {Button} from "@/Components/ui/button";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";

interface SliderItemProps {
    slider: Slider
}

export const SliderItem = ({slider}: SliderItemProps) => {

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onDelete = () => {

        toast.promise(
            axios.delete(route("slider.destroy", slider.id)),
            {
                loading: "Mengupload slider...",
                success: () => {
                    setLoading(true);
                    router.reload()
                    return "Gambar berhasil dihapus";
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setLoading(false);
                    return "Gagal menghapus data";
                },
                finally: () => {
                    setIsModalDeleteOpen(false)
                }
            }
        );

    }

    return (
        <div className="">
            <div className="relative w-full pt-[33.33%] bg-gray-100 border-2 overflow-hidden">
                <img
                    src={slider.image_path}
                    alt="slider"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 `}
                />
                <div
                    className="absolute top-0 z-50 right-0 flex gap-2 bg-white">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <CircleEllipsis />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setIsModalDeleteOpen(true)}>
                                <Trash className="h-4 w-4 mr-2" /> Hapus
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <ContainerModal
                isOpen={isModalDeleteOpen}
                onClose={() => setIsModalDeleteOpen(false)}

            >
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" className="w-full" variant="destructive" onClick={onDelete} disabled={loading}>Confirm</Button>
                </DialogFooter>
            </ContainerModal>
        </div>
    )
}
