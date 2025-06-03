import { Button } from '../mui/muiComponents';
import { Link } from 'react-router-dom';

function CustomButton({ redirectedTo, children, ...props }) {

    return (
        <Button
            variant="outlined"
            component={Link}
            to={redirectedTo}
            {...props}
        >
            {children}
        </Button>
    )
}

export default CustomButton;