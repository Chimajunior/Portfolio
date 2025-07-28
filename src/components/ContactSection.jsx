import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: "chimajunior14@gmail.com",
      href: "mailto:chimajunior14@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: "Phone",
      value: "+44 7502409872",
      href: "tel:+447502409872",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      label: "Location",
      value: "United Kingdom",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together or have something to discuss? Feel free
          to reach out and I’ll get back to you soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {contactItems.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium">{item.label}</h4>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="pt-8">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/chima-mbanefo-3a6b50245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Chimajunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card border border-primary/30 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] card-hover p-8 ">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              action="https://formspree.io/f/xpwlrjqn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi, I'd like to talk about..."
                />
              </div>

              {/* Optional: redirect after submit */}
              {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> */}

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
