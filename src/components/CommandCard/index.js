import {
  Button,
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  ListItemIcon,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import DeleteIcon from "@material-ui/icons/Delete";
import MessageIcon from "@material-ui/icons/Message";
import React, { useState } from "react";

const CommandCard = ({
  id,
  onDeleteCommand,
  onCommandTextChange,
  onReplyTextChange,
}) => {
  const [type, setType] = useState("Text message");
  const commandTypes = [
    { type: "Text message" },
    { type: "Picture" },
    { type: "Video" },
    { type: "Audio" },
  ];
  const rowAmount = 3;

  // Colors
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
            onChange={(e) => {
              onCommandTextChange(id, e.target.value);
            }}
            required
            InputLabelProps={{ shrink: true }}
            fullWidth={true}
            id="outlined-multiline-static"
            label="Command"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel startAd id="simple-select-label">
            Select command type*
          </InputLabel>
          {/* <ListItemIcon> */}
          <MessageIcon alignItems="baseline"></MessageIcon>
          {/* </ListItemIcon> */}
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
            onChange={(e) => {
              onReplyTextChange(id, e.target.value);
            }}
            display="flex"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            id="outlined-multiline-static"
            label="Message text"
            defaultValue=""
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={2.5} display="flex">
          <Button
            onClick={() => onDeleteCommand(id)}
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CommandCard;
