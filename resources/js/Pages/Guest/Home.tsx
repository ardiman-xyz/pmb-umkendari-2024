import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import Jumbotron from "./_components/jumbotron";
import Programs from "./_components/programs";
import Facility from "./_components/facility";
import Achievements from "./_components/achievements";
import Procedure from "./_components/procedure";
import {Achievement, Facility as FacilityType, Information, Slider} from "@/types";

interface HomeProps {
    data: {
        sliders: Slider[];
        facilities: FacilityType[];
        achievements: Achievement[];
        information: Information
    };
    appUrl: string;
}

export default function Home({data, appUrl}: HomeProps) {

    return (
        <>
            <Head>
                <title>Selamat datang</title>
                <meta
                    name="description"
                    content="This is a page specific description"
                />
            </Head>
            <Guest>
                <div>
                    <Jumbotron sliders={data.sliders} />
                    <section className="mt-10 container mx-auto">
                        <Programs url={appUrl} />
                    </section>
                    <section className="md:mt-[114px] mt-6 container mx-auto">
                        <Facility facilities={data.facilities} />
                    </section>

                    <section className="md:mt-[200px] mt-6">
                        <Achievements achievements={data.achievements} />
                    </section>

                    <section className="mt-[100px] container mx-auto">
                        <Procedure data={data.information} />
                    </section>
                </div>
            </Guest>
        </>
    );
}
