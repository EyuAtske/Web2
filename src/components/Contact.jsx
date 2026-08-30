export default function Contact() {
  const profile = {
    name: 'Eyuel Atskemariam',
    title: 'Student - Software Engineering',
    email: 'eyuelatskemariam@gmail.com',
    phone: '+251936805507',
    location: 'Addis Ababa, Ethiopia',
    studentId: 'LX0520',
  };

  return (
    <footer id="contact" className="w-full bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-3xl rounded-[26px] border border-[#f0f0f0] bg-[#fafafa] px-4 py-6 shadow-none sm:px-6 sm:py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl">{profile.name}</h2>
          <p className="mt-2 text-lg text-[#0f0f0f] opacity-80 sm:text-2xl">{profile.title}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:eyuelatskemariam@gmail.com"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#ececec] px-5 py-4 text-xl font-semibold text-[#1d1d1d] shadow-sm transition hover:bg-[#e3e3e3]"
          >
            <span className="text-[#1d66d6]">✉</span>
            <span>Email</span>
          </a>
          <a
            href="tel:936805507"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#ececec] px-5 py-4 text-xl font-semibold text-[#1d1d1d] shadow-sm transition hover:bg-[#e3e3e3]"
          >
            <span className="text-[#ea4c87]">📞</span>
            <span>Call</span>
          </a>
        </div>

        <div className="mt-8 rounded-[24px] bg-[#f0f0f0] p-4 shadow-sm">
          <a
            href="mailto:eyuelatskemariam@gmail.com"
            className="flex items-center gap-4 border-b border-[#d9d9d9] px-2 py-4 last:border-b-0 transition hover:bg-[#ebebeb]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7e7e7] text-lg text-[#3a7fe0]">✉</div>
            <div className="min-w-0 flex-1">
              <div className="text-xl font-medium text-[#2d2d2d]">Email</div>
              <div className="truncate text-xl font-normal text-[#0d0d0d] sm:text-2xl">{profile.email}</div>
            </div>
          </a>

          <a
            href="tel:936805507"
            className="flex items-center gap-4 border-b border-[#d9d9d9] px-2 py-4 last:border-b-0 transition hover:bg-[#ebebeb]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7e7e7] text-lg text-[#4d65d8]">📱</div>
            <div>
              <div className="text-xl font-medium text-[#2d2d2d]">Phone</div>
              <div className="text-2xl font-normal text-[#0d0d0d]">{profile.phone}</div>
            </div>
          </a>

          <div className="flex items-center gap-4 border-b border-[#d9d9d9] px-2 py-4 last:border-b-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7e7e7] text-lg text-[#e34b7a]">📍</div>
            <div>
              <div className="text-xl font-medium text-[#2d2d2d]">Location</div>
              <div className="text-2xl font-normal text-[#0d0d0d]">{profile.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-2 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7e7e7] text-lg text-[#4d8f6d]">🎓</div>
            <div>
              <div className="text-xl font-medium text-[#2d2d2d]">Student ID</div>
              <div className="text-2xl font-normal text-[#0d0d0d]">{profile.studentId}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
