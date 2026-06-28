import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz | Elbland Umzüge Torgau",
  description: "Datenschutzerklärung von Elbland Umzüge – Nico Berner aus Torgau.",
  alternates: { canonical: "/datenschutz" },
};

const h2: React.CSSProperties = {
  fontSize: "clamp(19px,2.4cqw,23px)",
  fontWeight: 800,
  color: "var(--ink)",
  margin: "28px 0 8px",
};
const ul: React.CSSProperties = { paddingLeft: "1.3em", margin: "0 0 10px" };
const li: React.CSSProperties = { margin: "4px 0" };
const link: React.CSSProperties = { color: "var(--gold-dark)", textDecoration: "none", fontWeight: 700 };
const stand: React.CSSProperties = { background: "var(--cream-card)", color: "#7a6a45", padding: "1px 6px", borderRadius: 5, fontWeight: 700 };

export default function DatenschutzPage() {
  return (
    <section style={{ padding: "clamp(30px,5cqw,64px) clamp(18px,4cqw,56px) clamp(36px,5cqw,72px)", maxWidth: 820, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "clamp(30px,5cqw,48px)", fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 8px" }}>
        Datenschutzerklärung
      </h1>
      <p style={{ fontSize: 14, color: "var(--muted)", fontWeight: 700, margin: "0 0 28px" }}>
        Stand: <span style={stand}>[Monat/Jahr eintragen, z. B. Juni 2026]</span>
      </p>

      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 22, padding: "clamp(24px,3cqw,40px)", fontSize: 16, color: "var(--body-text)", lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie gemäß der Datenschutz-Grundverordnung (DSGVO) über die Verarbeitung personenbezogener Daten im Zusammenhang mit dem Besuch dieser Website.
        </p>

        <h2 style={h2}>1. Verantwortlicher</h2>
        <p style={{ margin: "0 0 10px" }}>Verantwortlicher im Sinne der DSGVO ist:</p>
        <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
          {site.owner} – {site.name}
          <br />
          {site.street}
          <br />
          {site.zipCity}
          <br />
          Deutschland
          <br />
          <br />
          E-Mail: <a href={site.emailHref} style={link}>{site.email}</a>
          <br />
          Telefon: <a href={site.phoneHref} style={link}>{site.phoneDisplay}</a>
        </address>

        <h2 style={h2}>2. Allgemeines zur Datenverarbeitung</h2>
        <p style={{ margin: "0 0 10px" }}>
          Diese Website ist eine rein statische Website. Es werden keine Cookies gesetzt, es kommen keine Analyse- oder Tracking-Tools zum Einsatz, und es werden keine Inhalte von Drittanbietern (z. B. externe Schriften, Karten oder Videos) nachgeladen. Es stehen weder ein Kontaktformular noch ein Newsletter oder ein Nutzerkonto zur Verfügung.
        </p>
        <p style={{ margin: 0 }}>
          Eine darüber hinausgehende aktive Erhebung personenbezogener Daten durch uns findet beim Besuch der Website nicht statt. Technisch bedingt werden lediglich die unter Punkt 3 beschriebenen Server-Zugriffsdaten durch unseren Hosting-Anbieter verarbeitet.
        </p>

        <h2 style={h2}>3. Hosting und Server-Logfiles</h2>
        <p style={{ margin: "0 0 10px" }}>
          Diese Website wird bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. Beim Aufruf der Website erhebt und speichert der Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind in der Regel:
        </p>
        <ul style={ul}>
          <li style={li}>die IP-Adresse des zugreifenden Geräts</li>
          <li style={li}>Datum und Uhrzeit des Zugriffs</li>
          <li style={li}>Name und URL der abgerufenen Datei</li>
          <li style={li}>die übertragene Datenmenge</li>
          <li style={li}>Meldung über erfolgreichen Abruf (Statuscode)</li>
          <li style={li}>die zuvor besuchte Seite (Referrer-URL), sofern übermittelt</li>
          <li style={li}>verwendeter Browsertyp und ggf. das Betriebssystem</li>
        </ul>
        <p style={{ margin: "0 0 10px" }}>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der technisch fehlerfreien Bereitstellung, der Stabilität und der Sicherheit der Website. Eine Zusammenführung dieser Daten mit anderen Datenquellen oder eine Auswertung zu Marketing- oder Tracking-Zwecken findet durch uns nicht statt.
        </p>
        <p style={{ margin: 0 }}>
          Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO, der die datenschutzkonforme Verarbeitung der Daten sicherstellt.
        </p>

        <h2 style={h2}>4. SSL-/TLS-Verschlüsselung</h2>
        <p style={{ margin: 0 }}>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://&quot; auf „https://&quot; wechselt und am Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h2 style={h2}>5. Speicherdauer</h2>
        <p style={{ margin: 0 }}>
          Soweit innerhalb dieser Erklärung keine speziellere Speicherdauer genannt wird, werden personenbezogene Daten gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Die Speicherdauer der Server-Logfiles richtet sich nach den Vorgaben des Hosting-Anbieters.
        </p>

        <h2 style={h2}>6. Ihre Rechte als betroffene Person</h2>
        <p style={{ margin: "0 0 10px" }}>Ihnen stehen hinsichtlich der Sie betreffenden personenbezogenen Daten folgende Rechte zu:</p>
        <ul style={ul}>
          <li style={li}>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li style={li}>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li style={li}>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li style={li}>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li style={li}>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li style={li}>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p style={{ margin: 0 }}>Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an den oben genannten Verantwortlichen.</p>

        <h2 style={h2}>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p style={{ margin: "0 0 10px" }}>
          Unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe steht Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Da der Verantwortliche seinen Sitz in Sachsen hat, ist insoweit zuständig:
        </p>
        <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
          Die Sächsische Datenschutz- und Transparenzbeauftragte
          <br />
          Devrientstraße 1
          <br />
          01067 Dresden
          <br />
          Deutschland
        </address>

        <h2 style={h2}>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p style={{ margin: "0 0 10px" }}>
          Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
        </p>
        <p style={{ margin: 0 }}>
          <em>
            Stand: <span style={stand}>Juni 2026]</span>
          </em>
        </p>
      </div>
    </section>
  );
}
