import React, { useState } from 'react';
import { Box, Button, IconButton, Stack, TextField, Typography, useMediaQuery, useTheme } from "../mui/muiComponents"
import custumBgImage from '../assets/imgs/customBgImage.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CustomButton from './CustomButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axiosClient from '../api/axiosClient'

function Footer() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const [email, setEmail] = useState('');

  const handelInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post('https://brandora-server.onrender.com/api/users/newsLetter', { email });
      alert(`${res.data.message}`);

      setEmail(''); // reset

    } catch (error) {
      alert('Something went wrong. Please try again. ' + error.message);
    }
  };

  const socialIcons = [FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon];

  return (
    <Box
      sx={{
        backgroundImage: `url(${custumBgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        pt: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        borderTopRightRadius: '16px',
        borderTopLeftRadius: '16px',
      }}
    >
      {/* Box 1 */}
      <Box sx={{
        display: 'flex',
        flexDirection: isLg ? 'column' : 'row',
        p: 2,
        gap: 4
      }}>
        {/* Input Field */}
        <Stack flex={1} textAlign={'center'} >
          <Typography variant='h6' color='text.primary' letterSpacing={1}>Join our newsletter</Typography>
          <Box component={'form'} onSubmit={handleSubmit}>
            <Stack
              direction="row"
              gap={1}
              sx={{ maxWidth: 300, mx: 'auto', mt: 2, alignItems: 'center' }}
            >
              <TextField
                label="Enter Your Email"
                value={email}
                name="email"
                required
                onChange={(e) => handelInput(e)}
                fullWidth
              />
              <Button type="submit" variant="contained" sx={{ p: 1, px: 3, borderRadius: 6 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>

        <Stack
          flex={1}
          direction={isMd ? 'column' : 'row'}
          gap={6}
        >
          <Stack mx={'auto'}>
            <Typography
              variant='h6'
              color='text.primary'
              letterSpacing={1}
              gutterBottom>
              Connect With Us!
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}>
              <EmailIcon color={'text.success'} />
              <Typography
                gutterBottom
                variant='subtitle1'
                color='text.secondary'
              >
                behankr@outlook.com
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
            >
              <PhoneIcon color={'text.success'} />
              <Typography
                variant='subtitle1'
                color='text.secondary'
              >+91 896 9015 583
              </Typography>
            </Stack>
          </Stack>

          <Stack mx={'auto'}>
            <Typography variant='h6' mx={'auto'} gutterBottom color='text.primary' letterSpacing={1}>Address!</Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <LocationOnIcon color={'text.success'} />
              <Typography variant='subtitle1' gutterBottom color='text.secondary'>
                Zirkhpur Near Bus Stand<br />{' '}Pubjab. India (Bharat)
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              <AccessTimeIcon color={'text.success'} />
              <Typography variant='subtitle1' color='text.secondary'>Mon - Sat : 09.00AM - 05.00PM</Typography>
            </Stack>
          </Stack>

        </Stack>
      </Box>

      {/* Box 2 */}
      <Stack textAlign={'center'} direction={'column'} gap={2}>
        <Typography gutterBottom mt={15} variant={isMd ? 'h4' : 'h2'} component={'h4'}>
          <Typography
            component={'span'}
            variant={isMd ? 'h4' : 'h2'}
            fontStyle={'italic'}
            color='text.secondary'
          >
            Let's Work{' '}
          </Typography>
          Together!
        </Typography>

        <CustomButton sx={{
          maxWidth: 200,
          mx: 'auto'
        }}>
          Get In Touch
        </CustomButton>

        <Stack direction="row" mx={'auto'} mt={2} spacing={1}>
          {socialIcons.map((IconComponent, index) => (
            <IconButton key={index} aria-label={`social-icon-${index})`}>
              <IconComponent />
            </IconButton>
          ))}
        </Stack>
      </Stack>

      {/* Box 3 */}
      <Stack textAlign={'center'} mt={4}>
        <Typography variant='label' color='text.secondary'>
          Copyright© {new Date().getFullYear()}{' '}Brandora, All rights reserved. Proudly Powered by MUI 5.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer