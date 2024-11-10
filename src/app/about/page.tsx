// pages/about.tsx
"use client";
import Image from "next/image";
import "@/components/style/about.css";

export default function About() {
  return (
    <main>
    <div className="about-container">
      
      {/* Image section */}
      <Image
        src="/vactore girl.jpg"
        alt="Profile Picture"
        width={400}
        height={400}
        className="pro_img"
      />

      {/* About section */}
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <p className="about-text">
          {`Hello! I'm Samra, a passionate Graphic Designer and Frontend Developer with a solid foundation in Computer Science. I completed my studies in Computer Science from Hyderabad Government Vocational Institute, which set the stage for my journey in design and technology. Alongside my studies, I pursued specialized courses, including an Amazon training program at JDC Foundation, and advanced my skills with MS Word and Excel.
            With expertise in HTML, CSS, JavaScript, Tailwind CSS, TypeScript, and Next.js, I bring dynamic, visually engaging, and user-friendly web interfaces to life. I'm dedicated to continuous learning and creating meaningful digital experiences that blend aesthetics with functionality.`}
        </p>
      </div>
    </div>
    </main>
  );
}
