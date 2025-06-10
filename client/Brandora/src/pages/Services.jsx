import React from 'react';
import { Box, Typography, Stack, useTheme, IconButton } from '../mui/muiComponents';

import DesignIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import MarketingIcon from '@mui/icons-material/Campaign';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';

// components
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

function Services() {
  const theme = useTheme();

  const services = [
    {
      icon: <DesignIcon fontSize="large" color="primary" />,
      title: 'UI/UX Design',
      description: 'We create visually appealing and intuitive interfaces tailored to your brand’s identity, ensuring a seamless user experience.',
    },
    {
      icon: <CodeIcon fontSize="large" color="primary" />,
      title: 'Web Development',
      description: 'We build high-performance, responsive, and scalable websites and web apps using the latest MERN stack technologies.',
    },
    {
      icon: <MarketingIcon fontSize="large" color="primary" />,
      title: 'Digital Marketing',
      description: 'We help you reach your target audience through data-driven SEO, paid ads, social media campaigns, and content strategies.',
    },
    {
      icon: <SecurityIcon fontSize="large" color="primary" />,
      title: 'Cybersecurity',
      description: 'We secure your digital infrastructure with penetration testing, encryption, and ongoing vulnerability assessments.',
    },
    {
      icon: <PhoneAndroidIcon fontSize="large" color="primary" />,
      title: 'Mobile App Development',
      description: 'We create high-quality iOS and Android apps focused on performance, scalability, and user-centered design.',
    },
    {
      icon: <CloudQueueIcon fontSize="large" color="primary" />,
      title: 'Cloud Solutions',
      description: 'We help you migrate to and manage scalable cloud infrastructures using AWS, Azure, and other modern platforms.',
    },
    {
      icon: <BarChartIcon fontSize="large" color="primary" />,
      title: 'Data Analytics',
      description: 'We transform raw data into actionable insights using dashboards, reports, and predictive analytics tools.',
    },
    {
      icon: <ShoppingCartIcon fontSize="large" color="primary" />,
      title: 'E-commerce Development',
      description: 'We build custom e-commerce solutions with secure payment integration, user-friendly UI, and backend automation.',
    },
    {
      icon: <BrandingWatermarkIcon fontSize="large" color="primary" />,
      title: 'Branding & Identity',
      description: 'We shape your visual identity with logo design, color palettes, typography, and comprehensive brand guidelines.',
    },
    {
      icon: <BuildIcon fontSize="large" color="primary" />,
      title: 'Website Maintenance',
      description: 'We offer regular updates, bug fixes, backup services, and performance optimization to keep your site running smoothly.',
    },
    {
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
      title: 'IT Consulting',
      description: 'We guide you in making the right tech decisions, from infrastructure planning to software architecture and DevOps.',
    },
    {
      icon: <SchoolIcon fontSize="large" color="primary" />,
      title: 'Technical Training',
      description: 'We provide hands-on training in development, marketing, and cybersecurity to upskill your team effectively.',
    },
  ];

  return (
    <Box px={{ xs: 2, sm: 4, md: 8 }} py={{ xs: 4, sm: 6, md: 10 }}>
      {/* Intro Section */}
      <Stack textAlign="center" spacing={2} mb={6}>
        <Typography variant="h4" fontWeight={900}>
          Our Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We offer end-to-end solutions to grow your business online.
        </Typography>
      </Stack>

      {/* Services Grid */}
      <Box sx={{
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}>
        {services.map((serviceCard, index) => (
          <Stack
          key={index}
            flexBasis={300}
            borderRadius={2}
            boxShadow={3}
            p={2}
            sx={{
              background: 'linear-gradient(125deg,rgba(179, 85, 31, 0.1),rgba(179, 85, 209, 0.1) 10%,rgba(176, 71, 237, 0.1))',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s ease',

              '&:hover': {
                transform: 'translateY(-15px)'
              }
            }}>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              maxWidth={'fit-content'}
              mb={10}
            >
              <IconButton edge={'start'}>
                {serviceCard.icon}
              </IconButton>
            </Stack>
            <Typography
              gutterBottom
              color='text.secondary'
              variant='subtitle'
              letterSpacing={1}
            >
              {serviceCard.title}
            </Typography>

            <Stack>
              <Typography
                color='text.primary'
                variant='body2'
                letterSpacing={1}
              >
                {serviceCard.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <Stack textAlign="center" mt={10} spacing={2}>
        <Typography variant="h5" fontWeight={800}>
          Ready to work with us?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Let’s turn your ideas into reality. Contact us today!
        </Typography>

        {/* Contact Form */}
        <Box>
          <Contact />
        </Box>

      </Stack>
    </Box>
  );
}

export default Services;
