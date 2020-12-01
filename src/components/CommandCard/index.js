import {
  Button,
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import DeleteIcon from "@material-ui/icons/Delete";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: grey[50],
    },
  },
});

const CommandCard = (props) => {
  const { commandIndex } = props;
  const [type, setType] = useState("Text message");
  const commandTypes = [
    { type: "Text message" },
    { type: "Picture" },
    { type: "Video" },
    { type: "Audio" },
  ];
  const accent = grey[100];

  return (
    <Card style={{ backgroundColor: accent }}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
        spacing={5}
        style={{ padding: 20 }}
      >
        <Grid item xs={6}>
          <TextField
            required
            InputLabelProps={{ shrink: true }}
            fullWidth={true}
            id="outlined-multiline-static"
            label="Command"
            defaultValue={commandIndex}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="simple-select-label">Select command type*</InputLabel>
          <Select
            displayEmpty
            required
            labelId="simple-select-label"
            id="simple-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            {commandTypes.map((element, index) => (
              <MenuItem value={index}>{element.type}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} display="flex">
          <TextField
            display="flex"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            id="outlined-multiline-static"
            label="Message text"
            defaultValue=""
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2.5} display="flex">
          <Button color="secondary" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CommandCard;
