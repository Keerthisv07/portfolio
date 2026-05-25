export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-32 text-center px-6"
    >
      <h2 className="text-6xl font-bold">
        Let's Build Something Great
      </h2>

      <p className="text-gray-400 mt-8 text-lg">
        Open to software engineering, product management,
        AI, and technology opportunities.
      </p>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-lg">

        <a
          href="https://www.linkedin.com/in/s-v-keerthi-270822249/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Keerthisv07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          GitHub
        </a>

        <a
          href="mailto:keerthisvwork@gmail.com"
          className="hover:text-sky-400 transition"
        >
          keerthisvwork@gmail.com
        </a>

      </div>
    </section>
  );
}