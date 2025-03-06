import React from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    name: "Atlas Copco",
    description: "Atlas Copco is a global, industrial company based in Stockholm, Sweden, with almost 40,000 employees and customers in more than 180 countries.",
    url: "/logos/atlas-copco.png"
  },
  {
    name: "SEW EURODRIVE",
    description: "SEW products stand for diversity, quality, reliability and the power of innovation. Performance characteristics that you will find throughout the entire product.",
    url: "/logos/sew.png"
  },
  {
    name: "SPX johnson",
    description: "For more than 75 years SPX FLOW Johnson Pump brand pumps have been developed, manufactured and marketed for industrial use.",
    url: "/logos/spx.png"
  },
  {
    name: "XYLEM",
    description: "Xylem offers a portfolio of products and systems designed to effectively meet the demands and challenges of treating water & wastewater.",
    url: "/logos/xylem.png"
  },
  {
    name: "Kirloskar",
    description: "At the heart of agriculture, industry and economy, we are there. Our aim is to empower people, enhance business strengthen infrastructure.",
    url: "/logos/kirloskar.png"
  },
  {
    name: "Nilfisk",
    description: "Nilfisk was founded on a vision of  producing & selling products of the highest quality worldwide. Nilfisk has responded to the changing needs of markets & customers with innovative products and solutions.",
    url: "/logos/nilfisk.png"
  }
]

function HomeProducts() {
  return (
    <>
      <div className="bg-[#252525] rounded-b-[50px] mb-8 py-8">
          <h1 className="text-[#00aeef] text-4xl font-bold text-center">Our <span className="text-white">Products</span></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8 mx-10">
          {
            products.map((product, index) => (
              <ProductCard key={index} name={product.name} description={product.description} url={product.url}/>
            ))
          }
            

        </div>
    </>
  )
}

export default HomeProducts