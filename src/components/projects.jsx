import { Box, Typography, Button } from '@mui/material';
import eCommerceImg from '../assets/e-commereceImg.png';
import furniture from '../assets/furniture.png';
import todoAppImg from '../assets/todoApp.png';
import todoListImg from '../assets/todoList.png';
import KanBanImg from '../assets/KanBanImg.png';
import { useThemeContext } from '../context/ThemeContext';
import { useState, useEffect } from 'react';


const Projects = ({ projectRef }) => {

    const [isExpand, setIsExpant] = useState(false)
    const [zoomed, setZoomed] = useState(null)

    const handleExpand = () => {
        setIsExpant(!isExpand)
    }

    const handleImageClick = (index) => {
        setZoomed((prev) => (prev === index ? null : index))
    }

    useEffect(() => {
        document.body.style.overflow = zoomed !== null ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [zoomed])

    const { isDark } = useThemeContext();

    const projects = [
        {
            imgSrc: todoAppImg,
            name: 'Todo App',
            technologies: ["React.js", 'MUI', "Formik ", "Yup"],
            description: 'A sleek, responsive task management application built with React and Material-UI (MUI) to optimize daily productivity. It features a modern, intuitive user interface that delivers smooth user experiences and efficient task organization.',

        },
        {
            imgSrc: KanBanImg,
            name: "Kanban board",
            technologies: ["react.js", "MUI", "formik", "Yup", "Redux.js", "dnd(drag&drop)"],
            description: 'Built using HTML, CSS, JavaScript, React.js, and Material UI (MUI) Implemented drag-and-drop task management functionality for seamless user experience Utilized React hooks for smooth state management and component lifecycle control Styled with Material UI components for a modern and consistent interface',
            githubLink: 'https://github.com/ammarmehdi938/kanban_board'
        },
        {
            imgSrc: eCommerceImg,
            name: 'E-Commerce Admin Dashboard',
            technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
            description: "Built a comprehensive admin dashboard for managing e-commerce products and orders. Implemented responsive layout with clean UI and intuitive user interface. Applied modern state management practices for efficient data handling.",
            githubLink: "https://github.com/ammarmehdi938/Admin_Dashboard",
        },
        {
            imgSrc: furniture,
            name: ' Furniture E-Commerce Website ',
            technologies: ["React.js", "MUI", "formik", "Yup", "react Router Dom"],
            description: 'Built a comprehensive Furniture E-Commerece Website for managing products, Carts and orders. Implemented responsive layout with clean UI and intuitive user interface. Applied modern state management practices for efficient data handling.',
            githubLink: "https://github.com/ammarsaleem842-rgb/Task_9",
            liveUrl: 'https://app.netlify.com/projects/joyful-semifreddo-2eeaa5/deploys/6a500b2471a90bf462abf82e'
        },
        {
            imgSrc: todoListImg,
            name: 'Todo List',
            technologies: ['Html5', "Css3", "JavaScript", "DOM"],
            description: 'A sleek, responsive task management application built with React and Material-UI (MUI) to optimize daily productivity. It features a modern, intuitive user interface that delivers smooth user experiences and efficient task organization.',
        }
    ];

    return (
        <Box
            ref={projectRef}
            sx={{
                backgroundColor: isDark ? '#03030c' : '#F0F2F7',
                minHeight: '100vh',
                padding: '60px 20px',
                transition: 'background-color 0.3s ease',
            }}>
            <Typography variant="h2" sx={{
                color: isDark ? 'white' : '#1A1A2E',
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 2,
                transition: 'color 0.3s ease',
            }}>
                {`my {dev} projects`}
            </Typography>
            <Typography variant="body1" sx={{
                color: isDark ? '#706F78' : '#6B7280',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto 50px auto',
                transition: 'color 0.3s ease',
            }}>
                {`Here are some of my projects that I've worked on. I enjoy building things that solve problems and make people's lives easier.`}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '30px'
            }}>
                {zoomed !== null && (
                    <Box
                        onClick={() => setZoomed(null)}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            bgcolor: 'rgba(0,0,0,0.55)',
                            zIndex: 1300,
                        }}
                    />
                )}
                {projects.map((project, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                width: isExpand ? "100%" : { xs: '100%', sm: '350px' },
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '24px',
                                padding: '24px',
                                boxSizing: 'border-box',
                                bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                                border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)',
                                transition: 'background-color 0.3s ease, border-color 0.3s ease',
                                '&:hover': {
                                    border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,180,216,0.3)',
                                    boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.08)',
                                }
                            }}
                        >
                            <Box sx={{
                                width: '100%',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                mb: '24px',
                                display: 'flex',
                                position: 'relative'
                            }}>
                                <img
                                    onClick={() => handleImageClick(index)}
                                    src={project.imgSrc}
                                    alt={`${project.name} preview`}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        cursor: 'pointer',
                                        transition: 'transform 0.5s ease, width 0.5s ease, height 0.5s ease, top 0.5s ease, left 0.5s ease',
                                        ...(zoomed === index ? {
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            width: '100vw',
                                            height: '100vh',
                                            objectFit: 'contain',
                                            zIndex: 1400,
                                            borderRadius: 0,
                                            boxShadow: '0 8px 40px rgba(0,0,0,0.6)'
                                        } : {})
                                    }}
                                />
                            </Box>
                            <Typography sx={{
                                color: '#64748B',
                                fontSize: '14px',
                                fontWeight: '500',
                                mb: '12px'
                            }}>
                                {project.technologies}
                            </Typography>
                            <Typography variant="h5" sx={{
                                color: isDark ? '#FFFFFF' : '#1A1A2E',
                                fontWeight: '700',
                                fontSize: '24px',
                                mb: '16px',
                                fontFamily: 'Inter, sans-serif',
                                transition: 'color 0.3s ease',
                            }}>
                                {project.name}
                            </Typography>
                            <Typography sx={{
                                color: isDark ? '#94A3B8' : '#5A6A7A',
                                fontSize: '15px',
                                lineHeight: '1.6',
                                mb: '28px',
                                fontFamily: 'Inter, sans-serif',
                                transition: 'color 0.3s ease',
                            }}>
                                {project.description}
                            </Typography>
                            <Box sx={{
                                gap: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                mt: 'auto'
                            }}>
                                <Button
                                    variant='text'
                                    sx={{
                                        color: '#38BDF8',
                                        border: '1px solid #0369A1',
                                        borderRadius: '24px',
                                        padding: '6px 20px',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        '&:hover': {
                                            border: '1px solid #38BDF8',
                                            backgroundColor: 'rgba(56, 189, 248, 0.08)'
                                        }
                                    }}
                                >
                                    {project.liveUrl ? 'See live' : 'No Live Demo'}
                                </Button>

                                <Button
                                    variant='text'
                                    sx={{
                                        textTransform: 'none',
                                        padding: 0,
                                        minWidth: 'auto',
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'underline',
                                            textDecorationColor: isDark ? '#FFFFFF' : '#1A1A2E',
                                            textUnderlineOffset: '4px',
                                            color: isDark ? '#FFFFFF' : '#1A1A2E',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        See on GitHub
                                    </a>
                                </Button>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Projects;