import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';




export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
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
              backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/729/893/115/living-room-interior-design-picture-wallpaper-preview.jpg)",
              
              backgroundRepeat: "no-repeat",
              backgroundColor:"aquamarine",
                
              backgroundSize: "800px",
              backgroundPosition: "cover",
              
              
            }}
          />
          <Grid
            item
            xs={11}
            sm={8}
            md={5}
            component={Paper}
            elevation={10}
            square
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
              <Typography component="h1" variant="h5">
                Sign in!
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 0.5 }}
              >
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="UserName"
                  id="name"
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
                <TextField
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
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  component={Link} to={"/hp"}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2" component={Link} to={"/SignUp"}>
                      {"New here? Sign up now"}
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