import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";

export function PrivacyPage() {
  return (
    <main className="page legal-page">
      <p className="eyebrow">Cremation Tracker</p>
      <h1>Privacy</h1>
      <p className="legal-banner">Placeholder — replace with lawyer-approved privacy policy before public launch.</p>
      <div className="legal-body">
        <p>
          This family status site shows limited cremation progress information
          using a PIN or link provided by your funeral home. It does not collect
          account passwords.
        </p>
        <p>
          Status requests are processed by the Cremation Tracker API. Access may
          be logged for security and support. Contact your funeral home for
          questions about personal information they hold.
        </p>
        <p>
          Do not share your PIN or status link publicly. Anyone with the link or
          PIN can view the same progress information.
        </p>
      </div>
      <p>
        <Link to="/">Back to status lookup</Link>
      </p>
      <SiteFooter />
    </main>
  );
}
