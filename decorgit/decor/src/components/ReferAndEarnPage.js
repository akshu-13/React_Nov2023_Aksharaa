import { Box, Container, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';

const ReferAndEarnPage = () => {
  const referralLink = 'https://your-renovation-platform.com/referral';

  const handleShare = () => {
    
    console.log('Shared referral link:', referralLink);
  };

  const headerStyles = {
    backgroundColor: '#8F2719',
    color: '#FFFFFF',
    padding: '40px 0',
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    width: '100%',
  };

  const footerStyles = {
    backgroundColor: '#8F2719',
    color: '#FFFFFF',
    padding: '20px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  const contentStyles = {
    paddingTop: '120px', // Adjust padding to accommodate the header's height
    paddingBottom: '120px', // Adjust padding to accommodate the footer's height
  };

  const iconStyles = {
    marginRight: '10px',
    color: '#fff',
  };

  return (
    <Box>
      <Box sx={headerStyles}>
        <Container>
          <Typography variant="h4">Refer And Earn</Typography>
        </Container>
      </Box>

      <Box sx={contentStyles}>
        <Container maxWidth="md">
          <Typography variant="body1" paragraph><br></br>
            <h2>Invite your friends and family to join our home renovation and design platform and earn rewards!</h2>
          </Typography>
          <Divider sx={{ marginBottom: '20px' }} />
          <Grid container spacing={2} justifyContent="center">
            {/* Content Grid */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                <h4>Your Referral Link</h4>
              </Typography>
              <Typography variant="body1" paragraph>
                Share this link with others to invite them:
              </Typography>
              <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
                {referralLink}
              </Typography>
              <Button variant="outlined" onClick={handleShare} sx={{ marginTop: '20px' }}>
                Share Link
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                <h4>How it Works</h4>
              </Typography>
              <Typography variant="body1" paragraph>
                When someone signs up using your referral link and completes their first purchase, both you and
                your friend will receive exclusive discounts or rewards on our platform.
              </Typography>
              <Typography variant="body1">
                Start inviting friends and earn rewards for every successful referral!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={footerStyles}>
        <Container>
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
        </Container>
      </Box>
    </Box>
  );
};

export default ReferAndEarnPage;
