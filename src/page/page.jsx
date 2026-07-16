import { Box } from "@mui/material"
import NavBar from "../components/navBar"
import Home from "../components/home"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import ContactMe from "../components/contactMe"
import Projects from "../components/projects"
import { useRef } from "react"




const Page = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);


    const toScroll = (targetRef) => {
        targetRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        })
    }
    return (
        <Box sx={{
        }}>
            <NavBar toScroll={toScroll}
                homeRef={homeRef}
                aboutRef={aboutRef}
                skillRef={skillRef}
                projectRef={projectRef}
                contactRef={contactRef}
            />
            <Home homeRef={homeRef} toScroll={toScroll} projectRef={projectRef} />
            <AboutMe aboutRef={aboutRef} />
            <Skills skillRef={skillRef} />
            <Projects projectRef={projectRef} />
            <ContactMe contactRef={contactRef} />
        </Box>
    )
}
export default Page