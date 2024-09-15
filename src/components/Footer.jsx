import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material'; // Import the icons

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#ffb703'>
      <Stack gap="20px" alignItems="center" px="20px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="220px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by{' '}
          <span aria-label="img">👩‍💻</span>{' '}
          <a
            href="mailto:abdelhamidmouloudi2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fefae0' }}
          >
            Abdelhamid MOULOUDI
          </a>{' '}
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/abdelhamid--mouloudi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fefae0', marginLeft: '10px' }}
          >
            <LinkedIn fontSize="large" />
          </a>{' '}
          {/* GitHub Icon */}
          <a
            href="https://github.com/Abdelhamid-Mouloudi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fefae0', marginLeft: '10px'}}
          >
            <GitHub fontSize="large" />
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
