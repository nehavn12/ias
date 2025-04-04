import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00142E] text-white py-[50px]">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2">
            <Link href="/">
              <Image src='/logo-top.png' width={123} height={46} alt="footerlogo" />
            </Link>
            </div>
            <p className="text-white text-[16px] mt-3 leading-relaxed mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-white">
              <FaFacebookF className="hover:text-white transition cursor-pointer" />
              <FaInstagram className="hover:text-white transition cursor-pointer" />
              <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-[30px]">Home</h3>
            <ul className="space-y-2 text-white">
              {["Home", "About Us", "Public Notary", "Justice of Peace", "Blogs"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#E4022B]">✔</span>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 space-y-4">
              {[
                "Indian Drivers License Verification (IDLV)",
                "Indian Police Clearance Certificate (PCC)",
                "Overseas Citizenship of India (OCI)",
                "General Power of Attorney Attestation",
                "Indian Visa Services (Regular & On Arrival)",
                "OCI Miscellaneous Service",
                "Emergency Visa",
                "Transit Visa",
                "Police Clearance Certificate India",
                "Miscellaneous Services",
              ].map((service) => (
                <p key={service} className="flex items-center gap-2 text-white">
                  <span className="text-red-500">›</span>
                  <Link href="#" className="hover:text-white transition">
                    {service}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-white text-sm">
          <p>© IAS 2025 | All Rights Reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Terms & Condition", "Privacy Policy", "Disclaimer"].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
