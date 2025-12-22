import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import SkillBoxView from '../components/SkillBoxView';
import SkillListView from '../components/SkillListView';



const skillsData = [
  {
    heading: 'Frontend Development',
    skills: [
      {
        title: 'React.js',
        percentage: 90
      }, {
        title: 'Tailwind Css',
        percentage: 70
      }
    ]
  },
  {
    heading: 'Backend Development',
    skills: [
      {
        title: 'React.js',
        percentage: 90
      }, {
        title: 'Tailwind Css',
        percentage: 70
      }
    ]
  },
  {
    heading: 'Deployment Tools',
    skills: [
      {
        title: 'React.js',
        percentage: 90
      }, {
        title: 'Tailwind Css',
        percentage: 70
      }
    ]
  },
  {
    heading: 'Programming Languages',
    skills: [
      {
        title: 'React.js',
        percentage: 90
      }, {
        title: 'Tailwind Css',
        percentage: 70
      }
    ]
  }
];



const technologies = [
  'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'Docker', 'AWS', 'Firebase'
]


export default function Skills() {
  const [view, setView] = useState("card");
  return (
    <>

      {/* heading */}
      <div className='mb-12 text-start'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-4xl font-bold'>My Skills & Expertise</h1>
          <div className='flex items-center gap-2'>
            <button onClick={() => setView("card")} type="button" aria-pressed="true"  className={`cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 gap-2 bg-transparent min-w-10 p-2 h-10 w-10" `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid h-5 w-5"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
            </button>
            <button onClick={() => setView("list-view")} type="button" aria-pressed="false"  className={`cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent  [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 gap-2 bg-transparent min-w-10 p-2 h-10 w-10 ${view === 'list-view' ? 'active:#27272a' : '' }`} aria-label="Compact view">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-list h-5 w-5"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><path d="M14 4h7"></path><path d="M14 9h7"></path><path d="M14 15h7"></path><path d="M14 20h7"></path></svg>
            </button>
          </div>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl">I've spent years honing my skills across various technologies and domains. Here's a detailed overview of my technical expertise.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* skills boxes */}

        <AnimatePresence mode="wait">
          {view === "card" && skillsData.map((skillgroup, index) => {
                return (
                  <SkillBoxView key={index} skillgroup={skillgroup} />
                )
              })
          }

          {view === "list-view" && (
              <SkillListView />
          )}
        </AnimatePresence>

      </div>

      {/* tools and technologies */}
      <div className='mt-16 text-center'>
        <h2 className="text-2xl font-bold mb-6">Tools &amp; Technologies</h2>
        <div className='opacity-100 transform-none'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {technologies.map((technology, index) => (
              <div key={index} style={{ opacity: 1, transform: "none" }}>
                <div className="inline-flex items-center font-semibold text-white bg-zinc-900/70 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-800 transition text-sm">
                  {technology}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
