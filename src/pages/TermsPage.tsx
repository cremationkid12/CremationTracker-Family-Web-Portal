import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";

export function TermsPage() {
  return (
    <main className="page legal-page">
      <p className="eyebrow">Cremation Tracker</p>
      <h1>Terms</h1>
      <p className="legal-banner">Placeholder — replace with lawyer-approved terms before public launch.</p>
      <div className="legal-body">
        <p>
          This website provides read-only progress information for a cremation
          case. It is not legal advice, medical advice, or a substitute for
          speaking with your funeral home.
        </p>
        <p>
          Status steps and labels may be incomplete or delayed. Your funeral home
          remains your point of contact for arrangements, documents, and remains.
        </p>
        <p>
          Cremation Tracker and participating organizations may update or revoke
          access to a status link or PIN when appropriate for security or case
          completion.
        </p>
      </div>
      <p>
        <Link to="/">Back to status lookup</Link>
      </p>
      <SiteFooter />
    </main>
  );
}
