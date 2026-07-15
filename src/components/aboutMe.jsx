import { Box, Divider, Typography } from '@mui/material';
import introductionImage from '../assets/intro.png';
import { useThemeContext } from '../context/ThemeContext';

const AboutMe = () => {
    const { isDark } = useThemeContext();

    return (
        <Box sx={{
            bgcolor: isDark ? '#02000E' : '#F5F7FA',
            pt: '100px',
            pb: '100px',
            px: { xs: '20px', md: '50px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease',
        }}>
            <Typography variant="h2" sx={{
                color: isDark ? 'white' : '#1A1A2E',
                textAlign: 'center',
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 'bold',
                letterSpacing: '-0.5px',
                mb: '12px',
                transition: 'color 0.3s ease',
            }}>
                {`Problem solver <coder>`}
            </Typography>

            <Typography sx={{
                color: isDark ? '#706F78' : '#6B7280',
                textAlign: 'center',
                fontSize: '1.1rem',
                mb: '60px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
            }}>
                Front - End Web Developer with hands-on application development experience.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '40px', md: '80px' },
                maxWidth: '1100px',
                width: '100%',
                mb: '80px'
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}>
                    {[
                        { bold: 'ICS Graduate.', text: ' Graduated from Sir Syed College, Wazirabad, with a solid foundation in Computer Science and software fundamentals.' },
                        { bold: 'Specializing in React & Material UI.', text: ' I am constantly working on learning new technologies like TypeScript & following modern development trends.' },
                        { bold: 'Love working in team environments.', text: ' I enjoy collaborating with developers at FentixTech, but I can also drive projects and work independently.' },
                    ].map((item, i) => (
                        <Box key={i} sx={{
                            position: 'relative',
                            pl: '24px',
                            borderLeft: isDark ? '1px solid rgba(112, 111, 120, 0.3)' : '1px solid rgba(100, 100, 120, 0.25)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            transition: 'border-color 0.3s ease',
                        }}>
                            <Typography sx={{
                                color: isDark ? '#706F78' : '#6B7280',
                                fontSize: '0.98rem',
                                lineHeight: '1.6',
                                textAlign: 'left',
                                transition: 'color 0.3s ease',
                            }}>
                                <span style={{ color: isDark ? '#ffffff' : '#1A1A2E', fontWeight: 'bold' }}>{item.bold}</span>
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <img
                        src={introductionImage}
                        alt="Ammar Mehdi Portrait"
                        style={{
                            maxWidth: '380px',
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Box>
            <Divider sx={{
                width: '100%',
                maxWidth: '1100px',
                borderColor: isDark ? 'rgba(112, 111, 120, 0.15)' : 'rgba(100, 100, 120, 0.15)',
                transition: 'border-color 0.3s ease',
            }} />
        </Box>
    )
}

export default AboutMe;