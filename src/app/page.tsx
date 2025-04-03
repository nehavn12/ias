import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import ServiceBar from "@/components/ServiceBar";

export default function Home() {
  return (
    // Slider section
    <>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <WhyUsSection/>
        <TestimonialSection/>
        <BlogSection/>
       <ServiceBar/>
    </>
  );
}
