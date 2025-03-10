"use client"
import Image from "next/image"
import {  ChevronDown, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { DropDown } from "../DropDown"

export default function Product3Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff9e3]">
      {/* Header */}
      <header className="bg-[#252525] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <div className="w-10 h-10 bg-[#00aeef] rounded mr-2"></div>
              <span className="text-xl font-bold">Classique</span> */}
            </Link>
          </div>

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

          <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              // placeholder="Search here"
              className="w-full md:w-64 px-4 py-2 rounded-full text-white"
            />
            {/* <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-white" />
            </button> */}
          </div>
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
          <h2 className="text-2xl font-bold border-b-2 border-[#00aeef] pb-1">Kirloskar</h2>
          <DropDown />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* KS PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 39.png"
                  alt="KS PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">KS PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* KDS/GMC PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 40.png"
                  alt="KDS/GMC PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">KDS/GMC PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* KDT PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 41.png"
                  alt="KDT PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">KDT PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* KDI PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 42.png"
                  alt="KDI PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">KDI PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* KOS PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 43.png"
                  alt="KOS PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">KOS PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* SP BARE SHAFT PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 44.png"
                  alt="SP BARE SHAFT PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SP BARE SHAFT PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

        {/* SP MONOBLOC PUMP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* SP MONOBLOC PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 45.png"
                  alt="SP MONOBLOC PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SP MONOBLOC PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* SP COUPLED PUMPSET */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 46.png"
                  alt="SP COUPLED PUMPSET"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SP COUPLED PUMPSET</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* CW ETERNA PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 47.png"
                  alt="CW ETERNA PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">CW ETERNA PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* SW ETERNA PUMP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 50.png"
                  alt="SW ETERNA PUMP"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SW ETERNA PUMP</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
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

