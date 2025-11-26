import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 px-4">
      <div className="container mx-auto flex justify-start pl-0 pr-0 max-w-4xl">
        <div className="max-w-xl w-full">
          <nav className="flex justify-between items-center w-full shadow shadow-yellow-400 rounded-full bg-zinc-800/90 px-3 py-2 backdrop-blur-md relative">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-zinc-700">
                <span className="text-xs">SS</span>
              </span>
              <span>Shivam Sharma</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/about" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">About</Link>
              <Link to="/skills" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Skills</Link>
              <Link to="/projects" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Projects</Link>
              <Link to="/contact" className="text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Contact</Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden px-3 py-1.5 text-zinc-400"
            >
              {open ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Menu icon
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            <div
              className={`w-full md:hidden absolute top-14 mt-4 md:mt-0 right-0 md:w-44 bg-zinc-800/95 rounded-xl shadow-lg overflow-hidden transition-all duration-300 origin-top-right 
              ${open ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"}`}
            >
              <div className="flex flex-col py-2">
                <Link onClick={() => setOpen(false)} to="/about" className="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700/50 transition">About</Link>
                <Link onClick={() => setOpen(false)} to="/skills" className="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700/50 transition">Skills</Link>
                <Link onClick={() => setOpen(false)} to="/projects" className="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700/50 transition">Projects</Link>
                <Link onClick={() => setOpen(false)} to="/contact" className="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700/50 transition">Contact</Link>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
}
