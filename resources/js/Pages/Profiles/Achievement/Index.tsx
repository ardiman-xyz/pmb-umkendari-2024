import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Achievement} from "@/types";
import {AchievementItem} from "./_components/AchievementItem";
import {Heading} from "@/Components/Heading";

interface IProps {
    achievements: Achievement[];
}

const AchievementIndex = ({achievements}: IProps) => {

    return (
        <Authenticated>

                <Head title="Fasilitas" />
                <div>
                    <div className="flex items-center justify-between">
                        <Heading
                            title="Prestasi"
                            description=" Kelola dan perbarui informasi prestasi dengan mudah."
                        />
                        <Link href={route("achievement.create")}>
                            <Button variant="primary">
                                Tambah Prestasi
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                achievements.length > 0 &&
                                achievements.map((achievement, index) => (
                                    <AchievementItem
                                        achievement={achievement}
                                        key={index}
                                    />
                                ))
                            }

                            {
                                achievements.length < 1 && (
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

export default AchievementIndex;
