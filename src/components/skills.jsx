import { Box, Typography } from "@mui/material"
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
    SiJavascript,
    SiReact,
    SiMui,
    SiReactrouter,
    SiTailwindcss,
    SiGit,
    SiGithub
} from 'react-icons/si';
import { useThemeContext } from '../context/ThemeContext';

const Skills = ({ skillRef }) => {
    const { isDark } = useThemeContext();

    const skillsList = [
        {
            name: 'HTML5',
            icon: <FaHtml5 />,
            description: 'Semantic markup structure for creating accessible, modern, and SEO-friendly web documents.'
        },
        {
            name: 'CSS3',
            icon: <FaCss3Alt />,
            description: 'Advanced styling, keyframe animations, grid/flexbox layouts, and pixel-perfect responsive design.'
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
            description: 'Strong JS knowledge and advanced web development.'
        },
        {
            name: 'React.js',
            icon: <SiReact />,
            description: `Building fast React App's and websites.`
        },
        {
            name: 'MUI',
            icon: <SiMui />,
            description: 'Crafting responsive, clean user interfaces utilizing custom Material Design components.'
        },
        {
            name: 'React Router Dom',
            icon: <SiReactrouter />,
            description: 'Configuring dynamic routing, nested layouts, and secure client-side navigation.'
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            description: 'Using utility-first CSS frameworks to build highly customized, ultra-fast modern interfaces.'
        },
        {
            name: 'Git',
            icon: <SiGit />,
            description: 'DevOps tool for source code management.'
        },
        {
            name: 'GitHub',
            icon: <SiGithub />,
            description: 'Collaborative cloud repository version control and production deployment tracking.'
        }
    ]

    return (
        <Box

            ref={skillRef}
            sx={{
                bgcolor: isDark ? '#02000E' : '#FFFFFF',
                color: isDark ? '#ffffff' : '#1A1A2E',
                display: 'flex',
                gap: '50px',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                pt: '50px',
                px: '40px',
                mt: '50px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}>
            {skillsList.map((skill, index) => {
                return (
                    <Box key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '20%'
                        }}>
                        <Box sx={{
                            color: isDark ? '#5A5A72' : '#02000E',
                            fontSize: '40px',
                            transition: 'color 0.3s ease',
                        }}>{skill.icon}</Box>
                        <Typography sx={{ color: isDark ? '#E9E8EB' : '#1A1A2E', fontWeight: 600, transition: 'color 0.3s ease' }}>
                            {skill.name}
                        </Typography>
                        <Typography sx={{ color: isDark ? '#706F78' : '#6B7280', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
                            {skill.description}
                        </Typography>
                    </Box>
                )
            })}
        </Box>
    )
}
export default Skills