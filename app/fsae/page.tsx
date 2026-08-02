// app/fsae/page.tsx  →  route: /fsae
import { CaseStudyLayout, Block, Bullets, SpecStrip, ToolTags, Gallery, PhotoSlot } from "@/app/components/ui";

export const metadata = {
  title: "WPI Formula SAE — Elijah Akpan",
  description: "Performance Lead on a 230 hp electric FSAE race car. Optimizing the powertrain and vehicle dynamics.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="Performance Lead"
      title="WPI Formula SAE"
      role="Performance Lead"
      loc="Worcester, MA"
      dates="Aug 2024 – Present"
      intro="Leading the development of the suspension system, vehicle dynamics, and torque vectoring of a 230 Horsepower FSAE racecar."
    >
      <div className="pt-2">
        <SpecStrip
          items={[
            ["Vehicle Name", "EV26"],
            ["Peak Power", "230 hp"],
            ["0-60", "3.2 seconds"],
            ["Cost of Vehicle", "$110,000"],
          ]}
        />
      </div>

      <Block title="Segment Protection Box">
        <div className="grid gap-8 md:grid-cols-2">
          <Bullets
            points={[
              "Our lithium ion battery segments used to be unprotected with no way of safely transporting them before the storage box was created. This posed a deadly risk if any of the segments were damaged because lithium ion fires cannot be extinguished.",
              "I came up with the idea of a protection storage box for the battery segments, thus I led the development of the enclosure with a $1000 dollar budget to protect, cool, and simultaneously charge a total of 8 highly explosive lithium ion segments that generate a combined 400 volts.",
              "Designed the storage box in Solidworks. I used FEA simulations to determine material choice and material thicknesses.",
              "The PETG rails which constrain the segments were 3D printed out of PETG while the enclosure was machined polycarbonate.",
              "Bus bar charging, NDR power supply, and a PCB was implemented into the protection box to allow safe charging of segments while in the box.",
            ]}
          />
          {/* PHOTO SLOT — the accumulator / enclosure. Add /public/fsae-enclosure.jpg and swap for an <img>. */}
          <iframe
          src="ISP.pdf"
          className="aspect-[4/4] w-full rounded-lg border border-zinc-800"
          title="FSAE report"
/>
        </div>
      </Block>

      <Block title="EV27's advanced suspension system">
        <div className="grid gap-8 md:grid-cols-2">
        <img src="suspension.png" alt="Layout" className="aspect-[4/3] w-full rounded-lg object-cover" />
        <Bullets
          points={[
            "Given my background in vehicle engineering, I was tasked to create the optimal suspension layout for a push/pull configured high performance suspension. While also building the suspension and integrating it onto the racecar.",
            "Designed the suspension layout in OptimumKinematics, using techniques such as optimization and hand calculations to get the suspension layout to meet target motion ratio, roll/pitch gradient, and heave motions.",
            "Simulate layout in optimumdynamics to get desired spring rate as well as predicate handling behavior.", 
            "Currently designing suspension components such as uprights, rockers, and a-arms in SolidWorks.",
          ]}
        />
        </div>
      </Block>

      <Block title="Chief Engineer of 150 HP Combustion Racecar">
        <div className="grid gap-8 md:grid-cols-2">
          {/* PHOTO SLOT — the machined pedal box. Add /public/fsae-pedalbox.jpg and swap for an <img>. */}
          <Bullets
            points={[
              "Led the revival of our 2019 competition car. Vehicle could start with starter fluid but could not hold idle.",
              "Using Haltech Nexus NSP, I steady state tuned the WR450F motor inside of the vehicle to near 100% volumetric efficiency using stoichiometric ratio of 14.7:1.",
              "Rebuilt the wiring harness to connect to the Haltech Elite 1500 ECU."
            ]}
          />
          <img src="marg.jpeg" alt="marg" className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </Block>

      <Block title="Tools">
        <ToolTags
          items={[
            "SolidWorks",
            "MATLAB / Simulink",
            "VI-CarRealTime",
            "OptimumKinematics",
            "OptimumDynamics",
            "MasterCAM",
            "Haas CNC",
          ]}
        />
      </Block>

      <Block title="Gallery">
        {/* Add files to /public and swap these placeholders for <img> tags. */}
        <Gallery slots={["meinmarg.jpeg", "ev1.jpeg", "max.jpeg"]} />
      </Block>
    </CaseStudyLayout>
  );
}
