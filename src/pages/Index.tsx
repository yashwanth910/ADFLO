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
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ADFLO | Cinematic Video & Design Studio</title>
        <meta
          name="description"
          content="ADFLO is a creative studio specializing in cinematic video editing, documentaries, brand films, and visual storytelling."
        />
        <meta
          name="keywords"
          content="video editing, cinematic video, brand films, documentary editing, adflo"
        />
        <link rel="canonical" href="https://adflo.in/" />
      </Helmet>

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
    </>
  );
};

export default Index;
