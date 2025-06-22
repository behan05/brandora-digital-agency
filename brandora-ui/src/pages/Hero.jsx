import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
    Avatar
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
import WhoWeAreCard from '../components/WhoWeAreCard';
import process1 from "../assets/imgs/process1.jpg";
import process2 from "../assets/imgs/process2.jpg";
import process3 from "../assets/imgs/process3.jpg";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import QuizIcon from '@mui/icons-material/Quiz';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';


import {
    InfoOutlined,
    GroupOutlined,
    EmojiObjectsOutlined,
    LaunchOutlined,
} from '@mui/icons-material';

function Hero() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    // Slide Count
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = isSmallScreen ? 1 : isMd ? 2 : isLg ? 2 : 4;
    const [hovered, setHovered] = useState(false);
    const sliderCard = [
        {
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Sophia Carter",
            designation: "Product Designer",
            content: "Sophia is a user-centric designer focused on building intuitive interfaces. She loves minimalism and coffee-fueled brainstorming."
        },
        {
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Daniel Bennett",
            designation: "Full Stack Developer",
            content: "Daniel builds scalable web apps using MERN stack. He’s passionate about open source and clean, reusable code."
        },
        {
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            name: "Emily Nguyen",
            designation: "UX Researcher",
            content: "Emily studies user behavior to shape meaningful digital experiences. Outside work, she’s a keen traveler and reader."
        },
        {
            image: "https://randomuser.me/api/portraits/men/41.jpg",
            name: "Marcus Lee",
            designation: "Data Analyst",
            content: "Marcus helps companies make data-driven decisions. He’s known for simplifying complex datasets into clear stories."
        },
        {
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            name: "Ava Rodriguez",
            designation: "Marketing Strategist",
            content: "Ava crafts growth strategies using performance marketing. She believes storytelling is the future of brand communication."
        },
        {
            image: "https://randomuser.me/api/portraits/men/12.jpg",
            name: "Liam Patel",
            designation: "Cybersecurity Engineer",
            content: "Liam protects systems from threats with smart detection systems. He’s also a part-time bug bounty hunter."
        },
        {
            image: "https://randomuser.me/api/portraits/women/26.jpg",
            name: "Isabella Green",
            designation: "AI Researcher",
            content: "Isabella explores the intersection of ethics and AI. She aims to make intelligent systems more responsible and fair."
        },
        {
            image: "https://randomuser.me/api/portraits/men/66.jpg",
            name: "Noah Kim",
            designation: "DevOps Engineer",
            content: "Noah automates cloud infrastructure for faster deployments. He’s obsessed with CI/CD and Docker-based workflows."
        },
        {
            image: "https://randomuser.me/api/portraits/women/81.jpg",
            name: "Mia Thompson",
            designation: "Frontend Developer",
            content: "Mia builds interactive UIs with React and loves CSS art. She mentors junior devs and runs a coding blog."
        },
        {
            image: "https://randomuser.me/api/portraits/men/17.jpg",
            name: "Ethan Shah",
            designation: "Mobile App Developer",
            content: "Ethan creates sleek cross-platform apps with Flutter. He’s driven by solving real-world problems with mobile tech."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev >= sliderCard.length - visibleCards ? 0 : prev + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, [visibleCards, sliderCard.length]);

    const visibleSlides = sliderCard.slice(currentIndex, currentIndex + visibleCards);

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

    const faqs = [
        {
            question: "What is digital marketing?",
            answer: "Digital marketing refers to all marketing efforts that use an electronic device or the internet. It leverages digital channels such as search engines, social media, email, websites, and mobile apps to connect with current and prospective customers. It allows businesses to reach a global audience in a cost-effective, measurable, and targeted way."
        },
        {
            question: "Why is digital marketing important for my business?",
            answer: "Digital marketing enables businesses of all sizes to reach their target audience at the right time and in the right place. It's more affordable than traditional marketing, provides measurable results, allows personalized campaigns, and offers the flexibility to adapt quickly. It helps businesses build brand awareness, drive traffic, generate leads, and boost conversions."
        },
        {
            question: "How long does it take to see results from digital marketing?",
            answer: "Results vary depending on the strategy used. SEO efforts may take 3–6 months to show noticeable improvement, while PPC (pay-per-click) campaigns can generate traffic almost immediately. Social media growth and brand trust typically require consistent effort over time. Patience, analytics, and continuous optimization are key to success."
        },
        {
            question: "Is social media marketing necessary for my business?",
            answer: "Yes, especially in today’s digital age. Social media marketing helps businesses humanize their brand, engage directly with their audience, and create community. It’s essential for customer support, running ads, influencer partnerships, and building long-term relationships. Each platform (e.g., Instagram, LinkedIn, Facebook) serves different goals and audiences."
        },
        {
            question: "How much does digital marketing cost?",
            answer: "Costs depend on your business goals, the channels you use, and whether you manage campaigns in-house or through an agency. Budgets can range from a few hundred to thousands of dollars per month. SEO and content marketing are often more cost-effective long-term, while PPC and influencer marketing may need higher upfront investment."
        },
        {
            question: "What are the main types of digital marketing?",
            answer: "The main types include Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing, Content Marketing, Email Marketing, Affiliate Marketing, Influencer Marketing, and Mobile Marketing. Each has its own benefits, and a well-rounded digital strategy often includes multiple channels."
        },
        {
            question: "Can I do digital marketing myself or should I hire an expert?",
            answer: "You can start digital marketing yourself using online tools and resources, especially for small businesses with tight budgets. However, hiring a professional or agency may provide better results due to their expertise, strategy, and analytics skills. As your business grows, expert help can significantly improve ROI and save time."
        },
        {
            question: "How do I measure the success of my digital marketing campaigns?",
            answer: "Success is measured through Key Performance Indicators (KPIs) like website traffic, conversion rate, click-through rate (CTR), cost-per-click (CPC), return on investment (ROI), engagement rate, and customer acquisition cost. Tools like Google Analytics, Facebook Insights, and HubSpot help track and analyze campaign performance."
        }
    ];


    return (
        <Box flexDirection="column">
            {/* === Hero Intro Section === */}
            <Box
                sx={{
                    color: 'text.primary',
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 6, sm: 8, md: 12 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: { xs: 'center', sm: 'left' },
                }}
            >
                {/* Intro Tagline */}
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={500}
                    gutterBottom
                    mb={3}
                >
                    [ Digital Marketing ]
                </Typography>

                {/* Main Headline */}
                <Typography
                    variant={(isSmallScreen || isMd) ? 'h4' : isLg ? 'h3' : 'h2'}
                    component="h1"
                    fontWeight={800}
                >
                    Innovative
                </Typography>

                {/* Stacked Sub-Headline */}
                <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    spacing={isSmallScreen ? 0.5 : 2}
                    justifyContent={isSmallScreen ? 'center' : 'flex-start'}
                    alignItems={isSmallScreen ? 'center' : 'baseline'}
                    sx={{ mt: 1, textAlign: { xs: 'center', sm: 'left' } }}
                >
                    <Typography
                        variant={(isSmallScreen || isMd) ? 'h4' : isLg ? 'h3' : 'h2'}
                        color="text.secondary"
                        fontWeight={700}
                        sx={{ fontStyle: 'italic' }}
                    >
                        Solutions
                    </Typography>
                    <Typography
                        variant={(isSmallScreen || isMd) ? 'h4' : isLg ? 'h3' : 'h2'}
                        fontWeight={700}
                    >
                        For Your
                    </Typography>
                </Stack>

                <Typography
                    variant={(isSmallScreen || isMd) ? 'h4' : isLg ? 'h3' : 'h2'}
                    fontWeight={800}
                    mt={0.5}
                    mb={2}
                >
                    Digital Brands
                </Typography>

                {/* Closing Tagline */}
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={500}
                    gutterBottom
                    my={3}
                >
                    [ Marketing Agency ]
                </Typography>

                {/* Body Content & CTA */}
                <Stack
                    spacing={5}
                    alignItems={isSmallScreen ? 'center' : 'flex-start'}
                    maxWidth="md"
                >
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        textAlign="start"
                        letterSpacing={1.2}
                        lineHeight={1.8}
                    >
                        Experience the transformative power of our expert marketing strategies as we partner with you to elevate your brand's digital presence. From data-driven campaigns to cutting-edge digital solutions, we tailor every strategy to meet your unique business goals. Let us take your brand to new heights online where visibility, engagement, and growth converge.
                    </Typography>

                    <CustomButton
                        redirectedTo="/hire-me"
                        sx={{
                            mt: 1,
                            fontWeight: 600,
                            maxWidth: '260px',
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontSize: '1rem',
                        }}
                    >
                        Start Your Project
                    </CustomButton>
                </Stack>
            </Box>


            {/* === Brand Logo Section === */}
            <Box
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 4, sm: 6, md: 8 },
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" color="text.primary" mb={2}>
                    Join over{' '}
                    <Box component="span" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        200,000+ businesses
                    </Box>{' '}
                    to create unique brand designs.
                </Typography>

                <Stack
                    direction="row"
                    gap={3}
                    my={4}
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                >
                    {brandLogo.map((logo, index) => (
                        <Box
                            key={index}
                            sx={{
                                p: 2,
                                m: 1,
                                maxWidth: 140,
                                borderRadius: 2,
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt={`brand-logo-${index}`}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    ))}
                </Stack>
            </Box>


            {/* === Who We Are Section === */}
            <Box
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 6, sm: 8 },
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 4, md: 6 },
                    alignItems: 'flex-start',
                }}
            >
                {/* Left Column – Text + Image */}
                <Stack flex={3} gap={1}>
                    <Typography
                        variant="overline"
                        color="text.secondary"
                        letterSpacing={2}
                        sx={{
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                        gutterBottom
                    >
                        <InfoOutlined fontSize="small" />
                        Who We Are?
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color="text.primary"
                        gutterBottom
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1,
                        }}
                    >
                        <GroupOutlined sx={{ mt: '4px' }} />
                        At Brandora, we’re a team of experts helping businesses grow in the digital age.
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: '95%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                        mb={3}
                    >
                        <EmojiObjectsOutlined sx={{ color: 'warning.main' }} />
                        Our mission is to help businesses succeed online through tailored, results-driven strategies.
                    </Typography>

                    <CustomButton
                        redirectedTo="/about"
                        sx={{ mb: 4 }}
                        startIcon={<LaunchOutlined />}
                    >
                        About Us
                    </CustomButton>

                    <Box
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            maxWidth: '100%',
                            p: isSmallScreen ? 1 : 3,
                            height: 400,
                            boxShadow: 3,
                            backdropFilter: "blur(14px)",
                            backgroundColor: "rgba(192, 194, 196, 0.1)",
                            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                            borderRadius: 1,
                            borderBottom: `1px dotted ${theme.palette.primary.main}`
                        }}
                    >
                        <Box
                            component="video"
                            src={'/videos/whoWeAre.mp4'}
                            alt="Team working collaboratively video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
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
                </Stack>

                {/* Right Column – Info Cards */}
                <Box
                    flex={2}
                    sx={{
                        display: 'grid',
                        gridAutoRows: '1fr',
                        gap: { xs: 2, sm: 3 },
                        maxHeight: 800,
                        overflowY: 'auto',
                        p: { xs: 1, sm: 2 },
                    }}
                >
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
            <Box component={'section'} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                px: { xs: 2, sm: 4, md: 4 },
                py: 6
            }}
            >
                <Stack textAlign="start" letterSpacing={1} color={theme.palette.text.primary}>
                    {/* Heading with Icon */}
                    <Stack direction="row" justifyContent="start" alignItems="center" spacing={1} mb={1}>
                        <DesignServicesOutlinedIcon color="secondary" fontSize="small" />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: 2 }}
                        >
                            Our Services
                        </Typography>
                    </Stack>

                    {/* Title */}
                    <Typography
                        variant={isSmallScreen ? 'h5' : 'h4'}
                        fontWeight={700}
                        component="h1"
                        color="text.primary"
                        sx={{
                            display: 'inline-block',
                            lineHeight: 1.4,
                        }}
                    >
                        Build Brand Visibility With
                        <br />
                        Marketing{' '}
                        <Box
                            component="span"
                            sx={{
                                fontStyle: 'italic',
                                color: theme.palette.text.secondary,
                                fontWeight: 600,
                            }}
                        >
                            Strategies
                        </Box>
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
                        background: 'linear-gradient(125deg,rgba(92, 52, 29, 0.2) 0%,rgba(131, 98, 26, 0.2) 50%,rgb(97, 39, 131) 100%)',
                    }}>
                        <Typography
                            variant='h5'
                            gutterBottom
                        >
                            Find out more our service
                        </Typography>
                        <Typography
                            variant='body1'
                            color='text.primary'
                            fontWeight={400}
                            letterSpacing={1}
                            gutterBottom
                        >
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

            {/* === Our Projects Section === */}
            <Box component="section">
                {/* Heading + Subheading + Description */}
                <Stack textAlign="start" my={6} maxWidth={800}>
                    {/* Heading with icon and uppercase */}
                    <Stack direction="row" alignItems="center" gap={1} mb={1}>
                        <WorkOutlineIcon color="secondary" fontSize="small" />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            letterSpacing={2}
                            sx={{ textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600 }}
                        >
                            Our Projects
                        </Typography>
                    </Stack>

                    <Typography
                        variant={isSmallScreen ? 'h5' : 'h4'}
                        component="h1"
                        fontStyle="italic"
                        fontWeight={700}
                        color="text.secondary"
                        letterSpacing={1}
                        gutterBottom
                    >
                        Featured{' '}
                        <Box component="span" color="text.primary" fontStyle="normal">
                            WOW Projects!
                        </Box>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Explore our collection of cutting-edge{' '}
                        <Box component="span" color="text.primary">products</Box> designed to empower your{' '}
                        <Box component="span" color="text.primary">business</Box> and elevate your{' '}
                        <Box component="span" color="text.primary">creative potential</Box>. Each product is meticulously
                        crafted to provide{' '}
                        <Box component="span" color="text.primary">exceptional performance</Box>, usability, and results.
                    </Typography>
                </Stack>

                {/* === Project Display Box (iframe + overlay) === */}
                <Box
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: 800,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: 4,
                    }}
                >
                    {/* iframe */}
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Box
                            component="iframe"
                            src="https://react-admin-panel-behan.vercel.app"
                            sx={{
                                width: '100%',
                                height: '90%',
                                border: 'none',
                                pointerEvents: hovered ? 'auto' : 'none',
                            }}
                        />
                        <Stack>
                            <CustomButton
                                redirectedTo="https://react-admin-panel-behan.vercel.app"
                                target="_blank"
                                sx={{ mt: 2, mx: 'auto' }}
                                endIcon={<LaunchIcon />}
                            >
                                Launch Admin Panel
                            </CustomButton>
                        </Stack>
                    </Box>

                    {/* Overlay */}
                    {!hovered && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 2,
                                height: '100%',
                                backgroundColor: "rgba(192, 194, 196, 0.1)",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                                backdropFilter: 'blur(14px)',
                                color: 'text.primary',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                px: 4,
                                transition: 'opacity 0.4s ease',
                            }}
                        >
                            <Stack spacing={5} maxWidth={700}>
                                <Stack>
                                    <Typography variant="h6" fontWeight={700}>Project Name:</Typography>
                                    <Typography variant="subtitle1" color="grey.300">Rebuild Admin Panel</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="h6" fontWeight={700}>Category:</Typography>
                                    <Typography variant="subtitle1" color="grey.300">Web-Application</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="h6" fontWeight={700}>Description:</Typography>
                                    <Typography variant="subtitle1" color="grey.300">
                                        A modern admin dashboard with clean UX, analytics & API integration built with React + MUI.
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="h6" fontWeight={700}>Release Date:</Typography>
                                    <Typography variant="subtitle1" color="grey.300">06/04/2025</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    )}
                </Box>
            </Box>


            {/* == Why Choose Us Section == */}
            <WhyChooseUs />

            {/* == Our Process Section == */}
            <Box component={'section'}>
                <Stack textAlign="start" my={4}>
                    <Stack direction="row" justifyContent="start" alignItems="center" spacing={1} mb={1}>
                        <TimelineOutlinedIcon color="secondary" fontSize="small" />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: 2 }}
                        >
                            Our Process
                        </Typography>
                    </Stack>

                    <Typography
                        variant={isSmallScreen ? 'h5' : 'h4'}
                        component="h1"
                        fontStyle="italic"
                        fontWeight={700}
                        color="text.secondary"
                        letterSpacing={1}
                        gutterBottom
                    >
                        Our proven{' '}
                        <Box component="span" color="text.primary" fontStyle="normal">
                            process for <br /> achieving success
                        </Box>
                    </Typography>
                </Stack>


                <Box
                    gap={2}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: isSmallScreen ? '1fr' : isLg ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    }}
                >
                    {[
                        {
                            number: '01.',
                            title: `Discovery Phase`,
                            icon: <SearchOutlinedIcon sx={{ fontSize: '1.8rem', color: theme.palette.primary.main }} />,
                            content: 'We delve deep into understanding your business goals, audience, and market.',
                            image: process1,
                        },
                        {
                            number: '02.',
                            title: `Strategy Development`,
                            icon: <EngineeringOutlinedIcon sx={{ fontSize: '1.8rem', color: theme.palette.secondary.main }} />,
                            content: 'We create a strategy tailored to your specific needs.',
                            image: process2,
                        },
                        {
                            number: '03.',
                            title: `Implementation`,
                            icon: <RocketLaunchOutlinedIcon sx={{ fontSize: '1.8rem', color: theme.palette.success.main }} />,
                            content: 'We execute the plan with full force and clarity.',
                            image: process3,
                        },
                    ]
                        .map((card, index) => (
                            <Stack
                                key={index}
                                boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.1)"
                                p={2}
                                spacing={2}
                                sx={{
                                    backgroundColor: "rgba(192, 194, 196, 0.1)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: 1,
                                    borderBottom: `1px dotted ${theme.palette.primary.main}`,
                                    transition: 'all 0.3s ease',
                                    minHeight: 420,
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                            >

                                {card.icon}


                                <Typography
                                    color="text.primary"
                                    fontWeight={600}
                                    variant="subtitle1"
                                    letterSpacing={1}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    fontWeight={400}
                                    variant="body1"
                                    letterSpacing={1}
                                >
                                    {card.content}
                                </Typography>

                                <Stack
                                    component="img"
                                    src={card.image}
                                    alt={card.title}
                                    maxWidth="100%"
                                    sx={{
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        opacity: 0.85,
                                        mt: 1,
                                        transition: 'all 0.3s ease',
                                        filter: 'brightness(100%)',
                                        '&:hover': {
                                            opacity: 1,
                                            filter: 'brightness(120%)',
                                        },
                                    }}
                                />
                            </Stack>
                        ))}
                </Box>

            </Box>

            {/* == Testimonials Section == */}
            <Box component={'section'} mt={8}>
                <Stack spacing={1} textAlign="start" mb={4}>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        letterSpacing={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <FormatQuoteIcon fontSize="small" />
                        TESTIMONIALS
                    </Typography>

                    <Typography
                        variant={isSmallScreen ? 'h5' : 'h4'}
                        component="h1"
                        fontStyle="italic"
                        fontWeight={900}
                        color="text.secondary"
                        letterSpacing={1}
                        gutterBottom
                    >
                        Review{' '}
                        <Box component="span" color="text.primary" sx={{ fontWeight: 700 }} fontStyle="normal">
                            From Clients
                        </Box>
                    </Typography>
                </Stack>

                <Box
                    component={'section'}
                    sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                    }}
                >
                    {visibleSlides.map((slide, index) => (
                        <Stack
                            key={index}
                            maxWidth={300}
                            boxShadow={3}
                            gap={5}
                            p={2}
                            borderRadius={2}
                            sx={{
                                backdropFilter: "blur(10px)",
                                backgroundColor: "rgba(192, 194, 196, 0.1)",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-15px)'
                                }
                            }}
                        >
                            <Stack direction={'row'} gap={2}>
                                <Avatar src={slide.image} alt={slide.name} />
                                <Stack>
                                    <Typography variant="h6">
                                        {slide.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {slide.designation}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                "{slide.content}"
                            </Stack>
                        </Stack>
                    ))}
                </Box>
            </Box>

            {/* == FAQ Section == */}
            <Stack
                sx={{
                    borderRadius: 2,
                    mt: 6,
                }}
            >
                <Box
                    component="section"
                    textAlign="center"
                    maxWidth={800}
                    mx="auto"
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            letterSpacing={1}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
                        >
                            <QuizIcon fontSize="small" />
                            FAQ
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
                            What{' '}
                            <Box component="span" color="text.primary" fontStyle="normal">
                                are you confused about? <br /> Here are the answers.
                            </Box>
                        </Typography>
                    </Stack>

                    {/* FAQ List */}
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            disableGutters
                            elevation={3}
                            sx={{
                                my: 2,
                                px: 1,
                                backdropFilter: "blur(10px)",
                                backgroundColor: "rgba(192, 194, 196, 0.1)",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                                borderRadius: 2,
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle1" letterSpacing={2} fontWeight={600}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    {/* Footer CTA */}
                    <Typography mt={4} variant="h6" color="text.secondary">
                        Still Have Questions?
                    </Typography>

                    <Contact />
                </Box>
            </Stack>
        </Box>
    );
}

export default Hero;
