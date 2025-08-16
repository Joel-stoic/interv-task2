import HeroSection from "@/components/HeroSection";
import Meet3DIMLI from "@/components/Meet3DIMLI";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Meet3DIMLI/>
      <NewArrival/>
    </>
  );
}

