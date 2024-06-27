import {Input} from "@/Components/ui/input";
import {FormUpload} from "@/Components/FormUpload"
import {Button} from "@/Components/ui/button";
import React, {useState} from "react";
import FormError from "@/Components/FormError";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";

export const FormCreate = () => {

    const [image, setImage] = useState<File | undefined>(undefined);
    const [title, setTitle] = useState<string|undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    );

    const handleFileChange = (file: File | undefined) => {
        setImage(file);
    };

    const handleUpload = async () => {
        if (!image || !title)
        {
         toast.error("Silahkan lengkapi input dan gambar")
         return;
        }

        const formData = new FormData();

        formData.append("image", image);
        formData.append("title", title);

        setIsLoading(true);
        setErrorMessage(undefined);

        toast.promise(
            axios.post(route("achievement.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
            {
                loading: "Mengupload data...",
                success: () => {
                    setIsLoading(false);
                    router.get(route("achievement.index"));
                    return "Data berasil disimpan";
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setErrorMessage(message);
                    setIsLoading(false);
                    return "Gagal menyimpan";
                },
            }
        );
    };

    return (
        <div className=" flex flex-col gap-y-4">
            <div>
                <Input placeholder="Nama prestasi" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <FormUpload
                    onFileChange={handleFileChange}
                    isLoading={isLoading}
                />
            </div>
            <Button
                onClick={handleUpload}
                disabled={isLoading}
                className="mt-4 bg-blue-1 hover:bg-blue-2 px-6 w-max"
            >
                Simpan
            </Button>

            <div className="mt-2">
                <FormError message={errorMessage}/>
            </div>
        </div>
    )
}
