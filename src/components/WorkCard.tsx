import React, { useState, useEffect } from 'react';
import {
  Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import designIcon from '../resources/logo.png';
import { workFlow, WorkType } from './helper';

interface WorkCardProps {
  step: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ step }) => {
  const [data, setData] = useState<WorkType | null>(null);
  const { breakpoints } = useTheme();

  useEffect(() => {
    setData(workFlow[step]);
  }, []);

  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay={100 * step}
      sx={{
        maxWidth: '200px',
        background: 'white',
        padding: '1rem',
        borderRadius: '10px',
      }}
      gap={1}
      alignItems="center"
    >
      <Avatar
        srcSet={designIcon}
        variant="square"
        sx={{
          width: 30,
          height: 30,
        }}
      />

      <Typography variant="h5" fontWeight="500" fontFamily="Roboto">
        {data?.heading}
      </Typography>

      <Typography
        textAlign="center"
        fontFamily="Roboto"
        sx={(theme) => ({
          ...theme.typography.body2,
          [breakpoints.up('md')]: {
            ...theme.typography.body1,
          },
        })}
      >
        {data?.detail}
      </Typography>
    </Stack>
  );
};
export default WorkCard;
