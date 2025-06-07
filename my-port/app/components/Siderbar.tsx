import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 h-auto md:h-screen bg-[#0f172a] text-white p-4 flex md:flex-col flex-row md:items-center items-start justify-between md:justify-start">
      <div className="flex md:flex-col flex-row items-center md:items-center w-full">
        <img src="/onw.jpeg" alt="Destiny Orumade" className="w-20 h-14 md:w-24  md:h-24 rounded-full" />
        <h2 className="mt-0 md:mt-4 text-lg md:text-xl font-bold md:text-center ml-4 md:ml-0">Destiny Orumade</h2>
        <div className="flex gap-3 md:my-4 ml-auto md:ml-0">
          <a href="https://wa.me/2349044224048" target="_blank"><FaWhatsapp /></a>
          <a href="https://x.com/dallysmart8968?s=21" target="_blank"><FaTwitter /></a>
          <a href="https://www.instagram.com/smarterdelly?igsh=MXdhNW11Y3Vpbm9qaw%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
          <a href="https://github.com/Destiny-orumade" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/Destiny-Orumade" target="_blank"><FaLinkedin /></a>
        </div>
      </div>
      <nav className="mt-0 md:mt-6 space-x-4 md:space-y-4 md:space-x-0 w-full text-center md:flex-col flex-row  md:block hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block hover:text-sky-400"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

