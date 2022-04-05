import React from 'react';
import {
  Card, CardMedia, CardContent, useTheme,
} from '@mui/material';
import { ProjectDetails } from './helper';
import { StyledText } from '../style/GlobalStyles';

interface ProjectCardProps {
  project: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { breakpoints } = useTheme();

  return (
    <Card
      sx={{
        maxWidth: '80%',
        borderRadius: '10px',
        zIndex: '1',
        [breakpoints.down('lg')]: {
          maxWidth: '100%',
        },
        [breakpoints.down('sm')]: {
          maxWidth: '320px',
        },
        [breakpoints.down(410)]: {
          maxWidth: '100%',
        },
        transition: 'ease-in all 0.1s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia component="img" image={project.image} />
      <CardContent>
        <StyledText
          sx={{
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: '500',
            [breakpoints.down(650)]: {
              fontSize: '1.125rem',
            },
          }}
        >
          {project.name}
        </StyledText>
        <StyledText
          sx={{
            textAlign: 'center',
            [breakpoints.down(650)]: {
              fontSize: '0.9rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          {project.detail}
        </StyledText>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
