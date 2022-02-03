import React from 'react';
import {
  Stack, Box, Typography, useTheme, TextField,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SectionHeading from '../components/SectionHeading';
import { logoPrimaryColor } from '../style/theme';

const ContactSection: React.FC = () => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      sx={{
        height: '100vh',
        borderWidth: '1rem',
        borderColor: 'text.secondary',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="Contact"
    >
      <SectionHeading heading="Contact Us" />

      <Typography
        data-aos="zoom-out"
        data-aos-delay="600"
        sx={(theme) => ({
          textAlign: 'center',
          marginTop: '1rem',
          ...theme.typography.body2,
          fontFamily: 'Roboto',
          color: 'text.primary',
          cursor: 'default',
          [breakpoints.up('md')]: {
            ...theme.typography.body1,
            fontFamily: 'Roboto',
          },
        })}
      >
        Thanks for taking the time to reach out
        <br />
        How can we help you?
      </Typography>

      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        gap={{ md: 2, lg: 12 }}
        sx={{ marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack gap={2}>
            <Box
              data-aos="fade-up"
              data-aos-delay="700"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LocationOnIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: logoPrimaryColor,
                  borderRadius: '50%',
                  padding: '0.5rem',
                  marginRight: '1rem',
                }}
              />
              <Typography
                sx={(theme) => ({
                  textAlign: 'center',
                  ...theme.typography.body2,
                  fontFamily: 'Roboto',
                  color: 'text.primary',
                  cursor: 'default',
                  [breakpoints.up('md')]: {
                    ...theme.typography.body1,
                    fontFamily: 'Roboto',
                  },
                })}
              >
                Islamabad, Pakistan
              </Typography>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay="800"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <EmailIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: logoPrimaryColor,
                  borderRadius: '50%',
                  padding: '0.5rem',
                  marginRight: '1rem',
                }}
              />
              <Typography
                sx={(theme) => ({
                  textAlign: 'center',
                  ...theme.typography.body2,
                  fontFamily: 'Roboto',
                  color: 'text.primary',
                  cursor: 'default',
                  [breakpoints.up('md')]: {
                    ...theme.typography.body1,
                    fontFamily: 'Roboto',
                  },
                })}
              >
                deco@gmail.com
              </Typography>
            </Box>

            <Box
              data-aos="fade-up"
              data-aos-delay="900"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <PhoneIphoneIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: logoPrimaryColor,
                  borderRadius: '50%',
                  padding: '0.5rem',
                  marginRight: '1rem',
                }}
              />
              <Typography
                sx={(theme) => ({
                  textAlign: 'center',
                  ...theme.typography.body2,
                  fontFamily: 'Roboto',
                  color: 'text.primary',
                  cursor: 'default',
                  [breakpoints.up('md')]: {
                    ...theme.typography.body1,
                    fontFamily: 'Roboto',
                  },
                })}
              >
                +92 321 536 0015
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Stack data-aos="fade-up" data-aos-delay="700">
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            margin="normal"
            color="secondary"
            sx={{
              input: { color: 'text.primary' },
              label: { color: 'text.primary', opacity: 0.5 },
            }}
          />

          <Stack direction="row" gap={2}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="outlined"
              size="small"
              margin="normal"
              color="secondary"
              sx={{
                input: { color: 'text.primary' },
                label: { color: 'text.primary', opacity: 0.5 },
              }}
            />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              margin="normal"
              color="secondary"
              sx={{
                input: { color: 'text.primary' },
                label: { color: 'text.primary', opacity: 0.5 },
              }}
            />
          </Stack>

          <TextField
            id="standard-multiline-static"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter your message"
            color="secondary"
            margin="normal"
            sx={{
              input: { color: 'textPrimary' },
            }}
          />
        </Stack>
      </Stack>

      <button
        data-aos="fade-up"
        data-aos-delay="900"
        style={{ backgroundColor: logoPrimaryColor }}
        className="mt-8 border border-black rounded-lg py-2 px-4 hover:scale-110 ease-in duration-100"
      >
        Submit
      </button>
    </Stack>
  );
};

export default ContactSection;
