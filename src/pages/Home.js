import React from 'react'
import Header from '../components/Header'
import home1 from '../assets/img/home1.svg'
import { Button, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
// import SelectBooking from './selectbooking/SelectBooking'
// import {Link} from 'react-router-dom'
// import {Link} from 'react-dom'


import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import SwiperCore, {
//     Pagination
// } from 'swiper/core';
import { NavLink, useHistory } from 'react-router-dom';
// SwiperCore.use([Pagination]);

export default function Home() {
    const history = useHistory();
const onButtonclick=()=>{
    console.log("object");
    history.push('/select-booking')
}

    return (
        <>
            <Header />
            {/* <Container>
                <div className="header_image">
                <img src={home1} alt="bastar"  />
                </div>
                
                <div className="text-center">
                    <h1>Explore</h1>
                    <h6 className="px-5">Check out the best tourism destinations around Bastar</h6>
                </div>
                <Swiper slidesPerView={2} spaceBetween={30} freeMode={true} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <img src={home1} className="swiper__img w-100" />
                        <span className="swiper__title">Destinations 1</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={home1} className="swiper__img w-100" />
                        <span className="swiper__title">Destinations 2</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={home1} className="swiper__img w-100" />
                        <span className="swiper__title">Destinations 3</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={home1} className="swiper__img w-100" />
                        <span className="swiper__title">Destinations 4</span>
                    </SwiperSlide>
                </Swiper>
                <div className="d-flex justify-content-center mt-4">
                    <Button className="px-5 py-3 my-5 btn-primary-b">View all destinations</Button>
                </div>
            </Container>
            <Container className="booking__container bg-dark text-white p-5">
                <div className="text-center">
                    <h1>Bookings</h1>
                    <h6 className="mt-1 px-5">Book tickets for buses, cabs, DM passes</h6>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Button className="btn px-5 py-3 btn-secondary-b" onClick={onButtonclick} >Make a Booking</Button>
                </div>
                <img src={home1} className="booking__img w-100" />

            </Container> */}

            {/* <SelectBooking/> */}
        </>
    )
}
