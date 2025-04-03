import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-[50px] rounded-2xl shadow-lg transition hover:shadow-xl">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-bold text-[#022169]">{title}</h3>

      {/* Description */}
      <p className="text-[#9CA6B4] mt-2 text-[16px] leading-[30px]">{description}</p>

      {/* Learn More Link */}
      <a href={link} className="mt-4 text-[#022169] font-semibold flex items-center gap-1 text-[14px]">
        Learn More ➝
      </a>
    </div>
  );
};

export default ServiceCard;
