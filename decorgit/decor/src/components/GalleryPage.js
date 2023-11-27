import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

const footerStyles = {
  backgroundColor: '#8F2719',
  color: '#FFFFFF',
  padding: '40px 0',
  textAlign: 'center',
};

 const imageStyle = {
  maxWidth: '100%',
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
          <h1>Customer Gallery</h1>
         
        </Container>
      </Box>
      <Box sx={{ flexGrow: 1 }} /> {/* This pushes the footer to the bottom */}
      
      <Box sx={gallerySectionStyle}>
        <Container>
          
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://st.hzcdn.com/simgs/pictures/dining-rooms/traditional-dining-room-user-img~e7c1f3dc002c026a_14-8608-1-30dfb6e.jpg" alt="GalleryImage1" style={imageStyle} />
               
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://interiordesign.net/wp-content/uploads/2023/10/Interior-Design-DeMuro-Das-New-Delhi-DeMuro-Das-5_Credit-Ishita-Sitwala-1024x694.jpg" alt="GalleryImage2" style={imageStyle} />
               
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://lh3.googleusercontent.com/b_lgOF9Wpz6BCk84PwIvifkjKJ57RmOytb4gI8pR4WnBzvQiXfh6OharoqvnR1AdL1cHyW4sZ0BQ29YtUrqxblsVT0RJ5dl8YK959bIWicSGoidhsCGC_uNkhMG1fLYrWHLRMVso=s0" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_16078_20201005102018.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://www.asenseinterior.com/assets/uploads/catalogue_category_hd_image_361629353252.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://b1970648.smushcdn.com/1970648/wp-content/uploads/2018/11/IS_Washroom-image-1-1200x849.jpg?lossy=0&strip=1&webp=1" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689758643/catalog/1681566651109580800/fyzx59sdr5emw99xyusa.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://4.imimg.com/data4/GD/KQ/MY-12557723/studio-interiors-500x500.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/walk-in-wardrobe-scaled.jpg?bwg=1639982273" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://www.designcreative.sg/wp-content/uploads/2016/08/work-area-1.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://s.hdnux.com/photos/01/34/22/75/24194885/3/1200x0.jpg" alt="GalleryImage3" style={imageStyle} />
               
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://boldoutline.in/wp-content/uploads/2021/10/Web-cover-12.jpg" alt="GalleryImage3" style={imageStyle} />
               
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
