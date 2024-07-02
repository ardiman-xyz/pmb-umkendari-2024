import {HeadingInfo} from "@/Components/HeadingInfo";
import {FormUpload} from "@/Components/FormUpload";
import React, {useState} from "react";
import {Button} from "@/Components/ui/button";
import {ImageOffIcon, Pencil, PlusCircle, UploadIcon} from "lucide-react";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";
import FormError from "@/Components/FormError";
import {Information} from "@/types";

interface RoadmapProps {
    defaultData: Information | null
}

export const Roadmap = ({defaultData}: RoadmapProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<File|undefined>(undefined);
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    );

    const handleFileChange = (file: File | undefined) => {
        setImage(file)
    }

    const toggleEdit = () => setIsEditing((current) => !current);

    const onUpload = () => {
        if(!image) return;

        const formData = new FormData();

        formData.append("roadmap", image);

        if (defaultData !== null) {
            formData.append("id", defaultData.id.toString());
        }

        toast.promise(
            axios.post(route("info.roadmap.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
            {
                loading: "Mengupload data...",
                success: () => {
                    setIsLoading(false);
                    router.reload();
                    toggleEdit();
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
    }

    return (
        <div>
          <div className="flex justify-between items-center">
              <HeadingInfo title={"Alur Pendaftaran"}>
                  <h2>Keterangan :</h2>
                  <ul className="text-sm mt-2 text-muted-foreground list-decimal pl-6">
                      <li>
                          Ukuran gambar <b>: 1080x1185</b> piksel
                      </li>
                      <li>Format file yang diterima: Webp, SVG, PNG, atau JPG</li>
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
              </HeadingInfo>
              <Button variant="ghost" onClick={toggleEdit}>
                  {isEditing && <>Batal </>}

                  {
                      !isEditing && !defaultData?.roadmap && (
                          <>
                              <PlusCircle className="w-4 h-4 mr-2"/> Upload Gambar
                          </>
                      )
                  }

                  {
                      !isEditing && defaultData?.roadmap && (
                          <>
                              <Pencil className="h-4 w-4 mr-2"/> Ubah Gambar
                          </>
                      )
                  }
              </Button>
          </div>
            <div className="mt-3">
                {
                    isEditing && (
                        <>
                            <FormUpload onFileChange={handleFileChange}/>
                            <div className="mt-2">
                                <FormError message={errorMessage}/>
                            </div>
                            <Button variant="primary" className="mt-4 flex items-center" disabled={!image || isLoading} onClick={onUpload}>
                                <UploadIcon className="h-4 w-4 mr-2"/>
                                Upload
                            </Button>
                        </>
                    )
                }

                {
                    !isEditing && (
                        <>
                                {!defaultData?.roadmap ? (
                                    <div className="flex items-center h-80 justify-center bg-gray-200 border p-1 rounded-md overflow-hidden">
                                        <ImageOffIcon className="text-slate-600"/>
                                    </div>

                                ) : (
                                    <div
                                        className="flex items-center justify-center border p-1 rounded-md overflow-hidden">
                                        <img
                                            src={defaultData?.roadmap}
                                            alt="gambar"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                )}

                        </>
                    )
                }

            </div>
        </div>
    )
}
