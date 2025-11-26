import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10  items-start">

        {/* left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-8"
        >
          <h1 className="text-4xl  font-bold  mb-2">
            Hi, I'm a
            <span className="text-[#F5D547] pl-2">Full-Stack Developer</span>
            <span></span>
            <span class=" text-3xl">  React, Node.js</span>
          </h1>
          <p className="text-zinc-400 mb-6">
            I'm Shivam Sharma, a Full-Stack Developer with 2.5+ years of experience, specializing in scalable, high-performance web applications, and freelancing to help businesses achieve digital growth. I specialize in React.js and Next.js on the frontend, and Node.js, Express.js, and Nest.js on the backend — leveraging technologies like Prisma, PostgreSQL, Swagger, and TypeScript to deliver robust, end-to-end solutions.
            <br />
            <br />
            <span class="text-sm">
              Driven by passion to build Cutting-Edge Solutions that are fast, reliable, and impactful — always pushing boundaries to deliver real value.
            </span>
          </p>
          <div className="flex items-center gap-2 mb-6">
            <div class="text-sm flex items-center gap-2">Delivering<span class="text-yellow-500 font-bold"> High-Quality </span> Web App Solutions.</div>
          </div>
          <button onClick={() => window.open("https://www.linkedin.com/in/codebasebyshivam", "_blank")} class=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-[#f8cf19] text-black hover:bg-yellow-400">
            <span class="mr-2">Visit LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </motion.div>


        {/* right content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-4 flex justify-center"
        >
          <div className="overflow-hidden">
            <img
              alt="Shivam Sharma"
              src="/profile-pic.jpeg"
              width={500}
              height={500}
              className="object-cover md:rounded-full md:border-4 md:border-yellow-300/90"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}




{/* <div className="flex flex-wrap justify-center gap-4">
  <a
    href="#contact"
    className="bg-[#F5D547] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#eecf3b] transition"
  >
    Get in Touch
  </a>
  <a
    href="https://www.linkedin.com/in/your-linkedin"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-[#F5D547] text-[#F5D547] px-6 py-3 rounded-full font-semibold hover:bg-[#F5D547] hover:text-black transition"
  >
    View LinkedIn
  </a>
</div> */}

{/* Background Image */ }
{/* <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/hero-setup.png')",
        }}
      ></div> */}

{/* Dark Overlay */ }
{/* <div className="absolute inset-0 bg-black/80 z-10"></div> */ }