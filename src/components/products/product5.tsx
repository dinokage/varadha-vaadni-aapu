"use client"
import Image from "next/image"
// import {  ChevronDown, Twitter, Facebook, Linkedin } from "lucide-react"
// import Link from "next/link"
import { DropDown } from "../DropDown"

export default function Product5Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff9e3]">
      {/* Header */}
      <header className="bg-[#252525] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          {/* <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-[#00aeef] rounded mr-2"></div>
              <span className="text-xl font-bold">Classique</span>
            </Link>
          </div> */}

          {/* <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#00aeef]">
              HOME
            </Link>
            <Link href="/about" className="hover:text-[#00aeef]">
              ABOUT US
            </Link>
            <Link href="/products" className="text-[#00aeef] border-b-2 border-[#00aeef]">
              PRODUCTS
            </Link>
            <Link href="/services" className="hover:text-[#00aeef]">
              SERVICES
            </Link>
            <Link href="/gallery" className="hover:text-[#00aeef]">
              GALLERY
            </Link>
          </nav> */}

          {/* <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search here"
              className="w-full md:w-64 px-4 py-2 rounded-full text-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-1">
        {/* Products Header */}
        <div className="bg-[#252525] rounded-b-[50px] mb-8 py-8">
          <h1 className="text-[#00aeef] text-4xl font-bold text-center">Products</h1>
        </div>

        {/* Atlas Copco Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-[#00aeef] pb-1">Symphony Air Coolers</h2>
          <DropDown/>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Air Dryers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 56.png"
                  alt="Air Dryers"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SYMPHONY AIR COOLERS
                FOR INDUSTRIAL PURPOSE</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gas Generators */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 57.png"
                  alt="Gas Generators"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SYMPHONY EASILY MOVABLE
AIR COOLERS FOR
INDUSTRIAL PURPOSE</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

{/* 
          {/* Additional Item 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 58.png"
                  alt="Additional Item 2"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div> 
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3"></h3>
                <div className="text-sm space-y-2">
                <h3 className="text-xl font-semibold mb-3">VENTICOOL 25 U MODEL</h3>
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Item 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/ventiflo.png"
                  alt="Additional Item 3"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">VENTIFLO</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>

      {/* Footer */}
      
    </div>
  )
}

