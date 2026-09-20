function Header() {
  return (
    <header className="bg-[#3b2f2f] text-[#f5f1e8] px-4 sm:px-6 py-4 shadow-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <a
          href="/"
          className="text-2xl md:text-3xl font-bold"
        >
          News<span className="text-[#c49a6c]">Room</span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-7">

          <a
            href="/"
            className="text-sm sm:text-base hover:text-[#c49a6c] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm sm:text-base hover:text-[#c49a6c] transition"
          >
            About
          </a>

        </nav>

      </div>

    </header>
  )
}

export default Header