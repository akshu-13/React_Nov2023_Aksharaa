import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
//import { Link } from 'react-router-dom';
import { Typography, Table, Box,TableBody,Container, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton } from '@mui/material';
import './JoinUsPage.css';
const jobPositions = [
  {
    id: 1,
    title: 'Construction Worker',
    description: 'Responsible for various tasks in construction and renovation projects.',
    location: 'Anywhere',
  },
  {
    id: 2,
    title: 'Interior Designer',
    description: 'Design interior spaces for homes, considering aesthetics and functionality.',
    location: 'Remote',
  },
  {
    id: 3,
    title: 'Architect',
    description: 'Design  and draw interior  and exterior spaces for homes, considering aesthetics.',
    location: 'Remote',
  },
  {
    id: 4,
    title: 'Project Manager',
    description: 'Handle the smooth workflow of the construction for customer satisfaction.',
    location: 'Anywhere',
  },
  {
    id: 5,
    title: 'Projet Lead',
    description: 'Handle the smooth workflow of the construction for customer satisfaction.',
    location: 'Anywhere',
  },
 
  // Add more job positions as needed
];
const iconStyles = {
  marginRight: '10px',
  color: '#fff',
};
const footerStyles = {
    backgroundColor: '#8F2719', // Change the footer background color as needed
    color: '#FFFFFF',
    padding: '5px 0',
    borderRadius: '0 0 8px 8px',
    textAlign: 'center',
  };
const JoinUsPage = () => {
  return (
    <Box>
    <div>
      <Typography variant="h4" align="center" gutterBottom>
      <Box sx={footerStyles}>
        <Container>
          <h1>Available Job Positions</h1>
         
        </Container>
      </Box>
        
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h3>ID</h3></TableCell>
              <TableCell><h3>Title</h3></TableCell>
              <TableCell><h3>Description</h3></TableCell>
              <TableCell><h3>Location</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobPositions.map((position) => (
              <TableRow key={position.id}>
                <TableCell>{position.id}</TableCell>
                <TableCell>{position.title}</TableCell>
                <TableCell>{position.description}</TableCell>
                <TableCell>{position.location}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='jup'>
      <Typography variant="h4" align="center" gutterBottom>
      <Box sx={footerStyles}>
        <Container>
          <h1>Application and eligibility</h1>
         
        </Container>
      </Box>
        
      </Typography>
      
      <h4>If you are qualified and interested in joining us kindly connect with us through social media or the email Id or the contact number given at the bottom of the main page!.</h4>
      <h2>Requirements</h2>
      <p>
     <h4>
       Qualification Requirements for Interior Designing and Architecture Positions
      </h4>
      

To be eligible for roles in the field of interior designing and architecture, candidates typically need a bachelor's or master's degree in interior design, architecture, or a related field from an accredited institution.<br></br> A solid understanding of design principles, spatial planning, and architectural concepts is fundamental. <br></br>Proficiency in industry-standard software like AutoCAD, SketchUp, Revit, and Adobe Creative Suite is often required.<br></br>
Applicants should demonstrate a strong portfolio showcasing their design projects, emphasizing creativity, problem-solving skills, and attention to detail. <br></br>Excellent communication skills are essential, enabling effective collaboration with clients, team members, and contractors.<br></br> Additionally, familiarity with building codes, regulations, and sustainable design practices is highly valued.<br></br>

Candidates with relevant internships or work experience in design firms, architecture studios, or related industries stand out.<br></br> Professional certifications or memberships in organizations such as the American Society of Interior Designers (ASID) or the American Institute of Architects (AIA) can further bolster qualifications.<br></br>

Overall, a combination of academic background, technical proficiency, a robust portfolio, practical experience, and a passion for innovative design solutions are key factors contributing to eligibility and success in interior designing and architectural roles.
      </p>
      </div>
    </div>
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

export default JoinUsPage;
