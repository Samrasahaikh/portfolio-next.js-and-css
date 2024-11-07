import React from "react";
import "@/components/style/skills.css";

export default function Skills() {
  const skills = [
    { name: "Graphic Designing", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
