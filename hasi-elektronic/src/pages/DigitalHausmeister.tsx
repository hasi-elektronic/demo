import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Shield, HardDrive, RefreshCw, Wifi, Smartphone,
  Cloud, GraduationCap, Building, Zap, AlertTriangle, ShoppingCart,
  CheckCircle, Phone, ChevronRight, Star, MapPin
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

const pricing = [
  {
    name: 'Basic',
    price: 'Auf Anfrage',
    target: 'Gelegenheitsnutzer',
    popular: false,
    features: [
      'Telefonischer Support',
      'E-Mail-Beratung (24h)',
      'Kaufberatung',
      'Basis-Diagnose',
    ],
  },
  {
    name: 'Standard',
    price: 'ab 29€/Monat',
    target: 'Die meisten Nutzer',
    popular: true,
    features: [
      'Alles aus Basic',
      '1x Vor-Ort-Besuch/Jahr',
      'Remote-Support',
      'Priorisierte Bearbeitung',
      'Software-Updates',
    ],
  },
  {
    name: 'Premium',
    price: 'ab 49€/Monat',
    target: 'Anspruchsvolle Nutzer',
    popular: false,
    features: [
      'Alles aus Standard',
      'Backup-Check',
      'Sicherheits-Scan',
      'WLAN-Optimierung',
      '10% Rabatt auf Reparaturen',
      'Express-Reaktion (4h)',
    ],
  },
  {
    name: 'Business',
    price: 'ab 79€/Monat',
    target: 'Selbstständige & KMU',
    popular: false,
    features: [
      'Alles aus Premium',
      'Netzwerk-Betreuung',
      'Automatisches Backup',
      'Drucker-Wartung',
      'E-Mail-Konfiguration',
      '15% Rabatt',
      '2h Reaktionszeit',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Auf Anfrage',
    target: 'Große Unternehmen',
    popular: false,
    features: [
      'Alles aus Business',
      'IT-Security-Audit',
      'Cloud-Beratung',
      'Server-Wartung',
      'DSGVO-Archivierung',
      '20% Rabatt',
      '24/7 Hotline',
      'Quartals-Beratung',
    ],
  },
];

const detailServices = [
  {
    icon: <Monitor size={24} />,
    title: 'PC & Laptop Reparatur',
    desc: 'Hardware-Diagnose, Komponenten-Austausch, Display- & Tastatur-Reparatur, Lüfter-Reinigung, SSD-Upgrades für mehr Performance.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Virenentfernung & IT-Sicherheit',
    desc: 'Vollständige Malware-Entfernung, Antivirus-Installation, Firewall-Einrichtung, Adware-Bereinigung, Browser-Sicherheit & Phishing-Schulung.',
  },
  {
    icon: <HardDrive size={24} />,
    title: 'Datenrettung & Backup',
    desc: 'Daten von HDD, SSD, USB, SD-Karten retten. Gelöschte Dateien wiederherstellen, Backup-Strategien einrichten, NAS-Systeme (Synology, QNAP).',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Windows Installation & Updates',
    desc: 'Windows 10/11 Installation, Treiber & Firmware, Office-Einrichtung, System-Optimierung, Daten-Migration vom alten PC.',
  },
  {
    icon: <Wifi size={24} />,
    title: 'Netzwerk & WLAN',
    desc: 'Router-Einrichtung, Mesh-WLAN, Geschwindigkeits-Analyse, Gastnetzwerk, Smart-Home-Integration, Powerline-Adapter.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Smart Home & IoT',
    desc: 'Smart-TV, Streaming-Dienste, WLAN-Drucker, intelligente Thermostate, Überwachungskameras, Sprachassistenten einrichten.',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud-Services & E-Mail',
    desc: 'Google Drive / OneDrive / Dropbox-Einrichtung, Outlook & Thunderbird, Microsoft 365, Passwort-Manager, DSGVO-konforme Lösungen.',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Schulungen & Einweisungen',
    desc: 'Windows, Smartphone (auch für Senioren!), Online-Banking, Videotelefonie, Foto-Verwaltung, Word & Excel Grundlagen.',
  },
  {
    icon: <Building size={24} />,
    title: 'Business IT-Services',
    desc: 'KMU-Infrastruktur, Windows Server, Active Directory, VPN-Einrichtung, Kassensysteme, DSGVO-Beratung, Disaster Recovery.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Remote-Support',
    desc: 'Sofort-Hilfe via TeamViewer/AnyDesk, Software-Installation aus der Ferne, schnelle Fehlerdiagnose, Updates & Patches.',
  },
  {
    icon: <AlertTriangle size={24} />,
    title: 'Express & Notfall-Service',
    desc: 'Same-Day-Service, kritische Datenrettung, Server-Notfälle, 24/7 Notfall-Hotline (Enterprise), Vor-Ort-Einsatz.',
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'Hardware-Verkauf & Beratung',
    desc: 'Unabhängige Kaufberatung, Business-Laptops, geprüfte Refurbished-Geräte, Komplett-Systeme, Zubehör, 10–20% Paket-Rabatt.',
  },
];

export default function DigitalHausmeister() {
  const heroRef = useReveal();
  const pricingRef = useReveal();
  const servicesRef = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-white mb-8 backdrop-blur-sm">
            🔧 Seit 1986 in Vaihingen
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Ihr Digitaler<br />
            <span className="text-accent">Hausmeister</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
            Professioneller IT-Service für Ihr Zuhause und Büro. Persönlich, zuverlässig
            und vor Ort in Vaihingen & Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pakete" className="btn-primary text-base px-8 py-4">
              Pakete ansehen
              <ChevronRight size={18} />
            </a>
            <a
              href="tel:+4907042163916"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Jetzt anrufen
            </a>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap gap-6 mt-16">
            {[
              { icon: <Zap size={16} />, text: '38 Jahre Erfahrung' },
              { icon: <MapPin size={16} />, text: 'Regional Vor-Ort-Service' },
              { icon: <Star size={16} />, text: '4.8/5 Kundenbewertung' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-blue-200 text-sm glass px-4 py-2 rounded-full">
                <span className="text-accent">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pakete" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">PAKETE & PREISE</span>
              <h2 className="section-title">Das richtige Paket für Sie</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative card p-6 ${plan.popular ? 'border-accent ring-2 ring-accent/30' : ''}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      BELIEBT
                    </span>
                  )}
                  <div className="mb-4">
                    <h3 className="text-white font-black text-xl">{plan.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{plan.target}</p>
                  </div>
                  <div className="text-accent font-bold text-lg mb-5">{plan.price}</div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-400 text-xs">
                        <CheckCircle size={12} className="text-success mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className={`block text-center text-sm font-bold py-3 px-4 rounded-lg transition-all ${
                      plan.popular
                        ? 'bg-accent text-white hover:bg-accent-light'
                        : 'border border-gray-600 text-gray-300 hover:border-accent hover:text-accent'
                    }`}
                  >
                    Anfragen
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">LEISTUNGEN IM DETAIL</span>
              <h2 className="section-title">Was wir für Sie tun</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailServices.map((service, i) => (
                <div key={i} className="card p-6 group">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area + CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin size={40} className="text-blue-300 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-white mb-4">Service-Gebiet</h2>
          <p className="text-blue-200 mb-6 text-lg">
            Vaihingen/Enz · Mühlacker · Pforzheim · Stuttgart & Umgebung
          </p>
          <p className="text-blue-300 text-sm mb-10">
            Fernwartung deutschlandweit möglich – direkt von zu Hause!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4907042163916"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              07042 16391
            </a>
            <Link
              to="/kontakt"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Kontaktformular
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
