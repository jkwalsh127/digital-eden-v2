import photo from '../../images/btc-bot.png';
import Legend from './Legend.js';
import { Box, Container } from '@mui/material';

export default function heroSmallScreen() {

    return (
  
      <Box className='hero-container'>
        <img className="image-show" src={photo} alt="hero" />
        <Container className='legend-container'>
          <Legend />
        </Container>
      </Box>
  
      );
  };
