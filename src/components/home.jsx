import { Box, Button, Typography } from '@mui/material';
import resumePdf from '../assets/Ammar_Mehdi_Resume.pdf';
import keyboardMouseSvg from '../assets/keyboard&mouse.svg';
import keyboardLightPng from '../assets/keyboardLight.png';
import { useThemeContext } from '../context/ThemeContext';

const Home = ({ homeRef, projectRef, toScroll }) => {
    const { isDark } = useThemeContext();

    return (
        <Box
            ref={homeRef}
            sx={{
                color: isDark ? 'white' : '#1A1A2E',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                bgcolor: isDark ? '#02000E' : '#F5F7FA',
                minHeight: '100vh',
                padding: '40px 20px',
                pt: '50px',
                boxSizing: 'border-box',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}>
            <Typography variant="h1" sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                color: isDark ? '#FFFFFF' : '#1A1A2E',
                transition: 'color 0.3s ease',
            }}>
                Frontend Developer
            </Typography>
            <Typography sx={{
                color: isDark ? '#8A8993' : '#5A5A72',
                fontSize: '1.1rem',
                textAlign: 'center',
                letterSpacing: '0.5px',
                transition: 'color 0.3s ease',
            }}>
                {` { JavaScript, React, Next.js, Vue.js, MongoDB, CSS, Sass... } `}
            </Typography>
            <Typography sx={{
                color: isDark ? '#8A8993' : '#5A5A72',
                maxWidth: '550px',
                textAlign: 'center',
                lineHeight: '1.6',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
            }}>
                Specializing in React & Next.js I leverage cutting-edge technologies to bring web projects to life.
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                marginTop: '10px'
            }}>
                <Button
                    onClick={() => { toScroll(projectRef) }}
                    sx={{
                        color: '#02000E',
                        bgcolor: '#00C3FF',
                        borderRadius: '25px',
                        fontWeight: '600',
                        textTransform: 'none',
                        padding: '10px 28px',
                        fontSize: '0.95rem',
                        '&:hover': {
                            bgcolor: '#00A3D4',
                        }
                    }}>
                    See my dev work
                </Button>

                <Button
                    variant='text'
                    href={resumePdf}
                    download="Ammar_Mehdi_Resume.pdf"
                    sx={{
                        color: '#00C3FF',
                        textTransform: 'none',
                        textDecoration: 'underline',
                        fontWeight: '500',
                        fontSize: '0.95rem',
                        padding: 0,
                        border: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            background: 'transparent'
                        }
                    }}
                >
                    Download CV
                </Button>
            </Box>
            <Box sx={{
                marginTop: '60px',
                width: '100%',
                maxWidth: '650px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                {isDark ? <img
                    src={keyboardMouseSvg}
                    alt="Keyboard and mouse setup"
                    style={{
                        width: "100%",
                        height: 'auto',
                        objectFit: 'contain',
                        opacity: isDark ? 0.85 : 0.9,
                        transition: 'opacity 0.3s ease',
                    }}
                /> : <img
                    src={keyboardLightPng}
                    alt="Keyboard and mouse setup"
                    style={{
                        width: "100%",
                        height: 'auto',
                        objectFit: 'contain',
                        opacity: isDark ? 0.85 : 0.9,
                        transition: 'opacity 0.3s ease',
                    }}
                />}
            </Box>
        </Box>
    )
}

export default Home;

