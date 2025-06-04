import { Button } from '../mui/muiComponents';
import { Link } from 'react-router-dom';

function CustomButton({ redirectedTo, children, ...props }) {

    return (
        <Button
            variant="outlined"
            component={Link}
            to={redirectedTo}
            {...props}
            sx={{
                bgcolor: 'inherit',
                transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
                color: 'text.primary',
                background: 'linear-gradient(125deg, #f67025 50%, #b355d1 10%, #B047ED)',
                opacity: 1,
                border: 'none',

                '&:hover': {
                    background: 'linear-gradient(125deg, #b355d1 50%, #f67025 10%, #B047ED)',
                    color: '#fff',
                    border: 'none',
                    opacity: 0.8,
                },
                ...props.sx,
            }}
        >
            {children}
        </Button>
    )
}

export default CustomButton;