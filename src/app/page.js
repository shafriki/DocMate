import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";
import About from "@/components/About";
<<<<<<< HEAD
import HospitalOverview from "@/components/HospitalOverview"
=======
import Services from "@/components/Services";
import Appointment from "./components/Appointment";
>>>>>>> develop

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
      <About/>
<<<<<<< HEAD
      <HospitalOverview></HospitalOverview>
      
=======
      <Appointment/>
      <Services/>
>>>>>>> develop
    </div>
  );
}