import React from 'react';
import { Box, Stack, Typography, useTheme } from "../mui/muiComponents";

function Cards({ icon, header, content }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                p: theme.spacing(3),
                borderRadius: 2,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(192, 194, 196, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: 'transform 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                    transform: 'translateY(-12px)',
                },
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                mb={2}
                sx={{ color: theme.palette.secondary.main }}
            >
                {icon}
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color="text.primary"
                >
                    {header}
                </Typography>
            </Stack>

            <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={400}
                letterSpacing={0.8}
                lineHeight={1.7}
            >
                {content}
            </Typography>
        </Box>
    );
}

export default Cards;
