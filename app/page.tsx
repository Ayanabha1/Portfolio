import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import About from "@/components/About";
import AvailableBadge from "@/components/AvailableBadge";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import NavbarSheet from "@/components/NavbarSheet";
import FooterBanner from "@/components/FooterBanner";

const poppins = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={cn(poppins.className, "relative")}>
      <Navbar />
      <NavbarSheet />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FooterBanner />
      <Footer />
      <AvailableBadge />
    </main>
  );
}
