import React from "react";
import {
  Card,
} from "@/components/ui/card";

interface LabPackageCardProps {
  packageDisplayName: string;
  reportsTatText: string;
  isHomeSampleAvailable: boolean;
  isCenterVisitPackage: boolean;
  priceRange: number;
  price: number;
  discount: number;
  isAvailable: boolean;
}

export const LabPackageCard = ({
  packageDisplayName,
  reportsTatText,
  isHomeSampleAvailable,
  isCenterVisitPackage,
  priceRange,
  price,
  discount,
  isAvailable,
}: LabPackageCardProps) => {
  const PackageDisplayNameStyles = {
    color: "rgb(5, 10, 78)",
    fontFamily: "Nunito",
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "5px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const reportsTatTextStyles = {
    color: "rgb(51, 51, 51)",
    fontFamily: "Nunito, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    paddingLeft: "5px",
    marginBottom: "3px",
  };

  const AvailableStyles = {
    color: "rgb(5, 10, 78)",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontSize: "13px",
    fontWeight: 549,
    marginRight: "10px",
  };

  const HomeStyles = {
    color: "rgb(5, 10, 78)",
    fontFamily: "Nunito",
    fontSize: "13px",
  };

  const CenterStyles = {
    color: "rgb(5, 10, 78)",
    fontFamily: "Nunito",
    fontSize: "13px",
  };

  const priceRangeStyles = {
    color: "rgb(130, 130, 130)",
    fontFamily: "Nunito, sans-serif",
    fontSize: "12px",
    fontWeight: 300,
    textDecoration: "line-through",
  };

  const discountStyles = {
    backgroundColor: "rgb(246, 255, 223)",
    color: "rgb(121, 171, 40)",
    fontFamily: "Nunito, sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    marginLeft: "10px",
    paddingInlineEnd: "8px",
    paddingInlineStart: "8px",
  };

  const PriceStyles = {
    color: "rgb(5, 10, 78)",
    fontFamily: "Nunito, sans-serif",
    fontSize: "18px",
    fontWeight: 540,
  };

  const isAvailableStyles = {
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(23, 120, 242)",
    borderRadius: "10px",
    color: "rgb(23, 120, 242)",
    cursor: "pointer",
    fontFamily: "Nunito, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    height: "33.6px",
    textAlign: "center",
    padding: "5px 20px",
    textTransform: "none",
  };

  const labPackageCardStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
  };

  const RenderLabTestDetails = () => (
    <div>
      <p style={PackageDisplayNameStyles as any}>{packageDisplayName}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          alt=""
          className="mb-1"
          src="https://www.medibuddy.in/assets/icons/corpLabs/labs-reports-tat.svg"
        />
        <p style={reportsTatTextStyles as any}>{reportsTatText}</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={AvailableStyles as any}>Available at:</p>
        <div style={{ display: "flex", gap: "4px" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            <img
              width="10px"
              src="https://www.medibuddy.in/assets/icons/ahc/home-sample.svg"
              height="10"
              alt=""
            />
            {isHomeSampleAvailable && <p style={HomeStyles as any}>Home</p>}
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <img
              width="10px"
              src="https://www.medibuddy.in/assets/icons/ahc/lab-sample.svg"
              height="10"
              alt=""
            />
            {isCenterVisitPackage && <p style={CenterStyles as any}>Center</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const RenderLabPricingDetails = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div>
        <div style={{display:"flex", alignItems:"center"}}>
          <p style={priceRangeStyles as any}>₹ {priceRange}/-</p>
          <p style={discountStyles as any}>{discount}% OFF</p>
        </div>

        <p style={PriceStyles as any}>₹ {price}/-</p>
      </div>

      <button style={isAvailableStyles as any} disabled={!isAvailable}>
        {isAvailable ? "Add" : "Unavailable"}
      </button>
    </div>
  );

  return (
    <Card className="border rounded-lg shadow-md">
      <div style={labPackageCardStyles as any}>
        <RenderLabTestDetails />
        <RenderLabPricingDetails />
      </div>
    </Card>
  );
};
