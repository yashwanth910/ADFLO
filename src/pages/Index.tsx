import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import WorkGridVideo from "@/components/WorkGridVideo";
import WorkGridDesign from "@/components/WorkGridDesign";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import PricingNew from "@/components/PricingNew";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickStats />
      <WorkGridVideo id="video-work" title="Video Work" />
      <WorkGridDesign id="design-work" title="Design Work" />
      <AboutUs />
      <Services />
      <PricingNew />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
