import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const serviceLinks = [
  { label: 'Alle Dienstleistungen', path: '/dienstleistungen' },
  { label: 'Digital Hausmeister', path: '/digital-hausmeister' },
  { label: 'Cloud / Hasi Cloud', path: '/cloud' },
  { label: 'Hasi Safe Stick', path: '/hasi-safe-stick' },
  { label: 'Hasi Care Support', path: '/hasi-care-support' },
  { label: 'IT-Support', path: '/support' },
];

const companyLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'IT-Ratgeber', path: '/it-ratgeber' },
  { label: 'Kontakt', path: '/kontakt' },
  { label: 'Support', path: '/support' },
];

const legalLinks = [
  { label: 'Impressum', path: '/impressum' },
  { label: 'Datenschutzerklärung', path: '/datenschutzerklaerung' },
  { label: 'AGBs', path: '/agbs' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black text-accent tracking-wider">HASI</span>
                <span className="text-sm italic text-gray-400 font-medium -mt-1 tracking-widest">elektronic</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ihr IT-Experte in Vaihingen an der Enz seit 1986. Professioneller IT-Service für private und gewerbliche Kunden.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-gray-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={16} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-gray-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={16} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="w-9 h-9 bg-gray-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={16} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Unternehmen</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Rechtliches</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Grabenstraße 18</p>
                  <p className="text-gray-400 text-sm">71665 Vaihingen an der Enz</p>
                  <p className="text-gray-500 text-xs mt-1">(Eingang Heilbronner Straße)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+4907042163916" className="text-gray-300 hover:text-accent text-sm transition-colors block">
                    07042 16391
                  </a>
                  <a href="tel:+4901601236060" className="text-gray-400 hover:text-accent text-sm transition-colors block">
                    0160 1236060
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hasi-elektronic.de" className="text-gray-300 hover:text-accent text-sm transition-colors">
                  info@hasi-elektronic.de
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Mo, Di, Do, Fr: 09–13 & 15:30–18 Uhr</p>
                  <p className="text-gray-300">Sa: 10–13 Uhr</p>
                  <p className="text-gray-500">Mi: Geschlossen</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            Hasi Elektronic © {new Date().getFullYear()} – Alle Rechte vorbehalten
          </p>
          <p className="text-gray-600 text-xs">
            Inhaber: Hamdi Güncavdi · Gegründet 1986 · Übernommen 01.05.2023
          </p>
        </div>
      </div>
    </footer>
  );
}
