export default function Navbar() {
  return (
    <nav className="flex items-center justify-between z-30 mt-2">
      <a href="/" className="font-Lora underline decoration-violet text-3xl text-neutral-900">
        Baskcrypt
      </a>
      <div className="flex flex-row gap-7 items-center ">
        <a href="/#home" className="font-Lora text-xl text-neutral-900">Home</a>
        <a href ="/#about" className="font-Lora text-xl text-neutral-900">About</a>
        <a href ="/baskets" className="font-Lora text-xl text-neutral-900">Baskets</a>
        <a
          href="/signup"
          className="px-4 py-2 text-white rounded-md bg-gradient-to-br from-lightVio to-violet hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow-slate-900"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
