import {
  Box,
  Container,
  TextField,
  Grid,
  colors,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import CommandCard from "../../components/CommandCard";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import AddIcon from "@material-ui/icons/Add";

const Home = (props) => {
  const [whatsAppId, setWhatsappId] = useState("019992323");
  const [greetingRowAmount, setGreetingRowAmount] = useState(7);
  const accent = teal[600];
  const buttonSaveColor = green[300];

  return (
    <Box
      height={200}
      width="100%"
      //   display="flex"
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
          // top: 0,
          backgroundColor: "white",
          // margin: 0,
        }}
      >
        <Grid
          container
          spacing={5}
          direction="row"
          justify="center"
          width="100%"
          style={{ margin: 10 }}
        >
          <Grid item xs={12}>
            <b>WhatsApp #{whatsAppId}</b>
          </Grid>
          <Grid item xs={12}>
            <TextField
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
          <Grid item xs={12}>
            <CommandCard />
          </Grid>
          <Grid item xs={12}>
            <CommandCard />
          </Grid>
          <Grid item xs={12}>
            <CommandCard />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button color="black" startIcon={<AddIcon />}>
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
