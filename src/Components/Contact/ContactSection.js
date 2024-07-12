import { Container, TextField, Button, Typography, Box } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          // bgcolor: "#2d2d2d",
          // color: "white",
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          margin="normal"
          InputProps={{  }}
          InputLabelProps={{  }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          margin="normal"
          InputProps={{  }}
          InputLabelProps={{ }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Message"
          multiline
          rows={4}
          margin="normal"
          InputProps={{  }}
          InputLabelProps={{  }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
}
