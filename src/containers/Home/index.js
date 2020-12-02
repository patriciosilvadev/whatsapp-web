import { Box, TextField, Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import CommandCard from "../../components/CommandCard";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import AddIcon from "@material-ui/icons/Add";

const Home = (props) => {
  const whatsAppID = "01927326";
  const greetingRowAmount = 7;
  const [startingText, setStartingText] = useState("");
  const [commandCardList, setCommandCardList] = useState([]);

  // Colors
  const accent = teal[600];
  const buttonSaveColor = green[300];

  const addCommand = () => {
    const updatedCommandCardList = commandCardList.concat({
      command: "",
      reply: "",
    });
    setCommandCardList(updatedCommandCardList);
  };

  const handleDeleteCommand = (removedIndex) => {
    const updatedCommandCardList = commandCardList.filter(
      (element, index) => index !== removedIndex
    );
    console.log(removedIndex);
    console.log(updatedCommandCardList);
    setCommandCardList(updatedCommandCardList);
  };

  const handleCommandTextChange = (changedCommandIndex, commandText) => {
    const updatedCommandCardList = commandCardList.map((element, index) => {
      if (changedCommandIndex === index)
        return { command: commandText, reply: element.reply };
      return element;
    });
    setCommandCardList(updatedCommandCardList);
  };

  const handleReplyTextChange = (changedReplyIndex, replyText) => {
    const updatedCommandCardList = commandCardList.map((element, index) => {
      if (changedReplyIndex === index)
        return { command: element.command, reply: replyText };
      return element;
    });
    setCommandCardList(updatedCommandCardList);
  };

  const handleStartingTextChange = (e) => {
    const newStartingText = e.target.value;
    setStartingText(newStartingText);
  };

  const renderCommands = () => {
    const commands = commandCardList.map((element, index) => (
      <Grid item xs={12}>
        <CommandCard
          id={index}
          onDeleteCommand={handleDeleteCommand}
          onCommandTextChange={handleCommandTextChange}
          onReplyTextChange={handleReplyTextChange}
        />
      </Grid>
    ));
    return commands;
  };

  const handleSave = () => {
    // console.log(commandCardList);
    // console.log(
    //   JSON.stringify({ startingMessage: "", commands: commandCardList })
    // );
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startingMessage: startingText,
        commands: commandCardList,
      }),
    };
    fetch(
      "https://azriel-whatsapp-api.herokuapp.com/post-commands",
      requestOptions
    ).then((response) => console.log(response.json()));
  };

  return (
    <Box
      height={200}
      width="100%"
      style={{
        margin: 0,
        position: "absolute",
        backgroundColor: accent,
      }}
    >
      <Box
        boxShadow={10}
        borderRadius={16}
        width="55%"
        p={3}
        m={3}
        display="flex"
        alignItems="flex-start"
        style={{
          position: "absolute",
          backgroundColor: "white",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          width="100%"
          style={{ margin: 10 }}
        >
          <Grid item xs={12}>
            <b>WhatsApp #{whatsAppID}</b>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => handleStartingTextChange(e)}
              InputLabelProps={{ shrink: true }}
              fullWidth={true}
              id="outlined-multiline-static"
              label="Starting text of the bot menu"
              multiline
              rows={greetingRowAmount}
              defaultValue=""
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            Command list
          </Grid>
          {renderCommands()}

          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => addCommand()}
              color="black"
              startIcon={<AddIcon />}
            >
              ADD MORE COMMAND
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={() => handleSave()}
              variant="contained"
              style={{ backgroundColor: buttonSaveColor }}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
