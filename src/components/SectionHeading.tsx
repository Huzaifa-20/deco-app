import React from 'react';
import {
  Stack, Typography, Box, useTheme,
} from '@mui/material';
import { logoPrimaryColor } from '../style/theme';

interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      sx={{
        marginBottom: '1rem',
        [breakpoints.up('sm')]: {
          marginBottom: '2rem',
        },
      }}
    >
      <Typography
        data-aos="fade-left"
        data-aos-delay="500"
        sx={(theme) => ({
          textAlign: 'center',
          ...theme.typography.h3,
          color: 'text.primary',
          transition: 'all 0.2s',
          cursor: 'default',
          [breakpoints.down(470)]: {
            fontSize: '2.25rem',
          },
        })}
      >
        {heading}
      </Typography>
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
