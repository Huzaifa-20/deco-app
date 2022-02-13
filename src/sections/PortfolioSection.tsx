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
        spacing={{ xs: 2 }}
        sx={{
          [breakpoints.up('md')]: {
            paddingX: '2rem',
          },
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            data-aos="fade-up"
            data-aos-delay={100 * index}
            xs={4}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: ' center',
            }}
          >
            <ProjectCard projectId={index} project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default PortfolioSection;
