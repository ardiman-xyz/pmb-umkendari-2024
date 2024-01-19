import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Autoplay } from "swiper/modules";

const Achievements = () => {
    const isTablet = useMediaQuery({ minWidth: 640 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <div className="bg-[#EDEAE3] h-[500px]">
            <div className="container mx-auto flex md:flex-row flex-col gap-y-3 md:gap-y-0 md:space-x-10 space-x-0">
                <div className="md:w-1/2 w-full h-full rounded overflow-hidden">
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        modules={[Mousewheel, Autoplay]}
                        className="mySwiper"
                        autoplay
                        style={{
                            width: "100%",
                            ...(isTablet && { height: 100 }),
                            ...(isDesktop && { height: 500 }),
                            paddingTop: 30,
                            paddingBottom: 30,
                        }}
                    >
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig1.jpeg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig2.jpeg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig3.jpg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig4.jpeg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig5.jpeg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/images/achievments/ig6.jpg"
                                alt="gambar"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="md:w-1/2 w-full ">
                    <h1 className="font-extrabold md:text-4xl text-2xl  mt-6 md:leading-snug ">
                        Wujudkan Minatmu Lewat Beragam Kegiatan Kampus
                    </h1>

                    <p className="mt-5 leading-relaxed">
                        Yuk bergabung bersama komunitas kampus untuk mengasah
                        talenta dan jiwa kepemimpinanmu!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
