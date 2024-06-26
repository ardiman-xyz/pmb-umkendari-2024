import { Head, Link } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {Slider} from "@/types";
import {SliderItem} from "./_components/SliderItem";

interface SliderProps {
    sliders: Slider[]
}

const SliderIndex = ({ sliders }: SliderProps) => {

    return (
        <Authenticated>
            <Head title="Slider" />
            <Card className="border-none">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-bold">Slider</CardTitle>
                        <CardDescription>
                            Manage your slider image
                        </CardDescription>
                    </div>
                    <Link href={route("slider.create")}>
                        <Button>Tambah slider</Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
                        {
                            sliders.map((slider, index) => (
                                    <SliderItem
                                        slider={slider}
                                        key={index}
                                    />
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </Authenticated>
    );
};

export default SliderIndex;
