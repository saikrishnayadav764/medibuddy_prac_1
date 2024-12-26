import Image from "next/image";
import PackageCarousel from "@/components/PackageCarousel";
import LabPackageList from "@/components/LabPackageList";

export default function Home() {
  return (
    <div style={{width:"100%"}}>
      <PackageCarousel/>
      <LabPackageList/>
    </div>
  );
}
