import { useState, type FormEvent } from "react";
import { IconCheck, IconHome, IconWrench } from "./icons";

const COUNTRIES = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇧🇩", name: "Bangladesh" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
];

type WaitlistCardProps = {
  variant: "customer" | "provider";
};

function WaitlistCard({ variant }: WaitlistCardProps) {
  const isCustomer = variant === "customer";
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]?.name ?? "United States");
  const [role, setRole] = useState<"individual" | "business">("individual");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please agree to receive updates about Loqelo.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint text-teal-deep">
          {isCustomer ? (
            <IconHome className="h-6 w-6" />
          ) : (
            <IconWrench className="h-6 w-6" />
          )}
        </span>
        <span>
          <span className="block text-xl font-extrabold text-ink">
            {isCustomer ? "I'm looking for a service" : "I offer services"}
          </span>
          <span className="block text-sm text-muted-foreground">
            {isCustomer
              ? "Get notified when you can book trusted providers."
              : "Grow your business and get more work."}
          </span>
        </span>
      </div>

      {submitted ? (
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-mint-soft p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-primary-foreground">
            <IconCheck className="h-4.5 w-4.5" />
          </span>
          <span>
            <span className="block font-extrabold text-ink">
              You're on the list!
            </span>
            <span className="block text-sm text-muted-foreground">
              We'll notify you as soon as Loqelo launches.
            </span>
          </span>
        </div>
      ) : (
        <form className="mt-6" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <label className="block">
              <span className="block text-xs font-bold text-ink">
                Email address
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="block text-xs font-bold text-ink">Country</span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm text-ink focus:ring-2 focus:ring-ring focus:outline-none sm:w-44"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="mt-4">
            <legend className="text-xs font-bold text-ink">I am a</legend>
            <div className="mt-1.5 flex items-center gap-6">
              {(
                [
                  { value: "individual", label: "Individual" },
                  { value: "business", label: "Business" },
                ] as const
              ).map((option) => (
                <label
                  key={option.value}
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink"
                >
                  <input
                    type="radio"
                    name={`role-${variant}`}
                    value={option.value}
                    checked={role === option.value}
                    onChange={() => setRole(option.value)}
                    className="h-4 w-4 accent-[var(--color-teal)]"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-4 flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-teal)]"
            />
            <span>
              I agree to receive updates about Loqelo. See our{" "}
              <a
                href="#waitlist"
                className="font-semibold text-teal underline hover:text-teal-deep"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {error && (
            <p className="mt-3 text-xs font-semibold text-destructive" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-teal py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-teal-deep"
          >
            {isCustomer ? "Join customer waitlist" : "Join provider waitlist"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Be the first to know
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Join our waitlist and get early access when Loqelo launches in
          February 2027.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <WaitlistCard variant="customer" />
          <WaitlistCard variant="provider" />
        </div>
      </div>
    </section>
  );
}
