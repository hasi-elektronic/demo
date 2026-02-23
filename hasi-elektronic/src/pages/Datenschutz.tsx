export default function Datenschutz() {
  return (
    <div>
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">RECHTLICHES</span>
          <h1 className="section-title mb-2">Datenschutzerklärung</h1>
          <p className="text-gray-500 text-sm mb-8">Stand: Februar 2026</p>

          <div className="card p-8 space-y-8 text-gray-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-lg mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-gray-300 font-semibold mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-gray-300 font-semibold mb-2">Datenschutz</h3>
              <p className="mb-3">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
              <h3 className="text-gray-300 font-semibold mb-2 mt-4">Verantwortliche Stelle</h3>
              <p>Hasi Elektronic<br />Inhaber: Hamdi Güncavdi<br />Grabenstraße 18<br />71665 Vaihingen an der Enz</p>
              <p className="mt-2">Telefon: 07042 16391<br />E-Mail: info@hasi-elektronic.de</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-gray-300 font-semibold mb-2">Cookies</h3>
              <p className="mb-3">
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
                Endgerät speichert. Cookies helfen uns, unser Angebot nutzerfreundlicher, effektiver und sicherer
                zu machen. Wir verwenden ausschließlich technisch notwendige Cookies, sofern Sie nicht ausdrücklich
                weiteren Cookies zustimmen.
              </p>
              <h3 className="text-gray-300 font-semibold mb-2 mt-4">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">4. Ihre Rechte</h2>
              <p className="mb-3">Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@hasi-elektronic.de
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">5. Hosting</h2>
              <p>
                Diese Website wird bei einem deutschen Webhosting-Anbieter gehostet. Der Hoster verarbeitet
                Daten ausschließlich auf deutschen Servern in der EU/EWR und ist nach DSGVO-Standards zertifiziert.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">6. Hasi Cloud – Besondere Datenschutzhinweise</h2>
              <p>
                Für Nutzer der Hasi Cloud (Nextcloud) gilt: Alle Daten werden ausschließlich auf Servern in
                Deutschland (Falkenstein) gespeichert. Es werden keine Daten an Dritte weitergegeben.
                Mit Geschäftskunden wird ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">7. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
                Die zuständige Aufsichtsbehörde ist der Landesbeauftragte für Datenschutz und Informationsfreiheit
                Baden-Württemberg.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
