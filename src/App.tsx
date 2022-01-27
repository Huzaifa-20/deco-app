import { Typography, Grid } from '@material-ui/core';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { logoPrimaryColor, logoSecondaryColor } from './style/theme';
import './App.css';

const useStyles = makeStyles((theme) => ({
  introSectionStyle: {
    height: '100vh',
    background: theme.palette.secondary.main,
  },
  h2: {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h1,
    },
  },
  subtitle2: {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.subtitle1,
    },
  },
  decoTagLine: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}));

function App() {
  const classes = useStyles();
  return (
    // Grid container for Heading and Tag line //
    <Grid
      container
      className={classNames(classes.introSectionStyle)}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* Grid item for Heading */}
      <Grid item>
        <Typography classes={{ h2: classes.h2 }} variant="h2">
          <span style={{ color: logoPrimaryColor }}>De</span>
          <span style={{ color: logoSecondaryColor }}>Co</span>
        </Typography>
      </Grid>

      {/* Grid container for two-liner Tag line */}
      <Grid
        container
        className={classNames(classes.decoTagLine)}
        alignItems="center"
        justifyContent="center"
      >
        {/* Grid item for first half of Tag line */}
        <Grid item justifyContent="flex-end" alignItems="flex-end">
          <Typography
            classes={{ subtitle2: classes.subtitle2 }}
            variant="subtitle2"
            color="textSecondary"
            align="center"
          >
            &lt;
            <span style={{ color: logoPrimaryColor }}>De</span>
            signing your vision &amp;&nbsp;
          </Typography>
        </Grid>

        {/* Grid item for second half of Tag line */}
        <Grid item>
          <Typography
            classes={{ subtitle2: classes.subtitle2 }}
            variant="subtitle2"
            color="textSecondary"
            align="center"
          >
            <span style={{ color: logoSecondaryColor }}>Co</span>
            ding it to life/&gt;
          </Typography>
        </Grid>
      </Grid>

      {/* Grid container for memojis */}
      <Grid
        container
        className={classNames(classes.decoTagLine)}
        alignItems="center"
        justifyContent="center"
      >
        {/* Grid item for Yumna's memoji */}
        <Grid item justifyContent="flex-end" alignItems="flex-end">
          <Avatar
            alt="Y"
            src="./resources/huzaifaMemoji.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        {/* Grid item for Huzaifa's memoji */}
        <Grid item justifyContent="flex-end" alignItems="flex-end">
          <Avatar
            alt="H"
            src="./resources/huzaifaMemoji.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
