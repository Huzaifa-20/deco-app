import { Box, Stack } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { flexCenterStyle, sectionContainerStyle } from './sectionStyles';

const ServicesSection = () => (
  <Box
    sx={{
      ...flexCenterStyle,
      ...sectionContainerStyle,
    }}
    id="Services"
  >
    <SectionHeading heading="Services" />

    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        marginBottom: '2rem',
      }}
      spacing={{ xs: 3, sm: 1, md: 2 }}
    >
      <ServiceCard service="Designer" />
      <ServiceCard service="Coder" />
    </Stack>
  </Box>
);
export default ServicesSection;
