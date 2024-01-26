import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/Components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const Achievements = () => {
    const isTablet = useMediaQuery({ minWidth: 640 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const numbers = Array.from({ length: 14 }, (_, i) => i + 1);

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
                            className="md:mt-20 mt-5 mb-2 px-20 py-8 capitalize"
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
                    {numbers.map((number) => (
                        <SwiperSlide key={number}>
                            <img
                                src={`/images/achievments/${number}.png`}
                                alt="gambar"
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
