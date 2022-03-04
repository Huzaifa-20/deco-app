import { Box, Stack, useTheme } from '@mui/material';
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
import { flexCenterStyle } from './sectionStyles';
import { StyledTitle, StyledText } from '../style/GlobalStyles';

const IntroSection = () => {
  const { breakpoints } = useTheme();

  const titleFadeRef = useSpringRef();
  const titleFadeStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    ref: titleFadeRef,
  });

  const titleScaleRef = useSpringRef();
  const titleScaleStyle = useTransition(true, {
    from: { x: 0, y: 0, scale: 2 },
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

  useChain([titleFadeRef, titleScaleRef, remainingFadeRef], [2, 3.5, 4.5]);

  return (
    // Intro section container //
    <Box
      sx={{
        height: '100vh',
        ...flexCenterStyle,
        backgroundColor: 'primary.main',
      }}
      id="Intro"
    >
      {/* Stack to hold intro section details */}
      <Stack sx={{ alignItems: 'center', zIndex: 1 }}>
        <animated.div style={titleFadeStyle}>
          {titleScaleStyle((styles) => (
            <animated.div style={styles}>
              {/* DeCo Title */}
              <StyledTitle
                sx={{
                  fontSize: '6rem',
                  [breakpoints.down('md')]: {
                    fontSize: '5rem',
                  },
                  [breakpoints.down(750)]: {
                    fontSize: '4rem',
                  },

                  transition: 'all 0.2s',
                  '&:hover': {
                    letterSpacing: '0.5rem',
                  },
                }}
              >
                <span style={{ color: logoPrimaryColor }}>De</span>
                <span style={{ color: logoSecondaryColor }}>Co</span>
              </StyledTitle>
            </animated.div>
          ))}
        </animated.div>

        <animated.div style={remainingFadeStyle}>
          {/* Stack to hold 2-liner tag line */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <StyledText
              sx={{
                color: '#FFFFFF',
                fontSize: '1.4rem',
                [breakpoints.down('md')]: {
                  fontSize: '1.25rem',
                },
                [breakpoints.down(750)]: {
                  fontSize: '1.1rem',
                },
              }}
            >
              &lt;
              <span style={{ color: logoPrimaryColor }}>De</span>
              signing your vision &amp;&nbsp;
            </StyledText>

            <StyledText
              sx={{
                color: '#FFFFFF',
                fontSize: '1.4rem',
                [breakpoints.down('md')]: {
                  fontSize: '1.25rem',
                },
                [breakpoints.down(750)]: {
                  fontSize: '1.1rem',
                },
              }}
            >
              <span style={{ color: logoSecondaryColor }}>Co</span>
              ding it to life/&gt;
            </StyledText>
          </Stack>

          {/* Stack to hold memojis */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{
              marginTop: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            spacing={{ xs: 3, sm: 10, md: 20 }}
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
