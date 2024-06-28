import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";

const DepartmentIndex = () => {
    return (
        <Authenticated>
            <Head title="Program Studi" />
            <div>
                <div className="flex items-center justify-between">
                    <Heading
                        title="Program Studi"
                        description="Kelola dan perbarui informasi program studi dengan mudah."
                    />
                    <Link href={route("facility.create")}>
                        <Button variant="primary">
                            Tambah prodi
                        </Button>
                    </Link>
                </div>

                <div className="w-full mt-10">
                </div>
            </div>
        </Authenticated>
)
}

export default DepartmentIndex;
