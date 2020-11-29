import StrToStation from "./StrToStation";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function App() {
  console.log("< App >")
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="default">
        <Typography variant="h6">React.js</Typography>
      </AppBar>
      <Container>
        <StrToStation />
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  appbar: {
    minHeight: "10vh",
    marginBottom: "5vh",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default App;
