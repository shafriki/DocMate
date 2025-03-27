import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";
import About from "@/components/About";
import HospitalOverview from "@/components/HospitalOverview"
import Services from "@/components/Services";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
      <About/>
      
      
      <Appointment/>
      <Services/>
      <HospitalOverview></HospitalOverview>
    </div>
  );
}