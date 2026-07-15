import React from 'react';
import { Box, Switch } from "@mui/material";
import { styled } from '@mui/material/styles';
import { BiMoon } from "react-icons/bi";
import { WbSunnyOutlined } from "@mui/icons-material";

// Custom styled switch that precisely matches your images
const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 32,
    padding: 0,
    display: 'flex',
    '& .MuiSwitch-switchBase': {
        padding: 3,
        transform: 'translateX(0px)',
        transitionDuration: '250ms',
        '&.Mui-checked': {
            transform: 'translateX(26px)',
            color: '#fff',
            // Style the thumb inside Checked state (Dark Theme)
            '& .MuiSwitch-thumb': {
                backgroundColor: '#00D2FF', // Bright cyan thumb
            },
            '& + .MuiSwitch-track': {
                backgroundColor: '#070A13', // Dark background
                borderColor: '#9E9E9E', // White/Grey border
                opacity: 1,
                // Hide the Sun icon placeholder and reveal the Moon icon wrapper
                '&:before': {
                    opacity: 1,
                },
                '&:after': {
                    opacity: 0,
                },
            },
        },
    },
    '& .MuiSwitch-thumb': {
        width: 26,
        height: 26,
        boxShadow: 'none',
        backgroundColor: '#0059B2', // Dark blue thumb (Light Theme)
    },
    '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        border: '2px solid #2B80FF', // Distinct blue border (Light Theme)
        backgroundColor: '#F3F6FC', // Very soft light blue/white background
        opacity: 1,
        position: 'relative',
        transition: theme.transitions.create(['background-color', 'border-color']),
        // Left side icon (Moon) for Dark mode
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 16,
            height: 16,
            left: 7,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0,
            transition: 'opacity 200ms ease',
            // SVG Moon Icon path to fit inline perfectly
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12.3 22h-.1c-5.5-.1-10-4.6-10-10.1C2.2 6.5 6.6 2 12 2c.7 0 1.4.1 2 .3-.5.8-.8 1.7-.8 2.7 0 3.3 2.7 6 6 6 .9 0 1.8-.3 2.5-.7.3.5.3 1.1.3 1.7 0 5.5-4.5 10-10 10zm-1-18c-4.1 0-7.5 3.3-7.5 7.4 0 4.1 3.4 7.5 7.5 7.5 4 0 7.3-3.1 7.5-7.1-.9.5-2 .8-3.1.8-4.4 0-8-3.6-8-8 0-1 .2-2 .6-2.9-.3-.1-.7-.2-1-.2z"/></svg>')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
        // Right side icon (Sun) for Light mode
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 18,
            height: 18,
            right: 5,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 1,
            transition: 'opacity 200ms ease',
            // SVG Sun Icon path to fit inline perfectly
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232D3748"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM5.99 16.95l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z"/></svg>')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
}));

const ToggleTheme = ({ checked, onChange }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <StyledSwitch
                checked={checked}
                onChange={onChange}
            />
        </Box>
    );
};

export default ToggleTheme;