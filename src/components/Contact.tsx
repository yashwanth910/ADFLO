import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Using Lovable's built-in form handler
      const response = await fetch("https://api.lovable.app/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Large purple palm-leaf silhouette - centered behind contact card */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.06] blur-[20px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(262, 100%, 71%) 0%, transparent 70%)",
        }}
      />

      {/* Geometric shapes intersecting contact card */}
      <div className="geometric-shape top-32 left-[8%] w-80 h-80 rounded-full bg-accent-purple opacity-[0.04] blur-3xl" />
      <div className="geometric-shape bottom-20 right-[10%] w-72 h-72 rounded-3xl bg-accent-purple opacity-[0.05] blur-2xl rotate-12" />
      <div className="geometric-shape top-1/4 right-[15%] w-56 h-56 rounded-2xl bg-accent-purple opacity-[0.03] blur-xl" />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your visual story? Get in touch and let's bring your vision to life.
          </p>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto glass-card p-10 hover:shadow-2xl hover:shadow-muted/10 transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="glass-card border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="glass-card border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                required
                className="glass-card border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full glass-card hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
