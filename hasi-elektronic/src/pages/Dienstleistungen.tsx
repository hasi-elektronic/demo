import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Monitor, Printer, Shield, Cloud, Camera, Phone as PhoneIcon,
  CheckCircle, ChevronRight, Phone, Mail, Star
} from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const mainServices = [
  {
    icon: <Wrench size={32} />,
    title: 'Reparatur-Service',
    color: 'from-blue-900 to-blue-700',
    features: ['PC & Laptop Reparatur', 'Display-Tausch', 'Hardware-Upgrades', 'Express-Service', 'Fernwartung & Remote'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'PCs & Laptops',
    color: 'from-indigo-900 to-indigo-700',
    features: ['Business-Laptops', 'Individuelle Konfiguration', 'Einrichtung & Datenübertragung', 'Refurbished & Neu', 'Software-Installation'],
  },
  {
    icon: <Printer size={32} />,
    title: 'Drucker & Scanner',
    color: 'from-purple-900 to-purple-700',
    features: ['Multifunktionsgeräte', 'Netzwerk-Integration', 'Treiber-Installation', 'Wartung & Reparatur', 'Tintenpatronen & Toner'],
  },
  {
    icon: <Shield size={32} />,
    title: 'Daten & Sicherheit',
    color: 'from-green-900 to-green-700',
    features: ['Datenrettung', 'Virenentfernung', 'IT-Security Audits', 'Hasi Safe Stick', 'Backup-Lösungen'],
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud & IT-Services',
    color: 'from-cyan-900 to-cyan-700',
    features: ['Hasi Cloud (DSGVO)', 'Microsoft 365', 'Server & Netzwerk', 'Remote-Support', 'E-Mail-Konfiguration'],
  },
  {
    icon: <Camera size={32} />,
    title: 'Smart Home & Zubehör',
    color: 'from-orange-900 to-orange-700',
    features: ['Überwachungskameras', 'Smart Home-Einrichtung', 'Monitore & Bildschirme', 'Kabel & Adapter', 'WLAN-Reichweite'],
  },
  {
    icon: <PhoneIcon size={32} />,
    title: 'Support & Beratung',
    color: 'from-red-900 to-red-700',
    features: ['Digitaler Hausmeister', 'Hasi Care Support', 'IT-Schulungen', 'Senioren-Betreuung', 'Business IT-Support'],
  },
];

const highlights = [
  {
    badge: 'BELIEBT',
    badgeColor: 'bg-accent',
    emoji: '🤝',
    title: 'Digitaler Hausmeister',
    price: 'ab 9,90€/Monat',
    desc: 'Monatliche IT-Betreuung mit Remote-Support – Ihr persönlicher IT-Kümmerer.',
    path: '/digital-hausmeister',
  },
  {
    badge: 'NEU',
    badgeColor: 'bg-success',
    emoji: '💻',
    title: 'Hasi Care Support',
    price: 'ab 19,90€/Monat',
    desc: 'IT-Hilfe ohne Garantie-Verantwortung – Updates, Einrichtung, Problemlösung.',
    path: '/hasi-care-support',
  },
  {
    badge: 'NEU',
    badgeColor: 'bg-warning',
    emoji: '🛡️',
    title: 'Garantieverlängerung',
    price: 'ab 79€ einmalig',
    desc: 'Bis zu 5 Jahre Hardware-Garantie – schützen Sie Ihre Investition.',
    path: '/dienstleistungen',
  },
  {
    badge: 'CLOUD',
    badgeColor: 'bg-cyan-600',
    emoji: '☁️',
    title: 'Hasi Cloud',
    price: 'ab 9,90€/Monat',
    desc: 'DSGVO-konforme Cloud, Nextcloud-basiert, Server in Deutschland.',
    path: '/cloud',
  },
  {
    badge: 'PREMIUM',
    badgeColor: 'bg-purple-600',
    emoji: '🔐',
    title: 'Hasi Safe Stick',
    price: 'ab 59€',
    desc: 'Doppelt verschlüsselter USB-Stick mit VeraCrypt + KeePass.',
    path: '/hasi-safe-stick',
  },
];

const allServices = [
  { icon: '💻', label: 'PC & Laptop Reparatur' },
  { icon: '💾', label: 'Datenrettung' },
  { icon: '🦠', label: 'Virenentfernung' },
  { icon: '🔄', label: 'Windows Installation' },
  { icon: '🌐', label: 'Netzwerk-Einrichtung' },
  { icon: '🖨️', label: 'Drucker-Service' },
  { icon: '📱', label: 'Smart Home Setup' },
  { icon: '🎓', label: 'IT-Schulungen' },
  { icon: '🏢', label: 'Business IT-Support' },
  { icon: '🔐', label: 'IT-Security Audit' },
  { icon: '📧', label: 'E-Mail Konfiguration' },
  { icon: '⚡', label: 'Express-Reparatur' },
];

export default function Dienstleistungen() {
  const heroRef = useReveal();
  const mainRef = useReveal();
  const highlightRef = useReveal();
  const allRef = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">UNSERE DIENSTLEISTUNGEN</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Professionelle IT-Dienstleistungen<br />
            <span className="text-accent">für Sie</span>
          </h1>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: <Star size={16} />, text: '38+ Jahre Erfahrung' },
              { icon: <CheckCircle size={16} />, text: '1000+ Zufriedene Kunden' },
              { icon: <PhoneIcon size={16} />, text: '24/7 Notfall-Support*' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-blue-200 text-sm">
                <span className="text-accent">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-2">* Im Enterprise-Paket</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={mainRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">LEISTUNGSBEREICHE</span>
              <h2 className="section-title">Unsere Fachbereiche</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mainServices.map((service, i) => (
                <div key={i} className="card overflow-hidden group">
                  <div className={`bg-gradient-to-br ${service.color} p-6`}>
                    <div className="text-white/90">{service.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                          <CheckCircle size={13} className="text-success mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Offers */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={highlightRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">HIGHLIGHT-ANGEBOTE</span>
              <h2 className="section-title">Unsere Premium-Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="card p-6 relative">
                  <span className={`absolute top-4 right-4 ${h.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {h.badge}
                  </span>
                  <div className="text-4xl mb-4">{h.emoji}</div>
                  <h3 className="text-white font-bold text-lg mb-1">{h.title}</h3>
                  <p className="text-accent font-bold text-sm mb-3">{h.price}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{h.desc}</p>
                  <Link
                    to={h.path}
                    className="text-accent hover:text-accent-light text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    Mehr erfahren <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={allRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">ALLE SERVICES</span>
              <h2 className="section-title">Das komplette Angebot</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allServices.map((service) => (
                <div key={service.label} className="card p-4 text-center group cursor-default">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <p className="text-gray-400 text-xs leading-tight group-hover:text-white transition-colors">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with contact */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Fragen zu unseren Services?
          </h2>
          <p className="text-blue-200 mb-10 text-lg">Wir beraten Sie gerne – persönlich, telefonisch oder per E-Mail.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+4907042163916"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              07042 16391
            </a>
            <a
              href="mailto:info@hasi-elektronic.de"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              E-Mail schreiben
            </a>
          </div>
          <div className="text-blue-200/60 text-sm">
            <p>Grabenstr. 18, 71665 Vaihingen/Enz</p>
            <p className="mt-1">Mo–Fr: 9–18 Uhr | Sa: 10–13 Uhr | Mi: Geschlossen</p>
          </div>
        </div>
      </section>
    </div>
  );
}
