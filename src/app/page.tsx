import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Capabilities from "@/components/Capabilities";
import SelectedWork from "@/components/SelectedWork";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Manifesto />
      <Capabilities />
      <SelectedWork />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
