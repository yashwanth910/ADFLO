import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
  <Helmet>
    <title>About ADFLO | Our Story</title>
    <meta
      name="description"
      content="Learn the story behind ADFLO, a visual storytelling studio focused on cinematic video and meaningful design."
    />
    <link rel="canonical" href="https://adflo.in/about" />
  </Helmet>

  {/* existing About page JSX */}


    <main className="relative py-32 px-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="
          absolute top-8 left-6
          flex items-center gap-2
          text-sm text-muted-foreground
          hover:text-foreground
          transition-colors
        "
        aria-label="Back to portfolio"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          About ADFLO
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
          <p>
            ADFLO was built on a simple idea: good visuals don’t just look good,
            they communicate. In a world overflowing with content, clarity,
            emotion, and intention are what make stories stick.
          </p>

          <p>
            We focus on crafting visual narratives that feel authentic. Whether
            it’s a brand story, a short-form reel, or a documentary-style piece,
            our work is driven by purpose, not trends.
          </p>

          <p>
            Every project begins with listening. Understanding the story behind
            the brand, the people involved, and the message that needs to be
            conveyed. From there, we design visuals that feel natural, human,
            and memorable.
          </p>

          <p>
            ADFLO operates at the intersection of creativity and restraint. We
            believe that strong storytelling doesn’t need excess. It needs
            focus, honesty, and a clear point of view.
          </p>

          <p>
            If you’re looking for visuals that do more than fill space, you’re
            in the right place.
          </p>
        </div>
      </div>
    </main>
    </>
  );
};

export default About;
