import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Slider = () => {
    const images = [
        "https://www.nakedcashmere.com/cdn/shop/files/HOLIDAY_HP_BANNER_1_35bdf2b4-4c8b-4a58-8fb3-6e96b37eaa8c.jpg?v=1700096708&width=1920",
        "https://www.nakedcashmere.com/cdn/shop/files/HOLIDAY_HP_BANNER_3.jpg?v=1700080750&width=1920",
        "https://www.nakedcashmere.com/cdn/shop/files/figtny-header.jpg?v=1699316116&width=1920",
        "https://i.shgcdn.com/f6df5a1c-b8fe-4444-96ea-067aa9b25e01/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/",
    ];

    return (
        <div className="relative">
            <Swiper
                className="max-h-[1000px] max-lg:h-[1400px] max-md:h-[600px] flex justify-center relative"
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="w-full h-full object-cover"
                            src={images[index]}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
                <h1 className="max-lg:text-5xl text-8xl font-bold text-white">VelvetVista</h1>
            </div>
        </div>
    );
};

export default Slider;
