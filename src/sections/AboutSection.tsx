import { Box, Stack } from '@mui/material';
import yumna from '../resources/yumna.jpg';
import huzaifa from '../resources/huzaifa.jpg';
import SectionHeading from '../components/SectionHeading';
import { flexCenterStyle, sectionContainerStyle } from './sectionStyles';
import AboutCards from '../components/AboutCards';

const AboutSection = () => (
  // About section container //
  <Box
    sx={{
      ...flexCenterStyle,
      ...sectionContainerStyle,
    }}
    id="About"
  >
    {/* About heading */}
    <SectionHeading heading="About" />

    <Stack gap={{ xs: 3, sm: 5 }}>
      <AboutCards
        memberIcon={yumna}
        memberDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          perferendis rerum debitis fugiat a, culpa ut cupiditate ab nesciunt
          dolores, modi id illum commodi quae tenetur quibusdam, error suscipit
          nobis."
        reverse={false}
        memberName="Yumna"
      />

      <AboutCards
        memberIcon={huzaifa}
        memberDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          perferendis rerum debitis fugiat a, culpa ut cupiditate ab nesciunt
          dolores, modi id illum commodi quae tenetur quibusdam, error suscipit
          nobis."
        reverse
        memberName="Huzaifa"
      />
    </Stack>
  </Box>
);

export default AboutSection;
