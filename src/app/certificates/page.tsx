import Image from "next/image"
// import { Twitter, Facebook, Linkedin } from "lucide-react"
// import Link from "next/link"

export default function GalleryPage() {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/gallery/certificate1.png", alt: "Factory workers discussing" },
    {id: 2, src: "/gallery/certificate2.png", alt: "Factory workers discussing"},
    {id: 3, src: "/gallery/certificate3.png", alt: "Factory workers discussing"},
    {id: 4, src: "/gallery/certificate4.png", alt: "Factory workers discussing"},
    {id: 5, src: "/gallery/certificate5.png", alt: "Factory workers discussing"},
    {id: 6, src: "/gallery/certificate6.png", alt: "Factory workers discussing"},
    {id: 7, src: "/gallery/certificate7.png", alt: "Factory workers discussing"},
    {id: 9, src: "/gallery/certificate8.png", alt: "Factory workers discussing"},
    {id: 10, src: "/gallery/certificate9.png", alt: "Factory workers discussing"}
   
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
                width={400}
                height={300}
                className="w-full h-auto object-cover aspect-[2/2]"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}

