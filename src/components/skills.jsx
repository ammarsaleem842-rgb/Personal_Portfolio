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

const Skills = () => {

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
        <Box sx={{
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
            py: '40px',
        }}>
            {skillsList.map((skill, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            width: {
                                xs: '100%',
                                sm: 'calc(50% - 12px)',
                                md: 'calc(25% - 12px)'
                            },
                            boxSizing: 'border-box',
                            p: '16px'
                        }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '80%',
                            pl: '20px',
                        }}>
                            <Box sx={{
                                fontSize: '32px',
                                color: 'rgba(255, 255, 255, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                {skill.icon}
                            </Box>
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: '1rem',
                                color: '#ffffff',
                                borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                                pl: '16px',
                                lineHeight: 1.2
                            }}>
                                {skill.name}
                            </Typography>
                            <Typography sx={{
                                fontSize: '0.875rem',
                                color: 'rgba(255, 255, 255, 0.6)',
                                pl: '16px',
                                lineHeight: 1.5
                            }}>
                                {skill.description}
                            </Typography>
                        </Box>

                    </Box>
                )
            })
            }

        </Box >
    )
}
export default Skills