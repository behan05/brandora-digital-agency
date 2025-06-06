import React from 'react';
import { Box, Stack, Typography, useTheme } from "../mui/muiComponents";

function Cards({ icon, header, content }) {
    const theme = useTheme();
    return (
        <Box sx={{
            p: theme.spacing(2),
            boxShadow: 3,
            borderRadius: 2,
            filter: 'drop-shadow(0 0 2rem #000)',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'translateY(-15px)'
            }
        }}>
            <Stack mb={15}>
                {icon}
            </Stack>

            <Typography variant='subtitle1' color='text.primary'>
                {header}
            </Typography>

            <Typography variant='body1' color='text.primary'>
                {content}
            </Typography>
        </Box>
    )
}

export default Cards