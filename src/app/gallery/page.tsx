import Image from "next/image"
import { Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/gallery/image 131.png", alt: "Factory workers discussing" },
    {id: 2, src: "/gallery/image 132.png", alt: "Factory workers discussing"},
    {id: 3, src: "/gallery/image 133.png", alt: "Factory workers discussing"},
    {id: 4, src: "/gallery/image 134.png", alt: "Factory workers discussing"},
    {id: 5, src: "/gallery/image 135.png", alt: "Factory workers discussing"},
    {id: 6, src: "/gallery/image 136.png", alt: "Factory workers discussing"},
    {id: 7, src: "/gallery/image 137.png", alt: "Factory workers discussing"},
    {id: 9, src: "/gallery/image 139.png", alt: "Factory workers discussing"},
    {id: 10, src: "/gallery/image 140.png", alt: "Factory workers discussing"},
    {id: 11, src: "/gallery/image 141.png", alt: "Factory workers discussing"},
    {id: 12, src: "/gallery/image 142.png", alt: "Factory workers discussing"},
    {id: 13, src: "/gallery/image 143.png", alt: "Factory workers discussing"},
    {id: 14, src: "/gallery/image 144.png", alt: "Factory workers discussing"},
    {id: 15, src: "/gallery/image 145.png", alt: "Factory workers discussing"},
    {id: 16, src: "/gallery/image 146.png", alt: "Factory workers discussing"},
    {id: 17, src: "/gallery/image 147.png", alt: "Factory workers discussing"},
    {id: 18, src: "/gallery/image 148.png", alt: "Factory workers discussing"},
    {id: 19, src: "/gallery/image 149.png", alt: "Factory workers discussing"},
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#fff9e3]">

      {/* Gallery Header */}
      <div className="bg-[#252525] text-white py-8 rounded-b-[50px] mb-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-[#00aeef]">Gallery</h1>

          {/* Gallery Tabs */}
          <div className="flex justify-center space-x-8 md:space-x-16 px-4">
            <button className="pb-2 border-b-2 border-[#00aeef] text-white font-medium">Images</button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white font-medium">
              Videos
            </button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white font-medium">
              Documents
            </button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white font-medium">
              Certificates & Awards
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 flex-grow mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={550}
                height={350}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#252525] text-white pt-10 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Classique Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm text-gray-300 mb-4">
                An exclusive One-Stop Facility for guaranteed energy-efficient solutions related to Air Compressors,
                Pumps, Valve/Drive Engineering & Material handling.
              </p>
              <h4 className="font-bold mb-2">FOLLOW US</h4>
              <div className="flex space-x-2">
                <a href="#" className="bg-[#1877f2] p-1.5 rounded-sm hover:opacity-80">
                  <Twitter size={16} />
                </a>
                <a href="#" className="bg-[#1d9bf0] p-1.5 rounded-sm hover:opacity-80">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-[#0076b2] p-1.5 rounded-sm hover:opacity-80">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact US</h3>
              <p className="text-gray-300 mb-2">Classique Engineering Enterprises</p>
              <p className="text-gray-300 mb-4 text-sm">
                # 39-11-1/2, 1st Floor, Above Punjab National Bank of Commerce, Muralinagar, Banz Street, Sector -11,
                Visakhapatnam - 530007, AP, India
              </p>
              <p className="text-gray-300 mb-2 flex items-center">
                <span className="mr-2">📧</span> info@classique.co.in & info@classique.co.in
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">📞</span> +91- 9348754999 | +91- 8096566686
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <div>
              <span>• Terms & Conditions • Privacy Policy • Sitemap</span>
            </div>
            <div>
              <span>powered by catchway creativecom</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

