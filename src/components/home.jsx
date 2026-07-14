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
            gap: '20px',
            bgcolor: '#02000E',
        }}>
            <Typography variant="h1">Frontend Developer</Typography>
            <Typography sx={{
                color: '#706F78'
            }}>{` { HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Material UI } `}</Typography>
            <Typography sx={{
                color: '#706F78',
                width: '40%',
            }}>Specializing in React.js and modern CSS frameworks, I build responsive, clean, and user-friendly web interfaces to bring impactful web projects to life.</Typography>
            <Box sx={{
                display: 'flex',
                gap: '20px',
            }}>
                <Button sx={{
                    color: '#11546C',
                    bgcolor: '#0BC5FF',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                }}>see my dev work</Button>
                <Button variant='outlined'
                    href="{resumePdf}"
                    download="Ammar_Mehdi_Resume.pdf" sx={{
                        color: '#0BC5FF',
                        textDecoration: 'underline',
                        border: 'none',
                    }}>Download CV</Button>
            </Box>
            <img src={key} alt="123" style={{
                marginTop: '50px',
                width: "500px",
                objectFit: 'cover'
            }} />
        </Box >)
}
export default Home