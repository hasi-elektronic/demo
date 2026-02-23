import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Startseite from './pages/Startseite';
import UeberUns from './pages/UeberUns';
import Dienstleistungen from './pages/Dienstleistungen';
import DigitalHausmeister from './pages/DigitalHausmeister';
import Cloud from './pages/Cloud';
import Kontakt from './pages/Kontakt';
import ITRatgeber from './pages/ITRatgeber';
import Support from './pages/Support';
import HasiSafeStick from './pages/HasiSafeStick';
import HasiCareSupport from './pages/HasiCareSupport';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGBs from './pages/AGBs';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-accent/20 mb-4">404</div>
      <h1 className="text-3xl font-black text-white mb-4">Seite nicht gefunden</h1>
      <p className="text-gray-400 mb-8">Die gesuchte Seite existiert leider nicht.</p>
      <a href="/" className="btn-primary">Zur Startseite</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Startseite />} />
          <Route path="ueber-uns" element={<UeberUns />} />
          <Route path="dienstleistungen" element={<Dienstleistungen />} />
          <Route path="digital-hausmeister" element={<DigitalHausmeister />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="it-ratgeber" element={<ITRatgeber />} />
          <Route path="support" element={<Support />} />
          <Route path="hasi-safe-stick" element={<HasiSafeStick />} />
          <Route path="hasi-care-support" element={<HasiCareSupport />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutzerklaerung" element={<Datenschutz />} />
          <Route path="agbs" element={<AGBs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
