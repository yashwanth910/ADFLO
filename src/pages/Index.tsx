import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import WorkGrid from "@/components/WorkGrid";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showreel />
      <WorkGrid id="video-work" title="Video Work" type="video" />
      <WorkGrid id="design-work" title="Design Work" type="design" />
      <AboutUs />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
