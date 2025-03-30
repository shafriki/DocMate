import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";
import About from "@/components/About";
import HospitalOverview from "@/components/HospitalOverview"
import Services from "@/components/Services";
import Appointment from "./components/Appointment";
import SeeAll from "@/components/SeeAll";
import Review from "@/components/Review";
import Community from "@/components/Community";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
      <About/>
      <Appointment/>
      <Services/>
      <HospitalOverview></HospitalOverview>
      <Review />
      <Community />
      <SeeAll />
    </div>
  );
}