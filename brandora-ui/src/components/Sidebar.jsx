import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Tooltip,
  IconButton,
  Stack,
} from "../mui/muiComponents";
import { Link } from 'react-router-dom';
import { toggleMenu } from '../redux/slices/menu';
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';


import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';


function Sidebar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.menu.isMenuOpen);
  const theme = useTheme();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <Drawer
      anchor='right'
      open={open}
      variant='temporary'
      onClose={handleMenuClick}
      PaperProps={{
        sx: {
          width: 250,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(192, 194, 196, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
          p: 2,
        }
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backgroundColor: 'none',
          },
        },
      }}
    >
      <List>
        <Stack direction="row" justifyContent="flex-end" p={1}>
          <Tooltip title='Menu'>
            <IconButton edge='end' onClick={handleMenuClick}>
              <CloseIcon sx={{ cursor: 'pointer' }} />
            </IconButton>
          </Tooltip>
        </Stack>
        {[
          { text: 'Home', path: '/', icon: <HomeIcon sx={{ mr: 1 }} /> },
          { text: 'About Us', path: '/about', icon: <InfoIcon sx={{ mr: 1 }} /> },
          { text: 'Services', path: '/services', icon: <BuildIcon sx={{ mr: 1 }} /> },
          { text: 'Hire Me', path: '/hire-me', icon: <ContactMailIcon sx={{ mr: 1 }} /> },
          { text: 'Fast Query ?', path: '/contact', icon: <WorkOutlineIcon sx={{ mr: 1 }} /> },
          {
            text: 'Portfolio',
            path: 'https://behan-portfolio.vercel.app',
            icon: <InfoOutlineIcon sx={{ mr: 1 }} />
          },
        ].map(({ text, path, icon }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            onClick={handleMenuClick}
            sx={{
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'transparent',
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              backdropFilter: 'blur(4px)',
              color: theme.palette.text.primary,
              '&:hover': {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
              }
            }}
          >
            {icon}
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
