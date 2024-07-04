import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import {Facility as FacilityType} from "@/types";


interface FacilityProps {
    facilities: FacilityType[]
}

const Facility = ({facilities}: FacilityProps) => {
    return (
        <div className="flex flex-col gap-y-3 md:gap-y-0">
            <div className="w-full ">
                <h1 className="font-extrabold md:text-4xl text-2xl  mt-6 md:leading-snug text-center">
                    Ayo, Bergabung bersama kami !
                </h1>
                <p className="mt-4 text-muted-foreground text-center">
                    Berbagai fasilitas modern dan terkini tersedia di kampus
                    kami.
                </p>
            </div>
            <br />
            <div className="w-full mt-[24px]">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay
                    className="mySwiper"
                >
                    {facilities.map((facility, index) => (
                        <SwiperSlide key={index}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                src={facility.image_path}
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
