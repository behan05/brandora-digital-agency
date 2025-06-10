import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import palette from './palette';
import shape from './shape';
import typography from './typography';
import components from './components';

export const theme = createTheme({
    breakpoints,
    palette,
    shape,
    typography,
    components,
});
