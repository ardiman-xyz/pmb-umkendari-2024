import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Button } from "@/Components/ui/button";
import {Achievement} from "@/types";

interface AchievementsProps {
    achievements: Achievement[]
}

const Achievements = ({achievements}: AchievementsProps) => {

    const handleRedirect = () => {
        window.open("https://www.instagram.com/umkendari_/");
    };

    return (
        <>
            <div className="bg-[#EDEAE3]">
                <div className="container mx-auto flex md:flex-row flex-col gap-y-3 md:gap-y-0 space-x-0">
                    <div className="md:w-1/2 w-full h-full rounded overflow-hidden">
                        <img
                            src="/gif/bg1.gif"
                            alt="gambar"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="md:w-1/2 w-full ">
                        <h1 className="font-extrabold md:text-4xl text-2xl  mt-6 md:leading-snug ">
                            Wujudkan Minatmu Lewat Beragam Kegiatan Kampus
                        </h1>

                        <p className="mt-5 leading-relaxed">
                            Yuk bergabung bersama komunitas kampus untuk
                            mengasah talenta dan jiwa kepemimpinanmu!
                        </p>

                        <Button
                            onClick={handleRedirect}
                            className="md:mt-20 mt-5 mb-2 px-20 py-8 capitalize w-full md:w-max"
                            variant="guestButtonDefault"
                        >
                            Selengkapnya
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-10 container  mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    {achievements.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item.image_path}
                                alt={`Gambar ${item.title}`}
                                className="w-full h-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Achievements;
