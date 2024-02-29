import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import "./App.css";
import styled from "styled-components";

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
              className="img-logo"
              src="/logo192.png"
              alt="Logo"
              style={{ height: "25px", marginRight: "10px" }}
            />
            Find your Personal
          </HeaderTitle>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Typography variant="h1" component="h1" gutterBottom>
          Personal Trainer
        </Typography>
        <div className="search-bar">
          <TextField fullWidth label="Pesquisar..." variant="outlined" />
        </div>
      </div>
    </div>
  );
}

export default App;
