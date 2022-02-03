import React from 'react';
import { Grid, Box, useTheme } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../components/helper';
import ProjectCard from '../components/ProjectCard';

const PortfolioSection: React.FC = () => {
  const { breakpoints } = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        borderWidth: '1rem',
        borderColor: 'text.secondary',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      id="Portfolio"
    >
      <SectionHeading heading="Portfolio" />

      <Grid
        container
        spacing={{ xs: 2 }}
        sx={{
          marginTop: '2rem',
          [breakpoints.up('md')]: {
            paddingLeft: '2rem',
            paddingRight: '2rem',
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
