import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Key, CheckCircle, ChevronRight, Phone, Award, Zap, Eye } from 'lucide-react';

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

const features = [
  { icon: <Shield size={24} />, title: 'AES-256 Verschlüsselung', desc: 'Militärstandard-Verschlüsselung via VeraCrypt – die gleiche Technologie, die von Regierungen und Militär weltweit eingesetzt wird.' },
  { icon: <Key size={24} />, title: 'KeePass Passwort-Manager', desc: 'Sicherer Passwort-Manager direkt auf dem Stick – alle Passwörter verschlüsselt gespeichert, kein Cloud-Dienst benötigt.' },
  { icon: <Lock size={24} />, title: 'Doppelte Verschlüsselung', desc: 'Zwei unabhängige Sicherheitsschichten: Der Stick selbst und der Passwort-Manager sind separat verschlüsselt.' },
  { icon: <Eye size={24} />, title: 'Kein Cloud-Risiko', desc: 'Ihre Passwörter verlassen nie Ihr Gerät. Kein Online-Dienst, kein Datenleck-Risiko, keine monatlichen Gebühren.' },
  { icon: <Zap size={24} />, title: 'Plug & Play', desc: 'Einfache Einrichtung durch unser Team. Kein technisches Vorwissen erforderlich. Wir erklären alles Schritt für Schritt.' },
  { icon: <Award size={24} />, title: 'Von IT-Profis entwickelt', desc: 'Konzipiert von Hasi Elektronic basierend auf 38+ Jahren IT-Erfahrung. Geprüfte und bewährte Open-Source-Software.' },
];

export default function HasiSafeStick() {
  const heroRef = useReveal();
  const featuresRef = useReveal();
  const howRef = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32 min-h-[80vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm text-purple-300 mb-8">
                🔐 PREMIUM SICHERHEITSPRODUKT
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Hasi<br />
                <span className="text-accent">Safe Stick</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Doppelt verschlüsselter USB-Stick mit VeraCrypt + KeePass –
                der sicherste Weg, Ihre Passwörter zu verwalten.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-black text-accent">ab 59€</div>
                <div className="text-gray-400 text-sm">einmalige Kosten<br />inkl. Einrichtung</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
                  Jetzt bestellen
                  <ChevronRight size={18} />
                </Link>
                <a href="tel:+4907042163916" className="btn-outline text-base px-8 py-4">
                  <Phone size={18} />
                  Beratung anfragen
                </a>
              </div>
            </div>

            {/* Product visual */}
            <div className="flex justify-center">
              <div
                className="w-64 h-64 rounded-3xl flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', boxShadow: '0 20px 60px rgba(99,102,241,0.3)' }}
              >
                <Lock size={80} className="text-accent" />
                <div className="text-white text-center">
                  <div className="font-black text-xl">HASI</div>
                  <div className="text-accent font-bold">SAFE STICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-gray-800 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 'AES-256', label: 'Verschlüsselung' },
              { value: 'VeraCrypt', label: 'Technologie' },
              { value: 'KeePass', label: 'Passwort-Manager' },
              { value: 'Militärstandard', label: 'Sicherheitsniveau' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-accent font-black text-xl mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuresRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">FUNKTIONEN</span>
              <h2 className="section-title">Sicherheit auf höchstem Niveau</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="card p-6 group">
                  <div className="w-12 h-12 bg-purple-900/50 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={howRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">SO FUNKTIONIERT ES</span>
              <h2 className="section-title">Einfach & sicher</h2>
            </div>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Bestellen & abholen', desc: 'Kommen Sie in unseren Laden in Vaihingen oder bestellen Sie telefonisch. Wir richten den Hasi Safe Stick individuell für Sie ein.' },
                { step: '02', title: 'Einrichtung & Einweisung', desc: 'Unser Team richtet VeraCrypt und KeePass ein, erklärt die Bedienung und hilft beim Import vorhandener Passwörter.' },
                { step: '03', title: 'Passwörter übertragen', desc: 'Alle Ihre Passwörter werden sicher in KeePass übertragen und verschlüsselt auf dem Stick gespeichert.' },
                { step: '04', title: 'Sicher nutzen', desc: 'Stecken Sie den Stick ein, entsperren Sie ihn mit Ihrem Master-Passwort und greifen Sie sicher auf alle Passwörter zu.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center text-accent font-black text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">FÜR WEN GEEIGNET?</span>
          <h2 className="section-title mb-8">Der Hasi Safe Stick ist ideal für</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '👨‍💼', title: 'Privatpersonen', desc: 'Sicher alle Online-Konten verwalten – Banking, E-Mail, Shopping und mehr.' },
              { emoji: '🏢', title: 'Selbstständige', desc: 'Sensible Kundendaten und Zugänge professionell sichern.' },
              { emoji: '👴', title: 'Senioren', desc: 'Einfach zu bedienen mit persönlicher Einweisung – kein technisches Vorwissen nötig.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Sichern Sie Ihre Passwörter noch heute</h2>
          <p className="text-blue-200 mb-10 text-lg">ab 59€ – einmalige Kosten, lebenslange Sicherheit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <CheckCircle size={18} />
              Jetzt bestellen
            </Link>
            <a href="tel:+4907042163916" className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone size={18} />
              07042 16391
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
