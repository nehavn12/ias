"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    text: "The service was outstanding. I got my visa process done seamlessly and quickly. Highly recommended for students looking for hassle-free processing.",
    name: "Rahul Mehta",
    role: "Student",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
  {
    text: "Krishna was very helpful in getting my IDLV done. He is genuinely interested in helping people and this shows in his work. Very methodical and prompt! Highly recommended.",
    name: "Kritika Sharma",
    role: "Student",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#022169] uppercase flex justify-center font-bold mb-2.5">
            Client Testimonials
            <Image
              className="ml-1"
              src="/about_icon.png"
              width={14}
              height={12}
              alt="abouticon"
            />
          </p>
          <h2 className="font-bold text-5xl text-[#022169] leading-[1.2]">
            See What Our Happy <br />
            <span className="text-5xl font-bold text-[#E4022B]">
              Clients Have to Say!
            </span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="relative w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex justify-center items-center w-full">
                {/* Background Image */}
                <div className="relative w-full h-[450px]">
                  <Image
                    src={testimonial.bgImage}
                    alt="Happy Clients"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                  />

                  {/* Testimonial Box */}
                  <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[50%] md:w-[40%]">
                    <p className="text-gray-700 text-lg">{testimonial.text}</p>

                    {/* Client Info */}
                    <div className="flex items-center mt-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                      />
                      <div className="ml-4">
                        <h4 className="text-blue-900 font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
