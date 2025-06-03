// components/ContentWrapper.jsx
import { Box, useMediaQuery, useTheme } from '../mui/muiComponents';

function ContentWrapper({ children }) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const contentPadding = isMd ? theme.spacing(10) : theme.spacing(2);

    return <Box sx={{ px: contentPadding }}>{children}</Box>;
}

export default ContentWrapper;
