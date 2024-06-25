import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const SliderIndex = () => {
    return (
        <Authenticated>
            <Head title="Slider" />
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </Authenticated>
    );
};

export default SliderIndex;
