import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Faculty} from "@/types";
import {IconBadge} from "@/Components/IconBadge";
import {Landmark} from "lucide-react";

import {TitleForm} from "./_components/TitleForm";
import {DescriptionForm} from "@/Pages/Admission/Faculty/_components/DescriptionForm";
import {ImageForm} from "@/Pages/Admission/Faculty/_components/ImageForm";
import {Separator} from "@/Components/ui/separator";
import {Departments} from "./_components/Department/Departments";

interface ShowPageProps {
    faculty : Faculty
}

const ShowPage = ({faculty}: ShowPageProps) => {

    return (
        <Authenticated>
            <Head title={`Fakultas ${faculty.name}`} />

            <div className="">
                <Heading
                    title={`Fakultas ${faculty.name}`}
                    description="Lengkapi informasi fakultas"
                />
                <div className=" gap-6 my-10">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
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
                    <Separator className="my-10"/>
                    <Departments faculty={faculty}/>
                </div>
            </div>
        </Authenticated>
    )
}
export default ShowPage;
