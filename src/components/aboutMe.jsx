import { Box, Divider, Typography } from '@mui/material';
import introductionImage from '../assets/intro.png';

const AboutMe = () => {
    return (
        <Box sx={{
            bgcolor: '#02000E',
            pt: '100px',
            pb: '100px',
            px: { xs: '20px', md: '50px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <Typography variant="h2" sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 'bold',
                letterSpacing: '-0.5px',
                mb: '12px'
            }}>
                {`Problem solver <coder>`}
            </Typography>

            <Typography sx={{
                color: '#706F78',
                textAlign: 'center',
                fontSize: '1.1rem',
                mb: '60px',
                fontWeight: '400'
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
                    <Box sx={{
                        position: 'relative',
                        pl: '24px',
                        borderLeft: '1px solid rgba(112, 111, 120, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <Typography sx={{
                            color: '#706F78',
                            fontSize: '0.98rem',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>ICS Graduate.</span> Graduated from Sir Syed College, Wazirabad, with a solid foundation in Computer Science and software fundamentals.
                        </Typography>
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        pl: '24px',
                        borderLeft: '1px solid rgba(112, 111, 120, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <Typography sx={{
                            color: '#706F78',
                            fontSize: '0.98rem',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Specializing in React & Material UI.</span> I am constantly working on learning new technologies like TypeScript & following modern development trends.
                        </Typography>
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        pl: '24px',
                        borderLeft: '1px solid rgba(112, 111, 120, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <Typography sx={{
                            color: '#706F78',
                            fontSize: '0.98rem',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Love working in team environments.</span> I enjoy collaborating with developers at FentixTech, but I can also drive projects and work independently.
                        </Typography>
                    </Box>
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
                borderColor: 'rgba(112, 111, 120, 0.15)'
            }} />
        </Box>
    )
}

export default AboutMe;