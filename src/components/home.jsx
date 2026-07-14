import { Box, Button, Typography } from '@mui/material';
import resumePdf from '../assets/Ammar_Mehdi_Resume.pdf';
import key from '../assets/Screenshot.png';

const Home = () => {
    return (
        <Box sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            bgcolor: '#02000E',
            minHeight: '100vh',
            padding: '40px 20px',
            boxSizing: 'border-box'
        }}>
            <Typography variant="h1" sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Frontend Developer
            </Typography>
            <Typography sx={{
                color: '#8A8993',
                fontSize: '1.1rem',
                textAlign: 'center',
                letterSpacing: '0.5px'
            }}>
                {` { JavaScript, React, Next.js, Vue.js, MongoDB, CSS, Sass... } `}
            </Typography>
            <Typography sx={{
                color: '#8A8993',
                maxWidth: '550px',
                textAlign: 'center',
                lineHeight: '1.6',
                fontSize: '1rem'
            }}>
                Specializing in React & Next.js I leverage cutting-edge technologies to bring web projects to life.
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                marginTop: '10px'
            }}>
                <Button sx={{
                    color: '#02000E',
                    bgcolor: '#00C3FF',
                    borderRadius: '25px',
                    fontWeight: '600',
                    textTransform: 'none',
                    padding: '10px 28px',
                    fontSize: '0.95rem',
                    // '&:hover': {
                    //     bgcolor: '#00A3D4',
                    // }
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
                <img
                    src={key}
                    alt="Keyboard and mouse setup"
                    style={{
                        width: "100%",
                        height: 'auto',
                        objectFit: 'contain',
                        opacity: 0.85
                    }}
                />
            </Box>
        </Box>
    )
}

export default Home;