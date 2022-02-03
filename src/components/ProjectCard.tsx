import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import { ProjectDetails } from './helper';
// import { logoSecondaryColor } from '../style/theme';

interface ProjectCardProps {
  projectId: number;
  project: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId, project }) => {
  const { breakpoints } = useTheme();

  return (
    <div className="ease-in duration-300 hover:scale-105">
      <Card
        data-aos="fade-up"
        data-aos-delay={100 * projectId + 500}
        sx={{
          maxWidth: '300px',
          borderRadius: '10px',
          [breakpoints.up('md')]: {
            maxWidth: '380px',
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
    </div>
  );
};

export default ProjectCard;
