import React, { useState, useEffect } from 'react';
import {
  Stack, Avatar, Typography, useTheme,
} from '@mui/material';
import designIcon from '../resources/logo.png';
import codeIcon from '../resources/codeIcon.png';
import { logoPrimaryColor } from '../style/theme';
import { services, ServiceType } from './helper';

interface ServiceCardProps {
  service: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [data, setData] = useState<ServiceType | null>(null);
  const { breakpoints } = useTheme();

  useEffect(() => {
    if (service === 'Designer') {
      setData(services[0]);
    } else {
      setData(services[1]);
    }
  }, []);

  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay="500"
      sx={{
        maxWidth: '300px',
        backgroundColor: 'white',
        paddingTop: '1rem',
        padding: '1rem',
        borderRadius: '10px',
        [breakpoints.up('md')]: {
          maxWidth: '345px',
        },
      }}
      alignItems="center"
      gap={1}
    >
      <Avatar
        srcSet={service === 'Designer' ? designIcon : codeIcon}
        variant="square"
        sx={{
          width: 65,
          height: 60,
        }}
      />

      <Stack alignItems="center">
        <Typography variant="h6" fontWeight="500" fontFamily="Roboto">
          {service}
        </Typography>
        <Typography
          textAlign="center"
          fontFamily="Roboto"
          sx={(theme) => ({
            ...theme.typography.body2,
            [breakpoints.up('md')]: {
              ...theme.typography.body2,
            },
          })}
        >
          {data?.detail}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          variant="h6"
          fontWeight="400"
          color={logoPrimaryColor}
          fontFamily="Roboto"
        >
          Things I enjoy designing:
        </Typography>
        <Typography variant="body2" textAlign="center" fontFamily="Roboto">
          {data?.skillSet}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          variant="h6"
          fontWeight="400"
          color={logoPrimaryColor}
          fontFamily="Roboto"
        >
          Design Tools
        </Typography>
        <Typography variant="body2" textAlign="center" fontFamily="Roboto">
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
