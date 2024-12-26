import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/app/constants/constants";

function PackageCarousel() {
  const PackageCarouselHeadingStyles = {
    color: "rgb(5, 10, 78)",
    display: "block",
    fontFamily: "Nunito, sans-serif",
    fontSize: "22px",
    fontWeight: 600,
    height: "28px",
    lineHeight: "28px",
    textSizeAdjust: "100%",
    unicodeBidi: "isolate",
    visibility: "visible",
  };

  const RenderCarousel = () => (
    <Carousel>
      <CarouselContent className="flex space-x-4">
        {packages?.map((pkg) => (
          <CarouselItem
            key={pkg?.packageId}
            className="flex-shrink-0 w-full max-w-md"
          >
            <PackageCard {...pkg} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
        &#8592;
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
        &#8594;
      </CarouselNext>
    </Carousel>
  );

  return (
    <div style={{ background: "rgb(232, 242, 254)" }} className="p-20">
      <p style={PackageCarouselHeadingStyles as any} className="mb-10">
        Featured Health Check-up Packages
      </p>
      <RenderCarousel />
    </div>
  );
}

export default PackageCarousel;
