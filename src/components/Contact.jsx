export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-600 mb-6">
        Want to work together? Reach out!
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:avi@example.com" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/avi/" target="_blank" className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
