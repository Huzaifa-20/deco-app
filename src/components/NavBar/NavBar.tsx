import { useState } from 'react';
import {
  Box, Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../resources/logo.png';
import { logoPrimaryColor, logoSecondaryColor } from '../../style/theme';
import CustomDrawer from './CustomDrawer';
import { navBarHeadings } from '../helper';

const NavBar = () => {
  const { breakpoints } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const logoRotateStyle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
    delay: 5500,
  });

  return (
    // Nav bar container //
    <Box
      data-aos="fade-down"
      data-aos-delay="2000"
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '2rem',
        position: 'fixed',
        top: '0',
        zIndex: 2,
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
        onClick={() => scroll.scrollToTop()}
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
          <Link to={heading} smooth duration={1000}>
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
          </Link>
        ))}

        {/* Responsive Hamburger icon */}
        <MenuIcon
          fontSize="large"
          onClick={() => setIsDrawerOpen(true)}
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
      <CustomDrawer
        open={isDrawerOpen}
        navBarHeadings={navBarHeadings}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};

export default NavBar;
