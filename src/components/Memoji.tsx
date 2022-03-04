import React from 'react';
import { Avatar, useTheme } from '@mui/material';

interface MemeProps {
  source: string;
  borderColor: string;
}

const Memoji: React.FC<MemeProps> = ({ source, borderColor }) => {
  const { breakpoints } = useTheme();
  return (
    <Avatar
      srcSet={source}
      alt="Y"
      sx={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        borderWidth: '2px',
        borderColor,

        [breakpoints.down('md')]: {
          width: 180,
          height: 180,
        },
        [breakpoints.down(750)]: {
          width: 140,
          height: 140,
        },
      }}
    />
  );
};
export default Memoji;
