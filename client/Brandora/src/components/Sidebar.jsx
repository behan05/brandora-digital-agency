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
          backgroundColor: 'rgba(228, 221, 221, 0.6)',
          backdropFilter: 'blur(4px)',
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
          { text: 'Home', path: '/home' },
          { text: 'About', path: '/about' },
          { text: 'Services', path: '/services' },
          { text: 'Fast Query ?', path: '/contact' },
        ].map(({ text, path }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            onClick={handleMenuClick}
            sx={{
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
              }
            }}
          >
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
