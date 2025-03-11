import Image from "next/image"

const clients = [
    {
        name: "Vizag Steel",
        url: "/clients/vizag.png"
    },
    {
        name: "Cairn",
        url: "/clients/cairn.png"
    },
    {
        name: "Ruchi",
        url: "/clients/ruchi.png"
    },
    {
        name: "HAL",
        url: "/clients/hal.png"
    },
    {
        name: "JK Paper",
        url: "/clients/jk.png"
    },
    {
        name: "HSL",
        url: "/clients/hsl.png"
    },
    {
        name: "Divis",
        url: "/clients/divis.png"
    },
    {
        name: "Trimex Sands",
        url: "/clients/trimex.png"
    },
    {
        name: "Bharat Petroleum",
        url: "/clients/bpcl.png"
    }

]

function HomeClients() {
  return (
    <section className="w-full bg-[#FFF9E3]">
      {/* Header */}
      <div className="w-full bg-[#1a1a1a] py-4 text-center relative">
        <h2 className="text-3xl font-bold">
          <span className="text-white">Our </span>
          <span className="text-[#3498db]">Clients</span>
        </h2>
        </div>

      <div className="container mx-auto px-4 py-12 md:py-16 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Client logos grid */}
          <div className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Image
                    src={client.url || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className="max-h-52 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Featured image */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full w-[90%] h-[90%] top-[5%] left-[5%] z-0"></div>
              <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-30">
                <div className="grid grid-cols-6 gap-1">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-red-500 rounded-full"></div>
                  ))}
                </div>
              </div>
              <Image
                src="/clients/pedha-deal.png"
                alt="Business partners shaking hands"
                width={500}
                height={500}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeClients