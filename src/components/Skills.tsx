const skills = [
  "React",
  "TypeScript",
  "Java",
  "Python",
  "MongoDB",
  "Node.js",
  "Figma",
  "Power BI",
  "Git",
  "UI/UX",
  "Machine Learning",
  "Blockchain",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-5xl font-bold mb-12">
        Skills & Tools
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}