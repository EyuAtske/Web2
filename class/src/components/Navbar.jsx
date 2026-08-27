export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-100 bg-white">
      <a href="/" className="font-bold text-xl text-gray-900 cursor-pointer">MyPortfolio</a>
      <div className="flex gap-5">
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
