import React, { useState, useEffect } from 'react';
import {
  Stack, Avatar, Typography, useTheme, Theme,
} from '@mui/material';
import designIcon from '../resources/logo.png';
import codeIcon from '../resources/codeIcon.png';
import { logoPrimaryColor } from '../style/theme';
import { services, ServiceType } from './helper';

interface ServiceCardProps {
  service: string;
}

const cardHeadingStyle = (theme: Theme, breakpoints: Theme['breakpoints']) => ({
  ...theme.typography.h4,
  fontSize: '2rem',
  fontFamily: 'Roboto',
  [breakpoints.down(470)]: {
    fontSize: '1.875rem',
  },
});

const cardTextStyle = (theme: Theme, breakpoints: Theme['breakpoints']) => ({
  ...theme.typography.h6,
  fontFamily: 'Roboto',
  fontSize: '1.125rem',
  [breakpoints.down(470)]: {
    fontSize: '1rem',
  },
});

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [data, setData] = useState<ServiceType | null>(null);
  const { breakpoints } = useTheme();

  useEffect(() => {
    if (service === 'Designer') {
      setData(services[0]);
    } else {
      setData(services[1]);
    }
  }, [service]);

  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay="600"
      sx={{
        maxWidth: '445px',
        backgroundColor: 'white',
        padding: '1rem',
        [breakpoints.up('md')]: {
          padding: '3rem',
        },
      }}
      gap={{ xs: 5, md: 5 }}
      alignItems="center"
    >
      <Stack
        direction={{ sm: 'row', md: 'column' }}
        alignItems="center"
        gap={1}
      >
        <Avatar
          srcSet={service === 'Designer' ? designIcon : codeIcon}
          variant="square"
          sx={{
            width: 50,
            height: 45,
            [breakpoints.up('md')]: {
              width: 65,
              height: 60,
            },
          }}
        />

        <Typography
          sx={(theme) => ({ ...cardHeadingStyle(theme, breakpoints) })}
        >
          {service}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({
            ...cardTextStyle(theme, breakpoints),
            textAlign: 'center',
          })}
        >
          {data?.detail}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({
            ...cardHeadingStyle(theme, breakpoints),
            color: logoPrimaryColor,
          })}
        >
          {service === 'Designer' ? 'We Design' : 'We Code'}
        </Typography>

        <Typography
          sx={(theme) => ({
            ...cardTextStyle(theme, breakpoints),
            textAlign: 'center',
          })}
        >
          {data?.skillSet}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({
            ...cardHeadingStyle(theme, breakpoints),
            color: logoPrimaryColor,
          })}
        >
          {service === 'Designer' ? 'Design Tools' : 'Dev Tools'}
        </Typography>
        <Typography
          sx={(theme) => ({
            ...cardTextStyle(theme, breakpoints),
            textAlign: 'center',
          })}
        >
          <ul>
            {data?.tools.map((tool) => (
              <li>{tool}</li>
            ))}
          </ul>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
