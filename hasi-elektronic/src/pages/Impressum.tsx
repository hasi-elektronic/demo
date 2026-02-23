export default function Impressum() {
  return (
    <div>
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">RECHTLICHES</span>
          <h1 className="section-title mb-8">Impressum</h1>

          <div className="card p-8 space-y-8 text-gray-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
              <p>Hasi Elektronic</p>
              <p>Inhaber: Hamdi Güncavdi</p>
              <p>Grabenstraße 18</p>
              <p>71665 Vaihingen an der Enz</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Kontakt</h2>
              <p>Telefon: 07042 16391</p>
              <p>Mobil: 0160 1236060</p>
              <p>E-Mail: info@hasi-elektronic.de</p>
              <p>Website: www.hasi-elektronic.de</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: Auf Anfrage erhältlich.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>IT-Dienstleistungen und Elektrotechnik</p>
              <p>Berufsbezeichnung: Elektronikhändler / IT-Dienstleister</p>
              <p>Zuständige Kammer: IHK Bezirkskammer Ludwigsburg</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
