import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-24 right-4 md:right-6 z-40 w-12 h-12 bg-accent hover:bg-accent-light text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 4px 15px rgba(59,130,246,0.4)' }}
    >
      <ChevronUp size={20} />
    </button>
  );
}
