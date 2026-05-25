export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4">

        <ul className="flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#journey">Journey</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}