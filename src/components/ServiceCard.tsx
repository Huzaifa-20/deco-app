import React, { useState, useEffect } from 'react';
import { Stack, Avatar, useTheme } from '@mui/material';
import designIcon from '../resources/logo.png';
import codeIcon from '../resources/codeIcon.png';
import { logoPrimaryColor } from '../style/theme';
import { services, ServiceType } from './helper';
import { StyledText } from '../style/GlobalStyles';

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
  }, [service]);

  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay="600"
      sx={{
        width: '400px',
        backgroundColor: 'white',
        padding: '2rem',
        zIndex: '1',
        [breakpoints.down('md')]: {
          width: '350px',
        },
        [breakpoints.down(780)]: {
          width: '100%',
          paddingX: '1rem',
        },
        [breakpoints.down('sm')]: {
          width: '310px',
          padding: '2rem',
        },
        [breakpoints.down(390)]: {
          width: '100%',
          paddingX: '1rem',
        },
      }}
      gap={{ xs: 2, sm: 3 }}
      alignItems="center"
    >
      <Stack
        direction={{ xs: 'row', sm: 'column' }}
        alignItems="center"
        gap={1}
      >
        <Avatar
          srcSet={service === 'Designer' ? designIcon : codeIcon}
          variant="square"
          sx={{
            width: 50,
            height: 45,
            [breakpoints.down('sm')]: {
              width: 27,
              height: 26,
            },
          }}
        />

        <StyledText
          sx={{
            fontSize: '1.75rem',
            [breakpoints.down(650)]: {
              fontSize: '1.5rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '1.25rem',
            },
          }}
        >
          {service}
        </StyledText>
      </Stack>

      <StyledText
        sx={{
          fontSize: '1rem',
          textAlign: 'center',
          [breakpoints.down(650)]: {
            fontSize: '0.9rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '0.8rem',
          },
        }}
      >
        {data?.detail}
      </StyledText>

      <Stack alignItems="center">
        <StyledText
          sx={{
            fontSize: '1.75rem',
            color: logoPrimaryColor,
            [breakpoints.down(650)]: {
              fontSize: '1.5rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '1.25rem',
            },
          }}
        >
          {service === 'Designer' ? 'We Design' : 'We Code'}
        </StyledText>

        <StyledText
          sx={{
            fontSize: '1rem',
            textAlign: 'center',
            [breakpoints.down(650)]: {
              fontSize: '0.9rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          {data?.skillSet}
        </StyledText>
      </Stack>

      <Stack alignItems="center">
        <StyledText
          sx={{
            fontSize: '1.75rem',
            color: logoPrimaryColor,
            [breakpoints.down(650)]: {
              fontSize: '1.5rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '1.25rem',
            },
          }}
        >
          {service === 'Designer' ? 'Design Tools' : 'Dev Tools'}
        </StyledText>
        <StyledText
          sx={{
            fontSize: '1rem',
            textAlign: 'center',
            [breakpoints.down(650)]: {
              fontSize: '0.9rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          <ul>
            {data?.tools.map((tool) => (
              <li>{tool}</li>
            ))}
          </ul>
        </StyledText>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
