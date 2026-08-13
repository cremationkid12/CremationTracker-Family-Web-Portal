import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        Progress updates only. Contact your funeral home for arrangements or
        questions about remains.
      </p>
      <p className="footer-links">
        <Link to="/privacy">Privacy</Link>
        <span aria-hidden="true"> · </span>
        <Link to="/terms">Terms</Link>
      </p>
      <p className="footer-note legal-placeholder">
        Legal text is placeholder until counsel-approved copy is provided.
      </p>
    </footer>
  );
}
