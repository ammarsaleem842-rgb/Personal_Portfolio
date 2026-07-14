import { Box, Divider, Typography } from '@mui/material';
import introductionImage from '../assets/intro.png';

const AboutMe = () => {
    return (
        <Box sx={{
            bgcolor: '#02000E',
            mt: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant="h2" sx={{
                color: 'white',
                textAlign: 'center',

            }}>
                {`Problem Solver <coder>`}
            </Typography>
            <Typography sx={{
                color: '#706F78',
                textAlign: 'center',
            }}>
                Front - End Web Developer with hands-on application development experience.
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <Box sx={{
                    width: '40%',
                }}>
                    <Typography sx={{
                        color: '#706F78',
                        textAlign: 'center',
                    }}>
                        <span style={{ color: '#ffffff' }}>Intermediate in Computer Science.</span> Studying foundational tech at Sir Syed College with a focus on modern software workflows and building a strong technical foundation.
                    </Typography>
                    <Typography sx={{
                        color: '#706F78',
                        textAlign: 'center',
                    }}>
                        <span style={{ color: '#ffffff' }}>Front-End Intern at FentixTech.</span> Actively collaborating on real-world projects, building reusable UI components, and learning TypeScript to elevate code quality.
                    </Typography>
                    <Typography sx={{
                        color: '#706F78',
                        textAlign: 'center',
                    }}>
                        <span style={{ color: '#ffffff' }}>Passionate about clean UI.</span> Experienced in building interactive features like e-commerce dashboards and drag-and-drop Kanban boards with a focus on component-based architecture.
                    </Typography>
                </Box>
                <Box>
                    <img src={introductionImage} alt="Introduction" />
                </Box>
            </Box>
            <Divider />
        </Box >
    )
}
export default AboutMe