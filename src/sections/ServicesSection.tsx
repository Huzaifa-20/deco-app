import {
  Box, Stack, Grid, useTheme,
} from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import WorkCard from '../components/WorkCard';
import { workFlow } from '../components/helper';
import { flexCenterStyle, sectionContainerStyle } from './sectionStyles';

const ServicesSection = () => {
  const { breakpoints } = useTheme();

  return (
    <Box
      sx={{
        ...flexCenterStyle,
        ...sectionContainerStyle,
      }}
      id="Services"
    >
      <SectionHeading heading="Services" />

      <Stack
        direction="row"
        sx={{
          // marginBottom: '1rem',
          [breakpoints.up('md')]: {
            // marginBottom: '2rem',
          },
        }}
        spacing={{ md: 15, sm: 10, xs: 2 }}
      >
        <ServiceCard service="Designer" />
        <ServiceCard service="Coder" />
      </Stack>

      {/* <SectionHeading heading="Workflow" /> */}

      <Grid container justifyContent="center" gap={{ xs: 2, sm: 3, md: 5 }}>
        {workFlow.map((obj, index) => (
          <WorkCard step={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
