import { Box, Typography, Button, Chip } from '@mui/material';
import eCommerceImg from '../assets/e-commereceImg.png';
import furniture from '../assets/furniture.png';
import todoAppImg from '../assets/todoApp.png';
import todoListImg from '../assets/todoList.png';
import KanBanImg from '../assets/KanBanImg.png';
import { useThemeContext } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const zoomStyles = `
  @keyframes zoomIn {
    from { transform: scale(0.15); opacity: 0; border-radius: 24px; }
    to   { transform: scale(1);    opacity: 1; border-radius: 0px; }
  }
  @keyframes zoomOut {
    from { transform: scale(1);    opacity: 1; border-radius: 0px; }
    to   { transform: scale(0.15); opacity: 0; border-radius: 24px; }
  }
  @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
`;

const Projects = ({ projectRef }) => {
    const [zoomed, setZoomed] = useState(null);      // index of zoomed image
    const [isClosing, setIsClosing] = useState(false); // drives exit animation
    const { isDark } = useThemeContext();

    const ANIM_MS = 380; // must match CSS animation duration

    const handleImageClick = (index) => {
        if (zoomed === index) {
            closeZoom();
        } else {
            setIsClosing(false);
            setZoomed(index);
        }
    };

    const closeZoom = () => {
        setIsClosing(true);
        setTimeout(() => {
            setZoomed(null);
            setIsClosing(false);
        }, ANIM_MS);
    };

    useEffect(() => {
        document.body.style.overflow = zoomed !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = '' };
    }, [zoomed]);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape' && zoomed !== null) closeZoom(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [zoomed]);

    const projects = [
        {
            imgSrc: todoAppImg,
            name: 'Todo App',
            technologies: ['React.js', 'MUI', 'Formik', 'Yup'],
            description: 'A sleek, responsive task management app built with React and MUI to optimize daily productivity. Features a modern UI with smooth experiences and efficient task organization.',
        },
        {
            imgSrc: KanBanImg,
            name: 'Kanban Board',
            technologies: ['React.js', 'MUI', 'Redux', 'DnD'],
            description: 'Drag-and-drop task management with seamless UX, built using React hooks for smooth state management. Styled with Material UI for a modern, consistent interface.',
            githubLink: 'https://github.com/ammarmehdi938/kanban_board',
        },
        {
            imgSrc: eCommerceImg,
            name: 'E-Commerce Dashboard',
            technologies: ['React.js', 'JavaScript', 'CSS3'],
            description: 'A comprehensive admin dashboard for managing e-commerce products and orders. Responsive layout with clean UI and intuitive data handling.',
            githubLink: 'https://github.com/ammarmehdi938/Admin_Dashboard',
        },
        {
            imgSrc: furniture,
            name: 'Furniture E-Commerce',
            technologies: ['React.js', 'MUI', 'React Router'],
            description: 'Full-featured furniture e-commerce website for managing products, carts and orders. Responsive layout with clean UI and modern state management.',
            githubLink: 'https://github.com/ammarsaleem842-rgb/Task_9',
            liveUrl: 'https://app.netlify.com/projects/joyful-semifreddo-2eeaa5/deploys/6a500b2471a90bf462abf82e',
        },
        {
            imgSrc: todoListImg,
            name: 'Todo List',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            description: 'Vanilla JS task manager demonstrating core DOM manipulation, event handling, and local storage. Clean, minimal interface with smooth interactions.',
        },
    ];

    return (
        <Box
            ref={projectRef}
            sx={{
                backgroundColor: isDark ? '#03030c' : '#F0F2F7',
                minHeight: '100vh',
                pt: '90px',
                pb: '90px',
                px: { xs: '24px', md: '60px' },
                transition: 'background-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background accents */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '400px',
                height: '400px',
                background: isDark
                    ? 'radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Section header */}
            <Box sx={{ textAlign: 'center', mb: '60px', position: 'relative' }}>
                <Typography sx={{
                    color: '#00B4D8',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    mb: '12px',
                }}>
                    What I've built
                </Typography>
                <Typography variant="h2" sx={{
                    color: isDark ? 'white' : '#1A1A2E',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '3rem' },
                    letterSpacing: '-0.8px',
                    mb: '14px',
                    transition: 'color 0.3s ease',
                }}>
                    My{' '}
                    <Box component="span" sx={{ fontFamily: 'monospace', color: '#00B4D8' }}>
                        {'{dev}'}
                    </Box>{' '}
                    projects
                </Typography>
                <Typography sx={{
                    color: isDark ? '#706F78' : '#6B7280',
                    maxWidth: '520px',
                    mx: 'auto',
                    lineHeight: 1.65,
                    transition: 'color 0.3s ease',
                }}>
                    A selection of projects I've worked on — each one a chance to solve real problems and sharpen my craft.
                </Typography>
            </Box>

            {/* Inject keyframe animations */}
            <style>{zoomStyles}</style>

            {/* Animated lightbox overlay */}
            {zoomed !== null && (
                <>
                    {/* Backdrop */}
                    <Box
                        onClick={closeZoom}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            bgcolor: 'rgba(0,0,0,0.75)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            zIndex: 1300,
                            animation: isClosing
                                ? `fadeOut ${ANIM_MS}ms ease forwards`
                                : `fadeIn ${ANIM_MS}ms ease forwards`,
                        }}
                    />

                    {/* Zoomed image */}
                    <Box
                        onClick={closeZoom}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1400,
                            cursor: 'zoom-out',
                            p: { xs: '12px', md: '32px' },
                            boxSizing: 'border-box',
                        }}
                    >
                        <img
                            src={projects[zoomed].imgSrc}
                            alt={projects[zoomed].name}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: isClosing ? '24px' : '12px',
                                boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
                                animation: isClosing
                                    ? `zoomOut ${ANIM_MS}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`
                                    : `zoomIn  ${ANIM_MS}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                                transformOrigin: 'center center',
                            }}
                        />
                    </Box>
                </>
            )}

            {/* Projects grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: '24px',
                maxWidth: '1200px',
                mx: 'auto',
            }}>
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                            border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                            boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                border: isDark ? '1px solid rgba(0,180,216,0.2)' : '1px solid rgba(0,180,216,0.25)',
                                boxShadow: isDark
                                    ? '0 16px 48px rgba(0,0,0,0.5)'
                                    : '0 16px 48px rgba(0,0,0,0.1)',
                                '& .project-image': {
                                    transform: 'scale(1.04)',
                                }
                            },
                        }}
                    >
                        {/* Image */}
                        <Box sx={{ overflow: 'hidden', height: '200px', flexShrink: 0, position: 'relative' }}>
                            <img
                                className="project-image"
                                onClick={() => handleImageClick(index)}
                                src={project.imgSrc}
                                alt={`${project.name} preview`}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    display: 'block',
                                    cursor: 'zoom-in',
                                    transition: 'transform 0.45s ease',
                                }}
                            />
                        </Box>

                        {/* Content */}
                        <Box sx={{ p: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            {/* Tech tags */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: '14px' }}>
                                {project.technologies.map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        sx={{
                                            bgcolor: isDark ? 'rgba(0,180,216,0.1)' : 'rgba(0,180,216,0.07)',
                                            color: isDark ? '#64C8D8' : '#0093B0',
                                            border: isDark ? '1px solid rgba(0,180,216,0.18)' : '1px solid rgba(0,180,216,0.15)',
                                            fontSize: '0.7rem',
                                            fontWeight: 600,
                                            height: '22px',
                                        }}
                                    />
                                ))}
                            </Box>

                            <Typography variant="h5" sx={{
                                color: isDark ? '#FFFFFF' : '#1A1A2E',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                mb: '10px',
                                transition: 'color 0.3s ease',
                            }}>
                                {project.name}
                            </Typography>

                            <Typography sx={{
                                color: isDark ? '#94A3B8' : '#5A6A7A',
                                fontSize: '0.88rem',
                                lineHeight: '1.65',
                                mb: '24px',
                                flex: 1,
                                transition: 'color 0.3s ease',
                            }}>
                                {project.description}
                            </Typography>

                            {/* Links */}
                            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', mt: 'auto' }}>
                                {project.liveUrl && (
                                    <Button
                                        component="a"
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant='text'
                                        startIcon={<FiExternalLink size={14} />}
                                        sx={{
                                            color: '#38BDF8',
                                            border: '1px solid rgba(56,189,248,0.3)',
                                            borderRadius: '24px',
                                            padding: '5px 16px',
                                            textTransform: 'none',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            '&:hover': {
                                                border: '1px solid #38BDF8',
                                                backgroundColor: 'rgba(56,189,248,0.08)',
                                            }
                                        }}
                                    >
                                        Live Demo
                                    </Button>
                                )}

                                {project.githubLink ? (
                                    <Button
                                        component="a"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant='text'
                                        startIcon={<FiGithub size={14} />}
                                        sx={{
                                            textTransform: 'none',
                                            color: isDark ? '#94A3B8' : '#5A6A7A',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            p: '5px 12px',
                                            borderRadius: '24px',
                                            '&:hover': {
                                                color: isDark ? '#E9E8EB' : '#1A1A2E',
                                                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                                            }
                                        }}
                                    >
                                        GitHub
                                    </Button>
                                ) : (
                                    <Typography sx={{
                                        color: isDark ? '#4A4A5A' : '#9CA3AF',
                                        fontSize: '0.78rem',
                                        fontWeight: 500,
                                        fontStyle: 'italic',
                                    }}>
                                        Private / No repo
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;