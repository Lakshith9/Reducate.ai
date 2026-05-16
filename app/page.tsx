"use client";

import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Landmark,
  Menu,
  Play,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Wifi,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = ["About", "Programs", "Campus", "Stories"];

const stats = [
  ["1965", "legacy in education"],
  ["20+", "future-ready programs"],
  ["24/7", "accessible learning spaces"],
  ["UGC", "approved university"]
];

const programs = [
  {
    title: "Undergraduate",
    badge: "UG",
    color: "bg-clay",
    courses: ["BBA / BBA Hons", "BCA / BCA Hons", "B.Tech CSE, AI & ML", "B.Com / ACCA", "Forensic Science"]
  },
  {
    title: "Postgraduate",
    badge: "PG",
    color: "bg-ocean",
    courses: ["MBA", "MCA", "M.Sc Cyber Security", "International Trade", "Clinical Embryology"]
  },
  {
    title: "Doctoral",
    badge: "Ph.D",
    color: "bg-sage",
    courses: ["Commerce", "Management", "Computing", "Interdisciplinary", "Law"]
  },
  {
    title: "Certificate",
    badge: "Skill",
    color: "bg-marigold",
    courses: ["Data Science & AI", "Blockchain", "Cloud DevOps", "Digital Marketing", "Industrial IoT"]
  }
];

const strengths = [
  {
    icon: BrainCircuit,
    title: "Whole Brain Pedagogy",
    text: "A learning model that blends analytical skill, creativity, communication, and practical judgment."
  },
  {
    icon: Rocket,
    title: "Industry Use Cases",
    text: "Studio-style projects, internships, capstones, and real scenarios that help students build evidence of ability."
  },
  {
    icon: UsersRound,
    title: "Interdisciplinary Culture",
    text: "Students collaborate across computing, management, commerce, law, science, and emerging technology."
  },
  {
    icon: ShieldCheck,
    title: "NEP & UGC Aligned",
    text: "Flexible, compliant programs designed to keep pace with future employment and entrepreneurship needs."
  }
];

const campus = [
  { icon: Wifi, label: "Wi-Fi campus" },
  { icon: Building2, label: "R&D incubation" },
  { icon: BookOpenCheck, label: "Tech library" },
  { icon: Landmark, label: "Smart classrooms" }
];

const testimonials = [
  {
    quote:
      "The faculty pushed us beyond textbook answers and helped us understand how ideas become real work.",
    name: "Parth Raval",
    role: "Creative Producer"
  },
  {
    quote:
      "Projects, mentors, and industry exposure gave me the confidence to solve problems in my first role.",
    name: "Disha Thaker",
    role: "Project Associate"
  },
  {
    quote:
      "The campus culture helped me discover skills I did not know I had and turn them into career momentum.",
    name: "Krishna Soni",
    role: "Assistant Manager"
  }
];

const partners = ["IBM", "ISRO", "Coding Pro", "SAC", "Yudiz", "Dev IT", "Aventure", "Virtual Height"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-paper">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3 shadow-soft sm:px-6">
          <a href="#" className="focus-ring flex items-center gap-3 rounded-full">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-base font-bold text-white">
              JG
            </span>
            <span className="font-display text-lg font-bold tracking-normal">JG University</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-ink/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring rounded-full hover:text-ink">
                {item}
              </a>
            ))}
          </div>

          <a
            href="#apply"
            className="focus-ring hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 md:flex"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-ink text-white md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl p-4 shadow-soft md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-ink/78"
              >
                {item}
              </a>
            ))}
            <a href="#apply" className="rounded-2xl bg-ink px-4 py-3 text-center font-bold text-white">
              Apply Now
            </a>
          </div>
        )}
      </header>

      <section className="relative min-h-screen bg-ink pt-28 text-white sm:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.46]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2400&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,23,26,0.96),rgba(21,23,26,0.70)_45%,rgba(21,23,26,0.38))]" />
        <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-12 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur">
              <Sparkles className="h-4 w-4 text-marigold" />
              New-age tech-driven university in Ahmedabad
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.03] tracking-normal text-balance sm:text-6xl lg:text-7xl">
              Learn beyond books. Build beyond boundaries.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              A modern university experience shaped around future-ready programs, immersive learning, industry mentors,
              and a campus designed for ambition.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-marigold px-6 py-4 font-bold text-ink shadow-glow transition hover:-translate-y-1"
              >
                Explore Programs <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#stories"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/16"
              >
                <Play className="h-5 w-5 fill-white" /> Watch Walkthrough
              </a>
            </div>
          </div>

          <div className="animate-float rounded-lg border border-white/16 bg-paper p-5 text-ink shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Admission Studio</p>
                <h2 className="mt-2 font-display text-2xl font-bold">Design your path</h2>
              </div>
              <GraduationCap className="h-11 w-11 text-ocean" />
            </div>
            <div className="mt-6 grid gap-3">
              {["Choose a discipline", "Build with projects", "Intern with industry", "Graduate career-ready"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3 border-b border-ink/10 bg-white/70 p-3 last:border-b-0">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white py-6">
        <div className="section-shell grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-lg bg-paper px-4 py-5 text-center">
              <div className="font-display text-3xl font-bold text-ink">{value}</div>
              <div className="mt-1 text-sm font-semibold text-ink/62">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-clay">About JG University</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-normal text-balance sm:text-5xl">
              A university built for the way modern careers actually work.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/72">
            <p>
              Inspired by JG University&apos;s focus on knowledge beyond books, this redesign presents a sharper,
              cleaner digital experience that makes programs, outcomes, and campus life easier to understand.
            </p>
            <p>
              The experience favors confident typography, tactile cards, strong calls to action, and content blocks
              that guide students from curiosity to application.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-ink py-20 text-white sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.22em] text-marigold">Programs</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-normal sm:text-5xl">
                Choose a school. Shape a future.
              </h2>
            </div>
            <a href="#apply" className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-ink">
              Start Application <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.title}
                className="group rounded-lg border border-white/12 bg-white/[0.07] p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.11]"
              >
                <div className={`inline-flex rounded-full ${program.color} px-3 py-1 text-sm font-bold text-white`}>
                  {program.badge}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{program.title}</h3>
                <div className="mt-5 grid gap-3">
                  {program.courses.map((course) => (
                    <div key={course} className="flex items-start gap-3 text-white/78">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-lg bg-white p-6 shadow-soft">
              <item.icon className="h-10 w-10 text-ocean" />
              <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="campus" className="bg-white py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="overflow-hidden rounded-lg shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85"
              alt="Students walking through a university campus"
              className="h-[28rem] w-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-ocean">Campus</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-normal sm:text-5xl">
              Designed for learning that keeps moving.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Labs, incubation spaces, smart classrooms, and a connected library create a practical learning ecosystem
              where every semester can become a portfolio.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {campus.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-lg bg-paper p-4 font-bold">
                  <item.icon className="h-5 w-5 text-clay" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className="section-shell py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-clay">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-normal sm:text-5xl">
            Alumni stories with real career texture.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((story) => (
            <article key={story.name} className="rounded-lg bg-white p-6 shadow-soft">
              <Quote className="h-9 w-9 text-marigold" />
              <p className="mt-5 text-lg leading-8 text-ink/72">&ldquo;{story.quote}&rdquo;</p>
              <div className="mt-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold">{story.name}</h3>
                  <p className="text-sm font-semibold text-ink/56">{story.role}</p>
                </div>
                <div className="flex text-marigold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 px-5">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="grid h-16 min-w-40 place-items-center rounded-full border border-ink/10 bg-paper px-8 font-display text-xl font-bold text-ink/68"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section-shell py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-lg bg-ink p-8 text-white shadow-glow sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(228,161,27,0.32),transparent_55%)]" />
          <div className="relative max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-marigold">Admissions Open</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-normal text-balance sm:text-5xl">
              Ready to build a career that feels future-proof?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Explore programs, talk to an advisor, and find the learning path that matches your strengths.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:admissions@jguni.in"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-marigold px-6 py-4 font-bold text-ink"
              >
                Enquire Today <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#programs"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 font-bold text-white"
              >
                Compare Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-12 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white font-display font-bold text-ink">
                JG
              </span>
              <span className="font-display text-xl font-bold">JG University</span>
            </div>
            <p className="mt-4 max-w-xl text-white/60">
              A modern landing page concept built with Next.js and Tailwind CSS, inspired by JG University&apos;s
              academic ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/70">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full border border-white/14 px-4 py-2">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
