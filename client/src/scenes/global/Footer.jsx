import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';
import logo from '../logo/logo.svg';

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box
      marginTop="70px"
      padding="40px 0"
      backgroundColor={neutral.light}
    >
      <Box>
        <img src={logo} alt="Logo" height={60} />
      </Box>
    </Box>
  );
}

export default Footer;
