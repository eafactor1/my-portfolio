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
      intro="Designing and manufacturing hardware for a laboratory that specializes in off-road autonomous vehicles"
    >
      <div className="pt-2">
        <SpecStrip
          items={[
            ["Grant Secured", "$65K"],
            ["UGV Value", "$100K"],
            ["Focus", "Off-road AV"],
            ["Since", "2024"],
          ]}
        />
      </div>

      <Block title="Vehicle simulation cave">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Led the design and build of a specialized vehicle-simulation cave used for immersive off-road testing.",
              "Modified T-slot structure, sourced and framed the plywood screen, machined a custom projector mount, and designed PLA support brackets.",
              "The cave was central to the lab securing a $65,000 grant.",
            ]}
          />
          {/* PHOTO SLOT — the sim cave. Add /public/avmi-cave.jpg and swap for an <img>. */}
          <PhotoSlot label="/avmi-cave.jpg" className="aspect-[4/3] w-full" />
        </div>
      </Block>

      <Block title="Unmanned ground vehicle upgrades">
        <div className="grid gap-8 md:grid-cols-2">
          {/* PHOTO SLOT — the UGV. Add /public/avmi-ugv.jpg and swap for an <img>. */}
          <PhotoSlot label="/avmi-ugv.jpg" className="aspect-[4/3] w-full" />
          <Bullets
            points={[
              "Helped upgrade a $100,000 unmanned ground vehicle across its drivetrain and power systems.",
              "Designed and manufactured the suspension system, DC-motor mounting brackets, and the LiFePO4 battery cage.",
            ]}
          />
        </div>
      </Block>

      <Block title="Tools">
        <ToolTags items={["SolidWorks", "CNC Machining", "PLA / FDM Printing", "LiFePO4 Packs", "T-slot Framing"]} />
      </Block>

      <Block title="Gallery">
        <Gallery slots={["/avmi-1.jpg", "/avmi-2.jpg", "/avmi-3.jpg"]} />
      </Block>
    </CaseStudyLayout>
  );
}
