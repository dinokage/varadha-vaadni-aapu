import React from 'react'
import Image from 'next/image'

function HomeServices() {
  return (
    <>
    <div className="bg-[#252525] rounded-b-[50px] mb-8 py-8">
          <h1 className="text-white text-4xl font-bold text-center">Our <span className="text-[#00aeef]">Services</span></h1>
        </div>
    <div className="w-[30vw] mx-auto px-4 grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute offset top-0 left-0 bg-[#252525] text-white py-2 px-6 rounded-br-lg z-[-10]">
                      <h2 className="font-semibold mr-10">Air Compressors Services</h2>
                    </div>
                    <Image
                      src="/services/ser-1.png?height=400&width=600"
                      alt="Air Compressor"
                      width={300}
                      height={300}
                      objectFit="contain"
                      className="rounded-lg float-right"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#252525]/80 text-white p-4 w-full">
                      <ul className="grid grid-cols-1 gap-1 text-sm">
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Oil-injected compressors
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Oil-free compressors
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Low pressure oil-free blowers
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Rotary screw compressors
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Small workshop 5 screw
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Industrial GA VSD+ screw
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Compressors
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* Service, Repair & Parts */}
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute top-0 right-0 bg-[#252525] text-white py-2 px-6 w-full rounded-bl-lg z-[-1]">
                      <h2 className="font-semibold float-right">Service, Repair & Parts</h2>
                    </div>
                    <Image
                      src="/services/ser-2.png?height=400&width=600"
                      alt="Service and Repair"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#252525]/80 text-white p-4 w-full">
                      <ul className="grid grid-cols-1 gap-1 text-sm">
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Planned service
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Spare parts
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Compressor oils
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Optimized 4.0
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Service plans
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Pay-as-you-go compressed air
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                          Compressor energy recovery
                        </li>
                      </ul>
                    </div>
                  </div>
    </div>
    </>
  )
}

export default HomeServices