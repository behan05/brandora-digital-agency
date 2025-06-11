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
import whoWeAre from "../assets/imgs/whoWeAre.jpg";
import process1 from "../assets/imgs/process1.jpg";
import process2 from "../assets/imgs/process2.jpg";
import process3 from "../assets/imgs/process3.jpg";


import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import custumBgImage from '../assets/imgs/customBgImage.png';

function Hero() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    // Slide Count
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = isSmallScreen ? 1 : isMd ? 2 : isLg ? 2 : 4;

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
                    py: { xs: 4, sm: 6, md: 10 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: { xs: 'center', sm: 'left' },
                }}
            >
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                >
                    [ Digital Marketing ]
                </Typography>

                <Typography
                    variant={isSmallScreen ? 'h4' : "h3"}
                    component="h1"
                    fontWeight="bold"
                >
                    Innovative
                </Typography>

                <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    spacing={isSmallScreen ? 1 : 2}
                    justifyContent={isSmallScreen ? 'center' : 'flex-start'}
                    sx={{ textAlign: { xs: 'center', sm: 'left' }, mt: 1 }}
                >
                    <Typography
                        variant={isSmallScreen ? 'h4' : "h3"}
                        color="text.secondary"
                        fontWeight="bold"
                        sx={{ fontStyle: 'italic' }}
                    >
                        Solutions
                    </Typography>

                    <Typography
                        variant={isSmallScreen ? 'h4' : "h3"}
                        fontWeight="bold"
                        color={theme.palette.text.primary}
                    >
                        For Your
                    </Typography>
                </Stack>

                <Typography
                    variant={isSmallScreen ? 'h4' : "h3"}
                    fontWeight="bold"
                    color={theme.palette.text.primary} mb={2}
                >
                    Digital Brands
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                >
                    [ Marketing Agency ]
                </Typography>

                <Stack
                    spacing={3}
                    alignItems={isSmallScreen ? 'center' : 'flex-start'}
                >
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        maxWidth="md"
                        letterSpacing={1.5}
                        gutterBottom
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
                        component={'section'}
                        my={4}
                        sx={{
                            objectFit: 'cover',
                            maxWidth: '100%',
                            height: '400px',
                            overflow: 'hidden',
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: 'all 0.3s ease',

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

                <Box component={'section'} flex={2} sx={{
                    overflowY: 'auto',
                    display: 'grid',
                    gridTemplateRows: 'repeat(auto, 1fr)',
                    maxHeight: 800,
                    gap: { xs: 1, sm: 2, md: 2 },
                    p: { xs: 0.5, sm: 2, md: 4 },

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
            <Box component={'section'} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                px: { xs: 2, sm: 4, md: 4 },
                py: 6
            }}
            >
                <Stack textAlign="center" letterSpacing={1} color={theme.palette.text.primary}>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        Our Services
                    </Typography>
                    <Typography
                        variant={isSmallScreen ? 'h5' : "h4"}
                        fontWeight={900}
                        component="h1"
                        color={theme.palette.text.primary}
                    >
                        Build Brand Visibility With {<br></br>} Marketing{' '}
                        <Typography
                            variant={isSmallScreen ? 'h5' : "h4"}
                            component="span"
                            fontStyle="italic"
                            color="text.secondary"
                        >
                            Strategies
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
            <Box component={'section'}>
                <Stack
                    textAlign="start"
                    my={6}
                    maxWidth={800}
                >
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        letterSpacing={1}
                        gutterBottom
                    >
                        Our Projects
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

                <Box
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        my: 2,
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >
                    <Box
                        component="iframe"
                        src="https://react-admin-panel-behan.vercel.app"
                        sx={{
                            width: '100%',
                            height: 800,
                            border: 'none',
                            borderRadius: 2,
                        }}
                    />

                    {[
                        {
                            projectName: 'Rebuild Admin Panel',
                            description:
                                'A modernized, intuitive admin dashboard designed for better data visualization, streamlined content management, and full user activity tracking. Built with React, MUI, and integrated with backend APIs for seamless operations.',
                            category: 'Web-Application',
                            releaseDate: '06/04/2025',
                        },
                    ].map((project, index) => (
                        <Stack key={index} p={2}>
                            <Typography
                                color='text.secondary'
                                variant='subtitle1'
                                letterSpacing={2}
                                fontWeight={900}
                                component={'span'}
                            >
                                Project Name:{' '}
                                <Typography
                                    gutterBottom
                                    color='text.primary'
                                    variant='body1'
                                    letterSpacing={1}
                                    fontWeight={400}
                                    component={'span'}
                                >
                                    {project.projectName}
                                </Typography>
                            </Typography>

                            <Typography
                                color='text.secondary'
                                variant='subtitle1'
                                letterSpacing={2}
                                fontWeight={900}
                                component={'span'}
                            >
                                Description:{' '}
                                <Typography
                                    gutterBottom
                                    color='text.primary'
                                    variant='body1'
                                    letterSpacing={1}
                                    fontWeight={400}
                                    component={'span'}
                                >
                                    {project.description}
                                </Typography>
                            </Typography>

                            <Typography
                                color='text.primary'
                                variant='subtitle1'
                                letterSpacing={2}
                                fontWeight={900}
                                component={'span'}
                            >
                                Category: {' '}
                                <Typography
                                    gutterBottom
                                    color='text.primary'
                                    variant='body1'
                                    letterSpacing={1}
                                    component={'span'}
                                    fontWeight={400}
                                >
                                    {project.category}
                                </Typography>
                            </Typography>

                            <Typography
                                color='text.primary'
                                variant='subtitle1'
                                letterSpacing={2}
                                fontWeight={900}
                                component={'span'}
                            >
                                Release Date: {' '}
                                <Typography
                                    gutterBottom
                                    color='text.primary'
                                    variant='body1'
                                    letterSpacing={1}
                                    component={'span'}
                                    fontWeight={400}
                                >
                                    {project.releaseDate}
                                </Typography>
                            </Typography>

                            {/* take demo */}
                            <CustomButton
                                redirectedTo="https://react-admin-panel-behan.vercel.app"
                                target="_blank"
                                sx={{
                                    width: 'fit-content',
                                    my: 2,
                                    gap: 2,
                                    cursor: 'pointer',
                                }}
                                endIcon={<LaunchIcon />}
                            >
                                Launch Admin Panel
                            </CustomButton>
                        </Stack>
                    ))}
                </Box>


            </Box>

            {/* == Why Choose Us Section == */}
            <WhyChooseUs />

            {/* == Our Process Section == */}
            <Box component={'section'}>
                <Stack textAlign="center" my={4}>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        letterSpacing={1}
                        gutterBottom
                    >
                        Our Process
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
                        Our proven{' '}
                        <Box component="span" color="text.primary" fontStyle="normal">
                            process for {<br></br>} achieving success
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
                            content: 'During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape.',
                            image: process1,
                        },
                        {
                            number: '02.',
                            title: `Strategy Development`,
                            content: 'With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs.',
                            image: process2,
                        },
                        {
                            number: '03.',
                            title: `Implementation`,
                            content: 'Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action.',
                            image: process3,
                        },
                    ].map((card, index) => (

                        <Stack
                            borderRadius={2}
                            boxShadow={3}
                            key={index}
                            p={2}
                            sx={{
                                background: 'linear-gradient(125deg,rgba(179, 85, 31, 0.1),rgba(179, 85, 209, 0.1) ,rgba(176, 71, 237, 0.1))',
                                backdropFilter: 'blur(20px)',

                            }}
                        >
                            <Typography
                                color='text.secondary'
                                fontWeight={900}
                                gutterBottom
                                variant='subtitle2'
                            >
                                {card.number}
                            </Typography>

                            <Typography
                                color='text.secondary'
                                fontWeight={900}
                                gutterBottom
                                letterSpacing={1}
                                variant='subtitle1'
                            >
                                {card.title}
                            </Typography>

                            <Typography
                                color='text.primary'
                                fontWeight={400}
                                gutterBottom
                                letterSpacing={1}
                                variant='body1'
                            >
                                {card.content}
                            </Typography>
                            <Stack
                                component={'img'}
                                src={card.image}
                                alt={card.title}
                                maxWidth={"100%"}
                                sx={{
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    opacity: 0.8,
                                    transition: 'all 0.3s ease',
                                    filter: 'brightness(100%)',
                                    '&:hover': {
                                        opacity: 1,
                                        filter: 'brightness(120%)',
                                    }
                                }}
                            />
                        </Stack>
                    ))}
                </Box>
            </Box>

            {/* == Testimonials Section == */}
            <Box component={'section'}>
                <Stack>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        mt={4}
                        letterSpacing={1}
                    >
                        Testimonials
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
                        <Box component="span" color="text.primary" fontStyle="normal">
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
                                background: 'linear-gradient(125deg,rgba(179, 85, 31, 0.1),rgba(179, 85, 209, 0.1) 10%,rgba(176, 71, 237, 0.1))',
                                backdropFilter: 'blur(20px)',
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
            <Stack sx={{
                backgroundImage: `url(${custumBgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                borderRadius: 2,
                mt: 10,
            }}>
                <Box
                    component={'section'}
                    textAlign={'center'}
                    maxWidth={800}
                    mx={'auto'}
                >
                    <Stack>
                        <Typography
                            variant='body1'
                            mt={5}
                            color='text.primary'
                        >
                            FAQ
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
                            What{' '}
                            <Box component="span" color="text.primary" fontStyle="normal">
                                are you confused about? <br /> here the answers.
                            </Box>
                        </Typography>
                    </Stack>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            disableGutters
                            elevation={1}
                            sx={{
                                mb: 2,
                                background: 'linear-gradient(125deg,rgba(246, 112, 37, 0.2) 50%,rgba(179, 85, 209, 0.1) 10%,rgba(176, 71, 237, 0.2))',
                                boxShadow: 'inset 0 0 0.2rem',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography color="text.secondary">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    <Typography mt={4} variant='h6' color='text.secondary'>Still Have Questions?</Typography>
                    <Contact />
                </Box>
            </Stack>

        </Box>
    );
}

export default Hero;
