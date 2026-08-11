import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  fetchFamilyByPin,
  fetchFamilyByToken,
  type FamilyStatus,
} from "../api";

function formatWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function StatusPage() {
  const { token = "" } = useParams();
  const [params] = useSearchParams();
  const pin = params.get("pin") ?? "";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<FamilyStatus | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = token
          ? await fetchFamilyByToken(token)
          : await fetchFamilyByPin(pin);
        if (alive) setStatus(data);
      } catch (err) {
        if (alive) {
          setError(err instanceof Error ? err.message : "Unable to load status.");
        }
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [token, pin]);

  if (loading) {
    return (
      <main className="page">
        <p className="muted">Loading status…</p>
      </main>
    );
  }

  if (error || !status) {
    return (
      <main className="page">
        <p className="error">{error ?? "Status unavailable."}</p>
        <Link to="/">Try another PIN</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <p className="eyebrow">{status.funeral_home_name}</p>
      <h1>{status.decedent_display_name}</h1>
      <p className="lede">
        Current step: <strong>{status.current_step_label ?? "In progress"}</strong>
      </p>
      <ol className="timeline">
        {status.steps.map((step, index) => (
          <li key={`${step.recorded_at}-${index}`}>
            <div className="dot" aria-hidden />
            <div>
              <p className="step-label">{step.label}</p>
              <p className="muted">{formatWhen(step.recorded_at)}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="footer-note">
        This page shows progress only. For questions about arrangements, contact
        your funeral home.
      </p>
      <Link to="/">Check another PIN</Link>
    </main>
  );
}
