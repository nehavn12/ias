import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00142E] text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Left Section - Logo & About */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo-top.png" alt="IAS Logo" />
          </div>
          <p className="mt-4 text-gray-300 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={18} /></a>
          </div>
        </div>

        {/* Middle Section - Home Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Home</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Home</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> About Us</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Public Notary</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Justice of Peace</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Blogs</li>
          </ul>
        </div>

        {/* Right Section - Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-gray-300 space-y-2">
            <li>➤ Indian Drivers License Verification (IDLV)</li>
            <li>➤ Indian Police Clearance Certificate (PCC)</li>
            <li>➤ Overseas Citizenship of India (OCI)</li>
            <li>➤ General Power of Attorney Attestation</li>
            <li>➤ Indian Visa Services (Regular & On Arrival)</li>
            <li>➤ OCI Miscellaneous Service</li>
            <li>➤ Emergency Visa</li>
            <li>➤ Transit Visa</li>
            <li>➤ Police Clearance Certificate India</li>
            <li>➤ Miscellaneous Services</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>© IAS 2025 | All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-white">Terms & Condition</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
