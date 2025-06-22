import React from 'react';
import { Box, Typography, Stack, useTheme, useMediaQuery } from '../mui/muiComponents';
import behanImg from '../assets/imgs/behan.png';
import about1 from '../assets/imgs/about1.jpg';
import about2 from '../assets/imgs/about2.jpg';
import about3 from '../assets/imgs/about3.jpg';

import logo1 from "../assets/companyLogo/logo-1.png"
import logo2 from "../assets/companyLogo/logo-2.png"
import logo3 from "../assets/companyLogo/logo-3.png"

import VerifiedIcon from '@mui/icons-material/Verified';

import Contact from '../components/Contact';

function About() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const brandCard = [
        {
            brandLogo: logo1,
            brandName: 'LoGoIPSUM',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, harum hic. Eos similique, veritatis, eaque harum ipsa quia, nisi ratione deleniti voluptate nesciunt nulla? Dicta inventore repellendus expedita a atque?`,
        },
        {
            brandLogo: logo2,
            brandName: 'logoipsum',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, harum hic. Eos similique, veritatis, eaque harum ipsa quia, nisi ratione deleniti voluptate nesciunt nulla? Dicta inventore repellendus expedita a atque?`,
        },
        {
            brandLogo: logo3,
            brandName: 'logoipsum.com',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, harum hic. Eos similique, veritatis, eaque harum ipsa quia, nisi ratione deleniti voluptate nesciunt nulla? Dicta inventore repellendus expedita a atque?`,
        },
    ]
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, sm: 6, md: 10 },
            }}
        >
            {/* Top Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                    gap: { xs: 4, md: 8 },
                    alignItems: 'center',
                }}
            >
                {/* Left Image Box */}
                <Box
                    component="img"
                    src={behanImg}
                    alt="Behan"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: 2,
                        objectFit: 'cover',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            filter: 'brightness(120%) saturate(120%)',
                        },
                    }}
                />

                {/* Right Content Box */}
                <Stack component={'section'} flex={1} justifyContent="center" spacing={3}>
                    <Typography
                        variant="h4"
                        fontWeight={900}
                        color={theme.palette.text.primary}
                        lineHeight={1.5}
                    >
                        You Are Going To <br />
                        Think That You Cannot <br />
                        Afford Us.
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color={theme.palette.text.primary}
                        letterSpacing={1}
                    >
                        Brandora helps small businesses grow and a lot of <br />
                        our clients are making less than 20k in income <br />
                        when they start with us.
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        color={theme.palette.text.secondary}
                        letterSpacing={1}
                    >
                        ❝ Thanks to Brandora <br />
                        I grow my business <br />
                        really fast. ❞
                    </Typography>
                </Stack>
            </Box>

            {/* Second Section */}
            <Stack component={'section'} mt={10} textAlign={'center'}>
                <Typography variant='h5' letterSpacing={1} gutterBottom>
                    If you ready through the 3 points below, you will{<br />}
                    see that you can, that we are what you are looking for.
                </Typography>
                <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    letterSpacing={1}
                >
                    Many of our clients pay no fees for Brandora bi-weekly meeting for the first 6 months.
                </Typography>
            </Stack>

            {/* Point 1 Section */}
            <Stack component={'section'} my={4} sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                gap: { xs: 4, md: 8 },
            }} >

                {/* Text Box */}
                <Stack
                    flex={1}
                    justifyContent={'center'}
                    component={'section'}
                    alignItems={'center'}
                    order={isSmallScreen && 1}
                >

                    <Stack component={'section'}>
                        <Stack
                            bgcolor={theme.palette.background.paper}
                            width={50}
                            height={50}
                            borderRight={4}
                            borderRadius={2}
                            boxShadow={3}
                            justifyContent={'center'}
                            alignItems={'center'}
                            mb={1}

                        >
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                                gutterBottom
                                fontWeight={900}
                                letterSpacing={2}
                            >
                                01
                            </Typography>
                        </Stack>
                        <Typography
                            variant="h5"
                            fontWeight={400}
                            color={theme.palette.text.primary}
                            gutterBottom
                            letterSpacing={2}
                            fontStyle={'italic'}
                            mb={3}
                        >
                            Empowering Small Businesses {<br />} to Move from Vision to Growth
                        </Typography>
                        <Typography
                            variant="body1"
                            color={theme.palette.text.primary}
                            letterSpacing={1}
                        >
                            Brandora helps small businesses take the next step. <br />Many of our clients start with limited income,<br /> and with our guidance, they grow faster and smarter.
                        </Typography>
                    </Stack>
                </Stack>

                {/* Image Box */}
                <Stack flex={1} mx={'auto'} mt={4}>
                    <Box
                        component="img"
                        src={about1}
                        alt="about image 1"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            objectFit: 'cover',
                            borderRadius: 2,
                            filter: 'brightness(80%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                filter: 'saturate(110%)',
                            },
                        }}
                    />
                </Stack>
            </Stack>

            {/* Point 2 Section */}
            <Stack component={'section'} my={4} sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                gap: { xs: 4, md: 8 },
            }} >

                {/* Image Box */}
                <Stack flex={1} mt={4} alignItems={'center'}>
                    <Box
                        component="img"
                        src={about2}
                        alt="about image 1"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            borderRadius: 2,
                            objectFit: 'cover',
                            filter: 'brightness(80%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                filter: 'saturate(110%)',
                            },
                        }}
                    />
                </Stack>

                {/* Text Box */}
                <Stack
                    flex={1}
                    justifyContent={'center'}
                    component={'section'}
                    mx={'auto'}
                >

                    <Stack component={'section'}>
                        <Stack
                            bgcolor={theme.palette.background.paper}
                            width={50}
                            height={50}
                            borderRight={5}
                            borderRadius={2}
                            boxShadow={3}
                            justifyContent={'center'}
                            alignItems={'center'}
                            mb={1}

                        >
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                                gutterBottom
                                fontWeight={900}
                                letterSpacing={2}
                            >
                                02
                            </Typography>
                        </Stack>
                        <Typography
                            variant="h5"
                            fontWeight={400}
                            color={theme.palette.text.primary}
                            gutterBottom
                            letterSpacing={2}
                            fontStyle={'italic'}
                            mb={3}
                        >
                            We Help You Grow <br />
                            in Two Powerful Ways <br />

                        </Typography>
                        <Typography
                            variant="body1"
                            color={theme.palette.text.primary}
                            letterSpacing={1}
                        >
                            Bi-weekly strategy calls to <br />
                            track your growth, set clear goals, <br />
                            and plan the next steps effectively. <br />
                            We guide your progress—one phase at a time. <br />

                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            {/* Point 3 Section */}
            <Stack component={'section'} my={4} sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                gap: { xs: 4, md: 8 },

            }} >

                {/* Text Box */}
                <Stack
                    flex={1}
                    justifyContent={'center'}
                    component={'section'}
                    alignItems={'center'}
                    order={isSmallScreen && 1}
                >

                    <Stack component={'section'}>
                        <Stack
                            bgcolor={theme.palette.background.paper}
                            width={50}
                            height={50}
                            borderRight={5}
                            borderRadius={2}
                            boxShadow={3}
                            justifyContent={'center'}
                            alignItems={'center'}
                            mb={1}
                        >
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                                gutterBottom
                                fontWeight={900}
                                letterSpacing={2}
                            >
                                03
                            </Typography>
                        </Stack>
                        <Typography
                            variant="h5"
                            fontWeight={400}
                            color={theme.palette.text.primary}
                            gutterBottom
                            letterSpacing={2}
                            fontStyle={'italic'}
                            mb={3}
                        >
                            We recommend services <br />
                            that truly fit your needs <br />
                            and your budget.

                        </Typography>
                        <Typography
                            variant="body1"
                            color={theme.palette.text.primary}
                            letterSpacing={1}
                        >
                            We offer tailored solutions that fit your goals and budget. <br />
                            No complexity — just what you need to grow with clarity. <br />
                            Let us guide you with simple steps and practical results.

                        </Typography>
                    </Stack>
                </Stack>

                {/* Image Box */}
                <Stack flex={1} mx={'auto'} mt={4}>
                    <Box
                        component="img"
                        src={about3}
                        alt="about image 1"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            borderRadius: 2,
                            objectFit: 'cover',
                            filter: 'brightness(80%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                filter: 'saturate(110%)',
                            },
                        }}
                    />
                </Stack>
            </Stack>

            {/* Second Section Meeting Brand */}
            <Box mt={7}>
                {/* == Trusted Brands Section == */}
                <Stack textAlign="center" spacing={2} mb={4}>
                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <VerifiedIcon color="primary" />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            letterSpacing={2}
                            fontWeight={400}
                        >
                            TRUSTED BRANDS
                        </Typography>
                    </Stack>
                    <Typography
                        variant="subtitle1"
                        fontWeight={400}
                        color="text.primary"
                        letterSpacing={1}
                    >
                        Meet the brands we proudly collaborate with to deliver quality results.
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    my={6}
                    justifyContent="center"
                    flexWrap="wrap"
                >
                    {brandCard.map((card, index) => (
                        <Stack
                            component="section"
                            key={index}
                            boxShadow={3}
                            borderRadius={2}
                            flexBasis={350}
                            p={2}
                            sx={{
                                backdropFilter: "blur(14px)",
                                backgroundColor: "rgba(192, 194, 196, 0.1)",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-15px)',
                                },
                            }}
                        >
                            <Stack
                                component="img"
                                src={card.brandLogo}
                                alt={card.brandName}
                                maxWidth={150}
                                mb={6}
                            />
                            <Typography
                                gutterBottom
                                variant="h6"
                                letterSpacing={2}
                                fontWeight={400}
                                mt={1}
                                fontStyle={'italic'}
                                color="text.primary"
                            >
                                {card.brandName}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                gutterBottom
                                mt={1}
                                letterSpacing={1}
                            >
                                {card.content}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

            </Box>

            {/* Third Section Contect Form  */}
            <Box>
                <Typography
                    variant={isSmallScreen ? 'h5' : 'h5'}
                    component="h1"
                    fontWeight={900}
                    color="text.secondary"
                    letterSpacing={2}
                    textAlign={'center'}
                >
                    What{' '}are you confused about? <br /> here the answers.
                </Typography>

                <Contact />
            </Box>
        </Box>
    );
}

export default About;
