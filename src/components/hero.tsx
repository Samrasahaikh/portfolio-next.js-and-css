"use client"; // Ensure this is at the very beginning

import { useEffect, useRef } from 'react';
import Image from "next/image";
import '../components/style/hero.css';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
    const hasStarted = useRef(false);
    const textElementRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (hasStarted.current || !textElementRef.current) return; // Prevent re-running the effect if already started

        hasStarted.current = true;
        const texts = ['WEB DEVELOPER', 'GRAPHIC DESIGNER'];
        const speed = 100;
        let textIndex = 0;
        let characterIndex = 0;

        function TypeWriter() {
            if (textElementRef.current && characterIndex < texts[textIndex].length) {
                textElementRef.current.innerHTML += texts[textIndex].charAt(characterIndex);
                characterIndex++;
                setTimeout(TypeWriter, speed);
            } else {
                setTimeout(eraseText, 1000);
            }
        }

        function eraseText() {
            if (textElementRef.current && textElementRef.current.innerHTML.length > 0) {
                textElementRef.current.innerHTML = textElementRef.current.innerHTML.slice(0, -1);
                setTimeout(eraseText, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                characterIndex = 0;
                setTimeout(TypeWriter, 1000);
            }
        }

        TypeWriter();

    }, []);


    return (
        <section>
            <div className="Main__container">
                <div className="img__section">
                    <Image
                        src="/vactore girl.jpg"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className="Image"
                    />
                </div>
                <div className="contant">
                    <h1 className="Main__heading">
                        {`Hi I'm`} <span>Samra Minuddin</span>
                    </h1>
                    <div className="sub__heading">
                        {`I'm a`} <span ref={textElementRef} className="typewriter-text"></span>
                    </div>
                    <div className="button">
                        <a href="mailto:shaikhsamra855@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button>Contact Me</button>
                        </a>
                        <div className="icons">
                            <a href="https://github.com/Samrasahaikh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com/in/samra-shaikh-7164142b6" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://facebook.com/samra.shaikh.14289" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
