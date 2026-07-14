import { Box } from "@mui/material"
import NavBar from "../components/navBar"
import Home from "../components/home"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import ContactMe from "../components/contactMe"
import Projects from "../components/projects"


const Page = () => {
    return (
        <Box sx={{
            bgcolor: "#02000E",
            height: "100vh"
        }}>
            <NavBar />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </Box>
    )
}
export default Page