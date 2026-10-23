import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="rounded-full bg-mint px-3 py-1 text-[10px] font-extrabold tracking-widest text-teal-deep uppercase">
            Launching February 2027
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1">EN</span>
          <a href="#top" className="transition hover:text-ink">
            Privacy Policy
          </a>
          <a href="#top" className="transition hover:text-ink">
            Terms of Service
          </a>
        </nav>
        <p className="-rotate-3 font-script text-2xl text-teal-deep">
          Better spaces. Together.
        </p>
      </div>
    </footer>
  );
}
