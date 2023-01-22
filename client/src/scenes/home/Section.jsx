import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import logo from '../logo/logo.png';

function Section() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box
      marginTop="70px"
      padding="50px 0"
      textAlign="center"
      backgroundColor={neutral.light}
    >
      <img src={logo} alt="Logo" height={60} />
    </Box>
  );
}

export default Section;
