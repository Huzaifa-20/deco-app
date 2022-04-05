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
        memberDesc="Hey there! Being the lead UI/UX engineer here at DeCo, I will be sitting down with you, making sure that your idea is brought to life in the best, most aesthetically appealing form. So, have an idea? Lets talk! "
        reverse={false}
        memberName="Yumna"
      />

      <AboutCards
        memberIcon={huzaifa}
        memberDesc="DeCo developer at your service! Being an avid coder with a passion for providing seamless user experience, I always strive to create state-of-the-art, easy to use and aesthetically pleasing user interfaces. I believe my soft and technical skills coupled with my focused work ethic would serve you well!"
        reverse
        memberName="Huzaifa"
      />
    </Stack>
  </Box>
);

export default AboutSection;
