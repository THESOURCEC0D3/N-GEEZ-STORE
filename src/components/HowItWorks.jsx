import { config } from "../config";

const HowItWorks = () => {
  const { theme } = config;
  const steps = [
    {
      num: "01",
      title: "Browse Our Collection",
      desc: "Explore our perfumes, skincare, and body care products right here on the website.",
    },
    {
      num: "02",
      title: "Tap to Enquire",
      desc: "See something you like? Tap the button and it opens WhatsApp with a ready-made message.",
    },
    {
      num: "03",
      title: "We Handle the Rest",
      desc: "We'll confirm availability, discuss pricing, and arrange pickup or bulk delivery.",
    },
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme.pageBg }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: theme.dark }}
        >
          How It Works
        </h2>

        {/* Mobile: simple column */}
        <div className="flex flex-col gap-8 md:hidden">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
            >
              <div
                className="text-3xl font-bold mb-3"
                style={{ color: theme.accent }}
              >
                {step.num}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: theme.dark }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: theme.muted }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: staggered zigzag with lines */}
        <div className="hidden md:block relative" style={{ minHeight: 520 }}>
          {/* Connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <line
              x1="35%"
              y1="140"
              x2="65%"
              y2="220"
              stroke={theme.border}
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            <line
              x1="65%"
              y1="340"
              x2="35%"
              y2="420"
              stroke={theme.border}
              strokeWidth="2"
              strokeDasharray="8 4"
            />
          </svg>

          {/* Card 1 — top left */}
          <div
            className="absolute left-0 top-0 w-[35%] rounded-2xl p-8 border"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.border,
              zIndex: 1,
            }}
          >
            <div
              className="text-4xl font-bold mb-3"
              style={{ color: theme.accent }}
            >
              01
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.dark }}
            >
              {steps[0].title}
            </h3>
            <p className="text-sm" style={{ color: theme.muted }}>
              {steps[0].desc}
            </p>
          </div>

          {/* Card 2 — middle right */}
          <div
            className="absolute right-0 top-[180px] w-[35%] rounded-2xl p-8 border"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.border,
              zIndex: 1,
            }}
          >
            <div
              className="text-4xl font-bold mb-3"
              style={{ color: theme.accent }}
            >
              02
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.dark }}
            >
              {steps[1].title}
            </h3>
            <p className="text-sm" style={{ color: theme.muted }}>
              {steps[1].desc}
            </p>
          </div>

          {/* Card 3 — bottom left */}
          <div
            className="absolute left-0 top-[370px] w-[35%] rounded-2xl p-8 border"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.border,
              zIndex: 1,
            }}
          >
            <div
              className="text-4xl font-bold mb-3"
              style={{ color: theme.accent }}
            >
              03
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.dark }}
            >
              {steps[2].title}
            </h3>
            <p className="text-sm" style={{ color: theme.muted }}>
              {steps[2].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
