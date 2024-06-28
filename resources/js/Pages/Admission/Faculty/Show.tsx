import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Faculty} from "@/types";
import {IconBadge} from "@/Components/IconBadge";
import {Landmark} from "lucide-react";

import {TitleForm} from "./_components/TitleForm";
import {DescriptionForm} from "@/Pages/Admission/Faculty/_components/DescriptionForm";
import {ImageForm} from "@/Pages/Admission/Faculty/_components/ImageForm";

interface ShowPageProps {
    faculty : Faculty
}

const ShowPage = ({faculty}: ShowPageProps) => {

    return (
        <Authenticated>
            <Head title={`Fakultas ${faculty.name}`} />
            <Heading
                    title={`Fakultas ${faculty.name}`}
                    description="Lengkapi informasi fakultas"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div>
                    <div className="flex items-center gap-x-1">
                        <IconBadge icon={Landmark}/>
                        <h1 className="text-2xl font-medium">Sesuaikan Profil</h1>
                    </div>
                    <TitleForm
                        initialData={
                            {
                                title: faculty.name,
                                columnName: "name"
                            }
                        }
                        id={faculty.id}
                    />

                    <DescriptionForm
                        initialData={
                            {
                                description: faculty.description,
                                columnName: "description"
                            }
                        }
                        id={faculty.id}
                    />
                    <ImageForm
                        initialData={faculty}
                        id={faculty.id}
                    />
                </div>
            </div>
        </Authenticated>
    )
}
export default ShowPage;
