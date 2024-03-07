import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./App.css";
import { Box, Button, Container, Divider, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Contrast } from "@mui/icons-material";

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
`;

const Footer = styled("footer")`
  height: 50vh;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const personals = [
  {
    name: "Jose Alfrade",
    description: "Descrição do Personal 1",
    image:
      "https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/ig:avif/f:best/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg",
    city: "Sao Paulo",
    rating: "4.8",
  },
  {
    name: "Maria Alfrade",
    description: "Descrição do Personal 2",
    image:
      "https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/ig:avif/f:best/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg",
    city: "Rio de Janeiro",
    rating: "4.0",
  },
  {
    name: "Tome Alfrade",
    description: "Descrição do Personal 3",
    image:
      "https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/ig:avif/f:best/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg",
    city: "Curitiba",
    rating: "4.2",
  },
  {
    name: "Maria Jose",
    description: "Descrição do Personal 3",
    image:
      "https://mlbtbcqppupm.i.optimole.com/cb:II15~5a0ea/w:724/h:483/q:90/ig:avif/f:best/https://blog.newtonpaiva.br/wp-content/uploads/2020/09/iStock-692173084.jpg",
    city: "Curitiba",
    rating: "4.1",
  },
];

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function normalizeString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getDarkMode(darkMode: boolean) {
  return darkMode ? "primary" : "secondary";
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div className="background-image">
      <AppBar style={{ height: "80px" }} color={getDarkMode(darkMode)}>
        <Toolbar>
          <HeaderTitle variant="h6">
            <img
              src="/logo192.png"
              alt="Logo"
              className="img-logo"
              style={{ height: "25px", marginRight: "10px" }}
            />
            Find Your Trainer
          </HeaderTitle>
          {/* change theme */}
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            <Contrast />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid className="content" style={{ height: "60vh" }}>
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
          {debouncedSearch &&
            personals
              .filter((personal) =>
                normalizeString(personal.city).includes(
                  normalizeString(debouncedSearch)
                )
              )
              .map((personal, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: darkMode ? "black" : "white",
                    }}
                  >
                    <img
                      src={personal.image}
                      alt={personal.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    {/* ratings */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      {personal.rating}
                    </Box>
                    <Typography
                      color={getDarkMode(darkMode)}
                      variant="h4"
                      component="h3"
                      gutterBottom
                      paddingLeft={2}
                      paddingTop={2}
                    >
                      {personal.name}
                    </Typography>
                    <Typography
                      color={getDarkMode(darkMode)}
                      variant="subtitle2"
                      component="h4"
                      paddingLeft={2}
                      gutterBottom
                    >
                      {personal.description}
                    </Typography>
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
