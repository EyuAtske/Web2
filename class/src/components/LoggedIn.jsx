import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import RESTapi from './RESTapi';

export default function LoggedIn({ username, setIsLoggedIn }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section id="about" className="px-6 py-12 max-w-5xl mx-auto text-center">
          <h1 className="mb-4 text-gray-900">Welcome back, {username}</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 border border-gray-900 rounded-md text-white bg-gray-900 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Log Out
          </button>
        </section>
        <RESTapi />
        <Projects />
      </main>
      <Contact />
    </>
  );
}