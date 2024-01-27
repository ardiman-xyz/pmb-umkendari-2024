import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const numbers = Array.from({ length: 11 }, (_, i) => i + 1);

const Facility = () => {
    return (
        <div className="flex md:flex-row flex-col gap-y-3 md:gap-y-0">
            <div className="md:w-1/2 w-full">
                <h1 className="font-extrabold md:text-4xl text-2xl  mt-6 md:leading-snug ">
                    Ayo, Bergabung bersama kami !
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Berbagai fasilitas modern dan terkini tersedia di kampus
                    kami.
                </p>
            </div>
            <div className="md:w-1/2 w-full">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {numbers.map((number) => (
                        <SwiperSlide key={number}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                src={`/images/facilities/${number}.svg`}
                                alt="slider"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Facility;
