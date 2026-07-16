import { Typography, Box } from "@mui/material"
import ToggleTheme from "./toggleTheme"
import { useThemeContext } from "../context/ThemeContext"

const NavBar = ({ homeRef, aboutRef, skillRef, projectRef, contactRef, toScroll }) => {
    const { isDark, toggleTheme } = useThemeContext();

    const navItemStyle = {
        cursor: 'pointer',
        color: isDark ? '#9E9CA5' : '#5A5A72',
        fontSize: '0.92rem',
        fontWeight: 600,
        transition: 'color 0.2s ease',
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '60px',
            pt: '20px',
            bgcolor: isDark ? '#01000A' : '#FFFFFF',
            borderBottom: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            backdropFilter: 'blur(8px)',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '30px', height: '30px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '16px' }}>
                        <Box sx={{ height: '3px', width: '12px', bgcolor: '#00B4D8', borderRadius: '2px' }} />
                        <Box sx={{ height: '3px', width: '18px', bgcolor: '#00B4D8', borderRadius: '2px' }} />
                        <Box sx={{ height: '3px', width: '15px', bgcolor: '#00B4D8', borderRadius: '2px' }} />
                    </Box>
                    <Typography sx={{
                        color: '#00B4D8',
                        fontSize: '28px',
                        fontWeight: '300',
                        fontFamily: 'monospace',
                        lineHeight: 1,
                        marginLeft: '2px',
                        position: 'absolute',
                        right: 0,
                        top: '-2px'
                    }}>
                        &#125;
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                    <Typography sx={{
                        color: isDark ? "#E9E8EB" : "#1A1A2E",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        letterSpacing: "-0.3px",
                        transition: 'color 0.3s ease',
                    }}>
                        Ammar Mehdi
                    </Typography>
                    <Typography sx={{
                        color: isDark ? "#656370" : "#8A8993",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        marginTop: '2px',
                        transition: 'color 0.3s ease',
                    }}>
                        Frontend Developer
                    </Typography>
                </Box>
            </Box>
            {/* <Box
                component="ul"
                sx={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '36px',
                    alignItems: 'center',
                    p: 0,
                    m: 0
                }}
            > */}
            {/* {["Home", "About me", "Skills", "Projects"].map((item) => (
                    <Box
                        component="li"
                        key={item}
                        sx={{
                            color: isDark ? '#9E9CA5' : '#5A5A72',
                            fontSize: '0.92rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: isDark ? '#E9E8EB' : '#1A1A2E',
                            }
                        }}
                    >
                        {item}
                    </Box>
                ))} */}
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '36px'
            }}>
                <li style={navItemStyle} onClick={() => toScroll(homeRef)}>Home</li>
                <li style={navItemStyle} onClick={() => toScroll(aboutRef)}>About</li>
                <li style={navItemStyle} onClick={() => toScroll(skillRef)}>Skill</li>
                <li style={navItemStyle} onClick={() => toScroll(projectRef)}>Projects</li>
            </ul>
            {/* </Box> */}
            <Box sx={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center'
            }}>
                <Typography
                    onClick={() => toScroll(contactRef)}
                    sx={{
                        color: isDark ? '#E9E8EB' : '#1A1A2E',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        padding: '8px 26px',
                        border: isDark ? '1.5px solid #2B2937' : '1.5px solid #1A1A2E90',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            borderColor: isDark ? '#E9E8EB' : '#1A1A2E',
                            bgcolor: isDark ? 'rgba(233, 232, 235, 0.05)' : 'rgba(26, 26, 46, 0.05)',
                        }
                    }}>
                    Contact me
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ToggleTheme checked={isDark} onChange={toggleTheme} />
                </Box>
            </Box>
        </Box>
    )
}

export default NavBar