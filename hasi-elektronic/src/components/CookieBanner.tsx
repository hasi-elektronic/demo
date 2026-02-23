import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-600 rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-shrink-0">
            <Cookie size={32} className="text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm mb-1">Cookie-Einstellungen</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
              Funktionale Cookies sind notwendig für den Betrieb der Website.{' '}
              <Link to="/datenschutzerklaerung" className="text-accent underline hover:text-accent-light">
                Datenschutzerklärung
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-xs font-medium text-gray-400 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-gray-200 transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-xs font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-colors"
            >
              Akzeptieren
            </button>
          </div>
          <button
            onClick={decline}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 md:static"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
