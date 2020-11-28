import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Eki from "../images/eki2.jpg";
import Button from "@material-ui/core/Button";

function StrToStation() {
  const classes = useStyles();
  //<CardMedia className={classes.media} image={Eki} />
  return (
    <Card>
      <CardHeader
        className={classes.header}
        title="駅名変換ツール"
        subheader="日本語の文字列を駅名に変換します"
      />

      <CardContent>
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column">
            <Box>
              <TextField
                id="input"
                variant="outlined"
                placeholder="input"
                multiline
                rows={6}
                fullWidth
              />
            </Box>
            <Box>
              <Button variant="outlined" size="small" color="primary">
                button
              </Button>
            </Box>
          </Box>
          <Box >
            <TextField
              id="eki_kanji"
              inputProps={{
                readOnly: true,
              }}
              variant="filled"
              placeholder="eki_kanji"
              multiline
              rows={1}
              fullWidth
            />
            <TextField
              id="eki_hira"
              inputProps={{
                readOnly: true,
              }}
              variant="filled"
              placeholder="eki_hira"
              multiline
              rows={1}
              fullWidth
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.info.light,
  },
  media: {
    height: "50vh",
    margin: "0 20vh",
  },
  text: {
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default StrToStation;
