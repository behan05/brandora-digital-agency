import { Divider, Box, Stack, Typography } from '@mui/material';
import { LightbulbOutlined, TrendingUp, DesignServices } from '@mui/icons-material';

// Optional: Create a map of title-to-icon if dynamic
const iconMap = {
    Strategy: <LightbulbOutlined fontSize="small" />,
    Growth: <TrendingUp fontSize="small" />,
    Branding: <DesignServices fontSize="small" />,
};

function WhoWeAreCard({ title, content, numberOfProjects }) {
    const icon = iconMap[title] || null;

    return (
        <Box
            sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateX(8px)',
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}
        >
            <Box>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    {icon}
                    <Typography
                        variant='h6'
                        color='text.primary'
                        fontWeight={700}
                    >
                        {title}
                    </Typography>
                </Stack>

                <Typography
                    variant='body2'
                    color='text.secondary'
                    lineHeight={1.8}
                    letterSpacing={0.5}
                    textAlign='justify'
                    mb={2}
                >
                    {content}
                </Typography>

                <Divider />
            </Box>

            <Stack mt={2} alignItems="flex-end">
                <Typography
                    variant='h4'
                    fontWeight={800}
                    color='text.primary'
                >
                    {numberOfProjects}
                </Typography>
            </Stack>
        </Box>
    );
}

export default WhoWeAreCard;
