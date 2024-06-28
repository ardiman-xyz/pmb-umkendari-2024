import {ImageOffIcon, InfoIcon, Pencil, PlusCircle, RotateCw} from "lucide-react";
import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"

import { Button } from "@/Components/ui/button";

import {Faculty} from "@/types";
import {FormUpload} from "@/Components/FormUpload";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";
import FormError from "@/Components/FormError";

interface TitleFormProps {
    initialData: Faculty,
    id: number;
}

export const ImageForm = ({ initialData, id }: TitleFormProps) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|undefined>(undefined)

    const [image, setImage] = useState<File|undefined>(undefined);

    const toggleEdit = () => setIsEditing((current) => !current);

    const handleFileChange = (file: File | undefined) => {
        setImage(file)
    }

    const onUpload = () => {
        if(!image) return;

        setIsLoading(true)

        const formData = new FormData();
        formData.append("image", image);

        toast.promise(
            axios.post(route("faculty.update-cover", id), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
            {
                loading: "Mengupload gambar...",
                success: () => {
                    setIsLoading(false);
                    toggleEdit()
                    router.reload();
                    return "Slider berhasil diupload";
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setError(message);
                    setIsLoading(false);
                    return "Gagal mengupload";
                },
            }
        );
    }

    return (
        <div className="mt-6 bg-slate-100 rounded-md p-4 border">
            <div className="font-medium flex items-center justify-between">
               <div className="flex items-center gap-x-2">
                   Gambar Fakultas
                   <DescUpload />
               </div>
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing && <>Cancel </>}

                    {
                        !isEditing && !initialData.cover && (
                            <>
                                <PlusCircle className="w-4 h-4 mr-2"/> Upload Gambar
                            </>
                        )
                    }

                    {
                        !isEditing && initialData.cover && (
                            <>
                                <Pencil className="h-4 w-4 mr-2"/> Ubah Gambar
                            </>
                        )
                    }
                </Button>
            </div>
            {
                !isEditing && (
                    <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md overflow-hidden">
                        {!initialData.cover ? (
                            <ImageOffIcon className="text-slate-600" />
                        ) : (
                            <img
                                src={initialData.cover}
                                alt="gambar"
                                className="w-full h-full object-cover object-center"
                            />
                        )}
                    </div>
                )
            }

            {isEditing && (
                <div>
                    <FormUpload onFileChange={handleFileChange}/>

                    <Button variant="primary" className="mt-4" disabled={!image || isLoading} onClick={onUpload}>
                      Upload
                  </Button>

                  <div className="mt-3">
                      <FormError message={error}/>
                  </div>
              </div>
            )}
        </div>
    );
};


const DescUpload = () => {
    return (
            <Popover>
                <PopoverTrigger>
                    <InfoIcon className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent>
                    <h2>Keterangan :</h2>
                    <ul className="text-sm mt-2 text-muted-foreground list-decimal pl-6">
                        <li>
                            Ukuran gambar harus <b>: 600x400</b> piksel
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
                </PopoverContent>
            </Popover>
    )
}
