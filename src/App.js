//import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import './assets/css/vendor/aos.css';
import homeImage from './assets/img/home.png';
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
//import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
  


//style={{ backgroundImage: `url(${homeImage})`

function App() {
  return (
    
    <div>

<AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            style={{
              marginRight: 20,
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
<div>
      

<div class="split left" style={{ backgroundImage: `url(${homeImage})`}} >
  <div class="centered">
    <h2>Jane Flex</h2>
    <p>Some text.</p>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h2>Sign Up to Pitch Coach</h2>
<p>Please fill in this form to create an account.

</p>
    <form noValidate>
      
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
            
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" 
                               color="primary" />}
            label="Remember me"
          />
            
          <Button type="submit" 
                  fullWidth variant="contained" 
                  color="primary"> 
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              
              <Link href="#" variant="body2"> 
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
   




  </div>
</div>



    </div>
    </div>
  );
}

export default App;
