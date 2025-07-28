import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center scroll-px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 px-4">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in">
            Hi, I'm <span className="text-primary">Chima</span> Mbanefo
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 leading-relaxed">
          I’m a software developer focused on web development, dedicated to building interfaces that blend aesthetics with functionality.</p>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
