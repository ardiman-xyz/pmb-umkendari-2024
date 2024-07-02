import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Heading} from "@/Components/Heading";
import {Head} from "@inertiajs/react";
import {Roadmap} from "./_components/Roadmap";
import {Information} from "@/types";
import {Separator} from "@/Components/ui/separator";
import {EntryPathsRequirements} from "./_components/EntryPathsRequirements";
import {AdmissionBrochure} from "./_components/AdmissionBrochure";

interface IndexProps {
    data: Information | null
}

const Index = ({data}: IndexProps) => {

    return (
        <Authenticated>
            <Head title="Informasi" />
            <div className="max-w-4xl mx-auto">
                <Heading
                    title="Manajemen Media"
                    description="Kelola file dan gambar untuk website admisi dengan efisien."
                />
                <div className="w-full mt-10">
                    <div>
                        <Roadmap defaultData={data}/>
                    </div>
                    <Separator className="my-10"/>
                    <div>
                        <EntryPathsRequirements defaultData={data}/>
                    </div>
                    <Separator className="my-10"/>
                    <div>
                        <AdmissionBrochure defaultData={data}/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </Authenticated>
    )
}

export default Index;
