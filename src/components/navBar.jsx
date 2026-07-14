import { Typography, Box } from "@mui/material"
import ToggleTheme from "./toggleTheme"

const NavBar = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '50px 50px',
            alignItems: 'center',

        }}>
            <Box>
                <Typography sx={{
                    color: "#E9E8EB"
                }}>Ammar Mehdi</Typography>
                <Typography sx={{
                    color: "#504E5A"
                }}>Frontend Developer</Typography>
            </Box>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                color: '#E9E8EB'
            }}>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Blog</li>
            </ul>

            <Box sx={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    color: '#E9E8EB',
                    padding: '10px 20px',
                    border: '1px solid #E9E8EB',
                    borderRadius: '25px',
                }}>Contact me</Typography>
                <ToggleTheme />
            </Box>
        </Box>
    )
}
export default NavBar