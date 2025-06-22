import React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from '../mui/muiComponents';
import whyChooseUs from "../assets/imgs/whyChooseUs.jpg";
import GradeIcon from '@mui/icons-material/Grade';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'; // or use any icon you prefer


function WhyChooseUs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    const cardData = [
        {
            icon: <GradeIcon sx={{ fontSize: 30, color: theme.palette.warning.main }} />,
            title: 'Proven Track Record',
            content: 'We’ve helped businesses across industries achieve their goals.',
        },
        {
            icon: <TipsAndUpdatesIcon sx={{ fontSize: 30, color: theme.palette.success.main }} />,
            title: 'Tailored Solutions',
            content: 'Your business is unique, and so are our strategies.',
        },
        {
            icon: <AttachMoneyIcon sx={{ fontSize: 30, color: theme.palette.success.main }} />,
            title: 'Competitive Pricing',
            content: 'We offer our top-quality services at competitive prices.',
        },
        {
            icon: <DeveloperBoardIcon sx={{ fontSize: 30, color: theme.palette.warning.main }} />,
            title: 'Data-Driven Approach',
            content: 'We leverage data and insights to make informed decisions.',
        },
    ];

    return (
        <Box component="section" sx={{ py: 6, px: { xs: 2, sm: 4, md: 6 } }}>
            {/* Header */}
            <Stack textAlign="start" spacing={2} maxWidth={900} mb={4}>
                {/* Heading with icon and uppercase */}
                <Stack direction="row" alignItems="center" gap={1}>
                    <ThumbUpAltOutlinedIcon color="secondary" fontSize="small" />
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        letterSpacing={2}
                        sx={{ textTransform: 'uppercase', fontWeight: 600 }}
                    >
                        Why Choose Us
                    </Typography>
                </Stack>

                <Typography
                    variant={isSmallScreen ? 'h5' : 'h4'}
                    component="h1"
                    fontStyle="italic"
                    fontWeight={700}
                    color="text.secondary"
                    letterSpacing={1}
                >
                    Expertise{' '}
                    <Box component="span" color="text.primary" fontStyle="normal">
                        for your digital growth journey
                    </Box>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Our dedicated team is <Box component="span" color="text.primary">committed</Box> to understanding your{' '}
                    <Box component="span" color="text.primary">unique needs</Box>, ensuring that we provide innovative{' '}
                    <Box component="span" color="text.primary">strategies</Box> that drive results — with a focus on{' '}
                    <Box component="span" color="text.primary">quality and integrity</Box>.
                </Typography>
            </Stack>


            {/* Content Grid */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen || isLg ? 'column' : 'row',
                    gap: 3,
                    alignItems: 'stretch',
                }}
            >
                {/* Cards Grid */}
                <Box
                    flex={1}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
                        gap: 2,
                        order: isLg ? 2 : 1,
                    }}
                >
                    {cardData.map((card, index) => (
                        <Stack
                            key={index}
                            p={3}
                            borderRadius={2}
                            spacing={2}
                            boxShadow={3}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                backdropFilter: 'blur(6px)',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'translateY(-10px)' },
                            }}
                        >
                            <Box>{card.icon}</Box>
                            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.content}
                            </Typography>
                        </Stack>
                    ))}
                </Box>

                {/* Image */}
                <Box flex={1} order={isLg ? 1 : 2} sx={{
                    p: isSmallScreen ? 1 : 3,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(192, 194, 196, 0.1)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                    borderRadius: 1,
                    borderBottom: `1px dotted ${theme.palette.primary.main}`,
                    overflow: 'hidden'
                }}>
                    <Box
                        component="video"
                        src={'/videos/whyChooseUs.mp4'}
                        alt="Why Choose Us video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        sx={{
                            width: '100%',
                            height: '100%',
                            maxHeight: 500,
                            objectFit: 'cover',
                            borderRadius: 1,
                            boxShadow: 3,
                            filter: 'brightness(0.85) saturate(120%)',
                            borderRadius: 1,
                            boxShadow: 3,
                            transition: `transform 0.3s`,
                            "&:hover": {
                                transform: `scale(1.1)`
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default WhyChooseUs;
