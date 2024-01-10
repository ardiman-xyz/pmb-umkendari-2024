import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Guest from "@/Layouts/GuestLayout";

export default function Home({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <Guest>
                <div>
                    hello
                </div>
            </Guest>
        </>
    );
}
