import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

const footerStyles = {
  backgroundColor: '#8F2719',
  color: '#FFFFFF',
  padding: '40px 0',
  textAlign: 'center',
};

 const imageStyle = {
  maxWidth: '80%',
  borderRadius: '10px',
};

const gallerySectionStyle = {
  background: '#AA4A3E',
  padding: '70px',
  textAlign: 'center',
  color: 'white',
};

 const galleryBoxStyle = {
  maxWidth: '100%',
   marginBottom: '20px',
  backgroundColor: '#AA4A3E',
 };

const iconStyles = {
  marginRight: '10px',
  color: '#fff',
};

const GalleryPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       <Box sx={footerStyles}>
        <Container>
        <MapsHomeWorkRoundedIcon/>
        
          <h1>Welcome to our Family!</h1>
         
        </Container>
      </Box> 
      

      <Box sx={{ flexGrow: 1 }} /> {/* This pushes the footer to the bottom */}
      
      <Box sx={gallerySectionStyle}>
        <Container>
            <div>
            <h2>Thankyou for resigtering with HomeTech Renovation!</h2><br></br>
            <img src="https://www.howlifeunfolds.com/sites/default/files/styles/teaser/public/2019-02/ThankYouNote.png?itok=S281OAy8" alt="GalleryImage3" style={imageStyle} />

          <h2>Our team will get back to your registered mobile number  or mail shortly!</h2><br></br><br></br> 
         <h3> In the meantime feel free to look at our catalogue of designs in the home page if you are looking for new inspirations for your home! For any further queries or support kindly reach out to the support team who will get back to you within 24hours!<br></br><br></br>
          Get massive discounts by referring HomeTech Renovation to your friends and family too (Terms and conditions apply)</h3>
          </div>
           </Container>
      </Box>
      <hr></hr>
      <Box sx={gallerySectionStyle}>
        <Container>
          
                <h1>Meet our top designers!</h1><br></br>
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://media.istockphoto.com/id/1213781338/photo/digital-artist-working-at-home.jpg?s=612x612&w=0&k=20&c=wQNu-R17vs7WpytV9xq6IUZjCvvav76IsZOa-vJ3vJw=" alt="GalleryImage1" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                 <h2>Person 1</h2>
               
                </Typography>
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://media.istockphoto.com/id/1350738308/photo/young-office-worker-woman-with-laptop-looking-at-camera.jpg?s=612x612&w=0&k=20&c=2DBar5Le-az2Yh63kO2soZOWb013fodti9KoUg1Y-_g=" alt="GalleryImage2" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                  <h2>Person 2</h2>
                
                </Typography>
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://blog.hubspot.com/hs-fs/hubfs/interior-design-websites%20%281%29.jpg?width=595&height=400&name=interior-design-websites%20%281%29.jpg" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h2>Person 3</h2>
                 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://www.hatch-mag.com/wp-content/uploads/2016/08/chad-q-martin.jpg" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h2>Person 4</h2>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://gripdesign.com/wp-content/uploads/2020/04/how-to-hire-a-graphic-designer-rh-2018.jpg" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h2>Person 5</h2>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://flatironschool.com/legacy-assets/images.ctfassets.net/hkpf2qd2vxgx/2rqz7Gsw0ybH74KIsg9E5u/65896a0f1896d5bb5e68e62583442c12/image3.png" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h2>Person 6</h2>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


      <Box sx={footerStyles}>
        <Container>
          <Typography variant="body2">
            <IconButton href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon sx={iconStyles} />
            </IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={iconStyles} />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon sx={iconStyles} />
            </IconButton>
            <p>Contact: +91 9326581362</p>
            <p>Mail us: homerenovationtech@gmail.com</p>
            <p>© 2023 Renovation Platform. All rights reserved.</p>
          </Typography>
        </Container>
      </Box>
    </Box>
    

  );
};

export default GalleryPage;
