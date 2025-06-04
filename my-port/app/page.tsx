'use client'

import Sidebar from '@/app/components/Siderbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Resume from '@/app/components/Resume'
import Portfolio from '@/app/components/Portfolio'
import Services from '@/app/components/Services'
import Contact from '@/app/components/Contact'
import TechEvent from './components/TechEvent'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <TechEvent />
        <Contact />
      </div>
    </main>
  )
}


