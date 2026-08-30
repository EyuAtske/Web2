export default function Navbar({ setIsLoggedIn }) {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-100 bg-white">
      <a href="/" className="font-bold text-xl text-gray-900 cursor-pointer">MyPortfolio</a>
      <div className="flex items-center gap-5">
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        {setIsLoggedIn && (
          <button
            type="button"
            onClick={() => setIsLoggedIn(false)}
            className="ml-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
