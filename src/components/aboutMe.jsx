import { Box, Typography, Chip } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

const AboutMe = ({ aboutRef }) => {
    const { isDark } = useThemeContext();

    const stats = [
        { value: 'Jun', label: 'Intern @ FentixTech' },
        { value: '7', label: 'Projects Built' },
        { value: '9+', label: 'Technologies' },
        { value: '100%', label: 'Dedication' },
    ];

    const highlights = [
        {
            icon: '🎓',
            bold: 'ICS Graduate.',
            text: ' Graduated from Sir Syed College, Wazirabad, with a solid foundation in Computer Science and software fundamentals.',
        },
        {
            icon: '⚛️',
            bold: 'Specializing in React & Material UI.',
            text: ' Constantly learning new technologies like TypeScript and following modern development trends.',
        },
        {
            icon: '🤝',
            bold: 'Love working in team environments.',
            text: ' I enjoy collaborating with developers at FentixTech, but I can also drive projects and work independently.',
        },
    ];

    const techTags = ['React.js', 'JavaScript', 'TypeScript', 'MUI', 'GitHub', 'Tailwind CSS', 'Git', 'CSS3', 'HTML5'];

    return (
        <Box
            ref={aboutRef}
            sx={{
                bgcolor: isDark ? '#02000E' : '#F5F7FA',
                pt: '100px',
                pb: '100px',
                px: { xs: '24px', md: '80px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                boxSizing: 'border-box',
                transition: 'background-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative blobs */}
            <Box sx={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: isDark
                    ? 'radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '40px',
                left: '-60px',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: isDark
                    ? 'radial-gradient(circle, rgba(100,50,200,0.06) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(100,50,200,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: '64px', position: 'relative' }}>
                <Typography sx={{
                    color: '#00B4D8',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    mb: '12px',
                }}>
                    Get to know me
                </Typography>
                <Typography variant="h2" sx={{
                    color: isDark ? 'white' : '#1A1A2E',
                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                    fontWeight: 800,
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                    mb: '16px',
                    transition: 'color 0.3s ease',
                }}>
                    Problem solver{' '}
                    <Box component="span" sx={{
                        color: '#00B4D8',
                        fontFamily: 'monospace',
                    }}>
                        {'<coder>'}
                    </Box>
                </Typography>
                <Typography sx={{
                    color: isDark ? '#706F78' : '#6B7280',
                    fontSize: '1.05rem',
                    maxWidth: '520px',
                    mx: 'auto',
                    lineHeight: 1.7,
                    transition: 'color 0.3s ease',
                }}>
                    Front-End Web Developer with hands-on application development experience, passionate about turning ideas into elegant digital experiences.
                </Typography>
            </Box>

            {/* Stats Row */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: '16px', md: '24px' },
                mb: '72px',
                width: '100%',
                maxWidth: '860px',
            }}>
                {stats.map((stat, i) => (
                    <Box key={i} sx={{
                        flex: { xs: '1 1 calc(50% - 16px)', md: '1 1 180px' },
                        maxWidth: '200px',
                        textAlign: 'center',
                        py: '28px',
                        px: '20px',
                        borderRadius: '20px',
                        bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                        border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                        boxShadow: isDark ? 'none' : '0 2px 16px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            border: isDark ? '1px solid rgba(0,180,216,0.25)' : '1px solid rgba(0,180,216,0.3)',
                            boxShadow: isDark ? '0 0 24px rgba(0,180,216,0.08)' : '0 4px 24px rgba(0,180,216,0.12)',
                            transform: 'translateY(-3px)',
                        },
                    }}>
                        <Typography sx={{
                            fontSize: '2.4rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #00B4D8, #7B61FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1,
                            mb: '8px',
                        }}>
                            {stat.value}
                        </Typography>
                        <Typography sx={{
                            color: isDark ? '#706F78' : '#6B7280',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            letterSpacing: '0.5px',
                        }}>
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Highlights + Tech Tags Grid */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: '40px',
                maxWidth: '1100px',
                width: '100%',
                mb: '72px',
            }}>
                {/* Left: Highlight cards */}
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {highlights.map((item, i) => (
                        <Box key={i} sx={{
                            display: 'flex',
                            gap: '18px',
                            alignItems: 'flex-start',
                            p: '22px 24px',
                            borderRadius: '18px',
                            bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                            border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
                            boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: isDark ? 'rgba(0,180,216,0.2)' : 'rgba(0,180,216,0.25)',
                                transform: 'translateX(4px)',
                            },
                        }}>
                            <Box sx={{
                                fontSize: '1.5rem',
                                minWidth: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px',
                                bgcolor: isDark ? 'rgba(0,180,216,0.1)' : 'rgba(0,180,216,0.08)',
                            }}>
                                {item.icon}
                            </Box>
                            <Typography sx={{
                                color: isDark ? '#94A3B8' : '#5A6A7A',
                                fontSize: '0.95rem',
                                lineHeight: '1.65',
                                transition: 'color 0.3s ease',
                            }}>
                                <Box component="span" sx={{
                                    color: isDark ? '#E9E8EB' : '#1A1A2E',
                                    fontWeight: 700,
                                }}>
                                    {item.bold}
                                </Box>
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Right: Tech stack tags + bio */}
                <Box sx={{
                    flex: '0 0 340px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                }}>
                    <Box sx={{
                        p: '28px',
                        borderRadius: '20px',
                        bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                        border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
                        boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.04)',
                    }}>
                        <Typography sx={{
                            color: isDark ? '#E9E8EB' : '#1A1A2E',
                            fontWeight: 700,
                            fontSize: '1rem',
                            mb: '16px',
                            letterSpacing: '-0.2px',
                        }}>
                            Tech I Work With
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {techTags.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                        bgcolor: isDark ? 'rgba(0,180,216,0.1)' : 'rgba(0,180,216,0.08)',
                                        color: isDark ? '#00C8E8' : '#0093B0',
                                        border: isDark ? '1px solid rgba(0,180,216,0.2)' : '1px solid rgba(0,180,216,0.18)',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.2px',
                                        '&:hover': {
                                            bgcolor: isDark ? 'rgba(0,180,216,0.18)' : 'rgba(0,180,216,0.14)',
                                        },
                                        transition: 'all 0.2s ease',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{
                        p: '28px',
                        borderRadius: '20px',
                        background: isDark
                            ? 'linear-gradient(135deg, rgba(0,180,216,0.08) 0%, rgba(123,97,255,0.08) 100%)'
                            : 'linear-gradient(135deg, rgba(0,180,216,0.06) 0%, rgba(123,97,255,0.06) 100%)',
                        border: isDark ? '1px solid rgba(0,180,216,0.15)' : '1px solid rgba(0,180,216,0.15)',
                    }}>
                        <Typography sx={{
                            color: isDark ? '#94A3B8' : '#5A6A7A',
                            fontSize: '0.92rem',
                            lineHeight: '1.75',
                            fontStyle: 'italic',
                        }}>
                            "I build digital experiences that are fast, accessible, and beautiful. My goal is to write code that not only works—but tells a story."
                        </Typography>
                        <Typography sx={{
                            color: isDark ? '#00B4D8' : '#0093B0',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            mt: '12px',
                        }}>
                            — Ammar Mehdi
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Bottom divider */}
            <Box sx={{
                width: '100%',
                maxWidth: '1100px',
                height: '1px',
                background: isDark
                    ? 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)'
                    : 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)',
            }} />
        </Box>
    );
};

export default AboutMe;