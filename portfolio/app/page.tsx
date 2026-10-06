import Contacts from "@/components/Contacts"
import Navbar from "@/components/Navbar"
import Menu from "@/components/Menu"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <div>
      <Navbar/> 
      <Menu/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
  )
}
