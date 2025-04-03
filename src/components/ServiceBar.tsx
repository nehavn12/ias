import React from "react";
import Image from "next/image";
const ServiceBar = () => {
  return (
    <div className="w-full bg-[#E4022B] py-3 flex justify-center">
      <div className="flex items-center gap-8 px-6">
          <Image src='/footer_img.png' alt='visa' width={1920} height={65} />
          </div>
    </div>
  );
};

export default ServiceBar;
