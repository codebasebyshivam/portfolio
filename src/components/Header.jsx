import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 px-4">
      <div className="container mx-auto flex  justify-start pl-0 pr-0 max-w-4xl">
        <div className='max-w-xl w-full'>
          {/* <div className='flex justify-start'> */}
          <nav className='flex justify-between items-center w-full  shadow shadow-yellow-400 rounded-full bg-zinc-800/90 px-3 py-2 backdrop-blur-md'>
            <a href='/' className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium">
              <span className='flex items-center justify-center h-6 w-6 rounded-full bg-zinc-700'>
                <span className='text-xs'>SS</span>
              </span>
              <span>Shivam Sharma</span>
            </a>
            <div className='hidden md:flex items-center space-x-1'>
              <Link to="/about" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">About</Link>
              <Link to="/skills" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Skills</Link>
              <Link to="/projects" className="mr-6 text-zinc-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Projects</Link>
              <Link to="/contact" className='text-zinc-400 text-sm hover:text-white px-3 py-1.5 transition-colors'>Contact</Link>
            </div>
          </nav>
        </div>
        {/* </div> */}
      </div>
    </header>
  )
}