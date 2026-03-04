import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-3xl animate-bounce">🛍️</span>

          <h1 className="text-2xl font-bold tracking-wide 
          group-hover:text-blue-600 transition">
            J Store
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">

          <a
            href="#"
            className="hover:text-black hover:scale-105 transition"
          >
            Home
          </a>

      
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917356179857"
          target="_blank"
          className="bg-green-500 text-white px-5 py-2 rounded-full
          shadow-lg hover:shadow-green-400/50
          hover:scale-105 transition-all duration-300
          animate-pulse"
        >
          💬 WhatsApp
        </a>

      </div>

      {/* Trust strip */}
      <div className="bg-gray-50 border-t">

       

      </div>

    </header>
  );
}

export default Header;