import Image from "next/image"

export default function AtlasCopcoBCard({name, description, url}: {name: string, description: string, url: string}) {
    return (
      <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md bg-black border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Left side with logo and equipment image */}
          <div className="p-6 flex flex-col items-center justify-center bg-white md:w-2/5">
            <div className="mb-6">
              <Image
                src={url}
                alt="Atlas Copco equipment"
                width={250}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px]">
              <div className="bg-[#0092d0] h-2 w-full"></div>
              <div className="text-center py-1">
                <span className="text-[#0092d0] font-semibold text-2xl">{name}</span>
              </div>
              <div className="bg-[#0092d0] h-2 w-full"></div>
            </div>
          </div>
  
          {/* Right side with company description */}
          <div className="p-8 bg-[#222222] text-white md:w-3/5">
            <h2 className="text-3xl font-bold mb-6 tracking-wide">{name}</h2>
            <p className="text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }