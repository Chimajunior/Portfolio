import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Database Platform",
    description:
      "A Beautiful database platform with user ratings, reviews and personalised reccomendations",
    image: "/projects/cmdb2.png",
    tags: ["Remix", "React", "Tailwind", "Express", "MySQL"],
    demoUrl: "https://cmbd-movies.onrender.com/",
    githubUrl: "https://github.com/Chimajunior/CMBD_FULLSTACK",
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
    "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "/projects/chimtech2.png",
    tags: ["React", "Tailwind"],
    demoUrl: "",
    githubUrl: "https://github.com/Chimajunior/Portfolio",
  },
];

const tagIconMap = {
  Remix: "devicon-remix-original",
  React: "devicon-react-original colored",
  Tailwind: "devicon-tailwindcss-plain colored",
  Express: "devicon-express-original",
  MySQL: "devicon-mysql-plain colored",
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Recent <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Here are some of my recent works to see my creativity in action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card border border-primary/30 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] card-hover"
            >
              <div className="aspect-[5/3] overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4 justify-center">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="p-2 text-xl border rounded-full bg-primary/10 flex items-center justify-center"
                      title={tag}
                    >
                      <i className={`${tagIconMap[tag]} text-1xl`} />
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {/* Left: Demo Link */}
                  <div>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Right: GitHub Link */}
                  <div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Chimajunior"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
