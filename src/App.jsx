import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className='flex min-h-screen flex-col'>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 space-y-24">
          <div className='max-w-4xl mx-auto'>
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />

      {/* whatsapp and email section */}
      <div className='fixed bottom-8 right-8 z-40 flex flex-col gap-4'>
        <a href="mailto:work@vipuls.in" aria-label="Email Me" className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r text-white transition hover:scale-105 focus:outline-none focus:ring-2 ring-blue-500 from-blue-600 to-cyan-500" title="Email Me">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail w-6 h-6">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
            </path>
          </svg>
        </a>

        <a href="https://wa.me/917217871153?text=Hi%20Shivam%2C%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20project%20opportunity.%20Are%20you%20available%20for%20a%20quick%20chat%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Me" className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r text-white transition hover:scale-105 focus:outline-none focus:ring-2 ring-blue-500 from-green-500 to-green-600" title="WhatsApp Me">
          <img alt="WhatsApp" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="object-contain" src="/WhatsApp.svg.png" style={{ color: 'transparent' }} />
        </a>
      </div>
    </>
  )
}

export default App
