"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from "swiper/modules";
import {Container} from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/pagination';


export default function Slider() {
    return (
        <Container>
            <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/10021S12025818.webp" alt={"pic1"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/82642S12025923.webp" alt={"pic2"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/95520S12025923.webp" alt={"pic3"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/164856S12025823.webp" alt={"pic4"}/>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}