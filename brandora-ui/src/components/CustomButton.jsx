import { Button, useTheme } from '../mui/muiComponents';
import { Link } from 'react-router-dom';

function CustomButton({ redirectedTo, children, ...props }) {
    const theme = useTheme();

    return (
        <Button
            variant="outlined"
            component={Link}
            to={redirectedTo}
            {...props}
            aria-label="CTA-BUTTON"
            sx={{
                maxWidth: 'fit-content',
                bgcolor: 'transparent',
                color: 'text.primary',
                borderRadius: 1,
                opacity: 1,
                border: `1px dotted ${theme.palette.primary.main}`,
                transition: 'all 0.3s ease',

                '&:hover': {
                    color: 'text.primary',
                    transform: `translateY(-6px)`,
                },
                ...props.sx,
            }}
        >
            {children}
        </Button>
    )
}

export default CustomButton;