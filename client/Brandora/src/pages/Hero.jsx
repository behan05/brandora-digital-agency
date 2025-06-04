import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useTheme,
    useMediaQuery
} from '../mui/muiComponents';
import CustomButton from '../components/CustomButton';

function Hero() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                color: 'text.primary',
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, sm: 6, md: 10 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', sm: 'left' },
            }}
        >
            {/* Section Label */}
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                [ Digital Marketing ]
            </Typography>

            {/* Main Heading */}
            <Typography
                variant={isSmallScreen ? 'h3' : 'h3'}
                component="h1"
                fontWeight="bold"
            >
                Innovative
            </Typography>

            {/* Sub Headings */}
            <Stack
                direction={isSmallScreen ? 'column' : 'row'}
                spacing={isSmallScreen ? 1 : 2}
                sx={{ textAlign: { xs: 'center', sm: 'left' } }}
                justifyContent={isSmallScreen ? 'center' : 'flex-start'}
                my={2}
            >
                <Typography
                    variant={isSmallScreen ? 'h3' : 'h2'}
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                >
                    Solutions
                </Typography>

                <Typography
                    variant={isSmallScreen ? 'h4' : 'h2'}
                    color="text.primary"
                >
                    For Your
                </Typography>
            </Stack>

            <Typography
                variant={isSmallScreen ? 'h5' : 'h2'}
                color="text.primary"
                mb={2}
            >
                Digital Brands
            </Typography>

            {/* Subsection Label */}
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                [ Marketing Agency ]
            </Typography>

            {/* Description & CTA */}
            <Stack spacing={3} alignItems={isSmallScreen ? 'center' : 'flex-start'}>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    maxWidth="md"
                >
                    Experience the transformative power of our expert marketing strategies as we partner with you to elevate your brand's digital presence. From data-driven campaigns to cutting-edge digital solutions, we tailor every strategy to meet your unique business goals. Let us take your brand to new heights online — where visibility, engagement, and growth converge.
                </Typography>

                <CustomButton
                    redirectedTo="support"
                    sx={{
                        maxWidth: '260px',
                        fontWeight: 600,
                        mt: 2,
                    }}
                >
                    Connect Now
                </CustomButton>
            </Stack>
        </Box>
    );
}

export default Hero;
