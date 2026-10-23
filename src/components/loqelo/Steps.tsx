import { IconArrowRight, IconChat, IconCheck, IconUsers } from "./icons";

const STEPS = [
  {
    number: "1",
    icon: IconChat,
    title: "Tell us what you need",
    description:
      "Share a few details about your service, location and preferences.",
  },
  {
    number: "2",
    icon: IconUsers,
    title: "Get matched with providers",
    description: "We'll connect you with trusted, local professionals.",
  },
  {
    number: "3",
    icon: IconCheck,
    title: "Compare offers and choose",
    description: "Review quotes, check profiles and pick the best fit.",
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          From need to done in three simple steps
        </h2>
        <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents md:flex md:flex-1 md:items-center">
              <div className="flex-1 rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-base font-extrabold text-primary-foreground">
                    {step.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-teal-deep">
                    <step.icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <IconArrowRight
                  className="mx-4 hidden h-7 w-7 shrink-0 text-teal md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
