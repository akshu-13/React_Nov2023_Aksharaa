import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
//import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fname: data.get("fname"),
      lname: data.get("lname"),
      mobile:data.get("mobile"),
      email: data.get("email"),
      password: data.get("password"),
      cpassword: data.get("cpassword"),
    });
  };

  
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 19,
        }}
      >
        <Grid container sx={{ backgroundColor: '#61dafb' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://www.home-designing.com/wp-content/uploads/2021/10/industrial-living-room.jpg)",
              
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "700px",
              backgroundPosition:"cover",
              
              
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={9}
            right
            >
            <Box
              sx={{
                my: 2,
                mx: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                
                
              }}
            >
              <Typography component="h1" variant="h5" >
                Sign Up!
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
                
              >
                
                <TextField 
                  margin="normal"
                  required
                  
                  name="fname"
                  label="FirstName"
                  id="fname"
                  

                />
                <TextField
                  margin="normal"
                  required
                  
                  name="lname"
                  label="LastName"
                  id="lname"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  />
                  <br></br>
                <TextField
                  margin="normal"
                  required
                  
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              
                <TextField
                  margin="normal"
                  required
                  
                  name="cpassword"
                  label="ConfirmPassword"
                  type="password"
                  id="cpassword"
                  autoComplete="current-password"
                />
                <br></br>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained" 
                  
                  sx={{ mt: 3, mb: 2 } }
                  component={Link} to={"/hp"}>
                  Sign Up
                  {/* <Link href="/hp" variant="body2" component={Link} to={"/hp"}>
                      {"Sign Up"}
                    </Link> */}
                </Button>
                <Grid container >
                <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                </Grid>
                  <Grid item>
                    <Link href="/Login" variant="body2" component={Link} to={"/Login"}>
                      {"Existing user? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}