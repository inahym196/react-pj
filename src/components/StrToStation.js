import React, { useState ,useRef ,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function StrToStation() {
  console.log("< StrToStation >");

  // == def Styles
  const classes = useStyles();

  // == def useStates
  const [inputVal, setInputVal] = useState("");
  const [ajaxVal, setAjaxVal] = useState({
    kanji: "",
    hira: "",
    isLoaded: false,
    error: false,
  });

  // == def useRefs
  const prevInputValRef = useRef();
  useEffect(()=>{
    prevInputValRef.current = inputVal;
  })
  const prevInputVal = prevInputValRef.current;

  // == Trigger functions
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  function handleClick() {
    
    const url = "https://react-pj-backend.herokuapp.com/api/v1/tostation";
    const method = "POST";

    if (inputVal !== "" && inputVal !== prevInputVal) {
      setAjaxVal({
        ...ajaxVal,
        kanji: "Loading...",
        hira: "Loading...",
        isLoaded: false,
        error: false,
      });

      fetch(url, { method })
        .then((response) => response.json())
        .then(
          (json) => {
            setAjaxVal({
              ...ajaxVal,
              kanji: json["kanji"],
              hira: json["hira"],
              isLoaded: true,
            });
            console.log("complate");
          },
          (error) => {
            setAjaxVal({ ...ajaxVal, error: true, isLoaded: true });
          }
        );
    }
  }

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
                name="input"
                variant="outlined"
                placeholder="input"
                multiline
                rows={6}
                fullWidth
                value={inputVal}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Button
                name="button"
                onClick={handleClick}
                variant="outlined"
                size="small"
                color="primary"
              >
                button
              </Button>
            </Box>
          </Box>
          <Box>
            <TextField
              id="eki_kanji"
              name="kanji"
              inputProps={{
                readOnly: true,
              }}
              variant="filled"
              placeholder="eki_kanji"
              multiline
              fullWidth
              value={ajaxVal.kanji}
            />
            <TextField
              id="eki_hira"
              name="hira"
              inputProps={{
                readOnly: true,
              }}
              variant="filled"
              placeholder="eki_hira"
              multiline
              fullWidth
              value={ajaxVal.hira}
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
