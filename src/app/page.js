import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";
import About from "@/components/About";
import HospitalOverview from "@/components/HospitalOverview"

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
      <About/>
      <HospitalOverview></HospitalOverview>
      
    </div>
  );
}