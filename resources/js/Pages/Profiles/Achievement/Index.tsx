import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {Heading} from "@/Components/Heading";
import {Button} from "@/Components/ui/button";

const AchievementIndex = () => {
    return (
        <Authenticated>
            <Head title="Prestasi" />
            <div>
                <div className="flex items-center justify-between">
                    <Heading
                        title="Prestasi"
                        description="Kelola dan perbarui informasi prestasi dengan mudah."
                    />
                    <Link href={route("achievement.create")}>
                        <Button variant="primary">
                            Tambah prestasi
                        </Button>
                    </Link>
                </div>

            </div>
        </Authenticated>
    )
}

export default AchievementIndex;
