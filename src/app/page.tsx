import Hero from "@/components/hero"
import About from "@/app/about/page"
import Skills from "@/app/skills/page"
import Contact from "@/app/contact/page"
export default function Home(){
  return(
    <main>
     <Hero />
     <About />
     <Skills />
     <Contact />
    </main>
  )
}