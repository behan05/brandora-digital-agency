import React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from '../mui/muiComponents'
import whyChooseUs from "../assets/imgs/whyChooseUs.jpg";
import GradeIcon from '@mui/icons-material/Grade';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';


function WhyChooseUs() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box component={'section'}>
            <Stack textAlign="start" my={6} maxWidth={900}>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    letterSpacing={1}
                    gutterBottom
                >
                    Why Choose Us
                </Typography>

                <Typography
                    variant={isSmallScreen ? 'h5' : 'h4'}
                    component="h1"
                    fontStyle="italic"
                    fontWeight={700}
                    color="text.secondary"
                    letterSpacing={1}
                    gutterBottom
                >
                    Expertise{' '}
                    <Box component="span" color="text.primary" fontStyle="normal">
                        for your digital growth journey
                    </Box>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Our dedicated team is{' '}
                    <Box component="span" color="text.primary">committed</Box> to understanding your {' '}
                    <Box component="span" color="text.primary">unique needs,</Box> ensuring that we provide innovative{' '}
                    <Box component="span" color="text.primary">strategies </Box>that drive results. With a focus on{' '}
                    <Box component="span" color="text.primary">quality and integrity.</Box>
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : isLg ? 'column' : 'row',
                    gap: 1,
                    width: '100%',
                }}
            >
                {/* Cards */}
                <Box
                    flex={1}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
                        gap: 2,
                        order: isLg && 2,
                    }}
                >
                    {[
                        {
                            icon: <GradeIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
                            title: `Proven Track Record`,
                            content: 'We’ve helped businesses across industries achieve their goals'
                        },
                        {
                            icon: <TipsAndUpdatesIcon sx={{ fontSize: '2rem', color: theme.palette.success.main }} />,
                            title: `Tailored Solutions`,
                            content: `Your business is unique, and so are our strategies.`
                        },
                        {
                            icon: <AttachMoneyIcon sx={{ fontSize: '2rem', color: theme.palette.success.main }} />,
                            title: `Competitive Pricing`,
                            content: `We offer our top-quality services at competitive prices`
                        },
                        {
                            icon: <DeveloperBoardIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
                            title: `Data-Driven Approach`,
                            content: `We leverage data and insights to make informed decisions`
                        },
                    ].map((card, index) => (
                        <Stack
                            key={index}
                            borderRadius={2}
                            p={2}
                            boxShadow={3}
                            sx={{
                                background: 'linear-gradient(125deg,rgba(179, 85, 31, 0.1),rgba(179, 85, 209, 0.1) 10%,rgba(176, 71, 237, 0.1))',
                                backdropFilter: 'blur(4px)',
                                transition: 'all 0.3s ease',

                                '&:hover': {
                                    transform: 'translateY(-15px)'
                                }
                            }}
                        >
                            <Stack pb={isSmallScreen ? 4 : 6}>
                                {card.icon}
                            </Stack>
                            <Typography
                                color='text.primary'
                                variant='subtitle1'
                                letterSpacing={1}
                                gutterBottom
                                fontWeight={600}
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                color='text.secondary'
                                variant='body1'
                                letterSpacing={1}
                                gutterBottom
                                fontWeight={400}
                            >
                                {card.content}
                            </Typography>
                        </Stack>
                    ))}
                </Box>

                {/* Why Choose Us Image */}
                <Box flex={1}>
                    <Stack
                        component={'img'}
                        src={whyChooseUs}
                        alt='Why Choose Us Image'
                        width={'100%'}
                        height={'100%'}
                        borderRadius={2}
                        boxShadow={3}

                        sx={{
                            objectFit: 'cover',
                            opacity: 0.8,
                            transition: 'all 0.3s ease',
                            filter: 'brightness(100%)',
                            '&:hover': {
                                opacity: 1,
                                filter: 'brightness(120%)',
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default WhyChooseUs