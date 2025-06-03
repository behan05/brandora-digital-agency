import reactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/AppRouters';
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/index';
import '@fontsource/inter';


// Targeting root by core js and this happen the bubble.
const root = document.getElementById('root');
reactDOM.createRoot(root)
    .render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={routers} />
            </ThemeProvider>
        </StrictMode>
    );