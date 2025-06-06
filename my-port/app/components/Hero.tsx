'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/lay.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-start px-6 sm:px-8 md:px-16">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            <TypeAnimation
              sequence={[ 'Hello 🤚🏻 ', 4000 , "  I'm Destiny Orumade " , 4000, " A Frontend Developer 👨‍💻", 4000,]}
              wrapper="span"
              speed={40}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    </section>
  )
}
