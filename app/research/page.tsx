// app/research/page.tsx  →  route: /research
import { CaseStudyLayout, Block, Bullets, SpecStrip, ToolTags, Gallery, PhotoSlot } from "@/app/components/ui";

export const metadata = {
  title: "Autonomous Vehicle Research — Elijah Akpan",
  description: "Designing and manufacturing hardware for an off-road autonomous vehicle laboratory at the AVMI.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="Research"
      title="Autonomous Vehicle Mobility Institute"
      role="Autonomous Vehicle Researcher"
      loc="Worcester, MA"
      dates="Oct 2024 – Present"
      intro="Design and manufacture components for an autonomous vehicle laboratory that specializes in off-road vehicles."
    >
      <div className="pt-2">
        <SpecStrip
          items={[
            ["Projects Built", "5+"],
            ["Industry", "Automotive"],
            ["Since", "October 2024"],
          ]}
        />
      </div>

      <Block title="Vehicle simulation cave">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Led the design and manufacturing of a specialized vehicle cave used to test the lab's multimillion dollar simulator.",
              "Modified T-slot size, sourced and installed the plywood screen, machined two custom projector mount, and designed PLA support brackets.",
              "The cave features 360 degree wrap around, minimal light entry, and specialized projector paint.",
              "The simulation Cave helped the lab secure a $65,000 grant from MassTech.",
            ]}
          />
          {/* PHOTO SLOT — the sim cave. Add /public/avmi-cave.jpg and swap for an <img>. */}
        <img src="cave.jpeg" alt="Cave" className="aspect-[4/3] w-full rounded-lg object-contain" />
        </div>
      </Block>

      <Block title="$100,000 unmanned ground vehicle">
        <div className="grid gap-8 md:grid-cols-2">
          {/* PHOTO SLOT — the UGV. Add /public/avmi-ugv.jpg and swap for an <img>. */}
          <img src="ugv.jpeg" alt="UGV" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <Bullets
            points={[
              "Assisted in the upgrading of a $100,000 unmanned ground vehicle.",
              "Designed and manufactured the suspension system, DC-motor mounting brackets, and the LiFePO4 battery cage.",
              "Suspension system was fabricated due to lidar viewing angles being disrupted by off-road terrain.",
              "LifePo4 battery cage helped reduce 30 pounds compared to previous battery enclosure.",
              "Sourced and installed new DC brush motors due to old ones being seized cause of brush degradation."
            ]}
          />
        </div>
      </Block>

      <Block title="Skills Acquired">
        <ToolTags items={["Lidars", "PLA / FDM Printing", "LiFePO4 Batteries", "DC Electric Motors", "AC Electric Motors"]} />
      </Block>

      <Block title="AVMI Off-road Simulator">
        <video
          src="ugv.mkv"
          autoPlay muted loop playsInline
          className="aspect-[13/9] w-full rounded-lg border border-zinc-800 object-cover"
          />
      </Block>
    </CaseStudyLayout>
  );
}
