import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Home from './components/Home'
import ArticleDetails from './components/Articles/ArticleDetails'
import ContactPage from './components/ContactPage'

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function navigate(route){
    window.location.href = route
  }
  return (
    <BrowserRouter>
      <AppBar position="static" style={{backgroundColor: "rgb(54, 54, 54)"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => navigate("/article/create")}>Create article</MenuItem>
            <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
          </Menu>
          <Typography variant="h6">
            YeahMorningNews
          </Typography>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Home}/>
      <Route exact path="/article/:id" component={ArticleDetails}/>
      <Route exact path="/contact" component={ContactPage}/>
    </BrowserRouter>
  );
}

export default App;
