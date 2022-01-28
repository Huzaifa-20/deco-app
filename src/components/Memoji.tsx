import React from 'react';
import { Avatar } from '@mui/material';

interface MemeProps {
  source: string;
  borderColor: string;
}

const Memoji: React.FC<MemeProps> = ({ source, borderColor }) => (
  <Avatar
    srcSet={source}
    alt="Y"
    sx={{
      width: 200,
      height: 200,
      borderRadius: '50%',
      borderWidth: '2px',
      borderColor,
    }}
  />
);

export default Memoji;
