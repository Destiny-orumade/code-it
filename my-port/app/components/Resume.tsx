
export default function Resume() {
  return (
    <section className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white px-4 md:px-8 py-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
        >
          Download CV
        </a>
      </div>

      {/* Profile Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky-200">Profile</h3>
        <p className="mt-2 text-gray-300">
          I'm Destiny Orumade , a passionate frontend developer with experience building dynamic, responsive, and modern web applications.
          I specialize in React and Next.js, and I enjoy turning complex ideas into elegant UI solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky-200">Skills</h3>
        <ul className="list-disc ml-6 text-gray-300 grid grid-cols-2 md:grid-cols-3 gap-y-1">
          <li>HTML5 / CSS3</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Tailwind CSS</li>
          <li>Redux Toolkit / RTK Query</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>API Integration</li>
        </ul>
      </div>

      {/* Experience / Projects */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky-200">Projects</h3>
        <div className="mt-4 space-y-3">
          <div>
            <p className="font-bold text-lg">Civic Identity App</p>
            <p className="text-gray-400 text-sm">
              Built a Soulbound NFT-based identity verification platform using React, Tailwind CSS, Node.js, and Ethers.js.
              Integrated IPFS via Pinata and deployed on Base Sepolia.
              <a href="https://civicapp-s.vercel.app/" className="text-green-400">@civicapp</a>
               
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">SIMBI — AI Study Buddy</p>
            <p className="text-gray-400 text-sm">
              Developed a Telegram-powered AI assistant for students with study planning, quizzes, and NFT rewards. Leveraged OpenAI, Next.js, and blockchain tools.
               <a href="https://simbi-ai.vercel.app/" className="text-indigo-500">@simbi</a>
               
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky-200">Education</h3>
        <p className="text-gray-300">B.Sc. Computer Science (In Progress)</p>
        <p className="text-gray-400 text-sm">University of Technology</p>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-semibold text-sky-200">Certifications</h3>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Web Developer Career Path — Genesys</li>
            
        </ul>

        <div className="mt-4 flex justify-center">
          <img
            src="./cert.png"
            alt="Frontend Developer Certificate"
            className="rounded-lg shadow-md w-full max-w-md border border-gray-700"
          />
  </div>
      </div>
          <div>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Frontend Developer Career Path — Genesys</li>
            
        </ul>

        <div className="mt-4 flex justify-center">
          <img
            src="./cert2.jpeg"
            alt="Frontend Developer Certificate"
            className="rounded-lg shadow-md w-full max-w-md border border-gray-700"
          />
  </div>
      </div>
    </section>
  )
}
