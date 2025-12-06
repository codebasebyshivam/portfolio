import React from 'react'
import ProfessionalExperience from '../components/Experience'

export default function About() {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:sticky md:top-24  md:self-start md:shrink-0 h-auto w-full md:w-36'>
          <div className='w-40 h-40 md:mx-0'>
            <img src='/profile-pic.png' alt='shivam sharma' className='rounded-full w-full h-full object-cover border-2 border-primary ' />
          </div>
        </div>
        <div className='space-y-6 text-zinc-300 leading-relaxed'>
          <h1 class="text-4xl font-bold mb-8">Hey! I'm <span class="text-[#F5D547]">Shivam Sharma</span>, a <span class="text-[#F5D547]">Full-Stack Developer</span>.</h1>
          <p>I'm a passionate and performance-driven Full-Stack Developer with 3+ years of experience building scalable, secure, and modern web applications. I specialize in developing robust APIs, architecting complex systems, and crafting smooth frontend experiences across platforms.</p>
          <p>My stack includes:</p>
          <ul class="list-disc list-inside space-y-2"><li><strong>Frontend:</strong> React.js, Next.js, TypeScript, Tailwind CSS, ShadCN UI, Radix UI</li><li><strong>Backend:</strong> Node.js, Express.js, Nest.js, Prisma, REST APIs, Swagger</li><li><strong>Database:</strong> MongoDB</li><li><strong>Authentication:</strong> Clerk, Google OAuth, JWT</li><li><strong>State &amp; Data:</strong> Redux Toolkit, Redux Thunk, Tanstack Query (React Query), Axios</li><li><strong>Dev &amp; Testing:</strong> TypeScript, Jest, Postman, Swagger, Git, GitHub</li><li><strong>CI/CD &amp; Tools:</strong> Vercel, Firebase, Docker (basic), Google Analytics</li></ul>
       <p>I'm especially focused on clean architecture, reusable components, and delivering fast, responsive UIs combined with efficient backend APIs. I take pride in writing readable, maintainable code that scales well.</p>
      <p>Whether it's building full-stack MERN applications, optimizing performance in Next.js, or designing RESTful APIs using Nest.js and Prisma — I love solving real-world problems through code.</p>
      <p>Currently open to freelance and collaborative opportunities, and always eager to explore the latest in full-stack tech.</p>
       <ProfessionalExperience />
        </div>
      </div>
    </div>

  )
}
