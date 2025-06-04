import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/AppRouters';
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/index';
import '@fontsource/inter';
import { store } from './redux/store/store';
import { Provider } from "react-redux";


// Targeting root by core js and this happen the bubble.
const root = document.getElementById('root');
ReactDOM.createRoot(root)
    .render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <RouterProvider router={routers} />
                </Provider>
            </ThemeProvider>
        </StrictMode>
    );