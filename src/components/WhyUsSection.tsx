import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/Expert_Guidance.svg",
    title: "Expert Guidance",
    description: "Get personalized advice on choosing the right country, university, and visa.",
  },
  {
    icon: "/Hassle-Free_Application.svg",
    title: "Hassle-Free Application",
    description: "Professionals handle all paperwork, ensuring accuracy and efficiency.",
  },
  {
    icon: "/Scholarship_Assistance.svg",
    title: "Scholarship Assistance",
    description: "Get insights on financial aid, grants, and scholarships.",
  },
  {
    icon: "/Faster_Visa_Processing.svg",
    title: "Faster Visa Processing",
    description: "Avoid common mistakes that cause delays and get your visa approved smoothly.",
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 relative" id="whyinternational">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center">
         <p className="text-sm text-[#022169] uppercase flex justify-center font-bold mb-2.5 tracking-[1.5px]">Why IAS <Image className=' ml-1'src='/about_icon.png' width={14} height={12} alt="abouticon"/></p>
          <h2 className="font-bold text-5xl text-[#022169] leading-15">
            Why International App Services <br />
            <span className="text-5xl font-bold text-[#E4022B]">is awesome</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with rotation */}
          <div className="relative flex justify-center">
            <Image
              src="/why_IAS.png"
              alt="Students Abroad"
              width={804}
              height={771}
              
            />
            {/* Decorative Element */}
          
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F3F9FF] p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex mb-4">
                  <Image src={feature.icon} alt={feature.title} width={100} height={100} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[22px] text-[#022169]">{feature.title}</h3>

                {/* Description */}
                <p className="text-[#9CA6B4] text-[16px] mt-2 leading-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
