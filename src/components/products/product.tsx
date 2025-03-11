"use client"
import Image from "next/image"
// import {  ChevronDown} from "lucide-react"
import { DropDown } from "../DropDown"
// import Link from "next/link"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff9e3]">
      {/* Header */}
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto py-1 px-4">
        {/* Products Header */}
        <div className="bg-[#252525] rounded-b-[50px] mb-8 py-8">
          <h1 className="text-[#00aeef] text-4xl font-bold text-center">Products</h1>
        </div>

        {/* Atlas Copco Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-[#00aeef] pb-1">Atlas Copco</h2>
          <DropDown />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Air Dryers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/airdryers.png"
                  alt="Air Dryers"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Air Dryers</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
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
                  src="/gas.png"
                  alt="Gas Generators"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Gas Generators</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Air Compressors */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/aircompress.png"
                  alt="Air Compressors"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Air Compressors</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marine Compressors */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/marine.png"
                  alt="Marine Compressors"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Marine Compressors</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Air Receivers & Aftercoolers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/airR.png"
                  alt="Air Receivers & Aftercoolers"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Air Receivers & Aftercoolers</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Oil-Free Air & Nitrogen Boosters */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 26.png"
                  alt="Oil-Free Air & Nitrogen Boosters"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">Oil-Free Air & Nitrogen Boosters</h3>
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

