import React, { useState, useEffect } from 'react';
import {
  Grid, Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import designIcon from '../resources/logo.png';
import { workFlow, WorkType } from './helper';
import { logoPrimaryColor } from '../style/theme';

interface WorkCardProps {
  step: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ step }) => {
  const [data, setData] = useState<WorkType | null>(null);
  const { breakpoints } = useTheme();

  useEffect(() => {
    setData(workFlow[step]);
  }, [step]);

  return (
    <Grid
      item
      textAlign="center"
      data-aos="fade-up"
      data-aos-delay={100 * step + 600}
      sx={{
        maxWidth: '130px',
        background: 'white',
        padding: '0.5rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'text.primary',
        borderWidth: '1px',
        [breakpoints.up('md')]: {
          maxWidth: '200px',
          padding: '1rem',
        },
        transition: 'all 0.2s',
        '&:hover': {
          background: logoPrimaryColor,
        },
      }}
      gap={1}
    >
      <Stack
        direction={{ sm: 'row', md: 'column' }}
        alignItems="center"
        gap={1}
      >
        <Avatar
          srcSet={designIcon}
          variant="square"
          sx={{
            width: 25,
            height: 25,
            [breakpoints.up('sm')]: {
              width: 40,
              height: 40,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            },
          }}
        />

        <Typography
          sx={(theme) => ({
            ...theme.typography.body1,
            fontFamily: 'Roboto',
            [breakpoints.up('md')]: {
              ...theme.typography.h6,
              fontWeight: '500',
            },
          })}
        >
          {data?.heading}
        </Typography>
      </Stack>

      <Typography
        sx={(theme) => ({
          ...theme.typography.body2,
          fontFamily: 'Roboto',
          fontSize: '0.75rem',
          textAlign: 'left',
          [breakpoints.up('md')]: {
            ...theme.typography.body2,
            textAlign: 'center',
          },
        })}
      >
        {data?.detail}
      </Typography>
    </Grid>
  );
};
export default WorkCard;
