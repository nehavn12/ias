"use client"; // Ensure it runs only on the client side

import { useState } from "react"; // ✅ Import useState
import { FiChevronDown } from "react-icons/fi"; // ✅ Import the dropdown icon

const Dropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false); // ✅ No more errors

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 hover:underline"
      >
        {title}
        <FiChevronDown />
      </button>
      {open && (
        <div className="absolute bg-white text-black shadow-md rounded-md p-2 mt-2 min-w-[150px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
