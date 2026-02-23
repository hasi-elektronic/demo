import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, CheckCircle, ChevronRight, Phone, RefreshCw, Laptop, Shield } from 'lucide-react';

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

export default function HasiCareSupport() {
  const heroRef = useReveal();
  const servicesRef = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #065f46 100%)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-success/20 border border-success/30 px-4 py-2 rounded-full text-sm text-green-300 mb-8">
            💻 NEU – IT-Hilfe ohne Garantie-Verantwortung
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Hasi Care<br />
            <span className="text-success">Support</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            IT-Hilfe ohne Garantie-Verantwortung – Updates, Einrichtung, Problemlösung.
            Ihr IT-Rückhalt bei alltäglichen Herausforderungen.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <div className="text-4xl font-black text-success">ab 19,90€</div>
            <div className="text-gray-400 text-sm">pro Monat<br />monatlich kündbar</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
              Paket anfragen
              <ChevronRight size={18} />
            </Link>
            <a href="tel:+4907042163916" className="btn-outline text-base px-8 py-4">
              <Phone size={18} />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">LEISTUNGEN</span>
              <h2 className="section-title">Was ist enthalten?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <RefreshCw size={24} />, title: 'Software-Updates', desc: 'Regelmäßige Aktualisierung von Windows, Treibern und installierten Programmen für maximale Sicherheit und Performance.' },
                { icon: <Headphones size={24} />, title: 'Support & Hilfe', desc: 'Telefonischer und Remote-Support bei Fragen und Problemen. Wir helfen schnell und unkompliziert.' },
                { icon: <CheckCircle size={24} />, title: 'Einrichtungshilfe', desc: 'Neue Software einrichten, Geräte verbinden, Einstellungen konfigurieren – wir machen das für Sie.' },
                { icon: <Shield size={24} />, title: 'Sicherheitscheck', desc: 'Regelmäßige Überprüfung auf Schadsoftware, unsichere Passwörter und veraltete Sicherheitssoftware.' },
                { icon: <Laptop size={24} />, title: 'Leihgerät bei Fehler', desc: 'Falls Ihr Gerät durch einen von uns verursachten Fehler ausfällt, erhalten Sie ein Leihgerät für die Dauer der Reparatur.' },
                { icon: <Phone size={24} />, title: 'Direkter Kontakt', desc: 'Persönlicher Ansprechpartner bei Hasi Elektronic – keine Hotline, kein Ticketsystem, echter Mensch.' },
              ].map((item, i) => (
                <div key={i} className="card p-6 group">
                  <div className="w-12 h-12 bg-success/10 border border-success/20 rounded-xl flex items-center justify-center text-success mb-4 group-hover:bg-success group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Important note */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Shield size={20} className="text-warning" />
                Wichtiger Hinweis: "Ohne Garantie-Verantwortung"
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Der Hasi Care Support ist ein Service-Paket für allgemeine IT-Unterstützung und Wartung.
                Er umfasst keine Herstellergarantie auf Hardware und keine Vollkaskoversicherung für Geräte.
                Bei Hardware-Defekten durch normale Nutzung greift die reguläre Herstellergarantie.
                Für erweiterten Hardware-Schutz empfehlen wir unsere <Link to="/dienstleistungen" className="text-accent hover:underline">Garantieverlängerung</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Headphones size={48} className="text-success mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white mb-4">Bereit für sorgenfreie IT?</h2>
          <p className="text-gray-400 mb-10">ab 19,90€/Monat – monatlich kündbar, kein Risiko</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary px-8 py-4 text-base justify-center">
              <CheckCircle size={18} />
              Paket anfragen
            </Link>
            <Link to="/digital-hausmeister" className="btn-outline px-8 py-4 text-base">
              Digital Hausmeister ansehen
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
