import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Users, Smartphone, Share2, RefreshCw, Phone as PhoneIcon,
  Calendar, Video, Globe, CheckCircle, X, ChevronDown, AlertTriangle, Cloud as CloudIcon
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

const features = [
  { icon: <Shield size={24} />, title: 'DSGVO-konform', desc: 'Deutsche Rechenzentren, AV-Vertrag nach Art. 28 DSGVO – Ihre Daten bleiben in Deutschland.' },
  { icon: <Users size={24} />, title: 'Unbegrenzte Benutzer', desc: 'Beliebig viele Benutzer in übersichtlichen Gruppen – perfekt für Teams jeder Größe.' },
  { icon: <Smartphone size={24} />, title: 'Mobile Apps', desc: 'iOS, Android, Windows, Mac & Linux – zugreifen von überall, auf jedem Gerät.' },
  { icon: <Share2 size={24} />, title: 'Einfaches Teilen', desc: 'Links mit Passwortschutz und Ablaufdatum – sicheres Teilen mit Partnern und Kunden.' },
  { icon: <RefreshCw size={24} />, title: 'Automatische Backups', desc: 'Mehrmals täglich gesichert, Versionierung enthalten – nie wieder Daten verlieren.' },
  { icon: <PhoneIcon size={24} />, title: 'Persönlicher Support', desc: 'Telefon, E-Mail und Vor-Ort – wir sind für Sie da, wenn Sie Hilfe brauchen.' },
  { icon: <Calendar size={24} />, title: 'Kalender & Kontakte', desc: 'Integrierter Kalender & Kontakte-Sync auf allen Geräten – wie iCloud, aber DSGVO-konform.' },
  { icon: <Video size={24} />, title: 'Nextcloud Talk', desc: 'Sichere Videoanrufe & Chat direkt in Ihrer Cloud – ohne Drittanbieter.' },
  { icon: <Globe size={24} />, title: 'Eigene Domain', desc: 'cloud.ihre-firma.de möglich – professioneller Auftritt mit Ihrer eigenen Adresse.' },
];

const pricing = [
  {
    name: 'Starter',
    price: '9,90€',
    setup: '49€',
    storage: '100 GB',
    users: '3 Benutzer',
    popular: false,
    features: ['E-Mail-Support', 'Automatische Backups', 'Mobile Apps', 'Basis-Kalender', 'SSL-Verschlüsselung'],
  },
  {
    name: 'Business',
    price: '29,90€',
    setup: '99€',
    storage: '500 GB',
    users: '10 Benutzer',
    popular: true,
    features: ['Alles aus Starter', 'Telefon-Support', 'Eigene Domain möglich', 'Kalender & Kontakte', 'Nextcloud Office', 'Erweiterte Sharing-Optionen'],
  },
  {
    name: 'Professional',
    price: '59,90€',
    setup: '199€',
    storage: '1 TB',
    users: '25 Benutzer',
    popular: false,
    features: ['Alles aus Business', 'Premium-Support', 'Nextcloud Talk (Video)', '2h Einrichtungsschulung', 'Benutzerverwaltung', 'API-Zugang'],
  },
  {
    name: 'Enterprise',
    price: '149€',
    setup: '399€',
    storage: '5 TB',
    users: 'Unbegrenzt',
    popular: false,
    features: ['Alles aus Professional', 'SLA-Garantie', '4h Schulung', 'Quartals-Check', 'Custom Branding', 'LDAP-Integration', 'Dedizierter Server möglich'],
  },
];

const comparison = [
  { feature: 'Server-Standort', hasi: 'Deutschland', google: 'USA', dropbox: 'USA', onedrive: 'USA' },
  { feature: 'DSGVO-konform', hasi: true, google: 'warn', dropbox: 'warn', onedrive: 'warn' },
  { feature: 'Persönlicher Support', hasi: 'Lokal vor Ort', google: false, dropbox: false, onedrive: false },
  { feature: 'Daten-Analyse', hasi: 'Nein', google: 'Ja', dropbox: 'Ja', onedrive: 'Ja' },
  { feature: 'Open Source', hasi: true, google: false, dropbox: false, onedrive: false },
  { feature: 'Eigene Domain', hasi: 'Inklusive', google: 'Nur Business', dropbox: 'Nur Business', onedrive: false },
  { feature: 'AV-Vertrag', hasi: true, google: 'warn', dropbox: 'warn', onedrive: 'warn' },
];

const faqs = [
  { q: 'Was ist Nextcloud?', a: 'Nextcloud ist eine führende Open-Source-Software für private Cloud-Lösungen. Wir betreiben Nextcloud auf deutschen Servern, damit Ihre Daten sicher und DSGVO-konform gespeichert werden – ohne amerikanische Tech-Konzerne.' },
  { q: 'Wo werden meine Daten gespeichert?', a: 'Ausschließlich in Falkenstein, Deutschland. Kein Zugriff durch Dritte, keine Daten-Analyse, kein Weiterverkauf Ihrer Informationen.' },
  { q: 'Kann ich die Cloud auch mobil nutzen?', a: 'Ja! Es gibt offizielle Nextcloud-Apps für iOS, Android, Windows, Mac und Linux. So haben Sie Ihre Dateien immer dabei.' },
  { q: 'Wie sicher sind meine Daten?', a: 'Alle Übertragungen sind SSL/TLS-verschlüsselt. Die Server nutzen RAID-Systeme für Ausfallsicherheit. Keine Werbung, keine Daten-Analyse – Ihre Daten gehören nur Ihnen.' },
  { q: 'Kann ich das Paket wechseln?', a: 'Jederzeit! Sie können jederzeit upgraden oder downgraden. Die Kündigung ist monatlich möglich.' },
  { q: 'Gibt es Schulungen?', a: 'Im Professional- und Enterprise-Paket sind Schulungen inklusive. Bei anderen Paketen können Schulungen für 49€ pro Person gebucht werden.' },
];

function CellValue({ value }: { value: string | boolean | undefined }) {
  if (value === true) return <CheckCircle size={18} className="text-success mx-auto" />;
  if (value === false) return <X size={18} className="text-danger mx-auto" />;
  if (value === 'warn') return <AlertTriangle size={18} className="text-warning mx-auto" />;
  return <span className="text-gray-300 text-sm">{value}</span>;
}

export default function Cloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useReveal();
  const featuresRef = useReveal();
  const pricingRef = useReveal();
  const compRef = useReveal();
  const faqRef = useReveal();

  return (
    <div className="font-jakarta">
      {/* Hero with animated background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 animate-grid-move"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Floating shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-float" />
        </div>

        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full text-sm text-accent mb-8">
                🇩🇪 DSGVO-konform · Server in Deutschland
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Sichere Cloud-Lösungen<br />
                <span className="text-accent">für Ihr Unternehmen</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Mit Hasi Cloud speichern und teilen Sie Ihre Daten sicher –
                ohne amerikanische Tech-Giganten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#pakete" className="btn-primary text-base px-8 py-4">
                  Pakete ansehen
                  <CloudIcon size={18} />
                </a>
                <Link to="/kontakt" className="btn-outline text-base px-8 py-4">
                  Beratung anfordern
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> 14 Tage kostenlos testen</span>
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> Keine Kreditkarte nötig</span>
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> Monatlich kündbar</span>
              </div>
            </div>

            {/* Hero Card */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <CloudIcon size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Hasi Cloud</div>
                  <div className="text-gray-500 text-sm">Powered by Nextcloud</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: '100% DSGVO-konform', color: 'text-success' },
                  { label: 'Server in Deutschland (Falkenstein)', color: 'text-success' },
                  { label: '24/7 Verfügbarkeit', color: 'text-success' },
                  { label: 'Kein Datenmissbrauch', color: 'text-success' },
                  { label: 'Persönlicher Support', color: 'text-success' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <CheckCircle size={16} className={item.color} />
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '100%', label: 'DSGVO' },
                  { value: 'DE', label: 'Server' },
                  { value: '99.9%', label: 'Uptime' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-accent font-black text-xl">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuresRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">FUNKTIONEN</span>
              <h2 className="section-title">Alles was Sie brauchen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="card p-6 group">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pakete" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">PREISE</span>
              <h2 className="section-title">Das passende Cloud-Paket</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative card p-6 flex flex-col ${plan.popular ? 'border-accent ring-2 ring-accent/30' : ''}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                      BELIEBT
                    </span>
                  )}
                  <div className="mb-4">
                    <h3 className="text-white font-black text-xl mb-1">{plan.name}</h3>
                    <div className="text-accent font-bold text-2xl">{plan.price}<span className="text-sm font-normal text-gray-500">/Monat</span></div>
                    <div className="text-gray-600 text-xs">Einrichtung: {plan.setup}</div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">{plan.storage}</span>
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">{plan.users}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle size={13} className="text-success mt-0.5 flex-shrink-0" />
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
                    Jetzt starten
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={compRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">VERGLEICH</span>
              <h2 className="section-title">Hasi Cloud vs. Alternativen</h2>
            </div>
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-4 text-gray-400 font-medium text-sm w-40">Kriterium</th>
                      <th className="p-4 text-center">
                        <span className="text-accent font-bold">Hasi Cloud</span>
                      </th>
                      <th className="p-4 text-center text-gray-500 text-sm">Google Drive</th>
                      <th className="p-4 text-center text-gray-500 text-sm">Dropbox</th>
                      <th className="p-4 text-center text-gray-500 text-sm">OneDrive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <tr key={i} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors">
                        <td className="p-4 text-gray-400 text-sm">{row.feature}</td>
                        <td className="p-4 text-center"><CellValue value={row.hasi} /></td>
                        <td className="p-4 text-center"><CellValue value={row.google} /></td>
                        <td className="p-4 text-center"><CellValue value={row.dropbox} /></td>
                        <td className="p-4 text-center"><CellValue value={row.onedrive} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-700 flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><CheckCircle size={12} className="text-success" /> Ja/Verfügbar</span>
                <span className="flex items-center gap-1"><X size={12} className="text-danger" /> Nein/Nicht verfügbar</span>
                <span className="flex items-center gap-1"><AlertTriangle size={12} className="text-warning" /> Eingeschränkt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Häufige Fragen</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gray-700 mb-4" />
                      <p className="text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full text-sm text-accent mb-6">
            🎉 14 Tage kostenlos testen!
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Bereit für sichere Cloud-Speicherung?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Starten Sie noch heute – keine Kreditkarte, keine Bindung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 text-center">
              <h3 className="text-white font-bold mb-4">Kostenlos starten</h3>
              <a
                href="mailto:info@hasi-elektronic.de?subject=Hasi Cloud Test-Account"
                className="btn-primary w-full justify-center"
              >
                <CloudIcon size={18} />
                Jetzt kostenlos starten
              </a>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-white font-bold mb-4">Rückruf anfordern</h3>
              <a href="tel:+4907042163916" className="btn-outline w-full justify-center">
                <PhoneIcon size={18} />
                07042 16391
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
