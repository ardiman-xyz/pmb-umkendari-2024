import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";

const FacilityPage = () => {
    return (
        <Authenticated>
            <Head title="Fasilitas" />
            <div>
                <div className="flex items-center justify-between">
                    <Heading
                        title="Fasilitas"
                        description="Kelola dan perbarui informasi fasilitas dengan mudah."
                    />
                  <Link href={route("facility.create")}>
                      <Button variant="primary">
                          Tambah fasilitas
                      </Button>
                  </Link>
                </div>
            </div>
        </Authenticated>
    )
}

export default FacilityPage;
