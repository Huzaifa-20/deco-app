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
    <Stack sx={{ marginTop: '1rem' }}>
      <Typography
        data-aos="fade-left"
        data-aos-delay="500"
        sx={(theme) => ({
          textAlign: 'center',
          ...theme.typography.h4,
          color: 'text.primary',
          transition: 'all 0.2s',
          cursor: 'default',
          [breakpoints.up('sm')]: {
            ...theme.typography.h3,
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
