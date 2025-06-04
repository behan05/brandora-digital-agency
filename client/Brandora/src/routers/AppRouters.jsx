import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Hero from '../pages/Hero';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Hero />},
        ]
    },
]);