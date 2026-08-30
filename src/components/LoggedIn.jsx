import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import RESTapi from './RESTapi';

export default function LoggedIn({ username, setIsLoggedIn }) {
  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1 bg-gray-50">
        <section id="about" className="px-6 py-12 max-w-5xl mx-auto text-center">
          <h1 className="mb-4 text-gray-900">Welcome back, {username}</h1>
        </section>
        <RESTapi />
        <Projects />
      </main>
      <Contact />
    </>
  );
}