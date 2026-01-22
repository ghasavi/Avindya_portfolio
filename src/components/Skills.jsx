export default function Skills({ id }) {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "Java", "JavaScript" , "PHP" ,"Python" ,"C#" ,"C++" ,"Kotlin" ,],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS" , "Vite"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js" , "Java servlets"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Postman" , "Eclipse" ,"Android Studio" ],
    },
  ];

  return (
    <section id={id} className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="w-60 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
