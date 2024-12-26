import React from "react";
import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";

interface PackageCardProps {
  packageDisplayName: string;
  reportsTatText: string;
  testCount: number;
  testsSummary: string[];
  isRadiologyIncluded: boolean;
  consultationCount: number;
  fastingHoursText: string;
  priceRange: number;
  price: number;
  discount: number;
  isAvailable: boolean;
}
export function PackageCard({
  packageDisplayName,
  reportsTatText,
  testCount,
  testsSummary,
  isRadiologyIncluded,
  consultationCount,
  fastingHoursText,
  priceRange,
  price,
  discount,
  isAvailable,
}: PackageCardProps) {
  const RenderCardHeader = () => {
    return (
      <>
        <p className="text-[#050a4e] font-nunito text-xl font-semibold h-10 overflow-hidden text-ellipsis whitespace-nowrap leading-[23px]">
          {packageDisplayName}
        </p>
        <div className="flex items-center">
          <image
            alt=""
            src="https://www.medibuddy.in/assets/icons/corpLabs/labs-reports-tat.svg"
            className="mb-2"
          />
          <p className="text-gray-700 text-sm font-medium pl-1 h-6 overflow-hidden text-ellipsis mb-1">
            {reportsTatText}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="mb-2">
            <p className="text-[#050a4e] font-nunito text-sm font-semibold h-6 leading-[22px]">
              {testCount} Tests
            </p>
            <ul className="text-gray-500 text-xs font-light list-inside list-circle">
              {testsSummary.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <p className="text-[#050a4e] font-nunito text-sm font-semibold h-6 leading-[22px]">
              Includes
            </p>
            <ul className="list-none pl-0 text-gray-600 text-xs font-light">
              {isRadiologyIncluded && (
                <li className="flex items-center">
                  <span className="mr-2">🩻</span> Radiology
                </li>
              )}
              {consultationCount > 0 && (
                <li className="flex items-center">
                  <span className="mr-2">👨‍⚕️</span> {consultationCount}{" "}
                  Consultation(s)
                </li>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const RenderPricePortion = () => {
    return (
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm">
            <p className="text-gray-500 inline font-light text-xs line-through">
              ₹{priceRange}/-
            </p>
            <p className="bg-[#f6ffdf] text-[#79ab28] inline font-semibold text-xs ml-2 px-2">
              {discount}% OFF
            </p>
          </div>
          <p className="text-[#050a4e] inline font-nunito text-xl font-semibold leading-[23px]">
            ₹ {price}/-
            <span className="text-gray-400 text-sm font-light ml-2">
              Onwards
            </span>
          </p>
        </div>
        <button
          className={`bg-white border border-blue-500 rounded-lg px-5 py-1.5 text-blue-500 font-semibold text-sm ${
            isAvailable ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? "Add" : "Unavailable"}
        </button>
      </div>
    );
  };

  const RenderTestDetails = () => (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <p className="text-[#050a4e] font-nunito text-xs font-semibold h-8 leading-4">
          Available at:
        </p>
        <p className="text-[#050a4e] font-nunito text-xs h-8 leading-4">
          🏥 Center
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-[#050a4e] font-nunito text-xs font-semibold h-8 leading-4">
          Fasting:
        </p>
        <p className="text-[#050a4e] font-nunito text-xs h-8 leading-4">
          {fastingHoursText}
        </p>
      </div>
    </div>
  );
  
  return (
    <Card className="max-w-md border rounded-lg shadow-sm p-4">
      <RenderCardHeader />
      <RenderTestDetails />
      <RenderPricePortion />
    </Card>
  );
}
