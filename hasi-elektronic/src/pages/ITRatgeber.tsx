import { useEffect, useRef, useState } from 'react';
import { ChevronRight, Shield, Wifi, HardDrive, Monitor } from 'lucide-react';

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

const articles = [
  {
    category: 'Sicherheit',
    categoryColor: 'bg-danger/20 text-red-400',
    icon: <Shield size={20} />,
    title: 'So schützen Sie Ihren PC vor Viren und Malware',
    desc: 'Erfahren Sie, welche Schritte Sie unternehmen können, um Ihren Computer effektiv vor Bedrohungen zu schützen – von Antivirus-Software bis hin zu sicheren Surf-Gewohnheiten.',
    date: '15. Januar 2026',
    readTime: '5 Min. Lesezeit',
  },
  {
    category: 'Hardware',
    categoryColor: 'bg-accent/20 text-blue-400',
    icon: <Monitor size={20} />,
    title: 'Wann ist es Zeit für einen neuen PC? 7 Zeichen',
    desc: 'Ihr Computer wird langsamer, stürzt öfter ab oder kann neue Software nicht mehr ausführen? Wir zeigen, wann eine Neuanschaffung sinnvoll ist und welche Alternativen es gibt.',
    date: '8. Januar 2026',
    readTime: '4 Min. Lesezeit',
  },
  {
    category: 'Netzwerk',
    categoryColor: 'bg-success/20 text-green-400',
    icon: <Wifi size={20} />,
    title: 'WLAN optimieren: Mehr Geschwindigkeit im Heimnetz',
    desc: 'Langsames Internet, obwohl Sie schnelles WLAN haben? Diese Tipps helfen Ihnen, das Beste aus Ihrer Internetverbindung herauszuholen.',
    date: '2. Januar 2026',
    readTime: '6 Min. Lesezeit',
  },
  {
    category: 'Datensicherheit',
    categoryColor: 'bg-warning/20 text-yellow-400',
    icon: <HardDrive size={20} />,
    title: 'Backup-Strategie: So sichern Sie Ihre Daten richtig',
    desc: 'Datenverlust ist einer der häufigsten IT-Albträume. Mit der richtigen Backup-Strategie nach der 3-2-1-Regel sind Ihre Daten dauerhaft sicher.',
    date: '28. Dezember 2025',
    readTime: '7 Min. Lesezeit',
  },
  {
    category: 'Software',
    categoryColor: 'bg-purple-500/20 text-purple-400',
    icon: <Monitor size={20} />,
    title: 'Windows 11: Die wichtigsten Einstellungen für Einsteiger',
    desc: 'Windows 11 hat viele neue Funktionen und geänderte Einstellungen. Wir zeigen, was Sie als erstes konfigurieren sollten.',
    date: '20. Dezember 2025',
    readTime: '5 Min. Lesezeit',
  },
  {
    category: 'Sicherheit',
    categoryColor: 'bg-danger/20 text-red-400',
    icon: <Shield size={20} />,
    title: 'Sichere Passwörter: Warum der Hasi Safe Stick die Lösung ist',
    desc: 'Schwache Passwörter sind das größte Sicherheitsrisiko. Erfahren Sie, wie Sie mit dem Hasi Safe Stick alle Passwörter sicher verwalten können.',
    date: '15. Dezember 2025',
    readTime: '4 Min. Lesezeit',
  },
];

const categories = ['Alle', 'Sicherheit', 'Hardware', 'Software', 'Netzwerk', 'Datensicherheit'];

export default function ITRatgeber() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const heroRef = useReveal();
  const articlesRef = useReveal();

  const filteredArticles = activeCategory === 'Alle'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

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
          <span className="section-label">IT-RATGEBER</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Tipps & Wissen für<br />
            <span className="text-accent">Ihren digitalen Alltag</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Von IT-Sicherheit bis Hardware-Tipps – unser Expertenteam teilt sein Wissen
            aus über 38 Jahren IT-Erfahrung.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === activeCategory
                    ? 'bg-accent text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-accent/10 hover:text-accent border border-gray-600 hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={articlesRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-12">Keine Artikel in dieser Kategorie.</p>
            )}
            {filteredArticles.map((article, i) => (
              <article key={i} className="card flex flex-col group cursor-pointer">
                {/* Article image placeholder */}
                <div
                  className="h-48 rounded-t-xl relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1f2937 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-accent/30 scale-150">{article.icon}</div>
                  </div>
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-gray-500 text-xs mb-3">{article.date} · {article.readTime}</div>
                  <h2 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{article.desc}</p>
                  <button className="text-accent hover:text-accent-light text-sm font-semibold flex items-center gap-1 transition-colors">
                    Weiterlesen <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">IT-Tipps direkt in Ihr Postfach</h2>
          <p className="text-gray-400 mb-8">Abonnieren Sie unseren Newsletter für regelmäßige IT-Tipps und Neuigkeiten.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button className="btn-primary px-6 whitespace-nowrap">Anmelden</button>
          </div>
          <p className="text-gray-600 text-xs mt-3">Kein Spam. Jederzeit abmeldbar.</p>
        </div>
      </section>
    </div>
  );
}
