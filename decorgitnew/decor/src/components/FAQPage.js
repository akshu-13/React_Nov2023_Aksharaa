import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';

import './FAQPage.css';

const FAQPage = () => {
  const faqData = [
    // Your FAQ data...
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, MasterCard, American Express) and PayPal.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.'
    },
    {
      question: 'How to connect with us directly?',
      answer: 'You can connect with us using the details given at the end of the webpage or via email.'
    },
    {
      question: 'Should I pay all the amount beforehand?',
      answer: 'No!Not at all...connect with our desginers and discuss the terms and conditions and only after your satisfaction we proceed further!.'
    },
   {
      question: 'Do you provide personalized design consultations?',
      answer: 'Offer insights into whether the platform offers one-on-one consultations with designers or experts for personalized design advice.'
    },
   {
      question: 'What type of home renovation projects do you specialize in?',
      answer: 'Specify the specific areas of expertise or types of renovations the platform focuses on, such as kitchen remodeling, bathroom renovations, interior decoration, etc. '
    },
  {
      question: 'What happens if I encounter issues with the renovation or design process?',
      answer: 'Explain the platforms customer support system and procedures for addressing concerns or issues during the renovation or design phase.'
      
    },
  {
      question: 'Are the contractors or professionals vetted on your platform?',
      answer: 'Highlight the screening process for contractors, designers, or professionals working through the platform to ensure quality and reliability.'
    },
  
  ];

  const headerStyles = {
    backgroundColor: '#8F2719',
    color: '#FFFFFF',
    padding: '40px 0',
    borderRadius: '0 0 8px 8px',
    textAlign: 'center',
    width: '100%',
  };

  const iconStyles = {
    marginRight: '10px',
    color: '#fff',
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Box sx={headerStyles}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            FAQ and Support
          </Typography>
        </Container>
      </Box>
      
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <br/><br/>
          <Typography>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/925/316/small/faq-website-support-page-guides-page-frequently-asked-questions-or-questions-and-answers-client-or-customer-support-product-and-service-information-flat-modern-design-illustration-vector.jpg" alt="GalleryImage3" />
          </Typography>
          {faqData.map((item, index) => (
            <Accordion key={index} style={{ width: '100%', maxWidth: '100%' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          
          ))}
        </Container>
      
      <Box sx={headerStyles}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            {/* Your existing code for social icons and contact information */}
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
          <p>© 2023 Renovation Platform. All rights reserved.</p>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQPage;
