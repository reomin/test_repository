import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    console.log(sectionId);
     if (location.pathname !== '/') {
      window.location.href = '/';
      return;
    }
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
          <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <a href="/">Portfolio</a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
                {location.pathname !== '/blog' ? (
                  <a
                    href="/blog"
                    className="text-white hover:text-cyan-400 transition-colors duration-300 capitalize"
                  >
                    Blog
                  </a>
              ) : null}
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
              {location.pathname !== '/blog' ? (
                  <a 
                    href="/blog"
                    className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 capitalize w-full text-left"
                  >
                    Blog
                  </a>
              ) : null}
            </div>
          </div>
        )}
      </nav>
  );
}
