import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memoriesImg from "./images/memories.png";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Mamories
        </Typography>
        <img
          className={classes.image}
          src={memoriesImg}
          alt="Memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
