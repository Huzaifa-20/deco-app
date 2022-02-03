import {
  Box, Grid, Typography, useTheme,
} from '@mui/material';
import yumna from '../resources/yumna.jpg';
import huzaifa from '../resources/huzaifa.jpg';
import SectionHeading from '../components/SectionHeading';
import ImageCard from '../components/ImageCard';

const AboutSection = () => {
  const { breakpoints } = useTheme();

  return (
    // About section container //
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
      id="About"
    >
      {/* About heading */}
      <SectionHeading heading="About" />

      {/* Responsive grid to hold image cards and text */}
      <Grid
        container
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginTop: '2rem',
        }}
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          order={1}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <ImageCard path={yumna} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          order={{ xs: 3, sm: 3, md: 2 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            data-aos="zoom-out"
            data-aos-delay="500"
            sx={(theme) => ({
              textAlign: 'justify',
              ...theme.typography.body2,
              fontFamily: 'Roboto',
              color: 'text.primary',
              transition: 'all 0.2s',
              cursor: 'default',
              [breakpoints.up('md')]: {
                ...theme.typography.body1,
                fontFamily: 'Roboto',
              },
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            vero necessitatibus natus eos sapiente? Cumque sint porro doloribus
            odit possimus, ab maxime laudantium natus similique repellendus,
            illum quaerat! Quibusdam, fuga! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis est molestias praesentium
            architecto ullam! Non facilis impedit omnis officia, consectetur
            necessitatibus, maiores exercitationem nostrum velit dolores soluta.
            Eveniet, assumenda quibusdam?
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          order={{ xs: 2, sm: 2, md: 3 }}
          sx={{
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <ImageCard path={huzaifa} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
