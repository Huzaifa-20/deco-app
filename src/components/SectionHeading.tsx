import React from 'react';
import { Stack, Box, useTheme } from '@mui/material';
import { logoPrimaryColor } from '../style/theme';
import { StyledTitle } from '../style/GlobalStyles';

interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      sx={{
        zIndex: '1',
        marginBottom: '2rem',
        [breakpoints.down('sm')]: {
          marginBottom: '1rem',
        },
      }}
    >
      <StyledTitle
        data-aos="fade-left"
        data-aos-delay="500"
        sx={{
          fontSize: '2.5rem',
          [breakpoints.down('md')]: {
            fontSize: '2.25rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '2rem',
          },
        }}
      >
        {heading}
      </StyledTitle>
      <Box
        data-aos="fade-left"
        sx={{
          width: '5rem',
          height: '3px',
          backgroundColor: logoPrimaryColor,
        }}
      />
    </Stack>
  );
};

export default SectionHeading;
