export default function Navbar() {
  return (
    <nav className="flex items-center justify-between z-30">
      <a href="/" className="text-2xl text-neutral-900">
        baskcrypt
      </a>
      <div className="flex items-center">
        <button type="button" className="w-6 h-6 mr-8">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/7407/7407102.svg?token=exp=1678290499~hmac=238e8eb6139f55a0095c0ea7e512b0a9"
            alt="theme"
          ></img>
        </button>
        <a
          href="/signup"
          className="font-thin px-4 py-2 text-neutral-100 rounded-md bg-gradient-to-br from-cyan-400 to-teal-600 hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow-slate-900"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
