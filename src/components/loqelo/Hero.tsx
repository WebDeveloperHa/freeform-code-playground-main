import cleanerImg from "@/assets/hero-cleaner.jpg";
import gardenerImg from "@/assets/hero-gardener.jpg";
import plantImg from "@/assets/plant.png";
import technicianImg from "@/assets/hero-technician.jpg";
import {
  IconArrowRight,
  IconBuilding,
  IconHome,
  IconLeaf,
  IconPin,
  IconShield,
  IconStar,
} from "./icons";
import { LogoMark } from "./Logo";

function PhoneMockup({ className }: { className?: string }) {
  const services = [
    {
      icon: IconHome,
      title: "Home",
      sub: "Repair, cleaning, maintenance",
    },
    {
      icon: IconLeaf,
      title: "Garden",
      sub: "Landscaping, lawn care, outdoor work",
    },
    {
      icon: IconBuilding,
      title: "Office",
      sub: "Cleaning, setup, facilities",
    },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-card shadow-2xl ${className ?? ""}`}
    >
      <div className="flex items-center justify-between px-4 pt-2 text-[9px] font-bold text-ink">
        <span>11:01</span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-1.5 w-3 rounded-sm bg-ink/70" />
          <span className="inline-block h-2 w-4 rounded-sm border border-ink/70" />
        </span>
      </div>
      <div className="flex items-center gap-1.5 px-4 pt-2">
        <LogoMark className="h-4 w-4" />
        <span className="text-[11px] font-extrabold tracking-tight text-ink">
          Loqelo
        </span>
      </div>
      <div className="mx-3 mt-3 rounded-2xl border border-border p-3">
        <p className="text-[12px] font-extrabold text-ink">Request a service</p>
        <p className="mt-1 inline-flex items-center gap-1 text-[9px] font-semibold text-muted-foreground">
          <IconPin className="h-3 w-3" /> London, UK
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex items-center gap-2.5 rounded-xl border border-border p-2"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-primary-foreground">
              <s.icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[11px] font-extrabold text-ink">
                {s.title}
              </span>
              <span className="block text-[8.5px] leading-tight text-muted-foreground">
                {s.sub}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProviderCard({
  img,
  alt,
  title,
  rating,
  reviews,
}: {
  img: string;
  alt: string;
  title: string;
  rating: string;
  reviews: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        width={768}
        height={1024}
        className="h-28 w-full object-cover"
      />
      <div className="flex items-center gap-1.5 p-2.5">
        <IconHome className="h-3.5 w-3.5 shrink-0 text-teal-deep" />
        <span>
          <span className="block text-[10px] font-extrabold leading-tight text-ink">
            {title}
          </span>
          <span className="flex items-center gap-1 text-[9px] font-bold text-ink/70">
            <IconStar className="h-2.5 w-2.5" /> {rating} ({reviews})
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-16 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-16 lg:pb-24">
        <div>
          <span className="inline-flex rounded-full bg-mint px-4 py-1.5 text-[11px] font-extrabold tracking-[0.15em] text-teal-deep uppercase">
            Launching February 2027
          </span>
          <h1 className="mt-6 max-w-xl text-5xl leading-[1.05] font-extrabold tracking-tight text-ink md:text-[3.75rem]">
            Everything your place needs.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Find trusted help for your home, garden and office. Quick, easy and
            reliable — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-teal-deep"
            >
              I need a service
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-ink transition hover:border-teal hover:text-teal-deep"
            >
              I provide services
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[540px] w-full max-w-[560px]">
          <div
            className="absolute top-6 right-0 h-[420px] w-[380px] bg-mint-soft"
            style={{
              borderRadius: "58% 42% 55% 45% / 45% 52% 48% 55%",
            }}
            aria-hidden="true"
          />
          <img
            src={plantImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={1024}
            className="absolute bottom-0 -left-6 w-32 opacity-90 md:w-40"
          />

          <div className="absolute top-24 left-2 w-36 md:w-44">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={gardenerImg}
                alt="Garden specialist provider"
                width={768}
                height={1024}
                className="h-52 w-full object-cover md:h-64"
              />
            </div>
            <div className="mt-2 rounded-xl bg-card p-2 shadow-lg">
              <p className="flex items-center gap-1 text-[10px] font-extrabold text-ink">
                <IconLeaf className="h-3 w-3 text-teal-deep" /> Garden specialist
              </p>
              <p className="flex items-center gap-1 text-[9px] font-bold text-ink/70">
                <IconStar className="h-2.5 w-2.5" /> 4.9 (129)
              </p>
            </div>
          </div>

          <PhoneMockup className="absolute top-0 left-1/2 z-10 w-56 -translate-x-1/2 md:w-60" />

          <div className="absolute top-10 right-0 z-10 flex w-36 flex-col gap-3 md:w-40">
            <ProviderCard
              img={cleanerImg}
              alt="Home cleaner provider"
              title="Home cleaner"
              rating="4.9"
              reviews={96}
            />
            <ProviderCard
              img={technicianImg}
              alt="Office technician provider"
              title="Office technician"
              rating="4.8"
              reviews={74}
            />
            <div className="flex items-center gap-2 rounded-2xl bg-teal p-3 text-primary-foreground shadow-lg">
              <IconShield className="h-6 w-6 shrink-0" />
              <span>
                <span className="block text-[11px] font-extrabold">Trusted</span>
                <span className="block text-[9px] leading-tight opacity-90">
                  Verified · Local &amp; Global
                </span>
              </span>
            </div>
          </div>

          <img
            src={plantImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={1024}
            className="absolute right-2 bottom-6 w-20 scale-x-[-1] opacity-80 md:w-24"
          />
        </div>
      </div>
    </section>
  );
}
