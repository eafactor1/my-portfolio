// app/page.tsx  →  route: /  (replace your existing home page with this)
import Link from "next/link";
import { ShiftLights, Eyebrow, PhotoSlot, SpecStrip, Bullets, ToolTags } from "./components/ui";

export const metadata = {
  title: "Elijah Akpan — Mechanical Engineer",
  description:
    "Mechanical engineering student building high-performance machines: aerospace CNC, thermal FEA, and a 230 hp electric race car.",
};

const experience = [
  {
    org: "Polamer Precision",
    href: "/polamer",
    loc: "New Britain, CT",
    dates: "May 2026 – Aug 2026",
    role: "Mechanical Engineering Intern",
    points: [
      "Developed and optimized manufacturing processes for components used in 20,000+ hp aerospace engines.",
      "Programmed complex MasterCAM toolpaths and built Vericut machine templates to cut production errors.",
    ],
  },
  {
    org: "TTM Technologies",
    href: "/ttm",
    loc: "Syracuse, NY",
    dates: "Aug 2025 – Dec 2025",
    role: "Mechanical Engineering Intern",
    points: [
      "Designed RF components and PCBs for fighter jets, using thermal FEA on a 3 dB hybrid coupler.",
      "Built a MATLAB defect-detection GUI that saved engineers 100+ hours of quality work.",
    ],
  },
  {
    org: "Autonomous Vehicle Mobility Institute",
    href: "/research",
    loc: "Worcester, MA",
    dates: "Oct 2024 – Present",
    role: "Autonomous Vehicle Researcher",
    points: [
      "Led a vehicle-simulation cave build that helped secure a $65,000 grant.",
      "Upgraded a $100,000 UGV: suspension, DC-motor brackets, and LiFePO4 battery cage.",
    ],
  },
  {
    org: "WPI — Washburn Labs",
    href: null,
    loc: "Worcester, MA",
    dates: "Feb 2025 – Present",
    role: "Teaching Assistant",
    points: [
      "Lead two lab sections of 30+ students machining a 10-piece Stirling engine on Haas mills and lathes.",
    ],
  },
];

const skills = [
  { label: "Software", items: ["SolidWorks", "MasterCAM", "AutoCAD", "CATIA", "Siemens NX", "KiCAD", "LabVIEW", "Vericut", "VI-grade"] },
  { label: "Languages", items: ["MATLAB", "Python", "SCPI", "G-code"] },
  { label: "Hardware", items: ["Haas CNC", "Arduino", "Raspberry Pi", "BambuLab", "Prusa", "Ultimaker"] },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .shift-led { opacity: 0.35; }
        @media (prefers-reduced-motion: no-preference) {
          .shift-led { animation: shift 2.4s ease-in-out infinite; }
        }
        @keyframes shift { 0%, 70%, 100% { opacity: 0.3; } 35% { opacity: 1; } }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
            EA<span className="text-[#ff5a1f]">.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {["Experience", "Motorsport", "Projects", "Skills", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {s}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            className="rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-200 transition-colors hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
          >
            Résumé
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Mechanical Engineer · Worcester, MA</Eyebrow>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Elijah
              <br />
              Akpan
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
              I build high-performance machines — from CNC-manufactured components for{" "}
              <span className="text-zinc-200">20,000+ hp aerospace engines</span> to a{" "}
              <span className="text-zinc-200">230 hp electric race car</span>. B.S./M.S. in
              Mechanical Engineering at WPI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
              <a
                href="https://www.linkedin.com/in/elijah-akpan-9675a1235/"
                className="rounded-md bg-[#ff5a1f] px-4 py-2 font-medium uppercase tracking-widest text-zinc-950 transition-opacity hover:opacity-90"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/eafactor1"
                className="rounded-md border border-zinc-700 px-4 py-2 uppercase tracking-widest text-zinc-200 transition-colors hover:border-zinc-500"
              >
                GitHub
              </a>
              <a
                href="mailto:eakpan@wpi.edu"
                className="rounded-md border border-zinc-700 px-4 py-2 uppercase tracking-widest text-zinc-200 transition-colors hover:border-zinc-500"
              >
                eakpan@wpi.edu
              </a>
            </div>
          </div>

          {/* PHOTO SLOT — hero portrait or action shot. Add /public/hero.jpg then replace with:
              <img src="/hero.jpg" alt="Elijah Akpan" className="aspect-[4/5] w-full rounded-lg object-cover" /> */}
          <PhotoSlot label="/hero.jpg" className="aspect-[4/5] w-full" />
        </div>

        <div className="mt-16">
          <SpecStrip
            items={[
              ["GPA", "3.6"],
              ["FSAE Power", "230 hp"],
              ["HV Pack", "400 V"],
              ["Grad Year", "2028"],
            ]}
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>Experience</Eyebrow>
          <div className="mt-8 divide-y divide-zinc-800/60">
            {experience.map((job) => (
              <div key={job.org} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#ff5a1f]">
                    {job.dates}
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    {job.href ? (
                      <Link href={job.href} className="transition-colors hover:text-[#ff5a1f]">
                        {job.org}
                      </Link>
                    ) : (
                      job.org
                    )}
                  </div>
                  <div className="font-mono text-xs text-zinc-500">{job.loc}</div>
                </div>
                <div>
                  <div className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-300">
                    {job.role}
                  </div>
                  <Bullets points={job.points} />
                  {job.href && (
                    <Link
                      href={job.href}
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-[#ff5a1f] transition-opacity hover:opacity-70"
                    >
                      View case study →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTORSPORT / FSAE FEATURE */}
      <section id="motorsport" className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>Motorsport · Performance Lead</Eyebrow>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">WPI Formula SAE</h2>
              <p className="mt-4 text-zinc-400">
                Leading the development of a 230 hp electric FSAE race car — optimizing the
                powertrain and vehicle dynamics through CAE, CAD, and CNC machining.
              </p>
              <Link
                href="/fsae"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-[#ff5a1f] transition-opacity hover:opacity-70"
              >
                View project →
              </Link>
            </div>
            {/* PHOTO SLOT — the car. Add /public/fsae.jpg and swap for an <img>. */}
            <PhotoSlot label="/fsae.jpg" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>Projects</Eyebrow>
          <div className="grid gap-10 md:grid-cols-2">
            {/* PHOTO SLOT — the ride-on car. Add /public/engine-sim.jpg and swap for an <img>. */}
            <PhotoSlot label="/engine-sim.jpg" className="aspect-[4/3] w-full" />
            <div>
              <div className="mb-3 inline-block rounded-md border border-[#ff5a1f]/40 bg-[#ff5a1f]/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#ff5a1f]">
                Patent Pending
              </div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Engine Simulator for Ride-On Cars
              </h2>
              <p className="mt-4 text-zinc-400">
                Invented a device that replicates a real car&apos;s engine note in real time,
                driven by pedal-position tracking. Built on a Raspberry Pi. Raised $2,000+.
              </p>
              <Link
                href="/patent"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-[#ff5a1f] transition-opacity hover:opacity-70"
              >
                View project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>Toolbox</Eyebrow>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {skills.map((group) => (
              <div key={group.label}>
                <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#ff5a1f]">
                  {group.label}
                </div>
                <ToolTags items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="border-t border-zinc-800/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>Contact</Eyebrow>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-lg text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something fast.
            </h2>
            <div className="flex flex-col gap-2 font-mono text-sm text-zinc-400">
              <a href="mailto:eakpan@wpi.edu" className="transition-colors hover:text-[#ff5a1f]">
                eakpan@wpi.edu
              </a>
              <a href="tel:+15083090096" className="transition-colors hover:text-[#ff5a1f]">
                (508) 309-0096
              </a>
              <a
                href="https://www.linkedin.com/in/elijah-akpan-9675a1235/"
                className="transition-colors hover:text-[#ff5a1f]"
              >
                LinkedIn ↗
              </a>
              <a href="https://github.com/eafactor1" className="transition-colors hover:text-[#ff5a1f]">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-zinc-800/60 pt-6">
            <span className="font-mono text-xs text-zinc-600">
              © {new Date().getFullYear()} Elijah Akpan
            </span>
            <ShiftLights />
          </div>
        </div>
      </section>
    </main>
  );
}
