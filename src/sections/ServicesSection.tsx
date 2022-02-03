import {
  Box, Stack, Grid, useTheme,
} from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import WorkCard from '../components/WorkCard';
import { workFlow } from '../components/helper';

const ServicesSection = () => {
  const { breakpoints } = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        borderWidth: '1rem',
        borderColor: 'text.secondary',
        backgroundColor: 'primary.main',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="Services"
    >
      <SectionHeading heading="Services" />

      <Stack
        direction="row"
        sx={{
          marginTop: '1rem',
          [breakpoints.up('md')]: {
            marginTop: '2rem',
          },
        }}
        spacing={{ md: 15, sm: 10, xs: 2 }}
      >
        <ServiceCard service="Designer" />
        <ServiceCard service="Coder" />
      </Stack>

      <Grid
        container
        justifyContent="center"
        gap={{ xs: 2, sm: 3, md: 5 }}
        sx={{
          marginTop: '1rem',
        }}
      >
        {workFlow.map((obj, index) => (
          <WorkCard step={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
