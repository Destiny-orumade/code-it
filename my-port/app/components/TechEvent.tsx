
'use client'

export default function TechEvents() {
  const images = [
    './01.jpeg',
    './02.jpeg',
    './03.jpeg',
    './06.jpg',
    './04.jpeg',
    './05.jpeg',
  ]

  return (
    <section className="py-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Tech Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Tech Event ${i + 1}`}
            className="rounded-lg shadow-lg object-cover w-full h-60"
          />
          
        ))}
      </div>
    </section>
  )
}


// export default function TechEvents() {
//   return (
//     <section className="px-4 md:px-8 py-10  bg-white dark:bg-gray-900 text-black dark:text-white">
//       <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">Tech Events</h2>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Image 1 */}
//         <div className="space-y-3">
//           <img
//             src="./03.jpeg"
//             alt="ETH Enugu Bootcamp"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//           <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Avalanche Web3 competition:</span> 
//             Engaged in a hands-on blockchain development session with fellow tech enthusiasts. This was a great opportunity to network, pair-program, and learn about smart contract deployment on Ethereum-compatible chains.
//           </p>
//         </div>

//         {/* Image 2 */}
//         <div className="space-y-3">
//           <img
//             src="./04.jpeg"
//             alt="Enugu Tech Fest 2024"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//           <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Enugu Tech Fest 2024:</span> 
//             Attended the largest tech gathering in Enugu featuring speakers from the government and tech ecosystem. The event emphasized innovation, digital economy, and youth-led technology in Nigeria.
//           </p>
//         </div>

//          <div className="space-y-3">
//           <img
//             src="./02.jpeg"
//             alt="Enugu Tech Fest 2024"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//           <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Avalanche Web3 competition:</span> 
//             Engaged in a hands-on blockchain development session with fellow tech enthusiasts. This was a great opportunity to network, pair-program, and learn about smart contract deployment on Ethereum-compatible chains.
//           </p>
//         </div>
          
//            <div className="space-y-3">
//           <img
//             src="./05.jpeg"
//             alt="Enugu Tech Fest 2024"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//           <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Enugu Tech Fest 2024:</span> 
//             Attended the largest tech gathering in Enugu featuring speakers from the government and tech ecosystem. The event emphasized innovation, digital economy, and youth-led technology in Nigeria.
//           </p>
//         </div>

//          <div className="space-y-3">
//           <img
//             src="./01.jpeg"
//             alt="Enugu Tech Fest 2024"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//          <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Avalanche Web3 competition:</span> 
//             Engaged in a hands-on blockchain development session with fellow tech enthusiasts. This was a great opportunity to network, pair-program, and learn about smart contract deployment on Ethereum-compatible chains.
//           </p>
//         </div>

//          <div className="space-y-3">
//           <img
//             src="./06.jpg"
//             alt="Enugu Tech Fest 2024"
//             className="rounded-lg shadow-lg border border-gray-700"
//           />
//           <p className="text-gray-300 text-sm">
//             <span className="text-sky-200 font-medium">Genesy Intern Hangout:</span> 
//             Attended a fun and engaging hangout with fellow interns from Genesy. This event was a great way to unwind, share experiences, and build connections within the tech community.
//           </p>
//         </div>
       
//       </div>
//     </section>
//   )
// }
