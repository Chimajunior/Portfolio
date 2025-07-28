import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer 
            </h3>

            <p className="text-muted-foreground">
              I’m a software developer focused on crafting web applications that combine clean design with seamless performance.
            </p>
            <p className="text-muted-foreground">
              With 4+ years of experience in this field, I’m committed to building scalable and maintainable software solutions. I graduated with first-class honors in applied computing.
            </p>
            <p className="text-muted-foreground">
            I’m good at solving problems with clear and efficient code, whether it’s on the user interface or the server side.            </p>
            <p className="text-muted-foreground">
            I believe in teamwork, always improving my skills, and making a positive impact with my work.            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button" rel="noopener noreferrer" >
                Get In Touch
              </a>

              <a
                href="/your-cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary transition-colors duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & APIs</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing RESTful APIs and server-side logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration & Growth</h4>
                  <p className="text-muted-foreground">
                    Working closely with teams and clients to deliver high-impact solutions and continuously improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
