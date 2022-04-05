import React from 'react';
import { Box, SvgIcon, useTheme } from '@mui/material';
import { StyledText } from '../style/GlobalStyles';
import { logoPrimaryColor } from '../style/theme';

interface IconTextProps {
  text: String;
  Icon: typeof SvgIcon;
}

const IconText: React.FC<IconTextProps> = ({ text, Icon }) => {
  const { breakpoints } = useTheme();
  return (
    <Box
      data-aos="fade-up"
      data-aos-delay="700"
      sx={{
        display: 'flex',
        alignItems: 'center',
        [breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Icon
        sx={{
          width: '3rem',
          height: '3rem',
          backgroundColor: logoPrimaryColor,
          borderRadius: '50%',
          padding: '0.5rem',
          marginRight: '1rem',
          zIndex: '2',
          [breakpoints.down('md')]: {
            width: '2.25rem',
            height: '2.25rem',
            padding: '0.35rem',
            marginRight: '0.5rem',
          },
        }}
      />
      <StyledText
        sx={{
          [breakpoints.down(650)]: {
            fontSize: '0.9rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '0.8rem',
            textAlign: 'center',
          },
        }}
      >
        {text}
      </StyledText>
    </Box>
  );
};
export default IconText;
