import { Box, Stack, useMediaQuery, useTheme } from "../mui/muiComponents";
import Navbar from '../components/Navbar';
import landingPageImageBg from '../assets/imgs/landingPageBackgroundImg.png'
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const contentPadding = isMd ? theme.spacing(30) : theme.spacing(2);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
        backgroundColor: theme.palette.background.default,
        backgroundImage: `url(${landingPageImageBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover'
      }}
    >
      <Box sx={{ px: contentPadding }}>
        <Navbar />
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2
      }}>

        <Box
          flex={1}
          sx={{ px: contentPadding }}
        >
          <Outlet />
        </Box>

        <Sidebar />
      </Box>

      <Box sx={{ px: contentPadding }}>Footer</Box>
    </Box>
  );
}

export default Layout;
