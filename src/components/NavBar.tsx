"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#252525] text-white px-4 py-4 flex items-center justify-between mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-2">
          <div className="absolute inset-0 bg-[#00a0e3] rounded-sm"></div>
          <div className="absolute inset-[3px] right-[60%] bg-[#252525] rounded-sm"></div>
        </div>
        <span className="text-xl font-bold">Classique</span>
      </Link>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-[#00a0e3] transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#00a0e3] transition-colors">
            ABOUT US
          </Link>
          <Link href="/products" className="hover:text-[#00a0e3] transition-colors">
            PRODUCTS
          </Link>
          <Link href="/services" className="hover:text-[#00a0e3] transition-colors">
            SERVICES
          </Link>
          <Link href="/gallery" className="hover:text-[#00a0e3] transition-colors">
            GALLERY
          </Link>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="py-2 px-4 pr-10 rounded-full w-[250px] text-[#252525] bg-[#FFF9E3] focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#252525]">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#252525] z-50 p-4 flex flex-col space-y-4">
          <Link href="/" className="hover:text-[#00a0e3] transition-colors" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#00a0e3] transition-colors" onClick={() => setIsMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link
            href="/products"
            className="hover:text-[#00a0e3] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            PRODUCTS
          </Link>
          <Link
            href="/services"
            className="hover:text-[#00a0e3] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link href="/gallery" className="hover:text-[#00a0e3] transition-colors" onClick={() => setIsMenuOpen(false)}>
            GALLERY
          </Link>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 pr-10 rounded-full w-full text-[#252525] focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#252525]">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

