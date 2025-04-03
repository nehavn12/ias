"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const blogPosts = [
  {
    title: "Wander Often Wonder Alway Flight Comport",
    date: "October 19, 2022",
    author: "admin",
    image: "/blog-1.png",
    link: "#",
  },
  {
    title: "10 Common Questions About Applying for an Indian Visa from Australia",
    date: "October 19, 2022",
    author: "admin",
    image: "/blog-2.png",
    link: "#",
  },
  {
    title: "Everything You Need to Know About Study Visa for India from Australia",
    date: "October 19, 2022",
    author: "admin",
    image: "/blog-3.png",
    link: "#",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-red-600 uppercase font-semibold tracking-wide">Blog or Resources 📚</p>
          <h2 className="text-4xl font-bold text-blue-900">
            Adventure Awaits Around <br /> 
            <span className="text-red-600">Every Corner</span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-5 border hover:border-red-600 transition-all">
                <div className="relative w-full h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm flex items-center">
                    📅 {post.date} &nbsp; | &nbsp; 👤 {post.author}
                  </p>
                  <h3 className="text-lg font-semibold text-blue-900 mt-2">{post.title}</h3>
                  <a
                    href={post.link}
                    className="mt-4 inline-flex items-center text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="swiper-button-prev bg-gray-200 text-red-600 w-10 h-10 rounded-full flex items-center justify-center shadow">
            ←
          </button>
          <button className="swiper-button-next bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
