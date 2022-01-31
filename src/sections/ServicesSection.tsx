import { Box, Stack } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import WorkCard from '../components/WorkCard';
import { workFlow } from '../components/helper';

const ServicesSection = () => (
  <Box
    sx={{
      height: '100vh',
      borderWidth: '1rem',
      borderColor: 'text.secondary',
      backgroundColor: 'primary.main',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SectionHeading heading="Services" />

    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ marginTop: '1rem', marginBottom: '1rem' }}
      gap={2}
    >
      <ServiceCard service="Designer" />
      <ServiceCard service="Coder" />
    </Stack>

    <SectionHeading heading="Workflow" />
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      gap={3}
      sx={{ marginTop: '1rem' }}
    >
      {workFlow.map((obj, index) => (
        <WorkCard step={index} />
      ))}
    </Stack>
  </Box>
);

export default ServicesSection;
