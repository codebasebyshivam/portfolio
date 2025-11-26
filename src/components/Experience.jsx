"use client";


const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Kats Infotech Pvt. Ltd.",
    date: "May 2024 - Present",
    period: "1 yr 5 mon",
    description: [
      "Collaborated on building and maintaining web applications using React.js and Node.js.",
      "Implemented responsive UI components and optimized backend services for performance.",
      "Worked closely with cross-functional teams to deliver high-quality software solutions."
    ],
    url: '/kats-infotech-logo.png'
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern",
    company: "Novitech Pvt. Ltd.",
    date: "April 2024 - May 2024",
    period: "1 mon",
    description: [
      "Collaborated on building and maintaining web applications using React.js and Node.js.",
      "Implemented responsive UI components and optimized backend services for performance.",
      "Worked closely with cross-functional teams to deliver high-quality software solutions."
    ],
    url: '/novitech-logo-dark.png'
  },

];

export default function ProfessionalExperience() {

  return (
    <section className="py-5 md:py-10">
      <div className="">
        <h2 class="text-3xl font-bold mb-4">Work Experience</h2>
        <p class="text-zinc-400 mb-10">Moved across roles to find the best cultural and professional fit.</p>
        <div className="flex flex-col gap-6">
          {experiences.map((company_info, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <img src={company_info.url} alt="Company Logo" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 class="text-xl font-bold">{company_info.title} <span class="text-[#F5D547]">{company_info.company}</span></h3>
                    <div class="text-zinc-400 text-sm">{company_info.date} • {company_info.period}</div>
                  </div>
                  <div className="space-y-1">
                    {company_info.description.map((point, index) => (
                      <p key={index} class="text-zinc-400 text-sm">• {point}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
{/* Left Side Content */ }

{/* <div className="relative"> */ }

{/* <div className="absolute left-4 top-0 w-1 h-full bg-gray-700 rounded-full"></div> */ }

{/* <div className="space-y-14">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex items-start gap-6 relative"
        >
          
          <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">
            {exp.id}
          </div>

          
          <div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-300 font-medium">
              {exp.company} | <span>{exp.date}</span>
            </p>
            <p className="text-gray-400 mt-2 max-w-lg">
              {exp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div> */}
{/* </div> */ }


{/* <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-[#FFD700] mb-10"
  >
    Professional Experience
  </motion.h2> */}

{/* Right Side Illustration */ }
{/* <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex-1 flex justify-center"
    >
      <img
        src="/experience-setup.png"
        alt="Professional Experience Illustration"
        className="max-w-md rounded-2xl shadow-lg"
      />
    </motion.div> */}