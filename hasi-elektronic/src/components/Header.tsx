import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  {
    label: 'Dienstleistungen',
    path: '/dienstleistungen',
    dropdown: [
      { label: 'Alle Dienstleistungen', path: '/dienstleistungen' },
      { label: 'Digital Hausmeister', path: '/digital-hausmeister' },
      { label: 'Cloud', path: '/cloud' },
      { label: 'Hasi Safe Stick', path: '/hasi-safe-stick' },
      { label: 'Hasi Care Support', path: '/hasi-care-support' },
    ],
  },
  { label: 'IT-Ratgeber', path: '/it-ratgeber' },
  { label: 'Kontakt', path: '/kontakt' },
  { label: 'Support', path: '/support' },
];

const secondaryLinks = [
  { label: 'Datenschutz', path: '/datenschutzerklaerung' },
  { label: 'AGBs', path: '/agbs' },
  { label: 'Impressum', path: '/impressum' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary/20 border-b border-gray-700/50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1.5">
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Phone size={12} />
            <a href="tel:+4907042163916" className="hover:text-accent transition-colors">07042 16391</a>
            <span className="mx-2 text-gray-600">|</span>
            <a href="tel:+4901601236060" className="hover:text-accent transition-colors">0160 1236060</a>
          </span>
          <nav className="flex items-center gap-4">
            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-accent text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-accent tracking-wider group-hover:text-accent-light transition-colors">
                HASI
              </span>
              <span className="text-xs italic text-gray-400 font-medium -mt-1 tracking-widest">
                elektronic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-800 transition-all">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-accent/10 hover:text-accent transition-colors border-b border-gray-700/50 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3 py-2 rounded-md hover:bg-gray-800 transition-all ${
                    location.pathname === link.path ? 'text-accent bg-gray-800' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+4907042163916"
              className="btn-primary text-sm py-2"
            >
              <Phone size={14} />
              Jetzt anrufen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-accent transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.path}>
                  <div className="text-gray-300 font-medium px-3 py-2 text-sm">{link.label}</div>
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-accent hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent bg-gray-800'
                      : 'text-gray-300 hover:text-accent hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-gray-700 space-y-2">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-xs text-gray-500 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+4907042163916"
                className="btn-primary text-sm w-full justify-center mt-2"
              >
                <Phone size={14} />
                07042 16391
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
