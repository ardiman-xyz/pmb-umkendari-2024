import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";
import {FacilityItem} from "@/Pages/Profiles/Facility/_components/FacilityItem";
import {Facility} from "@/types";

interface FacilityProps {
    facilities: Facility[]
}

const FacilityPage = ({facilities}: FacilityProps) => {

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

                <div className="w-full mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            facilities.length > 0 &&
                            facilities.map((facility, index) => (
                                <FacilityItem
                                    facility={facility}
                                    key={index}
                                />
                            ))
                        }

                        {
                            facilities.length < 1 && (
                                <div>
                                    tidak ada data
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </Authenticated>
    )
}

export default FacilityPage;
