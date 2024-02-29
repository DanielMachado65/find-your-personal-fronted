import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./App.css";
import { Box, Container, styled } from "@mui/material";

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function App() {
  return (
    <div className="background-image">
      <AppBar style={{ height: "80px" }} color="primary">
        <Toolbar>
          <HeaderTitle variant="h6">
            <img
              src="/logo192.png"
              alt="Logo"
              className="img-logo"
              style={{ height: "25px", marginRight: "10px" }}
            />
            Find your Personal
          </HeaderTitle>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid
          container
          className="container"
          style={{ height: "100vh" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom align="center">
              Personal Trainer
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" justifyContent="center">
              <TextField
                sx={{ width: "100%", maxWidth: "500px" }}
                label="Pesquisar..."
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Grid dos profissionais */}
        <Grid container spacing={3}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                style={{ padding: "20px", textAlign: "center" }}
              >
                <Typography variant="h5" component="h3">
                  Personal {index + 1}
                </Typography>
                <Typography component="p">Detalhes do Personal</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <footer>
          <Typography
            variant="body1"
            component="p"
            color="primary"
            gutterBottom
          >
            Desenvolvido com{" "}
            <span role="img" aria-label="coração">
              ❤️
            </span>{" "}
            por{" "}
            <a
              href="https://www.linkedin.com/in/daniel-machado-pintos/"
              target="_blank"
              rel="noreferrer"
            >
              Daniel Machado
            </a>
          </Typography>
        </footer>
      </Container>
    </div>
  );
}

export default App;
