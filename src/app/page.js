import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Updates from "./components/Updates";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Updates />
    </div>
  );
}
