import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock, Car, Train, Send, CheckCircle } from 'lucide-react';

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

export default function Kontakt() {
  const heroRef = useReveal();
  const cardsRef = useReveal();
  const formRef = useReveal();

  const [formData, setFormData] = useState({ vorname: '', nachname: '', email: '', nachricht: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/xpwzygqn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          vorname: formData.vorname,
          nachname: formData.nachname,
          email: formData.email,
          nachricht: formData.nachricht,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  };

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
          <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">WIR SIND FÜR SIE DA</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Kontaktieren Sie<br />
            <span className="text-accent">Ihren IT-Experten</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Wir sind persönlich, telefonisch und per E-Mail für Sie erreichbar.
            Besuchen Sie uns in Vaihingen an der Enz – kostenlose Parkplätze vorhanden!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01 Adresse */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-black">01</div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">Adresse</span>
              </div>
              <div className="text-white/60 mb-3">
                <MapPin size={32} className="text-accent" />
              </div>
              <p className="text-white font-semibold">Grabenstraße 18</p>
              <p className="text-gray-400">71665 Vaihingen an der Enz</p>
              <p className="text-gray-500 text-xs mt-2">Eingang über Heilbronner Straße</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Car size={12} className="text-accent" />
                  Kostenlose Parkplätze direkt vor dem Laden
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Train size={12} className="text-accent" />
                  Vom Bahnhof ca. 10 Min. zu Fuß
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <MapPin size={12} className="text-accent" />
                  B10 Ausfahrt Vaihingen-Mitte
                </div>
              </div>
            </div>

            {/* 02 Telefon */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-black">02</div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">Telefon</span>
              </div>
              <div className="mb-3">
                <Phone size={32} className="text-accent" />
              </div>
              <a href="tel:+4907042163916" className="text-white font-semibold hover:text-accent transition-colors block">
                07042 16391
              </a>
              <a href="tel:+4901601236060" className="text-gray-400 hover:text-accent transition-colors block">
                0160 1236060
              </a>
              <p className="text-gray-500 text-xs mt-2">Auch WhatsApp möglich</p>
              <div className="mt-4">
                <Clock size={14} className="text-accent inline mr-2" />
                <span className="text-gray-500 text-xs">Mo, Di, Do, Fr: 09–13 & 15:30–18 Uhr</span>
              </div>
              <p className="text-gray-500 text-xs">Sa: 10–13 Uhr | Mi: Geschlossen</p>
            </div>

            {/* 03 E-Mail */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-black">03</div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">E-Mail</span>
              </div>
              <div className="mb-3">
                <Mail size={32} className="text-accent" />
              </div>
              <a
                href="mailto:info@hasi-elektronic.de"
                className="text-white font-semibold hover:text-accent transition-colors break-all"
              >
                info@hasi-elektronic.de
              </a>
              <p className="text-gray-400 text-sm mt-2">www.hasi-elektronic.de</p>
              <p className="text-gray-500 text-xs mt-4">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
            </div>

            {/* 04 Social Media */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-black">04</div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">Social Media</span>
              </div>
              <div className="mb-4 space-y-4">
                {[
                  { icon: <Instagram size={24} />, name: 'Instagram', handle: '@hasielectronic' },
                  { icon: <Facebook size={24} />, name: 'Facebook', handle: 'Hasi Elektronic' },
                  { icon: <Twitter size={24} />, name: 'Twitter/X', handle: '@hasielectronic' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-800 hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{social.name}</div>
                      <div className="text-gray-500 text-xs">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={formRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <span className="section-label">KONTAKTFORMULAR</span>
              <h2 className="section-title mb-8">Schreiben Sie uns</h2>

              {submitted ? (
                <div className="card p-8 text-center">
                  <CheckCircle size={48} className="text-success mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Nachricht gesendet!</h3>
                  <p className="text-gray-400">
                    Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { id: 'vorname', label: 'Vorname *', placeholder: 'Max' },
                      { id: 'nachname', label: 'Nachname *', placeholder: 'Müller' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-gray-400 text-sm mb-2">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type="text"
                          required
                          placeholder={field.placeholder}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">E-Mail *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachricht" className="block text-gray-400 text-sm mb-2">Nachricht *</label>
                    <textarea
                      id="nachricht"
                      required
                      rows={6}
                      placeholder="Wie können wir Ihnen helfen?"
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Nachricht senden
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="text-danger text-sm text-center bg-danger/10 border border-danger/20 rounded-xl px-4 py-3">
                      Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                    </p>
                  )}
                  <p className="text-gray-600 text-xs text-center">
                    Ihre Daten werden gemäß unserer{' '}
                    <a href="/datenschutzerklaerung" className="text-accent hover:underline">Datenschutzerklärung</a>
                    {' '}verarbeitet.
                  </p>
                </form>
              )}
            </div>

            {/* Map placeholder + Opening hours */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div className="w-full h-72 rounded-2xl overflow-hidden relative">
                <iframe
                  title="Hasi Elektronic Standort"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Grabenstra%C3%9Fe+18%2C+71665+Vaihingen+an+der+Enz&output=embed&hl=de&z=16"
                />
                <a
                  href="https://maps.google.com/?q=Grabenstraße+18,71665+Vaihingen+an+der+Enz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 btn-primary text-xs py-2"
                >
                  <MapPin size={12} />
                  In Google Maps öffnen
                </a>
              </div>

              {/* Opening hours */}
              <div className="card p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-accent" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-3">
                  {[
                    { days: 'Montag', hours: '09:00–13:00 & 15:30–18:00' },
                    { days: 'Dienstag', hours: '09:00–13:00 & 15:30–18:00' },
                    { days: 'Mittwoch', hours: 'Geschlossen', closed: true },
                    { days: 'Donnerstag', hours: '09:00–13:00 & 15:30–18:00' },
                    { days: 'Freitag', hours: '09:00–13:00 & 15:30–18:00' },
                    { days: 'Samstag', hours: '10:00–13:00' },
                    { days: 'Sonntag', hours: 'Geschlossen', closed: true },
                  ].map((item) => (
                    <div key={item.days} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{item.days}</span>
                      <span className={`text-sm font-medium ${item.closed ? 'text-gray-600' : 'text-white'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
