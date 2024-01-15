import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Facility = () => {
    return (
        <div className="flex md:flex-row flex-col mb-[100px] gap-y-3 md:gap-y-0">
            <div className="md:w-1/2 w-full">
                <h1 className="font-bold text-3xl">
                    Ayo, Bergabung bersama kami !
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Berbagai fasilitas modern dan terkini tersedia di kampus
                    kita tercinta kami.
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
                    <SwiperSlide>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src="/images/facilities/1.png"
                            alt="slider"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src="/images/facilities/2.png"
                            alt="slider"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src="/images/facilities/3.png"
                            alt="slider"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src="/images/facilities/4.png"
                            alt="slider"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Facility;
