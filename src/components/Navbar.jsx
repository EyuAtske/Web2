export default function Navbar({ setIsLoggedIn }) {
  return (
    <nav className="w-full border-b border-gray-100 bg-white px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <a href="/" className="cursor-pointer text-xl font-bold text-gray-900 sm:text-2xl">MyPortfolio</a>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:gap-5">
          <a href="#about" className="text-gray-600 transition-colors hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-600 transition-colors hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 transition-colors hover:text-gray-900">Contact</a>
          {setIsLoggedIn && (
            <button
              type="button"
              onClick={() => setIsLoggedIn(false)}
              className="ml-0 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 sm:ml-2"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
