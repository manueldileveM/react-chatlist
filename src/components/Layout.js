import React from 'react';
import { useMediaQuery, Box } from '@mui/material';
import HeaderMain from './HeaderMain';

const Layout = ({ left, right, headerRight }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <HeaderMain />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} height="calc(100vh - 64px)">
        {/* Sidebar visibile solo se non mobile oppure se non siamo nella chat */}
        <Box
          width={isMobile ? '100%' : '30%'}
          borderRight={isMobile ? 'none' : '1px solid #ccc'}
          bgcolor="#fff"
          sx={{ display: isMobile && right ? 'none' : 'block' }}
        >
          {left}
        </Box>

        {/* Chat */}
        <Box flex={1} display="flex" flexDirection="column">
          {isMobile && headerRight}
          <Box flex={1}>{right}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
