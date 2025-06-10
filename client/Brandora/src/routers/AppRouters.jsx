import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../components/Contact';
import HireMe from '../pages/HireMe';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Hero /> },
            { path: '/about', element: <About /> },
            { path: '/services', element: <Services /> },
            { path: '/contact', element: <Contact /> },
            { path: '/hire-me', element: <HireMe /> },
        ]
    },
]);