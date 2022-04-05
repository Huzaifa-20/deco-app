import React from 'react';
import { Grid, Box, useTheme } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../components/helper';
import ProjectCard from '../components/ProjectCard';
import { flexCenterStyle, sectionContainerStyle } from './sectionStyles';

const PortfolioSection: React.FC = () => {
  const { breakpoints } = useTheme();
  return (
    <Box
      sx={{
        ...flexCenterStyle,
        ...sectionContainerStyle,
      }}
      id="Portfolio"
    >
      <SectionHeading heading="Portfolio" />

      <Grid
        container
        gap={3}
        sx={{
          width: '95%',
          justifyContent: 'center',
          [breakpoints.down('lg')]: {
            width: '100%',
          },
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            data-aos="fade-up"
            data-aos-delay={100 * index}
            sm={5}
            md={3}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: ' center',
            }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default PortfolioSection;
