import Image from "next/image"
import { Search, ChevronDown, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Product3Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff9e3]">
      {/* Header */}
      <header className="bg-[#252525] text-white">
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
            <Link href="/products" className="text-[#00aeef] border-b-2 border-[#00aeef]">
              PRODUCTS
            </Link>
            <Link href="/services" className="hover:text-[#00aeef]">
              SERVICES
            </Link>
            <Link href="/gallery" className="hover:text-[#00aeef]">
              GALLERY
            </Link>
          </nav>

          <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search here"
              className="w-full md:w-64 px-4 py-2 rounded-full text-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-white" />
            </button>
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
          <h2 className="text-2xl font-bold border-b-2 border-[#00aeef] pb-1">Nilfisk</h2>
          <div className="relative w-full md:w-64 mt-4 md:mt-0">
            <select className="w-full border border-[#a9a9a9] rounded px-4 py-2 appearance-none">
              <option>--Select--</option>
              <option>Atlas Copco</option>
              <option>SEW Eurodrive</option>
              <option>Kirloskar</option>
              <option>Danfoss Drives</option>
              <option>Symphony Air Coolers</option>
              <option>Snap On Tools</option>
              <option>Praj Hipurity Systems</option>
              <option>WEG Motors</option>
              <option>Everest Vacuum Pumps & Blowers</option>
              <option>BMD Engineering Scrappers</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DRY VACUUM */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 77.png"
                  alt="DRY VACUUM"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">DRY VACUUM</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* DRY VACUUM */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 78.png"
                  alt="DRY VACUUM"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">DRY VACUUM</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* DRY VACUUM */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 79.png"
                  alt="DRY VACUUM"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">DRY VACUUM</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bare(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* SINGLE DISC */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 80.png"
                  alt="SINGLE DISC"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SINGLE DISC</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD I/s : 1.7 I/s - 12.9 I/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* SINGLE DISC */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 81.png"
                  alt="SINGLE DISC"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">SINGLE DISC</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIDE ON SCRUBBER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 82.png"
                  alt="RIDE ON SCRUBBER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">RIDE ON SCRUBBER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

        {/* RIDE ON SCRUBBER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* RIDE ON SCRUBBER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 83.png"
                  alt="RIDE ON SCRUBBER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">RIDE ON SCRUBBER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* WALK BEHIND SCRUBBER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 84.png"
                  alt="WALK BEHIND SCRUBBER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">WALK BEHIND SCRUBBER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIDE ON SCRUBBER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 85.png"
                  alt="RIDE ON SCRUBBER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">RIDE ON SCRUBBER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* MANUAL SWEEPER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 86.png"
                  alt="MANUAL SWEEPER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">MANUAL SWEEPER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* MANUAL SWEEPER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 87.png"
                  alt="MANUAL SWEEPER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">MANUAL SWEEPER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIDE ON SWEEPER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 88.png"
                  alt="RIDE ON SWEEPER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">RIDE ON SWEEPER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* WET & DRY VACUUM CLEANER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 89.png"
                  alt="WET & DRY VACUUM CLEANER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">WET & DRY VACUUM CLEANER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* DRY VACUUM CLEANER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 90.png"
                  alt="DRY VACUUM CLEANER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">DRY VACUUM CLEANER</h3>
                <div className="text-sm space-y-2">
                  <p>Capacity FAD l/s : 1.7 l/s - 12.9 l/s</p>
                  <p>Working pressure : 2 bar(e) - 14 bar(e)</p>
                  <p>Installed motor power : 1.5 kW - 8.1 kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* WET & DRY VACUUM CLEANER */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <Image
                  src="/image 91.png"
                  alt="WET & DRY VACUUM CLEANER"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 bg-[#252525] text-white p-4">
                <h3 className="text-xl font-semibold mb-3">WET & DRY VACUUM CLEANER</h3>
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
      <footer className="bg-[#252525] text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#00aeef] rounded mr-2"></div>
                <span className="text-xl font-bold">SEW MOVIGEAR</span>
              </div>
              <p className="text-sm mb-4">
                An exclusive One-Stop Facility for guaranteed energy efficient solutions related to Air Compressors,
                Pumps, Valves,Drive Engineering & Material handling.
              </p>
              <div>
                <h4 className="font-bold mb-2">FOLLOW US</h4>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-[#1d9bf0] rounded-sm flex items-center justify-center">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-[#1877f2] rounded-sm flex items-center justify-center">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-[#0076b2] rounded-sm flex items-center justify-center">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#00aeef]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#00aeef]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#00aeef]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#00aeef]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#00aeef]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact US</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  Classique Engineering Enterprises
                  <br /># 39-11-3/2, 1st Floor, Above Punjab National Bank of Commerce, Muraliinagar, Bank Street,
                  Sector -11,
                  <br />
                  Visakhapatnam - 530007, AP, India.
                </p>
                <p className="text-sm">info@classique.co.in & kk@classique.co.in</p>
                <p className="text-sm">+91 - 9348754999 | +91 - 8096666686</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#606060] mt-8 pt-4 text-xs text-center">
            <p>
              • Terms & Conditions - Privacy Policy - Sitemap &nbsp;&nbsp; powered by catchway{" "}
              <span className="text-[#00aeef]">classique.com</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


