import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <>
  <Helmet>
    <title>Privacy Policy | ADFLO</title>
    <meta
      name="description"
      content="Read how ADFLO collects, uses, and protects your personal information."
    />
    <link rel="canonical" href="https://adflo.in/privacy-policy" />
  </Helmet>

  {/* existing Privacy Policy JSX */}


    <main className="relative py-32 px-6">
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
          Privacy Policy
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
              At ADFLO, we respect your privacy and are committed to protecting
              any personal information you share with us. This Privacy Policy
              explains how we collect, use, and safeguard your data when you
              interact with our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, and any details you voluntarily provide when contacting
              us. We do not collect sensitive personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              How We Use Your Information
            </h2>
            <p>
              The information we collect is used solely to respond to inquiries,
              provide services, and improve our offerings. We do not sell, rent,
              or trade your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Third-Party Services
            </h2>
            <p>
              We may use trusted third-party tools for analytics or performance
              monitoring. These services may collect anonymous usage data in
              accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, you may
              contact us at{" "}
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

export default PrivacyPolicy;
