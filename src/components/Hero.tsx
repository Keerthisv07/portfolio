export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-5xl px-6">

        <p className="text-sky-400 tracking-widest uppercase text-sm mb-6">
          Software Engineer • Product Builder • Designer
        </p>

        <h1 className="text-7xl md:text-9xl font-black leading-none">
          S V
          <br />
          Keerthi
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
          Transforming ideas into impactful digital products through
software engineering, AI, product thinking, and user-centered design.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 transition">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-700 hover:border-sky-500 transition">
            Download Resume
          </button>
        </div>

        <div className="mt-16 text-gray-500">
          Bangalore, India • Computer Science & Design • Class of 2026
        </div>

      </div>
    </section>
  );
}