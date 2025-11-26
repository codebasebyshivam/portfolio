import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='text-start mb-16 '>
        <h1 class="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p class="text-lg text-start text-gray-600 dark:text-gray-300 max-w-2xl">Have a question or want to work together? Feel free to reach out through any of these channels.</p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
        {/* left section */}
        <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg'>
          <div className='space-y-6'>
            <div className='flex item-start space-x-4'>
              <div className='bg-linear-to-br from-blue-500 to-cyan-500 p-3 rounded-xl text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div><h3 className="font-semibold text-lg text-gray-900 dark:text-white">Email</h3><a href="mailto:codebasebyshivam@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">codebasebyshivam@gmail.com</a></div>
            </div>
            <div className='flex item-start space-x-4'>
              <div className='bg-linear-to-br from-green-400 to-emerald-500 p-3 rounded-xl text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div><h3 class="font-semibold text-lg text-gray-900 dark:text-white">Phone/WhatsApp</h3><a href="tel:+91727871153" class="text-gray-700 dark:text-gray-300 hover:underline">+91 7217871153</a></div>
            </div>
            <div className='flex item-start space-x-4'>
              <div class="bg-linear-to-br from-purple-500 to-violet-500 p-3 rounded-xl text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
              <div><h3 class="font-semibold text-lg text-gray-900 dark:text-white">Location</h3><p class="text-gray-700 dark:text-gray-300">New Delhi, India</p></div>
            </div>
          </div>
          <div className='mt-10'>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h3>
          </div>
          <div className='flex justify-center space-x-4'>
            <div class="flex gap-4">
              <a target="_blank" class="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors" aria-label="LinkedIn" href="https://www.linkedin.com/in/codebasebyshivam/">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a target="_blank" class="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors" aria-label="GitHub" href="https://github.com/codebasebyshivam">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className='bg-linear-to-br from-cyan-600 to-blue-600 rounded-xl text-white p-8'>
          <div className='text-white flex flex-col h-full justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-12 w-12 mb-6"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            <h2 class="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p class="mb-8 text-cyan-100 max-w-md">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
            <a href="mailto:codebasebyshivam@gmail.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>Send me an email</a>
          </div>
        </div>
      </div>
    </>
  )
}
