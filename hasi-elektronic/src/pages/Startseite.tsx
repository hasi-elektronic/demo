import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, Wrench, Shield, HardDrive, Printer, Headphones,
  CheckCircle, Star, ChevronRight, Phone, Mail, Award, Users, Clock, TrendingUp
} from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
          if (el) el.textContent = prefix + Math.floor(current).toLocaleString('de-DE') + suffix;
        }, 16);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, prefix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const services = [
  {
    icon: <ShoppingCart size={28} />,
    title: 'Verkauf & Beratung',
    desc: 'Neuer PC, Laptop oder Drucker? Wir beraten ehrlich – ohne Fachchinesisch.',
    features: ['Geprüfte Markenqualität', 'Individuelle Zusammenstellung', 'Einrichtung inklusive'],
    path: '/dienstleistungen',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Reparatur & Wartung',
    desc: 'Computer streikt? Wir helfen schnell und zuverlässig.',
    features: ['Datenrettung & Virenentfernung', 'Hardware-Reparatur', 'Fernwartung möglich'],
    path: '/dienstleistungen',
  },
  {
    icon: <Shield size={28} />,
    title: 'Sicherheit & Virenschutz',
    desc: 'Professioneller Schutz vor Viren, Malware und Cyberangriffen.',
    features: ['Antiviren-Software', 'Firewalls & IT-Sicherheit', 'Hasi Safe Stick'],
    path: '/hasi-safe-stick',
  },
  {
    icon: <HardDrive size={28} />,
    title: 'Datenrettung & Backup',
    desc: 'Verlorene Dateien oder beschädigte Festplatte? Wir retten Ihre Daten.',
    features: ['DSGVO-konform', 'Backup-Lösungen', 'Professionelle Datenrettung'],
    path: '/dienstleistungen',
  },
  {
    icon: <Printer size={28} />,
    title: 'Drucker & Zubehör',
    desc: 'Einrichtung, Wartung und Reparatur von Druckern und Scannern.',
    features: ['Tintenpatronen & Toner', 'Netzwerkdrucker', 'Ersatzteile im Laden'],
    path: '/dienstleistungen',
  },
  {
    icon: <Headphones size={28} />,
    title: 'IT-Service & Support',
    desc: 'Fernwartung und Support – schnell und unkompliziert.',
    features: ['Remote-Support via AnyDesk', 'Wartungsverträge', '24/7 Notfall-Service'],
    path: '/support',
  },
];

const testimonials = [
  { name: 'Max Müller', stars: 5, text: '"Hasi Elektronic hat meinen Laptop schnell repariert und mir klar erklärt, was passiert ist. Sehr empfehlenswert!"' },
  { name: 'Anna Schmidt', stars: 5, text: '"Der Service war hervorragend! Schnelle Hilfe und freundliche Mitarbeiter. Ich werde definitiv wiederkommen."' },
  { name: 'Tim Becker', stars: 5, text: '"Dank Hasi Elektronic konnte ich meine wichtigen Daten retten. Ausgezeichneter Service und sehr kompetent."' },
  { name: 'Laura Wagner', stars: 5, text: '"Sehr zufrieden mit der Beratung! Hasi Elektronic hat mir viele nützliche Tipps gegeben."' },
];

export default function Startseite() {
  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const statsRef = useReveal();
  const historyRef = useReveal();
  const testimonialsRef = useReveal();
  const advantagesRef = useReveal();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)',
        }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Kostenlose Erstdiagnose', 'Keine versteckten Kosten', 'Erfahrenes Team'].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-white backdrop-blur-sm"
              >
                <CheckCircle size={14} className="text-success" />
                {badge}
              </span>
            ))}
          </div>

          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">
            IHR ZUVERLÄSSIGER PARTNER
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Ihr IT-Experte in<br />
            <span className="gradient-text">Vaihingen Enz</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hasi Elektronic bietet professionelle IT-Dienstleistungen für private und gewerbliche
            Kunden seit 1986. Vertrauen Sie auf unsere Expertise!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
              <Phone size={18} />
              Jetzt kontaktieren
            </Link>
            <Link to="/dienstleistungen" className="btn-outline text-base px-8 py-4">
              Unsere Dienstleistungen
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: 'Jahre Erfahrung', value: '38+' },
              { label: 'Kunden', value: '1000+' },
              { label: 'Zufriedenheit', value: '100%' },
              { label: 'Auszeichnungen', value: '3+' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-black text-accent mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <span>Nach unten scrollen</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* Über uns Sektion */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                  alt="IT-Experten bei der Arbeit – Hasi Elektronic Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">38+</div>
                <div className="text-sm text-blue-100">Jahre Expertise</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">ÜBER UNS</span>
              <h2 className="section-title mb-4">
                Wir sind Hasi Elektronic –<br />
                <span className="gradient-text">Ihr IT-Spezialist</span>
              </h2>
              <div className="section-divider" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Seit 1986 bietet Hasi Elektronic in Vaihingen an der Enz erstklassigen IT-Service
                und technische Unterstützung. Unser Unternehmen spezialisiert sich auf PC- und
                Laptop-Reparaturen, Datenrettung, Virenentfernung sowie Fernwartung über AnyDesk.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Wir verkaufen sowohl refurbished als auch neue Hardware und sind stolz auf unseren
                Hasi Safe Stick, der sicheres Passwortmanagement gewährleistet. Unsere jahrelange
                Erfahrung und hohe Kundenzufriedenheit zeichnen uns aus.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Award size={20} />, text: 'Seit 1986 aktiv' },
                  { icon: <Users size={20} />, text: '1000+ Kunden' },
                  { icon: <CheckCircle size={20} />, text: 'Zertifiziert & geprüft' },
                  { icon: <Clock size={20} />, text: 'Schnelle Reaktion' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-300">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/ueber-uns" className="btn-primary">
                Mehr erfahren
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dienstleistungen Grid */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="reveal text-center mb-14">
            <span className="section-label">UNSERE DIENSTLEISTUNGEN</span>
            <h2 className="section-title mb-4">Vielfältige IT-Lösungen für Sie</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Von Reparaturen bis zu IT-Beratung – wir haben alles für Ihr IT-Bedürfnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="card p-6 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <div className="w-10 h-0.5 bg-accent rounded-full mb-3" />
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle size={13} className="text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="text-accent hover:text-accent-light text-sm font-semibold flex items-center gap-1 transition-colors"
                >
                  Mehr erfahren <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 100, suffix: '%', label: 'Kundenzufriedenheit', icon: <Star size={24} /> },
              { target: 1000, suffix: '+', label: 'Zufriedene Kunden', icon: <Users size={24} /> },
              { target: 38, suffix: '+', label: 'Jahre Erfahrung', icon: <TrendingUp size={24} /> },
              { target: 3, suffix: '+', label: 'Globale Auszeichnungen', icon: <Award size={24} /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-white/40 mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte Sektion */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={historyRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">UNSERE GESCHICHTE</span>
              <h2 className="section-title mb-4">
                Über <span className="gradient-text">40 Jahre</span> IT-Expertise
              </h2>
              <div className="section-divider" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Hasi Elektronic wurde 1986 gegründet und hat sich seither zu einem
                vertrauenswürdigen Partner in der IT-Branche entwickelt. Seit der Übernahme
                durch Hamdi Güncavdi am 01.05.2023 verbinden wir bewährte Tradition mit
                modernsten IT-Lösungen.
              </p>
              <div className="space-y-4">
                {[
                  { year: '1986', event: 'Gründung von Hasi Elektronic in Vaihingen/Enz' },
                  { year: '2000er', event: 'Ausweitung auf PC-Reparatur & Netzwerklösungen' },
                  { year: '2023', event: 'Übernahme durch Hamdi Güncavdi – neue Impulse' },
                  { year: '2024+', event: 'Cloud-Services, Hasi Safe Stick & Digital Hausmeister' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <div className="w-16 flex-shrink-0 text-accent font-bold text-sm">{item.year}</div>
                    <div className="flex-1 text-gray-400 text-sm border-l border-gray-700 pl-4">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="IT-Technik und Elektronik – Hasi Elektronic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsRef} className="reveal">
            <div className="text-center mb-14">
              <span className="section-label">WAS UNSERE KUNDEN SAGEN</span>
              <h2 className="section-title">Kundenbewertungen und Erfahrungen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} className="text-warning fill-warning" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed mb-4">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">Verifizierter Kunde</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Sektion */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={advantagesRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80"
                alt="IT-Support und Beratung – Hasi Elektronic"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="section-label">WARUM WIR ANDERS SIND</span>
              <h2 className="section-title mb-4">
                Einzigartige Vorteile<br />
                <span className="gradient-text">unserer Dienstleistungen</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-6 mt-6">
                {[
                  {
                    num: '01',
                    title: 'Erfahrung seit 1986',
                    desc: 'Über 40 Jahre Erfahrung in der IT-Branche machen uns zu einem der verlässlichsten Ansprechpartner in der Region.',
                  },
                  {
                    num: '02',
                    title: 'Individuelle Beratung',
                    desc: 'Jeder Kunde erhält eine persönliche Beratung – ohne Fachchinesisch und stets auf Augenhöhe.',
                  },
                  {
                    num: '03',
                    title: 'Schnelle Reaktionszeiten',
                    desc: 'Wir garantieren schnelle Hilfe – oft noch am gleichen Tag. Ihr Problem ist unser Problem.',
                  },
                ].map((adv) => (
                  <div key={adv.num} className="flex gap-5">
                    <div className="text-5xl font-black text-accent/20 flex-shrink-0 leading-none">{adv.num}</div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{adv.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-4 block">
            KONTAKTIEREN SIE UNS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Holen Sie sich Unterstützung für Ihre IT-Anliegen!
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Unser Team steht bereit, um Ihnen mit Fachwissen und Freundlichkeit zu helfen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
              <Phone size={18} />
              Jetzt kontaktieren
            </Link>
            <a
              href="mailto:info@hasi-elektronic.de"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
