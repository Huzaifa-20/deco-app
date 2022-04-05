import React from 'react';
import {
  Stack, Box, Button, useTheme, TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SectionHeading from '../components/SectionHeading';
import { logoPrimaryColor, logoSecondaryColor } from '../style/theme';
import { flexCenterStyle, sectionContainerStyle } from './sectionStyles';
import { StyledText } from '../style/GlobalStyles';
import IconText from '../components/IconText';

const ContactSection: React.FC = () => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      sx={{
        ...flexCenterStyle,
        ...sectionContainerStyle,
      }}
      id="Contact"
    >
      <SectionHeading heading="Contact Us" />
      <Box>
        <StyledText
          data-aos="zoom-out"
          data-aos-delay="600"
          sx={{
            textAlign: 'start',
            [breakpoints.down(650)]: {
              fontSize: '0.9rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          Thanks for taking the time to reach out. How can we help you?
        </StyledText>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={{ xs: 1, sm: 2, md: 15 }}
          sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'start',
            [breakpoints.down('sm')]: {
              marginTop: '1rem',
              alignItems: 'center',
            },
          }}
        >
          <Box data-aos="fade-up" data-aos-delay="700">
            <Stack
              sx={{
                [breakpoints.down('sm')]: {
                  width: '90%',
                  marginTop: '-1rem',
                },
                [breakpoints.down(415)]: {
                  width: '100%',
                },
              }}
            >
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="outlined"
                size="small"
                margin="normal"
                color="primary"
                sx={{
                  input: { color: 'text.primary' },
                  label: { color: 'text.primary', opacity: 0.8 },
                }}
              />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                gap={{ xs: 0, sm: 1, md: 2 }}
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  color="primary"
                  sx={{
                    input: { color: 'text.primary' },
                    label: { color: 'text.primary', opacity: 0.8 },
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  color="primary"
                  sx={{
                    input: { color: 'text.primary' },
                    label: { color: 'text.primary', opacity: 0.8 },
                  }}
                />
              </Stack>

              <TextField
                id="standard-multiline-static"
                variant="outlined"
                multiline
                rows={3}
                placeholder="Enter your message"
                color="primary"
                margin="normal"
                sx={{
                  input: { color: 'text.primary' },
                }}
              />

              <Box
                sx={{
                  width: '100%',
                  [breakpoints.down('sm')]: {
                    display: 'flex',
                    justifyContent: 'center',
                  },
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    width: '6rem',
                    color: '#000000',
                    background: logoPrimaryColor,
                    zIndex: 1,
                    marginTop: '1.25rem',
                    '&:hover': {
                      background: logoSecondaryColor,
                      color: '#ffffff',
                    },
                    [breakpoints.down('sm')]: {
                      marginTop: '0.5rem',
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Stack>
          </Box>

          <Stack
            direction={{ xs: 'row', sm: 'column' }}
            gap={2}
            sx={{
              marginTop: '1.5rem',
              [breakpoints.down('sm')]: {
                marginTop: '1rem',
              },
            }}
          >
            <IconText Icon={LocationOnIcon} text="Islamabad, Pakistan" />
            <IconText Icon={EmailIcon} text="deco@gmail.com" />
            <IconText Icon={PhoneIphoneIcon} text="+92 321 536 0015" />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ContactSection;
