// app/polamer/page.tsx  →  route: /polamer
import { CaseStudyLayout, Block, Bullets, SpecStrip, ToolTags, PhotoSlot } from "@/app/components/ui";

export const metadata = {
  title: "Polamer Precision — Elijah Akpan",
  description: "Manufacturing engineering intern programming CAM toolpaths and building machine simulations for aerospace engine components.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="Internship"
      title="Polamer Precision"
      role="Mechanical Engineering Intern"
      loc="New Britain, CT"
      dates="May 2026 – Aug 2026"
      intro="Developed and optimized manufacturing processes for engine components used in 20,000+ hp aerospace engines."
    >
      <div className="pt-2">
        <SpecStrip
          items={[
            ["Collisions Already Saved", "5"],
            ["Duration", "3 Months"],
            ["Industry", "Aerospace"],
          ]}
        />
      </div>

      <Block title="Vericut Machine Templates">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Reduced a projected 50+ production errors by creating vertical turning machine templates to optimize CAM and machining verification via simulations in VERICUT.",
              "Modeled 8 Vertical Turning Lathes using SolidWorks. I had to reverse engineer each machine using metrology, machine manuals, and manufacturer's factory layout models.",
              "Using Fanuc macros/G-code and CGTECH macros, I coded turret tool changing and RAM spindle tool changing.",
              "Built in automatic tool changing functions using C++ through CME-API visual studios plugin.",
              "8 Machines Done: Doosan PUMA V550 L/R, Hyundai LV800R, Hyundai LV1100R, Doosan Puma VTR 1216, Doosan Puma VTS 1214, Mazak Megaturn 900, and the Mazak Megaturn 1600",
            ]}
          />
          <iframe
          src="https://www.youtube.com/embed/zOzxPvPffyo"
          title="VTS1214 Vericut simulation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-lg border border-zinc-800"
          />
        </div>
      </Block>

      <Block title="Computer Aided Manufacturing (CAM)">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
            "Programmed complex CAM toolpaths using MasterCAM for engine components in both turning and milling.",
            "Operated 5 Axis & VTL machines to create standard operating proceduce for specific parts.",
            "Helped write g-code probing macro program to automate probing to improve precision, repeatability, and runtime.",
            ]}
        />
        </div>
      </Block>

      <Block title="Tools">
        <ToolTags items={["MasterCAM", "Vericut", "SolidWorks", "C++", "Python", "CNC Machining"]} />
      </Block>
    </CaseStudyLayout>
  );
}
