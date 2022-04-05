import { useState } from 'react';
import {
  Box, Stack, Avatar, useTheme,
} from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../resources/logo.png';
import { logoPrimaryColor, logoSecondaryColor } from '../../style/theme';
import CustomDrawer from './CustomDrawer';
import { navBarHeadings } from '../helper';
import { StyledTitle, StyledText } from '../../style/GlobalStyles';

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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '2rem',
        position: 'fixed',
        top: '0',
        zIndex: 2,
      }}
    >
      {/* Logo */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 0, sm: 1 }}
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
              width: 40,
              height: 40,
              [breakpoints.down('md')]: {
                width: 35,
                height: 35,
              },
              [breakpoints.down(750)]: {
                width: 30,
                height: 30,
              },
            }}
          />
        </animated.div>
        <StyledTitle
          sx={{
            cursor: 'pointer',
            fontSize: '2.45rem',
            [breakpoints.down('md')]: {
              fontSize: '2.25rem',
            },
            [breakpoints.down(750)]: {
              fontSize: '1.875rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.875rem',
            },
          }}
        >
          <span style={{ color: logoPrimaryColor }}>De</span>
          <span style={{ color: logoSecondaryColor }}>Co</span>
        </StyledTitle>
      </Stack>

      {/* Nav headings */}
      <Stack direction="row" gap={3}>
        {navBarHeadings.map((heading) => (
          <Link to={heading} smooth duration={1000}>
            <StyledText
              sx={{
                cursor: 'pointer',
                color: logoPrimaryColor,
                fontSize: '1.5rem',
                [breakpoints.down('md')]: {
                  fontSize: '1.25rem',
                },
                [breakpoints.down(750)]: {
                  display: 'none',
                },

                transition: 'all 0.1s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  color: logoSecondaryColor,
                },
              }}
            >
              {heading}
            </StyledText>
          </Link>
        ))}

        {/* Responsive Hamburger icon */}
        <MenuIcon
          fontSize="medium"
          onClick={() => setIsDrawerOpen(true)}
          sx={{
            cursor: 'pointer',
            color: logoPrimaryColor,
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
