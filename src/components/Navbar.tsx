'use client';

import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';
import { FiUpload, FiSearch, FiUser } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex gap-4 items-center justify-between px-4 py-3 bg-zinc-900 text-white">
      {/* Left: Logo + divider */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/3DIMLI-LOGO.svg"
          alt="3DIMLI Logo"
          width={120}     // adjust as needed
          height={40}     // adjust as needed
        />
        <span className="text-xs text-gray-400 hidden md:inline">BETA 1.0.1</span>
        <div className="h-6 w-px bg-gray-700 mx-4 hidden md:block" />
      </div>


      {/* Middle: Navigation Links - hidden on small screens */}
      <ul className="hidden md:flex gap-8 font-medium text-sm text-white">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Discover</li>
        <li className="cursor-pointer hover:text-gray-300">Features</li>
        <li className="cursor-pointer hover:text-gray-300">Pricing</li>
      </ul>

      {/* Search bar - always visible, but adjust width for small screens */}
      <div className="flex items-center bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full w-full md:w-[600px] mt-3 md:mt-0 md:ml-6">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full placeholder-gray-400 text-white"
        />
        <div className="border-l border-gray-600 h-5 mx-2" />
        <FiSearch className="text-gray-400" />
      </div>

      {/* Right buttons - hidden on small screens */}
      <div className="hidden md:flex items-center gap-3 ml-6">
        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#0a1a4f] to-[#122b4f] text-sm hover:bg-transparent transition">
          <FaDiscord className="text-white" />
          <span className="text-white">Discord</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0b2a74] to-[#1a3a74] text-sm hover:opacity-90 transition">
          <FiUpload className="text-white" />
          <span className="text-white">Upload</span>
        </button>
        <div className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center">
          <FiUser className="text-white" />
        </div>
      </div>
    </nav>
  );
}
