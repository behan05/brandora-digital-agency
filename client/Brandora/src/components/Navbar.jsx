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
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton';


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
];

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component={'header'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'static'
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
        <Stack flexDirection={'row'} gap={3}>
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
          bgcolor: 'inherit'
        }}>
        Raise Query ?
      </CustomButton>

      {isSmallScreen && (
        <Tooltip title='Menu'>
          <IconButton edge='end'>
            <ListIcon sx={{ cursor: 'pointer' }} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

export default Navbar