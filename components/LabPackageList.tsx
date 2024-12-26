import React from "react";
import { LabPackageCard } from "@/components/LabPackageCard";
import { labPackages } from "@/app/constants/constants";

const LabPackageList = () => {
  const LabPackageCarouselStyles = {
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
  }

  return (
    <div className="space-y-4 p-20">
    <p style={LabPackageCarouselStyles as any}>Book Lab Tests</p>
      {labPackages?.map((pkg) => (
        <LabPackageCard
          key={pkg?.packageId}
          packageDisplayName={pkg?.packageDisplayName}
          reportsTatText={pkg?.reportsTatText}
          isHomeSampleAvailable={pkg?.isHomeSampleAvailable}
          isCenterVisitPackage={pkg?.isCenterVisitPackage}
          priceRange={pkg?.priceRange}
          price={pkg?.price}
          discount={pkg?.discount}
          isAvailable={pkg?.isAvailable}
        />
      ))}
    </div>
  );
};

export default LabPackageList;
