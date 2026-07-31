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
      role="Inventor & Founder"
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
            ["Platform", "Raspberry Pi"],
            ["Since", "2025"],
          ]}
        />
      </div>

      <Block title="The idea">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Ride-on toy cars look the part but sound like toys. This system makes them sound like the real thing.",
              "It tracks pedal position in real time and reproduces a matching engine note — revs that rise and fall with how the child drives.",
              "Invented from the ground up and taken from concept toward a real product; raised $2,000+ toward development so far.",
            ]}
          />
          {/* PHOTO SLOT — the product / rig / demo. Add /public/engine-sim.jpg and swap for an <img>. */}
          <PhotoSlot label="/engine-sim.jpg" className="aspect-[4/3] w-full" />
        </div>
      </Block>

      <Block title="How it works, at a high level">
        <Bullets
          points={[
            "An analog-to-digital front end reads throttle/pedal position from the vehicle.",
            "An embedded audio pipeline maps that input to a realistic engine note and plays it back with low latency.",
            "The whole system runs on a Raspberry Pi, sized to live inside a consumer ride-on product.",
          ]}
        />
        <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-zinc-600">
          Specific implementation details are kept high-level here while the patent is pending.
        </p>
      </Block>

      <Block title="Tools">
        <ToolTags items={["Raspberry Pi", "Python", "Embedded Audio", "ADC / Sensors", "Rapid Prototyping"]} />
      </Block>
    </CaseStudyLayout>
  );
}
