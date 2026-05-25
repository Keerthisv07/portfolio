const journey = [
  {
    year: "2022",
    title: "Started Programming",
    desc: "Built foundations in Java, Python, and problem solving."
  },
  {
    year: "2023",
    title: "Discovered UI/UX",
    desc: "Explored Figma and user-centered design principles."
  },
  {
    year: "2024",
    title: "Built Real Products",
    desc: "Created Smart Irrigation, StockCheck, and TalkTone."
  },
  {
    year: "2025",
    title: "Research & Innovation",
    desc: "Developed EpiWarn combining AI and Blockchain."
  },
  {
    year: "2025",
    title: "Industry Experience",
    desc: "Worked at L&T Realty in Digital Transformation."
  }
];

export default function Journey() {
  return (
     <section id="journey" className="max-w-6xl mx-auto py-32 px-6">
      <h2 className="text-5xl font-bold mb-20">
        My Journey
      </h2>

      <div className="space-y-12">
        {journey.map((item) => (
          <div
            key={item.year + item.title}
            className="border-l-2 border-sky-500 pl-8"
          >
            <p className="text-sky-400 mb-2">
              {item.year}
            </p>

            <h3 className="text-3xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}