import photo from '../../images/btc-bot.png';
import Legend from './Legend.js';
import { Box } from '@mui/material';

export default function heroSmallScreen() {

    return (
  
      <Box className='hero-container'>
        <img className="image-show" src={photo} alt="hero" />
        <div>
          <Legend />
        </div>
      </Box>
  
      );
  };
