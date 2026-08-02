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

      <Block title="Thermal Simulations">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "My main project during my Co-Op was helping to design a new 3 dB hybrid coupler. I was responsible for the geometry and material choice which were tested using thermal simulations.", 
              "First part of the thermal simulation was creating the thermal path to see how heat will transfer move through the material layers.",
              "Second was first hand calculations of heat transfer to get desired cross sectional area, thermal conductivity coefficient, and material thickness.",
              "After all of target values were obtained, they were put into SolidWorks FEA thermal simulation to then verify if the part can handle the projected heat of the system it will be placed in."
            ]}
          />
          {/* PHOTO SLOT — a simulation render or hardware shot (mind any confidentiality limits).
              Add /public/ttm-fea.jpg and swap for an <img>. */}
        <img src="FEA.jpg" alt="XingerPart" className="aspect-[4/3] w-full rounded-lg object-contain" />
        </div>
      </Block>

      <Block title="Crack Detection MATLAB GUI">
        <div className="grid gap-10 md:grid-cols-2">
        <Bullets
          points={[
            "Built a graphic user interface in MATLAB that uses shape recognition and machine learning to detect cracks in vias. The defected vias are then sorted in a folder.",
            "Has the ability to process folders with 200+ images at a time helping to replace a long and tedious manual inspection.",
            "The GUI saved engineers a projected 100+ hours of quality work.",
            "300+ lines of code that I coded without any prior knowledge of image processing."
          ]}
        />
        <img src="crackdetection.jpg" alt="MATLABGUI" className="aspect-[4/3] w-full rounded-lg object-contain" />
        </div>
      </Block>

      <Block title="Hot Plate Protection Structure">
        <div className="grid gap-10 md:grid-cols-2">
        <Bullets
          points={[
            "Designed & fabricated an aluminum structure in less than a week to both improve precision and protect RF engineers from 140 Celsius hot plate while taking resistance measurements of coupons holding RF components. ",
            "T slot 4040 aluminum linear rails were fabricated using a benchtop bandsaw to 8.25 inches. Cover was 3D printed using Ultimaker 4S. Connectors were attached to rails using roll-in t nut with screws, so height of structure is adjustable.",
            "This structure now allows RF engineers to safely conduct hot plate test as well as improving precision due to it now being at a safe distance and giving RF engineers the ability to rest their hands on the cover.",
          ]}
        />
          <img src="fabricated8020.jpg" alt="8020structure" className="aspect-[4/4] w-full rounded-lg object-contain" />
        </div>
      </Block>

      <Block title="Tools">
        <ToolTags items={["AutoCAD", "MATLAB", "SolidWorks", "SolidWorks Visualize", "LabVIEW", "PAXit"]} />
      </Block>
    </CaseStudyLayout>
  );
}
