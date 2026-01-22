export default function Projects({ id }) {
  const projects = [
    {
      name: "Anime Recommendation Web App",
      desc: "Find anime based on your mood.",
      img: "/projects/anime.png", // put your image in public/projects/
    },
    {
      name: "Hand-Drawn Art E-Commerce",
      desc: "Buy & sell hand-drawn art online.",
      img: "/projects/art.png",
    },
    {
      name: "Personal Portfolio Website",
      desc: "Showcase of my projects and skills.",
      img: "/projects/portfolio.png",
    },
    {
      name: "Task Management Tool",
      desc: "Organize and track your tasks efficiently.",
      img: "/projects/tasks.png",
    },
    {
      name: "Blog Platform",
      desc: "Create and share your thoughts with the world.",
      img: "/projects/blog.png",
    },
  ];

  return (
    <section id={id} className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="border rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="font-semibold text-xl">{proj.name}</h3>
              <p className="text-gray-500 mt-2">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
