import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured and maintainable code following best development practices.",
  },
  {
    icon: Rocket,
    title: "Web Development",
    description:
      "Building modern web applications using Laravel, React, and modern web technologies.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working with teams and collaborating on projects using Git and GitHub.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always learning new technologies and improving my development skills.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate about building
              <span className="font-serif italic font-normal text-white">
                {" "}
                modern web applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Junior Full-Stack Web Developer currently studying at
                YouCode (Simplon School). I'm passionate about building modern
                web applications and continuously improving my development
                skills through real projects.
              </p>

              <p>
                I mainly work with technologies such as Laravel, PHP, MySQL,
                React, JavaScript, and Tailwind CSS to create responsive and
                efficient web applications.
              </p>

              <p>
                During my training, I have worked on several practical projects
                that helped me understand real-world development workflows,
                including API development, database design, and full-stack
                application architecture.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to keep learning, improve my technical skills, and
                build useful web applications that solve real-world problems."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
