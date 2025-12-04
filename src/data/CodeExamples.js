export const codeExamples = {
  "App.jsx": `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-xl text-center space-y-4">
        <h1 className="text-2xl font-bold">Coder Demo</h1>

        <p className="text-lg">Clicks: {count}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 rounded"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;`,

  "Navbar.jsx": `function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-blue-400">&lt;/&gt;</span> Coder
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Projects</a>
        <a href="#" className="hover:text-blue-400">About</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </div>

      {/* Button */}
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </nav>
  );
}

export default Navbar;`,

  "Hero.jsx": `function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build with <span className="text-blue-400">Coder</span>
      </h1>

      <p className="text-gray-400 max-w-xl mb-6">
        A simple platform to create, learn, and showcase your web projects.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
          Get Started
        </button>
        <button className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;`,
};



export const floatingCards = {
  "App.jsx":{
    bgColor:"bg-blue-500/20",
    iconColor:"text-blue-400",
    textColor:"text-blue-200",
    contentColor:"text-blue-300",
    icon:"AI",
    title:"Smart Completion",
    content:"AI-powered code suggestions in real-time"
  },  
  "Hero.jsx":{
    bgColor:"bg-purple-500/20",
    iconColor:"text-purple-400",
    textColor:"text-purple-200",
    contentColor:"text-purple-300",
    icon:"⚡",
    title:"Auto Animation",
    content:"Dynamic typing effects generated automatically"
  },  
  "Navbar.jsx":{
    bgColor:"bg-emerald-500/20",
    iconColor:"text-emerald-400",
    textColor:"text-emerald-200",
    contentColor:"text-emerald-300",
    icon:"🔍",
    title:"Smart Search",
    content:"Smart code search across your project"
  },

}