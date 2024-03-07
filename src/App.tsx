import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./App.css";
import { Avatar, Container, styled } from "@mui/material";
import { useState } from "react";

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
`;

const Footer = styled("footer")`
  position: relative;
  width: 100%;
  margin-top: 250px;
  padding: 20px 0;
  text-align: center;
`;

const personals = [
  {
    name: "Personal 1",
    description: "Descrição do Personal 1",
    image: "/path/to/personal1.jpg",
    city: "São Paulo",
  },
  {
    name: "Personal 2",
    description: "Descrição do Personal 2",
    image: "/path/to/personal2.jpg",
    city: "Rio de Janeiro",
  },
  {
    name: "Personal 3",
    description: "Descrição do Personal 3",
    image: "/path/to/personal3.jpg",
    city: "Curitiba",
  },
];

function App() {
  const [search, setSearch] = useState("");

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
            Find Your Personal
          </HeaderTitle>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid className="content" style={{ height: "100vh" }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              fontWeight="600"
            >
              Personal <br />
              Trainers
            </Typography>
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: "100%", maxWidth: "500px" }}
              label="Digite sua cidade"
              variant="standard"
            />
          </Grid>
        </Grid>

        {/* Grid dos profissionais */}
        <Grid container spacing={3}>
          {personals
            .filter((personal) =>
              personal.city.toLowerCase().includes(search.toLowerCase())
            )
            .map((personal, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "black",
                      width: 56,
                      height: 56,
                      margin: "0 auto 10px",
                    }}
                    alt={personal.name}
                    src={personal.image}
                  />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {personal.name}
                  </Typography>
                  <Typography component="p">{personal.description}</Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer>
        <Typography variant="body1" component="p" color="primary" gutterBottom>
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
      </Footer>
    </div>
  );
}

export default App;
