import {
  Box, Typography, Stack, useTheme,
} from '@mui/material';
import yumna from '../resources/yumnaMemoji.png';
import huzaifa from '../resources/huzaifaMemoji.png';
import { logoPrimaryColor, logoSecondaryColor } from '../style/theme';
import Memoji from '../components/Memoji';

const IntroSection = () => {
  const { breakpoints } = useTheme();

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
        {/* Heading */}
        <Typography
          sx={(theme) => ({
            textAlign: 'center',
            ...theme.typography.h2,
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

        {/* Stack to hold 2-liner tag line */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ textAlign: 'center' }}
        >
          <Typography color="textSecondary">
            &lt;
            <span style={{ color: logoPrimaryColor }}>De</span>
            signing your vision &amp;&nbsp;
          </Typography>

          <Typography color="textSecondary">
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
      </Stack>
    </Box>
  );
};

export default IntroSection;
