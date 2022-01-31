import { useState } from 'react';
import {
  Box, Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../resources/logo.png';
import { logoPrimaryColor, logoSecondaryColor } from '../../style/theme';
import CustomDrawer from './CustomDrawer';
import { navBarHeadings } from '../helper';

const NavBar = () => {
  const { breakpoints } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const navDropStyle = useSpring({
    from: { y: -100 },
    to: { y: 0 },
    delay: 3500,
  });

  const logoRotateStyle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
    delay: 5500,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <animated.div style={navDropStyle}>
      {/* Nav bar container */}
      <Box
        sx={{
          width: '100%',
          height: '60px',
          backgroundColor: 'rgba(0,0,0,0)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'fixed',
          top: '0',
          zIndex: '100',
          [breakpoints.down('sm')]: {
            height: '40px',
            alignItems: 'flex-end',
          },
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
          <animated.div style={logoRotateStyle}>
            <Avatar
              srcSet={logo}
              variant="square"
              sx={{
                width: 30,
                height: 30,
                [breakpoints.up('md')]: {
                  width: 40,
                  height: 40,
                },
              }}
            />
          </animated.div>
          <Typography
            sx={(theme) => ({
              textAlign: 'center',
              ...theme.typography.h5,
              fontWeight: '500',
              [breakpoints.up('md')]: {
                ...theme.typography.h4,
              },
            })}
          >
            <span style={{ color: logoPrimaryColor }}>De</span>
            <span style={{ color: logoSecondaryColor }}>Co</span>
          </Typography>
        </Stack>

        {/* Nav headings */}
        <Stack
          direction="row"
          gap={{ md: 3, sm: 1 }}
          sx={{ color: 'text.secondary', alignItems: 'center' }}
        >
          {navBarHeadings.map((heading) => (
            <Typography
              sx={(theme) => ({
                [breakpoints.down(750)]: {
                  display: 'none',
                },
                [breakpoints.up('md')]: {
                  ...theme.typography.h5,
                  fontFamily: 'Roboto',
                },
                ...theme.typography.h6,
                fontFamily: 'Roboto',
                cursor: 'pointer',
                color: logoPrimaryColor,
                transition: 'all 0.1s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  color: logoSecondaryColor,
                },
              })}
            >
              {heading}
            </Typography>
          ))}

          {/* Responsive Hamburger icon */}
          <MenuIcon
            fontSize="large"
            onClick={toggleDrawer(true)}
            sx={{
              cursor: 'pointer',
              color: logoPrimaryColor,
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: logoSecondaryColor,
              },
              [breakpoints.up(750)]: {
                display: 'none',
              },
            }}
          />
        </Stack>

        {/* Side drawer */}
        {isDrawerOpen && (
          <CustomDrawer
            open={isDrawerOpen}
            navBarHeadings={navBarHeadings}
            toggleDrawer={toggleDrawer}
          />
        )}
      </Box>
    </animated.div>
  );
};

export default NavBar;
