// app/patent/page.tsx  →  route: /patent
import { CaseStudyLayout, Block, Bullets, SpecStrip, ToolTags, PhotoSlot } from "@/app/components/ui";

export const metadata = {
  title: "Engine Simulator (Patent Pending) — Elijah Akpan",
  description: "A patent-pending engine-sound simulator for ride-on cars that reproduces a real engine note in real time from pedal input.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="Invention"
      title="Engine Simulator for Ride-On Cars"
      role="Inventor"
      loc="Patent Pending"
      dates="July 2025 – Present"
      intro="A device that gives toy ride-on cars the engine note of a real car — synthesized live from the driver's pedal input, running on embedded hardware."
    >
      <div className="mt-2 inline-block rounded-md border border-[#ff5a1f]/40 bg-[#ff5a1f]/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-[#ff5a1f]">
        Patent Pending
      </div>

      <div className="mt-8">
        <SpecStrip
          items={[
            ["Status", "Patent Pending"],
            ["Raised", "$2,000+"],
            ["Category", "Vehicles"],
            ["Since", "2025"],
          ]}
        />
      </div>

      <Block title="Background">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Ride-on toy cars look the part but don't sound like it. This system makes them sound like the real thing.",
              "Has the ability to track pedal position in real time and reproduces a matching engine note.",
              "Invented from the ground up, implementing the ability to change/add force induction and other sounds through an app.",
            ]}
          />
          {/* PHOTO SLOT — the product / rig / demo. Add /public/engine-sim.jpg and swap for an <img>. */}
          <iframe
          src="https://www.youtube.com/embed/qTBd-AJKarw"
          title="Ride On Car"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-lg border border-zinc-800"
          />        
          </div>
      </Block>

      <Block title="Want to see more?">
        <Bullets
          points={[
            "Reach out via my contact page and we can set a demo up!",
          ]}
        />
        <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-zinc-600">
          Specific technical details are kept high-level here while the patent is pending.
        </p>
      </Block>

    </CaseStudyLayout>
  );
}
