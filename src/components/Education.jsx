export default function Education({ id }) {
  const educationList = [
    {
      degree: "Bachelor of Science Honours in Information Technology",
      institution: "SLIIT",
      year: "2023 - Present",
      details: "Currently pursuing an undergraduate degree with focus on Web Development, Data Structures, and Software Design.",
    },
    {
      degree: "Advanced Level",
      institution: "G/Prajapthi Girls' College",
      year: "2021 - 2023",
      details: "Completed A/Ls in Science Stream with Mathematics as main subject.",
    },
    // Add more education items if needed
  ];

  return (
    <section id={id} className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {educationList.map((edu) => (
          <div
            key={edu.degree}
            className="w-80 bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-gray-600 mb-1">{edu.institution}</p>
            <p className="text-gray-500 mb-3 text-sm">{edu.year}</p>
            <p className="text-gray-700 text-sm">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
