import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import RESTapi from './RESTapi';

export default function LoggedIn({ username, setIsLoggedIn }) {
  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <main className="w-full flex-1 bg-gray-50">
        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl lg:text-5xl">
            Welcome back, {username}
          </h1>
        </section>
        <RESTapi />
        <Projects />
      </main>
      <Contact />
    </>
  );
}