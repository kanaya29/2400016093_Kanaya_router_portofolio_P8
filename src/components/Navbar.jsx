import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          My Portofolio
        </h1>

        <nav className="space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}