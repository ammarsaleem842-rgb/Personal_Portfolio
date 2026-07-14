import { Box } from "@mui/material"
import Switch from '@mui/material/Switch';

const ToggleTheme = () => {
    return (
        <Box>
            <Switch sx={{
                padding: '2px',
                border: '2px solid #E9E8EB',
                borderRadius: '25px',
            }}></Switch>
        </Box>
    )
}
export default ToggleTheme