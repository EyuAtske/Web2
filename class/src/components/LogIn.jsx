export default function LogIn({
  username,
  handleSubmit,
  setUsername,
  setPassword,
  password,
}) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6">
      <h2>Login Form</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 text-left border border-black p-6 rounded bg-gray-900"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium text-white">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-black rounded bg-white text-black focus:outline-none"
            placeholder="enter username..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-white rounded bg-white text-black focus:outline-none"
            placeholder="enter password..."
          />
        </div>

        <button
          type="submit"
          className="mt-2 py-2 px-4 border border-white rounded text-black bg-white hover:bg-gray-200 hover:text-white transition-colors cursor-pointer"
        >
          Log In
        </button>
      </form>
    </main>
  );
}