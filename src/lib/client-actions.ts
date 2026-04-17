export function saveClientSubmission<T>(key: string, data: T) {
  if (typeof window === "undefined") return;

  const existingRaw = window.localStorage.getItem(key);
  const existing = existingRaw ? (JSON.parse(existingRaw) as Array<T & { submittedAt: string }>) : [];

  const next = [{ ...data, submittedAt: new Date().toISOString() }, ...existing].slice(0, 50);
  window.localStorage.setItem(key, JSON.stringify(next));
}

export function openMailDraft({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams({ subject, body });
  window.location.href = `mailto:${to}?${params.toString()}`;
}
