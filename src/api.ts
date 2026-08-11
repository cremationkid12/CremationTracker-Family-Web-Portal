const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ||
  "http://localhost:8020";

export type FamilyStatus = {
  decedent_display_name: string;
  funeral_home_name: string;
  status: string;
  current_step_label: string | null;
  steps: Array<{ label: string; recorded_at: string }>;
};

export async function fetchFamilyByPin(pin: string): Promise<FamilyStatus> {
  const res = await fetch(`${API_BASE}/v1/public/family?pin=${encodeURIComponent(pin)}`);
  const body = (await res.json().catch(() => ({}))) as FamilyStatus & {
    message?: string;
    error?: string;
  };
  if (!res.ok) {
    throw new Error(body.message || body.error || "Could not find that case.");
  }
  return body;
}

export async function fetchFamilyByToken(token: string): Promise<FamilyStatus> {
  const res = await fetch(`${API_BASE}/v1/public/family/${encodeURIComponent(token)}`);
  const body = (await res.json().catch(() => ({}))) as FamilyStatus & {
    message?: string;
    error?: string;
  };
  if (!res.ok) {
    throw new Error(body.message || body.error || "Could not find that case.");
  }
  return body;
}
