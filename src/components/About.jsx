export default function About({ id }) {
  return (
    <section id={id} className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600">
        I’m Avi, an undergraduate Software Engineering student passionate about building modern web applications.  
        I love learning new technologies and creating projects that solve real problems.
      </p>
    </section>
  );
}
