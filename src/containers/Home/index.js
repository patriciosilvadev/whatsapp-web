import { Box, Container, TextField, Grid, colors } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";

const Home = (props) => {
  const [whatsAppId, setWhatsappId] = useState("019992323");
  const [greetingRowAmount, setGreetingRowAmount] = useState(7);
  return (
    <Box height="100%" width="100%" display="flex">
      <Box
        boxShadow={10}
        height="90%"
        // width="50%"
        p={3}
        m={3}
        display="flex"
        //   wrap="nowrap"
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
          spacing={2}
          justify="stretched"
          width="100%"
          style={{ margin: 10 }}
        >
          <Grid item xs={12}>
            <b>WhatsApp #{whatsAppId}</b>
          </Grid>
          <Grid item xs={12}>
            <TextField
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
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
