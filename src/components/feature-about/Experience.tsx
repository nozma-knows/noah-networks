import Link from "next/link";

// Content
const experiences = [
  {
    title: "tbh",
    subtitle: "Full-stack Engineer",
    start: "Jan. 2022",
    end: "Present",
    link: "https://www.tbh.us/",
    points: [
      `Designed and built our user facing web application for connecting users to live coaches, tools for requesting sessions and interacting with content`,
      `Created a web application for our operations team to help facilitate connecting users with coaches, data analysis and managing communications, notifications and content`,
      `Built a web application for admins to get real-time data on users details, participation and feedback`,
    ],
  },
  {
    title: "Texas Instruments",
    subtitle: "Field Apps Engineer",
    start: "May 2018",
    end: "May 2021",
    link: "https://www.ti.com/",
    points: [
      `Supported customers throughout their entire design cycle (circuit design, part selction, pcb design, testing)`,
      `Provided customers with solutions to maximize their design care-abouts (reduce cost, higher performance, smaller solutions)`,
      `Reviewed / Debugged schematics, layouts, and prototypes`,
      `Designed PCBs with Altium`,
      `Used SPICE simulation software to design and integrate analog circuits`,
    ],
  },
  {
    title: "Textron",
    subtitle: "Engineering Intern",
    start: "Summer 2017",
    link: "https://www.textron.com/",
    points: [
      `Designed, built and tested a device used to program a utility product released to market`,
      `Designed PCBs using EAGLE and wrote firmware using Python`,
      `Improved circuit design skills and understanding of the design process`,
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map(
          ({ title, subtitle, start, end, link, points }, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Link href={link} target="_blank">
                    <h3>{title}</h3>
                  </Link>
                  <span>•</span>
                  <div className="italic">{subtitle}</div>
                </div>
                <div className="text-base">
                  {`${start} ${end ? `- ${end}` : ""}`}
                </div>
              </div>
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
