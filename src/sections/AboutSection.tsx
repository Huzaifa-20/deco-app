import {
  Box,
  Stack,
  Grid,
  Typography,
  Card,
  useTheme,
  CardMedia,
} from '@mui/material';
import yumna from '../resources/yumna.jpg';
import huzaifa from '../resources/huzaifa.jpg';
import { logoPrimaryColor } from '../style/theme';

const AboutSection = () => {
  const { breakpoints } = useTheme();
  return (
    // About section container //
    <Box
      sx={{
        height: '100vh',
        width: '100wv',
        borderWidth: '1rem',
        borderColor: 'text.secondary',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {/* About heading */}
      <Stack sx={{ marginTop: '1rem' }}>
        <Typography
          sx={(theme) => ({
            textAlign: 'center',
            ...theme.typography.h4,
            color: 'text.primary',
            transition: 'all 0.2s',
            cursor: 'default',
            [breakpoints.up('sm')]: {
              ...theme.typography.h3,
            },
          })}
        >
          About
        </Typography>
        <Box
          sx={{
            width: '5rem',
            height: '3px',
            backgroundColor: logoPrimaryColor,
          }}
        />
      </Stack>

      {/* Responsive grid to hold image cards and text */}
      <Grid
        container
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          order={1}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: '280px',
              borderRadius: '10px',
              [breakpoints.up('md')]: {
                maxWidth: '345px',
              },
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={yumna}
              sx={{ backgroundColor: '#000000' }}
            />
          </Card>
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
            sx={(theme) => ({
              textAlign: 'justify',
              ...theme.typography.body2,
              color: 'text.primary',
              transition: 'all 0.2s',
              cursor: 'default',
              [breakpoints.up('md')]: {
                ...theme.typography.body1,
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
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: '280px',
              borderRadius: '10px',
              [breakpoints.up('md')]: {
                maxWidth: '345px',
              },
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={huzaifa}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
