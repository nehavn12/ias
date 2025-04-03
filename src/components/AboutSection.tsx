import React from 'react'
import Image from 'next/image'
const AboutSection = () => {
  return (
    <section id='about' className='pt-[84px] pb-7'>
    <div className='container mx-auto px-[120px]'>
      {/* Row */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-center'>
        
        {/* Column 1 (Image) → Equivalent to `col-md-4` */}
        <div className='md:col-span-5 mr-[20px]'><img src='/about.png' className='rounded-lg' alt='aboutus' />
        </div>
        
        {/* Column 2 (Content) → Equivalent to `col-md-8` */}
        <div className='md:col-span-7'>
          <p className="text-sm text-[#022169] uppercase flex font-bold mb-2.5">About Us <Image className=' ml-1'src='/about_icon.png' width={14} height={12} alt="abouticon"/></p>
          <h2 className="font-bold text-5xl text-[#022169] mb-1.5">Unknown Wanderlust</h2>
          <h2 className="text-5xl font-bold text-[#E4022B]">Your Journey into</h2>
          <p className="text-[#9CA6B4] font-medium mt-4 leading-[30px] mb-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
  
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-[18px] font-semibold flex items-center gap-2 text-[#022169]"><Image className=' ml-1'src='/tick.png' width={14} height={14} alt="abouticon"/> Safety Guides</h4>
              <ul className="text-[#9CA6B4] mt-2 space-y-2">
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-semibold flex items-center gap-2 text-[#022169]"><Image className=' ml-1'src='/tick.png' width={14} height={14} alt="abouticon"/> Passport Assistance</h4>
              <ul className="text-[#9CA6B4] mt-2 space-y-2">
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
  
          {/* Read More Button */}
          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition">
            Read More ➝
          </button>
        </div>
  
      </div>
    </div>
  </section>
  
  
  )
}

export default AboutSection
