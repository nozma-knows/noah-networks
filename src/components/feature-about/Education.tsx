import Link from "next/link";

// Education Content
const education = [
  {
    school: "Michigan State University",
    degree: "BS in CE and EE",
    graduation: "Class of 2019",
    link: "https://www.egr.msu.edu/",
    technicalGPA: "3.73",
    cumulativeGPA: "3.66",
  },
];

export default function Education() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Education</h2>
      <div className="flex flex-col gap-4">
        {education.map(
          (
            { school, degree, graduation, link, technicalGPA, cumulativeGPA },
            index
          ) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Link href={link} target="_blank">
                    <h3>{school}</h3>
                  </Link>
                  <span>•</span>
                  <div className="italic">{degree}</div>
                </div>
                <div className="text-base">{graduation}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-base">{`Technical GPA: ${technicalGPA}`}</div>
                <span>•</span>
                <div className="text-base">{`Cumulative GPA: ${cumulativeGPA}`}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
