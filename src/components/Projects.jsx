export default function Projects() {

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl bg-white px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl">
        My Projects
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center text-gray-600 sm:flex-row">
        <span className="font-medium text-gray-900">Title: Distributed Web Crawler</span>
        <span className="hidden sm:inline">•</span>
        <span>Description: A distributed web crawler for efficient data collection</span>
      </div>
    </section>
  );
}
