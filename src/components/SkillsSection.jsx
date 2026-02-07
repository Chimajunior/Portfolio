import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", icon: "devicon-html5-plain colored", category: "frontend" },
  { name: "CSS3", icon: "devicon-css3-plain colored", category: "frontend" },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    category: "frontend",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: "devicon-tailwindcss-plain colored",
    category: "frontend",
  },
  {
    name: "Remix",
    icon: "devicon-remix-original",
    category: "frontend",
    style: { color: "#ffffff" }, 
  },
  // Backend
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    category: "backend",
  },
  {
    name: "Express",
    icon: "devicon-express-original colored",
    category: "backend",
  },
  { name: "MySQL", icon: "devicon-mysql-plain colored", category: "backend" },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
    category: "backend",
    style: { color: "#ffffff" }, // for inline white color
  },

  // Tools
  { name: "Git", icon: "devicon-git-plain colored", category: "tools" },
  { name: "GitHub", icon: "devicon-github-original", category: "tools" },
  // { name: "Figma", icon: "devicon-figma-plain colored", category: "tools" },
  { name: "VS Code", icon: "devicon-vscode-plain colored", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill, index, self) =>
    activeCategory === "all"
      ? index === self.findIndex((s) => s.name === skill.name)
      : skill.category === activeCategory
  );
  

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-md flex flex-col items-center justify-center group hover:shadow-lg transition"
            >
              <i
                className={`${skill.icon} text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse`}
              ></i>
              <span className="text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
