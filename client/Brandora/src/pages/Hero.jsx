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

function Hero() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const cardItems = [
        {
            icon: <SearchIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
            header: "Search Engine Optimization",
            content: `Boost your visibility and rank higher with proven SEO practices tailored for your audience.`,
        },
        {
            icon: <LanguageIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
            header: "Website Development",
            content: `Get responsive, high-performing websites that deliver seamless user experiences.`,
        },
        {
            icon: <EditNoteIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
            header: "Content Marketing",
            content: `Deliver content that educates, engages, and converts your audience effectively.`,
        },
        {
            icon: <CampaignIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
            header: "Social Media Marketing",
            content: `Build loyal communities and drive growth with our tailored social strategies.`,
        },
        {
            icon: <CurrencyBitcoinIcon sx={{ fontSize: '2rem', color: theme.palette.warning.main }} />,
            header: "Digital Marketing",
            content: `Use data-driven tactics and branding to grow online and boost conversions.`,
        },
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

                    <Typography variant="h2" color="text.primary">
                        For Your
                    </Typography>
                </Stack>

                <Typography variant="h2" color="text.primary" mb={2}>
                    Digital Brands
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    [ Marketing Agency ]
                </Typography>

                <Stack spacing={3} alignItems={isSmallScreen ? 'center' : 'flex-start'}>
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

            {/* === Services Section === */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: { xs: 2, sm: 4, md: 8 }, py: 6 }}>
                <Stack textAlign="center" color="text.primary">
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        Our Services
                    </Typography>
                    <Typography variant="h3" component="h1">
                        Build brand visibility with{' '}
                        <Typography
                            variant="h3"
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
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: 'center',
                    }}
                >
                    {cardItems.map((item, index) => (
                        <Cards key={index} icon={item.icon} header={item.header} content={item.content} />
                    ))}
                    <Stack flexBasis={'400px'} sx={{
                        p: theme.spacing(2),
                        boxShadow: `0 0 1rem #030310`,
                        borderRadius: 2,
                        filter: 'drop-shadow(0 0 2rem #000)',
                        background: 'linear-gradient(125deg,rgba(92, 52, 29, 0.2) 0%,rgba(131, 98, 26, 0.2) 50%,rgb(97, 39, 131) 100%)',
                    }}>
                        <Typography variant='h5' gutterBottom>Find out more our service</Typography>
                        <Typography variant='subtitle2' gutterBottom>
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Stack mt={'auto'}>
                            <CustomButton redirectedTo={'/services'}>
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
