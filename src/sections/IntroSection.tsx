import {
  Box, Typography, Stack, useTheme,
} from '@mui/material';
import {
  useSpring,
  useSpringRef,
  useTransition,
  useChain,
  animated,
} from 'react-spring';
import yumna from '../resources/yumnaMemoji.png';
import huzaifa from '../resources/huzaifaMemoji.png';
import { logoPrimaryColor, logoSecondaryColor } from '../style/theme';
import Memoji from '../components/Memoji';

const IntroSection = () => {
  const { breakpoints } = useTheme();

  const titleFadeRef = useSpringRef();
  const titleFadeStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: titleFadeRef,
  });

  const titleScaleRef = useSpringRef();
  const titleScaleStyle = useTransition(true, {
    from: { x: 0, y: 0, scale: 5 },
    enter: { x: 0, y: 0, scale: 1 },
    ref: titleScaleRef,
  });

  const remainingFadeRef = useSpringRef();
  const remainingFadeStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    ref: remainingFadeRef,
  });

  useChain([titleFadeRef, titleScaleRef, remainingFadeRef], [2, 2.5, 3]);

  return (
    // Intro section container //
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'secondary.main',
      }}
    >
      {/* Stack to hold intro section details */}
      <Stack sx={{ alignItems: 'center', zIndex: 1 }}>
        <animated.div style={titleFadeStyle}>
          {titleScaleStyle((styles) => (
            <animated.div style={styles}>
              <Typography
                sx={(theme) => ({
                  textAlign: 'center',
                  ...theme.typography.h2,
                  marginTop: '0.5rem',
                  transition: 'all 0.2s',
                  cursor: 'default',
                  '&:hover': {
                    letterSpacing: '0.4rem',
                  },
                  [breakpoints.up('sm')]: {
                    ...theme.typography.h1,
                  },
                })}
              >
                <span style={{ color: logoPrimaryColor }}>De</span>
                <span style={{ color: logoSecondaryColor }}>Co</span>
              </Typography>
            </animated.div>
          ))}
        </animated.div>

        <animated.div style={remainingFadeStyle}>
          {/* Stack to hold 2-liner tag line */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Typography
              color="textSecondary"
              sx={(theme) => ({
                [breakpoints.up('md')]: {
                  ...theme.typography.h5,
                  fontFamily: 'Roboto',
                },
                ...theme.typography.h6,
                fontFamily: 'Roboto',
              })}
            >
              &lt;
              <span style={{ color: logoPrimaryColor }}>De</span>
              signing your vision &amp;&nbsp;
            </Typography>

            <Typography
              color="textSecondary"
              sx={(theme) => ({
                [breakpoints.up('md')]: {
                  ...theme.typography.h5,
                  fontFamily: 'Roboto',
                },
                ...theme.typography.h6,
                fontFamily: 'Roboto',
              })}
            >
              <span style={{ color: logoSecondaryColor }}>Co</span>
              ding it to life/&gt;
            </Typography>
          </Stack>

          {/* Stack to hold memojis */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{
              marginTop: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            spacing={{ xs: 5, sm: 20 }}
          >
            <Memoji source={yumna} borderColor={logoPrimaryColor} />
            <Memoji source={huzaifa} borderColor={logoSecondaryColor} />
          </Stack>
        </animated.div>
      </Stack>
    </Box>
  );
};

export default IntroSection;
