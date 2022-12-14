import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Legend() {

    return (
  
      <div className="legend-grid">
        <div style={{ borderBottom: "1px solid #26c1d1" }}></div>
        <Box className='legend-list' >
            <Box className='legend-item'>
                <ArrowDropDown fontSize='large' color="legendRed"/>
                <Typography variant="legend">
                    = Close Long & Open Short
                </Typography>
            </Box>
            <Box className='legend-item'>
                <ArrowDropUp fontSize='large' color="legendBlue"/>
                <Typography variant="legend">
                    = Close Short & Open Long
                </Typography>
            </Box>
        </Box>
        <div style={{ borderBottom: "1px solid #26c1d1" }}></div>
      </div>
  
      );
  };