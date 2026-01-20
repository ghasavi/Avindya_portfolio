export default function Projects({ id }) {
  const projects = [
    { name: "Anime Recommendation Web App", desc: "Find anime based on your mood." },
    { name: "Hand-Drawn Art E-Commerce", desc: "Buy & sell hand-drawn art online." },
  ];

  return (
    <section id={id} className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.name} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{proj.name}</h3>
            <p className="text-gray-500 mt-2">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
