import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Tooltip,
  IconButton
} from '../mui/muiComponents'
import logoImg from '../assets/imgs/logo.png'
import { Link, NavLink } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import CustomButton from './CustomButton';
import { toggleMenu } from '../redux/slices/menu';
import { useDispatch, useSelector } from "react-redux";

const menuItem = [
  {
    linktext: 'Home',
    path: '/',
  },
  {
    linktext: 'About',
    path: '/about',
  },
  {
    linktext: 'Services',
    path: '/services',
  },
  {
    linktext: 'Contact',
    path: '/contact',
  },
  {
    linktext: 'Hire Me',
    path: '/hire-me',
  },
];

function Navbar() {

  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = () => {
    dispatch(toggleMenu())
  }
  return (
    <Box
      component={'header'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'static',
        flexWrap: 'wrap'
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: 'flex', alignItems: 'center'
        }}>
        <img
          src={logoImg}
          alt="brand logo"
          style={{ width: 100, objectFit: 'cover' }}
        />
      </Box>

      {/* Navigation links */}
      {!isSmallScreen && (
        <Stack
          flexDirection={'row'}
          gap={3}
          p={2}
          borderRadius={2}
          sx={{
            background: 'linear-gradient(125deg,rgba(246, 112, 37, 0.2) 50%,rgba(179, 85, 209, 0.1) 10%,rgba(176, 71, 237, 0.2))',
            boxShadow: 'inset 0 0 0.2rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          {menuItem.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: theme.typography.fontFamily,
                color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
              })}
            >
              <Typography variant='body1'>{item.linktext}</Typography>
            </NavLink>
          ))}
        </Stack>
      )}

      {/* Support Button */}
      <CustomButton redirectedTo={'/support'}
        sx={{
          ml: isSmallScreen && 'auto',
          mr: 1,
          bgcolor: 'inherit',
        }}>
        Raise Query ?
      </CustomButton>

      {isSmallScreen && (
        <Tooltip title='Menu'>
          <IconButton edge='end' onClick={handleMenuClick}>
            {!isMenuOpen && <ListIcon sx={{ cursor: 'pointer' }} />}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

export default Navbar