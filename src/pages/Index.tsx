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
        <title>ADFLO | Creative Agency</title>
        <meta
          name="description"
          content="ADFLO is a creative studio specializing in cinematic video editing, website development, brand films, and visual storytelling."
        />
       <meta name="robots" content="index, follow" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://www.adflo.in/" />

  <meta property="og:title" content="ADFLO — Visual Storytelling Studio" />
  <meta
    property="og:description"
    content="Crafting cinematic videos, brand films, and digital experiences that captivate and convert."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.adflo.in/" />
  <meta property="og:image" content="https://www.adflo.in/og-image.png" />

  <meta name="twitter:title" content="ADFLO | Creative Agency" />
  <meta name="twitter:description" content="Cinematic video & visual storytelling for brands and creators." />
  <meta name="twitter:image" content="https://www.adflo.in/og-image.png" />
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
