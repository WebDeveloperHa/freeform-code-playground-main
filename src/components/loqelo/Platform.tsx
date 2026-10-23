import cardGardenImg from "@/assets/card-garden.jpg";
import cardHomeImg from "@/assets/card-home.jpg";
import cardOfficeImg from "@/assets/card-office.jpg";
import gardenerImg from "@/assets/hero-gardener.jpg";
import plantImg from "@/assets/plant.png";
import { IconCheck, IconSearch, IconStar } from "./icons";
import { LogoMark } from "./Logo";

const PROVIDERS = [
  {
    img: cardGardenImg,
    name: "Garden Care Pro",
    rating: "4.9",
    reviews: 129,
    sub: "Gardening, lawn care",
    price: "From $45/hr",
  },
  {
    img: cardHomeImg,
    name: "BrightHome Solutions",
    rating: "4.8",
    reviews: 204,
    sub: "Repair & maintenance",
    price: "From $35/hr",
  },
  {
    img: cardOfficeImg,
    name: "OfficeFix Ltd",
    rating: "4.9",
    reviews: 74,
    sub: "Office installations",
    price: "From $65/hr",
  },
];

const SIDEBAR = [
  "Home",
  "Services",
  "Messages",
  "Bookings",
  "Profile",
  "Settings",
];

const QUOTES = [
  { rate: "€45/hr", label: "Standard service", timing: "1–3 days" },
  { rate: "€80/hr", label: "Premium service", timing: "daily" },
  { rate: "€75/hr", label: "3-package", timing: "1 day" },
];

const BENEFITS = [
  "Verified professionals",
  "Transparent pricing",
  "Secure and easy booking",
];

export default function Platform() {
  return (
    <section id="providers" className="relative overflow-hidden py-20 lg:py-24">
      <img
        src={plantImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={768}
        height={1024}
        className="absolute top-10 -left-8 hidden w-32 -rotate-90 opacity-80 lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="relative">
          {/* Laptop */}
          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="overflow-hidden rounded-t-2xl border-[10px] border-b-0 border-ink bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <LogoMark className="h-4 w-4 shrink-0" />
                <span className="hidden text-[10px] font-extrabold text-ink sm:block">
                  Loqelo
                </span>
                <span className="flex flex-1 items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[9px] font-semibold text-muted-foreground">
                  <IconSearch className="h-3 w-3" />
                  Search services, providers, or locations
                </span>
                <span className="hidden items-center gap-1 text-[9px] font-bold text-ink/70 sm:flex">
                  London, UK
                </span>
                <img
                  src={gardenerImg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-5 w-5 rounded-full object-cover"
                />
              </div>
              <div className="flex">
                <div className="hidden w-28 shrink-0 flex-col gap-0.5 border-r border-border p-2 sm:flex">
                  {SIDEBAR.map((item, i) => (
                    <span
                      key={item}
                      className={`rounded-md px-2 py-1.5 text-[9px] font-bold ${
                        i === 0
                          ? "bg-mint-soft text-teal-deep"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex-1 p-3">
                  <p className="text-[11px] font-extrabold text-ink">
                    Recommended providers
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {PROVIDERS.map((p) => (
                      <div
                        key={p.name}
                        className="overflow-hidden rounded-lg border border-border"
                      >
                        <img
                          src={p.img}
                          alt={p.name}
                          loading="lazy"
                          width={768}
                          height={768}
                          className="h-14 w-full object-cover sm:h-16"
                        />
                        <div className="p-1.5">
                          <p className="truncate text-[9px] font-extrabold text-ink">
                            {p.name}
                          </p>
                          <p className="flex items-center gap-0.5 text-[8px] font-bold text-ink/70">
                            <IconStar className="h-2 w-2" /> {p.rating} ({p.reviews})
                          </p>
                          <p className="truncate text-[7.5px] text-muted-foreground">
                            {p.sub}
                          </p>
                          <p className="text-[8px] font-extrabold text-teal-deep">
                            {p.price}
                          </p>
                          <span className="mt-1 block rounded-md bg-teal py-1 text-center text-[7.5px] font-bold text-primary-foreground">
                            Request quote
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-3.5 rounded-b-xl bg-ink/90"
              style={{ width: "112%", marginLeft: "-6%" }}
            />
          </div>

          {/* Phone with quotes */}
          <div className="absolute -right-2 -bottom-8 w-40 rotate-2 overflow-hidden rounded-[2rem] border-[8px] border-ink bg-card shadow-2xl sm:w-44 md:right-2">
            <img
              src={gardenerImg}
              alt="Garden Care Pro provider"
              loading="lazy"
              width={768}
              height={1024}
              className="h-16 w-full object-cover"
            />
            <div className="p-2.5">
              <p className="text-[10px] font-extrabold text-ink">
                Garden Care Pro
              </p>
              <p className="flex items-center gap-0.5 text-[8px] font-bold text-ink/70">
                <IconStar className="h-2 w-2" /> 4.9 (129)
              </p>
              <p className="mt-1.5 text-[9px] font-extrabold text-ink">Quotes</p>
              <div className="mt-1 flex flex-col gap-1.5">
                {QUOTES.map((q) => (
                  <div
                    key={q.rate}
                    className="flex items-center justify-between gap-1 rounded-lg border border-border p-1.5"
                  >
                    <span>
                      <span className="block text-[8.5px] font-extrabold text-teal-deep">
                        {q.rate}
                      </span>
                      <span className="block text-[7.5px] leading-tight text-muted-foreground">
                        {q.label}
                        <br />
                        {q.timing}
                      </span>
                    </span>
                    <span className="rounded-md border border-teal px-1.5 py-0.5 text-[7.5px] font-bold text-teal-deep">
                      View
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-[2.75rem] md:leading-[1.1]">
            The right people for every place
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Browse trusted providers, read real reviews, compare offers and
            book with confidence. All in one simple platform.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep">
                  <IconCheck className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold text-ink">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
