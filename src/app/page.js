import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
      <About/>
      <Services/>
    </div>
  );
}