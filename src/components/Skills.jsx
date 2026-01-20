export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white rounded-full shadow text-gray-700 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
