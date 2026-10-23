import { useEffect, useState } from "react";
import loqeloVideo from "@/assets/Loqelo final video compressed.mp4";
import plantImg from "@/assets/plant.png";
import { IconClose, IconPlay } from "./icons";
import { LogoMark } from "./Logo";

function FilmHoles() {
  return (
    <div
      aria-hidden="true"
      className="hidden w-8 shrink-0 flex-col justify-between bg-ink/85 py-2 sm:flex"
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <span key={i} className="mx-auto h-2.5 w-4 rounded-[2px] bg-card" />
      ))}
    </div>
  );
}

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-24">
      <img
        src={plantImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={768}
        height={1024}
        className="absolute right-0 bottom-0 hidden w-36 opacity-90 lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <div className="relative flex overflow-hidden rounded-2xl shadow-xl">
            <FilmHoles />
            <div className="relative flex-1">
              <video
                src={loqeloVideo}
                aria-label="Loqelo launch video preview"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <button
                onClick={() => setModalOpen(true)}
                className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-card text-teal shadow-xl transition hover:scale-105"
                aria-label="Play the Loqelo video"
              >
                <IconPlay className="ml-1 h-7 w-7" />
              </button>
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-2.5 py-1 text-[11px] font-bold text-card">
                <LogoMark className="h-3.5 w-3.5" /> Loqelo
              </span>
            </div>
            <FilmHoles />
          </div>
          <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
            Watch how Loqelo connects you with trusted local providers.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-[2.75rem] md:leading-[1.1]">
            A better way to get things done
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Loqelo connects you with skilled, trusted service providers for
            your home, garden and office. Watch how it works.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2.5 font-bold text-teal transition hover:text-teal-deep"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-primary-foreground">
              <IconPlay className="ml-0.5 h-4 w-4" />
            </span>
            Watch our video
          </button>
          <p className="mt-10 -rotate-2 font-script text-3xl leading-snug text-teal-deep">
            Trusted help. Real people.
            <br />
            Better spaces.
          </p>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Loqelo video"
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-card p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background text-ink transition hover:bg-mint-soft"
              aria-label="Close video"
            >
              <IconClose className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-2xl">
              <video
                src={loqeloVideo}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-ink object-contain"
              />
            </div>
            <a
              href="#waitlist"
              onClick={() => setModalOpen(false)}
              className="mt-4 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-teal-deep"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
