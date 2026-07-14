import { Box, Typography, Button } from '@mui/material';
import eCommerceImg from '../assets/e-commereceImg.png';
import furniture from '../assets/furniture.png';
import todoAppImg from '../assets/todoApp.png';
import todoListImg from '../assets/todoList.png';


const Projects = () => {

    const projects = [
        {
            imgSrc: todoAppImg,
            name: 'Todo App',
            technologies: ["React.js", 'MUI', "Formik ", "Yup"],
            description: 'A sleek, responsive task management application built with React and Material-UI (MUI) to optimize daily productivity. It features a modern, intuitive user interface that delivers smooth user experiences and efficient task organization.',

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
        <Box sx={{ backgroundColor: '#03030c', minHeight: '100vh', padding: '60px 20px' }}>
            <Typography variant="h2" sx={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 2
            }}>
                {`my {dev} projects`}
            </Typography>
            <Typography variant="body1" sx={{
                color: '#706F78',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto 50px auto',
            }}>
                {`Here are some of my projects that I've worked on. I enjoy building things that solve problems and make people's lives easier.`}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '30px'
            }}>
                {projects.map((project, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: '350px' },
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '24px',
                                padding: '24px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Box sx={{
                                width: '100%',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                mb: '24px',
                                display: 'flex'
                            }}>
                                <img
                                    src={project.imgSrc}
                                    alt={`${project.name} preview`}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        display: 'block'
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
                                color: '#FFFFFF',
                                fontWeight: '700',
                                fontSize: '24px',
                                mb: '16px',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {project.name}
                            </Typography>
                            <Typography sx={{
                                color: '#94A3B8',
                                fontSize: '15px',
                                lineHeight: '1.6',
                                mb: '28px',
                                fontFamily: 'Inter, sans-serif'
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
                                            textDecorationColor: '#FFFFFF',
                                            textUnderlineOffset: '4px',
                                            color: '#FFFFFF',
                                            fontSize: '14px',
                                            fontWeight: '600'
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