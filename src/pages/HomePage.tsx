import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFamilyByPin } from "../api";
import { SiteFooter } from "../components/SiteFooter";

export function HomePage() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const cleaned = pin.trim();
    if (!cleaned) {
      setError("Enter the PIN from the funeral home.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await fetchFamilyByPin(cleaned);
      navigate(`/status?pin=${encodeURIComponent(cleaned)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lookup failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Cremation Tracker</p>
        <h1>Follow your loved one’s care</h1>
        <p className="lede">
          Enter the PIN from the funeral home to see where things stand. No app
          download needed.
        </p>
        <form className="pin-form" onSubmit={onSubmit}>
          <label htmlFor="pin">Case PIN</label>
          <input
            id="pin"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="6-digit PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          {error ? <p className="error">{error}</p> : null}
          <button type="submit" disabled={busy}>
            {busy ? "Checking…" : "View status"}
          </button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
