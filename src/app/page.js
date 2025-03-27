import Image from "next/image";
import BannerSection from "./components/BannerSection";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <About/>
    </div>
  );
}
