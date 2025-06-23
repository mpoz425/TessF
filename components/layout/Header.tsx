import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-softBlue to-blue-600 bg-clip-text text-transparent">
              Dr. Teresa Flanagan
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Research', '/research'],
              ['Publications', '/publications'],
              ['Contact', '/contact'],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="text-gray-600 hover:text-softBlue transition-colors duration-200 font-medium"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Research', '/research'],
            ['Publications', '/publications'],
            ['Contact', '/contact'],
          ].map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="block px-3 py-2 text-gray-600 hover:text-softBlue hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
