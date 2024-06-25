import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { router } from "@inertiajs/react";
import axios from "axios";

import FormError from "@/Components/FormError";
import { Button } from "@/Components/ui/button";

export const FormUpload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [image, setImage] = useState<File | undefined>(undefined);
    const [preview, setPreview] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    );

    const handleDivClick = () => {
        if (isLoading) return;

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append("image", image);

        setIsLoading(true);
        setErrorMessage(undefined);

        toast.promise(
            axios.post(route("slider.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
            {
                loading: "Mengupload slider...",
                success: () => {
                    setIsLoading(false);
                    router.get(route("slider.index"));
                    return "Slider berhasil diupload";
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setErrorMessage(message);
                    setIsLoading(false);
                    return "Gagal mengupload";
                },
            }
        );
    };

    return (
        <div>
            <div
                onClick={handleDivClick}
                className={`w-full rounded border-2 border-dashed p-4 border-gray-300 flex items-center justify-center h-[250px] ${
                    !isLoading && "cursor-pointer"
                }`}
            >
                {image === undefined ? (
                    <img src="/icons/image-up.svg" alt="icon" />
                ) : (
                    <img
                        src={preview}
                        alt="Preview"
                        className="h-full w-full object-contain"
                    />
                )}
            </div>
            <Button
                onClick={handleUpload}
                disabled={isLoading}
                className="mt-4 bg-blue-1 hover:bg-blue-2 px-6"
            >
                Simpan
            </Button>

            <div className="mt-2">
                <FormError message={errorMessage} />
            </div>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};
