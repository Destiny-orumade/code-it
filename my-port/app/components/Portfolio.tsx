export default function Portfolio() {
  return (
    <section id="portfolio" className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4"> My Portfolio</h2>
      <ul className="space-y-4">
        <li>
          <strong>SIMBI AI Study Buddy</strong>: An AI-powered educational assistant with Telegram integration.
            <p><a href="https://simbi-ai.vercel.app/" className="text-indigo-500">@simbi</a></p>
          
        </li>
        <li>
          <strong>Civic Identity App</strong>: A blockchain-based identity verification app using Soulbound NFTs With Web2 features.
            <p><a href="https://civicapp-s.vercel.app/" className="text-green-400">@civicapp</a></p>
            
        </li>
        <li>
          <strong>E-Commerce UI</strong>: A modern e-commerce frontend with cart, product grid, and search filter.
            <p><a href="https://e-commmerce-ten.vercel.app/" className="text-blue-500">@ecommerce-ui</a></p>
        </li>
        <li>
          <strong>Suuave</strong>: A modern african fashion webapp that potrays the beauty of african dresses.
            <p><a href="https://suuave-development.vercel.app/" className="text-amber-500">@suuave</a></p>
        </li>
      </ul>
    </section>
  )
}