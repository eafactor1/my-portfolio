// app/ttm/page.tsx  →  route: /ttm
import { CaseStudyLayout, Block, Bullets, SpecStrip, ToolTags, PhotoSlot } from "@/app/components/ui";

export const metadata = {
  title: "TTM Technologies — Elijah Akpan",
  description: "Mechanical engineering intern designing and testing RF components and PCBs for fighter jets, using thermal FEA.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="Internship"
      title="TTM Technologies"
      role="Mechanical Engineering Intern"
      loc="Syracuse, NY"
      dates="Aug 2025 – Dec 2025"
      intro="Designed and tested RF components and PCBs for fighter jets"
    >
      <div className="pt-2">
        <SpecStrip
          items={[
            ["Projects Built", "5+"],
            ["Duration", "4 Months"],
            ["Industry", "Defense"],
          ]}
        />
      </div>

      <Block title="Thermal FEA Simulations">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Helped design a new 3 dB hybrid coupler, using thermal FEA to maximize both thermal and RF performance at once.",
              "The work sat at the intersection of mechanical and electrical: heat paths and RF behavior had to be optimized together, not in isolation.",
            ]}
          />
          {/* PHOTO SLOT — a simulation render or hardware shot (mind any confidentiality limits).
              Add /public/ttm-fea.jpg and swap for an <img>. */}
          <PhotoSlot label="/ttm-fea.jpg" className="aspect-[4/3] w-100" />
        </div>
      </Block>

      <Block title="Crack Detection MATLAB GUI">
        <div className="grid gap-10 md:grid-cols-2">
        <Bullets
          points={[
            "Built a MATLAB GUI that uses shape recognition to automatically flag defective vias.",
            "It processes folders of 200+ images at a time, replacing a manual inspection step.",
            "The tool saved engineers 100+ hours of quality work.",
          ]}
        />
          <PhotoSlot label="/ttm-fea.jpg" className="aspect-[4/3] w-100" />
        </div>
      </Block>

      <Block title="Hot Plate Protection Structure">
        <div className="grid gap-10 md:grid-cols-2">
        <Bullets
          points={[
            "Designed & fabricated an aluminum structure in less than a week to both improve precision and protect RF engineers from 140 Celsius hot plate while taking resistance measurements of coupons holding RF components. ",
            "T slot 4040 aluminum linear rails were fabricated using a benchtop bandsaw to 8.25 inches. Cover was 3D printed using Ultimaker 4S. Connectors were attached to rails using roll-in t nut with screws, so height of structure is adjustable.",
            "The tool saved engineers 100+ hours of quality work.",
          ]}
        />
          <PhotoSlot label="/ttm-fea.jpg" className="aspect-[4/3] w-100" />
        </div>
      </Block>

      <Block title="Tools">
        <ToolTags items={["AutoCAD", "MATLAB", "SolidWorks", "SolidWorks Visualize", "LabVIEW", "PAXit"]} />
      </Block>
    </CaseStudyLayout>
  );
}
