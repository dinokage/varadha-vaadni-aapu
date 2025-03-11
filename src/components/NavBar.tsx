"use client"

import Link from "next/link"
import { Search, } from "lucide-react"

export default function Navbar() {

  return (
    <header className="bg-[#252525] text-white shadow-lg  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-[#00aeef] rounded mr-2"></div>
          <span className="text-xl font-bold">Classique</span>
        </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-[#00aeef]">
          HOME
        </Link>

        <Link href="/about" className="hover:text-[#00aeef]">
          ABOUT US
        </Link>
        <Link href="/products" className="hover:text-[#00aeef] ">
          PRODUCTS
        </Link>
        <Link href="/services" className="hover:text-[#00aeef]">
          SERVICES
        </Link>
        <Link href="/ContactUs" className="hover:text-[#00aeef]">
        CONTACT US
        </Link>
        <Link href="/gallery" className="hover:text-[#00aeef]">
          GALLERY
        </Link>
        </nav>

        <div className="relative mt-4 md:mt-0 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search here"
          className="w-full md:w-64 px-4 py-2 rounded-full text-GREY"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-5 w-5 text-GREY" />
        </button>
        </div>
      </div>
      </header>
  )
}

