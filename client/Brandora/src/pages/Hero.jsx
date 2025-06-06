import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useTheme,
    useMediaQuery
} from '../mui/muiComponents';
import CustomButton from '../components/CustomButton';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CampaignIcon from '@mui/icons-material/Campaign';
import Cards from '../components/Cards';
import logo1 from "../assets/companyLogo/logo-1.png";
import logo2 from "../assets/companyLogo/logo-2.png";
import logo3 from "../assets/companyLogo/logo-3.png";
import logo4 from "../assets/companyLogo/logo-4.png";
import logo5 from "../assets/companyLogo/logo-5.png";
import logo6 from "../assets/companyLogo/logo-5.png";
import whoWeAre from "../assets/imgs/whoWeAre.jpg";
import WhoWeAreCard from '../components/WhoWeAreCard';

function Hero() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    const brandLogo = [logo1, logo2, logo3, logo4, logo5, logo6];

    const cardItems = [
        {
            icon: <SearchIcon sx={{ fontSize: '2.3rem', color: theme.palette.warning.main }} />,
            header: "Search Engine Optimization",
            content: `Boost your visibility and rank higher with proven SEO practices tailored for your audience.`,
        },
        {
            icon: <LanguageIcon sx={{ fontSize: '2.3rem', color: theme.palette.warning.main }} />,
            header: "Website Development",
            content: `Get responsive, high-performing websites that deliver seamless user experiences.`,
        },
        {
            icon: <EditNoteIcon sx={{ fontSize: '2.3rem', color: theme.palette.warning.main }} />,
            header: "Content Marketing",
            content: `Deliver content that educates, engages, and converts your audience effectively.`,
        },
        {
            icon: <CampaignIcon sx={{ fontSize: '2.3rem', color: theme.palette.warning.main }} />,
            header: "Social Media Marketing",
            content: `Build loyal communities and drive growth with our tailored social strategies.`,
        },
        {
            icon: <CurrencyBitcoinIcon sx={{ fontSize: '2.3rem', color: theme.palette.warning.main }} />,
            header: "Digital Marketing",
            content: `Use data-driven tactics and branding to grow online and boost conversions.`,
        },
    ];

    const WhoWeAreCardItems = [
        {
            label: 1,
            title: 'Successful digital design agency projects',
            content: `Over the years, our agency has delivered a wide range of successful digital design projects that blend creativity with strategy. From intuitive user interfaces and engaging websites to full-scale brand identities and marketing assets, each project reflects our commitment to excellence. We focus on creating visually compelling and user-centric designs that not only look great but also drive real business results.`,
            numberOfProjects: '10 K+',
        },
        {
            label: 2,
            title: 'Satisfied Customers With Our Performance',
            content: `Our clients’ satisfaction is the strongest testament to the quality of our work. Through innovative design, strategic thinking, and reliable execution, we've consistently delivered results that exceed expectations. We take pride in building lasting partnerships by turning ideas into impactful digital experiences that drive real success.`,
            numberOfProjects: '87 %',
        },
        {
            label: 3,
            title: 'Our multi-disciplinary team of creative technologists',
            content: `Our multi-disciplinary team of creative technologists brings together innovation, design, and technology to craft seamless digital experiences. With expertise spanning UI/UX, development, branding, and strategy, we collaborate across disciplines to solve complex challenges and deliver impactful solutions that elevate brands in the digital world.`,
            numberOfProjects: '34 +',
        },
        {
            label: 4,
            title: 'Years in business improving digital marketing',
            content: `With years of experience in the digital marketing landscape, we’ve helped businesses grow by crafting strategies that blend creativity, data, and technology. From SEO and content marketing to social media and paid campaigns, our proven approach continues to drive measurable results, strengthen brand presence, and adapt to ever-evolving market trends.`,
            numberOfProjects: '20 +',
        },
    ]

    return (
        <Box flexDirection="column">
            {/* === Hero Intro Section === */}
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
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    [ Digital Marketing ]
                </Typography>

                <Typography variant="h3" component="h1" fontWeight="bold">
                    Innovative
                </Typography>

                <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    spacing={isSmallScreen ? 1 : 2}
                    justifyContent={isSmallScreen ? 'center' : 'flex-start'}
                    sx={{ textAlign: { xs: 'center', sm: 'left' }, mt: 1 }}
                >
                    <Typography
                        variant="h2"
                        color="text.secondary"
                        sx={{ fontStyle: 'italic' }}
                    >
                        Solutions
                    </Typography>

                    <Typography variant="h2" color={theme.palette.text.primary}>
                        For Your
                    </Typography>
                </Stack>

                <Typography variant="h2" color={theme.palette.text.primary} mb={2}>
                    Digital Brands
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    [ Marketing Agency ]
                </Typography>

                <Stack
                    spacing={3}
                    alignItems={isSmallScreen ? 'center' : 'flex-start'}
                >
                    <Typography variant="body1" color="text.secondary" maxWidth="md">
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
                        Start Your Project
                    </CustomButton>
                </Stack>
            </Box>

            {/* ===  brand logo Section === */}
            <Box>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography
                        variant='h6'
                        color='text.primary'>
                        Join over {" "}
                        <Typography
                            variant='h6'
                            component={'span'}
                            color='text.secondary'
                        >200,000+ businesses {" "}
                        </Typography>
                        to create unique brand designs.
                    </Typography>

                    <Stack
                        gap={2}
                        direction={'row'}
                        my={4}
                        flexWrap={'wrap'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        {brandLogo.map((logo, index) => (
                            <Stack
                                key={index}
                                maxWidth={150}
                                p={2}
                                borderRadius={1}
                                sx={{
                                    cursor: 'pointer',
                                    filter: 'drop-shadow(0 0 2rem #000)',
                                    boxShadow: `0 0 1rem rgba(20, 18, 16, 0.6), 0 0 1.2rem rgba(24, 17, 2, 0.5), 0 0 1.5rem rgba(97, 39, 131, 0.2)`,
                                    borderRadius: 2,
                                    filter: 'drop-shadow(0 0 2rem #000)',

                                }}
                            >
                                <Stack component={'img'} maxWidth={200} src={logo} />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            {/* === Who we are Section === */}

            <Box sx={{
                px: { xs: 2, sm: 4, md: 4 },
                py: 6,
                display: 'flex',
                flexDirection: isLg ? 'column' : 'row',
                flexGrow: 1,
                gap: 2
            }}>
                <Box flex={3} sx={{ maxHeight: 800, }}>
                    <Typography
                        variant='subtitle2'
                        color='text.secondary'
                        gutterBottom
                        letterSpacing={1}
                    >
                        Who We Are?
                    </Typography>
                    <Typography
                        variant='body1'
                        color='text.primary'
                        gutterBottom
                        letterSpacing={2}
                        my={2}
                    >
                        At Digimaven we’re more than just a Digital marketing studio we’re your dedicated team of experts passionate about helping businesses thrive in the digital age.
                    </Typography>

                    <Typography
                        variant='subtitle2'
                        color='text.secondary'
                        gutterBottom
                        letterSpacing={1}
                    >
                        Our mission is to empower businesses of all sizes to thrive in the digital landscape.
                    </Typography>

                    <CustomButton redirectedTo={'/about'} sx={{ my: 2 }}>
                        About Us
                    </CustomButton>

                    <Box
                        my={4}
                        sx={{
                            objectFit: 'cover',
                            maxWidth: '100%',
                            height: '400px',
                            overflow: 'hidden',
                            borderRadius: 3,
                            boxShadow: 3,

                            '&:hover': {
                                filter: 'brightness(150%)',
                            }
                        }}
                    >
                        <Stack
                            component={'img'}
                            src={whoWeAre}
                            alt="who we are image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                filter: 'brightness(80%)',
                            }}
                        />
                    </Box>
                </Box>

                <Box flex={2} sx={{
                    overflowY: 'auto',
                    display: 'grid',
                    gridTemplateRows: 'repeat(auto, 1fr)',
                    maxHeight: 800,
                    gap: { xs: 1, sm: 2, md: 2 },
                    p: { xs: 0.5, sm: 2, md: 4 },
                    '&::-webkit-scrollbar': {
                        width: '0.6rem',
                    },
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 0.375rem rgb(79, 78, 78)',
                        borderRadius: '0.8rem',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        boxShadow: 'inset 0 0 0.375rem rgba(238, 238, 238, 0.9)',
                        background: 'linear-gradient(155deg,rgb(97, 39, 131) 0%,rgba(131, 98, 26, 0.2) 50%,rgba(92, 52, 29, 0.2) 100%)',
                        borderRadius: '0.8rem',
                        outline: 'none'
                    },
                }}>
                    {WhoWeAreCardItems.map((item) => (
                        <WhoWeAreCard
                            key={item.label}
                            title={item.title}
                            content={item.content}
                            numberOfProjects={item.numberOfProjects}
                        />
                    ))}
                </Box>
            </Box>

            {/* === Services Section === */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                px: { xs: 2, sm: 4, md: 4 },
                py: 6
            }}
            >
                <Stack textAlign="center" color={theme.palette.text.primary}>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        Our Services
                    </Typography>
                    <Typography variant="h5" component="h1" color={theme.palette.text.primary}>
                        Build brand visibility with{' '}
                        <Typography
                            variant="h5"
                            component="span"
                            fontStyle="italic"
                            color="text.secondary"
                        >
                            marketing strategies
                        </Typography>
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: isSmallScreen ? 'repeat(auto, 1fr)' : isLg ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: 1,
                        justifyContent: 'center',
                    }}
                >
                    {cardItems.map((item, index) => (
                        <Cards
                            key={index}
                            icon={item.icon}
                            header={item.header}
                            content={item.content}
                        />
                    ))}
                    <Stack flexBasis={'400px'} sx={{
                        p: theme.spacing(2),
                        boxShadow: 2,
                        borderRadius: 2,
                        filter: 'drop-shadow(0 0 2rem #000)',
                        background: 'linear-gradient(125deg,rgba(92, 52, 29, 0.2) 0%,rgba(131, 98, 26, 0.2) 50%,rgb(97, 39, 131) 100%)',
                    }}>
                        <Typography variant='h5' gutterBottom>Find out more our service</Typography>
                        <Typography variant='subtitle2' gutterBottom>
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Stack mt={'auto'}>
                            <CustomButton redirectedTo={'/services'} sx={{ maxWidth: 200 }}>
                                Explore More...
                            </CustomButton>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
