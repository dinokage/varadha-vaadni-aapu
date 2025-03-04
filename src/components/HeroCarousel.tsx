"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const data = [
  {
    title: "SEW Gear Motors",
    description:
      "We have it all - from the gear-motors to the electronics and software that drives them. Think dynamic, precise, large & powerful.",
    image: "/carousel/car-1.png",
  },
  {
    title: "NILFISK AUTO CLEANERS",
    description:
      "A range of air compressors, dryers, low-pressure blowers, nitrogen generation systems, piping, accessories & service solutions.",
    image: "/carousel/car-2.png",
  },
  {
    title: "XYLEM PUMPS",
    description:
      'Xylem is a leading water technology  company committed to "solving water" by creating innovative & smart technology solutions.',
    image: "/carousel/car-3.png",
  },
];

export function HeroCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>();

  // Set up the autoplay functionality
  useEffect(() => {
    if (!api) return;

    // Set up autoplay with 2000ms delay
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <section
                key={index}
                className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {item.title.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className={
                          index % 2 === 0 ? "text-[#00a0e3]" : "text-[#252525]"
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h1>
                  <p className="text-[#252525] text-lg md:text-xl max-w-lg">
                    {item.description}
                  </p>
                </div>

                <div className="md:w-1/2 relative">
                  <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                      src={item.image}
                      alt="SEW Gear Motors"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

{
  /* <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#00a0e3]">SEW</span> <span className="text-[#252525]">GEAR</span>{" "}
            <span className="text-[#00a0e3]">MOTORS</span>
          </h1>
          <p className="text-[#252525] text-lg md:text-xl max-w-lg">
            We have it all - from the gear-motors to the electronics and software that drives them. Think dynamic,
            precise, large & powerful.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/carousel/car-1.png"
              alt="SEW Gear Motors"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section> */
}
export default HeroCarousel;
