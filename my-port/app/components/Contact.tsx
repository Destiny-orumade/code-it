'use client'
import { TypeAnimation } from 'react-type-animation'
export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Feel free to reach out to me via social platforms or email: <a href="mailto:destinyorumade@gmail.com" className="text-sky-500">destinyorumade@gmail.com</a></p>
      <p className="mt-4">You can also connect with me on Whatsapp: <a href="https://wa.me/2349044224048" className="text-green-300">@Whatsapp</a></p>
      <p className="mt-4">Follow me on social media: <a href="https://www.instagram.com/smarterdelly?igsh=MXdhNW11Y3Vpbm9qaw%3D%3D&utm_source=qr" className="text-amber-300">@Instagram</a> </p>
      <p className="mt-4">Also Follow me on X(formerly twitter): <a href="https://x.com/dallysmart8968?s=21" className="text-blue-300"> @X(Twitter)</a> </p>
      <p className="mt-4">You can checkout my works and as well follow me on Github:  <a href="https://github.com/Destiny-orumade" className="text-red-300">@GitHub</a></p>

         <h2 className="mt-5 text-2xl font-bold text-center text-amber-50"> 
          <TypeAnimation
              sequence={['Thanks for Visiting my Portfolio👆 ', 3000, "I Await Your Feedback 🙏.... ", 3000, ]}
              wrapper="span"
              speed={40}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
         </h2>
    </section>
  )
} 
