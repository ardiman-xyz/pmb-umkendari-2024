
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/Components/ui/sheet"
import {useState} from "react";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {Trash} from "lucide-react";
import {Achievement, Facility} from "@/types";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";

interface ItemProps {
    achievement: Achievement
}

export const AchievementItem = ({achievement}: ItemProps) => {

    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(achievement.title);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const sheetToggle = () => setIsSheetOpen(!isSheetOpen);

    const onUpdate = () => {
        if(!title) return;

        setIsLoading(true);

        toast.promise(
            axios.put(route("achievement.update", achievement.id), {title}),
            {
                loading: "Mengupload data...",
                success: () => {
                    setIsLoading(false);
                    sheetToggle();
                    router.reload();
                    return "Data berasil diupdate";
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setIsLoading(false);
                    return "Gagal update";
                },
            }
        );
    }

    const onDelete = () => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            toast.promise(
                axios.delete(route("achievement.destroy", achievement.id)),
                {
                    loading: "Mengapus data...",
                    success: () => {
                        setIsLoading(false);
                        sheetToggle();
                        router.reload();
                        return "Data berhasil dihapus";
                    },
                    error: (err) => {
                        const { message } = err.response.data;
                        setIsLoading(false);
                        return "Gagal menghapus data";
                    },
                }
            );
        }
    };


    return (
        <>
            <div className="relative group overflow-hidden cursor-pointer" onClick={sheetToggle}>
                <img
                    src={achievement.image_path}
                    alt="fasilitas"
                    className="transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="py-2 m-1">
                    <p className="text-sm truncate overflow-hidden whitespace-nowrap">
                        {achievement.title}
                    </p>
                </div>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={sheetToggle}>
                <SheetContent className="w-[400px]  sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle>{achievement.title}</SheetTitle>
                        <div className="flex flex-col gap-y-4">
                            <div>
                                <img src={achievement.image_path} alt="fasilitas"/>
                            </div>
                            <div>
                                <Input value={title} onChange={e => setTitle(e.target.value)} disabled={isLoading}/>
                            </div>

                            <div className="gap-x-2 flex">
                                <Button variant="ghost" onClick={onDelete}>
                                    <Trash className="h-4 w-4 mr-2"  />
                                    Hapus
                                </Button>
                                <Button onClick={onUpdate} disabled={isLoading || !title}>
                                    Update
                                </Button>
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </>
    )
}
