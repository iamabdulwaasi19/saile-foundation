import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Trophy,
  BookOpen,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Vehicles", href: "#vehicles" },
  { label: "Goals", href: "#goals" },
  { label: "Contact Us", href: "#contact" },
];

const VALUES = [
  "Respectability",
  "Responsibility",
  "Resilience",
  "Confidence",
  "Contentment",
];

const VEHICLES = [
  {
    id: "toe",
    acronym: "TOE",
    title: "Taslim Olawale Elias Program",
    subtitle: "Youth Sports & Intellect",
    accentColor: "#4CAF72",
    image: "/assets/images/gallery/11.jpg?w=600&h=380&fit=crop&auto=format",
    imageAlt: "Youth gathering on football field",
    features: [
      {
        Icon: Trophy,
        text: "Annual Under-16 Soccer Tournament — Nov 11 Finale",
      },
      {
        Icon: BookOpen,
        text: "Literary Competition (TOELC) — Critical Thinking & Public Speaking",
      },
      {
        Icon: Lightbulb,
        text: "Leadership & Entrepreneurial Program (TOELEAP)",
      },
    ],
  },
  {
    id: "gye",
    acronym: "GYE",
    title: "Ganiat Elias Initiative",
    subtitle: "Female Empowerment",
    accentColor: "#E8A020",
    image: "/assets/images/gallery/24.jpg?w=600&h=380&fit=crop&auto=format",
    imageAlt: "Woman educator with children",
    features: [
      { Icon: Star, text: "Female scholarships for academic advancement" },
      {
        Icon: Users,
        text: "Business partnerships for female entrepreneurs via Foundation-owned SPVs",
      },
      { Icon: Heart, text: "Medical bill assistance for women in need" },
    ],
  },
  {
    id: "arike",
    acronym: "ARIKE",
    title: "ARIKE Fund",
    subtitle: "General Aid & Special Grants",
    accentColor: "#0C2355",
    image: "/assets/images/gallery/28.jpg?w=600&h=380&fit=crop&auto=format",
    imageAlt: "Students in classroom",
    features: [
      { Icon: Target, text: "Financial assistance for dream fulfillment" },
      {
        Icon: BookOpen,
        text: "External scholarships for non-foundation youth",
      },
      { Icon: Heart, text: "Strategic donations to partner non-profits" },
    ],
  },
];

const GOALS = [
  {
    Icon: BookOpen,
    title: "Encourage Learning",
    description:
      "Promote youth learning through structured academic and sport-based programs that inspire curiosity and ambition.",
  },
  {
    Icon: Lightbulb,
    title: "Drive Financial Empowerment",
    description:
      "Fund female entrepreneurs and equip youth with the business skills to build sustainable livelihoods.",
  },
  {
    Icon: Star,
    title: "Equip Youth",
    description:
      "Help young people become their best selves through mentorship, leadership training, and scholarships.",
  },
  {
    Icon: Heart,
    title: "Build Society",
    description:
      "Foster a caring, honest, and hardworking society grounded in shared values and a spirit of service.",
  },
];

const STAT_ITEMS = [
  { value: "Under-16", label: "Soccer Tournament" },
  { value: "3", label: "Program Vehicles" },
  { value: "2024", label: "Year Founded" },
  { value: "100%", label: "Foundation-Owned SPVs" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Cycle through the 4 images seamlessly
      setCurrentSlide((prev) => (prev + 1) % 37);
    }, 4000); // Changes slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAVIGATION ── */}
      <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex shadow-sm">
              <img
                src="/saile.png"
                alt="Saile Foundation"
                className="w-10 h-10 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#0C2355] text-base tracking-tight">
                SAILE
              </span>
              <span className="text-[10px] text-[#546080] tracking-widest uppercase font-semibold">
                Foundation
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#546080] hover:text-[#0C2355] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/+2348034023880"
              className="px-5 py-2.5 rounded-xl bg-[#E8A020] text-[#0A1628] font-bold text-sm hover:bg-[#D4911A] transition-colors duration-150 shadow-sm"
            >
              Donate Now
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[#0C2355] hover:bg-[#EEF1F8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#546080] hover:text-[#0C2355] py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="mt-2 px-5 py-3 rounded-xl bg-[#E8A020] text-[#0A1628] font-bold text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Donate Now
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-[#0C2355] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#E8A020]/8 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8 lg:pt-28 lg:pb-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/75 text-[11px] font-semibold px-3.5 py-1.5 rounded-full w-fit tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF72] inline-block animate-pulse" />
              Incorporated January 2024
            </div>

            <h1 className="font-display text-[2.6rem] md:text-5xl lg:text-[3.2rem] font-normal text-white leading-[1.08] tracking-tight">
              Impacting Lives{" "}
              <span className="text-[#E8A020] italic">Positively</span>
              <br />
              Through Football
              <br />
              &amp; Education
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-lg">
              A non-political, non-tribal, and non-religious entity dedicated to
              equipping youth, empowering women, and building a resilient
              society.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8A020] text-[#0A1628] font-bold rounded-xl hover:bg-[#D4911A] transition-colors text-sm shadow-md"
              >
                Support Our Cause
                <ArrowRight size={15} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/20 text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image collage column */}
          <div className="relative grid grid-cols-5 grid-rows-2 gap-3 h-72 lg:h-[400px]">
            <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden bg-[#0a1e47]">
              <img
                src="/assets/images/trophy_lifting.jpg"
                alt="Youth football player"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden bg-[#0a1e47]">
              <img
                src="/assets/images/student-lecture.jpg"
                alt="Woman educator with children"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden bg-[#0a1e47]">
              <img
                src="/assets/images/third_display.jpg"
                alt="Students in classroom"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative max-w-7xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            {STAT_ITEMS.map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center">
                <div className="font-display text-2xl font-normal text-[#E8A020] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade-out gradient into next section */}
        <div className="h-16 mt-6 bg-gradient-to-b from-[#0C2355] to-[#030408]" />
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('/assets/images/group-pix.jpg')` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#4CAF72] text-xs font-bold tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl font-normal text-[#0A1628] mb-5 leading-tight">
              The SAILE Foundation Journey
            </h2>
            <p className="text-[#ffffff] text-lg leading-relaxed font-semibold">
              Originally incorporated as{" "}
              <strong className="text-[#000000] font-bold">
                The Elias Foundation
              </strong>{" "}
              in January 2024, we evolved into The SAILE Foundation to enable
              broader, vehicle-driven community giving. Our structure allows
              dedicated programs each named for individuals who inspired our
              mission to serve youth, women, and communities across Nigeria with
              focused, measurable impact.
            </p>
          </div>

          {/* Core Values */}
          <div className="flex flex-wrap justify-center gap-3">
            {VALUES.map((val) => (
              <span
                key={val}
                className="group px-5 py-2.5 rounded-full border-2 border-[#0C2355]/15 text-[#0C2355] text-sm font-semibold bg-white hover:bg-[#0C2355] hover:text-white hover:border-[#0C2355] transition-all duration-200 cursor-default select-none"
              >
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section id="vehicles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4CAF72] text-xs font-bold tracking-widest uppercase mb-4">
              Our Vehicles
            </p>
            <h2 className="font-display text-4xl font-normal text-[#0A1628] leading-tight">
              Three Pillars of Impact
            </h2>
            <p className="text-[#546080] text-base mt-3 max-w-xl mx-auto">
              Each vehicle is purpose-built to serve a distinct community need —
              sport, empowerment, and direct aid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VEHICLES.map((v) => (
              <div
                key={v.id}
                className="group rounded-2xl overflow-hidden bg-[#F7F8FC] border border-border flex flex-col hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                {/* Accent top bar */}
                <div className="h-1" style={{ background: v.accentColor }} />

                {/* Image */}
                <div className="relative h-48 bg-[#0a1e47] overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-bold text-white"
                      style={{ background: v.accentColor }}
                    >
                      {v.acronym}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div>
                    <h3 className="font-semibold text-[#0A1628] text-base leading-snug">
                      {v.title}
                    </h3>
                    <p
                      className="text-sm font-semibold mt-1"
                      style={{ color: v.accentColor }}
                    >
                      {v.subtitle}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3.5 flex-1">
                    {v.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${v.accentColor}18` }}
                        >
                          <feat.Icon
                            size={13}
                            style={{ color: v.accentColor }}
                          />
                        </div>
                        <span className="text-sm text-[#546080] leading-snug">
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOALS ── */}
      <section
        id="goals"
        className="py-20 bg-[#0C2355] relative overflow-hidden"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4CAF72] text-xs font-bold tracking-widest uppercase mb-4">
              Our Direction
            </p>
            <h2 className="font-display text-4xl font-normal text-white leading-tight">
              Our Objectives
            </h2>
            <p className="text-white/50 text-base mt-3 max-w-xl mx-auto">
              Four guiding principles that shape every program and initiative we
              run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GOALS.map((g, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8A020]/15 flex items-center justify-center mb-5 group-hover:bg-[#E8A020]/25 transition-colors">
                  <g.Icon size={20} className="text-[#E8A020]" />
                </div>
                <h4 className="font-semibold text-white text-[15px] mb-2">
                  {g.title}
                </h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY & DONATION SECTION ── */}
      <section id="donate" className="pt-8 pb-8 bg-background">
        <div className="max-w-5xl mx-auto px-3 flex flex-col items-center">
          {/* ── 1. Gallery Badge ── */}
          <span className="text-xs font-bold tracking-widest uppercase text-[#4CAF72] bg-[#4CAF72]/10 px-2 py-0.1 rounded-full mb-3">
            Gallery
          </span>

          {/* ── 2. Header Text ── */}
          <h3 className="font-display text-3xl md:text-4xl font-normal text-[#0A1628] text-center mb-3 tracking-tight">
            Foundation Events & Impact
          </h3>

          {/* ── 3. Single-Image Slider Window ── */}
          <div className="w-full h-[650px] md:h-[650px] border border-border rounded-3xl overflow-hidden bg-white shadow-sm relative mb-5">
            {[
              "/assets/images/gallery/bg.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/1.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/2.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/3.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/4.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/5.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/6.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/7.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/8.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/9.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/10.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/11.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/12.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/13.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/14.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/15.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/16.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/17.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/18.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/19.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/20.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/21.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/22.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/23.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/24.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/25.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/26.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/27.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/28.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/29.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/30.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/31.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/32.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/33.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/34.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/35.jpg?w=1200&auto=format&fit=crop",
              "/assets/images/gallery/36.jpg?w=1200&auto=format&fit=crop",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Slide indicator navigation dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── 4. Donation Box ── */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8A020] via-[#D4911A] to-[#B87A12]" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative px-2 py-2 text-center flex flex-col items-center gap-[3px]">
              <p className="text-[#0A1628]/50 text-[11px] font-bold tracking-widest uppercase">
                Make a Difference
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-normal text-[#0A1628] tracking-tight">
                Support Our Mission
              </h2>

              <p className="text-[#0A1628]/70 text-base max-w-none w-full overflow-x-auto md:overflow-x-visible">
                Help us expand our reach. Every contribution funds tournaments,
                scholarships, and women-led businesses that transform
                communities across Nigeria.
              </p>

              <a
                href="https://wa.me/+2348034023880"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0C2355] text-white font-bold rounded-xl hover:bg-[#0a1e47] transition-colors cursor-pointer text-sm shadow-md group"
              >
                Proceed to Donate
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#0A1628] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            {/* Brand block */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex shadow-sm">
                  <img
                    src="/saile.png"
                    alt="Saile Foundation"
                    className="w-10 h-10 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-white text-base">
                    SAILE Foundation
                  </span>
                  <span className="text-[10px] text-white/40 tracking-widest uppercase font-semibold">
                    Building Resilient Communities
                  </span>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                A non-political, non-tribal, and non-religious entity dedicated
                to equipping youth and empowering women across Nigeria.
              </p>

              <div className="flex gap-2.5">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[#E8A020] hover:text-[#0A1628] transition-colors duration-150"
                    aria-label="Social media"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="font-semibold text-white text-sm mb-6 tracking-wide">
                Quick Links
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "About Us",
                  "TOE Program",
                  "GYE Initiative",
                  "ARIKE Fund",
                  "Our Goals",
                  "Donate",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 text-sm hover:text-[#E8A020] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold text-white text-sm mb-6 tracking-wide">
                Contact Us
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+2348034023880"
                  className="flex items-center gap-3 text-white/45 hover:text-[#E8A020] transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-[#E8A020]/15 transition-colors shrink-0">
                    <Phone size={13} />
                  </div>
                  +234 803 402 3880
                </a>
                <a
                  href="tel:+2348023228699"
                  className="flex items-center gap-3 text-white/45 hover:text-[#E8A020] transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-[#E8A020]/15 transition-colors shrink-0">
                    <Phone size={13} />
                  </div>
                  +234 802 322 8699
                </a>
                <a
                  href="mailto:info@sailefoundation.org"
                  className="flex items-center gap-3 text-white/45 hover:text-[#E8A020] transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-[#E8A020]/15 transition-colors shrink-0">
                    <Mail size={13} />
                  </div>
                  info@sailefoundation.org
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/25 text-xs">
              © 2024 SAILE Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
