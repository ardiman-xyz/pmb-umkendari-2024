import {HeadingInfo} from "@/Components/HeadingInfo";
import {FormUpload} from "@/Components/FormUpload";
import React, {useState} from "react";
import {Button} from "@/Components/ui/button";
import {ArchiveX, ImageOffIcon, Pencil, PlusCircle, UploadIcon} from "lucide-react";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";
import FormError from "@/Components/FormError";
import {Information} from "@/types";

interface RoadmapProps {
    defaultData: Information | null
}

export const AdmissionBrochure = ({defaultData}: RoadmapProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [file, setFile] = useState<File|undefined>(undefined);
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    );

    const handleFileChange = (file: File | undefined) => {
        setFile(file)
    }

    const toggleEdit = () => setIsEditing((current) => !current);

    const onUpload = () => {
        if(!file) return;

        const formData = new FormData();

        formData.append("admission_brochure", file);

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
              <HeadingInfo title={"Brosur"}>
                  <h2>Keterangan :</h2>
                  <ul className="text-sm mt-2 text-muted-foreground list-decimal pl-6">
                      <li>
                          Ukuran file <b>: 4MB</b> piksel
                      </li>
                      <li>Format file yang diterima: pdf</li>
                  </ul>
              </HeadingInfo>
              <Button variant="ghost" onClick={toggleEdit}>
                  {isEditing && <>Batal </>}

                  {
                      !isEditing && !defaultData?.admission_brochure && (
                          <>
                              <PlusCircle className="w-4 h-4 mr-2"/> Upload File
                          </>
                      )
                  }

                  {
                      !isEditing && defaultData?.admission_brochure && (
                          <>
                              <Pencil className="h-4 w-4 mr-2"/> Ubah File
                          </>
                      )
                  }
              </Button>
          </div>
            <div className="mt-3">
                {
                    isEditing && (
                        <>
                            <FormUpload acceptedFileTypes={"application/pdf"} onFileChange={handleFileChange}/>
                            <div className="mt-2">
                                <FormError message={errorMessage}/>
                            </div>
                            <Button variant="primary" className="mt-4 flex items-center" disabled={!file || isLoading} onClick={onUpload}>
                                <UploadIcon className="h-4 w-4 mr-2"/>
                                Upload
                            </Button>
                        </>
                    )
                }

                {
                    !isEditing && (
                        <>
                                {!defaultData?.admission_brochure ? (
                                    <div className="flex flex-col gap-y-1 items-center h-60 justify-center bg-gray-200 border p-1 rounded-md overflow-hidden">
                                        <ArchiveX className="text-slate-500"/>
                                        <p className="text-muted-foreground text-sm">Tidak ada file</p>
                                    </div>

                                ) : (
                                    <a href={defaultData.admission_brochure} target="_blank"
                                       rel="noopener noreferrer"
                                        className="text-blue-1 hover:text-blue-2 hover:underline"
                                    >
                                        Buka PDF
                                    </a>
                                )}

                        </>
                    )
                }

            </div>
        </div>
    )
}
