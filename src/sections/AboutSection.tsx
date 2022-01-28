import {
  Box,
  Stack,
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
    <Box
      sx={{
        height: '100vh',
        width: '100wv',
        borderWidth: '1rem',
        borderColor: 'text.secondary',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* About heading */}
      <Stack sx={{ marginBottom: '8rem' }}>
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
      <Stack direction="row" gap={10} sx={{ alignItems: 'center' }}>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: '10px',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={yumna}
          />
        </Card>
        <Typography
          sx={(theme) => ({
            maxWidth: '250px',
            textAlign: 'justify',
            ...theme.typography.body2,
            color: 'text.primary',
            transition: 'all 0.2s',
            cursor: 'default',
            [breakpoints.up('sm')]: {
              ...theme.typography.body1,
            },
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero
          necessitatibus natus eos sapiente? Cumque sint porro doloribus odit
          possimus, ab maxime laudantium natus similique repellendus, illum
          quaerat! Quibusdam, fuga! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis est molestias praesentium architecto ullam! Non
          facilis impedit omnis officia, consectetur necessitatibus, maiores
          exercitationem nostrum velit dolores soluta. Eveniet, assumenda
          quibusdam?
        </Typography>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: '10px',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={huzaifa}
          />
        </Card>
      </Stack>
    </Box>
  );
};

export default AboutSection;
