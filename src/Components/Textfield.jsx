import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const Textfield = () => {
  return (
    <div className="textfield-div">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div id="text-field">
          <TextField
            id="firstname-textarea"
            label="First Name"
            placeholder="First Name"
            variant="filled"
          />
          <TextField
            id="firstname-textarea"
            label="Last Name"
            placeholder="Last name"
            variant="filled"
          />
          <TextField
            id="firstname-textarea"
            label="Address"
            placeholder="Address"
            variant="filled"
          />
          <TextField
            id="firstname-textarea"
            label="Which Cat"
            placeholder="Cat"
            variant="filled"
          />
<Button id="formButton" variant="contained">Submit</Button>
        </div>
      </Box>
    </div>
  );
};

export default Textfield;
