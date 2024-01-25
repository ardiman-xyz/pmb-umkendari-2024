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

const Jumbotron = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
            >
                <SwiperSlide>
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        src="/images/sliders/banner_0.jpg"
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
                        src="/images/sliders/banner_1.jpg"
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
                        src="/images/sliders/banner_2.jpg"
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
                        src="/images/sliders/banner_3.jpg"
                        alt="slider"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Jumbotron;
