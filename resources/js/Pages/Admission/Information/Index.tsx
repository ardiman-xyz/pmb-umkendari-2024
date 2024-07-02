import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Heading} from "@/Components/Heading";
import {Head} from "@inertiajs/react";
import {Roadmap} from "./_components/Roadmap";
import {Information} from "@/types";

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
                        <Roadmap defaultData={data} />
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Index;
