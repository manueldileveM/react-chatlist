import React from 'react';
import { useMediaQuery, Box } from '@mui/material';
import HeaderMain from './HeaderMain';

const Layout = ({ left, right, headerRight }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <HeaderMain />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} height="calc(100vh - 64px)">
        {!isMobile && <Box width="30%" borderRight="1px solid #ccc" bgcolor="#fff">{left}</Box>}
        <Box flex={1} display="flex" flexDirection="column">
          {isMobile && headerRight}
          <Box flex={1}>{right}</Box>
        </Box>
        {isMobile && !right && <Box>{left}</Box>}
      </Box>
    </Box>
  );
};

export default Layout;