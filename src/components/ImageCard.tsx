import React from 'react';
import { Card, CardMedia, useTheme } from '@mui/material';

interface ImageCardProps {
  path: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ path }) => {
  const { breakpoints } = useTheme();
  return (
    <Card
      data-aos="fade-up"
      data-aos-delay="500"
      sx={{
        maxWidth: '280px',
        borderRadius: '10px',
        [breakpoints.up('md')]: {
          maxWidth: '345px',
        },
      }}
    >
      <CardMedia component="img" alt="green iguana" height="140" image={path} />
    </Card>
  );
};

export default ImageCard;
