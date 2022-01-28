import {
  Box, Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import logo from '../resources/logo.png';
import { logoPrimaryColor, logoSecondaryColor } from '../style/theme';

const NavBar = () => {
  const { breakpoints } = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100px',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        position: 'fixed',
        top: '0',
        zIndex: '100',
      }}
    >
      {/* Logo */}
      <Stack
        direction="row"
        gap={1}
        sx={{
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Avatar
          srcSet={logo}
          variant="square"
          sx={{
            width: 40,
            height: 40,
          }}
        />
        <Typography
          sx={(theme) => ({
            textAlign: 'center',
            ...theme.typography.h5,
            fontWeight: '500',
            [breakpoints.up('sm')]: {
              ...theme.typography.h4,
              fontWeight: '500',
            },
          })}
        >
          <span style={{ color: logoPrimaryColor }}>De</span>
          <span style={{ color: logoSecondaryColor }}>Co</span>
        </Typography>
      </Stack>

      {/* Navs */}
      <Stack direction="row" gap={3} sx={{ color: 'text.secondary' }}>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: '500',
            cursor: 'pointer',
            color: logoPrimaryColor,
            transition: 'all 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
              color: logoSecondaryColor,
            },
          })}
        >
          About
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: '500',
            cursor: 'pointer',
            color: logoPrimaryColor,
            transition: 'all 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
              color: logoSecondaryColor,
            },
          })}
        >
          Services
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: '500',
            cursor: 'pointer',
            color: logoPrimaryColor,
            transition: 'all 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
              color: logoSecondaryColor,
            },
          })}
        >
          Portfolio
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: '500',
            cursor: 'pointer',
            color: logoPrimaryColor,
            transition: 'all 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
              color: logoSecondaryColor,
            },
          })}
        >
          Testimonials
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: '500',
            cursor: 'pointer',
            color: logoPrimaryColor,
            transition: 'all 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
              color: logoSecondaryColor,
            },
          })}
        >
          Contact
        </Typography>
      </Stack>
    </Box>
  );
};

export default NavBar;
