import React, { useState, useEffect } from 'react';
import {
  Grid, Stack, Avatar, useTheme,
} from '@mui/material';
import { StyledText } from '../style/GlobalStyles';
import { logoPrimaryColor, logoSecondaryColor } from '../style/theme';

interface AboutCardProps {
  memberIcon: string;
  memberName: string;
  memberDesc: string;
  reverse: boolean;
}

const AboutCards: React.FC<AboutCardProps> = ({
  memberIcon,
  memberName,
  memberDesc,
  reverse = false,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { breakpoints } = useTheme();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Grid
      container
      gap={1}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        transform: `${
          windowWidth > 900
            ? reverse
              ? 'translateX(20px)'
              : 'translateX(-20px)'
            : windowWidth > 1080
              ? reverse
                ? 'translateX(100px)'
                : 'translateX(-100px)'
              : null
        }`,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1',
      }}
    >
      <Grid
        item
        order={windowWidth < 600 ? 1 : reverse ? 2 : 1}
        data-aos-delay="500"
        data-aos={
          windowWidth < 600 ? 'fade-up' : reverse ? 'fade-left' : 'fade-right'
        }
      >
        <Avatar
          src={memberIcon}
          sx={{
            width: '200px',
            height: '200px',
            [breakpoints.down('md')]: {
              width: '150px',
              height: '150px',
            },
            [breakpoints.down('sm')]: {
              width: '110px',
              height: '110px',
            },
          }}
        />
      </Grid>

      <Grid
        item
        order={windowWidth < 600 ? 2 : reverse ? 1 : 2}
        data-aos-delay="500"
        data-aos={
          windowWidth < 600 ? 'fade-up' : reverse ? 'fade-left' : 'fade-right'
        }
      >
        <Stack textAlign={reverse ? 'end' : 'start'}>
          <StyledText
            sx={{
              width: '600px',
              fontSize: '1rem',
              [breakpoints.down('md')]: {
                width: '400px',
              },
              [breakpoints.down(650)]: {
                width: '340px',
                fontSize: '0.9rem',
              },
              [breakpoints.down('sm')]: {
                width: '100%',
                fontSize: '0.8rem',
                textAlign: 'center',
              },
            }}
          >
            {memberDesc}
          </StyledText>
          <StyledText
            sx={{
              color: `${reverse ? logoSecondaryColor : logoPrimaryColor}`,
              fontSize: '0.9rem',
              fontWeight: '500',
              [breakpoints.down(650)]: {
                fontSize: '0.75rem',
              },
              [breakpoints.down('sm')]: {
                display: 'none',
              },
            }}
          >
            ~
            {memberName}
          </StyledText>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AboutCards;
