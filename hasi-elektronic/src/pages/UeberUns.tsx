import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, Phone, Award, Users, Clock, Heart } from 'lucide-react';

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

const faqs = [
  {
    q: 'Wie schnell kann ich Unterstützung erhalten?',
    a: 'Wir sind sehr schnell erreichbar. Bei dringenden Problemen können Sie uns direkt anrufen – oft helfen wir noch am selben Tag. Telefonisch sind wir zu unseren Öffnungszeiten unter 07042 16391 erreichbar.',
  },
  {
    q: 'Bieten Sie auch Fernsupport an?',
    a: 'Ja, wir bieten professionellen Fernwartungs-Support über AnyDesk an. So können wir Ihnen schnell und unkompliziert helfen, ohne dass Sie zu uns kommen müssen. Besuchen Sie unsere Support-Seite für weitere Informationen.',
  },
  {
    q: 'Verkaufen Sie auch neue Hardware?',
    a: 'Ja, wir verkaufen sowohl neue als auch geprüfte refurbished Hardware. Von Laptops und PCs bis zu Druckern, Zubehör und Netzwerkgeräten – wir beraten Sie gerne und stellen eine individuelle Lösung für Sie zusammen.',
  },
  {
    q: 'In welchem Gebiet sind Sie tätig?',
    a: 'Unser Hauptstandort ist Vaihingen an der Enz. Wir sind jedoch auch für Kunden in Mühlacker, Pforzheim, Stuttgart und der gesamten Umgebung tätig – sowohl vor Ort als auch per Fernwartung.',
  },
];

export default function UeberUns() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useReveal();
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const faqRef = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32 flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            IHR VERTRAUENSWÜRDIGER IT-DIENSTLEISTER
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Erfahren, lokal und<br />
            <span className="text-accent">technisch versiert</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Seit 1986 steht Hasi Elektronic in Vaihingen an der Enz für zuverlässigen IT-Service,
            persönliche Beratung und technische Kompetenz auf höchstem Niveau.
          </p>
        </div>
      </section>

      {/* Über uns Details */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-80 lg:h-96 rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80"
                alt="IT-Werkstatt und Technik – Hasi Elektronic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <div className="text-6xl font-black text-white/80">1986</div>
                  <div className="text-white/60 text-sm">Gegründet in Vaihingen/Enz</div>
                </div>
              </div>
            </div>
            <div>
              <span className="section-label">UNSERE STORY</span>
              <h2 className="section-title mb-4">
                Seit 1986 für Sie da
              </h2>
              <div className="section-divider" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Hasi Elektronic wurde 1986 in Vaihingen an der Enz gegründet und hat sich über
                Jahrzehnte als verlässlicher IT-Partner für Privatpersonen und Unternehmen
                etabliert. Seit dem 01.05.2023 führt Hamdi Güncavdi das Unternehmen mit frischen
                Ideen und bewährter Expertise.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Mit einem breiten Spektrum an IT-Dienstleistungen – von PC-Reparaturen über
                Cloud-Lösungen bis zum innovativen Hasi Safe Stick – sind wir stets auf dem
                neuesten Stand der Technik, ohne unsere lokalen Wurzeln zu vergessen.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award size={18} />, text: '38+ Jahre Erfahrung' },
                  { icon: <Users size={18} />, text: '1000+ Kunden' },
                  { icon: <CheckCircle size={18} />, text: 'Persönliche Beratung' },
                  { icon: <Clock size={18} />, text: 'Schnelle Reaktion' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Werte */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={missionRef} className="reveal text-center mb-14">
            <span className="section-label">MISSION & WERTE</span>
            <h2 className="section-title mb-4">Was uns antreibt</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-5">
                <Award size={28} className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Unsere Mission</h3>
              <div className="w-10 h-0.5 bg-accent rounded-full mb-4" />
              <p className="text-gray-400 leading-relaxed">
                Die Mission von Hasi Elektronic ist es, qualitativ hochwertigen IT-Service zu
                liefern, der Vertrauen schafft. Wir möchten jedem Kunden – ob Privatperson oder
                Unternehmen – die beste technische Lösung für seine Bedürfnisse bieten, ohne
                unnötige Komplexität oder versteckte Kosten.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-5">
                <Heart size={28} className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Unsere Werte</h3>
              <div className="w-10 h-0.5 bg-accent rounded-full mb-4" />
              <p className="text-gray-400 leading-relaxed">
                Wir bei Hasi Elektronic glauben an die Bedeutung von Vertrauen und Qualität.
                Kundenorientierung ist kein Schlagwort für uns – sie ist das Fundament jeder
                Interaktion. Transparente Preise, ehrliche Beratung und nachhaltige Lösungen
                sind unser Versprechen an Sie.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div ref={valuesRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle size={24} />, title: 'Transparenz', desc: 'Klare Preise, keine versteckten Kosten – wir kommunizieren offen.' },
              { icon: <Users size={24} />, title: 'Kundenorientierung', desc: 'Ihr Anliegen steht immer im Mittelpunkt unseres Handelns.' },
              { icon: <Award size={24} />, title: 'Qualität', desc: 'Wir setzen auf geprüfte Produkte und professionelle Lösungen.' },
              { icon: <Clock size={24} />, title: 'Zuverlässigkeit', desc: 'Pünktlich, zuverlässig und mit Herz – das ist Hasi Elektronic.' },
            ].map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Inhaber */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">UNSER INHABER</span>
            <h2 className="section-title">Hamdi Güncavdi</h2>
          </div>
          <div className="max-w-3xl mx-auto card p-8 flex flex-col md:flex-row gap-8 items-center">
            <div
              className="w-32 h-32 rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl font-black text-white/20"
              style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}
            >
              HG
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Hamdi Güncavdi</h3>
              <p className="text-accent text-sm mb-4">Inhaber & IT-Experte seit 01.05.2023</p>
              <p className="text-gray-400 leading-relaxed">
                Als Inhaber von Hasi Elektronic bringe ich Leidenschaft für Technik und den
                Willen mit, jedem Kunden die bestmögliche Lösung zu bieten. Mit Respekt für
                die jahrzehntelange Geschichte des Unternehmens und dem Blick in die Zukunft
                führe ich Hasi Elektronic in eine neue Ära.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">HÄUFIGE FRAGEN</span>
              <h2 className="section-title">Wir beantworten Ihre Fragen</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gray-700 mb-4" />
                      <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-4 block">KONTAKTIEREN SIE UNS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit für erstklassigen IT-Service?
          </h2>
          <p className="text-blue-200 mb-10">Kontaktieren Sie uns noch heute – wir helfen Ihnen gerne weiter.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <Phone size={18} />
              Jetzt kontaktieren
            </Link>
            <Link to="/dienstleistungen" className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              Dienstleistungen ansehen
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
