import { Divider } from '@mui/material';
import { Box, Stack, Typography } from '../mui/muiComponents';

function WhoWeAreCard({ key, title, content, numberOfProjects }) {
    return (
        <Box key={key} sx={{
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
            background: 'linear-gradient(155deg,rgba(67, 39, 131, 0.2) 0%,rgba(131, 98, 26, 0.1) 50%,rgba(35, 9, 78, 0.1) 100%)',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateX(10px)',
            }
        }}>
            <Typography
                variant='subtitle1'
                color='text.primary'
                gutterBottom
                fontWeight={600}
            >
                {title}
            </Typography>
            <Typography
                variant='body1'
                gutterBottom
                letterSpacing={1}
                lineHeight={2}
                color='text.secondary'
                textAlign={'justify'}
            >
                {content}
            </Typography>
            <Divider />
            <Stack mt={2} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <Typography
                    variant='h4'
                    color='text.primary'
                    fontWeight={900}
                    gutterBottom
                >
                    {numberOfProjects}
                </Typography>
            </Stack>
        </Box>
    )
}

export default WhoWeAreCard;