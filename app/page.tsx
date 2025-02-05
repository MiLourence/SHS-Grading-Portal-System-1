import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GradingOffers from "@/components/GradingOffers";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GradingOffers/>
      <AboutUs/>
    </div>
  );
}
