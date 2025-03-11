import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-colbg-[#fff9e3]">
      {/* Navigation */}

      <main className="flex-grow">
        {/* Services Title */}
        <section className="relative">
          <div className="bg-[#252525] text-white py-8 rounded-b-[100px] mb-8">
            <h1 className="text-4xl font-bold text-center text-[#00aeef]">
              Services
            </h1>
          </div>
        </section>

        {/* Services Grid */}
        <div className="w-[60vw] mx-auto px-4 grid md:grid-cols-2 gap-20 mb-12">
          {/* Air Compressors Services */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute offset top-0 left-0 bg-[#252525] text-white py-2 px-6 rounded-br-lg z-[-10]">
              <h2 className="font-semibold mr-10">Air Compressors Services</h2>
            </div>
            <Image
              src="/services/ser-1.png?height=300&width=300"
              alt="Air Compressor"
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg float-right"
            />
            <div className="absolute bottom-0 right-0 bg-[#252525]/80 text-white p-4 w-[58%]">
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
            <div className="absolute top-0 right-0 bg-[#252525] text-white py-2 px-6 rounded-bl-lg z-10">
              <h2 className="font-semibold">Service, Repair & Parts</h2>
            </div>
            <Image
              src="/services/ser-2.png?height=300&width=300"
              alt="Service and Repair"
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-[#252525]/80 text-white p-4 w-[58%]">
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

          {/*Ancillary Products */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute offset top-0 left-0 bg-[#252525] text-white py-2 px-6 rounded-br-lg z-[-10]">
              <h2 className="font-semibold mr-10">Ancillary Products</h2>
            </div>
            <Image
              src="/services/ser-3.png?height=300&width=300"
              alt="Air Compressor"
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg float-right"
            />
            <div className="absolute bottom-0 right-0 bg-[#252525]/80 text-white p-4 w-[58%]">
              <ul className="grid grid-cols-1 gap-1 text-sm">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  On-site industrial gas generators
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Air dryers
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Air filters
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Rotary screw compressors
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Compressed air condensate treatment
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Pipework for compressed air, industrial gases & vacuum
                </li>
              </ul>
            </div>
          </div>

          {/* Indistrial Applications */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute top-0 right-0 bg-[#252525] text-white py-2 px-6 rounded-bl-lg z-10">
              <h2 className="font-semibold">Industrial Applications</h2>
            </div>
            <Image
              src="/services/ser-4.png?height=300&width=300"
              alt="Service and Repair"
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-[#252525]/80 text-white p-4 w-[58%]">
              <ul className="grid grid-cols-1 gap-1 text-sm">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Food & Beverage
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Automotive
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Oil & Gas
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Wastewater
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Manufacturing
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Semiconductor & electronics
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                  Medical & Healthcare
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Knowledge Hub */}
        <div className="w-[30vw] container mx-auto px-4 mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 bg-[#252525] text-white py-2 px-6 rounded-br-lg z-10">
              <h2 className="font-semibold">Knowledge HUB</h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <Image
                  src="/services/ser-5.png?height=300&width=300"
                  alt="Knowledge Hub"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-l-lg"
                />
              </div>
              <div className="md:w-1/2 bg-[#252525] text-white p-6 rounded-r-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    Sign-up for our webinars
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    Compressed air blog
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    Compressed air wiki
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    What is variable speed drive (VSD)?
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    What are the benefits of variable speed drive?
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    What is Class 0 compressed air?
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    Class 0 frequently asked questions
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-[#00aeef] rounded-full mr-2"></span>
                    Compressed Air Newsletter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
