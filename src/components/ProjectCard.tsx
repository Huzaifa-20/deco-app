import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import { ProjectDetails } from './helper';

interface ProjectCardProps {
  project: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { breakpoints } = useTheme();

  return (
    <Card
      data-aos="fade-up"
      sx={{
        maxWidth: '100%',
        borderRadius: '10px',
        zIndex: '1',
        [breakpoints.up('sm')]: {
          maxWidth: '80%',
        },
        transition: 'ease-in all 0.1s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={project.image}
      />
      <CardContent>
        <Typography
          sx={(theme) => ({
            ...theme.typography.body2,
            fontFamily: 'Roboto',
            [breakpoints.up('md')]: {
              ...theme.typography.h6,
              fontWeight: '500',
              textAlign: 'center',
            },
            [breakpoints.up('sm')]: {
              ...theme.typography.body1,
            },
          })}
        >
          {project.name}
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.body2,
            fontFamily: 'Roboto',
            fontSize: '0.685rem',
            textAlign: 'left',
            [breakpoints.up('md')]: {
              ...theme.typography.body2,
              textAlign: 'center',
            },
            [breakpoints.up('sm')]: {
              fontSize: '0.75rem',
            },
          })}
        >
          {project.detail}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
