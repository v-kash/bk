// page.jsx — Drop this in your Next.js app/page.jsx
// or import individual components separately

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1"
import BKFruitsAbout from "@/components/About";
import AboutSection from "@/components/About2";
import ProductsSection from "@/components/product";
import WhyChooseUs from "@/components/Whyus";

export default function Page() {
  return (
    <main>
      <Navbar />
      {/* <Hero1 /> */}
            <Hero />
            {/* <BKFruitsAbout /> */}
            <AboutSection />
            <ProductsSection />
            <WhyChooseUs />

    </main>
  );
}