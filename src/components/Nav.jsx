import React, { useState, useEffect } from 'react';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0D1117]/95 backdrop-blur-md border-b border-[#21262D]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nom */}
          <div className="flex-shrink-0">
            <h1 className="text-[#E6EDF3] text-xl font-bold font-satoshi hover:text-[#00BFA6] transition-colors cursor-pointer">
              Dylan Eglantine
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="#skills" 
                  className="text-[#5B5B5B] hover:text-[#00BFA6] transition-colors duration-300 font-medium relative group"
                >
                  Compétences
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFA6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-[#5B5B5B] hover:text-[#00BFA6] transition-colors duration-300 font-medium relative group"
                >
                  Mes projets
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFA6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#certifications" 
                  className="text-[#5B5B5B] hover:text-[#00BFA6] transition-colors duration-300 font-medium relative group"
                >
                  Formations
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFA6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#approach" 
                  className="text-[#5B5B5B] hover:text-[#00BFA6] transition-colors duration-300 font-medium relative group"
                >
                  Mon approche
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFA6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFA6]/25"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 bg-[#161B22]/95 backdrop-blur-md rounded-lg mt-2 border border-[#21262D]">
            <ul className="space-y-2 px-4">
              <li>
                <a 
                  href="#skills" 
                  className="block text-[#5B5B5B] hover:text-[#00BFA6] hover:bg-[#21262D]/50 transition-all duration-300 font-medium py-2 px-3 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Compétences
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block text-[#5B5B5B] hover:text-[#00BFA6] hover:bg-[#21262D]/50 transition-all duration-300 font-medium py-2 px-3 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes projets
                </a>
              </li>
              <li>
                <a 
                  href="#certifications" 
                  className="block text-[#5B5B5B] hover:text-[#00BFA6] hover:bg-[#21262D]/50 transition-all duration-300 font-medium py-2 px-3 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Formations et certifications
                </a>
              </li>
              <li>
                <a 
                  href="#approach" 
                  className="block text-[#5B5B5B] hover:text-[#00BFA6] hover:bg-[#21262D]/50 transition-all duration-300 font-medium py-2 px-3 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mon approche
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;