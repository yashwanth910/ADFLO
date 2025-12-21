import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <>
  <Helmet>
    <title>Terms & Conditions | ADFLO</title>
    <meta
      name="description"
      content="Review the terms and conditions governing the use of the ADFLO website and services."
    />
    <link rel="canonical" href="https://adflo.in/terms-and-conditions" />
  </Helmet>

  {/* existing Terms JSX */}

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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Terms & Conditions
        </h1>

        <p className="text-muted-foreground mb-8">
          Last updated: March 2025
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Introduction
            </h2>
            <p>
              These Terms and Conditions govern your use of the ADFLO website.
              By accessing or using this site, you agree to be bound by these
              terms. If you do not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict
              their use and enjoyment of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, visuals, videos,
              graphics, and branding, is the property of ADFLO unless otherwise
              stated. Unauthorized use, reproduction, or distribution is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Limitation of Liability
            </h2>
            <p>
              ADFLO shall not be held liable for any direct, indirect, or
              incidental damages arising from the use or inability to use this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              External Links
            </h2>
            <p>
              This website may contain links to third-party websites. We are not
              responsible for the content or practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Modifications
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Any changes will be effective immediately upon posting on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Governing Law
            </h2>
            <p>
              These terms shall be governed and interpreted in accordance with
              the laws applicable in India, without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Contact
            </h2>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact us at{" "}
              <a
                href="mailto:contact@adflo.in"
                className="underline hover:text-foreground transition-colors"
              >
                contact@adflo.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
};

export default TermsAndConditions;
