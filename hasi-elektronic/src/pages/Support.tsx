import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Phone, Mail, Download, CheckCircle, AlertTriangle, Zap, ChevronDown } from 'lucide-react';

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

const faqItems = [
  { q: 'Mein PC startet nicht mehr – was tun?', a: 'Trennen Sie zunächst alle externen Geräte (USB-Sticks, externe Festplatten). Drücken Sie den Power-Button und halten Sie ihn 10 Sekunden gedrückt. Starten Sie dann neu. Wenn das Problem anhält, rufen Sie uns an: 07042 16391.' },
  { q: 'Wie installiere ich AnyDesk für den Remote-Support?', a: 'Laden Sie AnyDesk von anydesk.com herunter. Führen Sie die Installation durch und teilen Sie uns Ihre 9-stellige AnyDesk-ID mit. Wir können dann mit Ihrer Erlaubnis auf Ihren Computer zugreifen und helfen.' },
  { q: 'Mein Internet ist plötzlich sehr langsam – warum?', a: 'Starten Sie zunächst Ihren Router neu (10 Sekunden ausschalten, dann wieder einschalten). Prüfen Sie, ob das Problem bei WLAN oder LAN-Kabel auftritt. Oft helfen auch: anderen Browser testen, Cache leeren, Antivirus-Scan durchführen.' },
  { q: 'Ich habe einen Virus auf dem PC – was jetzt?', a: 'Trennen Sie sofort die Internetverbindung (WLAN ausschalten oder LAN-Kabel ziehen). Rufen Sie uns an unter 07042 16391. Versuchen Sie nicht, selbst zu "reparieren", da dies Daten beschädigen kann. Wir helfen schnell.' },
  { q: 'Wie kann ich meine Daten sichern?', a: 'Die einfachste Methode: Eine externe Festplatte und Windows-Backup (Einstellungen → Update & Sicherheit → Sicherung). Wir empfehlen die 3-2-1-Regel: 3 Kopien, auf 2 verschiedenen Medien, 1 außerhaus. Gerne richten wir das für Sie ein.' },
  { q: 'Kann ich auch bei kleinen Problemen kommen?', a: 'Ja, absolut! Auch für kleine Fragen sind Sie bei uns willkommen. Oft können wir schnell helfen. Alternativ können wir viele Probleme auch per Telefon oder Fernwartung lösen.' },
];

export default function Support() {
  const [open, setOpen] = useState<number | null>(null);
  const heroRef = useReveal();
  const remoteSupportRef = useReveal();
  const faqRef = useReveal();

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
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">SUPPORT</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Schnelle Hilfe –<br />
            <span className="text-accent">auch aus der Ferne</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Ob per Telefon, Remote-Support oder persönlich im Laden – wir sind für Sie da.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4907042163916" className="btn-primary text-base px-8 py-4">
              <Phone size={18} />
              07042 16391 anrufen
            </a>
            <a href="mailto:info@hasi-elektronic.de" className="btn-outline text-base px-8 py-4">
              <Mail size={18} />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>

      {/* Notfall Banner */}
      <section className="py-6 bg-danger/10 border-y border-danger/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle size={24} className="text-danger flex-shrink-0" />
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Notfall?</strong> Bei kritischen IT-Problemen (Datenverlust, Virus, Serverausfall) sofort:{' '}
              <a href="tel:+4907042163916" className="text-danger font-bold hover:underline">07042 16391</a>
              {' '}oder{' '}
              <a href="tel:+4901601236060" className="text-danger font-bold hover:underline">0160 1236060</a>
            </p>
          </div>
        </div>
      </section>

      {/* Remote Support */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={remoteSupportRef} className="reveal">
            <div className="text-center mb-12">
              <span className="section-label">REMOTE-SUPPORT</span>
              <h2 className="section-title">Hilfe aus der Ferne via AnyDesk</h2>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
                Wir nutzen AnyDesk für sicheren Fernzugriff. Sie haben jederzeit die volle Kontrolle –
                der Zugriff funktioniert nur mit Ihrer aktiven Zustimmung.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card p-8">
                <Monitor size={40} className="text-accent mb-4" />
                <h3 className="text-white font-bold text-xl mb-6">So funktioniert Remote-Support</h3>
                <ol className="space-y-4">
                  {[
                    'AnyDesk herunterladen & starten',
                    'Uns unter 07042 16391 anrufen',
                    'Ihre 9-stellige AnyDesk-ID mitteilen',
                    'Verbindungsanfrage auf Ihrem Bildschirm bestätigen',
                    'Wir lösen das Problem – Sie sehen alles live',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-400 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card p-8">
                <Zap size={40} className="text-success mb-4" />
                <h3 className="text-white font-bold text-xl mb-4">AnyDesk herunterladen</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Laden Sie AnyDesk kostenlos herunter. Das Programm läuft auch ohne Installation (portable).
                  Nach der Support-Sitzung können Sie es wieder deinstallieren.
                </p>
                <a
                  href="https://anydesk.com/de/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center mb-4"
                >
                  <Download size={18} />
                  AnyDesk herunterladen
                </a>
                <p className="text-gray-600 text-xs text-center mb-4">Direkt von anydesk.com – sicher & offiziell</p>
                <div className="space-y-2">
                  {['Sicher & Ende-zu-Ende-verschlüsselt', 'Nur aktiv bei Ihrer Erlaubnis', 'Sie sehen jeden Mausklick'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-gray-500 text-xs">
                      <CheckCircle size={12} className="text-success" />
                      {f}
                    </div>
                  ))}
                </div>
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
              <span className="section-label">HÄUFIGE FRAGEN</span>
              <h2 className="section-title">Selbsthilfe-Tipps</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold pr-4 text-sm">{faq.q}</span>
                    <ChevronDown size={18} className={`text-accent flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gray-700 mb-4" />
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Nicht gefunden? Wir helfen direkt!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+4907042163916" className="card p-6 text-center hover:border-accent transition-all group">
              <Phone size={32} className="text-accent mx-auto mb-3" />
              <div className="text-white font-bold">Anrufen</div>
              <div className="text-gray-400 text-sm mt-1">07042 16391</div>
            </a>
            <a href="mailto:info@hasi-elektronic.de" className="card p-6 text-center hover:border-accent transition-all group">
              <Mail size={32} className="text-accent mx-auto mb-3" />
              <div className="text-white font-bold">E-Mail</div>
              <div className="text-gray-400 text-sm mt-1">info@hasi-elektronic.de</div>
            </a>
            <Link to="/kontakt" className="card p-6 text-center hover:border-accent transition-all group">
              <Monitor size={32} className="text-accent mx-auto mb-3" />
              <div className="text-white font-bold">Persönlich</div>
              <div className="text-gray-400 text-sm mt-1">Grabenstr. 18, Vaihingen</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
