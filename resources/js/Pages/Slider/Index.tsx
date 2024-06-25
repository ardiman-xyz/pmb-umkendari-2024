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

const SliderIndex = () => {
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
                    <p>Card Content</p>
                </CardContent>
            </Card>
        </Authenticated>
    );
};

export default SliderIndex;
