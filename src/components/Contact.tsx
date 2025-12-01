import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import palmLeaf2 from "@/assets/palm-leaf-2.png";
import geometricShape1 from "@/assets/geometric-shape-1.png";
import geometricShape2 from "@/assets/geometric-shape-2.png";
import geometricShape3 from "@/assets/geometric-shape-3.png";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string
    };

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data
      });

      if (error) throw error;
      
      toast.success("Message received, we'll contact you soon");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Form error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Large purple palm-leaf silhouette - centered behind contact card */}
      <img 
        src={palmLeaf2} 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.06] blur-[20px] pointer-events-none" 
      />

      {/* Geometric shapes intersecting contact card */}
      <img 
        src={geometricShape1} 
        alt="" 
        className="geometric-shape top-32 left-[8%] w-80 h-80 opacity-[0.04] blur-3xl" 
      />
      <img 
        src={geometricShape2} 
        alt="" 
        className="geometric-shape bottom-20 right-[10%] w-72 h-72 opacity-[0.05] blur-2xl" 
        style={{ transform: "rotate(12deg)" }} 
      />
      <img 
        src={geometricShape3} 
        alt="" 
        className="geometric-shape top-1/4 right-[15%] w-56 h-56 opacity-[0.03] blur-xl" 
      />

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your visual story? Get in touch and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-2">
              <span>Email:</span>
              <a href="mailto:cypher.ark.yt@gmail.com" className="hover:text-foreground transition-colors">
                cypher.ark.yt@gmail.com
              </a>
            </span>
          </div>
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
              disabled={isSubmitting} 
              className="w-full glass-card hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 text-white"
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
