import { Box, useMediaQuery, useTheme } from "../mui/muiComponents";
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const contentPadding = isMd ? theme.spacing(22) : theme.spacing(2);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.15)',
          zIndex: -2,
        }}
        src={isMd ? "/videos/bgVideo3.mp4" : "/videos/bgVideo2.mp4"}
        type="video/mp4"
      />

      {/* Optional Dark Overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          zIndex: -1,
        }}
      />

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


      <Footer />

    </Box>
  );
}

export default Layout;
