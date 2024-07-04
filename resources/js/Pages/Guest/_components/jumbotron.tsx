import { Swiper, SwiperSlide } from "swiper/react";

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Slider} from "@/types";

interface JumbotronProps {
    sliders: Slider[]
}

const Jumbotron = ({sliders}: JumbotronProps) => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                }}
            >
                {
                    sliders.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                src={slider.image_path}
                                alt="slider"
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Jumbotron;
