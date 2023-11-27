import InstagramIcon from '@mui/icons-material/Instagram';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { AppBar, Box, Button, Container, Grid, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';



const Homepage = () => {
  

  const headingStyles = {
    color: '#0B0D0E', 
    textAlign: 'center',
    marginBottom: '20px',
  };
  
    
    const buttonStyle={
      background:"#8F2719",
    };
    

  const searchStyles = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    marginLeft: '10px',
  };

  const inputStyles = {
    flex: 1,
    marginLeft: '10px',
    border: 'none',
    outline: 'none',
  };

  const upperHeaderStyles = {
    backgroundColor: '#ddd', 
    padding: '10px', 
    textAlign: 'center',
    borderBottom: '1px solid #ccc', 
    width: '100%', 
  };

  const imageStyle = {
    maxWidth: '80%',
    borderRadius: '10px',
  };
  const gallerySectionStyle = {
    background: '#AA4A3E', // Gradient color
    padding: '70px',
    
    textAlign: 'center',
    color: 'white', 
  };

  const galleryBoxStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
    backgroundColor:'#AA4A3E',
  };

  const footerStyles = {
    backgroundColor: '#8F2719', 
    color: '#FFFFFF',
    padding: '40px 0',
    borderRadius: '0 0 8px 8px',
    textAlign: 'center',
  };
  const iconStyles = {
    marginRight: '10px',
    color: '#fff',
  };


  const [anchorElCategory, setAnchorElCategory] = React.useState(null);
  const [anchorElCities, setAnchorElCities] = React.useState(null);

  const handleClickCategory = (event) => {
    setAnchorElCategory(event.currentTarget);
  };

  const handleCloseCategory = () => {
    setAnchorElCategory(null);
  };

  const handleClickCities = (event) => {
    setAnchorElCities(event.currentTarget);
  };

  const handleCloseCities = () => {
    setAnchorElCities(null);
  };
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  }); 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      formData,
      [name]: value,
    });
  };

  return (
    <body>
      
    <Box sx={{  minHeight: '100vh' }}>
      <Box sx={upperHeaderStyles}>
      <AppBar position="static"  sx={{background:"#8F2719"}}>
          <Toolbar>
            <MapsHomeWorkRoundedIcon/>
        
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Home Renovation
            </Typography>
          <Button color='inherit' component={Link} to={"/faq"}>
            <SupportAgentRoundedIcon/>
            Support
            </Button>
            <Button   variant="h3"component={Link} to={"/Login"} color="inherit">Login</Button>
            {/* <Button   variant="h3"component={Link} to={"/signup"} color="inherit">Sign Up</Button> */}

          </Toolbar>
        </AppBar>
      </Box>

      
      <Box sx={{ ...upperHeaderStyles, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton> 
        <Button    color="inherit" component={Link} to={"/jp"} >
          <h3>Join Us</h3>
          </Button>
          <Button    color="inherit"component={Link} to={"/rp"} >
          <h3>Refer and Earn</h3>
          </Button>
          
          
          <Button color="inherit" aria-controls="category-menu" aria-haspopup="true" onClick={handleClickCategory}>
            <h3>Categories^</h3>
          </Button>
          <Menu
            id="category-menu"
            anchorEl={anchorElCategory}
            open={Boolean(anchorElCategory)}
            onClose={handleCloseCategory}>
            <MenuItem onClick={handleCloseCategory}>Bed Room</MenuItem>
            <MenuItem onClick={handleCloseCategory}>Bath Room</MenuItem>
            <MenuItem onClick={handleCloseCategory}>Living Room</MenuItem>
            <MenuItem onClick={handleCloseCategory}>Wardrobe</MenuItem>
            <MenuItem onClick={handleCloseCategory}>Smart Space</MenuItem>
            <MenuItem onClick={handleCloseCategory}>Work Studio</MenuItem>
          </Menu>
          <Button color="inherit" aria-controls="cities-menu" aria-haspopup="true" onClick={handleClickCities}>
            <h3>Cities^</h3>
          </Button>
          <Menu
            id="cities-menu"
            anchorEl={anchorElCities}
            open={Boolean(anchorElCities)}
            onClose={handleCloseCities}>
            {/* Dropdown list for Cities */}
            <MenuItem onClick={handleCloseCities}>Mumbai</MenuItem>
            <MenuItem onClick={handleCloseCities}>Coimbatore</MenuItem>
            <MenuItem onClick={handleCloseCities}>Chittoor</MenuItem>
            <MenuItem onClick={handleCloseCities}>Chennai</MenuItem>
            <MenuItem onClick={handleCloseCities}>Salem</MenuItem>
            <MenuItem onClick={handleCloseCities}>Guruvayoor</MenuItem>
            {/* Add more cities as needed */}
          </Menu>
        
          <Button   variant="h3" color="inherit" component={Link} to={"/gp"}><h3>Gallery</h3></Button>
        </Typography>
        <Box sx={searchStyles}>
          <IconButton size='small'>
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search keywords" sx={inputStyles} />
        </Box>
      </Box>

  
      
    <Box>
<div className='welc'>
        <Typography variant="h2" sx={headingStyles} gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="h5" align="center" paragraph sx={headingStyles}>
          Explore our services and transform your home into the space of your dreams
        </Typography>
        <Container>
        <Box
          sx={{
            border: '1px solid #C7DFF7',
            borderRadius: '30px',
            borderWidth:'8px',
            borderColor:'#FBFCFE',
            padding: '10px',
            marginBottom: '10px',
            
            
          }}
        >

          <h1 >Meet  a designer</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          style={{ marginBottom: '20px', padding: '20px' }}/>
        <input
          type="text"
          name="lastName"
          placeholder="Email"
          value={formData.lastName}
          onChange={handleInputChange}
          style={{ marginBottom: '20px', padding: '20px' }}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Pincode"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={{ marginBottom: '20px', padding: '20px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
          <Button sx={buttonStyle} variant="contained"  size="large" component={Link} to={"/st"}>
            Get Started
          </Button>
        </div>
      </form>
      </Box>
      </Container>
      </div>
      </Box>
      

    </Box>

    <Box sx={gallerySectionStyle}>
        <Container>
          <Grid container spacing={4}>
                        {/* Box 3 */}
                        <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit" >
                <img src="https://www.homelane.com/blog/wp-content/uploads/2021/11/shutterstock_1696350793.jpg" alt="GalleryImage3" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Living Room</h1>
          
                </Typography>
            </Grid>
             {/* Box 4 */}
          <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit" >
                <img src="https://img.edilportale.com/product-thumbs/b_CLOSET-ESTEL-GROUP-374876-rel14fbc2c6.jpg" alt="GalleryImage3" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Wardrobe</h1>
                </Typography>
            </Grid>
            {/* Box 1 */}
            <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit" >
                <img src="https://www.oppeinhome.com/upload/images/ueditor/20230619/best-master-bedroom-ideas-for-your-home-2.webp" alt="GalleryImage1" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Bed Room</h1>
                </Typography>
            </Grid>
        

                    
             {/* Box 2 */}
            <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit" >
                <img src="https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2021/11/Best-Interior-Design-Trends-for-and-Exquisite-Bathroom-Design-4.jpg" alt="GalleryImage2" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Bath Room</h1>
                
                </Typography>
            </Grid>

            {/* Box 5 */}
            <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit" >
                <img src="https://www.thelifestyle-files.com/wp-content/uploads/2018/04/small-space-design-tips-800x534.jpg" alt="GalleryImage3" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Compact Homes</h1>
                </Typography>
            </Grid>
            {/* Box 6 */}
            <Grid item xs={14} md={6}>
              <Button sx={galleryBoxStyle} variant="contained" color="inherit">
                <img src="https://www.thespruce.com/thmb/qAB6pLlOZI2vcPMFdsmNwuBsMNc=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/stylish-small-home-offices-4154965-hero-fa934dbe22a043ba8274b3fc3f897091.jpg" alt="GalleryImage3" style={imageStyle} />
              </Button>
                <Typography variant="body2" color="inherit">
                  <h1>Work Studio</h1>
                </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <hr></hr>

    <Box sx={gallerySectionStyle}>
        <Container>
          
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://as1.ftcdn.net/v2/jpg/01/64/00/62/1000_F_164006289_4k2DyPf2C6jEjN8QqtriuMoWCr7mnAah.jpg" alt="GalleryImage1" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                 <h1>Build your Dream Home!</h1>
                <p>Fresh start ? We got you! Build ur new house with your own personal team!</p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://media.istockphoto.com/id/1384317531/photo/before-and-after-of-man-painting-roller-to-reveal-newly-remodeled-room-with-fresh-light-green.jpg?s=612x612&w=0&k=20&c=wF448uWLu7btrsbZedGiIHqHbeu6KxA-YxZOiTkfcMY=" alt="GalleryImage2" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                  <h1>Transform your Home!</h1>
                 <p>Give the perfect makeover to your home and make it unrecognisable with us!</p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://vection-cms-prod.s3.eu-central-1.amazonaws.com/Adobe_Stock_510870433_42ecfa2359.jpeg" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h1>Bring your ideas to Life!</h1>
                  <p>Share your dream home ideas with is to make them come alive!</p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={footerStyles}>
    <Typography variant="body2">
         {/* Social media icons with links */}
         <IconButton href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon sx={iconStyles} />
        </IconButton>
        <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={iconStyles} />
        </IconButton>
        <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={iconStyles} />
        </IconButton>
    <p>Contact : +91 9326581362</p>
    <p>Mail us : homerenovationtech@gmail.com</p>
    <p> © 2023 Renovation Plaform. All rights reserved.</p>
      
    </Typography>
  </Box>
    </body>
  );
};

export default Homepage;