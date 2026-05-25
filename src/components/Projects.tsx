const projects = [
  {
    title: "EpiWarn",
    category: "AI • Blockchain • Healthcare",
    description:
      "An AI-powered disease outbreak prediction platform leveraging WHO datasets and blockchain-backed transparency for secure epidemic monitoring.",
    impact:
      "Combines Machine Learning, Hyperledger, and analytics to support early outbreak detection.",
  },
  {
    title: "TalkTone",
    category: "AI • Translation • Product",
    description:
      "A multilingual video translation platform designed to make content accessible across different languages.",
    impact:
      "Focused on usability, localization, and seamless communication.",
  },
  {
    title: "StockCheck",
    category: "Finance • Analytics",
    description:
      "A stock analysis platform helping users evaluate companies using charts, metrics, and investment insights.",
    impact:
      "Transforms financial data into easy-to-understand visual information.",
  },
  {
    title: "Smart Irrigation System",
    category: "Agritech • Sustainability",
    description:
      "Analyzes land conditions and recommends suitable irrigation methods for farmers.",
    impact:
      "Promotes efficient water usage and improved agricultural planning.",
  },
  {
    title: "Newsletter Automation",
    category: "Automation • Digital Transformation",
    description:
      "Built during my internship to automate article collection, classification, and distribution workflows.",
    impact:
      "Reduced manual effort and streamlined internal communication.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <h2 className="text-5xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Mock Project Preview */}
            <div className="h-52 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-purple-500/20 flex items-center justify-center">
              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <p className="text-sky-400 font-medium">
                {project.category}
              </p>

              <p className="mt-4 text-gray-300 leading-7">
                {project.description}
              </p>

              <p className="mt-4 text-gray-500 text-sm">
                {project.impact}
              </p>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}