import { Divider } from '@mui/material';
import { Box, Stack, Typography, useTheme } from '../mui/muiComponents';
import React from 'react'

function WhoWeAreCard({ key, title, content, numberOfProjects }) {
    const theme = useTheme();
    return (
        <Box key={key} sx={{
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
            background: 'linear-gradient(155deg,rgb(67, 39, 131) 0%,rgba(131, 98, 26, 0.2) 50%,rgba(35, 9, 78, 0.2) 100%)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateX(10px)',
                bgcolor: theme.palette.background.paper,
            }
        }}>
            <Typography
                variant='subtitle1'
                color='text.secondary'
                gutterBottom
            >
                {title}
            </Typography>
            <Typography
                variant='body1'
                gutterBottom
                letterSpacing={1}
            >
                {content}
            </Typography>
            <Divider />
            <Stack mt={2} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <Typography
                    variant='h4'
                    color='text.primary'
                    fontWeight={900}
                    gutterBottom
                >
                    {numberOfProjects}
                </Typography>
            </Stack>
        </Box>
    )
}

export default WhoWeAreCard;